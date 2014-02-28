$( document ).ready(function() {
    // An array that contains the list of cities entered by the user
    // cities[0] contains the start destination
    // cities[1] contains the end destination
    var cities = [];    

    // Stores start and end destinations entered by user
    // Then removes the overlay containing the form
    $("#go").click(function(e) {

        // if the form is populated with both start and end destinations,
        // store the values in the cities array
        if ($("#start-destination").val() !== '' &&
            $("#end-destination").val() !== '') {
            cities[0] = $("#start-destination").val();
            cities[1] = $("#end-destination").val();

            console.log(cities);    // debugger [Can remove from final version]
            
            $("#initial-destinations-overlay").remove();    // removes the overlay containing the form
            calcRoute(cities[0], cities[1]);  
            //locationMarker.setMap(null);                    // removes the giant pin marker
            //draw_initialRoute(cities[0], cities[1]);        // draws the initial route between the start and end destinations 
            
            console.log(cities);    // debugger [Can remove from final version]
            
            e.preventDefault();

        // if either or both the start and end destinations are not populated,
        // a prompt will alert the user to enter the needed information
        } else {
            alert("Please enter both destinations!");
            e.preventDefault();
        };
    });

});