import { models } from '../../models/index';

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

        this.data = {
            createdAt: new Date(),
            updatedAt: new Date(),
        };

        Object.keys(this.columns).forEach(key => {
            this.data[key] = data[key] ?? this.data[key];
        });

        return true;
    }

    async config() {
        const modelInstance = models[this.table];

        const { default: { columns } } = await import(`../../models/${this.table}.js`);

        this.columns = columns;
        this.model = modelInstance;

        return true;
    }

    async save(data = {}) {
        if (!this.#serialized) {
            await this.serialize(data);
        }

        this.response = await this.model.create(this.data);

        return true;
    }
}

export default Factory;