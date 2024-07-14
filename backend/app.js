//imports
require('dotenv').config()
require('express-async-errors')

const express = require('express')
const app = express()

const cors = require('cors')

const cookieParser = require('cookie-parser')

const connectDB = require('./db/connect')


//routes
const routes = require('./routes/index')


//middlewares
const middlewares  = require('./middlewares/index')


//variables
const PORT = 5000






//middlewares

// app.use(express.static('./public'))
app.use(cors())
app.use(express.json())
app.use(cookieParser())




//routes
app.use('/user', routes.user)
app.use("/librarian", routes.librarian);
app.use("/admin", routes.admin);
app.use("/book", routes.book);
app.use("/borrow", routes.borrow);
app.use("/library", routes.library);




//health
app.get('/', (req,res)=>{

    res.send("<h1>Odoo Hackathon</h1>")

})




//errors

app.use(middlewares.notFound)
app.use(middlewares.errorHandler)





const start = async () => {

  try {

    await connectDB(process.env.MONGODB_URI);
    
    app.listen(PORT, () => console.log(`Server is running at http://127.0.0.1:${PORT}`) )

  } catch (error) {

    console.log(error)
  
  }
}
  
start()