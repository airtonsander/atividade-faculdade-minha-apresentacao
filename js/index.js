/* Faz com que apareça na tela apenas oq selecionamos no menu superior */
function secao(secaoId) {
    var menu = document.querySelectorAll('.pagina');
    for (var um = 0; um < menu.length; um++) {
        menu[um].classList.remove('ativa');
    }
    document.getElementById(secaoId).classList.add('ativa');
}