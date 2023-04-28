window.onbeforeunload = function() {
  window.scrollTo(0, 0);
}

// slider about
const sliderHeader = document.querySelector('.slider-main')
const sliders = document.querySelectorAll('.person-header')
prevBtnslider = document.querySelector('.bx-chevron-left')
nextBtnslider = document.querySelector('.bx-chevron-right')

let currentSlide = 0
function showSlide(index){
  sliders[currentSlide].classList.remove('active')
  sliders[index].classList.add('active')
  currentSlide = index
}

function nextSlide(){
  let index = currentSlide + 1;
  if (index >= sliders.length) {
    index = 0;
  }
  showSlide(index);
}
function prevSlide() {
  let index = currentSlide - 1;
  if (index < 0) {
    index = sliders.length - 1;
  }
  showSlide(index);
}
prevBtnslider.addEventListener('click', prevSlide);
nextBtnslider.addEventListener('click', nextSlide);
showSlide(currentSlide);

let clicked1 = false;
prevBtnslider.onclick = function(){
  if(!clicked1){
    alert("Слайдер реализован с помощью только одной картинки\nДизайнеры проекта не добавили еще хотябы несколько других, подходящих по тематике картинок для слайдера. \nИзвините :((((((((");
    clicked1 = true
  }
}
let clicked2
nextBtnslider.onclick = function(){
  if(!clicked2){
    alert("Слайдер реализован с помощью только одной картинки\nДизайнеры проекта не добавили еще хотябы несколько других, подходящих по тематике картинок для слайдера. \nИзвините :((((((((");
    clicked2 = true
  }
}
//dots 
const Dot4 = document.getElementById('dot-header1')
const Dot3 = document.getElementById('dot-header2')
const Dot2 = document.getElementById('dot-header3')
const Dot1 = document.getElementById('dot-header4')

nextBtnslider.addEventListener('click', ()=>{
  const imgDot1 = Dot1.src
  Dot1.src = Dot2.src
  Dot2.src = Dot3.src
  Dot3.src = Dot4.src
  Dot4.src = imgDot1
})
prevBtnslider.addEventListener('click', ()=>{
  const imgDot1 = Dot4.src
  Dot4.src = Dot3.src
  Dot3.src = Dot2.src
  Dot2.src = Dot1.src
  Dot1.src = imgDot1
})


//slider comments

//arrows comment slider
const owl = $('.owl-carousel');
$('.bx-chevron-left').click(function () {
	owl.trigger('prev.owl.carousel');
});
$('.bx-chevron-right').click(function () {
  owl.trigger('next.owl.carousel')
});
//slider comments (slider)
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop: true,
    items: 3,
    margin: 26,
    responsive:{
      0:{
        items:1,
        stagePadding:0,
      },
      401:{
        items:1,
        stagePadding:20,
      },
      501:{
        items:1,
        stagePadding:60,
      },
      550:{
        items:1,
        stagePadding: 90,
      },
      600:{
        items:1,
        stagePadding: 90,
      },
      639:{
          items:2
      },
      998:{
        items:3
      }
    }
  });
});
//dots-comments
const dotComments8 = document.getElementById("dotmain-comments1")
const dotComments7 = document.getElementById("dotmain-comments2")
const dotComments6 = document.getElementById("dotmain-comments3")
const dotComments5 = document.getElementById("dotmain-comments4")
const dotComments4 = document.getElementById("dotmain-comments5")
const dotComments3 = document.getElementById("dotmain-comments6")
const dotComments2 = document.getElementById("dotmain-comments7")
const dotComments1 = document.getElementById("dotmain-comments8")
const swappedPrev = document.querySelector('.left-arrow-slider')
const swappedNext = document.querySelector('.right-arrow-slider')
swappedNext.addEventListener('click', ()=>{
  const imgDotcomments = dotComments1.src
  dotComments1.src = dotComments2.src
  dotComments2.src = dotComments3.src
  dotComments3.src = dotComments4.src
  dotComments4.src = dotComments5.src
  dotComments5.src = dotComments6.src
  dotComments6.src = dotComments7.src
  dotComments7.src = dotComments8.src
  dotComments8.src = imgDotcomments
})
swappedPrev.addEventListener('click', ()=>{
  const imgDotcomments = dotComments8.src
  dotComments8.src = dotComments7.src
  dotComments7.src = dotComments6.src
  dotComments6.src = dotComments5.src
  dotComments5.src = dotComments4.src
  dotComments4.src = dotComments3.src
  dotComments3.src = dotComments2.src
  dotComments2.src = dotComments1.src
  dotComments1.src = imgDotcomments
})


//скролл до каталога товаров btn-about
function scrollToElement() {
  const elementCatalog = document.querySelector('.masks'); 
  elementCatalog.scrollIntoView({ behavior: "smooth" });
}

//скролл до определенных блоков на странице через a-header

//a-header1 = catalog
const linkCatalog = document.querySelector('.a-header1');
linkCatalog.addEventListener('click', (event) => {
  event.preventDefault();
  const catalogTarget = document.querySelector('.masks');
  const catalogtargetPosition = catalogTarget.getBoundingClientRect().top + window.pageYOffset;
  const currentPosition = window.pageYOffset;
  const distance = catalogtargetPosition - currentPosition;
  window.scroll({
    top: currentPosition + distance,
    left: 0,
    behavior: 'smooth'
  });
});
//a-header2 = comments
const linkComments = document.querySelector('.a-header2');
linkComments.addEventListener('click', (event) => {
  event.preventDefault();
  const commentsTarget = document.querySelector('.comments');
  const commentstargetPosition = commentsTarget.getBoundingClientRect().top + window.pageYOffset;
  currentPosition = window.pageYOffset;
  distance = commentstargetPosition - currentPosition;
  window.scroll({
    top: currentPosition + distance,
    left: 0,
    behavior: 'smooth'
  });
});

//a-header3 = article
const linkArticle = document.querySelector('.a-header3');
linkArticle.addEventListener('click', (event)=>{
  event.preventDefault();
  const articleTarget = document.querySelector('.article')
  const articletargetPosition = articleTarget.getBoundingClientRect().top + window.pageYOffset;
  currentPosition = window.pageYOffset;
  distance = articletargetPosition - currentPosition;
  window.scroll({
    top: currentPosition + distance,
    left: 0,
    behavior: 'smooth'
  });
});

//a-header4 = faq
const linkFaq = document.querySelector('.a-header4')
linkFaq.addEventListener('click', (event)=>{
  event.preventDefault();
  const faqTarget = document.querySelector('.faq');
  const faqtargetPosition = faqTarget.getBoundingClientRect().top + window.pageYOffset;
  currentPosition = window.pageYOffset;
  distance = faqtargetPosition - currentPosition;
  window.scroll({
    top: currentPosition + distance,
    left: 0,
    behavior: 'smooth'
  });
});
//a-header5 = contacts
const linkContacts = document.querySelector('.a-header5')
linkContacts.addEventListener('click', (event)=>{
  event.preventDefault();
  const contactsTarget = document.querySelector('.map');
  const contactstargetPosition = contactsTarget.getBoundingClientRect().top + window.pageYOffset;
  currentPosition = window.pageYOffset;
  distance = contactstargetPosition - currentPosition;
  window.scroll({
    top: currentPosition + distance,
    left: 0,
    behavior: 'smooth'
  });
});

// mobile navigation 
const mobileul = document.querySelector('.ul-mobile')
const mobile = document.querySelector('.mobile')
const mobileMenu = document.querySelector('.menu-mobile')
const mobilemenuX = document.querySelector('.x')

mobileMenu.onclick = function(){
  mobile.classList.remove('none');
}
mobilemenuX.onclick = function(){
  mobile.classList.add('none');
  window.addEventListener('resize', function() {
    if (window.innerWidth > 668) {
      mobile.classList.add('none');
    }
  });
}

//mobile navigation out to blocks

//mobile1 = catalog
const linkmobileCatalog = document.querySelector('.a-mobile1')
linkmobileCatalog.addEventListener('click', (event)=>{
  event.preventDefault();
  mobile.classList.add('none')
  const mobilecatalogPosition = document.querySelector('.masks');
  const mobilecatalogTargetposition = mobilecatalogPosition.getBoundingClientRect().top + window.pageYOffset;
  currentPosition = window.pageYOffset
  distance = mobilecatalogTargetposition - currentPosition
  window.scroll({
    top: currentPosition + distance,
    left: 0,
    behavior: "smooth"
  });
});
//mobile2 = comments
const linkmobileComments = document.querySelector('.a-mobile2')
linkmobileComments.addEventListener('click', (event)=>{
  event.preventDefault();
  mobile.classList.add('none')
  const mobilecommentsPosition = document.querySelector('.comments');
  const mobilecommentsTargetposition = mobilecommentsPosition.getBoundingClientRect().top + window.pageYOffset;
  currentPosition = window.pageYOffset
  distance = mobilecommentsTargetposition - currentPosition
  window.scroll({
    top: currentPosition + distance,
    left: 0,
    behavior: "smooth"
  })
})
//mobile3 = article
const linkmobileArticle = document.querySelector('.a-mobile3')
linkmobileArticle.addEventListener('click', (event)=>{
  event.preventDefault();
  mobile.classList.add('none')
  const mobilearticlePosition = document.querySelector('.article');
  const mobilearticleTargetposition = mobilearticlePosition.getBoundingClientRect().top + window.pageYOffset;
  currentPosition = window.pageYOffset
  distance = mobilearticleTargetposition - currentPosition
  window.scroll({
    top: currentPosition + distance,
    left: 0,
    behavior: "smooth"
  })
})
//mobile4 = faq
const linkmobileFaq = document.querySelector('.a-mobile4')
linkmobileFaq.addEventListener('click', (event)=>{
  event.preventDefault();
  mobile.classList.add('none')
  const mobilefaqPosition = document.querySelector('.faq');
  const mobilefaqTargetposition = mobilefaqPosition.getBoundingClientRect().top + window.pageYOffset;
  currentPosition = window.pageYOffset
  distance = mobilefaqTargetposition - currentPosition
  window.scroll({
    top: currentPosition + distance,
    left: 0,
    behavior: "smooth"
  })
})

//mobile5 = contacts 
const linkmobileContacts = document.querySelector('.a-mobile5')
linkmobileContacts.addEventListener('click', (event)=>{
  event.preventDefault();
  mobile.classList.add('none')
  const mobilecontactsTarget = document.querySelector('.map')
  const mobilecontactsTargetposition = mobilecontactsTarget.getBoundingClientRect().top + window.pageYOffset;
  currentPosition = window.pageYOffset;
  distance = mobilecontactsTargetposition - currentPosition;

  window.scroll({
    top: currentPosition + distance,
    left: 0,
    behavior: 'smooth'
  })
});
//


// overflow: hidden;
//товары каталог
const main = document.querySelector('main')
const body = document.querySelector('body')
//товар 1
const catalog1 = document.querySelector('.catalog_1')
const mask1 = document.querySelector('.mask1')

const maxWidth = 400; 

mask1.addEventListener('click', ()=>{
  catalog1.classList.remove('none')
  main.style.opacity = "0.5"
  const currentWidth = window.innerWidth;
  if (currentWidth < maxWidth) {
    document.body.style.overflow = 'hidden'; 
  }
})
const btnPurchase1 = document.querySelector('.btn1-purchase_1')
btnPurchase1.addEventListener('click',()=>{
  catalog1.classList.add('none');
  main.style.opacity = 'unset';
  document.body.style.overflow = 'unset'; 
})
const btnNone1 = document.querySelector('.btn2-none_1')
btnNone1.addEventListener('click', ()=>{
  catalog1.classList.add('none');
  main.style.opacity = 'unset';
  document.body.style.overflow = 'unset';
})


//товар 2
const catalog2 = document.querySelector('.catalog_2')
const mask2 = document.querySelector('.mask2')
mask2.addEventListener('click', ()=>{
  catalog2.classList.remove('none')
  main.style.opacity = "0.5"
  const currentWidth = window.innerWidth;
  if (currentWidth < maxWidth) {
    document.body.style.overflow = 'hidden'; 
  }
})
const btnPurchase2 = document.querySelector('.btn1-purchase_2')
btnPurchase2.onclick = function(){
  catalog2.classList.add('none');
  main.style.opacity = 'unset';
  document.body.style.overflow = 'unset'; 
}
const btnNone2 = document.querySelector('.btn2-none_2')
btnNone2.onclick = function(){
  catalog2.classList.add('none');
  main.style.opacity = 'unset';
  document.body.style.overflow = 'unset'; 
}

//товар 3
const catalog3 = document.querySelector('.catalog_3')
const mask3 = document.querySelector('.mask3')
mask3.addEventListener('click', ()=>{
  catalog3.classList.remove('none')
  main.style.opacity = "0.5"
  const currentWidth = window.innerWidth;
  if (currentWidth < maxWidth) {
    document.body.style.overflow = 'hidden'; 
  }
})
const btnPurchase3 = document.querySelector('.btn1-purchase_3')
btnPurchase3.onclick = function(){
  catalog3.classList.add('none')
  main.style.opacity = 'unset'
  document.body.style.overflow = 'unset'; 
}
const btnNone3 = document.querySelector('.btn2-none_3')
btnNone3.onclick = function(){
  catalog3.classList.add('none');
  main.style.opacity = 'unset';
  document.body.style.overflow = 'unset'; 
}

//товар 4
const catalog4 = document.querySelector('.catalog_4')
const mask4 = document.querySelector('.mask4')
mask4.addEventListener('click', ()=>{
  catalog4.classList.remove('none')
  main.style.opacity = "0.5"
  const currentWidth = window.innerWidth;
  if (currentWidth < maxWidth) {
    document.body.style.overflow = 'hidden'; 
  }
})
const btnPurchase4 = document.querySelector('.btn1-purchase_4')
btnPurchase4.onclick = function(){
  catalog4.classList.add('none')
  main.style.opacity = 'unset'
  document.body.style.overflow = 'unset'; 
}
const btnNone4 = document.querySelector('.btn2-none_4')
btnNone4.onclick = function(){
  catalog4.classList.add('none');
  main.style.opacity = 'unset';
  document.body.style.overflow = 'unset'; 
}
//кнопка для мобилки
const xMark1 = document.querySelector('.x-mark-catalog1')
xMark1.onclick = function(){
  catalog1.classList.add('none')
  main.style.opacity = "unset"
  document.body.style.overflow = 'unset';
}
const xMark2 = document.querySelector('.x-mark-catalog2')
xMark2.onclick = function(){
  catalog2.classList.add('none')
  main.style.opacity = "unset"
  document.body.style.overflow = 'unset';
}
const xMark3 = document.querySelector('.x-mark-catalog3')
xMark3.onclick = function(){
  catalog3.classList.add('none')
  main.style.opacity = "unset"
  document.body.style.overflow = 'unset';
}
const xMark4 = document.querySelector('.x-mark-catalog4')
xMark4.onclick = function(){
  catalog4.classList.add('none')
  main.style.opacity = "unset"
  document.body.style.overflow = 'unset';
}


//faq2-a1
const help1Faq2 = document.querySelector('.faq2-a1')
const help1Fixed = document.querySelector('.help1-fixed')
help1Faq2.addEventListener('click', (event)=> {
  event.preventDefault();
  help1Fixed.classList.remove('none')
  main.style.opacity="0.5"
})
const btnOfcourse = document.querySelector('.btn-help')
btnOfcourse.onclick = function(){
  help1Fixed.classList.add('none')
  main.style.opacity="unset"
}
//faq2-a2
const help2Faq2 = document.querySelector('.faq2-a2')
const help2Fixed = document.querySelector('.help2-fixed')
help2Faq2.addEventListener('click', (event)=>{
  event.preventDefault();
  help2Fixed.classList.remove('none')
  main.style.opacity="0.5"
})
const btnOfcourse2 = document.querySelector('.btn-help2')
btnOfcourse2.onclick = function(){
  help2Fixed.classList.add('none')
  main.style.opacity="unset"
}
//faq2-a3
const help3Faq2 = document.querySelector('.faq2-a3')
const help3Fixed = document.querySelector('.help3-fixed')
help3Faq2.addEventListener('click', (event)=>{
  event.preventDefault();
  help3Fixed.classList.remove('none')
  main.style.opacity= "0.5"
})
const btnOfcourse3 = document.querySelector('.btn-help3')
btnOfcourse3.onclick = function(){
  help3Fixed.classList.add('none')
  main.style.opacity= "unset"
}
//faq2-a4
const help4Faq2 = document.querySelector('.faq2-a4')
const help4Fixed = document.querySelector('.help4-fixed')
help4Faq2.addEventListener('click', (event)=>{
  event.preventDefault();
  help4Fixed.classList.remove('none')
  main.style.opacity= "0.5"
})
const btnOfcourse4 = document.querySelector('.btn-help4')
btnOfcourse4.onclick = function(){
  help4Fixed.classList.add('none')
  main.style.opacity= "unset"
}

//input clear (faq section)
const inputName = document.querySelector('.name-faq1')
const inputEmail = document.querySelector('.email-faq1')
const inputPhone = document.querySelector('.phone-faq1')
const inputQuestion = document.querySelector('.questions-faq1')
const btn1Faqclear = document.querySelector('.btn1-faq1-clear')
const btn2Faqclear = document.querySelector('.btn2-faq1-clear')
//+заявка
btn1Faqclear.onclick = function(){
  alert("Заявка принята.\nОжидайте ответа менеджера!")
  inputName.value = ""
  inputEmail.value = ""
  inputPhone.value= ""
  inputQuestion.value = ""
}
