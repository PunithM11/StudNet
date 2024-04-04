import React from 'react'
import './courses.css'
import image1 from '../../images/TDA_121216-5.jpg';
import image2 from '../../images/Backlog.jpg';
import image3 from '../../images/skill.png';
import image4 from '../../images/Facebook.png';
import image5 from '../../images/insta.png';
import image6 from '../../images/twitter.png';

const Courses = () => {
    const initSlider = () => {
        const courseContainers = document.querySelectorAll(".slider-wrapper .course-container");
        const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
        const sliderScrollbar = document.querySelector(".courses .slider-scrollbar");
        const scrollbarThumb = document.querySelector(".slider-scrollbar .scrollbar-thumb");
        const maxScrollLeft = courseContainers[0].scrollWidth - courseContainers[0].clientWidth;
      
        scrollbarThumb.addEventListener("mousedown", (e) => {
          const startX = e.clientX;
          const thumbPosition = scrollbarThumb.offsetLeft;
      
          const handleMouseMove = (e) => {
            const deltaX = e.clientX - startX;
            const newThumbPosition = thumbPosition + deltaX;
            const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;
            const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
            const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;
      
            scrollbarThumb.style.left = `${boundedPosition}px`;
            courseContainers.forEach(container => container.scrollLeft = scrollPosition);
          };
      
          const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
          };
      
          document.addEventListener("mousemove", handleMouseMove);
          document.addEventListener("mouseup", handleMouseUp);
        });
      
        slideButtons.forEach(button => {
          button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = courseContainers[0].clientWidth * direction;
      
            courseContainers.forEach(container => container.scrollBy({ left: scrollAmount, behavior: "smooth" }));
          });
        });
      
        const handleSlideButtons = () => {
          slideButtons[0].style.display = courseContainers[0].scrollLeft <= 0 ? "none" : "block";
          slideButtons[1].style.display = courseContainers[0].scrollLeft >= maxScrollLeft ? "none" : "block";
        };
      
        const updateScrollThumbPosition = () => {
          const scrollPosition = courseContainers[0].scrollLeft;
          const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
      
          scrollbarThumb.style.left = `${thumbPosition}px`;
        };
      
        courseContainers.forEach(container => {
          container.addEventListener("scroll", () => {
            handleSlideButtons();
            updateScrollThumbPosition();
          });
        });
      };
      
window.addEventListener("load", initSlider);
  return (

  <div className="body-courses"> 
  <header className='heading'>
    <h1>Empower Your Skills - Learn with Us</h1>
  </header>

  <section className="courses-courses">
    <h2>Explore Dedicated Courses</h2>
    <div className="slider-wrapper-courses">
      <button id="prev-slide" className="slide-button-courses material-symbols-rounded">&lt;</button>
      <div className="course-container-courses">
        <article className="course-courses">
          <img src={image1} alt="Mentorship Program" />
          <h3>StudNet Mentorship Program</h3>
          <p>Description</p>
          <a href="#">Learn More</a>
        </article>
        <article className="course-courses">
          <img src={image2} alt="Backlog Clearance Program"/>
          <h3>Backlog Clearance Program</h3>
          <p>Description</p>
          <a href="#">Learn More</a>
        </article>
        <article className="course-courses">
          <img src={image3} alt="Student Upskilling Program"/>
          <h3>Student Upskilling Program</h3>
          <p>Description</p>
          <a href="#">Learn More</a>
        </article>
      </div>
      <button id="next-slide" className="slide-button-courses material-symbols-rounded">&gt;</button>
    </div>
    <div className="slider-scrollbar-courses">
      <div className="scrollbar-track-courses">
        <div className="scrollbar-thumb-courses"></div>
      </div>
    </div>
  </section>

  <footer>
    <div className="social-icons-courses">
      <a href="#"><img src={image4} alt="Facebook" width="80" height="50"/></a>
      <a href="#"><img src={image5} alt="Instagram" width="48" height="50"/></a>
      <a href="#"><img src={image6} alt="Twitter" width="45" height="50"/></a>
    </div>
    <div className="contact-info-courses">
      <strong>Contact: </strong>
      <p><b>You can reach us at: </b>
      <a href="mailto:support@edtech.com">support@edtech.com</a>
      </p><b>Call us at: </b> 
      <a href="tel:+1234567890">+1 (234) 567-890</a>
    </div>
    <a href="#" className="join-community-courses">Join Our Community</a>
  </footer>
  </div>

  )
}

export default Courses
