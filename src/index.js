import template from "./template.hbs";
import menu from './menu.json';

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

const refs = {
    menu: document.querySelector(".js-menu"),
    body: document.querySelector("body"),
    switcher: document.querySelector(".theme-switch__toggle")
} 


const menuElementMarkup = createMenu(menu);
refs.menu.insertAdjacentHTML("afterbegin", menuElementMarkup)
function createMenu(menu) {
    return menu.map(template).join('');
  }
  

refs.switcher.addEventListener("change", onThemeSwitcherChange)
savedTheme()

function changeTheme(currentTheme, oldTheme) {
    refs.body.classList.add(currentTheme);
    refs.body.classList.remove(oldTheme);
    localStorage.setItem("theme", currentTheme);
}

function onThemeSwitcherChange({target}) {
    if (target.checked) { 
        changeTheme(Theme.DARK, Theme.LIGHT)        
    } else {
     changeTheme(Theme.LIGHT, Theme.DARK)
    }
}    
      
function savedTheme() {
    const theme = localStorage.getItem("theme")
    if (theme) {
        refs.body.classList.add(theme);
        refs.switcher.checked = theme === Theme.DARK;
    }
}