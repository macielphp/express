const express = require('express');
const app = express();
const port = 3000;

// Middleware para interpretar json
app.use(express.json());

// Banco de dados em memória
let frases = [
    'Acredite em você!',
    'Você é mais forte do que imagina.',
    'Não desista dos seus sonhos',
];

// Rotas para frases aleatórias
app.get('/quote', (req, res) => {
    const randomIndex = Math.floor(Math.random() * frases.length);
    res.json({ frase: frases[randomIndex]});
});

// Rota para listar todas as frases
app.get('/quotes', (req, res) => {
    res.json({ frases });
});

// Rota para adicionar nova frase
app.post('/quote', (req, res) => {
    const { frase } = req.body;
    if(!frase) {
        return res.status(400).json({ erro: 'Frase é obrigatória.' })
    }

    frases.push(frase);
    res.status(201).json({ mensagem: 'Frase adicionada com successo!', frase});
});

// Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
})
