<template>
  <Header title="Links" @toggle-add-task="toggleAddTask" :showAddTask="showAddTask" />
  <router-view :showAddTask="showAddTask"></router-view>
  <Footer />
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      showAddTask: false
    }
  },

  methods: {
    toggleAddTask(){
      this.showAddTask = !this.showAddTask
    },
  },
}
</script>

<style>
  /* @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap'); */
  body{
    background: #222 !important;
    font-family:cursive !important;    
  }

</style>