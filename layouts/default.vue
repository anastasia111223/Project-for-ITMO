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
      <v-row>
              <v-col col="6" >
                <v-row class="ma-0">
                  <div class="logo">
                      <img class="blue-light"    src="/vectors-light-logo/blue.svg">
                      <img class="green-light"   src="/vectors-light-logo/green.svg">
                      <img class="yellow-light"  src="/vectors-light-logo/yellow.svg" >
                      <img class="red-light"     src="/vectors-light-logo/red.svg" >
                      <img class="olimp"         src="/olimp/olimp.svg" >
                      <img class="olimp-comment" src="/olimp/olimp_comment.svg" >
                  </div>
                    <!-- <OlimpLogo/> -->
                </v-row>
                

                <Nuxt/>
                 <!-- :pagename="page" -->
              </v-col>
              <v-col col="6">
                <div class="parent-for-sparkline">
                  <!-- BLUE WAVE -->
                  <v-sparkline :value="blue_wave_values"
                      class="sparkline-blue"
                      color="#351BA9"
                      height="380"
                      stroke-linecap="round"
                      :smooth = "blue_wave_radius"
                      fill=true
                      auto-draw>
                  </v-sparkline>

                  <!-- GREEN WAVE -->
                  <v-sparkline :value="green_wave_values"
                      class="sparkline-green"
                      color="#73CA30"
                      height="340"
                      stroke-linecap="round"
                      :smooth = "green_wave_radius"
                      fill=true
                      auto-draw>
                  </v-sparkline>

                  <!-- YELLOW WAVE -->
                  <v-sparkline :value="yellow_wave_values"
                      class="sparkline-yellow"
                      color="#F2D131"
                      height="300"
                      stroke-linecap="round"
                      :smooth = "yellow_wave_radius"
                      fill=true
                      auto-draw>
                  </v-sparkline>

                  <!-- RED WAVE -->
                  <v-sparkline :value="red_wave_values"
                      class="sparkline-red"
                      color="#C81818"
                      height="260"
                      stroke-linecap="round"
                      :smooth = "red_wave_radius"
                      fill=true
                      auto-draw>
                  </v-sparkline>
                </div>


              </v-col>

          </v-row>
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
      title: 'Э́врика',
      blue_wave_values: [0,55,45,92,65],
            blue_wave_radius: 60,
            green_wave_values: [0,55,45,92,65],
            green_wave_radius: 60,
            yellow_wave_values: [0,55,45,92,65],
            yellow_wave_radius: 60,
            red_wave_values: [0,55,45,92,65],
            red_wave_radius: 60
    }
  }
}
</script>

<style>
.shadow-line {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}

/* .logo {
    margin-top: 1em;
} */
/* Настройка векторов */


.logo {
	position: relative;
	width: 10.52941176470588em;
	height: 8.529411764705882em;
	margin: 1.95vh 0 2.44vh 1.176em;
}

.login > h1 {
	font-size: 4.11em; /* 70px */
	font-weight: bold;
	color: #351BA9;
	text-align: center;
	margin: 0 0 1.95vh 0; /* 20px */
}

.logo > img.blue-light {
	bottom: 0;
}
.logo >  img.green-light {
	left: 0.5em; /* 8.5px */
	top: 1em;   /* 17px  */
	bottom: 0;
}
.logo > img.yellow-light {
	left: 1.025em;
	top: 1.88235em;
	bottom: 0;
}
.logo > img.red-light {
	left: 1.5em;
	top: 2.64705em;
	bottom: 0;
}
.logo > .olimp {
	left: 2.95em;
	top: 5.65em;
}

.logo > .olimp-comment {
	left: 2.95em;
	top: 7.5em;
}

.logo > img , .waves > img {
	position: absolute;
}

.parent-for-sparkline {
  position: absolute;
  bottom: 0px;
  right: -30px;
  width: 50%;
  height: 100%;
  overflow: hidden;
  /* padding: 0; */
  background-color : transparent;
}
.sparkline-blue {
    position: absolute;
    bottom: -20px;
    right: 0;
    height: 110%;
}

.sparkline-green {
    position: absolute;
    bottom: -20px;
    right: 0;
    height: 92.2%;
}
.sparkline-yellow {
    z-index: 10;
    position: absolute;
    bottom: -20px;
    right: 0;
    height: 75.3%;
}
.sparkline-red {
    z-index: 20;
    position: absolute;
    bottom: -20px;
    right: 0;
    height: 60.5%;
}
/* .comment-title {
  font-size: 4.11em; 70px
  font-weight: bold;
  color: #351BA9;
  text-align: center;
  margin: 0 0 1.95vh 0; 20px
} */

svg {
  margin:-20px !important;
  padding:0 !important;
}

.logo {
  margin-top: 1em;
}
</style>
