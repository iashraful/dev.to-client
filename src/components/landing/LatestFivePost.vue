<template>
    <div>
        <div class="columns is-multiline is-mobile">
            <div
                    class="column is-full-desktop is-half-tablet is-full-mobile is-fullheight">
                <post-item :post="firstTwoPosts[1]"/>
            </div>

            <div
                    class="column is-half-tablet is-full-mobile is-fullheight">
                <post-item :post="firstTwoPosts[0]"/>
            </div>
            <div
                    class="column is-half-tablet is-full-mobile is-fullheight">
                <post-item :post="lastThreePosts[0]"/>
            </div>

            <div
                    class="column is-full-desktop is-half-tablet is-full-mobile is-fullheight">
                <post-item :post="lastThreePosts[1]"/>
            </div>
            <div
                    class="column is-full-desktop is-half-tablet is-full-mobile is-fullheight">
                <post-item :post="lastThreePosts[2]"/>
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
            firstTwoPosts() {
                return this.$store.getters.getLatestTwoPosts
            },
            lastThreePosts() {
                return this.$store.getters.getSecondLatestThreePosts
            }
        },
    }
</script>

<style scoped>

</style>