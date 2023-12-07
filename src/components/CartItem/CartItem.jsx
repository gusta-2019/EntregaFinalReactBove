// CartItem.jsx


import styles from './CartItem.module.css' 
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartItem = ({ id, title, price, quantity, wine }) => {
    const { removeItem } = useContext(CartContext)
    
    const handleRemoveItem = () => {
        removeItem(id);
     
    }
    const total = price * quantity;
    

  return (
    <div className={styles.cartItem}>
      <div className={styles.cartprod}>
        <h3>{wine}</h3>
        <p>Precio: ${price}</p>
        <p>Cantidad: {quantity}</p>
        <p className={styles.stotal}>Subtotal: ${total}</p>
      </div>
      <button onClick={handleRemoveItem} className={styles.removeButton}>
        Eliminar
      </button>
    </div>
    
  );
};

export default CartItem

