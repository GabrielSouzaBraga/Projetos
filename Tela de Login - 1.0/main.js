function mostrarsenha(){
  var inputpass = document.getElementById('senha')
  var btnShowPass = document.getElementById('btnsenha')

  if(inputpass.type === 'password'){
    inputpass.setAttribute('type','text')
    btnShowPass.classList.replace('bxs-show','bxs-hide')
  }else{
      inputpass.setAttribute('type','password')
      btnShowPass.classList.replace('bxs-hide','bxs-show')
  }
}