import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent{

  constructor() {
   }

  @Output() sendDisplayName = new EventEmitter<string>();

  DisplayContent(content: string){
    this.sendDisplayName.emit(content);
  }
}
