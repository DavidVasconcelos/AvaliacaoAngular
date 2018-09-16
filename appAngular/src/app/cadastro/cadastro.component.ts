import { Component } from '@angular/core';
import { IEvento } from './../interfaces/interface.evento';
import { EventosService } from '../services/eventos.service';

@Component({
    moduleId: module.id,
    templateUrl: 'views/cadastro.component.html'
})
export class CadastroComponent {

    private listaEventos: IEvento[];
    private novoEvento: IEvento;
    private eventoSelecionado: IEvento;

    constructor(private eventosService: EventosService) {
        this.listar();
    }    

    public listar(): void {
        this.eventosService.getEventosWS()
            .subscribe(res => this.listaEventos = res,
                error => alert(error),
                () => console.log('finalizado'));
    }

    public novo() {
        this.novoEvento = { descricao: '', data: '', preco: 0 }
        this.eventoSelecionado = this.novoEvento;
    }

    public incluir(evento: IEvento) {
        //this.listaEventos.push(evento);
        this.eventosService.setEventoWS(evento)
            .subscribe(res => JSON.stringify(res),
                error => alert(error),
                () => this.listar());
        alert('Evento incluído com sucesso');
    }

    public selecionar(item: IEvento): void {
        this.eventoSelecionado = item;
    }

}