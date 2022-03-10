const colorGradeSlider = new rSlider({
    target: '#colorGrade',
    values: ['', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'M', ''],
    range: true,
    tooltip: false
});

const clarityTypeSlider = new rSlider({
    target: '#clarityType',
    values: ['', 'IF', 'VV S1', 'VV S2', 'V S1', 'V S2', 'SI1', 'SI2', 'SI3', ''],
    range: true,
    tooltip: false
});

const cutTypeSlider = new rSlider({
    target: '#cutType',
    values: ['', 'Excellent', 'Very Good', 'Good', ''],
    range: true,
    tooltip: false
});