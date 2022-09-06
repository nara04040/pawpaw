<template>
    <footer>
        <div class="inner">
        <h3>만든이들</h3>
        <ul>
            <li>
                <img src="@/assets/images/footer1.png" alt="">
                <p>도영희</p>
            </li>
            <li>
                <img src="@/assets/images/footer1.png" alt="">
                <p>도영희</p>
            </li>
            <li>
                <img src="@/assets/images/footer1.png" alt="">
                <p>도영희</p>
            </li>
            <li>
                <img src="@/assets/images/footer1.png" alt="">
                <p>도영희</p>
            </li>
        </ul>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
        </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
footer {
    background-color: skyblue;
    font-size: 20px;
}
footer .inner{
    width: 1400px;
    margin: 0 auto;
}
ul li{
    display: inline-block;
    font-size: 0;
    width: 25%;
}
ul li:last-child{
    margin: 0;
}
ul li p{
    margin: 20px 0;
    font-size: 30px;
    color: red;
    font-weight: 700;
}
</style>
