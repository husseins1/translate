import { useEffect, useState } from "react";
import { useTransition } from "react";
import Fuse from "fuse.js";

const getList = (paths, folderName) => {
  
  return paths.map(
    (ele) =>
      ({
       name: ele.replace(/\.(png|jpe?g|svg|jpg|JPG)$/, ""),

      url: `${folderName}/${ele}`})
  );
};


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

const categories = [
  {
    ar: "ابجدية اللغة الانكليزية",
    list: englishObj,
  },
  {
    ar: "الاشهر والايام والوقت",
    list: monthsObj,
  },
  {
    ar: "الافعال",
    list: verbsObj,
  },
  {
    ar: "البيت ومحتوياته",
    list: houseObj,
  },
  {
    ar: "الحيوانات والطيور والحشرات",
    list: animalsObj,
  },
  {
    ar: "الخضروات",
    list: vegetablesObj,
  },
  {
    ar: "الرياضة",
    list: sportObj,
  },
  {
    ar: "العلاقات الاجتماعية والتحية والسلام",
    list: greetingsObj,
  },
  {
    ar: "العلوم والظواهر الطبيعية",
    list: scienceObj,
  },
  {
    ar: "الفنون",
    list: artsObj,
  },
  {
    ar: "الكمبيوتر",
    list: computerObj,
  },
  {
    ar: "المدرسة ومستلزماتها",
    list: schoolObj,
  },
  {
    ar: "المهن",
    list: profsObj,
  },
  {
    ar: "ديانة",
    list: relgionObj,
  },
  {
    ar: "رياضيات",
    list: mathObj,
  },
  {
    ar: "صفات",
    list: adjectivesObj,
  },
  {
    ar: "وسائط النقل",
    list: transportObj,
  },
  {
    ar: "وطنية",
    list: countryObj,
  },
  {
    ar: "اجتماعيات",
    list: socialObj,
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
    <div className="container text-center mx-auto">
      <h2 className="mt-8 text-3xl">اكتب ما تبحث عنه</h2>
      <div dir="rtl" className="my-4  flex justify-center items-center mx-auto">
        <input
          dir="rtl"
          className="bg-gray-300 outline-none text-gray-900  px-8 py-4 rounded-md text-2xl w-10/12 md:w-auto "
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
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <div className="flex justify-center items-center flex-wrap">
        {categories.map((ele) => (
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
        ))}
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

        { refine !=="" && input===""?(<>
        
        
          {fuse._docs.slice(0,imgsNumber).map((term, index) => (
              
              <div
                 key={index}
                 className="flex flex-col justify-center items-center p-4"
                 >
                 <img
                   src={"/sign language/" + term?.url}
                   alt={term?.name}
                   />
                 <h3 className="text-xl">{term?.name}</h3>
               </div>
 
 ))}
        
 <button onClick={(e)=>(setImgsNumber(prev=>prev+10))} className="text-white outline-none p-4 m-4 bg-blue-400">المزيد</button>
 
        
        </>)
            
            :null}
      </div>
    </div>
  );
}
