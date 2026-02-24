let formelement = document.getElementById("myform");
let fullnameelement = document.getElementById("validationServer01");
let emailelement = document.getElementById("validationServerUsername");
let phoneelement = document.getElementById("inputPhoneno");
let genderRadios = document.getElementsByName("gridRadios");
let skillselement = document.getElementsByName("skills");
let passwordelement = document.getElementById("inputPassword");
let confirmelement = document.getElementById("confirmPassword");
let  submitelement=document.getElementById("submit");
let profile = document.getElementById("profilePreview");

let fullnamefeedback = document.getElementById("namefeedback");
let emailfeedback = document.getElementById("validationServerUsernameFeedback");
let phonefeedback = document.getElementById("phonefeedback");
let genderFeedback = document.getElementById("genderfeedback");
let skillsfeedback = document.getElementById("skillsfeedback");
let passwordfeedback = document.getElementById("passwordfeedback");
let confirmfeedback = document.getElementById("confirmpasswordfeedback");

function checkValidity(event) {
  event.preventDefault();

  let Valid = true;

  let fullname = fullnameelement.value.trim();
  if (fullname.length < 3 || fullname.length > 20) {
    fullnamefeedback.textContent = "Name must be 3–20 characters";
    fullnameelement.classList.add("is-invalid");
    fullnameelement.classList.remove("is-valid");
    Valid = false;
  } else {
    fullnamefeedback.textContent = "";
    fullnameelement.classList.remove("is-invalid");
    fullnameelement.classList.add("is-valid");
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailelement.value)) {
    emailfeedback.textContent = "Enter a valid email";
    emailelement.classList.add("is-invalid");
    emailelement.classList.remove("is-valid");
    Valid = false;
  } else {
    emailfeedback.textContent = "";
    emailelement.classList.remove("is-invalid");
    emailelement.classList.add("is-valid");
  }

  const phonePattern = /^[0-9]{10}$/;
  if (!phonePattern.test(phoneelement.value)) {
    phonefeedback.textContent = "Phone number must be 10 digits";
    phoneelement.classList.add("is-invalid");
    phoneelement.classList.remove("is-valid");
    Valid = false;
  } else {
    phonefeedback.textContent = "";
    phoneelement.classList.remove("is-invalid");
    phoneelement.classList.add("is-valid");
  }

  const passwordpattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
  if (!passwordpattern.test(passwordelement.value)) {
    passwordfeedback.textContent =
      "Password must contain 8+ chars, uppercase, lowercase, number & special char";
    passwordelement.classList.add("is-invalid");
    passwordelement.classList.remove("is-valid");
    Valid = false;
  } else {
    passwordfeedback.textContent = "";
    passwordelement.classList.remove("is-invalid");
    passwordelement.classList.add("is-valid");
  }

  if (confirmelement.value !== passwordelement.value) {
    confirmfeedback.textContent = "Passwords do not match";
    confirmelement.classList.add("is-invalid");
    confirmelement.classList.remove("is-valid");
    Valid = false;
  } else {
    confirmfeedback.textContent = "";
    confirmelement.classList.remove("is-invalid");
    confirmelement.classList.add("is-valid");
  }

  let genderValue = "";
for (let radio of genderRadios) {
  if (radio.checked) {
    if (radio.value==="option1"){
      genderValue = "Male";
    }
    if (radio.value==="option2"){
      genderValue = "Female";
    }
    if (radio.value==="option3"){
      genderValue = "other";
    }
  }
}

if (!genderValue) {
  genderFeedback.style.display = "block";
  Valid = false;
} else {
  genderFeedback.style.display = "none";
  
}

  let a=0;
  let skills=[]
    for(let checkbox of skillselement){
        if(checkbox.checked){
            skills+=checkbox.value+" "
            a+=1
        }
    }
    if(a===0){
        skillsfeedback.style.display = "block";
        Valid = false;
    } else {
        skillsfeedback.style.display = "none";;
    }

  if (Valid) {
    formelement.style.display = "none";

    profile.innerHTML = `
      <div class="card p-4 shadow">
        <h2 class="text-center mb-3">Profile Preview</h2>
        <p><strong>Fullname:</strong> ${fullname}</p>
        <p><strong>Email:</strong> ${emailelement.value}</p>
        <p><strong>Phone:</strong> ${phoneelement.value}</p>
        <p><strong>Gender:</strong> ${genderValue}</p>
        <p><strong>Skills:</strong> ${skills}
      </div>
    `;
  }
}

formelement.addEventListener("submit", checkValidity);