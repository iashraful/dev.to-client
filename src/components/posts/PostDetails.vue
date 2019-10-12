<template>
    <div>
        <figure class="image">
            <img :src="post.cover_image">
        </figure>
        <p class="title has-text-centered is-4">{{ post.title }}</p>
        <p>
            <vue-markdown>{{ post.body_markdown }}</vue-markdown>
        </p>
    </div>
</template>

<script>
    import VueMarkdown from 'vue-markdown'

    export default {
        name: "PostDetails",
        props: ['post'],
        components: {
            VueMarkdown
        }
    }
</script>

<style scoped>

</style>