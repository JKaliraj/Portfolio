window.onload = function () {
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));
  const loadpic = async () => {
    await delay(250);
    document.getElementById("profile_pic").style.filter = "none"; //Remove This
  };
  loadpic();

  var greetname = [
    "Hey",
    "Bonjour",
    "Hello",
    "Hi",
    "Hey Friend",
    "Howdy",
    "What's Up",
    "Namaste",
  ];
  var item = greetname[Math.floor(Math.random() * greetname.length)];
  var greet = document.getElementById("greet");
  greet.innerText = item;

  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var d = new Date();
  document.getElementById("today").innerText = days[d.getDay()];
};
// function([string1, string2],target id,[color1,color2])
consoleText(
  [
    "amazing",
    "extraordinary",
    "marvelous",
    "wonderful",
    "finest",
    "best",
    "premium",
    "unreal",
    "doozie",
    "super",
    "superb",
    "sweet",
    "awesome",
  ],
  "daybefore",
  [
    "#ffa382",
    "lightblue",
    "#3d9098",
    "#fe9971",
    "#dfb2f4",
    "#ffff9e",
    "#949494",
    "#cdebf4",
  ]
);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ["#fff"];
  var visible = true;
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id);
  target.setAttribute("style", "color:" + colors[0]);
  window.setInterval(function () {
    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount);
      window.setTimeout(function () {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute("style", "color:" + colors[0]);
        letterCount += x;
        waiting = false;
      }, 500);
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function () {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 5000);
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount);
      letterCount += x;
    }
  }, 50);
}
//Nav Bar
const detectDeviceType = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
    ? "Mobile"
    : "Desktop";

function navbar() {
  console.log(detectDeviceType());
  var bar = document.getElementById("navbar");
  bar.style.color = "#fff";
  if (bar.innerText == "menu") {
    bar.innerText = "close";
    if (detectDeviceType() == "Mobile") {
      document.getElementById("nav").style.transform = "translateX(0px)";
    } else {
      document.getElementById("nav").style.display = "block";
    }

    document.addEventListener("click", function handleClickOutsideBox(event) {
      if (!bar.contains(event.target)) {
        if (detectDeviceType() == "Mobile") {
          document.getElementById("nav").style.transform = "translateX(200px)";
        } else {
          document.getElementById("nav").style.display = "none";
        }
        bar.innerText = "menu";
        bar.style.removeProperty("color");
      }
    });
  } else {
    bar.style.removeProperty("color");
    bar.innerText = "menu";
    if (detectDeviceType() == "Mobile") {
      document.getElementById("nav").style.transform = "translateX(200px)";
    } else {
      document.getElementById("nav").style.display = "none";
    }
  }
}

// About

// Navbar
document.getElementById("gotohome").addEventListener("click", function () {
  $("#main").scrollTop(0);
  document.getElementById("home").style.display = "flex";
  document.getElementById("about").style.display = "none";
  document.getElementById("works").style.display = "none";
  document.getElementById("pixels").style.display = "none";
  document.getElementById("contact").style.display = "none";

  document.getElementById("gotoabout").classList.remove("headercoloron");
  document.getElementById("gotoworks").classList.remove("headercoloron");
  // document.getElementById("gotopixels").classList.remove("headercoloron");
  document.getElementById("gotocontact").classList.remove("headercoloron");
  this.classList.add("headercoloron");
});
document.getElementById("gotoabout").addEventListener("click", function () {
  $("#main").scrollTop(0);
  document.getElementById("home").style.display = "none";
  document.getElementById("about").style.display = "block";
  document.getElementById("works").style.display = "none";
  document.getElementById("pixels").style.display = "none";
  document.getElementById("contact").style.display = "none";

  document.getElementById("gotohome").classList.remove("headercoloron");
  document.getElementById("gotoworks").classList.remove("headercoloron");
  // document.getElementById("gotopixels").classList.remove("headercoloron");
  document.getElementById("gotocontact").classList.remove("headercoloron");
  this.classList.add("headercoloron");

  $(".main").scroll(function (e) {
    var dist = $(this).scrollTop();
    $(".main").scroll(function (e) {
      var distanceScrolled = $(this).scrollTop();
      if (distanceScrolled < 200) {
        $(".aboutbg").css(
          "-webkit-filter",
          "blur(" + distanceScrolled / 10 + "px)"
        );
      }
    });
    if (dist >= 1000 && dist <= 1400) {
      const delay = (ms) => new Promise((res) => setTimeout(res, ms));
      const loadpic = async () => {
        await delay(500);
        document.getElementById("meNow").style.filter = "none"; //Remove This
      };
      loadpic();
    } else {
      document.getElementById("meNow").style.filter = "blur(10px)";
    }
  });
});

document.getElementById("gotoworks").addEventListener("click", function () {
  $("#main").scrollTop(0);
  document.getElementById("home").style.display = "none";
  document.getElementById("about").style.display = "none";
  document.getElementById("works").style.display = "block";
  document.getElementById("pixels").style.display = "none";
  document.getElementById("contact").style.display = "none";

  document.getElementById("gotoabout").classList.remove("headercoloron");
  document.getElementById("gotohome").classList.remove("headercoloron");
  // document.getElementById("gotopixels").classList.remove("headercoloron");
  document.getElementById("gotocontact").classList.remove("headercoloron");
  this.classList.add("headercoloron");
});

// document.getElementById("gotopixels").addEventListener("click", function () {
//   $("#main").scrollTop(0);
//   document.getElementById("home").style.display = "none";
//   document.getElementById("about").style.display = "none";
//   document.getElementById("works").style.display = "none";
//   document.getElementById("pixels").style.display = "flex";
//   document.getElementById("contact").style.display = "none";

//   document.getElementById("gotoabout").classList.remove("headercoloron");
//   document.getElementById("gotohome").classList.remove("headercoloron");
//   document.getElementById("gotoworks").classList.remove("headercoloron");
//   document.getElementById("gotocontact").classList.remove("headercoloron");
//   this.classList.add("headercoloron");

//   $(function () {
//     $(".img-w").each(function () {
//       $(this).wrap("<div class='img-c'></div>");
//       let imgSrc = $(this).find("img").attr("src");
//       $(this).css("background-image", "url(" + imgSrc + ")");
//     });

//     $(".img-c").click(function () {
//       let w = $(this).outerWidth();
//       let h = $(this).outerHeight();
//       let x = $(this).offset().left;
//       let y = $(this).offset().top;

//       $(".active").not($(this)).remove();
//       let copy = $(this).clone();
//       copy
//         .insertAfter($(this))
//         .height(h)
//         .width(w)
//         .delay(500)
//         .addClass("active");
//       $(".active").css("top", y);
//       $(".active").css("left", x);

//       setTimeout(function () {
//         copy.addClass("positioned");
//       }, 0);
//     });
//   });

//   $(document).on("click", ".img-c.active", function () {
//     let copy = $(this);
//     copy.removeClass("positioned active").addClass("postactive");
//     setTimeout(function () {
//       copy.remove();
//     }, 500);
//   });
// });

document.getElementById("gotocontact").addEventListener("click", function () {
  $("#main").scrollTop(0);
  document.getElementById("home").style.display = "none";
  document.getElementById("about").style.display = "none";
  document.getElementById("works").style.display = "none";
  document.getElementById("pixels").style.display = "none";
  document.getElementById("contact").style.display = "flex";

  document.getElementById("gotoabout").classList.remove("headercoloron");
  document.getElementById("gotoworks").classList.remove("headercoloron");
  // document.getElementById("gotopixels").classList.remove("headercoloron");
  document.getElementById("gotohome").classList.remove("headercoloron");
  this.classList.add("headercoloron");
});

function openDemo(url) {
  var url = `https://${url}`;
  window.open(url, '_blank');
}