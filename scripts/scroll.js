let allMovieTray = document.querySelectorAll('.movieTray');
let scrollbtnleftall = document.querySelectorAll('.scrollBtnleft');
let scrollbtnrightall = document.querySelectorAll('.scrollBtnright');

for (let i = 0; i < scrollbtnleftall.length; i++) {
    scrollbtnleftall[i].addEventListener('click', (event) => {
        event.preventDefault();
        allMovieTray[i].scrollLeft -= 500;
    });
}

for (let i = 0; i < scrollbtnrightall.length; i++) {
    scrollbtnrightall[i].addEventListener('click', (event) => {
        event.preventDefault();
        allMovieTray[i].scrollLeft += 500;
    });
}
