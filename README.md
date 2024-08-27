# ExpressJS and Mongodb project

## Description
This application allows you to manage users and their associated blog posts. You can create users, add blog posts, and assign these posts to specific users.
The project includes endpoints for handling CRUD operations for both users and blog posts.

### Installation
## Clone the repository:
```
git clone https://github.com/Youssef2666/express_mongodb_api.git
 ```

## Navigate to the project directory:
```bash
  cd your_project_name
```
## Create a .env file in the root of your project and add the following environment variables:
```
MONGO_URI=your_mongodb_string_connection
PORT=your_port
```

## Install the dependencies:
### this will install expressJs, mongoose and nodemon.
`npm install`

## To start the development server, run:
`npm run dev`

## examples of endpoints:
```
http://localhost:3000/api/users
http://localhost:3000/api/users/66ccdb2ec1dc9af371243d55
http://localhost:3000/api/posts
http://localhost:3000/api/posts/66cce2d1c26e3b5b01a58947
```

