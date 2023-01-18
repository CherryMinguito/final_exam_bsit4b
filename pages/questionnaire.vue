<template>
    <div>
        <div class="container">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" 
            rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" 
            crossorigin="anonymous">

    <modal v-if="showModal" @close="showModal = false">
        <div class="addQuestion" >
            <h3 slot="header">{{ modalMode === 'add' ? 'Add Question' : 'Edit Question' }}</h3>
            <div slot="body">
            <input type="text" style = "margin-left: -200px" v-model="currentQuestion.text" />
            <label>Question:</label>
            <input style="border: 2px solid black; border-radius: 30px; margin-left: 10px; margin-top: 30px; height: 50px; width: 30%;" type="text" v-model="currentQuestion.text" />
            <label style="margin-left: 30px">Answer:</label>
            <input style="border: 2px solid black; border-radius: 30px; margin-left: 10px; height: 50px; width: 30%;" type="text" v-model="currentQuestion.answer" />
            <br>
            <label style = "margin-top: 20px; margin-left: 10px;">Choices:</label>
            <br>
            <textarea v-model="currentQuestion.choices" style="border-radius: 30px; height: 100px; width: 80%; margin-left: 40px; margin-top: 20px;"></textarea>
            </div><br>
            <div slot="footer">
            <button class="btn btn-success" @click="saveQuestion">Save</button>&nbsp;&nbsp;
            <button class="btn btn-danger" @click="showModal = false">Cancel</button>
            </div>
        </div>
    </modal>
    <h1 style = "margin-top: 50px">Questionnaire</h1><br>

    <button class="btn btn-primary" @click="addQuestion()">Add Question</button><br><br>
    <table class="table">
        <thead class="thead-light">
        <tr style = "background-color:bisque">
            <th>No.</th>
            <th>Question</th>
            <th>Choices</th>
            <th>Answer</th>
            <th style="width: 170px">Action</th>
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
<style>
    body{
        color: white;
    }
    .addQuestion
    {
    background: -moz-linear-gradient(45deg, #02e1ba 0%, #26c9f2 29%, #d911f2 66%, #ffa079 100%);
    background: -webkit-linear-gradient(45deg, #02e1ba 0%,#26c9f2 29%,#d911f2 66%,#ffa079 100%);
    background: linear-gradient(45deg, #02e1ba 0%,#26c9f2 29%,#d911f2 66%,#ffa079 100%);
    background-size: 400% 400%;
    -webkit-animation: Gradient 5s ease infinite;
	-moz-animation: Gradient 5s ease infinite;
	animation: Gradient 5s ease infinite;
	/*min-height: calc(100vh - 2rem);*/
	display: flex;
	flex-direction: column;
	align-items: stretch;
	justify-content: space-evenly;
	overflow: hidden;
	position: relative; 
        }

        .addQuestion::before, 
        .addQuestion::after {
            content: "";
            width: 70vmax;
            height: 70vmax;
            position: absolute;
            background: rgba(255, 255, 255, 0.07);
            left: -20vmin;
            top: -20vmin;
            animation: morph 15s linear infinite alternate, spin 20s linear infinite;
            z-index: 1;
            will-change: border-radius, transform;
            transform-origin: 55% 55%;
            pointer-events: none; 
        }
            
        .addQuestion::after {
            width: 70vmin;
            height: 70vmin;
            left: auto;
            right: -10vmin;
            top: auto;
            bottom: 0;
            animation: morph 10s linear infinite alternate, spin 26s linear infinite reverse;
            transform-origin: 20% 20%; 
        }

        @-webkit-keyframes Gradient {
            0% {
                background-position: 0 50%
            }
            50% {
                background-position: 100% 50%
            }
            100% {
                background-position: 0 50%
            }
        }

        @-moz-keyframes Gradient {
            0% {
                background-position: 0 50%
            }
            50% {
                background-position: 100% 50%
            }
            100% {
                background-position: 0 50%
            }
        }

        @keyframes Gradient {
            0% {
                background-position: 0 50%
            }
            50% {
                background-position: 100% 50%
            }
            100% {
                background-position: 0 50%
            }
        }

        @keyframes morph {
        0% {
            border-radius: 40% 60% 60% 40% / 70% 30% 70% 30%; }
        100% {
            border-radius: 40% 60%; } 
        }

        @keyframes spin {
        to {
            transform: rotate(1turn); 
        } 
        }
            .st0{display:none;}
            .st1{display:inline;}
            .st2{opacity:0.29;}
            .st3{fill:#FFFFFF;}
            .st4{clip-path:url(#SVGID_2_);fill:#FFFFFF;}
            .st5{clip-path:url(#SVGID_4_);}
            .st6{clip-path:url(#SVGID_6_);}
            .st7{clip-path:url(#SVGID_8_);}
            .st8{clip-path:url(#SVGID_10_);}
            .st9{fill:none;}
            .st10{clip-path:url(#SVGID_12_);}
            .st11{opacity:0.7;}
            .st12{clip-path:url(#SVGID_14_);}
            .st13{opacity:0.2;}
            .st14{clip-path:url(#SVGID_16_);}
            .st15{opacity:0.3;fill:#FFFFFF;enable-background:new    ;}
    
    .addQuestion{
        padding: 20px;
        margin-left: 10%;
        margin-right: 10%;
        text-align: center;
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