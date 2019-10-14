<template>
    <div class="columns">
        <div class="column is-three-quarters-desktop is-full-tablet is-full-mobile is-fullheight">
            <latest-five-post/>
        </div>
        <div class="column is-one-quarter-desktop is-full-tablet is-full-mobile is-fullheight">
            <div class="fixed-right">
                <twitter-integration/>
            </div>
        </div>
    </div>
</template>

<script>
    import PostList from "@/components/posts/PostList";
    import LatestFivePost from "@/components/landing/LatestFivePost";
    import TwitterIntegration from "@/components/common/TwitterIntegration";

    export default {
        name: "Landing",
        components: {TwitterIntegration, LatestFivePost, PostList},
    }
</script>

<style scoped>

</style>