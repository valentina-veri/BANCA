import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-contante',
  templateUrl: './contante.component.html',
  styleUrl: './contante.component.css'
})
export class ContanteComponent {

  saldo!: number

  contante = new FormControl<number | null>(null, Validators.required)

  messaggio = false

  constructor(private s: ServiceService) { }

  ngOnInit() {
    this.saldo = this.s.getSaldo()
  }
  
  aggiungi() {
    const importo = this.contante.value
    this.saldo = this.s.aggiungiSaldo(importo!)
    this.messaggio = true
    this.contante.reset()
  }

}
