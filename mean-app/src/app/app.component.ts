import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MyErrorStateMatcher } from './MyErrorStateMatcher';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  mymatcher = new MyErrorStateMatcher();

  myname= new FormControl('',[Validators.required]);
  myemail = new FormControl('', [Validators.required, Validators.email]);
  mycourse = new FormControl();
  mypaymentDate = new FormControl();
  
  options: string[] = ['Spring boot','Angular','Reactjs','spring MicroServices'];
  filteredOptions: Observable<string[]>;

  weekdays: boolean;
  weekends: boolean;
  batchType: string;

  constructor(){}
  ngOnInit() {
    this.filteredOptions = this.mycourse.valueChanges
    .pipe(
      startWith(''),
      map(value => this.filterMyCourses(value))
    );
  }

  private filterMyCourses(value: string): string[]{
    const filterValue = value.toLowerCase();
    return this.options.filter(Option => Option.toLowerCase().includes(filterValue));
  }

  public registerStudent(){
    console.log('Register Button Clicked');
    console.log(this.myemail.value);
    console.log(this.myname.value);    
    console.log(this.mycourse.value);    
    console.log(this.weekdays);
    console.log(this.weekends);
    console.log(this.batchType);
    console.log(this.mypaymentDate.value);    
  }
}
