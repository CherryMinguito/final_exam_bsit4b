<template>
    <div>
        <Questions/>
    </div>
</template>
  
<script>
  import Questions from '../components/questions.vue';
  import Vue from 'vue'
    import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

    // Import Bootstrap and BootstrapVue CSS files (order is important)
    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'
  export default {
      name: "QuestionPage",
      components: { Questions}
  }
</script>