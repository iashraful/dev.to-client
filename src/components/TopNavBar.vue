<template>
    <b-navbar :fixed-top="true" type="is-dark" wrapper-class="container">
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <!-- TODO: Here the name will be dynamic from API data.-->
                {{ userConfig.blog_title }}
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item tag="div">
                <b-input placeholder="Search..."/>
                <!-- TODO: Here will be search box for posts-->
            </b-navbar-item>
        </template>

        <template slot="end">
            <b-navbar-item tag="router-link" :to="{path: urls.postList}">
                Posts
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
    import {urls} from '@/constants'

    export default {
        name: "TopNavBar",
        data() {
            return {
                urls: urls,
            }
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