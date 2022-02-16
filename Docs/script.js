const componentList = document.querySelectorAll(".component-item");
const introList = document.querySelectorAll(".getstarted");
const content = document.querySelector(".doc-iframe");
const openDocs = document.querySelector(".nav-doc-click");
const hamburger = document.querySelector(".responsive-hamburger");
const sidebar = document.querySelector(".doc-sidebar-on-top");
const styleSelected = {
    "background-color": "var(--primary-color)",
    color: "white",
  };
  const styleUnSelected = {
    "background-color": "white",
    color: "var(--primary-color)",
  };
let i =0;



//To embed components in documentation dynamically
const selectedComponent = (e) => {
  const i = [...componentList].indexOf(e.target);
  const selectedComponent = e.target.innerHTML;
  const selectedFile = e.target.innerHTML.toLowerCase();
  for (j = 0; j < introList.length; j++) {
    Object.assign(introList[j].style, styleUnSelected);
  }
  for (j = 0; j < componentList.length; j++) {
    if (j == i) Object.assign(componentList[j].style, styleSelected);
    else Object.assign(componentList[j].style, styleUnSelected);
  }

  content.setAttribute(
    "src",
    `/Components/${selectedComponent}/${selectedFile}.html`
  );
};

const selectedItem = (e)=>{
    const i = [...introList].indexOf(e.target);
    const selectedFile = e.target.classList[1];
    for (j = 0; j < componentList.length; j++) {
        Object.assign(componentList[j].style, styleUnSelected);
      }
    for (j = 0; j < introList.length; j++) {
        if (j == i) Object.assign(introList[j].style, styleSelected);
        else Object.assign(introList[j].style, styleUnSelected);
      }
    
      content.setAttribute(
        "src",
        `/GetStarted/${selectedFile}.html`
      );
}

for (item of componentList) {
  item.addEventListener("click", (e) => selectedComponent(e));
}
for (item of introList) {
    if(i==0){
    Object.assign(item.style, styleSelected);
    i++;
    }
    item.addEventListener("click", (e) => selectedItem(e));
  }

//To copy the code when clickied on copy icon
function copyToClipboard(element) {
  //Get text from the id
  var txt = document.querySelector(element).innerText;
  navigator.clipboard
    .writeText(txt)
    .then(() => {
        var modal = document.getElementById("myModal");

        // Get the button that opens the modal
       
        
        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];
        
        // When the user clicks the button, open the modal 
    ()=> {
          modal.style.display = "block";
        }
        
        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
          modal.style.display = "none";
        }
        
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
          if (event.target == modal) {
            modal.style.display = "none";
          }
        }
    });
}

//To expand and collapse the code-snipper
const expandCollapse=(element)=> {
  const code_ = document.querySelector(element);
  code_.classList.toggle("display-code-snippet");
}

const showHideSidebar=(e)=>{
  sidebar.classList.toggle("display-sidebar-on-top")
}
hamburger.addEventListener("click",(e)=>showHideSidebar(e))