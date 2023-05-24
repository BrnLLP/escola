import React from 'react'
import axios, {isCancel, AxiosError} from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'

export default props =>
<div>
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
{/* COMENTÁRIO JSX 
<script>
    axios.get('http://localhost:3000/pessoa')
        .then(function (response) {
            document.getElementById('exibir').innerHTML=response.data.map(function (pessoa) {
                return(
                    '<tr>' +
                    '<td>' + pessoa.matricula + '</td>' +
                    '<td>' + pessoa.nome + '</td>' +
                    '<td>' + pessoa.cargo + '</td>' +
                    '</tr>'
                );
            }).join('')
        })
            .catch(function (err)  {
                document.getElementById('pessoa').innerHTML = '<li class="text-danger">' + err.message + '</li>'
            });
            
      
</script>
        */}
</div>