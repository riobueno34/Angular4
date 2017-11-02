import {Pipe, PipeTransform} from '@angular/core';

@Pipe({ name:'conversor'})

export class ConversorPipe implements PipeTransform{
    transform(valor, por){
        let valor_one = parseInt(valor);
        let valor_two = parseInt(por);

        let result = "La multiplicacion: "+valor_one+" x "+valor_two+" = "+(valor_one*valor_two);

        return result;

    }
}