
const toogle = document.querySelector('nav .toggle');
const links = document.querySelector('.navbar ul');

toogle.addEventListener('click', function(){
    links.classList.toggle('hidden');
});