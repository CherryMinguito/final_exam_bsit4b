
<template>
    <div>
        <v-form v-model="valid">
          <v-container>
            <v-row>
              <v-col>
                <h3> Edit Question </h3>
              </v-col>
            </v-row>
            <v-row>
              <v-col
                cols="12"
                md="4"
              >
                <v-text-field
                  v-model="question"
                  :counter="30"
                  label="Question"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col
                cols="12"
                md="2"
              >
                <v-text-field
                  v-model="choice1"
                  :counter="20"
                  label="Choice 1 "
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                md="2"
              >
                <v-text-field
                  v-model="choice2"
                  :counter="20"
                  label="Choice 2 "
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                md="2"
              >
                <v-text-field
                  v-model="choice3"
                  :counter="20"
                  label="Choice 3 "
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col
                cols="12"
                md="4"
              >
                <v-text-field
                  v-model="answer"
                  :counter="20"
                  label="Answer"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="1">
                <v-btn
                  elevation="2"
                  @click="updateQuestion()"
                > Update </v-btn>
              </v-col>
            </v-row>
          </v-container>
      </v-form>
    </div>
  </template>
  <script>
    export default{
        name: 'EditQuestionPage',
        created(){
              if (process.browser){ 
                  this.updateData();
              }
        },
        data(){
            return{
                question: '',
                choice1: '',
                choice2: '',
                choice3: '',
                answer: '',
                qData: []
            }
        },
        methods: {
          updateData(){
                  if(localStorage.getItem("edit") != null)
                  {
                        var data = localStorage.getItem('edit');
                        this.qData = JSON.parse(data);
                        this.question = this.qData.q;
                        this.answer = this.qData.a;
                  }
            },
            updateQuestion(){
                var list = localStorage.getItem('data');
                list = JSON.parse(list);

                for(var i = 0; i < list.length; i++)
                {
                    if(list[i].id == this.qData.id)
                    {
                        list[i].q = this.question;
                        list[i].a = this.answer;
                        list[i].choices  = [];
                        list[i].choices.push(this.choice1);
                        list[i].choices.push(this.choice2);
                        list[i].choices.push(this.choice3);
                        
                        localStorage.setItem("data", JSON.stringify(list));
                        
                        window.location = "http://localhost:3000/question";
                    }
                }
            }
        }
    }
  </script>