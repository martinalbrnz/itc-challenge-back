# IT Crowd challenge - back end

## Clone repo

```console
git clone <repo-url>
```

## Run locally
You must provide a .env file with the following
```
PORT=8080
MONGODB_URI=<uri>
```
Then run in console
```console
npm i
npm start
```

Server should be running on [local host](http://localhost:8080)

# Brief explanation of what I have done

## [Front](https://github.com/martinalbrnz/itc-challenge-front)

### [Deploy](https://itc-challenge-front.vercel.app/)

- [Redux](https://github.com/martinalbrnz/itc-challenge-front/commit/987814d951ee2bf45031bbd66a7511c5905c1bbc):
  I started to configurate redux to handle state, so I don't have problems later when the app becomes bigger.
  It may be an overkill but I found it better than state and props.

- [Router](https://github.com/martinalbrnz/itc-challenge-front/commit/a9f24296c2b7145a5bbbf90f08e16eac06ca01eb):
  Add react-router-dom v6 to manage routing.
  Add a Header to hold all the nav links.
  Add bootstrap and styled the header a little, it worked.

- [Wrong name](https://github.com/martinalbrnz/itc-challenge-front/commit/c275e53f5b7a1c1fdf2b616cc2933580b1b3125f):
  Here I realized that the reducer was called Articles instead of Products.
  Fix my error to mantain consistence with backend.
  Also I showed the store data on my components and it worked.
  Seems like a big commit but there were just small name corrections (mostly).

- [Product list and modal](https://github.com/martinalbrnz/itc-challenge-front/commit/50b72dbcd0be4801eef16936fe789fe56148e582):
  Add a modal and a DetailedView component to show a Product detailed view.
  It works storing an id value on state and using a find on the products store array, then passing it to DetailedView.
  Add a price formatter using Intl to show price as $ X.XXX,XX

- [Add product](https://github.com/martinalbrnz/itc-challenge-front/commit/6907e2e1a8a94ed146b444547e6f4ef4b3f6bc04):
  Here I spent a long time styling with bootstrap (I was kinda rusty and used to vanilla css).
  Add redux logic to add products.
  Maybe this could have been two different commits.

- [Form to add](https://github.com/martinalbrnz/itc-challenge-front/commit/ad5e935d4401ce8bb0b0a574d35735ca37abb5da):
  Add react-hook-form to handle the add product, joi to handle validations and the resolvers to use everything.
  Add a link to header so I can navigate to the Product creation page.
  Add Joi validations (almost equal to backend) and error messages.
  Fix create Product because I forgot to include body and headers.

- [Pagination](https://github.com/martinalbrnz/itc-challenge-front/commit/c817700e413b5753d6581d0fc6a6be7487b91af1):
  Add pagination, showing 3 items per page.
  It works slicing the products array, according to a currentPage value stored on local state.
  currentPage is an integer, greater or equal than 1.
  Slice starts on (currentPage - 1) _ itemsPerPage, ends on currentPage _ itemsPerPage.

```
E.G.:
currentPage = 1 -> [0, 1, 2]
currentPage = 3 -> [6, 7, 8]
```

Add buttons to show products from different pages.

- [Implemented Brands](https://github.com/martinalbrnz/itc-challenge-front/commit/f0125e85bb49efaea6be8e497833f0f90794488b):
  Add brands on create Product and redux.
  Add select dropdown with all brands.

- [Firebase auth](https://github.com/martinalbrnz/itc-challenge-front/commit/31a278fcdbd889630bc097a0b9a4f3efad0a4d2b):
  Add firebase to authenticate
  Add token listener to mantain session
  Add logout button and functionalities
  Add login form with validations
  Show Links according to auth

## [Back](https://github.com/martinalbrnz/itc-challenge-back)

### [Deploy](https://itc-challenge-back.vercel.app/)

- [Setup](https://github.com/martinalbrnz/itc-challenge-back/commit/d4da5a0a95c2bf8d0cf78fbfeee77372411d7137):
  Add eslint so I enforce my code writing and readability, used airbnb rules.
  Add .gitignore so I don't share .env or upload node_modules.
  Add README with instructions to run locally and .env requirements.
  Add babel configuration so I can use ES6 with no problems.
  Add mongodb and mongoose, I choosed a non relational database because I feel more comfortable with it.
  Add dotenv to use .env with no problem.

- [Get All](https://github.com/martinalbrnz/itc-challenge-back/commit/24fc692ce2700ed011c7425954ffd0641bf90932):
  Add products mongoose model.
  Add getAll controller
  Add routes index so I can add centralize and export all routes.
  Add products route with GET method associated to getAll controller.

- [Create product](https://github.com/martinalbrnz/itc-challenge-back/commit/3b6f24a02db1e389a74651fc1892ee1326738f21):
  Add getById to routes and controllers.
  Add create product endpoint with POST method.
  Normalized API response structure to:

```
{
	message: <string>, // Text with information about the request/response
	data: <object/array/string>, // Fetched data or error details
	error: <boolean>, // true if error, false if not
}
```

- [Complete CRUD](https://github.com/martinalbrnz/itc-challenge-back/commit/98fdd82797a4ed9ba6197ff9cee93c05df14c2ed):
  Add return statement that forgotted before so server doesn't crash if there is an error.
  All controllers logic are inside a trycatch statement to prevent server failures.
  Used http status according to best practices

```
200 -> GET/PUT
201 -> POST
204 -> DELETE
400 -> REQ ERROR
404 -> NOT FOUND
```

-[Validations](https://github.com/martinalbrnz/itc-challenge-back/commit/b544b609d2302c13533f4fe7553fcb8eeb37da0d):
Add Joi validations to create, and update as a middleware.
Add API docs with postman.

- [Brand model](https://github.com/martinalbrnz/itc-challenge-back/commit/c92daecbf4c721f025c516189f3f1af10f60fbaf):
  Add brand model according to requirements and linked to Products.
  Add validations to create an update a brand.
  Add brands endpoints to routes index.
  Add endpoints to routes.
  Add populate to Products so they show brand name and logo_url.
  Update Products validation to accept (and require) brand id field.

-[Setup for deploy](https://github.com/martinalbrnz/itc-challenge-back/commit/254de72329082bc3b8e755d415415c8c64684986):
Add vercel.json file to deploy.
Add engines to package.json.

## Features

### Front

- Login as an admin to create products
- Create products with validations to prevent errors
- Visualize products with paginated view

### Back

- CRUD of products
- Validation of Create and update 
- Get product by ID
- Create and Get Brands
- Normalized response

## Libraries
### Front

- [React Router Dom](https://reactrouter.com/): To manage navigation between views.
- [Redux](https://es.redux.js.org/): To centralize state.
- [Redux-thunk](https://github.com/reduxjs/redux-thunk): To manage async functions with Redux.
- [React-hook-form](https://react-hook-form.com/): To manage form validations and submit.
- [@hookform/resolvers](https://react-hook-form.com/): To link Forms with the Joi validation (related to react-hook-form).
- [Joi](https://joi.dev/): To manage validations and messages.
- [Firebase](https://firebase.google.com/): To handle authentication and tokens.

### Back

- [@babel/node](https://babeljs.io/docs/en/babel-node): To use ES6 with no problems.
- [Dotenv](https://www.npmjs.com/package/dotenv): To use environment variables.
- [Express](http://expressjs.com/): To create a REST API with ease.
- [Joi](https://joi.dev/): To validate Create and Update of MongoDB records.
- [Mongoose](https://mongoosejs.com/): To interact with MongoDB in a secure and easy way.
- [Nodemon](https://www.npmjs.com/package/nodemon): To restart server after any change and develop faster.
- [ESLint](https://eslint.org/): To enforce code writing and improve readablity.
