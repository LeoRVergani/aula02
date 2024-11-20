function calcularInss(salarioBruto: number){
    let inss = 0

    if(salarioBruto > 4000.04){
        inss = salarioBruto * 14 / 100
    } else if (salarioBruto > 2666.69){
        inss = salarioBruto * 12 / 100
    } else if (salarioBruto > 1412.01){
        inss = salarioBruto * 9 / 100
    } else {
        inss = salarioBruto * 7.5 / 100
    }

    if(inss > 908.85) inss = 908.85

    return inss
}

function calcularImpostoDeRena(renda: number): number {
    if (renda:)
}

function calcularSalarioLiquido

class mouse {
    nome: string = 'logitech'
    cor: string = 'cinza'
    temCabo: boolean = true

    clica(){}
    mexe(){}
}
