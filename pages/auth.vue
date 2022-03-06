<template>
      <v-container class="d-flex justify-center">
                <v-row justify="center" wrap>
                    <v-col col="12" align-self="center">
                    <h1 class="comment-title text-sm-h3">{{ title  }}</h1>
                    <p class="text-caption font-weight-light d-block text-center">{{message}}</p>
                    </v-col>
                </v-row>
                <v-row class="pa-0" justify="center">
                    <!-- <v-col col="6" sm="8" xs="12" align-self="center" > -->
                        <v-form @submit.prevent="authTo">
                        <v-text-field id="name" 
                            label="Логин" 
                            type="text" 
                            v-model.trim="user.name"
                            class="border-radius.rounded-lg pa-0"
                            counter="50"
                            outlined
                            clearable
                            color="blue darken-2"
                            required></v-text-field>
                    <!-- </v-row> -->
                    <!-- <v-row class="pa-1 my-2 d-block"> -->
                        <v-text-field id="password" 
                            label="Пароль" 
                            :append-icon="showPasswordIcon ? '$vuetify.icons.values.eye' : '$vuetify.icons.values.eyeSlash'"
                            :type="showPasswordIcon ? 'text' : 'password'"
                            @click:append="showPasswordIcon = !showPasswordIcon"
                            v-model.trim="user.pwd"
                            class="border-radius.rounded-lg"
                            counter="50"
                            outlined
                            clearable
                            color="blue darken-2"
                            required></v-text-field>
                            <!-- <font-awesome-icon icon="spinner" /> -->
                        <!-- <input type="submit"> -->
                        <v-row class="pa-0 my-2 justify-space-between align-self-center">
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
                        <v-btn type="submit" class="d-online-block elevation-2 ma-5 px=10"
                            width="60%"
                            dark color="#351BA9">Войти</v-btn>
            <!-- <nuxt-link to="/userPage">Перейти в личный кабинет</nuxt-link> -->
                    </v-form> 
                   <!-- </v-col> -->
                </v-row>
                <v-row class="pa-0 mt-12 justify-start align-self-center">
                    <nuxt-link to="#" color="#351BA9" 
                                class="text-decoration-none black--text pa-4">Впервые в Олимп?</nuxt-link>
                    <nuxt-link to="#" color="#351BA9" 
                                class="text-decoration-none #351BA9--text pa-4">Зарегистрироваться?</nuxt-link>
                </v-row>
              <!-- </v-col>
              <v-col col="6" align-self="end">
                  <div class="parent-for-sparkline">
                    <Lines/>
                        <div class="first-sparkline">
                        <Line2/>
                        <div class="sparkline3">
                            <Line3/>
                            <div class="sparkline4">
                                <Line4/>
                            </div>
                        </div>
                        </div>
                  </div>
              </v-col>
          </v-row> -->
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
            page: "auth",
            title: "Добро пожаловать!",
            message: "Пожалуйста, войдите в свой профиль"
        }
    },
    methods: {                                                                                                             
        ...mapMutations({
            checkPwd: 'checkPwd'
            }),
        authTo() {
             this.checkPwd({login: this.user.name, pwd: this.user.pwd});
             window.location.replace('userPage.vue');
        }
    // },
    // created: {
    //     getPage(){
    //         this.$emit('pagename', page);
    //     }
    // }
}
}
</script>

<style>
.comment-title {
  font-size: 4.11em; /* 70px */
  font-weight: bold;
  color: #351BA9;
  text-align: center;
  margin: 0 0 1.95vh 0; /* 20px */
}
@media $display-breakpoints.sm-only {
    font-size: 2em;
}


</style>