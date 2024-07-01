import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {GithubService} from "../../services/github-api/github.service";
import {AsyncPipe, NgIf} from "@angular/common";

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe
  ],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  githubService = inject(GithubService);

  ngOnInit() {
    const login = this.route.snapshot.paramMap.get('login');

    if (login) {
      this.githubService.getUserDetails(login).subscribe();
    }
  }
}
