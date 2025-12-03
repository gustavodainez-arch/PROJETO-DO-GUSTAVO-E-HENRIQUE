const avanca = document.querySelectorAll(".btn-proximo")
console.log(avanca)


avanca.forEach(button =>{
   button.addEventListener('clik',function(){
    const atual =document.querySelector('.ativo')
    const proximoPasso = 'passo-' + this.getAttribute('data-proximo')
    console.log(proximoPasso)
        atual.classList.remove('ativo')
        document.getElementBYId(proximoPasso).classList.add('ativo')