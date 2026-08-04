const fs = require('fs');
let content = fs.readFileSync('src/constants.ts', 'utf8');

function injectResources(phaseNumber, resourcesArray) {
    const regex = new RegExp(`("number": "\\s*${phaseNumber}\\s*",[\\s\\S]*?"resources": \\[)([\\s\\S]*?)(\\]\\s*,)`);
    content = content.replace(regex, (match, p1, p2, p3) => {
        let newResources = resourcesArray.map(r => `\n      {\n        "title": "${r.title}",\n        "url": "${r.url}",\n        "type": "yt"\n      }`).join(',');
        // If there's already items, append with comma
        if (p2.trim() !== "") {
            newResources = ',' + newResources;
        }
        return p1 + p2 + newResources + '\n    ' + p3;
    });
}

const phase00 = [
    { title: "CLI Mastery: Command Prompt & PowerShell", url: "https://www.youtube.com/watch?v=ueKFupiT2wA" },
    { title: "Modern SDLC & Agile AI Development", url: "https://www.youtube.com/watch?v=P1mbqnACR0M" },
    { title: "Technical Writing for Developers", url: "https://www.youtube.com/watch?v=vT5pcc30Ffw" },
    { title: "System Documentation & Technical Specs Engineering", url: "https://www.youtube.com/watch?v=nypgQn7sMY8" },
    { title: "AI-Enhanced Market & Product Research", url: "https://www.youtube.com/watch?v=wGuRuuPuYNQ" },
    { title: "Neural Architectures & AI Brain Design", url: "https://www.youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ" }
];

const phase2_5 = [
    { title: "Google Antigravity: Advanced AI Workflows", url: "https://www.youtube.com/watch?v=BeRnLV8EZJs" },
    { title: "OPENCODE FULLCOURSE", url: "https://youtu.be/uZGDO0L-Dr4?si=ab2ZammaQWdAiX8A" },
    { title: "KIMICODE FULL COURSE", url: "https://youtu.be/iyXDidb8IG8?si=ECCHhOnjO1p2rNe-" }
];

const phase04 = [
    { title: "Automated Data Extraction & Web Scraping", url: "https://www.youtube.com/watch?v=RKsLLG-bzEY" },
    { title: "Shell Scripting & Regular Expressions", url: "https://www.youtube.com/watch?v=mSQM8Xo78Wc" }
];

const phase05 = [
    { title: "MCP & Tool Integration", url: "https://www.youtube.com/watch?v=5xqFjh56AwM" },
    { title: "Simulating Autonomous Agentic Workflows", url: "https://www.youtube.com/watch?v=uXVLyJJLEKA" },
    { title: "Engineering Agentic Pipelines", url: "https://www.youtube.com/watch?v=eooxQPZQUEM" }
];

const phase09 = [
    { title: "Relational Databases & SQL Scripting", url: "https://www.youtube.com/watch?v=SpfIwlAYaKk" },
    { title: "Architecting AI-Integrated Backends", url: "https://www.youtube.com/watch?v=F5ZsLbBqWLU" }
];

const phase10 = [
    { title: "Monetization & Payment Gateway Integration", url: "https://www.youtube.com/watch?v=_YCC9Osq6y4" }
];

const phase12 = [
    { title: "Cross-Platform AI Mobile Development", url: "https://www.youtube.com/watch?v=VPvVD8t02U8" }
];

injectResources("00", phase00);
injectResources("2.5", phase2_5);
injectResources("04", phase04);
injectResources("05", phase05);
injectResources("09", phase09);
injectResources("10", phase10);
injectResources("12", phase12);

fs.writeFileSync('src/constants.ts', content, 'utf8');
console.log("Additions done");
