import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Input() collectionSize: number;
  page = 1;
  @Output() pageEmitter = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  updatePage() {
    this.pageEmitter.emit({ page: this.page });
  }
}
