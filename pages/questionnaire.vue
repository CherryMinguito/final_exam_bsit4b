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
            <label>Question:</label>
            <input style="border: 2px solid black" type="text" v-model="currentQuestion.text" />
            <label>Answer:</label>
            <input style="border: 2px solid black" type="text" v-model="currentQuestion.answer" />
            <label>Choices:</label>
            <textarea v-model="currentQuestion.choices" style="height: 100px; width: 40%;"></textarea>
            </div><br>
            <div slot="footer">
            <button class="btn btn-success" @click="saveQuestion">Save</button>&nbsp;&nbsp;
            <button class="btn btn-danger" @click="showModal = false">Cancel</button>
            </div>
        </div>
    </modal>
    <h1>Questionnaire</h1><br>

    <button class="btn btn-primary" @click="addQuestion()">Add Question</button><br><br>
    <table class="table">
        <thead class="thead-light">
        <tr>
            <th>No.</th>
            <th>Question</th>
            <th>Answer</th>
            <th style="width: 150px">Action</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(question, index) in questions" :key="index">
            <td style="padding-top: 30px">{{ index+1 }}</td>
            <td>{{ question.text }}<br><br>{{ question.choices }}</td>
            <td style="width: 300px; padding-top: 30px">
            <button v-if="!question.showAnswer" @click="question.showAnswer = true">Show Answer</button>
            <button v-else @click="question.showAnswer = false">{{ question.answer }}</button>
            </td>
            <td style="padding-top: 30px">
            <button class="btn btn-warning" @click="editQuestion(index)">Edit</button>
            <button class="btn btn-danger" @click="deleteQuestion(index)">Delete</button>
            </td>
        </tr>
        </tbody>
    </table>

    
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