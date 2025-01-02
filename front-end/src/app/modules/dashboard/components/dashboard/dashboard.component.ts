import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {

  chartData = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Calories Burned' },
    { data: [45, 39, 60, 71, 46, 35, 30], label: 'Steps Counted' }
  ];

  chartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  barChartData = [
    { data: [12, 19, 3, 5, 2, 3], label: 'Weight Progress (kg)' }
  ];

  barChartLabels = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'];

  pieData = [
    {
      data: [30, 20, 50],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      label: 'Activity Split'
    }
  ];

  chartDataPie = {
    labels: ['Running', 'Cycling', 'Gym'],
  };

  chartDataDoughnut = {
    labels: ['Protein', 'Carbs', 'Fats'],
    datasets: [
      {
        data: [40, 30, 30],
        label: 'Macronutrient Ratio',
        backgroundColor: ['#FF9F40', '#FF6384', '#36A2EB'],
        hoverBackgroundColor: ['#FF9F40', '#FF6384', '#36A2EB']
      }
    ]
  };

  chartDataRadar = {
    labels: ['Strength', 'Stamina', 'Flexibility', 'Endurance', 'Speed'],
    datasets: [
      {
        data: [75, 65, 85, 70, 60],
        label: 'Fitness Attributes',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        pointBackgroundColor: 'rgba(54, 162, 235, 1)'
      }
    ]
  };

  chartDataPolar = {
    labels: ['Cardio', 'Strength Training', 'Yoga', 'Pilates'],
    datasets: [
      {
        data: [30, 20, 15, 35],
        label: 'Activity Preferences',
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
      }
    ]
  };

  chartOptions = {
    responsive: true,
  };
}