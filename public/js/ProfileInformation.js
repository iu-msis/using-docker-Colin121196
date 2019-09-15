var usersApp = new Vue({
  el: '#userProfileApp',
  data: {
    users: []
  },
  methods: {
    fetchUsers() {
      fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(json => {usersApp.users = json});
    }
  },
  created() {
    this.fetchUsers()
  }
});
