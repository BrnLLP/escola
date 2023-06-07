import axios from 'axios'
const form = document.getElementById('form');
const usuarioInput = document.getElementById('usuario');
const senhaInput = document.getElementById('senha');
const matriculaInput = document.getElementById('matricula');
const cpfInput = document.getElementById('cpf');

function Cadastro(){
 const usuario = usuarioInput.value;
 const senha = senhaInput.value;
 const matricula = matriculaInput.value;
 const cpf = cpfInput.value;
  
 axios.post('https://localhost:3000/aluno' , {
      usuario : usuario,
      senha : senha,
      matricula : parseInt(matricula),
      cpf : cpf
            })
 .then((response) => {
       alert('Cadastro realizado com sucesso')
}).catch(function (err){
  alert('Erro ao cadastrar')
})
}