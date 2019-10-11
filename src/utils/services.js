export default {
    loadInitialData(store) {
        // Load config data from file
        store.dispatch('getUserConfigData');
    }
}