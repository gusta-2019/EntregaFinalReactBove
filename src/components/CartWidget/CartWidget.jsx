//CartWidget.jsx

import cart from "./assets/cart.svg"
import styles from "../CartWidget/CartWidget.module.css"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

export default function CartWidget() {
  const { totalQuantity } = useContext ( CartContext )

  

  return (
    <Link to = '/cart' className= {styles.CartWidget} style = {{ display: totalQuantity > 0 ? 'block' : 'none'}}
    >
    
      <img className={styles.CartImg} src={cart} alt="cart-widget"></img>
       {totalQuantity}
    
    </Link>
    
  )
}
