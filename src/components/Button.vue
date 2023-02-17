<template>
    <!-- <button 
    @click="onClick()" 
    :style="{background: color}"
    class="btn" 
    data-bs-target="#collapseTarget" 
    data-bs-toggle="collapse" >
        {{ text }}
    </button> -->

    <div
    @click="onClick()" 
    :style="{color: color}"     
    class="btn-tog "
    data-bs-target="#collapseTarget" 
    data-bs-toggle="collapse" >
        <font-awesome-icon :icon="icon" />
        {{ text }}
    </div>
</template>

<script>
// import { faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons'

export default {
    name : 'Button',
    props: {
        text: String,
        color: String,
        icon: {
            type: String,
            default: 'faToggleOff',
        }
    },
    methods: {
        onClick(){
            this.$emit('btn-click')
        },
    },
}
</script>

<style scoped>
    .btn-tog{
        height: 40px;
        color:#fff;
        box-shadow: 1px 2px 4px #fafafa;
        /* text-shadow: 2px 2px #fff; */
        font-weight: bold;
        font-size: 1.6rem;
        cursor: pointer;
        padding: 0px 7px 3px 7px;
        border-radius: 100px;

    }
</style>
