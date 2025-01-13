const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, "public")))
app.use(cors())
app.use(express.json())


const port = 5000

const db = mysql.createConnection({

    host: "localhost",
    user: "root",
    password: "",
    database: "cordova"

}
)

app.get('/', (req, res) => {
    res.send('Gwapo ko!')
} )

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})

app.post('/signup', (req, res) => {
    const sql = "INSERT INTO login (name, age, gender) Values(?, ?, ?)"
})