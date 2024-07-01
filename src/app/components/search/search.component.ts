import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {GithubService} from "../../services/github-api/github.service";
import {noWhitespaceValidator} from "../../validators";

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent {
  private fb = inject(FormBuilder);
  private githubService = inject(GithubService);

  searchForm = this.fb.group({
    query: ['', [Validators.required, noWhitespaceValidator()]]
  });

  onSubmit() {
    if (this.searchForm.valid) {
      this.githubService.searchUsers(this.searchForm.value.query!).subscribe();
    }
  }
}
