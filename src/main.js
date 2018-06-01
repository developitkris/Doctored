import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Doctors } from './doctored.js';


$(document).ready(function() {
  $('#searchbtn').click(function() {
    let docInfo = $('#docInfo').val();
    let medConcern = $('#medConcern').val();

    $('#docInfo').val("");
    $('#medConcern').val("");

    //XML
    let request = new XMLHttpRequest();
    let url = `https://api.betterdoctor.com/2016-03-01/doctors?location=${location}&skip=2&limit=10&user_key=process.env.apiKey`;

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        let response = JSON.parse(this.responseText);
        getElements(response);
      } else if (this.readyState == 4 && this.status !=200){
        $('.error').show();
        $('.error').text('There seems to have been a problem with that request, please try again');
      }
    }

    //GET
    request.open("GET", url, true);
    request.send();

    //POST
      let getElements = function(response) {
        console.log(response);
        $('.searchInput').append(`<h3>Your search for ${docInfo} returned: </h3>`);
        response.forEach(function(info) {
          $('#docList').append(`
            <ul>
              <li><h4>${info.name}</h4></li>
              <li>Address: ${info.address}</li>
              <li>Phone: ${info.phone}</li>
              <li>Website: ${info.site}</li>
              <li>New Patient status: ${info.status}</li>
            </ul>`);
        })
      }
    });
  });
