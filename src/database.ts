import { Pool } from "pg";
export const pool = new Pool ({

    user:'postgres',
    host:'localhost',
    password:'',
    database:'rest_api_ts',
    port:5432

})