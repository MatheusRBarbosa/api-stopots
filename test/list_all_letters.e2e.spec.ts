import { defineFeature, loadFeature } from "jest-cucumber";
import { Test, TestingModule } from "@nestjs/testing";
import * as request from 'supertest';
import { INestApplication } from "@nestjs/common";
import { AppModule } from "../src/app.module";

const feature = loadFeature( './test/features/list_all_letters.feature' );

jest.mock( '../src/answers/answers.service' );
jest.mock( '../src/answers/answers.module' );
jest.mock( '../src/app.module' );

let res: any;
let letter: any;

defineFeature( feature, test => {
    let module: TestingModule;
    let app: INestApplication;
  
    beforeAll( async () => {
      module = await Test.createTestingModule( {
        imports: [ AppModule ]
      } ).compile();
      app = module.createNestApplication();
      await app.init();
    } );
  
    test( "Existem letras cadastradas no banco", ( {
      given,
      when,
      then
    } ) => {
      given( "Eu quero saber as letras cadastras no banco", async () => {
      } );
  
      when( "Eu pesquisar", async () => {
        res = await request( app.getHttpServer() )
          .get( `/resposta/` );
        expect( res.status ).toBe( 200 );
      } );
  
      then( "Recebo uma lista com todas as respostas de todas as letras", () => {
        letter = JSON.parse( JSON.stringify( res.body ) );
        expect( letter.length ).toBeGreaterThan( 0 );
      } );
    } );
  
  } );
