const app = require('./src/app');
const http = require('http').Server(app);
const io = require('socket.io')(http);

const port = 3000;
io.on('connection', (socket) => {

    //Recebe e publica os comunicados gerais
      socket.on('public news', msg => {
        io.emit('public news', msg);
      });
      //Pesquisa histórico de disciplinas concluídas por um aluno 
      socket.on('historico', msg => {
        var objeto = [msg,'concluido'] 
        io.emit('historico', objeto);
      });
    
    });

app.listen(port, () => {
  console.log(`SERVER.JS Uranos web Executando em http://localhost:${port}/`);
});