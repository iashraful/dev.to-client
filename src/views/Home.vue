<template>
    <div class="home">
<!--      <latest-five-post/>-->
      <h1>Working ....</h1>
    </div>
</template>

<script>
    import PostList from "@/components/posts/PostList";
    import LatestFivePost from "@/components/landing/LatestFivePost";

    export default {
        name: 'home',
        components: {LatestFivePost, PostList},
    }
</script>
