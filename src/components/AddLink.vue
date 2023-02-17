<template>
    <div class="container">
        <div class="row mx-4 mx-auto d-flex justify-content-center my-5">
            <div class="col-md-4">
                <h3 class="my-4"> <font-awesome-icon icon="plus" /> {{ title }}</h3>       
                <form @submit="onSubmit" class="add-form" action="">
                    <div class="form-group">
                        <label for=""><font-awesome-icon icon="pencil" /> Name</label>
                        <input type="text" v-model="text" class="form-control" name="text" placeholder="Link Name">
                    </div>
                    <div class="form-group">
                        <label for=""><font-awesome-icon icon="link" /> Link</label>
                        <input type="text" v-model="link" name="link" class="form-control" placeholder="Add Link">
                    </div>
                    
                    <input type="submit" value="Save Link" class="btn btn-lg bg-success text-white font-weight-bold">
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AddLink',
    props: {
        title: String,
    },
    data() {
        return{
            text: '',
            link: ''
        }
    },
    methods: {
        onSubmit(e) {
            e.preventDefault()

            if(!this.text){
                alert('Please add a link')
                return
            }
            const newLink = {
                // id : Math.floor(Math.random() * 100000),
                text: this.text,
                link: this.link
            }
            this.$emit('add-link', newLink)

            this.text = '',
            this.link = ''
        }
    }
}
</script>

<style scoped>
h3{
    font-size: 1.6rem;
    text-align: center;
    font-weight: bold;
    color:#198754;
}

.col-md-4{
    border-radius: 10px;
    box-shadow: 3px 4px 6px #000;
    margin-top: 30px;
    background: #ccc;
}
 .add-form{
    margin-bottom: 40px;
 }
 .form-control{
    margin: 20px 0px;
    background: #ccc;
    box-shadow: 1px 2px 4px #222;
    /* background: #f63; */
 }
 .form-control label{
    display: block;
 }
 .form-control input{
    width: 100%;
    height: 40px;
    margin: 5px;
    padding: 3px 7px;
    font-size: 17px;
 }
</style>