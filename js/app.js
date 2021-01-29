window.addEventListener('scroll', () => {
    let content = document.querySelector('#Singles');
    let navBar = document.querySelector('.nav-bar');
    let imgNav = document.querySelector('.img-nav-bar');

    let navPosition = content.getBoundingClientRect().top * 2;
    let screenPosition = window.innerHeight;

    if (navPosition < screenPosition){
        navBar.style.height = "65px";
        imgNav.style.transform = "scale(0)";
    } else {
        navBar.style.height = "100px";
        imgNav.style.transform = "scale(1)";
    }

    
});