window.addEventListener('load',function(){
    let herocontainer = document.querySelector('.hero-container');
    let shortencontainer = document.getElementById('shorten-container');
   let dynamictop = herocontainer.offsetHeight+35 + 'px';
   shortencontainer.style.top= dynamictop;
})
