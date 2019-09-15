var usersApp = new Vue({
  el: '#userProfileApp',
  data: {
    patients: []
  },
  methods: {
    fetchPatients() {
      fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(json => {usersApp.patients = json});

      // Means the same at this
      // fetch('https://randomuser.me/api/')
      // .then(function(response) {return response.json()})
      // .then(function(json) {waitingApp.people = json});

    }
  },
  created() {
    this.fetchPatients()
  }
});
