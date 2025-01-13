const express = ('express')
const mysql = ('mysql')
const cors = ('cors')
const path = ('path')

const app = express()

app.use(express.static(path.join(__dirname, "public")))
app.use(cors())
app.user(express.json())

const port = 5000

const db = mysql.createConnection({
    
    host: "localhost",
    user: "root",
    password: "",
    database: "students"

}
)
