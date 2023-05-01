import React from 'react'
import { categories } from '.';

export default function Section({categorie}) {
    console.log(categorie)
  return (
    <>
      <nav className="p-4  ">
        <img
          className="sm:h-10 ml-4 h-8  "
          src="/zain-logo.png"
          alt="Zain logo"
        />
      </nav>
      <div className="flex  ">
        <sidebar className="basis-1/4">
          <img
            src="background-port.jpg"
            className="h-[calc(100vh-72px)] w-full "
          />
        </sidebar>
        <div>contnet</div>
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