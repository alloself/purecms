<template>
  <v-app>
    <v-navigation-drawer
      fixed
      :clipped="$vuetify.breakpoint.mdAndUp"
      app
      v-model="drawer"
      v-if="user != null"
    >
      <v-list dense>
        <template v-for="item in items">
          <v-layout row v-if="item.heading" align-center :key="item.heading">
            <v-flex xs6>
              <v-subheader v-if="item.heading">{{ item.heading }}</v-subheader>
            </v-flex>
            <v-flex xs6 class="text-xs-center">
              <a href="#!" class="body-2 black--text">EDIT</a>
            </v-flex>
          </v-layout>
          <v-list-group
            v-else-if="item.children"
            v-model="item.model"
            :key="item.text"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon
          >
            <v-list-tile slot="activator" :to="{name:item.to}" exact-active-class="target-link">
              <v-list-tile-content>
                <v-list-tile-title>{{ item.text }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile v-for="(child, i) in item.children" :key="i">
              <v-list-tile-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ child.text }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
          <v-list-tile
            v-else
            :to="{name:item.to}"
            exact-active-class="target-link"
            :key="item.text"
          >
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.text }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app :clipped-left="$vuetify.breakpoint.mdAndUp" fixed v-if="user != null">
      <v-toolbar-title>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span class="hidden-sm-and-down">Панель администратора</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu offset-y>
        <v-btn slot="activator" :ripple="false">
          <v-icon>account_circle</v-icon>
          {{user.name}}
        </v-btn>
        <v-list >
          <v-list-tile @click="LogOut">
            <v-list-tile-title>Выход</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
    <v-content>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </v-content>
    <v-snackbar
      top
      right
      v-model="alert.message"
      v-for="(alert,index) in alerts"
      :key="index"
      :timeout="6000"
    >
      {{ alert.message }}
      <v-btn flat color="pink" @click.native="alerts.splice(index,1)">Close</v-btn>
    </v-snackbar>
    <vue-progress-bar></vue-progress-bar>
  </v-app>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data: () => ({
    dialog: false,
    drawer: null,
    items: [
      { icon: "contacts", text: "Пользователи", to: "Users" },
      { icon: "book", text: "Страницы", to: "Pages" },
      { icon: "shopping_cart", text: "Продукты", to: "Products" },
      { icon: "add_shopping_cart", text: "Заказы", to: "Orders" },
      { icon: "settings", text: "Настройки", to: "Settings" }
    ]
  }),
  mounted() {
    this.$Progress.finish();
    if (this.token) {
      this.SetUser().catch(error => {
        this.$router.push({ name: "Login" });
      });
    } else {
      this.$router.push({ name: "Login" });
    }
  },
  created() {
    this.$Progress.start();
    this.$router.beforeEach((to, from, next) => {
      if (to.meta.progress !== undefined) {
        let meta = to.meta.progress;
        this.$Progress.parseMeta(meta);
      }
      this.$Progress.start();

      next();
    });
    this.$router.afterEach((to, from) => {
      this.$Progress.finish();
    });
  },
  computed: {
    ...mapState({
      alerts: state => state.alerts.alerts,
      user: state => state.user.user,
      token: state => state.user.token
    })
  },
  methods: {
    ...mapActions("user", ["SetUser", "LogOut"])
  }
};
</script>
<style>
.v-menu__activator--active .v-btn {
  background-color: #fff !important;
  border-bottom-left-radius: 0 !important;
  box-shadow: -1px 8px 12px 0px rgba(0, 0, 0, 0.2) !important;
  border-bottom-right-radius: 0 !important;
}
.v-menu__activator--active .v-btn:hover {
  background: rgba(0, 0, 0, 0.04);
}
#app {
  background-color: #fff;
}
* {
  box-shadow: none !important;
}
.v-menu__content {
  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
    0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12) !important;
}
.shadow {
  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
    0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12) !important;
}
.target-link {
  border-left: 3px solid black;
}
nav {
  border-bottom: 1px solid #d7d5d7;
}
</style>

<style scoped>
.menuable__content__active {
  box-shadow: -1px 8px 12px 0px rgba(0, 0, 0, 0.2) !important;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.v-menu__activator--active .v-btn:before {
  opacity: 0 !important;
}
</style>

