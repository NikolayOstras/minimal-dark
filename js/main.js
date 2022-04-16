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

function select(selector, filterTrue) {
  const dropDown = document.querySelector(selector)
  let filterItems = 0
  //filter init
  if (filterTrue) {
     const filterList = dropDown.querySelector('.dropdown__filter')
     if (filterList !== 0) {
        filterItems = filterList.querySelectorAll('[filter]')
     }

  }
  if (dropDown !== null) {
     const dropDownButton = dropDown.querySelector('.dropdown__button')
     const dropDownList = dropDown.querySelector('.dropdown__list')
     const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item')
     const dropDownInput = dropDown.querySelector('.dropdown__input--hidden')



     //open select list
     dropDownButton.addEventListener('click', function () {
        dropDownList.classList.toggle('dropdown__list--visible')
        this.classList.add('dropdown__button--active') //add active shadow
     })
     //open list and select value
     dropDownListItems.forEach(function (listItem) {
        listItem.addEventListener('click', function (e) {
           e.stopPropagation
           dropDownButton.innerText = this.innerText
           dropDownButton.focus()
           dropDownInput.value = this.dataset.value
           dropDownList.classList.remove('dropdown__list--visible')
           selectFilterValue(listItem.getAttribute('data-value'))
        })
     })
     //close select when click out
     document.addEventListener('click', function (e) {
        if (e.target !== dropDownButton) {
           dropDownList.classList.remove('dropdown__list--visible')
           dropDownButton.classList.remove('dropdown__button--active')
        }
     })
     //close select by press key esc or tab
     document.addEventListener('keydown', function (e) {
        if (e.key === 'Tab' || e.key === 'Escape') {
           dropDownList.classList.remove('dropdown__list--visible')
           dropDownButton.classList.remove('dropdown__button--active')
        }
     })

  }
  function selectFilterValue(filterValue) {
     filterItems.forEach(function (element) {
        let value = element.getAttribute('filter')
        element.style.display = ''
        if (value !== filterValue) {
           element.style.display = 'none'
        }
        if (filterValue === 'all') {
           element.style.display = ''
        }

     })
  }
}
select ('.dropdown' , true)
// ----- //