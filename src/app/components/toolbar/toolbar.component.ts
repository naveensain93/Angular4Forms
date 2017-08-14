import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})

export class ToolbarComponent implements OnInit {
  public visible = false;

  public changeFullScreenIcon() {
    this.visible = !this.visible;
  }

  constructor( private router: Router ) { }
  ngOnInit() {
  }
  signout() {
    this.router.navigate(['/signin']);
  }
}
