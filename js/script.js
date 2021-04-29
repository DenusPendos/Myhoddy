
const animItems = document.querySelectorAll(".anim-item");

window.addEventListener('scroll', animOnScroll);

function animOnScroll(params) {
    for (let index = 0; index < animItems.length; index++) {
        const animItemE = animItems[index];
        const animItemEHeight = animItemE.offsetHeight;
        const animItemOffset = offset(animItemE).top;
        const animStart = 4;

        let animItemPoint = window.innerHeight - animItemEHeight / animStart;

        if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemEHeight)) {
            animItemE.classList.add('_active');
        }
    }
}

function offset(el) {
    const rect = el.getBoundingClientRect(),
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop }
}

setTimeout(() => {
    animOnScroll();
}, 300);