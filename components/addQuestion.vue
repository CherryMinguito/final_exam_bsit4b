
<template>
  <div>
      <v-form v-model="valid">
        <v-container>
          <v-row>
            <v-col>
              <h3> Add Question </h3>
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
                @click="addQuestion()"
              > Add </v-btn>
            </v-col>
          </v-row>
        </v-container>
    </v-form>
  </div>
</template>
<script>
  export default{
      name: 'AddQuestionPage',
      created(){
            if (process.browser){ 
                this.updateData();
            }
      },
      data(){
          return{
              question: '',
              answer: '',
              choice1: '',
              choice2: '',
              choice3: '',
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
                    this.qList = JSON.parse(data);
                }
          },
          addQuestion(){
              var newID;

              if(this.qList.length === 0)
                  newID = 1;
              else
                  newID = 2;

              var q = {
                      id: this.qList.length == 0? 1 : this.qList[this.qList.length - 1].id + 1,
                      q: this.question,
                      choices: [this.choice1, this.choice2, this.choice3],
                      a: this.answer
              }

              this.qList.push(q);
              localStorage.setItem("data", JSON.stringify(this.qList));

              window.location = "http://localhost:3000/question";
          }
      }
  }
</script>