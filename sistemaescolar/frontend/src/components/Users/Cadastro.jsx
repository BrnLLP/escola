import axios from 'axios'
import React, { useState } from 'react'
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit'
function App() {
  return (
    <div id = "output">
    <form id='form'>
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

      <MDBInput wrapperClass='mb-4' label='Usuário' id='usuario' type='text'/>
      <MDBInput wrapperClass='mb-4' label='Senha' id='senha' type='password'/>
      <MDBInput wrapperClass='mb-4' label='Matricula' id='matricula' type='number'/>
      <MDBInput wrapperClass='mb-4' label='CPF' id='cpf' type='text'/>


      <MDBBtn className="mb-4" id="btn">Cadastrar</MDBBtn>

  

    </MDBContainer>
    </form>
    </div>
    <script> 
    const form = document.getElementById('form');
    const usuarioInput = document.getElementById('usuario');
    const senhaInput = document.getElementById('senha');
    const matriculaInput = document.getElementById('matricula');
    const cpfInput = document.getElementById('cpf');
  
    btn.addEventListener("click", () => {
     const usuario = usuarioInput.value;
     const senha = senhaInput.value;
     const matricula = matriculaInput.value;
     const cpf = cpfInput.value;
      
     axios.post(''https://localhost:3000/aluno') , {
          usuario: matricula,
          senha : senha,
          matricula : parseInt(matricula),
          cpf : cpf
                })
     .then((response) => {
           output.innterHTML = '<div> Cadastro realizado com sucesso  </div>'
    }).catch(function (err){
      document.getElementById('output')>innerHTML = '<div> Cadastro realizado com sucesso  </div>'
    })
    })
    </script>
  );
}

export default App;
