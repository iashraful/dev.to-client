<template>
    <div class="twitter-integration">
        <twitter class="has-text-centered">
            <a :href="profileUrl"
               class="twitter-follow-button" data-show-count="false">Follow @{{ twitterUsername }}
            </a>
        </twitter>
        <twitter>
            <a class="twitter-timeline"
               data-height="800"
               :href="profileUrl">Tweets by {{ twitterUsername }}</a>
        </twitter>
    </div>
</template>

<script>
    import {twitter} from 'vue-twitter'

    export default {
        name: "TwitterIntegration",
        components: {
            twitter
        },
        data() {
            return {
            }
        },
        computed: {
            twitterUsername() {
                return this.$store.getters.getUserConfig['twitter_username']
            },
            profileUrl() {
                return 'https://twitter.com/' + this.twitterUsername
            }
        }
    }
</script>

<style scoped>

</style>