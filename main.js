$(document).ready(function(){

    $('form').on('submit', function(eve){
        eve.preventDefault();

        const dado = $('#tarefa').val();
        const lista = $('<li>'  + dado + '</li>')
        $('ul').append(lista);
        $('#tarefa').val('');
    })

    $('ul').on('click', 'li', function(){ /* click', 'li' é preciso especificar o 'li' depois do click para delegar o evento de click especifico no elemento desejado. */

        $(this).css({/*  o $(this) é responsavel por acionar o evento somente no elemento que voce deseja alterar, nesse caso, ele sera acionado somente o li que eu clicar, caso o This não esteja no escopo do evento, todos os Li receberão a estilização atribuida no evento */
            'text-decoration':'line-through',
            'background-color':'rgba(132, 132, 133, 0.37)',
            'list-style-type': 'disc'
        })
    })


    
})