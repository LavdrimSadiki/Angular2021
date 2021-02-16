import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {
  data = [
    { name: 'Lavdrim' , age: 25, job: 'FrontendDeveloper'},
    { name: 'Hasan' , age: 26, job: 'Backend Developer'},
    { name: 'Hysen' , age: 27, job: 'Database Engineer'}
  ];

 headers = [
   { key: 'name', label: 'Name' },
   { key: 'age', label: 'Age' },
   { key: 'job', label: 'Job' }
 ];



  constructor() { }

  ngOnInit(): void {
  }

}
