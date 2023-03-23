const theme_mode = document.getElementById("theme_mode");

theme_mode.onclick = function () {
    const theme = document.getElementById("theme");

    if (theme.getAttribute ("href") == "shell/light_theme.css") {
        theme.href = "shell/dark_theme.css";
    }   else {
        theme.href = "shell/light_theme.css";
    }
}