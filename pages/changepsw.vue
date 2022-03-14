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
                          @submit.prevent="changePsw"
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
                        <v-overlay
                            :absolute="absolute"
                            :z-index="zIndex"
                            :value="overlay">
                            <nuxt-link :to="path">
                                <v-btn
                                class="erroruser white--text"
                                color="#351BA9"></v-btn>
                            </nuxt-link>
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
    // layout: 'authorization',
    data(){
        return {
            user : {
                name: "",
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
            path: "/auth"

        }
    },
    methods: {  
        validate () {
            this.$refs.form.validate();
        },                                                                                                      
        changePsw(){
            this.validate();
      if (this.user.password===this.user.password2) {
      let fd= new FormData();
      fd.append('password', this.user.password); 
      fetch('/changepsw', {
        method: 'post',
        body: fd
      }).then(response => response.json())
      .then(json => {
        // сервер может прислать: 
        // [
        // 'message' => 'success'  // или 'error'
        // 'reason' => '1 - когда пришла ошибка ('error')
        //  ]
        let answer = document.querySelector(".erroruser");
        if (json.message ==='success') {
            answer.innerHTML = `
                <h4>Пароль был успешно заменен</h4>
                <span>Вы можете перейти на страницу авторизации</span>
                `;
            this.overlay = true;
            // window.location.replace('/auth');
        // } else if (json.message==='error' && json.reason === 1) {
        //   answer.innerText = 'Такой пользователь не зарегистрирован';
        //   this.overlay = true;
        } else {
          path = "/auth" // или поставить # ???
          answer.innerText = 'Попробуйте позже';
          this.overlay = true;
        }
      }).catch(e => {
        console.log(e); // перехват ошибки, если грубая ошибка, не установилось соединение
      });
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
  font-size: 1.6em;
}


</style>