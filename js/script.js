








window.addEventListener('keydown', (e) => {
    if (e.key == "Escape") {
        document.getElementById("my-modal").classList.remove("open")
    }
});


document.querySelector("#my-modal .kri__modal-wrapper").addEventListener('click', event => {
    event._isClickWithInModal = true;
});

document.getElementById("my-modal").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});


document.getElementById("open-teach-btn").addEventListener("click", function() {
    document.getElementById("teach-modal").classList.add("open")
})


window.addEventListener('keydown', (e) => {
    if (e.key == "Escape") {
        document.getElementById("teach-modal").classList.remove("open")
    }
});


document.querySelector("#teach-modal .teach__modal-wrapper").addEventListener('click', event => {
    event._isClickWithInModal = true;
});

document.getElementById("teach-modal").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});

document.getElementById("close-teach-modal").addEventListener("click", function() {
    document.getElementById("teach-modal").classList.remove("open")
})


document.getElementById("open-teach-btn2").addEventListener("click", function() {
    document.getElementById("teach-modal").classList.add("open")
})

document.getElementById("open-teach-btn3").addEventListener("click", function() {
    document.getElementById("teach-modal").classList.add("open")
})

document.getElementById("open-teach-btn4").addEventListener("click", function() {
    document.getElementById("teach-modal").classList.add("open")
})

document.getElementById("open-teach-btn5").addEventListener("click", function() {
    document.getElementById("teach-modal").classList.add("open")
})

document.getElementById("open-teach-btn1").addEventListener("click", function() {
    document.getElementById("teach-modal").classList.add("open")
})




document.getElementById("open-room-btn").addEventListener("click", function() {
    document.getElementById("room-modal").classList.add("open")
})

document.getElementById("close-room-modal").addEventListener("click", function() {
    document.getElementById("room-modal").classList.remove("open")
})


document.getElementById("open-room-btn2").addEventListener("click", function() {
    document.getElementById("room-modal").classList.add("open")
})
document.getElementById("open-room-btn3").addEventListener("click", function() {
    document.getElementById("room-modal").classList.add("open")
})
document.getElementById("open-room-btn4").addEventListener("click", function() {
    document.getElementById("room-modal").classList.add("open")
})
document.getElementById("open-room-btn5").addEventListener("click", function() {
    document.getElementById("room-modal").classList.add("open")
})
document.getElementById("open-room-btn6").addEventListener("click", function() {
    document.getElementById("room-modal").classList.add("open")
})


window.addEventListener('keydown', (e) => {
    if (e.key == "Escape") {
        document.getElementById("room-modal").classList.remove("open")
    }
});


document.querySelector("#room-modal .room__modal-wrapper").addEventListener('click', event => {
    event._isClickWithInModal = true;
});

document.getElementById("room-modal").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});

const kriModal = document.querySelectorAll('.kriminoligiya');

kriModal.forEach(kriModal => {
    kriModal.addEventListener('click', () => {
        document.getElementById("my-modal").classList.add('open');
    });
});


const teachModal = document.querySelectorAll('.kriminoligiya1');

teachModal.forEach(teachModal => {
    teachModal.addEventListener('click', () => {
        document.getElementById("teach-modal").classList.add('open');
    });
});


const roomModal = document.querySelectorAll('.room1');

roomModal.forEach(roomModal => {
    roomModal.addEventListener('click', () => {
        document.getElementById("room-modal").classList.add('open');
    });
});