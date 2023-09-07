const express = require('express')
// add dotenv
require('dotenv').config()
const Manypokemon = require('./models/pokemonDB')
// Imports
const Pokemon = require('./models/pokemon')
//connectDB 
const connectDB = require('./utils/mongodbConfig') 
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

app.get('/pokemon',async (req,res)=>{
    try{
        const pokemonFromDb = await Pokemon.find({})
         res.render("Index", { pokemon: pokemonFromDb });
    }catch(e){
        console.log(e)
    }
   ;
})



app.get("/pokemon/new", (req,res)=>{
    res.render('New')
});

app.post("/pokemon", async (req, res) => {
  const createPokemon = await Pokemon.create(req.body);
  res.redirect("/pokemon");
});

app.get('/pokemon/seeding', async (req,res)=>{
    const createPokemon = await Pokemon.insertMany(Manypokemon)
    res.send(createPokemon)
})


app.get("/pokemon/show/:id", async(req, res) => {
    const {id} = req.params
 try{
    const pokemonFromDb = await Pokemon.findById(id );
    res.render("Show", {pokemonFromDb});
 }catch(e){
    console.log(e)
 }
  
});




connectDB()
app.listen(PORT,()=>console.log(`Server running on port: ${PORT} `))