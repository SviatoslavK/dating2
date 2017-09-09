"use strict";function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function getVals(){var e=this.parentNode,t=e.getElementsByTagName("input"),n=parseFloat(t[0].value),a=parseFloat(t[1].value),i=t[0],o=document.querySelector(".first-range"),r=i.clientWidth/(parseInt(i.max)-parseInt(i.min)),l=(i.valueAsNumber-parseInt(i.min))*r-o.clientWidth/2;o.style.left=l+20+"px",o.innerHTML=i.value;var s=t[1],c=document.querySelector(".second-range"),g=s.clientWidth/(parseInt(s.max)-parseInt(s.min)),p=(s.valueAsNumber-parseInt(s.min))*g-c.clientWidth/2;if(c.style.left=p+22+"px",c.innerHTML=s.value,n>a){var u=a;a=n,n=u,fillRange(t[0],t[1],n,a)}else fillRange(t[1],t[0],n,a);Math.abs(n-a)<=4?o.style.top="-25px":o.style.top="15px"}var personsData=[{name:"Кристиночка",sex:"female",online:!0,photos:12,age:28,top:!0,registrationDate:"2017-09-03",city:"Санкт-Петербург",country:"Россия",img:"img/lg-photo1.png"},{name:"Диана",sex:"female",online:!0,photos:3,age:20,top:!0,registrationDate:"2017-09-07",city:"Самара",country:"Россия",img:"img/lg-photo2.png"},{name:"Аня",sex:"female",online:!0,photos:125,age:18,top:!0,registrationDate:"2017-09-02",city:"Ростов-на-Дону",country:"Россия",img:"img/lg-photo3.png"},{name:"Анжелика",sex:"female",online:!1,photos:17,age:27,top:!1,registrationDate:"2015-03-04",city:" Чебоксары",country:"Россия",img:"img/lg-photo4.png"},{name:"Лариса",sex:"female",online:!0,photos:12,age:32,top:!1,registrationDate:"2015-03-05",city:"Москва",country:"Россия",img:"img/lg-photo5.png"},{name:"Настя",sex:"female",online:!0,photos:3,age:21,top:!1,registrationDate:"2015-03-06",city:"Зеленоград",country:"Россия",img:"img/lg-photo6.png"},{name:"Евгения",sex:"female",online:!1,photos:4,age:30,top:!1,registrationDate:"2015-03-07",city:"Ростов-на-Дону",country:"Россия",img:"img/lg-photo7.png"},{name:"Ольга",sex:"female",online:!0,photos:28,age:25,top:!1,registrationDate:"2015-03-08",city:"Казань",country:"Россия",img:"img/lg-photo8.png"},{name:"Кристиночка",sex:"female",online:!1,photos:12,age:28,top:!1,registrationDate:"2015-03-09",city:"Санкт-Петербург",country:"Россия",img:"img/lg-photo2.png"},{name:"Ангелина",sex:"female",online:!1,photos:20,age:20,top:!0,registrationDate:"2015-03-09",city:"Воронеж",country:"Россия",img:"img/lg-photo7.png"},{name:"Ангелина",sex:"female",online:!1,photos:20,age:20,top:!0,registrationDate:"2015-03-09",city:"Воронеж",country:"Россия",img:"img/lg-photo7.png"},{name:"Ангелина",sex:"female",online:!1,photos:20,age:20,top:!0,registrationDate:"2015-03-09",city:"Воронеж",country:"Россия",img:"img/lg-photo7.png"},{name:"Ангелина",sex:"female",online:!1,photos:20,age:20,top:!0,registrationDate:"2015-03-09",city:"Воронеж",country:"Россия",img:"img/lg-photo7.png"},{name:"Ангелина",sex:"female",online:!1,photos:20,age:20,top:!0,registrationDate:"2015-03-09",city:"Воронеж",country:"Россия",img:"img/lg-photo7.png"},{name:"Ангелина",sex:"female",online:!1,photos:20,age:20,top:!0,registrationDate:"2015-03-09",city:"Воронеж",country:"Россия",img:"img/lg-photo7.png"},{name:"Ангелина",sex:"female",online:!1,photos:20,age:20,top:!0,registrationDate:"2015-03-09",city:"Воронеж",country:"Россия",img:"img/lg-photo7.png"},{name:"Ангелина",sex:"female",online:!1,photos:20,age:20,top:!0,registrationDate:"2015-03-09",city:"Воронеж",country:"Россия",img:"img/lg-photo7.png"}],fillRange=function(e,t,n,a){var i=e.getAttribute("id"),o=100*(n-e.min)/(e.max-e.min),r=100*(a-e.min)/(e.max-e.min);"first-range"===i?t.style.background="linear-gradient(to right, #F1EFEF 0%, #F1EFEF "+o+"%, #3366FF "+o+"%, #3366FF "+r+"%, #F1EFEF "+r+"%, #F1EFEF 100%)":e.style.background="linear-gradient(to right, #F1EFEF 0%, #F1EFEF "+o+"%, #3366FF "+o+"%, #3366FF "+r+"%, #F1EFEF "+r+"%, #F1EFEF 100%)"},rangeSlider=function(){for(var e=document.getElementsByClassName("range-slider"),t=0;t<e.length;t++)for(var n=e[t].getElementsByTagName("input"),a=0;a<n.length;a++)"range"===n[a].type&&(n[a].oninput=getVals,n[a].oninput())},clearInput=function(e){e.target.previousElementSibling.value=""},customPaginate=function(e){var t=document.querySelector(".gallery__block"),n=t.querySelectorAll(".gallery__card"),a=Math.ceil(n.length/e),i=document.querySelector(".pagination__pages");i.innerHTML="";for(var o=0;o<a;o++){var r=document.createElement("div");r.classList.add("pagination__page"),r.innerHTML=o+1,i.appendChild(r)}togglePaginateItems(n,e,1);var l=Array.from(i.querySelectorAll(".pagination__page"));0===l.filter(function(e){return e.className.includes("active__page")}).length&&l[0].classList.add("active__page"),l.map(function(t){t.addEventListener("click",function(){var a=parseInt(t.textContent,10);t.classList.add("active__page"),l.filter(function(e){return e!==t}).map(function(e){return e.classList.remove("active__page")}),togglePaginateItems(n,e,a)})})},togglePaginateItems=function(e,t,n){Array.from(e).map(function(e,a){e.style.display=a+1>(n-1)*t&&a<n*t?"block":"none"})},changePage=function(e){var t=Array.from(document.querySelectorAll(".pagination__page")),n=t.filter(function(e){return e.className.includes("active__page")}),a=document.querySelectorAll(".gallery__card"),i=Math.ceil(a.length/8),o=parseInt(n[0].textContent,10);"next"===e?o<i&&(n[0].classList.remove("active__page"),n[0].nextElementSibling.classList.add("active__page"),togglePaginateItems(a,8,o+1)):"prev"===e&&o>1&&(n[0].classList.remove("active__page"),n[0].previousElementSibling.classList.add("active__page"),togglePaginateItems(a,8,o-1))},cardsHTML=function(e){var t=document.createDocumentFragment();return e.sort(function(e,t){return Date.parse(t.registrationDate)-Date.parse(e.registrationDate)}).map(function(e){var n=document.createElement("template");n.innerHTML='\n        <div class="gallery__card" '+(e.online?"online":"")+'>\n                <div class="gallery__card--img">\n                <img src="'+e.img+'" class="card__avatar">\n                    <div class="gallery__card--photos">\n                        <div class="card__photos--icon"></div>\n                        <div class="card__photos--quanity">'+e.photos+"</div>\n                    </div>\n                    "+(e.top?'<div class="gallery__card--top">топ</div>':"")+'\n                    <div class="gallery__card--buttons">\n                        <div class="card__button--item card__button--favorite">\n                            <div class="button__favorite--icon"></div>\n                            <div class="button__favorite--text">Избранное</div>\n                        </div>\n                        <div class="card__button--item card__button--write">\n                            <div class="button__write--icon"></div>\n                            <div class="button__write--text">Написать</div>\n                        </div>\n                    </div>\n                </div>\n                <div class="gallery__card--title">\n                    <div class="card__title--name">'+e.name+", "+e.age+' <span class="online"></span></div>\n                    <div class="card__title--location">'+e.city+", "+e.country+"</div>\n                </div>\n            </div>\n        ",t.appendChild(n.content)}),t},appendCards=function(e,t){var n=cardsHTML(e),a=document.querySelector(".gallery__block");a.innerHTML="",a.appendChild(n),customPaginate(t)},filterGirls=function(e){if("new"===e){var t=Date.parse(new Date)-6048e5,n=personsData.filter(function(e){return Date.parse(e.registrationDate)>t});appendCards(n,8)}else appendCards(personsData.filter(function(t){return t[e]}),8)},search=function(){var e=document.querySelector(".filter__block"),t=e.querySelector('[name="city"]'),n=t.value.toLowerCase(),a=[].concat(_toConsumableArray(e.querySelectorAll('[type="range"]'))).sort(function(e,t){return e.value-t.value}),i=a[0].value,o=a[1].value,r=personsData.filter(function(e){return e.age>=i&&e.age<=o&&e.city.toLowerCase().includes(n)});appendCards(r,8)};appendCards(personsData,8);var setFavorite=function(){Array.from(document.querySelectorAll(".gallery__card")).map(function(e){var t=e.querySelector(".button__favorite--text"),n=e.querySelector(".card__button--favorite");e.hasAttribute("favorite")?t.innerHTML="В избранных":t.innerHTML="Избранное",n.addEventListener("click",function(){e.hasAttribute("favorite")?(e.removeAttribute("favorite"),t.innerHTML="Избранное"):(e.setAttribute("favorite","true"),t.innerHTML="В избранных")})})},toTopBtn=document.querySelector("#btn__to-top");toTopBtn.addEventListener("click",function(){document.body.scrollTop=0,document.documentElement.scrollTop=0});var allSection=Array.from(document.querySelectorAll(".choose__item"));allSection.map(function(e){e.addEventListener("click",function(){e.hasAttribute("checking")?(e.removeAttribute("checking"),appendCards(personsData,8)):(e.setAttribute("checking","true"),allSection.filter(function(t){return t!==e}).map(function(e){return e.removeAttribute("checking")}))})}),window.onload=setFavorite(),window.onload=rangeSlider();