export default {
    dialect: 'postgres',
    host: 'localhost',
    port: '5433',
    username: 'postgres',
    password: 'postgres',
    database: 'usersdb',
    define: {
        timestamp: true,
        underscored: true,
        underscoredAll: true,
    }
}