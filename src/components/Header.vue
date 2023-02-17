<template>
    <header class="container fixed-top align-items-center  header-transparent">
        <div class="row">
            <div class="col-md-4">
                <h1> <font-awesome-icon icon="link" class="text-success" />{{ title }}</h1>
            </div>
            <div class="col-md-4">
                <router-link class="a" to="/" ><font-awesome-icon icon="home" class="text-success" /></router-link>
            </div>
            <div class="col-md-4 move1 d-flex justify-content-center">
                <Button 
                @btn-click="$emit('toggle-add-task')" :icon="showAddTask ? 'toggle-on' : 'toggle-off'"  :color="showAddTask ? 'red' : '#198754'" class="move2" />

                <!-- :text="showAddTask ? 'Close' : 'Add Link'" -->
            </div>
        </div>
    </header>
</template>


<script>
import Button from './Button'

export default {
    name: 'Header',
    props: {
        title: String,
        showAddTask: Boolean
    },
    components:{
        Button
    },
    computed: {
        homePage(){
            if(this.$route.path === '/'){
                return true
            }else{
                return false
            }
        }
    }
}
</script>

<style scoped>
header{
    margin-top: 10px;
    margin-bottom: 100px;
}
 h1{
    color: #fff;
    font-size: 1.7rem;
    font-weight: bold;
    /* text-shadow: 2px 3px #444; */
 }

 .move1{
    position: relative;
 }

 .move2{
    position: absolute;
    bottom: 0px;
    right: 50px;
 }

 .a{
        color:#fafafa;
        text-decoration: none;
        font-size: 1.3rem;
        /* text-align: center; */
        /* display: inline; */
    }
</style>

