import {Component, ViewChild} from '@angular/core';
import { ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';


@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent{


  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [ 65, 59, 80, 81, 56, 55, 40 ],
        label: 'Series A',
        backgroundColor: 'rgba(123,31,162,0.2)',
        borderColor: 'rgba(123,31,162,1)',
        pointBackgroundColor: 'rgba(123,31,162,1)',//'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(123,31,162,0.8)',
        fill: 'origin',
      },
      {
        data: [ 28, 48, 40, 19, 86, 27, 90 ],
        label: 'Series B',
        backgroundColor: 'rgba(105,240,174,0.2)',
        borderColor: 'rgba(105,240,174,1)',
        pointBackgroundColor: 'rgba(105,240,174,1)',//'rgba(77,83,96,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(105,240,174,1)',
        fill: 'origin',
      },
    ],
    labels: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July' ]
  };

  public lineChartOptions: any = {
    elements: {
      line: {
        tension: 0
      }
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      x: {},
      'y-axis-1': {
        position: 'left',
        grid: {
          color: '#fff',//'rgba(148,159,177,1)',
        },
        ticks: {
          color: 'white'
        }
      }
    },

    // plugins: {
    //   legend: { display: true },
    //   annotation: {
    //     annotations: [
    //       {
    //         type: 'line',
    //         scaleID: 'x',
    //         value: 'March',
    //         borderColor: 'purple',
    //         borderWidth: 2,
    //         label: {
    //           position: 'center',
    //           enabled: true,
    //           color: 'purple',
    //           content: 'LineAnno',
    //           font: {
    //             weight: 'bold'
    //           }
    //         }
    //       },
    //     ],
    //   }
    // }
  };

  public lineChartType: ChartType = 'line';

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }
}
