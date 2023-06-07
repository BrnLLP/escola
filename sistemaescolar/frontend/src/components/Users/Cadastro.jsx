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
    <html>
    <body>
      <script src='Cadastro.js'/>
    <div id='output'>
    <form id='form'>
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

      <MDBInput wrapperClass='mb-4' label='Usuário' id='usuario' type='text'/>
      <MDBInput wrapperClass='mb-4' label='Senha' id='senha' type='password'/>
      <MDBInput wrapperClass='mb-4' label='Matricula' id='matricula' type='number'/>
      <MDBInput wrapperClass='mb-4' label='CPF' id='cpf' type='text'/>


      <MDBBtn className="mb-4" id="btn" onclick='Cadastro()'>Cadastrar</MDBBtn>

  

    </MDBContainer>
    </form>
    </div>
    </body>
    </html>
  );
}

export default App;
