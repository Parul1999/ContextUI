const snackbar = document.querySelector(".snackbar");
const snackbarClose = document.querySelector(".snackbar-close");
const baseline = document.querySelector(".snackbar-baseline");
const leading = document.querySelector(".snackbar-leading");
const stacked = document.querySelector(".snackbar-stacked");

const baselineClick=()=>
{
    snackbar.style.cssText = `
    display: flex; 
    margin-left:50%;
    transform:translateX(-50%);
    `;

    setTimeout(()=>{
        closeClick()
    },[5000])
}
const leadingClick=()=>
{
    snackbar.style.cssText = `
    display: flex; 
    `;
    setTimeout(()=>{
        closeClick()
    },[5000])
}
const stackedClick=()=>
{
    snackbar.style.cssText = `
    display: flex; 
    flex-direction:column;
    margin-left:50%;
    transform:translateX(-50%);
    align-items:end;
    `;
    setTimeout(()=>{
        closeClick()
    },[5000])
}
const closeClick=()=>
{
snackbar.style.display ="none"
}

baseline.addEventListener("click",baselineClick)
leading.addEventListener("click",leadingClick)
stacked.addEventListener("click",stackedClick)
snackbarClose.addEventListener("click",closeClick)