import { Component, OnInit } from '@angular/core';
import { Transferencia } from './../models/transferencia.model';
import { TransfersService } from './../services/transfers.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  transfers: any[];

  constructor(private service: TransfersService) { }

  ngOnInit(): void {
    this.service.all().subscribe((transfers: Transferencia[]) => {
      console.table(transfers);
      this.transfers = transfers;
    })
  }

}
