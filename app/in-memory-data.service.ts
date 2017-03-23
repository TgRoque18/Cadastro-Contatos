import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Contato } from './contatos/contato.model';

export class InMemoryDataService implements InMemoryDbService{

    createDb(): {}{

        let contatos: Contato[] = [
            {id: 1, nome: 'Thiago', email: 'thiagoazevedoroque@yahoo.com.br', telefone: '(24) 98825-7730'},
            {id: 2, nome: 'Thiago2', email: 'thiagoazevedoroque@yahoo.com.br', telefone: '(24) 98825-7730'},
            {id: 3, nome: 'Thiago3', email: 'thiagoazevedoroque@yahoo.com.br', telefone: '(24) 98825-7730'},
            {id: 4, nome: 'Thiago4', email: 'thiagoazevedoroque@yahoo.com.br', telefone: '(24) 98825-7730'},
            {id: 5, nome: 'Thiago5', email: 'thiagoazevedoroque@yahoo.com.br', telefone: '(24) 98825-7730'}
        ];

        return {contatos};
    }
}