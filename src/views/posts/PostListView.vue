<template>
    <div>
        <h1 class="has-text-centered title is-4">Posts</h1>
        <hr/>
        <post-list :posts="allPosts"/>
    </div>
</template>

<script>
    import PostList from "@/components/posts/PostList";
    export default {
        name: "PostListView",
        components: {PostList},
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