import home from "./home.js";
import header from "./header.js";
import footer from "./footer.js";


//HOME VIEW//
const containerEl = document.querySelector(".container");

function makeHomeView(){
    containerEl.innerHTML = header();
    containerEl.innerHTML += home();
    containerEl.innerHTML += footer();
}
makeHomeView();
