import {
  Component,
  ComponentRef,
  ElementRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { FactoryComponentComponent } from './factory-component/factory-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('dynamicComp', { read: ViewContainerRef })
  private viewRef!: ViewContainerRef;
  private componentRef!: ComponentRef<FactoryComponentComponent>;

  
  @ViewChild('inputForm') input_form: ElementRef | undefined;
  getInputs() {
    const inputValue = this.input_form?.nativeElement.value;
  }

  addComponent() {
    this.viewRef.clear();
    this.componentRef = this.viewRef.createComponent(FactoryComponentComponent);
  }
  deleteComponent() {
    this.viewRef.clear();
  }

}

