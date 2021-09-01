import { Contato } from 'src/app/models/Contato';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-contato',
  templateUrl: './create-contato.component.html',
  styleUrls: ['./create-contato.component.css']
})
export class CreateContatoComponent implements OnInit {
  constructor() { }
  @Output() cancelarOnclick: EventEmitter<any> = new EventEmitter();
  
  novoContato: Contato = {
    nome: "",
    email: "",
    telefones: [""]
  };

  ngOnInit(): void {
  }

  sairModal() {
    this.cancelarOnclick.emit()
  }
  track(index: number, value: string){
    return index;
  }
  addTelefone(){
    this.novoContato.telefones.push('')
  }

}
