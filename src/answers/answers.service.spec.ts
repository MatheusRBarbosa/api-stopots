import { Test, TestingModule } from '@nestjs/testing';
import { AnswersService } from './answers.service';
import { HttpService } from '@nestjs/common';
//jest.mock('./answers.service');

describe( 'AnswersService', () => {
    let service: AnswersService;
  
    beforeAll( async () => {
      const module: TestingModule = await Test.createTestingModule( {
        providers: [ HttpService, AnswersService ],
      } ).compile();
      service = module.get<AnswersService>( AnswersService );
    } );
  
    test( 'findAll() must return an array greater than 0', async () => {   
        const obj = {
            "letra" : "A",
            "nome" : [ 
                "Ariane", 
                "Alessandro", 
                "Ana", 
                "Alice", 
                "Amanda"
            ],
            "fruta" : [ 
                "Abacaxi", 
                "Amora", 
                "Abacate", 
                "Ameixa", 
                "Acerola"
            ],
            "animal" : [ 
                "Alce", 
                "Anta", 
                "Alpaca", 
                "Arara", 
                "Aranha"
            ],
            "cor" : [ 
                "Azul", 
                "Anil", 
                "Amarelo", 
                "Ametista"
            ],
            "profissao" : [ 
                "Arquiteto", 
                "Alfaiate", 
                "Artesão", 
                "Arqueólogo", 
                "Açougueiro"
            ],
            "marca" : [ 
                "Amazon", 
                "Adidas", 
                "Absolut Vodka", 
                "Acer", 
                "Activia"
            ],
            "filme" : [ 
                "Alfa", 
                "Aquaman", 
                "Amigos Alienígenas", 
                "Animais Fantásticos", 
                "Alita"
            ],
            "objeto" : [ 
                "Agulha", 
                "Anel", 
                "Anzol", 
                "Almofada", 
                "Apontador"
            ],
            "palavra_em_ingles" : [ 
                "About", 
                "Actor", 
                "After", 
                "Again", 
                "Airplane"
            ],
            "minha_sogra_e" : [ 
                "Anta", 
                "Agradável", 
                "Alegre", 
                "Arteira", 
                "Atraente"
            ],
            "carro" : [ 
                "Astra", 
                "Audi", 
                "Alfa Romeo", 
                "Aurora", 
                "Amarok"
            ],
            "jogo" : [ 
                "Assasin's Creed", 
                "Alien: Isolation", 
                "Ace Combat", 
                "Alone in the Dark", 
                "Angry Birds"
            ]
        }        
        service.findAll = jest.fn().mockImplementationOnce(() => obj);

        let answers = await service.findAll();
      expect( answers.length ).toBeGreaterThan( 0 );
    } );
  } );
  
  