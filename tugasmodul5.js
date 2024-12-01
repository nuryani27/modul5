$(document).ready(function () {
    // Efek fade-in untuk gambar-gambar di galeri
    $(".gallery img").each(function (index) {
        $(this).delay(200 * index).fadeIn(500);
    });

    // Membuka modal ketika gambar diklik
    $(".gallery img").click(function () {
        const imgSrc = $(this).attr("src");
        $(".modal img").attr("src", imgSrc);
        $(".modal").fadeIn(300);
    });

    // Menutup modal ketika tombol "close" diklik
    $(".modal .close").click(function () {
        $(".modal").fadeOut(300);
    });

    // Menutup modal ketika area di luar gambar diklik
    $(".modal").click(function (event) {
        if ($(event.target).is(".modal")) {
            $(".modal").fadeOut(300);
        }
    });
});
