<template>
  <v-container fluid >
    <v-expansion-panel focusable class="shadow" expand>
      <new-page @addPage="addPage"></new-page>
    </v-expansion-panel>
    <template v-if="pages.length > 0">
      <h1>Существующие странцы</h1>
      <v-expansion-panel focusable class="shadow">
        <page-view
          :page="page"
          v-for="page in pages"
          :key="page.id"
          @deleteNestedPage="deletePage"
          @updatePage="updatePage"
        ></page-view>
      </v-expansion-panel>
    </template>
  </v-container>
</template>
<script>
const PageView = () => import("../components/pages/PageView.vue");
const NewPage = () => import("../components/pages/NewPage.vue");
import { mapState, mapActions } from "vuex";
export default {
  components: {
    PageView,
    NewPage
  },
  created() {
    this.getPages();
  },
  methods: {
    ...mapActions("pages", ["getPages"]),
    deletePage(page) {
      this.pages.splice(this.pages.indexOf(page), 1);
    },
    addPage(page) {
      this.pages.push(page);
    },
    updatePage(Obj) {
      var foundIndex = this.pages.findIndex(page => page.id == Obj.id);
      this.pages[foundIndex] = Obj;
      this.$forceUpdate();
    }
  },
  computed: {
    ...mapState({
      pages: state => state.pages.pages
    })
  },
  data: () => ({})
};
</script>
