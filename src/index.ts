import Calculadora from "./calculador";
import Pessoa from "./Pessoa";

const calc = new Calculadora()



const pessoa = new Pessoa('Leonard Vergani', '0', 12, 'M')

pessoa.setNome('LEonardo Vergani')
console.log(pessoa.getNome())

pessoa.setCpf('123.456.789-01')
console.log(pessoa.getCpf())



