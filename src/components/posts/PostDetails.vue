<template>
    <div>
        <p class="title has-text-centered is-4">{{ post.title }}</p>
        <figure class="image is-4by2">
            <img :src="post.cover_image">
        </figure>
        <p>
            <vue-markdown>{{ getPostBody(post.body_markdown) }}</vue-markdown>
        </p>
    </div>
</template>

<script>
    import VueMarkdown from 'vue-markdown'
    import postUtils from '@/utils/posts'

    export default {
        name: "PostDetails",
        props: ['post'],
        components: {
            VueMarkdown
        },
        methods: {
            getPostBody(md) {
                return postUtils.markdownParser(md)
            }
        }
    }
</script>

<style scoped>

</style>