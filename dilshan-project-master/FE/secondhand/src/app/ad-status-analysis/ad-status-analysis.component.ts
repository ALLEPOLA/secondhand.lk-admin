import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-ad-status-analysis',
  templateUrl: './ad-status-analysis.component.html',
  styleUrls: ['./ad-status-analysis.component.scss']
})
export class AdStatusAnalysisComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    axios.get('http://localhost:8000/ads-status-analysis')
      .then(response => {
        const data = response.data;
        this.createDoughnutChart(data);
        // this.createLineChart(data);
      })
      .catch(error => {
        console.error('There was an error fetching the ad data!', error);
      });
  }

  createDoughnutChart(data: any): void {
    const ctx = document.getElementById('adStatusDoughnutChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: data.map((item: any) => item.approved_status),
        datasets: [{
          label: '# of Ads',
          data: data.map((item: any) => item.ad_count),
          backgroundColor: [
            'rgba(67, 247, 193, 1)',
            'rgba(219, 62, 62, 1)',
            'rgba(255, 255, 0, 1)'
          ],
          borderColor: [
            'rgba(67, 247, 193, 1)',
            'rgba(219, 62, 62, 1)',
            'rgba(255, 255, 0, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }


}