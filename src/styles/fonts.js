import { Inter as Font1 } from "next/font/google";
// import localFont from "next/font/local";

const font1 = Font1({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-primary",
});

// const sunsive = localFont({
//   src: [
//     {
//       path: "../../public/fonts/sunsive-medium.woff",
//       weight: "500",
//       style: "normal",
//     },
//   ],
//   variable: "--font-sunsive",
// });

export const FONTS = {
  font1: font1.className,
};

// export const FONT_VARIABLES = "${font1.variable} ${sunsive.variable}";

export default FONTS;
