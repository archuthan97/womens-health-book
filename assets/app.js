(function(){
  var root=document.documentElement;
  function setLang(l){
    root.dataset.lang=l;
    try{localStorage.setItem('whb_lang',l)}catch(e){}
    document.querySelectorAll('.lang button').forEach(function(b){b.setAttribute('aria-pressed',b.dataset.set===l)});
  }
  setLang(root.dataset.lang||'both');
  document.querySelectorAll('.lang button').forEach(function(b){b.addEventListener('click',function(){setLang(b.dataset.set)})});

  var mb=document.getElementById('menubtn'),menu=document.getElementById('menu');
  function toggle(open){menu.hidden=!open;mb.setAttribute('aria-expanded',open)}
  mb.addEventListener('click',function(){toggle(menu.hidden)});
  menu.addEventListener('click',function(e){if(e.target.closest('a'))toggle(false)});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'){toggle(false);lb.hidden=true}});

  var lb=document.getElementById('lightbox'),lbi=lb.querySelector('img');
  document.addEventListener('click',function(e){
    var im=e.target.closest('.pic img');
    if(im){lbi.src=im.src;lbi.alt=im.alt;lb.hidden=false}
    else if(e.target.closest('#lightbox')){lb.hidden=true}
  });
})();
