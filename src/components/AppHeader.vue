<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light">
      <b-navbar-brand class="mr-5">
        <!-- <img
          src="https://cdn.iconscout.com/icon/free/png-512/vue-282497.png"
          width="30rem"
          class="d-inline-block align-top"
          alt="vue_icon"
        /> -->
        <router-link to="/" class="pointer"><h4><strong> HEY </strong></h4></router-link>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item> <router-link to="/" exact>Home</router-link></b-nav-item>
          <b-nav-item><router-link to="/blogs" exact>Blog Post</router-link></b-nav-item>
          <b-nav-item><router-link to="/addBlog" exact>Add Blog Post</router-link></b-nav-item>
          <b-nav-item><router-link to="/cart" exact>
            <img src="../img/shopping-cart.png" width="28rem" class="d-inline-block align-top" alt="vue_icon" />
          </router-link></b-nav-item>
          <b-nav-item-dropdown text="User" right>
            <b-dropdown-item><router-link to="/login" style="color:black">Login</router-link></b-dropdown-item>
            <b-dropdown-item><router-link to="/register" style="color:black">Register</router-link></b-dropdown-item>
            <b-dropdown-item><router-link to="/logout" style="color:black">Logout</router-link></b-dropdown-item>
          </b-nav-item-dropdown>

          <!-- Navbar dropdowns -->
          <!-- <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">CH</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown text="User" right>
            <b-dropdown-item href="#">Account</b-dropdown-item>
            <b-dropdown-item href="#">Settings</b-dropdown-item>
          </b-nav-item-dropdown> -->
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
li a {
  text-decoration: none;
  color: black;
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