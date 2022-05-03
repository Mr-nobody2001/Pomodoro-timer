let varNavegacao = document.getElementsByTagName("ul")[0].children

let varGlobal = document.getElementById("idGlobal")

let varNumero = document.getElementById("idNumero")

let varButao = document.getElementById("idButao")

let varTitulo = document.getElementById("idTitulo")

let varMinutos = [24, 4, 14]

let varMinutoS = [25, 5, 15]

let varSegundo = 60

let primeiroSet = null

let n = 0

let n2 = 0

// Muda o cursor

for (let i of varNavegacao) {

    i.addEventListener("mouseover", function () {

        i.style.cursor = "pointer"
    })
}

varButao.addEventListener("mouseover", function () {

    varButao.style.cursor = "pointer"
})

// Seta a função dos botóes de navegação

varNavegacao[0].style.backgroundColor = "rgba(0, 0, 0, 0.15)"

varNavegacao[0].addEventListener("click", function fun0 () {

    document.body.style.backgroundColor = "#D95550"

    varGlobal.style.backgroundColor = "#DD6662"

    varNavegacao[1].style.backgroundColor = "#DD6662"

    varNavegacao[2].style.backgroundColor = "#DD6662"

    varButao.style.color = "#DD6662"

    varNavegacao[0].style.backgroundColor = "rgba(0, 0, 0, 0.15)"

    varNumero.innerText = "25:00"

    varTitulo.innerText = "25:00 - Time to focus !"

    clearInterval(primeiroSet)

    varButao.innerText = "Start"

    varButao.style.borderBottom = "8px solid rgba(0, 0, 0, 0.2)"

    varMinutos[0] = 24

    varSegundo = 60

    n = 0

    n2 = 0

})

varNavegacao[1].addEventListener("click", function fun1 () {

    document.body.style.backgroundColor = "#4C9195"

    varGlobal.style.backgroundColor = "#5E9CA0"

    varNavegacao[0].style.backgroundColor = "#5E9CA0"

    varNavegacao[2].style.backgroundColor = "#5E9CA0"

    varButao.style.color = "#5E9CA0"

    varNavegacao[1].style.backgroundColor = "rgba(0, 0, 0, 0.15)"

    varNumero.innerText = "05:00"

    varTitulo.innerText = "05:00 - Time for a break !"

    clearInterval(primeiroSet)

    varButao.innerText = "Start"

    varButao.style.borderBottom = "8px solid rgba(0, 0, 0, 0.2)"

    varMinutos[1] = 4

    varSegundo = 60

    n = 0

    n2 = 1


})

varNavegacao[2].addEventListener("click", function fun2 () {

    document.body.style.backgroundColor = "#457CA3"

    varGlobal.style.backgroundColor = "#5889AC"

    varNavegacao[0].style.backgroundColor = "#5889AC"

    varNavegacao[1].style.backgroundColor = "#5889AC"

    varButao.style.color = "#5889AC"

    varNavegacao[2].style.backgroundColor = "rgba(0, 0, 0, 0.15)"

    varTitulo.innerText = "15:00 - Time for a break !"

    varNumero.innerText = "15:00"

    clearInterval(primeiroSet)

    varButao.innerText = "Start"

    varButao.style.borderBottom = "8px solid rgba(0, 0, 0, 0.2)"

    varMinutos[2] = 14

    varSegundo = 60

    n = 0

    n2 = 2
})

function funCronometro() {

    varSegundo--

    if (varSegundo == -1) {

        varSegundo = 59

        varMinutos[n2]--
    }

    if (varSegundo >= 10 && varMinutos[n2] >= 10) {

        varNumero.innerText = varMinutos[n2] + ":" + varSegundo

        varTitulo.innerText = varMinutos[n2] + ":" + varSegundo + " - Time to focus !"
    }


    if (varSegundo < 10 && varSegundo >= 0) {

        varNumero.innerText = varMinutos[n2] + ":0" + varSegundo

        varTitulo.innerText = varMinutos[n2] + ":0" + varSegundo + " - Time to focus !"

    }

    if (varMinutos[n2] < 10 && varMinutos[n2] >= 0) {

        varNumero.innerText = "0" + varMinutos[n2] + ":" + varSegundo

        varTitulo.innerText = "0" + varMinutos[n2] + ":" + varSegundo + " - Time to focus !"
    }

    if (varSegundo < 10 && varSegundo >= 0 && varMinutos[n2] < 10 && varMinutos[n2] >= 0) {

        varNumero.innerText = "0" + varMinutos[n2] + ":0" + varSegundo

        varTitulo.innerText = "0" + varMinutos[n2] + ":0" + varSegundo + " - Time to focus !"

    }

    if (varMinutos[n2] == -1) {

        clearInterval(primeiroSet)

        if (n2 == 1) {

            varTitulo.innerText = "0" + varMinutoS[n2] + ":00 - Time to focus !"

            varNumero.innerText = "0" + varMinutoS[n2] + ":00"
        }

        if (n2 != 1) {

            varTitulo.innerText = varMinutoS[n2] + ":00 - Time to focus !"

            varNumero.innerText = varMinutoS[n2] + ":00"
        }

        varButao.innerText = "Start"

        varButao.style.borderBottom = "8px solid rgba(0, 0, 0, 0.2)"

        varMinutos = [24, 4, 14]

        n = 0
    }

}

varButao.addEventListener("click", function () {

    if (n == 0) {

        varButao.style.borderBottom = "none"

        varButao.innerText = "Stop"

        primeiroSet = setInterval(funCronometro, 1000)
    }

    if (n == 1) {

        varButao.style.borderBottom = "8px solid rgba(0, 0, 0, 0.2)"

        varButao.innerText = "Start"

        clearInterval(primeiroSet)

        n -= 2
    }

    n++
})
