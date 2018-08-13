<template>
  <v-container>
    <v-layout row wrap>
      <v-flex sm12 md3>
        <h1 class="advisor-title">{{ $t('message.Advisor.title') }}</h1>
      </v-flex>
      <v-flex sm12 md8 v-for="advisor in advisorList" :key="advisor.id">
        <div class="member-card">
          <v-container>
            <v-layout wrap row>
              <v-flex xs12 sm3>
                <div class="img-container">
                  <img
                    :src="advisor.avatarPhoto"
                    class="avatar"/>
                </div>
              </v-flex>
              <v-flex xs12 sm9>
                <div class="member-title-contianer text-xs-center text-sm-left">
                  <p class="affiliation">{{ advisor.affiliation }}</p>
                  <h2>{{ advisor.firstName }} {{advisor.LastName}}</h2>
                  <h3>{{ advisor.title }}</h3>
                </div>
              </v-flex>
            </v-layout>
            <v-container>
              <p class="description">{{ advisor.description }}</p>
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
  font-size: 32px;
  font-weight: bold;
}
.img-container {
  text-align: center;
  margin-bottom: 20px;
}
.avatar {
  max-width: 120px;
}
.member-card {
  min-height: 300px;
}
p {
  margin-bottom: 0;
}
.affiliation {
  font-size: 12px;
  font-style: italic;
}
h2 {
  font-size: 28px;
  margin-bottom: 20px;
}
h3 {
  font-weight: 400;
  font-size: 12px;
}
.description {
  margin-top: 20px;
  font-size: 12px;
}

</style>

