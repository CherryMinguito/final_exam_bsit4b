<template>
    <div style="background-color: lightcyan">
    <h2 style="text-align: center">Questionaire Page</h2>
    <Sidebar/>
    <div style="margin-left:10%">
      <br>
      <div>
      <div>
        <input type="text" v-model="stud.ques" placeholder="Question" v-on:keyup.enter="addQuestion">
      </div>

      <button @click="addQuestion">Add Question</button>
    </div> 
    </div>
    <br>
    <div style="margin-left:20%">
      <table>
        <thead>
          <th class="col-3"></th>
          <th class="col-3"></th>
          <th class="col-3"></th>
        </thead>
  
        <tr v-for="stud in studs" :key="stud.ques">
          <td>
            <input v-if="stud.edit" type="text" v-model="stud.ques"  v-on:keyup.enter="stud.edit = !stud.edit">
            <span v-else>{{stud.ques}} </span>
          </td>
          <td>
            <button @click="removeQuestion(index)">Delete</button>
            <button @click="stud.edit = !stud.edit">Update</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
  </template>
  
  <script scope>
    export default {
      data() 
      {
        return {
          stud: 
          {
            ques: "", edit: false
          },
          studs: []
        }
      },
    methods:{
      addQuestion() 
      {
        this.studs.push({
          fname:this.stud.ques, edit: false}
          );
        this.stud = [];
      },
      removeQuestion(index)
      {
        this.studs.splice(index, 1)
      }
    }
    }
  </script>