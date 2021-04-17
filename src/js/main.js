class NYT_SearchAPI {
    API_BASE_URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json`
    
    API_KEY = `s1jci6o1poZJW3TJJdvuxK9q6bzo3U80`

    constructor() {
        this.searchInput = document.querySelector(`input[name="term"]`)

        this.setupListener()
    }

    setupListener() {
        const searchButton = document.querySelector(`.search-controls__button`)
        const dateRangeButton = document.querySelector(`.date-range`)

        searchButton.addEventListener(`click`, this.handleSearch)
        this.searchInput.addEventListener(`keyup`, this.checkForEnter)
        dateRangeButton.addEventListener(`click`, this.expandDates)
    }

    expandDates = (evt) => {
        
    }

    handleSearch = (evt) => {
        const data = {
            q: this.searchInput.value,
            'api-key': this.API_KEY
        }

        axios.get( this.API_BASE_URL, { params: data }).then(this.processResults)
    }

    checkForEnter = (evt) => {
        if(evt.key === `Enter`) this.handleSearch()
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

            let dateP = document.createElement(`p`)
            dateP.classList.add(`results__date`)
            let formattedDate = this.parseDate(doc.pub_date)
            dateP.textContent = formattedDate
            docRow.appendChild(dateP)

            let sectionHeading = document.createElement(`h3`)
            sectionHeading.classList.add(`results__section`)
            sectionHeading.textContent = doc.section_name
            docRow.appendChild(sectionHeading)

            let titleHeading = document.createElement(`a`)
            titleHeading.href = doc.web_url
            titleHeading.setAttribute(`target`, `_blank`)
            titleHeading.classList.add(`results__title`)
            titleHeading.textContent = doc.headline.main
            docRow.appendChild(titleHeading)

            let astractP = document.createElement(`p`)
            astractP.classList.add(`results__abstract`)
            astractP.textContent = doc.abstract
            docRow.appendChild(astractP)

            let bylineP = document.createElement(`p`)
            bylineP.classList.add(`results__byline`)
            bylineP.textContent = doc.byline.original
            docRow.appendChild(bylineP)

            let photoAnchor = document.createElement(`a`)
            photoAnchor.classList.add(`results__photo`)
            photoAnchor.style.background = `url("https://www.nytimes.com/${doc.multimedia[16].url}")`
            photoAnchor.style.backgroundSize = `cover`
            photoAnchor.style.backgroundPoisition = `center`
            photoAnchor.href = doc.web_url
            photoAnchor.setAttribute(`target`, `_blank`)
            docRow.appendChild(photoAnchor)

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

        let day = dateString.slice(8,10)
        if (day[0] === `0`) day = day.substring(1,3)
        day = day+ `, `

        return month+day+year
    }
}

new NYT_SearchAPI