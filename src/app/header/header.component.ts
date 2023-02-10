import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public imagen: string='https://www.facebook.com/images/fb_icon_325x325.png'
  public titulo: string='ANGULAR'
}
