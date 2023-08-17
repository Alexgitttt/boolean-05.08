let ageEl = document.querySelector('.age');
let genderEl = document.querySelector('.gender');

let btnEl = document.querySelector('.ageClicker');


btnEl.addEventListener('click', () => {

   const age = ageEl.selectedOptions[0].textContent;
   const gender = genderEl.selectedOptions[0].textContent;

   const showedText = `Your age is ${age}, and your gender is ${gender}`;

   console.log(showedText);
})






