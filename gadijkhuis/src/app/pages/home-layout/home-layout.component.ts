import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { SideContentComponent } from "../../components/side-content/side-content.component";
import { ContentblockAboutComponent } from "../../components/contentblock-about/contentblock-about.component";
import { ContentblockSkillsComponent } from "../../components/contentblock-skills/contentblock-skills.component";

@Component({
  selector: 'app-home-layout.component',
  imports: [HeaderComponent, SideContentComponent, ContentblockAboutComponent, ContentblockSkillsComponent],
  templateUrl: './home-layout.component.html',
  styleUrl: './home-layout.component.scss',
})
export class HomeLayoutComponent {

}
