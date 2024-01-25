function menu(){
    var menu = document.getElementById('hamburguer-menu')
    if (menu.style.display == 'flex'){
        menu.style.display = 'none'
    }else {
        menu.style.display = 'flex'
    }
}