import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Racs Technologies - Relaibale Account Solutions';

constructor(private router: Router){}
  about=()=>{this.router.navigate(['/about'])}
  services=()=>{this.router.navigate(['/services'])}
  products=()=>{this.router.navigate(['/products'])}
  home=()=>{this.router.navigate(['/home'])}
}
