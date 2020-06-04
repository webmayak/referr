$(document).ready(function () {

    $(".landing-faq__item").on("show.bs.collapse hide.bs.collapse", function (e) {
        if (e.type == 'show') {
            $(this).addClass('active');
        } else {
            $(this).removeClass('active');
        }
    });

});

window.onload = function () {
    lax.setup() // init

    const updateLax = () => {
        lax.update(window.scrollY)
        window.requestAnimationFrame(updateLax)
    }

    window.requestAnimationFrame(updateLax)
}
