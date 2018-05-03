<template>
  <v-footer height="auto">
    <v-content>
      <v-layout row>
        <v-flex xs4>
          <v-card>
            <v-card-text>logo</v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs4>
          <v-card>
            <v-card-text>text</v-card-text>
          </v-card>
          </v-flex>
        <v-flex xs4>
          <v-card>
            <v-card-text>icon</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs12>
        &copy; 2018 Asia Asstes Developments Co., Ltd
        </v-flex>
      </v-layout>
    </v-content>
  </v-footer>
</template>
<script>
export default {
  name: 'Footer',
};
</script>
