<template>
    <div class="card height-100" v-if="post">
        <div class="card-image">
            <router-link :to="{path: urls.postList + '/' + post.slug}">
                <figure class="image is-4by2">
                    <img :src="post.cover_image" :alt="post.description" v-if="post.cover_image">
                    <img :src="defaultPhoto" :alt="post.description" v-if="!post.cover_image">
                </figure>
            </router-link>
            <time class="post-time">{{ post.published_at | dateHuman }}</time>
        </div>
        <div class="card-content">
            <div class="media">
                <div class="media-left">
                    <figure class="image is-48x48">
                        <img :src="post.user.profile_image" :alt="post.user.name">
                    </figure>
                </div>
                <div class="media-content">
                    <p class="title is-6">{{ post.user.name }}</p>
                    <p class="subtitle is-6">
                        <a :href="'https://twitter.com/' + post.user.twitter_username" target="_blank">
                            <b-icon icon="twitter" size="is-small"/>
                            {{ post.user.twitter_username }}
                        </a>
                    </p>
                </div>
            </div>

            <div class="content">
                <p class="title is-6">
                    <router-link :to="{path: urls.postList + '/' + post.slug}">
                        <span class="has-text-dark">{{ post.title }}</span>
                    </router-link>
                </p>
                <ui-tag :tags="post.tag_list"/>
            </div>
        </div>
    </div>
</template>

<script>
    import {urls} from '@/constants'
    import defaultPhoto from '@/assets/img/default-post.jpg'
    import UiTag from "@/components/common/UiTag";

    export default {
        name: "PostItem",
        components: {UiTag},
        props: ['post'],
        data() {
            return {
                urls: urls,
                defaultPhoto: defaultPhoto
            }
        },
        filters: {
            dateHuman(value) {
                return new Date(value).toDateString()
            }
        }
    }
</script>

<style scoped>

</style>