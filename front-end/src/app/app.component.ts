import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'health-fitness-tracker';
  headerTitle = 'Dashboard';

  updateHeader(title: string) {
    this.headerTitle = title;
  }
}
