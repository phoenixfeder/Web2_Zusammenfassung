import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'deathlistApp';
  value = 'Dies kommt aus einer Variable';
  color = 'rgba(200,0,0,0.1)';
  onClick(event: MouseEvent) {
    console.log(event);
    alert('Du traust dir ja was...');
  }
}
