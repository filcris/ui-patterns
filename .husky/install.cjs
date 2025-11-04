/**
 * Cross-platform Husky installer:
 * - Local (com .git): corre "npx husky install"
 * - CI / sem .git: ignora para evitar erros
 */
const { existsSync } = require("fs");
const { execSync } = require("child_process");

const hasGit = existsSync(".git");
const isCI = !!process.env.CI;

if (!hasGit || isCI) {
  console.log("🟡 Husky skipped (no .git or CI detected)");
  process.exit(0);
}

try {
  execSync("npx husky install", { stdio: "inherit" });
  console.log("✅ Husky installed");
} catch (e) {
  console.log("⚠️  Husky install skipped:", e?.message || e);
  process.exit(0);
}
