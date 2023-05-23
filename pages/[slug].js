import React from 'react'
import { categories } from '.';

export default function Section({categorie}) {
   
  return (
    <>
      <nav className="p-4  sticky top-0">
        <img
          className="sm:h-10 ml-4 h-8  "
          src="/zain-logo.png"
          alt="Zain logo"
        />
      </nav>
      <div className="flex ">
        <sidebar className="basis-1/4 hidden md:block ">
          <img
            src="background-port.jpg"
            className="hidden h-[calc(100vh-72px)] w-full sticky top-[72px] md:block "
          />
        </sidebar>
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          {categorie.list.map((ele) => {
            return (
              <figure className="mx-auto text-center" key={ele.name}>
                <img
                  className="md:max-w-sm md:h-36  w-full mx-auto"
                  src={"/sign language/" + ele?.url}
                />
                <figcaption className="text-center">{ele.name}</figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </>
  );
}
export async function getStaticPaths() {
    const paths = categories.map(ele=>{
        return {
            params:{slug:ele.en}
        };
    })
  return {
    paths,
    fallback: false // See the "fallback" section below
  };
}

export async function getStaticProps(context) {
    const slug = context.params.slug;
    const categorie = categories.filter(ele=>ele.en===slug)
  return {
    props: {
        categorie:categorie[0]
    }, // will be passed to the page component as props
  };
}