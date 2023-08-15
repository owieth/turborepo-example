import { jsx, jsxs } from 'react/jsx-runtime';

var a=({title:t,cta:n,href:o})=>jsx("a",{target:"_blank",rel:"noopener noreferrer",href:o,className:"group mt-4 rounded-lg border border-transparent overflow-hidden bg-origin-border bg-gradient-to-r from-brandred to-brandblue text-[#6b7280]",children:jsxs("div",{className:"p-4 bg-zinc-900 h-full",children:[jsx("p",{className:"inline-block text-xl text-white",children:t}),jsxs("div",{className:"text-xs mt-4 group-hover:underline",children:[n," \u2192"]})]})});

export { a };
