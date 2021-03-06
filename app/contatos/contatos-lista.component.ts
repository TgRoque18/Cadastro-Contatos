import { Component, OnInit } from '@angular/core';

import { Contato } from './contato.model'
import { ContatoService } from './contato.service'

@Component({
    moduleId: module.id, //necessário para usar o templateUrl
    selector: 'contatos-lista',
    templateUrl: 'contatos-lista.component.html'
})
export class ContatosListaComponent implements OnInit{

    contatos: Contato[];

    //injeção de dependencias angular2
    constructor(private contatoService: ContatoService){}

    ngOnInit(): void{
        //this.contatos = this.contatoService.getContatos();
        this.contatoService.getContatos()
            .then((contatos: Contato[]) => {
                this.contatos = contatos;
            }).catch(err => {
                console.log('Aconteceu um erro: ',err);
            });
    }
}