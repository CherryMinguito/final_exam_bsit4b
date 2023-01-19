<template>
    <div>
        <Answer/>
    </div>
</template>
  
<script>
  import Answer from '../components/answer.vue';
  import Vue from 'vue'
    import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

    // Import Bootstrap and BootstrapVue CSS files (order is important)
    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'
  export default {
      name: "AnswerPage",
      components: { Answer}
  }
</script>