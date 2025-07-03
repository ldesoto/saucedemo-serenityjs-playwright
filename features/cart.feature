# language: es
Característica: Gestión del Carrito de Compras
  Como usuario autenticado
  Quiero agregar productos a mi carrito
  Para poder proceder con mi compra

  Antecedentes:
    Dado que el usuario está logueado en la página de productos

  Escenario: Agregar un producto al carrito
    Cuando agrega el producto "Sauce Labs Backpack" al carrito
    Entonces el carrito debería contener el producto "Sauce Labs Backpack"

  Escenario: Agregar múltiples productos al carrito
    Cuando agrega el producto "Sauce Labs Backpack" al carrito
    Y agrega el producto "Sauce Labs Bike Light" al carrito
    Entonces el carrito debería mostrar 2 productos
