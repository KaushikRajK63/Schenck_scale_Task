import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular_node';

  allWeights: any | []

  async getAllWeight() {
    const { data } = await  axios.get('http://localhost:5000/api/weights');
    this.allWeights = data;
    console.log(this.allWeights)
  }
}
