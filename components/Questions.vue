<!-- Please remove this file from your project -->
<template>
<div class="text-center">

    //Add Questions
    <button class="btn btn-danger">Danger</button>
            <li class="list-group-item" v-for="question in QuestionsList" :key="question.id">
                <h1>
                    {{ getFullName(question)}} 
                    <button v-b-modal.modal-del @click="sendID(student)" class="btn btn-danger">Delete</button>
                    <button v-b-modal.modal-upd @click="sendID(student)" class="btn btn-warning">Update</button>
                    <input type="hidden" id="idtodel" v-model="idtodel"  value="3" class="form-control">
                </h1>           
            </li>
       

        <div class="text-center m-3">
            <button v-b-modal.modal-1>Add Questions</button>
        </div>

        <div>
            <b-modal id="modal-1" title="BootstrapVue">
                 <div class="row">
                        <div class="col">
                            <input type="text" id="fname" v-model="queueQuestion.question" class="form-control" placeholder="Question">
                        </div>
                        <div class="col">
                            <input type="text" id="lname" v-model="queueQuestion.choices" class="form-control" placeholder="Choices">
                        </div>
                        <div class="col">
                            <input type="text" id="lname" v-model="queueQuestion.correctAnswer" class="form-control" placeholder="Correct Answer">
                        </div>
                        <input type="hidden" id="lname" v-model="queueQuestion.id" value="0" class="form-control">
                    </div>
                    
                    <div class="mt-2 mx-auto">
                        <button @click="saveQuestion" class="btn btn-success">Submit</button>
                    </div>
            </b-modal>
        </div>


        //Edit Questions
        <b-modal  id="modal-upd" title="BootstrapVue">
            <div class="row">
                <h3>{{idtodel.id}}</h3>
                       <div class="col">
                            <input type="text" id="fname" v-model="queueQuestion.question" class="form-control" placeholder="Question">
                        </div>
                        <div class="col">
                            <input type="text" id="lname" v-model="queueQuestion.choices" class="form-control" placeholder="Choices">
                        </div>
                        <div class="col">
                            <input type="text" id="lname" v-model="queueQuestion.correctAnswer" class="form-control" placeholder="Correct Answer">
                        </div>
                        <input type="hidden" id="lname" v-model="queueQuestion.id" value="0" class="form-control">
                    </div>
                    
                    <div class="mt-2 mx-auto">
                        <button @click="updateQuestion(idtodel)" class="btn btn-success">Submit</button>
                    </div>
        </b-modal>

        //Delete Questions
        <b-modal  id="modal-del" title="BootstrapVue">
                 <div class="row">
                       <h3>Are you sure you want to delete data?</h3>
                       <h3>{{idtodel.id}}</h3>
                    </div>
                    
                    <div class="mt-2 mx-auto">
                        <h1></h1>
                        <b-button @click="deleteQuestion(idtodel)" class="btn btn-success">Yes</b-button>
                    </div>
        </b-modal>

    </div>
</template>
  
<script>
// import Sidebar from './Sidebar.vue'
// import axios from 'axios';
export default {
    name: 'QuestionsPage',
    data() {
        return {
            QuestionsList: [
                {
                    question: "Vincent",
                    choices: "A. Lambanog",
                    correctAns:"A",
                    id: 1,

                },
                {
                    question: "Ortiz",
                    choices: "A. Lambanog",
                    correctAns:"B",
                    id: 2,

                }
            ],
            queueQuestion:[
                {
                    question: '',
                    choices: '',
                    correctAns:'',
                    id: 0,
                }
            ],
            idtodel:'',
            
        }
    },
    methods: {
        getFullName(question) {
            return question.question + " " + question.choices + " " + question.correctAns;

        },
        saveQuestion(){
            this.QuestionsList.push({question:this.queueQuestion.question, choices:this.queueQuestion.choices, correctAns:this.queueQuestion.correctAns, id:this.QuestionsList.length+1})
            this.queueQuestion.question='';
            this.queueQuestion.choices='';
            this.queueQuestion.correctAns='';
            
        },
        testDisplay(data){
            return data;
        },
        deleteQuestion(idtodel){
                this.QuestionsList.splice(this.QuestionsList.indexOf(idtodel), 1); // 2nd parameter means remove one item only
                console.log(this.QuestionsList)
                this.idtodel=""
        },
        sendID(student){
            this.idtodel=student;
        },
        hideModal() {
        this.$refs['modal-del'].hide()
         },
        clearFields(){
            this.queueQuestion.question='';
            this.queueQuestion.choices='';
            this.queueQuestion.correctAns='';
        },
        updateQuestion(question){
            this.QuestionList.splice(this.QuestionList.indexOf(question), 1, {
            'question': this.queueQuestion.question,
            'choices': this.queueQuestion.choices,
            'correctAns': this.queueQuestion.correctAns,
            'id':question.id,
          })

            this.queueQuestion.question='';
            this.queueQuestion.choices='';
            this.queueQuestion.correctAns='';
           
        },
       
        
    }
}
</script>