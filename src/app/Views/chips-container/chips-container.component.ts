import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { ComponentBase } from 'src/app/Base/ComponentBase';

@Component({
  selector: 'app-chips-container',
  templateUrl: './chips-container.component.html',
  styleUrls: ['./chips-container.component.scss']
})
export class ChipsContainerComponent extends ComponentBase implements OnInit {


  @Input() chips!: number[];
  @Input() selectedChip!: number;

  constructor(ref: ChangeDetectorRef) {
    super(ref);
  }

  ngOnInit(): void {
  }

}
