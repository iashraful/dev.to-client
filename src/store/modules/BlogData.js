import {dev_to} from '@/constants'
import userConfigParser from '@/utils/user-config-parser'

const _userConfig = userConfigParser.getUserDataConfig();

const state = {
    posts: [],
    user: {},
};

const mutations = {
    updateDev_toPosts(state, posts) {
        state.posts = state.posts.concat(posts);
    }
};

const actions = {
    async getAllPosts(context, page) {
        return await fetch(dev_to.api + 'articles?&username=' + _userConfig.dev__to_username + '&page=' + page)
            .then((response) => {
                return response.json()
            }).then((posts) => {
                context.commit('updateDev_toPosts', posts);
                return posts
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
    getPostsByTag: state => (tag) => {
        return state.posts.filter((item) => {
            return item.tag_list.find((t) => t === tag)
        })
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