<template>
  <v-expansion-panel-content v-if="!('id' in page)">
    <div slot="header">
      <h1>Создать страницу</h1>
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
                  <v-icon v-if="!page.imageble" alt="avatar">add_circle_outline</v-icon>
                  <img v-else :src="page.imageble.path">
                </div>
              </div>
            </div>
            <h1>Контент</h1>
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
                :false-value="0"
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
                label="Вся высота"
                :true-value="1"
                :false-value="0"
              ></v-checkbox>
            </v-layout>
            <v-btn @click="submit">Создать</v-btn>
          </v-form>
        </v-flex>
      </v-card-text>
    </v-card>
  </v-expansion-panel-content>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "NewPage",
  props: {
    parent: {
      type: Number
    }
  },
  mounted() {
    if (this.page.link) {
      this.page.link = 1;
    }
    this.location = document.defaultView.location.origin;
  },
  data: () => ({
    page: {
      imageble: null
    },
  }),
  methods: {
    previewImage: function(event) {
      let data = new FormData();
      data.append("image", this.$refs.file.files[0]);
      axios.post("/api/auth/images", data).then(resp => {
        this.alerts.push({ message: resp.data.message });
        this.page.imageble = resp.data.image;
        this.$refs.file.value = "";
      });
    },
    submit() {
      this.page.parent = this.parent;
      axios.post("/api/auth/pages", this.page).then(resp => {
        this.alerts.push({ message: resp.data.message });
        this.$emit("addPage", resp.data.page);
        this.page = {
          imageble: null
        };
      });
    }
  },
  computed: {
    ...mapState({
      alerts: state => state.alerts.alerts
    })
  },
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

<style scoped src="trumbowyg/dist/ui/trumbowyg.css">
</style>
