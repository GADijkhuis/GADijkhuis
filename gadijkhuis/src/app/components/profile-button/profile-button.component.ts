import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-button',
  imports: [],
  templateUrl: './profile-button.component.html',
  styleUrl: './profile-button.component.scss',
})
export class ProfileButtonComponent {
    @Input({ required: true }) to!: string 
    @Input({ required: true }) iconAlt!: string 
    @Input({ required: true }) iconSrc!: string 
}
