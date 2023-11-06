// modal-link
$(document).ready(function() {
  
  $("#create-account-link").click(function(e) {
      e.preventDefault(); 
      openSignUpTab();
  });
  $("#loginpage").click(function(e) {
      e.preventDefault(); 
      openloginTab();
  });

  
  function openSignUpTab() {
     
      $("#log-tab").removeClass("active");
      $("#sign-tab").addClass("active");

      $("#log").removeClass("show active");
      $("#sign").addClass("show active");
  }
  function openloginTab() {
      
      $("#sign-tab").removeClass("active");
      $("#log-tab").addClass("active");

      $("#sign").removeClass("show active");
      $("#log").addClass("show active");
  }
});
// modal-link-end



$(window).scroll(function(){
if ($(this).scrollTop() > 120) {
 $('.nav-sec').addClass('fixed');
 
} else {
 $('.nav-sec').removeClass('fixed');
}
});

// datatable-code

$(document).ready(function() {
  $('#example').DataTable( {
      dom: 'Bfrtip',
      buttons: [
            
      ]
  } );
} );

// searchbar
$('.header-search-wrapper .search-main').click(function(){
  $('.search-form-main').toggleClass('active-search');
  $('.search-form-main .search-field').focus();
});

// =================

// aos-animation

/*global $, jQuery, console, alert, promp*/
$(window).on("scroll", function () {
	"use strict";
	$(".wow").css("animation-play-state", "paused");
	$(".wow").each(function () {
		if (!($(this).data("wow-duration"))) {
			$(this).data("wow-duration", "1s");
		}
		if ($(this).data("wow-offset") + $(this).offset().top <= $(window).scrollTop() + $(window).height() || (!($(this).data("wow-offset")) && $(this).offset().top <= $(window).scrollTop() + $(window).height())) {
			$(this).css("animation-play-state", "running ");
			$(this).css({
				"animationDuration": $(this).data("wow-duration"),
				"animationDelay": $(this).data("wow-delay"),
				"animationIterationCount": $(this).data("wow-iteration")
			});
		}
	});
});
// 

// ================================================================


// =================================================================

// slick-slider-start
$(document).ready(function(){
  $('.center-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    arrows: true,
    dots: false,
    speed: 300,
    centerPadding: '10px',
    infinite: true,
    autoplaySpeed: 5000,
    autoplay: true,
    responsive: [
      {
        breakpoint: 991, // For tablets and small screens
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 767, // For mobile devices
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
});


// slick-slider
var numSlick = 0;
$('.slider-products').each( function() {
  numSlick++;
  $(this).addClass( 'slider-' + numSlick ).slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav.slider-' + numSlick
  });
});

numSlick = 0;
$('.slider-nav').each( function() {
  numSlick++;
  $(this).addClass( 'slider-' + numSlick ).slick({
    vertical: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-products.slider-' + numSlick,
    arrow: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
         }
      }
    ]
  });
});

// owl-slider-start
jQuery("#carousel").owlCarousel({
    autoplay: true,
    rewind: true, /* use rewind if you don't want loop */
    margin: 20,
    /*
   animateOut: 'fadeOut',
   animateIn: 'fadeIn',
   */
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: true,
    responsive: {
        0: {
            items: 1
        },

        600: {
            items: 1
        },

        1024: {
            items: 1
        },

        1366: {
            items: 1
        }
    }
});
// end


jQuery("#testimonial-slider").owlCarousel({
    autoplay: true,
    rewind: true, /* use rewind if you don't want loop */
    margin: 20,
    /*
   animateOut: 'fadeOut',
   animateIn: 'fadeIn',
   */
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 8000,
    smartSpeed: 900,
    nav: true,
    responsive: {
        0: {
            items: 1
        },

        600: {
            items: 2
        },

        1024: {
            items: 2
        },

        1366: {
            items: 2
        }
    }
});


const tabs = document.querySelectorAll(".stack-tab-container a.tab");
const scrollRightArrow = document.querySelector(
  ".stack-tab-container .right-arrow"
);
const scrollLeftArrow = document.querySelector(
  ".stack-tab-container .left-arrow"
);
const tabList = document.querySelector(".stack-tab-container ul.tabs");
const leftArrowContainer = document.querySelector(
  ".stack-tab-container .left-arrow"
);
const rightArrowContainer = document.querySelector(
  ".stack-tab-container .right-arrow"
);

// Function to remove "active" class from all tabs
const removeActiveClasses = () => {
  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });
};

//Function to activate the left scroll button
const manageLeftbtn = () => {
  if (tabList.scrollLeft >= 20) {
    leftArrowContainer.classList.add("active");
  } else {
    leftArrowContainer.classList.remove("active");
  }

  let maxScroll = tabList.scrollWidth - tabList.clientWidth - 20;
  if (tabList.scrollLeft >= maxScroll) {
    rightArrowContainer.classList.remove("active");
  } else {
    rightArrowContainer.classList.add("active");
  }
};

// Add "active" class to clicked tab and remove from others
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    event.preventDefault();
    removeActiveClasses();
    tab.classList.add("active");
  });
});

// Scroll the tab list to the right
scrollRightArrow.addEventListener("click", () => {
  tabList.scrollLeft += 300;
  manageLeftbtn();
});

// Scroll the tab list to the left
scrollLeftArrow.addEventListener("click", () => {
  tabList.scrollLeft -= 300;
  manageLeftbtn();
});

// Listen to scroll event to activate the buttons
tabList.addEventListener("scroll", manageLeftbtn);

// Adding the dragging functionality
let drag = false;
const dragging = (e) => {
  // Add the event parameter
  if (!drag) return;
  tabList.classList.add("dragging");
  tabList.scrollLeft -= e.movementX;
};

tabList.addEventListener("mousedown", () => {
  drag = true;
  tabList.addEventListener("mousemove", dragging); // Add mousemove listener here
});

document.addEventListener("mouseup", () => {
  drag = false;
  tabList.removeEventListener("mousemove", dragging); // Remove mousemove listener here
  tabList.classList.remove("dragging");
});



