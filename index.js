const express = require('express')
const app = express()
const port = 8000

const {
    test, 
    readBook,
    addBook,
    deleteBook,
    renameBook,
    seeBook,
    addBookData,
    renameBookData,
    deleteBookData
} = require('./data');
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello Teddi Wellcome to NodeJs')
})

app.get('/test', (req, res) => {
    res.send(test())
})

// read all file json
app.get('/dataBook', (req, res) => {
    res.send(readBook())
})

// add file
app.get('/addBook',(req, res) => {
    res.send(addBook(req.body.name))
})

// delete file
app.get('/deleteBook', (req, res) => {
    res.send(deleteBook(req.body.name))
})

// rename file
app.get('/renameBook', (req, res) => {
    res.send(renameBook(req.body.oldName, req.body.newName))
})

// see data on file
app.get('/book/:name_file', (req, res) => {
    res.send(seeBook(req.params.name_file))
})

// add data on file
app.get('/book/:nama_file/add', (req, res) => {
    res.send(addBookData(req.params.nama_file, req.body.name, req.body.alamat))
})

// rename data on file
app.get('/book/:nama_file/edit/:id', (req, res) => {
    res.send(renameBookData(req.params.nama_file, req.params.id, req.body.name, req.body.alamat))
})

// delete data on file
app.get('/book/:nama_file/delete/:id', (req, res) => {
    res.send(deleteBookData(req.params.nama_file, req.params.id))
})


app.listen(port, () => {
    console.log(`Example listening at http://localhost:${port}`)
})