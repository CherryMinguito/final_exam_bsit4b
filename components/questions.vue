<template>
    <div>
        <b-container-fluid>
            <b-row>
                <b-col>
                    <a href="http://localhost:3000/addQuestion" class="btn btn-light text-dark"> Add Question </a>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <h3 class="text-center">Question</h3>
                </b-col>
            </b-row>
            <b-row>
                <b-col class="text-center mx-5">
                    <table class="table table-stripe table-light">
                        <thead class="text-light">
                            <th>ID</th>
                            <th>Question</th>
                            <th>Choices</th>
                            <th>Answer</th>
                            <th colspan="2">Action</th><!--
                            <th>Date Enrolled</th> -->
                        </thead>
                        <tbody>
                            <tr v-for="q, count in qList" :key="q.id">
                                <td>{{q.id}}</td>
                                <td>{{q.q}}</td>
                                <td>
                                    <span v-for="choice in q.choices">
                                        {{ choice }}<span v-if="choice != q.choices[q.choices.length - 1]">,</span> 
                                    </span>
                                </td>
                                <td>{{q.a}}</td>
                                <td>
                                    <!-- <b-button v-b-modal.modal-edit variant="info" @click="editStudent(student)">Edit</b-button> -->
                                    <button @click="editQuestion(q)">Edit</button>
                                </td>
                                <td>
                                    <!-- <b-button @click="deleteStudent(count)" variant="danger">Delete</b-button> -->
                                    <button @click="deleteQuestion(count)" variant="danger">Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </b-col>
            </b-row>
        </b-container-fluid>
    </div>
</template>
<script>
    export default{
        name: 'QuestionPage',
        created(){
            if (process.browser){ 
                this.updateData();
                console.log(1);
            }
        },
        data(){
            return{
                question: '',
                answer: '',
                qList: []
            }
        },
        methods: {
            updateData(){
                console.log(localStorage.getItem("data"));
                if(localStorage.getItem("data") == null)
                {
                    this.qList.push({
                        id: 1,
                        q: 'Question 1?',
                        choices: ['c1', 'c2', 'c3'],
                        a: 'Answer 1'
                    },
                    {
                        id: 2,
                        q: 'Question 2?',
                        choices: ['c4', 'c5', 'c6'],
                        a: 'Answer 2'
                    });
                    localStorage.setItem("data", JSON.stringify(this.qList));
                }
                else
                {
                    var data = localStorage.getItem("data");
                    this.qList = JSON.parse(data);
                }
            },
            editQuestion(q){
                localStorage.setItem('edit', JSON.stringify(q));
                window.location = "http://localhost:3000/editQuestion";
            },
            deleteQuestion(count)
            {
                this.qList.splice(count, 1);
                localStorage.setItem("data", JSON.stringify(this.qList));
            }
        }
    }
</script>
