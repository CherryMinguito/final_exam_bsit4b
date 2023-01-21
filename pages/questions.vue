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
            <p>
                <label>Question:</label>
                <input style="border: 2px solid black; height: 50px; width: 40%" type="text" v-model="currentQuestion.text" />
            </p>
            <p>
                <label>Choices:</label>
                <textarea v-model="currentQuestion.choices" style="height: 100px; width: 40%;"></textarea>
            </p>
            <p>
                <label>Answer:</label>
                <input style="border: 2px solid black; height: 50px; width: 40%" type="text" v-model="currentQuestion.answer" />
            </p>
            </div><br>
            <div slot="footer">
            <button class="btn btn-success" @click="saveQuestion">Save</button>&nbsp;&nbsp;
            <button class="btn btn-danger" @click="showModal = false">Cancel</button>
            </div>
        </div>
    </modal>

    <button class="btn btn-primary" @click="addQuestion()">Add Question</button><br><br>
    <table class="table">
        <tbody>
        <tr v-for="(question, index) in questions" :key="index">
            <td>{{ index+1 }}</td>
            <td>{{ question.text }}</td>
            <td>{{ question.choices }}</td>
            <td>
            <button v-if="!question.showAnswer" @click="question.showAnswer = true">&amp;&amp;Show Answer&amp;&amp;</button>
            <span v-else>&amp;&amp;{{ question.answer }}&amp;&amp;</span>
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
<style>
    body{
        color: white;
    }
    .addQuestion{
        padding: 20px;
        margin-left: 10%;
        margin-right: 10%;
        background-color: rgb(212, 210, 208);
        color: white;
        border-radius: 10px;
    }
    .table{
        color: white;
        background-color:  white;
    }
    .table input, textarea{
        border: 2px solid white;
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