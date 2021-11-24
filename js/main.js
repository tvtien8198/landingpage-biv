let scrollpos = window.scrollY
const header = document.querySelector(".nav")
const header_height = header.offsetHeight

const add_class_on_scroll = () => header.classList.add("fade-in")
const remove_class_on_scroll = () => header.classList.remove("fade-in")

const scrollTop = document.querySelector('.scroll-top-btn')

const preLoader = document.querySelector('.preloader')

const menuMobile = document.querySelector('.menu-item')

const toggleBtn = document.getElementById('toggle-menu')

const iconMenu = document.getElementById('icon-menu')

toggleBtn.onclick = (e) => {
  e.preventDefault()
  menuMobile.classList.toggle('active')
  if(iconMenu.classList.contains('bx-menu')) {
    iconMenu.classList.replace('bx-menu', 'bx-x')
  }else {
    iconMenu.classList.replace('bx-x', 'bx-menu')
  }
}

window.addEventListener('scroll', function() { 
    scrollpos = window.scrollY;

    scrollpos >= header_height ? add_class_on_scroll() : remove_class_on_scroll() 

    scrollpos >= 300 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active')
})

window.onload = () => {
    setTimeout(() => {
        preLoader.classList.add('hidden')
    },1000)
}


const counters = document.querySelectorAll('.counter-number');

for(let n of counters) {
  const updateCount = () => {
    const target = + n.getAttribute('data-target');
    const count = + n.innerText;
    const speed = 5000; 
    const inc = target / speed; 
    if(count < target) {
      n.innerText = Math.ceil(count + inc);
      setTimeout(updateCount, 1);
    } else {
      n.innerText = target;
    }
  }
  updateCount();
}

$('.scroll-top-btn').on('click', function(e) {
  e.preventDefault();
  $("html, body").animate({scrollTop: 0}, 500);
}) 
$('.menu-item li a').on('click', function(e) {
    if (this.hash !== '') {
      e.preventDefault();
      
      const hash = this.hash;
      const li = $('.menu-item li')
      const parentNode = $(this).parent()
      li.each((i, item) => {
        if($(item).hasClass('active')) {
          $(item).removeClass('active')
          parentNode.addClass('active')
        }
      })
      $('html, body')
        .animate({
          scrollTop: $(hash).offset().top
        },800);
    }
});
