if(window.localStorage.getItem({theme})==null){
    window.localStorage.setItem({theme:"white"},'0')
}
let theme_button = get.id("theme")
let theme_button_value = window.localStorage.getItem({theme})
function theme(){
    if (theme_button_value == 'white') {
        window.localStorage.setItem({theme:'black'},'0')
        document.head.insertAdjacentHTML(
            'beforeend',
            '<link rel="stylesheet" href="./styles/dark.css" onload="document.documentElement.style.display = \'\'">',
        );
        theme_button.style.transform = 'rotate(180deg)'
        theme_button_value = 'black'
    } else{
        window.localStorage.setItem({theme:'white'},'0')
        document.body.style.transition = '400ms'
        document.head.insertAdjacentHTML(
            'beforeend',
            '<link rel="stylesheet" href="./styles/light.css" onload="document.documentElement.style.display = \'\'">',
        );
        theme_button_value = 'white'
        theme_button.style.transform = 'rotate(360deg)'
}}
theme()
theme_button.onclick = theme