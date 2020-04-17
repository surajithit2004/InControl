import { Component, OnInit } from '@angular/core';
import { RiskServiceService } from './risk-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'InControl';
  errorMessage = '';
  riskLevels: any[]= [];
  risks: any[] = [];

  constructor(private riskServiceService: RiskServiceService) { }

  // ngOnInit(): void {
  //   this.riskServiceService.getAllRisks().subscribe({
  //     next: risks => {
  //       this.riskLevels = this.risks;
  //       console.log("riskLevels = "+this.riskLevels);
  //     },
  //     error: err => this.errorMessage = err
  //   });
  // }

  ngOnInit(): void {
    this.riskLevels = [
        {
          "id": 1,
          "chamberOfCommerceNumber": 1001,
          "riskLevel": "Low"
        },
        {
          "id": 2,
          "chamberOfCommerceNumber": 2001,
          "riskLevel": "Medium"
        },
        {
          "id": 3,
          "chamberOfCommerceNumber": 3001,
          "riskLevel": "High"
        },
        {
          "id": 4,
          "chamberOfCommerceNumber": 4001,
          "riskLevel": "Medium"
        }
      ];

      
  }
  
}
