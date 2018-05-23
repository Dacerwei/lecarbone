<template>
  <v-container>
    <h1>{{ $t('message.WhyLecarboneSection.title') }}</h1>
    <v-layout row wrap>
      <v-flex xs12 sm4 v-for="content in contentList" :key="content.title">
        <v-card height="400px">
          <v-card-media :src="content.icon"></v-card-media>
          <v-card-title>
            <h3>{{ $t(`message.WhyLecarboneSection.${content.title}`) }}</h3>
            </v-card-title>
          <v-card-text>
            <p>{{ $t(`message.WhyLecarboneSection.${content.description}`)}}</p>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
const whyLeCarboneContent = [
  {
    icon: '',
    title: 'subtitle_1',
    description: 'description_1',
  },
  {
    icon: '',
    title: 'subtitle_2',
    description: 'description_2',
  },
  {
    icon: '',
    title: 'subtitle_3',
    description: 'description_3',
  },
];
export default {
  name: 'WhyLecarboneSection',
  data() {
    return {
      contentList: whyLeCarboneContent,
    };
  },
};
</script>

