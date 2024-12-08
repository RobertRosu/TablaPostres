import { Component, EventEmitter, Output } from '@angular/core';
import { last } from 'rxjs';

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
        <input type="file" accept="image/*" id="imagen" #imagen (change)="previewAndConvertImage(imagen)">
        <div id="imagen-preview" [style]="{'background-image': preview}"></div>
      </div>
      <div class="opciones">
        <button class="confirmar" (click)="$event.preventDefault();agregarNuevoPostre(nombre.value, stock.valueAsNumber, precio.valueAsNumber, this.newSelectedImage)">Confirmar</button>
        <button class="cancelar" (click)="$event.preventDefault();emitCancelarAgregarPostre()">Cancelar</button>
      </div>
    </form>
  `,
  styleUrls: ['./form-crear.component.scss']
})
export class FormCrearComponent {
  @Output() agregarPostre = new EventEmitter()
  @Output() cancelarAgregarPostre = new EventEmitter<boolean>()
  postre!: any
  preview?: string
  newSelectedImage?: string | ArrayBuffer

  agregarNuevoPostre(nombre: string, stock: number, precio: number, imagen?: string | ArrayBuffer){
    this.postre = {
      "id": 0,
      "nombre": nombre,
      "stock": stock,
      "precio": precio,
      "url": nombre.replaceAll(" ", "-"),
      "img": imagen,
      "fecha": new Date()
    }
    console.log(imagen)
    this.agregarPostre.emit(this.postre)
  }

  emitCancelarAgregarPostre(){
    this.cancelarAgregarPostre.emit(false)
  }

  previewAndConvertImage(input: HTMLInputElement){
    if(input.files && input.files.length > 0){
      const lastFile = input.files[input.files.length - 1]
      const reader = new FileReader()

      reader.onload = (e: ProgressEvent<FileReader>) => {
        if(e.target && e.target.result){
          this.preview = `url(${e.target.result})`
          this.newSelectedImage = e.target.result
        }
      }
      reader.readAsDataURL(lastFile)
    }
  }
}
