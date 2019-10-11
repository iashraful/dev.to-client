import userConfigParser from '@/utils/user-config-parser'

const state = {
    userConfig: {}
};

const mutations = {
    updateUserConfigData(state, payload) {
        state.userConfig = payload
    }
};

const actions = {
    getUserConfigData(context) {
        const _config = userConfigParser.getUserDataConfig();
        context.commit('updateUserConfigData', _config)
    }

};

const getters = {
    getUserConfig(state) {
        return state.userConfig
    }
};

export default {
    state,
    mutations,
    getters,
    actions
}