Vvveb.Sections.add("albert/about", {
    name: "About",
    image: Vvveb.themeBaseUrl + "/screenshots/albert/about-thumb.jpeg",
    html: `<section class="about">
  <div class="container">
    <div class="about-content">
      <div class="row">
        <div class="col-lg-6 col-sm-12">
          <div class="about-content-left">
            <img class="about-img" src="images/about.png" alt="about-img">
            <img class="about-white-shadow" src="images/about-white-shadow.png" alt="shadow">
            <img class="about-black-dot" src="images/black-dot.png" alt="dot-shape">
            <img class="lg-round-shape" src="images/lg-round-shape.png" alt="shape">
          </div>
        </div>
        <div class="col-lg-6 col-sm-12">
          <div class="about-content-right">
            <h3 class="font-md">Product Designer, UI/UX Designer, and Developer based in Brazil.</h3>
            <p class="para-2">Morbi quam velit, euismod in imperdiet vitae, elementum et elit. Nunc finibus, felis sit amet sollicitudin sollicitudin, nisi magna feugiat enim, in maximus urna enim ac tortor. Nunc in volutpat ipsum, molestie commodo odio. Quisque auctor nisi mi. Aenean venenatis sapien et interdum interdum.</p>
            <div class="project-document">
              <div class="project-year">
                <h2 class="font-lg">17+</h2>
                <span class="para-2">Years of
                  Experience
                </span>
              </div>
              <div class="project-completed">
                <h2 class="font-lg">325+</h2>
                <span class="para-2">Completed
                  Projects</span>
              </div>
            </div>
            <a href="#" class="btn btn--primary">
              say hi
              <svg width="33" height="24" viewBox="0 0 33 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M31 12.025H1" stroke="#DFE3EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M25.9502 6.00006L32.0002 12.0241L25.9502 18.0491" stroke="#DFE3EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`
});Vvveb.Sections.add("albert/banner", {
    name: "Banner",
    image: Vvveb.themeBaseUrl + "/screenshots/albert/banner-thumb.jpeg",
    html: `<section class="banner">
  <div class="container">
    <div class="banner-content">
      <div class="row">
        <div class="col-lg-6 order-2 order-lg-0">
          <div class="banner-content-left">
            <h3 class="font-xl">Hello, I’m Albert, a UI/UX
              <span>Designer.</span>
            </h3>
            <p>Product Designer, UI/UX Designer, and developer based in Brazil. Over the past 17 years, as an art director and designer, I’ve worked with big companies and up-and-coming startups.</p>
            <a href="#" class="btn btn--primary">
              Hire Me
            </a>
            <a href="#" class="btn btn--secondary">
              View work
            </a>
            <div class="follow-content">
              <span>Follow me on</span>
              <div class="follow-content-social">
                <a href="#" class="social social-square">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 0.000976562C4.48594 0.000976562 0 4.48692 0 10.0009C0 15.5148 4.48594 20.0008 10 20.0008C15.5141 20.0008 20 15.5148 20 10.0009C20 4.48692 15.5141 0.000976562 10 0.000976562ZM16.5166 4.71716C17.6392 6.09905 18.3304 7.84326 18.3879 9.74462C16.3083 9.3141 14.4252 9.36462 12.7629 9.69056C12.4619 8.98667 12.1503 8.31606 11.8358 7.68228C13.6462 6.90238 15.2223 5.90627 16.5166 4.71716ZM15.3901 3.57226C14.1053 4.74499 12.6164 5.6133 11.0918 6.25436C9.97281 4.20808 8.9022 2.66713 8.25 1.79144C8.81475 1.67112 9.39993 1.60658 10 1.60658C12.0506 1.60658 13.9307 2.34665 15.3901 3.57226ZM6.62835 2.31582C7.12084 2.954 8.29389 4.55189 9.55396 6.82531C6.38708 7.85707 3.31417 8.0309 1.83756 8.04707C2.45304 5.47597 4.25356 3.36182 6.62835 2.31582ZM1.61438 9.65674C1.63022 9.65674 1.64553 9.65684 1.66169 9.65684C2.68199 9.65684 4.55134 9.58823 6.75209 9.18694C8.00766 8.95798 9.19827 8.64981 10.3154 8.26789C10.6063 8.84751 10.8954 9.45893 11.1757 10.0998C9.61144 10.6034 8.29228 11.3281 7.24736 12.0476C5.49511 13.2542 4.26758 14.593 3.59729 15.4207C2.35627 13.9572 1.6056 12.0656 1.6056 10.0009C1.6056 9.88548 1.60967 9.77106 1.61438 9.65674ZM4.75429 16.5473C5.33134 15.8207 6.50589 14.4983 8.20494 13.3378C9.35958 12.5492 10.5541 11.9632 11.7839 11.5786C12.4975 13.4281 13.1066 15.4716 13.4698 17.6414C12.4114 18.1239 11.2372 18.3952 10 18.3952C8.01633 18.3952 6.19248 17.7021 4.75429 16.5473ZM14.947 16.7768C14.5726 14.7841 14.0144 12.9103 13.3691 11.1979C14.9565 10.9301 16.5971 10.9853 18.2821 11.3638C17.9187 13.5785 16.6864 15.5035 14.947 16.7768Z" fill="currentColor"></path>
                  </svg>
                </a>
                <a href="#" class="social social-square">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0)">
                      <path d="M8.22817 9.39998C8.64321 9.19121 8.95698 8.95869 9.172 8.70742C9.55453 8.25488 9.7433 7.65483 9.7433 6.91102C9.7433 6.18721 9.55453 5.56841 9.177 5.04962C8.54695 4.20455 7.48061 3.77201 5.97299 3.74951H0V15.9418H5.56921C6.19676 15.9418 6.77806 15.888 7.3156 15.778C7.85314 15.6667 8.31818 15.463 8.71196 15.1654C9.06199 14.9067 9.35452 14.5854 9.58704 14.2066C9.95457 13.6341 10.1383 12.9853 10.1383 12.2627C10.1383 11.5627 9.97707 10.9664 9.65704 10.4763C9.33327 9.98627 8.85823 9.62749 8.22817 9.39998ZM2.46395 5.86719H5.15417C5.74547 5.86719 6.23301 5.93094 6.61554 6.0572C7.05808 6.24097 7.27935 6.61475 7.27935 7.18479C7.27935 7.69608 7.11058 8.05361 6.77681 8.25488C6.44053 8.45615 6.00424 8.55741 5.4692 8.55741H2.46395V5.86719ZM6.71805 13.6116C6.42053 13.7553 6.00174 13.8266 5.46545 13.8266H2.46395V10.5751H5.5067C6.03675 10.5788 6.44928 10.6488 6.7443 10.7801C7.26935 11.0176 7.53062 11.4526 7.53062 12.0889C7.53062 12.839 7.2606 13.344 6.71805 13.6116Z" fill="currentColor" />
                      <path d="M18.0778 4.31824H12.7811V5.83586H18.0778V4.31824Z" fill="currentColor" />
                      <path d="M19.9179 10.3076C19.8078 9.60125 19.5653 8.97995 19.1878 8.44366C18.774 7.83611 18.249 7.39107 17.6102 7.1098C16.9739 6.82728 16.2576 6.68601 15.46 6.68726C14.1211 6.68726 13.0335 7.10605 12.1922 7.93736C11.3534 8.77118 10.9334 9.97003 10.9334 11.5327C10.9334 13.199 11.3972 14.4029 12.3297 15.1417C13.2586 15.8818 14.3312 16.2505 15.5488 16.2505C17.0226 16.2505 18.169 15.8117 18.9878 14.9367C19.5116 14.3841 19.8078 13.8403 19.8729 13.3065H17.4327C17.2914 13.5703 17.1276 13.7766 16.9401 13.9266C16.6001 14.2016 16.1576 14.3391 15.615 14.3391C15.0987 14.3391 14.6612 14.2254 14.2962 13.9991C13.6936 13.6366 13.3786 13.0015 13.3386 12.0977H19.9979C20.0079 11.3189 19.9829 10.7201 19.9179 10.3076ZM13.3986 10.5413C13.4861 9.95503 13.6986 9.48999 14.0361 9.14621C14.3737 8.80368 14.8512 8.63117 15.4625 8.62992C16.0263 8.62992 16.4976 8.79118 16.8814 9.11496C17.2601 9.44124 17.4739 9.91502 17.5177 10.5413H13.3986Z" fill="currentColor" />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                <a href="#" class="social social-square">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0)">
                      <path d="M13.3308 3.32083H15.1567V0.140833C14.8417 0.0975 13.7583 0 12.4967 0C9.86416 0 8.06082 1.65583 8.06082 4.69917V7.5H5.15582V11.055H8.06082V20H11.6225V11.0558H14.41L14.8525 7.50083H11.6217V5.05167C11.6225 4.02417 11.8992 3.32083 13.3308 3.32083Z" fill="currentcolor" />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect width="20" height="20" fill="currentColor" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                <a href="#" class="social social-square">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0)">
                      <path d="M20 3.79875C19.2563 4.125 18.4637 4.34125 17.6375 4.44625C18.4875 3.93875 19.1363 3.14125 19.4412 2.18C18.6488 2.6525 17.7738 2.98625 16.8412 3.1725C16.0887 2.37125 15.0162 1.875 13.8462 1.875C11.5763 1.875 9.74875 3.7175 9.74875 5.97625C9.74875 6.30125 9.77625 6.61375 9.84375 6.91125C6.435 6.745 3.41875 5.11125 1.3925 2.6225C1.03875 3.23625 0.83125 3.93875 0.83125 4.695C0.83125 6.115 1.5625 7.37375 2.6525 8.1025C1.99375 8.09 1.3475 7.89875 0.8 7.5975C0.8 7.61 0.8 7.62625 0.8 7.6425C0.8 9.635 2.22125 11.29 4.085 11.6712C3.75125 11.7625 3.3875 11.8062 3.01 11.8062C2.7475 11.8062 2.4825 11.7913 2.23375 11.7362C2.765 13.36 4.2725 14.5538 6.065 14.5925C4.67 15.6838 2.89875 16.3412 0.98125 16.3412C0.645 16.3412 0.3225 16.3263 0 16.285C1.81625 17.4563 3.96875 18.125 6.29 18.125C13.835 18.125 17.96 11.875 17.96 6.4575C17.96 6.27625 17.9538 6.10125 17.945 5.9275C18.7588 5.35 19.4425 4.62875 20 3.79875Z" fill="currentColor" />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect width="20" height="20" fill="currentColor" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 order-1 order-lg-0">
          <div class="banner-content-right">
            <img src="images/banner.png" alt="banner-img">
            <img class="dot-shadow-img" src="images/dot-shadow-img.png" alt="dot-shadow">
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`
});Vvveb.Sections.add("albert/blog", {
    name: "Blog",
    image: Vvveb.themeBaseUrl + "/screenshots/albert/blog-thumb.jpeg",
    html: `<section class="blog">
  <div class="container">
    <div class="blog-area-content">
      <h3 class="font-sm">Blog & News
        <div class="deep-dot"></div>
      </h3>
      <div class="row">
        <div class="col-lg-4">
          <div class="blog-area">
            <div class="blog-area-image">
              <img src="images/blog-img.jpg" alt="blog-img">
            </div>
            <div class="blog-area-content">
              <div class="date-text">
                <div class="date">
                  24 May, 2021
                </div>
                <span class="gray-dot"></span>
                <div class="time">
                  9 min read
                </div>

              </div>
              <h5 class="font-mini">
                <a href="#">
                  23 Essential Skills for Successful Web Designers in 2021.
                </a>
              </h5>
              <a href="#" class="right-arrow-icon">
                <span>View Project</span>
                <svg width="36" height="24" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M33 12.03H3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M27.95 4.80005L34 12.0288L27.95 19.2588" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="blog-area">
            <div class="blog-area-image">
              <img src="images/blog-img.jpg" alt="blog-img">
            </div>
            <div class="blog-area-content">
              <div class="date-text">
                <div class="date">
                  24 May, 2021
                </div>
                <span class="gray-dot"></span>
                <div class="time">
                  9 min read
                </div>

              </div>
              <h5 class="font-mini">
                <a href="#">
                  23 Essential Skills for Successful Web Designers in 2021.
                </a>
              </h5>
              <a href="#" class="right-arrow-icon">
                <span>View Project</span>
                <svg width="36" height="24" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M33 12.03H3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M27.95 4.80005L34 12.0288L27.95 19.2588" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="mini-blog">
            <div class="mini-blog-text para-1">
              <a href="#">10 Best Design Feedback and Annotation tools for Designers.</a>
            </div>
            <a href="#" class="right-arrow-icon">
              <span>Read More</span>
              <svg width="32" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M29.3333 10.0249H2.66663" stroke="#684FFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M24.8444 4L30.2221 10.024L24.8444 16.049" stroke="#684FFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </a>
          </div>
          <div class="mini-blog">
            <div class="mini-blog-text para-1">
              <a href="#">10 Best Design Feedback and Annotation tools for Designers.</a>
            </div>
            <a href="#" class="right-arrow-icon">
              <span>Read More</span>
              <svg width="32" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M29.3333 10.0249H2.66663" stroke="#684FFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M24.8444 4L30.2221 10.024L24.8444 16.049" stroke="#684FFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </a>
          </div>
          <div class="mini-blog">
            <div class="mini-blog-text para-1">
              <a href="#">10 Best Design Feedback and Annotation tools for Designers.</a>
            </div>
            <a href="#" class="right-arrow-icon">
              <span>Read More</span>
              <svg width="32" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M29.3333 10.0249H2.66663" stroke="#684FFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M24.8444 4L30.2221 10.024L24.8444 16.049" stroke="#684FFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`
});Vvveb.Sections.add("albert/call-action", {
    name: "Call action",
    image: Vvveb.themeBaseUrl + "/screenshots/albert/call-action-thumb.jpeg",
    html: `<section class="call-action">
  <div class="container">
    <div class="call-action-content">
      <h4>Got a Project in Mind? Let's Make</h4>
      <h4>Something Awesome Together.</h4>
      <a href="#" class="btn btn--primary">
        Hire Me
        <svg width="33" height="24" viewBox="0 0 33 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M31 12.025H1" stroke="#DFE3EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M25.9502 6.00006L32.0002 12.0241L25.9502 18.0491" stroke="#DFE3EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </a>
      <img class="call-ac-shape-1" src="images/call-sm-shape.png" alt="shape">
      <img class="call-ac-dot-1" src="images/call-dot-1.png" alt="dot">
      <img class="call-ac-dot-2" src="images/call-dot-1.png" alt="dot">
      <img class="call-ac-shape-2" src="images/call-lg-shape.png" alt="dot">
    </div>
  </div>
</section>`
});Vvveb.Sections.add("albert/company", {
    name: "Company",
    image: Vvveb.themeBaseUrl + "/screenshots/albert/company-thumb.jpeg",
    html: `<section class="company">
  <div class="container">
    <div class="company-content">
      <div class="row align-items-center ">
        <div class="col-xl-3 px-0">
          <div class="company-content-text">

            <h3 class="font-xs">
              I Worked with
              <span>289+</span>
              Companies all over the World.
            </h3>
          </div>
        </div>
        <div class="col-xl-9 px-0">
          <div class="company-content-social-activity">
            <div class="social-img-icon">
              <a href="#" class="youtube">
                <img src="images/youtube.png" alt="youtube">
              </a>
            </div>
            <div class="social-img-icon">
              <a href="#" class="google youtube">
                <img src="images/google.png" alt="google">
              </a>
            </div>
            <div class="social-img-icon">
              <a href="#" class="adobe youtube">
                <img src="images/adobe.png" alt="adobe">
              </a>
            </div>
            <div class="social-img-icon">
              <a href="#" class="sketch youtube">
                <img src="images/sketch.png" alt="sketch">
              </a>
            </div>
            <div class="social-img-icon">
              <a href="#" class="sketch youtube">
                <svg width="32" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M29.3333 10.0249H2.66663" stroke="#684FFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M24.8444 4L30.2221 10.024L24.8444 16.049" stroke="#684FFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`
});Vvveb.Sections.add("albert/contact", {
    name: "Contact",
    image: Vvveb.themeBaseUrl + "/screenshots/albert/contact-thumb.jpeg",
    html: `<section class="contact">
  <div class="container">
    <div class="row">
      <div class="col-lg-6">
        <div class="contact-area-info">
          <h3 class="font-xs">Let me know here.</h3>

          <div class="contact-form" data-v-component-plugin-contact-form-form data-v-storage="database" data-v-name="contact-us-page">
            <div class="notifications" data-v-notifications>

              <div class="alert alert-danger d-flex alert-dismissable" role="alert" data-v-notification-error>

                <div class="align-middle me-2">
                  <i class="align-middle ti-announcement"></i>
                </div>

                <div class="flex-grow-1 align-self-center text-small">
                  <div>
                    <div data-v-notification-text>
                      This is a placeholder for a notification message.
                    </div>
                  </div>
                </div>


                <button type="button" class="btn-close align-middle" data-bs-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true">
                    <!-- <i class="la ti-times"></i> -->
                  </span>
                </button>
              </div>

              <div class="alert alert-success d-flex  alert-dismissable d-flex" role="alert" data-v-notification-success>

                <div class="align-middle me-2">
                  <i class="align-middle ti-check"></i>
                </div>

                <div class="flex-grow-1 align-self-center align-middle" data-v-notification-text>
                  This is a placeholder for a success message.
                </div>

                <button type="button" class="btn-close align-middle" data-bs-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true">
                    <!-- <i class="la ti-times"></i> -->
                  </span>
                </button>
              </div>

              <div class="alert alert-primary d-flex alert-dismissable d-flex" role="alert" data-v-notification-info>

                <div class="align-middle me-2">
                  <i class="align-middle ti-light-bulb"></i>
                </div>

                <div class="flex-grow-1 align-self-center" data-v-notification-text>
                  This is a placeholder for a info message.
                </div>

                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true">
                    <!-- <i class="la ti-times"></i> -->
                  </span>
                </button>
              </div>

            </div>


            <form class="row" action="" method="post">
              <input type="hidden" class="form-control" placeholder="First name" name="firstname-empty">

              <div class="col-md-6">
                <input type="text" class="form-control" name="name" id="exampleFormControlInput1" placeholder="Your Name" required>
              </div>
              <div class="col-md-6">
                <input type="email" class="form-control" name="email" id="validationCustom02" required="" placeholder="Your Email" required>
              </div>
              <div class="col-md-12">
                <textarea name="message" class="form-control" id="exampleFormControlTextarea1" rows="8" placeholder="Message here…" required></textarea>
              </div>

              <!-- if these hidden inputs are filled then ignore, robots -->

              <input type="text" class="form-control d-none" placeholder="Subject" name="contact-form">

              <input type="text" class="form-control d-none" placeholder="Subject" name="subject-empty">

              <input type="text" class="form-control visually-hidden" placeholder="Last name" name="lastname-empty" tabindex="-1">

              <div class="col-lg-12">
                <button type="submit" class="btn btn-primary" formtarget="_blank">Send Message

                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 2L11 13" stroke="#DFE3EB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="#DFE3EB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </button>
              </div>
            </form>

          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="contact-area-location">
          <h3 class="font-xs">Get In Touch</h3>
          <div class="contact-location-icon">
            <a href="#" class="social social-lg-round">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28 13.3335C28 22.6668 16 30.6668 16 30.6668C16 30.6668 4 22.6668 4 13.3335C4 10.1509 5.26428 7.09865 7.51472 4.84821C9.76516 2.59778 12.8174 1.3335 16 1.3335C19.1826 1.3335 22.2348 2.59778 24.4853 4.84821C26.7357 7.09865 28 10.1509 28 13.3335Z" stroke="#684FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M16 17.3335C18.2091 17.3335 20 15.5426 20 13.3335C20 11.1244 18.2091 9.3335 16 9.3335C13.7909 9.3335 12 11.1244 12 13.3335C12 15.5426 13.7909 17.3335 16 17.3335Z" stroke="#684FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </a>
            <div class="location-text">
              <span class="para-2">House #5, Street Number #98,</span>
              <p class="para-2">brasilia- 70000-000, Brazil.</p>
            </div>
          </div>
          <div class="contact-location-icon">
            <a href="#" class="social social-lg-round">
              <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.33329 5.66699H26.6666C28.1333 5.66699 29.3333 6.86699 29.3333 8.33366V24.3337C29.3333 25.8003 28.1333 27.0003 26.6666 27.0003H5.33329C3.86663 27.0003 2.66663 25.8003 2.66663 24.3337V8.33366C2.66663 6.86699 3.86663 5.66699 5.33329 5.66699Z" stroke="#684FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M29.3333 8.3335L16 17.6668L2.66663 8.3335" stroke="#684FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </a>
            <div class="location-text">
              <span class="para-2">albert.design@gmail.com
              </span>
              <p class="para-2">albert.flores@gmail.com</p>
            </div>
          </div>
          <div class="contact-location-icon">
            <a href="#" class="social social-lg-round">
              <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.65597 3.6665C8.13297 3.6665 7.61697 3.8545 7.18697 4.1975L7.12497 4.2285L7.09397 4.2605L3.96897 7.4795L3.99997 7.5095C3.54145 7.92586 3.21657 8.46874 3.06635 9.0696C2.91614 9.67046 2.94732 10.3024 3.15597 10.8855C3.15997 10.8935 3.15197 10.9085 3.15597 10.9165C4.00397 13.3425 6.17197 18.0265 10.406 22.2605C14.656 26.5105 19.402 28.5925 21.75 29.5105H21.781C22.3694 29.705 22.9982 29.7439 23.6061 29.6233C24.214 29.5027 24.7803 29.2269 25.25 28.8225L28.406 25.6665C29.234 24.8385 29.234 23.4005 28.406 22.5725L24.344 18.5105L24.312 18.4475C23.484 17.6195 22.016 17.6195 21.187 18.4475L19.187 20.4475C17.686 19.7264 16.3054 18.7779 15.094 17.6355C13.457 16.0725 12.621 14.2755 12.313 13.5725L14.313 11.5725C15.153 10.7325 15.168 9.3345 14.281 8.5105L14.312 8.4785L14.219 8.3855L10.219 4.2605L10.188 4.2295L10.125 4.1975C9.70994 3.85861 9.19178 3.67131 8.65597 3.6665ZM8.65597 5.6665C8.73772 5.67125 8.81522 5.70452 8.87497 5.7605L12.875 9.8535L12.969 9.9475C12.961 9.9395 13.027 10.0455 12.906 10.1665L10.406 12.6665L9.93698 13.1045L10.157 13.7285C10.157 13.7285 11.305 16.8035 13.719 19.1045L13.938 19.2915C16.261 21.4125 19 22.5725 19 22.5725L19.625 22.8545L22.594 19.8845C22.766 19.7135 22.734 19.7135 22.906 19.8845L27 23.9805C27.172 24.1515 27.172 24.0895 27 24.2605L23.937 27.3235C23.477 27.7185 22.988 27.8005 22.407 27.6055C20.141 26.7145 15.738 24.7805 11.812 20.8555C7.85498 16.8975 5.78897 12.4095 5.03197 10.2305C4.87897 9.8235 4.98797 9.2225 5.34397 8.9175L5.40597 8.8545L8.43797 5.7615C8.49707 5.70558 8.5738 5.67199 8.65497 5.6665H8.65597Z" fill="#684FFF" />
              </svg>
            </a>
            <div class="location-text">
              <span class="para-2">+55 955 258 2699 </span>
              <p class="para-2">+55 955 100 9449</p>
            </div>
          </div>

          <div class="bottom-social-icon">
            <a href="#" class="social social-sm-round">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 0.000976562C4.48594 0.000976562 0 4.48692 0 10.0009C0 15.5148 4.48594 20.0008 10 20.0008C15.5141 20.0008 20 15.5148 20 10.0009C20 4.48692 15.5141 0.000976562 10 0.000976562ZM16.5166 4.71716C17.6392 6.09905 18.3304 7.84326 18.3879 9.74462C16.3083 9.3141 14.4252 9.36462 12.7629 9.69056C12.4619 8.98667 12.1503 8.31606 11.8358 7.68228C13.6462 6.90238 15.2223 5.90627 16.5166 4.71716ZM15.3901 3.57226C14.1053 4.74499 12.6164 5.6133 11.0918 6.25436C9.97281 4.20808 8.9022 2.66713 8.25 1.79144C8.81475 1.67112 9.39993 1.60658 10 1.60658C12.0506 1.60658 13.9307 2.34665 15.3901 3.57226ZM6.62835 2.31582C7.12084 2.954 8.29389 4.55189 9.55396 6.82531C6.38708 7.85707 3.31417 8.0309 1.83756 8.04707C2.45304 5.47597 4.25356 3.36182 6.62835 2.31582ZM1.61438 9.65674C1.63022 9.65674 1.64553 9.65684 1.66169 9.65684C2.68199 9.65684 4.55134 9.58823 6.75209 9.18694C8.00766 8.95798 9.19827 8.64981 10.3154 8.26789C10.6063 8.84751 10.8954 9.45893 11.1757 10.0998C9.61144 10.6034 8.29228 11.3281 7.24736 12.0476C5.49511 13.2542 4.26758 14.593 3.59729 15.4207C2.35627 13.9572 1.6056 12.0656 1.6056 10.0009C1.6056 9.88548 1.60967 9.77106 1.61438 9.65674ZM4.75429 16.5473C5.33134 15.8207 6.50589 14.4983 8.20494 13.3378C9.35958 12.5492 10.5541 11.9632 11.7839 11.5786C12.4975 13.4281 13.1066 15.4716 13.4698 17.6414C12.4114 18.1239 11.2372 18.3952 10 18.3952C8.01633 18.3952 6.19248 17.7021 4.75429 16.5473ZM14.947 16.7768C14.5726 14.7841 14.0144 12.9103 13.3691 11.1979C14.9565 10.9301 16.5971 10.9853 18.2821 11.3638C17.9187 13.5785 16.6864 15.5035 14.947 16.7768Z" fill="currentColor"></path>
              </svg>
            </a>
            <a href="#" class="social social-sm-round">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0)">
                  <path d="M8.22817 9.39998C8.64321 9.19121 8.95698 8.95869 9.172 8.70742C9.55453 8.25488 9.7433 7.65483 9.7433 6.91102C9.7433 6.18721 9.55453 5.56841 9.177 5.04962C8.54695 4.20455 7.48061 3.77201 5.97299 3.74951H0V15.9418H5.56921C6.19676 15.9418 6.77806 15.888 7.3156 15.778C7.85314 15.6667 8.31818 15.463 8.71196 15.1654C9.06199 14.9067 9.35452 14.5854 9.58704 14.2066C9.95457 13.6341 10.1383 12.9853 10.1383 12.2627C10.1383 11.5627 9.97707 10.9664 9.65704 10.4763C9.33327 9.98627 8.85823 9.62749 8.22817 9.39998ZM2.46395 5.86719H5.15417C5.74547 5.86719 6.23301 5.93094 6.61554 6.0572C7.05808 6.24097 7.27935 6.61475 7.27935 7.18479C7.27935 7.69608 7.11058 8.05361 6.77681 8.25488C6.44053 8.45615 6.00424 8.55741 5.4692 8.55741H2.46395V5.86719ZM6.71805 13.6116C6.42053 13.7553 6.00174 13.8266 5.46545 13.8266H2.46395V10.5751H5.5067C6.03675 10.5788 6.44928 10.6488 6.7443 10.7801C7.26935 11.0176 7.53062 11.4526 7.53062 12.0889C7.53062 12.839 7.2606 13.344 6.71805 13.6116Z" fill="currentColor" />
                  <path d="M18.0778 4.31836H12.7811V5.83598H18.0778V4.31836Z" fill="currentColor" />
                  <path d="M19.9178 10.3073C19.8078 9.60101 19.5653 8.97971 19.1878 8.44341C18.774 7.83586 18.2489 7.39083 17.6101 7.10955C16.9738 6.82703 16.2575 6.68577 15.46 6.68702C14.1211 6.68702 13.0335 7.1058 12.1922 7.93712C11.3534 8.77094 10.9333 9.96978 10.9333 11.5324C10.9333 13.1988 11.3971 14.4026 12.3297 15.1415C13.2585 15.8815 14.3311 16.2503 15.5487 16.2503C17.0226 16.2503 18.1689 15.8115 18.9878 14.9364C19.5115 14.3839 19.8078 13.8401 19.8728 13.3063H17.4326C17.2914 13.5701 17.1276 13.7763 16.9401 13.9264C16.6001 14.2014 16.1575 14.3389 15.615 14.3389C15.0987 14.3389 14.6612 14.2251 14.2961 13.9989C13.6936 13.6363 13.3785 13.0013 13.3385 12.0975H19.9978C20.0078 11.3186 19.9828 10.7198 19.9178 10.3073ZM13.3985 10.5411C13.4861 9.95478 13.6986 9.48975 14.0361 9.14597C14.3736 8.80344 14.8512 8.63093 15.4625 8.62968C16.0263 8.62968 16.4975 8.79094 16.8813 9.11472C17.2601 9.44099 17.4739 9.91478 17.5176 10.5411H13.3985Z" fill="currentColor" />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a href="#" class="social social-sm-round">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0)">
                  <path d="M13.3309 3.32083H15.1567V0.140833C14.8417 0.0975 13.7584 0 12.4967 0C9.86422 0 8.06088 1.65583 8.06088 4.69917V7.5H5.15588V11.055H8.06088V20H11.6226V11.0558H14.4101L14.8526 7.50083H11.6217V5.05167C11.6226 4.02417 11.8992 3.32083 13.3309 3.32083Z" fill="currentColor" />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a href="#" class="social social-sm-round">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0)">
                  <path d="M20 3.79875C19.2563 4.125 18.4637 4.34125 17.6375 4.44625C18.4875 3.93875 19.1363 3.14125 19.4412 2.18C18.6488 2.6525 17.7738 2.98625 16.8412 3.1725C16.0887 2.37125 15.0162 1.875 13.8462 1.875C11.5763 1.875 9.74875 3.7175 9.74875 5.97625C9.74875 6.30125 9.77625 6.61375 9.84375 6.91125C6.435 6.745 3.41875 5.11125 1.3925 2.6225C1.03875 3.23625 0.83125 3.93875 0.83125 4.695C0.83125 6.115 1.5625 7.37375 2.6525 8.1025C1.99375 8.09 1.3475 7.89875 0.8 7.5975C0.8 7.61 0.8 7.62625 0.8 7.6425C0.8 9.635 2.22125 11.29 4.085 11.6712C3.75125 11.7625 3.3875 11.8062 3.01 11.8062C2.7475 11.8062 2.4825 11.7913 2.23375 11.7362C2.765 13.36 4.2725 14.5538 6.065 14.5925C4.67 15.6838 2.89875 16.3412 0.98125 16.3412C0.645 16.3412 0.3225 16.3263 0 16.285C1.81625 17.4563 3.96875 18.125 6.29 18.125C13.835 18.125 17.96 11.875 17.96 6.4575C17.96 6.27625 17.9538 6.10125 17.945 5.9275C18.7588 5.35 19.4425 4.62875 20 3.79875Z" fill="currentColor" />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a href="#" class="social social-sm-round">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0)">
                  <path d="M19.9804 5.88005C19.9336 4.81738 19.7617 4.0868 19.5156 3.45374C19.2616 2.78176 18.8709 2.18014 18.359 1.68002C17.8589 1.1721 17.2533 0.777435 16.5891 0.527447C15.9524 0.281274 15.2256 0.109427 14.163 0.0625732C13.0923 0.0117516 12.7525 0 10.0371 0C7.32172 0 6.98185 0.0117516 5.9152 0.0586052C4.85253 0.105459 4.12195 0.277459 3.48904 0.523479C2.81691 0.777435 2.2153 1.16814 1.71517 1.68002C1.20726 2.18014 0.812742 2.78573 0.562602 3.44992C0.31643 4.0868 0.144583 4.81341 0.0977294 5.87609C0.0469078 6.9467 0.0351562 7.28658 0.0351562 10.002C0.0351562 12.7173 0.0469078 13.0572 0.0937614 14.1239C0.140615 15.1865 0.312615 15.9171 0.558787 16.5502C0.812742 17.2221 1.20726 17.8238 1.71517 18.3239C2.2153 18.8318 2.82088 19.2265 3.48507 19.4765C4.12195 19.7226 4.84856 19.8945 5.91139 19.9413C6.97788 19.9883 7.31791 19.9999 10.0333 19.9999C12.7486 19.9999 13.0885 19.9883 14.1552 19.9413C15.2178 19.8945 15.9484 19.7226 16.5813 19.4765C17.9254 18.9568 18.9881 17.8941 19.5078 16.5502C19.7538 15.9133 19.9258 15.1865 19.9726 14.1239C20.0195 13.0572 20.0312 12.7173 20.0312 10.002C20.0312 7.28658 20.0273 6.9467 19.9804 5.88005ZM18.1794 14.0457C18.1364 15.0225 17.9723 15.5499 17.8355 15.9015C17.4995 16.7728 16.808 17.4643 15.9367 17.8004C15.585 17.9372 15.0538 18.1012 14.0808 18.1441C13.026 18.1911 12.7096 18.2027 10.0411 18.2027C7.37255 18.2027 7.0522 18.1911 6.00113 18.1441C5.02437 18.1012 4.49693 17.9372 4.1453 17.8004C3.71171 17.6402 3.31704 17.3862 2.9967 17.0541C2.6646 16.7298 2.41065 16.3391 2.2504 15.9055C2.11365 15.5539 1.94959 15.0225 1.9067 14.0497C1.8597 12.9948 1.8481 12.6783 1.8481 10.0097C1.8481 7.34122 1.8597 7.02087 1.9067 5.96995C1.94959 4.99319 2.11365 4.46575 2.2504 4.11412C2.41065 3.68038 2.6646 3.28586 3.00067 2.96536C3.32483 2.63327 3.71553 2.37931 4.14927 2.21921C4.5009 2.08247 5.03231 1.9184 6.00509 1.87537C7.05999 1.82851 7.37651 1.81676 10.0449 1.81676C12.7174 1.81676 13.0337 1.82851 14.0848 1.87537C15.0616 1.9184 15.589 2.08247 15.9406 2.21921C16.3742 2.37931 16.7689 2.63327 17.0892 2.96536C17.4213 3.28967 17.6753 3.68038 17.8355 4.11412C17.9723 4.46575 18.1364 4.99701 18.1794 5.96995C18.2262 7.02484 18.238 7.34122 18.238 10.0097C18.238 12.6783 18.2262 12.9908 18.1794 14.0457Z" fill="currentColor" />
                  <path d="M10.0371 4.86426C7.20074 4.86426 4.89941 7.16543 4.89941 10.002C4.89941 12.8385 7.20074 15.1397 10.0371 15.1397C12.8737 15.1397 15.1749 12.8385 15.1749 10.002C15.1749 7.16543 12.8737 4.86426 10.0371 4.86426ZM10.0371 13.3347C8.19702 13.3347 6.70442 11.8422 6.70442 10.002C6.70442 8.16172 8.19702 6.66927 10.0371 6.66927C11.8774 6.66927 13.3698 8.16172 13.3698 10.002C13.3698 11.8422 11.8774 13.3347 10.0371 13.3347Z" fill="currentColor" />
                  <path d="M16.5775 4.66085C16.5775 5.32321 16.0404 5.86028 15.3779 5.86028C14.7155 5.86028 14.1785 5.32321 14.1785 4.66085C14.1785 3.99834 14.7155 3.46143 15.3779 3.46143C16.0404 3.46143 16.5775 3.99834 16.5775 4.66085Z" fill="currentColor" />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a href="#" class="social social-sm-round">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.9789 5.31349C18.7628 4.51023 18.1295 3.87703 17.3264 3.66074C15.8591 3.25928 9.99 3.25928 9.99 3.25928C9.99 3.25928 4.12113 3.25928 2.65388 3.64552C1.86619 3.86158 1.21742 4.51035 1.00136 5.31349C0.615234 6.78062 0.615234 9.82326 0.615234 9.82326C0.615234 9.82326 0.615234 12.8812 1.00136 14.333C1.21765 15.1362 1.85074 15.7694 2.654 15.9857C4.13658 16.3873 9.99023 16.3873 9.99023 16.3873C9.99023 16.3873 15.8591 16.3873 17.3264 16.001C18.1296 15.7848 18.7628 15.1516 18.9791 14.3485C19.3651 12.8812 19.3651 9.83871 19.3651 9.83871C19.3651 9.83871 19.3806 6.78062 18.9789 5.31349ZM8.12141 12.6342V7.01237L13.0019 9.82326L8.12141 12.6342Z" fill="currentColor" />
              </svg>
            </a>
          </div>
          <div class="black-dot">
            <img src="images/black-dot.png" alt="dot-shape">
          </div>
        </div>
      </div>
    </div>
    <div class="round-shape">
      <img src="images/border-round-shape.png" alt="shape">
    </div>
    <div class="lg-round-shape">
      <img src="images/lg-round-shape.png" alt="">
    </div>
  </div>
</section>`
});Vvveb.Sections.add("albert/footer", {
    name: "Footer",
    image: Vvveb.themeBaseUrl + "/screenshots/albert/footer-thumb.jpeg",
    html: `<div class="footer">
  <div class="container">
    <div class="footer-text">
      <h4>© 2021 — Albert Flores. design &amp; develop by
        <a href="#">Templatecookie</a>
      </h4>
      <h4>Powered by
        <a href="https://vvveb.com">Vvveb</a>
      </h4>
    </div>
  </div>
</div>`
});Vvveb.Sections.add("albert/header", {
    name: "Header",
    image: Vvveb.themeBaseUrl + "/screenshots/albert/header-thumb.jpeg",
    html: `<section class="header">
  <div class="container">
    <nav class="main-nav navbar navbar-expand-lg header-content">

      <div data-v-component-site>
        <a class="logo" href="/" data-v-url-params='{"host":"www.*.*"}'>
          <img src="images/logo.png" loading="lazy" class="logo-default logo-main" src="images/logo.svg" alt="logo" data-v-site-logo>
          <!--
				   <img src="img/logo.png" loading="lazy" class="logo-sticky logo-main" src="images/logo.svg" alt="logo" data-v-site-logo-sticky>
				   <img src="img/logo-white.png" loading="lazy" class="logo-default-dark logo-main" src="images/logo.svg" alt="logo" data-v-site-logo-dark>
				   <img src="img/logo-white.png" loading="lazy" class="logo-default-dark-sticky logo-main" src="images/logo.svg" alt="logo" data-v-site-logo-dark-sticky>
				   -->
        </a>
      </div>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse header-content-menu" id="navbar" data-v-component-menu="header" data-v-slug="main-menu">
        <!-- Navigation Links -->
        <ul class="navbar-nav ms-auto" data-v-menu-items>
          <li class="nav-item dropdown" data-v-menu-item data-v-class-if-has-dropdown="category.children > 0">

            <a class="nav-link" href="#" data-v-class-if-dropdown-toggle="category.children > 0" aria-haspopup="true" aria-expanded="false" data-v-menu-item-url>
              <span data-v-menu-item-name>Resources</span>
            </a>

            <div class="dropdown-menu" data-v-menu-item-recursive>
              <div data-v-menu-item class="nav-item" data-v-menu-item data-v-class-if-dropdown="category.children > 0">
                <a class="dropdown-item" href="https://github.com/givanz/VvvebJs/wiki" data-v-menu-item-url>
                  <span data-v-menu-item-name>User Documentation</span>
                </a>
              </div>
              <div data-v-menu-item class="nav-item" data-v-menu-item data-v-class-if-dropdown="category.children > 0">
                <a class="dropdown-item" href="https://github.com/givanz/VvvebJs/wiki" data-v-menu-item-url>
                  <span data-v-menu-item-name>Developer Documentation</span>
                </a>
              </div>
            </div>
          </li>
          <li class="nav-item" data-v-menu-item>
            <a class="nav-link" href="https://blog.vvveb.com" data-v-menu-item-url>
              <span data-v-menu-item-name>Blog</span>
            </a>
          </li>
          <li class="nav-item" data-v-menu-item>
            <a class="nav-link" href="https://www.vvveb.com/page/contact" data-v-menu-item-url>
              <span data-v-menu-item-name>Contact</span>
            </a>
          </li>

          <li class="nav-item" data-v-menu-item>
            <a class="nav-link" href="index.html" data-v-menu-item-url>
              <span data-v-menu-item-name>Home</span>
            </a>
          </li>
          <li class="nav-item" data-v-menu-item>
            <a class="nav-link" href="about.html" data-v-menu-item-url>
              <span data-v-menu-item-name>About</span>
            </a>
          </li>
          <li class="nav-item" data-v-menu-item>
            <a class="nav-link" href="contact.html" data-v-menu-item-url>
              <span data-v-menu-item-name>Contact</span>
            </a>
          </li>

        </ul>
      </div>
    </nav>
  </div>
</section>`
});Vvveb.Sections.add("albert/project", {
    name: "Project",
    image: Vvveb.themeBaseUrl + "/screenshots/albert/project-thumb.jpeg",
    html: `<section class="project">
  <div class="container">
    <h4 class="font-sm">My Selected Work
      <div class="deep-dot"></div>
    </h4>
    <div class="row">
      <div class="col-lg-4 col-md-6 col-sm-12 project-content">
        <div class="project-work">
          <div class="project-work-image">
            <img src="images/project-img-1.jpg" alt="">
          </div>
          <div class="project-work-text">
            <h5 class="font-mini">
              <a href="#">Eduguard - E-learning Website</a>
            </h5>
            <a href="#" class="right-arrow-icon">
              <span>View Project</span>
              <svg width="36" height="24" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M33 12.03H3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M27.95 4.80005L34 12.0288L27.95 19.2588" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 col-sm-12 project-content">
        <div class="project-work">
          <div class="project-work-image">
            <img src="images/project-img-2.jpg" alt="">
          </div>
          <div class="project-work-text">
            <h5 class="font-mini">
              <a href="#">Eduguard - E-learning Website</a>
            </h5>
            <a href="#" class="right-arrow-icon">
              <span>View Project</span>
              <svg width="36" height="24" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M33 12.03H3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M27.95 4.80005L34 12.0288L27.95 19.2588" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 col-sm-12 project-content">
        <div class="project-work">
          <div class="project-work-image">
            <img src="images/project-img-3.jpg" alt="">
          </div>
          <div class="project-work-text">
            <h5 class="font-mini">
              <a href="#">Huma Marketing Agency</a>
            </h5>
            <a href="#" class="right-arrow-icon">
              <span>View Project</span>
              <svg width="36" height="24" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M33 12.03H3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M27.95 4.80005L34 12.0288L27.95 19.2588" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 col-sm-12 project-content">
        <div class="project-work">
          <div class="project-work-image">
            <img src="images/project-img-2.jpg" alt="">
          </div>
          <div class="project-work-text">
            <h5 class="font-mini">
              <a href="#">Huma Marketing Agency</a>
            </h5>
            <a href="#" class="right-arrow-icon">
              <span>View Project</span>
              <svg width="36" height="24" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M33 12.03H3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M27.95 4.80005L34 12.0288L27.95 19.2588" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 col-sm-12 project-content">
        <div class="project-work">
          <div class="project-work-image">
            <img src="images/project-img-1.jpg" alt="">
          </div>
          <div class="project-work-text">
            <h5 class="font-mini">
              <a href="#">Huma Marketing Agency</a>
            </h5>
            <a href="#" class="right-arrow-icon">
              <span>View Project</span>
              <svg width="36" height="24" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M33 12.03H3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M27.95 4.80005L34 12.0288L27.95 19.2588" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 col-sm-12 ">
        <div class="project-work">
          <div class="project-work-image">
            <img src="images/project-img-2.jpg" alt="">
          </div>
          <div class="project-work-text">
            <h5 class="font-mini">
              <a href="#">Huma Marketing Agency</a>
            </h5>
            <a href="#" class="right-arrow-icon">
              <span>View Project</span>
              <svg width="36" height="24" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M33 12.03H3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M27.95 4.80005L34 12.0288L27.95 19.2588" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`
});Vvveb.Sections.add("albert/service", {
    name: "Service",
    image: Vvveb.themeBaseUrl + "/screenshots/albert/service-thumb.jpeg",
    html: `<section class="service">
  <div class="container">
    <div class="service-text">
      <h4 class="font-sm">My Service
        <div class="deep-dot"></div>
      </h4>
    </div>
    <div class="row">
      <div class="col-lg-3 col-md-6 col-sm-12">
        <div class="service-content-area">
          <div class="layer-svg">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 3.33325L3.33334 11.6666L20 19.9999L36.6667 11.6666L20 3.33325Z" stroke="black" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M3.33334 28.3333L20 36.6666L36.6667 28.3333" stroke="black" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M3.33334 20L20 28.3333L36.6667 20" stroke="black" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </div>
          <p class="font-xs"> UI/UX </p>
          <p class="font-xs"> DESIGN </p>
          <span class="light-dot"></span>
          <a href="#" class="right-arrow-icon">
            <span>Disscuss now</span>
            <svg width="36" height="24" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M33 12.03H3" stroke="#0A1931" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M27.95 4.80005L34 12.0288L27.95 19.2588" stroke="#0A1931" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </a>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-12">
        <div class="service-content-area">
          <div class="layer-svg">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 3.33325L3.33334 11.6666L20 19.9999L36.6667 11.6666L20 3.33325Z" stroke="black" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M3.33334 28.3333L20 36.6666L36.6667 28.3333" stroke="black" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M3.33334 20L20 28.3333L36.6667 20" stroke="black" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </div>
          <p class="font-xs"> UI/UX </p>
          <p class="font-xs"> DESIGN </p>
          <span class="light-dot"></span>
          <a href="#" class="right-arrow-icon">
            <span>Disscuss now</span>
            <svg width="36" height="24" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M33 12.03H3" stroke="#0A1931" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M27.95 4.80005L34 12.0288L27.95 19.2588" stroke="#0A1931" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </a>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-12">
        <div class="service-content-area">
          <div class="layer-svg">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 3.33325L3.33334 11.6666L20 19.9999L36.6667 11.6666L20 3.33325Z" stroke="black" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M3.33334 28.3333L20 36.6666L36.6667 28.3333" stroke="black" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M3.33334 20L20 28.3333L36.6667 20" stroke="black" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </div>
          <p class="font-xs"> UI/UX </p>
          <p class="font-xs"> DESIGN </p>
          <span class="light-dot"></span>
          <a href="#" class="right-arrow-icon">
            <span>Disscuss now</span>
            <svg width="36" height="24" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M33 12.03H3" stroke="#0A1931" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M27.95 4.80005L34 12.0288L27.95 19.2588" stroke="#0A1931" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </a>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-12">
        <div class="service-content-area">
          <div class="layer-svg">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 3.33325L3.33334 11.6666L20 19.9999L36.6667 11.6666L20 3.33325Z" stroke="black" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M3.33334 28.3333L20 36.6666L36.6667 28.3333" stroke="black" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M3.33334 20L20 28.3333L36.6667 20" stroke="black" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </div>
          <p class="font-xs"> UI/UX </p>
          <p class="font-xs"> DESIGN </p>
          <span class="light-dot"></span>
          <a href="#" class="right-arrow-icon">
            <span>Disscuss now</span>
            <svg width="36" height="24" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M33 12.03H3" stroke="#0A1931" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M27.95 4.80005L34 12.0288L27.95 19.2588" stroke="#0A1931" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>`
});Vvveb.Sections.add("albert/testimonial", {
    name: "Testimonial",
    image: Vvveb.themeBaseUrl + "/screenshots/albert/testimonial-thumb.jpeg",
    html: `<section class="call-action">
  <div class="container">
    <div class="call-action-content">
      <h4>Got a Project in Mind? Let's Make</h4>
      <h4>Something Awesome Together.</h4>
      <a href="#" class="btn btn--primary">
        Hire Me
        <svg width="33" height="24" viewBox="0 0 33 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M31 12.025H1" stroke="#DFE3EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M25.9502 6.00006L32.0002 12.0241L25.9502 18.0491" stroke="#DFE3EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </a>
      <img class="call-ac-shape-1" src="images/call-sm-shape.png" alt="shape">
      <img class="call-ac-dot-1" src="images/call-dot-1.png" alt="dot">
      <img class="call-ac-dot-2" src="images/call-dot-1.png" alt="dot">
      <img class="call-ac-shape-2" src="images/call-lg-shape.png" alt="dot">
    </div>
  </div>
</section>`
});
	Vvveb.SectionsGroup["Albert"] = ["albert/about","albert/banner","albert/blog","albert/call-action","albert/company","albert/contact","albert/footer","albert/header","albert/project","albert/service","albert/testimonial"];
