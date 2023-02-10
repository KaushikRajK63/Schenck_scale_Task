import { Component, Input } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-rgister',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent {
  // allweight:any;
  @Input() allWeights: any;


  async removeWeight(id:any){
    const { data } = await axios.post(`http://localhost:5000/api/remove/${id}`)
    this.allWeights = data
  }

  async removeAll(){
    alert("Are you sure you want to delete ? ")
    const res = await axios.post(`http://localhost:5000/api/removeall`);
    this.allWeights = undefined
  }

}
