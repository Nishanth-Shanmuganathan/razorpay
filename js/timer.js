var countDownDate = new Date("feb 28, 2021 23:59").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("day").innerHTML = days;
    document.getElementById("hour").innerHTML = hours;
    document.getElementById("minute").innerHTML = minutes;
    document.getElementById("second").innerHTML = seconds;

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("day").innerHTML = 0;
        document.getElementById("hour").innerHTML = 0;
        document.getElementById("minute").innerHTML = 0;
        document.getElementById("second").innerHTML = 0;
    }
}, 1000);
const corouselItems = document.getElementsByClassName("corousel-item");
const corouselDots = document.getElementsByClassName("points");
function prev() {
    const elem = document.getElementById("active");
    let prevEle;
    if (elem.previousElementSibling.className === "corousel-item") {
        prevEle = elem.previousElementSibling;
    } else {
        prevEle = corouselItems[corouselItems.length - 1];
    }
    prevEle.id = "active";
    prevEle.classList.add("right-slide");
    elem.removeAttribute("id");
    setTimeout(() => {
        prevEle.classList.remove("right-slide");
    }, 500);
}
function next() {
    const elem = document.getElementById("active");
    let nextElem;
    if (elem.nextElementSibling?.className === "corousel-item") {
        nextElem = elem.nextElementSibling;
    } else {
        nextElem = corouselItems[0];
    }
    nextElem.id = "active";
    nextElem.classList.add("left-slide");
    elem.removeAttribute("id");
    setTimeout(() => {
        nextElem.classList.remove("left-slide");
    }, 500);
}
function jumpTo(id) {
    if (id >= corouselItems.length) {
        return;
    }
    const elem = document.getElementById("active");
    const dot = document.getElementById("activeDot");
    let nextElem = corouselItems[id];
    let nextDot = corouselDots[id];

    if (elem === nextElem) {
        return;
    }
    nextElem.id = "active";
    nextDot.id = "activeDot";
    elem.removeAttribute("id");
    dot.removeAttribute("id");

    if (dot.getAttribute("name") < nextDot.getAttribute("name")) {
        nextElem.classList.add("left-slide");
        setTimeout(() => {
            nextElem.classList.remove("left-slide");
        }, 500);
    } else {
        nextElem.classList.add("right-slide");
        setTimeout(() => {
            nextElem.classList.remove("right-slide");
        }, 500);
    }
}

function openModal() {
    const modal = document.getElementById("side-nav");
    modal.style.display = "block";
    document.getElementsByTagName("body")[0].style.position = "fixed";
}
function closeModal() {
    const modal = document.getElementById("side-nav");
    modal.style.display = "none";
    document.getElementsByTagName("body")[0].style.position = "static";
}
