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
                        <v-form @submit.prevent="authTo">
                        <v-text-field id="email" 
                            label="Почта" 
                            type="email" 
                            v-model.trim="user.email"
                            class="border-radius.rounded-lg"
                            counter="50"
                            outlined
                            clearable
                            color="blue darken-2"
                            required></v-text-field>
                        <!-- <v-row class="pa-0 my-2"> -->
                        <v-row class="pa-1 my-2 justify-center">
                            <v-btn type="submit" depressed class="d-block ma-5 px=10" 
                                dark color="#351BA9" width="60%">Подтвердить</v-btn>
                        <!-- </v-row> -->
                            <v-btn outlined color="#351BA9" 
                                class="d-block ma-5 px=10 #351BA9--text" width="60%">
                            <nuxt-link to="#"
                                class="text-decoration-none">Зарегистрироваться?</nuxt-link>
                            </v-btn>
                          <!-- </v-col> -->
                        </v-row>
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
    layout: 'authorization',
    data(){
        return {
            user : {
                name: "",
                password: "",
                email: ""
            },
            page: "auth",
            title: "Забыли пароль?",
            message: "Мы вышлем на почту письмо для смены пароля"

        }
    },
    methods: {     

    }
}
</script>

<style>

</style>