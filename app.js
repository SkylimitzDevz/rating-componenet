// grab a hold of all rate scores and submit button
// convert the string inside each button to its number
// when clicked make the selected buttom white on default
// render out the value that was selected when submitting


var rating = document.querySelectorAll(".score-btn")
const submitBtn = document.getElementById("submit-btn")
const outputEl = document.getElementById("rating-el")
const thankyouScreen = document.getElementById("thankyou-screen")
const ratingScreen = document.getElementById("rating-screen")
let btnValue = 0


for (i = 0; i < rating.length; i++){
    
    rating[i].addEventListener("click", function() {
        
        for (j = 0; j < rating.length; j++){
            rating[j].style.backgroundColor = ""
            rating[j].style.color = ""
        }

        btnValue = this.dataset.value
        this.style.backgroundColor = "var(--white-color)"
        this.style.color = "var(--Grey-950)"
        submitBtn.style.background = "var(--Orange-500)"
        submitBtn.style.cursor = "pointer"
    })
}

submitBtn.addEventListener("click", function() {
    if(btnValue === 0){
        submitBtn.style.cursor = "not-allowed"
    }
    else{
        thankyouScreen.style.display = "flex"
        ratingScreen.style.display = "none"

        outputEl.textContent = `You selected ${btnValue} out of 5`
    }
})