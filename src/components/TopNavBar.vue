<template>
    <b-navbar>
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img src="logo.png"  alt="Dev.to customized blog">
                <!--TODO: Here the name will be dynamic from API data.-->
                <span style="padding-left: 3px">blog of <strong>Ashraful Islam</strong></span>
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item tag="div">
                <b-input placeholder="Search..."/>
<!--                TODO: Here will be search box for posts-->
            </b-navbar-item>
        </template>

        <template slot="end">
            <b-navbar-item href="/posts">
                Posts
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
    export default {
        name: "TopNavBar"
    }
</script>

<style scoped>

</style>