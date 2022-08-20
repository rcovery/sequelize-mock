class Factory {
    model;
    table;
    data = {};
    response;
    #serialized = false;
    
    constructor({ table = '' }) {
        const { [table]: modelInstance } = require('../../models/index');
        this.model = new modelInstance;
        this.table = table;
    }

    serialize() {
        const { columns } = require(`../../models/${this.table}`);

        this.data = Object.keys(columns).map(key => {
            return {
                key: this.data[key]
            }
        })
    }

    async save() {
        if (!this.#serialized) {
            this.serialize();
        }

        this.response = await this.model.save(this.data);
    }
}

export default Factory;