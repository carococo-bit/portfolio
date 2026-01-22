/*let play = document.getElementById("play");
function playMusic() {
  let audio = new Audio("babycrying.mp3");
  audio.play()
}
play.addEventListener("click", playMusic);*/

/*let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}*/

document.addEventListener("DOMContentLoaded", function () {
  let slideIndex = 1;

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  const data = {
    bird: {
      type: "slideshow",
      title: "Do You Have a Bird?, Neon, 2025",
      description: "I do! Do you?",
      images: [
        "images/do_you_have_a_bird.jpg",
      ]
    },
    vapeme: {
      type: "slideshow",
      title: "Vape Me, 2023",
      description: "Fully functional vape toy.",
      images: [
        "images vapeme/vape.jpg",
        "images vapeme/IMG_7894.png",
        "images vapeme/vapevideo.MOV",
      ]
    },
    shitdiaries: {
      type: "slideshow",
      title: "Shit Diaries, 2024",
      description: "Toilet book containing eleven images of poop with an accompanying text I wrote while sitting on the toilet.",
      images: [
        "images/shitdiaries1.jpg",
        "images shitdiaries/shitdiaries2.jpg",
        "images shitdiaries/shitdiaries3.jpg",
        "images shitdiaries/ezgif.com-video-to-gif-converter copy.gif",
      ]
    },
    myqueen: {
      type: "slideshow",
      title: "My Queen, 2024",
      description: "Fully functional chair, life-sized doll sewn out of thrifted scarfes.",
      images: [
        "images/myqueen.jpg",
        "images myqueen/myqueen2.jpg",
        "images myqueen/myqueen3.jpg",
      ]
    },
    richardsmith: {
      type: "slideshow",
      title: "Richard Smith, 2023",
      description: "Cross carved out of driftwood found at the beach, stones found on the beach.",
      images: [
        "images/cross.JPG",
        "images richardsmith/cross2.JPG",
        "images richardsmith/cross3.JPG",
        "images richardsmith/cross4.JPG",
      ]
    },
    babygirl: {
      type: "slideshow",
      title: "Babygirl, 2023",
      description: "This piece is a two-piece mask made out of papermache and cardboard. It was part of a Dada-inspired parade through the center of Chicago.",
      images: [
        "images/babygirl.jpg",
        "images babygirl/babygirl2.jpg",
        "images babygirl/babygirl3.jpg",
        "images babygirl/babygirl4.jpg",
        "images babygirl/babygirl5.jpg",
      ]
    },
    darkknight: {
      type: "slideshow",
      title: "Dark Knight, 2023",
      description: "This piece was created using only materials found on the streets of Chicago, including car parts, wire, wood and plastic.",
      images: [
        "images/darkknight.jpg",
        "images darkknight/darkknight2.jpg",
        "images darkknight/darkknight3.jpg",
        "images darkknight/darkknight4.jpg",
        "images darkknight/darkknight5.jpg",
      ]
    },
    fly: {
      type: "slideshow",
      title: "Fly on the Wall, Acrylic on canvas, 32 x 32 inches, 2025",
      description: "",
      images: [
        "images/flyonthewall.jpg",
      ]
    },
    tindead: {
      type: "slideshow",
      title: "Tindead, Acrylic on canvas, 59 x 33 inches, 2025",
      description: "",
      images: [
        "images/tindead.jpg",
        "images tindead/Tindead1.jpg",
        "images tindead/Tindead2.jpg",
        "images tindead/Tindead3.jpg",
        "images tindead/Tindead4.jpg",
        "images tindead/Tindead5.jpg",
        "images tindead/Tindead6.jpg",
        "images tindead/Tindead7.jpg",
        "images tindead/Tindead8.jpg",
        "images tindead/Tindead9.jpg",
        "images tindead/Tindead10.jpg",
      ]
    },
    whole: {
      type: "slideshow",
      title: "(W)hole, Acrylic on canvas, 2025",
      description: "",
      images: [
        "images/wholes.jpg",
      ]
    },
    byebike: {
      type: "slideshow",
      title: "Bye Bike!, Acrylic on canvas, 2025",
      description: "",
      images: [
        "images/byebike.jpg",
      ]
    },
    stilllifewithbaby: {
      type: "slideshow",
      title: "Still Life with Baby, Acrylic on canvas, 2025",
      description: "",
      images: [
        "images/still_life.jpg",
      ]
    },
    metwo: {
      type: "slideshow",
      title: "Me Two, Acrylic on canvas, 2025",
      description: "",
      images: [
        "images/me_two.jpg",
      ]
    },
    portraits: {
      type: "slideshow",
      title: "Portraits of a Conteporary Woman/Testaments of a Modern Corpse, Gelatin silver prints, 2025",
      description: "",
      images: [
        "images/portraits_full.jpg",
      ]
    },
    tammey2: {
      type: "slideshow",
      title: "Tamm(e)y #2, Gelatin silver prints, 2025",
      description: "",
      images: [
        "images/tammey.jpg",
      ]
    },
    photograms: {
      type: "slideshow",
      title: "Altarpiece with Baby, Photograms, 2025",
      description: "",
      images: [
        "images/photograms.jpg",
      ]
    },
    gywhaa: {
      type: "slideshow",
      title: "Glad You Were Here At All, Digital photographs, 2024",
      description: "",
      images: [
        "images/gladyouwerehereatall.jpg",
      ]
    },
    windows: {
      type: "slideshow",
      title: "Windows, Digital photographs, 2024",
      description: "",
      images: [
        "images/windows.jpg",
        "images windows/windows1.jpg",
        "images windows/windows2.jpg",
        "images windows/windows3.jpg",
        "images windows/windows4.jpg",
        "images windows/windows5.jpg",
      ]
    },
    wullenwebersteg: {
      type: "video",
      title: "Wullenwebersteg, Virtual Reality, In collaboration with Carlota Alvarez, 2025-",
      description: "Work in progress.",
      video: "videos/wullenwebersteg.mp4",
      poster: "images/wullenwebersteg_thumb.png"
    },
    gmgn: {
      type: "video",
      title: "Good Morning/Good Night, Single-channel video, 2025",
      description: "This piece is a 5:29 minute long video shot in my college dorm room. It was originally created under an assignment called “Funny Words” and plays on the idea on how the instructions found on cosmetic products and the social norms associated with them can be transgressed.",
      video: "videos/Goodmorning_Goodnight.mp4",
      poster: "images/goodmorning_thumb.jpg"
    },
    ellemesuit: {
      type: "video",
      title: "Elle me suit, 3D animation, 2023",
      description: "This piece is a 1:59 minute long 3D-animation that includes a french poem written by me as a voice-over and a disfigured 'Dust in The Wind' played by me on guitar as a soundtrack.",
      video: "videos/Kropp_Caroline.mp4",
      poster: "images/ellemesuit_thumb.jpeg"
    },
    radiops: {
      type: "slideshow",
      title: "Radiops, Performance, 2025",
      description: "",
      images: [
        "images radiops/radiops1.jpeg",
        "images radiops/radiops2.jpeg",
        "images radiops/radiops3.jpeg",
        "images radiops/radiops4.jpeg",
        "images radiops/radiops5.jpeg",
        "images radiops/radiops6.jpeg",
        "images radiops/radiops7.jpeg",
        "images radiops/radiops8.jpeg",
        "images radiops/radiops9.jpeg",
        "images radiops/radiops10.jpeg",
      ]
    },
    breakfast: {
      type: "video",
      title: "Breakfast, Performance with Sabine Pierce Jones and Dani Castro, 2025",
      description: "",
      video: "videos/Performance_breakfast_short.mp4",
      poster: "images/breakfast_thumb.jpg"
    },
    printed: {
      type: "video",
      title: "Printed, Performance, 2025",
      description: "",
      video: "videos/Printed.mp4",
      poster: "images/printed.JPG"
    },
    tammey: {
      type: "video",
      title: "Tamm(e)y #1, Performance, 2024",
      description: "",
      video: "videos/Tamm(e)y.mp4",
      poster: "images/tamm(e)y_thumb.jpg"
    },
    wheresmybike: {
      type: "video",
      title: "Where's my bike?, Performance, 2024",
      description: "",
      video: "videos/Wheresmybike.mp4",
      poster: "images/wheresmybike.png"
    },
  };


  const workOrder = Object.keys(data);
  const titleElem = document.getElementById("title");
  const descElem = document.getElementById("desc");
  const mediaContainer = document.getElementById("media");

  if (!id || !data[id]) {
    titleElem.textContent = "Media not found.";
    return;
  }

  const entry = data[id];
  titleElem.textContent = entry.title;
  descElem.textContent = entry.description;

  const currentIndex = workOrder.indexOf(id);

  const prevBtn = document.querySelector(".detail-prev");
  const nextBtn = document.querySelector(".detail-next");

  if (prevBtn && nextBtn) {
    // Previous work
    prevBtn.addEventListener("click", () => {
      const prevIndex =
        (currentIndex - 1 + workOrder.length) % workOrder.length;
      const prevId = workOrder[prevIndex];
      window.location.href = `image.html?id=${prevId}`;
    });

    // Next work
    nextBtn.addEventListener("click", () => {
      const nextIndex =
        (currentIndex + 1) % workOrder.length;
      const nextId = workOrder[nextIndex];
      window.location.href = `image.html?id=${nextId}`;
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      document.querySelector(".detail-prev")?.click();
    }
    if (e.key === "ArrowRight") {
      document.querySelector(".detail-next")?.click();
    }
  });

  if (entry.type === "slideshow") {
    const slideshowContainer = document.createElement("div");
    slideshowContainer.className = "slideshow-container";

    const dotsContainer = document.createElement("div");
    dotsContainer.className = "dots";

    entry.images.forEach((src, index) => {
      const slide = document.createElement("div");
      slide.className = "mySlides fade";
      slide.innerHTML = `<img src="${src}" alt="slide ${index + 1}">`;
      slideshowContainer.appendChild(slide);

      const img = slide.querySelector("img");
      img.addEventListener("load", () => {
        img.classList.add("loaded");
      });

      const dot = document.createElement("span");
      dot.className = "dot";
      dot.setAttribute("data-index", index + 1);
      dot.addEventListener("click", function () {
        currentSlide(parseInt(this.getAttribute("data-index")));
      });
      dotsContainer.appendChild(dot);
    });

    if (entry.images.length > 1) {
      const prevBtn = document.createElement("button");
      prevBtn.className = "slide-prev";
      prevBtn.innerHTML = "‹";

      const nextBtn = document.createElement("button");
      nextBtn.className = "slide-next";
      nextBtn.innerHTML = "›";

      prevBtn.addEventListener("click", () => {
        showSlides(--slideIndex);
      });

      nextBtn.addEventListener("click", () => {
        showSlides(++slideIndex);
      });

      slideshowContainer.appendChild(prevBtn);
      slideshowContainer.appendChild(nextBtn);
    }

    mediaContainer.appendChild(slideshowContainer);

    if (entry.images.length > 1) {
      mediaContainer.appendChild(dotsContainer);
    }

    showSlides(slideIndex);
  }

  if (entry.type === "video") {
    const videoElement = document.createElement("video");
    videoElement.src = entry.video;
    videoElement.controls = true;
    videoElement.className = "media-video";

    if (entry.poster) {
      videoElement.poster = entry.poster;
    }

    videoElement.addEventListener("loadedmetadata", () => {
      videoElement.classList.add("ready");
    });

    mediaContainer.appendChild(videoElement);
  }


  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    if (slides.length > 0) {
      slides[slideIndex - 1].style.display = "block";
    }
    if (dots.length > 0) {
      dots[slideIndex - 1].className += " active";
    }
  }
});

const hamburger = document.querySelector(".hamburger");
const sidebar = document.querySelector(".sidebar");

if (hamburger && sidebar) {
  hamburger.addEventListener("click", () => {
    sidebar.classList.toggle("open");
  });
}

const form = document.getElementById('contact-form');
const submitBtn = form.querySelector('button[type="submit"]');
const formStatus = document.querySelector(".form-status");

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const originalText = submitBtn.textContent;

  submitBtn.textContent = "Sending...";
  submitBtn.disabled = true;

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (response.ok) {
      formStatus.textContent = "Thank you! Your message has been sent.";
      formStatus.className = "form-status success";
      submitBtn.textContent = "Sent ✓";
      form.reset();
      setTimeout(() => {
        formStatus.textContent = "";
        formStatus.className = "form-status";
      }, 5000);
    } else {
      formStatus.textContent = data.message || "Something went wrong.";
      formStatus.className = "form-status error";
    }

  } catch (error) {
    formStatus.textContent = "Something went wrong. Please try again.";
    formStatus.className = "form-status error";
  } finally {
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
  }
});