import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transferencia } from './../models/transferencia.model';

@Injectable({
  providedIn: 'root',
})
export class TransfersService {
  private transfersList: any[];
  private url = 'http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient) {
    this.transfersList = [];
  }

  get transfers() {
    return this.transfersList;
  }

  all(): Observable<Transferencia[]> {
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  add(transfer: any): Observable<Transferencia> {
    this.hidratar(transfer)
    return this.httpClient.post<Transferencia>(this.url, transfer);
  }

  private hidratar(transfer: any) {
    transfer.data = new Date();
  }
}
