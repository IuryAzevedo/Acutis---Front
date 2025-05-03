import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeService } from './home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  welcomeMessage: string = '';
  description: string = '';

  constructor(private homeService: HomeService, 
    private router: Router) {}
  


  irParaLogin(): void {
    this.router.navigate(['/login']); // ou o caminho que você configurou para login
  }
  ngOnInit(): void {
    this.homeService.getWelcomeMessage().subscribe((message) => {
      this.welcomeMessage = message;
    });

    this.homeService.getDescription().subscribe((description) => {
      this.description = description;
    });
  }
}
