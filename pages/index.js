import { useEffect, useState } from "react";
import { useTransition } from "react";
import Fuse from "fuse.js";
import MyLink from "../components/MyLink";

const getList = (paths, folderName) => {
  
  return paths.map(
    (ele) =>
      ({
       name: ele.replace(/\.(png|jpe?g|svg|jpg|JPG|gif)$/, ""),

      url: `${folderName}/${ele}`})
  );
};


const english = require
  .context(
    "../public/sign language/english",
    false,
    /\.(png|jpe?g|svg|jpg|JPG|gif)$/
  )
  .keys()
  .map((ele) => ele.replace(/\../, ""));
const months = require
  .context(
    "../public/sign language/months",
    false,
    /\.(png|jpe?g|svg|jpg|JPG|gif)$/
  )
  .keys()
  .map((ele) => ele.replace(/\../, ""));
const verbs = require
  .context("../public/sign language/verbs", false, /\.(png|jpe?g|svg|jpg|JPG|gif)$/)
  .keys()
  .map((ele) => ele.replace(/\../, ""));
const house = require
  .context("../public/sign language/house", false, /\.(png|jpe?g|gif|svg|jpg|JPG)$/)
  .keys()
  .map((ele) => ele.replace(/\../, ""));
const animals = require
  .context(
    "../public/sign language/animals",
    false,
    /\.(png|jpe?g|svg|jpg|JPG|gif)$/
  )
  .keys()
  .map((ele) => ele.replace(/\../, ""));
const vegetables = require
  .context(
    "../public/sign language/vegetables",
    false,
    /\.(png|jpe?g|svg|jpg|JPG|gif)$/
  )
  .keys()
  .map((ele) => ele.replace(/\../, ""));
const sport = require
  .context("../public/sign language/sport", false, /\.(png|jpe?g|svg|gif|jpg|JPG)$/)
  .keys()
  .map((ele) => ele.replace(/\../, ""));
const greetings = require
  .context(
    "../public/sign language/greetings",
    false,
    /\.(png|jpe?g|svg|jpg|JPG|gif)$/
  )
  .keys()
  .map((ele) => ele.replace(/\../, ""));
const science = require
  .context(
    "../public/sign language/science",
    false,
    /\.(png|jpe?g|svg|jpg|JPG|gif)$/
  )
  .keys()
  .map((ele) => ele.replace(/\../, ""));
const arts = require
  .context("../public/sign language/arts", false, /\.(png|jpe?g|svg|jpg|JPG|gif)$/)
  .keys()
  .map((ele) => ele.replace(/\../, ""));

const computer = require
  .context(
    "../public/sign language/computer",
    false,
    /\.(png|jpe?g|svg|jpg|JPG|gif)$/
  )
  .keys()
  .map((ele) => ele.replace(/\../, ""));
const school = require
  .context(
    "../public/sign language/school",
    false,
    /\.(png|jpe?g|svg|jpg|JPG|gif)$/
  )
  .keys()
  .map((ele) => ele.replace(/\../, ""));
const profs = require
  .context("../public/sign language/profs", false, /\.(png|jpe?g|svg|jpg|JPG|gif)$/)
  .keys()
  .map((ele) => ele.replace(/\../, ""));
const relgion = require
  .context(
    "../public/sign language/relgion",
    false,
    /\.(png|jpe?g|svg|jpg|JPG|gif)$/
  )
  .keys()
  .map((ele) => ele.replace(/\../, ""));
const math = require
  .context("../public/sign language/math", false, /\.(png|jpe?g|svg|jpg|JPG|gif)$/)
  .keys()
  .map((ele) => ele.replace(/\../, ""));
const adjectives = require
  .context(
    "../public/sign language/adjectives",
    false,
    /\.(png|jpe?g|svg|jpg|JPG|gif)$/
  )
  .keys()
  .map((ele) => ele.replace(/\../, ""));
const transport = require
  .context(
    "../public/sign language/transport",
    false,
    /\.(png|jpe?g|svg|jpg|JPG|gif)$/
  )
  .keys()
  .map((ele) => ele.replace(/\../, ""));
const country = require
  .context(
    "../public/sign language/country",
    false,
    /\.(png|jpe?g|svg|jpg|JPG|gif)$/
  )
  .keys()
  .map((ele) => ele.replace(/\../, ""));
const social = require
  .context(
    "../public/sign language/social",
    false,
    /\.(png|jpe?g|svg|jpg|JPG|gif)$/
  )
  .keys()
  .map((ele) => ele.replace(/\../, ""));

const englishObj = getList(english, "english");
const monthsObj = getList(months, "months");
const verbsObj = getList(verbs, "verbs");
const houseObj = getList(house, "house");
const vegetablesObj = getList(vegetables, "vegetables");
const sportObj = getList(sport, "sport");
const greetingsObj = getList(greetings, "greetings");
const scienceObj = getList(science, "science");
const artsObj = getList(arts, "arts");

const computerObj = getList(computer, "computer");
const schoolObj = getList(school, "school");
const relgionObj = getList(relgion, "relgion");
const mathObj = getList(math, "math");
const transportObj = getList(transport, "transport");
const countryObj = getList(country, "country");
const adjectivesObj = getList(adjectives, "adjectives");
const animalsObj = getList(animals, "animals");
const profsObj = getList(profs, "profs");
const socialObj = getList(social, "social");

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

export const categories = [
  {
    ar: "ابجدية اللغة الانكليزية",
    list: englishObj,
    en: "English",
    icon: "/icons/united-kingdom.png",
  },
  {
    ar: "الاشهر والايام والوقت",
    list: monthsObj,
    en: "Months&Days",
    icon: "/icons/month.png",
  },
  {
    ar: "الافعال",
    list: verbsObj,
    en: "Verbs",
    icon: "/icons/action.png",
  },
  {
    ar: "البيت ومحتوياته",
    list: houseObj,
    en: "Home",
    icon: "/icons/house.png",
  },
  {
    ar: "الحيوانات والطيور والحشرات",
    list: animalsObj,
    en: "Animals",
    icon: "/icons/livestock.png",
  },
  {
    ar: "الخضروات",
    list: vegetablesObj,
    en: "Vegetables",
    icon: "/icons/vegetable.png",
  },
  {
    ar: "الرياضة",
    list: sportObj,
    en: "Sport",
    icon: "/icons/sports.png",
  },
  {
    ar: "العلاقات الاجتماعية والتحية والسلام",
    list: greetingsObj,
    en: "Greetings",
    icon: "/icons/greetings.png",
  },
  {
    ar: "العلوم والظواهر الطبيعية",
    list: scienceObj,
    en: "Science",
    icon: "/icons/chemistry.png",
  },
  {
    ar: "الفنون",
    list: artsObj,
    en: "Arts",
    icon: "/icons/palette.png",
  },
  {
    ar: "الكمبيوتر",
    list: computerObj,
    en: "Computer",
    icon: "/icons/ux.png",
  },
  {
    ar: "المدرسة ومستلزماتها",
    list: schoolObj,
    en: "School",
    icon: "/icons/school.png",
  },
  {
    ar: "المهن",
    list: profsObj,
    en: "Jobs",
    icon: "/icons/suitcase.png",
  },
  {
    ar: "ديانة",
    list: relgionObj,
    en: "Religion",
    icon: "/icons/religion.png",
  },
  {
    ar: "رياضيات",
    list: mathObj,
    en: "Math",
    icon: "/icons/think.png",
  },
  {
    ar: "صفات",
    list: adjectivesObj,
    en: "Adjectives",
    icon: "/icons/smiling-face.png",
  },
  {
    ar: "وسائط النقل",
    list: transportObj,
    en: "Transportation",
    icon: "/icons/delivery-truck.png",
  },
  {
    ar: "وطنية",
    list: countryObj,
    en: "Patriotism",
    icon: "/icons/patriot.png",
  },
  {
    ar: "اجتماعيات",
    list: socialObj,
    en: "Social",
    icon: "/icons/social.png",
  },
];

// const fuse = new Fuse(all, {
//   includeScore: true,
//   keys: ["name"],
// });

export default function Home() {
  const [input, setInput] = useState("");
  const [fuse, setFuse] = useState(
    new Fuse(all, {
      includeScore: true,
      keys: ["name"],   
    })
  );
  const [isPending, startTransition] = useTransition();
  const [filterList, setFilterList] = useState(all);
  const [imgsNumber, setImgsNumber] = useState(20);
  const [refine,setRefine] = useState("");
  const handleRefine =(e)=>{
    setInput("")
    if(e.target.innerText === refine){
      setRefine("");
      return;
    }
    setRefine(e.target.innerText);
    
  }
  

  const updateList = (e) => {
   
    setInput(e.target.value);
    startTransition(() => {
      setFilterList(
        fuse.search(e.target.value)
      );
    });
  };

  useEffect(()=>{
    
    const filter = categories.find((ele) => refine === ele.ar);
    setImgsNumber(20);
    if(!filter){
      setFuse(
        new Fuse(all, {
          includeScore: true,
          keys: ["name"],
        })
        ); 
      return;
    }
    setFuse(
      new Fuse(filter.list, {
        includeScore: true,
        keys: ["name"],
      })
      );  
      

  },[refine]);
  return (
    <>
      <nav className="p-4  ">
        <img
          className="sm:h-10 ml-4 h-8  "
          src="/zain-logo.png"
          alt="Zain logo"
        />
      </nav>
      <div className="text-center ">
        <div
          className="w-full bg-cover pt-6 pb-6"
          style={{ backgroundImage: "url(background.jpg)" }}
        >
          <h3 className="text-white text-lg">الكل في مكان واحد</h3>
          <h1 className="text-white text-5xl my-4">
            كل الكلمات التي تستطيع 
            
             <br /> 
             التفكير بها على بعد نقرة واحدة
             
          </h1>
          <h3 className="text-white text-lg">
            تعلم لغة الاشارة مع زين
          </h3>
          <div
            dir="rtl"
            className="my-4  flex justify-center items-center mx-auto"
          >
            <input
              dir="rtl"
              className="bg-white outline-none text-gray-900  px-8 py-4 rounded-full text-2xl w-10/12 md:w-[400px] "
              type="text"
              value={input}
              onChange={updateList}
            />
            <span
              className="bg-purple-600 h-12 w-12 rounded-full inline-flex justify-center items-center
            -mr-14 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </span>
          </div>
        </div>

        <div className="flex justify-center items-center flex-wrap">
          
           
          {categories.map(ele=>(
            <MyLink key={ele.en} title={ele.ar} link={ele.en} svg={ele.icon} />

          ))}
          {/* {categories.map((ele) => (
            <button
              onClick={handleRefine}
              key={ele.list}
              className={` m-4 bg-gray-300 whitespace-nowrap
             p-2 rounded hover:text-white text-sm ${
               refine === ele.ar && "bg-blue-400 text-white"
             }`}
            >
              {ele.ar}
            </button>
          ))} */}
        </div>
        <div className="grid gap-4">
          {input
            ? filterList.slice(0, 5).map((term, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-center items-center p-4"
                >
                  <img
                    src={"/sign language/" + term?.item?.url}
                    alt={term?.item?.name}
                  />
                  <h3 className="text-xl">{term?.item?.name}</h3>
                </div>
              ))
            : null}

          {refine !== "" && input === "" ? (
            <>
              {fuse._docs.slice(0, imgsNumber).map((term, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-center items-center p-4"
                >
                  <img src={"/sign language/" + term?.url} alt={term?.name} />
                  <h3 className="text-xl">{term?.name}</h3>
                </div>
              ))}
              {imgsNumber + 1 >= fuse._docs.length ? null : (
                <button
                  onClick={(e) =>
                    imgsNumber + 10 >= fuse._docs.length
                      ? setImgsNumber(fuse._docs.length - 1)
                      : setImgsNumber((prev) => prev + 10)
                  }
                  className="text-white outline-none p-4 m-4 bg-blue-400"
                >
                  المزيد
                </button>
              )}
            </>
          ) : null}
        </div>
      </div>
    </>
  );
}
