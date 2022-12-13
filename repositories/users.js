// repositories/users.js
const db = require("../models"); // Forma abreviada de models / index.js
module.exports = {
    // SELECT ALL
    getAll() {
        return db.users.findAll({});
    },

    getOne(id) {
        return db.users.findOne({
            where: {
                id,
            }
        })
    },

    //INSERT DATA
    insert(data) {
        return db.users.create(data);
    },
    // DELETE DATA
    delete(id) {
        return db.users.destroy({
            where: {
                id,
            },

        })
    },

    // UPDATE DATA
    update(data, id) {
        return db.users.update(data, {
            where: {
                id,
            }
        });
    }
}