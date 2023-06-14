// DOM Documents
const userDay = document.getElementById('day').value
const userMonth = document.getElementById('month').value
const userYear = document.getElementById('year').value
// const button = document.querySelector('#submit-button')

const daysResult = document.querySelector('#daysResult')
const monthsResult = document.querySelector('#monthsResult')
const yearsResult = document.querySelector('#yearsResult')



const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
const button = document.getElementById('submit-button');


button.addEventListener("click", () => {
    audio.play();
});


function calculate() {

    const userDayDate = new Date(userDay)
    const userMonthDate = new Date(userMonth)
    const userYearDate = new Date(userYear)

    if (userDay == "" || userMonth == "" || userYear == "") {
        document.getElementById('message').innerHTML = "Choose a date please"

        return false
    }

    else {

        let dayDate = userDayDate.getDate()
        let monthDate = userMonthDate.getMonth()
        let yearDate = userYearDate.getFullYear()

        let date = new Date

        //Extract the day, month, and year from current date
        let currentDay = date.getDate()
        let currentMonth = date.getMonth()
        let currentYear = date.getFullYear()

        let age = {}
        let ageString = ""

        //Get years
        let yearAge = currentYear - yearDate

        //Get months
        if (currentMonth >= monthDate) 
            var monthAge = currentMonth - monthDate
        else {
            yearAge --
            var monthAge = 12 + currentMonth - monthDate
        }

        //Get days
        if (currentDay >= dayDate) 
            var dateAge = currentDay - dayDate
        else {
            dateAge --
            var dateAge = 31 + currentDay - dayDate

            if (monthAge < 0) {
                monthAge = 11
                yearAge --
            }
        }

        //Group the age in a single variable
        age = {
            years: yearAge,
            months: monthAge,
            days: dateAge
        }

        if ( (age.years > 0) && (age.months > 0) && (age.days > 0) ) {
            ageString = age.years 
            // + " years, " + 
            ageString = age.months  
            // " months, and " + 
            ageString = age.days
        } 


        let dayResult = document.createElement('p')
        let monthResult = document.createElement('p')
        let yearResult = document.createElement('p')


        dayResult.innerHTML = ageString
        monthResult.innerHTML = ageString
        yearResult.innerHTML = ageString


        daysResult.appendChild(dayResult)
        monthsResult.appendChild(monthResult)
        yearsResult.appendChild(yearResult)

    }

}