class NYT_SearchAPI {
    API_BASE_URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json`
    API_KEY = `A1AMntlR77BOSIKIhTCl7YtvA3MjAW3U`

    constructor() {
        this.setupListener()
    }

    setupListener() {
        const form = document.querySelector(`form[name="article-search"]`)
        form.addEventListener(`submit`, this.handleSearch)
    }

    handleSearch = (evt) => {
        evt.preventDefault()
        console.log(`searching...`)

        const term = document.querySelector(`input[name="term"]`)
        const data = {
            q: term,
            'api-key': this.API_KEY
        }

        axios.get( this.API_BASE_URL, { params: data }).then(this.processResults)
    }

    processResults = (response) => {
        console.log(`got results!`, response)

        // const results = response.data.response.docs
        // results.array.forEach(element => {
            
        // });
    }
}

new NYT_SearchAPI