<template>
<!-- eslint-disable  -->
  <div class="projects ma-10">
    <v-row>
        <v-col cols="12">
          <h3>Список проектов</h3>
        </v-col>
    </v-row>
    <v-row class="ma-0">
      <v-col cols="3" md="5"xs="12">
        <nuxt-link to="/project/new" color="#351BA9"
          class="text-decoration-none d-block ma-2">
          <v-btn type="submit" outlined color="#351BA9" rounded-xl
            class="ma-1 text-decoration-none font-weight-bold">
            <v-icon left>
              mdi-plus
            </v-icon>Новый проект</v-btn>
        </nuxt-link>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="2" md="3" xs="12" class="mb-0">
            <v-form v-model="valid" lazy-validation class="pa-0 ma-0">
            <v-text-field id="poisktext"
              type="text"
              v-model.trim="poisktext"
              class="rounded-lg pa-1"
              outlined
              clearable
              label="Что вы хотите найти"
              height="36px"
              color="blue darken-2"
              prepend-inner-icon="mdi-magnify"
              onchange="validate">
            </v-text-field>
            </v-form>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="filters d-flex align-center" cols="3" md="3">
        <span :class="{selected: filter.isAuthorFilter}"  @click="sort('isAuthorFilter')"> Руковожу </span>
        <span :class="{selected: filter.isParticipantFilter}"  @click="sort('isParticipantFilter')"> Участвую </span>
        <span :class="{selected: filter.isFavoriteFilter}"  @click="sort('isFavoriteFilter')"> Избранное </span>
      </v-col>
      <v-spacer></v-spacer>
      <v-col class="filters d-flex justify-end align-center" cols="4">
        <span :class="{selected: filter.isRunningFilter}"  @click="sort('isRunningFilter')"> В разработке </span>
        <span :class="{selected: filter.isStoppedFilter}"  @click="sort('isStoppedFilter')"> Отложены </span>
        <span :class="{selected: filter.isFinishedFilter}"  @click="sort('isFinishedFilter')"> Завершены </span>
        <span> Идеи </span>
        <v-btn @click="pageView=false"
          plain class="px-0">
          <v-icon :color="pageView===true ? 'viewColor' : 'primary'">
            mdi-view-grid
          </v-icon>
        </v-btn>
        <v-btn @click="pageView=true"
          plain class="px-0">
          <v-icon :color="pageView===true ? 'primary' : 'viewColor'">
            mdi-menu
          </v-icon>
        </v-btn>
      </v-col>
    </v-row>
<!--      -->
    <v-container class="mx-0 px-0 pb-0" fluid="true">
      <v-row class="table-border bluedeep--text font-weight-light my-0 rounded-lg rounded-b-0">
        <v-col cols="6" class="ma-0">
          <span>Журнал проекта</span>
        </v-col>
        <v-col cols="1" class="ma-0">
          <span>Модификация</span>
        </v-col>
        <v-col cols="5" class="ma-0">
          <span>Последние изменения</span>
        </v-col>
      </v-row>
      <v-row v-for="project in projectTable" :key="project.id_project" 
        class="row-border"
        height="53">
        <v-col cols="6" class="py-0 d-flex align-center">
          <nuxt-link :to="`project/workbook/${project.id_project}`" class="text-decoration-none bluedeep--text">
            {{ project.title }}</nuxt-link>
        </v-col>
        <v-col cols="1" class="py-0 d-flex align-center">
          <span class="center bluedeep--text font-weight-bold">
            {{ project.name_rev}}</span>
        </v-col>
        <v-col class="d-flex align-center py-0" cols="2">
          <div class=" d-flex d-inline-block pr-5">
              <v-tooltip top class="pa-2 align-self-center" v-if="Object.keys(project.actions).length !== 0">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn v-bind="attrs" v-on="on" 
                    fab
                    small
                    :class="colorStatus(project)">
                <!-- <div v-bind="attrs" v-on="on" :class="colorStatus(project)"> -->
                  <span :class="project.last_changed_status>='2' ? 'white--text' : 'black--text'">{{project.actions.for_publ + project.actions.for_moderation}}</span>
                <!-- </div> -->
                  </v-btn>
                </template>
                <span>{{promptness(project)}}</span>
              </v-tooltip>
              <div class="d-inline-block bluedeep--text ml-2">
              {{ project.last_changed }} <br/>
              {{ project.last_changed_author }}
              </div>
              </div>
        </v-col>
            <v-col class="d-flex justify-space-around align-center py-0" cols="3">
              <div class="d-inline-block px-5">
              <v-tooltip top allow-overflow>
              <template v-slot:activator="{ on, attrs }">
                <nuxt-link :to="`project/about_project/${project.id_project}`" :project="project">
                  <img v-bind="attrs"
                  v-on="on" height="18" src="/Summary.svg">
                </nuxt-link>
              </template>
              <span>О проекте</span>
              </v-tooltip>
            </div>
            <div class="d-inline-block  px-5">
              <v-tooltip top class="px-2">
              <template v-slot:activator="{ on, attrs }">
                <nuxt-link :to="`project/statistics/${project.id_project}`" :project="project">
                  <img v-bind="attrs"
                  v-on="on" height="23" src="/Statistics.svg">
                </nuxt-link>
              </template>
              <span>Статистика</span>
              </v-tooltip>
            </div>
            <div class="d-inline-block px-5">
              <v-tooltip top v-if="project.is_favorites">
              <template v-slot:activator="{ on, attrs }">
                  <img height="23" src="/Icon_star_solid.svg" @click="makeNotFavorite(project)"  
                    v-bind="attrs"
                    v-on="on">
              </template>
              <span>Убрать из избранного</span>
              </v-tooltip>
              <v-tooltip top v-if="!project.is_favorites">
              <template v-slot:activator="{ on, attrs }">
                  <img height="23" src="/Icon_star_outline.svg" @click="makeFavorite(project)" 
                    v-bind="attrs"
                    v-on="on">
              </template>
              <span>Добавить в избранное</span>
              </v-tooltip>
            </div>
            <div class="d-inline-block pl-5 py-0" id="buttonAction">
              <v-menu elevation="0" 
                :offset-y="true"
                color="primary">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    plain
                    v-bind="attrs"
                    v-on="on"
                    @mouseover="hoverIcon3=true" @mouseleave="hoverIcon3=false"
                    class="hover-lined text-capitalize py-8 px-24 text-сormorant secondary--text d-none d-md-flex">
                    <v-list-item-icon class="my-0">
                      <img height="20px" src="/Menu.svg"> 
                    </v-list-item-icon>
                  </v-btn>
                </template>
                <v-list>
                <v-list-item @click="renameProject(project)">
                  <v-list-item-title>Переименовать проект</v-list-item-title>
                </v-list-item>
                <v-list-item @click="editProject(project)">
                  <v-list-item-title>Редактировать команду</v-list-item-title>
                </v-list-item>
                <v-list-item @click="createNewRevision(project)">
                  <v-list-item-title>Создать новую ревизию журнала проекта</v-list-item-title>
                </v-list-item>
                <v-list-item @click="postponeProject(project)">
                  <v-list-item-title>Отложить проект</v-list-item-title>
                </v-list-item>
                <v-list-item @click="deleteProject(project)">
                  <v-list-item-title>Удалить проект</v-list-item-title>
                </v-list-item>
              </v-list> 
            </v-menu>
            </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
/* eslint-disable */
import { mapGetters } from 'vuex'
import { VTooltip } from 'vuetify/lib';
import Tooltip from '../../components/Tooltip'
export default {
  data () {
    return {
      pageView: true,
      poisktext: "",
      tab: null,
      valid: true,
      hovered: null,
      title: 'Проекты',
      picked_project: [],
      showSelection: false,
      filter: {
        isAuthorFilter: true,
        isParticipantFilter: false,
        isFavoriteFilter: false,
        isFinishedFilter: false,
        isStoppedFilter: false,
        isRunningFilter: false
      },
      overlay: false,
      absolute: true,
      zIndex: 1,
      expanded: [],
      singleExpand: false,
      projectHeaders: [
          {
            text: 'Журнал проекта',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Модификация', value: 'mode' },
          { text: 'Последние изменения', value: 'lastChange' }
      ]
    }
  },
  components: {
    Tooltip,
    VTooltip
  },
  methods: {
    validate () {
          this.$refs.form.validate();
      },
    overlayToggle (id) {
      this.projects.find(a => a.id_project === id).overlay = !this.projects.find(a => a.id_project === id).overlay
    },
    makeNotFavorite (project) {
      this.$store.dispatch('project/unFaveProject', project)
    },
    makeFavorite (project) {
      this.$store.dispatch('project/faveProject', project)
    },
    deleteProject (project) {
      this.$store.dispatch('project/deleteProject', project)
    },
    deleteSeveralProjects () {
      this.picked_project.forEach(element => this.$store.dispatch('project/deleteProject', element))
      this.picked_project = []
    },
    showMenu (id) {
      this.projects.find(a => a.id_project === id).menu = true
    },
    hideMenu (id) {
      this.projects.find(a => a.id_project === id).menu = false
    },
    sort (f) {
      this.filter[f] = !this.filter[f]
      for (const key in this.filter) {
        if (key === f) {
          continue
        }
        this.filter[key] = false
      }
    },
    renameProject(project) {
      this.overlay = false;
    },
    editProject(project) {

    },
    createNewRevision(project) {

    },
    postponeProject(project) {

    },
    colorStatus(project) {
        if (project.last_changed_status==='3'){
            return 'red ma-1 rounded-circle d-inline-block';
        } else if (project.last_changed_status==='2') {
            return 'orange ma-1 rounded-circle d-inline-block';
        } else {
            return 'secondary ma-1 rounded-circle d-inline-block';
        }
    },
    overlayTrue(){
      let listOfAction = document.querySelector('.actionProject');
      listOfAction.style.display = "block";
      console.log('вывод списка');
    },
    promptness(project) {
      if (project.last_changed_status==='3'){
            return 'Срочный вопрос';
        } else if (project.last_changed_status==='2') {
            return 'Вопрос средней срочности';
        } else {
          return 'Не срочный вопрос';
        } 
    }
  },
  computed: {
    ...mapGetters({
      projects: 'project/getProjects',
      favProjects: 'project/getFavProjects',
      authorProjects: 'project/authorProjects',
      participantProjects: 'project/participantProjects',
      finishedProjects: 'project/finishedProjects',
      stoppedProjects: 'project/stoppedProjects',
      runningProjects: 'project/runningProjects'
    }),
    projectTable () {
      if (this.filter.isFavoriteFilter) {
        return this.favProjects
      } else if (this.filter.isAuthorFilter) {
        return this.authorProjects
      } else if (this.filter.isFinishedFilter) {
        return this.finishedProjects
      } else if (this.filter.isRunningFilter) {
        return this.runningProjects
      } else if (this.filter.isParticipantFilter) {
        return this.participantProjects
      } else if (this.filter.isStoppedFilter) {
        return this.stoppedProjects
      } else {
        return this.projects
      }
    }
  },
  async fetch ({ store, params, from }) {
    if (from.name !== 'project-new') {
      await store.dispatch('project/loadData')
    }
  }
  // layout: 'olimp'
}
</script>
<style>
.space {
  justify-content: space-between;
  justify-content: space-around;
  align-items: center;
}
.empty {
  border: 1px solid red;
  width: 40px;
  height: 40px;
}
.hoverable { 
  position: relative;
}
.overlay {
  background-color: #fff;
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  height: 100%;
  display: flex;
}
.menu-h {
  position: relative;
  display: inline-block;
}
.menu-h:hover .menu-list {
  opacity: 1;
}

.menu-list {
  position: absolute;
  width: 120px;
  bottom: 120%;
  left: -30px;
  z-index: 5;
  opacity: 0;
  background-color: white;
  margin-left: -60px;
}
.overlay button {
  width: 45%;
  background-color: white;
  height: 90%;
}

.projects-table {
  display: flex;
}

li {
  list-style: none;
}
h2 {
  margin: 0;
  margin: 0 0 20px;
}
input {
  margin-top: 0;
}
input[type=text] {
  margin-top: 0px !important;
  margin: 0 5px;
  padding: 5px !important;
}
.projects {
  padding: 10px;
  display: flex;
  flex-direction: column;
}

table {
  color: #3914AF;
  width: 100%;
}
th {
  font-size: 14px;
  border-bottom: 2px solid #3914AF;
  background-color: #F5F5FF;
}
.center {
  display: table-cell;
  text-align: center;
}

.smaller {
  font-size: 14px;
}

.filters {
  margin: 10px 0;
}

.filters span {
  padding: 3px 5px;
}

.selected {
  border-bottom: 2px solid #3914AF;
  color: #3914AF;
  font-weight: bold;
}

.project-filters {
  margin: 0 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.btn-icon {
  height: 40px;
  background: transparent;
  border: 1px solid #3914AF;
}

td {
  padding: 5px;
  border-bottom: 1px solid #C0B0F5;
}
.basil {
  background-color: #FFFBE6
}
.actionProject {
  position: absolute;
  right: 5px;
  bottom: 10px;
  display: none;
}
#buttonAction {
  overflow: visible
  /* position: relative; */
}
.table-border {
  border-bottom: 1px solid;
  border-color:  #C0B0F5 !important;
  background-color: #F5F5FF;
}
.row-border {
  border-bottom: 1px solid;
  border-color:  #C0B0F5 !important;
}
#square {
	width: 9px;
	height: 9px;
	background: red;
}
</style>
