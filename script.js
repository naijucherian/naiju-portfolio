const menu=document.querySelector('.menu'), nav=document.querySelector('.navlinks');
menu.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.navlinks a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const bar=document.querySelector('.progress');
window.addEventListener('scroll',()=>{const h=document.documentElement.scrollHeight-innerHeight;bar.style.width=(scrollY/h*100)+'%'});

// Dark / light theme switch; remembers the visitor's choice on this device.
const themeToggle=document.getElementById('themeToggle');
const applyTheme=(theme)=>{document.body.classList.toggle('light-theme',theme==='light');if(themeToggle){themeToggle.textContent=theme==='light'?'☾ Dark':'☀ Light';themeToggle.setAttribute('aria-label',theme==='light'?'Switch to dark theme':'Switch to light theme');}};
let savedTheme=null;try{savedTheme=localStorage.getItem('naiju-portfolio-theme')}catch(e){}
applyTheme(savedTheme==='light'?'light':'dark');
themeToggle?.addEventListener('click',()=>{const next=document.body.classList.contains('light-theme')?'dark':'light';applyTheme(next);try{localStorage.setItem('naiju-portfolio-theme',next)}catch(e){}});
