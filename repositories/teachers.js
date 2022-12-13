const db = require("../models"); // Forma abreviada de models / index.js
module.exports = {
    getAll() {
        return db.teachers.findAll({});
    },

    getId(id) {
        db.teachers.findOne({
            where: {
                id,
            },
            attributes: ["id"],
        })
    },

    insert(data) {
        return db.teachers.create(data);
    },

    delete(data) {
        return db.teachers.destroy(data);
    }
};