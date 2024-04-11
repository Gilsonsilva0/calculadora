function calcular(tipo, valor){
    // define o tipo (ação ou valor) e o seu valor
    console.log(tipo, valor)

    if (tipo === 'acao'){

        // comando usado para limpar o campo resultado
        if (valor === 'c'){
            document.getElementById('resultado').value = ''
        }

        // comando usado para encontar o operador matemático
        if (valor === '+' || valor === '-' || valor === '*' || valor ==='/' || valor === '.'){
            document.getElementById('resultado').value += valor
        }

        if (valor === '='){
            let campo_resultado = eval(document.getElementById('resultado').value)

            document.getElementById('resultado').value = campo_resultado
        }

    } else if (tipo === 'valor'){

        document.getElementById('resultado').value += valor 
    }

    if (document.getElementById('resultado').value == 'undefined'){
        document.getElementById('resultado').value ='0'
    }
}
