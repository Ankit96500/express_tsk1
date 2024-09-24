// create server by express
import express from 'express';
const app = express()
const  PORT =  process.env.PORT || 8000
// // define method and route
// app.get('/',(req,res)=>{
//         res.send(" i am bad request ")
// })
// app.get('/path',(req,res)=>{
//     res.send(" i am path.. ")
// })


// // define server to listen the port
// app.listen(PORT,'localhost',()=>{
//     console.log(`server is running..${PORT}`); 
// })

// Middleware 1: Logging requests
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Middleware 2: Parse incoming requests with JSON payloads
app.use(express.json());

// Route
app.get('/', (req, res) => {
    res.send('<h1>Hello to Node.js</h1>');
});

// Listening on port 3000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});













