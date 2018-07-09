<template>
  <v-container class="FAQ-section" id="faq">
    <h1 class="qa-title">{{ $t('message.QuestionsSection.title') }}</h1>
    <hr class="title-divider">
    <ul class="qa-list">
      <template v-for="q in questions">
        <li class="qa-list-item" :key="q.id">
          <span class="dot"></span>
          <h2>{{ $t( `message.QuestionsSection.${q.questions}`) }}</h2>
          <p>{{ $t( `message.QuestionsSection.${q.answer}`) }}</p>
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
    questions: 'question_1',
    answer: 'answer_1',
  },
  {
    id: 1,
    questions: 'question_2',
    answer: 'answer_2',
  },
  {
    id: 2,
    questions: 'question_3',
    answer: 'answer_3',
  },
  {
    id: 3,
    questions: 'question_4',
    answer: 'answer_4',
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
  width: 30px;
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
