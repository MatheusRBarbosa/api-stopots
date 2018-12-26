import { defineFeature, loadFeature } from "jest-cucumber";
import { Test, TestingModule } from "@nestjs/testing";
import * as request from 'supertest';
import { INestApplication } from "@nestjs/common";
import { AppModule } from "../src/app.module";
import { AnswersService } from "../src/answers/answers.service";

const feature = loadFeature( './test/features/list_one_letter.feature' );

jest.mock( '../src/answers/answers.service' );
jest.mock( '../src/answers/answers.module' );
jest.mock( '../src/app.module' );

let res: any;
let answer: any;
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
  
    test( "Existe essa letra no banco", ( {
      given,
      when,
      then
    } ) => {
      given( "Eu quero saber as respostas de uma determinada letra", async () => {
        letter = 'c'
      } );
  
      when( "Eu pesquisar uma letra", async () => {
        res = await request( app.getHttpServer() )
          .get( `/resposta/${letter}` );
        expect( res.status ).toBe( 200 );
      } );
  
      then( "Recebo um array com todas as respostas da letra que pesquisei", () => {
        answer = JSON.parse( JSON.stringify( res.body ) );
        expect( answer.length ).toBeGreaterThan( 0 );
      } );
    } );
  
    test( "O caracter passado não é uma letra", ( {
      given,
      when,
      then
    } ) => {
      given( "Eu quero saber as respostas de um determinado caracter", async () => {
      } );
  
      given( "Que não seja um caracter comum", async () => {
        letter = "1"
        AnswersService.prototype.findOne = jest.fn().mockImplementationOnce( () => {
            return [];
        })
      } );
  
      when( "Eu pesquisar esse caracter", async () => {
        res = await request( app.getHttpServer() )
          .get( `/resposta/${letter}` );
        expect(res.status).toBe(200);
      } );
  
      then( "Recebo um array vazio", () => {
        expect( res.body.length ).toBe( 0 );
      } );
    } );
  
    afterAll( async () => {
      await app.close();
    } );
  
  } );
