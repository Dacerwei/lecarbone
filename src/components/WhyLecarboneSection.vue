<template>
  <v-container tag="div" class="why-wrapper">
    <h1 class="why-title">{{ $t('message.WhyLecarboneSection.title') }}</h1>
    <v-layout row wrap>
      <v-flex xs12 sm4 v-for="content in contentList" :key="content.title">
        <div height="600px" class="why-item">
          <div class="item-icon" :style="{'background-image': 'url(' + content.icon + ')' }"></div>
          <h3 class="item-title">{{ $t(`message.WhyLecarboneSection.${content.title}`) }}</h3>
          <p>{{ $t(`message.WhyLecarboneSection.${content.description}`)}}</p>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import forest from '@/assets/forest.png';
import leaf from '@/assets/leaf.png';
import people from '@/assets/people.png';

const whyLeCarboneContent = [
  {
    icon: forest,
    title: 'subtitle_1',
    description: 'description_1',
  },
  {
    icon: leaf,
    title: 'subtitle_2',
    description: 'description_2',
  },
  {
    icon: people,
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

<style scoped>
.why-wrapper {
  background-color: white;
}
.why-title {
  text-align: center;
}
.why-item {
  padding-top: 20px;
  padding-bottom: 20px;
}
.item-title {
  text-align: center;
  color: green;
}
.item-icon {
  height: 100px;
  background-position: center;
  background-size: contain;
  margin-top: 25px;
  margin-bottom: 25px;
}
</style>
