const express = require( 'express' );
const mysql = require( 'mysql' );
const myconn = require( 'express-myconnection');


//initializing and configurations-----------------------------------
const app = express();
app.set( 'port', process.env.PORT || 9000 );
const dbOptions = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'abc123',
    database: library
}

//midlewares
app.use( myconn(mysql, dbOptions, 'single'));



//routes------------------------------------------------------------
app.get('/', (req,res) => {
    res.send('Welcome to my Simple API Project');
})


//SERVER runing-----------------------------------------------------
app.listen( app.get('port'), () => {
    console.log( ' Server running on port', app.get('port') );
})