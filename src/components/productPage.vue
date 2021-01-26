<template>
  <div>

    <!-- product list -->
    <b-container fluid>

      <!-- card -->
      <b-row align-h="center" class="m-3">
        <b-card v-for="blog in findBlogById" :key="blog.id" :img-src="blog.pic" img-top tag="article" style="max-width: 14rem;" class="m-4 border-0 pointer">
          <b-card-title align="center" style="margin-bottom:.1rem; margin-top:-.1rem">{{blog.name}}</b-card-title>
          <b-card-text align="center">${{blog.price}}</b-card-text>
        </b-card>

      </b-row>
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
      query: this.$route.query.id
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
#img img {
  object-fit: cover;
}
.bgImg {
  padding: 30px !important;
}
.fram {
  border: 5px solid rgba(255, 255, 255, 0.657);
  color: rgba(255, 255, 255, 0.75);
  font-size: 5vmin;
  font-weight: bold;
}
.fram p {
  display:inline-block;
  vertical-align:middle;
  line-height: 5vmin;
}

/* PC */
@media (min-width: 768px) {
  #img img {
    height: 600px;
  }

  .fram {
    height: 400px;
    line-height:400px;
  }
}

/* mobile */
@media (max-width: 768px) {
  #img img {
    height: 300px;
  }

  .fram {
    height: 200px;
    line-height:200px;

  }
}

.box {
  height: 300px;
  background-color: gray;
}

/*讓過大的圖縮成適當尺寸*/
.bg-cover {
  background-size: cover;
  background-position: center center;
}

/* 手手滑鼠 */
.pointer {
  cursor: pointer;
}
</style>
