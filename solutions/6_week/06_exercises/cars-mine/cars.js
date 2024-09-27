// CREATING A FORM WITH A SUBMIT BUTTTON & DISPLAY IN TABLE FORM

let cars = []; // store the collected data from forms in an array

// get filled form to dsisplay on page in a table form only after clicking the submit button
// question: how to dom a button with type only ?

let form = document.getElementById('inputForm'); 
let displayTable = document.getElementById('display');


// store car data in an object
class Car{  //class methods
   
   constructor(license, maker, model, year,  owner, price,color){
      this.license = license;
      this.maker = maker;
      this.model = model;
      this.year = year;
      this.owner = owner;
      this.price = price;
      this.color = color;
      
}
} 

form.addEventListener('submit', function (event){  // prompt for clicking the submit button
      event.preventDefault(); // prevent form from submitting or sending somewhere + page reloading
      

      // get values from user n keep them
      let license = document.getElementById('license').value;
      let maker = document.getElementById('maker').value;
      let model = document.getElementById('model').value;
      let year = document.getElementById('year').value;
      let owner = document.getElementById('owner').value;
      let price = document.getElementById('price').value;
      let color = document.getElementById('color').value;


      let newCar = new Car (license,maker, model, year, owner, price, color) // create a new car object + need to follow the order 
      cars.push(newCar); // stores the car in an array for future use


// making the table row + adding a line that keeps on creating
let newRow = document.createElement('tr'); 
newRow.innerHTML =`<td>${license}</td>
                  <td>${maker}</td>
                  <td>${model}</td>
                  <td>${year}</td>
                  <td>${owner}</td>
                  <td>${price}</td> 
                  <td>${color}</td>`;

displayTable.appendChild(newRow);

form.reset(); //clear all input fields.
});


// DISCOUNT ON CAR

let discountPrice = document.getElementById('price').value;

function name(params) {
      
}




// CREATE A SEARCH PART, TAKE USER INPUT,COMPARE AND DISPLAY RESULT

let searchResult = document.getElementById('searchBy'); // hey, look at this input field
let searchButton = document.getElementById('searchBtn'); // hey, start searching when clicked

searchButton.addEventListener('click', function (event) { 
      // event.preventDefault();
      // form.reset();

      let searchLicense = searchResult.value;

      let result = cars.find(car => car.license === searchLicense);

      if (result) {
            alert(`MATCH: 
                  License Plate: ${result.license}
                  Model: ${result.model}
                  Year: ${result.year}
                  Owner: ${result.owner}`);
      } else {
            alert('NO MATCH')
      }
});












 

























