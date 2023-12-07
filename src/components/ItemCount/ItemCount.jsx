import styles from "./ItemCount.module.css"
import { useState } from 'react'

const ItemCount = ({initial, stock, onAdd})=> {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <div className={styles.counter}>
            <div className={styles.controls}>
                <button className={styles.btn} onClick={decrement}>-</button>
                <h4 className={styles.number}>{quantity}</h4>
                <button className={styles.btn} onClick={increment}>+</button>
            </div>
            <div>
                <button className={styles.btnprimary} onClick={() => {onAdd(quantity)}} disabled = {!stock}>
                    Agregar al Carrito
                </button>
            </div>
        </div>
    )
}
export default ItemCount