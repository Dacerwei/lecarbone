<template>
  <v-toolbar app>
    <img :src="logo" />
    <v-btn >About</v-btn>
    <v-btn>Roadmap</v-btn>
    <v-btn>Token Details</v-btn>
    <v-btn>Team</v-btn>
    <v-btn>Contact</v-btn>
    <v-menu offset-y>
      <v-btn color="primary" dark slot="activator">language</v-btn>
      <v-list>
        <v-list-tile>
          <v-list-tile-action>
          </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>English</v-list-tile-title>
              </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
          </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>中文</v-list-tile-title>
              </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-menu>
    <v-btn icon large><i class="fab fa-facebook-square"></i></v-btn>
    <v-btn icon large><i class="fab fa-telegram-plane"></i></v-btn>
    <v-btn icon large><i class="fab fa-twitter"></i></v-btn>
    <v-btn icon large><i class="fab fa-medium-m"></i></v-btn>
    <v-btn>Contribute</v-btn>
  </v-toolbar>
</template>
<script>
import Logo from '@/assets/lecarbone_logo.png';

export default {
  name: 'nav-bar',
  data() {
    return {
      logo: Logo,
    };
  },
};
</script>
