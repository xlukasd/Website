document.addEventListener('DOMContentLoaded', function() {
	const expandButtons = document.querySelectorAll('.event-expand-btn');

	expandButtons.forEach(button => {
		button.addEventListener('click', function() {
			const eventDetails = this.previousElementSibling;
			if (eventDetails.style.display === 'none' || eventDetails.style.display === '') {
				eventDetails.style.display = 'block';
				this.textContent = '-';
			} else {
				eventDetails.style.display = 'none';
				this.textContent = '+';
			}
		});
	});
});