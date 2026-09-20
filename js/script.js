/* =========================================================
   FASTWEEK UNAND XII
   CENTRAL LINK CONFIGURATION
   ========================================================= */


/* =========================================================
   1. PENGATURAN WEBSITE
   ========================================================= */

const siteConfig = {

    title: "FASTWEEK UNAND XII",

    description:
        "Ajang Kreativitas, Kompetisi, dan Prestasi"

};


/* =========================================================
   2. SEMUA LINK WEBSITE DIATUR DI SINI
   ========================================================= */

const links = {

    /* =========================
       INFORMASI FASTWEEK
       ========================= */

    booklet:
        "https://drive.google.com/drive/folders/1J8FEUdKNh2ed--N46AAhAA5wRvVUgWZe",

    pendaftaranBerkas:
        "https://drive.google.com/drive/folders/1IqjSk3yfQGzF-iJ6Gexqq_bNGG-47OxQ",

    twibbon:
        "https://drive.google.com/drive/folders/1wUKoqJnlCNBNruj0Zs9cQsQ6WVkUn5RI",


    /* =========================
       DEBAT
       ========================= */

    debatSiswa:
        "https://docs.google.com/forms/d/e/1FAIpQLSd_yl95vIulmIlpXNu3VD6oFe2m15eH05Y5O73f5byHC2hNzA/viewform?usp=publish-editor",

    debatMahasiswa:
        "https://docs.google.com/forms/d/e/1FAIpQLSc5ZcfN7RIRsg7T7mfmvYYjNepb_zH5Xy71YLyFF_pCNm6puw/viewform",


    /* =========================
       ESSAI
       ========================= */

    pendaftaranEssai:
        "https://docs.google.com/forms/d/e/1FAIpQLScNR-3qaKVtCVwGvAwOjZhmMJHQ1dRxTW_FCHLc_JXJq3U73Q/viewform",

    pengumpulanEssai:
        "https://docs.google.com/forms/d/e/1FAIpQLSfamNiQPvKLJSrlV6sufpj-mw-p8e63D1EkoZh8rW_M8h8i5A/viewform",


    /* =========================
       DIGITAL POSTER
       ========================= */

    pendaftaranPoster:
        "https://docs.google.com/forms/d/e/1FAIpQLSfZ67jpytrzs8O-MI9_4M9goXWdXhdxuKUvMcr4kARToIuUzA/viewform",

    pengumpulanPoster:
        "https://docs.google.com/forms/d/e/1FAIpQLScPIe5S9OVSnPAvz1BWA1YunK6ct3NybwrbS-AzWkxZ08QUjQ/viewform",


    /* =========================
       SOCIAL MEDIA
       ========================= */

    email:
        "https://mail.google.com/mail/?view=cm&fs=1&to=fastweekunand@gmail.com",

    instagram:
        "https://www.instagram.com/fastweek_unand?stkn=MWdnOTNvNHA2aDhqMQ==",

    tiktok:
        "https://www.tiktok.com/@fastweek_unand"

};


/* =========================================================
   3. MEMASANG LINK OTOMATIS KE WEBSITE
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* -----------------------------------------------------
       SOCIAL MEDIA
       ----------------------------------------------------- */

    const emailButton =
        document.querySelector(
            '[aria-label="Email FASTWEEK"]'
        );

    const instagramButton =
        document.querySelector(
            '[aria-label="Instagram FASTWEEK"]'
        );

    const tiktokButton =
        document.querySelector(
            '[aria-label="TikTok FASTWEEK"]'
        );


    if (emailButton) {

    emailButton.href = links.email;

    emailButton.addEventListener("click", function (event) {

        event.preventDefault();

        window.location.href = links.email;

    });

    }

    if (instagramButton) {
        instagramButton.href = links.instagram;
    }

    if (tiktokButton) {
        tiktokButton.href = links.tiktok;
    }



    /* -----------------------------------------------------
       LINK CARD
       ----------------------------------------------------- */

    const linkCards =
        document.querySelectorAll(".link-card");


    /*
       Urutan harus sama dengan index.html:

       1. Booklet
       2. Berkas Pendaftaran
       3. Twibbon
       4. Debat Siswa
       5. Debat Mahasiswa
       6. Pendaftaran Essai
       7. Pengumpulan Essai
       8. Pendaftaran Poster
       9. Pengumpulan Poster
    */

    const linkValues = [

        links.booklet,

        links.pendaftaranBerkas,

        links.twibbon,

        links.debatSiswa,

        links.debatMahasiswa,

        links.pendaftaranEssai,

        links.pengumpulanEssai,

        links.pendaftaranPoster,

        links.pengumpulanPoster

    ];


    linkCards.forEach(function (card, index) {

        const link =
            card.querySelector(".link-content");


        if (link && linkValues[index]) {

            link.href =
                linkValues[index];

        }

    });



    /* -----------------------------------------------------
       UPDATE TITLE
       ----------------------------------------------------- */

    document.title =
        siteConfig.title;


    const profileTitle =
        document.querySelector(".profile h1");


    if (profileTitle) {

        profileTitle.textContent =
            siteConfig.title;

    }


    const profileDescription =
        document.querySelector(".profile-description");


    if (profileDescription) {

        profileDescription.textContent =
            siteConfig.description;

    }


});


/* =========================================================
   4. TOAST NOTIFICATION
   ========================================================= */

function showToast(message) {

    let toast =
        document.querySelector(".toast");


    if (!toast) {

        toast =
            document.createElement("div");

        toast.className =
            "toast";

        document.body.appendChild(toast);

    }


    toast.textContent =
        message;


    toast.classList.add("show");


    setTimeout(function () {

        toast.classList.remove("show");

    }, 2500);

}


/* =========================================================
   5. COPY LINK
   ========================================================= */

async function copyLink(url) {

    try {

        await navigator.clipboard.writeText(url);

        showToast("Link berhasil disalin");

    }

    catch (error) {

        showToast("Gagal menyalin link");

    }

}


/* =========================================================
   6. SHARE WEBSITE
   ========================================================= */

async function shareWebsite() {

    const shareData = {

        title:
            siteConfig.title,

        text:
            siteConfig.description,

        url:
            window.location.href

    };


    try {

        if (navigator.share) {

            await navigator.share(shareData);

        }

        else {

            await navigator.clipboard.writeText(
                window.location.href
            );

            showToast(
                "Link website berhasil disalin"
            );

        }

    }

    catch (error) {

        console.log(
            "Share dibatalkan."
        );

    }

}


/* =========================================================
   7. MENU TITIK TIGA
   ========================================================= */

document.addEventListener(
    "click",
    function (event) {


        /* -------------------------------------------------
           KLIK TOMBOL TITIK TIGA
           ------------------------------------------------- */

        const moreButton =
            event.target.closest(".more-button");


        if (moreButton) {

            event.stopPropagation();


            const card =
                moreButton.closest(".link-card");


            if (!card) {
                return;
            }


            /* Tutup menu lain */

            document
                .querySelectorAll(".link-card")
                .forEach(function (item) {

                    if (item !== card) {

                        item.classList.remove(
                            "menu-open"
                        );

                    }

                });


            /* Toggle menu */

            card.classList.toggle(
                "menu-open"
            );


            return;

        }



        /* -------------------------------------------------
           KLIK DI LUAR CARD
           ------------------------------------------------- */

        if (
            !event.target.closest(".link-card")
        ) {

            document
                .querySelectorAll(".link-card")
                .forEach(function (card) {

                    card.classList.remove(
                        "menu-open"
                    );

                });

        }

    }
);


/* =========================================================
   8. ANIMASI CARD
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const cards =
            document.querySelectorAll(
                ".link-card"
            );


        cards.forEach(function (card, index) {

            card.style.animationDelay =
                `${index * 0.08}s`;

        });

    }
);
