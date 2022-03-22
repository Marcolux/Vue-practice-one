const app = Vue.createApp({

    data(){
        return{
        myName: "Marco Colucci",
        myAge: 37,
        randomNumber : Math.random(),
        myPicture:'https://proximitycr.com/wp-content/uploads/2018/11/1200px-Vue.js_Logo_2.svg_.png',

        }
    },
    methods:{
        myAgeInFiveYears (){ 
            return this.myAge + 5 }
    }

})

app.mount("#assignment")