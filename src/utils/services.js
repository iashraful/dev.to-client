export default {
    async loadInitialData(store) {
        // Load config data from file
        store.dispatch('getUserConfigData');
        let callAgain = true;
        let pageCounter = 1;
        while(callAgain) {
            let data = await store.dispatch('getAllPosts', pageCounter);
            if (data.length === 0) {
                callAgain = false;
            }
            pageCounter += 1
        }

    }
}