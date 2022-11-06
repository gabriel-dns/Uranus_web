exports.historicoReturno = (msg) =>{

    var historico = require('../dados/historico.json')
var result = "nulo";

for(var i = 0; i< historico.length;i++){

   var item = historico[i][0].toLowerCase()

    if(item == msg){
        result =historico[i];
        break;

        
    }
}


    
   return result;


  }

  exports.gradeReturno = (msg) =>{


    var historico = require('../dados/grade.json')
    var result = "nulo";

for(var i = 0; i< historico.length;i++){

 var item = historico[i][0].toLowerCase()

    if(item == msg){
        result =historico[i];
        break;
        
    }
}


    
   return result;


  }