const bg = document.querySelector("body");

function handleResize(){
    width = window.frames.innerWidth;
    max = window.frames.outerWidth;

    console.log(width, max);
    if (width >= max/4*3) {
        console.log(width);
        bg.style.backgroundColor = "blue"
    } else if (width < max/4*3 && width >= max/4*2) {
        console.log(width);
        bg.style.backgroundColor = "yellow"
    } else if (width < max/4*2 && width >= max/4*1) {
        console.log(width);
        bg.style.backgroundColor = "purple"
    } else {
        console.log(width);
        bg.style.backgroundColor = "red"
    }
}

window.addEventListener("resize", handleResize);
