import {Entity, ObjectID, ObjectIdColumn, Column} from "typeorm";

@Entity()
export class Answers {

    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    nome: string[];

    @Column()
    fruta: string[];

    @Column()
    animal: string[];

    @Column()
    cor: string[];

    @Column()
    profissao: string[];

    @Column()
    marca: string[];

    @Column()
    filme: string[];

    @Column()
    objeto: string[];

    @Column()
    palavra_em_ingles: string[];

    @Column()
    minha_sogra_e: string[];

    @Column()
    carro: string[];

    @Column()
    jogo: string[];

}