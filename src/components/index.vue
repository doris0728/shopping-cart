<template>
  <div>
    <!-- banner img -->
    <div id="img">
      <img src="../img/index.jpeg" width="100%" class="d-inline-block align-top" alt="vue_icon" />
    </div>

    <!-- two main sale block img -->
    <div>
      <div class="row no-gutters">
        <div class="col-sm-6 bgImg" :style="{backgroundImage: imgSnowboard}" align="center">
          <div class="fram">
              <p>
                <a>SNOWBOARD / SKI</a><br/> <a>EQUIPMENT SALE</a><br/>
              </p>
          </div>
        </div>
        <div class="col-sm-6 bgImg" :style="{backgroundImage: imgSnow}" align="center">
          <div class="fram">
            <p><a>WINTER SALE</a></p>
          </div>
        </div>
      </div>
    </div>

    <!-- product list -->
    <b-container>
      <!-- <b-col class="m-5 text-center">
        <h2>Feature Products</h2>
      </b-col> -->
      <b-row align-h="center" class="m-5">
        <b-form-input v-model="search" placeholder="Find Product"></b-form-input>
      </b-row>
      <b-row align-h="center" class="m-3">
        <b-card v-for="blog in filteredBlogs" :key="blog.id" :title="blog.name" :img-src="blog.pic" img-top tag="article"
          style="max-width: 14rem;" class="m-3">
          <b-card-text>{{blog.price}}</b-card-text>
        </b-card>

        <!-- <b-card
          img-src="https://imgur.com/NEpaRAF.png"
          img-alt="Image"
          img-top
          title="這是一個範例"
          tag="article"
          style="max-width: 20rem;color:#6C6C6C"
          class="m-3"
          align="center"
        >
          <b-card-text align="center" style="color:#9D9D9D;">Content:hi</b-card-text>

        </b-card>
        <b-card
          img-src="https://imgur.com/GYoj1im.png"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="m-3"
        >
          <b-card-text>Content:hi</b-card-text>

          <b-button href="#" variant="primary">See More</b-button>
        </b-card> -->

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
          // detail: appData.detail,
          price: appData.price,
          pic: appData.pic[0]
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
    /* width: 500px; */
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
    /* width: 300px; */
    height: 200px;
    line-height:200px;

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
