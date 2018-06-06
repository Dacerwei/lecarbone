<template>
  <v-container class="FAQ-section">
    <h1 class="qa-title">FAQ</h1>
    <hr class="title-divider">
    <ul class="qa-list">
      <template v-for="q in questions">
        <li class="qa-list-item" :key="q.id">
          <span class="dot"></span>
          <h2>{{ q.questions }}</h2>
          <p>{{ q.answer }}</p>
        </li>
        <hr color="#F1CF69" size="1px" :key="q.id + 'divider'">
      </template>
    </ul>
  </v-container>
</template>
<script>
const questions = [
  {
    id: 0,
    questions: 'How to add to LeCarbone token to my wallet',
    answer: 'answer',
  },
  {
    id: 1,
    questions: 'How to add to LeCarbone token to my wallet',
    answer: 'answer',
  },
  {
    id: 2,
    questions: 'How to add to LeCarbone token to my wallet',
    answer: 'answer',
  },
  {
    id: 3,
    questions: 'How to add to LeCarbone token to my wallet',
    answer: 'answer',
  },
];
export default {
  name: 'QuestionsSection',
  data() {
    return {
      questions,
    };
  },
};
</script>

<style scoped>
.FAQ-section {
  padding: 0 10%;
}
.qa-title {
  text-align: center;
  color: #F1CF69;
  margin: 5px;
}
.title-divider {
  margin: 0 auto;
  width: 5%;
  border: 0;
  background-color: #F1CF69;
  height: 2px;
}
.qa-list {
  margin-top: 5%;
  margin-bottom: 5%;
}
.qa-list-item {
  font-weight: bold;
  list-style: none;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10%;
  padding-right: 10%;
  margin: 30px 0;
}

.qa-list-item h2 {
  font-size: 14px;
  margin-bottom: 10px;
}
.qa-list-item p {
  font-weight: 400;
}

.dot {
  position: absolute;
  margin-left: -40px;
  margin-top: 2px;
  height: 15px;
  width: 15px;
  background-color: #F1CF69;
  border-radius: 50%;
  display: inline-block;
}
</style>
