<template>
  <v-app dark>
    <v-navigation-drawer
            v-model="drawer"
            fixed
            right
            app
            class="hidden-md-and-up"
    >
      <v-list dense>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>details</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Details</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>grade</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Ranking</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>tv</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Media</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>lock</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Login / Sign Up</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed app flat>
      <img src="./assets/logo.png" alt="" height="50">

      <v-spacer></v-spacer>

      <v-btn flat class="hidden-sm-and-down">
        Home
      </v-btn>

      <v-btn flat class="hidden-sm-and-down">
        Details
      </v-btn>

      <v-btn flat class="hidden-sm-and-down">
        Ranking
      </v-btn>

      <v-btn flat class="hidden-sm-and-down">
        Media
      </v-btn>

      <v-btn flat class="hidden-sm-and-down">
        Login / Sign Up
      </v-btn>

      <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-toolbar-side-icon>
    </v-toolbar>
    <v-content>
      <router-view />
    </v-content>
    <v-footer app fixed class="pa-3">
      <v-spacer></v-spacer>
      <div>&copy; Sayantan Bakshi {{ new Date().getFullYear() }}</div>
      <v-spacer class="hidden-md-and-up"></v-spacer>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      drawer: false
    }
  }
}
</script>

<style lang="stylus">
  @import '~vuetify/src/stylus/theme.styl'

  $material-dark.status-bar.regular = #19110f
  $material-dark.background = #19110f
  $material-dark.app-bar = #19110f
  $material-dark.cards = #19110f

  @import '~vuetify/src/stylus/main.styl'
</style>
