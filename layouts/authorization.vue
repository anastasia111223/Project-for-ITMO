<template>
  <v-app dark>
    <!-- <v-navigation-drawer
      v-model="drawer"
      color="#3914AF"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-card
        class="d-flex justify-center mb-6 logo"
        color="#3914AF"
        flat
        tile
      >
        <v-img
          max-height="36"
          max-width="36"
          src="/logo.png"
          class="mb-5"
          alt="логотип ОЛИМП"
          position="center"
        />
      </v-card>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon :color="item.color">
              {{ item.icon }}
            </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="clipped = !clipped"
      >
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="fixed = !fixed"
      />
      <v-toolbar-title v-text="title" />
      <v-spacer /> -->
      <!-- <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn> -->
    <!-- </v-app-bar> -->
    <v-main>
      <v-container>
          <v-row>
              <v-col col="6" align-self="center" justify="center">
                <v-row class="overflow-hidden ma-0">
                    <OlimpLogo/>
                </v-row>
                <v-row justify="center" wrap>
                    <v-col col="12" align-self="center">
                    <h1 class="#351BA9--text text-center display-2 font-weight-bold">Добро пожаловать!</h1>
                    <p class="text-caption font-weight-light d-block text-center">Пожалуйста, войдите в свой профиль</p>
                    </v-col>
                </v-row>
                    
                <Nuxt/>
                
              </v-col>
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
          </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-account',
          title: 'Портфолио',
          to: '/portfolio',
          color: '#ffffff'
        },
        {
          icon: 'mdi-calendar',
          title: 'Расписание',
          to: '/timetable',
          color: '#ffffff'
        },
        {
          icon: 'mdi-hammer-screwdriver',
          title: 'Проекты',
          to: '/project',
          color: '#ffffff'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Сообщения',
          to: '/project',
          color: '#ffffff'
        },
        {
          icon: 'mdi-hammer-screwdriver',
          title: 'Новый проект',
          to: '/newproject',
          color: '#ffffff'
        }

      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Э́врика'
    }
  }
}
</script>

<style>
.logo {
  margin-top: 1em;
}
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
