import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-custom-div',
  templateUrl: './custom-div.component.html',
  styleUrls: ['./custom-div.component.css'],
  template:  `
    <ng-template #tpl>
      <span>I am span in template</span>
    </ng-template>
  `
})
export class CustomDivComponent implements AfterViewInit {

  @ViewChild('tpl') tpl: TemplateRef<any>;

  ngAfterViewInit() {
    let elementRef = this.tpl.elementRef;
    // outputs `template bindings={}`
    console.log(elementRef.nativeElement.textContent);
  }

  constructor() { }


}
