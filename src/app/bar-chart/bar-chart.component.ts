import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent {
  barChart:Chart=new Chart({
    chart:{
      type:'bar'
    },
    title:{
      text:'Bar Chart Testing'
    },
    xAxis:{
      categories:['Apple','Banana','Pine apple', 'Mango']
    },
    yAxis:{
      title:{
        text:'fruits eaten'
      }
    },
    series:[
    {
      type:'bar',
      name:'joes',
      data:[1,0,4,5]
    },
    {
      type:'bar',
      name:'john',
      data:[5,7,3,8]
    }
]
  })
}
