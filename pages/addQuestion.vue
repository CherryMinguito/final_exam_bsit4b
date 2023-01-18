<template>
    <div>
        <AddQuestion/>
    </div>
</template>
<script>
  import AddQuestion from '../components/addQuestion.vue';
  import Vue from 'vue'
    import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

    // Import Bootstrap and BootstrapVue CSS files (order is important)
    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'
  export default {
      name: "AddQuestionPage",
      components: { AddQuestion}
  }
</script>