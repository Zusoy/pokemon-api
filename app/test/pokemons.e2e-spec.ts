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

describe('PokemonController (e2e)', () => {
    let app: INestApplication;

    beforeAll(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule]
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();
    });

    afterAll(async () => {
        await app.close();
      });

    it('/pokemons (GET)', () => {
        return request(app.getHttpServer())
          .get('/pokemons')
          .expect(200);
    });
});
