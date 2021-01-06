import homePage from './components/Home.vue';
import blogPost from './components/blogpost.vue';
import addBlog from "./components/addBlog.vue";
import login from "./components/auth/login.vue";
import logout from "./components/auth/logout.vue";
import forgotPassword from "./components/auth/forgotPassword.vue";
import register from "./components/auth/register.vue";
import admin from "./components/auth/admin.vue";
export default [
  { path: "/", component: homePage },
  { path: "/blogs", component: blogPost},
  { path: "/addBlog", component: addBlog },
  
  { path: "/login", component: login },
  { path: "/logout", component: logout },
  { path: "/forgotPassword", component: forgotPassword },
  { path: "/register", component: register },
  { path: "/admin", component: admin },
];