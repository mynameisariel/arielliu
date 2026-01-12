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

// header go to page
function switchPage(link) {
    window.location.href = link;
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

// Project filtering
document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".projects-container .card");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Set active class on button
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            const filter = button.dataset.filter;

            projectCards.forEach(card => {
                const categories = card.dataset.category.split(' ');
                if (filter === "all" || categories.includes(filter)) {
                    card.style.display = "flex";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });
});

// experience toggle
document.addEventListener("DOMContentLoaded", function () {
    const timelineItems = document.querySelectorAll(".timeline-header");

    timelineItems.forEach(item => {
        item.addEventListener("click", () => {
            const body = item.nextElementSibling;
            
            // document.querySelectorAll('.timeline-body.active').forEach(openBody => {
            //     if (openBody !== body) openBody.classList.remove('active');
            // });
            body.classList.toggle("active");
        });
    });
});

// expand all toggle
document.addEventListener("DOMContentLoaded", function () {
    const expandAllLink = document.querySelector(".expand-all");
    const timelineBodies = document.querySelectorAll(".timeline-body");
    let allExpanded = false;   
    expandAllLink.addEventListener("click", () => {
        timelineBodies.forEach(body => {
            if (!allExpanded) {
                body.classList.add("active");
            } else {
                body.classList.remove("active");
            }
        });
        allExpanded = !allExpanded;
        expandAllLink.textContent = allExpanded ? "close all" : "expand all";
    });
});

// Confetti on H1 click
document.addEventListener("DOMContentLoaded", function () {
    const h1Header = document.querySelector("#home h1");

    if (h1Header) {
        h1Header.addEventListener("click", () => {
            if (typeof confetti === 'function') {
                confetti({
                    particleCount: 1000,
                    spread: 150,
                    origin: { y: 0.8 }
                });
            } else {
                console.warn('confetti() not available on this page');
            }
        });
    }
    });

// confetti for span elements
document.addEventListener("DOMContentLoaded", function () {
    const span = document.querySelector("#confetti span");

    if (span) {
        span.addEventListener("click", () => {
            if (typeof confetti === 'function') {
                confetti({
                    particleCount: 1000,
                    spread: 150,
                    origin: { y: 0.8 }
                });
            } else {
                console.warn('confetti() not available on this page');
            }
        });
    }
    });

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
  