function mudarcorinput() {
    var input = document.getElementById('email')
    
    if (input.style.backgroundColor == 'cyan'){
        input.style.backgroundColor = 'white'
    }else {
        input.style.backgroundColor = 'cyan'
    }

}