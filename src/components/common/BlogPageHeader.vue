<template>
    <div class="page-header">
        <h1 class="title has-text-centered">{{ title }}</h1>
        <h1 class="subtitle has-text-centered">{{ subtitle }}</h1>
    </div>
</template>

<script>
    export default {
        name: "BlogPageHeader",
        props: ['title', 'subtitle']
    }
</script>

<style scoped>

</style>