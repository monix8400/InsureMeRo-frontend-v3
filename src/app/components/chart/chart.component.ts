import {Component, ViewChild} from '@angular/core';
import {ChartConfiguration, ChartEvent, ChartType} from 'chart.js';
import {BaseChartDirective} from 'ng2-charts';


@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent {


  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40],
        label: 'Individual',
        backgroundColor: 'rgba(123,31,162,0.2)',
        borderColor: 'rgba(123,31,162,1)',
        pointBackgroundColor: 'rgba(123,31,162,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(123,31,162,0.8)',
        fill: 'origin',
      },
      {
        data: [28, 48, 40, 19, 86, 27, 90],
        label: 'Legal Person',
        backgroundColor: 'rgba(105,240,174,0.2)',
        borderColor: 'rgba(105,240,174,1)',
        pointBackgroundColor: 'rgba(105,240,174,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(105,240,174,1)',
        fill: 'origin',
      },
    ],
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July']
  };

  public lineChartOptions: any = {
    elements: {
      line: {
        tension: 0
      }
    },
    plugins: {
      legend: {
        labels: {
          color: 'white',
        }
      }
    },
    scales: {
      x: {
        grid: {
          color: '#7d7d7d',
        },
        ticks: {
          color: 'white'
        }
      },
      y: {
        position: 'left',
        grid: {
          color: '#7d7d7d',
        },
        ticks: {
          color: 'white'
        }
      }
    },

  };

  public lineChartType: ChartType = 'line';

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  // events
  public chartClicked({event, active}: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({event, active}: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }
}
