# API-REST-STORE
-----

API REST hecha con Node.js que permite obtener, crear, borrar y modificar productos de una base de datos de Firebase usando Firestore. Además, permite el inicio de sesión como administrador para desbloquear la funcionalidad completa de la API. Las operaciones que necesitan autorización son las de borrar, modificar y crear.
La API REST está desplegada en **[https://api-rest-store-phi.vercel.app/](https://api-rest-store-phi.vercel.app/)**

-----

### Instrucciones de uso:

  * **GET:**

      * **"/api/products"**: devolverá todos los productos de la base de datos.
      * **"/api/products/search?categories={categorias}"**: devolverá productos que contengan las categorías dadas.
      * **"/api/products/{id}"**: devolverá el producto cuya ID sea "{id}".

  * **POST:**

      * **"/auth/login"**: agregando en el body del request los datos de inicio de sesión válidos, devuelve un token de autorización.
      * **"/auth/register"**: agregando en el body del request los datos del usuario, crea una cuenta para poder iniciar sesión.
      * **"/api/products/create"**: agrega un producto a la base de datos, requiere token válido de autorización.

  * **PUT:**

      * **"/api/products/{id}"**: edita el producto "{id}", requiere token válido de autorización.

  * **DEL:**

      * **"/api/products/{id}"**: elimina el producto "{id}", requiere token válido de autorización.

-----

### Instalación:

1.  Clonar el repositorio.
2.  Instalar con "npm install".
3.  Completar el archivo .env.
4.  Ejecutar con "npm start".

-----

### Estructura de datos de usuario:

```
{
  "email": string,
  "password": string
}
```

Desarrollado por Facundo Agustin Olivieri, DNI: 44934218
