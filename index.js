import  {USER_PATH}  from  './constants/user.path.js';
import  {createUser, getUsers} from  './controllers/user.controller.js';
import express from 'express'
const app = express()
app.use(express.json()) 
const port = 3000

app.get(USER_PATH.main, getUsers);

app.post(USER_PATH.main, createUser);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})