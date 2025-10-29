const avanca = document.querySelectorAll('.btn-proximo')


avanca.forEach(button =>{
   button.addEventListener('clik',function(){
    const atual =document.querySelector('.ativo')
    const proximoPasso = 'passo-' + getAttribute('data-proximo')

        atual.classList.remove('ativo')
        document.getElementBYId(proximoPasso).classList.add('ativo')