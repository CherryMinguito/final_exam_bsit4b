<template>
    <div>
        <b-container-fluid>
            <b-row>
                <b-col>
                    <h3>Questionnaire</h3>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <v-btn
                        elevation="2"
                        @click="show = !show"
                    > Show Answers </v-btn>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <v-list three-line>
                        <template v-for="(item, index) in qList">
                            <v-subheader
                            v-if="item.header"
                            :key="item.header"
                            v-text="item.header"
                            ></v-subheader>

                            <v-divider
                            v-else-if="item.divider"
                            :key="index"
                            :inset="item.inset"
                            ></v-divider>

                            <v-list-item
                            v-else
                            :key="item.title"
                            >
                            <v-list-item-avatar>
                                <v-img :src="item.avatar"></v-img>
                            </v-list-item-avatar>

                            <v-list-item-content>
                                <v-list-item-title>
                                    {{parseInt(index + 1) + '. ' + item.q }}
                                </v-list-item-title>
                                <v-list-item-subtitle>
                                    <b-row>
                                        <b-col v-bind="putAnswer = false">
                                            <ol v-for="choice in item.choices">
                                                <span v-if="Math.floor((Math.random() * 2)) == 0 && !putAnswer">
                                                    <li style="float:left;width:50px;list-style-type:lower-alpha" v-bind="putAnswer = true"> {{ item.a }} </li>
                                                </span>
                                                <li style="float:left;width:50px;list-style-type:lower-alpha"> {{ choice }} </li>
                                            </ol>
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col>
                                            <span style="display: none" v-show='show'> Answer: {{ item.a }} </span> 
                                        </b-col>
                                    </b-row>
                                </v-list-item-subtitle>
                            </v-list-item-content>
                            </v-list-item>
                        </template>
                    </v-list>
                </b-col>
            </b-row>
        </b-container-fluid>
    </div>
</template>
<script>
    export default{
        name: 'AnswerPage',
        created(){
            if (process.browser){ 
                this.updateData();
            }
        },
        data(){
            return{
                question: '',
                answer: '',
                qList: [],
                choices: ['pangag', 'brownm', 'agtang'],
                show : false
            }
        },
        methods: {
            updateData(){
                console.log(localStorage.getItem("data"));
                if(localStorage.getItem("data") == null)
                {
                    this.qList.push({
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
            }
        }
    }
</script>
