// Checkout.jsx
import styles from '../Checkout/Checkout.module.css'
import { collection, getDocs, query, where, writeBatch, addDoc, Timestamp, documentId} from "firebase/firestore"
import { db } from '../../firebase/client'

import CheckoutForm from '../CheckoutForm/CheckoutForm'
import { useState } from "react"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"



export default function Checkout() {

    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')

    const {cart, totalQuantity, clearCart} = useContext(CartContext)

    const createOrder = async ({name, phone, email}) => {
        setLoading(true)

        try {
            const objOrder = {
                buyer: {
                    name, phone, email
                },
                items: cart,
                total: totalQuantity,
                date: Timestamp.fromDate(new Date())
            }
            const batch = writeBatch(db)

            const outOfStock = []

            const ids = cart.map(prod => prod.id)

            const productsRef = collection(db, 'products')

            //const productsAddedFromFirestore = await getDocs(query(productsRef))

            //const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), '==', ids[0])))

            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))

            const { docs } = productsAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity})
                }else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })

            if(outOfStock.length === 0){
                await batch.commit()

                const orderRef = collection (db, 'orders')

                const orderAdded = await addDoc(orderRef, objOrder)

                setOrderId(orderAdded.id)
                clearCart()
            }else {
                console.error('Hay productos que estan fuera de stock')
            }

        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    if(loading) {
       return <h1>Se está generando su Orden...</h1> 
    }

    if(orderId){
        return <h1 className={styles.Orden}>El Id de su Orden es: {orderId}</h1>
    }

  return (
    <div className={styles.Box}>
        <h1>Checkout</h1>
        <CheckoutForm onConfirm={createOrder} />
    </div>
  )
}

