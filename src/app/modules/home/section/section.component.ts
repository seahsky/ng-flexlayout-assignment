import { Component, Input, OnInit } from '@angular/core';
import { Section } from '@models/section';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
})
export class SectionComponent implements OnInit {
  @Input() orientation: string;
  sectionsToRender: Section[] = [
    { content: `first` },
    { content: `second` },
    { content: `third` },
  ];
  constructor() {}

  ngOnInit(): void {
    this.sectionsToRender.map((section, index) => {
      const normalOrder = index + 1;
      const inversedOrder =
        Math.abs(normalOrder - this.sectionsToRender.length) + 1;
      section.pcOrder = normalOrder;
      section.phoneOrder = inversedOrder;
      section.className =
        this.orientation === 'column'
          ? `sec${inversedOrder}`
          : `sec${normalOrder}`;
    });
  }
}
