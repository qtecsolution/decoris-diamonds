


$(document).ready(function() {

    $( function() {
        $( '#carat-range').slider({
            range: true,
            min: 1.20,
            max: 18.00,
            values: [ 1.20, 18.00 ],
            slide: function( e, ui ) {
                $( '#caratlow' ).val( ui.values[ 0 ]);
                $( '#carathigh' ).val( ui.values[ 1 ]);
            }
        });

        $( '#caratlow' ).val( $( '#carat-range' ).slider( 'values', 0 ));
        $( '#carathigh' ).val( $( '#carat-range' ).slider( 'values', 1 ));
    });
    
    // COLOR-GRADE RANGE SLIDER START
    const colorGradeSlider = $("#desktopcolorgrade-range");
    const colorGrade = [ '', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'M', '' ];

    if(colorGradeSlider.length > 0) {
        colorGradeSlider.slider({
            range: true,
            min: 0,
            max: colorGrade.length - 1,
            values: [ 0, colorGrade.length - 1]
        }).slider("pips", {
            rest: "label",
            labels: colorGrade
        });
    }
    
    // CLARITY-TYPE RANGE SLIDER START
    const clarityTypeSlider = $("#desktopclarity-range");
    const clarityType = [ '', 'IF', 'VV S1', 'VV S2', 'V S1', 'V S2', 'SI1', 'SI2', 'SI3', '' ];

    if(clarityTypeSlider.length > 0) {
        clarityTypeSlider.slider({
            range: true,
            min: 0,
            max: clarityType.length - 1,
            values: [ 0, clarityType.length - 1]
        }).slider("pips", {
            rest: "label",
            labels: clarityType
        });
    }
    
    // CUT-TYPE RANGE SLIDER START
    const cutTypeSlider = $("#desktopcuttype-range");
    const cutType = [ '', 'Excellent', 'Very Good', 'Good', '' ];

    if(cutTypeSlider.length > 0) {
        cutTypeSlider.slider({
            range: true,
            min: 0,
            max: cutType.length - 1,
            values: [ 0, cutType.length - 1]
        }).slider("pips", {
            rest: "label",
            labels: cutType
        });
    }

    // DESKTOP-DIAMOND PRICE RANGE START

    $( function() {
        $( '#desktopdiamondprice-range').slider({
            range: true,
            min: 200,
            max: 100000,
            values: [ 200, 100000 ],
            slide: function( e, ui ) {
                $( '#diamondlow' ).val( ui.values[ 0 ]);
                $( '#diamondhigh' ).val( ui.values[ 1 ]);
            }
        });

        $( '#diamondlow' ).val( $( '#desktopdiamondprice-range' ).slider( 'values', 0 ));
        $( '#diamondhigh' ).val( $( '#desktopdiamondprice-range' ).slider( 'values', 1 ));
    });
});