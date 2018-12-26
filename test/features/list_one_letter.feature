Feature: list_one_letter

   Essa feature deve retornar todas as repostas de uma determinada letra

   Scenario: Existe essa letra no banco
      Given Eu quero saber as respostas de uma determinada letra
      When Eu pesquisar uma letra
      Then Recebo um array com todas as respostas da letra que pesquisei

   Scenario: O caracter passado não é uma letra
      Given Eu quero saber as respostas de um determinado caracter
      And Que não seja um caracter comum
      When Eu pesquisar esse caracter
      Then Recebo um array vazio