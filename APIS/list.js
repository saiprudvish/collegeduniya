//create mini express application
const exp= require("express")
const userApi=exp.Router();

const expressErrorHandler = require("express-async-handler")
//add body parser middleware
userApi.use(exp.json())


const { 
    createPool
}=require('mysql')
const pool =createPool({
    host:"localhost",
    user:"root",
    password:"sai1234",
    database:"collegeinsight",
    timezone: 'Z',
    connectionLimit:10

})

userApi.post("/createuser", expressErrorHandler(async(req, res, next) => {
      const  name=req.body.username
      const  email=req.body.email
      const mobileno=req.body.mobileno
      const password= req.body.password
        
    
    //console.log(inputData)

    const sql="INSERT INTO ACCOUNTS values ? ";
    const vals=[[name,email,mobileno,password]];
    pool.query(sql,[vals],(err,results,fields)=>{
        if(err){
            res.send({ message: "User already existed" })
        }
        else 
        {
            res.send({ message: "User created" })
        //console.log('registered',results)
        }
    })
}));

userApi.post('/login', expressErrorHandler(async (req, res) => {
	let username = req.body.username;
	let password = req.body.password;
	//console.log(username)

		// Execute SQL query that'll select the account from the database based on the specified username and password
		pool.query('SELECT * FROM accounts WHERE name = ? AND password = ?', [username, password],function(error, results, fields) {
			// If there is an issue with the query, output the error
			if (error) throw error;
			// If the account exists
            //console.log(results)
			if (results.length>0) {
				// Authenticate the user
                res.send({ message: "login success" })
			} else {
				res.send({message :"Incorrect Username"});
			}			
		});
}));


userApi.get('/getuserss', expressErrorHandler(async (req, res) => {
    pool.query('SELECT * FROM colleges ',function(error, results, fields) {
        if (error) throw error;
        else 
        {
            res.send({ message: results })
        //console.log('registered',results)
        }
    })
}));


userApi.post('/getuser', expressErrorHandler(async (req, res) => {
      //console.log(req.body)
      let district = req.body.district;
	let course = req.body.course;
    pool.query('SELECT * FROM colleges WHERE location = ? AND course = ?', [district, course],function(error, results, fields) {
        if (error) throw error;
        else 
        {
            res.send({ message: results })
        //console.log('registered',results)
        }
    })
}));


userApi.get("/getuserdataa/:id",  expressErrorHandler(async (req, res) =>  {


    let selectedid = req.params.id;
   console.log(selectedid);
    pool.query('select * from colleges where code=? ',[selectedid],function(error, results, fields) {
        if (error) throw error;
        else 
        {
            res.send({ message: results })
        console.log(results)
        }
    })
}));


//export userApi
module.exports=userApi; 