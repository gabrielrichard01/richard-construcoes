$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000');

    $('form').validate({
        messages: {
            nome: 'Por favor, digite o seu nome',
            email: 'Por favor, digite o seu email',
            telefone: 'Por favor, digite o seu telefone',
        },
        submitHandler: function(form){
            console.log(form);
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos){
                alert(`Exitem ${camposIncorretos} campos incorretos`);
            }
        }
    })
})