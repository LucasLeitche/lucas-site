import { IAPiService } from "./IApiService";
import { IEventsInfo, IGitHubService, IRepoList } from "./IGithubService";
export class GitHubService implements IGitHubService {
  constructor(private apiService: IAPiService) {}

  private _repoUrl = "https://api.github.com/users/LucasLeitche/events?page=1";
  private _eventsUrl =
    "https://github-readme-stats.vercel.app/api?username=LucasLeitche&show_icons=true&theme=dark&include_all_commits=true&count_private=true";

  async repoList(): Promise<any> {
    const list = await this.apiService.list(this._repoUrl);
    const json = await list.json();
    console.log(json);
  }

  async eventsInfo(): Promise<IEventsInfo | null> {
    try {
      const response = await this.apiService.list(this._eventsUrl);
      const svgText = await response.text();
      const commitsMatch: any = svgText.match(/Total\s+Commits\s*:\s*([\d,]+)/);
      const prsMatch: any = svgText.match(/Total\s+PRs\s*:\s*([\d,]+)/);

      if (commitsMatch) {
        const totalCommits = commitsMatch[1].replace(/\D/g, "");
        const totalPrs = prsMatch[1].replace(/\D/g, "");
        console.log(`Total number of commits: ${totalPrs}`);

        return { commits: Number(totalCommits), prs: Number(totalPrs) };
      } else {
        console.log("Could not extract commits from SVG");
        return null;
      }
    } catch (err) {
      console.log(err);
      return null
    }
  }
}
