# language: es
Característica: Proceso de Checkout
  Como usuario con productos en el carrito
  Quiero completar el proceso de checkout
  Para finalizar mi pedido

  Antecedentes:
    Dado que el usuario está logueado en la página de productos
    Y tiene productos en el carrito

  Escenario: Completar checkout exitosamente
    Cuando procede al checkout
    Y completa la información de checkout con:
      | firstName | lastName | postalCode |
      | John      | Doe      | 12345      |
    Entonces debería ver el mensaje de confirmación del pedido
