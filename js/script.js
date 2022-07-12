const removeSelection = (ratingsList) => {
	ratingsList.forEach(ratingElement => {
		ratingElement.classList.remove('ratings__rating__selected');
	})
}

const selectRating = ({target}) => {
	console.log(target);
	removeSelection(ratingsList);
	target.classList.toggle('ratings__rating__selected');
}

const btnSubmit = document.querySelector('.rating-component__button');
const ratingsList = document.querySelectorAll('.ratings__rating');

ratingsList.forEach(rating => {	
	console.log(rating);
	rating.addEventListener('click', selectRating);
})



