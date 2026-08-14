import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/contentblocks/contentblock-header/header.component";
import { SideContentComponent } from "../../components/side-content/side-content.component";
import { ContentblockAboutComponent } from "../../components/contentblocks/contentblock-about/contentblock-about.component";
import { ContentblockSkillsComponent } from "../../components/contentblocks/contentblock-skills/contentblock-skills.component";
import { ContentblockProjectsComponent } from "../../components/contentblocks/contentblock-projects/contentblock-projects.component";

@Component({
  selector: 'app-home-layout.component',
  imports: [HeaderComponent, SideContentComponent, ContentblockAboutComponent, ContentblockSkillsComponent, ContentblockProjectsComponent],
  templateUrl: './home-layout.component.html',
  styleUrl: './home-layout.component.scss',
})
export class HomeLayoutComponent {

}
