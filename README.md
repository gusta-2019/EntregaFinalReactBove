# Nombre del Proyecto

Cosecha Divina - E-commerce de Vinos

![3](https://github.com/gusta-2019/EntregaFinalReactBove/assets/118360218/dec7e91a-99e6-430c-9c34-488a9b6a9132)


# Descripcion del Proyecto

Es un proyecto de e-commerce especializado en la venta de vinos tintos, blancos, dulces y espumantes. Ofrece a los usuarios la posibilidad de explorar una amplia variedad de productos vitivinícolas, ver detalles específicos de cada vino, y realizar compras de manera intuitiva.

## Tecnologías Utilizadas

- React.js
- Firebase (u otra base de datos, si aplica)
- vite 4.4.5
- Node.js

## Instalación

Asegúrate de tener Node.js y npm instalados antes de seguir los siguientes pasos.

1. Clona el repositorio:
2. Ingresa al directorio del proyecto:
    cd tuproyecto
3. Instala las dependencias:
    npm install
4. Inicia la aplicación en modo de desarrollo:
    npm run dev

# Componentes principales

    1. NavBar.jsx => Menú del ecommerce - Filtrado porcategorías
    2. CartWidget.jsx => Indica la cantidad de elementos que tenemos en el carrito
    3. ItemListContainer.jsx => Muestra el catalogo de productos llamados desde Firebase
    4. Item.jsx => El la Card de cada uno de los productos
    5. ItemList.jsx => Componente de presentacion que se encarga de listar los productos
    6. ItemCount.jsx => contador con botones para sumar la cantidad de un producto en  base al Stock disponible
    7. ItemDetailConainer.jsx => Se encarga del Detalle del Producto 
    8. ItemDetal.jsx => se encarga de presentacion encargado de visualizar los datos
    9. CartContext.jsx => MAntiene el estado de compra del usuario - Funcionalidades relacionadas al carrito de compras: 
        - Agregar un Producto al carrito (en un Estado de tipo Array)
        - Eliminar un Producto
        - Limpiar el Carrito
        - Informar si el producto fue agregado o no al Carrito
    10. CartView.jsx => Vista del Carrito - Muestra el desglose de los Items Agregados
    11. Checkout.jsx => Ruta que contiene la logica para crear la orden
    12. CheckoutForm.jsx => Formulario para enviar los datos del usuario. Muestra un mensaje con el Id de la Orden
