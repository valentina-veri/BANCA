import { Component } from '@angular/core';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-estratto-conto',
  templateUrl: './estratto-conto.component.html',
  styleUrl: './estratto-conto.component.css'
})

export class EstrattoContoComponent {

  saldo!: number;

  constructor(private s: ServiceService) { }

  ngOnInit() {
    this.saldo = this.s.getSaldo()
  }

}

