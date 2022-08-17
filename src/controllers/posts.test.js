const Post = require('./posts');

describe('Posts', () => {
    it('should create a new instance of Posts', () => {
        const posts = new Post();
        expect(posts).toBeInstanceOf(Post);
    })
})