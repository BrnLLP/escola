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
import Nav from '../template/Nav'
function App() {
  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

      <MDBInput wrapperClass='mb-4' label='Usuário' id='form1' type='text'/>
      <MDBInput wrapperClass='mb-4' label='Senha' id='form2' type='password'/>


      <MDBBtn className="mb-4">Sign in</MDBBtn>

  

    </MDBContainer>
  );
}

export default App;