import { Sequelize } from "sequelize";


const sequelize = new Sequelize('railway', 'root', 'RacVeCwPWfNb81g9e4E9', {
    host: 'containers-us-west-179.railway.app',
    port: 7527,
    dialect: 'mysql',   
});

// const sequelize = new Sequelize('reto', 'root', 'adminTareas08,,', {
//     host: 'localhost',
//     port: 3308,
//     dialect: 'mysql',   
// });

export default sequelize;