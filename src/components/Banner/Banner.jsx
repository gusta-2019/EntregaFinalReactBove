import styles from "./Banner.module.css"
export default function Banner() {
  return (
    <div className={styles.banner}>
        <div className={styles.bannercontainer}>
            <h1>Tienda de bebidas</h1>
            <p>El Mejor almacen para encontrar tus bebidas</p>
        </div>
    </div>
  )
}
