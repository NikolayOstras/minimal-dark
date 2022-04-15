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
    this.parentElement.parentElement.classList.remove(active)
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