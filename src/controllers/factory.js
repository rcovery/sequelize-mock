class Factory {
    model;
    table;
    columns = {};
    data = {};
    response;
    #serialized = false;

    constructor({ table = '' } = {}) {
        this.table = table;
    }

    async serialize(data = {}) {
        if (!this.model) {
            await this.config();
        }

        this.data = Object.keys(this.columns).map(key => {
            return {
                [key]: data[key] ?? this.data[key]
            }
        });

        this.data = {
            ...this.data,
            createdAt: new Date(),
            updatedAt: new Date(),
        }
    }

    async config() {
        const { models } = await import('../../models/index');
        const modelInstance = models[this.table];

        const { default: { columns } } = await import(`../../models/${this.table}.js`);

        this.columns = columns;
        this.model = modelInstance;
    }

    async save(data = {}) {
        if (!this.#serialized) {
            await this.serialize(data);
        }

        this.response = await this.model.bulkCreate([this.data]);
    }
}

export default Factory;