import { apiService } from "@/services/apiService";
import { GitHubService } from "@/services/github.service";
import { Counter } from "./Counter";

const ghService = new GitHubService(apiService);

const infos = [
  { label: "Years of experience", value: 4 },
  { label: "Projects completed", value: 10 },
  { label: "Tecnologies mastered", value: 8 },
  { label: "Code commits", value: 0 },
  { label: "Pull requests", value: 0 },
];

export async function InfoBar() {
  const ghInfos = await ghService.eventsInfo();
  infos[3].value = ghInfos?.commits ?? 0;
  infos[4].value = ghInfos?.prs ?? 0;

  return (
    <div className="flex justify-between flex-wrap flex-row w-full gap-5 xl:gap-2 mt-10">
      {infos.map((item, index) => (
        <div className="flex-1 flex flex-col lg:flex-row items-center gap-2 lg:gap-9 text-center" key={index}>
          <strong className="font-bold text-2xl lg:text-5xl">
            <Counter value={item.value}></Counter>
          </strong>
          <span className="text-white/70">{item.label}</span>
        </div>
      ))}
    </div>
  );
}
