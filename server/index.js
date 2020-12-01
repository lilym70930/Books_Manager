const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const routHelper = require('./routHelper');
app.use(express.json());
const path = require('path');
const public = (path.join(__dirname,"..", 'client', 'build' ));
const bodyParser = require('body-parser');


app.use((req, res, next) => {
  // console.log('middleware for cors')
  // console.log('got req for:', req.method, req.url)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,PATCH,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
   next();
});

app.use(bodyParser.urlencoded({
  extended: true,
}));

app.use(express.static( public));



app.post('/collections', (req,res) =>{
  console.log('inside new collection', req.body);
  
 return routHelper.AddNewCollection(req,res);
});


app.delete('/collections/:collectionId', (req,res) =>{
  console.log('delete collection', req.params);
 return routHelper.DeleteCollection(req,res);
});

app.patch('/collections/:collectionId', (req,res) =>{
  console.log('update collection', req.params);
 return routHelper.UpdateCollectionName(req,res);
});

app.get('/collections', (req,res) =>{
  console.log('get all collection', req.body);
 return routHelper.GetCollections(req,res);
});

app.post('/collections/:collectionId/books', (req,res) =>{
  console.log('inside new book to collection', req.body);
 return routHelper.AddToCollection(req,res);
});

app.delete('/collections/:collectionId/books/:bookId', (req,res) =>{
  console.log('remove book from collection', req.body);
 return routHelper.RemoveFromCollection(req,res);
});

app.get('/rated-books', (req,res) =>{
  console.log('get all rated books', req.body);
 return routHelper.GetRatedBooks(req,res);
});

app.post('/rated-books', (req,res) =>{
  console.log('add rated books', req.body);
 return routHelper.AddToRatedBooks(req,res);
});

app.patch('/rated-books/:bookKey', (req,res) =>{
  console.log('update rated books', req.body);
 return routHelper.UpdateBookRate(req,res);
});

app.post('/signIn', (req, res) => {
  console.log('signIn', req.body);
  return routHelper.Login(req.body, res);
});

app.post('/signUp', (req, res) => {
  console.log('signUp', req.body);
  return routHelper.SignUp(req, res);
});

app.get('/', (req, res) =>{
  res.sendFile(path.join(public, 'index.html'));
})
app.get('*', (req, res) =>{
  res.sendFile(path.join(public, 'index.html'));
})


app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})












