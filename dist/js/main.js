class NYT_SearchAPI{API_BASE_URL="https://api.nytimes.com/svc/search/v2/articlesearch.json";API_KEY="A1AMntlR77BOSIKIhTCl7YtvA3MjAW3U";constructor(){this.setupListener()}setupListener(){document.querySelector('form[name="article-search"]').addEventListener("submit",this.handleSearch)}handleSearch=e=>{e.preventDefault(),console.log("searching...");const s={q:document.querySelector('input[name="term"]'),"api-key":this.API_KEY};axios.get(this.API_BASE_URL,{params:s}).then(this.processResults)};processResults=e=>{console.log("got results!",e)}}new NYT_SearchAPI;
//# sourceMappingURL=main.js.map