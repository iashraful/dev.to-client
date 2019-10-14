<template>
    <div>
        <blog-page-header :title="pageTitle" subtitle=""/>
        <b-loading :is-full-page="true" :active.sync="isLoading" :can-cancel="false"></b-loading>
        <post-list v-if="allPosts.length > 0" :posts="allPosts"/>
        <p class="subtitle has-text-centered is-4" v-if="allPosts.length === 0">No posts found.</p>
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
                isLoading: true,
                pageTitle: 'All Posts'
            }
        },
        computed: {
            allPosts() {
                const queryTag = this.$route.query['tag'];
                let _posts = [];
                if (queryTag) {
                    this.pageTitle = 'Tag: ' + queryTag;
                    _posts = this.$store.getters['getPostsByTag'](queryTag)
                }
                else {
                    this.pageTitle = 'All Posts'
                    _posts = this.$store.getters.getAllPublishedPosts
                }
                this.isLoading = false;
                return _posts
            }
        }
    }
</script>

<style scoped>

</style>