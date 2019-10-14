<template>
    <div>
        <blog-page-header title="All Posts" subtitle=""/>
        <post-list :posts="allPosts"/>
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