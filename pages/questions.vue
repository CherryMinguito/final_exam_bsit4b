<template>
    <div>
        <div class="container">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" 
            rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" 
            crossorigin="anonymous">
    
    <modal v-if="showModal" @close="showModal = false">
        <div class="add">
            <h3 slot="header" style="color:black">{{ modalMode === 'add' ? 'Add Question' : 'Edit Question' }}</h3>
            <div slot="body">
            <input type="text" v-model="currentQuestion.text" />
            <p>
                <label style="color:black">Question:</label>
                <input style="border: 3px solid black; height: 40px; width: 30%" type="text" v-model="currentQuestion.text" />
            </p>
            <p>
                <label style="color:black">Choices:</label>
                <textarea v-model="currentQuestion.choices" style="height: 100px; width: 40%;"></textarea>
            </p>
            <p>
                <label style="color:black">Answer:</label>
                <input style="border: 3px solid black; height: 40px; width: 30%" type="text" v-model="currentQuestion.answer" />
            </p>
            </div><br>
            <div slot="footer">
            <button class="btn btn-success" @click="saveQuestion">Save</button>&nbsp;&nbsp;
            <button class="btn btn-dark" @click="showModal = false">Cancel</button>
            </div>
        </div>
    </modal>

    <button class="btn btn-secondary" @click="add()">Add Question</button><br><br>
    <table class="table">
        <tbody>
        <tr v-for="(question, index) in questions" :key="index">
            <td>{{ index+1 }}</td>
            <td>{{ question.text }}</td>
            <td>{{ question.choices }}</td>
            <td>
            <button v-if="!question.showAnswer" @click="question.showAnswer = true">Show Answer</button>
            <span v-else>{{ question.answer }}</span>
            </td>
            <td>
            <button class="btn btn-info" @click="editQuestion(index)">Edit</button>
            <button class="btn btn-warning" @click="deleteQuestion(index)">Delete</button>
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
    .add{
        padding: 20px;
        margin-left: 10%;
        margin-right: 10%;
        background-color: rgb(255, 255, 255);
        color: white;
        border-radius: 10px;
    }
    .table{
        color: white;
        background-color:  white;
    }
    .table input, textarea{
        border: 2px solid rgb(0, 0, 0);
    }
</style>
<script>
export default {
    name: "Questions",
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
    add() {
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