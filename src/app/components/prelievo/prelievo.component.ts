import { Component } from '@angular/core';
import { ServiceService } from '../../service/service.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-prelievo',
  templateUrl: './prelievo.component.html',
  styleUrl: './prelievo.component.css'
})
export class PrelievoComponent {

  saldo!: number

  prelievo = new FormControl<number | null>(null, Validators.required)

  messaggio!: string

  constructor(private s: ServiceService) { }

  ngOnInit() {
    this.saldo = this.s.getSaldo()
  }


  sottrai() {
    const importo = this.prelievo.value
    if (importo! <= this.saldo) {
      this.saldo = this.s.sottraiSaldo(importo!)
      this.messaggio = "Prelievo effettuato, il saldo contabile é di:"
      this.prelievo.reset()
    }
    else {
      this.messaggio = " Prelievo NON effettuato per saldo insufficiente, il saldo contabile é di:"
      this.prelievo.reset()
    }
  }


}


