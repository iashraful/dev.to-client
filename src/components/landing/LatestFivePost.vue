<template>
    <div>
        <b-loading :is-full-page="true" :active.sync="isLoading" :can-cancel="false"></b-loading>
        <div class="columns is-multiline is-mobile" v-if="latestFivePosts.length > 0">
            <div
                    class="column is-full-desktop is-half-tablet is-full-mobile is-fullheight">
                <post-item :post="latestFivePosts[0]"/>
            </div>

            <div
                    class="column is-half-tablet is-full-mobile is-fullheight">
                <post-item :post="latestFivePosts[1]"/>
            </div>
            <div
                    class="column is-half-tablet is-full-mobile is-fullheight">
                <post-item :post="latestFivePosts[2]"/>
            </div>

            <div
                    class="column is-full-desktop is-half-tablet is-full-mobile is-fullheight">
                <post-item :post="latestFivePosts[3]"/>
            </div>
            <div
                    class="column is-full-desktop is-half-tablet is-full-mobile is-fullheight">
                <post-item :post="latestFivePosts[4]"/>
            </div>
        </div>
        <p class="subtitle has-text-centered is-4" v-if="latestFivePosts.length === 0">No posts found.</p>
    </div>
</template>

<script>
    import PostList from "@/components/posts/PostList";
    import PostItem from "@/components/posts/PostItem";
    export default {
        name: "LatestFivePost",
        components: {PostItem, PostList},
        data() {
            return {
                isLoading: true
            }
        },
        computed: {
            latestFivePosts() {
                let posts = this.$store.getters.getLatestTwoPosts;
                this.isLoading = false;
                return posts
            }
        },
    }
</script>

<style scoped>

</style>