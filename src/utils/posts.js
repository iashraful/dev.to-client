export default {
    markdownParser(md) {
        let postBody = md.split('---');
        postBody = postBody.length > 1 ? postBody[2] : postBody[0];
        return postBody
    }
}