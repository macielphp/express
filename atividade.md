# Atividade

Vamos começar com um desafio bem direto pra praticar o básico do Express:

### 🎯 Desafio: Criar uma API de Frases Motivacionais

**Objetivo**: Criar uma API simples que:
1. Exiba uma mensagem motivacional aleatória (`GET /quote`)
2. Permita adicionar novas frases (`POST /quote`)
3. Liste todas as frases disponíveis (`GET /quotes`)

### 🧱 Passo a passo para começar do zero:

1. **Crie uma pasta para o projeto** e entre nela:
```bash
mkdir frases-api && cd frases-api
```

2. **Inicie um projeto Node.js:**
```bash
npm init -y
```

3. **Instale o Express:**
```bash
npm install express
```

4. **Crie um arquivo `index.js`:**
```bash
touch index.js
```

Vamos montar o esqueleto do `index.js` pra rodar sua API de frases.

```js
// index.js
const express = require('express');
const app = express();
const port = 3000;

// Middleware para interpretar JSON
app.use(express.json());

// "Banco de dados" em memória
let frases = [
  "Acredite em você!",
  "Você é mais forte do que imagina.",
  "Não desista dos seus sonhos.",
];

// Rota para frase aleatória
app.get('/quote', (req, res) => {
  const randomIndex = Math.floor(Math.random() * frases.length);
  res.json({ frase: frases[randomIndex] });
});

// Rota para listar todas as frases
app.get('/quotes', (req, res) => {
  res.json({ frases });
});

// Rota para adicionar nova frase
app.post('/quote', (req, res) => {
  const { frase } = req.body;
  if (!frase) {
    return res.status(400).json({ erro: 'Frase é obrigatória.' });
  }

  frases.push(frase);
  res.status(201).json({ mensagem: 'Frase adicionada com sucesso!', frase });
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
```
---

### ✅ Agora:
1. Salva esse arquivo.
2. No terminal, roda:
```bash
node index.js
```
3. Testa no navegador ou no [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/) essas rotas:
- `GET http://localhost:3000/quote`
- `GET http://localhost:3000/quotes`
- `POST http://localhost:3000/quote` com body JSON como:
```json
{ "frase": "A prática leva à perfeição!" }
```
