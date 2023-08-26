const express = require('express');
const routes = express.Router();

//LIST ALL BOOKS (SELECT ALL)
routes.get('/', (req, res) => {
    req.getConnection( (err, conn) => {
        if(err) return res.send(err)

        conn.query('SELECT * FROM books', (err, rows) => {
            if(err) return res.send(err)

            res.json(rows)
        })
    })   
})

//INSERT A BOOK (CREATE)
routes.post('/', (req, res) => {
    req.getConnection( (err, conn) => {
        if(err) return res.send(err)

        // console.log( req.body )

        conn.query('INSERT INTO books set ?', [ req.body ] , (err, rows) => {
            if(err) return res.send(err)

            res.send('book inserted')
            // res.json(rows)
        })
    }) 
})

//INSERT A BOOK (CREATE)
routes.delete('/:id', (req, res) => {
    req.getConnection( (err, conn) => {
        if(err) return res.send(err)

        conn.query('DELETE FROM books WHERE id = ?', [ req.params.id ] , (err, rows) => {
            if(err) return res.send(err)

            res.send('book deleted')            
        })
    })   
})

routes.put('/:id', (req, res) => {
    req.getConnection( (err, conn) => {
        if(err) return res.send(err)

        conn.query('UPDATE books set ? WHERE id = ?', [ req.body, req.params.id ] , (err, rows) => {
            if(err) return res.send(err)

            console.log(err)
            res.send('book Updated')   
        })
    })   
})




module.exports = routes;