import styles from "./NavBar.module.css"
import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from "react-router-dom"

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <Link to='/'>
        <img className={styles.logo} src="../src/components/NavBar/img/3.png" alt="" />
      </Link>
      <div className={styles.navbarlogo}>
        <NavLink to = {`category/tinto`} className={styles.Option}>Tinos</NavLink>
        <NavLink to = {`category/blanco`} className={styles.Option}>Blancos</NavLink>
        <NavLink to = {`category/espumante`} className={styles.Option}>Espumantes</NavLink>
        <NavLink to = {`category/dulce`} className={styles.Option}>Dulces</NavLink>
      </div>
      <CartWidget/>
    </nav>  
  )
}
