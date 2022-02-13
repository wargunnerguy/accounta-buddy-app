<template>
<!--  <h-swiper></h-swiper>-->
  <v-swiper></v-swiper>
</template>

<script>
export default {
  data() {
    return {
      sheetId: '18HHwYvBYnJJMlEsIPv98lH5gc5H7PTLBO7h5Y2mc3hs',
      apiKey: 'AIzaSyCu3eywuilXrvgyLneIpxMOAFZkL9bxqmg',
      fullLink: 'https://docs.google.com/spreadsheets/d/18HHwYvBYnJJMlEsIPv98lH5gc5H7PTLBO7h5Y2mc3hs/edit?usp=sharing',
      sheet: '2022',
      range: 'A17:E260',
      fullData: [
        {
          startDate: '01.01.2022',
          weeklyData: [
            {
              userId: '1',
              name: 'reimo',
              tasks: [
                {
                  taskId: 't5',
                  task: 'Run 5k',
                  isDone: false,
                },
                {
                  taskId: 't6',
                  task: 'Read 5min/day',
                  isDone: false,
                }
              ],
            },
            {
              userId: '2',
              name: 'sten',
              tasks: [
                {
                  taskId: 't1',
                  task: 'Run 5k',
                  isDone: false,
                },
                {
                  taskId: 't2',
                  task: 'Fix the wall',
                  isDone: false,
                }
              ],
            },
          ]
        },
        {
          startDate: '07.01.2022',
          weeklyData: [
            {
              userId: '1',
              name: 'reimo',
              tasks: [
                {
                  taskId: 't5',
                  task: 'Run 5k',
                  isDone: false,
                },
                {
                  taskId: 't6',
                  task: 'Read 5min/day',
                  isDone: false,
                }
              ],
            },
            {
              userId: '2',
              name: 'sten',
              tasks: [
                {
                  taskId: 't1',
                  task: 'Run 5k',
                  isDone: false,
                },
                {
                  taskId: 't2',
                  task: 'Fix the wall',
                  isDone: false,
                }
              ],
            },
          ]
        },
      ]
    }
  },
  async fetch() {
    this.$axios.get(`https://sheets.googleapis.com/v4/spreadsheets/${this.sheetId}/values/${this.sheet}!${this.range}?key=${this.apiKey}`)
      .then(result => console.log(result.data))
      .then()
      .catch(err => console.error(err))
  }
}
</script>

<style scoped>

</style>
