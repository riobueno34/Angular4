import {Component} from '@angular/core';
import {Empleado} from './empleado'

@Component ({
    selector: 'empleado-tag',
    templateUrl: './empleado.component.html'
})
export class EmpleadoComponent{
    public titulo = 'Componente Empleados:';

    public empleado:Empleado;
    public trabajadores:Array<Empleado>;
    public trabajador_externo:boolean;
    public color:string;
    public color_seleccionado:string;

    constructor(){
        this.empleado = new Empleado('David Lopez', 45, 'Cocinero', true);
        this.trabajadores = [
            new Empleado('Maria Gutierrez', 32, 'Secretaria', true),
            new Empleado('Juan Mata', 25, 'Administrativo', true),
            new Empleado('Pedro Perez', 35, 'Desarrollador', false)
        ];

        this.trabajador_externo = true;
        this.color = 'blue';
        this.color_seleccionado = '#ccc';


    }

    ngOnInit(){        
        console.log(this.empleado);
        console.log(this.trabajadores);
    }

    cambiarExterno(valor){
        this.trabajador_externo = valor;
    }

    logColorSeleccionado(){
        console.log(this.color_seleccionado);
    }

    

}