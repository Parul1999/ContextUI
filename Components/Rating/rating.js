const stars = document.querySelectorAll(".full-star");
const rating = document.querySelector(".rating");

const highlightStars=(e)=> {
    const i = [...stars].indexOf(e.target);
     for(let j=0;j<stars.length;j++){
         if(j<=i)
        stars[j].classList.add("full-star-active");
        else
        stars[j].classList.remove("full-star-active");
     }
    if (i > -1) {
        rating.textContent = `${i+1}/5`;
      } else {
        rating.textContent = `${0}/5`;
      }
}

for (star of stars) {
  star.addEventListener("click", (e) => highlightStars(e));
}
