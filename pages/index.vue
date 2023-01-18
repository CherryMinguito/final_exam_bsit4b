<template>
  <div>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" 
      rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" 
      crossorigin="anonymous">
      <title>Welcome Page</title>
      <div class="box">
          <div class="inside">
              <h1 class="logo">Practical Exam in NUXT</h1><br>
              <form class="container" method="POST" action="question">
                  <button type="submit" class="btn btn-info">View the Questionnaire</button>
              </form>
          </div>
      
  </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>