const Factory = require('./factory');

describe('Factory', () => {
    it('should create a new instance of Factory', () => {
        const factory = new Factory();
        expect(factory).toBeInstanceOf(Factory);
    });

    it('should serialize data', () => {
        const factory = new Factory('test_factory');
        const result = factory.serialize({
            name: 'jest',
            task: 'nothing',
            pump: 'kin',
        });
        expect(factory).toBeDefined(Factory);
    });
    
    it('should save data', () => {
        const factory = new Factory('test_factory');
        const result = factory.save({
            name: 'jest',
            task: 'nothing',
            pump: 'kin',
        });
        expect(factory).toBeDefined(Factory);
    });
});