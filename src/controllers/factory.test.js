import Factory from './factory';
import db from '../../models/index';

afterAll(async () => {
    if (db.sequelize.close) {
        await db.sequelize.close();
    }
});

describe('Factory', () => {
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