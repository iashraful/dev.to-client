<template>
    <div class="post-details">
        <p class="title has-text-centered is-4">{{ post.title }}</p>
        <ui-tag :tags="post.tags"/>
        <figure class="image is-4by2">
            <img :src="post.cover_image">
        </figure>
        <vue-markdown>{{ getPostBody(post.body_markdown) }}</vue-markdown>
        <vue-disqus
                class="comments"
                :title="post.title"
                :identifier="post.slug"
                :shortname="userConfig.disqus_shortname">
        </vue-disqus>
    </div>
</template>

<script>
    import VueMarkdown from 'vue-markdown'
    import postUtils from '@/utils/posts'
    import UiTag from "@/components/common/UiTag";

    export default {
        name: "PostDetails",
        props: ['post'],
        components: {
            UiTag,
            VueMarkdown
        },
        methods: {
            getPostBody(md) {
                return postUtils.markdownParser(md)
            }
        },
        mounted() {
            document.title = this.post.title
        },
        computed: {
            userConfig() {
                return this.$store.getters.getUserConfig
            }
        }
    }
</script>

<style scoped>

</style>