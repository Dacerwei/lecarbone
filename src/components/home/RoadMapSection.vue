<template>
    <section id="roadmap">
      <h1>{{ $t('message.RoadMapSection.title') }}</h1>
      <hr class="title" />
      <div class="roadmap" v-if="!isMobile">
        <div class="roadmapCanvas">
          <hr class="centerline">
          <div v-for="(q,id) in questionList" :key="q.id" :class="'question-d' + id">
            <div class="pointDesktop"></div>
            <h2 class="titleDesktop">{{q.title}}</h2>
            <p class="descriptionDesktop">{{ $t(`message.RoadMapSection.${q.describtion}`) }}</p>
          </div>
        </div>
      </div>
      <div class="roadmapMobile" v-if="isMobile">
        <div class="questionContainer" v-for="question in questionList" :key="question.id">
          <div class="point"></div>
          <h2 class="questionTitle">{{question.title}}</h2>
          <p class="qDescribtion">{{ $t(`message.RoadMapSection.${question.describtion}`) }}</p>
        </div>
      </div>
    </section>
</template>

<script>
const questionList = [
  {
    id: 0,
    title: 'Q1 2017',
    describtion: 'item_content_1',
  },
  {
    id: 1,
    title: 'Q2 2017',
    describtion: 'item_content_2',
  },
  {
    id: 2,
    title: 'Q3 2017',
    describtion: 'item_content_3',
  },
  {
    id: 3,
    title: 'Q1 2017',
    describtion: 'item_content_4',
  },
  {
    id: 4,
    title: 'Q2 2018',
    describtion: 'item_content_5',
  },
  {
    id: 5,
    title: 'Q3 2018',
    describtion: 'item_content_6',
  },
  {
    id: 6,
    title: 'Q4 2018',
    describtion: 'item_content_7',
  },
  {
    id: 7,
    title: 'Q1 2019',
    describtion: 'item_content_8',
  },
  {
    id: 8,
    title: 'Q2 2019',
    describtion: 'item_content_9',
  },
  {
    id: 9,
    title: 'Q3 2019',
    describtion: 'item_content_10',
  },
  {
    id: 10,
    title: 'Q4 2019',
    describtion: 'item_content_11',
  },
];

export default {
  name: 'RoadMap',
  data() {
    return {
      isMobile: false,
      questionList,
    };
  },
  mounted() {
    this.onResize();
    window.addEventListener('resize', this.onResize, { passive: true });
  },
  beforeDestroy() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.onResize, { passive: true });
    }
  },
  methods: {
    onResize() {
      this.isMobile = window.innerWidth < 600;
    },
  },
};
</script>

<style lang="sass" scoped>
$color_yellow: #F1CF69
*
  position: relative

#roadmap
  padding: 30px 0
  h1
    text-align: center
    margin-bottom: 5px
    font-size: 32px
    color: $color_yellow
  hr.title
    width: 40px
    border: 2px solid $color_yellow
    background-color: $color_yellow
    margin: 0 auto 40px auto
  .roadmapCanvas
    width: 100%
    height: 500px
    top: 50px
    .centerline
      width: 100%
      margin: 0px
      border: solid 1px $color_yellow
      position: absolute
      top: calc(50% - 0.5px)
    .pointDesktop
      position: absolute
      width: 15px
      height: 15px
      border-radius: 50%
      background-color: $color_yellow
    .titleDesktop
      font-size: 18px
      font-weight: bold
    .descriptionDesktop
      font-size: 12px
    .question-d0, .question-d2, .question-d4, .question-d6, .question-d8, .question-d10
      width: calc(100% / 6)
      position: absolute
      bottom: 50%
      vertical-align: top
      border-left: solid 2px $color_yellow
      .pointDesktop
        bottom: -15px
        left: 0px
        transform: translate(-50%, -50%)
      .titleDesktop
        bottom: 40px
      .descriptionDesktop
        padding: 0px 70px 0px 15px
        bottom: 25px
    .question-d0
      height: 250px
      left: 4%
    .question-d2
      height: 150px
      left: calc(4% + 100% / 6)
    .question-d4
      height: 150px
      left: calc(4% + 100% / 3)
    .question-d6
      height: 250px
      left: calc(4% + 100% / 2)
    .question-d8
      height: 150px
      left: calc(4% + 200% / 3)
    .question-d10
      height: 150px
      left: calc(4% + 500% / 6)
    .question-d1, .question-d3, .question-d5, .question-d7, .question-d9
      height: 150px
      width: calc(100% / 6)
      position: absolute
      top: 50%
      border-left: solid 2px $color_yellow
      .pointDesktop
        top: 0px
        left: 0px
        transform: translate(-50%, -50%)
      .descriptionDesktop
        padding: 0px 70px 0px 15px
        position: absolute
        bottom: 0px
        margin-bottom: 3px
      .titleDesktop
        position: absolute
        bottom: -40px
    .question-d1
      left: 14%
    .question-d3
      left: calc(14% + 100% / 6)
    .question-d5
      left: calc(14% + 100% / 3)
    .question-d7
      left: calc(14% + 100% / 2)
    .question-d9
      left: calc(14% + 200% / 3)
  .roadmapMobile
    padding: 0% 8% 0% 20%
    .questionContainer
      padding: 0px 20px
      min-height: 150px
      border-left: solid 2px $color_yellow
      margin-bottom: -10px
      .point
        position: absolute
        width: 15px
        height: 15px
        border-radius: 50%
        top: 0px
        left: 0px
        transform: translate(-50%, -50%)
        background-color: $color_yellow
      .questionTitle
        bottom: 20px
      .qDescribtion
        margin-top: -15px
</style>
