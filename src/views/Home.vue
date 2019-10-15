<template>
    <div class="home">
        <blog-page-header :title="blogTitle" :subtitle="blogSubtitle"/>
        <landing/>
    </div>
</template>

<script>

    import Landing from "@/components/landing/Landing";
    import BlogPageHeader from "@/components/common/BlogPageHeader";
    export default {
        name: 'home',
        components: {BlogPageHeader, Landing},
        computed: {
            blogTitle() {
                return this.$store.getters.getUserConfig['blog_title']
            },
            blogSubtitle() {
                return this.$store.getters.getUserConfig['blog_subtitle']
            }
        }
    }
</script>
