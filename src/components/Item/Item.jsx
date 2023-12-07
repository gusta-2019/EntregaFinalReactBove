import styles from "./Item.module.css"
import { Link } from "react-router-dom"

export default function Item({id, winery, wine, location, image, category, price}) {
  return (
    
    <article className={styles.CardItem}>
            <header className={styles.Header}>
                <h2 className={styles.ItemHeader}>
                    {wine}
                </h2>
            </header>
            <picture>
                <img src={image} alt={winery} className={styles.ItemImg}/>
            </picture>
            <section>
                <p className={styles.Info}>
                    Bodega: {winery}
                </p>
                <p className={styles.Info}>
                    Precio: {price}
                </p>
            </section>
            <footer className={styles.ItemFooter}>
                <Link to = {`/item/${id}`} className={styles.Option}>Ver detalle</Link>
            </footer>
        </article>
        
  )
}
