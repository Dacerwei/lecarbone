<template>
  <v-container>
    <h1 class="transaction-title">Transactions</h1>
    <ul class="transaction-list">
      <hr>
      <li v-for="transaction in transactions"
        class="transaction-item"
        :key="transaction.id">
        <v-layout row wrap justify-center align-center>
          <v-flex xs4>
            <div class="trasaction-icon">
              <i class="fab fa-ethereum"></i>
            </div>
          </v-flex>
          <v-flex xs4>
            <div class="trasaction-value">{{ transaction.value }}</div>
          </v-flex>
          <v-flex xs4>
            <div class="trasaction-date">{{ transaction.date.format('YYYY-MM-DD  HH:mm:ss') }}</div>
          </v-flex>
        </v-layout>
        <hr>
      </li>
    </ul>
  </v-container>
</template>

<script>
import moment from 'moment';

export default {
  name: 'TransactionSection',
  data() {
    return {
      transactions: [
        {
          id: 0,
          value: 1.2345654345,
          date: moment('2018-12-19 08:12:11'),
        },
        {
          id: 1,
          value: 1.2345654345,
          date: moment('2018-12-19 19:12:11'),
        },
        {
          id: 2,
          value: 1.2345654345,
          date: moment('2018-12-19 13:12:11'),
        },
      ],
    };
  },
};
</script>

<style scoped>
.transaction-title {
  color: #F1CF69;
  font-size: 32px;
}

.transaction-list {
  margin-top: 5%;
  margin-bottom: 5%;
}

.transaction-item {
  list-style: none;
  text-align: center;
  line-height: 3em;
}

.trasaction-value {
  font-size: 16pt;
}
</style>

