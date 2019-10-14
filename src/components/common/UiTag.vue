<template>
    <b-taglist>
        <router-link
                class="mr-2"
                :to="{path: urls.postList, query: {tag: tag}}"
                v-for="tag in tags" :key="tag">
            <b-tag :type="getTagColor(tag)">{{ tag }}</b-tag>
        </router-link>
    </b-taglist>
</template>

<script>
    import {urls} from '@/constants'

    export default {
        name: "UiTag",
        props: ['tags'],
        data() {
            return {
                urls: urls,
                commonTagsMapping: {
                    javascript: 'is-primary',
                    python: 'is-info',
                    django: 'is-primary',
                    php: 'is-info',
                    laravel: 'is-primary',
                    react: 'is-danger',
                    reactjs: 'is-danger',
                    es6: 'is-link',
                    vuejs: 'is-success',
                    vue: 'is-success',
                    api: 'is-danger',
                    graphql: 'is-danger',
                    soap: 'is-',
                    docker: 'is-black',
                    kubernates: 'is-dark',
                    k8: 'is-dark',
                    ruby: 'is-danger',
                    rails: 'is-success',
                    ruby_on_rails: 'is-success',
                    go: 'is-dark',
                    golang: 'is-dark',
                    scala: 'is-primary',
                    webdev: 'is-warning',
                    beginners: 'is-primary',
                    intermediate: 'is-success',
                    advanced: 'is-danger',
                    other: 'is-info'
                }
            }
        },
        methods: {
            getTagColor(value) {
                if (value in this.commonTagsMapping) {
                    return this.commonTagsMapping[value]
                } else {
                    return this.commonTagsMapping['other']
                }
            }
        }
    }
</script>

<style scoped>

</style>