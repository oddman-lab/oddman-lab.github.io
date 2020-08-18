"use strict";

let scrollContainer = document.querySelector('.cv__timeline')
let section = scrollContainer.querySelector('.timeline__section');
let milestones = section.querySelectorAll('.timeline__header')
function round(val) {
  return Math.round(val / 10) * 10;
}

scrollContainer.addEventListener('scroll', (evt) => {
	let index = 0;
	let sumHeight = -50;
	let scrollTop = evt.target.scrollTop;

	document.querySelectorAll('.timeline__part').forEach(e=>{
    sumHeight+= e.offsetHeight + 60;
    
	if (sumHeight >= scrollTop) {
		document.querySelector(".cv__list li.active").classList.remove("active");
		document.querySelector(`.cv__list li:nth-child(${index+1})`).classList.add("active");
		return false;
	}
	  index++;
	})
})


let resumeTitle = document.querySelector('.card__title');
let calleble = false;

window.addEventListener('scroll', (evt) => {
  if (this.scrollY > resumeTitle.offsetTop - 600 && !calleble) {
    let options = {
      strings: ['Прошу рассмотртеть мою... ^1000', 'Предлагаю рассмотреть мою кандидатуру на  ^700', 'Htp.vt yf ljk;yjcnm','АААаАаАААа!!!', 'Резюме на должность Junior Frontend Developer.'],
      typeSpeed: 30,
      backSpeed: 10,
      startDelay: 1000,
    };

    let typed = new Typed(resumeTitle, options);

    calleble = true;
    }
});

let itemCard = document.querySelectorAll('.item')
let modal = {
  booking: 'showBooking',
  calc: 'showCalc',
  task: 'showTask',
  cinema: 'showCinema',
}



for (let i = 0; i < itemCard.length; i++) {
  itemCard[i].addEventListener('click', (evt) => {
    if (evt.target.classList.contains('item')) {
      console.log(modal[evt.target.querySelector('.item__button').getAttribute('data-modal')])
    }
  })
}

let modale = document.querySelector('.modal')
let button = document.querySelectorAll('.item__button')

for (let j = 0; j < button.length; j++) {
  button[j].addEventListener('click', (evt) => {
    modalEventHandler(evt)
  });
}

function modalEventHandler(event) {
  console.log(modal[event.target.getAttribute('data-modal')])
  modale.classList.remove('visually-hidden')

}

let navList = document.querySelector('.navigation__list')
let navigation = navList.querySelectorAll('li:not(.navigation__item--logo)')


function check(flag) {

  navigation.forEach(item => {
    if (!flag) {
      item.classList.add('visually-hidden')
    } else {
      item.classList.remove('visually-hidden')
    }
  })
} 

check(false)

let i = 1;
document.querySelector('.mobile-nav').addEventListener('click', () => {
  document.querySelector('.mobile-nav').classList.toggle('mobile-nav--transform')
  i++;
  i % 2 === 0 ? check(true) : check(false);
})


document.addEventListener('DOMContentLoaded', (evt) => {
  if (document.documentElement.clientWidth > 600) {
    check(true);
  }
})

document.addEventListener('resize', (evt) => {
  if (document.documentElement.clientWidth > 600) {
    check(true);
  }
})