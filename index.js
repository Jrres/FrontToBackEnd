let axios = require("axios");




let output = document.getElementById("root")
let buttonInfo = document.getElementById("send")
let data = {
  'firstname' :FirstName, 
  'lastname' : LastName,
  'Age' : Age,
  'DOB': DOB,
  'Email' : Email 
  };
buttonInfo.onClick= () => {
    let inputs = document.getElementsByTagName('input');
    let FirstName = inputs[0].value
    let LastName = inputs[2].value
    let Age = inputs[1].value
    let DOB = inputs[3].value
    let Email = inputs[4].value
    let data = 
    {firstname :FirstName, 
    lastname : LastName,
    Age : Age,
  DOB: DOB,
    Email : Email 
    };
   
}

axios.post('http://localhost:3000/',{
  name : "jack",

}).then(function (res) {
    output.className = 'container';
    output.innerHTML = res.data;
  }).catch(function (err) {
    output.className = 'container text-danger';
    output.innerHTML = err.message;
  });

