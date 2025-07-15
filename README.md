# API-REST-PROYECTO-TT

<h4> Estudiante: Facundo Agustin Olivieri</h5>
<br>
<h5> Este proyecto es una API-REST hecha con nodejs, permite obtener, crear, borrar y modificar productos de una base de datos de firebase.</h5>
<h5> Ademas, permite el inicio de sesion como administrador para desbloquear la funcionabilidad completa de la api</h5>
<h5> Las operaciones que necesitan autorizacion son las de borrar, modificar y crear</h5>

<h3> Instrucciones de uso </h3>
<h5><ul>
  <ul>GET: 
    <br>
    <li>"/api/products" devolvera todos los productos de la base de datos</li>
    <li>"/api/products/search?categories={categorias}" devolvera productos que contengan las categorias dadas</li>
    <li>"/api/products/{id}" devolvera el producto cuya id sea "{id}"</li>
  </ul>
  <br>
  <ul>POST:
    <br>
    <li>"/auth/login", agregando en el body del request los datos de inicio de sesion, logea al usuario y le devuelve un token</li>
    <li>"/api/products/create" agrega un producto a la base de datos, requiere token valido de autorizacion</li>
  </ul>
  <br>
  <ul>PUT:
    <br>
    <li>"/api/products/{id}" edita el producto {id}, requiere token valido de autorizacion</li>
  </ul>
  <br>
  <ul>DEL:
    <br>
    <li>"/api/products/{id}" elimina el producto {id}, requiere token valido de autorizacion</li>
  </ul>
</ul></h5>
