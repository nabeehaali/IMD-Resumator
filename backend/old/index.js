const express = require('express')
const app = express()

const bodyParser = require('body-parser')

const cors = require('cors')

const mysql = require('mysql')
app.use(cors())
app.use(express.json())

const db = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'Nabeeha3',
    database:'itec4012database'})



app.use(bodyParser.urlencoded({extended: true}))

app.listen(3001,()=>{
    console.log("running on port 3001");
});

app.get('/itec/show', (req,res)=>{
    const sqlGet = "SELECT * FROM usertbl";
    db.query(sqlGet, (err,result)=>{
        res.send(result)
    })
});

app.get('/api/get',(req,res)=>{
    const sqlGet = "SELECT * FROM usertbl";
db.query(sqlGet, (err, result)=>{
 // send to frontend
 res.send(result)
});
});


app.post("/api/insert", (req,res)=>{

    const email = req.body.email;
    const password = req.body.mypassword;
const sqlInsert = "INSERT INTO usertbl (email, mypassword) VALUES (?,?)";
db.query(sqlInsert, [email, password], (err, result)=>{
 console.log(err)
})
});



app.delete("/api/delete/:email", (req,res)=>{
    const name = req.params.email;
    const sqlDelete = "DELETE FROM usertbl WHERE email = ?";
    db.query(sqlDelete,name, (err, result)=>{
        if (err) {console.log(err);}
        
    });
});

app.put("/api/update/", (req,res)=>{
    const email = req.body.email;
    const password = req.body.mypassword;
    const sqlUpdatee = "UPDATE usertbl SET mypassword = ? WHERE email = ?";
    db.query(sqlUpdatee,[password, email], (err, result)=>{
        if (err) {console.log(err);}
        else {
            res.send(result);}

    });
});