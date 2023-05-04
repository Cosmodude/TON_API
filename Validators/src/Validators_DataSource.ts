import { DataSource } from "typeorm"
import { load } from 'ts-dotenv';
import { Pool } from './entity/pool.entity';

const env = load({
    DB_USER: String,
    DB_PASSWORD: String,
    DB_HOST: String,
    DB_NAME: String,
});

export const ValidatorsDataSource = new DataSource({
    type: 'mysql',
    host: env.DB_HOST,
    port: 3306,
    username: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
    entities: ["entity/*.ts"],
    synchronize: false,
})

ValidatorsDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })