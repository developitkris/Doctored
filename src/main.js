import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Doctors } from './doctored.js';


$(document).ready(function() {
  $('#search-btn').submit(function() {
    event.preventDefault();
    let docInfo = $('#doc-info').val();
    let medConcern = $('#med-concern').val();

    $('#docInfo').val("");
    $('#medConcern').val("");

    //XML
    let request = new XMLHttpRequest();
    let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${docInfo}&query=${medConcern}&location=wa-seattle&skip=0&limit=10&user_key=${process.env.apiKey}`;

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        let response = JSON.parse(this.responseText);
        getElements(response);
      } else if (this.readyState == 4 && this.status !=200){
        $('#results').text('There seems to have been a problem with that request, please try again');
      } else {
        $('#results').text('Please wait a few moments while we process your request')
      }
    }

    //GET
    request.open("GET", url, true);
    request.send();

    //POST
      let getElements = function(response) {
        console.log(response);
        if (response.data != "") {
          $('#results').text(`This list is compiled with the appropriate results pertaining to key words in your search`);
          $('#results').append(`<h3>Your search for ${docInfo} returned: </h3>`);
          response.data.forEach(function(info) {
            $('#results').append(`
              <ul>
                <li><h4>${info.name}</h4></li>
                <li>Address: ${info.address}</li>
                <li>Phone: ${info.phone}</li>
                <li>Website: ${info.site}</li>
                <li>New Patient status: ${info.status}</li>
              </ul>`);
          });
        } else {
          $('#results').text("Your search query did not match doctors in our system")
        }
      };
    });
  });
