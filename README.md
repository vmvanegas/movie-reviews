# Reviews

Movies Reviews es una app desarrollada con Angular 8 que te permite:

  - Obtener un listado de las ultimas reseñas
  - Ver los detalles de cada reseña
  - Filtrar por titulo de reseña

## Installation and run
  1. Ejecuta el comando en consola `npm install` para instalar todos los paquetes
  2. Ejecuta el comando `ng serve` para iniciar la aplicacion

## Components 

  - movies-Review:
    Este componente tiene como funcion mostrar una lista de todas las reseñas disponibles
  - navigation:
    Es una barra de navegacion con un campo de busqueda para filtrar las reseñas por titulo
  - review-details:
    Te muestra una vista con detalles completos de una review
  - review:
    Item de la lista del componente **movies-review** que te permite ver algunos detalles de esta misma

## Services
  - review-details.service:
    clase de tipo servicio que ejecuta la funcion **getReviewDetails()** la cual obtiene una respuesta del web service con una unica review 
  - reviews.service:
    clase de tipo servicio que ejecuta la funcion **getReviews()** esta funcion obtiene una respuesta del web service con un listado de reviews
  - search.service:
    este servicio permite el intercambio de datos del input en el componente **navigation** con el componente **movies-Review** esto permite el filtrado por titulo

## Models

Carpeta que contiene las interfaces del proyecto

## Routes

Estas son las rutas del proyecto

```js
const routes: Routes = [
  {
    path: "",
    redirectTo: "reviews",
    pathMatch: "full"
  },
  {
    path: "reviews",
    component: MoviesReviewComponent
  }, {
    path: "reviews/:title",
    component: ReviewDetailsComponent
  }
];

```

/reviews renderiza el componente **movies-review**
/reviews/:title renderiza el componente **review-details**
