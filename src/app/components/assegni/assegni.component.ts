import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-assegni',
  templateUrl: './assegni.component.html',
  styleUrl: './assegni.component.css'
})

export class AssegniComponent {

  saldo!: number


  assegno = new FormGroup({
    importo: new FormControl<number | null>(null, Validators.required),
    nomeBeneficiario: new FormControl('', Validators.required),
    nomeBanca: new FormControl('', Validators.required),
    causale: new FormControl('', Validators.required)
  })

  messaggio = false

  constructor(private s: ServiceService) { }

  ngOnInit() {
    this.saldo = this.s.getSaldo()
  }

  aggiungi() {

    if (this.assegno.valid) {
      const importo = this.assegno.get('importo')?.value
      console.log(importo)
      this.saldo = this.s.aggiungiSaldo(importo!)
      this.messaggio = true
      this.assegno.reset()
    }
    else{
      alert('Compila tutti i campi')
    }
  }

}
