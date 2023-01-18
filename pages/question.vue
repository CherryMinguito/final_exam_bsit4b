<style>
    body{
        color: darkgray;
    }
    div{
        color: white;
    }
    .question{
        background-color: gray;
    }
    .addQuestion{
        padding: 20px;
        margin-left: 10%;
        margin-right: 10%;
        background-color: gray;
        color: black;
        border-radius: 10px;
    }
    .table{
        color: black;
        background-color: darkgray;
    }
    .table input, textarea{
        border: 2px solid rgb(255, 255, 255);
    }
</style>
<template>
    <div name="question">
        <div class="container">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" 
            rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" 
            crossorigin="anonymous">
    <modal v-if="showModal" @close="showModal = false">
        <div class="addQuestion">
            <h3 slot="header">{{ modalMode === 'add' ? 'Add Question' : 'Edit Question' }}</h3>
            <div slot="body">
            <input type="hidden" v-model="currentQuestion.text" />
            <label>Question:</label>
            <input style="border: 2px solid black" type="text" v-model="currentQuestion.text" />
            <label>Answer:</label>
            <input style="border: 2px solid black" type="text" v-model="currentQuestion.answer" />
            <label>Choices:</label>
            <textarea v-model="currentQuestion.choices" style="height: 50px; width: 12%; position: absolute;"></textarea>
            </div><br>
            <div slot="footer">
            <button class="btn btn-success" @click="saveQuestion">Save</button>&nbsp;&nbsp;
            <button class="btn btn-danger" @click="showModal = false">Cancel</button>
            </div>
        </div>
    </modal>
    <h1>Questionnaire Page</h1>
    <h6>Questions with multiple choice</h6>
    <button class="btn btn-dark" @click="addQuestion()">Add Question</button><br><br>
    
    <table class="table">
        <thead class="thead-light">
        <tr>
            <th>Number</th>
            <th>Question</th>
            <th>Choices</th>
            <th>Answer</th>
            <th style="width: 150px">Action</th>
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

    
    </div>
</div>
</template>
<script>
export default {
    name: "Question",
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