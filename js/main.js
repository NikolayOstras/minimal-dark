// webp
function testWebP(callback) {
   const webP = new Image()
   webP.onload = webP.onerror = function () { callback(webP.height == 2) }
   webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA'
   
   }
   
   testWebP(function (support) {
   if (support == true) 
   { document.querySelector('body').classList.add('webp')}
   else{ document.querySelector('body').classList.add('no-webp')}
   })

// burger
function menuOnClick() {
  document.getElementById('menu__bar').classList.toggle('active');
  document.getElementById('menu').classList.toggle('active')
}

//modal
const openButtons = document.querySelectorAll("[data-open]")
const closeButtons = document.querySelectorAll("[data-close]")
const active = 'modal-active'
const html = document.documentElement
let scrollPosition = 0
const fix = document.querySelectorAll('.lock-fix')

function lockFix()
{
  if (fix.length > 0) {
  for ( let i=0; i < fix.length; i++)
  {
    fix[i].style.width = fix[i].offsetWidth + 'px'
    fix[i].style.left = fix[i].offsetLeft + 'px'
   
  }}
}
function unlocklockFix()
{
  if (fix.length > 0) {
  for ( let i=0; i < fix.length; i++)
  {
    fix[i].style.width = ''
    fix[i].style.left = ''
  }}
}

function lockHtml()
{
  const marginSize = window.innerWidth - html.offsetWidth + 'px'
  scrollPosition = window.scrollY
  html.style.top = -scrollPosition + 'px'
  html.classList.add('lock')
  html.style.paddingRight = marginSize 
}

function unlockHtml()
{
  html.classList.remove('lock')
  html.style.top = ''
  html.style.paddingRight = ''
  window.scrollTo(0 , scrollPosition)
}


for (const el of openButtons)
{
  el.addEventListener('click' , function()
  {
    lockFix()
    lockHtml()
   
    const modalId = this.dataset.open
    document.getElementById(modalId).classList.add(active)
  } )
   
  
}

for (const el of closeButtons)
{
  el.addEventListener('click' , function(){
    document.querySelector('.modal-active').classList.remove(active)
    unlocklockFix()
    unlockHtml()
  })
}

document.addEventListener('click' , e =>
{

  if (e.target == document.querySelector('.modal-active'))
  {
    document.querySelector('.modal-active').classList.remove(active)
    unlocklockFix()
    unlockHtml()
  }
})
document.addEventListener('keyup', e => 
{
  if (e.key == "Escape" && document.querySelector('.modal.modal-active'))
   {
    document.querySelector('.modal.modal-active').classList.remove(active)
    unlocklockFix()
    unlockHtml()
  }
})
// --------- //
//swiper
const swiper = new Swiper('.swiper', {
  effect: 'fade',
  autoplay: {
    delay: 3000,
  },
  speed: 500,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
 
});


//bind links to slide

const links = document.querySelectorAll(".slider__nav-item")
links.forEach((el) =>
  el.addEventListener("mouseenter", function () {
    el.classList.add("slider__nav-item--active")
    swiper.slideTo(el.dataset.id)
  })
)
links.forEach((el) =>
  el.addEventListener("mouseleave", function () {
    el.classList.remove("slider__nav-item--active")
    links[swiper.activeIndex].classList.add('slider__nav-item--active')
  })
)
swiper.on('slideChange', function () {
  links.forEach(function(el) {
    el.classList.remove ("slider__nav-item--active")
  })
  links[swiper.activeIndex].classList.add('slider__nav-item--active')
})

// ------- //

// drop-down menu
const dropLink = document.querySelector('.drop__link')
const dropList = document.querySelector('.drop__list')
dropLink.onclick = function () {
    dropLink.classList.toggle('drop__link--active')
    dropList.classList.toggle('drop__list--active')

}
// ----- //
// filter
const filterItems = document.querySelectorAll('.grid__item')
function filter () {
  dropList.addEventListener('click', e => {
    const targetId = e.target.dataset.filter
   

    switch(targetId) {
    
      case 'filter-web':
        getFilterItems(targetId)
        break
      case 'filter-photo':
        getFilterItems(targetId)
        break
      case 'filter-logo':
        getFilterItems(targetId)
        break
      case 'filter-brand':
        getFilterItems(targetId)
        break
      case 'filter-ui':
        getFilterItems(targetId)
        break
      case 'filter-graphic':
        getFilterItems(targetId)
        break
    }
  })
}
filter ()
function getFilterItems(className) {
  filterItems.forEach(item => {
    if (item.classList.contains(className)) {
      item.style.display = 'block'
    }
    else {
      item.style.display = 'none'
    }
  })
}
dropLink.addEventListener('click', e => {
  filterItems.forEach(item => {
    item.style.display = 'block'
  })
})
// ----- //