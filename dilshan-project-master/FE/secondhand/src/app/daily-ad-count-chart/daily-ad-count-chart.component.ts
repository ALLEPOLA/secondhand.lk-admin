import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chart, ChartDataset, ChartOptions } from 'chart.js/auto';

@Component({
  selector: 'app-daily-ad-count',
  templateUrl: './daily-ad-count-chart.component.html',
  styleUrls: ['./daily-ad-count-chart.component.scss']
})
export class DailyAdCountChartComponent implements OnInit {
  adData: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.http.get<any[]>('http://localhost:8000/daily-ad-count')
      .subscribe(data => {
        this.adData = data;
        this.createChart();
      });
  }

  createChart(): void {
    const dates = this.adData.map(entry => new Date(entry.date_created).toLocaleDateString());
    const adCounts = this.adData.map(entry => entry.ad_count);

    const options: ChartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          type: 'category',
          labels: dates,
          title: {
            display: true,
            text: 'Date'
          }
        },
        y: {
          title: {
            display: true,
            text: 'Ad Count'
          }
        }
      }
    };

    const chartData: ChartDataset[] = [
      {
        data: adCounts,
        label: 'Ad Count',
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ];

    const ctx = document.getElementById('adCountChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: dates,
        datasets: chartData
      },
      options: options
    });
  }
}
