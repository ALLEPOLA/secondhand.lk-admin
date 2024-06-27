  import { Component, OnInit } from '@angular/core';
  import axios from 'axios';
  import { Chart } from 'chart.js/auto';

  @Component({
    selector: 'app-ad-category-analysis',
    templateUrl: './ad-category-analysis.component.html',
    styleUrls: ['./ad-category-analysis.component.scss']
  })
  export class AdCategoryAnalysisComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
      this.fetchData();
    }

    fetchData(): void {
      axios.get('http://localhost:8000/ad-count-by-category')
        .then(response => {
          const data = response.data;
          this.createChart(data);
        })
        .catch(error => {
          console.error('There was an error fetching the ad data!', error);
        });
    }

    createChart(data: any): void {
      const ctx = document.getElementById('adCountChart') as HTMLCanvasElement;

      const backgroundColors = this.generateRandomColors(data.length);
      const borderColors = backgroundColors.map(color => this.adjustColorOpacity(color, 1)); // Generate border colors with full opacity

      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: data.map((item: any) => item.category),
          datasets: [{
            label: '# of Ads',
            data: data.map((item: any) => item.ad_count),
            backgroundColor: backgroundColors,
            borderColor: borderColors,
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }

    generateRandomColors(count: number): string[] {
      const colors: string[] = [];
      for (let i = 0; i < count; i++) {
        colors.push('#' + Math.floor(Math.random() * 16777215).toString(16));
      }
      return colors;
    }

    adjustColorOpacity(color: string, opacity: number): string {
      const r = parseInt(color.slice(1, 3), 16);
      const g = parseInt(color.slice(3, 5), 16);
      const b = parseInt(color.slice(5, 7), 16);
      return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    }
  }
