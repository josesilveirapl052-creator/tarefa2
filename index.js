const express = require("express");
const app = express();
const PORT = 3000;

const head = `<!DOCTYPE html>
            <html lang="pt-BR">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Catálogo de Heróis</title>
            </head>`

//Rota principal
app.get("/", (req, res)=>{
    res.send(`
        ${head}        
        <body>
            <h1>Catálogo de Heróis.</h1>
            <p>Seja bem vindo ao nosso catálogo de super-heróis Marvel e DC.</p>
            <p>Acesse os universos:</p>
            <a href="http://localhost:3000/marvel">Marvel</a>
            <hr>
            colocar 04 links dos super-heróis aqui
            <br><br><br>
            <a href="http://localhost:3000/dc">DC</a>
            <hr>
            colocar 04 links dos super-heróis aqui
        </body>
        </html>
    `)
});

//Rota Marvel
app.get("/marvel", (req,res)=>{
    res.send(`
        ${head}
        <body>
            <h1>Marvel</h1>
            <p>A Marvel Entertainment é uma empresa de entretenimento conhecida mundialmente pela criação de histórias em quadrinhos e personagens icônicos, como Homem-Aranha, Homem de Ferro, Capitão América e Hulk. Atualmente, faz parte da The Walt Disney Company e possui filmes, séries, jogos e produtos inspirados em seu universo de super-heróis.</p>
            <a href="http://localhost:3000/homemaranha">Homem-Aranha</a><br>
            <a href="http://localhost:3000/ironman">Homem de Ferro</a><br>
            <a href="http://localhost:3000/capitaoamerica">Capitão América</a><br>
            <a href="http://localhost:3000/hulk">HUlk</a>
            <br><br><br>
            <a href="http://localhost:3000/">Voltar a página principal</a>    
        </body>
        </html>
    `)
});

//Rota DC
app.get("/dc", (req,res)=>{
     res.send(`
        ${head}
        <body>
            <h1>DC Comics</h1>

            <p>A DC Comics é uma das maiores editoras de histórias em quadrinhos do mundo, conhecida pela criação de super-heróis icônicos como Superman, Batman, Mulher-Maravilha e Flash. Seu universo inclui histórias em quadrinhos, filmes, séries, jogos e outros produtos inspirados em seus personagens.</p>

            <a href="http://localhost:3000/superman">Superman</a><br>
            <a href="http://localhost:3000/batman">Batman</a><br>
            <a href="http://localhost:3000/mulhermaravilha">Mulher-Maravilha</a><br>
            <a href="http://localhost:3000/flash">Flash</a><br>
            <br><br><br>
            <a href="http://localhost:3000/">Voltar a página principal</a>    
        </body>
        </html>
    `)
});

//Inicia o servidor
app.listen(PORT, ()=>{
    console.log(`Servidor rodando no endereço http://localhost:${PORT}`)
})
