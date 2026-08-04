const fs = require('fs');

let content = fs.readFileSync('src/constants.ts', 'utf8');

// Replacements
content = content.replace(
  /"title": "Webflow Full Course",\s*"url": "https:\/\/youtube\.com\/playlist\?list=PLXC_gcsKLD6nseaESleQemeJn6SG0-Xbn&si=m3ah491WldZVEr5s"/,
  `"title": "Webflow Video",
        "url": "https://youtu.be/RXdH2H01P88?si=EJYQ7bJsj35xUsTb"`
);

content = content.replace(
  /"title": "Webflow Full Course - Beginner to Advanced",\s*"url": "https:\/\/www\.youtube\.com\/playlist\?list=PLPmnoMVpkxfjLSp4HaI0RMp3jhs5-STFF"/,
  `"title": "Webflow Full Course",
        "url": "https://youtu.be/1EvoteyU6PA?si=Bvl7qgWI6jM0BFLO"`
);

content = content.replace(
  /"title": "Google Firebase Studio",\s*"url": "https:\/\/youtu\.be\/Rd6F5wHIysM\?si=J8wzrurtIOakI48w"/,
  `"title": "Google AI Studio",
        "url": "https://youtu.be/PsE9u37gJjU?si=Od6EiJTrlICD4Y_m"`
);

content = content.replace(
  /"title": "Google Gems",\s*"url": "https:\/\/youtu\.be\/UYGOEdlyN3Y\?si=77uGe__0Tim0aaaK"/,
  `"title": "Google Code Wiki",
        "url": "https://youtu.be/osb_mt3ne70?si=I61buw0pQdoVndWd"`
);

content = content.replace(
  /"title": "Multi-agent collaboration",\s*"url": "https:\/\/youtu\.be\/mKqtjV1ZEJ8\?si=sUAiDVukMN7dqVXR"/,
  `"title": "Multi-Agent Collaboration",
        "url": "https://youtu.be/X3XJeTApVMM?si=n63Awybgx9ni13fj"`
);

fs.writeFileSync('src/constants.ts', content, 'utf8');
console.log("Replacements done");
