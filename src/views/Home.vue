<template>
    <div class="home">
        <div class="columns">
            <div class="column is-three-quarters-desktop is-full-tablet is-full-mobile is-fullheight">
                <latest-five-post/>
            </div>
            <div class="column is-one-quarter-desktop is-full-tablet is-full-mobile is-fullheight">
                <div class="fixed-right">
                    <div class="has-text-centered">
                        <a href="https://twitter.com/__ashraful" 
                            class="twitter-follow-button" data-show-count="false">Follow @__ashraful
                        </a>
                    </div>
                    <div>
                        <a class="twitter-timeline" 
                            data-height="800"
                            href="https://twitter.com/__ashraful">Tweets by Ashraful</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import PostList from "@/components/posts/PostList";
    import LatestFivePost from "@/components/landing/LatestFivePost";

    export default {
        name: 'home',
        components: {LatestFivePost, PostList},
    }
</script>
