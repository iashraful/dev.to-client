<template>
    <div>
        <b-loading :is-full-page="true" :active.sync="latestFivePosts.length === 0" :can-cancel="false"></b-loading>
        <div class="columns is-multiline is-mobile">
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
            }
        },
        computed: {
            latestFivePosts() {
                return this.$store.getters.getLatestTwoPosts
            }
        },
    }
</script>

<style scoped>

</style>