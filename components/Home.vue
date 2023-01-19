<template>
    <div class="container">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous" />
      <h1 class="align-middle">Questionnaire</h1>
      <br />
      <button type="button" class="btn btn-info" @click="addQuestion()">
        Add Question
      </button>
      <br />
      <br />
      <table class="table table-primary">
        <thead>
          <tr class="table-success">
            <th class="table-primary">Question</th>
            <th class="table-primary">Choices</th>
            <th class="table-primary">Answer</th>
            <th class="table-primary">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(question, choices1, index) in questions" :key="index" class="table-warning" >
            <td class="table-primary">{{ question.text }}</td>
            <td class="table-primary">{{ choices1.text }} </td>
            <td class="table-primary">
              <button type="button" class="btn btn-success" v-if="!question.showAnswer" @click="question.showAnswer = true">
                Show Answer
              </button>
              <span v-else>{{question.answer}}</span>
            </td>
            <td class="table-primary">
              <button type="button" class="btn btn-primary" @click="editQuestion(index)" >
                Edit
              </button>
              <button type="button" class="btn btn-secondary" @click="deleteQuestion(index)" >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
  
      <modal v-if="showModal" @close="showModal = false">
        <h3 slot="header">
          {{ modalMode === "add" ? "Add Question" : "Edit Question" }}
        </h3>
        <div slot="body">
          <label>Question:</label>
          <input type="text" class="form-control" v-model="currentQuestion.text" >
          <label>Answer:</label>
          <input type="text" class="form-control" v-model="currentQuestion.answer" />
          <label>1st Choices:</label>
          <input type="text" class="form-control" v-model="currentQuestion.choices1" />
          <label>2nd Choices:</label>
          <input type="text" class="form-control" v-model="currentQuestion.choices2" />
          <label>3rd Choices:</label>
          <input type="text" class="form-control" v-model="currentQuestion.choices3" />
        </div>
        <br />
        <br />
        <div slot="footer">
          <button type="button" class="btn btn-primary" @click="saveQuestion">
            Save
          </button>
          &nbsp; &nbsp;
          <button type="button" class="btn btn-danger" @click="showModal = false" >
            Cancel
          </button>
        </div>
      </modal>
    </div>
  </template>
  
  <script>
  import modal from "./Home.vue";
  export default {
    components: {
      modal,
    },
    data() {
      return {
        questions: [],
        currentQuestion: {
          text: "",
          answer: "",
          choices1: "",
          choices2: "",
          choices3: "",
          showAnswer: false,
        },
        showModal: false,
        modalMode: "add",
      };
    },
    methods: {
      addQuestion() {
        this.currentQuestion = {
          text: "",
          answer: "",
          choices1: "",
          choices2: "",
          choices3: "",
          showAnswer: false,
        };
        this.showModal = true;
        this.modalMode = "add";
      },
      editQuestion(index) {
        this.currentQuestion = { ...this.questions[index] };
        this.showModal = true;
        this.modalMode = "edit";
      },
      deleteQuestion(index) {
        this.questions.splice(index, 1);
      },
      saveQuestion() {
        if (this.modalMode === "add") {
          this.questions.push(this.currentQuestion);
        }
        this.showModal = false;
      },
    },
  };
  </script>