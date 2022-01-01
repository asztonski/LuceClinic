// Topics // 

var dropdownLabelTopic = document.getElementById("dropdown-label-topic");

var dropdownTopic = document.getElementById("dropdown-topic");

let checked_topic = false

const selectedSpan = document.querySelector('form button span')

function toggleDropdownTopic() {
  dropdownTopic.classList.toggle("is-open");
}

const formTopic = document.getElementById('form-topic')

formTopic.onclick = function () {
  selectedSpan.style.fontSize = '13px'
  var selectedTopic = document.querySelector(
    "input[name = selected-topic]:checked"
  );
  if (selectedTopic != null) {
    var spanTopic = selectedTopic.parentNode.querySelector("span").innerHTML;
    checked_topic = document.querySelector('input[name = "selected-topic"]:checked');
    dropdownLabelTopic.innerHTML = spanTopic;
    dropdownTopic.classList.remove("is-open");
    return checked_topic
  }
};


// Times //


var dropdownLabelTime = document.getElementById("dropdown-label-time");

var dropdownTime = document.getElementById("dropdown-time");

function toggleDropdownTime() {
  dropdownTime.classList.toggle("is-open");
}

const formTime = document.getElementById('form-time')

formTime.onclick = function () {
  var selectedTime = document.querySelector(
    "input[name = selected-time]:checked"
  );
  if (selectedTime != null) {
    var spanTime = selectedTime.parentNode.querySelector("span").innerHTML;
    dropdownLabelTime.innerHTML = spanTime;
    dropdownTime.classList.remove("is-open");
  }
};

const yesbox = document.querySelector('.yesbox');
const nobox = document.querySelector('.nobox');
const yesBtn = document.getElementById('yes')
const noBtn = document.getElementById('nope')
const namebox = document.querySelector('.namebox')
const msgbox = document.querySelector('.msgbox')


yesBtn.addEventListener('click', () => {
  nobox.style.display = 'none'
  yesbox.style.display = 'flex'
  yesbox.classList.add('active')
  nobox.classList.remove('active')
  msgbox.style.display = 'none'
  namebox.style.display = 'block'
})

noBtn.addEventListener('click', () => {
  nobox.style.display = 'flex'
  yesbox.style.display = 'none'
  nobox.classList.add('active')
  yesbox.classList.remove('active')
  msgbox.style.display = 'block'
  namebox.style.display = 'none'
})











// Mail Form //

const mailBtn = document.querySelector('form .reg-btn');
const errorScreen = document.querySelector('.errorbox');
const errorScreenBtn = document.querySelector('.errorbox button')

const succesScreen = document.querySelector('.succesbox');
const succesScreenBtn = document.querySelector('.succesbox button')



// Mail

const mailInput = document.getElementById('email');
const mailInputParent = document.querySelector('div.email-address')
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// Phone

const phoneInput = document.querySelector('.phone-input')
const phoneInputParent = document.querySelector('div.phone-number')
var numberformat = /^\d{3}\d{3}\d{3}$/


window.addEventListener('load', () => {
  if (window.innerWidth > 1024) {
    phoneInput.placeholder = 'WPISZ NUMER TELEFONU'
  } else {
    phoneInput.placeholder = 'WPISZ NR TELEFONU'
  }
})


// Name

const nameInput = document.getElementById('name')
const nameInputParent = document.querySelector('.namebox')
var nameformat = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u




const checked_topicParent = document.querySelector('.dropdown-topic');


const textarea = document.querySelector('textarea');
















// Topic

let topicValue = false;

const validateTopic = () => {
  if (checked_topic === false) { 
    errorScreen.classList.add('active')
     checked_topicParent.classList.add('error')
     return false
  } else checked_topicParent.classList.remove('error')
  topicValue = true;
  return true
}



// Phone


let phoneValue = false

const validatePhoneNumber = () => {
  if (yesbox.classList.contains('active')) {
      
      if(phoneInput.value.match(numberformat) === null) {
        errorScreen.classList.add('active')
        phoneInputParent.classList.add('error')
        return false

      } else {
        phoneInputParent.classList.remove('error')
        phoneValue = true
        return true
      }
  }
  return true
}


// Name

let nameValue = false


const validateName = () => {
  if (yesbox.classList.contains('active')) {
    if (!nameInput.value.match(nameformat)) {
        
      nameInputParent.classList.add('error')
      errorScreen.classList.add('active')
      return false
     
    } else nameInputParent.classList.remove('error')
    nameValue = true
    return true
  }
}


let mailValue = false


// Mail

const validateMail = () => {
  if (nobox.classList.contains('active')) {
    if(!mailInput.value.match(mailformat)) {  
      mailInputParent.classList.add('error')
      errorScreen.classList.add('active')
      return false 
    
    } 
    else mailInputParent.classList.remove('error')
    mailValue = true
    return true
  }   
}



let messageValue = false

// Message

const validateMessage = () => {
  if (nobox.classList.contains('active')) {
    if (textarea.value === '') {        
      msgbox.classList.add('error')
      errorScreen.classList.add('active')
      return false
    }
     else msgbox.classList.remove('error')
     messageValue = true
    return true 
  }
}


const showSuccesScreen = () => {
  if (topicValue === true && phoneValue === true && nameValue === true || topicValue === true && mailValue === true && messageValue === true) {
    succesScreen.classList.add('active')
  } else return false
  return true
}






errorScreenBtn.addEventListener('click', () => {
  errorScreen.classList.remove('active')
})

succesScreenBtn.addEventListener('click', () => {
  succesScreen.classList.remove('active')
})
