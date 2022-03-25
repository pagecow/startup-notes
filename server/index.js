require('dotenv').config();
process.env.NODE_TLS_REJECT_UNAUTHORIZED='0';
const express = require('express');
const path = require('path');
const massive = require('massive');
const {SERVER_PORT, CONNECTION_STRING } = process.env;
const cors = require('cors');

const authCtrl = require('./Controllers/authController');
const notesCtrl = require('./controllers/notesController');

const app = express();

app.use(cors());
app.use(express.json());
app.set('trust proxy', true);

app.use( express.static( `${__dirname}/../web-build` ) );

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    // could use this to track where traffic is coming from: lookup('50.4.132.37').country
    console.log('db connected');
});

// register, login, reset, update, delete user apis
app.get("/api/auth/sendCode/:email", authCtrl.sendCode);
app.get("/api/user/:userId", authCtrl.getUser);

app.post("/api/auth/register", authCtrl.register);
app.post("/api/auth/login", authCtrl.login);
app.post("/api/resetCode", authCtrl.resetCode);
app.post("/api/resetPassword", authCtrl.resetPassword);

app.put("/api/update/email", authCtrl.updateEmail);
app.put("/api/auth/logout", authCtrl.logout);

app.delete("/api/delete/user/:userId", authCtrl.deleteUser);

// handle any link that does not match the above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/../web-build/index.html'));
});

const port = SERVER_PORT;
app.listen(port, () => console.log(`Port running on port ${port}`));