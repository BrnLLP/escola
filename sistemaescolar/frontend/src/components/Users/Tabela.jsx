import React from 'react'
import axios, {isCancel, AxiosError} from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
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
  } from 'mdb-react-ui-kit';

export default props =>
<div>
<script src="TabelaScript.Js"/>
<table class="table">
<thead>
        <tr>
            <th>Matricula</th>
            <th>Nome</th>
            <th>Cargo</th>
        </tr>
            
</thead>
<tbody id="exibir">

</tbody>
</table>
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
</div>