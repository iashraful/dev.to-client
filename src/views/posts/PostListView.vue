<template>
    <div>
        <blog-page-header title="All Posts" subtitle=""/>
        <b-loading :is-full-page="true" :active.sync="allPosts.length === 0" :can-cancel="false"></b-loading>
        <post-list v-if="allPosts.length > 0" :posts="allPosts"/>
    </div>
</template>

<script>
    import PostList from "@/components/posts/PostList";
    import BlogPageHeader from "@/components/common/BlogPageHeader";
    export default {
        name: "PostListView",
        components: {BlogPageHeader, PostList},
        data() {
            return {

            }
        },
        computed: {
            allPosts() {
                return this.$store.getters.getAllPublishedPosts
            }
        }
    }
</script>

<style scoped>

</style>