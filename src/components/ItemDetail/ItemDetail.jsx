import { useContext, useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import styles from "./ItemDetail.module.css"
import {Link} from 'react-router-dom'

import { CartContext } from "../../context/CartContext"

export default function ItemDetail({id, winery, wine, location, image, category, price, stock}) {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const {addItem} =useContext(CartContext)

    const handleOnAdd =(quantity) => {
      setQuantityAdded(quantity)

      const item = {
        id, wine, price
      }

      addItem(item, quantity)
    } 
  
  return (
        <article className={styles.CardItem}>
          <header className={styles.Header}>
            <h2 className={styles.ItemHeader}>
              {wine}
            </h2>
          </header>
          
      
          <section className={styles.data}>
          <picture>
            <img src={image} alt={winery} className={styles.ItemImg} />
          </picture>
          <div>
            <p className={styles.Info}>
              Bodega: {winery}
            </p>
            <p className={styles.Info}>
              Ubicacion: {location}
            </p>
            <p className={styles.Info}>
              Precio: ${price}
            </p>
            <p className={styles.Info}>
              Categoría: {category}
            </p>
            <p className={styles.Info}>
              Stock: {stock}
            </p>
          </div>
          </section>
          <footer className={styles.ItemFooter}>
            {
              quantityAdded > 0 ? (
                <Link to='/cart' className={styles.Option}>Terminar Compra</Link>
              ) : (
                <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
              )
            }
            
          </footer>
      </article>
      
    )
  }