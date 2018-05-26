<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm4>
        <h1 class="advisor-title">Advisor</h1>
      </v-flex>
      <v-flex xs12 sm8 v-for="advisor in advisorList" :key="advisor.id">
        <div class="member-card">
          <v-container>
            <v-layout wrap row>
              <v-flex xs10 sm3>
                <div class="img-container">
                  <img
                    :src="advisor.avatarPhoto"
                    class="avatar"/>
                </div>
              </v-flex>
              <v-flex xs12 sm9>
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
        </div>
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
.advisor-title {
  color: #5A8973;
  text-align: center;
}
.avatar {
  width: 80%;
}
.member-card {
  min-height: 400px;
}
.img-container {
  padding: 10%;
  margin: 0 auto;
}
</style>

