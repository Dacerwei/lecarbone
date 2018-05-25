<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm4>
        <h1>Advisor</h1>
      </v-flex>
      <v-flex xs12 sm8 v-for="advisor in advisorList" :key="advisor.id">
        <v-card height="400" flat tile>
          <v-container>
            <v-layout row>
              <v-flex xs3>
                  <img
                    :src="advisor.avatarPhoto"
                    class="avatar"/>
              </v-flex>
              <v-flex xs9>
                <div>
                  <p>{{ advisor.affiliation }}</p>
                  <h2>{{ advisor.firstName }} {{advisor.LastName}}</h2>
                  <h3>{{ advisor.title }}</h3>
                </div>
              </v-flex>
            </v-layout>
            <v-container>
              <p>{{ advisor.description }}</p>
            </v-container>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ADV from '@/assets/team/ADV.png';

const advisorList = [
  {
    id: 0,
    avatarPhoto: ADV,
    firstName: 'Zhihui',
    LastName: 'Huang',
    title: 'Vice-President & Executive Director of Taiwan Development Institute, Executive Director of High-tech Industrial Development Foundation.',
    affiliation: 'Taiwan Development Institute',
    description: 'Huang graduated as BSc from the Department of Foreign Language, National Chung Hsing University and Master of Social Policy from Edinburgh, Scotland; now serving as Chairman of the Creative Culture Foundation, Vice-President of Taiwan Development Institute and PMP. Huang specializes in Social Marketing, NPO Marketing/Advertising, political advertising & broadcasting, creative aesthetics, integrated marketing on public art and analysis on international finance and stock markets.',
  },
];

export default {
  name: 'AdvisorSection',
  data() {
    return {
      advisorList,
    };
  },
};
</script>

<style scoped>
.avatar {
  width: 80%;
}
</style>

