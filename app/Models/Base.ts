import Database from "@ioc:Adonis/Lucid/Database";

export default class Base {

    constructor(
        public table: string,
        public IdField: string
    ) {}

    async createItem(item) {
        return await Database.table(this.table).insert(item).returning(this.IdField);
    }

    async updateItem(id, item) {
        return await Database.from(this.table).update(item).where(this.IdField, id);
    }

    async deleteItem(id) {
        return await Database.from(this.table).delete().where(this.IdField, id);
    }
    
    async listItem(id, where = "") {
        let list = Database.from(this.table);
        if (where != "") {
            list.whereRaw(where);
        }
        if (id !== "all") {
            list.where(this.IdField, id);
            return await list.first();
        }
        return await list;
    }
}

