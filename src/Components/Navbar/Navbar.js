import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import image1 from '../assets/desktop-wallpaper-nature-big-size-full-high-quality-of-computer-big-beautiful-nature.jpg'
import "./Navbar.css";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
        <div>
 <section id="topbar" className="d-flex align-items-center">
  <div className="container d-flex justify-content-center justify-content-md-between">
    <div className="contact-info d-flex align-items-center">
      <i className="bi bi-envelope d-flex align-items-center"><a href="mailto:contact@example.com">contact@example.com</a></i>
      <i className="bi bi-phone d-flex align-items-center ms-4"><span>+1 5589 55488 55</span></i>
    </div>
    <div className="social-links d-none d-md-flex align-items-center">
      <a href="#" className="twitter"><i className="bi bi-twitter" /></a>
      <a href="#" className="facebook"><i className="bi bi-facebook" /></a>
      <a href="#" className="instagram"><i className="bi bi-instagram" /></a>
      <a href="#" className="linkedin"><i className="bi bi-linkedin" /></a>
    </div>
  </div>
</section>
		<header className="sticky-top">
			<h3>LOGO</h3>
			<nav ref={navRef}>
				<a href="/#">Home</a>
				<a href="/#">My work</a>
				<a href="/#">Blog</a>
				<a href="/#">About me</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
       <section id="hero">
  <div className="hero-container">
    <div id="heroCarousel" data-bs-interval={5000} className="carousel slide carousel-fade" data-bs-ride="carousel">
      <ol className="carousel-indicators" id="hero-carousel-indicators" />
      <div className="carousel-inner" role="listbox">
        <div className="carousel-item active" style={{backgroundImage: image1}}>
          <div className="carousel-container">
            <div className="carousel-content">
              <h2 className="animate__animated animate__fadeInDown">Welcome to <span>Eterna</span></h2>
              <p className="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
              <a href className="btn-get-started animate__animated animate__fadeInUp">Read More</a>
            </div>
          </div>
        </div>
        <div className="carousel-item" style={{backgroundImage:  image1}}>
          <div className="carousel-container">
            <div className="carousel-content">
              <h2 className="animate__animated fanimate__adeInDown">Lorem <span>Ipsum Dolor</span></h2>
              <p className="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
              <a href className="btn-get-started animate__animated animate__fadeInUp">Read More</a>
            </div>
          </div>
        </div>
        <div className="carousel-item" style={{backgroundImage: image1}}>
          <div className="carousel-container">
            <div className="carousel-content">
              <h2 className="animate__animated animate__fadeInDown">Sequi ea <span>Dime Lara</span></h2>
              <p className="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
              <a href className="btn-get-started animate__animated animate__fadeInUp">Read More</a>
            </div>
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
        <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true" />
      </a>
      <a className="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
        <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true" />
      </a>
    </div>
  </div>
</section>
<section id="about" className="about">
  <div className="container">
    <div className="row">
      <div className="col-lg-6">
        <img src="assets/img/about.jpg" className="img-fluid" alt />
      </div>
      <div className="col-lg-6 pt-4 pt-lg-0 content">
        <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
        <p className="fst-italic">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>
        <ul>
          <li><i className="bi bi-check-circle" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
          <li><i className="bi bi-check-circle" /> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
          <li><i className="bi bi-check-circle" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
        </ul>
        <p>
          Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
      </div>
    </div>
  </div>
</section>

        </div>
       
	);
}

export default Navbar;