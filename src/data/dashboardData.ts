export interface JavaScriptDomain {
  id: string;
  titleKm: string;
  titleEn: string;
  badge: string;
  badgeColor: string;
  iconName: string;
  taglineKm: string;
  descriptionKm: string;
  marketShare: string;
  enterpriseExamples: string[];
  keyLibraries: string[];
  codeSample: {
    title: string;
    filename: string;
    language: 'javascript' | 'html';
    code: string;
    explanationKm: string;
  };
}

export interface ArchitectureMechanic {
  id: string;
  titleKm: string;
  titleEn: string;
  badge: string;
  badgeVariant: 'primary' | 'success' | 'info' | 'warning' | 'secondary' | 'danger';
  summaryKm: string;
  detailsKm: string[];
  codeTip: string;
}

export interface UsageQuizQuestion {
  id: number;
  questionKm: string;
  scenarioKm: string;
  options: string[];
  correctIndex: number;
  explanationKm: string;
}

export const javascriptDomains: JavaScriptDomain[] = [
  {
    id: 'frontend',
    titleKm: 'Front-End Web Development (អន្តរកម្ម & UI លើគេហទំព័រ)',
    titleEn: 'Client-Side Web & Interactive UI',
    badge: '98.9% នៃគេហទំព័រទូទាំងពិភពលោក',
    badgeColor: 'badge-primary',
    iconName: 'Globe',
    taglineKm: 'ភាសាតែមួយគត់ដែលដំណើរការ Native នៅក្នុង Browser ទាំងអស់ដោយផ្ទាល់',
    descriptionKm: 'JavaScript ត្រូវបានបង្កើតឡើងដំបូងក្នុងគោលបំណងបង្កើតចលនា និងអន្តរកម្មលើទំព័រ HTML។ បច្ចុប្បន្ន JavaScript និងបណ្ណាល័យទំនើបៗ (React, Vue, Next.js, Svelte) គ្រប់គ្រងកម្មវិធី Single Page Apps (SPA), DOM Manipulation, Event Listeners, Form Validations និងការទាញទិន្នន័យពី Server តាមរយៈ Fetch API។',
    marketShare: '៩៨.៩% នៃគេហទំព័រប្រើ JavaScript នៅ Client-Side',
    enterpriseExamples: ['Facebook', 'YouTube', 'Google Docs', 'Twitter/X', 'Airbnb'],
    keyLibraries: ['React', 'Vue.js', 'Next.js', 'Tailwind CSS', 'Vite', 'Axios'],
    codeSample: {
      title: 'ការបង្កើតអន្តរកម្ម Dynamic លើគេហទំព័រ (DOM & Events)',
      filename: 'frontend-interaction.js',
      language: 'javascript',
      code: `// ឧទាហរណ៍ Front-End: បង្កើតប៊ូតុងអន្តរកម្មទាញទិន្នន័យ Dynamic
const fetchUserBtn = document.getElementById('fetch-btn');
const statusDisplay = document.getElementById('status');

// ភ្ជាប់ Event Listener ពេលចុច
fetchUserBtn.addEventListener('click', async () => {
  statusDisplay.textContent = 'កំពុងទាញទិន្នន័យ...';
  statusDisplay.className = 'text-amber-500 font-semibold';

  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const user = await res.json();
    
    // បង្ហាញទិន្នន័យលើ DOM
    statusDisplay.innerHTML = \`
      <div class="p-3 bg-emerald-50 rounded-lg text-emerald-800">
        ✅ ឈ្មោះសិស្ស: <strong>\${user.name}</strong><br>
        📧 អ៊ីមែល: \${user.email}
      </div>
    \`;
  } catch (error) {
    statusDisplay.textContent = 'បរាជ័យក្នុងការទាញទិន្នន័យ!';
    statusDisplay.className = 'text-rose-500 font-bold';
  }
});`,
      explanationKm: 'កូដនេះបង្ហាញពីការប្រើ Event Listener, Async/Await និង DOM Manipulation ដើម្បីបង្កើតបទពិសោធអ្នកប្រើប្រាស់ (User Experience) រស់រវើកដោយមិនចាំបាច់ Reload ទំព័រ។',
    },
  },
  {
    id: 'backend',
    titleKm: 'Back-End Server & APIs (ម៉ាស៊ីនបម្រើ & សេវាកម្ម API)',
    titleEn: 'Server-Side & Microservices (Node.js)',
    badge: 'ពេញនិយមលំដាប់លេខ ១ ក្នុង Stack Overflow',
    badgeColor: 'badge-success',
    iconName: 'Server',
    taglineKm: 'បង្កើត RESTful APIs, WebSockets និងប្រព័ន្ធគ្រប់គ្រងទិន្នន័យល្បឿនលឿន',
    descriptionKm: 'ចាប់តាំងពីឆ្នាំ ២០០៩ វត្តមានរបស់ Node.js បានអនុញ្ញាតឱ្យ JavaScript រត់នៅលើ Server ដោយប្រើប្រាស់ Google V8 Engine។ ភាពខ្លាំងរបស់វាគឺ Event-Driven, Non-blocking I/O ដែលជួយឱ្យ Server ទទួល Connection រាប់ម៉ឺនក្នុងពេលតែមួយដោយស៊ី Memory តិចបំផុត។ ឥឡូវនេះមានទាំង Deno និង Bun ផងដែរ។',
    marketShare: 'ក្រុមហ៊ុនជាង ៤៣% នៃ Fortune 500 ប្រើ Node.js ក្នុងប្រព័ន្ធ Core',
    enterpriseExamples: ['Netflix', 'PayPal', 'Uber', 'LinkedIn', 'NASA'],
    keyLibraries: ['Node.js', 'Express.js', 'NestJS', 'Fastify', 'Prisma', 'Socket.io'],
    codeSample: {
      title: 'ការបង្កើត REST API ជាមួយ Node.js & Express',
      filename: 'server-api.js',
      language: 'javascript',
      code: `// ឧទាហរណ៍ Back-End: RESTful API Endpoint ជាមួយ Node.js
import express from 'express';
const app = express();
app.use(express.json());

// សន្មតទិន្នន័យនិស្សិត
const students = [
  { id: 1, name: 'ចាន់ថា', major: 'IT Y2', gpa: 3.8 },
  { id: 2, name: 'សុភា', major: 'CS Y2', gpa: 3.9 }
];

// Endpoint ទទួល Request ពី Client
app.get('/api/students', (req, res) => {
  res.status(200).json({
    status: 'success',
    count: students.length,
    data: students
  });
});

console.log('Server Ready: ផ្ញើទិន្នន័យជា JSON ស្វ័យប្រវត្តិ');`,
      explanationKm: 'JavaScript អនុញ្ញាតឱ្យ Developer សរសេរ Full-Stack (ទាំង Front-End និង Back-End) ដោយប្រើភាសាតែមួយ មិនបាច់រៀនភាសាផ្សេង។',
    },
  },
  {
    id: 'mobile',
    titleKm: 'Mobile Cross-Platform Apps (កម្មវិធីទូរស័ព្ទ iOS & Android)',
    titleEn: 'Cross-Platform Native Mobile Apps',
    badge: 'បង្កើត App មួយ ដំណើរការបានទាំង ២',
    badgeColor: 'badge-info',
    iconName: 'Smartphone',
    taglineKm: 'សរសេរកូដម្តង ដំណើរការទាំងលើ iPhone (iOS) និង Android Devices',
    descriptionKm: 'ដោយប្រើប្រាស់បច្ចេកវិទ្យាដូចជា React Native, Expo, ឬ Capacitor អ្នកអភិវឌ្ឍន៍អាចប្រើសមត្ថភាព JavaScript និង React ដើម្បីសរសេរ Native Mobile Applications ដែលមានល្បឿនលឿន និង UI រលូនដូច App សរសេរដោយ Swift ឬ Kotlin ដែរ។',
    marketShare: 'ជាង ៣២% នៃ Cross-platform Mobile Developers ជ្រើសរើស React Native',
    enterpriseExamples: ['Instagram', 'Discord Mobile', 'Shopify', 'Pinterest', 'Tesla App'],
    keyLibraries: ['React Native', 'Expo', 'Capacitor', 'Ionic', 'React Navigation'],
    codeSample: {
      title: 'UI Component នៃកម្មវិធីទូរស័ព្ទ (React Native Style)',
      filename: 'MobileScreen.js',
      language: 'javascript',
      code: `// ឧទាហរណ៍ Mobile: Component បង្ហាញលើទូរស័ព្ទ
import React, { useState } from 'react';

export function StudentProfileCard({ studentName, lessonCount }) {
  const [isEnrolled, setIsEnrolled] = useState(false);

  return {
    render: () => ({
      type: 'View',
      style: { padding: 20, backgroundColor: '#ffffff', borderRadius: 16 },
      children: [
        { type: 'Text', text: \`សួស្តី \${studentName}\`, fontSize: 20 },
        { type: 'Text', text: \`បានបញ្ចប់: \${lessonCount} មេរៀន\` },
        { 
          type: 'Button', 
          title: isEnrolled ? 'បានចុះឈ្មោះរួច' : 'ចុះឈ្មោះរៀន JS',
          onPress: () => setIsEnrolled(true)
        }
      ]
    })
  };
}`,
      explanationKm: 'បច្ចេកវិទ្យានេះបម្លែង JavaScript Logic ទៅជា Native Components ផ្ទាល់លើប្រព័ន្ធប្រតិបត្តិការ iOS និង Android។',
    },
  },
  {
    id: 'desktop',
    titleKm: 'Desktop Applications (កម្មវិធីកុំព្យូទ័រ PC & Mac)',
    titleEn: 'Cross-Platform Desktop Apps (Electron/Tauri)',
    badge: 'កម្មវិធី Coding ធំបំផុតលើលោកប្រើ JS',
    badgeColor: 'badge-secondary',
    iconName: 'Monitor',
    taglineKm: 'បង្កើតកម្មវិធី Desktop សម្រាប់ Windows, macOS និង Linux យ៉ាងងាយស្រួល',
    descriptionKm: 'កម្មវិធី Desktop ល្បីៗជាច្រើនដែល Developer ប្រើរាល់ថ្ងៃ ដូចជា VS Code, Slack, Discord, Figma, Spotify និង Postman គឺត្រូវបានបង្កើតឡើងដោយប្រើប្រាស់ JavaScript, HTML, CSS រួមជាមួយ Node.js តាមរយៈ Electron Framework ឬ Tauri។',
    marketShare: 'VS Code ដែលជាកម្មវិធីកូដពេញនិយមបំផុត ត្រូវបានសរសេរដោយ TypeScript/JavaScript',
    enterpriseExamples: ['Visual Studio Code', 'Discord Desktop', 'Slack', 'Postman', 'Figma'],
    keyLibraries: ['Electron', 'Tauri', 'Node-API', 'Chromium Embedded'],
    codeSample: {
      title: 'ការបង្កើត Window Desktop និងគ្រប់គ្រង OS Menu',
      filename: 'desktop-main.js',
      language: 'javascript',
      code: `// ឧទាហរណ៍ Desktop App: បង្កើត Window លើកុំព្យូទ័រ
const { app, BrowserWindow, dialog } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    title: 'កម្មវិធីសិក្សា JavaScript Y2',
    webPreferences: { nodeIntegration: true }
  });

  // បង្ហាញ Web App ក្នុង Window កុំព្យូទ័រ
  win.loadURL('http://localhost:3000');
  console.log('Desktop Application ដំណើរការលើ Windows/Mac/Linux!');
}

app.whenReady().then(createWindow);`,
      explanationKm: 'ការរួមបញ្ចូលគ្នារវាង Chromium Browser Engine និង Node.js អនុញ្ញាតឱ្យ Web Developer អាចបង្កើត Software កុំព្យូទ័របានដោយមិនបាច់រៀន C++ ឬ C#។',
    },
  },
  {
    id: 'cloud_edge',
    titleKm: 'Cloud, Serverless & Edge Computing (ពពក & សេវាកម្ម Edge)',
    titleEn: 'Serverless Functions & Global Edge',
    badge: 'ឆ្លើយតបក្នុងកម្រិត Milliseconds',
    badgeColor: 'badge-warning',
    iconName: 'Cloud',
    taglineKm: 'រត់កូដ JavaScript នៅ Serverless Datacenters រាប់រយជុំវិញពិភពលោក',
    descriptionKm: 'ក្នុងយុគសម័យ Cloud Computing បច្ចុប្បន្ន JavaScript និង TypeScript គឺជាភាសាចម្បងសម្រាប់សរសេរ Serverless Functions (AWS Lambda, Google Cloud Functions, Cloudflare Workers, Vercel Edge Functions)។ កូដដំណើរការតែពេលមាន Request ជួយសន្សំសំចៃថ្លៃ Server និង Scale បានរហ័ស។',
    marketShare: 'AWS Lambda បង្ហាញថា JavaScript/Node.js ជា Runtime ប្រើច្រើនជាងគេបង្អស់',
    enterpriseExamples: ['Vercel', 'Cloudflare Workers', 'AWS Lambda', 'Supabase', 'Shopify Hydrogen'],
    keyLibraries: ['AWS SDK', 'Cloudflare Workers API', 'Hono', 'Next.js Middleware'],
    codeSample: {
      title: 'Serverless Edge Handler ដំណើរការនៅក្បែរអ្នកប្រើប្រាស់បំផុត',
      filename: 'edge-function.js',
      language: 'javascript',
      code: `// ឧទាហរណ៍ Cloud / Serverless Edge Function
export default {
  async fetch(request, env) {
    const userRegion = request.headers.get('cf-ipcountry') || 'KH';
    
    // បង្កើត JSON ឆ្លើយតបក្នុងរយៈពេល < 10ms
    const responseData = {
      message: 'សូមស្វាគមន៍មកកាន់ប្រព័ន្ធ Cloud Edge!',
      clientLocation: userRegion,
      timestamp: new Date().toISOString(),
      poweredBy: 'V8 Engine at the Edge'
    };

    return new Response(JSON.stringify(responseData), {
      headers: { 'Content-Type': 'application/json' }
    });
  }
};`,
      explanationKm: 'កូដ Serverless JavaScript នេះដំណើរការលើ Server នៅក្បែរអ្នកប្រើប្រាស់បំផុត ធានាបាននូវល្បឿនឆ្លើយតបលឿនបំផុត។',
    },
  },
  {
    id: 'ai_data',
    titleKm: 'AI, Data & Creative Computing (បញ្ញាសិប្បនិម្មិត & ក្រាហ្វិក 3D)',
    titleEn: 'Browser AI, 3D WebGL & Automation',
    badge: 'រត់ AI Model ផ្ទាល់ក្នុង Browser',
    badgeColor: 'badge-danger',
    iconName: 'Cpu',
    taglineKm: 'ដំណើរការ Machine Learning Models, ក្រាហ្វិក 3D និងស្វ័យប្រវត្តិកម្ម Web',
    descriptionKm: 'JavaScript បច្ចុប្បន្នអាចដំណើរការ Machine Learning Models (TensorFlow.js) ផ្ទាល់នៅលើម៉ាស៊ីន Client ដោយប្រើ WebGL/WebGPU មិនបាច់ផ្ញើទិន្នន័យទៅ Server ឡើយ។ លើសពីនេះ គេប្រើ Three.js បង្កើតហ្គេម និង 3D Web, ប្រើ D3.js បង្កើតក្រាហ្វិកស្ថិតិទិន្នន័យ និងប្រើ Playwright/Puppeteer សម្រាប់ធ្វើតេស្ត Web ដោយស្វ័យប្រវត្តិ។',
    marketShare: 'រាប់លាន Downloads ប្រចាំខែសម្រាប់ TensorFlow.js និង Three.js',
    enterpriseExamples: ['Google Gemini Web Client', 'Figma WebGL Canvas', 'Hugging Face Hub', 'Midjourney Web UI'],
    keyLibraries: ['TensorFlow.js', 'Three.js', 'D3.js', 'Chart.js', 'Playwright', 'Puppeteer'],
    codeSample: {
      title: 'ការប្រើប្រាស់ JavaScript សម្រាប់ទិន្នន័យស្ថិតិ & AI Prediction',
      filename: 'ai-data-analysis.js',
      language: 'javascript',
      code: `// ឧទាហរណ៍ AI/Data: គណនាពិន្ទុ និងវិភាគនិន្នាការសិក្សា
const studentScores = [85, 92, 78, 95, 88, 76, 99];

// គណនាស្ថិតិដោយប្រើ Array Methods ទំនើប
const totalScore = studentScores.reduce((sum, val) => sum + val, 0);
const averageScore = (totalScore / studentScores.length).toFixed(2);
const highestScore = Math.max(...studentScores);

// ក្បួនវិភាគកម្រិតសិស្ស
const evaluation = averageScore >= 85 ? 'កម្រិតឆ្នើម (Distinction)' : 'កម្រិតល្អ (Proficient)';

console.log(\`ពិន្ទុមធ្យម: \${averageScore} | ពិន្ទុខ្ពស់បំផុត: \${highestScore} | វាយតម្លៃ: \${evaluation}\`);`,
      explanationKm: 'JavaScript ផ្តល់នូវ Functional Programming Tools ដ៏សម្បូរបែប ដូចជា map, filter, reduce និង Math API សម្រាប់ការគណនាទិន្នន័យយ៉ាងរហ័ស។',
    },
  },
];

export const architectureMechanics: ArchitectureMechanic[] = [
  {
    id: 'v8',
    titleKm: 'The V8 Engine & JIT Compiler',
    titleEn: 'Google V8 & Just-In-Time Compilation',
    badge: 'ល្បឿនលឿនកម្រិតខ្ពស់',
    badgeVariant: 'primary',
    summaryKm: 'JavaScript មិនមែនជាភាសាបកប្រែយឺតដូចពីមុនទៀតទេ។ V8 បម្លែង JS ទៅជា Machine Code ដោយផ្ទាល់។',
    detailsKm: [
      'Parser: ពិនិត្យ Syntax និងបង្កើត Abstract Syntax Tree (AST)',
      'Ignition Interpreter: បង្កើត Bytecode ឱ្យរត់ភ្លាមៗ',
      'TurboFan JIT Compiler: កែលម្អកូដណាដែលរត់ញឹកញាប់ (Hot Code) ទៅជា Machine Code យ៉ាងលឿន',
      'Memory Management: គ្រប់គ្រង Memory Heap និង Call Stack ដោយស្វ័យប្រវត្តិតាមរយៈ Garbage Collector (GC)',
    ],
    codeTip: 'ជៀសវាងការផ្លាស់ប្តូរ Type នៃ Object Properties ញឹកញាប់ ដើម្បីជួយឱ្យ TurboFan Compiler ដំណើរការបានល្អបំផុត។',
  },
  {
    id: 'event_loop',
    titleKm: 'The Event Loop & Non-Blocking I/O',
    titleEn: 'Concurrency Model in Single Thread',
    badge: 'ស្នូលនៃអន្តរកម្ម',
    badgeVariant: 'success',
    summaryKm: 'JavaScript មាន Main Thread តែមួយ (Single-Threaded) ប៉ុន្តែអាចដោះស្រាយកិច្ចការជាច្រើនព្រមគ្នាដោយមិនកក (Non-blocking)។',
    detailsKm: [
      'Call Stack: កន្លែងដែល Function ត្រូវបានដំណើរការតាមលំដាប់លំដោយ (LIFO - Last In First Out)',
      'Web APIs / Node APIs: កន្លែងដោះស្រាយកិច្ចការ Async ដូចជា Timer, Fetch, Event Listeners',
      'Microtask Queue: ជួរអាទិភាពខ្ពស់សម្រាប់ Promises (.then, async/await)',
      'Macrotask (Callback) Queue: ជួរសម្រាប់ setTimeout, setInterval, I/O Events',
      'Event Loop: អ្នកត្រួតពិនិត្យ ពេលណា Call Stack ទទេ វានឹងរុញកិច្ចការពី Queue ចូល Call Stack',
    ],
    codeTip: 'ប្រើ async/await ជំនួស Callback ជ្រៅៗ (Callback Hell) ដើម្បីឱ្យកូដអានងាយស្រួល និងគ្រប់គ្រង Error ដោយ try...catch។',
  },
  {
    id: 'es6_modern',
    titleKm: 'Modern ES6+ Standards',
    titleEn: 'ECMAScript Modern Language Features',
    badge: 'ស្តង់ដារទំនើប ES2015-ES2026',
    badgeVariant: 'warning',
    summaryKm: 'ស្តង់ដារថ្មីបានផ្លាស់ប្តូរ JavaScript ឱ្យទៅជាភាសាដ៏មានអំណាច មានរចនាសម្ព័ន្ធរឹងមាំ និងមានសុវត្ថិភាព។',
    detailsKm: [
      'Scope សុវត្ថិភាព: ប្រើ const និង let ជំនួស var ដើម្បីទប់ស្កាត់ Hoisting Bugs និង Bug លេចធ្លាយ Scope',
      'Arrow Functions: វាក្យសម្ព័ន្ធខ្លី និងចងចាំ lexical `this` ត្រឹមត្រូវ',
      'Destructuring & Spread/Rest: ស្រង់ទិន្នន័យពី Array/Object ក្នុង ១ បន្ទាត់',
      'Modules (import/export): បំបែកកូដជាឯកសារតូចៗងាយស្រួលថែទាំ (Separation of Concerns)',
      'Optional Chaining (?.): ការពារកំហុស Cannot read property of undefined',
    ],
    codeTip: 'ប្រើ const ជាលំនាំដើមជានិច្ច ប្រើ let តែពេលណាដែលតម្លៃចាំបាច់ត្រូវផ្លាស់ប្តូរ ហើយកុំប្រើ var ក្នុងកូដទំនើប។',
  },
  {
    id: 'universal_runtime',
    titleKm: 'Universal / Isomorphic Ecosystem',
    titleEn: 'Write Once, Run Everywhere with JSON',
    badge: 'ស្តង់ដារសកលលោក',
    badgeVariant: 'info',
    summaryKm: 'JavaScript ចែករំលែក Data Format សកលគឺ JSON និងដំណើរការបានគ្រប់បរិបទ hardware និង OS។',
    detailsKm: [
      'JSON (JavaScript Object Notation): ក្លាយជាស្តង់ដារផ្លាស់ប្តូរទិន្នន័យលេខ ១ លើអ៊ីនធឺណិតរវាងគ្រប់ភាសា',
      'NPM (Node Package Manager): បណ្ណាល័យ Open-Source ធំបំផុតលើលោកដែលមាន packages ជាង ២ លាន',
      'Isomorphic / Universal Apps: កូដ TypeScript/JavaScript ដូចគ្នាអាចរត់បានទាំងលើ Server និង Browser',
      'Tooling ទំនើប: Vite, TypeScript, ESLint ជួយបង្កើតកម្មវិធីដែលមានគុណភាពខ្ពស់ និងរហ័ស',
    ],
    codeTip: 'រៀនចេះ JavaScript ១ ភាសា អ្នកអាចក្លាយជា Front-End, Back-End, Mobile, និង Cloud Engineer។',
  },
];

export const usageQuizQuestions: UsageQuizQuestion[] = [
  {
    id: 1,
    questionKm: 'តើបច្ចេកវិទ្យាណាដែលអនុញ្ញាតឱ្យ JavaScript អាចដំណើរការជា Back-End Server បាន?',
    scenarioKm: 'និស្សិតចង់បង្កើត REST API សម្រាប់គម្រោងកម្មវិធីទូរស័ព្ទ ដោយមិនចង់រៀនភាសាថ្មីដូចជា PHP ឬ Python។',
    options: [
      'Node.js (ដំណើរការលើ Google V8 Engine)',
      'CSS Preprocessor (Sass/SCSS)',
      'HTML5 Canvas API',
      'LocalStorage Browser API'
    ],
    correctIndex: 0,
    explanationKm: 'Node.js គឺជា JavaScript Runtime បង្កើតឡើងដោយ Ryan Dahl ក្នុងឆ្នាំ ២០០៩ ដោយប្រើ Google Chrome V8 Engine ដែលអនុញ្ញាតឱ្យ JavaScript ដំណើរការនៅក្រៅ Browser លើ Server បានយ៉ាងរហ័ស។',
  },
  {
    id: 2,
    questionKm: 'តើអ្វីជាលក្ខណៈពិសេសចម្បងនៃ JavaScript លើ Web Browser បើធៀបនឹងភាសាផ្សេងៗ?',
    scenarioKm: 'អតិថិជនសួរថា ហេតុអ្វីបានជាគេហទំព័រត្រូវតែប្រើ JavaScript ហើយមិនអាចប្រើតែ HTML/CSS ឬភាសាផ្សេងទៀត។',
    options: [
      'JavaScript ទាមទារឱ្យអ្នកប្រើប្រាស់ដំឡើង Plugin ដូចជា Flash ទើបដំណើរការបាន',
      'JavaScript ដំណើរការ Native នៅក្នុង Browser ទាំងអស់ដោយផ្ទាល់ និងគ្រប់គ្រង DOM អន្តរកម្មភ្លាមៗ',
      'JavaScript ប្រើសម្រាប់តែតុបតែងពណ៌អក្សរ និងរូបរាងគេហទំព័រប៉ុណ្ណោះ',
      'JavaScript ដំណើរការបានតែលើ Browser លើកុំព្យូទ័រ Windows ប៉ុណ្ណោះ'
    ],
    correctIndex: 1,
    explanationKm: 'JavaScript គឺជាភាសាតែមួយគត់ដែលត្រូវបានគាំទ្រ natively លើ Web Browsers ទាំងអស់ (Chrome, Safari, Firefox, Edge) ដោយមិនចាំបាច់ដំឡើង Plugin អ្វីឡើយ ហើយជាស្នូលនៃការកែប្រែ DOM ក្នុងពេលជាក់ស្តែង។',
  },
  {
    id: 3,
    questionKm: 'តើ Framework មួយណាដែលអនុញ្ញាតឱ្យអ្នកប្រើចំណេះដឹង JavaScript/React ដើម្បីបង្កើត Native Mobile App សម្រាប់ iOS និង Android?',
    scenarioKm: 'ក្រុមហ៊ុនចង់បង្កើត Mobile App សម្រាប់អតិថិជនទាំងលើ iPhone និង Samsung ដោយមានក្រុមការងារជា Web Developers។',
    options: [
      'React Native',
      'jQuery Mobile (កូដចាស់)',
      'Bootstrap 5',
      'Node.js Server'
    ],
    correctIndex: 0,
    explanationKm: 'React Native អនុញ្ញាតឱ្យ Developers សរសេរកូដ JavaScript/React រួចបម្លែងទៅជា Native Platform Widgets លើប្រព័ន្ធប្រតិបត្តិការ iOS និង Android ដោយផ្ទាល់ ផ្តល់នូវល្បឿន និងបទពិសោធអ្នកប្រើប្រាស់កម្រិតខ្ពស់។',
  },
  {
    id: 4,
    questionKm: 'ក្នុង JavaScript Event Loop តើកិច្ចការណាដែលត្រូវបានផ្តល់អាទិភាពខ្ពស់ជាងគេក្នុង Microtask Queue?',
    scenarioKm: 'ពេលសរសេរកូដមានទាំង setTimeout(..., 0) និង Promise.resolve().then(...) តើមួយណានឹងរត់មុនគេ?',
    options: [
      'setTimeout Callback ព្រោះវាជា Timer API',
      'Promise Callback (.then ឬ async/await) ព្រោះវាស្ថិតក្នុង Microtask Queue',
      'កិច្ចការទាំងពីរបញ្ចូលគ្នារត់ក្នុងពេលតែមួយ',
      'គ្មានមួយណារត់ទេ ប្រសិនបើគ្មាន Event ចុច Mouse'
    ],
    correctIndex: 1,
    explanationKm: 'Microtask Queue (ដែលផ្ទុក Promises, MutationObserver) មានអាទិភាពខ្ពស់ជាង Macrotask Queue (setTimeout, setInterval, I/O)។ Event Loop នឹងរត់ Microtasks ទាំងអស់ឱ្យអស់សិន មុននឹងប្តូរទៅរត់ Macrotasks។',
  },
];
