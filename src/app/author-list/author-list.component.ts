import { Component, OnInit, Input, OnChanges, SimpleChanges, AfterContentChecked } from '@angular/core';
import { ProfileService } from '../../shared/profile/profile.service';
import { Profile } from '../../shared/profile/profile';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit, AfterContentChecked {

  @Input()authors: Array<string> = [];
  profiles: Array<Profile> = [];
  selected: Array<Profile> = [];
  constructor(public profileService: ProfileService) { }

  ngOnInit() {
    this.profileService.GetProfiles().subscribe((data: any) => {
      this.profiles = data;
    });
  }

  ngAfterContentChecked() {
    this.filterProfiles();
  }

  filterProfiles() {
    if (this.selected.length > 0) {
      this.selected = [];
    }
    this.authors.forEach(email => {
      this.profiles.forEach(profile => {
        if (profile.email === email && !this.selected.includes(profile)) {
          this.selected.push(profile);
        }
      });
    });
  }

}
