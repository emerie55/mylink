<template>
    <div class="container">
        <div class="row  mx-4 mx-auto d-flex justify-content-center mt-5">
            <div class="col-md-6 mainrow d-flex justify-content-center">
                <div class="imgbox">
                    <h2 class="h2"><i>Emerie</i></h2>
                    <img src="../assets/3.jpeg" alt="" class="img">
                </div>
            </div>
        </div>
        <div class="row mx-4 mx-auto d-flex justify-content-center my-3">
            <div class="col-md-6 d-flex justify-content-center">
                <h3 class="text-white">@emerieinno</h3>
            </div>
        </div>
        <div class="row mx-4 mx-auto d-flex justify-content-center my-3">
            <div class="col-md-6 d-flex justify-content-center">
                <p class="" style="color:#ddd; text-align: center;">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, praesentium esse ab quis rerum obcaecati qui, nulla perspiciatis earum molestias dolorem soluta quia odit veniam dicta? Deserunt, eos. Assumenda, ut. <font-awesome-icon icon="smile" class="text-warning" />
                </p>
            </div>
        </div>
        <div class="row mx-4 mx-auto d-flex justify-content-center my-3">
            <div class="col-md-6">
                <div :key="link.id" v-for="link in links" class="linksbox">
                    <Link @edit-link="$emit('edit-link', link.id)" @delete-link="$emit('delete-link', link.id)" :link="link"  class="links"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Link from './Link'
export default {
    name: 'Links',
    props: {
        links: Array
    },
    components: {
        Link
    },
    emits: ['delete-link', 'edit-link'],
}
</script>

<style scoped>
.mainrow{
    margin-top: 70px;
}

.linksbox{
    margin: 20px 0px;
    padding:15px 15px 7px 15px;
    color:#fafafa;
    background: #444;
    /* box-shadow: 1px 2px 4px #222; */
    box-shadow: 4px 6px 8px #000;
    border-radius: 10px;
    overflow:hidden;
    /* background: #f63; */
 }

 .links{
    transform: scale(1);
    /* transform: translateY(0); */
    transition: .5s ease-in-out;
 }

 .linksbox:hover .links{
    /* padding:15px 15px 7px 15px; */
    background: #444;
    border-radius: 10px;;
    transform: scale(1.1);
    /* transform: translateY(300px); */
    
 }

 .imgbox{
    width: 160px;
    border-radius: 100px;
    box-shadow: 4px 6px 8px #000;
    overflow:hidden;
    background:#198754;
    text-align: center;
    position: relative;
 }

 .img{
    width: inherit;
    border-radius: 100px;
    transition: .5s ease-in-out;
 }

 .h2{
    display: none;
    position: absolute;
    top:40px;
    left:30px;
    color:#fff;
    transition: .5s ease-in-out;
 }

 .imgbox:hover .img{
    transform: translateY(100px);
 }

 .imgbox:hover .h2{
    display: block;
 }
</style>