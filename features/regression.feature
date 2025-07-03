# language: es
@regression
Característica: Suite de Pruebas de Regresión
  Como ingeniero de QA
  Quiero ejecutar una suite de regresión completa
  Para asegurarme de que toda la funcionalidad crítica funciona

  @smoke @login
  Escenario: Flujo crítico - Flujo completo de compra
    Dado que el usuario está en la página de login
    Cuando ingresa usuario "standard_user" y contraseña "secret_sauce"
    Entonces debería ver la página de productos
    Cuando agrega el producto "Sauce Labs Backpack" al carrito
    Y procede al checkout
    Y completa la información de checkout con:
      | firstName | lastName | postalCode |
      | John      | Doe      | 12345      |
    Entonces debería ver el mensaje de confirmación del pedido

  @regression @login
  Esquema del escenario: Login con diferentes tipos de usuario
    Dado que el usuario está en la página de login
    Cuando ingresa usuario "<username>" y contraseña "<password>"
    Entonces debería ver "<result>"

    Ejemplos:
      | username                | password     | result           |
      | standard_user          | secret_sauce | products page    |
      | locked_out_user        | secret_sauce | error message    |
      | problem_user           | secret_sauce | products page    |
      | performance_glitch_user| secret_sauce | products page    |
      | error_user             | secret_sauce | products page    |
      | visual_user            | secret_sauce | products page    |
      | invalid_user           | wrong_pass   | error message    |

  @regression @cart
  Escenario: Regresión de funcionalidad del carrito
    Dado que el usuario está logueado en la página de productos
    Cuando agrega el producto "Sauce Labs Backpack" al carrito
    Y agrega el producto "Sauce Labs Bike Light" al carrito
    Entonces el carrito debería mostrar 2 productos
    Cuando remueve el producto "Sauce Labs Backpack" del carrito
    Entonces el carrito debería mostrar 1 productos
