<template>
    <div class="products">
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
        <h1>Products</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, ipsa porro itaque ad reiciendis, quas eaque, modi
            libero corrupti assumenda ut obcaecati mollitia nostrum fuga officiis minima laudantium vero consequuntur?</p>
    </div>
</template>
<script setup>

</script>

<style scoped>
.products {
    text-align: center;
    padding: 20px;
}
.products .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.products .logo {
    font-family: "Bodoni Moda", serif;
    text-transform: uppercase;
    padding: 10px;
    color: rgb(59, 59, 59);

}

.logo .moba {
    text-decoration: none;
    color: rgb(86, 86, 86);
}

.logo h1:hover {
    color: #ff4200;
    cursor: pointer;
}

.products .link {
    position: relative;
}

.products .link:hover .icon span:nth-child(2) {
    width: 100%;
}

.products .link .icon {
    width: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
}

.products .moha {
    text-decoration: none;
}

.products .link .icon span {
    background-color: black;
    margin: 5px;
    border-radius: 10px;
}

.products .link .icon span:first-child {
    height: 2px;
    width: 100%;
}

.products .link .icon span:nth-child(2) {
    height: 2px;
    width: 60%;
}

.products .link .icon span:nth-last-child(2) {
    height: 2px;
    width: 100%;

}

.products .link ul {
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

.products .link ul::before {
    content: "";
    content: "";
    border-width: 10px;
    border-style: solid;
    border-color: transparent transparent #f6f6f6 transparent;
    position: absolute;
    right: 5px;
    top: -20px;
}

.products .link ul li a {
    display: block;
    padding: 15px;
    text-decoration: none;
    color: black;
    transition: 0.3s;
}

.products .link ul li a:hover {
    padding-left: 25px;
}

.products .link ul li:not(:last-child) a {
    border-bottom: 1px solid black;
}

.products .link:hover ul {
    display: block;
}

.products h1 {
    font-size: 80px;
}
.products p {
    width: 80%;
    font-size: 20px;
    margin: auto;
}
.products2{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-left: 100px;
    margin: auto;
    margin-left: 150px;
}
@media (max-width:800px ) {
    .card{
        margin: 50px;
    }
    .products2{
    margin-left: 0;
    align-items: center;
    margin: auto;
    }
}
.card {
    margin: auto 50px;
    margin-top: 20px;
    box-shadow: #cfcfcf;
}
.card .btn {
    background-color: #e6ba38;
    color: black;
    font-weight: 600;
}
.card .btn:hover {
    background-color: #ddd;
    color: black;
    font-weight: 600;
}
</style>