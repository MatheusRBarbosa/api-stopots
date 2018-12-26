import { Injectable } from '@nestjs/common';

let obj1 = {
    "_id" : "5bd76861ae427baf2141a480",
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

@Injectable()
export class AnswersService {


    public async findAll(){
        return [obj1]
    }

    public async findOne(letter: string){
        if (letter != "")
            return obj1
        else
            return letter
    }

}