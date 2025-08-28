document.addEventListener("DOMContentLoaded", function () {
    let lastScrollTop = 0;
    const navbar = document.getElementById("navbar");

    window.addEventListener("scroll", function () {
        let scrollTop = window.scrollY;
        if (scrollTop > lastScrollTop) {
            navbar.classList.add("hidden"); // Hide on scroll down
        } else {
            navbar.classList.remove("hidden"); // Show on scroll up
        }
        lastScrollTop = scrollTop;
    });
});

// Smooth Scroll to Sections
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}


// typewriting effect
document.addEventListener("DOMContentLoaded", function () {
    const words = ["student.", "engineer.", "adventurer.", "athlete."];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 100; // Speed of typing (ms)
    const deletingSpeed = 50; // Speed of deleting (ms)
    const holdTime = 2000; // Time (ms) before deleting starts
    const typingText = document.getElementById("typing-text");

    function typeEffect() {
        const currentWord = words[wordIndex];
        if (isDeleting) {
            charIndex--;
        } else {
            charIndex++;
        }

        typingText.innerHTML = currentWord.substring(0, charIndex) || "&nbsp;";

        if (!isDeleting && charIndex === currentWord.length) {
            setTimeout(() => (isDeleting = true), holdTime);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length; // Loop back to first word
        }

        setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
    }

    typeEffect(); // Start the animation
});


// confetti
(function() {
    const runConfetti = document.querySelector('#hs-run-on-click-run-confetti');
    runConfetti.addEventListener('click', () => {
      confetti({
        particleCount: 400,
        spread: 100,
        origin: {
          y: 0.6
        }
      });
    });
  })();

// cardstacking effect
// function StackCards(element) {
//     this.element = element;
//     this.items = this.element.getElementsByClassName('js-stack-cards__item');
//     this.scrollingListener = false;
//     this.scrolling = false;
  
//     this.cardTop = this.items[0].offsetTop;
//     this.cardHeight = this.items[0].offsetHeight;
//     this.marginY = 24; // adjust vertical gap
  
//     initStackCardsEffect(this);
//   }
  
//   function initStackCardsEffect(element) {
//     var observer = new IntersectionObserver(stackCardsCallback.bind(element));
//     observer.observe(element.element);
//   }
  
//   function stackCardsCallback(entries) {
//     if (entries[0].isIntersecting) {
//       if (this.scrollingListener) return;
//       this.scrollingListener = stackCardsScrolling.bind(this);
//       window.addEventListener('scroll', this.scrollingListener);
//     } else {
//       if (!this.scrollingListener) return;
//       window.removeEventListener('scroll', this.scrollingListener);
//       this.scrollingListener = false;
//     }
//   }
  
//   function stackCardsScrolling() {
//     if (this.scrolling) return;
//     this.scrolling = true;
//     window.requestAnimationFrame(animateStackCards.bind(this));
//   }
  
//   function animateStackCards() {
//     var top = this.element.getBoundingClientRect().top;
  
//     for (var i = 0; i < this.items.length; i++) {
//       var scrolling = this.cardTop - top - i * (this.cardHeight + this.marginY);
//       if (scrolling > 0) {
//         var scaleVal = (this.cardHeight - scrolling * 0.05) / this.cardHeight;
//         this.items[i].style.transform = `translateY(${this.marginY * i}px) scale(${scaleVal})`;
//       } else {
//         this.items[i].style.transform = `translateY(${this.marginY * i}px) scale(1)`;
//       }
//     }
  
//     this.scrolling = false;
//   }
  
//   // Init all .js-stack-cards
//   document.addEventListener("DOMContentLoaded", function () {
//     const stackCards = document.getElementsByClassName("js-stack-cards");
//     const intersectionObserverSupported = ("IntersectionObserver" in window);
  
//     if (stackCards.length > 0 && intersectionObserverSupported) {
//       for (let i = 0; i < stackCards.length; i++) {
//         new StackCards(stackCards[i]);
//       }
//     }
//   });
  