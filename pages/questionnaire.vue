<template>
  <div>
      <div class="container">
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
          rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
          crossorigin="anonymous">

  <modal v-if="showModal" @close="showModal = false">
      <div class="addQuestion">
          <h3 slot="header">{{ modalMode === 'add' ? 'Add Question' : 'Edit Question' }}</h3>
          <div slot="body">
          <input type="text" v-model="currentQuestion.text" />
          <br><label>Question:</label>
          <input style="border: 2px solid black" type="text" v-model="currentQuestion.text" />
         <label>Answer:</label>
          &nbsp;&nbsp;&nbsp;<input style="border: 2px solid black" type="text" v-model="currentQuestion.answer" />
          <br><label>Choices:</label>

          <br><textarea v-model="currentQuestion.choices" style="height: 100px; width: 40%;"></textarea>
          </div><br>
          <div slot="footer">
          <button class="btn btn-success" @click="saveQuestion">Save</button>&nbsp;&nbsp;
          <button class="btn btn-danger" @click="showModal = false">Cancel</button>
          </div>
      </div>
  </modal>
  <h1>Questionnaire</h1><br>

        <v-btn type="submit" class="btn btn-success"  @click="addQuestion()">
          Add Question
        </v-btn>



  <table class="table">
      <thead class="thead-light">
      <tr>
          <th><p style="color:green">No.</p></th>
          <th><p style="color:green">Question.</p></th>
          <th><p style="color:green">Choices.</p></th>
          <th><p style="color:green">Answer.</p></th>
          <th style="width: 150px"><p style="color:green">Action.</p></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(question, index) in questions" :key="index">
          <td>{{ index+1 }}</td>
          <td>{{ question.text }}</td>
          <td>{{ question.choices }}</td>
          <td>
          <button v-if="!question.showAnswer" @click="question.showAnswer = true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Show Answer&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
          <span v-else>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ question.answer }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          </td>
          <td>
          <button class="btn btn-warning" @click="editQuestion(index)">Edit</button>
          <button class="btn btn-danger" @click="deleteQuestion(index)">Delete</button>
          </td>
      </tr>
      </tbody>

  </table>
  <form class="container" method="POST" action="index">
      <div class="text-xs-center">
        <v-btn type="submit" class="btn btn-success">
          Exit
        </v-btn>
      </div>
    </form>


  </div>
</div>
</template>
<style>
  body{
      color: white;
  }
  .addQuestion{
      padding: 20px;
      margin-left: 10%;
      margin-right: 10%;
      background-color: #F2AA4CFF;
      color: black;
      border-radius: 10px;
  }
  .table{
      color: black;
      background-color:  white;
  }
  .table input, textarea{
      border: 2px solid black;
  }
</style>
<script>
export default {
  name: "QuestionnairePage",
  data() {
  return {
      questions: [],
      currentQuestion: {
      text: '',
      answer: '',
      choices: '',
      showAnswer: false
      },
      showModal: false,
      modalMode: 'add'
  }
  },
  methods: {
  addQuestion() {
      this.currentQuestion = {
      text: '',
      answer: '',
      choices: '',
      showAnswer: false
      }
      this.modalMode = 'add'
      this.showModal = true
  },
  editQuestion(index) {
      this.currentQuestion = {...this.questions[index]}
      this.modalMode = 'edit'
      this.showModal = true
  },
  deleteQuestion(index) {
      this.questions.splice(index, 1)
  },
  saveQuestion() {
      if (this.modalMode === 'add') {
      this.questions.push(this.currentQuestion)
      }
      else if (this.modalMode === 'edit')
      {
          this.questions.splice(this.currentQuestion.text, 1)
          this.questions.push(this.currentQuestion)
      }
      this.showModal = false
  }
  }
  }
</script>
<style>
h1 {
  text-align: center;
}

h2 {
  text-align: center;
}

h3 {
  text-align: center;
}
table {
  border-collapse: collapse;
  width: 100%;
}

th, td {
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #D6EEEE;
}
</style>
