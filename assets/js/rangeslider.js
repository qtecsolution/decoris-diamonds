


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