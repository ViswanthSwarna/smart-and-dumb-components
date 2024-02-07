import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-smart',
  template: `
    <app-dumb [data]="dumbComponentData" (eventEmitter)="handleEvent($event)"></app-dumb>
    <app-dumb [data]="dumbComponentData" (eventEmitter)="handleEvent($event)"></app-dumb>
  `,
})

export class SmartComponent {
  dumbComponentData: string;

  constructor(private dataService: DataService) {
    this.dumbComponentData = this.dataService.getData();
  }

  handleEvent(eventData: string): void {
    console.log(`Event from Dumb Component: ${eventData}`);
  }
}
