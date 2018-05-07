<template>
  <v-toolbar app>
    <img :src="logo" />
    <v-btn flat>About</v-btn>
    <v-btn flat>Roadmap</v-btn>
    <v-btn flat>Token Details</v-btn>
    <v-btn flat>Team</v-btn>
    <v-btn flat>Contact</v-btn>
    <v-menu offset-y>
      <v-btn flat color="primary" dark slot="activator">language</v-btn>
      <v-list>
        <v-list-tile>
          <v-list-tile-action>
            <img class="flag" :src="UK"/>
          </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>English</v-list-tile-title>
              </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <img class="flag" :src="TW"/>
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
    <v-btn flat>Contribute</v-btn>
  </v-toolbar>
</template>
<script>
import Logo from '@/assets/lecarbone_logo.png';
import UK from '@/assets/flag_uk.png';
import TW from '@/assets/flag_tw.png';

export default {
  name: 'nav-bar',
  data() {
    return {
      logo: Logo,
      UK,
      TW,
    };
  },
};
</script>

<style>
.flag {
  width: 30px;
  height: 30px;
}
</style>

