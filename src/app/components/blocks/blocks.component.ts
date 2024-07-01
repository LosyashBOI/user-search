import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GithubService } from '../../services/github-api/github.service';
import {SearchComponent} from "../search/search.component";

@Component({
  selector: 'app-blocks',
  standalone: true,
  imports: [CommonModule, RouterModule, SearchComponent],
  templateUrl: './blocks.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlocksComponent {
  githubService = inject(GithubService);
}
