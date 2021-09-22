$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scroll > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    // slide-up-script
    $('.scroll-up-btn').click(function(){
        $('html').animated({scrollTop : 0});
    });
    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    // toggle dark mode
    const themeSwitch = document.querySelector('input');

    themeSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark-theme');
    });
});