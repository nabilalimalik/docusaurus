"use strict";(self.webpackChunkrocktop=self.webpackChunkrocktop||[]).push([[786],{786:(t,e,a)=>{a.d(e,{diagram:()=>g});var r=a(5815),i=a(9373),n=a(2494),d=a(5625),o=a(1011),s=a(2587);a(7484),a(7967),a(7856);let l={};const p=function(t){const e=Object.entries(l).find((e=>e[1].label===t));if(e)return e[0]},c={draw:function(t,e,a,r){const c=(0,o.c)().class;l={},o.l.info("Rendering diagram "+t);const g=(0,o.c)().securityLevel;let h;"sandbox"===g&&(h=(0,i.Ys)("#i"+e));const f="sandbox"===g?(0,i.Ys)(h.nodes()[0].contentDocument.body):(0,i.Ys)("body"),u=f.select(`[id='${e}']`);var x;(x=u).append("defs").append("marker").attr("id","extensionStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 1,7 L18,13 V 1 Z"),x.append("defs").append("marker").attr("id","extensionEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 1,1 V 13 L18,7 Z"),x.append("defs").append("marker").attr("id","compositionStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),x.append("defs").append("marker").attr("id","compositionEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),x.append("defs").append("marker").attr("id","aggregationStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),x.append("defs").append("marker").attr("id","aggregationEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),x.append("defs").append("marker").attr("id","dependencyStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 5,7 L9,13 L1,7 L9,1 Z"),x.append("defs").append("marker").attr("id","dependencyEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L14,7 L9,1 Z");const y=new d.k({multigraph:!0});y.setGraph({isMultiGraph:!0}),y.setDefaultEdgeLabel((function(){return{}}));const b=r.db.getClasses(),m=Object.keys(b);for(const i of m){const t=b[i],e=s.s.drawClass(u,t,c,r);l[e.id]=e,y.setNode(e.id,e),o.l.info("Org height: "+e.height)}r.db.getRelations().forEach((function(t){o.l.info("tjoho"+p(t.id1)+p(t.id2)+JSON.stringify(t)),y.setEdge(p(t.id1),p(t.id2),{relation:t},t.title||"DEFAULT")}));r.db.getNotes().forEach((function(t){o.l.debug(`Adding note: ${JSON.stringify(t)}`);const e=s.s.drawNote(u,t,c,r);l[e.id]=e,y.setNode(e.id,e),t.class&&t.class in b&&y.setEdge(t.id,p(t.class),{relation:{id1:t.id,id2:t.class,relation:{type1:"none",type2:"none",lineType:10}}},"DEFAULT")})),(0,n.bK)(y),y.nodes().forEach((function(t){void 0!==t&&void 0!==y.node(t)&&(o.l.debug("Node "+t+": "+JSON.stringify(y.node(t))),f.select("#"+(r.db.lookUpDomId(t)||t)).attr("transform","translate("+(y.node(t).x-y.node(t).width/2)+","+(y.node(t).y-y.node(t).height/2)+" )"))})),y.edges().forEach((function(t){void 0!==t&&void 0!==y.edge(t)&&(o.l.debug("Edge "+t.v+" -> "+t.w+": "+JSON.stringify(y.edge(t))),s.s.drawEdge(u,y.edge(t),y.edge(t).relation,c,r))}));const w=u.node().getBBox(),k=w.width+40,E=w.height+40;(0,o.i)(u,E,k,c.useMaxWidth);const L=`${w.x-20} ${w.y-20} ${k} ${E}`;o.l.debug(`viewBox ${L}`),u.attr("viewBox",L)}},g={parser:r.p,db:r.d,renderer:c,styles:r.s,init:t=>{t.class||(t.class={}),t.class.arrowMarkerAbsolute=t.arrowMarkerAbsolute,r.d.clear()}}},2587:(t,e,a)=>{a.d(e,{p:()=>o,s:()=>p});var r=a(9373),i=a(1011);let n=0;const d=function(t){let e=t.id;return t.type&&(e+="<"+t.type+">"),e},o=function(t){let e="",a="",r="",n="",d=t.substring(0,1),o=t.substring(t.length-1,t.length);d.match(/[#+~-]/)&&(n=d);let s=/[\s\w)~]/;o.match(s)||(a=l(o));const p=""===n?0:1;let c=""===a?t.length:t.length-1;const g=(t=t.substring(p,c)).indexOf("("),h=t.indexOf(")");if(g>1&&h>g&&h<=t.length){let d=t.substring(0,g).trim();const o=t.substring(g+1,h);if(e=n+d+"("+(0,i.x)(o.trim())+")",h<t.length){let n=t.substring(h+1,h+2);""!==a||n.match(s)?r=t.substring(h+1).trim():(a=l(n),r=t.substring(h+2).trim()),""!==r&&(":"===r.charAt(0)&&(r=r.substring(1).trim()),r=" : "+(0,i.x)(r),e+=r)}}else e=n+(0,i.x)(t);return{displayText:e,cssStyle:a}},s=function(t,e,a,r){let i=o(e);const n=t.append("tspan").attr("x",r.padding).text(i.displayText);""!==i.cssStyle&&n.attr("style",i.cssStyle),a||n.attr("dy",r.textHeight)},l=function(t){switch(t){case"*":return"font-style:italic;";case"$":return"text-decoration:underline;";default:return""}},p={getClassTitleString:d,drawClass:function(t,e,a,r){i.l.debug("Rendering class ",e,a);const n=e.id,o={id:n,label:e.id,width:0,height:0},l=t.append("g").attr("id",r.db.lookUpDomId(n)).attr("class","classGroup");let p;p=e.link?l.append("svg:a").attr("xlink:href",e.link).attr("target",e.linkTarget).append("text").attr("y",a.textHeight+a.padding).attr("x",0):l.append("text").attr("y",a.textHeight+a.padding).attr("x",0);let c=!0;e.annotations.forEach((function(t){const e=p.append("tspan").text("\xab"+t+"\xbb");c||e.attr("dy",a.textHeight),c=!1}));let g=d(e);const h=p.append("tspan").text(g).attr("class","title");c||h.attr("dy",a.textHeight);const f=p.node().getBBox().height,u=l.append("line").attr("x1",0).attr("y1",a.padding+f+a.dividerMargin/2).attr("y2",a.padding+f+a.dividerMargin/2),x=l.append("text").attr("x",a.padding).attr("y",f+a.dividerMargin+a.textHeight).attr("fill","white").attr("class","classText");c=!0,e.members.forEach((function(t){s(x,t,c,a),c=!1}));const y=x.node().getBBox(),b=l.append("line").attr("x1",0).attr("y1",a.padding+f+a.dividerMargin+y.height).attr("y2",a.padding+f+a.dividerMargin+y.height),m=l.append("text").attr("x",a.padding).attr("y",f+2*a.dividerMargin+y.height+a.textHeight).attr("fill","white").attr("class","classText");c=!0,e.methods.forEach((function(t){s(m,t,c,a),c=!1}));const w=l.node().getBBox();var k=" ";e.cssClasses.length>0&&(k+=e.cssClasses.join(" "));const E=l.insert("rect",":first-child").attr("x",0).attr("y",0).attr("width",w.width+2*a.padding).attr("height",w.height+a.padding+.5*a.dividerMargin).attr("class",k).node().getBBox().width;return p.node().childNodes.forEach((function(t){t.setAttribute("x",(E-t.getBBox().width)/2)})),e.tooltip&&p.insert("title").text(e.tooltip),u.attr("x2",E),b.attr("x2",E),o.width=E,o.height=w.height+a.padding+.5*a.dividerMargin,o},drawEdge:function(t,e,a,d,o){const s=function(t){switch(t){case o.db.relationType.AGGREGATION:return"aggregation";case o.db.relationType.EXTENSION:return"extension";case o.db.relationType.COMPOSITION:return"composition";case o.db.relationType.DEPENDENCY:return"dependency";case o.db.relationType.LOLLIPOP:return"lollipop"}};e.points=e.points.filter((t=>!Number.isNaN(t.y)));const l=e.points,p=(0,r.jvg)().x((function(t){return t.x})).y((function(t){return t.y})).curve(r.$0Z),c=t.append("path").attr("d",p(l)).attr("id","edge"+n).attr("class","relation");let g,h,f="";d.arrowMarkerAbsolute&&(f=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search,f=f.replace(/\(/g,"\\("),f=f.replace(/\)/g,"\\)")),1==a.relation.lineType&&c.attr("class","relation dashed-line"),10==a.relation.lineType&&c.attr("class","relation dotted-line"),"none"!==a.relation.type1&&c.attr("marker-start","url("+f+"#"+s(a.relation.type1)+"Start)"),"none"!==a.relation.type2&&c.attr("marker-end","url("+f+"#"+s(a.relation.type2)+"End)");const u=e.points.length;let x,y,b,m,w=i.u.calcLabelPosition(e.points);if(g=w.x,h=w.y,u%2!=0&&u>1){let t=i.u.calcCardinalityPosition("none"!==a.relation.type1,e.points,e.points[0]),r=i.u.calcCardinalityPosition("none"!==a.relation.type2,e.points,e.points[u-1]);i.l.debug("cardinality_1_point "+JSON.stringify(t)),i.l.debug("cardinality_2_point "+JSON.stringify(r)),x=t.x,y=t.y,b=r.x,m=r.y}if(void 0!==a.title){const e=t.append("g").attr("class","classLabel"),r=e.append("text").attr("class","label").attr("x",g).attr("y",h).attr("fill","red").attr("text-anchor","middle").text(a.title);window.label=r;const i=r.node().getBBox();e.insert("rect",":first-child").attr("class","box").attr("x",i.x-d.padding/2).attr("y",i.y-d.padding/2).attr("width",i.width+d.padding).attr("height",i.height+d.padding)}if(i.l.info("Rendering relation "+JSON.stringify(a)),void 0!==a.relationTitle1&&"none"!==a.relationTitle1){t.append("g").attr("class","cardinality").append("text").attr("class","type1").attr("x",x).attr("y",y).attr("fill","black").attr("font-size","6").text(a.relationTitle1)}if(void 0!==a.relationTitle2&&"none"!==a.relationTitle2){t.append("g").attr("class","cardinality").append("text").attr("class","type2").attr("x",b).attr("y",m).attr("fill","black").attr("font-size","6").text(a.relationTitle2)}n++},drawNote:function(t,e,a,r){i.l.debug("Rendering note ",e,a);const n=e.id,d={id:n,text:e.text,width:0,height:0},o=t.append("g").attr("id",n).attr("class","classGroup");let s=o.append("text").attr("y",a.textHeight+a.padding).attr("x",0);const l=JSON.parse(`"${e.text}"`).split("\n");l.forEach((function(t){i.l.debug(`Adding line: ${t}`),s.append("tspan").text(t).attr("class","title").attr("dy",a.textHeight)}));const p=o.node().getBBox(),c=o.insert("rect",":first-child").attr("x",0).attr("y",0).attr("width",p.width+2*a.padding).attr("height",p.height+l.length*a.textHeight+a.padding+.5*a.dividerMargin).node().getBBox().width;return s.node().childNodes.forEach((function(t){t.setAttribute("x",(c-t.getBBox().width)/2)})),d.width=c,d.height=p.height+l.length*a.textHeight+a.padding+.5*a.dividerMargin,d},parseMember:o}}}]);