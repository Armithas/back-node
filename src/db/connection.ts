import { Sequelize } from "sequelize";


const sequelize = new Sequelize('reto', 'root', 'adminTareas08,,', {
    host: 'localhost',
    port: 3308,
    dialect: 'mysql',   
});

export default sequelize;