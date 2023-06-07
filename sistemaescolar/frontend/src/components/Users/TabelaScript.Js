import axios, {isCancel, AxiosError} from 'axios';
axios.get('http://localhost:3000/aluno')
.then(function (response) {
    document.getElementById('exibir').innerHTML=response.data.map(function (aluno) {
        return(
            '<tr>' +
            '<td>' + aluno.matricula + '</td>' +
            '<td>' + aluno.nome + '</td>' +
            '<td> <a onclick="javascript:return excluirAluno(`'+aluno._id+'`);">Excluir</a> </td>' +
            '</tr>'
        );
    }).join('')
})
    .catch(function (err)  {
        document.getElementById('pessoa').innerHTML = '<li class="text-danger">' + err.message + '</li>'
    });

    function excluirAluno(id) {
        axios.delete('http://localhost:3000/aluno/'+ id +'')
        .then(function(response){
            location.reload();
        })
        .catch(function (err){
            document.getElementById("output").innerHTML = '<div class="alert alert-danger alert-dismissible fade show" role="alert"><strong>'+ err.message +'</strong><button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';
        });
    }
    