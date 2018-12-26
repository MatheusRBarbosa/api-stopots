import { Test, TestingModule } from '@nestjs/testing';
import { AnswersService } from './answers.service';
jest.mock( './answers.service' );

describe( 'AnswersService', () => {
  let service: AnswersService;
  beforeAll( async () => {
    const module: TestingModule = await Test.createTestingModule( {
      providers: [ AnswersService ],
    } ).compile();
    service = module.get<AnswersService>( AnswersService );
  } );

  it( 'O retorno das respostas devem ser maiores do que 0', async () => {
    let res = await service.findAll();
    expect (res.length).toBeGreaterThan(0);
  } );

  it( 'O retorno das respostas devem ser maiores do que 0 quando passado uma letra', async () => {
    let res = await service.findOne('C'); //404 eh um id de um ponto real.
    console.log(res.length)
    expect (res.length).toBeGreaterThan(0);
  } );
} );
