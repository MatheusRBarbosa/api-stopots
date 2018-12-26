import { Injectable } from '@nestjs/common';

@Injectable()
export class AnswersService {

    public async findAll(){
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
        let obj2 = {
            "_id" : "5be74497ae427baf21f79554",
            "letra" : "B",
            "nome" : [ 
                "Bruno", 
                "Beatriz", 
                "Bento", 
                "Brian", 
                "Benicio"
            ],
            "fruta" : [ 
                "Banana", 
                "Babaco", 
                "Bacuri", 
                "Buriti", 
                "Baru"
            ],
            "animal" : [ 
                "Bacalhau", 
                "Beija-flor", 
                "Bagre", 
                "Baleia", 
                "Barata"
            ],
            "cor" : [ 
                "Branco", 
                "Bege", 
                "Bordô", 
                "Bronze"
            ],
            "profissao" : [ 
                "Bibliotecário", 
                "Biologista", 
                "Biólogo", 
                "Bilheteiro", 
                "Bioquímico"
            ],
            "marca" : [ 
                "Bacardi", 
                "Band-Aid", 
                "Barbie", 
                "BBC", 
                "BIC"
            ],
            "filme" : [ 
                "Bohemian Rhapsody", 
                "Blade Runner 2049", 
                "Bingo - O Rei das Manhãs", 
                "Baywatch: S.O.S Malibu", 
                "A Bela e a Fera"
            ],
            "objeto" : [ 
                "Borracha", 
                "Bateria", 
                "Boneca", 
                "Bola", 
                "Broche"
            ],
            "palavra_em_ingles" : [ 
                "But", 
                "Bound", 
                "Butt", 
                "Brace", 
                "Break"
            ],
            "minha_sogra_e" : [ 
                "Burra", 
                "Babaca", 
                "Bundona", 
                "Bacana", 
                "Boa"
            ],
            "carro" : [ 
                "Bravo", 
                "Bongo", 
                "Blazer", 
                "Boxster", 
                "Beretta"
            ],
            "jogo" : [ 
                "Battlefield 1", 
                "Bioshock Infinite", 
                "Borderlands", 
                "Batman: Arkham Origins", 
                "Ben 10 Omniverse"
            ]
        }

        let obj3 = {
            "_id" : "5c238185ae427baf216bbbfa",
            "letra" : "C",
            "nome" : [ 
                "Carlos", 
                "César", 
                "Claudio", 
                "Carolina", 
                "Cristina"
            ],
            "fruta" : [ 
                "Cacau", 
                "Cajá", 
                "Cereja", 
                "Conde", 
                "Caju"
            ],
            "animal" : [ 
                "Cabra", 
                "Cachorro", 
                "Cágado", 
                "Cação", 
                "Cachalote"
            ],
            "cor" : [ 
                "Cinza", 
                "Castanho", 
                "Ciano"
            ],
            "profissao" : [ 
                "Carteiro", 
                "Cineasta", 
                "Cabeleleiro", 
                "Cardiologista", 
                "Contador"
            ],
            "marca" : [ 
                "C&A", 
                "Cadillac", 
                "Coca-cola", 
                "Calvin Klein", 
                "Campari"
            ],
            "filme" : [ 
                "Como Treinar o seu Dragão", 
                "Capitã Marvel", 
                "Creed", 
                "Cinderela", 
                "Círculo de fogo"
            ],
            "objeto" : [ 
                "Caneta", 
                "Cama", 
                "Caixa", 
                "Caderno", 
                "Calendário"
            ],
            "palavra_em_ingles" : [ 
                "Car", 
                "Chair", 
                "Cheap", 
                "Cut", 
                "Cake"
            ],
            "minha_sogra_e" : [ 
                "Corcunda", 
                "Chata", 
                "Casada", 
                "Calma", 
                "Caduca"
            ],
            "carro" : [ 
                "Cadillac", 
                "Camaro", 
                "Corolla", 
                "Cobalt", 
                "Civic"
            ],
            "jogo" : [ 
                "Call of Duty", 
                "Castlevania", 
                "Crysis", 
                "Conan Exiles", 
                "Call of Cthulhu"
            ]
        }
        return [obj1, obj2, obj3]
    }

    public async findOne(letter: string){
        let obj = {
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
        if (letter != "")
            return obj
        else
            return ""
    }

}