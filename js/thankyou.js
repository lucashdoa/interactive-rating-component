const selectedRateParagraph = document.querySelector('.rating-component__selected-rating p');

const url = new URL(window.location.href);
const rating = url.searchParams.get('rating');

selectedRateParagraph.innerText = `You selected ${rating} out of 5!`;
