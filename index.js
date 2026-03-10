function salario(){
    
    let imposto; 

    let inputSalario = document.getElementById("inputSalario");
    let salario = Number(inputSalario.value); 
    let porcentagem

    
    if (salario > 4664.68){
        let aliquotaA = 896.00
        porcentagem = 0.275
        imposto = (salario * porcentagem) - aliquotaA
        console.log(imposto)
    } else if (salario >= 3751.06) {
        let aliquotaA = 662.77
        porcentagem = 0.225
        imposto = (salario * porcentagem) - aliquotaA
        console.log(imposto)
    } else if (salario >= 2826.66) {
        let aliquotaA = 381.44
        porcentagem = 0.15
        imposto = (salario * porcentagem) - aliquotaA
        console.log(imposto)
    } else if (salario >= 2259.21) {
        let aliquotaA = 169.44
        porcentagem = 0.075
        imposto = (salario * porcentagem) - aliquotaA
        console.log(imposto)
    } else {
        console.log("Isento")
        document.getElementById("texto-salario").textContent = "Isento";
    }

    document.getElementById("texto-salario").textContent = "R$ " + imposto.toFixed(2) + " | " + porcentagem.toFixed(2) + " %"

}

function limpar() {
    document.getElementById("inputSalario").value = "";
    document.getElementById("texto-salario").textContent = "";

}


