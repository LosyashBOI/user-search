import {Injectable, inject, signal} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, catchError, finalize, map, Observable, of, tap} from 'rxjs';
import {LoadingService} from "../loading/loading.service";
import {IUser, IUserResponse} from "../../models/user.interface";

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private apiUrl = 'https://api.github.com';
  private http = inject(HttpClient);
  private loadingService = inject(LoadingService);

  private selectedUserSubject = new BehaviorSubject<IUser | null>(null);
  selectedUser$ = this.selectedUserSubject.asObservable();

  users = signal<IUser[] | null>([]);

  searchUsers(query: string): Observable<IUser[] | null> {
    this.loadingService.show();

    return this.http.get<IUserResponse>(`${this.apiUrl}/search/users?q=${query}`).pipe(
      map(response => response.items.slice(0, 20)),
      tap(users => this.users.set(users)),
      finalize(() => this.loadingService.hide()),
      catchError(error => {
        console.error('Error fetching users', error);
        return of(null);
      })
    );
  }

  getUserDetails(username: string): Observable<IUser | null> {
    this.loadingService.show();

    return this.http.get<IUser>(`${this.apiUrl}/users/${username}`).pipe(
      tap(user => this.selectedUserSubject.next(user)),
      finalize(() => this.loadingService.hide()),
      catchError(error => {
        console.error('Error fetching user details', error);
        return of(null);
      })
    );
  }
}
