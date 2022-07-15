let selectedRating = 0;

const removeSelection = (ratingsList) => {
	ratingsList.forEach(ratingElement => {
		ratingElement.classList.remove('ratings__rating__selected');
	})
}

const selectRating = ({target}) => {
	selectedRating = target.innerText;
	removeSelection(ratingsList);
	target.classList.toggle('ratings__rating__selected');
}

const submitRating = () => {
	window.location.href = `thankyou.html?rating=${selectedRating}`;
}

const btnSubmit = document.querySelector('.rating-component__button');
const ratingsList = document.querySelectorAll('.ratings__rating');

ratingsList.forEach(rating => {	
	rating.addEventListener('click', selectRating);
})

btnSubmit.addEventListener('click', submitRating);

