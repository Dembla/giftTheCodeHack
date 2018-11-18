import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

import { PostsService } from "../posts.service";

@Component({
  selector: "app-post-create",
  templateUrl: "./post-create.component.html",
  styleUrls: ["./post-create.component.css"]
})
export class PostCreateComponent {
  enteredTitle = "";
  enteredContent = "";

  constructor(public postsService: PostsService) {}

  onAddPost(form: NgForm) {
    this.postsService.addPost(form.value.age, form.value.province, form.value.club, form.value.event);
    form.resetForm();
  }

  onGetPost() {
    this.postsService.getPosts()
  }

  states: string[] = [
    'ON',"MB","NS","NB","QC","BC","NF","YK","PEI","NWT","SK"
  ];
  
  clubs: string[] = [
    "Boys & Girls Club of Bashaw and Area",
    'Boys & Girls Club of Strathcona County',
    'Boys & Girls Club of Wolf Creek - Ponoka',
    'Boys and Girls Club of Airdrie',
    'Boys and Girls Club of Bonnyville',
    'Boys and Girls Club of Cochrane and Area',
    'Boys and Girls Club of Fort Saskatchewan',
    'Boys and Girls Club of Leduc',
    'Boys and Girls Club of Lethbridge & District',
    'Boys and Girls Club of Red Deer and District'
  ];

  events: string[] = [
    "Flag football tournament",
    "Outdoor games",
    "Unplugging for whole day",
    "Dunk for Diabetes event",
    "Family picnic",
    "Group games",
    "Activities happening at various service locations",
    "police vs youth soccer game",
    "Afternoon in the park",
    "Family dodgeball game",
    "Games in the field",
    "BBQ",
    "Games and fitness challenges",
    "Staff lunch, preparation for 50th anniversary, outdoor activities",
    "Popcorn picnic, with Unplug to Connect packages distributed to all families",
    "Carnival"
  ];
}
