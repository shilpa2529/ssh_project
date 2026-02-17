
let nameelement=document.getElementById("nameelement");
let passwordelement=document.getElementById("passwordelement");
let signinelement=document.getElementById("signin")

function signinbutton(){
  if(nameelement.value=""){
      alert("please enter username or email");
  }
  else if(passwordelement.value=""){
    alert("please enter password");
  }
  else{
    let anchorelement=document.createElement("a")
    anchorelement.href="https://education.github.com/git-cheat-sheet-education.pdf";
    anchorelement.target = "_blank";
    document.body.appendChild(anchorelement);
  }
}
signinelement.addEventListener("click",signinbutton());
