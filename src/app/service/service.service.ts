import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

  saldo: number = 6000


  getSaldo(): number {
    return this.saldo
  }

  sottraiSaldo(importo: number): any {

    if (this.saldo < importo) {
      this.saldo = this.saldo
    }

    if(this.saldo >= importo) {
      this.saldo -= importo
    }
  }

  aggiungiSaldo(importo: number): number {
    return this.saldo += importo
  }

}
