# # 🚀 Space Predictive Analytics
### Global Solution 2026.1 — Cross-Platform Application Development | FIAP

---

## Descrição

Space Predictive Analytics é uma plataforma mobile inteligente de monitoramento de sistemas espaciais, desenvolvida em React Native + Expo. O app simula o monitoramento em tempo real de uma missão orbital, coletando e exibindo dados de sensores, energia e comunicação. O diferencial da solução está na geração automática de alertas baseados em limiares configuráveis pelo usuário, persistidos com AsyncStorage, e na arquitetura modular com Context API que garante consistência de estado em todas as telas.

---

## 👥 Equipe

| Nome | RM |
|------|----|
| Leonardo Luster Gomes | RM564448 |
| Raphael Talarico Nascimento Silva | RM565219 |

---

## 📱 Telas do Aplicativo

### Home — Dashboard Principal
![MISSÕES](file:///C:/Users/twitc/OneDrive/Imagens/Screenshots/Captura%20de%20tela%202026-06-09%20230650.png)
Visão geral dos indicadores da missão: energia, temperatura, sinal, estabilidade orbital e acesso rápido a alertas e configurações.

### Dashboard de Sensores
![Sensores](./assets/screenshots/sensores.png)

Gráficos de linha com leituras em tempo real simulado de temperatura, radiação, pressão atmosférica e umidade.

### Dashboard de Energia
![ENERGIA](file:///C:/Users/twitc/OneDrive/Imagens/Screenshots/Captura%20de%20tela%202026-06-09%20230703.png)

Indicadores de carga da bateria, output dos painéis solares, consumo dos sistemas e balanço de energia.

### Alertas
![Alertas](./assets/screenshots/alertas.png)

Lista de alertas ativos gerados automaticamente com nível de criticidade (critical/warning/info), confirmação individual e limpeza em massa.

### Configurações
![Config](./assets/screenshots/configuracoes.png)

Formulário de configuração dos limiares de alerta com validação de inputs, feedback de erro e persistência com AsyncStorage.

---

## ✅ Funcionalidades

- [x] Dashboard principal com indicadores em tempo real (simulado)
- [x] Dashboard de sensores com sparklines (temperatura, radiação, pressão, umidade)
- [x] Dashboard de energia com balanço solar/consumo/bateria
- [x] Sistema de alertas automáticos por limiar crítico
- [x] Tela de alertas com acknowledge individual e em massa
- [x] Persistência de configurações com AsyncStorage
- [x] Navegação com Expo Router (Tabs + Stack/Modal)
- [x] Context API + useReducer para estado global da missão
- [x] Formulário de configuração com validação completa
- [x] TypeScript em todo o projeto
- [x] Identidade visual espacial (dark mode, cyan accent, SpaceMono font)

---

## 🛠 Tecnologias

- React Native + Expo ~51
- Expo Router ~3.5
- AsyncStorage 1.23
- Context API + useReducer
- TypeScript ~5.3
- react-native-svg 15.2
- @expo/vector-icons 14
- expo-font (SpaceMono)

---

## ▶ Como Executar

### Pré-requisitos
- Node.js 18+
- Expo CLI: `npm install -g expo-cli`
- Expo Go no celular (iOS ou Android)

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/spacepredictiveanalytics.git

# Acesse a pasta
cd spacepredictiveanalytics

# Instale as dependências
npm install

# Inicie o projeto
npx expo start
```

Escaneie o QR Code com o Expo Go para rodar no dispositivo físico.

---

## 🎬 Vídeo de Demonstração

[Clique aqui para assistir à demonstração](https://youtube.com/...)

---

## 📄 Licença

Este projeto foi desenvolvido para fins acadêmicos — FIAP 2026.
