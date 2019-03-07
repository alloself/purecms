<template>
  <v-container fluid>
    <v-btn @click="genSitemap">Обновить Sitemap</v-btn>
  </v-container>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  methods: {
    genSitemap() {
      axios
        .get("/api/auth/sitemap")
        .then(result => {
          this.alerts.push({ message: result.data });
        })
        .catch(err => {});
    }
  },
  computed: {
    ...mapState({
      alerts: state => state.alerts.alerts
    })
  }
};
</script>
