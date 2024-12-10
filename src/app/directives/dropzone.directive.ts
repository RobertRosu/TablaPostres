import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appDropzone]'
})
export class DropzoneDirective {
  @Output() fileEmitter: EventEmitter<File> = new EventEmitter()

  @HostListener("dragover", ["$event"]) public onDragOver(e: DragEvent){
    e.preventDefault()
    e.stopPropagation()
  }

  @HostListener("dragleave", ["$event"]) public onDragLeave(e: DragEvent){
    e.preventDefault()
    e.stopPropagation()
  }

  @HostListener("drop", ["$event"]) public onDrop(e: DragEvent){
    e.preventDefault()
    e.stopPropagation()
    this.fileEmitter.emit(e.dataTransfer?.files[e.dataTransfer.files.length - 1])
  }
}
