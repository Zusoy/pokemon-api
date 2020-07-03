import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { PokemonsModule } from '../src/module/pokemons.module';
import { AppModule } from '../src/app.module';
import { PokemonsService } from '../src/service/pokemons.service';
import { PokemonController } from '../src/controller/pokemon.controller';
import { setupDB, initializeDB } from '../src/connection';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

describe('PokemonController (e2e)', async () => {
    let app: INestApplication;

    beforeAll(async() => {
        await initializeDB();
    });

    beforeAll(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [PokemonsModule]
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();
    });

    it('/ (GET)', () => {
        return request(app.getHttpServer())
          .get('/')
          .expect(200);
    });
});
