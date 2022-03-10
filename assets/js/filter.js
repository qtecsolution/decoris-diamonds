const filterSection = document.querySelector('.advancedfilter');
const filterButton = document.querySelector('#btn-filter');

filterButton.addEventListener('click', toggleFilter);

function toggleFilter() {
    if(filterSection.classList.contains('shown')) {
        filterSection.classList.remove('shown');
    } else {
        filterSection.classList.add('shown');
    }
}