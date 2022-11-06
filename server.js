const app = require('./src/app');
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;


io.on('connection', (socket) => {
  socket.on('public news', msg => {

    io.emit('public news', msg);
  });

  socket.on('historico', msg => {
    const controler = require('./src/controllers/findController');
   var valor = controler.historicoReturno(msg);
    io.emit('historico', valor);
  });
  socket.on('grade', msg => {
    const controler = require('./src/controllers/findController');
   var valor = controler.gradeReturno(msg);
    io.emit('grade', valor);
  });
});

http.listen(port, () => {
  console.log(`Servidor Socket executando em http://localhost:${port}/api`);

});
