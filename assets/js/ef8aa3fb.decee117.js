"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3907],{5905:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"callbacks/onRoundStart()","title":"<span class=\\"h1style\\">Game Callbacks</span>","description":"Welcome to the documentation for the onRoundStart() function! This guide will help understand the code and its features. This page is verified by: Vedant Kejariwal","source":"@site/docs/callbacks/onRoundStart().md","sourceDirName":"callbacks","slug":"/callbacks/onRoundStart()","permalink":"/MVAh2hDocs/docs/callbacks/onRoundStart()","draft":false,"unlisted":false,"editUrl":"https://github.com/VedantKejariwal/MVAh2hDocs/edit/main/docs/callbacks/onRoundStart().md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_label":"Empirica.onRoundStart()","sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"Empirica.onGameStart()","permalink":"/MVAh2hDocs/docs/callbacks/onGameStart()"},"next":{"title":"Empirica.onStageEnded()","permalink":"/MVAh2hDocs/docs/callbacks/onStageEnded()"}}');var r=s(4848),t=s(8453);const c={sidebar_label:"Empirica.onRoundStart()",sidebar_position:3},l="Game Callbacks",a={},o=[{value:'<span class="h2style">Functions</span>',id:"functions",level:2},{value:'<span class="custom-function-heading">Condition: if (player.get(&quot;changedBrand&quot;).slice(-1)[0] === true)</span>',id:"condition-if-playergetchangedbrandslice-10--true",level:3},{value:"Explanation:",id:"explanation",level:4},{value:'<span class="custom-function-heading">Condition: if (player.get(&quot;role&quot;) === &quot;consumer&quot;)</span>',id:"condition-if-playergetrole--consumer",level:3},{value:"Explanation:",id:"explanation-1",level:4},{value:'<span class="custom-function-heading">Condition: else (for producers)</span>',id:"condition-else-for-producers",level:3},{value:"Explanation:",id:"explanation-2",level:4},{value:'<span class="custom-function-heading">Logical Flow of the Function</span>',id:"logical-flow-of-the-function",level:3}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"game-callbacks",children:(0,r.jsx)("span",{class:"h1style",children:"Game Callbacks"})})}),"\n",(0,r.jsxs)(n.p,{children:["Welcome to the documentation for the ",(0,r.jsx)(n.code,{children:"onRoundStart()"})," function! This guide will help understand the code and its features. This page is verified by: ",(0,r.jsx)(n.em,{children:"Vedant Kejariwal"})]}),"\n",(0,r.jsx)(n.h2,{id:"functions",children:(0,r.jsx)("span",{class:"h2style",children:"Functions"})}),"\n",(0,r.jsx)(n.p,{children:"This is the list of sections that are defined in this function:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#condition-if-playerget%22changedbrand%22slice(1)%5B0%5D-true",children:'Condition: if (player.get("changedBrand").slice(-1)[0] === true)'})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#condition-if-playergetrole--consumer",children:'Condition: if (player.get("role") === "consumer")'})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#condition-else-for-producers",children:"Condition: else (for producers)"})}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"condition-if-playergetchangedbrandslice-10--true",children:(0,r.jsx)("span",{class:"custom-function-heading",children:'Condition: if (player.get("changedBrand").slice(-1)[0] === true)'})}),"\n",(0,r.jsx)(n.h4,{id:"explanation",children:"Explanation:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"This condition checks if the producer chose to change their brand in the previous round."}),"\n",(0,r.jsxs)(n.li,{children:["If ",(0,r.jsx)(n.code,{children:"changedBrand"})," is ",(0,r.jsx)(n.code,{children:"true"}),", it means the producer has decided to reset their brand identity."]}),"\n",(0,r.jsxs)(n.li,{children:["The function assigns a new brand name using ",(0,r.jsx)(n.code,{children:"getRandomName()"}),", ensuring that each producer can operate under a fresh identity when needed."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsxs)(n.strong,{children:["What does ",(0,r.jsx)(n.code,{children:"reviews.push([0, 0]);"})," do?"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The producer\u2019s ",(0,r.jsx)(n.code,{children:"reviews"})," array is updated with ",(0,r.jsx)(n.code,{children:"[0,0]"}),", effectively resetting their reputation in the new round."]}),"\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.code,{children:"[0,0]"})," format represents ",(0,r.jsx)(n.strong,{children:"[positive reviews, negative reviews]"}),", ensuring that previous consumer ratings do not carry over."]}),"\n",(0,r.jsx)(n.li,{children:"This reset is crucial because changing a brand should also reset the market perception of the producer."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"condition-if-playergetrole--consumer",children:(0,r.jsx)("span",{class:"custom-function-heading",children:'Condition: if (player.get("role") === "consumer")'})}),"\n",(0,r.jsx)(n.h4,{id:"explanation-1",children:"Explanation:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["If the player is a consumer, their ",(0,r.jsx)(n.code,{children:"consumerReviews"})," object is reset to an empty state (",(0,r.jsx)(n.code,{children:"{}"}),"), clearing any previous feedback."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsxs)(n.strong,{children:["Why ",(0,r.jsx)(n.code,{children:'player.set("consumerReviews", {});'}),"?"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"This ensures that past purchase experiences do not influence new rounds unfairly."}),"\n",(0,r.jsx)(n.li,{children:"If reviews were not cleared, consumers could be biased towards or against certain producers based on previous interactions."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["The consumer\u2019s ",(0,r.jsx)(n.code,{children:"wallet"})," is increased by ",(0,r.jsx)(n.code,{children:"3 * highQualProdCost"}),", simulating an income or allowance increase at the beginning of the round."]}),"\n",(0,r.jsxs)(n.li,{children:["The function logs the new wallet value using ",(0,r.jsx)(n.code,{children:'console.log("1" + wallet)'}),", which helps track wallet updates during debugging."]}),"\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.code,{children:'player.set("wallet", wallet);'})," statement updates the consumer\u2019s financial state for the new round."]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"condition-else-for-producers",children:(0,r.jsx)("span",{class:"custom-function-heading",children:"Condition: else (for producers)"})}),"\n",(0,r.jsx)(n.h4,{id:"explanation-2",children:"Explanation:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"If the player is not a consumer, they must be a producer."}),"\n",(0,r.jsxs)(n.li,{children:["The producer\u2019s ",(0,r.jsx)(n.code,{children:"capital"})," is increased by ",(0,r.jsx)(n.code,{children:"productPrice"}),", giving them additional funds to operate in the new round. This ensures that producers have increased funds to make strategic choices in the next/upcoming round."]}),"\n",(0,r.jsxs)(n.li,{children:["The update is logged to the console for debugging (",(0,r.jsx)(n.code,{children:"console.log(capital);"}),")."]}),"\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.code,{children:"claims"})," array is reset to ",(0,r.jsx)(n.code,{children:"[0, 0]"}),", ensuring that the producer starts with no pending claims.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsxs)(n.strong,{children:["What does ",(0,r.jsx)(n.code,{children:'player.set("claims", [0, 0]);'})," do?"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"[0,0]"})," represents ",(0,r.jsx)(n.strong,{children:"[successful claims, failed claims]"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"Resetting this ensures fairness, as producers must re-earn trust in every round."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"logical-flow-of-the-function",children:(0,r.jsx)("span",{class:"custom-function-heading",children:"Logical Flow of the Function"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Checks the Game Stage"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The function begins by verifying that the current stage is ",(0,r.jsx)(n.code,{children:'"ProducerChoice"'}),", ensuring that updates occur only when producers are making choices."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Handles Producers Changing Brands"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"If a producer opted to change their brand, their name is reset, and their review history is cleared."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Resets Consumer Attributes"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"If the player is a consumer, their reviews are cleared, and their wallet balance is updated."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Updates Producer Attributes"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"If the player is a producer, their capital is increased, and their claims are reset."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"By structuring the function in this way, it ensures that each round begins with updated player attributes, maintaining fairness and logical consistency in the simulation."}),"\n",(0,r.jsx)(n.hr,{})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>l});var i=s(6540);const r={},t=i.createContext(r);function c(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);