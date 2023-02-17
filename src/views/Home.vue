<template>
    <div class="collapse" id="collapseTarget">
        <AddLink title="Add Link" v-show="showAddTask" @add-link="addLink" />
    </div>
  <Links @edit-link="editLink" @delete-link="deleteLink" :links="links" />
</template>

<script>
import AddLink from '../components/AddLink'
import Links from '../components/Links'

export default {
    name: 'Home',
    props: {
        showAddTask: Boolean,
    },
    components: {
        AddLink,
        Links
    },
    data() {
        return {
            links: [],
        }  
    },

    methods: {
    async addLink(link){
      const res = await fetch('api/links/', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json', 
        },
        body: JSON.stringify(link),
      })

      const data = await res.json()

      this.links = [...this.links, data]
    },
    async deleteLink(id){
      if(confirm('Are you sure you want to delete LINK?')){
        const res = await fetch(`api/links/${id}`, {
          method: 'DELETE'
        })

        res.status === 200 ? (this.links = this.links.filter((link) => link.id !== id)) : alert('Error Deleting Link')
      }      
    },
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
    async fetchLinks(){
      const res = await fetch('api/links')

      const data = await res.json()

      return data
    },
    async fetchLink(id){
      const res = await fetch(`api/links/${id}`)

      const data = await res.json()

      return data
    },
  },

  async created(){
    this.links = await this.fetchLinks()
  }
}
</script>