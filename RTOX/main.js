var movetop = document.getElementById("movetop");
var moveDown = document.getElementById("moveDown");
var videoMain = document.getElementById("videoMain");
var dblarrow = document.getElementsByClassName("dblarrow")[0];
var hiddenP = document.getElementsByClassName("hiddenP")[0];

movetop.onclick = () => {
  dblarrow.classList.add("rotateArr");
  dblarrow.classList.remove("rotateArr-rev");
  setTimeout(() => {
    videoMain.classList.add("mTop");
    videoMain.classList.remove("mTop-rev");
  }, 500);
  setTimeout(() => {
    videoMain.style.display = "none";
  }, 1000);
  setTimeout(() => {
    movetop.style.display = "none";
  }, 1000);
  setTimeout(() => {
    hiddenP.style.display = "block";
  }, 1000);
  setTimeout(() => {
    moveDown.classList.add("moveright");
    moveDown.classList.remove("moveright-rev");
  }, 1000);
};

moveDown.onclick = () => {
  if (dblarrow.classList.contains("rotateArr")) {
    dblarrow.classList.remove("rotateArr");
    dblarrow.classList.add("rotateArr-rev");
  }
  if (videoMain.classList.contains("mTop")) {
    setTimeout(() => {
      videoMain.classList.remove("mTop");
      videoMain.classList.add("mTop-rev");
    }, 500);
  }
  if ((videoMain.style.display = "none")) {
    setTimeout(() => {
      videoMain.style.display = "block";
    }, 1000);
  }
  if ((movetop.style.display = "none")) {
    setTimeout(() => {
      movetop.style.display = "block";
    }, 1000);
  }
  if ((hiddenP.style.display = "block")) {
    setTimeout(() => {
      hiddenP.style.display = "none";
    }, 1000);
  }
  if (moveDown.classList.contains("moveright")) {
    setTimeout(() => {
      moveDown.classList.remove("moveright");
      moveDown.classList.add("moveright-rev");
    }, 700);
  }
};

//ako je kliknut daj mu klasu active. ako dugme ima klasu pokreni animaciju i change.

var menuB = document.getElementsByClassName("menuB");
var article = document.getElementsByClassName("sluzby-left")[0];
var article1 = document.getElementsByClassName("sluzby-left1")[0];
var article2 = document.getElementsByClassName("sluzby-left2")[0];
var article3 = document.getElementsByClassName("sluzby-left3")[0];
//images
var articleimg = document.getElementsByClassName("articleimage");

for (var i = 0; i < menuB.length; i++) {
  menuB[i].onclick = function() {
    var el = menuB[0];
    while (el) {
      if (el.tagName === "BUTTON") {
        el.classList.remove("mark");
      }
      el = el.nextSibling;
    }
    this.classList.add("mark");
  };
}
menuB[0].addEventListener("click", () => {
  article.classList.add("articlemove");
  article1.classList.remove("articlemove");
  article2.classList.remove("articlemove");
  article3.classList.remove("articlemove");
  articleimg[0].classList.add("articlemove");
  articleimg[1].classList.remove("articlemove");
  articleimg[2].classList.remove("articlemove");
  articleimg[3].classList.remove("articlemove");
});
menuB[1].addEventListener("click", () => {
  article.classList.remove("articlemove");
  article1.classList.add("articlemove");
  article2.classList.remove("articlemove");
  article3.classList.remove("articlemove");
  articleimg[0].classList.remove("articlemove");
  articleimg[1].classList.add("articlemove");
  articleimg[2].classList.remove("articlemove");
  articleimg[3].classList.remove("articlemove");
});
menuB[2].addEventListener("click", () => {
  article.classList.remove("articlemove");
  article1.classList.remove("articlemove");
  article2.classList.add("articlemove");
  article3.classList.remove("articlemove");
  articleimg[0].classList.remove("articlemove");
  articleimg[1].classList.remove("articlemove");
  articleimg[2].classList.add("articlemove");
  articleimg[3].classList.remove("articlemove");
});
menuB[3].addEventListener("click", () => {
  article.classList.remove("articlemove");
  article1.classList.remove("articlemove");
  article2.classList.remove("articlemove");
  article3.classList.add("articlemove");
  articleimg[0].classList.remove("articlemove");
  articleimg[1].classList.remove("articlemove");
  articleimg[2].classList.remove("articlemove");
  articleimg[3].classList.add("articlemove");
});
//smoth scroll
var scroll = new SmoothScroll('a[href*="#"]');
//slider
$(function() {
  $(".top_slider").slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    nextArrow: $(".next"),
    prevArrow: $(".prev")
  });
});
