import fetch from "node-fetch";
import fs from "fs";

const USER = "manjeetsingh78";

const urls = {
  stats: `https://api.github.com/users/${USER}`,
  repos: `https://api.github.com/users/${USER}/repos`
};

const headers = {
  Authorization: `token ${process.env.GITHUB_TOKEN}`
};

async function run() {
  const user = await fetch(urls.stats, { headers }).then(res => res.json());
  const repos = await fetch(urls.repos, { headers }).then(res => res.json());

  const svg = `
  <svg width="400" height="160" xmlns="http://www.w3.org/2000/svg">
    <style>.t{font:14px sans-serif;fill:white}</style>
    <rect width="400" height="160" rx="15" fill="#0d1117"/>
    <text x="20" y="40" class="t">⭐ Stars: ${user.public_repos}</text>
    <text x="20" y="70" class="t">👥 Followers: ${user.followers}</text>
    <text x="20" y="100" class="t">📦 Repos: ${user.public_repos}</text>
    <text x="20" y="130" class="t">🔥 Updated: ${new Date().toLocaleString()}</text>
  </svg>`;

  fs.writeFileSync("api/stats.svg", svg);
}

run();
