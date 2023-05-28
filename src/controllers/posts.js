import Factory from './factory';

class Post extends Factory {
    constructor() {
        super({ table: 'posts' });
    }
}

export { Post };