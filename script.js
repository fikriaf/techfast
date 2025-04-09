const introElements = document.querySelectorAll(".intro");
// Fungsi untuk menggeser elemen ke kiri dan menampilkan halaman utama
function geserKiriDanTampilkanHalaman() {
    introElements.forEach(function(element) {
        element.style.transform = "translateX(-100%)";
    });// Tampilkan konten halaman utama
}

setTimeout(geserKiriDanTampilkanHalaman, 5000); 

// Ini untuk navbar
window.addEventListener('scroll', () => {
    const header = document.querySelector('.area-page');
    const head1 = document.querySelector(".slideHead1");
    const contentHead1 = document.querySelector(".slideText1");
    const imgHead1 = document.querySelector(".imgHead1");
    const head2L1 = document.querySelector(".head2Line1");
    const head2L2 = document.querySelector(".head2Line2");
    const img1head3 = document.querySelector(".heading3 div div .img1");
    const img2head3 = document.querySelector(".heading3 div div .img2");
    const img3head3 = document.querySelector(".heading3 div div .img3");
    const img4head3 = document.querySelector(".heading3 div div .img4");
    const scrollPosition = window.scrollY;

    if (scrollPosition > 100) {
        header.classList.add('active');
    }else {
        header.classList.remove('active');
    };
    if (scrollPosition > 200) {
        head1.classList.add("active");
        contentHead1.classList.add("active");   
        imgHead1.classList.add("active");
    }else{
        head1.classList.remove("active")
        contentHead1.classList.remove("active");  
        imgHead1.classList.remove("active");
    };
    if (scrollPosition > 600 ){
        head2L1.classList.add("active");
        head2L2.classList.add("active");
    }else{
        head2L1.classList.remove("active");
        head2L2.classList.remove("active");
    };
    if (scrollPosition > 1200 ){
        setTimeout(() => img1head3.classList.add("active"), 0);
        setTimeout(() => img2head3.classList.add("active"), 200);
        setTimeout(() => img3head3.classList.add("active"), 500);
        setTimeout(() => img4head3.classList.add("active"), 900);
    }else{
        img1head3.classList.remove("active");
        img2head3.classList.remove("active");
        img3head3.classList.remove("active");
        img4head3.classList.remove("active");
    };
});

// Fungsi untuk head 2 cuy, dan image nya (penting memperindah dan menjaga image-mu)
let indexHead = 0;
let indexImage = 0;
const head = ["Budaya Adat Istiadat", "Budaya Karya Seni", "Budaya Warisan Leluhur", "Budaya Seni Tari", "Budaya Seni Wayang"]
const images = ["content/foto/barong.jpeg", "content/foto/batik.jpeg", "content/foto/patung.jpeg", "content/foto/tari.jpeg", "content/foto/wayang.jpeg"];
const gethead = document.getElementById("head1");
const sliderImage = document.getElementById("sliderImage");
const imageContainer = document.querySelector(".image-container");
const headContainer = document.querySelector(".heading1");

function slideLeft() {
    indexHead = (indexHead - 1 + head.length) % head.length;
    indexImage = (indexImage - 1 + images.length) % images.length;
    updateImage("left-animation");
}

function slideRight() {
    indexHead = (indexHead + 1) % head.length;
    indexImage = (indexImage + 1) % images.length;
    updateImage("right-animation");
}

function updateImage(animationClass) {
    imageContainer.classList.remove("left-animation", "right-animation");
    headContainer.classList.remove("up-animation")
    sliderImage.src = images[indexImage];
    gethead.textContent = head[indexHead];
    imageContainer.classList.add(animationClass);
    setTimeout(() => {
        imageContainer.classList.remove(animationClass);
    }, 500);
}



