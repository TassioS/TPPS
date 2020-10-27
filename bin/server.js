const app = require('../src/app');

//setando as portas
const port = '3000'

app.listen(port, function () {
    console.log(`Rodando na porta ${port}`);
})