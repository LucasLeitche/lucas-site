export interface IRepoList {
  id: string;
  name: string;
  html_url: string;
}

export interface IEventsInfo {
  commits: number;
  prs: number;
}

export interface IGitHubService {
  repoList(): Promise<IRepoList[]>;
  eventsInfo(): Promise<IEventsInfo | null>;
}
