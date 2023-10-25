//add class for button-filter
document.querySelector('.filter-button').addEventListener('click', function(e){
  e.preventDefault();
  document.querySelector('.filter-job').classList.toggle('active');
});

//Filter

const filterButtons = document.querySelectorAll('.button');
const clearButton = document.querySelector('.filter-job__button');
const cards = document.querySelectorAll('.card-job');
document.querySelector('.filter-job__button').addEventListener('click', function() {
  // Reset all cards and buttons to visible
  cards.forEach(card => card.classList.remove('hide'));
  filterButtons.forEach(button => button.classList.remove('hide'));
});

document.querySelectorAll('.filter-btn').forEach(button => {
  button.addEventListener('click', function() {
    const filterClass = this.dataset['f'];

    // Toggle the active class on the clicked button
    this.classList.toggle('active');

    // Get the active filters
    const activeFilters = Array.from(document.querySelectorAll('.filter-btn.active')).map(btn => btn.dataset['f']);

    
    // Reset all cards and buttons to visible
    cards.forEach(card => card.classList.remove('hide'));
    filterButtons.forEach(button => button.classList.remove('hide'));

    // Hide cards without the selected filter classes
    if (activeFilters.length > 0) {
      cards.forEach(card => {
        const tools = card.querySelector('.card-job__tools');
        const buttons = tools.querySelectorAll('.button');
        let cardHasFilter = false;

        buttons.forEach(button => {
          if (!activeFilters.includes(button.classList[1])) {
            button.classList.add('hide');
          } else {
            cardHasFilter = true;
          }
        });

        if (!cardHasFilter) {
          card.classList.add('hide');
        }
      });
    }
    
    // Toggle a class on the container to trigger flex layout
   /*  const container = document.querySelector('.card-container');
    container.classList.toggle('filtered', activeFilters.length > 0); */

  }); 
});
