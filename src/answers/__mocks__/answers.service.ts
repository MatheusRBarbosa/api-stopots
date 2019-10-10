import { Injectable } from '@nestjs/common';

let obj1 = {
    "_id" : "5bd76861ae427baf2141a480",
    "letra" : "A",
    "nome" : [ 
        "Ariane", 
        "Alessandro", 
        "Ana", 
        "Alice", 
        "Amanda",
        "Agnaldo",
        "Adenilson",
        "Adamastor",
        "Adonis",
        "Ailda",
        "Ajelso"
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
