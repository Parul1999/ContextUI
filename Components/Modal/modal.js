const modal = document.querySelector(".modal");
const modal2 = document.querySelector(".type2");

const openModal = (clas) => {
  console.log(modal.classList[0]);
  if (clas == modal.classList[0]) {
    modal.style.cssText = `
    display: flex; 
    flex-wrap:wrap;
    `;
  } else if (clas == modal2.classList[1]) {
    modal2.style.cssText = `
    display: flex; 
    flex-wrap:wrap;
    `;
  }
};

const onClose = () => {
  modal.style.display = "none";
  modal2.style.display = "none";
};

openModal.addEventListener("click", openModal);
