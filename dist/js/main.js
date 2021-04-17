class NYT_SearchAPI{API_BASE_URL="https://api.nytimes.com/svc/search/v2/articlesearch.json";API_KEY="s1jci6o1poZJW3TJJdvuxK9q6bzo3U80";constructor(){this.setupListener()}setupListener(){document.querySelector(".search-controls__button").addEventListener("click",this.handleSearch)}handleSearch=e=>{const t={q:document.querySelector('input[name="term"]').value,"api-key":this.API_KEY};axios.get(this.API_BASE_URL,{params:t}).then(this.processResults)};processResults=e=>{const t=e.data.response.docs,s=document.querySelector(".results"),a=s.querySelectorAll("*");a&&a.forEach((e=>{e.remove()})),console.log(t),t.forEach((e=>{let t=document.createElement("div");t.classList.add("results__row");let a=document.createElement("p");a.classList.add("results__date");let l=this.parseDate(e.pub_date);a.textContent=l,t.appendChild(a);let n=document.createElement("h3");n.classList.add("results__section"),n.textContent=e.section_name,t.appendChild(n);let c=document.createElement("a");c.href=e.web_url,c.setAttribute("target","_blank"),c.classList.add("results__title"),c.textContent=e.headline.main,t.appendChild(c);let r=document.createElement("p");r.classList.add("results__abstract"),r.textContent=e.abstract,t.appendChild(r);let o=document.createElement("p");o.classList.add("results__byline"),o.textContent=e.byline.original,t.appendChild(o);let d=document.createElement("div");d.classList.add("results__photo"),d.style.background=`url("https://www.nytimes.com/${e.multimedia[16].url}")`,d.style.backgroundSize="cover",d.style.backgroundPoisition="center",t.appendChild(d),s.appendChild(t)}))};parseDate=e=>{let t="",s=e.slice(0,4),a=e.slice(5,7);t="01"===a?"Jan. ":"02"===a?"Feb. ":"03"===a?"Mar. ":"04"===a?"Apr. ":"05"===a?"May ":"06"===a?"Jun. ":"07"===a?"Jul. ":"08"===a?"Aug. ":"09"===a?"Sept. ":"10"===a?"Oct. ":"11"===a?"Nov. ":"12"===a?"Dec. ":"";let l=e.slice(8,10);return"0"===l[0]&&(l=l.substring(1,3)),l+=", ",t+l+s}}new NYT_SearchAPI;
//# sourceMappingURL=main.js.map