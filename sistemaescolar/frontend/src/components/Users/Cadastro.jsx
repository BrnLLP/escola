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
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

      <MDBInput wrapperClass='mb-4' label='Usuário' id='form1' type='text'/>
      <MDBInput wrapperClass='mb-4' label='Senha' id='form2' type='password'/>
      <MDBInput wrapperClass='mb-4' label='Matricula' id='form2' type='text'/>
      <MDBInput wrapperClass='mb-4' label='CPF' id='form2' type='text'/>
      <MDBInput wrapperClass='mb-4' label='Cargo' id='form2' type='text'/>


      <MDBBtn className="mb-4">Cadastrar</MDBBtn>

  

    </MDBContainer>
  );
}

export default App;