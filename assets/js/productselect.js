// selector for select-dropdown list

const selectDropdown = document.querySelector('.select-dropdown'); 

document.addEventListener( 'click', function(e) {
	if (e.target.matches('.select-dropdown__item')) {
		let text = selectDropdown.querySelector('#js-ddInput .text').innerHTML.split(' ')[0] + ' ' + e.target.querySelector('.text').innerHTML.split(' ')[0];
		
		selectDropdown.querySelector('#js-ddInput .text').innerHTML = text;
	}
});

// remove all active classes on the other select-dropdowns

selectDropdown.addEventListener('click', function(e) {
	if (selectDropdown !== e.target) {
		e.target.classList.remove("is-active");
	}
	
	selectDropdown.classList.toggle("is-active");
});

const selectDropdown2 = document.querySelector('.select-dropdown-2'); 

document.addEventListener( 'click', function(e) {
	if (e.target.matches('.select-dropdown-item')) {
		selectDropdown2.querySelector('#js-ddInput-2').innerHTML = e.target.innerHTML;
	}
});

// remove all active classes on the other select-dropdowns

selectDropdown2.addEventListener('click', function(e) {
	if (selectDropdown2 !== e.target) {
		e.target.classList.remove("is-active");
	}
	
	selectDropdown2.classList.toggle("is-active");
});


const selectSizeDropdown = document.querySelector('.select-size-dropdown'); 

document.addEventListener( 'click', function(e) {
	if (e.target.matches('.sizelist-item')) {
		selectSizeDropdown.querySelector('#ddInput').innerHTML = e.target.innerHTML;
	}
});

selectSizeDropdown.addEventListener('click', function(e) {
	if (selectSizeDropdown !== e.target) {
		e.target.classList.remove("is-active");
	}
	
	selectSizeDropdown.classList.toggle("is-active");
});


// this event is to close all open select-options when the user clicks off.

document.body.addEventListener('click', function(e) {
	if(!e.target.closest('.select-dropdown')) {
		selectDropdown.classList.remove("is-active");
	}
	if(!e.target.closest('.select-dropdown-2')) {
		selectDropdown.classList.remove("is-active");
	}
	if(!e.target.closest('.select-size-dropdown')) {
		selectDropdown.classList.remove("is-active");
	}
});