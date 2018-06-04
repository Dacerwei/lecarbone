<template>
  <v-container>
    <h1 class="qa-title">FAQ</h1>
    <hr class="title-divider">
    <ul class="qa-list">
      <template v-for="q in questions">
        <li class="qa-list-item" :key="q.id">
          <h2>{{ q.questions }}</h2>
          <p>{{ q.answer }}</p>
        </li>
        <hr :key="q.id + 'divider'">
      </template>
    </ul>
  </v-container>
</template>
<script>
const questions = [
  {
    id: 0,
    questions: 'How to add to LeCarbone token to my wallet',
    answer: 'just google it',
  },
  {
    id: 1,
    questions: 'How to add to LeCarbone token to my wallet',
    answer: 'just google it',
  },
  {
    id: 2,
    questions: 'How to add to LeCarbone token to my wallet',
    answer: 'just google it',
  },
  {
    id: 3,
    questions: 'How to add to LeCarbone token to my wallet',
    answer: 'just google it',
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
  padding: 10px;
}
</style>
