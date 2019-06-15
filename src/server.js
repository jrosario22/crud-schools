//import Campus from "./dbCreate";
let express = require('express');
let app = express();
var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://postgres:Password@localhost/postgres');
var bodyParser = require('body-parser');

// Database columns
var Campus = sequelize.define('campus', {
    name: Sequelize.STRING,
    address: Sequelize.STRING,
    phone_number: Sequelize.STRING,
    cuny: Sequelize.BOOLEAN
});

Campus
.sync() // Will check for table when created
.then(function(){
    console.log("Campus is now ready to be used");
})
.catch( err => {
    console.log(err);
});

// Parse info coming in
app.use( bodyParser.json() );
app.use(express.json());

// Connecting us to the database
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
 
// Taking info from inputs  
app.get('/campus', function (req, res) {
	let name;
	let address;
	let allInfo = "";

	Campus.findAll().then(function(rows) {
		for(var i = 0; i < rows.length; i++) {
			var columnData = rows[i].dataValues;
			name = columnData.name;
			address = columnData.address;
			phone_number = columnData.phone_number;
			cuny = columnData.cuny;
			allInfo = allInfo  + "\n" + name + " " + address + " " + phone_number + " " + cuny;
		}
        // console.log(allInfo)
        res.send(allInfo);
        console.log("SOMETHING HERE");
	});
});

//Sending info to database
app.post('/campus', function (req, res){

    Campus.create({
        name: req.body.name,
        address: req.body.address,
        phone_number: req.body.phone_number,
        cuny: req.body.cuny
    });

    console.log("I'm here")
    console.log(req.body);
});
// console.log("yeas");

app.listen(3000, function () {
console.log('App listening on port 3000!');
});

// var sequelize = new Sequelize('postgres', 'postgres', 'password', {
//     host: 'localhost:5432',
//     dialect: 'postgres'
//   });


// var pg = require('pg');
// let data = '';
// let options = {
//     user: 'postgres',
//     host: 'localhost',
//     database: 'postgres',
//     password: 'password',
//     port: 5432
// }

// var pool = new pg.Pool(options);

// pool.connect(function(err, client, done){
//     let query = "select * from schools";
//     client.query(query)
//     .then(res => {
//         console.log(res)
//         for(var i=0; i<res.rowCount; i++){
//             console.log(res)
//         }
//         data = JSON.stringify(res);
        

//     })
//     .catch(e => console.log(e.stack));
// })

// pool.end()

//export default data;

// Campus.findAll().then(function(rows){
//     for(var i=0; i<rows.length; i++){
//         var columnData = rows[i].dataValues;
//         name = columnData.name;
//         address = columnData.address;

//         console.log(columnData);
//         console.log(name);
//         console.log(address);
//     }
// });