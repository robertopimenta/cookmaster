const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

// imports models
const Users = require('./models/users.model');

const PORT = 5000;

mongoose.connect('mongodb://localhost:27017/Cookmaster', {
    useUnifiedTopology: true
}).then(() => {
    console.log('Conexão com o banco de dados realizada com sucesso.');
}).catch((err) => {
    console.log(err);
});

app.use(cors());
app.use(express.json());

app.get('/index', (req, res) => {
    return res.status(200).json({
        mensagem: 'Você acessou a rota /index'
    });
});

app.post('/novoUsuario', async (req, res) => {
    const dados = req.body;
    //console.log(dados);
    await Users.create(dados).then((user) => {
        return res.status(201).json({
            user
        });
    }).catch((err) => {
        return res.status(400).json({
            err
        });
    });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

