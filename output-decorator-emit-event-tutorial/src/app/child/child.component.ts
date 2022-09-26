import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Output() propEmitter: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  emitEventToParent(data: string) {
    this.propEmitter.emit(data);
  }
}
