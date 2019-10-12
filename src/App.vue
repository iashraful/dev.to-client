<template>
  <div>
    <TopNavBar/>
    <router-view class="container"/>
  </div>
</template>
<script>
  import TopNavBar from "./components/TopNavBar";
  import services from '@/utils/services'

  export default {
    components: {TopNavBar},
    created() {
      // Loading all the initial data while creating the vue instance
      services.loadInitialData(this.$store)
    }
  }
</script>