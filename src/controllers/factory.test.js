import Factory from './factory';

describe('Factory', () => {
    it('should create a new instance of Factory', () => {
        const factory = new Factory();
        expect(factory).toBeInstanceOf(Factory);
    });

    it('should serialize data', async () => {
        const factory = new Factory({ table: 'posts' });
        await factory.serialize({
            title: 'jest',
            content: 'oaiewoaiewa'
        });

        expect(factory.data).toBeDefined();
        expect(factory.data.title).toBe('jest');
    });

    it('should save data', async () => {
        const factory = new Factory({ table: 'posts' });
        const result = await factory.save({
            title: 'jest',
            content: 'oaiewoaiewa'
        });
        expect(factory).toBeDefined();
        expect(result).toBeDefined();
    });
});