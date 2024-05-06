// Define an array of different titles and descriptions
const titles = ["Project Finance", "Investment Promotion", "Inter and Intra African Trade Facilitation"];
const descriptions = [
    "INVETA Group is a leading provider of capital for development projects in Africa offering grand-scale, mid-size and intermediate financing, to both government and private sectors.",
    "Effective communication of projects opportunities is an integral part of Investment promotion. INVETA GROUP champions Investment promotion through its Television broadcast, INVEST AND TRADE AFRICA, which spotlights macroeconomic policies and opportunities in energy, finance, mining, Agriculture, International & Intra-Africa Trade",
    "INVETA Group helps businesses to identify and assess new markets in Africa, providing insights into the region such as the regulatory environment. We promote the implementation of the African continental free trade area [AFCFTA]"
];

// Get the elements
const titleElement = document.querySelector(".mainHeading__title");
const descriptionElement = document.querySelector(".mainHeading__description");

// Function to animate text change
function animateTextChange(index) {
    // Change the title and description
    titleElement.textContent = titles[index];
    descriptionElement.textContent = descriptions[index];

    // Trigger reflow
    void descriptionElement.offsetWidth; // This line is necessary to trigger a reflow

    // Add animation class to title and description to start the animation
    titleElement.classList.add("animate-text-change");
    descriptionElement.classList.add("animate-text-change");

    // Remove animation class after animation ends
    setTimeout(() => {
        titleElement.classList.remove("animate-text-change");
        descriptionElement.classList.remove("animate-text-change");
    }, 1000); // Adjust timing based on CSS animation duration
}

// Call the function to change the text after a certain interval (e.g., every 3 seconds)
let currentIndex = 0;
setInterval(() => {
    currentIndex = (currentIndex + 1) % titles.length;
    animateTextChange(currentIndex);
}, 3000);
var closeBtn = document.querySelectorAll(".close"),
    card = document.querySelectorAll(".card"),
    btnActions = document.querySelectorAll(".btn");

closeBtn.forEach(function(el) {
  el.addEventListener("click", closeCard);
});

card.forEach(function(el) {
  el.addEventListener("click", openCard);
});

btnActions.forEach(function(el) {
  el.addEventListener("click", clickBtn);
});

function closeCard(event) {
  event.stopPropagation();
  event.target.closest(".card").classList.add("closed");

}

function openCard(event) {
  if (event.currentTarget.classList.contains("closed")) {
    event.currentTarget.classList.remove("closed");
  }
}

function clickBtn(event) {
  if (event.currentTarget.classList.contains("clicked")) {
    event.currentTarget.classList.remove("clicked");
  } else {
    event.currentTarget.classList.add("clicked");
  }
}

const accordionContent = document.querySelectorAll(".accordion-content");
accordionContent.forEach((item, index) => {
    let header = item.querySelector("header");
    header.addEventListener("click", () =>{
        item.classList.toggle("open");

        let description = item.querySelector(".description");
        if(item.classList.contains("open")){
            description.style.height = `${description.scrollHeight}px`;
            item.querySelector("i").classList.replace("fa-plus", "fa-minus");
        }else{
            description.style.height = "0px";
            item.querySelector("i").classList.replace("fa-minus", "fa-plus");
        }
        removeOpen(index);
    })
})

function removeOpen(index1){
    accordionContent.forEach((item2, index2) => {
        if(index1 != index2){
            item2.classList.remove("open");

            let des = item2.querySelector(".description");
            des.style.height = "0px";
            item2.querySelector("i").classList.replace("fa-minus", "fa-plus");
        }
    })
}