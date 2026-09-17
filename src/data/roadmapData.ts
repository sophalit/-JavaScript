import { CurriculumMapping, GlossaryTerm } from '../types';

export const curriculumMappings: CurriculumMapping[] = [
  {
    id: 1,
    originalTopic: '1. Basic Syntax & Fundamentals, Tools',
    newLesson: 'មេរៀនទី១៖ Introduction to JavaScript',
    reason: 'ផ្តោតលើតួនាទីក្នុង Front-End, ការភ្ជាប់ script defer ជាមួយ HTML និងការប្រើ Browser DevTools Console'
  },
  {
    id: 2,
    originalTopic: '1.1 Variables, 1.2 Data Types',
    newLesson: 'មេរៀនទី២៖ Variables and Data Types',
    reason: 'បង្រួបបង្រួមប្រើ const/let (លុបបំបាត់ការប្រើ var), Primitives, Type Conversion និង Template Literals'
  },
  {
    id: 3,
    originalTopic: '1.4 Operators, Comparison, 2.1 Conditions',
    newLesson: 'មេរៀនទី៣៖ Operators and Conditions',
    reason: 'ផ្តោតលើ Strict Equality (===) ជៀសវាង Coercion bugs, if/else if/else, switch និង Ternary'
  },
  {
    id: 4,
    originalTopic: '2.2 Loops (for, while, do...while, for..in/of)',
    newLesson: 'មេរៀនទី៤៖ Loops',
    reason: 'បំបែកច្បាស់រវាង Array Iteration (for...of) និង Object keys (for...in) និងការការពារ Infinite loops'
  },
  {
    id: 5,
    originalTopic: '3. Functions, Arrow Functions, Scope',
    newLesson: 'មេរៀនទី៥៖ Functions',
    reason: 'បង្រៀន Declaration vs Expression, Default parameters, Arrow syntax និង Callbacks មូលដ្ឋាន'
  },
  {
    id: 6,
    originalTopic: '5. Arrays, 5.2 Array Methods, Objects & Data Types',
    newLesson: 'មេរៀនទី៦៖ Arrays និង Objects',
    reason: 'គ្របដណ្តប់លើវិធីបង្កើត Array ទាំង ៣, Zero-based Indexing, Objects (Dot & Bracket), Null & Undefined, keyword new និង Methods ទំនើប'
  },
  {
    id: 7,
    originalTopic: '4. Objects, 4.4 Destructuring, 6. ES6',
    newLesson: 'មេរៀនទី៧៖ Objects and Modern Syntax',
    reason: 'ផ្គុំរចនាសម្ព័ន្ធទិន្នន័យ Object ជាមួយ Destructuring, Rest & Spread operators ទំនើប'
  },
  {
    id: 8,
    originalTopic: '8. DOM Manipulation (8.1 - 8.6)',
    newLesson: 'មេរៀនទី៨៖ DOM Manipulation',
    reason: 'លុបចោល document.write(), បង្រៀន querySelector, textContent, createElement, append និង classList'
  },
  {
    id: 9,
    originalTopic: '9. Event Handling (9.1 - 9.4)',
    newLesson: 'មេរៀនទី៩៖ Event Handling',
    reason: 'បង្រៀន addEventListener, Event Object (e.target, e.preventDefault), Event Bubbling និង Delegation'
  },
  {
    id: 10,
    originalTopic: 'Validation & Form Inputs (បន្ថែមថ្មី)',
    newLesson: 'មេរៀនទី១០៖ Forms and Validation',
    reason: 'បន្ថែមចំណេះដឹង Client-side Validation (trim, numeric check, required) ព្រមទាំងបញ្ជាក់ដែនកំណត់សុវត្ថិភាព'
  },
  {
    id: 11,
    originalTopic: '11. JSON, 12.1 Local & Session Storage',
    newLesson: 'មេរៀនទី១១៖ JSON and Browser Storage',
    reason: 'បង្រៀន JSON.stringify/parse និងការរក្សាទុក State លើ localStorage មិនឱ្យបាត់ពេល Refresh'
  },
  {
    id: 12,
    originalTopic: '7. Asynchronous JavaScript, 12.3 Fetch',
    newLesson: 'មេរៀនទី១២៖ Asynchronous JS and Fetch',
    reason: 'បង្រៀន Promise, async/await, ការហៅ Fetch API អាន JSON និងការគ្រប់គ្រង Loading/Error states'
  },
  {
    id: 13,
    originalTopic: '14. Modules, 16. Error & Debugging',
    newLesson: 'មេរៀនទី១៣៖ Modules and Debugging',
    reason: 'បង្រួបបង្រួម ES Modules (import/export) និងការប្រើ DevTools Breakpoints ស្វែងរកកំហុស'
  },
  {
    id: 14,
    originalTopic: 'Synthesis & Applied Assessment',
    newLesson: 'មេរៀនទី១៤៖ Final Mini Project',
    reason: 'បង្កើត Student Task Manager ដោយប្រើ HTML/CSS/JS សុទ្ធ រួមទាំងតារាងវាយតម្លៃពិន្ទុ ១០០'
  }
];

export const glossaryTerms: GlossaryTerm[] = [
  {
    km: 'អថេរ (Variable)',
    en: 'Variable',
    definition: 'កន្លែង ឬប្រអប់ក្នុង Memory សម្រាប់ផ្ទុកទិន្នន័យដែលកម្មវិធីត្រូវការប្រើប្រាស់។',
    example: 'const school = "BBU"; let score = 95;'
  },
  {
    km: 'ប្រភេទទិន្នន័យទោល (Primitive Type)',
    en: 'Primitive Data Type',
    definition: 'ទិន្នន័យសាមញ្ញដែលមិនមែនជា Object និងមិនអាចបំបែកបាន (String, Number, Boolean, null, undefined, Symbol, BigInt)។',
    example: 'typeof 42 // "number"'
  },
  {
    km: 'ការបំប្លែងប្រភេទទិន្នន័យ (Type Coercion)',
    en: 'Type Coercion',
    definition: 'ដំណើរការដែល JavaScript បំប្លែងប្រភេទទិន្នន័យដោយស្វ័យប្រវត្តិកំឡុងពេលធ្វើប្រមាណវិធី។',
    example: '"5" + 2 // "52", "5" - 2 // 3'
  },
  {
    km: 'មែកធាង DOM (DOM Tree)',
    en: 'Document Object Model',
    definition: 'រចនាសម្ព័ន្ធ Object តំណាងឱ្យធាតុទាំងអស់នៃទំព័រ HTML ដែល JavaScript អាចកែប្រែបាន។',
    example: 'document.querySelector("#title").textContent = "សួស្តី";'
  },
  {
    km: 'ការស្តាប់ព្រឹត្តិការណ៍ (Event Listener)',
    en: 'Event Listener',
    definition: 'Function ដែលរង់ចាំស្តាប់សកម្មភាពរបស់អ្នកប្រើប្រាស់ (ចុច, វាយអក្សរ, Submit) រួចដំណើរការកូដឆ្លើយតប។',
    example: 'button.addEventListener("click", handleClick);'
  },
  {
    km: 'សមភាពតឹងរ៉ឹង (Strict Equality ===)',
    en: 'Strict Equality',
    definition: 'ប្រតិបត្តិករប្រៀបធៀបទាំងតម្លៃ និងប្រភេទទិន្នន័យ (Type & Value) ដោយមិនធ្វើ Type Coercion ឡើយ។ ជា Best Practice ស្តង់ដារ។',
    example: '5 === "5" // false, 5 === 5 // true'
  },
  {
    km: 'តម្លៃ Falsy & Truthy',
    en: 'Truthy & Falsy',
    definition: 'តម្លៃដែលត្រូវបានបម្លែងទៅជា false ឬ true កាលណាស្ថិតក្នុងបរិបទ Boolean (if condition)។ Falsy មាន ៨ (false, 0, -0, 0n, "", null, undefined, NaN)។',
    example: 'Boolean("") // false, Boolean([]) // true'
  },
  {
    km: 'ការវាយតម្លៃផ្លូវកាត់ (Short-Circuit Evaluation)',
    en: 'Short-Circuit Evaluation',
    definition: 'យន្តការនៃប្រតិបត្តិករតក្កវិជ្ជា (&& និង ||) ដែលឈប់ប្រតិបត្តិកូដបន្ទាប់ភ្លាមៗ នៅពេលដឹងលទ្ធផលច្បាស់លាស់ពី Operand ដំបូង។',
    example: 'isLoggedIn && renderDashboard();'
  },
  {
    km: 'ប្រតិបត្តិករ Nullish Coalescing (??)',
    en: 'Nullish Coalescing Operator',
    definition: 'ប្រតិបត្តិករដែលត្រឡប់តម្លៃខាងស្តាំ លុះត្រាតែតម្លៃខាងឆ្វេងជា null ឬ undefined ប៉ុណ្ណោះ (មិនចាត់ទុក 0 ឬ "" ជា Falsy ទេ)។',
    example: 'const score = 0 ?? 50; // 0'
  },
  {
    km: 'លក្ខខណ្ឌការពារ (Guard Clause / Early Return)',
    en: 'Guard Clause',
    definition: 'បច្ចេកទេសសរសេរលក្ខខណ្ឌដើម្បីត្រួតពិនិត្យ និង return ចេញភ្លាមប្រសិនបើតម្លៃមិនត្រឹមត្រូវ ជួយបញ្ចៀស Pyramid of Doom (Nested If)។',
    example: 'if (!user) return "No User";'
  },
  {
    km: 'ប្រតិបត្តិករត្រីគុណ (Ternary Operator ? :)',
    en: 'Ternary Operator',
    definition: 'ប្រតិបត្តិករសង្ខេបសម្រាប់សរសេរលក្ខខណ្ឌមួយជួរ តាមទម្រង់ condition ? valueIfTrue : valueIfFalse។',
    example: 'const status = score >= 50 ? "ជាប់" : "ធ្លាក់";'
  }
];

export const advancedTopicsList = [
  { title: 'Closures & lexical "this"', desc: 'យន្តការ Scope កម្រិតស៊ីជម្រៅ និងការចងចាំ Context នៃអនុគមន៍' },
  { title: 'Prototypes, Classes & Inheritance', desc: 'ការសរសេរកូដតាមបែប Object-Oriented Programming (OOP) កម្រិតខ្ពស់' },
  { title: 'Regular Expressions (RegEx)', desc: 'ការស្វែងរក និងផ្ទៀងផ្ទាត់ទម្រង់អត្ថបទស្មុគស្មាញ (Regex Patterns)' },
  { title: 'Advanced Web APIs', desc: 'Geolocation, Canvas 2D, Audio/Video Media Streams, Cookies API' },
  { title: 'JavaScript Design Patterns', desc: 'ស្ថាបត្យកម្មកូដ Module, Singleton, Observer, Factory, Decorator' },
  { title: 'Advanced Functional Patterns', desc: 'Currying, Memoization, Generators, Async Iterators' },
  { title: 'Unit Testing & TDD', desc: 'ការសរសេរ Automated Test ជាមួយ Jest / Vitest និង Mocking' },
  { title: 'Performance Optimization', desc: 'Debounce/Throttle, Lazy Loading, Memory Management' }
];
