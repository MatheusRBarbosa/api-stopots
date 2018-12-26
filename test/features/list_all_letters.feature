Feature: list_all_letters

   Essa feature deve retornar todas as letras cadastradas no banco

    Scenario: Existem letras cadastradas no banco
        Given Eu quero saber as letras cadastras no banco
        When Eu pesquisar
        Then Recebo uma lista com todas as respostas de todas as letras