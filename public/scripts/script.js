function overlay(isShow){
  var elm = document.querySelector('#overlay');
  if (isShow) {
    elm.style.display = 'block';
  } else {
    elm.style.display = 'none';
  }
}

function openSidebar(){
  overlay(true);
  document.querySelector(".nav-links").style.width = "20rem";
}


function closeSidebar() {
    overlay(false);
  document.querySelector(".nav-links").style.width = "0";
}

var width=[991];
function resizefn(){
if(window.innerWidth<=width[0]){
  document.querySelector("#overlay").addEventListener('click',closeSidebar,{passive: true});
  document.querySelector("#overlay").addEventListener('touchstart',closeSidebar,{passive: true});
  document.querySelector("#overlay").addEventListener('scroll',closeSidebar,{passive: true});
  document.querySelectorAll(".nav-link").forEach(navLink=>navLink.addEventListener('click',closeSidebar,{passive: true}));
}
}

window.onresize=resizefn;
resizefn();


// theme switch
const toggleSwitch = document.querySelector('.themeButton input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
      document.querySelectorAll("img").forEach(img=>img.style.filter="invert(1)");
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark'); 
    }
    else {
      document.documentElement.setAttribute('data-theme', 'light');
      document.querySelectorAll("img").forEach(img=>img.style.filter="invert(0)");
      localStorage.setItem('theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);

const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
      document.querySelectorAll("img").forEach(img=>img.style.filter="invert(1)");
        toggleSwitch.checked = true;
    }
}

