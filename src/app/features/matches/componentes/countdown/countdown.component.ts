import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown',
  standalone: true,
  imports: [],
  templateUrl: './countdown.component.html',
  styleUrl: './countdown.component.scss'
})
export class CountdownComponent implements OnInit, OnDestroy{
  @Input() public targetDate!: string;
  public days: number = 0;
  public hours: number = 0;
  public minutes: number = 0;
  public second: number = 0;
  public showMode: 'days-hours' | 'hours-minutes' | 'minutes' = 'days-hours';
  
  private intervalId: any;
  private firstCount: boolean = true;

  ngOnInit() {
    this.startCountdown();
  }

  private startCountdown() {
    const targetDate = new Date(this.targetDate).getTime();
    
    this.intervalId = setInterval(() => {
      const now = new Date().getTime();
      const interval = targetDate - now;
      
      if (interval > 0) {
        const hoursInterval = interval / (1000 * 60 * 60);

        if (hoursInterval > 24) {
          this.showMode = 'days-hours';
          this.days = Math.floor(interval / (1000 * 60 * 60 * 24));
          this.hours = Math.floor((interval % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        } else if (hoursInterval <= 24 && hoursInterval > 1) {
          this.showMode = 'hours-minutes';
          this.hours = Math.floor(interval / (1000 * 60 * 60));
          this.minutes = Math.floor((interval % (1000 * 60 * 60)) / (1000 * 60));
        } else {
          this.showMode = 'minutes';
          this.minutes = Math.floor(interval / (1000 * 60));
        }
      } else {
        this.clearCountdown();
      }
    }, this.delay());
  }

  private delay(): number {
    let time: number = this.firstCount? 0 : 60000;
    return time
  }

  private clearCountdown() {
    clearInterval(this.intervalId);
  }

  ngOnDestroy() {
    this.clearCountdown();
  }
}
