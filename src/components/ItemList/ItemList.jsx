import Item from '../Item/Item'

import styles from "./ItemList.module.css"

export default function ItemList({products}) {
  return (
    <div className={styles.ListGroup}>
        {products.map(prod => <Item key={prod.id} {...prod} />)}
    </div>
  )
}
