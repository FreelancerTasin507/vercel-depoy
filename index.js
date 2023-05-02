const express = require('express')
const app = express()
const port = 5500
const chefs = require('./Datas/chefs.json')
const recipes = require('./Datas/recipes.json')
const cors = require('cors');

app.use(cors())

app.get('/', (req, res) => {
  res.send('resturant Server is running!')
});

app.get('/chefs',(req,res) =>{
  res.send(chefs)
});

app.get('/viewRecipes',(req,res) =>{
  res.send(chefs)
});

app.get('/viewRecipes/:id',(req,res) =>{
  const id = req.params.id;
  const selectedId = chefs.find(c => c.id == id)
  res.send(selectedId)
});

app.get('/chefsRecipes',(req,res)=>{
  res.send(recipes)
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})