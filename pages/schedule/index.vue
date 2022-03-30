<template>
  <div class="container v-application">

    <v-calendar @click:date="dateClick" />

    <div data-app>
      <event-add v-show="showEventAdd" :repeats="repeats" :date="date" :visible="showEventAdd"
                 @repeate="showRepeatsForm" @close="showEventAdd = false" @save="eventSave"/>
    </div>

    <div data-app>
      <event-period v-show="showEventPeriod" :event="event" :date="date" :visible="showEventPeriod" @close="closeEventPeriod()"
                    @save="eventPeriodsSave"/>
    </div>

  </div>
</template>

<script>
export default {
  name: "calendar",
  data: () => ({
    date: '',
    event: {},
    repeats: {},
    showEventAdd: false,
    showEventPeriod: false
  }),

  methods: {
    dateClick(data) {
      this.date = data.date;
      this.showEventAdd = true;
    },

    closeEventPeriod() {
      this.showEventPeriod = false;
      this.showEventAdd = true;
    },

    eventPeriodsSave(data) {
      this.repeats = data;
    },

    showRepeatsForm(data) {
      this.showEventPeriod = true
      this.event = data;
    },

    eventSave(data) {
      console.log(data);
    }
  }
}
</script>
