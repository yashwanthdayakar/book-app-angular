import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }

  createOrder(orderObj:any){
    const url = "http://localhost:3000/orders";
    return this.http.post(url, orderObj);
  }

  cancelOrder(orderObj:any){
    //todo
  }

  deliverOrder(orderObj:any){
    //todo
  }
}