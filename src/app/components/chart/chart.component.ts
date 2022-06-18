import {Component, OnInit, ViewChild} from '@angular/core';
import {ChartConfiguration, ChartEvent, ChartType} from 'chart.js';
import {BaseChartDirective} from 'ng2-charts';
import {InsuranceService} from "../../services/insurance.service";


@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  public lineChartData: ChartConfiguration['data'] = {
    datasets: [],
    labels: []
  }

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


  constructor(private insuranceService: InsuranceService) {
  }

  ngOnInit(): void {
    this.insuranceService.getInsurancePrices().subscribe(
      (data) => {

        this.lineChartData = {
          datasets: [
            {
              data: data.chartValuesList[0].prices,
              label: data.chartValuesList[0].label,
              backgroundColor: 'rgba(123,31,162,0.2)',
              borderColor: 'rgba(123,31,162,1)',
              pointBackgroundColor: 'rgba(123,31,162,1)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgba(123,31,162,0.8)',
              fill: 'origin',
            },
            {
              data: data.chartValuesList[1].prices,
              label: data.chartValuesList[1].label,
              backgroundColor: 'rgba(105,240,174,0.2)',
              borderColor: 'rgba(105,240,174,1)',
              pointBackgroundColor: 'rgba(105,240,174,1)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgba(105,240,174,1)',
              fill: 'origin',
            },
          ],
          labels: data.labels
        }

        this.chart?.update();
      },
    )

  }

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
