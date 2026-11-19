
document.addEventListener("DOMContentLoaded", () => {

  const menuBtn = document.getElementById("menuBtn");
  const navigation = document.getElementById("navigation");

  if (menuBtn && navigation) {
    menuBtn.addEventListener("click", () => {
      navigation.classList.toggle("open");
    });

    navigation.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navigation.classList.remove("open");
      });
    });
  }

  const certificateImages = document.querySelectorAll(".cert img");
  const lightbox = document.getElementById("certificateLightbox");
  const lightboxImage = document.getElementById("lightboxImage");
  const closeButton = document.getElementById("lightboxClose");

  if (lightbox && lightboxImage && closeButton) {

    certificateImages.forEach(img => {
      img.addEventListener("click", () => {
        lightboxImage.src = img.src;
        lightboxImage.alt = img.alt || "Preview sertifikat";
        lightbox.classList.add("active");
      });
    });

    closeButton.addEventListener("click", () => {
      lightbox.classList.remove("active");
    });

    lightbox.addEventListener("click", event => {
      if (event.target === lightbox) {
        lightbox.classList.remove("active");
      }
    });

    document.addEventListener("keydown", event => {
      if (event.key === "Escape") {
        lightbox.classList.remove("active");
      }
    });
  }

});
