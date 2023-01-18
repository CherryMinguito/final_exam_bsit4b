<style>
    body{
        color: white;
    }
    .addQuestion{
        padding: 10px;
        background-color: rgb(0, 140, 255);
        color: black;
        border-radius: 10px;
    }
    .table{
        color: black;
        background-color:  white;
    }
    .table input, textarea{
        border: 2px solid rgb(255, 255, 255);
    }
</style>
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
            <div>
            <label style="margin: 10px 0 0 0">Question:</label>
            <input style="border: 2px solid white; width: 90%;" type="text" v-model="currentQuestion.text" />
            </div>
            <br>
            <div>
            <label>Answer:</label>
            <input style="border: 2px solid white;margin: 0 0 0 10px; width: 90%;" type="text" v-model="currentQuestion.answer" />
            </div>
            <div style="margin: 50px 0 50px 0;">
            <label>Choices:</label>
            <textarea v-model="currentQuestion.choices" style="height: 100px; width: 84.5%; margin: -35px 0 0 10px; position: absolute;"></textarea>
            </div>
        </div>
        <br>
            <div slot="footer">
            <button class="btn btn-success" @click="saveQuestion">Save</button>&nbsp;&nbsp;
            <button class="btn btn-danger" @click="showModal = false">Cancel</button>
            </div>
        </div>
    </modal>
    <br>
    <h1>Questionnaire</h1><br>
    <button class="btn btn-primary" @click="addQuestion()">Add Question</button><br><br>
    <table class="table">
        <thead class="thead-light">
        <tr>
            <th>No.</th>
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