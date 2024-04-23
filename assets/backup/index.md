<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

    <!-- 
    - primary meta tags
  -->
    <title>BMW | DriveBavaria</title>
    <meta name="title" content="Autofix - Auto Maintenance & Repair Service" />
    <meta
      name="description"
      content="This is a vehicle repair html template made by codewithsadee"
    />

    <!-- 
    - favicon
  -->
    <link
      rel="shortcut icon"
      href="./assets/images/icons8-bmw-48.png"
      type="image/svg+xml"
    />

    <!-- 
    - google font link
  -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@400;600;700&family=Mulish&display=swap"
      rel="stylesheet"
    />

    <!-- 
    - material icon font
  -->
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@40,600,0,0"
    />

    <!-- Link to Font Awesome -->
    <script src="https://kit.fontawesome.com/655b3b7e45.js" crossorigin="anonymous"></script>

    <!-- 
    - custom css link
  -->
  <link rel="stylesheet" href="assets/scss/main.css">
    <link rel="stylesheet" href="./assets/css/style.css" />

    <!-- 
    - preload images
  -->
    <link rel="preload" as="image" href="./assets/images/hero-banner.png" />
    <link rel="preload" as="image" href="./assets/images/hero-bg.jpg" />

    <script>
      setTimeout(function(){
        $('.wrapper').fadeOut();
      }, 4000);
    </script>
  </head>

  <body>

    <!-- Preloader -->
    <div class="wrapper">
      <div class="c-spinning-loader">
        <div class="c-spinning-loader__circle"></div>
        <img src="assets/images/BMW-Logo-1963.png" class="c-spinning-loader__logo" width="120" height="127" alt="">
    </div>
    </div>

    <!-- End of Preloader -->



    <!-- 
    - #HEADER
  -->

    <header class="header">
      <div class="container">
        <a href="index.html" class="logo hidden">
          <img
            src="assets/images/BMW-M-symbol-1920x1080.png"
            class="bmw-logo"
            alt="bmw logo"
          />
          <h1>BMW</h1>
        </a>

        <nav class="navbar" data-navbar>
          <ul class="navbar-list">
            <li>
              <a href="index.html" class="navbar-link hidden">Home</a>
            </li>

            <li>
              <a href="#about" class="navbar-link hidden">About</a>
            </li>

            <li>
              <a href="#services" class="navbar-link hidden">Services</a>
            </li>

            <li>
              <a href="https://www.bmw.co.za/en/all-models.html" target="_blank" class="navbar-link hidden">Vehicles</a>
            </li>

            <li>
              <a href="#" class="navbar-link hidden">Contact</a>
            </li>
          </ul>
        </nav>

        <a href="#" class="btn btn-primary hidden">
          <span class="span">Get a Quote</span>

          <span class="material-symbols-rounded hidden">arrow_forward</span>
        </a>

        <button
          class="nav-toggle-btn hidden"
          aria-label="toggle menu"
          data-nav-toggler
        >
          <span class="nav-toggle-icon icon-1"></span>
          <span class="nav-toggle-icon icon-2"></span>
          <span class="nav-toggle-icon icon-3"></span>
        </button>
      </div>
    </header>

    <main>
      <article>
        <section class="hero has-bg-video" aria-label="home">
          <div class="container">
            <div class="hero-content">
              <!-- <p class="section-subtitle :dark hidden">
                Our Skilled BMW Technicians & Engineers
              </p> -->
              <h1 class="h1 section-title hidden">
                <span>BMW</span> Maintenance & Repair Service
              </h1>
              <p class="section-text hidden">
               At DriveBavaria We Keep Your BMW Running Smoothly with Expert Care and Attention
                to Detail.
              </p>
              <a href="#" class="btn hidden">
                <span class="span">Our Services</span>
                <span class="material-symbols-rounded">arrow_forward</span>
              </a>
            </div>
            <div class="image-wrapper hidden">
              <img
                src="assets/images/m4.png"
                class="move-anim"
                alt="bmw m4 image"
              />
            </div>
          </div>
          <div class="overlay"></div>
          <video class="hero-video" autoplay loop muted playsinline>
            <source src="assets/images/bmw-vd1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </section>

      

        <!-- 
        - #ABOUT
      -->

        <section class="section about has-before" id="about" aria-labelledby="about-label">
          <div class="container">
            <figure class="about-banner">
              <img
                src="./assets/images/blueprint2.jpg"
                width="600"
                height="540"
                loading="lazy"
                alt="Bmw Logo"
                class="w-100 hidden"
              />
            </figure>

            <div class="about-content">
              <p class="section-subtitle :dark hidden">About Us</p>

              <h2 class="h2 section-title hidden">
                We're Committed to Delivering BMW Quality Excellence
              </h2>

              <div class="about-wrapper">
                <p class="section-text hidden">
                  Welcome to DriveBavaria We're all about giving your BMW the
                  care it deserves. Our expert team is here to make it simple:
                  we'll keep your BMW running smoothly so you can enjoy the
                  ride.
                </p>

                <p class="section-text hidden">
                  Trust us to handle everything with precision and ease, so you
                  can focus on the road ahead.
                </p>
              </div>
              <!-- <ul class="about-list">
                <li class="about-item">
                  <p>
                    <strong class="display-1 strong">8K+</strong> Happy Clients
                  </p>
                </li>

                <li class="about-item">
                  <p>
                    <strong class="display-1 strong">22+</strong> Instruments
                  </p>
                </li>

                <li class="about-item">
                  <p>
                    <strong class="display-1 strong">50+</strong> Years in
                    market
                  </p>
                </li>

                <li class="about-item">
                  <p>
                    <strong class="display-1 strong">99%</strong> Projects
                    completed
                  </p>
                </li>
              </ul> -->
            </div>
          </div>
        </section>
        <!-- End of About Us Section -->

          <!-- 
        SERVICEs Section
      -->

      <section
      id="services"
      class="section service has-bg-image"
      aria-labelledby="service-label"
    >
      <div class="container">
        <p class="section-subtitle :light hidden" id="service-label">
          Our services
        </p>

        <h2 class="h2 section-title hidden">
          We Provide Great Services For your Vehicle
        </h2>

        <ul class="service-list">
          <li>
            <div class="service-card">
              <figure class="card-icon hidden">
                <img
                  src="./assets/images/services-1.png"
                  width="110"
                  height="110"
                  loading="lazy"
                  alt="Engine Repair"
                />
              </figure>

              <h3 class="h3 card-title hidden">Engine Repair</h3>

              <p class="card-text hidden">
                Revitalize your engine's performance with our expert repair
                services.
              </p>

              <a href="#" class="btn-link hidden">Book Service</a>
            </div>
          </li>

          <li>
            <div class="service-card">
              <figure class="card-icon hidden">
                <img
                  src="./assets/images/services-2.png"
                  width="110"
                  height="110"
                  loading="lazy"
                  alt="Brake Repair"
                />
              </figure>

              <h3 class="h3 card-title hidden">Brake Repair</h3>

              <p class="card-text hidden">
                Restore braking performance with our expert brake repair.
              </p>

              <a href="#" class="btn-link hidden">Book Service</a>
            </div>
          </li>

          <li>
            <div class="service-card">
              <figure class="card-icon hidden">
                <img
                  src="./assets/images/services-3.png"
                  width="110"
                  height="110"
                  loading="lazy"
                  alt="Tire Repair"
                />
              </figure>

              <h3 class="h3 card-title hidden">Tire Repair</h3>

              <p class="card-text hidden">
                Keep rolling smoothly with our efficient tire repair.
              </p>

              <a href="#" class="btn-link hidden">Book Service</a>
            </div>
          </li>

          <li>
            <div class="service-card">
              <figure class="card-icon hidden">
                <img
                  src="./assets/images/services-4.png"
                  width="110"
                  height="110"
                  loading="lazy"
                  alt="Battery Repair"
                />
              </figure>

              <h3 class="h3 card-title hidden">Battery Repair</h3>

              <p class="card-text hidden">
                Power up again with our reliable battery repair.
              </p>

              <a href="#" class="btn-link hidden">Book Service</a>
            </div>
          </li>

          <li class="service-banner">
            <img
              src="./assets/images/bmw-front2 (1).png"
              width="646"
              height="380"
              loading="lazy"
              alt="Red Car"
              class="move-anim hidden"
            />
          </li>

          <li>
            <div class="service-card">
              <figure class="card-icon hidden">
                <img
                  src="./assets/images/services-6.png"
                  width="110"
                  height="110"
                  loading="lazy"
                  alt="Steering Repair"
                />
              </figure>

              <h3 class="h3 card-title hidden">Steering Repair</h3>

              <p class="card-text hidden">
                Regain control with our precise steering repair.
              </p>

              <a href="#" class="btn-link hidden">Book Service</a>
            </div>
          </li>
        </ul>

        <a href="#" class="btn hidden">
          <span class="span">Request To Book</span>

          <span class="material-symbols-rounded">arrow_forward</span>
        </a>
      </div>
    </section>
  
    <!-- End of Services Section -->

        <!-- 
        - #WORK
      -->

        <section class="section work" aria-labelledby="work-label">
          <div class="container">
            <p class="section-subtitle :light hidden" id="work-label">
              BMW SOLUTIONS
            </p>

            <h2 class="h2 section-title hidden">
              Explore our range of BMW solutions
            </h2>

            <ul class="has-scrollbar">
              <li class="scrollbar-item">
                <div class="work-card">
                  <figure
                    class="card-banner img-holder"
                    style="--width: 350; --height: 406"
                  >
                    <img
                      src="./assets/images/working1.jpg"
                      width="350"
                      height="406"
                      loading="lazy"
                      alt="Engine Repair"
                      class="img-cover hidden"
                    />
                  </figure>

                  <div class="card-content">
                    <p class="card-subtitle hidden">Auto Repair</p>

                    <h3 class="h3 card-title hidden">Engine Repair</h3>

                    <a href="#" class="card-btn hidden">
                      <span class="material-symbols-rounded"
                        >arrow_forward</span
                      >
                    </a>
                  </div>
                </div>
              </li>

              <li class="scrollbar-item">
                <div class="work-card">
                  <figure
                    class="card-banner img-holder"
                    style="--width: 350; --height: 406"
                  >
                    <img
                      src="./assets/images/work-2.jpg"
                      width="350"
                      height="406"
                      loading="lazy"
                      alt="Car Tyre change"
                      class="img-cover hidden"
                    />
                  </figure>

                  <div class="card-content">
                    <p class="card-subtitle hidden">Auto Repair</p>

                    <h3 class="h3 card-title hidden">Car Tyre change</h3>

                    <a href="#" class="card-btn hidden">
                      <span class="material-symbols-rounded"
                        >arrow_forward</span
                      >
                    </a>
                  </div>
                </div>
              </li>

              <li class="scrollbar-item">
                <div class="work-card">
                  <figure
                    class="card-banner img-holder"
                    style="--width: 350; --height: 406"
                  >
                    <img
                      src="./assets/images/work-3.jpg"
                      width="350"
                      height="406"
                      loading="lazy"
                      alt="Battery Adjust"
                      class="img-cover hidden"
                    />
                  </figure>

                  <div class="card-content">
                    <p class="card-subtitle hidden">Auto Repair</p>

                    <h3 class="h3 card-title hidden">Battery Adjust</h3>

                    <a href="#" class="card-btn hidden">
                      <span class="material-symbols-rounded"
                        >arrow_forward</span
                      >
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </article>
    </main>

    <!-- 
    - #FOOTER
  -->

    <footer class="footer">
      <div class="footer-top section">
        <div class="container">
          <div class="footer-brand">
            <a href="#" class="logo">
              <img
                src="./assets/images/BMW_Grey-Colour_RGB.SVG.asset.1697707041685.SVG"
                width="120"
                height="63"
                alt="autofix home"
                class="hidden"
              />
              <h2 class="hidden">BMW</h2>
            </a>

            <p class="footer-text hidden">
              Drive the Difference: Elevate Your Journey with DriveBavaria
            </p>

            <ul class="social-list">
              <li>
                <a href="#" class="social-link hidden">
                  <img src="./assets/images/facebook.svg" alt="facebook" />
                </a>
              </li>

              <li>
                <a href="#" class="social-link hidden">
                  <img src="./assets/images/instagram.svg" alt="instagram" />
                </a>
              </li>

              <li>
                <a href="#" class="social-link hidden">
                  <img src="./assets/images/twitter.svg" alt="twitter" />
                </a>
              </li>
            </ul>
          </div>

          <ul class="footer-list">
            <li>
              <p class="h3 hidden">Operating Hours</p>
            </li>

            <li>
              <p class="p hidden">Monday – Saturday</p>

              <span class="span hidden">8:00 – 18:00</span>
            </li>

            <li>
              <p class="p hidden">Public Holiday's</p>

              <span class="span hidden">8:00 - 14:00</span>
            </li>
          </ul>

          <ul class="footer-list">
            <li>
              <p class="h3 hidden">Contact Info</p>
            </li>

            <li>
              <a href="tel:+27697020214" class="footer-link">
                <i class="fa-solid fa-phone hidden"></i>

                <span class="span hidden">+27 69 702 0214</span>
              </a>
            </li>

            <li>
              <a href="mailto:designxfolio@gmail.com" class="footer-link">
                <!-- <span class="material-symbols-rounded">mail</span> -->
                <i class="fa-solid fa-envelope hidden"></i>

                <span class="span hidden">designxfolio@gmail.com</span>
              </a>
            </li>

            <li>
              <address class="footer-link address">
                <!-- <span class="material-symbols-rounded">location_L</span> -->
                <i class="fa-solid fa-location-dot hidden"></i>

                <span class="span hidden"
                  >Durban, KZN, South Africa</span
                >
              </address>
            </li>
          </ul>
        </div>

        <img
          src="./assets/images/footer-shape-3.png"
          width="637"
          height="173"
          loading="lazy"
          alt="Shape"
          class="shape shape-3 move-anim hidden"
        />
      </div>

      <div class="footer-bottom">
        <div class="container">
          <p class="copyright hidden">
            Copyright 2024, BMW All Rights Reserved | Developed By Rahul
            Dawpersad.
          </p>

          <img
            src="./assets/images/footer-shape-2.png"
            width="778"
            height="335"
            loading="lazy"
            alt="Shape"
            class="shape shape-2"
          />

          <img
            src="./assets/images/bmwred.png"
            width="805"
            height="650"
            loading="lazy"
            alt="Red Car"
            class="shape shape-1 move-anim hidden"
          />
        </div>
      </div>
    </footer>

    <!-- 
    - custom js link
  -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js" integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="./assets/js/script.js"></script>
  </body>
</html>
