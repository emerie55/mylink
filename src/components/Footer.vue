<template>
    <footer>
        <p> &copy; <font-awesome-icon icon="link" class="text-success" />Links 2023</p>
        <!-- <router-link class="a" to="/about"><font-awesome-icon icon="info-circle" /></router-link> -->
        <!-- <a href="/about" class="a">About</a> -->
    </footer>
</template>

<script>
export default {
    name: 'Footer',
}
</script>

<style scoped>
 .a{
    /* color: #fff; */
    color: #198754;
    font-size:1.7rem;
 }
 footer{
    color: #fff;
    margin-top: 30px;
    margin-bottom: 0px !important;
    text-align: center;
    /* background: #ccc; */
    /* border-top: 1px solid #ccc; */
    padding-top: 10px;
 }
</style>