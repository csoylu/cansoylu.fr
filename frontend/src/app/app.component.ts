import { Component, Input, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  contents: any = {
    'about' : true,
    'tictactoe' : false,
    'facebook': false,
  }


  DisplayName(content: string){

    for (var i in this.contents)
    {
      console.log(i)
      if (i == content){
        this.contents[i] = true;
      }else{
        this.contents[i] = false;
      }
    }
  }
}
