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
                        <!-- <v-row class="pa-0 my-2"> -->
                        <v-row class="pa-1 my-2 justify-center">
                            <v-btn type="submit" depressed class="d-block ma-3 px=10"
                                dark color="#351BA9" width="60%">Подтвердить</v-btn>
                        <!-- </v-row> -->
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
// import {mapMutations} from 'vuex';

export default {
    layout: 'auth',
    data(){
        return {
            user : {
                name: "",
                password: "",
                email: ""
            },
            emailRules: [
              v => !!v || 'Поле должно быть заполнено',
              v => /.+@.+\..+/.test(v) || 'Введите верный адрес почты',
            ],
            page: "auth",
            title: "Забыли пароль?",
            message: "Мы вышлем на почту письмо для смены пароля",
            overlay: false,
            absolute: true,
            zIndex: 1

        }
    },
    methods: {
        validate () {
            this.$refs.form.validate();
        },
        forgotpsw(){
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
          if (this.setAuth(json.message)) {
            answer.innerText = 'На почту отправлено письмо для смены пароля';
            this.overlay = true;
            // задержка по времени
            window.location.replace('/auth');
          }
        } else if (json.message==='error' && json.reason === 1) {
          answer.innerText = 'Не верно указана почта';
          this.overlay = true;
        } else {
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
</style>
