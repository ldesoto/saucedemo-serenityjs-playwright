# language: es
Característica: Login de Usuario
  Como usuario de la aplicación SauceDemo
  Quiero poder iniciar sesión
  Para acceder a los productos disponibles

  Escenario: Login exitoso con credenciales válidas
    Dado que el usuario está en la página de login
    Cuando ingresa usuario "standard_user" y contraseña "secret_sauce"
    Entonces debería ver la página de productos

  Escenario: Login fallido con credenciales inválidas
    Dado que el usuario está en la página de login
    Cuando ingresa usuario "invalid_user" y contraseña "wrong_password"
    Entonces debería ver un mensaje de error
