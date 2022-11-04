
exports.main = async (req, res) => {
    res.sendFile(process.cwd() + '/src/pages/index.html');
  
    
  };
  exports.historico = async (req, res) => {
    res.sendFile(process.cwd() + '/src/pages/historico.html');
  };

 