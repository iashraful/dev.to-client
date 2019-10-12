<template>
    <div>
        <b-loading :is-full-page="true" :active.sync="isLoading" :can-cancel="false"></b-loading>
        <post-details :post="post" v-if="!isLoading"/>
    </div>
</template>

<script>
    import PostDetails from "@/components/posts/PostDetails";
    export default {
        name: "PostDetailsView",
        components: {PostDetails},
        data() {
            return {
                post: undefined
            }
        },
        computed: {
            currentPost() {
                return this.$store.state.BlogData.posts.find((i) => i.slug === this.$route.params['slug'])
            },
            isLoading() {
                return !this.post
            }
        },
        mounted() {
            if(this.currentPost) {
                this.getPostFromApi()
            } else {
                this.post = {
                    title: 'No Post found',
                    body_markdown: ''
                }
            }
        },
        methods: {
            getPostFromApi() {
                this.$store.dispatch('getEachPost', this.currentPost).then((data) => {
                    this.post = data
                })
            }
        },
        watch: {
            currentPost(newValue) {
                this.getPostFromApi()
            }
        }
    }
</script>

<style scoped>

</style>