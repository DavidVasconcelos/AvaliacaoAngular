import { Pipe, PipeTransform } from '@angular/core';
import { IContato } from '../interfaces/interface.contato';

@Pipe({
    name: 'sublista'
})
export class SubLista implements PipeTransform {
    transform(contatos: IContato[], input: string): IContato[] {
        return contatos.filter(
            contato =>
                contato.nome.toLowerCase().includes(input.toLowerCase()));
    }
}