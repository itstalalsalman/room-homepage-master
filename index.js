
const $images = ["desktop-image-hero-1.jpg","desktop-image-hero-2.jpg","desktop-image-hero-3.jpg"];
const $mobileImages = ["./images/mobile-image-hero-1.jpg","./images/mobile-image-hero-2.jpg","./images/mobile-image-hero-3.jpg"]
let currentImageIndex = 0;
const $slideshowImage = $('.navbar__container');
const $head = ['Discover innovative ways to decorate', 'We are available all across the globe','Manufactured with the best materials'];
const $paragraph = [
    'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.',
    'With stores over the world, it\'s easy for you to find furniture for your home or place of business. Locally, we\'re in most major citites throughout the country. Find the branch nearest you usin our store locator. Any questions? Don\'t hesitate to contact us today.',
    'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want their home and office.'
];
function showImageAndText(imageIndex) {
    if (imageIndex < 0) {
        imageIndex = $images.length - 1;
    } else if (imageIndex >= $images.length) {
        imageIndex = 0;
    }

    const imageUrl = 'url(./images/' + $images[imageIndex] + ')';
    $(".navbar__container").css('background-image', imageUrl);
    $('.nav__text__head').html($head[imageIndex]);
    $('.nav__text__para').html($paragraph[imageIndex]);
    $(".mobile__hero__img").attr("src",$mobileImages[imageIndex]);
    currentImageIndex = imageIndex;
}


function changeImageAndText(direction)
{
    showImageAndText(currentImageIndex + direction);
}



$(document).ready(function(){
    showImageAndText(currentImageIndex);
    $(".left").click(function(){
        changeImageAndText(-1);
    });

    $(".right").click(function(){
        changeImageAndText(1);
    });

    $(".img__ham").click(function(){
        $(".mobile__nav__cont").hide();
        $(".clicked__nav__bar").css("display","flex");
    });

    $(".icon__close").click(function(){
        $(".clicked__nav__bar").hide();
        $(".mobile__nav__cont").show();
    });
    
});