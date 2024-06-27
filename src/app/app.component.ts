import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './componentes/elementos/header/header.component';
import { FooterComponent } from './componentes/elementos/footer/footer.component';
import { AsideComponent } from './componentes/elementos/aside/aside.component';
import { LastNewsComponent } from './componentes/last-news/last-news.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,FooterComponent,AsideComponent,LastNewsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ministerio-da-maracutaia';
}
