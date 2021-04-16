class NYT_SearchAPI {
    API_BASE_URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json`
    
    API_KEY = `s1jci6o1poZJW3TJJdvuxK9q6bzo3U80`

    constructor() {

        this.setupListener()
    }

    setupListener() {
        const searchButton = document.querySelector(`.search-controls__button`)
        searchButton.addEventListener(`click`, this.handleSearch)
    }

    handleSearch = (evt) => {
        const term = document.querySelector(`input[name="term"]`)
        const data = {
            q: term.value,
            'api-key': this.API_KEY
        }

        axios.get( this.API_BASE_URL, { params: data }).then(this.processResults)
    }

    processResults = (response) => {
        const results = response.data.response.docs
        const resultsSection = document.querySelector(`.results`)
        const oldContent = resultsSection.querySelectorAll(`*`)
        if(oldContent){
            oldContent.forEach(element => {
                element.remove()
            })
        }
        console.log(results)
        results.forEach(doc => {
            // console.log(doc.headline.main)
            let docRow = document.createElement(`div`)
            docRow.classList.add(`results__row`)

            let docDateP = document.createElement(`p`)
            docDateP.classList.add(`results__date`)
            let formattedDate = this.parseDate(doc.pub_date)
            docDateP.textContent = formattedDate
            docRow.appendChild(docDateP)

            resultsSection.appendChild(docRow)

        });
    }

    parseDate = (dateString) => {
        let month = ``
        let year  = dateString.slice(0,4)
        let monthString = dateString.slice(5,7)
        if(monthString===`01`) month = `Jan. `
        else if(monthString===`02`) month = `Feb. `
        else if(monthString===`03`) month = `Mar. `
        else if(monthString===`04`) month = `Apr. `
        else if(monthString===`05`) month = `May `
        else if(monthString===`06`) month = `Jun. `
        else if(monthString===`07`) month = `Jul. `
        else if(monthString===`08`) month = `Aug. `
        else if(monthString===`09`) month = `Sept. `
        else if(monthString===`10`) month = `Oct. `
        else if(monthString===`11`) month = `Nov. `
        else if(monthString===`12`) month = `Dec. `
        else month = ``
        console.log(dateString)
        if (dateString[0] === `0`) dateString = dateString.substring(1,2)
        let day = dateString.slice(8,10) + `, `
        if (day[0] === `0`) day = day.substring(1,3)
        return month+day+year
    }
}

new NYT_SearchAPI