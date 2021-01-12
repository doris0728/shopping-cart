<template>
  <div>
    <div id="img">
      <img src="../img/index.jpeg" width="100%" class="d-inline-block align-top" alt="vue_icon" />
      <!-- <b-img src="../img/index.jpeg" fluid alt="Responsive image"></b-img> -->
    </div>
    <div>
      <div class="row no-gutters">
        <div class="col bgImg" :style="{backgroundImage: imgSnowboard}" align="center">
          <div class="fram">
            <h4>SNOWBOARD / SKI EQUIPMENT SALE</h4>
          </div>
        </div>
        <div class="col bgImg" :style="{backgroundImage: imgSnow}" align="center">
          <div class="fram">
            <h4>WINTER SALE</h4>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid">
      <!--三欄式排版-->
      <div class="row">
        <div
          class="col-4 box bg-cover"
          style="background-image: url(https://images.unsplash.com/photo-1453785675141-67637e2d4b5c?dpr=2&auto=format&fit=crop&w=1500&h=918&q=80&cs=tinysrgb&crop=)"
        ></div>
        <div
          class="col-4 box bg-cover"
          style="background-image: url(https://images.unsplash.com/photo-1490921045028-16ab0b47b757?dpr=2&auto=format&fit=crop&w=1500&h=2000&q=80&cs=tinysrgb&crop=)"
        ></div>
        <div
          class="col-4 box bg-cover"
          style="background-image: url(https://images.unsplash.com/photo-1493585552824-131927c85da2?dpr=2&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=)"
        ></div>
      </div>
      <!--左邊大圖佔整個瀏覽器的高度，右邊兩張圖上下排列-->
      <div class="row" style="height: 100vh">
        <div
          class="col-8 bg-cover"
          style="background-image: url(https://images.unsplash.com/photo-1453785675141-67637e2d4b5c?dpr=2&auto=format&fit=crop&w=1500&h=918&q=80&cs=tinysrgb&crop=)"
        ></div>
        <div class="col-4">
          <div class="row flex-column h-100">
            <div
              class="h-50 bg-cover"
              style="background-image: url(https://images.unsplash.com/photo-1502472584811-0a2f2feb8968?dpr=1&auto=format&fit=crop&w=1080&h=720&q=80&cs=tinysrgb&crop=)"
            ></div>
            <div
              class="h-50 bg-cover"
              style="background-image: url(https://images.unsplash.com/photo-1496347646636-ea47f7d6b37b?dpr=1&auto=format&fit=crop&w=1080&h=720&q=80&cs=tinysrgb&crop=)"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <b-container>
      <b-col class="m-5 text-center">
        <h2>Feature Products</h2>
      </b-col>
      <b-row align-h="center" class="m-5">
        <b-form-input v-model="search" placeholder="Find Product"></b-form-input>
      </b-row>
      <b-row align-h="center" class="m-3">
        <b-card
          v-for="blog in filteredBlogs"
          :key="blog.id"
          :title="blog.name"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="m-3"
        >
          <b-card-text>Content: {{ blog.detail }}</b-card-text>
          <b-card-text>Author: {{blog.price}}</b-card-text>
          <b-card-text>
            HashTags:
            <ul>
              <li v-for="hashtag in blog.count" :key="hashtag.id"># {{ hashtag }}</li>
            </ul>
          </b-card-text>

          <b-button href="#" variant="primary">See More</b-button>
        </b-card>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import searchMixin from "../mixins/searchMixin";
import { db } from "@/config/firebaseConfig.js";
export default {
  data() {
    return {
      blogs: [],
      search: "",
      imgSnowboard:'url(' + require('../img/snowboard.jpg') + ')',
      imgSnow:'url(' + require('../img/snow.jpg') + ')'
    };
  },
  mounted() {
    this.getBlogs();
  },
  methods: {
    async getBlogs() {
      let dbBlogs = await db.collection("blogs").get();
      const blogs = [];
      console.log(dbBlogs);
      dbBlogs.forEach(doc => {
        let appData = doc.data();
        appData.id = doc.id;
        blogs.push({
          id: appData.id,
          name: appData.name,
          count: appData.count,
          detail: appData.detail,
          price: appData.price,
          pic: appData.pic
        });
      });
      this.blogs = blogs;
      console.log(this.blogs);
    }
  },
  mixins: [searchMixin]
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
  border: 5px solid rgba(255, 254, 254, 0.657);
}
/* PC */
@media (min-width: 768px) {
  #img img {
    height: 600px;
  }

  .fram {
    /* width: 500px; */
    height: 400px;
  }
}
/* mobile */
@media (max-width: 768px) {
  #img img {
    height: 300px;
  }

  .fram {
    width: 300px;
    height: 200px;
  }
}

.box {
  height: 300px;
  background-color: gray;
}

/*讓過大的圖縮至適當尺寸*/
.bg-cover {
  background-size: cover;
  background-position: center center;
}
</style>
