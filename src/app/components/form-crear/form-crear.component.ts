import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form-crear',
  template: `
    <form>
      <h1>AGREGAR NUEVO POSTRE</h1>
      <div>
        <label for="nombre">Nombre</label>
        <input type="text" id="nombre" #nombre>
      </div>
      <div>
        <label for="stock">Stock</label>
        <input type="number" id="stock" #stock>
      </div>
      <div>
        <label for="precio">Precio</label>
        <input type="number" step="0.01" id="precio" #precio>
      </div>
      <div>
        <label for="imagen">Imagen</label>
        <input type="file" accept="image/*" id="imagen" #imagen>
      </div>
      <button (click)="$event.preventDefault();agregarPostre(nombre.value, stock.valueAsNumber, precio.valueAsNumber, imagen.files?.item(0))">Confirmar</button>
    </form>
  `,
  styleUrls: ['./form-crear.component.scss']
})
export class FormCrearComponent {
  @Output() agregarPostreEmitter = new EventEmitter()
  postre!: any

  agregarPostre(nombre: string, stock: number, precio: number, imagen: File | null | undefined){
    this.postre = {nombre}
  }
}
