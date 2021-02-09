<template>
  <div>

    <!-- product list -->
    <b-container style="padding:0 18vmin">

      <!-- card -->
      <!-- <b-row align-h="center" class="m-3"> -->
        <!-- <div v-for="blog in findBlogById">

        </div> -->
        <b-card v-for="blog in findBlogById" :key="blog.id" :img-src="blog.pic" tag="article" class="m-4 border-0 productImg" img-left img-height="auto" img-width="350vmin">
          <b-card-title style="margin-left:60px">{{blog.name}}</b-card-title>
          <b-form-select v-model="selected" :options="options"></b-form-select>
          <b-card-text style="margin-left:60px">${{blog.price}}</b-card-text>
        </b-card>
        <h></h>

      <!-- </b-row> -->
    </b-container>
  </div>
</template>

<script>
import jumpToProductMixins from "../mixins/jumpToProduct";
import { db } from "@/config/firebaseConfig.js";
export default {
  data() {
    return {
      blogs: [],
      imgSnowboard:'url(' + require('../img/snowboard.jpg') + ')',
      imgSnow:'url(' + require('../img/snow.jpg') + ')',
      query: this.$route.query.id,
      options: [
          { value: null, text: 'Please select an option' },
          { value: 'a', text: 'This is First option' },
          { value: 'b', text: 'Selected Option' },
          { value: { C: '3PO' }, text: 'This is an option with object value' },
          { value: 'd', text: 'This one is disabled', disabled: true }
      ]
    };
  },
  mounted() {
    this.getBlogs();
  },
  methods: {
    async getBlogs() {
      let dbBlogs = await db.collection("blogs").get();
      const blogs = [];
      dbBlogs.forEach(doc => {
        let appData = doc.data();
        appData.id = doc.id;
        blogs.push({
          id: appData.id,
          name: appData.name,
          count: appData.count,
          // detail: appData.detail,
          price: appData.price,
          pic: appData.pic[0]
        });
      });
      this.blogs = blogs;
      console.log(this.blogs);
    }
  },
  mixins: [jumpToProductMixins]
};
</script>

<style scoped>
/* PC */
@media (min-width: 768px) {
}

/* mobile */
@media (max-width: 768px) {
  /* 手機板圖片置中 */
  .productImg {
    float:center;
    text-align: center;
  }
  .card {
    display: block;
  }
  /* card body 沒有東西 拔掉 */
  .card-body {
    display: none;
  }
}



/* 手手滑鼠 */
.pointer {
  cursor: pointer;
}
</style>
