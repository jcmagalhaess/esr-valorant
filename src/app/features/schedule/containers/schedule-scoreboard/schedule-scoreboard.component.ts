import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
@Component({
  selector: 'app-schedule-scoreboard',
  imports: [MatTableModule],
  standalone: true,
  templateUrl: './schedule-scoreboard.component.html',
  styleUrl: './schedule-scoreboard.component.scss'
})
export class ScheduleScoreboardComponent {
  public columns: string[] = ['nome'];
  public dataSource = [{nome: 'teste'}];
}
