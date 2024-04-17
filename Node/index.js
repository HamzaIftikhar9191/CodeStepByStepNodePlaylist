// ////////////////////////////// Video # 6

// console.log("Hamza Iftikhar");
// const fs = require("fs");                       // for import fs module (fs is non global module)
// fs.writeFileSync("hamza.txt","like and like again like")   // to create the file and then write
// console.log("-->",__dirname);                   // to print the directory
// console.log("-->",__filename);                  // to print the filename

// ////////////////////////////// Video # 7

// const http = require("http");                   // to handel the request and response of the server in nodejs
// http.createServer((req, res)=>{                 // can also take function as parameter in createserver function
//     res.write("AOA Hamza Here"); 
//     res.end();
// }).listen(4500);

// ////////////////////////////// Video # 8
  
// // package.json file store the details of the coding related (command,verion,package,repositry)
// // To create package.json file
// //           syntax: npm init  (write in teriminal)

// ////////////////////////////// Video # 9

// // If we delete the node_modules folder write npm install in terminal to again create the node_modules folder
// // .gitignore file store the name of those file and folders that you want not to upload in the github.

// ////////////////////////////// Video # 10

// // About installing nodemon
// // npm install -g nodemon   // To install nodemon
// // npx nodemon index.js     // To run nodemon
// // node is single threaded and async

// ////////////////////////////// Video # 11

// // Create an API
// // Postman

// const http = require('http');
// const data = require('./data.js');  
// http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type': 'application\json'});
//     res.write(JSON.stringify(data));    // Take data from data file
//     res.end();
// }).listen(4501);

// ////////////////////////////// Video # 12

// // create and write into file
// // fs.writeFileSync(); // use to create the file and write data into file
// // fs.unlinkSync(); // use to remove(delete) the file

// const fs = require('fs');
// const filename=process.argv[2];
// const Content=process.argv[3];
// fs.writeFileSync(filename,Content);

// ////////////////////////////// Video # 13


// const fs= require('fs');
// const path=require('path');                     // to get the path of current directory
// const dirPath= path.join(__dirname,'files');    // To get the path of (files) folder
// console.log(dirPath)                            // to print the path on the console
// for(i=0;i<5;i++)                                 // Loop to create the txt file inside the dirpath
// {
//     fs.writeFileSync(`${dirPath}/hello${i}.txt`,"some simple text in file") // create the new file and add txt inside it

// }
// // TO read the files inside the folder
// fs.readdir(dirPath,(err,files)=>{    // readdir is used to read the file name that is in dirpath folder
//     files.forEach((item)=>{
//         console.warn("file name is : ",item)  
//     });
// }
// )

// ////////////////////////////// Video # 14

// // CRUD (Create, Remane, Update, Delete) with file system 

// const fs = require('fs');
// const path = require('path');
// const dirPath= path.join(__dirname,'files');
// const filePath = `${dirPath}/apple.txt`;
// fs.writeFileSync(filePath,'this is a simple file');    //Create file with apple,txtx name

// fs.readFile(filePath,'utf8',(err,item)=>{          // readFile is used to read the file at the given path that is in filePath
// console.log(item);
// })
// fs.appendFile(filePath,' for fruits',(err)=>{      // To update the file content
// if(!err) console.log("file is updated")
// }) 
// fs.rename(filePath, `${dirPath}/fruit.txt`,(err)=>{  // To rename the file
// if(!err) console.log("file name is updated")
// })
// fs.unlinkSync(`${dirPath}/fruit.txt`); // To remove(Delete) the file

// ////////////////////////////// Video # 15
 
// // Theory (Node.js is Asynchronous) example is given below

// let a=20;
// let b=0;
// setTimeout(()=>{
//    b=30;
//    console.log(a+b)   // secondaly prints this
// },2000)

// console.log(a+b)    // first print this

// ////////////////////////////// Video # 16

// //Solution for Asynchronous problem is promise

// let a=20;
// let b=0;


// let waitingData= new Promise((resolve,reject)=>{
//    setTimeout(()=>{
//       resolve(30);
//    },2000)
// })

// waitingData.then((data)=>{
//    b=data;
//    console.log(a+b)
// })

// ////////////////////////////// Video # 17

// //Working structure of the Node.js
// //CallStack register all the functions inside the code

// ////////////////////////////// Video # 18

// //Express.js is framework of Node.js
// //Install the Express.js command: npm install express

// const express = require('express');   // require express
// const app = express();                // expressin executable form
 
// app.get("",(req, resp) => {
//     resp.send("Welcome, This is a home Page");
// });

// app.get("/about", (req, resp) => {
//     resp.send("Welcome, This is a About Page");
// });

// app.get("/help", (req, resp) => {
//     resp.send("Welcome, This is a Help Page");
// });
// app.listen(5000);

// ////////////////////////////// Video # 19

// // Use the req and resp
// // http://localhost:5000/?name=Hamza  // to run the code of video # 19

// const express = require('express');
// const app = express();

// app.get("", (req, resp) => {
//     console.log(req.query.name)
//     resp.send("Welcome,"+req.query.name);
// });

// app.get("/about", (req, resp) => {
//     resp.send("Welcome, This is a About Page");
// });

// app.get("/help", (req, resp) => {
//     resp.send("Welcome, This is a Help Page");
// });

// app.listen(5000);

// ////////////////////////////// Video # 20

// //HTML tags
// //Show JSON data
// //link pages

// ////////////////////////////// Video # 21

// // http://localhost:5000/about.html  // to run the code of video # 21

// const express = require('express');
// const path = require('path');       // Help to access the folder path

// const app = express();
// const publicPath=path.join(__dirname,'public')
// console.log(publicPath);

// app.use(express.static(publicPath));    //Static method to load the static html pages that is in the public folder

// app.listen(5000);

// ////////////////////////////// Video # 22

// // http://localhost:5000/about  // to run the code of video # 22
// // Extension is removed from the end of the filename that is why we used app.get 


// const express = require('express');
// const path = require('path');       // Help to access the folder path

// const app = express();
// const publicPath=path.join(__dirname,'public')
// console.log(publicPath);

// // //extension is removed from the end of the filename that is why we used app.get 
// // //get method may file ko sendFile kay function say load kartian hain

// app.get('',(_,resp) => {
//     resp.sendFile(`${publicPath}/index.html`);
// })
// app.get('/help',(_,resp) => {
//     resp.sendFile(`${publicPath}/help.html`);
// })
// app.get('/about',(_,resp) => {
//     resp.sendFile(`${publicPath}/about.html`);
// })
// app.get('*',(_,resp) => {
//      resp.sendFile(`${publicPath}/404.html`);
// })

// app.listen(5000);

// ////////////////////////////// Video # 23

// // //http://localhost:5000/about  // to run the code of video # 23
// // //npm install ejs to install ejs from VS terminal

// const express = require('express');
// const path = require('path');       // Help to access the folder path

// const app = express();
// const publicPath=path.join(__dirname,'public')
// console.log(publicPath);

// app.set('view engine', 'ejs');

// app.get('',(_,resp) => {
//     resp.sendFile(`${publicPath}/index.html`);
// })
// app.get('/profile',(_,resp) => {
//     const user={
//         name: 'Hamza',
//         email:'hamza@gmail.com'
//     }
//     resp.render('profile',{user});
// })
// app.get('/help',(_,resp) => {
//     resp.sendFile(`${publicPath}/help.html`);
// })
// app.get('/about',(_,resp) => {
//     resp.sendFile(`${publicPath}/about.html`);
// })
// app.get('*',(_,resp) => {
//      resp.sendFile(`${publicPath}/404.html`);
// })

// app.listen(5000);

// ////////////////////////////// Video # 24

// //Introduced loop in above code
// //Introduced the commom header file with login.ejs and profile.ejs

// const express = require('express');
// const path = require('path');       // Help to access the folder path

// const app = express();
// const publicPath=path.join(__dirname,'public')
// console.log(publicPath);

// app.set('view engine', 'ejs');

// app.get('',(_,resp) => {
//     resp.sendFile(`${publicPath}/index.html`);
// })
// app.get('/profile',(_,resp) => {
//     const user={
//         name: 'Hamza',
//         email:'hamza@gmail.com',
//         skill: ['php','css','node']
//     }
//     resp.render('profile',{user});
// })
// app.get('/login',(_,resp) => {
//     resp.render('login');
// })
// app.get('/help',(_,resp) => {
//     resp.sendFile(`${publicPath}/help.html`);
// })
// app.get('/about',(_,resp) => {
//     resp.sendFile(`${publicPath}/about.html`);
// })
// app.get('*',(_,resp) => {
//      resp.sendFile(`${publicPath}/404.html`);
// })

// app.listen(5000);

// ////////////////////////////// Video # 25

// //Introduced Middleware in Node.js 
// //Middleware is used to restrict to access to the page until ful fill the condition
// //In this code middleware is used to access the home or user page 

// const express = require('express');
// const app = express();  

// // //Middleware (application level middleware)
// const reqFilter = (req, resp, next) => {
//     if (!req.query.age) {
//         resp.send("Please provide your age")
//     }
//     else if (req.query.age<18) {
//         resp.send("You are under aged")
//     }
//     else {
//         next();
//     } 
// }

// app.use(reqFilter);

// app.get('/', (res, resp) => {
//     resp.send('Welcome to Home page')
// });

// app.get('/users', (res, resp) => {
//     resp.send('Welcome to Users page')
// });
// app.listen(5000)


// ////////////////////////////// Video # 26

// ////applying middleware to the specfic route
// ////place the middleware in the specfic middleware.js file

// const express = require('express');
// const reqFilter= require('./middleware');    // import middleware.js
// const app = express();
// const route= express.Router();          // used for applying middleware in specfic route



// route.use(reqFilter)
// app.get('/', (res, resp) => {
//     resp.send('Welcome to Home page')
// });

// app.get('/users', (res, resp) => {
//     resp.send('Welcome to Users page')
// });

// route.get('/about', (res, resp) => {            // By using route middleware is applied
//     resp.send('Welcome to About page')
// });
// route.get('/contact', (res, resp) => {          // By using route middleware is applied
//     resp.send('Welcome to contact page')
// });

 // app.use('/',route);

// app.listen(5000)

// ////////////////////////////// Video # 27

// ////Download mongoDB
// ////Insatll mongoDB
// ////MongoDB compess tool


// ////////////////////////////// Video # 28


// ////Introduction video of MongoDBCompess (MongoDBCompess is a GUI application to use MongoDB)
// ////DB , collection , create DB , create collection ,dalete DB 


// ////////////////////////////// Video # 29

// ////MongoDB Crud Operation

// ////Commands are below
// ////use e-com
// ////db.products.insertOne({name:'hamza iftikhar'})
// ////db.products.find()    // to show all databases

// ////////////////////////////// Video # 30

// ////Connect mongo DB with node.js
// ////To handle the promise use .then or await if you used await then make the function async

// const {MongoClient} = require('mongodb')
// const url= 'mongodb://localhost:27017';            //// Default url for mongoDB connection
// const databaseName='e-com'                          //// database (e-com)
// const client= new MongoClient(url);                 //// connect client to server

// async function getData()                          ////async is used to handle the promise
// {
//     let result = await client.connect();
//     db= result.db(databaseName);                    // database (e-com)
//     collection = db.collection('products');         // collection (products)
//     let data = await collection.find({}).toArray();        //Get all data from collection products
//     console.log(data)
// }

// getData();



// ////////////////////////////// Video # 31

// //// Getting data from mongodb collection (products collection)
// const dbConnect = require('./mongodb');


// dbConnect().then((resp)=>{
//     resp.find({}).toArray().then((data)=>{
//     console.warn(data);
//    })
// })

// //// The above and below code are same in working one is working with .then and other is working with await 

// const main = async ()=>{
//     let data  = await dbConnect();
//     data = await data.find({}).toArray();
//     console.warn(data);
// }
// main();


// ////////////////////////////// Video # 32

// ////To insert the Data into the Database

// const dbConnect = require('./mongodb');

// const insertData=async ()=>{
//    let data = await dbConnect();
//   let result = await data.insertMany(
//       [
//           {name:'max 5',brand:'micromax',price:420,category:'mobile'},
//           {name:'max 6',brand:'micromax',price:520,category:'mobile'},
//           {name:'max 7',brand:'micromax',price:620,category:'mobile'},
//       ]
//   )
//   if(result.acknowledged)
//   {
//       console.warn("data is inserted")
//   }
// }

// insertData();


// ////////////////////////////// Video # 33

// ////To update the Data  in to the databases
// ////All video mateial in the update.js file


// ////////////////////////////// Video # 34

// //////To delete the Data from the databases

// const dbConnect = require('./mongodb');

// const deleteData=async ()=>{
// let data = await dbConnect();
// let result = await data.deleteOne({name:'max 5'})     //// await is used to handele the promise and it is used inside the async function
// console.log(result)

// }
 
// deleteData();



// ////deleteOne  (only delete the first item in the database) 
// ////deleteMany   (deletes all match items in the database)


// ////////////////////////////// Video # 35 , 36 , 37 ,38


// ///// API with MongoDB

// ///// GET API  ( when read data using API in database)               Video # 35       
// ///// POST API  ( when save new data using API in database )         Video # 36
// ///// PUT API  (when update data using API in database)              Video # 37
// ///// DELETE API  (when delete data using API in database)           Video # 38

// const dbConnect = require('./mongodb');
// const express = require('express');
// const mongodb = require('mongodb');
// const app = express();

// app.use(express.json());     ///// middelware used when to get data from postman

// // ///// GET API  ( when read data using API in database)               Video # 35       

// app.get('/',async (res,resp)=>{
//     let data = await dbConnect();
//     data= await data.find().toArray();
//     resp.send(data);
// });

// // ///// POST API  ( when save new data using API in database )         Video # 36

// app.post("/", async (req,resp)=>{
//     let data = await dbConnect();
//     console.log(req.body);         //// Print the data that is sent from the postman server to the console
//     let result = await data.insertOne(req.body)    // to insert data into the result variable
//     resp.send(result)

// });

// ///// PUT API  (when update data using API in database)              Video # 37

// app.put("/", async (req,resp)=>{
//     let data = await dbConnect();
//     console.log(req.body);         //// Print the data that is sent from the postman server to the console
//     let result = await data.updateOne(
//         {name: "Faizan"},   //// also use req.body.name instead of Faizan in order to get the condition from postman server
//         {$set:req.body}
//         )   
//     resp.send(result)

// });


// // ///// DELETE API  (when delete data using API in database)           Video # 38

// app.delete("/:id", async (req,resp)=>{
//     const data = await dbConnect();
//     console.log(req.params.id);         //// Print the object id that is sent in the parms
//     const result = await data.deleteOne( {_id: new mongodb.ObjectId(req.params.id)} ) 
//     resp.send(result)
// });
 
 
// app.listen(4501)



// ////////////////////////////// Video # 39
// ////// Mongooes is an advance version of mongodb

// ///// What is schema  (schema is appling validations)
// ///// What is model (model is used to connect the mongodb with nodejs)

 
// ////////////////////////////// Video # 40

// ///////// CRUD with Mongoose

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/e-com');

// const productSchema = new mongoose.Schema({
//     name: String,
//     price: Number,
//     brand: String,
//     category: String

// });

// const saveInDB = async () => {
//     const Product = mongoose.model('products', productSchema);
//     let data = new Product({
//         name: "max 100",
//         price: 200,
//         brand: 'maxx',
//         category: 'Mobile'
//     });
//     const result = await data.save();
//     console.log(result);
// }

// const updateInDB =async  () => {
//     const Product = mongoose.model('products', productSchema);
//     let data =await  Product.updateOne(
//         { name: "hamza Iftikhar" },
//         {
//             $set: { price: 950,name:'max pro 6' }
//         }
//     )
//     console.log(data)
// }

// const deleteInDB = async ()=>{
//     const Product = mongoose.model('products', productSchema);
//     let data = await Product.deleteOne({name:'max 100'})
//     console.log(data);
// }
// const findInDB = async ()=>{
//     const Product = mongoose.model('products', productSchema);
//     let data = await Product.find()
//     console.log(data);
// }


// //// saveInDB();
// //// updateInDB();
// //// deleteInDB();

// findInDB();


// ////////////////////////////// Video # 41 , 42

// /////////////Making API with Mongoose

// //////config.js is used to configure the mongoose connection
// //////products.js is used to define the schema and model

// ///// GET API  ( when read data using API in database)                      
// ///// POST API  ( when save new data using API in database )         
// ///// PUT API  (when update data using API in database)             
// ///// DELETE API  (when delete data using API in database)          

// const express = require('express');
// require("./config");
// const Product = require('./product');
// const app = express();

// app.use(express.json());  // when data comes it is in string so use this to convert into json format

// // ///// POST API  ( when save new data using API in database )         

// app.post("/create", async (req, resp) => {
//     let data = new Product(req.body);
//     const result = await data.save();
//     resp.send(result);
// });

// // ///// GET API  ( when read data using API in database)                      

// app.get("/list", async (req, resp) => {
//     let data = await Product.find();
//     resp.send(data);
// })

// // ///// DELETE API  (when delete data using API in database)          

// app.delete("/delete/:_id", async (req, resp) => {
//     console.log(req.params)
//     let data = await Product.deleteOne(req.params);
//     resp.send(data);
// })

// // ///// PUT API  (when update data using API in database)             

// app.put("/update/:_id",async (req, resp) => {
//     console.log(req.params)
//     let data = await Product.updateOne(
//         req.params,
//         {$set: req.body}
//     );
//     resp.send(data);
// })

// app.listen(4501)


// ////////////////////////////// Video # 43

// //////Search API with multiple search parameters

// const express = require('express');
// require("./config");
// const Product = require('./product');
// const app = express();

// app.use(express.json());

// app.get("/search/:key",async (req,resp)=>{
//     console.log(req.params.key);
//     let data = await Product.find(
//         {
//             "$or":[
//                 {name:{$regex:req.params.key}},    //// name and brand are multiple search parameters 
//                 {brand:{$regex:req.params.key}}
//             ]
//         }
//     )
//     resp.send(data);

// })


// app.listen(4501)

// ////////////////////////////// Video # 44
 
// //// Upload file using multer 

// const express = require('express');
// const multer = require('multer');

// const app = express();

// const upload = multer({
//     storage: multer.diskStorage({
//         destination: function (req, file, cb) {
//             cb(null, 'NODE')     //// NODE is the folder_name where the file is uploded you can also change the folder
//         },
//         filename: function (req, file, cb) {
//             cb(null, file.fieldname + "-" + Date.now() + ".jpg")
//         }
//      })
// }).single('file_name');  //// file_name is the key field from the postman

// app.post("/upload", upload, (req, resp) => {
//     resp.send("file upload")
// });

// app.listen(4501)


// ////////////////////////////// Video # 45

// //// OS module in Node.js 
// //// commands used for check the specfication of the system 
// ////(such as os.arch , os.freemem ,os.totalmem , os.platform , os.hostmane )

// //// watch video for OS module commands   (Not such important)


// ////////////////////////////// Video # 46

// //// Events and Event Emitter in Node.js
// //// check the code from video for events


// ////////////////////////////// Video # 47

// /////// REPL (Read-Evl-Print-Loop) is a command line tool
// /////// we can run the Node.js and java script code on the REPL
// /////// check video to use the REPL

// ////Tell what is the error?

// const x=10
// console.log(x++)

// //////solution is => let x=10


// ////////////////////////////// Video # 48

// ////// Connecting with SQl
// ////// command for installing mySQL(npm i mysql)

// ///// how to create table and enter data into the table in xampp (Watch from another video)


// const mysql= require("mysql");

// const con= mysql.createConnection({
//   host:"localhost",
//   user:"root",
//   password:"",
//   database:"test"     //// test is the default created database in xampp
// });

// con.connect((err)=>{
//   if(err)
//   {
//     console.warn("not connect")
//   }else{
//     console.warn("connected!!!")
//   }
// })

// ////// fetching data from database

// con.query("select * from users",(err,result)=>{
//   if(err)
//   {
//     console.warn("some error")
//   }
//   else{
//     console.warn(result)
//   }
// })

// ////////////////////////////// Video # 49

// //////GET API with mySQL (Use when get the data)

// //////configsql.js is used to configure the database

// const express = require("express");
// const con = require("./configsql");
// const app = express();

// //////GET API with mySQL (Use when get the data)
// ////// getting data from mySQL database and showing into the postman

// app.get("/", (req, resp) => {
//   con.query("select * from users", (err, result) => {
//     if (err) { resp.send("error in api") }
//     else { resp.send(result) }
//   })
// });

// app.listen(4501) 


// ////////////////////////////// Video # 50 , 51 , 52

// ////POST API with mySQL  (Use when insert the data)
// ////PUT API with mySQL  (Use when update the data)
// ////DELETE API with mySQL  (Use when delete the data)

const express = require("express");
const con = require("./configsql");
const app = express();

app.use(express.json());


////POST API with mySQL  (Use when insert the data)

app.post("/", (req, resp) => {
  //const data = req.body;
   const data = {name:"Hamza Iftikhar",password:'3030',user_type:"admin"}
  con.query("INSERT INTO users SET?", data, (error, results, fields) => {
    if (error) throw error;
    resp.send(results)
  })
});

////PUT API with mySQL  (Use when update the data)

app.put("/:id",(req,resp)=>{
  const data= [req.body.name,req.body.password,req.body.user_type,req.params.id];
  con.query("UPDATE users SET name = ?, password = ?, user_type = ? WHERE id = ?",
  data,(error,results,fields)=>{
    if(error) throw error;
    resp.send(results)
  }
)
 
})

// ////DELETE API with mySQL  (Use when delete the data)

app.delete("/:id",(req,resp)=>{
    con.query("DELETE FROM users WHERE id =" + req.params.id,(error,result)=>{
        if(error) throw error;
        resp.send(result)
    });
  })


app.listen(4501)