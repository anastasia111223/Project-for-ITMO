<template>
      <v-container>
                <v-row class="pa-0" justify="center">
                    <v-col col="6" sm="8" xs="12" align-self="center" >
                        <v-form @submit.prevent="authTo">
                        <v-text-field id="password" 
                            label="Пароль" 
                            type="password" 
                            v-model.trim="user.password"
                            class="border-radius.rounded-lg"
                            counter="50"
                            outlined
                            clearable
                            color="blue darken-2"
                            required></v-text-field>
                        <v-text-field id="password2" 
                            label="Повторите пароль" 
                            type="password" 
                            v-model.trim="user.password2"
                            class="border-radius.rounded-lg"
                            counter="50"
                            outlined
                            clearable
                            color="blue darken-2"
                            required></v-text-field>
                        <v-row class="pa-0 my-2 justify-center">
                            <v-btn type="submit" depressed class="d-block ma-5 px=10" 
                                dark color="#351BA9" width="60%">Подтвердить</v-btn>
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
                password2: "",
                email: ""
            },
            page: "auth"

        }
    },
    methods: {     

    }
}
</script>

<style>

</style>