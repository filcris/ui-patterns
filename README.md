# ui-patterns

![CI](https://github.com/filcris/ui-patterns/actions/workflows/ci.yml/badge.svg)
![Coverage](./coverage-badge.svg)
[![GitHub Pages](https://img.shields.io/github/deployments/filcris/ui-patterns/github-pages?label=storybook%20pages&logo=github)](https://filcris.github.io/ui-patterns/)

Coleção de componentes React com Storybook, testes (Vitest), linting (ESLint + Prettier) e CI/CD no GitHub Actions.

---

## 🔧 Stack
- React + Vite  
- Storybook 8  
- Testing Library + Vitest (coverage)  
- ESLint + Prettier + Husky + lint-staged  
- CI: build, lint, typecheck, testes, Storybook build  
- Deploy Storybook: GitHub Pages  

---

## ▶ Desenvolvimento

```bash
npm run dev
npm run storybook
✅ Qualidade
bash
Copiar código
npm run lint
npm run typecheck
npm run test
npm run test:ci    # com coverage
📦 Build
bash
Copiar código
npm run build
npm run build-storybook
🚀 Storybook (GitHub Pages)
Live: https://filcris.github.io/ui-patterns/

O CI publica automaticamente a pasta storybook-static em cada push para main.

🧪 Cobertura
O badge de cobertura (coverage-badge.svg) é atualizado pelo CI a partir do ficheiro coverage/coverage-summary.json.

📝 Licença
MIT © Cristina

yaml
Copiar código
