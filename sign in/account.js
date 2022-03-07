const FloatLabel = (() => {
  
    // add active class and placeholder 
    const handleFocus = (e) => {
      const target = e.target;
      target.parentNode.classList.add('active');
      target.setAttribute('placeholder', target.getAttribute('data-placeholder'));
    };
    
    // remove active class and placeholder
    const handleBlur = (e) => {
      const target = e.target;
      if(!target.value) {
        target.parentNode.classList.remove('active');
      }
      target.removeAttribute('placeholder');    
    };  
    
    // register events
    const bindEvents = (element) => {
      const floatField = element.querySelector('input');
      floatField.addEventListener('focus', handleFocus);
      floatField.addEventListener('blur', handleBlur);    
    };
    
    // get DOM elements
    const init = () => {
      const floatContainers = document.querySelectorAll('.float-container');
      
      floatContainers.forEach((element) => {
        if (element.querySelector('input').value) {
            element.classList.add('active');
        }      
        
        bindEvents(element);
      });
    };
    
    return {
      init: init
    };
})();
  
FloatLabel.init(); 


function isEmpty(){
  let email = document.getElementById("email").value;
  let userFirstName = document.getElementById("firstName").value;
  let userLastName = document.getElementById("lastName").value;
  let password = document.getElementById("password").value;


  if(email !== "" && userFirstName !== "" && userLastName !== "" && password !== "" ){
    document.getElementById("submit").removeAttribute("disabled");
  }
}

function createAcc(e){
  event.preventDefault();
  // console.log("working");

  let email = document.getElementById("email").value;
  let userFirstName = document.getElementById("firstName").value;
  let userLastName = document.getElementById("lastName").value;
  let password = document.getElementById("password").value;

  let user = {
    email : email,
    firstName : userFirstName,
    lastName : userLastName,
    password : password
  };

  let json = JSON.stringify(user);
  localStorage.setItem(userFirstName, json);
  console.log("user added");

  document.getElementById("email").value = "";
  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("password").value = "";
  }
  
function welcome(){
  window.location.href = "welcome.html";
}

  function loginFunc(e){
    event.preventDefault();
    // console.log("working");

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let userEmail = localStorage.getItem(email);
    let userPass = localStorage.getItem(password);

    userEmail = JSON.parse(userEmail);
    userPass = JSON.parse(userPass);
    console.log(userEmail, userPass);

    if(email == userEmail && password == userPass){
      window.location.href = "/index.html";
    }else{
      alert("Inavlid E-mail and password");
    }
  }