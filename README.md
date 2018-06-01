# Doctored

#### _Javascript [Asynchronous API calls], June 1, 2018_

#### By _**Kristi Hwang**_

## Description


_This is a web application that that lets users enter a doctor or medical concern into a search box, for a list of doctors in Seattle  who can treat their medical issue._


### Specifications

| User Behavior | Input | Output |
|----|----|----|  
| A user should be able to enter a medical concern to receive a list of doctors | "stomach ache" | List; Doctor Shmoe, etc... |
| A user should be able to to enter a doctor name to get results of doctors with that name or similar to that name  | "Jane Doe" | list; Doctor Fro, etc...  |
| Doctor's name searched, should return: first name, last name, address, phone number, website and whether or not the doctor is accepting new patients  | "Doctor Smore" | Doctor Smore, 333 3rd Avenue, Seattle Wa 98101, (206) 333-3333, doctorsmore.com, accepting new patients: yes |
| If the API call results in an error, return a notification that states what the error is | "error found"  |  error bad request |
| If there are no doctors for the search the user inputs, there should be a message relaying that information different from an error message. | "Doctor McDee"  | No doctors found with that search criteria |


## Setup/Installation Requirements

- Clone <https://github.com/PanatdaInthala/Doctor-Lookup.git>
- Open cloned directory in a terminal capable of running npm commands.
- Run "npm install" in terminal
- Navigate to BetterDoctor to register for an API key.
- Create an .env file, add your new API key.
- Save .env file
- Run "npm run build"
- Run "npm run start"
- Search up doctors in Seattle!


## Known Bugs

* No known bugs at the time of this update.


## Support and contact details

For feedback, please contact Kristi at krsy3ii@yahoo.com


## Technologies Used

* _Javascript ES6_
* _jquery_
* _NPM_
* _Jasmine_
* _Karma_
* _Bootstrap_
* _CSS_


### License

*This software is licensed under the MIT license.*

Copyright (c) 2018 **Kristi Hwang**
