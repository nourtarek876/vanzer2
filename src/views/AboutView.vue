<template>
        <div class="main-about">
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
                                <li><a href="/help">Help</a></li>
                            </RouterLink>
                            <RouterLink to="/" class="moha">
                                <li><a href="/">Blog</a></li>
                            </RouterLink>
                        </ul>
                    </span>
                </div>

            </div>
            <h1>About Us</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi dolore, porro nisi officia quisquam animi,
                tempora
                minima impedit saepe corporis dignissimos fugit ipsam ipsum est repellat eveniet ab nesciunt nulla?</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita ad veniam laudantium corrupti quidem
                asperiores molestiae hic distinctio! Non aliquam facere vero repellat maiores possimus obcaecati accusamus
                quos corporis beatae!
                Tenetur impedit voluptatum eos facilis autem qui, repellat molestiae, suscipit facere assumenda, voluptatem
                nesciunt amet id quas quisquam aliquid minima magni commodi ipsa blanditiis aspernatur. Maiores omnis animi
                accusantium sint.
                Alias quod id nemo perferendis esse repellat? Nobis magni illo ex, porro error maxime aperiam perspiciatis
                quisquam labore, voluptatem pariatur ipsum? Debitis, libero vero itaque facilis cum exercitationem excepturi
                labore!</p>
        </div>
</template>

<style scoped>

.main-about .container {
    display: flex;
    justify-content: space-between;
    align-items: center;

}

.main-about .logo {
    font-family: "Bodoni Moda", serif;
    text-transform: uppercase;
    padding: 10px;
    color: white;

}

.logo .moba {
    text-decoration: none;
    color: rgb(87, 87, 87);
}

.logo h1:hover {
    color: #ff4200;
    cursor: pointer;
}

.main-about .link {
    position: relative;
}

.main-about .link:hover .icon span:nth-child(2) {
    width: 100%;
}

.main-about .link .icon {
    width: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
}

.main-about .moha {
    text-decoration: none;
}

.main-about .link .icon span {
    background-color: black;
    margin: 5px;
    border-radius: 10px;
}

.main-about .link .icon span:first-child {
    height: 2px;
    width: 100%;
}

.main-about .link .icon span:nth-child(2) {
    height: 2px;
    width: 60%;
}

.main-about .link .icon span:nth-last-child(2) {
    height: 2px;
    width: 100%;

}

.main-about .link ul {
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

.main-about .link ul::before {
    content: "";
    content: "";
    border-width: 10px;
    border-style: solid;
    border-color: transparent transparent #f6f6f6 transparent;
    position: absolute;
    right: 5px;
    top: -20px;
}

.main-about .link ul li a {
    display: block;
    padding: 15px;
    text-decoration: none;
    color: black;
    transition: 0.3s;
}

.main-about .link ul li a:hover {
    padding-left: 25px;
}

.main-about .link ul li:not(:last-child) a {
    border-bottom: 1px solid black;
}

.main-about .link:hover ul {
    display: block;
}


.main-about h1 {
    text-align: center;
    font-size: 40px;
}

.main-about p {
    line-height: 2rem;
    font-weight: 400;
    font-size: 20px;
}
</style>


<script setup>
</script>