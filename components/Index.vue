<template>
  <div>
      <div class="container">
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" 
          rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" 
          crossorigin="anonymous">
  <b-modal v-if="showModal" @close="showModal = false">
      <div class="addQuestion">
          <h3 slot="header">{{ modalMode === 'add' ? 'Add Question' : 'Edit Question' }}</h3>
          <div slot="body">
          <label>Question:</label>
          <input style="border: 2px solid black" type="text" data-cy="qs" v-model="currentQuestion.text" /><br><br>
          <label>Answer:</label>&nbsp;&nbsp;&nbsp;
          <input style="border: 2px solid black" type="text" data-cy="answer" v-model="currentQuestion.answer" /><br><br>
          <label>Choices:</label>&nbsp;&nbsp;
          <textarea v-model="currentQuestion.choices" data-cy="ch" style="height: 50px; width: 100%;"></textarea>
          </div><br>
          <div slot="footer">
          <button class="btn btn-success" style="margin-left: 25%;" data-cy="save" @click="saveQuestion">Add</button>&nbsp;&nbsp;&nbsp;&nbsp;
          <button class="btn btn-danger" @click="showModal = false">Cancel</button>
          </div>
      </div>
  </b-modal>
  <h1><b>Questionnaire</b></h1><br>
  <b-button class="btn btn-primary" b-modal.modal-1 data-cy="add" @click="addQuestion()">Add Question</b-button><br><br>
  

  <table class="table">
      <thead class="thead-light">
      <tr>
          <th>Question</th>
          <th>Answer</th>
          <th style="width: 150px">Action</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(question, index) in questions" :key="index">
          <td>{{ question.text }}</td>
          <td>
          <button style="border: 2px solid black" data-cy="show" v-if="!question.showAnswer" @click="question.showAnswer = true">Show Answer</button>
          <span v-else>{{ question.answer }}</span>
          </td>
          <td>
          <button class="btn btn-warning" data-cy="edit" @click="editQuestion(index)">Edit</button>
          <button class="btn btn-danger" data-cy="delete" @click="deleteQuestion(index)">Delete</button>
          </td>
      </tr>
      </tbody>
  </table>

  
  </div>
</div>
</template>
<style>
  body{
      color: rgb(255, 226, 253);
  }
  .addQuestion{
      padding: 20px;
      margin-left: 35%;
      margin-right: 35%;
      background-color: rgb(248, 236, 248);
      color: black;
      border-radius: 10px;
  }
  .table{
      color: black;
      background-color:  rgb(250, 226, 255);
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