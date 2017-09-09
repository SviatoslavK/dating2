"use strict";function _toConsumableArray(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function getVals(){var t=this.parentNode,e=t.getElementsByTagName("input"),n=parseFloat(e[0].value),a=parseFloat(e[1].value),r=e[0],o=document.querySelector(".first-range"),i=r.clientWidth/(parseInt(r.max)-parseInt(r.min)),l=(r.valueAsNumber-parseInt(r.min))*i-o.clientWidth/2;o.style.left=l+20+"px",o.innerHTML=r.value;var c=e[1],s=document.querySelector(".second-range"),u=c.clientWidth/(parseInt(c.max)-parseInt(c.min)),p=(c.valueAsNumber-parseInt(c.min))*u-s.clientWidth/2;if(s.style.left=p+22+"px",s.innerHTML=c.value,n>a){var g=a;a=n,n=g}Math.abs(n-a)<=4?o.style.top="-25px":o.style.top="15px"}var personsData=[{name:"Кристиночка",online:!0,photos:12,age:28,top:!0,registrationDate:"2017-09-03",city:"Санкт-Петербург",country:"Россия",img:"../img/lg-photo1.png"},{name:"Диана",online:!0,photos:3,age:20,top:!0,registrationDate:"2017-09-07",city:"Самара",country:"Россия",img:"../img/lg-photo2.png"},{name:"Аня",online:!0,photos:125,age:18,top:!0,registrationDate:"2017-09-02",city:"Ростов-на-Дону",country:"Россия",img:"../img/lg-photo3.png"},{name:"Анжелика",online:!1,photos:17,age:27,top:!1,registrationDate:"2015-03-04",city:" Чебоксары",country:"Россия",img:"../img/lg-photo4.png"},{name:"Лариса",online:!0,photos:12,age:32,top:!1,registrationDate:"2015-03-05",city:"Москва",country:"Россия",img:"../img/lg-photo5.png"},{name:"Настя",online:!0,photos:3,age:21,top:!1,registrationDate:"2015-03-06",city:"Зеленоград",country:"Россия",img:"../img/lg-photo6.png"},{name:"Евгения",online:!1,photos:4,age:30,top:!1,registrationDate:"2015-03-07",city:"Ростов-на-Дону",country:"Россия",img:"../img/lg-photo7.png"},{name:"Ольга",online:!0,photos:28,age:25,top:!1,registrationDate:"2015-03-08",city:"Казань",country:"Россия",img:"../img/lg-photo8.png"},{name:"Кристиночка",online:!1,photos:12,age:28,top:!1,registrationDate:"2015-03-09",city:"Санкт-Петербург",country:"Россия",img:"../img/lg-photo2.png"},{name:"Ангелина",online:!1,photos:20,age:20,top:!0,registrationDate:"2015-03-09",city:"Воронеж",country:"Россия",img:"../img/lg-photo7.png"}],rangeSlider=function(){for(var t=document.getElementsByClassName("range-slider"),e=0;e<t.length;e++)for(var n=t[e].getElementsByTagName("input"),a=0;a<n.length;a++)"range"===n[a].type&&(n[a].oninput=getVals,n[a].oninput())},clearInput=function(t){t.target.previousElementSibling.value=""},cardsHTML=function(t){var e=document.createDocumentFragment();return t.sort(function(t,e){return Date.parse(e.registrationDate)-Date.parse(t.registrationDate)}).map(function(t){var n=document.createElement("template");n.innerHTML='\n        <div class="gallery__card" '+(t.online?"online":"")+'>\n                <div class="gallery__card--img" style="background-image: url('+t.img+')">\n                    <div class="gallery__card--photos">\n                        <div class="card__photos--icon"></div>\n                        <div class="card__photos--quanity">'+t.photos+"</div>\n                    </div>\n                    "+(t.top?'<div class="gallery__card--top">топ</div>':"")+'\n                    <div class="gallery__card--buttons">\n                        <div class="card__button--item card__button--favorite">\n                            <div class="button__favorite--icon"></div>\n                            <div class="button__favorite--text">Избранное</div>\n                        </div>\n                        <div class="card__button--item card__button--write">\n                            <div class="button__write--icon"></div>\n                            <div class="button__write--text">Написать</div>\n                        </div>\n                    </div>\n                </div>\n                <div class="gallery__card--title">\n                    <div class="card__title--name">'+t.name+", "+t.age+' <span class="online"></span></div>\n                    <div class="card__title--location">'+t.city+", "+t.country+"</div>\n                </div>\n            </div>\n        ",e.appendChild(n.content)}),e},appendCards=function(t){var e=cardsHTML(t),n=document.querySelector(".gallery__block");n.innerHTML="",n.appendChild(e)},filterGirls=function(t){if("new"===t){var e=Date.parse(new Date)-6048e5,n=personsData.filter(function(t){return Date.parse(t.registrationDate)>e});appendCards(n),customPaginate(8)}else appendCards(personsData.filter(function(e){return e[t]})),customPaginate(8)},search=function(){var t=document.querySelector(".filter__block"),e=t.querySelector('[name="city"]'),n=e.value.toLowerCase(),a=[].concat(_toConsumableArray(t.querySelectorAll('[type="range"]'))).sort(function(t,e){return t.value-e.value}),r=a[0].value,o=a[1].value,i=personsData.filter(function(t){return t.age>=r&&t.age<=o&&t.city.toLowerCase().includes(n)});appendCards(i),customPaginate(8)};appendCards(personsData);var setFavorite=function(){Array.from(document.querySelectorAll(".gallery__card")).map(function(t){var e=t.querySelector(".button__favorite--text"),n=t.querySelector(".card__button--favorite");t.hasAttribute("favorite")?e.innerHTML="В избранных":e.innerHTML="Избранное",n.addEventListener("click",function(){t.hasAttribute("favorite")?(t.removeAttribute("favorite"),e.innerHTML="Избранное"):(t.setAttribute("favorite","true"),e.innerHTML="В избранных")})})},customPaginate=function(t){var e=document.querySelector(".gallery__block"),n=e.querySelectorAll(".gallery__card"),a=Math.ceil(n.length/t),r=document.querySelector(".pagination__block");r.innerHTML="";for(var o=0;o<a;o++){var i=document.createElement("div");i.classList.add("pagination__page"),i.innerHTML=o+1,r.appendChild(i)}Array.from(n).filter(function(e,n){return n>t-1}).map(function(t){return t.style.display="none"});var l=Array.from(r.querySelectorAll(".pagination__page"));l.map(function(e){e.addEventListener("click",function(){var a=parseInt(e.textContent,10);e.classList.add("active__page"),l.filter(function(t){return t!==e}).map(function(t){return t.classList.remove("active__page")}),Array.from(n).map(function(e,n){e.style.display=n+1>(a-1)*t&&n<a*t?"block":"none"})})})},toTopBtn=document.querySelector("#btn__to-top");toTopBtn.addEventListener("click",function(){document.body.scrollTop=0,document.documentElement.scrollTop=0});var allSection=Array.from(document.querySelectorAll(".choose__item"));allSection.map(function(t){t.addEventListener("click",function(){if(t.hasAttribute("checking"))t.removeAttribute("checking");else{t.setAttribute("checking","true");allSection.filter(function(e){return e!==t}).map(function(t){t.removeAttribute("checking")})}})}),window.onload=setFavorite(),window.onload=customPaginate(8),window.onload=rangeSlider();