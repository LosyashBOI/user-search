import {Component, inject} from '@angular/core';
import {GithubService} from "../../services/github-api/github.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  githubService = inject(GithubService);
}
