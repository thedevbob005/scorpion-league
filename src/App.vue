<template>
  <v-app dark>
    <v-navigation-drawer
            v-model="drawer"
            fixed
            right
            app
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
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Contact</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed app>
      <v-toolbar-title class="white--text">Title</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon class="hidden-sm-and-down">
        <v-icon>search</v-icon>
      </v-btn>

      <v-btn icon class="hidden-sm-and-down">
        <v-icon>apps</v-icon>
      </v-btn>

      <v-btn icon class="hidden-sm-and-down">
        <v-icon>refresh</v-icon>
      </v-btn>

      <v-btn icon class="hidden-sm-and-down">
        <v-icon>more_vert</v-icon>
      </v-btn>

      <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-toolbar-side-icon>
    </v-toolbar>
    <v-content>
      <router-view />
    </v-content>
    <v-footer app fixed>
      <span>&copy; 2017</span>
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
