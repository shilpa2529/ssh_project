let nameelement = document.getElementById("nameelement");
let passwordelement = document.getElementById("passwordelement");
let signinelement = document.getElementById("signin");

nameelement.placeholder = "enter username";
passwordelement.placeholder = "enter password";

function signinbutton() {
  if (nameelement.value === "") {
    alert("please enter username or email");
  } 
  else if (passwordelement.value === "") {
    alert("please enter password");
  } 
  else {
    let anchorelement = document.createElement("a");
    anchorelement.href = "https://education.github.com/git-cheat-sheet-education.pdf";
    anchorelement.target = "_blank";
    anchorelement.textContent = "Download GitHub Cheat Sheet";
    

    document.body.appendChild(anchorelement);
  }
}

function google(){
  let googleelement=document.createElement("a");
  googleelement.href = "https://www.google.com/";
  googleelement.textContent="Open Google ";
  document.body.appendChild(googleelement);
}

signinelement.addEventListener("click", signinbutton);
google();