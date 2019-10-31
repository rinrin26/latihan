const env = {
    databse: 'hapi_jwt',
    username: 'root',
    password:' ',
    host: 'localhost',
    dialect: 'mysql',
    pool:{
        mas: 5,
        min: 0,
        acquire: 30000,
        idle : 10000
    }
};

module.export=env;
