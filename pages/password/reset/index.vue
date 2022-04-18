<template>
      <v-container>
                <v-row class="d-flex justify-center" wrap>
                    <v-col col="12" align-self="center">
                    <h1 class="comment-title" :size="fontSize">{{ title  }}</h1>
                    <p class="text-caption font-weight-light d-block text-center">{{message}}</p>
                    </v-col>
                </v-row>
                <v-row class="pa-0" justify="center">
                    <v-col col="6" sm="8" xs="12" align-self="center" >
                        <v-form ref="form"
                          @submit="change"
                          lazy-validation>
                        <label for="password">Пароль</label>
                        <v-text-field id="password"
                            label="Пароль"
                            type="password"
                            v-model.trim="user.password"
                            class="border-radius.rounded-lg"
                            counter="50"
                            :rules="passwordRules"
                            outlined
                            clearable
                            color="blue darken-2"
                            required></v-text-field>
                        <label for="password2">Повторите пароль</label>
                        <v-text-field id="password2"
                            label="Повторите пароль"
                            type="password"
                            v-model.trim="user.password2"
                            class="border-radius.rounded-lg"
                            counter="50"
                            :rules="password2Rules"
                            outlined
                            clearable
                            color="blue darken-2"
                            required></v-text-field>
                        <v-row class="pa-0 my-2 justify-center">
                            <v-btn type="submit" depressed class="d-block ma-2 px=10"
                                dark color="#351BA9" width="60%">Подтвердить</v-btn>
                        </v-row>
                        <!-- <v-btn @click="overlay = !overlay">Overlay</v-btn> -->
                        <v-overlay
                            :absolute="absolute"
                            :z-index="zIndex"
                            :value="overlay">
                            <!-- <nuxt-link :to="path"> -->
                                <v-btn
                                class="erroruser white--text pa-md-4 mx-lg-auto"
                                ref="erroruser"
                                color="#351BA9"
                                @click="overlay = !overlay">{{answer}}</v-btn>
                            <!-- </nuxt-link> -->
                        </v-overlay>
                    </v-form>
                   </v-col>
                </v-row>

                <v-row>
                </v-row>

      </v-container>

</template>
<script>
// import {mapMutations} from 'vuex';

export default {
    layout: 'auth',
    data(){
        return {
            user : {
                password: "",
                password2: ""
            },
            passwordRules: [
              v => !!v || 'Поле должно быть заполнено',
              v => (v && v.length >= 6) || 'Пароль не может быть меньше 6 символов',
            ],
            password2Rules: [
              v => !!v || 'Поле должно быть заполнено',
              v => (v && v.length >= 6) || 'Пароль не может быть меньше 6 символов',
              v => (v && v===this.user.password) || 'Пароли не совпадают'
            ],
            page: "auth",
            title: "Смена пароля",
            message: "Введите новый пароль",
            overlay: false,
            absolute: true,
            zIndex: 1,
            path: "#",
            answer: ""
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
        async change(event) {
         event.preventDefault();
        //  this.overlay = true;
         try {
          //  console.log('call local politic')
           let respons = await this.$axios.post('/password/reset', {
             data: {
               reset_token: this.$route.query.reset_t,
               password: this.user.password
             }
           })
           console.log(respons.data);
          if (respons.data.app_code == 200) {
             this.overlay = true;
            if (respons.data.app_code) console.log(respons.data.app_code);
             this.path = "/login";
            //  this.$refs.erroruser.innerHTML = `
            //     <h4>Пароль был успешно заменен</h4>
            //     <span>Вы можете перейти на страницу авторизации</span>
            //     `;
             this.answer = 'Пароль был успешно заменен'
             function sleep(ms) {
              return new Promise(resolve => setTimeout(resolve, ms));
             }
             sleep(10000).then(() => { 
              //  window.location.replace('/login');
              this.router.push('/login');
             });
          }
           if (respons.data.app_code == 403) {
           // TODO: какие ошибки будут
             this.overlay = true;
             console.log("Ошибка 403");
             this.answer = 'Нельзя изменить пароль для не существующего пользователя';
           }
           } catch (e) {
             this.overlay = true;
           console.log("сервер не доступен , попробуйте повторить попытку позже");
           console.log(e);
           this.answer = 'Повторите попытку позже';

         }
      }
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
.erroruser {
  text-align: center;
  font-size: 1.0em;
  padding: 10px;
}


</style>
