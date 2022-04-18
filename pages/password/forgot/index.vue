<template>
      <v-container>
                <v-row justify-center wrap>
                    <v-col col="12" align-self="center">
                    <h1 class="comment-title" :size="fontSize">{{ title  }}</h1>
                    <p class="text-caption font-weight-light d-block text-center">{{message}}</p>
                    </v-col>
                </v-row>
                <v-row class="pa-0" justify="center">
                    <v-col col="6" sm="8" xs="12" align-self="center" >
                        <v-form ref="form"
                          @submit.prevent="forgotpsw"
                          lazy-validation>
                        <label for="email">Почта</label>
                        <v-text-field id="email"
                            label="Почта"
                            type="email"
                            v-model.trim="user.email"
                            class="border-radius.rounded-lg"
                            counter="50"
                            :rules="emailRules"
                            outlined
                            clearable
                            color="blue darken-2"
                            required></v-text-field>
                    
                        <v-row class="pa-1 my-2 justify-center">
                            <v-btn type="submit" depressed class="d-block ma-3 px=10"
                                dark color="#351BA9" width="60%">Подтвердить</v-btn>
                            <v-btn outlined color="#351BA9"
                                class="d-block ma-3 px=10 #351BA9--text" width="60%">
                              <nuxt-link to="/registration"
                                class="text-decoration-none">Зарегистрироваться?</nuxt-link>
                            </v-btn>
                          <!-- </v-col> -->
                        </v-row>
                    </v-form>
                    <v-overlay
                    :absolute="absolute"
                    :z-index="zIndex"
                    :value="overlay">
                    <v-btn
                      class="erroruser white--text"
                      color="#351BA9"
                      @click="overlay = false"></v-btn>
                   </v-overlay>
                   </v-col>
                </v-row>
      </v-container>

</template>
<script>

export default {
    layout: 'auth',
    data(){
        return {
            user : {
                password: "",
                email: ""
            },
            emailRules: [
              v => !!v || 'Поле должно быть заполнено',
              v => /.+@.+\..+/.test(v) || 'Введите верный адрес почты',
            ],
            page: "auth",
            title: "Забыли пароль?",
            message: "На почту будет отправлено письмо для смены пароля",
            overlay: false,
            absolute: true,
            zIndex: 1

        }
    },
    computed: {
      fontSize () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return '1.5em'
          case 'sm': return '2.6em'
          case 'md': return '3.3em'
          case 'lg': return '4.11em'
          case 'xl': return '4.11em'
        }
      },
    },
    methods: {
        validate () {
            this.$refs.form.validate();
        },
        async forgotpsw() {
        //  let answer = document.querySelector(".erroruser");
         try {
          //  console.log('call local politic')
           let respons = await this.$axios.post('/password/forgot', {
             data: {
               email: this.user.email
             }
           })
           console.log(respons.data);
          
          if (respons.data.app_code == 200) {
            let answer = document.querySelector(".erroruser");
             answer.innerText = 'На почту отправлено письмо для смены пароля';
             this.overlay = true;
             // задержка по времени
             function sleep(ms) {
              return new Promise(resolve => setTimeout(resolve, ms));
             }
             sleep(10000).then(() => { 
               window.location.replace('/login');
             });
          }
           if (respons.data.app_code == 403) {
           // TODO: узнать код для 'почты нет в б.д.'
             console.log("показываем на форме предупреждение о почте");
             let answer = document.querySelector(".erroruser");
             answer.innerText = 'Не верно указана почта';
             this.overlay = true;
           }
           } catch (e) {
           console.log("сервер не доступен, попробуйте повторить попытку позже");
           console.log(e);
           let answer = document.querySelector(".erroruser");
           answer.innerText = 'Повторите попытку позже';
           this.overlay = true;

         }
      },
    }
}
</script>

<style>
.comment-title {
  /* font-size: 4.11em; 70px */
  font-weight: bold;
  color: #351BA9;
  text-align: center;
  margin: 0 0 1.95vh 0; /* 20px */
}
</style>
