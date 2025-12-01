const fetch = require("node-fetch");
const fs = require("fs");

const USER = "manjeetsingh78";

const urls = {
  stats: `https://api.github.com/users/${USER}`,
  repos: `https://api.github.com/users/${USER}/repos`
};

const headers = {
  Authorization: `token ${process.env.GITHUB_TOKEN}`,
  "User-Agent": "github-stats-engine"
};

async function run() {
  const userRes = await fetch(urls.stats, { headers });
  const user = await userRes.json();

  const svg = `
<svg width="420" height="160" xmlns="http://www.w3.org/2000/svg">
  <style>
    .t { font: 14px sans-serif; fill: #c9d1d9 }
    .h { font: 18px sans-serif; fill: #58a6ff }
  </style>
  <rect width="420" height="160" rx="14" fill="#0d1117" />
  <text x="20" y="35" class="h">GitHub Stats</text>
  <text x="20" y="65" class="t">👤 User: ${user.login}</text>
  <text x="20" y="90" class="t">📦 Public Repos: ${user.public_repos}</text>
  <text x="20" y="115" class="t">👥 Followers: ${user.followers}</text>
  <text x="20" y="140" class="t">⏱ Updated: ${new Date().toLocaleString()}</text>
</svg>`;

  fs.mkdirSync("api", { recursive: true });
  fs.writeFileSync("api/stats.svg", svg);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
