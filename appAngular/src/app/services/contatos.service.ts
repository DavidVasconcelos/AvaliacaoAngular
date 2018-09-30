import { Injectable } from '@angular/core';
import { IContato } from '../interfaces/interface.contato';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

@Injectable()
export class ContatosService {

    public constructor(private _http: Http) { }
    private url: string = "http://localhost:3200/contatos";

    public getContatosWS(): Observable<IContato[]> {
        return this._http.get(this.url)
            .map(res => res.json());
    }

    public setContatoWS(contato: IContato): Observable<IContato> {
        let header = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: header });
        let json = JSON.stringify(
            {
                id: Math.floor(Math.random() * 6) + 5 ,
                cpf: contato.cpf,
                nome: contato.nome,
                telefone: contato.telefone,
                email: contato.email
            });
        return this._http.post(this.url, json, options)
            .map(res => res.json());
    }
}