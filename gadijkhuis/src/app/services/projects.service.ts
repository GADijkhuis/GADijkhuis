import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Project } from '../models/project/project';
import { Content } from '../models/content/content';

interface GitHubRepo {
  name: string;
  description: string | null;
  html_url: string;
  homepage?: string;
}

@Injectable({
    providedIn: 'root',
})
export class ProjectsService {
    private readonly http = inject(HttpClient);
    private readonly apiUrl = `https://api.github.com/users/${Content.github_username}/repos`;

    getProjects(): Observable<Project[]> {
        return this.http.get<GitHubRepo[]>(this.apiUrl).pipe(
            map((repos) => repos
                .filter((repo) => !Content.skip_project_titles.includes(repo.name))
                .map((repo): Project => ({
                  title: repo.name,
                  description: repo.description ?? undefined,
                  link: repo.html_url,
                  homepage: repo.homepage
                }))),
            map((fetchedProjects) => [...Content.projects, ...fetchedProjects]),
        );
    }
}
