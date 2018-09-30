import { Component } from '@angular/core';
import { IContato } from './../interfaces/interface.contato';
import { ContatosService } from '../services/contatos.service';

@Component({
    moduleId: module.id,
    templateUrl: 'views/cadastro.component.html'
})
export class CadastroComponent {

    private listaContatos: IContato[];
    private novoContato: IContato;
    private contatoSelecionado: IContato;

    constructor(private contatosService: ContatosService) {
        this.listar();
    }    

    public listar(): void {
        this.contatosService.getContatosWS()
            .subscribe(res => this.listaContatos = res,
                error => alert(error),
                () => console.log('finalizado'));
    }

    public novo() {
        this.novoContato = { cpf: 0, nome: '', telefone: 0, email: '' }
        this.contatoSelecionado = this.novoContato;
    }

    public incluir(contato: IContato) {
       this.contatosService.setContatoWS(contato)
            .subscribe(res => JSON.stringify(res),
                error => alert(error),
                () => this.listar());
        alert('Contato incluído com sucesso');
    }

    public selecionar(item: IContato): void {
        this.contatoSelecionado = item;
    }

}