// -----header-----
// scroll
$(document).ready(function() {
    $(window).scroll(function() {
        var sc = $(window).scrollTop()
        if (sc > 150) {
            $("#main-navbar").addClass("navbar-scroll")
        } else {
            $("#main-navbar").removeClass("navbar-scroll")
        }
    });
});
// search box
const searchIcon = document.querySelector(".search-icon");
const navbarRight = document.querySelector(".account-info");
const searchWrapper = document.querySelector(".search-wrapper");
const navbarBrand = document.querySelector(".logo");
const close = document.querySelector(".close");
searchIcon.onclick = () => {
    navbarBrand.classList.add("active");
    navbarRight.classList.add("active");
    searchWrapper.classList.add("active");
}
close.onclick = () => {
    navbarBrand.classList.remove("active");
    navbarRight.classList.remove("active");
    searchWrapper.classList.remove("active");
}



// show more
$(function() {
    const loadMore = document.querySelector("#loadMore");
    x = 12;
    $('.product-items .single-product-items').slice(0, 12).show();
    $('#loadMore').on('click', function(e) {
        e.preventDefault();
        x = x + 100;
        $('.product-items .single-product-items').slice(0, x).slideDown();
        loadMore.classList.add("hide");

    });
});

const productDelete = document.querySelector(".product_delete");