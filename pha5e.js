window.addEventListener('load', function () {
  setTimeout(function () {
    document.getElementById('loading-screen').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
  }, 2500); 
});





function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  const body = document.body;

  if (sidebar.style.left === '0px') {
    sidebar.style.left = '-250px';
    body.style.overflow = 'auto'; 
  } else {
    sidebar.style.left = '0px';
    body.style.overflow = 'hidden'; 
  }
}

const cursor = document.querySelector(".cursor");
let timeout;

window.addEventListener("mousemove", function (e) {
  cursor.style.opacity = "1"; 

  cursor.style.left = `${e.clientX - 25}px`;
  cursor.style.top = `${e.clientY - 25}px`;  

  const speed = Math.abs(e.movementX) + Math.abs(e.movementY);
  const scale = 1 + Math.min(speed / 500, 0.4); 
  cursor.style.transform = `scale(${scale})`;

  clearTimeout(timeout);

  timeout = setTimeout(() => {
    cursor.style.opacity = "0"; 
  }, 500);
});


cursor.style.opacity = "1";

const contactSection = document.querySelector('.contact-section');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // GSAP animation to reveal the section with only fade-in and subtle movement
      gsap.fromTo(contactSection,
        { opacity: 0, y: 30 }, // Initial state (hidden and subtly translated down)
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" } // Animation to visible state (no heavy movement)
      );
      observer.disconnect(); // Stop observing once it has appeared
    }
  });
}, { threshold: 0.5 }); 

observer.observe(contactSection);


const observer2 = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    const header = document.querySelector('header');
    const logo = document.getElementById('logo');

    if (entry.isIntersecting) {
      // Add class to header when the contact-section is in view
      header.classList.add('white-bg');
      logo.src = "data:image/svg+xml,%3Csvg class='figure-element header__logo' width='118' height='25' viewBox='0 0 111 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.29469 11.3816V15.4451H0.689941V0.558228H15.477C21.2381 0.558228 22.7821 2.83967 22.7821 5.64344V6.16578C22.7821 8.96956 21.1613 11.3892 15.477 11.3892H8.29469V11.3816ZM8.29469 6.88016H13.618C14.655 6.88016 14.9623 6.41927 14.9623 5.91997V5.88157C14.9623 5.34386 14.6627 4.92137 13.618 4.92137H8.29469V6.88016Z' fill='%23212121'%3E%3C/path%3E%3Cpath d='M23.4966 0.558228H31.1013V5.49749H39.0671V0.558228H46.6719V15.4451H39.0671V10.1448H31.1013V15.4451H23.4966V0.558228Z' fill='%23212121'%3E%3C/path%3E%3Cpath d='M63.095 13.663H55.6516L54.8681 15.4451H47.1865L54.2075 0.558228H64.8925L72.359 15.4451H63.8785L63.095 13.663ZM59.3311 5.14412L57.5489 9.26914H61.1516L59.3311 5.14412Z' fill='%23212121'%3E%3C/path%3E%3Cpath d='M81.3463 15.7447C71.5216 15.7447 71.3833 12.1651 71.3833 10.6825V10.5596H79.1647C79.2262 10.7209 79.4643 11.5966 81.8456 11.5966C83.6661 11.5966 84.2883 10.9591 84.2883 10.1525V10.1141C84.2883 9.37664 83.6661 8.71604 81.8456 8.71604C79.5027 8.71604 79.2031 9.69928 79.1647 9.83755H71.5984V0.550537H91.0865V4.45276H79.2415V6.41158C79.6179 6.1504 81.1005 5.21325 84.4266 5.21325H84.5879C90.7716 5.21325 92.1312 7.43322 92.1312 10.0373V10.1602C92.1312 12.7181 90.7101 15.7447 82.3449 15.7447H81.3463Z' fill='%23212121'%3E%3C/path%3E%3Cpath d='M110.605 0.558228V4.72165H100.143V5.88157H110.49V9.96048H100.143V11.2433H110.69V15.4451H92.6611V0.558228H110.605Z' fill='%23212121'%3E%3C/path%3E%3C/svg%3E";
    } else {
      // Remove class when it's out of view
      header.classList.remove('white-bg');
      logo.outerHTML = `<img id="logo" src="https://2022-pha5e-website-prod.s3.eu-west-3.amazonaws.com/assets/logo.svg" alt="PHA5E Logo" />`;
    }
  });
}, {
  threshold: 0.9 
});


const lastSection = document.querySelector('.contact-section');
observer2.observe(lastSection);
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".image").forEach((img) => {
    img.addEventListener("mouseenter", () => {
      img.style.transform = "translateY(-15px)";
      img.style.transition = "transform 0.3s ease-in-out";
    });

    img.addEventListener("mouseleave", () => {
      img.style.transform = "translateY(0)";
    });
  });
});





document.addEventListener("DOMContentLoaded", function () {
  const awardsSection = document.getElementById("animateit");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.unobserve(entry.target); // Stop observing after animation runs
        }
      });
    },
    { threshold: 0.2 } // Trigger when 20% of the element is visible
  );

  observer.observe(awardsSection);
});



document.addEventListener("DOMContentLoaded", function () {
  const floatingImagesSection = document.querySelector(".floating-images");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.unobserve(entry.target); 
        }
      });
    },
    { threshold: 0.2 } 
  );

  observer.observe(floatingImagesSection);
});
