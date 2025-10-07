# Pickleball Pro - Página de Links

Uma página de links moderna e personalizada para a comunidade pickleball, construída com React, Tailwind CSS e Google Analytics.

## 🚀 Características

- **Tema Pickleball**: Design específico para atletas e entusiastas do pickleball
- **Perfil de Atleta**: Seção personalizada com estatísticas e conquistas
- **Links Específicos**: Aulas, tutoriais, equipamentos e comunidade
- **Google Analytics**: Rastreamento completo de cliques e visualizações
- **Responsivo**: Funciona perfeitamente em desktop e mobile
- **Animações Suaves**: Transições e efeitos visuais elegantes
- **Performance**: Construído com Vite para carregamento rápido

## 🛠️ Tecnologias Utilizadas

- **React 18** - Biblioteca de interface de usuário
- **Tailwind CSS** - Framework CSS utilitário
- **Vite** - Build tool moderna e rápida
- **React GA4** - Integração com Google Analytics
- **PostCSS** - Processamento de CSS

## 📦 Instalação

1. Clone o repositório:
```bash
git clone <seu-repositorio>
cd landingPagePickle
```

2. Instale as dependências:
```bash
npm install
```

3. Configure o Google Analytics:
   - Abra `src/App.jsx`
   - Substitua `'G-XXXXXXXXXX'` pelo seu ID do Google Analytics
   - Exemplo: `initGA('G-ABC123DEF4')`

4. Personalize sua página:
   - Edite `src/components/Profile.jsx` para suas informações de atleta
   - Modifique `src/components/Links.jsx` para seus links de pickleball
   - Ajuste cores em `tailwind.config.js` (tema verde/azul/amarelo)

5. Execute o projeto:
```bash
npm run dev
```

## 🎨 Personalização

### Perfil
Edite o arquivo `src/components/Profile.jsx`:
- Nome
- Descrição/Bio
- Avatar (atualmente usando inicial)

### Links
Modifique `src/components/Links.jsx`:
- Adicione/remova links
- Altere títulos e descrições
- Personalize ícones e cores

### Cores
Ajuste `tailwind.config.js` para personalizar:
- Cores primárias e secundárias
- Gradientes
- Tema geral

### Google Analytics
Configure em `src/utils/analytics.js`:
- Adicione seu ID de rastreamento
- Personalize eventos de rastreamento

## 📱 Responsividade

A página é totalmente responsiva e se adapta a:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (até 767px)

## 🚀 Deploy

### Vercel
```bash
npm run build
# Faça upload da pasta 'dist' para Vercel
```

### Netlify
```bash
npm run build
# Conecte seu repositório ao Netlify
```

### GitHub Pages
```bash
npm run build
# Configure GitHub Actions para deploy automático
```

## 📊 Analytics

O projeto inclui rastreamento completo:
- Visualizações de página
- Cliques em links
- Eventos personalizados
- Dados demográficos (se configurado)

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.


