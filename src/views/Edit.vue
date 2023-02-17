<template>
    <div class="container">
        <div class="row mx-4 mx-auto d-flex justify-content-center my-5">
            <div class="col-md-4" style="margin-top:100px;" >
                <h3 class="my-4"> <font-awesome-icon icon="plus" /> Edit Link </h3>       
                <form @submit="onSubmit" v-for="link in links" :key="link.Id" class="add-form" action="">
                    <!-- <div class="form-group">
                        <label for=""><font-awesome-icon icon="pencil" /> Title </label>
                        <input type="text" v-model="text" class="form-control" name="text" placeholder="Link Name">
                    </div>
                    <div class="form-group">
                        <label for=""><font-awesome-icon icon="link" /> Link</label>
                        <input type="text" v-model="link" name="link" class="form-control" placeholder="Add Link">
                    </div> -->
                    <h2 class="text-success">
                        {{ link.text }}
                    </h2>
                    <input type="submit" value="Edit Link" class="btn btn-lg bg-success text-white font-weight-bold">
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import Links from '../components/Links'
import linksData from "../../db.json";
export default {
    name: 'Edit',
    components: {
        Links,
    },
    // props: ["id"],
    data() {
        return {
            link: "",
            links: linksData,
        };
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
        },

        getData(id) {
            let data = this.links
            return data.filter(item => {
            return item.id == id
            })
        },

    //     setup() {
    //     let events = ref([]);
    //     onMounted(() => {
    //         // Get data from api endpoint
    //         axios
    //             .get("http://localhost:8081/api/edit")
    //             .then((result) => {
    //                 events.value = result.data;
    //             })
    //             .catch((err) => {
    //                 console.log(err.response);
    //             });
    //     });
    //     return {
    //         events,
    //     };
    // },

    // async addLink(link){
    //   const res = await fetch('api/links/', {
    //     method: 'POST',
    //     headers: {
    //       'Content-type': 'application/json', 
    //     },
    //     body: JSON.stringify(link),
    //   })

    //   const data = await res.json()

    //   this.links = [...this.links, data]
    // },

    // async editLink(id){
    // const taskToToggle = await this.fetchLink(id)
    // const updTask = {...taskToToggle, reminder: !taskToToggle.reminder}

    // const res = await fetch(`api/tasks/${id}`, {
    //   method: 'PUT',
    //   headers: {
    //     'Content-type': 'application/json' 
    //   },
    //   body: JSON.stringify(updTask)
    // })

    // const data = await res.json() 

    //   this.tasks = this.tasks.map((task) => task.id === id ? {...task, reminder: data.reminder} : task)
    // },

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