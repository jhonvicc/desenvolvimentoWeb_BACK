/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
});


Route.group(() => {
  Route.post("create/account", "AuthController.createAccount")
  Route.post("auth", "AuthController.auth")
  Route.post("crud/create", "CrudController.createResource")
  Route.delete("crud/delete/:id ", "CrudController.deleteResource")
  Route.patch("crud/update/:id", "CrudController.updateResource")
  Route.get("crud/list/:id", "CrudController.listResource")
}).prefix('api');
