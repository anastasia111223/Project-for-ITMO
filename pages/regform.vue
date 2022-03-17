<template>

      <v-container>

                <v-row class="pa-0" justify="center">
                    <v-col col="6" sm="8" xs="12" align-self="center" >
                        <v-form v-model="valid">

      <v-row>
        <v-col
          cols="12"
          md="6"
        >

        <p>Логин</p>
          <v-text-field
             id="login"
            label="Александрович"
            type="login"
            v-model.trim="user.login"
            class="border-radius.rounded-lg pa-0"
            counter="50"
            outlined
            clearable
            color="blue darken-2"
            required
          ></v-text-field>
        </v-col>


        <v-col
          cols="12"
          md="6"
        >
         <p>Пароль</p>
          <v-text-field
             id="password"
            label="Пароль"
            type="password"
            v-model.trim="user.password"
            append-icon="mdi-eye-off"
            class="border-radius.rounded-lg"
            counter="50"
            outlined
            clearable
            color="blue darken-2"
            required
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col
          cols="12"
          md="6"
        >
        <p>Повторите пароль</p>
          <v-text-field id="password"
            label="Повторите пароль"
            type="password"
            v-model.trim="user.repeatpassword"
            append-icon="mdi-eye-off"
            class="border-radius.rounded-lg"
            counter="50"
            outlined
            clearable
            color="blue darken-2"
            required></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="6"
        >
        <p>Почта</p>
           <v-text-field id="email"
            label="example@mail.ru"
            type="email"
            v-model.trim="user.email"
            class="border-radius.rounded-lg"
            counter="50"
            outlined
            clearable
            color="blue darken-2"
            required></v-text-field>
        </v-col>
      </v-row>


      <v-row>
        <v-col
          cols="12"
          md="6"
        >
        <p>Имя</p>
          <v-text-field id="name"
            label="Александр"
            type="text"
            v-model.trim="user.name"
            class="border-radius.rounded-lg pa-0"
            counter="50"
            outlined
            clearable
            color="blue darken-2"
            required></v-text-field>
        </v-col>


        <v-col
          cols="12"
          md="6"
        >
        <p>Фамилия</p>
         <v-text-field id="surname"
        label="Петров"
        type="text"
        v-model.trim="user.surname"
        class="border-radius.rounded-lg"
        counter="50"
        outlined
        clearable
        color="blue darken-2"
        required></v-text-field>
        </v-col>
      </v-row>

                         <v-row class="pa-0" justify="center">
                          <v-btn type="registration" class="d-online-block elevation-2 ma-5 px=10"
                            width="60%"
                            dark color="#351BA9">Зарегистрироваться</v-btn>
                        <v-btn type="enter" class="d-online-block elevation-2 ma-5 px=10"
                            width="60%"
                            >Войти</v-btn>
           <v-form><nuxt-link to="/userPage">Зарегистрироваться с помощью</nuxt-link> </v-form>
                             </v-row>

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
// import {mapMutations} from 'vuex';


export default {

     // layout: 'authorization',
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
}

</script>
