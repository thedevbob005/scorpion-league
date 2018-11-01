<template>
  <v-container fluid fill-height class="pa-2">
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md6 lg4 xl3 class="pa-2">
        <v-card class="elevation-1" v-if="accLogin">
          <v-toolbar dark>
            <v-toolbar-title>Login</v-toolbar-title>
            <v-spacer/>
            <v-btn small flat class="text--secondary" @click="accLogin = !accLogin">Don't have an account?</v-btn>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field prepend-icon="mdi-email-outline" name="email" label="Email" type="text"></v-text-field>
              <v-text-field id="password1" prepend-icon="mdi-lock-outline" :append-icon="passShow1?'mdi-eye-off-outline':'mdi-eye-outline'" @click:append="passShow1 = !passShow1" name="password" label="Password" :type="passShow1?'text':'password'"></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn ripple>Login</v-btn>
            <v-btn color="#3b5998" ripple style="min-width: 0; padding: 0 8px" target="_self"><v-icon>mdi-facebook</v-icon></v-btn>
            <v-btn color="#dd4b39" ripple style="min-width: 0; padding: 0 8px"><v-icon>mdi-google-plus</v-icon></v-btn>
          </v-card-actions>
        </v-card>
        <v-card class="elevation-1" v-else>
          <v-toolbar dark>
            <v-toolbar-title>Register</v-toolbar-title>
            <v-spacer/>
            <v-btn small flat class="text--secondary" @click="accLogin = !accLogin"> Have an account?</v-btn>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field prepend-icon="mdi-email-outline" name="email" label="Email" type="text"></v-text-field>
              <v-text-field id="password2" prepend-icon="mdi-lock-outline" :append-icon="passShow2?'mdi-eye-off-outline':'mdi-eye-outline'" @click:append="passShow2 = !passShow2" name="password" label="Password" :type="passShow2?'text':'password'"></v-text-field>
              <v-text-field id="password3" prepend-icon="mdi-lock-outline" :append-icon="passShow3?'mdi-eye-off-outline':'mdi-eye-outline'" @click:append="passShow3 = !passShow3" name="passwordRepeat" label="Repeat Password" :type="passShow3?'text':'password'"></v-text-field>
              <v-text-field prepend-icon="mdi-card-bulleted-outline" name="pubgid" label="PUBG Mobile Player ID" type="text"></v-text-field>
              <v-text-field prepend-icon="mdi-earth" name="country" label="Country" type="text" v-model="country" disabled></v-text-field>
              <v-text-field prepend-icon="mdi-server-network" name="server" label="Server" type="text" v-model="server" disabled></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn ripple>Register</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      accLogin: true,
      passShow1: false,
      passShow2: false,
      passShow3: false,
      country: 'India',
      server: 'Asia'
    }
  },
  methods: {}
}
</script>
