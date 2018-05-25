<template>
<div class="why-container">
  <v-container tag="div" class="why-wrapper">
    <h1 class="why-title">{{ $t('message.WhyLecarboneSection.title') }}</h1>
    <v-layout row wrap>
      <v-flex xs12 sm4 v-for="content in contentList" :key="content.title">
        <div class="why-item">
          <div class="item-icon" :style="{'background-image': 'url(' + content.icon + ')' }"></div>
          <h3 class="item-title">{{ $t(`message.WhyLecarboneSection.${content.title}`) }}</h3>
          <p class="item-content">{{ $t(`message.WhyLecarboneSection.${content.description}`)}}</p>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</div>
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
.why-container {
  width: 100%;
  background-color: white;
  padding-bottom: 10px 0;
}
.why-wrapper {
  background-color: white;
}
.why-title {
  font-size: 36px;
  text-align: center;
  margin-top: 40px;
  color: #F1CF69;
}
.why-item {
  padding: 15px;
}
.item-title {
  text-align: center;
  color: #4A8B71;
  height: 45px;
  margin-top: 30px;
  margin-bottom: 10px;
}
.item-icon {
  height: 100px;
  background-position: center;
  background-size: contain;
  margin-top: 25px;
  margin-bottom: 25px;
}
.item-content {
  padding: 5px;
  text-align: center;
}
</style>
