// from data.js
var tableData = data;

// YOUR CODE HERE!

// select tbody 
tbody = d3.select("tbody")
console.log("tableData")

// Loop through table to show entries of UFO sightings
function displayData(something){ 
    tbody.text("")
    something.forEach(function(et_sighting){
    new_tr = tbody.append("tr")
    Object.entries(et_sighting).forEach(function([key, value]){
        new_td = new_tr.append("td").text(value)	
    })
})}

displayData(tableData)

console.log("tableData2")


// Filter table button
var submit = d3.select("#filter-btn");

submit.on("click", function() {
    console.log("tableData3")

  // Display table and prevent the page from refreshing
  d3.event.preventDefault();

  // Input element and get the raw hmtl
  var dateInput = d3.select("#datetime");
  var cityInput = d3.select("#city");
  var stateInput = d3.select("#state");
  var countryInput = d3.select("#country");
  var shapeInput = d3.select("#shape");

  // Get the value property of the input element
  console.log(dateInput.property("value"));
  console.log(cityInput.property("value"));
  console.log(stateInput.property("value"));
  console.log(countryInput.property("value"));
  console.log(shapeInput.property("value"));

  //Create a variable to filtert table and display

 var filtered = tableData.filter(et_sighting =>{
  return (et_sighting.datetime===dateInput.property("value") || !dateInput.property("value") ) && 
            (et_sighting.city===cityInput.property("value") || !cityInput.property("value")) &&
            (et_sighting.state===stateInput.property("value") || !stateInput.property("value")) &&
            (et_sighting.country===countryInput.property("value") || !countryInput.property("value")) &&
            (et_sighting.shape===shapeInput.property("value") || !shapeInput.property("value"))
 })

 //Run the filter values using the displayData function to update the table
 displayData(filtered);


});

var filterInputs = d3.selectAll('.form-control');

// Clears input fields and input object
function clearEntries() {
    filters = {};

    // Sets every input field to empty
    filterInputs._groups[0].forEach(entry => {
        if (entry.value != 0) {
            d3.select('#' + entry.id).node().value = "";
        }
    });
};

var clearButton = d3.select("#clear");
// Clear button on click clears fields
clearButton.on('click', function () {

    // Stop refreshing page completely execpt table 
    d3.event.preventDefault();
    // Removes input fields
    clearEntries()
});


