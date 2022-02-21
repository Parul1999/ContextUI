const componentList = document.querySelectorAll(".component-item");
const introList = document.querySelectorAll(".getstarted");
const content = document.querySelector(".doc-iframe");
const openDocs = document.querySelector(".nav-doc-click");
const hamburger = document.querySelector(".responsive-hamburger");
const sidebar = document.querySelector(".doc-sidebar-on-top");
const closeSidebar = document.querySelector(".close-sidebar");
const showCopyTag = document.querySelector("#show")
// Get the buttons in the DOM
const toggleColorButtons = document.querySelectorAll(".color-mode-btn");
const styleSelected = {
  "background-color": "var(--primary-color)",
  color: "var(--light-color)",
};
const styleUnSelected = {
  "background-color": "var(--light-color)",
  color: "var(--primary-color)",
};
let i = 0;


const toggleColorMode = e => {
  // Switch to Light Mode
  if (e.currentTarget.classList.contains("light-hidden")) {
    document.documentElement.setAttribute("color-mode", "light");
    localStorage.setItem("color-mode", "light")
    return;
  }
  if (e.currentTarget.classList.contains("dark-hidden")) {
    document.documentElement.setAttribute("color-mode", "dark");
    localStorage.setItem("color-mode", "dark")
    return;
  }
};

toggleColorButtons.forEach(btn => {
  btn.addEventListener("click", toggleColorMode);
});

if (
  /* If user has set a site preference for dark mode OR a OS-level preference for Dark Mode AND no site preference */
  localStorage.getItem('color-mode') === 'dark' ||
  (window.matchMedia('(prefers-color-scheme: dark)').matches &&
    !localStorage.getItem('color-mode'))
) {
  // if true, set the site to Dark Mode
  document.documentElement.setAttribute('color-mode', 'dark')
}


//To embed components in documentation dynamically
const selectedComponent = (e) => {
  hideSidebar()
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

for (item of introList) {
  if (i == 0) {
    Object.assign(item.style, styleSelected);
    i++;
  }
  item.addEventListener("click", (e) => selectedItem(e));
}

//To copy the code when clickied on copy icon
const copyToClipboard = (element) => {
  var txt = document.querySelector(element).innerText;
  navigator.clipboard
    .writeText(txt)
    .then(() => {
      showCopyTag.innerHTML = "copied !!"
      showCopyTag.style.display = "block"
      setTimeout(() => {

        showCopyTag.innerHTML = ""
        showCopyTag.style.display = "none"
      }, 3000);
    });
}

//To expand and collapse the code-snipper
const expandCollapse = (element) => {
  const code_ = document.querySelector(element);
  code_.classList.toggle("display-code-snippet");

}


const selectedItem = (e) => {
  hideSidebar()
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
const showHideSidebar = (e) => {
  sidebar.classList.toggle("display-sidebar-on-top")
}
if(hamburger!==null)
{
  hamburger.addEventListener("click", (e) => showHideSidebar(e))
}


const hideSidebar = (e) => {
  sidebar.classList.remove("display-sidebar-on-top")
}
if(closeSidebar !==null){
closeSidebar.addEventListener("click", (e) => hideSidebar(e))
}
