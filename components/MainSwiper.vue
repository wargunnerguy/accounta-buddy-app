<template>
  <v-swiper :data="fullData"></v-swiper>
</template>

<script>
export default {
  name: 'MainSwiper',
  data() {
    return {
      sheetId: '18HHwYvBYnJJMlEsIPv98lH5gc5H7PTLBO7h5Y2mc3hs',
      apiKey: 'AIzaSyCu3eywuilXrvgyLneIpxMOAFZkL9bxqmg',
      fullLink: 'https://docs.google.com/spreadsheets/d/18HHwYvBYnJJMlEsIPv98lH5gc5H7PTLBO7h5Y2mc3hs/edit?usp=sharing',
      sheet: '2022',
      range: 'A17:E64',
      fullData: null,
    }
  },
  //TODO date comparison to only fetch small data
  async fetch() {
    this.fullData = await this.$axios.get(`https://sheets.googleapis.com/v4/spreadsheets/${this.sheetId}/values/${this.sheet}!${this.range}?key=${this.apiKey}`)
      .then(result => result.data['values'])
      .then(result => {
        const nrOfWeeklyTasks = 5; //just so i can have 5 tasks
        const fullData = [];
        for (let i in result) {
          if (result[i].length === 1) {
            const nrOfBuddies = (result[+i + 1].length - 1) / 2; // andmerea array pikkus miinus 1(index) ja jagada 2 (sest iga inimese kohta kaks sisendit (desc ja bool))
            const weekStartDate = result[i][0];
            const peopleWeeklyData = [];
            for (let buddyIndex = 0; buddyIndex < nrOfBuddies; buddyIndex++) {
              const tasks = [];
              const buddyName = 'buddy_' + buddyIndex;
              for (let nr = 0; nr < nrOfWeeklyTasks; nr++) {
                tasks.push({
                  taskId: buddyIndex + '_' + i + 1 + '_' + +nr,
                  description: result[(+i + 1 + nr)][(+buddyIndex * 2 + 1)],
                  isDone: result[(+i + 1 + nr)][(+buddyIndex * 2 + 2)].toUpperCase() === 'TRUE',
                })
              }
              const personWeeklyData = {
                userId: buddyName, //TODO päris id sebida
                name: buddyName,
                tasks: tasks,
              }
              peopleWeeklyData.push(personWeeklyData);
            }
            fullData.push({
              startDate: weekStartDate,
              weeklyData: peopleWeeklyData
            })
          }
        }
        console.log(fullData);
        return fullData;
      })
      .catch(err => console.error(err))
  }
}
</script>

<style scoped>

</style>
