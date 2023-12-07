import styles from './Cart.module.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'


 const Cart = () => {
    const {cart, clearCart, totalQuantity, total} = useContext ( CartContext )

    if (cart.length === 0) {
        return (
            <div className={styles.Noitems}>
                <h1>No hay items en el carrito</h1>
                <Link to = '/' className={styles.Option}>Ir a Productos</Link>
            </div>
        )
    }

// Calcular el total de los subtotales
    const totalSubtotals = cart.reduce((accumulator, item) => {
        return accumulator + item.price * item.quantity;
    }, 0);

    return (
        <div>
            <div>
                {cart.map((p) => (<CartItem key={p.id} {...p} />))}
            </div>
            <div className={styles.cardtotal}>
                <h3 className={styles.total}>Total: ${totalSubtotals}</h3>
                
            </div>
            <div className={styles.btn2}>
                <button onClick={() => clearCart()} className={styles.btn}>Limpiar Carrito</button>
                
            </div>
            <div className={styles.checkout}>
                <Link to = '/checkout' className={styles.Option}>Checkout</Link>
            </div>
        </div>
    )
}
export default Cart
