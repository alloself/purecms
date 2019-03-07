<template>
  <v-flex xs12 md4>
    <v-card>
      <v-toolbar>
        <v-toolbar-title>{{product.title}}</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-form>
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
                <img v-else :src="image.path">
              </div>
            </div>
          </div>
          <v-text-field
            name="title"
            label="Название"
            type="text"
            outline
            required
            v-model="product.title"
          ></v-text-field>
          <v-text-field
            name="price"
            label="Цена"
            type="number"
            outline
            required
            v-model="product.price"
          ></v-text-field>
          <trumbowyg v-model="product.description"></trumbowyg>
          <v-autocomplete
            :items="pages"
            item-value="id"
            item-text="title"
            v-model="product.page_id"
            outline
            label="Выводить на странице"
          ></v-autocomplete>
          <v-checkbox v-model="product.pageble" label="Страница" :true-value="1" :false-value="0"></v-checkbox>
          <v-text-field
            outline
            v-model="newProp"
            label="Введите новый параметр"
            append-icon="add"
            @click:append="addProp"
          ></v-text-field>
          <template v-for="(prop,index) in product.params">
            <v-layout :key="index">
              <v-flex row>
                <h4>Название параметра: {{prop.name}}</h4>
                <v-text-field
                  label="Значение параметра"
                  type="text"
                  outline
                  v-model="prop.value"
                  @click:append="deleteProp(index)"
                  append-icon="delete"
                ></v-text-field>
              </v-flex>
            </v-layout>
          </template>
        </v-form>
      </v-card-text>
      <v-btn @click="update">Обновить</v-btn>
      <v-btn @click="destroy">Удалить</v-btn>
    </v-card>
  </v-flex>
</template>
<script>

import { mapState } from "vuex";
export default {
  props: {
    pages: {
      type: Array,
      default: function() {
        return [];
      }
    },
    product: {
      type: Object,
      default: function() {
        return {
          image: null
        };
      }
    }
  },
  mounted() {
    this.product.params = JSON.parse(this.product.params);
    if (this.product.imageble) {
      this.image = this.product.imageble;
    }
  },
  data: () => ({
    newProp: "",
    image: null
  }),
  computed: {
    ...mapState({
      alerts: state => state.alerts.alerts
    })
  },
  methods: {
    deleteProp(index) {
      this.product.params.splice(index, 1);
    },
    update() {
      this.product.imageble = this.image;
      this.product.params = JSON.stringify(this.product.params);
      axios
        .patch("/api/auth/products/" + this.product.id, this.product)
        .then(resp => {
          resp.data.params = JSON.parse(resp.data.params);
          this.$emit("updateProduct", resp.data);
          this.$forceUpdate();
        });
    },
    destroy() {
      axios.delete("/api/auth/products/" + this.product.id).then(resp => {
        this.$emit("deleteProduct", this.page);
      });
    },
    previewImage: function(event) {
      let data = new FormData();
      this.image = null;
      data.append("image", this.$refs.file.files[0]);
      data.append("sizeble", true);
      axios.post("/api/auth/images", data).then(resp => {
        this.alerts.push({ message: resp.data.message });
        this.image = resp.data.image;
        this.$refs.file.value = "";
      });
    },
    addProp() {
      this.product.params.push({ name: this.newProp });
    }
  }
};
</script>
<style scoped>
.v-card {
  border: 1px solid #d7d5d7;
  margin: 5px;
}
.center {
  display: flex;
  align-items: center;
  justify-content: center;
}
.image-card {
  position: relative;
  height: 150px;
  margin-bottom: 20px;
  width: 150px;
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
.quillWrapper {
  margin: 0 0 20px 0;
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

