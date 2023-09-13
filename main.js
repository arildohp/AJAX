// document.addEventListener('DOMContentLoaded',function() {
 //       const xhttp = new XMLHttpRequest();
 //       const cep = document.getElementById('cep').value;
 //       const endpoint = `https://viacep.com.br/ws/${cep}/json`;
//
 //       xhttp.open('GET', endpoint);
 //       xhttp.send();
//    })
//})
//


$(document).ready(function() {
    $('#cep').mask('00000-000');

    $('#btn-buscar-cep').click(function() {
        const cep = $('#cep').val();
        const endpoint = `https://viacep.com.br/ws/${cep}/json/resposta`;
        const botao = $(this);
        $(botao).find('i').addClass('d-none');
        $(botao).find('span').removeClass('d-none');

       // $.ajax(endpoint).done(function(resposta) {
         //   const logradouro = resposta.logradouro;
         //   const bairro = resposta.bairro;
        //    const cidade = resposta.localidade;
        //    const estado = resposta.uf;
       //     const endereco = `${logradouro}, ${bairro} - ${cidade} - ${estado}`;
        //    $('#endereco').val(endereco);

        //   setTimeout(function(){
         //     $(botao).find('i').removeclass('d-none');
          //    $(botao).find('span').addclass('d-none');  
           // }, 400);
           fetch(endpoint).then(function(resposta) {
               return resposta.json();
           })
           .then(function(json) {
                const logradouro = json.logradouro;
                const bairro = json.bairro;
                const cidade = json.localidade;
                const estado = json.uf;
                const endereco = `${logradouro}, ${bairro} - ${cidade} - ${estado}`;
                $('#endereco').val(endereco);

                setTimeout(function(){
                    $(botao).find('i').removeclass('d-none');
                    $(botao).find('span').addclass('d-none');  
          }, 400);

       })
   })
})