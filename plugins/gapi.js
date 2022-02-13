import Vue from 'vue'
import VueGapi from 'vue-gapi'

Vue.use(VueGapi, {
  apiKey: 'AIzaSyCu3eywuilXrvgyLneIpxMOAFZkL9bxqmg',
  clientId: '406822193435-0imu021fubi42dc4m1os6ikufl5s22te.apps.googleusercontent.com',
  discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
  scope: 'https://www.googleapis.com/auth/spreadsheets',
})
