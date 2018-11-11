const db_type = 'mongodb';
const db_host = process.env.HOST || 'ds145043.mlab.com';
const db_port: number = 45043 //parseInt( process.env.PORT ) || 45043;
const db_username = process.env.USER;
const db_password = process.env.PASSWORD;
const db_database = process.env.SCHEMA || 'stopots';
const orm_sync = false //( process.env.RTDB_ORM_SYNC === 'true' ) || false;

export class DataBaseConfig {
    constructor(
        readonly type: 'mongodb' = 'mongodb',
        readonly host: string = db_host,
        readonly port: number = db_port,
        readonly username: string = db_username,
        readonly password = db_password,
        readonly database = db_database,
        readonly sync = orm_sync
    ) { }
}
