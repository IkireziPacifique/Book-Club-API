import Sequelize from "sequelize";
import { sequelize } from "../db/dbConnect.js";

const Member = sequelize.define('member', {
    member_id: {
        autoincrement: true,
        type: Sequelize.INTEGER,
        allowNull: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    gender: {
        type: Sequelize.STRING(6),
        allowNull: false
    },
    email: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    phone: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    birth_date: {
        type: Sequelize.DATE,
        allowNull: false
    },
    address: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    referral_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'members',
    timestamps: false,
    indexes: [{
        name: "PRIMARY",
        unique: true,
        fields: [
            { name: "member_id" }
        ]
    }]
});

export default Member;