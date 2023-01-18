
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
            <v-col>
              <v-btn
                elevation="2"
              > Back </v-btn>
            </v-col>
          </v-row>
        </v-container>
    </v-form>
  </div>
</template>
<script>
  export default{
      name: 'AddQuestionPage',
      create(){
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
                    console.log(data);
                    this.qList.push(JSON.parse(data));
                }
          },
          addQuestion(){
              var newID;

              if(this.qList.length === 0)
                  newID = 1;
              else
                  newID = 2;

              var q = {
                      id: newID,
                      q: this.question,
                      a: this.answer
              }

              this.qtList.push(q);
              localStorage.setItem("data", JSON.stringify(this.qList));
          }
      }
  }
</script>