<script setup>
</script>



<template>
    <!-- start landing -->
    <main>
        <link rel="stylesheet" href="../components/wow/animate.css">
        <div class="header">
            <div class="container">
                <div class="logo">
                    <RouterLink class="moba" to="/">
                        <h1>vz</h1>
                    </RouterLink>
                </div>
                <div class="link">
                    <span class="icon">
                        <span></span>
                        <span></span>
                        <span></span>
                        <ul>
                            <RouterLink to="/" class="moha">
                                <li><a href="/">Home</a></li>
                            </RouterLink>
                            <RouterLink to="/about" class="moha">
                                <li><a href="/about">About</a></li>
                            </RouterLink>
                            <RouterLink to="/help" class="moha">
                                <li><a href="/help">Products</a></li>
                            </RouterLink>
                            <RouterLink to="/" class="moha">
                                <li><a href="/">Blog</a></li>
                            </RouterLink>
                        </ul>
                    </span>
                </div>

            </div>


        </div>
        <div class="text-header">
            <h2>vanzer</h2>
            <p>free creative psd template for you</p>
            <RouterLink to="/" class="read-more">read more <svg class="icon1" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512">
                    <path
                        d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                </svg></RouterLink>
        </div>
    </main>
    <!-- end landing -->
    <!-- start about -->
    <div class="about">
        <div class="h1">
            <h1 class="h11 animate_fadeIn">creative</h1>
            <h1 class="h12">studio</h1>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, beatae. Libero aliquid, suscipit consectetur
            accusantium dolorum explicabo rem sequi laborum odit, repudiandae cum ullam commodi sunt ea! Unde, eos incidunt.
        </p>
    </div>
    <!-- end about -->
    <!-- start servesis -->
    <div class="serves">
        <div class="serve-container">
            <div class="text">
                <h1>services</h1>
                <p class="p1">industrial design</p>
                <p>web design</p>
                <p>photography</p>
            </div>
            <div class="text2">

                <p class="p2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores dolore eaque, deserunt
                    perferendis quod libero quam beatae quaerat iste eum consequatur vero voluptas reiciendis dicta. Ipsa
                    commodi ut perferendis distinctio!</p>
            </div>
        </div>
    </div>
    <!-- end servesis -->
    <!-- start port -->
    <div class="serves port">
        <div class="serve-container">
            <div class="text">
                <h1>Portfolio</h1>
            </div>
            <div class="imgs">
                <div class="img1">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p><img src="../components/imgs/port1.jpg"
                        alt="">
                </div>
                <div class="img2"><img src="../components/imgs/port2.jpg" alt="">
                    <h3>coffe cup</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed libero natus quod cumque accusamus
                        recusandae error aperiam hic laboriosam atque.</p>
                </div>
                <div class="img3">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa distinctio.</p><img class="img3"
                        src="../components/imgs/port3.jpg" alt="">
                </div>
            </div>
        </div>
    </div>
    <!-- end port -->
    <!-- start contact -->
    <div class="serves contact">
        <div class="serve-container">
            <div class="text">
                <h1>contact</h1>
                <div class="mail">
                    <p class="em"><svg class="ema" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="#ffffff"
                                d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
                        </svg>E-Mail</p>
                    <p>******@gmail.com</p>
                </div>
                <div class="phone mail">
                    <p class="pho em">
                        <svg class="pho ema" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="#ffffff"
                                d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                        </svg>phone
                    </p>
                    <p>76765 423425 242</p>
                </div>
                <div class="phone mail">
                    <p class="pho em">
                        <svg class="ema" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                            <path fill="#ffffff"
                                d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                        </svg>address
                    </p>
                    <p>123 Maple Street, Greenfield, CA 93927, USA</p>
                    <p>456 Oak Avenue, Lakeside, NY 12345, USA</p>
                </div>
            </div>
            <!--Section: Contact v.2-->
            <div class="contact-form">
                <section class="mb-4">
                    <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to
                        contact us directly. Our team will come back to you within
                        a matter of hours to help you.</p>

                    <div class="row">

                        <!--Grid column-->
                        <div class="col-md-9 mb-md-0 mb-5">
                            <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                                <!--Grid row-->
                                <div class="row">

                                    <!--Grid column-->
                                    <div class="col-md-6">
                                        <div class="md-form mb-0">
                                            <input type="text" id="name" name="name" class="form-control">
                                            <label for="name" class="">Your name</label>
                                        </div>
                                    </div>
                                    <!--Grid column-->

                                    <!--Grid column-->
                                    <div class="col-md-6">
                                        <div class="md-form mb-0">
                                            <input type="text" id="email" name="email" class="form-control">
                                            <label for="email" class="">Your email</label>
                                        </div>
                                    </div>
                                    <!--Grid column-->

                                </div>
                                <!--Grid row-->

                                <!--Grid row-->
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="md-form mb-0">
                                            <input type="text" id="subject" name="subject" class="form-control">
                                            <label for="subject" class="">Subject</label>
                                        </div>
                                    </div>
                                </div>
                                <!--Grid row-->

                                <!--Grid row-->
                                <div class="row">

                                    <!--Grid column-->
                                    <div class="col-md-12">

                                        <div class="md-form">
                                            <textarea type="text" id="message" name="message" rows="2"
                                                class="form-control md-textarea"></textarea>
                                            <label for="message">Your message</label>
                                        </div>

                                    </div>
                                </div>
                                <!--Grid row-->

                            </form>

                            <div class="text-center text-md-left">
                                <a class="btn btn-primary"
                                    onclick="document.getElementById('contact-form').submit();">Send</a>
                            </div>
                            <div class="status"></div>
                        </div>
                        <!--Grid column-->
                    </div>
                </section>
            </div>
            <!--Section: Contact v.2-->
        </div>
    </div>
    <!-- end contact -->
    <!-- start footer -->
    <footer class="bg-body-tertiary text-center text-lg-start">
        <!-- Copyright -->
        <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.05);">
            © 2020 Copyright:
            <a class="text-body" href="https://mdbootstrap.com/">MDBootstrap.com</a>
        </div>
        <!-- Copyright -->
    </footer>
    <!-- end footer -->
</template>

<style>
/* start landing */

main {
    height: 100vh;
    width: 100%;
    background-image: url('../components/imgs/landing-img.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 999;
}

.header {
    padding: 10px;
    background-color: transparent;
    z-index: 1;
}

.text-header {
    position: relative;
    top: 200px;
    left: 450px;
    display: flex;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    width: 30%;
}

.text-header .icon1 {
    width: 20px;
}

.text-header h2 {
    position: relative;
    left: -70px;
    font-size: 80px;
    color: #f6f6f6;
    text-transform: uppercase;
    letter-spacing: 2rem;
}

.text-header p {
    color: #9f9f9f;
    position: relative;
    left: -120px;
    font-size: 15px;
    word-spacing: .4rem;
    text-transform: uppercase;
    padding-bottom: 30px;
}

.text-header .read-more {
    text-decoration: none;
    font-size: 20px;
    border-top: 2px #ff4200 solid;
    width: 40%;
    padding-top: 20px;
    color: aliceblue;
}

@media (max-width:800px) {
    main {
        height: 100vh;
        width: 100%;
        background-image: url('../components/imgs/moby-header.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        z-index: 999;
    }

    .text-header h2 {
        left: 0;
        font-size: 50px;
        letter-spacing: 1rem;
        display: flex;
    }

    .text-header p {
        left: 0;
        width: 300px;
        padding-bottom: 20px;
        padding-top: 20px;
    }

    .text-header .read-more {
        width: 150px;
        padding: 10px;
        position: relative;
        left: 20px;
    }

    .text-header {
        left: 40px;
        top: 200px;
        width: 70%;
    }
}

.text-header .read-more:hover {
    color: #ff4200;
}

.header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;

}

.header .logo {
    font-family: "Bodoni Moda", serif;
    text-transform: uppercase;
    padding: 10px;
    color: white;

}

.logo .moba {
    text-decoration: none;
    color: white;
}

.logo h1:hover {
    color: #ff4200;
    cursor: pointer;
}

.header .link {
    position: relative;
}

.header .link:hover .icon span:nth-child(2) {
    width: 100%;
}

.header .link .icon {
    width: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
}

.header .moha {
    text-decoration: none;
}

.header .link .icon span {
    background-color: white;
    margin: 5px;
    border-radius: 10px;
}

.header .link .icon span:first-child {
    height: 2px;
    width: 100%;
}

.header .link .icon span:nth-child(2) {
    height: 2px;
    width: 60%;
}

.header .link .icon span:nth-last-child(2) {
    height: 2px;
    width: 100%;

}

.header .link ul {
    list-style: none;
    margin: 0;
    padding: 0;
    background-color: #f6f6f6;
    position: absolute;
    right: 0;
    min-width: 200px;
    top: calc(100% + 15px);
    display: none;
}

.header .link ul::before {
    content: "";
    content: "";
    border-width: 10px;
    border-style: solid;
    border-color: transparent transparent #f6f6f6 transparent;
    position: absolute;
    right: 5px;
    top: -20px;
}

.header .link ul li a {
    display: block;
    padding: 15px;
    text-decoration: none;
    color: black;
    transition: 0.3s;
}

.header .link ul li a:hover {
    padding-left: 25px;
}

.header .link ul li:not(:last-child) a {
    border-bottom: 1px solid black;
}

.header .link:hover ul {
    display: block;
}

/* end landing */
/* start about */
.about {
    height: 100vh;
    width: 100%;
    background-image: url('../components/imgs/about-img.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.about .h1 {
    display: flex;
    flex-direction: row;
}

.about .h11 {
    color: #ff4200;
    margin-right: 5px;
    font-size: 70px;
    letter-spacing: 1.3rem;
}

.about .h12 {
    color: rgb(19, 19, 19);
    margin-left: 5px;
    font-size: 70px;
    letter-spacing: 1.3rem;
}

.about p {
    position: relative;
    top: 200px;
    width: 600px;
    border-top: 2px solid #9f9f9f;
    font-size: 14px;
    padding: 15px;
}

@media (max-width:800px) {
    .about .h11 {
        font-size: 30px;
        letter-spacing: .3rem;
    }

    .about .h12 {
        font-size: 30px;
        letter-spacing: .3rem;
    }

    .about p {
        width: 300px;
    }
}

/* end about */
/* start servises */
.serves {
    height: 100vh;
    width: 100%;
    background-image: url('../components/imgs/serve.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    overflow: hidden;
    align-items: center;
}

.serves .serve-container {
    width: 80%;
    height: 80%;
    display: flex;
}

.serves .text {
    text-align: start;
}

.text h1 {
    color: #f6f6f6;
    border-bottom: 3px #ff4200 solid;
    font-size: 70px;
    letter-spacing: 1.5rem;
    padding-bottom: 25px;
    text-transform: uppercase;
}

.text p {
    color: #9f9f9f;
    padding-top: 5px;
    text-transform: uppercase;
    font-size: 16px;
    cursor: pointer;
}

.text .p1 {
    margin-top: 50px;
}

.text p:hover {
    color: #ff4200;
}

.serve-container .p2 {
    position: relative;
    text-align: right;
    top: 500px;
    left: 200px;
    width: 400px;
    color: #9f9f9f;
    font-size: 16px;
}

@media (max-width:900px) {
    .serve-container .p2 {
        content: '';
        width: 300px;
        left: -300px;
    }
}

.text-container .p2 {
    display: flex;
}

@media (max-width:800px) {
    .text h1 {
        font-size: 30px;
        letter-spacing: .3rem;
    }

    .text p {
        width: 300px;
    }
}

/* end servises */
/* start port */
.port {
    background-image: url('../components/imgs/port-main.jpg');
    height: 100vh;
    width: 100%;
    background-size: cover;
    overflow: hidden;
}

.port .serve-container {
    display: flex;
    flex-direction: column;
}

.port h1 {
    color: #f6f6f6;
    border-bottom: 3px #ff4200 solid;
    font-size: 60px;
    letter-spacing: 1.2rem;
    padding-bottom: 25px;
    text-transform: uppercase;
    width: 500px;
    margin-bottom: 100px;
}

.port .imgs {
    margin: auto;
    display: flex;
    flex-direction: row;
    position: relative;
    top: 30px;
}
.port .imgs img:hover{
        transform: scale(1.1);
        border-radius: 20px;
    }
@media (max-width:700px) {
    .port .imgs{
        content: '';
        top: -100px;
    }
    .port .imgs img:hover{
        transform: scale(1.1);
        border-radius: 20px;
    }
}
@media (max-width: 900px) {
    .port .imgs {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }

    .port .imgs p {
        display: none;
    }

    .port .imgs h3 {
        display: none;
    }

    .port .img3 {
        position: relative;
        top: -90px;
    }

    .port h1 {
        font-size: 30px;
        letter-spacing: .3rem;
        width: 80%;
    }
}

.port .imgs h3 {
    text-align: center;
    position: relative;
    font-size: 30px;
    color: #f6f6f6;
}

.port .imgs p {
    text-align: center;
    position: relative;
    left: 30px;
}

.port img {
    width: 15rem;
    height: 15rem;
    margin: 15px;
}

.port .img2 {
    position: relative;
    top: -90px;
}

.port p {
    width: 200px;
    color: #9f9f9f;
}

.port .img3 {
    height: 20rem;
}

/* end port */
/* start contact */
.contact {
    background-image: url('../components/imgs/contact.jpg');
    height: 100vh;
    width: 100%;
    background-size: cover;
    overflow: hidden;
}

.contact h1 {
    font-size: 60px;
}

.contact .mail .ema {
    width: 30px;
    margin: 10px;
}

.contact .mail .em {
    font-size: 20px;
    position: relative;
    top: 0;
    left: 40px;
    text-transform: uppercase;
    font-weight: 700;
}
@media (max-width:800px) {
    .contact .mail .em {
        left: 20px;
    }
    .contact .mail p{
        left: -90px;
    }
}

.contact .mail p {
    position: relative;
    left: 90px;
    width: 250px;
}

.contact .contact-form {
    background-image: url('../components/imgs/maps-bg.jpg');
    height: 100vh;
    width: 90%;
    background-size: cover;
    position: relative;
    top: -80px;
    left: 130px;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

@media (max-width:1000px) {
    .contact h1 {
        font-size: 30px;
        letter-spacing: .3rem;
    }

    .contact .contact-form {
        display: none;
    }
}

.mx-auto {
    font-weight: 800;
    width: 500px;
    position: relative;
    left: -100px;
}

.mb-4 {
    position: relative;
    left: 100px;
}

/* end contact */</style>
