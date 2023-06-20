const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://www.course-api.com/images/people/person-1.jpeg',
    text: "I love this website! It's user-friendly and has great features.",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://www.course-api.com/images/people/person-2.jpeg',
    text: 'Amazing service! The staff was friendly and helpful.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://www.course-api.com/images/people/person-4.jpeg',
    text: 'Great product!  really impressed with its quality.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://www.course-api.com/images/people/person-3.jpeg',
    text: 'The food was delicious and the atmosphere was fantastic',
  },
];

//selecting items

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');

const nextBtn = document.querySelector('.next-btn')

const randomBtn = document.querySelector('.random-btn')


//set starting item

let currentItem = 0;

//load initial item
window.addEventListener('DOMContentLoaded',  () => {
  showPerson();
  
});

const showPerson= function(){
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;

}



nextBtn.addEventListener('click', () => {
  currentItem++;
 if(currentItem > reviews.length - 1) {
  currentItem = 0
 }
  showPerson();
})

prevBtn.addEventListener('click', () => {
  currentItem--;
  if(currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson();
})


randomBtn.addEventListener('click', () => {
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson();
})