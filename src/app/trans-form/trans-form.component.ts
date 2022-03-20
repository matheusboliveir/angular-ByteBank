import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TransfersService } from '../services/transfers.service';
import { Transferencia } from './../models/transferencia.model';

@Component({
  selector: 'app-trans-form',
  templateUrl: './trans-form.component.html',
  styleUrls: ['./trans-form.component.scss'],
})
export class TransFormComponent implements OnInit {
  @Output() aoTransferir = new EventEmitter<any>();

  value: number;
  destiny: number;

  constructor(private service: TransfersService, private router: Router) {}

  ngOnInit(): void {}

  transferir() {
    console.log('Solicitada nova transferência');
    const valueTransfer: Transferencia = { valor: this.value, destino: this.destiny };
    this.service.add(valueTransfer).subscribe(resultado => {
      console.log(resultado);
      this.router.navigateByUrl('extrato');
    }, err => console.error(err)
    );
  }
}
