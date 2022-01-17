// tabs
const tabs = document.querySelectorAll('.tabheader__item'),
        tabsPerent = document.querySelector ('.tabheader__items'),
        tabsContent = document.querySelectorAll('.tabcontent')


function hide (get) {
        get.classList.add('hide')
        get.classList.remove('show', 'animate')   
}
function show (get) {
    get.classList.add('show', 'animate')
    get.classList.remove('hide')
}

function hideTabsContent () {
    tabsContent.forEach(item  => {
        hide(item)
    })


    tabs.forEach(item => {
        item.classList.remove('tabheader__item_active')
    })
}
function showTabsContent(i) {
    tabsContent[i]
    show(tabsContent[i])

    tabs[i].classList.add('tabheader__item_active')
}


hideTabsContent()
showTabsContent(0)

tabsPerent.addEventListener('click', (e) => {
    tabs.forEach((item, i) => {
     if(e.target === item){
        hideTabsContent()
        showTabsContent(i)  
     }   
    })
})

// modal
const modalTrigger = document.querySelectorAll('[data-modal]')
const modal = document.querySelector('.modal')
const modalCloseBtn = document.querySelector('.modal__close')

modalTrigger[0].addEventListener('click', openModal)

modalCloseBtn.addEventListener('click', closeModal)

modal.addEventListener('click', (e) => {
	if (e.target === modal) {
		closeModal()
	}
})

document.body.addEventListener('keydown', (e) => {
	if (e.code === 'Backspace') {
		closeModal()
	}
})
function openModal(){
	modal.classList.add('show')
	modal.classList.remove('hide')
	document.body.style.overflow = 'hidden'
	
	clearInterval(timeoutID)
}
function closeModal(){
	modal.classList.add('hide')
	modal.classList.remove('show')
	document.body.style.overflow = 'auto'
}

function openModalScroll (){
	const page = document.documentElement
		if(page.clientHeight + page.scrollTop >= page.scrollHeight){
			openModal()
		window.removeEventListener('scroll', openModalScroll)
	}
}

// window.addEventListener('scroll', openModalScroll)
// const timeoutID = setTimeout(openModal, 5000)

// clock
const deadline = '2022-01-16'

function getTimeRemaining(deadline){ 
	t = new Date(deadline) - new Date()
		days = Math.floor((t / (1000 * 60 * 60 * 24))),
		hours = Math.floor((t / (1000 * 60 * 60) % 24)),
		minutes = Math.floor(t / (1000 / 60) % 60),
		seconds = Math.floor(t / (1000) % 60);

	return{
		"total": t,
		"days":days,
		"hours":hours,
		"minutes":minutes,
		"seconds":seconds
	}
}

function setClock(parent, deadline){
	const parentBlock = document.querySelector(parent)
	const days = parentBlock.querySelector('#days'),
		hours = parentBlock.querySelector('#hours'),
		minutes = parentBlock.querySelector('#minutes'),
		seconds = parentBlock.querySelector('#seconds');

	function addZero(num){
		if(num >= 10){
			return num
		} else {
			return`0${num}`
		}
	}

	updateClock()
	setInterval(updateClock, 1000)

	function updateClock(){
		const t = getTimeRemaining(deadline)
		days.innerText = addZero (t.days)
		hours.innerText = addZero (t.hours)
		minutes.innerText = addZero (t.minutes)
		seconds.innerText = addZero (t.seconds)
	} 
	if(t < 0){
		document.querySelector(parent).innerText = 'АКЦИЯ ЗАВЕРШЕНА';
	}
}
setClock('.timer', deadline)

// Cards 
class Cards {
	constructor(src, title, description, price, alt){
		this.src = src
		this.title = title
		this.description = description
		this.price = price
		this.alt = alt
	}

	rendar(){
		const wrapper = document.querySelector('#cardwrapper')
		const card = document.createElement('div')
		card.classList.add('menu__item')

		card.innerHTML = `
		             <img src=${this.src} alt=${this.alt}>
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.description}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                    </div>
		`
		wrapper.append(card)
	}
}
const card1 = new Cards('img/tabs/post.jpg', 'Меню "Постное"', 'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.', 430, 'this is first card')
card1.rendar()

// timer
// var endDate = new Date("mar 16, 2022 12:00:00").getTime();

// var timer = setInterval(function() {

//     let now = new Date().getTime();
//     let t = endDate - now;
    
//     if (t >= 0) {
    
//         let days = Math.floor(t / (1000 * 60 * 60 * 24));
//         let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
//         let secs = Math.floor((t % (1000 * 60)) / 1000);
    

//         document.getElementById("days").innerHTML = days +
//         "<span class='timer__block'>day</span>";
    
//         document.getElementById("hours").innerHTML = ("0"+hours).slice(-2) +
//         "<span class='timer__block'>hr</span>";
    
//         document.getElementById("minutes").innerHTML = ("0"+mins).slice(-2) +
//         "<span class='timer__block'>min</span>";
    
//         document.getElementById("seconds").innerHTML = ("0"+secs).slice(-2) +
//         "<span class='timer__block'>sec</span>";
    
//     } else {

//         document.getElementById("timer").innerHTML = "The countdown is over!";
    
//     }
    
// }, 1000);


  
  
  