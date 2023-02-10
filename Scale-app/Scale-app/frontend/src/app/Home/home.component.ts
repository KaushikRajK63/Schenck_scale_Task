import { Component } from '@angular/core';
import io from 'socket.io-client';

import axios from 'axios';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  singleWeight: any;

  socket;

  constructor() {
    this.socket = io('http://localhost:5000');

    this.socket.on('changeState', (data: any) => {
        this.singleWeight = data.weight;
    });

    this.socket.emit('message', { message: 'Hello from the client!' });
  }

  async callFunction(data:any){
    console.log(data)

    const res = await axios.post('http://localhost:5000/api/weight', {
      data: data
    })

    if(res.status == 200){
      alert( "weight added" );
    }
  }

  // ngOnInit(){
  //   this.getNewWeight();
  // }
}
