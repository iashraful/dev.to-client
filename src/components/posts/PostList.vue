<template>
    <div>
        <div class="columns is-multiline is-mobile">
            <div class="column is-one-quarter-desktop is-half-tablet is-full-mobile is-fullheight" v-for="post in posts" :key="post.id">
                <post-item :post="post"/>
            </div>
        </div>
    </div>
</template>

<script>
    import PostItem from "@/components/posts/PostItem";
    export default {
        name: "PostList",
        props: ['posts'],
        components: {PostItem},
        data() {
            return {

            }
        }
    }
</script>

<style scoped>

</style>