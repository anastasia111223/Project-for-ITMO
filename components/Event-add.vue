<template>
  <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="620px">

        <v-card class="modal">
          <div class="modal-inner">
            <v-card-title>
              <span class="modal-title font-als-b font-lg">Новое мероприятие</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-form ref="form">

                  <v-row class="form-row">
                    <v-col cols="12">
                      <v-subheader>Название</v-subheader>
                      <v-text-field v-model="form.title" placeholder="Placeholder" class="form-field bg-dark"
                                    dense outlined hide-details persistent-placeholder required
                      />
                    </v-col>
                  </v-row>

                  <v-row class="form-row form-row-date">
                    <v-col cols="12" sm="7">
                      <v-layout>
                        <v-icon>mdi-calendar-month-outline</v-icon>
                        <p class="date-label">Дата</p>
                        <p class="date-value first-uppercase">{{ $moment(date).format('dddd, D MMMM') }}</p>
                      </v-layout>
                    </v-col>
                    <v-col cols="12" sm="5">
                      <v-layout>
                        <v-icon>mdi-clock-time-five-outline</v-icon>
                        <p class="date-label">Время</p>
                        <v-layout class="date-value">
                          <v-text-field type="time" v-model="form.time.from"
                                        pattern="^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$"
                                        dense hide-details
                          />
                          <span> — </span>
                          <v-text-field type="time" v-model="form.time.to"
                                        pattern="^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$"
                                        dense hide-details
                          />
                        </v-layout>
                      </v-layout>
                    </v-col>
                  </v-row>

                  <v-row class="form-row">
                    <v-col cols="12" sm="8">
                      <v-subheader>Местоположение</v-subheader>
                      <v-select v-model="form.target" required
                                class="form-field" placeholder="Выберите площадку"
                                append-icon="mdi-chevron-down"
                                dense outlined hide-details persistent-placeholder
                                :items="data.targets" item-text="name" item-value="id"
                      />
                    </v-col>

                    <v-col cols="12" sm="4">
                      <v-subheader>Аудитория</v-subheader>
                      <v-select v-model="form.auditorium" required
                                class="form-field" placeholder=""
                                append-icon="mdi-chevron-down"
                                dense outlined hide-details persistent-placeholder
                                :items="data.auditoriums" item-text="name" item-value="id"
                      />
                    </v-col>
                  </v-row>

                  <v-row class="form-row">
                    <v-col cols="12" sm="6">
                      <v-subheader>Тип мероприятия</v-subheader>
                      <v-select v-model="form.type" required
                                class="form-field" placeholder=""
                                append-icon="mdi-chevron-down"
                                dense outlined hide-details persistent-placeholder
                                :items="data.types" item-text="name" item-value="id"
                      />
                    </v-col>

                    <v-col cols="12" sm="6" @click="setRepeates">
                      <v-subheader>Регулярность</v-subheader>
                      <v-select v-model="form.regularity" required
                                class="form-field" placeholder="Повторяется"
                                append-icon="mdi-chevron-down"
                                dense readonly outlined hide-details persistent-placeholder
                                :items="[]"
                      />
                    </v-col>
                  </v-row>

                  <v-row class="form-row">
                    <v-col cols="12">
                      <v-subheader>Описание мероприятия</v-subheader>
                      <v-textarea v-model="form.description" auto-grow rows="3"
                                  class="form-field bg-dark" placeholder="Placeholder"
                                  dense outlined hide-details persistent-placeholder
                      />
                    </v-col>
                  </v-row>

                  <v-row class="form-row">
                    <v-col cols="12">
                      <v-subheader>Организатор</v-subheader>
                      <v-select v-model="form.organizer" required
                                class="form-field" placeholder="Выберите организатора"
                                append-icon="mdi-chevron-down"
                                dense outlined hide-details persistent-placeholder
                                :items="data.organizers" item-text="name" item-value="id"
                      />
                    </v-col>
                  </v-row>

                  <v-card-actions>
                    <v-btn class="btn" text @click="dialog = false">Отмена</v-btn>
                    <v-btn class="btn btn-dark" text @click="onSubmit">Создать</v-btn>
                  </v-card-actions>
                </v-form>
              </v-container>
            </v-card-text>
          </div>
        </v-card>
      </v-dialog>
    </v-row>
</template>


<script>
export default {
  props: ['visible', 'date', 'repeats'],

  created() {
    this.form = {...this.template};
  },

  computed: {
    dialog: {
      get () {
        this.form = {...this.form, ...this.repeats};
        return this.visible;
      },
      set (value) {
        if (!value) {
          this.$emit('close');
        }
      }
    }
  },

  data() {
    return {
      template: {
        title: '',
        time: {
          from: '00:00',
          to: '00:00'
        },
        events: [],
        target: null,
        auditorium: null,
        type: null,
        regularity: null,
        description: '',
        organizer: null
      },
      form: {},
      data: {
        targets: [
          {name: 'Адрес 1', id: 1},
          {name: 'Адрес 2', id: 2},
          {name: 'Адрес 3', id: 3}
        ],
        auditoriums: [
          {name: 'Первая', id: 1},
          {name: 'Вторая', id: 2}
        ],
        types: [
          {name: 'Тип 1', id: 1},
          {name: 'Тип 2', id: 2},
          {name: 'Тип 3', id: 3}
        ],
        organizers: [
          {name: 'Организатор 1', id: 1},
          {name: 'Организатор 2', id: 2},
          {name: 'Организатор 3', id: 3}
        ]
      }
    }
  },

  methods: {
    onSubmit() {
      this.dialog = false;

      if(this.form?.events?.length) {
        this.form.events.map(event => event.name = this.form.title);
      } else {
        this.createEvent();
      }
      this.$emit('save', this.form);
    },

    setRepeates() {
      this.dialog = false;
      this.$emit('repeate', this.form);
    },

    createEvent() {
      this.form.events = [];
      const event = {
        name: this.form.title,
        date: this.date,
        start: [this.date, this.form.time.from].join(' '),
        end: [this.date, this.form.time.to].join(' ')
      }
      this.form.events.push(event);
    }
  }
}
</script>

<style lang="scss">

.v-form {
  .v-icon::before {
    color: $color;
  }

  .form-row-date {

    input[type="time"] {
      @extend %time;
    }

    .v-icon {
      margin: -2px 10px 0 0;
    }

    .date-value,
    .date-label {
      margin-bottom: 0;
    }

    .date-label {
      margin-right: 14px;
      font-weight: 500;
    }

    .v-input {
      width: 44px;
      margin: 0;
      flex: none;

      .v-input__slot,
      .v-text-field__slot {
        &::before,
        &::after {
          display: none;
        }
      }
    }

    .dayweek {
      display: inline-block;
      max-width: 70px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }
}
</style>
