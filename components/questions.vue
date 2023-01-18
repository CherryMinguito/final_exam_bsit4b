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
                            <th>Answer</th>
                            <th colspan="2">Action</th><!--
                            <th>Date Enrolled</th> -->
                        </thead>
                        <tbody>
                            <tr v-for="q, count in qList" :key="q.id">
                                <td>{{q.id}}</td>
                                <td>{{q.q}}</td>
                                <td>{{q.a}}</td>
                                <td>
                                    <!-- <b-button v-b-modal.modal-edit variant="info" @click="editStudent(student)">Edit</b-button> -->
                                    <button v-b-modal="'modal-edit'">Edit</button>

                                    <b-modal class="modal" id="modal-edit" title="Edit Student" hide-footer>
                                        <b-container>
                                            <b-row class="p-3">
                                                <input type="hidden" id="idet"/>
                                                <b-col>
                                                    <b-form-input v-model="fname" id="fnamedit" placeholder="First Name"></b-form-input>
                                                </b-col>
                                                <b-col>
                                                    <b-form-input v-model="lname" id="lnamedit" placeholder="Last Name"></b-form-input>
                                                </b-col>
                                            </b-row>
                                            <b-row class="mx-1 pb-3">
                                                <b-col>
                                                    <b-form-input v-model="address" id="addressedit" placeholder="Address"></b-form-input>
                                                </b-col>
                                            </b-row>
                                        </b-container>
                                        <div id="modal-1___BV_modal_footer_" class="modal-footer">
                                            <button type="button" class="btn btn-danger">Cancel</button>
                                            <button type="button" id="btn_add" class="btn btn-success" >Update</button>
                                        </div>
                                    </b-modal>
                                </td>
                                <td>
                                    <!-- <b-button @click="deleteStudent(count)" variant="danger">Delete</b-button> -->
                                    <button @click="deleteStudent(count)" variant="danger">Delete</button>
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
                if(localStorage.getItem("data") == null)
                {
                    this.qList.push(
                    {
                        id: 1,
                        q: 'Pangag si?',
                        a: 'Neo'
                    },
                    {
                        id: 2,
                        q: 'Brown si?',
                        a: 'Lloyd'
                    });
                    localStorage.setItem("data", JSON.stringify(this.qList));
                }
                else
                {
                    var data = localStorage.getItem("data");
                    this.qList.push(JSON.parse(data));
                }
            }
        }
    }
</script>
