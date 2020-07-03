import { createConnection, getConnection } from 'typeorm';

export interface ITypeORMModuleOptions {
  synchronize?: boolean;
}

const setupDB = async () => {
    console.log("DZQDQZDQZ");
  beforeAll(async () => {
    await initializeDB();

    global.console.log(getConnection().isConnected);
  });

  afterAll(async () => {
    await getConnection().close();
  });
};

export const initializeDB = async (options: ITypeORMModuleOptions = {}) => {
  const synchronize = options.synchronize !== false;
  console.log('Jdzqd');
  return createConnection({
    database: 'pokemon',
    dropSchema: synchronize,
    entities: [`../**/*.entity{.ts,.js}`],
    host: 'mysql',
    logger: 'advanced-console',
    logging: process.env.DB_DEBUG === 'true' ? ['query', 'error'] : [],
    name: 'default',
    password: 'PYm[fkUfPSn<P6K%',
    port: 3306,
    synchronize,
    type: 'mysql',
    username: 'root',
  });
};

export { setupDB };
