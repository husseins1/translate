import { Html, Head, Main, NextScript } from "next/document";
import { useEffect } from "react";

export default function Document() {
    useEffect(()=>{
        {
        //   (function (d) {
        //     var s = d.createElement("script");
        //     /* uncomment the following line to override default position*/
        //     /* s.setAttribute("data-position", 1);*/
        //     /* uncomment the following line to override default size (values: small, large)*/
        //     /* s.setAttribute("data-size", "large");*/
        //     /* uncomment the following line to override default language (e.g., fr, de, es, he, nl, etc.)*/
        //     /* s.setAttribute("data-language", "null");*/
        //     /* uncomment the following line to override color set via widget (e.g., #053f67)*/
        //     /* s.setAttribute("data-color", "#2d68ff");*/
        //     /* uncomment the following line to override type set via widget (1=person, 2=chair, 3=eye, 4=text)*/
        //     /* s.setAttribute("data-type", "1");*/
        //     /* s.setAttribute("data-statement_text:", "Our Accessibility Statement");*/
        //     /* s.setAttribute("data-statement_url", "http://www.example.com/accessibility";*/
        //     /* uncomment the following line to override support on mobile devices*/
        //     /* s.setAttribute("data-mobile", true);*/
        //     /* uncomment the following line to set custom trigger action for accessibility menu*/
        //     /* s.setAttribute("data-trigger", "triggerId")*/
        //     s.setAttribute("data-account", "wUaROs0KEe");
        //     s.setAttribute("src", "https://cdn.userway.org/widget.js");
        //     (d.body || d.head).appendChild(s);
        //   })(document);
        (function () {
          var s = document.createElement("script");
          s.setAttribute("data-account", "wUaROs0KEe");
          s.setAttribute("src", "https://cdn.userway.org/widget.js");
          document.body.appendChild(s);
        })();
        }
    },[])
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
