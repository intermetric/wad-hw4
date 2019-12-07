<template>
  <div id="app">
    <Header />
    <Users :users="users" :onChange="changeSelectedUser" />
    <List :list="list" />
    <Footer :add="addToList" />
  </div>
</template>

<script>
import List from "./components/List.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Users from "./components/Users.vue";
import User from "./models/User";
import axios from "axios";

export default {
  name: "app",
  methods: {
    addToList: function(title) {
      axios
        .post("http://localhost:3000/users/" + this.selectedUserId + "/tasks", {
          title: title
        })
        .then(response => {
          this.list.push(response.data);
        });
    },
    fetchTasks: function() {
      axios
        .get("http://localhost:3000/users/" + this.selectedUserId + "/tasks")
        .then(response => {
          this.list = response.data;
        });
    },
    changeSelectedUser: function(id) {
      this.selectedUserId = id;
      this.fetchTasks();
    }
  },
  data: () => {
    return {
      list: [],
      users: [
        new User(1, "First User"),
        new User(2, "Second User"),
        new User(3, "Third User"),
        new User(4, "Forth User")
      ],
      selectedUserId: 1
    };
  },
  components: {
    List,
    Header,
    Footer,
    Users
  },
  mounted: function() {
    this.fetchTasks();
  }
};
</script>

<style>
* {
  font-family: "Quicksand", sans-serif;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background-color: #f0efe9;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #454546;
  width: 30%;
  max-width: 400px;
  background-color: #ffffff;
  height: calc(100% - 200px);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  margin: auto;
  padding: 30px;
  box-shadow: 2px 2px 4px -1px #dadada;
}
</style>
