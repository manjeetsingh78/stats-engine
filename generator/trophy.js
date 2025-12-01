import fs from "fs";

const svg = `
<svg width="600" height="140" xmlns="http://www.w3.org/2000/svg">
  <style>.t{font:16px sans-serif;fill:#fff}</style>
  <rect width="600" height="140" rx="18" fill="#0d1117"/>
  <text x="40" y="50" class="t">🏆 Open Source Contributor</text>
  <text x="40" y="90" class="t">🔥 Active Developer</text>
  <text x="40" y="130" class="t">🚀 DevOps Engineer</text>
</svg>
`;

fs.writeFileSync("api/trophy.svg", svg);
