"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var contatos = [
            { id: 1, nome: 'Thiago', email: 'thiagoazevedoroque@yahoo.com.br', telefone: '(24) 98825-7730' },
            { id: 2, nome: 'Thiago2', email: 'thiagoazevedoroque@yahoo.com.br', telefone: '(24) 98825-7730' },
            { id: 3, nome: 'Thiago3', email: 'thiagoazevedoroque@yahoo.com.br', telefone: '(24) 98825-7730' },
            { id: 4, nome: 'Thiago4', email: 'thiagoazevedoroque@yahoo.com.br', telefone: '(24) 98825-7730' },
            { id: 5, nome: 'Thiago5', email: 'thiagoazevedoroque@yahoo.com.br', telefone: '(24) 98825-7730' }
        ];
        return { contatos: contatos };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map