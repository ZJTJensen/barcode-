import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  color =['red', 'blue', 'green', 'gray', 'yellow', 'black', 'white']
  numof = [];
  ngOnInit(){
 
   for(var i=0;i<11;i++){
      
      this.numof[i]= this.color[(Math.floor(Math.random()*(this.color.length+0)))+1]; 
    };
    console.log(this.numof)
  }
  
  
}
