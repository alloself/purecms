<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card>
          <v-toolbar>
            <v-toolbar-title>Вход</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <v-form lazy-validation>
              <v-text-field
                prepend-icon="person"
                name="login"
                label="E-mail"
                type="text"
                outline
                required
                v-model="user.email"
              ></v-text-field>
              <v-text-field
                prepend-icon="lock"
                name="password"
                :append-icon="show1 ? 'visibility_off' : 'visibility'"
                label="Password"
                id="password"
                :type="show1 ? 'text' : 'password'"
                outline
                required
                @click:append="show1 = !show1"
                v-model="user.password"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn flat @click="Submit">Войти</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  name: "Login",
  data: () => ({
    drawer: null,
    show1: false,
    user: {}
  }),
  mounted() {
    if (this.loggedIn) {
      console.log(1);
      this.$router.push({ name: "Users" });
    }
  },
  computed: {
    ...mapState({
      alerts: state => state.alerts.alerts
    }),
    ...mapGetters({
      loggedIn: "user/loggedIn"
    })
  },
  methods: {
    ...mapActions("user", ["LogIn", "SetToken"]),
    Submit() {
      this.LogIn(this.user)
        .then(resp => {
          this.alerts.push({
            message: resp
          });
          this.$router.push("/admin");
        })
        .catch(error => {
          this.alerts.push({
            message: error
          });
        });
    }
  }
};
</script>
<style scoped>
.v-card {
  border: 1px solid #d7d5d7;
}
.v-toolbar {
  border-bottom: 1px solid #d7d5d7;
}
.v-toolbar__content {
  background-color: #f6f7fa;
}
</style>


