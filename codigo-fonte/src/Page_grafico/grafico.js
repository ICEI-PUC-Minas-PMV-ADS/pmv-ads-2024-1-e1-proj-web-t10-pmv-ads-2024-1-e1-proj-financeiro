// pegar os valores de entrada e saida do localStorage

let Modal_About = {
  open() {
    document.querySelector(".modal-About").classList.add("active");
  },
  close() {
    document.querySelector(".modal-About").classList.remove("active");
  },
};


let Menu_lateral = {
  open() {
    document.querySelector(".side-bar").classList.add("active");
  },
  close() {
    document.querySelector(".side-bar").classList.remove("active");
  },
}


const valoresEntrada = localStorage.getItem('dev.finances:transactions') || [];
let valoresObject = JSON.parse(valoresEntrada);
console.log(valoresObject);

let amountNegative = [];
let amountPositive = [];



function mostrarDatas(valoresObject){
  dataValores = [];
  for (let i = 0; i < valoresObject.length; i++){
    dataValores[i] =  valoresObject[i].date;
  }
  return dataValores;
}

function criarArrayValores(valoresObject){
  for (let i = 0; i < valoresObject.length; i++){
    let valor = valoresObject[i].amount/100;
    if (valor > 0){
      amountPositive.push(valor)
    }else {
      amountNegative.push(valor);
    }
   
  }

  return amountPositive, amountNegative;
}

criarArrayValores(valoresObject);
mostrarDatas(valoresObject)

// criando o grafico 

const content = document.getElementsByClassName('chartJs');
new Chart(content, {
  type: 'bar',
  data: {
    labels: dataValores,
    datasets: [
      {
        label: 'Entrada em Reais(R$)',
        data: amountPositive,
        borderWidth: 1,
        backgroundColor : 'rgba(39, 174, 96, 0.65)'
      },
      {
        label: 'Saída em Reais(R$)',
        data: amountNegative,
        borderWidth: 1,
        backgroundColor : 'rgba(231, 76, 60,0.65)'
      },
    ],
    
    
    options: {
      layout : {
        padding : {
          left :20,
          right :20,
          top :20,
          bottom :20
        }
      },
      title : {
        display : true,
        text :"fdfdd "
      },
    
      legend: {
        display : true,
        position: 'bottom'
      }
    },
  },

  // Configuration options
  
})



