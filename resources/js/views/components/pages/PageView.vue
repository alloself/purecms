<template>
  <v-expansion-panel-content>
    <div slot="header">
      <h1>{{page.title}}</h1>
      <a
        :href="location+'/'+page.path"
        v-if="page.path != '/'"
        :key="page.path"
      >{{location+'/'+page.path}}</a>
      <a :href="location+page.path" v-else :key="page.path">{{location+page.path}}</a>
    </div>
    <v-card>
      <v-card-text>
        <v-flex>
          <v-form lazy-validation>
            <v-text-field
              name="title"
              label="Название"
              type="text"
              outline
              required
              v-model="page.title"
            ></v-text-field>
            <div class="center">
              <div class="image-card shadow">
                <div class="view">
                  <input
                    type="file"
                    name="image"
                    class="image"
                    @change="previewImage"
                    accept="image/*"
                    ref="file"
                  >
                  <v-icon v-if="!image" alt="avatar">add_circle_outline</v-icon>
                  <img v-else :src="image.path" :key="image.path">
                </div>
              </div>
            </div>
            <h5>Контент</h5>
            <trumbowyg v-model="page.content" ></trumbowyg>
            <v-text-field
              name="keywords"
              label="Ключевые слова(SEO)"
              type="text"
              outline
              required
              v-model="page.keywords"
            ></v-text-field>
            <v-text-field
              name="description"
              label="Описание страницы(SEO)"
              type="text"
              outline
              required
              v-model="page.description"
            ></v-text-field>
            <v-layout>
              <v-checkbox
                v-model="page.link"
                label="Выводить в меню"
                :true-value="1"
                :false-value="null"
              ></v-checkbox>
              <v-checkbox
                v-model="page.index_page"
                label="Главная страница"
                :true-value="1"
                :false-value="0"
              ></v-checkbox>
              <v-checkbox
                v-model="page.include_side_bar"
                label="Выводить сайдбар на этой странице"
                :true-value="1"
                :false-value="0"
              ></v-checkbox>
              <v-checkbox
                v-model="page.side_bar"
                label="Выводить в сайдабре"
                :true-value="1"
                :false-value="0"
              ></v-checkbox>
              <v-checkbox
                v-model="page.full_height"
                :true-value="1"
                :false-value="0"
                label="Вся высота"
              ></v-checkbox>
            </v-layout>
            <v-layout>
              <v-flex>
                <h3>Дочерние страницы</h3>
                <v-expansion-panel class="shadow margin">
                  <new-page :parent="page" :page="{parent:page.id}" @addPage="addPage"></new-page>
                </v-expansion-panel>
                <template v-if="Array.isArray(page.children) && page.children.length > 0">
                  <v-expansion-panel class="shadow margin">
                    <page-view
                      :page="child"
                      :parent="page"
                      v-for="child in page.children"
                      :key="child.id"
                      @deleteNestedPage="deletePage"
                      @updatePage="updatePage"
                    ></page-view>
                  </v-expansion-panel>
                </template>
              </v-flex>
            </v-layout>
            <v-layout>
              <v-btn @click="update">Обновить</v-btn>
              <v-btn @click="destroy">Удалить</v-btn>
            </v-layout>
          </v-form>
        </v-flex>
      </v-card-text>
    </v-card>
  </v-expansion-panel-content>
</template>
<script>
const PageView = () => import("./PageView.vue");
const NewPage = () => import("./NewPage.vue");
import { mapState } from "vuex";
export default {
  name: "PageView",
  props: {
    page: {
      type: Object,
      default: function() {
        return {};
      }
    },
    parent: {
      type: Number
    }
  },
  mounted() {
    if (this.page.link) {
      this.page.link = 1;
    }
    if (this.page.imageble) {
      this.image = this.page.imageble;
    }
    this.location = document.defaultView.location.origin;
  },
  data: () => ({
    location: null,
    image: null
  }),
  methods: {
    deletePage(page) {
      this.page.children.splice(this.page.descendants.indexOf(page), 1);
    },
    addPage(page) {
      this.page.children.push(page);
    },
    updatePage(Obj) {
      var foundIndex = this.page.children.findIndex(page => page.id == Obj.id);
      this.page.children[foundIndex] = Obj;
      this.$forceUpdate();
    },
    previewImage: function(event) {
      let data = new FormData();
      this.image = null;
      data.append("image", this.$refs.file.files[0]);
      axios.post("/api/auth/images", data).then(resp => {
        this.alerts.push({ message: resp.data.message });
        this.image = resp.data.image;
        this.$refs.file.value = "";
      });
    },
    update() {
      this.page.imageble = this.image;
      let children = this.page.children;
      axios.patch("/api/auth/pages/" + this.page.id, this.page).then(resp => {
        this.alerts.push({ message: resp.data.message });
        resp.data.page.children = children;
        this.$emit("updatePage", resp.data.page);
        this.$forceUpdate();
      });
    },
    destroy() {
      axios.delete("/api/auth/pages/" + this.page.id).then(resp => {
        if (this.parent) {
          this.parent.children.splice(
            this.parent.children.indexOf(this.page),
            1
          );
        } else {
          this.$emit("deleteNestedPage", this.page);
        }
      });
    }
  },
  computed: {
    ...mapState({
      alerts: state => state.alerts.alerts
    })
  },
  components: {
    PageView,
    NewPage
  }
};
</script>
<style scoped>
.quillWrapper {
  margin: 0 0 20px 0;
}
.margin {
  margin: 25px 0;
}
.image-card {
  position: relative;
  height: 300px;
  width: 300px;
}
.image-card .view img {
  max-width: 100%;
  object-fit: contain;
  max-height: 100%;
}

i.card-img-top {
  width: 100%;
  min-height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.center {
  display: flex;
  align-items: center;
  justify-content: center;
}
.image-card .view {
  display: flex;
}
.image-card .view img {
  max-width: 100%;
  max-height: 100%;
}
.view input {
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0;
  z-index: 9999;
}
.image-card .view {
  height: 100%;
  display: flex;
  width: 100%;
  -o-object-fit: contain;
  object-fit: contain;
  align-items: center;
  justify-content: center;
}
</style>
