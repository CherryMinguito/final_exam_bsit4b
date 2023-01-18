<template>
    <div>
      <h1>Questionnaire</h1><br>
  
      <button @click="addQuestion()">Add Question</button>
      <table>
        <thead>
          <tr>
            <th>Question</th>
            <th>Answer</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(question, index) in questions" :key="index">
            <td>{{ question.text }}</td>
            <td>
              <button v-if="!question.showAnswer" @click="question.showAnswer = true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Show Answer&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
              <span v-else>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ question.answer }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            </td>
            <td>
              <button @click="editQuestion(index)">Edit</button>
              <button @click="deleteQuestion(index)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
  
      <modal v-if="showModal" @close="showModal = false">
        <h3 slot="header">{{ modalMode === 'add' ? 'Add Question' : 'Edit Question' }}</h3>
        <div slot="body">
          <label>Question:</label>
          <input type="text" v-model="currentQuestion.text" />
          <label>Answer:</label>
          <input type="text" v-model="currentQuestion.answer" />
          <label>Choices:</label>
          <textarea v-model="currentQuestion.choices"></textarea>
        </div>
        <div slot="footer">
          <button @click="saveQuestion">Save</button>&nbsp;&nbsp;
          <button @click="showModal = false">Cancel</button>
        </div>
      </modal>
    </div>
  </template>
  
  <script>
  import modal from './Index.vue'
  export default {
    components: {
      modal
    },
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
        this.showModal = false
      }
    }
    }
</script>
  