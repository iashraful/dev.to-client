<template>
    <div class="card height-100">
        <div class="card-image">
            <router-link :to="{path: urls.postList + '/' + post.slug}">
                <figure class="image is-4by2">
                    <img :src="post.cover_image" :alt="post.description">
                </figure>
            </router-link>
        </div>
        <div class="card-content">
            <div class="media">
                <div class="media-left">
                    <figure class="image is-48x48">
                        <img :src="post.user.profile_image" :alt="post.user.name">
                    </figure>
                </div>
                <div class="media-content">
                    <p class="title is-6">{{ post.title }}</p>
                    <p class="subtitle">
                        <a :href="'https://twitter.com/' + post.user.twitter_username" target="_blank">
                            <b-icon icon="twitter" size="is-small"/>
                            {{ post.user.twitter_username }}
                        </a>
                    </p>
                </div>
            </div>

            <div class="content">
                {{ post.description }}
                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
        </div>
    </div>
</template>

<script>
    import {urls} from '@/constants'

    export default {
        name: "PostItem",
        props: ['post'],
        data() {
            return {
                urls: urls
            }
        }
    }
</script>

<style scoped>

</style>