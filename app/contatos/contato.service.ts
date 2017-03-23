import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Contato } from './contato.model';
import { CONTATOS } from './contatos-mock';

@Injectable()
export class ContatoService {
    
    private contatosUrl: string = 'app/contatos';
    private headers: Headers = new Headers({'Content-Type': 'application/json'});

    constructor(
        private http: Http
    ){}

    getContatos(): Promise<Contato[]> {
        return this.http.get(this.contatosUrl)
            .toPromise()
            .then(response => response.json().data as Contato[])
            .catch(this.handleError);
        //return Promise.resolve(CONTATOS);
    }

    private handleError(err:any): Promise<any>{
        console.log('Error: ', err);
        return Promise.reject(err.message || err);
    }

    getContato(id: number): Promise<Contato>{
        return this.getContatos()
            .then((contatos: Contato[]) => contatos.find(contato => contato.id === id));
    }

    create(contato: Contato): Promise<Contato> {
        return this.http.post(this.contatosUrl, JSON.stringify(contato), {headers: this.headers})
            .toPromise()
            .then((response: Response) => {
                console.log(response);
                console.log(response.json().data);
                return response.json().data as Contato;
            })
            .catch(this.handleError);
    }

    createOLD(contato: Contato): Promise<Contato> {
        return this.http.post(this.contatosUrl, JSON.stringify(contato), {headers: this.headers})
            .toPromise()
            .then((response: Response) => {
                console.log(contato);
                console.log(response.json().data);
                return response.json().data as Contato;
            })
            .catch(this.handleError);
    }
    
    getContatosSlowly(): Promise<Contato[]> {
        return new Promise((resolve, rejecct) => {
            setTimeout(resolve, 3000);
        }).then(() =>{
            console.log('primeiro then');
            return 'Curso Angular 2';
        }).then((param: string) => {
            console.log('segundo then');
            console.log(param);

            return new Promise((resolve2, reject2) => {
                setTimeout(() => {
                    console.log('Continuando depois de 4 segundos...');
                    resolve2();
                }, 4000);
            });
        }).then(() => {
            console.log('terceiro then');
            return this.getContatos();
        });
    }
}
