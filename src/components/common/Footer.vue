<template>
  <div :style="{'background-image': 'url(' + footer + ')' }" id="footer">
    <v-content>
      <v-layout row wrap justify-space-around>
        <v-flex sm12 md4>
          <div class="logo-container">
            <img class="logo" :src="logo"/>
          </div>
        </v-flex>
        <v-flex sm12 md4>
            <p class="footer-info text-xs-center text-md-left">
              Asia Assets Developments Co., Ltd.(AAD) is a corporate that dedicates
               itself to establishing green economies and developing assets.
               From our belief in making Earth a better place for our future generations,
               LeCarbone was born.<br><br><span>service@lecarbone.com</span>
            </p>
        </v-flex>
        <v-flex sm12 md4>
          <div class="sns-container">
            <v-btn icon large><i color="white" class="fab fa-facebook-square"></i></v-btn>
            <v-btn icon large><i color="white" class="fab fa-telegram-plane"></i></v-btn>
            <v-btn icon large><i color="white" class="fab fa-twitter"></i></v-btn>
            <v-btn icon large><i color="white" class="fab fa-medium-m"></i></v-btn>
          </div>
        </v-flex>
      </v-layout>
    </v-content>
    <v-content>
      <v-layout row dark>
        <v-flex xs12>
            <div class="copyright">
              &copy; 2018 Asia Asstes Developments Co., Ltd
            </div>
        </v-flex>
      </v-layout>
    </v-content>
  </div>
</template>
<script>
import footerLogo from '@/assets/footer_aad.png';
import footer from '@/assets/background/footer.jpg';

export default {
  name: 'Footer',
  data() {
    return {
      logo: footerLogo,
      footer,
    };
  },
};
</script>
<style scoped>

#footer {
  margin-top: 50px;
  padding-top: 50px;
  background-position: 0 -350px;
}
.logo-container {
  text-align: center;
}
.logo {
  width: 100px;
}

.footer-info {
  color: #EEEEEE;
  margin: 0 auto;
  margin-bottom: 5%;
  width: 90%;
  font-size: 12px;
}

.sns-container {
  text-align: center;
}

.copyright {
  text-align: right;
  background-color: #111111;
  color: #EEEEEE;
  font-size: 12px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-right: 40px;
}

span {
  font-weight: 900;
}

.fab {
  margin: 0;
}

</style>
