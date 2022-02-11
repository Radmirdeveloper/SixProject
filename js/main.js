$(document).ready(function () {
    $('.container-carousel').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
    });
    $( function() {
        $( "#tabs" ).tabs();
    } );
    $( function() {
        $("#accordion").accordion( {
            collapsible: true,
            active:false
        });
    } );
})
