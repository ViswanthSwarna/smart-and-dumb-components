import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dumb',
  template: `
    <div>
      <h3>Dumb Component</h3>
      <p>Data from Smart Component: {{ data }}</p>
      <button (click)="emitEvent()">Click me</button>
    </div>
  `,
})
export class DumbComponent {
  @Input()
  data!: string;
  @Output() eventEmitter = new EventEmitter<string>();

  constructor() {}

  emitEvent(): void {
    this.eventEmitter.emit('Hello from Dumb Component!');
  }
}
