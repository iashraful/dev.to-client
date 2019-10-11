<template>
    <div>
        <figure class="image">
            <img :src="currentPost.cover_image">
        </figure>
        <p class="title has-text-centered is-4">{{ currentPost.title }}</p>
        <p>
            {{ currentPost.description }}
        </p>
    </div>
</template>

<script>
    export default {
        name: "PostDetailsView",
        computed: {
            currentPost() {
                return this.$store.state.BlogData.posts.find((i) => i.slug === this.$route.params['slug'])
            }
        }
    }
</script>

<style scoped>

</style>