<template>
  <div>
    <!-- banner img -->
    <div id="img">
      <img src="../img/index.jpeg" width="100%" class="d-inline-block align-top" alt="vue_icon" />
    </div>

    <!-- two main sale block img -->
    <div>
      <div class="row no-gutters">
        <div class="col-sm-6 bgImg pointer" :style="{backgroundImage: imgSnowboard}" align="center">
          <div class="fram">
              <p>
                <a>SNOWBOARD / SKI</a><br/> <a>EQUIPMENT SALE</a><br/>
              </p>
          </div>
        </div>
        <div class="col-sm-6 bgImg pointer" :style="{backgroundImage: imgSnow}" align="center">
          <div class="fram">
            <p><a>WINTER SALE</a></p>
          </div>
        </div>
      </div>
    </div>

    <!-- product list -->
    <b-container fluid>

      <b-row align-h="center" class="m-5">
        <b-form-input v-model="search" placeholder="Find Product"></b-form-input>
      </b-row>

      <!-- card -->
      <b-row align-h="center" class="m-3">
          <b-card v-for="blog in filteredBlogs" :key="blog.id" :img-src="blog.pic" img-top tag="article" style="max-width: 14rem;" class="m-4 border-0">
            <router-link :to="{path:'/page', query:{id:blog.id}}" class="pointer">
            <b-card-title align="center" style="margin-bottom:.1rem; margin-top:-.1rem">
              {{blog.name}}
              </b-card-title>
            </router-link>
            <b-card-text align="center">${{blog.price}}</b-card-text>
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
          // detail: appData.detail,
          price: appData.price,
          pic: appData.pic[0]
        });
      });
      this.blogs = blogs;
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
  color:#424244;
  text-decoration:none;
}
.pointer:hover {
  text-decoration:none;
}
</style>
