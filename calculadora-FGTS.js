const formFGTS = document.getElementById('form-fgts')
const salBrut = 0
const saldoAnt = 0
const data1 = 0
const data2 = 0


formFGTS.addEventListener('submit', (event) => {
    event.preventDefault()
    event.stopPropagation()
    const salarioBrutoInput = document.querySelector('#floatingInputGrid1')
    salBrut = salarioBrutoInput.value
    const saldoAnteriorInput = document.querySelector('#floatingInputGrid2')
    saldoAnt = saldoAnteriorInput.value
    const dataInicialInput = document.querySelector('#floatingInputGrid3')
    data1 = dataInicialInput.value
    const dataFinalInput = document.querySelector("#floatingInputGrid4")
    data2 = dataFinalInput.value

    console.log(FGTS)
    console.log(getMonthDifference())
} )

const startDate = new Date(FGTS[2])
const endDate = new Date(FGTS[3])

function getMonthDifference(startDate, endDate) {
    return (
      endDate.getMonth() - 
      startDate.getMonth() + 
      12 * (endDate.getFullYear() - startDate.getFullYear())
    );
  }

 




// function fgts(valorSalarioBruto, valorDataFinal, valorDatainicial) {
//     const depositoMensal = valorSalarioBruto * 0.08
//     const mesesDeContribuicao = ( - dataInicial) // Devolver o numero de meses entre essas duas datas
//     const depositoTotal = depositoMensal * mesesDeContribuicao

//     console.log(depositoTotal);

//     return depositoTotal
// }
