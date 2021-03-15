// OPTIONS DARK MODE PLUGIN
var DarkModeOptions = {
    light: "assets/css/light.css",
    dark: "assets/css/dark.css",
    checkSystemScheme: true,
    saveOnToggle: true
};

// DARKMODE INIT
var DarkMode = new DarkMode(DarkModeOptions);

// DARKMODE BTNS
let themeBtn = document.querySelectorAll(".theme-btn__checkbox");

// DARKMODE BTNS LISTEN 'CLICK'
themeBtn.forEach((btn) =>{
    btn.addEventListener("click", function (event){ 
        DarkMode.toggleMode();

    });
});



function ChangeTheme(event)
{
    // let lightTheme = "assets/css/light.min.css";
    // let darkTheme = "assets/css/dark.min.css";
    // let lightThemeBg = "assets/images/All/bg--light.jpg";
    // let darkThemeBg = "assets/images/All/bg--dark.jpg";
    // let lightLogo = "assets/images/All/logo--wh.png";
    // let darkLogo = "assets/images/All/logo--dark.png"

    // var currTheme = themeLlink.getAttribute("href");
    // var theme = "";

    // if(event.target.checked){
    //     currTheme = lightTheme;
    //     document.body.style.backgroundImage = `url(${lightThemeBg})`;
    //     headerLogoImg.src = lightLogo;
    //     theme = "light";
    // } else {
    //     currTheme = darkTheme;
    //     headerLogoImg.src = darkLogo;
    //     document.body.style.backgroundImage = `url(${darkThemeBg})`;
    //     theme = "dark";
    // }

    // themeLlink.setAttribute("href", currTheme);
}