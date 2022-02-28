<template>
      <v-container>
          <!-- <v-row>
              <v-col col="6" align-self="center" justify="center">
                <v-row class="overflow-hidden ma-0">
                    <OlimpLogo/>
                </v-row>
                <v-row justify="center" wrap>
                    <v-col col="12" align-self="center">
                    <h1 class="#351BA9--text text-center display-2 font-weight-bold">Добро пожаловать!</h1>
                    <p class="text-caption font-weight-light d-block text-center">Пожалуйста, войдите в свой профиль</p>
                    </v-col>
                </v-row> -->
                <v-row class="pa-0" justify="center">
                    <v-col col="6" sm="8" xs="12" align-self="center" >
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
                            label="Логин" 
                            type="password" 
                            v-model.trim="user.pwd"
                            class="border-radius.rounded-lg"
                            counter="50"
                            outlined
                            clearable
                            color="blue darken-2"
                            required></v-text-field>
                        <!-- <input type="submit"> -->
                        <v-row class="pa-0 my-2 justify-space-between align-self-center">
                          <!-- <v-col cols="2" > -->
                            <v-btn depressed small class="my-4 rounded-xl" dark color="#351BA9">
                                <v-icon>&#x2713</v-icon>
                            </v-btn>
                          <!-- </v-col>
                          <v-col cols="10"> -->
                            <nuxt-link to="#" color="#351BA9" 
                                class="text-decoration-none">Забыли пароль?</nuxt-link>
                          <!-- </v-col> -->
                        </v-row>
                        <v-btn type="submit" class="d-online-block elevation-2 ma-5 px=10"
                            width="60%"
                            dark color="#351BA9">Войти</v-btn>
            <!-- <nuxt-link to="/userPage">Перейти в личный кабинет</nuxt-link> -->
                    </v-form> 
                   </v-col>
                </v-row>
                <v-row>
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
                pwd: ""
            },

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

    }
}
</script>

<style>
.parent-for-sparkline {
    position: relative;
  width:100%;
  height: 85%;
  overflow: hidden;
  /* padding: 0; */
  background-color : transparent;
}
.first-sparkline {
    position: absolute;
  bottom: 0;
  right: 0;
  width: 95%;
  height: 80%;
}
.sparkline3 {
    z-index: 10;
    position: absolute;
  bottom: 0;
  right: 0;
  width: 90%;
  height: 75%;
}
.sparkline4 {
    z-index: 20;
    position: absolute;
  bottom: 0;
  right: 0;
  width: 85%;
  height: 70%;
}

</style>