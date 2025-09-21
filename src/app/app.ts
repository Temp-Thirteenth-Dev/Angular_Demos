import { Component, signal, OnInit, DoCheck, AfterContentInit, AfterContentChecked,
    AfterViewInit, AfterViewChecked,
    OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Child } from './child/child';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Child,FormsModule ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit, DoCheck,   AfterContentInit, AfterContentChecked,     AfterViewInit, AfterViewChecked, OnDestroy {
  protected readonly title = signal('Exp2');

  data = 'Angular';
    ngOnInit() {
        console.log('Init');
    }
    ngDoCheck(): void {
        console.log('Change detected');
    }
    ngAfterContentInit(): void {
        console.log('After content init');
    }
    ngAfterContentChecked(): void {
        console.log('After content checked');
    }
    ngAfterViewInit(): void {
        console.log('After view init');
    }
    ngAfterViewChecked(): void {
        console.log('After view checked');
    }
    ngOnDestroy(): void {
        console.log('Destroy');
    }
}
