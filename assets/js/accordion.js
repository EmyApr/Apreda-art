// ACCORDION ONE //
const accordionToggle = document.querySelector('.toggle-panel-one');
const panel = document.querySelector('.subject-pullout-one');


accordionToggle.addEventListener('click', () =>{
  panel.classList.toggle('is-open');
  window.scrollBy(0, 200);
});

// ACCORDION TWO //
const accordionToggleTwo = document.querySelector('.toggle-panel-two');
const panelTwo = document.querySelector('.subject-pullout-two');


accordionToggleTwo.addEventListener('click', () =>{
  panelTwo.classList.toggle('is-open');
  window.scrollBy(0, 200);
});

// ACCORDION Three //
const accordionToggleThree = document.querySelector('.toggle-panel-three');
const panelThree = document.querySelector('.subject-pullout-three');


accordionToggleThree.addEventListener('click', () =>{
  panelThree.classList.toggle('is-open');
  window.scrollBy(0, 200);
});
