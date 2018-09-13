<template>
  <nav class="navbar">
    <router-link to="/" exact>
      <img
        class="logo-image"
        src="https://o4j806krb.qnssl.com/public/images/cnodejs_light.svg"
        alt="CNode Logo"
      >
    </router-link>
  </nav>
</template>

<script>
export default { name: "NavigationBar" };
</script>
  
<style scoped>
.navbar {
  box-sizing: border-box;
  height: 4rem;
  padding: 1rem;
  box-shadow: 0 0 8px 0 grey;
  background-color: #444;
}

.logo-image {
  display: inline-block;
  width: auto;
  height: 2rem;
}
</style>