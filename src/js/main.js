class NYT_SearchAPI {
    API_BASE_URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json`
    
    API_KEY = `s1jci6o1poZJW3TJJdvuxK9q6bzo3U80`

    constructor() {
        this.setupListener()
    }

    setupListener() {
        const form = document.querySelector(`.article-search__button`)
        form.addEventListener(`click`, this.handleSearch)
    }

    handleSearch = (evt) => {
        console.log(`searching...`)

        const term = document.querySelector(`input[name="term"]`)
        const data = {
            q: term.value,
            'api-key': this.API_KEY
        }

        axios.get( this.API_BASE_URL, { params: data }).then(this.processResults)
    }

    processResults = (response) => {
        console.log(`got results!`, response)

        const results = response.data.response.docs
        // results.array.forEach(element => {
            
        // });
    }
}

new NYT_SearchAPI