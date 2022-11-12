import { Component, Input, OnInit } from '@angular/core';
import { StateInterface } from 'src/app/shared/interface/data.interface';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  @Input() state: StateInterface ='loading'
  @Input() height: string = '400px';

  constructor() { }

  ngOnInit(): void {
  }

}
