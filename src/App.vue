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
        <v-list-tile to="/">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/details">
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
        <v-list-tile to="/connect">
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

      <v-btn flat class="hidden-sm-and-down" to="/">
        Home
      </v-btn>

      <v-btn flat class="hidden-sm-and-down" to="/details">
        Details
      </v-btn>

      <v-btn flat class="hidden-sm-and-down">
        Ranking
      </v-btn>

      <v-btn flat class="hidden-sm-and-down">
        Media
      </v-btn>

      <v-btn flat class="hidden-sm-and-down" to="/connect">
        Login / Sign Up
      </v-btn>

      <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-toolbar-side-icon>
    </v-toolbar>
    <v-content>
      <router-view />
    </v-content>
    <v-footer app fixed class="pa-3">
      <v-spacer></v-spacer>
      <div>&copy; Sayantan Bakshi aka GameWrex {{ new Date().getFullYear() }}</div>
      <v-spacer class="hidden-md-and-up"></v-spacer>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  created () {},
  data () {
    return {
      drawer: false
    }
  }
}
</script>

<style lang="stylus">
  @import url('https://fonts.googleapis.com/css?family=KoHo:200,200i,300,300i,400,400i,500,500i,600,600i,700,700i&subset=latin-ext,thai,vietnamese')
  @import '~vuetify/src/stylus/theme.styl'

  $material-dark.status-bar.regular = #19110f
  $material-dark.background = #19110f
  $material-dark.app-bar = #19110f
  $material-dark.cards = #19110f

  $body-font-family = 'KoHo', 'Roboto', sans-serif
  // $font-size-root = 16px

  // $button-font-size = 16px
  // $button-small-font-size = 14px
  // $button-large-font-size = 18px

  @import '~vuetify/src/stylus/main.styl'
</style>
