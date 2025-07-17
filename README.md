# API-REST-STORE

<h4> Desarrollado por Facundo Agustin Olivieri, DNI: 44934218</h4>
<h5> API-REST hecha con nodejs, permite obtener, crear, borrar y modificar productos de una base de datos de firebase usando firestore. Ademas, permite el inicio de sesion como administrador para desbloquear la funcionabilidad completa de la api, las operaciones que necesitan autorizacion son las de borrar, modificar y crear</h5>
<h5> La api-rest esta desplegada en https://api-rest-store-phi.vercel.app/</h5>
<h3> Instrucciones de uso:</h3>
<h5><ul>
  <ul>GET:
    <li>"/api/products" devolvera todos los productos de la base de datos</li>
    <li>"/api/products/search?categories={categorias}" devolvera productos que contengan las categorias dadas. </li>
    <li>"/api/products/{id}" devolvera el producto cuya id sea "{id}"</li>
  </ul>
  <br>
  <ul>POST:
    <li>"/auth/login", agregando en el body del request los datos de inicio de sesion validos, le devuelve un token de autorizacion</li>
    <li>"/auth/register", agregando en el body del request los datos del usuario, crea una cuenta para poder iniciar sesion</li>
    <li>"/api/products/create" agrega un producto a la base de datos, requiere token valido de autorizacion</li>
  </ul>
  <br>
  <ul>PUT:
    <li>"/api/products/{id}" edita el producto "{id}", requiere token valido de autorizacion</li>
  </ul>
  <br>
  <ul>DEL:
    <li>"/api/products/{id}" elimina el producto "{id}", requiere token valido de autorizacion</li>
  </ul>
</ul></h5>
<h3> Instalacion:</h3>
<ol>
  <li>Clonar el repositorio</li>
  <li>Instalar con "npm install"</li>
  <li>Completar el archivo .env</li>
  <li>Ejecutar con "npm start"</li>
</ol>
<h3> Estructura de datos de usuario:</h3>
<h4>
  {
    "email":string
    "password":string
  }
</h4>
