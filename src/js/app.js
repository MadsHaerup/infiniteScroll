const URL = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0";

document.addEventListener("DOMContentLoaded", () => {
    //Sætter IntersectionObserver til at loade flere elementer når footer er 100% synlig
    let options = {
        root: null,
        rootMargins: "0px",
        threshold: 1.0 //100%
    };
    const observer = new IntersectionObserver(handleIntersect, options);
    //obsevere footeren
    observer.observe(document.querySelector("footer"));
    //Loader data'en fra start
    getData();
});
// ─────────────────────────────────────────────────────────────────
//funktion der håndtere, om vores element der bliver observeret er i viewporten
function handleIntersect(entries) {
    if (entries[0].isIntersecting) {
        console.warn("something is intersecting with the viewport");
        getData();

    }
}
// ─────────────────────────────────────────────────────────────────

function getData() {
    let main = document.querySelector("main");
    console.log("fetch some JSON data");
    fetch(URL) //henter Url'en 

    .then(response => response.json()) //konventere det til en json fil

    .then(data => {
        //logger 'data' for at se hvilke objekter der bliver retuneret
        console.log(data);
        //iterere over objektet results
        data.results.forEach(result => {
            //skaber elementer objektet skal være i
            let article = document.createElement("article");
            let p = document.createElement("p");
            p.textContent = result.name;
            //tilføjer elementet til html
            article.appendChild(p);
            main.appendChild(article);
        });
    });
}
// ─────────────────────────────────────────────────────────────────