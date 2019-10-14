import {dev_to} from '@/constants'
import userConfigParser from '@/utils/user-config-parser'

const _userConfig = userConfigParser.getUserDataConfig();

const state = {
    posts: [],
    user: {},
};

const mutations = {
    updateDev_toPosts(state, posts) {
        state.posts = posts;
    }
};

const actions = {
    async getAllPosts(context) {
        await fetch(dev_to.api + 'articles?state=all&username=' + _userConfig.dev__to_username)
            .then((response) => {
                return response.json()
            }).then((posts) => {
                context.commit('updateDev_toPosts', posts)
            })
    },
    async getEachPost(context, payload) {
        return await fetch(dev_to.api + 'articles/' + payload.id)
            .then((response) => {
                return response.json()
            }).then((posts) => {
                return posts
            })
    }
};

const getters = {
    getAllPublishedPosts(state) {
        return state.posts
    },
    getLatestTwoPosts(state) {
        return state.posts.slice(0, 5)
    }
};

export default {
    state,
    mutations,
    getters,
    actions
}