<template>
  <v-toolbar height="70px">
    <v-layout row align-center>
      <v-flex xs2 sm1>
        <router-link to="/">
          <img class="logo" :src="logo" />
        </router-link>
      </v-flex>
      <v-flex xs10 class="hidden-md-and-up">
        <div class="mobile-menu-container">
          <v-menu offset-y>
            <v-btn slot="activator" icon large>
              <i class="fas fa-bars"></i>
            </v-btn>
            <v-list>
              <v-list-tile>
                <v-list-tile-title>
                  <a class="nav-btn" v-scroll-to="'#our-vision'">
                    {{ $t('message.NavBar.about') }}
                  </a>
                </v-list-tile-title>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-title>
                  <a class="nav-btn" v-scroll-to="'#roadmap'">
                    {{ $t('message.NavBar.roadMap') }}
                  </a>
                </v-list-tile-title>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-title>
                  <a class="nav-btn" v-scroll-to="'#token-detail'">
                    {{ $t('message.NavBar.tokenDetail') }}
                  </a>
                </v-list-tile-title>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-title>
                  <a class="nav-btn" v-scroll-to="'#team'">
                    {{ $t('message.NavBar.team') }}
                  </a>
                </v-list-tile-title>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-title>
                  <a class="nav-btn" v-scroll-to="'#footer'">
                    {{ $t('message.NavBar.contact') }}
                  </a>
                </v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
        </div>
      </v-flex>
      <v-flex sm6 class="hidden-sm-and-down">
        <v-layout row justify-center align-center>
          <v-flex sm2>
            <a class="nav-btn" v-scroll-to="'#our-vision'">
              {{ $t('message.NavBar.about') }}
            </a>
          </v-flex>
          <v-flex sm2>
            <a class="nav-btn" v-scroll-to="'#roadmap'">
              {{ $t('message.NavBar.roadMap') }}
            </a>
          </v-flex>
          <v-flex sm2>
            <a class="nav-btn" v-scroll-to="'#token-detail'">
              {{ $t('message.NavBar.tokenDetail') }}
            </a>
          </v-flex>
          <v-flex sm2>
            <a class="nav-btn" v-scroll-to="'#team'">
              {{ $t('message.NavBar.team') }}
            </a>
          </v-flex>
          <v-flex sm2>
            <a class="nav-btn" v-scroll-to="'#footer'">
              {{ $t('message.NavBar.contact') }}
            </a>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-spacer sm1></v-spacer>
      <v-flex sm5 class="nav-r hidden-sm-and-down">
        <v-layout row align-center justify-end>
          <v-flex sm3>
            <v-menu offset-y>
              <v-btn class="language" flat color="black" dark slot="activator">
                {{ $t('message.NavBar.language') }}
              </v-btn>
              <v-list>
                <v-list-tile @click="changeLanguage('en')">
                  <v-list-tile-action>
                    <img class="flag" :src="UK"/>
                  </v-list-tile-action>
                      <v-list-tile-content>
                        <v-list-tile-title>English</v-list-tile-title>
                      </v-list-tile-content>
                </v-list-tile>
                <v-list-tile @click="changeLanguage('zh')">
                  <v-list-tile-action>
                    <img class="flag" :src="TW"/>
                  </v-list-tile-action>
                      <v-list-tile-content>
                        <v-list-tile-title>中文</v-list-tile-title>
                      </v-list-tile-content>
                  </v-list-tile>
              </v-list>
            </v-menu>
          </v-flex>
          <v-flex sm1>
            <v-btn icon small><i class="fab fa-telegram-plane"></i></v-btn>
          </v-flex>
          <v-flex sm1>
            <v-btn icon small><i class="fab fa-facebook-square"></i></v-btn>
          </v-flex>
          <v-flex sm1>
            <v-btn icon small><i class="fab fa-twitter"></i></v-btn>
          </v-flex>
          <v-flex sm1>
            <v-btn icon small><i class="fab fa-medium-m"></i></v-btn>
          </v-flex>
          <v-flex sm3>
            <router-link to="/tokensale" class="contribute">
              {{ $t('message.NavBar.contribute') }}
            </router-link>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
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
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang;
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.logo {
  width: 120px;
  height: 30px;
  margin-right: 1%;
  margin-left: 40px;
}
.flag {
  width: 30px;
  height: 30px;
}
.menu-icon svg {
  width: 30px;
  height: 30px;
}
.nav-btn {
  text-align: center;
  font-size: 12px;
  display: block;
  color: black;
}
.contribute {
  background: #69F193;
  color: #fff;
  font-weight: bold;
  border-radius: 4px;
  text-align: center;
  text-transform: capitalize;
  padding: 10px 30px;
  margin-left: 10px;
}
.language {
  font-size: 12px;
}
.mobile-menu-container {
  text-align: right;
}
</style>

