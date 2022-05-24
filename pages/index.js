import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import { useTransition } from "react";

const terms = [
  'ابتسم',
  'احترم',
  'اخذ',
  'اعتنى',
  'اعطى',
  'انتبه',
  'تذكر',
  'راى',
  'فكر',
  'نظر',
];

export default function Home() {
  const [input, setInput] = useState("");
  const [isPending, startTransition] = useTransition();
  const [filterList, setFilterList] = useState([]);
  const updateList = (e)=>{
    setInput(e.target.value);
    startTransition(()=>{
      setFilterList(
        terms.filter((term) => term.indexOf(e.target.value) > -1)
          )
     
    })
  }
  return (
    <div className="container text-center">
      <h2 className="mt-8 text-3xl font-medium">
        {"Write down what you want to translate".toUpperCase()}
      </h2>

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
        {
          input
            ? filterList
                .map((term) => (
                  <div className="flex flex-col justify-center items-center p-4">
                    <img src={term + ".JPG"} alt={term} />
                    <h3 className="text-xl">{term}</h3>
                    {console.log(isPending)}
                  </div>
                ))
            : null
        }
      </div>
    </div>
  );
}
