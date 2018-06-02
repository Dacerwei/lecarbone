<template>
  <v-container>
    <h1>FAQ</h1>
    <ul>
      <li v-for="q in questions" :key="q.id">
        <h2>{{ q.questions }}</h2>
        <p>{{ q.answer }}</p>
      </li>
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
