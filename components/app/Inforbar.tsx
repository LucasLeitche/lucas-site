
import { apiService } from "@/services/apiService";
import { GitHubService } from "@/services/github.service";
import { Counter } from "./Counter";
import { useContext } from "react";
import { LanguageType } from "@/utils/language-type";
import { LangContext } from "./transition/PageTrasition";
import content from "@/utils/content.json"



//const ghService = new GitHubService(apiService);

export function InfoBar() {
  const lang = useContext<LanguageType>(LangContext);
  // ghInfos = await ghService.eventsInfo();
  //infos[3].value = ghInfos?.commits ?? 0;
  //infos[4].value = ghInfos?.prs ?? 0;

  const infos = [
    { label: content.home[lang][3], value: 4 },
    { label: content.home[lang][4], value: 10 },
    { label: content.home[lang][5], value: 8 },
    { label: content.home[lang][6], value: 100 },
    { label: content.home[lang][7], value: 6 },
  ];

  return (
    <div className="flex justify-between flex-wrap flex-row w-full gap-5 xl:gap-2 mt-10">
      {infos.map((item, index) => (
        <div
          className="flex-1 flex flex-col lg:flex-row items-center gap-2 lg:gap-9 text-center"
          key={index}
        >
          <strong className="font-bold text-2xl lg:text-4xl">
            <span className="pr-1">
            {item.label === "Code commits" || item.label === "Pull requests"
              ? "+"
              : ""}
            </span>
            <Counter value={item.value}></Counter>
          </strong>
          <span className="text-white/70">{item.label}</span>
        </div>
      ))}
    </div>
  );
}
