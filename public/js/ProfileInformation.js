var usersApp = new Vue({
  el: '#userProfileApp',
  data: {
    users: [],
    componentKey: 0,
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
  },
  forceRerender() {
    this.componentKey += 1;
  }
});
