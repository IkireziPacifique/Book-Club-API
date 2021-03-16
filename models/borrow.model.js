import Sequelize from "sequelize";
import { sequelize } from "../db/dbConnect.js";

const Borrow = sequelize.define('member', {
    record_id: {
        autoincrement: true,
        type: Sequelize.INTEGER,
        allowNull: true,
        primaryKey: true
    },
    member: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    book: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    borrowed_date: {
        type: Sequelize.DATE,
        allowNull: false
    },
    return_date: {
        type: Sequelize.DATE,
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'borrow',
    timestamps: false,
    indexes: [{
        name: "PRIMARY",
        unique: true,
        fields: [
            { name: "borrow_id" }
        ]
    }]
});

export default Borrow;