const express = require('express')
// add dotenv
//connectDB 
// Imports
const pokemon = require('./models/pokemonDB')


// view Engine
const jsxEngine = require('jsx-view-engine')

//*variables
const app = express()
const PORT = 3000


//* App Config 
app.set('view engine','jsx')
app.engine('jsx',jsxEngine())

//*Middleware
app.use(express.urlencoded({extended:false}))
app.use(express.json())



//*Routes

// Root
app.get('/',(req,res)=>{
    res.send('working!')
})

app.get('/pokemon',(req,res)=>{
    res.render('Index',{pokemon:pokemon})
})

app.get("/pokemon/show/:id",(req,res)=>{
    const index = req.params.id

    res.render('Show',{pokemon:pokemon,ids:index})
});

app.get("/pokemon/new",(req,res)=>{
    res.render('New')
});

app.post("/pokemon",(req,res)=>{
        pokemon.push(req.body);
        res.redirect('/pokemon')
})








app.listen(PORT,()=>console.log(`Server running on port: ${PORT} `))