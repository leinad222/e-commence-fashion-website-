let swiper = new Swiper('.home-slider', {
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }
});

// duplicate images for infinite scroll
const insVideo = document.querySelector('.ins_flex');
Array.from(insVideo.children).forEach(item => {
    const duplicate = item.cloneNode(true);
    duplicate.setAttribute('aria-hidden', 'true');
    insVideo.appendChild(duplicate);
});

let enddate = "18 November 2025 10:00 AM";
document.querySelector('#head').innerText = enddate;

let inputs = document.querySelectorAll(".infield input");

function updateField(input, newValue) {
    if (input.value === newValue.toString()) return;

    // Add flip animation
    input.classList.add("flip");

    setTimeout(() => {
        input.value = newValue;
        input.classList.remove("flip");
    }, 300);
}

function clock() {
    let end = new Date(enddate);
    let now = new Date();
    let diff = (end - now) / 1000;

    if (diff < 0) return;

    let days = Math.floor(diff / 3600 / 24);
    let hours = Math.floor(diff / 3600) % 24;
    let minutes = Math.floor(diff / 60) % 60;
    let seconds = Math.floor(diff) % 60;

    updateField(inputs[0], days);
    updateField(inputs[1], hours);
    updateField(inputs[2], minutes);
    updateField(inputs[3], seconds);
}

setInterval(clock, 1000);
clock();
document.querySelectorAll('form').forEach(f => f.addEventListener('submit', e => {
// simple feedback — replace with real submit later
const btn = e.target.querySelector('button');
btn.textContent = 'Message queued';
btn.disabled = true;
setTimeout(()=>{btn.textContent='Send message';btn.disabled=false},2500);
}));
