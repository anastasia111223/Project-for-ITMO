<template>
      <v-container >
                <v-row justify-center wrap>
                    <v-col col="12" align-self="center">
                    <h1 class="comment-title" :size="fontSize">{{ title  }}</h1>
                    <p class="text-caption font-weight-light d-block text-center">{{message}}</p>
                    </v-col>
                </v-row>
                <v-row class="d-flex justify-center pa-0">
                    <v-col col="6" sm="8" xs="12" align-self="center" >
                        <v-form @submit.prevent="authTo"
                          ref="form"
                          v-model="valid"
                          lazy-validation>
                          <label for="name">Логин</label>
                          <v-text-field id="name" 
                            label="Александрович" 
                            type="text" 
                            v-model.trim="user.name"
                            class="border-radius.rounded-lg pa-0 ma-1"
                            :counter="50"
                            :rules="nameRules"
                            outlined
                            clearable
                            color="blue darken-2"
                            onchange="validate"
                            height=40px
                            required></v-text-field>
                    <!-- </v-row> -->
                    <!-- <v-row class="pa-1 my-2 d-block"> -->
                        <v-text-field id="password" 
                            label="Пароль" 
                            :append-icon="showPasswordIcon ? '$vuetify.icons.values.eye' : '$vuetify.icons.values.eyeSlash'"
                            :type="showPasswordIcon ? 'text' : 'password'"
                            @click:append="showPasswordIcon = !showPasswordIcon"
                            v-model.trim="user.pwd"
                            :rules="namePassword"
                            class="border-radius.rounded-lg"
                            counter="50"
                            outlined
                            clearable
                            onchange="validate"
                            color="blue darken-2"
                            required></v-text-field>
                            <!-- <font-awesome-icon icon="spinner" /> -->
                        <!-- <input type="submit"> -->
                        <v-row class="pa-0 ma-3 justify-space-between align-self-center">
                          <!-- <v-col cols="2" > -->
                            <v-btn depressed small class="my-4 rounded-xl" dark color="#351BA9">
                                <v-icon>&#x2713</v-icon>
                                
                            </v-btn>
                          <!-- </v-col>
                          <v-col cols="10"> -->
                            <nuxt-link to="/forgotpsw" color="#351BA9" 
                                class="text-decoration-none">Забыли пароль?</nuxt-link>
                          <!-- </v-col> -->
                        </v-row>
                        <v-btn type="submit" 
                            @submit.prevent="signIn"
                            class="d-online-block elevation-2 ma-5 px=10"
                            width="60%"
                            dark color="#351BA9">Войти</v-btn>
            <!-- <nuxt-link to="/userPage">Перейти в личный кабинет</nuxt-link> -->
                    </v-form> 
                   </v-col>
                   <v-overlay
                    :absolute="absolute"
                    :z-index="zIndex"
                    :value="overlay">
                    <v-btn
                      class="erroruser white--text"
                      color="#351BA9"
                      @click="overlay = false"></v-btn>
                   </v-overlay>
                </v-row>
                <v-row class="pa-0 mt-12 justify-start align-self-center">
                    <nuxt-link to="#" color="#351BA9" 
                                class="text-decoration-none black--text pa-4">Впервые в Олимп?</nuxt-link>
                    <nuxt-link to="#" color="#351BA9" 
                                class="text-decoration-none #351BA9--text pa-4">Зарегистрироваться?</nuxt-link>
                </v-row>
      </v-container>
      
</template>
<script>
import {mapMutations} from 'vuex';

export default {
    layout: 'authorization',
    // OR
    // layout (context) {
    // return 'authorization'
    // },
    data(){
        return {
            user : {
                name: "",
                password: ""
            },
            nameRules: [
              v => !!v || 'Поле должно быть заполнено',
              v => (v && v.length <= 50) || 'Логин не может быть больше 50 символов',
            ],
            namePassword: [
              v => !!v || 'Поле должно быть заполнено',
              // v => (v && v.length >= 6) || 'Пароль не может быть меньше 6 символов',
            ],
            // page: "auth",
            title: "Добро пожаловать!",
            message: "Пожалуйста, войдите в свой профиль",
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
      ...mapMutations({
            setAuth: 'setAuth'
            }), 
        validate () {
            this.$refs.form.validate();
        },                                                                                                         
        signIn(){
      // валидация и проверки
      let fd= new FormData();
      fd.append('login', this.user.name); 
      fd.append('passsword', this.user.password);
      fetch('/auth', {
        method: 'post',
        body: fd
      }).then(response => response.json())
      .then(json => {
        // тут действия зависят от того массива (массив получили из json) который прислал сервер
        // сервер может прислать: 
        // [
        // 'message' => 'success'  // или 'error'
        // 'reason' => '1 - когда пришла ошибка ('error')
        //  ]
        let answer = document.querySelector(".erroruser");
        if (!json.message ==='error') {
          if (this.setAuth(json.message)) {
            window.location.replace('/userPage');
          }
        } else if (json.message==='error' && json.reason === 1) {
          answer.innerText = 'Пользователь с таким именем уже есть';
          this.overlay = true;
        //   отправка текста в overlay и его отоблражение true 
        } else {
          answer.innerText = 'Попробуйте позже';
          this.overlay = true;
        }
      }).catch(e => {
        console.log(e); // перехват ошибки, если грубая ошибка, не установилось соединение
      });
    }
    }
    // },
    // created: {
    //     getPage(){
    //         this.$emit('pagename', page);
    //     }
    // }
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
  font-size: 1.6em;
}

</style>