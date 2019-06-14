// let express = require('express');
// let app = express();
// var Sequelize = require('sequelize');
// var sequelize = new Sequelize('postgres://postgres:Password@localhost/postgres');

// var Campus = sequelize.define('campus', {
//     name: Sequelize.STRING,
//     address: Sequelize.STRING,
//     phone_number: Sequelize.STRING,
//     cuny: Sequelize.BOOLEAN
// });

// Campus
// .sync()
// .then(function(){
//     console.log("Campus is now ready to be used");
// })
// .catch( err => {
//     console.log(err);
// });

// Campus.create({
//     name: 'Lehman College',
//     address: 'Bronx',
//     phone_number: '7183334444',
//     cuny: true
// });

// // Campus.findAll().then(function(rows){
// //     for(var i=0; i<rows.length; i++){
// //         var columnData = rows[i].dataValues;
// //         name = columnData.name;
// //         address = columnData.address;

// //         console.log(columnData);
// //         console.log(name);
// //         console.log(address);
// //     }
// // });


// app.get('/campus', function (req, res) {

// 	let name;
// 	let address;

// 	let allInfo = "";

// 	Campus.findAll().then(function(rows) {
// 		for(var i = 0; i < rows.length; i++) {
// 			var columnData = rows[i].dataValues;
// 			name = columnData.name;
// 			address = columnData.address;
// 			allInfo = allInfo  +"\n" + name + " " + address;
// 		}

// 		res.send(allInfo);
// 	});
// });

// app.listen(3000, function () {
// console.log('Example app listening on port 3000!');
// });

// // var sequelize = new Sequelize('postgres', 'postgres', 'password', {
// //     host: 'localhost:5432',
// //     dialect: 'postgres'
// //   });


// // var pg = require('pg');
// // let data = '';
// // let options = {
// //     user: 'postgres',
// //     host: 'localhost',
// //     database: 'postgres',
// //     password: 'password',
// //     port: 5432
// // }

// // var pool = new pg.Pool(options);

// // pool.connect(function(err, client, done){
// //     let query = "select * from schools";
// //     client.query(query)
// //     .then(res => {
// //         console.log(res)
// //         for(var i=0; i<res.rowCount; i++){
// //             console.log(res)
// //         }
// //         data = JSON.stringify(res);
        

// //     })
// //     .catch(e => console.log(e.stack));
// // })

// // pool.end()

// //export default data;
