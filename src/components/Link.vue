<template>
    <div class="row d-flex" style="">
        
        <a :href="link.link" target="_blank" class="col-md-8">          
        <div class=" linktext">
            <h4>
                    {{ link.text }}
                
                <!-- <i @click="$emit('delete-link',link.id)" class="fas fa-times"></i> -->
            </h4>
        </div>
        </a>
        <div class="col-md-2 text-center">
            <!-- <font-awesome-icon icon="link" class="text-white" /> -->
            <router-link class="a" :to="{ path: `/edit/${link.id}` }"  title="Add Link">
            <!-- <a :href="/edit + link.id"> -->
                <font-awesome-icon icon="pencil-alt" class="text-white" style="cursor:pointer" />
            <!-- </a> -->
            </router-link>
        </div>
        <div class="col-md-2 text-center">
            <font-awesome-icon icon="trash" @click="$emit('delete-link',link.id)" class="fas" />
        </div>
        <!-- <p class="">{{ link.link }}</p> -->
    </div>
</template>

<script>

export default {
    name: 'Link',
    props: {
        link: Object,
    },
}
</script>

<style scoped>
    /* .link{
        background: #f4f4f4;
        margin: 5px;
        padding: 0px 12px;
        cursor: pointer;
    } */

    a{
        color:#fafafa;
        text-decoration: none;
        /* text-align: center; */
        display: inline;
    }

    a:hover{
        color:#198754;
    }

    .link h4{
        /* display: flex; */
        align-items: center;
        justify-content: space-between;
        /* text-align: center; */
    }

    .fas{
        color:#f00;
        /* display: flex; */
        cursor: pointer;
    }

    .linktext{
        text-align: center;
    }
</style>