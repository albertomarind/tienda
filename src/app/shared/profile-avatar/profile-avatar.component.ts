import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-avatar',
  templateUrl: './profile-avatar.component.html',
  styleUrls: ['./profile-avatar.component.scss']
})
export class ProfileAvatarComponent implements OnInit {

  @Input()
  image:string = '';

  @Input()
  name:string = '';

  @Input()
  level:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
