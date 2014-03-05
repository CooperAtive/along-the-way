var boxes,
    startAtBox = 0;
var rboxer = new RouteBoxer();  // draws boxes around the route
var distance = 5;              // km, we need to set this to be filled by an event listener

// Draw the array of boxes as polylines on the map
function drawBoxes(boxes) {
  boxpolys = new Array(boxes.length);
  for (var i = 0; i < boxes.length; i++) {
    boxpolys[i] = new google.maps.Rectangle({
      bounds: boxes[i],
      fillOpacity: 0,
      strokeOpacity: 1.0,
      strokeColor: '#000000',
      strokeWeight: 1,
      map: map
    });
  }
}

// Clear boxes currently on the map
function clearBoxes() {
  if (boxpolys !== null) {
    for (var i = 0; i < boxpolys.length; i++) {
      boxpolys[i].setMap(null);
    }
  }
  boxpolys = null;
}

function searchTenBoxes(boxes) {
  for (var i = startAtBox; i < startAtBox + 10; i++) {
    var bounds = boxes[i];
    var request = {bounds: bounds,
      keyword: $("input[id=keywords]").val(),
      minprice: $("#min-price option:selected").val(),
      maxprice: $("#max-price option:selected").val(),
      types: getTypes(),
      rankby: distance};
    $("#next-box-results").prop("disabled", true);
    console.log(startAtBox);
    placesService.nearbySearch(request, placesCallback);
  }
  startAtBox += 10;
  setTimeout(function(){
    //use this to turn off button until all boxes are loaded
    searchTenBoxes(boxes);
    //use this to have user click after delay for next 10 boxes
    //$("#next-box-results").prop("disabled", false);
  },6000);
}

