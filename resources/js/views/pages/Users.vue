<template>
  <v-container fluid>
    <v-data-table :headers="headers" :items="users" :loading="loading" class="shadow">
      <v-progress-linear slot="progress" color="blue" indeterminate></v-progress-linear>
      <template slot="items" slot-scope="props">
        <tr @contextmenu="show($event,props.item)">
          <td>{{ props.item.name }}</td>
          <td>{{ props.item.email }}</td>
          <td>{{ props.item.admin }}</td>
          <td>{{ props.item.created_at }}</td>
        </tr>
      </template>
    </v-data-table>
    <v-menu v-model="showMenu" :position-x="x" :position-y="y" absolute offset-y>
      <v-list>
        <v-list-tile v-for="(item, index) in actions" :key="index" @click="deleteUser">
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </v-container>
</template>
<script>
import { mapState } from "vuex";
export default {
  created() {
    axios
      .get("/api/auth/users")
      .then(resp => {
        this.users = resp.data;
        this.loading = false;
      })
      .catch(error => {});
  },
  data: () => ({
    loading: true,
    users: [],
    selectUser: null,
    showMenu: false,
    x: 0,
    y: 0,
    actions: [
      {
        title: "Удалить"
      }
    ],
    headers: [
      {
        text: "Имя",
        value: "name",
        align: "left"
      },
      { text: "email", value: "email", align: "left" },
      { text: "Админ", value: "admin", align: "left" },
      { text: "Создан", value: "created_at", align: "left" }
    ]
  }),
  computed: {
    ...mapState({
      alerts: state => state.alerts.alerts
    })
  },
  methods: {
    deleteUser() {
      axios
        .delete("/api/auth/users/" + this.selectUser.id)
        .then(resp => {
          this.alerts.push(resp.data);
          console.log(this.alerts);
          this.users.splice(this.users.indexOf(this.selectUser), 1);
        })
        .catch(error => {});
    },
    show(e, user) {
      e.preventDefault();
      this.selectUser = user;
      this.showMenu = false;
      this.x = e.clientX;
      this.y = e.clientY;
      this.$nextTick(() => {
        this.showMenu = true;
      });
    }
  }
};
</script>
<style scoped>
</style>

