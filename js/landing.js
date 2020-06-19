$(document).ready(function () {

    $(".landing-faq__item").on("show.bs.collapse hide.bs.collapse", function (e) {
        if (e.type == 'show') {
            $(this).addClass('active');
        } else {
            $(this).removeClass('active');
        }
    });

});

if ($(window).outerWidth() > 767) {
    window.onload = function () {
        lax.setup(); // init

        const updateLax = () => {
            lax.update(window.scrollY);
            window.requestAnimationFrame(updateLax);
        };

        window.requestAnimationFrame(updateLax);
    };
}


window.addEventListener("resize", function () {
    lax.updateElements();
});
