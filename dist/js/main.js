class NYT_SearchAPI{API_BASE_URL="https://api.nytimes.com/svc/search/v2/articlesearch.json";API_KEY="s1jci6o1poZJW3TJJdvuxK9q6bzo3U80";constructor(){this.setupListener()}setupListener(){document.querySelector(".article-search__button").addEventListener("click",this.handleSearch)}handleSearch=e=>{console.log("searching...");const s={q:document.querySelector('input[name="term"]').value,"api-key":this.API_KEY};axios.get(this.API_BASE_URL,{params:s}).then(this.processResults)};processResults=e=>{console.log("got results!",e);e.data.response.docs}}new NYT_SearchAPI;
//# sourceMappingURL=main.js.map