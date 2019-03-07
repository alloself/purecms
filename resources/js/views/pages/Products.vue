<template>
  <v-container fluid>
    <v-layout row wrap>
      <new-product :pages="pages" @addProduct="addProduct"></new-product>
      <product-view
        :pages="pages"
        :product="product"
        v-for="product in products"
        :key="product.id"
        @updateProduct="updateProduct"
        @deleteProduct="deleteProduct"
      ></product-view>
    </v-layout>
  </v-container>
</template>
<script>
const ProductView = () => import("../components/products/ProductView.vue");
const NewProduct = () => import("../components/products/NewProduct.vue");
import { mapState, mapActions } from "vuex";
export default {
  components: {
    NewProduct,
    ProductView
  },
  data: () => ({
    products: [],
    pages: []
  }),
  created() {
    axios
      .get("/api/auth/products/pages")
      .then(resp => {
        this.pages = resp.data;
      })
      .catch(error => {});
    axios
      .get("/api/auth/products")
      .then(resp => {
        this.products = resp.data;
      })
      .catch(error => {});
  },
  methods: {
    ...mapActions("pages", ["getPages"]),
    addProduct(product) {
      this.products.push(product);
    },
    updateProduct(product) {
      var foundIndex = this.products.findIndex(prod => prod.id == product.id);
      this.products[foundIndex] = product;
      this.$forceUpdate();
    },
    deleteProduct(product) {
      this.products.splice(this.products.indexOf(product), 1);
    }
  }
};
</script>

