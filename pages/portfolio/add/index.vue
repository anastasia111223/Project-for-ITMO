<template>
  <section>
    <v-col class="sidebar-portfolio"
      md="3">
      <MenuPortfolio />
    </v-col>
    <v-col md-9 pa-0 color='whitesmoke'>
      <v-form ref="form"
        @submit.prevent="login"
        v-model="valid"
        lazy-validation>
        <v-container>
          <v-row>
            <v-col sm-10>
              <h3>Дополнительное образование</h3>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <label for="typeSelect">Логин</label>
              <v-select
                id="typeSelect"
                :items="items"
                dense
                outlined></v-select>
            </v-col>
            <v-col>
                <label for="univer">Логин</label>
                <v-text-field id="univer"
                    type="text"
                    v-model.trim="user.university"
                    class="border-radius.rounded-lg pa-0 ma-1"
                    :counter="100"
                    :rules="univerRules"
                    outlined
                    clearable
                    color="blue darken-2"
                    onchange="validate"
                    height=40px
                    required></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-col>

  </section>
</template>
<script>
import MenuPortfolio from '~/components/portfolio/MenuPortfolio.vue'

export default {
    components: {MenuPortfolio},
    data(){
        return {
            user : {
                typeAdd: "Курсы",
                duration: "1 yaer",
                university: "ИТМО"
            },
            univerRules: [
              v => !!v || 'Поле должно быть заполнено',
              v => (v && v.length <= 100) || 'Название учебного завежения не может быть больше 100 символов',
            ],
            // overlay: false,
            // absolute: true,
            valid: true,
            items: {
              1: 'Курсы',
              2: 'Онлайн курсы'
            }
        }
    }
}
</script>
