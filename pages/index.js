import { useEffect, useState } from "react";
import { useTransition } from "react";
import words from "../words/index";
import Fuse from "fuse.js";

const populateObj = (paths, folderName) => {
  
  return paths.map(
    (ele) =>
      ({
       name: ele.replace(/\.(png|jpe?g|svg|jpg|JPG)$/, ""),

      url: `${folderName}/${ele}`})
  );
  return obj;
};
const categories = [
  "ابجدية اللغة الانكليزية",
  "الاشهر والايام والوقت",
  "الافعال",
  "البيت ومحتوياته",
  "الحيوانات والطيور والحشرات",
  "الخضروات",
  "الرياضة",
  "العلاقات الاجتماعية والتحية والسلام",
  "العلوم والظواهر الطبيعية",
  "الفنون",
  "القواعد والابجدية",
  "الكمبيوتر",
  "المدرسة ومستلزماتها",
  "المهن",
  "ديانة",
  "رياضيات",
  "صفات",
  "وسائط النقل",
  "وطنية",
];

const english = require
  .context(
    "../public/sign language/english",
    false,
    /\.(png|jpe?g|svg|jpg|JPG)$/
  )
  .keys()
  .map((ele) => ele.replace(/\../, ""));
const months = require
  .context(
    "../public/sign language/months",
    false,
    /\.(png|jpe?g|svg|jpg|JPG)$/
  )
  .keys()
  .map((ele) => ele.replace(/\../, ""));
const verbs = require
  .context("../public/sign language/verbs", false, /\.(png|jpe?g|svg|jpg|JPG)$/)
  .keys()
  .map((ele) => ele.replace(/\../, ""));
const house = require
  .context("../public/sign language/house", false, /\.(png|jpe?g|svg|jpg|JPG)$/)
  .keys()
  .map((ele) => ele.replace(/\../, ""));
const animals = require
  .context(
    "../public/sign language/animals",
    false,
    /\.(png|jpe?g|svg|jpg|JPG)$/
  )
  .keys()
  .map((ele) => ele.replace(/\../, ""));
const vegetables = require
  .context(
    "../public/sign language/vegetables",
    false,
    /\.(png|jpe?g|svg|jpg|JPG)$/
  )
  .keys()
  .map((ele) => ele.replace(/\../, ""));
const sport = require
  .context("../public/sign language/sport", false, /\.(png|jpe?g|svg|jpg|JPG)$/)
  .keys()
  .map((ele) => ele.replace(/\../, ""));
const greetings = require
  .context(
    "../public/sign language/greetings",
    false,
    /\.(png|jpe?g|svg|jpg|JPG)$/
  )
  .keys()
  .map((ele) => ele.replace(/\../, ""));
const science = require
  .context(
    "../public/sign language/science",
    false,
    /\.(png|jpe?g|svg|jpg|JPG)$/
  )
  .keys()
  .map((ele) => ele.replace(/\../, ""));
const arts = require
  .context("../public/sign language/arts", false, /\.(png|jpe?g|svg|jpg|JPG)$/)
  .keys()
  .map((ele) => ele.replace(/\../, ""));
// const grammar = require
//   .context(
//     "../public/sign language/القواعد والابجدية",
//     false,
//     /\.(png|jpe?g|svg|jpg|JPG)$/
//   )
//   .keys()
//   .map((ele) => ele.replace(/\../, ""));
const computer = require
  .context(
    "../public/sign language/computer",
    false,
    /\.(png|jpe?g|svg|jpg|JPG)$/
  )
  .keys()
  .map((ele) => ele.replace(/\../, ""));
const school = require
  .context(
    "../public/sign language/school",
    false,
    /\.(png|jpe?g|svg|jpg|JPG)$/
  )
  .keys()
  .map((ele) => ele.replace(/\../, ""));
const profs = require
  .context("../public/sign language/profs", false, /\.(png|jpe?g|svg|jpg|JPG)$/)
  .keys()
  .map((ele) => ele.replace(/\../, ""));
const relgion = require
  .context(
    "../public/sign language/relgion",
    false,
    /\.(png|jpe?g|svg|jpg|JPG)$/
  )
  .keys()
  .map((ele) => ele.replace(/\../, ""));
const math = require
  .context("../public/sign language/math", false, /\.(png|jpe?g|svg|jpg|JPG)$/)
  .keys()
  .map((ele) => ele.replace(/\../, ""));
const adjectives = require
  .context(
    "../public/sign language/adjectives",
    false,
    /\.(png|jpe?g|svg|jpg|JPG)$/
  )
  .keys()
  .map((ele) => ele.replace(/\../, ""));
const transport = require
  .context(
    "../public/sign language/transport",
    false,
    /\.(png|jpe?g|svg|jpg|JPG)$/
  )
  .keys()
  .map((ele) => ele.replace(/\../, ""));
const country = require
  .context(
    "../public/sign language/country",
    false,
    /\.(png|jpe?g|svg|jpg|JPG)$/
  )
  .keys()
  .map((ele) => ele.replace(/\../, ""));
const social = require
  .context(
    "../public/sign language/social",
    false,
    /\.(png|jpe?g|svg|jpg|JPG)$/
  )
  .keys()
  .map((ele) => ele.replace(/\../, ""));

const englishObj = populateObj(english, "english");
const monthsObj = populateObj(months, "months");
const verbsObj = populateObj(verbs, "verbs");
const houseObj = populateObj(house, "house");
const vegetablesObj = populateObj(vegetables, "vegetables");
const sportObj = populateObj(sport, "sport");
const greetingsObj = populateObj(greetings, "greetings");
const scienceObj = populateObj(science, "science");
const artsObj = populateObj(arts, "arts");
// const grammarObj =populateObj(grammar);
const computerObj = populateObj(computer, "computer");
const schoolObj = populateObj(school, "school");
const relgionObj = populateObj(relgion, "relgion");
const mathObj = populateObj(math, "math");
const transportObj = populateObj(transport, "transport");
const countryObj = populateObj(country, "country");
const adjectivesObj = populateObj(adjectives, "adjectives");
const animalsObj = populateObj(animals, "animals");
const profsObj = populateObj(profs, "profs");
const socialObj = populateObj(social, "social");

const all = [
  ...englishObj,
  ...monthsObj,
  ...verbsObj,
  ...houseObj,
  ...vegetablesObj,
  ...sportObj,
  ...greetingsObj,
  ...scienceObj,
  ...artsObj,
  // ...grammarObj,
  ...computerObj,
  ...schoolObj,
  ...relgionObj,
  ...mathObj,
  ...transportObj,
  ...countryObj,
  ...adjectivesObj,
  ...animalsObj,
  ...profsObj,
  ...socialObj,
];

const fuse = new Fuse(all, {
  includeScore: true,
  keys: ["name"],
});
export default function Home() {
  const [input, setInput] = useState("");
  const [isPending, startTransition] = useTransition();
  const [filterList, setFilterList] = useState(all);

  // console.log(JSON.stringify(all));




  const updateList = (e) => {
    console.log(filterList);
    setInput(e.target.value);
    startTransition(() => {
      setFilterList(
        fuse.search(e.target.value)
      );
    });
  };
  return (
    <div className="container text-center">
      <h2 className="mt-8 text-3xl font-medium">
        {"اكتب ما تبحث عنه".toUpperCase()}
      </h2>

      {/* <img src="/sign language/adjectives/غضبان.JPG" /> */}
      <div dir="rtl" className="my-4 flex justify-center items-center">
        <input
          dir="rtl"
          className="bg-gray-300 outline-none text-gray-900  px-8 py-4 rounded-md text-2xl"
          type="text"
          value={input}
          onChange={updateList}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 -mr-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
          />
        </svg>
      </div>
      <div className="grid gap-4">
        {input
          ? filterList.slice(0,5).map((term, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center p-4"
              >
                <img src={'/sign language/'+term?.item?.url} alt={term?.item?.name} />
                <h3 className="text-xl">{term?.item?.name}</h3>
              </div>
            ))
          : null}
          {/* {
            console.log(filterList[0].item.url)
          } */}
      </div>
    </div>
  );
}
