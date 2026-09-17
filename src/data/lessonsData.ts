import { Lesson } from '../types';

export const lessonsData: Lesson[] = [
  {
    id: 1,
    slug: 'intro-to-javascript',
    titleKm: 'មេរៀនទី១៖ ការណែនាំឱ្យស្គាល់ពី JavaScript',
    titleEn: 'Lesson 1: Introduction to JavaScript & Development Environment',
    category: 'Fundamentals',
    prerequisites: ['HTML Tags & Structure Basics', 'CSS Basic Styling', 'Web Browser (Chrome / Edge / Firefox)'],
    learningOutcomes: [
      'យល់ដឹងច្បាស់ពីនិយមន័យ តួនាទី និងសារៈសំខាន់របស់ JavaScript ក្នុងការអភិវឌ្ឍគេហទំព័ររស់រវើក (Dynamic Web)',
      'យល់ដឹងពីលក្ខណៈរបស់ JavaScript ជា Scripting Language ដែល Browser ដំណើរការកូដបន្ទាត់ដោយបន្ទាត់ (Line by line) ដោយមិនបាច់ Compile មុនដូចភាសាបុរាណ',
      'ចេះរៀបចំ និងដំណើរការធាតុ HTML ពី JavaScript ដោយប្រើ document.getElementById(id) និងគុណលក្ខណៈ "id" ដើម្បីផ្លាស់ប្តូរ Content តាម innerHTML',
      'យល់ដឹងពីការសរសេរលទ្ធផលជា Document ដោយប្រើ document.write() និងការប្រុងប្រយ័ត្ន (ចៀសវាង overwrite ឯកសារក្រោយ page load)',
      'យល់ច្បាស់ពី JavaScript Statements ជា Commands ទៅកាន់ Browser ដើម្បីប្រាប់ Browser ថាត្រូវធ្វើអ្វី',
      'ចេះប្រើប្រាស់ Semicolon (;) ដើម្បីផ្តាច់ Statements និងការសរសេរ Statements ច្រើនលើបន្ទាត់តែមួយ',
      'យល់ពីកូដ JavaScript Blocks ដោយប្រើ curly brackets { } ដើម្បីប្រមូលផ្តុំ Statements ដំណើរការរួមគ្នា',
      'ស្គាល់ច្បាស់ពីច្បាប់ Case-Sensitivity (getElementById មិនដូច getElementbyID, myVariable មិនដូច MyVariable)',
      'យល់ពីចន្លោះមើលមិនឃើញ (Whitespace & Spaces) និងការចុះបន្ទាត់ក្នុង String ដោយប្រើ Backslash (\\)',
      'ចេះប្រើប្រាស់ <script> Tag ទាំង ៣ របៀប (Inline, Internal, External) និងការប្រើ Comments (//, /* */)',
      'ចេះប្រើប្រាស់ Arithmetic Operators (+, -, *, /, %, ++, --, +=, -=, **) និងដោះស្រាយលំហាត់គណនាពីជគណិតព្រមទាំង Pre/Post-Increment',
      'យល់ច្បាស់ពី Comparative / Comparison Operators (==, ===, !=, !==, <, <=, >, >=) និងភាពខុសគ្នារវាង == និង ===',
      'ចេះប្រើប្រាស់ Logical Operators (&&, ||, !) និងដោះស្រាយកន្សោមតក្កវិជ្ជា Chaining Expressions (True / False)'
    ],
    scenario: 'ស្រមៃថាអ្នកបានបង្កើតទំព័រ HTML និង CSS ដ៏ស្រស់ស្អាតមួយ។ ទោះជាយ៉ាងណា នៅពេលអ្នកទស្សនាចុចលើប៊ូតុង បញ្ចូលទិន្នន័យក្នុង Form ឬចង់ឃើញការគណនាតម្លៃទំនិញ គេហទំព័រនោះបែរជាស្ងៀមស្ងាត់គ្មានប្រតិកម្មអ្វីទាំងអស់។ JavaScript ដើរតួជា "ប្រព័ន្ធប្រសាទ និងខួរក្បាល" ដែលនាំយកភាពរស់រវើក (Dynamic), ការគណនាភ្លាមៗ, ការបញ្ជាផ្លាស់ប្តូរធាតុ HTML តាមរយៈ id និង innerHTML, និងអន្តរកម្មឆ្លាតវៃមកកាន់គេហទំព័ររបស់អ្នក!',
    conceptsExplanation: `
### ១. អ្វីទៅជា JavaScript?
**JavaScript** គឺជា **Scripting Language** (ភាសាសរសេរស្គ្រីប) ដ៏មានឥទ្ធិពល និងពេញនិយមបំផុតលើពិភពលោក។ វាត្រូវបានគេប្រើប្រាស់ក្នុង **Web Development** ជាមួយនឹងភាសា **HTML** និង **CSS** ដើម្បីបង្កើត Web Page ឱ្យមានលក្ខណៈរស់រវើក (**Dynamic & Interactive**)។

> **💡 តើអ្នកដឹងទេ? (Did You Know?)**  
> JavaScript គឺជា **Scripting Language**។ កូដ Scripting គឺត្រូវបានដំណើរការ **បន្ទាត់ដោយបន្ទាត់ (line-by-line interpretation)** ដោយ Web Browser ផ្ទាល់។ ជាទម្លាប់នៅក្នុងភាសា Programming បុរាណមួយចំនួន (ដូចជា C, C++, Java) កូដទាំងអស់ត្រូវតែបាន **compiled** (បំប្លែងទៅជា machine code) ជាមុនសិនទើបអាចដំណើរការបាន។ ប៉ុន្តែនៅក្នុង JavaScript Web Browser គឺជាអ្នកអាន បកប្រែ និងដំណើរការកូដភ្លាមៗតែម្តង!

---

### ២. ត្រីកោណបច្ចេកវិទ្យា Front-End (The Web Trinity / Front-End Trinity)
គេហទំព័រទំនើបគ្រប់រូបកើតឡើងពីការរួមសហការគ្នាយ៉ាងស្អិតល្មួតនៃបច្ចេកវិទ្យាស្នូលទាំង ៣ (HTML, CSS និង JavaScript) ដែលគេនិយមហៅថា **The Web Trinity** (ត្រីកោណបច្ចេកវិទ្យាបណ្ដាញ)៖

| បច្ចេកវិទ្យា | តួនាទីស្នូល (Core Role) | ឧបមាប្រៀបធៀប (Analogy) | សកម្មភាពជាក់ស្តែងក្នុង Code |
| :--- | :--- | :--- | :--- |
| **១. HTML** (HyperText Markup Language) | **រចនាសម្ព័ន្ធ និងខ្លឹមសារ (Structure & Content):** បង្កើតឆ្អឹងអគារ និងធាតុចាំបាច់ទាំងអស់នៅលើទំព័រ | គ្រោងឆ្អឹងមនុស្ស ឬគ្រឿងបង្គុំសំណង់ផ្ទះ (ទ្វារ, បង្អួច, ជញ្ជាំង) | បង្កើតប៊ូតុង \`<button>\`, ចំណងជើង \`<h1>\`, កថាខណ្ឌ \`<p>\`, ប្រអប់បញ្ចូល \`<input>\` |
| **២. CSS** (Cascading Style Sheets) | **សោភ័ណភាព និងការតុបតែង (Presentation & Styling):** ផ្តល់ពណ៌សម្បុរ ទម្រង់ប្លង់ គម្លាត និងភាពទាក់ទាញ | សម្លៀកបំពាក់ ម៉ូដសក់ និងការលាបថ្នាំពណ៌លើជញ្ជាំងផ្ទះ | កំណត់ \`background-color: #2563eb\`, \`font-size: 16px\`, \`padding: 12px\`, \`border-radius: 8px\` |
| **៣. JavaScript** (JS Programming Language) | **ឥរិយាបថ និងភាពរស់រវើក (Behavior & Logic):** ផ្តល់ប្រព័ន្ធប្រសាទ ខួរក្បាលគិត គណនា និងប្រតិកម្មឆ្លើយតប | ប្រព័ន្ធប្រសាទ សាច់ដុំ ចលនា និងខួរក្បាលរបស់មនុស្ស | ពេលចុចប៊ូតុង (\`click\`) ធ្វើការគណនាតម្លៃ, ប្តូរពណ៌, ពិនិត្យ Form, បង្ហាញ Popup |

---

### ២.១ ទ្រឹស្តីស៊ីជម្រៅ៖ តួនាទីនៃភាសានីមួយៗតាមរយៈរូបភាពគំនូរគរុកោសល្យ (Deep Theory: Language Roles via Visual Analogies)

ដើម្បីឱ្យសិស្សានុសិស្សយល់ច្បាស់នូវទ្រឹស្តីមូលដ្ឋាន ខាងក្រោមនេះជាការពន្យល់លម្អិតអំពីតួនាទីស្នូល និងយន្តការដំណើរការរបស់បច្ចេកវិទ្យានីមួយៗ ភ្ជាប់ជាមួយរូបភាពគំនូរតំណាងជាក់ស្តែង៖

#### ក. ស្ថាបត្យកម្មគ្រោងឆ្អឹងរបស់ HTML (HTML: Structural Architecture & DOM Blueprint)

![🦴 HTML ជាគ្រោងឆ្អឹង (Skeleton): កំណត់រចនាសម្ព័ន្ធមាតិកា និងសរីរាង្គគ្រោងនៃគេហទំព័រ](https://images.unsplash.com/photo-1530210124550-912dc1381cb8?auto=format&fit=crop&w=1200&q=80)

* **និយមន័យ និងទ្រឹស្តី (Core Theory):**  
  HTML (HyperText Markup Language) មិនមែនជា Programming Language ទេ ប៉ុន្តែជា **Markup Language** ដែលប្រើប្រាស់ Tag ដើម្បីផ្តល់អត្ថន័យ និងរៀបចំមាតិកាជាស្រទាប់ឋានានុក្រម (**Document Object Model - DOM Tree Hierarchy**)។
* **ឧបមាប្រៀបធៀប (The Analogy):**  
  HTML ប្រៀបដូចជា **«គ្រោងឆ្អឹងមនុស្ស» (Skeleton)**។ រាងកាយមនុស្សមានឆ្អឹង ២០៦ កំណាត់ និងឆ្អឹងខ្នងដែលទ្រទ្រង់សរីរាង្គ។ ប្រសិនបើគ្មានគ្រោងឆ្អឹងទេ ស្បែក សាច់ និងសម្លៀកបំពាក់មិនអាចទប់លំនឹងឈរបានឡើយ។
* **តួនាទីជាក់ស្តែងក្នុង Web (Practical Role):**  
  * បង្កើត និងកំណត់ធាតុអត្ថន័យ (Semantic Elements): \`<header>\`, \`<main>\`, \`<article>\`, \`<section>\`, \`<footer>\`
  * បង្កើតចំណុចបញ្ជាអន្តរកម្ម៖ ប៊ូតុង \`<button>\`, ប្រអប់បញ្ចូល \`<input>\`, ទម្រង់ \`<form>\`
  * បង្កើតតំណភ្ជាប់ Hyperlinks (\`<a>\`) ដើម្បីតភ្ជាប់ពិភព Web ចូលគ្នា។

---

#### ខ. ស្រទាប់សោភ័ណភាព និងការតុបតែងរបស់ CSS (CSS: Presentation, Layout & Aesthetics)

![✨ CSS ជាស្បែក និងសម្លៀកបំពាក់ (Skin & Clothing): ផ្តល់សោភ័ណភាព ពណ៌សម្បុរ និងភាពទាក់ទាញ](https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80)

* **និយមន័យ និងទ្រឹស្តី (Core Theory):**  
  CSS (Cascading Style Sheets) គឺជាភាសាកំណត់រចនាប័ទ្ម (**Style Sheet Language**) ដែលទទួលបន្ទុកដាច់ដោយឡែកលើស្រទាប់បង្ហាញ (**Presentation Layer**) ដោយអនុវត្តតាមគោលការណ៍ **Separation of Concerns** (ញែកដាច់រវាងខ្លឹមសារ និងការតុបតែង)។
* **ឧបមាប្រៀបធៀប (The Analogy):**  
  CSS ប្រៀបដូចជា **«ស្បែក ពណ៌សម្បុរ និងសម្លៀកបំពាក់» (Skin & Clothing)**។ ទោះបីជាមនុស្សម្នាក់មានគ្រោងឆ្អឹងរឹងមាំក៏ដោយ ប្រសិនបើគ្មានស្បែក ម៉ូដសក់ និងសម្លៀកបំពាក់សមសួនទេ នោះនឹងមើលទៅគួរឱ្យខ្លាច ឬសោះកក្រោះ មិនទាក់ទាញឡើយ។
* **តួនាទីជាក់ស្តែងក្នុង Web (Practical Role):**  
  * **The Box Model:** គ្រប់គ្រងទំហំ និងគម្លាត (\`margin\`, \`border\`, \`padding\`, \`width/height\`)
  * **Modern Layouts:** រៀបចំប្លង់បត់បែនឆ្លើយតប (\`display: flex\`, \`display: grid\`)
  * **Visual Delight:** ផ្តល់ពណ៌ (\`color\`, \`background\`), ស្រមោល (\`box-shadow\`), និងចលនារលូន (\`transition\`, \`@keyframes\`)
  * **Responsive Design:** សម្របសម្រួលជាមួយគ្រប់ទំហំអេក្រង់ទូរស័ព្ទ កុំព្យូទ័រ និង Tablet (\`@media queries\`)។

---

#### គ. ម៉ាស៊ីនតក្កវិជ្ជា និងប្រព័ន្ធប្រសាទឆ្លាតវៃរបស់ JavaScript (JavaScript: The Cognitive Engine & Event Synapses)

![⚡ JavaScript ជាខួរក្បាល និងប្រព័ន្ធប្រសាទ (Brain & Nerves): គិត គណនា និងបញ្ជាឱ្យធ្វើចលនាឆ្លើយតប](https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=1200&q=80)

* **និយមន័យ និងទ្រឹស្តី (Core Theory):**  
  JavaScript គឺជាភាសាសរសេរកូដពេញលេញ (**Full-fledged Programming Language**) កម្រិតខ្ពស់ (High-level), ដែលដំណើរការតាមបែប **Event-Driven**, **Single-Threaded** ជាមួយ **Asynchronous Non-Blocking Event Loop**។
* **ឧបមាប្រៀបធៀប (The Analogy):**  
  JavaScript ប្រៀបដូចជា **«ខួរក្បាល និងប្រព័ន្ធប្រសាទ» (Brain & Nervous System)**។ នៅពេលអ្នកប៉ះរបស់ក្តៅ សរសៃប្រសាទបញ្ជូនសញ្ញាទៅខួរក្បាល ហើយខួរក្បាលបញ្ជាសាច់ដុំឱ្យដកដៃចេញភ្លាមៗ។ ដូចគ្នានឹងក្នុង Web ដែរ នៅពេលអ្នកប្រើប្រាស់ចុចប៊ូតុង (\`click\` event) JavaScript ចាប់យកសញ្ញានោះ ធ្វើការគណនា និងបញ្ជាកែប្រែអេក្រង់ភ្លាមៗ!
* **តួនាទីជាក់ស្តែងក្នុង Web (Practical Role):**  
  * **DOM Manipulation:** ស្វែងរក និងផ្លាស់ប្តូរធាតុ HTML ភ្លាមៗ (\`document.getElementById()\`, \`element.innerHTML\`)
  * **Event Handling:** ឆ្លើយតបនឹងសកម្មភាពរបស់អ្នកទស្សនា (\`addEventListener('click', ...)\`, \`keyup\`, \`submit\`)
  * **Network Communication:** ទាញ និងបញ្ជូនទិន្នន័យពី Server ដោយមិនចាំបាច់ Reload ទំព័រ (\`fetch()\`, \`async/await\`)
  * **Business Logic:** គណនាពន្ធ ថ្លៃទំនិញ ត្រួតពិនិត្យភាពត្រឹមត្រូវនៃទិន្នន័យ (Form Validation)។

---

### ៣. ការរៀបចំធាតុរបស់ HTML (Accessing & Changing HTML Elements)
ដើម្បីដំណើរការធាតុ HTML ពី JavaScript អ្នកអាចប្រើប្រាស់អនុគមន៍ **\`document.getElementById(id)\`**។  
ការប្រើប្រាស់ **\`id\` attribute** គឺដើម្បីបញ្ជាក់ និងសម្គាល់ធាតុជាក់លាក់របស់ HTML ដោយមិនឱ្យច្រឡំគ្នា។

#### ឧទាហរណ៍៖ ការដំណើរការធាតុ HTML ជាមួយ id ជាក់លាក់ ហើយនឹងការផ្លាស់ប្តូរ Content របស់វា
\`\`\`html
<!DOCTYPE html>
<html>
<body>

<h1>My First Web Page</h1>
<p id="demo">My First Paragraph</p>

<script>
document.getElementById("demo").innerHTML = "My First JavaScript";
</script>

</body>
</html>
\`\`\`

**ការពន្យល់ដំណើរការ៖**  
JavaScript គឺត្រូវបានដំណើរការដោយ **Web Browser**។ ដូចនេះហើយ វានឹងស្វែងរក និងដំណើរការធាតុរបស់ HTML ជាមួយ \`id="demo"\` ហើយ Content ខាងក្នុងរបស់វាត្រូវបានផ្លាស់ប្តូរតាមរយៈ property **\`innerHTML\`** ទៅជា **\`"My First JavaScript"\`** ភ្លាមៗនៅលើអេក្រង់!

---

### ៤. ការសរសេរលទ្ធផលជា Document (Writing to Document Output)
អ្នកអាចសរសេរលទ្ធផលចេញទៅកាន់ HTML Document ដោយផ្ទាល់តាមរយៈ **\`document.write()\`**៖

\`\`\`html
<!DOCTYPE html>
<html>
<body>

<h1>My First Web Page</h1>

<script>
document.write("<p>My First JavaScript</p>");
</script>

</body>
</html>
\`\`\`

#### ⚠️ ចំណាំសំខាន់ (Crucial Warning)៖
ការប្រើ \`document.write()\` គឺសម្រាប់តែការសរសេរដោយផ្ទាល់នៅក្នុងលទ្ធផលជា document កំឡុងពេលទំព័រកំពុងផ្ទុក (page loading) តែប៉ុណ្ណោះ។  
ប្រសិនបើអ្នកប្រើ \`document.write()\` បន្ទាប់ពី HTML document ត្រូវបានផ្ទុកចប់សព្វគ្រប់ (ឧទាហរណ៍៖ ពេលចុចប៊ូតុង) វានឹង **លុបជម្រះរាល់ HTML ទាំងអស់ដែលមានស្រាប់លើទំព័រចោលទាំងស្រុង!**

\`\`\`html
<!DOCTYPE html>
<html>
<body>

<h1>My First Web Page</h1>
<p>My First Paragraph.</p>

<button onclick="myFunction()">Try it</button>

<script>
function myFunction() {
  document.write("Oops! The document disappeared!");
}
</script>

</body>
</html>
\`\`\`
*(នៅពេលចុចប៊ូតុង "Try it" ធាតុ \`<h1>\` និង \`<p>\` ទាំងអស់នឹងបាត់ ហើយជំនួសដោយអត្ថបទ "Oops! The document disappeared!")*។

---

### ៥. JavaScript Statements (សេចក្តីថ្លែងការណ៍ JavaScript)
- **JavaScript គឺជា Statements** ដែលមានជាបន្តបន្ទាប់ហើយត្រូវបានដំណើរការដោយ Browser។
- **JavaScript Statements គឺជា "commands"** (បញ្ជា) ទៅកាន់ Browser។ គោលបំណងនៃ Statements គឺដើម្បី **ប្រាប់ទៅ Browser ថាត្រូវធ្វើអ្វី**។

នេះគឺជា JavaScript Statement ដែលបានប្រាប់ Browser ដើម្បីសរសេរ \`"Hello Dolly"\` នៅក្នុងធាតុ HTML ជាមួយនិង \`id="demo"\`៖
\`\`\`javascript
document.getElementById("demo").innerHTML = "Hello Dolly";
\`\`\`

#### Semicolon (;)
- **Semicolon (;)** អាចផ្តាច់ JavaScript Statements ចេញពីគ្នាបានយ៉ាងច្បាស់លាស់។
- ជាធម្មតា អ្នកត្រូវបន្ថែម semicolon នៅចុងបញ្ចប់នៃដំណើរការ Statement នីមួយៗ។
- ការប្រើប្រាស់ Semicolon នេះផងដែរ អាចឱ្យគេសរសេរ Statements បានជាច្រើននៅលើបន្ទាត់តែមួយ៖
  \`\`\`javascript
  a = 5; b = 6; c = a + b;
  \`\`\`
- អ្នកប្រហែលជាធ្លាប់ឃើញឧទាហរណ៍ដោយគ្មាន Semicolon។ ការបញ្ចប់ Statements ជាមួយ Semicolon គឺជាការជ្រើសរើស (Optional) នៅក្នុង JavaScript ក៏ប៉ុន្តែការដាក់ semicolon គឺជា **Best Practice** ដែលត្រូវបានណែនាំដើម្បីការពារកំហុសពេល minify កូដ។

---

### ៦. កូដ JavaScript និង JavaScript Blocks
- **កូដ JavaScript (ឬគ្រាន់តែជា JavaScript):** គឺជាអ្វីៗដែលមានជាបន្តបន្ទាប់នៃ JavaScript Statements។ Statement នីមួយៗគឺត្រូវបានដំណើរការដោយ Browser នៅខាងក្នុងដោយមានការសរសេរជាបន្តបន្ទាប់ (តាមលំដាប់ពីលើចុះក្រោម)។

នេះគឺជាឧទាហរណ៍នៃការរៀបចំ និងកែប្រែធាតុរបស់ HTML ពីរជាប់គ្នា៖
\`\`\`javascript
document.getElementById("demo").innerHTML = "Hello Dolly";
document.getElementById("myDIV").innerHTML = "How are you?";
\`\`\`

#### កូដ JavaScript Blocks ({ })
- JavaScript Statements ត្រូវបានប្រមូលផ្តុំនៅក្នុងក្រុមរួមគ្នានៅក្នុង **Blocks**។
- Blocks ចាប់ផ្តើមជាមួយ **curly bracket ខាងឆ្វេង \`{\`** ហើយបញ្ចប់ជាមួយនិង **curly bracket ខាងស្តាំ \`}\`**។
- **គោលបំណងនៃ Blocks:** គឺដើម្បីបង្កើតនូវដំណើរការ Statements ព្រមគ្នាដែលមានជាបន្តបន្ទាប់ (ជាពិសេសក្នុង Function, if-else, ឬ Loop)។

នេះគឺជាឧទាហរណ៍ដើម្បី Run Function ដែលមានការរៀបចំធាតុរបស់ HTML ពីរក្នុង Block តែមួយ៖
\`\`\`javascript
function myFunction() {
  document.getElementById("demo").innerHTML = "Hello Dolly";
  document.getElementById("myDIV").innerHTML = "How are you?";
}
\`\`\`

---

### ៧. ច្បាប់សំខាន់ៗដែលអ្នកសរសេរកូដត្រូវដឹង (Crucial Rules)

#### ក. JavaScript គឺត្រូវដឹងពី Case-Sensitivity (ប្រកាន់អក្សរតូចធំ)
- មើលឱ្យច្បាស់ថាតើអក្សរធំរបស់អ្នកត្រូវបានបិទ (Caps Lock) នៅពេលដែលអ្នកសរសេរ JavaScript Statements ដែរឬទេ។
- អនុគមន៍ **\`getElementById\`** គឺ **មិនដូច \`getElementbyID\`** ឬ \`getElementByID\` ឡើយ (ការសរសេរខុសនឹងបណ្តាលឱ្យកើតមាន TypeError: not a function)។
- Variable ដែលមានឈ្មោះ **\`myVariable\`** គឺ **មិនដូច \`MyVariable\`** ឡើយ។

#### ខ. ចន្លោះមើលមិនឃើញ (Whitespace & Spaces)
- JavaScript គឺ **មិនខ្វល់ពីការបន្ថែម spaces (ចន្លោះទំនេរ)** ច្រើននោះទេ។ អ្នកអាចបន្ថែមចន្លោះមើលមិនឃើញដើម្បីឱ្យ Script របស់អ្នកមានភាពងាយស្រួលអានថែមទៀត។
- ខាងក្រោមនេះ គឺជាបន្ទាត់ដែលមានតម្លៃស្មើគ្នាទាំងស្រុង៖
  \`\`\`javascript
  var name="Hege";
  var name = "Hege";
  \`\`\`

#### គ. កូដចុះបន្ទាត់ (Line Breaking ក្នុង String ជាមួយ Backslash)
- អ្នកអាចសរសេរកូដចុះបន្ទាត់នៅក្នុង Text ដែលជា String ជាមួយនិងសញ្ញា **Backslash (\`\\\`)** ៖
  \`\`\`javascript
  document.write("Hello \
  World!");
  \`\`\`
- ⚠️ **យ៉ាងណាក៏ដោយ អ្នកមិនអាចសរសេរកូដចុះបន្ទាត់ដោយគ្មាន backslash ដូចខាងក្រោមបានទេ (នឹងកើតមាន SyntaxError):**
  \`\`\`javascript
  // ❌ កំហុស SyntaxError: Unterminated string literal
  document.write("Hello 
  World!");
  \`\`\`
*(ចំណាំ៖ ក្នុង JavaScript ទំនើប (ES6+) អ្នកក៏អាចប្រើ Template Literals ជាមួយសញ្ញា backticks \`\`... \`\` ដើម្បីចុះបន្ទាត់ដោយសេរីបានផងដែរ)*។

---

### ៨. របៀបប្រើប្រាស់ <script> Tag និង Comments
- **<script> Tag ទាំង ៣ របៀប៖**
  1. **Inline JavaScript:** សរសេរក្នុង HTML event attribute (ឧ. \`onclick="alert('Hi')"\`)
  2. **Internal JavaScript:** សរសេរក្នុងស្លាក \`<script>\` ក្នុងផ្នែក \`<head>\` ឬ \`<body>\`
  3. **External JavaScript:** សរសេរក្នុងឯកសារ \`.js\` ដាច់ដោយឡែក (ឧ. \`<script src="script.js" defer></script>\`) ដែលជាវិធីសាស្ត្រល្អបំផុត
- **Comments ក្នុង JavaScript:**
  - **Single-line (//):** សម្រាប់ពន្យល់មួយបន្ទាត់ (\`// នេះជា comment\`)
  - **Multi-line (/* ... */):** សម្រាប់ពន្យល់ច្រើនបន្ទាត់ ឬបិទកូដបណ្តោះអាសន្នមិនឱ្យ Browser ដំណើរការ

---

### ៩. ការប្រើប្រាស់ Operators (Arithmetic, Comparison, Logical Operators)
**ការប្រើប្រាស់ Operators** គឺជាផ្នែកពេញសម្គាល់មួយក្នុង JavaScript ដែលអនុញ្ញាតឱ្យអ្នកគណនា ប្រៀបធៀប ត្រួតពិនិត្យលក្ខខណ្ឌ និងធ្វើអំពើផ្សេងៗលើទិន្នន័យ និងពិនិត្យមើលបែបបំព្រិកកម្មវិធីកូដរបស់អ្នក។ នៅក្នុងមេរៀននេះ យើងនឹងពន្យល់អំពី **Arithmetic Operators**, **Comparison Operators**, **Logical Operators** និង **If-Else Statements** ដើម្បីកសាងគំនិតរៀបចំលទ្ធផល និងនិកាយលើកូដ JavaScript ដោយងាយស្រួល។

#### ក. ប្រមាណវិធីពីជគណិតសាមញ្ញ (Arithmetic Operators)
ប្រមាណវិធីពីជគណិតសាមញ្ញដូចជា បូក ដក គុណ ចែក។

| Symbol | Meaning | Example | Result |
| :---: | :--- | :---: | :---: |
| \`+\` | បូក | \`5+3\` | \`8\` |
| \`-\` | ដក | \`5-2\` | \`3\` |
| \`*\` | គុណ | \`5*3\` | \`15\` |
| \`/\` | ចែក | \`5/3\` | \`1.666...\` (ឬ \`1.5\` បើ \`6/4\`) |
| \`%\` | ចែកយកសំណល់ (Modulus) | \`5%3\` | \`2\` |
| \`++\` | បូកបន្ថែមម្តងមួយ (Increment) | \`5++\` | \`6\` |
| \`--\` | ដកចេញម្តងមួយ (Decrement) | \`5--\` | \`4\` |
| \`+=\` | បូកបន្ថែមនឹងចំនួនណាមួយ | \`5+=4\` | \`9\` |
| \`-=\` | ដកចេញនឹងចំនួនណាមួយ | \`5-=4\` | \`1\` |

**Arithmetic Operators ត្រូវបានប្រើដើម្បីបំពេញប្រមាណវិធីលើលេខថ្មោងដូចជា បូក លុប គុណ ចែក។ ជាទូទៅ JavaScript គាំទ្រដូចខាងក្រោម៖**
1. **\`+\` (បូក) :** ការបូកពីរតម្លៃ ឬជាអត្ថបទពេលយើងប្រើលើ String (String Concatenation)
2. **\`-\` (ដក) :** ការដកពីរតម្លៃ
3. **\`*\` (គុណ) :** ការគុណពីរតម្លៃ
4. **\`/\` (ចែក) :** ការចែកពីរតម្លៃ
5. **\`%\` (Modulus) :** សម្រាប់រកសំណល់ពីការចែក
6. **\`**\` (Exponentiation) :** លើកតម្លៃមួយទៅអំណាច (power) នៃតម្លៃមួយផ្សេងទៀត

**ឧទាហរណ៍៖**
\`\`\`javascript
let a = 10; 
let b = 3; 
console.log(a + b);  // 13 
console.log(a - b);  // 7 
console.log(a * b);  // 30 
console.log(a / b);  // 3.3333333333333335 
console.log(a % b);  // 1 
console.log(a ** b); // 1000 (10 លើករ៉ង់ 3 => 10 * 10 * 10)
\`\`\`

#### ខ. លំហាត់ដោះស្រាយការគណនាពីជគណិតជាក់ស្តែង
> **សំណួរ៖** ចូរធ្វើការគណនាពីជគណិតនូវចំនួនដូចខាងក្រោម ដោយបង្ហាញលទ្ធផលនៃការគណនា៖  
> \`var x=10, y=20, z="30", s="abc", r ;\`:

\`\`\`javascript
var x = 10, y = 20, z = "30", s = "abc", r;
\`\`\`

1. **\`r = x + y;\`**  
   - **លទ្ធផល៖** \`30\`  
   - *ការពន្យល់៖* \`10 + 20 = 30\` (ការបូកលេខ Number ពីជគណិតធម្មតា)
2. **\`r = x + z;\`**  
   - **លទ្ធផល៖** \`"1030"\`  
   - *ការពន្យល់៖* ដោយសារ \`z = "30"\` ជា String នាំឱ្យសញ្ញា \`+\` ធ្វើការតភ្ជាប់តួអក្សរ (String concatenation) រវាង \`10\` និង \`"30"\`
3. **\`r = x + s;\`**  
   - **លទ្ធផល៖** \`"10abc"\`  
   - *ការពន្យល់៖* \`s = "abc"\` ជា String ដូចនេះលេខ \`10\` ត្រូវបានបំប្លែងទៅជា String ហើយតភ្ជាប់គ្នាជា \`"10abc"\`
4. **\`r = x + eval(z);\`**  
   - **លទ្ធផល៖** \`40\`  
   - *ការពន្យល់៖* អនុគមន៍ \`eval(z)\` គឺ \`eval("30")\` វានឹងដំណើរការ String \`"30"\` ដូចកូដ JavaScript ហើយបម្លែងទៅជាលេខគត់ \`30\` (Number)។ ដូចនេះ \`10 + 30 = 40\`
5. **\`r = x + eval(s);\`**  
   - **លទ្ធផល៖** \`ReferenceError: abc is not defined\` (Error)  
   - *ការពន្យល់៖* \`eval(s)\` គឺស្មើនឹង \`eval("abc")\` ដែល JavaScript ព្យាយាមស្វែងរក identifier/variable ឈ្មោះ \`abc\`។ ដោយសារគ្មាន variable ឈ្មោះ \`abc\` ត្រូវបានបង្កើតទេ វានឹងបោះកំហុស \`ReferenceError: abc is not defined\`
6. **\`r = x++;\`**  
   - **លទ្ធផល៖** \`r = 10\` (បន្ទាប់មក \`x\` ក្លាយជា \`11\`)  
   - *ការពន្យល់៖* នេះជា **Post-increment** គឺប្រគល់តម្លៃចាស់របស់ \`x\` (10) ឱ្យ \`r\` ជាមុនសិន ទើបបង្កើនតម្លៃ \`x\` ឡើង ១ ក្រោយប្រតិបត្តិការ
7. **\`r = ++y;\`**  
   - **លទ្ធផល៖** \`r = 21\` (និង \`y\` ក្លាយជា \`21\`)  
   - *ការពន្យល់៖* នេះជា **Pre-increment** គឺបង្កើនតម្លៃ \`y\` ឡើង ១ ជាមុនសិន (\`20 + 1 = 21\`) រួចទើបយកតម្លៃថ្មី \`21\` មកប្រគល់ឱ្យ \`r\`
8. **\`r = x++ + ++y;\`**  
   - **លទ្ធផល៖** \`31\` *(គិតពីតម្លៃដើម x=10, y=20)*  
   - *ការពន្យល់៖* \`x++\` បោះតម្លៃ \`10\` (ហើយ \`x\` ក្លាយជា \`11\`) រីឯ \`++y\` បង្កើន \`y\` ពី \`20\` ទៅ \`21\` ហើយបោះតម្លៃ \`21\` នាំឱ្យ \`10 + 21 = 31\` *(ចំណាំ៖ ប្រសិនបើបន្តពីជំហាន ៦ និង ៧ ដែល x=11, y=21 នោះ r = 11 + 22 = 33)*
9. **\`r = --x - y--;\`**  
   - **លទ្ធផល៖** \`-11\` *(គិតពីតម្លៃដើម x=10, y=20)*  
   - *ការពន្យល់៖* \`--x\` បន្ថយ \`x\` ពី \`10\` មក \`9\` ជាមុន (Pre-decrement) រួចបោះតម្លៃ \`9\`។ រីឯ \`y--\` បោះតម្លៃបច្ចុប្បន្ន \`20\` (Post-decrement) រួចទើប \`y\` ថយមកសល់ \`19\`។ ដូចនេះផលដកគឺ \`9 - 20 = -11\`

---

#### គ. Comparative / Comparison Operators (ប្រមាណវិធីប្រៀបធៀប)
**Comparative Operator** គឺជា Operator ដែលប្រើសម្រាប់ការប្រៀបធៀប។ រាល់ការប្រៀបធៀបវាតែងតែបោះតំលៃជា **Boolean** សម្រាប់ការពិនិត្យលក្ខខណ្ឌដូចខាងក្រោម៖

| Symbol | Meaning | Expression | Result |
| :---: | :--- | :---: | :---: |
| \`==\` | ស្មើ (equal) | \`5==3\` | \`False\` |
| \`!=\` | ខុសពី | \`5!=3\` | \`True\` |
| \`<\` | តូចជាង | \`5<3\` | \`False\` |
| \`<=\` | តូចជាងរឺស្មើ | \`5<=3\` | \`False\` |
| \`>\` | ធំជាង | \`5>3\` | \`True\` |
| \`>=\` | ធំជាងរឺស្មើ | \`5>=3\` | \`True\` |

**Comparison Operators ត្រូវបានប្រើដើម្បីប្រៀបធៀបតម្លៃរវាងអថេរ ឬបាតុភូតឡើយ ថាតើវាត្រូវបានធៀបអ្វីបានខ្លះបើត្រូវ។ លទ្ធផលនៃ Comparison Operators ជា Boolean ឬជា true ឬ false៖**
- \`>\` ធំជាង
- \`<\` តូចជាង
- \`>=\` ធំជាងឬស្មើ
- \`<=\` តូចជាងឬស្មើ
- \`==\` ស្មើ (មិនត្រូវធ្វើលក្ខណៈគំរូប្រភេទ / មិនពិនិត្យ DataType)
- \`===\` ស្មើ (ធ្វើការពិនិត្យប្រភេទទាំងតម្លៃ / Strict Equality)
- \`!=\` មិនស្មើ (មិនត្រូវធ្វើលក្ខណៈគំរូប្រភេទ)
- \`!==\` មិនស្មើ (ធ្វើការពិនិត្យប្រភេទទាំងតម្លៃ / Strict Inequality)

**ឧទាហរណ៍៖**
\`\`\`javascript
let a = 5; 
let b = "5"; 
console.log(a > 3);   // true 
console.log(a == b);  // true (មិនត្រួតពិនិត្យប្រភេទ) 
console.log(a === b); // false (ត្រួតពិនិត្យប្រភេទផង: Number vs String) 
console.log(a !== b); // true (ព្រោះលេខ 5 និងអក្សរ "5" គឺប្រភេទខុស)
\`\`\`

> **សំណួរគន្លឹះ៖ ចូរបង្ហាញលទ្ធផលកូដខាងក្រោម ៖**  
> \`\`\`javascript
> var x = 5; var y = 4; var result = x > y;  
> document.writeln("<h3>The result is :" + result);
> \`\`\`
> **The Result is :**  
> - **A. True** ✅ *(ចម្លើយត្រឹមត្រូវ ព្រោះ 5 ធំជាង 4 គឺជាការពិត \`true\`)*  
> - **B. False**

---

#### ឃ. Logical Operators (ឈ្នាប់តក្កវិជ្ជា)
**Logical Operators** ជាឈ្នាប់ដែលគេប្រើសម្រាប់ តក្កវិជ្ជាដែលមានតំលៃតែ **True** និង **False** ប៉ុណ្ណោះ។  
- **ឈ្នាប់និង (\`&&\` - Logical AND):** ពិតលុះត្រាតែលក្ខណខណ្ឌទាំងសងខាងពិតទាំងពីរ (\`true && true => true\`)។ បើ Operand មួយទៀតខុស => \`false\`។
- **ឈ្នាប់រឺ (\`||\` - Logical OR):** ពិតក្នុងករណីដែលលក្ខណខណ្ឌណាមួយពិត (\`true || false => true\`)។ ចាំបាច់មាន Operand មួយតែបង្កើតបាន \`true\` ក៏ធ្វើអោយលទ្ធផល \`true\`។
- **ឈ្នាប់មិន (\`!\` - Logical NOT):** បញ្ជ្រាស់ពីលក្ខណខណ្ឌ។ បើលក្ខណខណ្ឌពិត (\`True\`) វានឹងក្លាយជាមិនពិត (\`False\`)។ តម្លៃប៉ុន្មានក៏អាច Invert លទ្ធផល boolean បាន ឧទាហរណ៍ \`!true => false\`។

| Symbol | Meaning | Expression | Result |
| :---: | :--- | :---: | :---: |
| \`&&\` | ឈ្នាប់និង | \`(5 > 3) && (5 != 3)\` | \`True\` |
| \`\\|\\|\` | ឈ្នាប់រឺ | \`(5 < 3) \\|\\| (5 == 3)\` | \`False\` |
| \`!\` | ឈ្នាប់មិន | \`!(5 < 3)\` | \`True\` |

**ឧទាហរណ៍៖**
\`\`\`javascript
let c = 10; 
let d = 5; 

// Example AND (&&)
console.log(c > 0 && d < 10); // true (ទាំងពីរត្រូវ) 

// Example OR (||)
console.log(c < 5 || d === 5); // true (មួយត្រូវ) 

// Example NOT (!)
console.log(!(c === 10)); // false (ព្រោះ c === 10 គឺ true, !true => false)
\`\`\`

Logical Operators ត្រូវបានប្រើដើម្បីបន្លាយលទ្ធផលប្រៀបធៀបឬអធិប្បាយអ្វីមួយផងដែរ ឬធ្វើការ chaining បាន។

---

#### ង. ការប្រៀបធៀបនិងឈ្នាប់តក្កវិជ្ជាជាក់ស្តែង (Chaining Logical Expressions)
> **សំណួរ៖** ចូរធ្វើការប្រៀបធៀបនិងឈ្នាប់មួយចំនួនដូចខាងក្រោម ដោយបង្ហាញថាលទ្ធផល True or False៖  
> \`var a=50, b=8, c=100, m1, m2 ;\`:

*ការវិភាគលក្ខខណ្ឌជាមុន៖*
- \`a > b\` គឺ \`50 > 8\` ទទួលបានលទ្ធផល **\`true\`**
- \`b > c\` គឺ \`8 > 100\` ទទួលបានលទ្ធផល **\`false\`**

**ដំណោះស្រាយ និងការពន្យល់លម្អិត៖**
1. **\`a > b && b > c\`**  
   - គណនា៖ \`true && false\`  
   - **លទ្ធផល៖ \`false\`**  
   - *ការពន្យល់៖* ឈ្នាប់ \`&&\` (AND) ត្រូវការលក្ខខណ្ឌសងខាងពិតទាំងពីរ ប៉ុន្តែដោយសារ \`b > c\` មិនពិត (\`false\`) នាំឱ្យលទ្ធផលចេញ \`false\`
2. **\`a > b && !(b > c)\`**  
   - គណនា៖ \`true && !(false)\` ស្មើនឹង \`true && true\`  
   - **លទ្ធផល៖ \`true\`**  
   - *ការពន្យល់៖* \`!(b > c)\` បានបំប្លែង false ទៅជា true នាំឱ្យលក្ខខណ្ឌសងខាងពិតទាំងពីរ
3. **\`!(a > b && b > c)\`**  
   - គណនា៖ \`!(true && false)\` ស្មើនឹង \`!(false)\`  
   - **លទ្ធផល៖ \`true\`**  
   - *ការពន្យល់៖* កន្សោមខាងក្នុង \`(a > b && b > c)\` ចេញ false ពេលបំពាក់ឈ្នាប់ \`!\` បញ្ច្រាស នាំឱ្យលទ្ធផលក្លាយជា true
4. **\`a > b || b > c\`**  
   - គណនា៖ \`true || false\`  
   - **លទ្ធផល៖ \`true\`**  
   - *ការពន្យល់៖* ឈ្នាប់ \`||\` (OR) ទាមទារត្រឹមតែ Operand មួយពិត ក៏ធ្វើឱ្យលទ្ធផលទាំងមូលចេញ true ដែរ
5. **\`!(a > b) || (b > c)\`**  
   - គណនា៖ \`!(true) || false\` ស្មើនឹង \`false || false\`  
   - **លទ្ធផល៖ \`false\`**  
   - *ការពន្យល់៖* ដោយសារ \`!(true)\` ស្មើនឹង false ហើយ \`b > c\` ក៏ false នាំឱ្យលទ្ធផលនៃឈ្នាប់ \`||\` ចេញ \`false\`
    `,
    syntaxExamples: [
      {
        title: '១. ការរៀបចំធាតុ HTML ជាមួយ id និង innerHTML',
        description: 'ការដំណើរការធាតុ HTML ជាមួយ id ជាក់លាក់ ហើយផ្លាស់ប្តូរ Content របស់វា',
        code: `// ១. HTML Elements:
// <h1 id="header">My First Web Page</h1>
// <p id="demo">My First Paragraph</p>
// <div id="myDIV">Initial text</div>

// ២. ដំណើរការធាតុ HTML តាម id និងប្តូរ innerHTML
document.getElementById("demo").innerHTML = "My First JavaScript";

// ៣. ប្តូរធាតុ HTML ពីរជាបន្តបន្ទាប់ (JavaScript Statements)
document.getElementById("demo").innerHTML = "Hello Dolly";
document.getElementById("myDIV").innerHTML = "How are you?";`
      },
      {
        title: '២. ការសរសេរលទ្ធផលជា Document (document.write) និងការប្រុងប្រយ័ត្ន',
        description: 'ការប្រើ document.write() សរសេរដោយផ្ទាល់ និងផលប៉ះពាល់ពេលចុចប៊ូតុងក្រោយ page load',
        code: `// ១. សរសេរពេលទំព័រកំពុងផ្ទុក (Direct Document Output)
document.write("<h1>My First Web Page</h1>");
document.write("<p>My First JavaScript</p>");

// ២. ការប្រុងប្រយ័ត្នពេលប្រើ document.write() ក្នុង Function (ក្រោយ Page Load)
function showWarningDemo() {
  // ⚠️ ការហៅ document.write() ពេលនេះ នឹង overwrite លុបទំព័រ HTML ទាំងមូល!
  document.write("Oops! The document disappeared!");
}`
      },
      {
        title: '៣. JavaScript Statements, Semicolons (;) និង Code Blocks ({ })',
        description: 'ការប្រើ semicolon ផ្តាច់ statements, ការសរសេរច្រើនលើបន្ទាត់តែមួយ, និងការបង្កើត Function Block',
        code: `// ១. Statements នីមួយៗបញ្ចប់ដោយ Semicolon (;)
var a = 5;
var b = 6;
var c = a + b;

// ២. សរសេរ Statements ច្រើននៅលើបន្ទាត់តែមួយដោយប្រើ semicolon
var x = 10; var y = 20; var z = x + y;
console.log("z =", z);

// ៣. JavaScript Code Block { } ប្រមូលផ្តុំ Statements ឱ្យដំណើរការរួមគ្នា
function updateElements() {
  document.getElementById("demo").innerHTML = "Hello Dolly";
  document.getElementById("myDIV").innerHTML = "How are you?";
}`
      },
      {
        title: '៤. ច្បាប់ Case-Sensitivity, Whitespace និងការចុះបន្ទាត់ String (\\)',
        description: 'ការប្រកាន់អក្សរតូចធំ, ចន្លោះទំនេរស្មើគ្នា, និងការចុះបន្ទាត់ String ដោយ Backslash',
        code: `// ១. Case-Sensitive: myVariable មិនដូច MyVariable
var myVariable = "សួស្តី";
var MyVariable = "ជំរាបសួរ";
console.log(myVariable); // "សួស្តី"
console.log(MyVariable); // "ជំរាបសួរ"
// getElementById គឺត្រូវសរសេរត្រឹមត្រូវ មិនមែន getElementbyID ទេ!

// ២. Whitespace: ពីរបន្ទាត់នេះមានតម្លៃស្មើគ្នាទាំងស្រុង
var name="Hege";
var name = "Hege";

// ៣. កូដចុះបន្ទាត់ក្នុង String ដោយប្រើ Backslash (\\)
var bannerText = "Hello \\
World!";
console.log(bannerText); // "Hello World!"`
      },
      {
        title: '៥. វិធីសាស្ត្រទាំង ៣ ក្នុងការប្រើ <script> Tag និង Comments',
        description: 'Inline (onclick), Internal (<script>), External (script.js) និង Comments (//, /* */)',
        code: `// Single-line Comment មួយបន្ទាត់
/*
  Multi-line Comment ច្រើនបន្ទាត់
  Browser មិនដំណើរការកូដក្នុង comment ឡើយ
*/

// Inline Demo: <button onclick="alert('Hello!')">Click</button>

// Internal / External Demo:
function greetUser(userName) {
  var welcomeText = "សួស្ដី " + userName;
  console.log(welcomeText);
  return welcomeText;
}`
      },
      {
        title: '៦. ការប្រើប្រាស់ Arithmetic Operators និង Pre/Post Increment',
        description: 'ការគណនាពីជគណិត (+, -, *, /, %, **), String Concatenation, eval(), និងការប្រែប្រួលរវាង x++ និង ++y',
        code: `// ១. អថេរ និងតម្លៃគំរូ
var x = 10, y = 20, z = "30", s = "abc", r;

// ២. គណនាពីជគណិត និង Concatenation
r = x + y;       // 30 (10 + 20)
console.log("x + y =", r);

r = x + z;       // "1030" (10 តភ្ជាប់ជាមួយ "30")
console.log("x + z =", r);

r = x + s;       // "10abc" (10 តភ្ជាប់ជាមួយ "abc")
console.log("x + s =", r);

r = x + eval(z); // 40 (10 + 30 ព្រោះ eval បម្លែងទៅលេខ)
console.log("x + eval(z) =", r);

// ៣. Pre-increment vs Post-increment
var n = 10;
var post = n++;  // post = 10, n ក្លាយជា 11
console.log("Post-increment (n++):", post, "n ថ្មី:", n);

var m = 20;
var pre = ++m;   // pre = 21, m ក្លាយជា 21
console.log("Pre-increment (++m):", pre, "m ថ្មី:", m);

// ៤. ផលបូករួម: x++ + ++y
var a = 10, b = 20;
var total = a++ + ++b; // 10 + 21 = 31 (a ក្លាយជា 11, b ក្លាយជា 21)
console.log("a++ + ++b =", total);`
      },
      {
        title: '៧. ការប្រើប្រាស់ Comparison & Logical Operators (== vs ===, Chaining)',
        description: 'ការប្រៀបធៀបស្មើដាច់ខាត (===), មិនស្មើដាច់ខាត (!==), និងការប្រើឈ្នាប់ &&, ||, ! ក្នុងកន្សោមតក្កវិជ្ជា',
        code: `// ១. Comparison: == vs ===
console.log(5 == "5");  // true (ប្រៀបធៀបតែតម្លៃ មិនគិតប្រភេទ DataType)
console.log(5 === "5"); // false (ពិនិត្យទាំងតម្លៃ និង DataType: Number vs String)
console.log(5 !== "5"); // true (មិនស្មើដាច់ខាត)

// ២. ការប្រៀបធៀបសាមញ្ញ
var x = 5, y = 4;
var result = x > y;
console.log("The result of x > y is:", result); // true

// ៣. Logical Chaining ជាមួយ a=50, b=8, c=100
var a = 50, b = 8, c = 100;
// a > b គឺ true (50 > 8), b > c គឺ false (8 > 100)

console.log("a > b && b > c:", a > b && b > c);       // false (true && false)
console.log("a > b && !(b > c):", a > b && !(b > c)); // true (true && true)
console.log("!(a > b && b > c):", !(a > b && b > c)); // true (!(false))
console.log("a > b || b > c:", a > b || b > c);       // true (true || false)
console.log("!(a > b) || (b > c):", !(a > b) || (b > c)); // false (false || false)`
      }
    ],
    guidedPractice: {
      title: 'Interactive Webpage Controller (កម្មវិធីបញ្ជាគេហទំព័រដំបូងរបស់អ្នក)',
      description: 'អនុវត្តការសរសេរកូដ JavaScript ទាំង ៣ របៀប (Inline, Internal, External Style) ដើម្បីបញ្ជាប្តូរអត្ថបទ (innerHTML), ប្តូរពណ៌ (style.color), បង្ហាញ Alert Box, និងតាមដានទិន្នន័យ Console Logs (Text, Array, Object) តាមរយៈផ្ទាំង UI ផ្ទាល់!',
      runnableJsCode: `// ===============================================
// មេរៀនទី១៖ ការណែនាំឱ្យស្គាល់ពី JavaScript
// ===============================================

// ១. បង្ហាញទិន្នន័យតាម console.log() គ្រប់ប្រភេទ
console.log("=== ១. សាកល្បង console.log() ===");
console.log("Hello, JavaScript!");
console.log("លេខសំណាង:", 42, 12345);
console.log("Array ផ្លែឈើ:", ["ផ្លែប៉ោម", "ផ្លែចេក", "ផ្លែក្រូច"]);
console.log("Object ព័ត៌មានសិស្ស:", { name: "សុខ", age: 19, major: "Computer Science" });

// ២. Case Sensitive Check
let greetingMessage = "សួស្តីពេលព្រឹក!";
let GreetingMessage = "សួស្តីពេលល្ងាច!";
console.log("greetingMessage:", greetingMessage);
console.log("GreetingMessage:", GreetingMessage);

// ៣. Arithmetic Operators & Concatenation
console.log("=== ៣. សាកល្បង Arithmetic Operators ===");
var x = 10, y = 20, z = "30", s = "abc";
console.log("x + y =", x + y);             // 30
console.log("x + z =", x + z);             // "1030"
console.log("x + s =", x + s);             // "10abc"
console.log("x + eval(z) =", x + eval(z)); // 40
console.log("10 % 3 =", 10 % 3);           // 1 (Modulus)
console.log("2 ** 3 =", 2 ** 3);           // 8 (Exponentiation)

// ៤. Pre/Post Increment
var valA = 10, valB = 20;
var combined = valA++ + ++valB;
console.log("valA++ + ++valB =", combined, "| valA ថ្មី:", valA, "| valB ថ្មី:", valB); // 31

// ៥. Comparison & Logical Operators Chaining
console.log("=== ៥. សាកល្បង Comparison & Logic ===");
var a = 50, b = 8, c = 100;
console.log("5 == '5' (Loose):", 5 == "5");     // true
console.log("5 === '5' (Strict):", 5 === "5");  // false
console.log("a > b && b > c:", a > b && b > c); // false
console.log("a > b && !(b > c):", a > b && !(b > c)); // true
console.log("a > b || b > c:", a > b || b > c); // true

// ៦. អនុគមន៍គណនាវិក្កយបត្រ
console.log("=== ៦. អនុគមន៍គណនា ===");
function calculateItemPrice(name, price, qty) {
  const total = price * qty;
  console.log(\`ទំនិញ: \${name} | តម្លៃរាយ: $\${price} | ចំនួន: \${qty} => សរុប: $\${total}\`);
  return total;
}

const bill1 = calculateItemPrice("សៀវភៅ JavaScript", 12.5, 3);
const bill2 = calculateItemPrice("កណ្ដុរ Wireless", 18.0, 2);
console.log("សរុបវិក្កយបត្រ:", bill1 + bill2, "ដុល្លារ");
`,
      files: [
        {
          filename: 'index.html',
          language: 'html',
          code: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <title>មេរៀនទី១៖ ការណែនាំឱ្យស្គាល់ពី JavaScript</title>
  <link rel="stylesheet" href="style.css">
  <link href="https://fonts.googleapis.com/css2?family=Kantumruy+Pro:wght@400;500;600;700&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet">
  <!-- JavaScript ក្នុង <head> សម្រាប់អនុគមន៍ដំបូង -->
  <script>
    function headScriptDemo() {
      const demoP = document.getElementById("demo-paragraph");
      if (demoP) {
        demoP.innerHTML = "<strong>✅ អនុគមន៍ក្នុង &lt;head&gt; បានផ្លាស់ប្តូរខ្ញុំជោគជ័យ!</strong>";
        demoP.style.color = "#10b981";
      }
      console.log("អនុគមន៍ headScriptDemo() ត្រូវបានហៅពី <head>!");
    }
  </script>
</head>
<body>
  <div class="app-container">
    <header class="app-header">
      <div class="logo-badge">JS1</div>
      <div>
        <h1>មេរៀនទី១៖ ការណែនាំឱ្យស្គាល់ពី JavaScript</h1>
        <p>សិក្សាពីតួនាទី, វិធីដាក់កូដទាំង ៣ (Inline, Internal, External), DOM មូលដ្ឋាន និង DevTools Console</p>
      </div>
    </header>

    <div class="main-grid">
      <!-- ផ្នែកគ្រប់គ្រង និងប៊ូតុងអន្តរកម្ម -->
      <div class="card control-card">
        <h2>🎮 ផ្ទាំងបញ្ជាអន្តរកម្ម (Interactive Controls)</h2>

        <!-- ១. Inline JavaScript Demo -->
        <div class="control-section">
          <h3>១. វិធី Inline JavaScript</h3>
          <p class="desc">សរសេរបញ្ជាផ្ទាល់លើ Attribute <code>onclick</code> របស់ប៊ូតុង៖</p>
          <div class="button-row">
            <button type="button" class="btn btn-warning" onclick="alert('🎉 សួស្ដី! នេះគឺជា Alert Box ពី Inline JavaScript (onclick=alert...)')">
              🔔 ចុចមើល Alert (Inline JS)
            </button>
          </div>
        </div>

        <!-- ២. Internal JavaScript Demo -->
        <div class="control-section">
          <h3>២. វិធី Internal JavaScript (&lt;head&gt; / &lt;body&gt;)</h3>
          <p class="desc">ហៅអនុគមន៍ដែលសរសេរក្នុង <code>&lt;script&gt;</code> នៃឯកសារ HTML៖</p>
          <div class="button-row">
            <button type="button" class="btn btn-secondary" onclick="headScriptDemo()">
              🏷️ ដំណើរការ Function ពី &lt;head&gt;
            </button>
          </div>
        </div>

        <!-- ៣. External JavaScript Demo -->
        <div class="control-section">
          <h3>៣. វិធី External JavaScript &amp; DOM Manipulation</h3>
          <p class="desc">ចាប់យក Element តាម ID រួចផ្លាស់ប្តូរ Content និង Style តាម <code>script.js</code>៖</p>
          <div class="button-row">
            <button type="button" id="btn-change-text" class="btn btn-primary">
              ✏️ ប្តូរអត្ថបទ (innerHTML)
            </button>
            <button type="button" id="btn-change-color" class="btn btn-success">
              🎨 ប្តូរពណ៌ (style.color)
            </button>
            <button type="button" id="btn-reset" class="btn btn-outline">
              🔄 កំណត់ឡើងវិញ (Reset)
            </button>
          </div>
        </div>

        <!-- ៤. Console Log Triggers -->
        <div class="control-section">
          <h3>៤. សាកល្បង Console Log (ពិនិត្យទិន្នន័យ)</h3>
          <p class="desc">បាញ់ទិន្នន័យ String, Number, Array, និង Object ចូលក្នុង Console៖</p>
          <div class="button-row">
            <button type="button" class="btn btn-info" onclick="logSampleData()">
              📊 បាញ់ទិន្នន័យ (Log Data to Console)
            </button>
          </div>
        </div>
      </div>

      <!-- ផ្នែកបង្ហាញលទ្ធផល និង Console Output -->
      <div class="card display-card">
        <h2>🖥️ ផ្ទៃបង្ហាញលទ្ធផលគេហទំព័រ (Live DOM Preview)</h2>
        <div class="preview-box">
          <h1 id="main-heading">My Web Page</h1>
          <p id="demo-paragraph">A Paragraph (ចុចប៊ូតុងខាងឆ្វេងដើម្បីផ្លាស់ប្តូរខ្លឹមសារ)</p>
          <div id="status-badge" class="badge">រង់ចាំសកម្មភាព...</div>
        </div>

        <!-- Virtual Console លើផ្ទាំង Browser -->
        <div class="console-box">
          <div class="console-header">
            <span>Browser Developer Tools &gt; Console Simulator</span>
            <button type="button" class="btn-text" onclick="clearConsole()">Clear Console</button>
          </div>
          <div id="consoleOutput" class="console-content">
            <div class="log-info">[System] DevTools Console បានបើករួចរាល់។ កូដ JavaScript កំពុងដំណើរការលើ Client Browser...</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ភ្ជាប់ External JavaScript នៅចុងបញ្ចប់នៃ <body> -->
  <script src="script.js"></script>
</body>
</html>`
        },
        {
          filename: 'style.css',
          language: 'css',
          code: `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Kantumruy Pro', sans-serif;
  background-color: #0b1120;
  color: #f1f5f9;
  padding: 24px 16px;
  line-height: 1.6;
}

.app-container {
  max-width: 1200px;
  margin: 0 auto;
}

.app-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid #1e293b;
}

.logo-badge {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #f59e0b, #d97706);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 18px;
  color: #ffffff;
  box-shadow: 0 4px 12px rgba(245, 158, 11, 0.3);
}

.app-header h1 {
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
}

.app-header p {
  font-size: 13px;
  color: #94a3b8;
}

.main-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}

@media (min-width: 1024px) {
  .main-grid {
    grid-template-columns: 1fr 1fr;
  }
}

.card {
  background: #0f172a;
  border: 1px solid #1e293b;
  border-radius: 16px;
  padding: 20px;
}

.card h2 {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 16px;
  color: #e2e8f0;
}

.control-section {
  background: #1e293b;
  border: 1px solid #334155;
  border-radius: 12px;
  padding: 14px;
  margin-bottom: 14px;
}

.control-section h3 {
  font-size: 13px;
  color: #38bdf8;
  margin-bottom: 4px;
}

.control-section .desc {
  font-size: 11px;
  color: #94a3b8;
  margin-bottom: 10px;
}

.control-section code {
  background: #0b1120;
  color: #f59e0b;
  padding: 2px 5px;
  border-radius: 4px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
}

.button-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.btn {
  padding: 8px 14px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  border: 1px solid transparent;
  transition: all 0.2s ease;
  font-family: inherit;
}

.btn-primary { background: #2563eb; color: #ffffff; }
.btn-primary:hover { background: #1d4ed8; }

.btn-secondary { background: #475569; color: #ffffff; }
.btn-secondary:hover { background: #334155; }

.btn-success { background: #059669; color: #ffffff; }
.btn-success:hover { background: #047857; }

.btn-warning { background: #d97706; color: #ffffff; }
.btn-warning:hover { background: #b45309; }

.btn-info { background: #0284c7; color: #ffffff; }
.btn-info:hover { background: #0369a1; }

.btn-outline { background: transparent; color: #94a3b8; border-color: #475569; }
.btn-outline:hover { background: #1e293b; color: #f1f5f9; }

.preview-box {
  background: #ffffff;
  color: #0f172a;
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.preview-box h1 {
  font-size: 22px;
  color: #0f172a;
  margin-bottom: 8px;
  transition: color 0.3s ease;
}

.preview-box p {
  font-size: 14px;
  color: #475569;
  margin-bottom: 16px;
  transition: all 0.3s ease;
}

.badge {
  display: inline-block;
  padding: 4px 10px;
  background: #e2e8f0;
  color: #475569;
  border-radius: 20px;
  font-size: 11px;
  font-weight: 600;
}

.console-box {
  background: #060913;
  border: 1px solid #1e293b;
  border-radius: 10px;
  overflow: hidden;
}

.console-header {
  background: #0d1527;
  padding: 8px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 11px;
  color: #94a3b8;
  font-family: 'JetBrains Mono', monospace;
}

.btn-text {
  background: none;
  border: none;
  color: #38bdf8;
  font-size: 11px;
  cursor: pointer;
}

.console-content {
  padding: 12px;
  height: 180px;
  overflow-y: auto;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.log-line { color: #38bdf8; }
.log-info { color: #94a3b8; font-style: italic; }
.log-success { color: #34d399; }
.log-highlight { color: #f59e0b; }`
        },
        {
          filename: 'script.js',
          language: 'javascript',
          code: `// ===============================================
// External JavaScript File: script.js
// ===============================================

// កម្មវិធីជំនួយបង្ហាញ Console លើ UI
function logToVirtualConsole(message, type = "normal") {
  const consoleBox = document.getElementById("consoleOutput");
  if (!consoleBox) return;
  const line = document.createElement("div");
  const time = new Date().toLocaleTimeString();
  line.className = type === "success" ? "log-success" : type === "highlight" ? "log-highlight" : "log-line";
  line.textContent = \`[\${time}] \${message}\`;
  consoleBox.appendChild(line);
  consoleBox.scrollTop = consoleBox.scrollHeight;
}

function clearConsole() {
  const consoleBox = document.getElementById("consoleOutput");
  if (consoleBox) {
    consoleBox.innerHTML = '<div class="log-info">[Console Cleared]</div>';
  }
}

// ១. ការចាប់យក DOM Elements តាម ID
const heading = document.getElementById("main-heading");
const paragraph = document.getElementById("demo-paragraph");
const statusBadge = document.getElementById("status-badge");

const btnChangeText = document.getElementById("btn-change-text");
const btnChangeColor = document.getElementById("btn-change-color");
const btnReset = document.getElementById("btn-reset");

// ២. ការផ្លាស់ប្តូរ HTML Content (innerHTML)
let textChanged = false;
if (btnChangeText) {
  btnChangeText.addEventListener("click", () => {
    paragraph.innerHTML = "<strong>🎉 Hello JavaScript! ខ្លឹមសារត្រូវបានផ្លាស់ប្តូរតាម document.getElementById('demo-paragraph').innerHTML</strong>";
    statusBadge.textContent = "ស្ថានភាព: អត្ថបទត្រូវបានកែប្រែ";
    statusBadge.style.background = "#dbeafe";
    statusBadge.style.color = "#1e40af";
    
    logToVirtualConsole("innerHTML ត្រូវបានកែប្រែដោយជោគជ័យ!", "success");
    console.log("demo-paragraph innerHTML changed!");
    textChanged = true;
  });
}

// ៣. ការផ្លាស់ប្តូរ HTML Style (style.color)
const colorPalette = ["#ef4444", "#8b5cf6", "#059669", "#d97706", "#2563eb"];
let colorIndex = 0;

if (btnChangeColor) {
  btnChangeColor.addEventListener("click", () => {
    const chosenColor = colorPalette[colorIndex % colorPalette.length];
    colorIndex++;
    
    // ប្តូរពណ៌ទៅលើ Style Attribute របស់ HTML
    heading.style.color = chosenColor;
    paragraph.style.color = chosenColor;
    
    logToVirtualConsole(\`ប្តូរពណ៌អក្សរទៅជា \${chosenColor} តាមរយៈ element.style.color\`, "highlight");
    console.log("Style changed to color:", chosenColor);
  });
}

// ៤. Reset Content
if (btnReset) {
  btnReset.addEventListener("click", () => {
    heading.style.color = "#0f172a";
    paragraph.style.color = "#475569";
    paragraph.innerHTML = "A Paragraph (ចុចប៊ូតុងខាងឆ្វេងដើម្បីផ្លាស់ប្តូរខ្លឹមសារ)";
    statusBadge.textContent = "រង់ចាំសកម្មភាព...";
    statusBadge.style.background = "#e2e8f0";
    statusBadge.style.color = "#475569";
    
    logToVirtualConsole("កំណត់រចនាសម្ព័ន្ធឡើងវិញ (DOM Reset)", "normal");
  });
}

// ៥. សាកល្បង console.log() បង្ហាញទិន្នន័យគ្រប់ប្រភេទ
function logSampleData() {
  logToVirtualConsole("--- បាញ់ទិន្នន័យសាកល្បងទៅកាន់ Developer Console ---", "normal");
  
  // Display text
  console.log("Hello, JavaScript!");
  logToVirtualConsole('console.log("Hello, JavaScript!");');

  // Display numbers
  console.log(42);
  logToVirtualConsole('console.log(42);');

  // Display an array
  const fruits = ["ផ្លែប៉ោម", "ផ្លែចេក", "ផ្លែក្រូច"];
  console.log(fruits);
  logToVirtualConsole('console.log(["ផ្លែប៉ោម", "ផ្លែចេក", "ផ្លែក្រូច"]);');

  // Display an object
  const user = { name: "John", age: 25, role: "Developer" };
  console.log(user);
  logToVirtualConsole('console.log({ name: "John", age: 25, role: "Developer" });');

  // Case Sensitive check
  let student = "វីរៈ";
  let Student = "សុខា";
  console.log("Case Sensitivity:", { student, Student });
  logToVirtualConsole(\`Case Sensitivity: student="\${student}", Student="\${Student}"\`, "highlight");
}

console.log("script.js External File បានផ្ទុក និងដំណើរការចប់សព្វគ្រប់!");
logToVirtualConsole("External Script (script.js) បានភ្ជាប់ និងដំណើរការដោយជោគជ័យ!", "success");`
        }
      ],
      expectedOutput: 'អ្នកអាចចុចប៊ូតុង Inline Alert, ប៊ូតុង Internal JS ពី Head, ប៊ូតុងកែប្រែអត្ថបទ (innerHTML) និងពណ៌ (style.color) ពី External JS ហើយមើល Console Output បង្ហាញ Text, Number, Array និង Object ភ្លាមៗ!'
    },
    commonMistakes: [
      {
        mistake: 'ច្រឡំអក្សរតូចធំ (Case-Sensitivity) ក្នុងឈ្មោះ Function ឬ Variable (ឧ. getElementbyID ឬ getElementByID)',
        cause: 'JavaScript ប្រកាន់អក្សរតូចធំយ៉ាងតឹងរ៉ឹង! ឧទាហរណ៍ getElementById មិនដូច getElementbyID ហើយ variable myVariable មិនដូច MyVariable',
        wrongCode: 'document.getElementbyID("demo").innerHTML = "Hello"; // TypeError: not a function\nvar myVariable = "Hi";\nconsole.log(MyVariable); // ReferenceError',
        fixedCode: 'document.getElementById("demo").innerHTML = "Hello";\nvar myVariable = "Hi";\nconsole.log(myVariable);',
        fix: 'ត្រូវប្រយ័ត្នតួអក្សរតូចធំជានិច្ច និងពិនិត្យមើលថាតើ Caps Lock ត្រូវបានបិទឬនៅពេលសរសេរកូដ'
      },
      {
        mistake: 'ការប្រើ document.write() ក្នុង Function ឬបន្ទាប់ពីទំព័រ HTML ផ្ទុកចប់',
        cause: 'document.write() ប្រើសម្រាប់តែសរសេរពេល page loading ប៉ុណ្ណោះ។ បើដំណើរការក្រោយ page load (ដូចជាពេលចុចប៊ូតុង) វានឹង overwrite លុបទំព័រ HTML ចោលទាំងអស់',
        wrongCode: 'button.onclick = function() {\n  document.write("Oops! The document disappeared!");\n};',
        fixedCode: 'button.onclick = function() {\n  document.getElementById("demo").innerHTML = "ខ្លឹមសារត្រូវបានផ្លាស់ប្តូរ!";\n};',
        fix: 'ប្រើ document.getElementById("id").innerHTML ឬ textContent ជំនួសឱ្យ document.write() ដើម្បីកែប្រែធាតុជាក់លាក់ដោយមិនបាត់បង់ទំព័រ'
      },
      {
        mistake: 'សរសេរកូដចុះបន្ទាត់ក្នុង String ដោយមិនបានប្រើ Backslash (\\)',
        cause: 'JavaScript មិនអនុញ្ញាតឱ្យចុះបន្ទាត់កណ្តាល String ដែលព័ទ្ធដោយសញ្ញាសម្រង់ "..." ធម្មតាឡើយ ដែលបណ្តាលឱ្យកើតមាន SyntaxError: Unterminated string literal',
        wrongCode: 'document.write("Hello \nWorld!"); // ❌ កំហុស SyntaxError',
        fixedCode: 'document.write("Hello \\\nWorld!"); // ✅ ត្រឹមត្រូវដោយប្រើសញ្ញា Backslash (\\)',
        fix: 'ប្រើសញ្ញា Backslash (\\) នៅចុងបន្ទាត់ ឬប្រើ Template Literals (``) ក្នុង ES6'
      },
      {
        mistake: 'ភ្លេចបិទសញ្ញាដង្កៀប Code Block { } ឬច្រឡំដាក់ semicolon ក្រោយឈ្មោះ Function',
        cause: 'Code Block ត្រូវតែមានគូរ { } ត្រឹមត្រូវដើម្បីឱ្យ Browser ដំណើរការ Statements ក្នុង Block ព្រមគ្នា',
        wrongCode: 'function myFunction(); { \n  document.getElementById("demo").innerHTML = "Hello Dolly"\n',
        fixedCode: 'function myFunction() {\n  document.getElementById("demo").innerHTML = "Hello Dolly";\n}',
        fix: 'កុំដាក់ semicolon នៅចុងបន្ទាត់ function header និងត្រូវប្រាកដថាបានបិទ curly bracket } គ្រប់ block'
      }
    ],
    exercises: [
      {
        level: 'មូលដ្ឋាន (Basic)',
        prompt: 'ចូរសរសេរកូដ HTML & JavaScript ដោយមាន <p id="demo">My First Paragraph</p> រួចប្រើ document.getElementById() និង innerHTML ដើម្បីផ្លាស់ប្តូរ Content របស់វាទៅជា "My First JavaScript"។',
        solutionCode: `// ក្នុង HTML: <p id="demo">My First Paragraph</p>
document.getElementById("demo").innerHTML = "My First JavaScript";`,
        explanation: 'ប្រើ document.getElementById("demo") ដើម្បីស្វែងរកធាតុតាម id រួចកំណត់តម្លៃ innerHTML ទៅជា String ថ្មី។'
      },
      {
        level: 'អនុវត្ត (Practical)',
        prompt: 'ចូរគណនាពីជគណិត និងកំណត់តម្លៃឱ្យអថេរ r ដោយមាន var x=10, y=20, z="30", s="abc"៖ ១. r = x + y; ២. r = x + z; ៣. r = x + eval(z); ៤. r = x++ + ++y; រួចបង្ហាញលទ្ធផលនីមួយៗតាម console.log()។',
        solutionCode: `var x = 10, y = 20, z = "30", s = "abc", r;

r = x + y;
console.log("x + y =", r); // 30

r = x + z;
console.log("x + z =", r); // "1030" (String Concatenation)

r = x + eval(z);
console.log("x + eval(z) =", r); // 40 (10 + 30)

r = x++ + ++y;
console.log("x++ + ++y =", r); // 31 (10 + 21, ហើយ x=11, y=21)`,
        explanation: 'បង្ហាញពីការបូកលេខ, String concatenation, ការបំប្លែងតាម eval(), និងភាពខុសគ្នារវាង Post-increment (x++) និង Pre-increment (++y)។'
      },
      {
        level: 'កម្រិតខ្ពស់ (Advanced)',
        prompt: 'ចូរពិនិត្យ និងបង្ហាញលទ្ធផល (true ឬ false) នៃកន្សោមតក្កវិជ្ជា Chaining Expressions ដោយកំណត់ var a = 50, b = 8, c = 100៖ ១. a > b && b > c ២. a > b && !(b > c) ៣. !(a > b && b > c) ៤. a > b || b > c ៥. !(a > b) || (b > c)។',
        solutionCode: `var a = 50, b = 8, c = 100;
// a > b គឺ true (50 > 8), b > c គឺ false (8 > 100)

console.log("១. a > b && b > c =>", a > b && b > c);             // false
console.log("២. a > b && !(b > c) =>", a > b && !(b > c));       // true
console.log("៣. !(a > b && b > c) =>", !(a > b && b > c));       // true
console.log("៤. a > b || b > c =>", a > b || b > c);             // true
console.log("៥. !(a > b) || (b > c) =>", !(a > b) || (b > c));   // false`,
        explanation: 'ឈ្នាប់ && ត្រូវការ true ទាំងពីរ, ឈ្នាប់ || ត្រូវការ true ត្រឹមមួយ, និងឈ្នាប់ ! បញ្ច្រាសពី true ទៅ false ឬ false ទៅ true។'
      },
      {
        level: 'ប្រកួតប្រជែង (Challenge)',
        prompt: 'ចូរបង្កើតអនុគមន៍ compareAndValidate(val1, val2) ដែលប្រៀបធៀបតម្លៃពីរដោយបង្ហាញលទ្ធផលនៃការប្រើ Loose Equality (==) និង Strict Equality (===) ព្រមទាំងពន្យល់ពីមូលហេតុ ប្រសិនបើតម្លៃទាំងពីរស្មើតែ Content តែខុស DataType (ដូចជា 5 និង "5")។',
        solutionCode: `function compareAndValidate(val1, val2) {
  var looseResult = (val1 == val2);
  var strictResult = (val1 === val2);
  
  console.log("ប្រៀបធៀប:", val1, "និង", val2);
  console.log("Loose Equal (==):", looseResult);
  console.log("Strict Equal (===):", strictResult);
  
  if (looseResult && !strictResult) {
    console.log("💡 តម្លៃស្មើគ្នា ប៉ុន្តែ DataType ខុសគ្នា (Type Coercion)!");
  }
}

compareAndValidate(5, "5"); // == true, === false`,
        explanation: 'Strict Equality (===) ពិនិត្យទាំងតម្លៃ និង DataType ចៀសវាងបញ្ហា Bugs ដោយសារ Type Coercion ក្នុង JavaScript។'
      }
    ],
    quiz: [
      {
        id: 1,
        question: 'តើអនុគមន៍ណាដែលប្រើសម្រាប់ដំណើរការ និងស្វែងរកធាតុ HTML តាមរយៈគុណលក្ខណៈ "id" របស់វា?',
        options: [
          'document.getElementById(id)',
          'document.getElementbyID(id)',
          'document.findHtmlId(id)',
          'document.selectElement(id)'
        ],
        correctIndex: 0,
        explanation: 'document.getElementById(id) គឺជាអនុគមន៍ស្តង់ដាររបស់ JavaScript (ចងចាំថាវាជា Case-Sensitive អក្សរ Id ត្រូវសរសេរ Id ដោយ d តូច)។'
      },
      {
        id: 2,
        question: 'តើមានអ្វីកើតឡើងប្រសិនបើអ្នកហៅ document.write() បន្ទាប់ពីទំព័រ HTML ត្រូវបាន Load ចប់សព្វគ្រប់ (ឧ. ពេលចុចប៊ូតុង)?',
        options: [
          'វានឹងបន្ថែមអត្ថបទថ្មីនៅខាងក្រោមទំព័រយ៉ាងស្រស់ស្អាត',
          'វានឹង overwrite និងលុបជម្រះរាល់ HTML ទាំងអស់ដែលមានស្រាប់លើទំព័រចោលទាំងស្រុង',
          'Browser នឹងបិទផ្ទាំង Tab ចោលភ្លាមៗ',
          'គ្មានអ្វីកើតឡើងទាល់តែសោះ'
        ],
        correctIndex: 1,
        explanation: 'ការប្រើ document.write() ក្រោយ page load នឹងលុបជម្រះ HTML document ទាំងមូលចោល ជំនួសដោយ String ថ្មីនោះ។'
      },
      {
        id: 3,
        question: 'តើ JavaScript Statements គឺជាអ្វី ហើយគោលបំណងរបស់វាគឺដើម្បីអ្វី?',
        options: [
          'ជាចំណារពន្យល់កូដដែល Browser មិនដំណើរការ',
          'គឺជា "commands" ទៅកាន់ Browser ដែលមានគោលបំណងដើម្បីប្រាប់ទៅ Browser ថាត្រូវធ្វើអ្វី',
          'ជាឈ្មោះឯកសាររូបភាពនៅលើ Server',
          'ជាប្រភេទពុម្ពអក្សរសម្រាប់តុបតែងគេហទំព័រ'
        ],
        correctIndex: 1,
        explanation: 'JavaScript Statements គឺជាពាក្យបញ្ជា (commands) ទៅកាន់ Browser ដើម្បីប្រាប់ឱ្យ Browser ដឹងថាត្រូវធ្វើអ្វីមួយ។'
      },
      {
        id: 4,
        question: 'តើការប្រើប្រាស់ Semicolon (;) នៅចុងបញ្ចប់ Statement មានសារៈសំខាន់ដូចម្តេច?',
        options: [
          'ជួយផ្តាច់ Statements ចេញពីគ្នា និងអនុញ្ញាតឱ្យសរសេរ Statements ជាច្រើននៅលើបន្ទាត់តែមួយបាន',
          'ជាកាតព្វកិច្ចដាច់ខាត បើគ្មានវានឹង Error គ្រប់ករណី',
          'ប្រើសម្រាប់តែសរសេរលេខគណិតវិទ្យាប៉ុណ្ណោះ',
          'ប្រើដើម្បីបិទ Browser ពេលរត់ចប់'
        ],
        correctIndex: 0,
        explanation: 'Semicolon (;) ជួយផ្តាច់ Statements ឱ្យដាច់ស្រឡះពីគ្នា និងអនុញ្ញាតឱ្យសរសេរ Statements ច្រើនលើបន្ទាត់តែមួយ (ដូចជា var a=5; var b=6;)'
      },
      {
        id: 5,
        question: 'តើកូដខាងក្រោមនេះមួយណាដែលត្រឹមត្រូវក្នុងការសរសេរកូដចុះបន្ទាត់ក្នុង String នៃ JavaScript?',
        options: [
          'document.write("Hello \\nWorld!"); (ដោយគ្មាន backslash ពេលចុះបន្ទាត់កូដផ្ទាល់)',
          'document.write("Hello \\ World!"); (ប្រើ Backslash \\ នៅចុងបន្ទាត់ដើម្បីត String)',
          'document.write("Hello" / "World!");',
          'document.write("Hello" ; "World!");'
        ],
        correctIndex: 1,
        explanation: 'នៅក្នុង JavaScript String ធម្មតា អ្នកអាចសរសេរកូដចុះបន្ទាត់នៅក្នុង String ជាមួយនិងសញ្ញា Backslash (\\)។'
      },
      {
        id: 6,
        question: 'តើមួយណាជាការពិតអំពី JavaScript ជាភាសា Scripting បើធៀបនឹងភាសាដែលត្រូវ Compile?',
        options: [
          'កូដ JavaScript ត្រូវតែ Compile ទៅជា .exe ជាមុនសិនទើបអាចដំណើរការបាន',
          'កូដ Scripting របស់ JavaScript ត្រូវបានដំណើរការបន្ទាត់ដោយបន្ទាត់ (line-by-line) ដោយ Browser ផ្ទាល់ដោយមិនបាច់ Compile មុនឡើយ',
          'JavaScript អាចដំណើរការបានតែពេលគ្មាន Internet ប៉ុណ្ណោះ',
          'Browser មិនអាចអាន JavaScript បានទេ បើគ្មាន Server'
        ],
        correctIndex: 1,
        explanation: 'JavaScript គឺជាភាសា Scripting ដែលត្រូវបាន Browser បកប្រែ និងដំណើរការបន្ទាត់ដោយបន្ទាត់ មិនដូចភាសាបុរាណដែលទាមទារការ Compile មុនឡើយ។'
      },
      {
        id: 7,
        question: 'ចូរបង្ហាញលទ្ធផលកូដខាងក្រោម៖ var x = 5; var y = 4; var result = x > y; document.writeln("<h3>The result is :" + result);',
        options: [
          'A. True',
          'B. False'
        ],
        correctIndex: 0,
        explanation: 'ដោយសារតម្លៃ x (5) ធំជាង y (4) គឺជាការពិត នាំឱ្យកន្សោម x > y ទទួលបានលទ្ធផលជា Boolean គឺ true (True)។'
      },
      {
        id: 8,
        question: 'ប្រសិនបើ var a = 50, b = 8, c = 100; តើកន្សោម a > b && !(b > c) ផ្តល់លទ្ធផលអ្វី?',
        options: [
          'true',
          'false',
          'undefined',
          'NaN'
        ],
        correctIndex: 0,
        explanation: 'a > b គឺ 50 > 8 (true) ហើយ b > c គឺ 8 > 100 (false) នាំឱ្យ !(b > c) ទៅជា true។ ដូចនេះ true && true ទទួលបានលទ្ធផល true។'
      },
      {
        id: 9,
        question: 'ប្រសិនបើ var x = 10; var r = x++; តើតម្លៃ r និង x ស្មើនឹងប៉ុន្មានបន្ទាប់ពីប្រតិបត្តិការ?',
        options: [
          'r = 10 និង x = 11',
          'r = 11 និង x = 11',
          'r = 10 និង x = 10',
          'r = 11 និង x = 10'
        ],
        correctIndex: 0,
        explanation: 'x++ គឺជា Post-increment ដែលវាប្រគល់តម្លៃចាស់របស់ x (10) ឱ្យ r ជាមុនសិន រួចទើបបន្ថែមតម្លៃ x ឡើង ១ ក្លាយជា 11។'
      },
      {
        id: 10,
        question: 'តើមួយណាជាភាពខុសគ្នារវាង 5 == "5" និង 5 === "5" ក្នុង JavaScript?',
        options: [
          '5 == "5" គឺ true (មិនគិតប្រភេទ DataType) រីឯ 5 === "5" គឺ false (ពិនិត្យទាំងតម្លៃ និង DataType)',
          'ទាំងពីរផ្តល់លទ្ធផល true ដូចគ្នា',
          'ទាំងពីរផ្តល់លទ្ធផល false ដូចគ្នា',
          '5 === "5" នឹងបណ្តាលឱ្យមាន SyntaxError'
        ],
        correctIndex: 0,
        explanation: '== ធ្វើការ Type Coercion (បំប្លែងប្រភេទស្វ័យប្រវត្តិ) នាំឱ្យលេខ 5 ស្មើអក្សរ "5" (true)។ ចំណែក === ជា Strict Equality ពិនិត្យទាំងតម្លៃ និង DataType នាំឱ្យចេញ false។'
      }
    ],
    summary: [
      'JavaScript គឺជា Scripting Language ដែលដំណើរការបន្ទាត់ដោយបន្ទាត់ដោយ Browser ផ្ទាល់ដោយមិនចាំបាច់ Compile ជាមុនឡើយ',
      'ការរៀបចំធាតុ HTML៖ ប្រើ document.getElementById(id) ជាមួយគុណលក្ខណៈ "id" ដើម្បីបញ្ជាក់ធាតុ និងប្រើ innerHTML ដើម្បីផ្លាស់ប្តូរ Content',
      'ការសរសេរជា Document៖ document.write() សរសេរផ្ទាល់ពេលផ្ទុកទំព័រ តែត្រូវប្រយ័ត្នកុំប្រើក្រោយ page load ព្រោះវានឹង overwrite ទំព័រទាំងមូល',
      'JavaScript Statements គឺជា "commands" ទៅកាន់ Browser ដើម្បីប្រាប់ថាត្រូវធ្វើអ្វី ហើយ Semicolon (;) ប្រើសម្រាប់ផ្តាច់ Statements (អាចសរសេរច្រើនលើបន្ទាត់តែមួយ)',
      'កូដ JavaScript Blocks ប្រើសញ្ញាដង្កៀប { } ដើម្បីប្រមូលផ្តុំ Statements ជាក្រុមឱ្យដំណើរការរួមគ្នាជាបន្តបន្ទាប់ (ដូចក្នុង Function)',
      'ច្បាប់សំខាន់ៗ៖ JavaScript គឺ Case-Sensitive (getElementById មិនដូច getElementbyID, myVariable មិនដូច MyVariable)',
      'ចន្លោះមើលមិនឃើញ (Spaces) មិនប៉ះពាល់ដល់តម្លៃកូដទេ (var name="Hege" ស្មើនឹង var name = "Hege")',
      'កូដចុះបន្ទាត់ក្នុង String អាចសរសេរបានដោយប្រើសញ្ញា Backslash (\\) នៅចុងបន្ទាត់',
      'Arithmetic Operators (+, -, *, /, %, ++, --, +=, -=, **) ប្រើសម្រាប់គណនាពីជគណិតលើលេខ ហើយសញ្ញា + ក៏ប្រើសម្រាប់ String Concatenation',
      'ភាពខុសគ្នានៃ Increment៖ Post-increment (x++) បោះតម្លៃចាស់សិនទើបបន្ថែម ១ រីឯ Pre-increment (++x) បង្កើនតម្លៃឡើង ១ ជាមុនសិនទើបបោះតម្លៃ',
      'Comparative Operators (==, ===, !=, !==, <, <=, >, >=) បោះតម្លៃជា Boolean (true / false) ដោយ === ពិនិត្យទាំងតម្លៃ និង DataType (Strict Equality)',
      'Logical Operators (&&, ||, !) ប្រើសម្រាប់ត្រួតពិនិត្យ និង Chaining លក្ខខណ្ឌតក្កវិជ្ជា (AND, OR, NOT) ក្នុង JavaScript'
    ]
  },
  {
    id: 2,
    slug: 'variables-and-data-types',
    titleKm: 'មេរៀនទី២៖ អថេរ និងប្រភេទទិន្នន័យ',
    titleEn: 'Lesson 2: Variables and Data Types',
    category: 'Fundamentals',
    prerequisites: ['មេរៀនទី១ (Script defer & Console)', 'ការប្រើប្រាស់ Code Editor'],
    learningOutcomes: [
      'យល់ពីគោលគំនិត Variable ប្រៀបដូចជាពិជគណិត (Algebra) សម្រាប់រក្សាទុកតម្លៃបណ្តោះអាសន្ន ឬ Reference ទៅកាន់ Object',
      'ចេះប្រកាស និងបែងចែកភាពខុសគ្នារវាងពាក្យគន្លឹះទាំងបី៖ let, const, និង var (Scoping និង Re-assignment)',
      'ចេះកំណត់ឈ្មោះអថេរតាមក្បួនខ្នាតត្រឹមត្រូវ (Naming Conventions: អក្សរ, _, $, មិនជាន់ Reserved Words)',
      'ចេះប្រកាស Variables ច្រើនក្នុង Statement តែមួយ (Single statement multiple variables ដោយប្រើក្បៀស ,)',
      'យល់ដឹងពីការប្រកាសឡើងវិញ (Re-declaring) នៃ var ដែលមិនបាត់បង់តម្លៃ និងការធ្វើ JavaScript Arithmetic (+, =)',
      'ស្គាល់ 5 Primitive Types ស្នូល៖ String (Quotes ក្នុង String), Number (Decimals/Integers), Boolean (true/false), Null, Undefined',
      'ចេះប្រើប្រាស់ typeof Operator ដើម្បីត្រួតពិនិត្យប្រភេទទិន្នន័យ (typeof variable)'
    ],
    scenario: 'ប្រព័ន្ធគ្រប់គ្រងសិស្សត្រូវការផ្ទុក ID សិស្ស (មិនផ្លាស់ប្តូរ), អាយុ (ផ្លាស់ប្តូររៀងរាល់ឆ្នាំ) និងពិន្ទុសម្រាប់គណនា។ យើងត្រូវជ្រើសរើសប្រភេទអថេរ (let, const, var) និងប្រភេទទិន្នន័យឱ្យបានត្រឹមត្រូវ។',
    conceptsExplanation: `
### ១. ការយល់ដឹងអំពី Variables និង Data Types (ដូចពិជគណិត)
យើងបង្កើត **Variable (អថេរ)** ដើម្បីរក្សាទុកតម្លៃជាបណ្តោះអាសន្ន ឬ Reference ទៅកាន់ Object ណាមួយ នៅពេលដែលកម្មវិធីមួយកំពុងតែដំណើរការ។ អថេរដែលយើងបង្កើតអាចផ្ទុកតម្លៃដូចជា **String, Number, Array, Object** ជាដើម។

#### ការប្រៀបធៀបទៅនឹងពិជគណិត (Like Algebra):
ពិចារណាលើរូបមន្តគណិតវិទ្យាធម្មតា៖
\`\`\`text
x = 5
y = 6
z = x + y
\`\`\`
- ក្នុងពិជគណិត យើងប្រើអក្សរ \`x\` ផ្ទុកតម្លៃស្មើនឹង \`5\` និង \`y\` ផ្ទុកតម្លៃ \`6\`។
- តាមរយៈការគណនាតម្លៃខាងលើ យើងឃើញថា \`z = x + y\` នាំឱ្យតម្លៃរបស់ \`z = 11\`។
- ក្នុង JavaScript ក៏ដូចគ្នាដែរ! \`x\`, \`y\`, និង \`z\` គឺជា **Variables (អថេរ)** ដែលផ្ទុកទិន្នន័យលេខដើម្បីយកមកធ្វើការគណនា។

---

### ២. ការប្រើប្រាស់ Variables (let, const, var)
**Variable** គឺអ្វីដែលយើងប្រើដើម្បីរក្សាតម្លៃពិតប្រាកដណាមួយនៅក្នុងកូដរបស់យើង។ បច្ចុប្បន្ន JavaScript មានពាក្យគន្លឹះ ៣ យ៉ាងសម្រាប់ប្រកាស Variables គឺ \`let\`, \`const\`, និង \`var\`៖

#### Syntax នៃការប្រកាសអថេរ៖
\`\`\`javascript
var variable_Name;          // ប្រកាសដោយមិនទាន់ផ្តល់តម្លៃ (មានតម្លៃជា undefined)
var variable_Name = value;  // ប្រកាស និងផ្តល់តម្លៃភ្លាមៗ
let age = 20;               // ប្រកាសដោយ let
const pi = 3.14;            // ប្រកាសដោយ const
\`\`\`
*(ចំណាំ៖ យើងអាចប្រកាស Variable ដោយមិនចាំបាច់ផ្តល់តម្លៃអ្វីក៏បានដែរ ដោយវានឹងរក្សាទុកតម្លៃដើមជា \`undefined\`)*។

| ពាក្យគន្លឹះ | លក្ខណៈពិសេស និងការប្រើប្រាស់ | ការផ្លាស់ប្តូរតម្លៃ (Re-assignment) | Scope |
| :--- | :--- | :--- | :--- |
| **\`let\`** | ផ្តល់អនុញ្ញាតឱ្យអ្នក**កែប្រែតម្លៃរបស់វាបន្ទាប់មកបាន** ស័ក្តិសមសម្រាប់តម្លៃដែលត្រូវផ្លាស់ប្តូរ | ✅ អាចប្តូរបាន | Block Scope \`{ ... }\` |
| **\`const\`** | ប្រើនៅពេលយើង**មិនចង់ឱ្យអថេរនោះមានការកែប្រែតម្លៃពីក្រោយ** (តម្លៃថេរជានិច្ច) | ❌ ហាមកែប្រែ (TypeError) | Block Scope \`{ ... }\` |
| **\`var\`** | និយមប្រើតាំងពី JavaScript versions ចាស់ មានលក្ខណៈ Scoping ពាក់ព័ន្ធនឹង Function Scope ដែលអាចធ្វើឱ្យច្រឡំ | ✅ អាចប្តូរបាន | Function Scope (គ្មាន Block Scope) |

#### ឧទាហរណ៍ជាក់ស្តែង៖
\`\`\`javascript
let age = 20; 
age = 21; // ✅ អាចផ្លាស់ប្តូរតម្លៃលើ let បាន

const pi = 3.14; 
// pi = 3.15; // ❌ នេះនឹងបង្កើត error (TypeError) ព្រោះ const មិនអាចកែប្រែវិញទេ

var message = "Hello"; 
/* ទោះបីជាយើងនៅតែអាចប្រើ var បានក្តី ប៉ុន្តែសម្រាប់ Modern JavaScript យើងភាគច្រើននិយមប្រើ let និង const ជាធម្មតា */
\`\`\`

---

### ៣. ការធ្វើការជាមួយ Variable & Data (Working with Variable & Data)
- **ការបញ្ចូលតម្លៃទៅឱ្យ Variable:** យើងគ្រាន់តែប្រើសញ្ញា Assignment (\`=\`) និងបញ្ជាក់នូវឈ្មោះ Variable និងតម្លៃដែលត្រូវបញ្ចូល៖
  \`\`\`javascript
  var variable_name = value1;
  \`\`\`
- **ការទាញយកតម្លៃពី Variable:** យើងគ្រាន់តែបញ្ជាក់ឈ្មោះរបស់ Variable នោះជាការស្រេច៖
  \`\`\`javascript
  var variable_name = "Hello World!"; 
  console.log(variable_name); // ឬ document.write(variable_name);
  \`\`\`

#### ទម្លាប់នៃការសរសេរឈ្មោះអថេរ (Naming Conventions):
- រាល់តួដំបូងរបស់ Variable ត្រូវតែផ្តើមដោយ **អក្សរ (a-z, A-Z)**, **សញ្ញា Underscore (\`_\`)** ឬ **Dollar Sign (\`$\`)**។
- តួបន្តបន្ទាប់អាចជា **អក្សរ**, **Underscore (\`_\`)**, **Dollar sign (\`$\`)** ឬ**ជាលេខ (0-9)** ក៏បាន។
- មិនអាចចាប់ផ្តើមតួដំបូងដោយលេខបានឡើយ (ឧ. \`1stName\` គឺខុស)!
- រាល់ Variable **មិនត្រូវជាន់ជាមួយនឹង Keyword ឬ Reserved Word** របស់ JavaScript ឡើយ (ដូចជា \`let\`, \`const\`, \`var\`, \`function\`, \`return\` ជាដើម)។
- និយមប្រើទម្រង់ **camelCase** ឧទាហរណ៍៖ \`studentName\`, \`totalScore\`, \`isRegistered\`។

#### Statement មួយ Variables ច្រើន (One Statement, Many Variables):
អ្នកអាចប្រកាស variables ច្រើននៅក្នុង statement តែមួយ ដោយគ្រាន់តែចាប់ផ្តើម statement ជាមួយ \`var\` ឬ \`let\` ហើយ variables ត្រូវបែងចែកដោយសញ្ញាក្បៀស (\`,\`)៖
\`\`\`javascript
var name = "Doe", age = 30, job = "carpenter";
\`\`\`
ការប្រកាសរបស់អ្នកក៏អាចចុះបន្ទាត់ច្រើនជួរឱ្យស្រួលមើលផងដែរ៖
\`\`\`javascript
var name = "Doe",
    age = 30,
    job = "carpenter";
\`\`\`

#### ការប្រកាសឡើងវិញរបស់ JavaScript Variable (Re-declaring):
ប្រសិនបើអ្នកធ្វើការប្រកាស JavaScript Variables ឡើងវិញដោយប្រើ \`var\` វានឹង**មិនបាត់បង់តម្លៃរបស់វាឡើយ**៖
\`\`\`javascript
var carname = "Volvo";
var carname; // តម្លៃនៃ Variable carname នៅតែបន្តមានតម្លៃ "Volvo" ដដែល!
\`\`\`

#### JavaScript Arithmetic (ការធ្វើប្រមាណវិធីគណនា):
ជាមួយពិជគណិត អ្នកអាចធ្វើ arithmetic ជាមួយ JavaScript variables ដោយការប្រើប្រាស់ operators ដូចជាសញ្ញាស្មើ (\`=\`) និងសញ្ញាបូក (\`+\`)៖
\`\`\`javascript
var y = 5;
var x = y + 2; // x នឹងមានតម្លៃស្មើ 7
\`\`\`

---

### ៤. ប្រភេទទិន្នន័យ (Data Types)
**ប្រភេទទិន្នន័យ (Data Type)** គឺសំដៅទៅលើប្រភេទនៃតម្លៃដែលអថេរបានផ្ទុក។

#### ការប្រើប្រាស់ typeof Operator៖
ដើម្បីពិនិត្យមើលប្រភេទទិន្នន័យនៃ Variable មួយ គេត្រូវប្រើប្រាស់ Keyword មួយឈ្មោះថា \`typeof\`៖
\`\`\`javascript
var str = "Hello World!";
var num1 = 50;

console.log(typeof str);  // "string"
console.log(typeof num1); // "number"
\`\`\`

#### ប្រភេទទិន្នន័យមូលដ្ឋាន (Primitive Data Types) សំខាន់ៗទាំង ៥៖

1. **String (ខ្សែអក្សរ):**
   - ជាប្រភេទទិន្នន័យជាអក្សរ សម្រាប់ផ្ទុកនូវតួអក្សរដែលមានបន្តបន្ទាប់ដូចជា \`"John Doe"\`, \`"Hello"\`, \`"សួស្ដី"\` ឬ \`"123"\`។
   - Strings ត្រូវតែស្ថិតនៅក្នុងសញ្ញាសម្រង់ (Quotes)។ អ្នកអាចប្រើប្រាស់ Single Quotes (\`'...\'\`) ឬ Double Quotes (\`"..."\`):
     \`\`\`javascript
     var carname = "Volvo XC60";
     var carname = 'Volvo XC60';
     \`\`\`
   - **ការប្រើ Quotes នៅក្នុង String:** អ្នកអាចប្រើ Quotes នៅខាងក្នុង String បាន ឱ្យតែវាមិនដូច Quotes ដែលព័ទ្ធជុំវិញខាងក្រៅ៖
     \`\`\`javascript
     var answer1 = "It's alright";
     var answer2 = "He is called 'Johnny'";
     var answer3 = 'He is called "Johnny"';
     \`\`\`

2. **Number (លេខ):**
   - ជាប្រភេទទិន្នន័យជាលេខ ដែលយើងអាចយកទៅធ្វើការគណនាបាន ដូចជា \`100\`, \`3.14\`, ឬ \`-20\`។
   - JavaScript Numbers អាចសរសេរជាមួយទសភាគ (Decimals) ឬគ្មានទសភាគក៏បាន៖
     \`\`\`javascript
     var x1 = 34.00; // សរសេរមាន decimals
     var x2 = 34;    // សរសេរគ្មាន decimals
     \`\`\`

3. **Boolean (ប៊ូលីន):**
   - ជាប្រភេទទិន្នន័យដែលផ្ទុកបានតែ **ពីរតម្លៃប៉ុណ្ណោះគឺ៖ \`true\` ឬ \`false\`**៖
     \`\`\`javascript
     var x = true;
     var y = false;
     \`\`\`
   - Booleans គឺត្រូវបានគេពេញនិយមប្រើប្រាស់ជាញឹកញាប់បំផុតនៅក្នុងលក្ខខណ្ឌនៃការធ្វើ Testing (if-else, comparisons)។

4. **Null:**
   - តំណាងឱ្យតម្លៃទទេដោយចេតនា (Intentional absence of value) ដែលចង់បញ្ជាក់ថាបច្ចុប្បន្នគ្មានទិន្នន័យឡើយ។
   - ឧ. \`let something = null;\`

5. **Undefined:**
   - ជាប្រភេទទិន្នន័យដែលតំណាងឱ្យ Variable មួយដែល**មិនទាន់បានបញ្ចូលតម្លៃទៅឱ្យ** (បានប្រកាសរួចតែគ្មានតម្លៃ)។
   - ឧ. \`let somethingElse;\` (តម្លៃគឺ \`undefined\`)

\`\`\`javascript
let username = "sok";        // String
let numberOfItems = 10;      // Number
let isMember = true;         // Boolean
let something = null;        // Null (តម្លៃទទេចេតនា)
let somethingElse;           // Undefined (មិនទាន់កំណត់តម្លៃ)
\`\`\`

---

### ៥. ការត្រួតពិនិត្យប្រភេទ និងគ្រោះថ្នាក់នៃ Type Coercion
JavaScript ជាភាសា Dynamic Typing (អថេរអាចប្តូរប្រភេទតម្លៃបាន)។ នៅពេលធ្វើប្រមាណវិធីបូក \`+\` រវាង String និង Number៖
\`\`\`javascript
const scoreInput = "85"; // String
const bonus = 5;         // Number
console.log(scoreInput + bonus); // "855" (តអក្សរចូលគ្នា មិនមែន 90 ទេ!)

// ដំណោះស្រាយ៖ Explicit Conversion ឱ្យច្បាស់លាស់
console.log(Number(scoreInput) + bonus); // 90 (ត្រឹមត្រូវ)
\`\`\`
    `,
    syntaxExamples: [
      {
        title: '១. ការប្រកាសអថេរតាមពិជគណិត និង Keywords (let, const, var)',
        description: 'ការប្រៀបធៀប x, y, z ដូចពិជគណិត និងភាពខុសគ្នារវាង let, const, var',
        code: `// ១. ដូចពិជគណិត (Like Algebra)
let x = 5;
let y = 6;
let z = x + y;
console.log("តម្លៃ z (5 + 6):", z); // 11

// ២. ការប្រកាសអថេរ let vs const vs var
let age = 20; 
age = 21; // ✅ អាចផ្លាស់ប្តូរតម្លៃលើ let បាន

const pi = 3.14; 
// pi = 3.15; // ❌ នឹងបង្ក Error ព្រោះ const មិនអាចកែប្រែតម្លៃបានឡើយ

var message = "Hello"; 
/* ទោះបីជាយើងនៅតែអាចប្រើ var បាន ប៉ុន្តែក្នុង Modern JavaScript 
   យើងភាគច្រើននិយមប្រើ let និង const ជាធម្មតា */

console.log("Age:", age, "| Pi:", pi, "| Message:", message);`
      },
      {
        title: '២. ក្បួនសរសេរឈ្មោះ Naming Conventions និង Single Statement Variables',
        description: 'ការចាប់ផ្តើមដោយអក្សរ, _, $ និងការប្រកាសអថេរច្រើនក្នុង statement តែមួយ',
        code: `// ១. ក្បួនឈ្មោះត្រឹមត្រូវ (Valid variable names)
let studentName = "ចាន់ថន"; // ចាប់ផ្តើមដោយអក្សរ
let _privateId = "SEC-99";   // ចាប់ផ្តើមដោយ underscore (_)
let $price = 15.5;          // ចាប់ផ្តើមដោយ dollar sign ($)
let score1 = 100;           // មានលេខនៅខាងក្រោយ (តែមិនអាចនៅខាងមុខបានទេ)

// ២. ប្រកាស variables ច្រើនក្នុង statement មួយ (បំបែកដោយក្បៀស ,)
var name = "Doe", 
    userAge = 30, 
    job = "carpenter";

console.log(name, "អាយុ:", userAge, "មុខរបរ:", job);

// ៣. ការប្រកាសឡើងវិញ (Re-declaring) នៃ var មិនបាត់បង់តម្លៃទេ
var carname = "Volvo";
var carname; // carname នៅតែរក្សាតម្លៃ "Volvo" ដដែល
console.log("ឡានឈ្មោះ:", carname);`
      },
      {
        title: '៣. ប្រភេទទិន្នន័យមូលដ្ឋានទាំង ៥ និងការប្រើ typeof',
        description: 'ស្វែងយល់ពី String, Number, Boolean, Null, Undefined និង operator typeof',
        code: `// ១. ប្រភេទទិន្នន័យទាំង ៥
let username = "sok";        // String
let numberOfItems = 10;      // Number
let isMember = true;         // Boolean
let something = null;        // Null (តម្លៃទទេចេតនា)
let somethingElse;           // Undefined (មិនបានកំណត់តម្លៃទេ)

// ២. ពិនិត្យប្រភេទទិន្នន័យដោយ typeof
console.log(username, "-> typeof:", typeof username);             // string
console.log(numberOfItems, "-> typeof:", typeof numberOfItems); // number
console.log(isMember, "-> typeof:", typeof isMember);           // boolean
console.log("somethingElse -> typeof:", typeof somethingElse);   // undefined
console.log("something (null) -> typeof:", typeof something);     // object (ប្រវត្តិសាស្ត្រ JS)`
      },
      {
        title: '៤. ភាពស៊ីជម្រៅនៃ String, Quotes និង Numbers (Decimals)',
        description: 'ការប្រើ Single/Double Quotes ក្នុង String និងលេខទសភាគ',
        code: `// ការប្រើ Single និង Double Quotes ក្នុង String
var car1 = "Volvo XC60";
var car2 = 'Volvo XC60';

// ការប្រើ Quotes នៅខាងក្នុង String
var answer1 = "It's alright";
var answer2 = "He is called 'Johnny'";
var answer3 = 'He is called "Johnny"';

console.log(answer1);
console.log(answer2);
console.log(answer3);

// Numbers ជាមួយ Decimals ឬគ្មាន Decimals
var x1 = 34.00; // មាន decimals
var x2 = 34;    // គ្មាន decimals
console.log("x1:", x1, "x2:", x2, "ស្មើគ្នាទេ?", x1 === x2); // true

// Arithmetic ជាមួយ Variables
var price = 5;
var total = price + 2; // total = 7
console.log("Total:", total);`
      },
      {
        title: '៥. Template Literals & Explicit Type Conversion',
        description: 'ការរៀបចំខ្សែអក្សរចម្រុះ និងការពារកំហុសបូកអក្សរ',
        code: `const userInputSalary = "450"; // ទិន្នន័យពី Form តែងតែជា String
const bonus = 50;

// ❌ កំហុស Type Coercion: "450" + 50 = "45050"
console.log("បូកខុស (String Concatenation):", userInputSalary + bonus);

// ✅ បំប្លែងត្រឹមត្រូវតាម Explicit Conversion
const correctTotal = Number(userInputSalary) + bonus; // 500
console.log(\`ប្រាក់ខែសរុបពិតប្រាកដ: \${correctTotal} ដុល្លារ\`);`
      }
    ],
    guidedPractice: {
      title: 'ប្រព័ន្ធបង្កើតប័ណ្ណព័ត៌មាននិស្សិត (Interactive Student ID Card Generator)',
      description: 'បង្កើតកម្មវិធីបង្ហាញ និងគណនាទិន្នន័យនិស្សិតដោយប្រើអថេរចម្រុះប្រភេទ, Type Conversion និង Template Literals',
      runnableJsCode: `// ទិន្នន័យនិស្សិតជា Objects និង Primitives
const student = {
  id: "STU-2026-88",
  khmerName: "សួន វិច្ឆិកា",
  latinName: "Suon Vicheka",
  birthYear: 2005,
  gender: "ស្រី",
  baseTuition: "650", // ជា String
  scholarshipPercent: 20, // 20%
  isRegistered: true,
  skills: ["HTML5", "Tailwind CSS", "JavaScript"]
};

// គណនាដោយបំប្លែង Type ច្បាស់លាស់
const currentYear = 2026;
const age = currentYear - student.birthYear;
const tuitionNum = Number(student.baseTuition);
const discount = tuitionNum * (student.scholarshipPercent / 100);
const finalTuition = tuitionNum - discount;

console.log(\`=== ប័ណ្ណសម្គាល់ខ្លួននិស្សិត ===\`);
console.log(\`អត្តលេខ: \${student.id}\`);
console.log(\`ឈ្មោះ: \${student.khmerName} (\${student.latinName})\`);
console.log(\`អាយុ: \${age} ឆ្នាំ (កើតឆ្នាំ \${student.birthYear})\`);
console.log(\`ជំនាញ: \${student.skills.join(", ")}\`);
console.log(\`តម្លៃសិក្សាដើម: $\${tuitionNum}\`);
console.log(\`អាហារូបករណ៍: \${student.scholarshipPercent}%\`);
console.log(\`ទឹកប្រាក់ត្រូវបង់ជាក់ស្តែង: $\${finalTuition}\`);
console.log(\`ស្ថានភាពចុះឈ្មោះ: \${student.isRegistered ? "បានចុះឈ្មោះរួចរាល់" : "មិនទាន់ចុះឈ្មោះ"}\`);`,
      files: [
        {
          filename: 'index.html',
          language: 'html',
          code: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <title>Student ID Card Generator</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <div class="logo-badge">BBU</div>
        <div class="header-text">
          <h1>ប័ណ្ណសម្គាល់ខ្លួននិស្សិត</h1>
          <p>Royal University of Phnom Penh</p>
        </div>
      </div>

      <div class="card-body">
        <div class="profile-section">
          <div class="avatar" id="student-avatar">SV</div>
          <div class="primary-info">
            <h2 id="student-kh-name">...</h2>
            <p id="student-en-name" class="en-sub">...</p>
            <span class="id-badge" id="student-id-display">ID: ...</span>
          </div>
        </div>

        <div class="info-grid">
          <div class="info-item">
            <span class="label">ឆ្នាំកំណើត:</span>
            <span class="value" id="val-birth-year">...</span>
          </div>
          <div class="info-item">
            <span class="label">អាយុគណនា:</span>
            <span class="value highlight" id="val-calculated-age">...</span>
          </div>
          <div class="info-item">
            <span class="label">តម្លៃសិក្សាដើម:</span>
            <span class="value" id="val-base-tuition">...</span>
          </div>
          <div class="info-item">
            <span class="label">ថ្លៃសិក្សាជាក់ស្តែង:</span>
            <span class="value highlight" id="val-final-tuition">...</span>
          </div>
        </div>

        <div class="skills-section">
          <span class="label">ជំនាញបច្ចេកទេស:</span>
          <div class="tags" id="skills-container"></div>
        </div>

        <div class="status-bar" id="enrollment-status">
          ស្ថានភាពចុះឈ្មោះ: កំពុងពិនិត្យ...
        </div>
      </div>
    </div>
  </div>

  <script src="app.js" defer></script>
</body>
</html>`
        },
        {
          filename: 'style.css',
          language: 'css',
          code: `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Kantumruy Pro', system-ui, -apple-system, sans-serif;
}

body {
  background-color: #0f172a;
  color: #f8fafc;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
}

.container {
  width: 100%;
  max-width: 440px;
}

.card {
  background: #1e293b;
  border: 1px solid #334155;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
}

.card-header {
  background: linear-gradient(135deg, #1e3a8a, #0284c7);
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 14px;
}

.logo-badge {
  background: #ffffff;
  color: #1e3a8a;
  font-weight: 800;
  font-size: 16px;
  padding: 10px 12px;
  border-radius: 12px;
  letter-spacing: 1px;
}

.header-text h1 {
  font-size: 16px;
  font-weight: 700;
}

.header-text p {
  font-size: 11px;
  opacity: 0.85;
}

.card-body {
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.profile-section {
  display: flex;
  align-items: center;
  gap: 16px;
}

.avatar {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: #3b82f6;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 700;
  border: 3px solid #60a5fa;
}

.primary-info h2 {
  font-size: 18px;
  font-weight: 700;
}

.en-sub {
  font-size: 12px;
  color: #94a3b8;
}

.id-badge {
  display: inline-block;
  margin-top: 4px;
  padding: 2px 8px;
  background: #0f172a;
  border: 1px solid #334155;
  border-radius: 6px;
  font-size: 11px;
  color: #38bdf8;
  font-family: monospace;
}

.info-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  background: #0f172a;
  padding: 14px;
  border-radius: 12px;
  border: 1px solid #334155;
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.label {
  font-size: 11px;
  color: #94a3b8;
}

.value {
  font-size: 13px;
  font-weight: 600;
  color: #f1f5f9;
}

.value.highlight {
  color: #34d399;
}

.skills-section {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.tag-badge {
  background: #334155;
  color: #cbd5e1;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 11px;
  font-weight: 500;
}

.status-bar {
  padding: 10px 14px;
  border-radius: 10px;
  font-size: 12px;
  font-weight: 600;
  text-align: center;
  background: rgba(16, 185, 129, 0.15);
  color: #34d399;
  border: 1px solid rgba(16, 185, 129, 0.3);
}`
        },
        {
          filename: 'app.js',
          language: 'javascript',
          code: `// ១. ប្រកាសអថេរកំណត់ទិន្នន័យ (Constants & Types)
const student = {
  id: "BBU-2026-2027",
  khmerName: "គិត សុផល",
  latinName: "KITH Sophal",
  birthYear: 1999,
  baseTuitionStr: "700", // ទិន្នន័យប្រភេទ String
  scholarshipPercent: 35, // ២៥ ភាគរយ
  isEnrolled: true,
  skills: ["HTML5", "CSS3 Flexbox", "Modern JS (ES6+)"]
};

// ២. ដំណើរការគណនា និង Type Conversion ច្បាស់លាស់
const CURRENT_YEAR = 2026;
const calculatedAge = CURRENT_YEAR - student.birthYear;

// Explicit Conversion ពី String ទៅ Number
const originalTuition = Number(student.baseTuitionStr);
const discountAmount = originalTuition * (student.scholarshipPercent / 100);
const finalPayableTuition = originalTuition - discountAmount;

// ៣. បង្ហាញទិន្នន័យនៅលើ DOM ដោយសុវត្ថិភាពតាម textContent
document.getElementById("student-kh-name").textContent = student.khmerName;
document.getElementById("student-en-name").textContent = student.latinName;
document.getElementById("student-id-display").textContent = \`ID: \${student.id}\`;
document.getElementById("val-birth-year").textContent = student.birthYear;
document.getElementById("val-calculated-age").textContent = \`\${calculatedAge} ឆ្នាំ\`;
document.getElementById("val-base-tuition").textContent = \`$\${originalTuition}\`;
document.getElementById("val-final-tuition").textContent = \`$\${finalPayableTuition} (-\${student.scholarshipPercent}%)\`;

// ៤. បង្កើត Badges សម្រាប់ Skills ដោយ createElement & textContent
const skillsContainer = document.getElementById("skills-container");
student.skills.forEach((skill) => {
  const badge = document.createElement("span");
  badge.className = "tag-badge";
  badge.textContent = skill;
  skillsContainer.appendChild(badge);
});

// ៥. បង្ហាញស្ថានភាពចុះឈ្មោះដោយប្រើ Ternary Operator ក្នុង Template Literal
const statusBar = document.getElementById("enrollment-status");
statusBar.textContent = \`ស្ថានភាព៖ \${student.isEnrolled ? "✓ បានចុះឈ្មោះសិក្សារួចរាល់" : "✗ មិនទាន់ចុះឈ្មោះ"}\`;`
        }
      ],
      expectedOutput: 'ប័ណ្ណនិស្សិតទំនើបបង្ហាញឈ្មោះខ្មែរ-អង់គ្លេស អាយុគណនាស្វ័យប្រវត្តិ (២១ ឆ្នាំ) តម្លៃសិក្សាកាត់បញ្ចុះត្រឹមត្រូវ ($525) និង Skill badges ស្រស់ស្អាត។'
    },
    commonMistakes: [
      {
        mistake: 'ព្យាយាម Re-assign តម្លៃលើអថេរដែលប្រកាសដោយ const',
        cause: 'ការប្រើសញ្ញាស្មើ (=) លើកទីពីរលើអថេរ const នឹងបង្កឱ្យមាន TypeError',
        wrongCode: 'const userAge = 19;\nuserAge = 20; // ❌ TypeError',
        fixedCode: 'let userAge = 19;\nuserAge = 20; // ✅ ប្រើ let ពេលត្រូវការប្តូរ',
        fix: 'ប្រសិនបើតម្លៃត្រូវផ្លាស់ប្តូរ (Re-assign) សូមប្រកាសវាជាមួយ let ជំនួសវិញ។'
      },
      {
        mistake: 'ការតខ្សែអក្សរដោយអចេតនា (Implicit String Concatenation)',
        cause: 'តម្លៃដែលទាញចេញពី <input> តែងតែជា String ទោះជា input type="number" ក៏ដោយ ធ្វើឱ្យសញ្ញា + ក្លាយជាការតអក្សរ',
        wrongCode: 'const inputVal = "50";\nconst sum = inputVal + 10; // "5010"',
        fixedCode: 'const inputVal = "50";\nconst sum = Number(inputVal) + 10; // 60',
        fix: 'ប្រើ Number() ឬ parseInt() ជានិច្ចមុនពេលធ្វើប្រមាណវិធីបូកលើទិន្នន័យពី Form។'
      },
      {
        mistake: 'ប្រើសញ្ញាសម្រង់ធម្មតាជំនួស Backtick លើ Template Literals',
        cause: 'សញ្ញាសម្រង់ទោល (\'\') ឬទ្វេ ("") មិនស្គាល់វាក្យសម្ព័ន្ធ ${...} ឡើយ',
        wrongCode: "const msg = 'សួស្តី \${name}, អាយុ \${age}';",
        fixedCode: "const msg = \`សួស្តី \${name}, អាយុ \${age}\`;",
        fix: 'ត្រូវប្រើសញ្ញា Backtick (\` \` \`) ជានិច្ចនៅពេលប្រើប្រាស់ String Interpolation។'
      },
      {
        mistake: 'ភាន់ច្រឡំរវាង undefined និង null',
        cause: 'undefined កើតឡើងដោយស្វ័យប្រវត្តិកាលណាអថេរគ្មានតម្លៃ រីឯ null គឺជាការកំណត់ដោយចេតនា',
        wrongCode: 'let student = null; // ពេលមិនទាន់ប្រកាសអ្វីទាំងអស់\n// ឬពិនិត្យ if (val == undefined) ជំនួសឱ្យ ===',
        fixedCode: 'let selectedItem = null; // កំណត់ថាទទេដោយចេតនា\nlet notAssignedYet;      // undefined ដោយធម្មជាតិ',
        fix: 'ប្រើ null ពេលអ្នកចង់សម្អាតតម្លៃចោល ឬបញ្ជាក់ថាទទេ ហើយប្រើ undefined សម្រាប់តម្លៃដែលមិនទាន់មាន។'
      },
      {
        mistake: 'ការគិតថា const ធ្វើឱ្យ Object/Array ក្លាយជា Immutable (មិនអាចកែប្រែបាន)',
        cause: 'const ការពារតែ Pointer នៃអថេរប៉ុណ្ណោះ មិនមែនទិន្នន័យខាងក្នុងឡើយ',
        wrongCode: 'const config = { mode: "dark" };\n// គិតថា config.mode មិនអាចកែបាន',
        fixedCode: 'const config = { mode: "dark" };\nconfig.mode = "light"; // ✅ កែបានធម្មតា\n// Object.freeze(config); // ប្រសិនបើចង់ lock ពិតប្រាកដ',
        fix: 'យល់ច្បាស់ថា const object.property = value ដំណើរការបានជានិច្ច លុះត្រាតែអ្នកប្រើ Object.freeze()។'
      }
    ],
    exercises: [
      {
        level: 'មូលដ្ឋាន (Basic)',
        prompt: 'ចូរប្រកាសអថេរសម្រាប់ប្រព័ន្ធកាតពិន្ទុនិស្សិត រួមមាន៖ studentId (String), studentName (String), quizScore (Number), midtermScore (Number), isEligibleForFinal (Boolean), disciplinaryRecord (null - គ្មានកំហុសទណ្ឌកម្ម), teacherNotes (undefined - មិនទាន់ផ្តល់មតិ)។ ជ្រើសរើស const ឬ let ឱ្យបានត្រឹមត្រូវតាមលក្ខណៈទិន្នន័យ រួចប្រើ typeof ពិនិត្យប្រភេទអថេរនីមួយៗក្នុង Console។',
        solutionCode: `// ១. ប្រកាសអថេរថេរ (const) និងអថេរប្រែប្រួល (let)
const studentId = "BBU-IT-2026-09";
const studentName = "គិត សុផល";

let quizScore = 18.5;         // អាចកែប្រែពេល re-check
let midtermScore = 38.0;      // អាចកែប្រែបាន
const isEligibleForFinal = true; // Boolean
const disciplinaryRecord = null; // null: គ្មានកំហុសទណ្ឌកម្មដោយចេតនា
let teacherNotes;             // undefined: មិនទាន់ដាក់មតិយោបល់

// ២. ត្រួតពិនិត្យប្រភេទដោយ typeof
console.log("studentId:", typeof studentId);                   // "string"
console.log("studentName:", typeof studentName);               // "string"
console.log("quizScore:", typeof quizScore);                   // "number"
console.log("midtermScore:", typeof midtermScore);             // "number"
console.log("isEligibleForFinal:", typeof isEligibleForFinal); // "boolean"
console.log("disciplinaryRecord:", typeof disciplinaryRecord); // "object" (JS historical bug)
console.log("teacherNotes:", typeof teacherNotes);             // "undefined"

// ៣. បង្ហាញពិន្ទុបឋម
const preliminaryTotal = quizScore + midtermScore;
console.log(\`និស្សិត \${studentName} (ID: \${studentId}) ទទួលបានពិន្ទុបឋម: \${preliminaryTotal}/60\`);`,
        explanation: 'studentId និង studentName ប្រើ const ព្រោះជាអត្តសញ្ញាណថេរ។ quizScore និង midtermScore ប្រើ let ព្រោះអាចមានការប្រែប្រួលពេលកែសម្រួលពិន្ទុ។ ស្គាល់ច្បាស់ពី 5 Primitives ដោយប្រើ typeof។'
      },
      {
        level: 'អនុវត្ត (Practical)',
        prompt: 'បង្កើត Function ឈ្មោះ calculateStudentResult(attendanceStr, homeworkStr, midtermStr, finalExamStr) ដែលទទួល Parameters ទាំងអស់ជា String (ទាញចេញពី Web Form Input)។ ចូរអនុវត្ត Explicit Type Conversion ដើម្បីការពារកំហុសតអក្សរ (Type Coercion) គណនាពិន្ទុសរុប (Total 100), ពិន្ទុមធ្យម (GPA scale 4.0), និងបង្ហាញស្ថានភាព ជាប់ (Passed)/ធ្លាក់ (Failed) តាម Template Literal។',
        solutionCode: `function calculateStudentResult(attendanceStr, homeworkStr, midtermStr, finalExamStr) {
  // ១. Explicit Conversion ពី String ទៅជា Number ដោយសុវត្ថិភាព
  const attendance = Number(attendanceStr);
  const homework = Number(homeworkStr);
  const midterm = Number(midtermStr);
  const finalExam = Number(finalExamStr);

  // បង្ហាញគ្រោះថ្នាក់ប្រសិនបើភ្លេច Explicit Conversion:
  // "10" + "15" + "25" + "40" = "10152540" (ខុសធ្ងន់ធ្ងរ!)
  
  // ២. គណនាពិន្ទុសរុប
  const totalScore = attendance + homework + midterm + finalExam;
  const gpa = (totalScore / 100) * 4.0;
  const isPassed = totalScore >= 50;

  // ៣. រៀបចំ Template Literal
  return \`=== លទ្ធផលការវាយតម្លៃនិស្សិត ===
- វត្តមាន (10%): \${attendance} ពិន្ទុ
- កិច្ចការផ្ទះ (15%): \${homework} ពិន្ទុ
- ការប្រឡងឆមាស (25%): \${midterm} ពិន្ទុ
- ការប្រឡងបញ្ចប់ (50%): \${finalExam} ពិន្ទុ
--------------------------------------
- ពិន្ទុសរុប: \${totalScore.toFixed(1)} / 100
- GPA ប៉ាន់ស្មាន: \${gpa.toFixed(2)} / 4.00
- លទ្ធផលចុងក្រោយ: \${isPassed ? "✅ ជាប់ការសិក្សា (PASSED)" : "❌ ធ្លាក់ (FAILED)"}\`;
}

console.log(calculateStudentResult("9.5", "14", "22.5", "42"));`,
        explanation: 'ប្រើ Number() ដើម្បីបំប្លែងទិន្នន័យពី Form Inputs (String) ទៅជា Number ការពារបញ្ហា String Concatenation នៃសញ្ញា +។ ប្រើ .toFixed() សម្រាប់ទសភាគ និង Ternary Operator សម្រាប់កំណត់ស្ថានភាព។'
      },
      {
        level: 'ប្រកួតប្រជែង (Challenge)',
        prompt: 'នៅក្នុងប្រព័ន្ធចុះបញ្ជីពិន្ទុ មាន Object ដើម originalStudent ផ្ទុកទិន្នន័យនិស្សិត និងពិន្ទុតាមមុខវិជ្ជា។ ចូរ៖ ក. បង្ហាញកំហុសនៅពេលចម្លងទិន្នន័យដោយប្រើសញ្ញាស្មើធម្មតា (Pass by Reference) ដែលការកែប្រែលើ Object ចម្លងធ្វើឱ្យខូចទិន្នន័យដើម។ ខ. បង្ហាញដំណោះស្រាយដោយប្រើ Shallow/Deep Copy ត្រឹមត្រូវ ព្រមទាំងពន្យល់ថាហេតុអ្វី const អនុញ្ញាតឱ្យកែប្រែ Property ពិន្ទុខាងក្នុងបាន តែហាមឃាត់ការ Re-assign Object ថ្មី។',
        solutionCode: `// ទិន្នន័យនិស្សិតដើម
const originalStudent = {
  id: "STU-2026-001",
  name: "លី វណ្ណៈ",
  scores: {
    webDev: 88,
    database: 75
  },
  isScholarship: true
};

// --- បញ្ហា៖ Pass by Reference ពេលប្រើសញ្ញាស្មើ (=) ---
const faultyCopy = originalStudent; // ចម្លងតែ Memory Pointer ប៉ុណ្ណោះ!
faultyCopy.scores.webDev = 40;     // កែលើ copy

console.log("ពិន្ទុដើមរងផលប៉ះពាល់ (ខុស):", originalStudent.scores.webDev); // 40 (ខូចទិន្នន័យដើម!)

// --- ដំណោះស្រាយ៖ ការចម្លងត្រឹមត្រូវ (Deep Copy / Structured Clone) ---
// កំណត់តម្លៃដើមឡើងវិញ
originalStudent.scores.webDev = 88;

// ប្រើ structuredClone (Modern JS) ឬ JSON clone ដើម្បីការពារ Nested Object Mutation
const safeStudentCopy = structuredClone(originalStudent);
safeStudentCopy.name = "លី វណ្ណៈ (សិស្សកែតម្រូវ)";
safeStudentCopy.scores.webDev = 95;

console.log("ពិន្ទុដើមរក្សាបានដដែល (ត្រូវ):", originalStudent.scores.webDev); // 88
console.log("ពិន្ទុលើច្បាប់ចម្លងសុវត្ថិភាព:", safeStudentCopy.scores.webDev);     // 95

// --- ការពន្យល់ const លើ Object ---
// ✅ អាចកែប្រែ Properties ខាងក្នុងបាន (Object Mutation)
originalStudent.isScholarship = false; 

// ❌ ហាម Re-assign Object ថ្មីទៅកាន់អថេរ const
// originalStudent = { id: "STU-002" }; // នឹងបង្ក TypeError: Assignment to constant variable!`,
        explanation: 'Object និង Array ជា Reference Types ដែលផ្ទុកអាសយដ្ឋាន (Pointer) ទៅកាន់ Heap Memory។ ការប្រើ = គឺគ្រាន់តែចម្លង Pointer ធ្វើឱ្យកែប្រែប៉ះពាល់គ្នា។ ដើម្បីការពារ ត្រូវប្រើ structuredClone() ឬ Spread Operator។ const ការពារ Pointer មិនឱ្យចង្អុលទៅ Object ថ្មី តែមិនការពារ Mutation ខាងក្នុងឡើយ។'
      }
    ],
    quiz: [
      {
        id: 1,
        question: 'តើពាក្យគន្លឹះណាដែលប្រើសម្រាប់ប្រកាសអថេរដែលមិនអាចកែប្រែតម្លៃឡើងវិញបាន (Immutable/Constant)?',
        options: ['var', 'let', 'const', 'variable'],
        correctIndex: 2,
        explanation: 'const (Constant) ប្រើសម្រាប់ប្រកាសអថេរដែលរក្សាតម្លៃថេរជានិច្ច មិនអាច Re-assign តម្លៃថ្មីបានឡើយ។'
      },
      {
        id: 2,
        question: 'ប្រសិនបើ y = 5 ហើយ x = y + 2 តើតម្លៃរបស់ x ស្មើនឹងប៉ុន្មាន?',
        options: ['5', '2', '7', '52'],
        correctIndex: 2,
        explanation: 'ដូចពិជគណិត y ផ្ទុកតម្លៃ 5 ដូច្នេះ x = 5 + 2 = 7។'
      },
      {
        id: 3,
        question: 'តើការដាក់ឈ្មោះ Variable មួយណាខាងក្រោមនេះដែលមិនត្រឹមត្រូវ (Invalid)?',
        options: ['_studentId', '$totalPrice', 'studentName', '1stRunner'],
        correctIndex: 3,
        explanation: 'តួដំបូងនៃឈ្មោះ Variable មិនអាចចាប់ផ្តើមដោយលេខ (0-9) បានឡើយ ត្រូវតែជាអក្សរ, _ ឬ $។'
      },
      {
        id: 4,
        question: 'តើ Operator ណាដែលប្រើសម្រាប់ពិនិត្យមើលប្រភេទទិន្នន័យនៃ Variable មួយ?',
        options: ['typeOf()', 'typeof', 'checkType', 'dataType'],
        correctIndex: 1,
        explanation: 'យើងប្រើ keyword "typeof" (ឧ. typeof x) ដើម្បីសាកសួរប្រភេទទិន្នន័យរបស់អថេរ។'
      },
      {
        id: 5,
        question: 'តើអថេរដែលត្រូវបានប្រកាសរួច តែមិនទាន់បានកំណត់តម្លៃឱ្យ មានតម្លៃដើមជាអ្វី?',
        options: ['null', '0', 'undefined', 'false'],
        correctIndex: 2,
        explanation: 'Undefined ជាប្រភេទទិន្នន័យដែលតំណាងឱ្យអថេរដែលត្រូវបានប្រកាសរួចតែមិនទាន់បានបញ្ចូលតម្លៃឱ្យ។'
      },
      {
        id: 6,
        question: 'ប្រសិនបើយើងដំណើរការ statements ទាំងពីរ៖ var carname = "Volvo"; var carname; តើតម្លៃ carname នៅតែជាអ្វី?',
        options: ['undefined', '"Volvo"', 'null', 'Error'],
        correctIndex: 1,
        explanation: 'ការប្រកាសឡើងវិញ (Re-declaring) នៃ JavaScript variable ជាមួយ var មិនធ្វើឱ្យបាត់បង់តម្លៃរបស់វាឡើយ។'
      }
    ],
    summary: [
      'Variable ប្រើសម្រាប់រក្សាទុកតម្លៃបណ្តោះអាសន្ន ឬ Reference ទៅកាន់ Object ដូចពិជគណិត (x=5, y=6, z=x+y => z=11)',
      'ការប្រកាសអថេរប្រើ let (កែប្រែតម្លៃបាន), const (តម្លៃថេរ មិនអាចកែប្រែបាន) និង var (Function Scope ចាស់)',
      'ក្បួនឈ្មោះអថេរ (Naming Convention) ត្រូវចាប់ផ្តើមដោយអក្សរ, _ ឬ $ ហើយមិនអាចចាប់ផ្តើមដោយលេខ ឬជាន់ Reserved Words ឡើយ',
      'អាចប្រកាស variables ច្រើនក្នុង statement មួយដោយប្រើសញ្ញាក្បៀស (,) ហើយការប្រកាសឡើងវិញនៃ var មិនបាត់បង់តម្លៃឡើយ',
      'ស្គាល់ 5 Primitive Data Types ស្នូល៖ String (Quotes ក្នុង String), Number (Decimals/Integers), Boolean (true/false), Null, Undefined',
      'ប្រើ typeof ដើម្បីត្រួតពិនិត្យប្រភេទទិន្នន័យ និងប្រើ Explicit Conversion (Number()) ដើម្បីការពារបញ្ហា Type Coercion នៃសញ្ញា +'
    ]
  },
  {
    id: 3,
    slug: 'operators-and-conditions',
    titleKm: 'មេរៀនទី៣៖ ប្រតិបត្តិករ និងលក្ខខណ្ឌ',
    titleEn: 'Lesson 3: Operators and Conditions',
    category: 'Logic & Flow',
    prerequisites: [
      'មេរៀនទី១ (មូលដ្ឋាន Front-End & Script Placement)',
      'មេរៀនទី២ (Variables & Data Types)',
      'Boolean Values (true/false) & Type Conversion'
    ],
    learningOutcomes: [
      'យល់ច្បាស់ និងប្រើប្រាស់ Arithmetic, Assignment, និង Comparison Operators',
      'បែងចែកភាពខុសគ្នាដាច់ស្រឡះរវាង == (Loose Equality) និង === (Strict Equality)',
      'កំណត់ និងយល់ច្បាស់ពីតម្លៃ Falsy ទាំង ៨ ក្នុង JavaScript និងតម្លៃ Truthy',
      'ប្រើប្រាស់ Logical Operators (&&, ||, !) និងយន្តការ Short-Circuit Evaluation',
      'ប្រើ Nullish Coalescing (??) សម្រាប់ Fallback Values សុវត្ថិភាព',
      'គ្រប់គ្រងលំហូរកូដដោយ if...else, switch...case, Guard Clauses និង Ternary Operator'
    ],
    scenario: 'នៅក្នុងប្រព័ន្ធចុះបញ្ជីពិន្ទុ និងអាហារូបករណ៍និស្សិតនៃសាកលវិទ្យាល័យ ប្រព័ន្ធត្រូវធ្វើការសម្រេចចិត្តដោយស្វ័យប្រវត្តិ៖ ពិនិត្យថាតើនិស្សិតមានវត្តមានគ្រប់គ្រាន់ឬទេ (>= 80%), ពិន្ទុប្រឡងសរុប (A, B, C, D, F), និងវិនិច្ឆ័យសិទ្ធិទទួលបានអាហារូបករណ៍ផ្អែកលើលក្ខខណ្ឌចម្រុះ (GPA >= 3.5 ព្រមទាំងគ្មានប្រវត្តិទណ្ឌកម្ម)។ ប្រសិនបើគ្មានប្រតិបត្តិករ និងលក្ខខណ្ឌទេ កូដរបស់អ្នកនឹងរត់តាមបន្ទាត់ត្រង់ មិនអាចធ្វើការសម្រេចចិត្តបានឡើយ។',
    conceptsExplanation: `
### ១. ប្រតិបត្តិករនព្វន្ធ និងការប្រគល់តម្លៃ (Arithmetic & Assignment Operators)

JavaScript ផ្តល់ប្រតិបត្តិករជាច្រើនសម្រាប់ធ្វើប្រមាណវិធីលើលេខ និងអថេរ៖

* **ប្រតិបត្តិករនព្វន្ធមូលដ្ឋាន (Arithmetic Operators):**
  * បូក \`+\`, ដក \`-\`, គុណ \`*\`, ចែក \`/\`
  * **Modulo (សំណល់នៃការចែក) \`%\`:** ឧទាហរណ៍ \`10 % 3\` គឺ \`1\` (ស័ក្តិសមបំផុតសម្រាប់ពិនិត្យលេខគូ/សេស \`n % 2 === 0\`)
  * **Exponentiation (ស្វ័យគុណ) \`**\`:** ឧទាហរណ៍ \`2 ** 3\` គឺ \`8\` (ស្មើនឹង \`Math.pow(2, 3)\`)

* **Compound Assignment Operators (ប្រមាណវិធីរួមផ្សំ):**
  * \`score += 10\` (ស្មើនឹង \`score = score + 10\`)
  * \`score -= 5\`, \`score *= 2\`, \`score /= 4\`, \`score %= 3\`

* **Increment (\`++\`) និង Decrement (\`--\`):**
  * \`let count = 0; count++;\` (បង្កើនតម្លៃ ១)
  * **ចំណាំវិជ្ជាជីវៈ:** ចៀសវាងការច្រឡំរវាង Postfix (\`count++\`) និង Prefix (\`++count\`) ក្នុងកន្សោមស្មុគស្មាញ ដោយសរសេរវាលើបន្ទាត់ដាច់ដោយឡែក។

---

### ២. ប្រតិបត្តិករប្រៀបធៀប (Comparison Operators) និងច្បាប់ Strict Equality

រាល់ការប្រៀបធៀបទាំងអស់ក្នុង JavaScript តែងតែផ្តល់លទ្ធផលត្រឡប់មកវិញជាប្រភេទ **Boolean (\`true\` ឬ \`false\`)** ជានិច្ច៖

* **Strict Equality (\`===\`) - ស្តង់ដារមាសដែលត្រូវប្រើជាដាច់ខាត:**
  * ប្រៀបធៀប**ទាំងតម្លៃ និងប្រភេទទិន្នន័យ (Type & Value)** ដោយគ្មានការបំប្លែងប្រភេទដោយលួចលាក់ឡើយ។
  * \`5 === 5\` ផ្តល់ \`true\` | \`5 === "5"\` ផ្តល់ \`false\` (ព្រោះ Number ≠ String)
* **Loose Equality (\`==\`) - គ្រោះថ្នាក់ដែលត្រូវចៀសវាង:**
  * ប្រៀបធៀបតែតម្លៃ ដោយបង្ខំធ្វើ **Implicit Type Coercion** បំប្លែងប្រភេទស្វ័យប្រវត្តិ។
  * \`5 == "5"\` ផ្តល់ \`true\` | \`0 == false\` ផ្តល់ \`true\` | \`"" == 0\` ផ្តល់ \`true\`
* **Strict Inequality (\`!==\`):** ផ្ទុយពី \`===\` (ត្រូវប្រើជំនួស \`!=\`)
* **Relational Operators:** \`>\` (ធំជាង), \`<\` (តូចជាង), \`>=\` (ធំជាងឬស្មើ), \`<=\` (តូចជាងឬស្មើ)

> 💡 **វិធានការស្តង់ដារវិស្វកម្ម Front-End:** ប្រើ \`===\` និង \`!==\` ជានិច្ច ១០០% ដើម្បីការពារ Bugs ស្មុគស្មាញដែលពិបាកតាមដាន។

---

### ៣. តម្លៃ Truthy និង Falsy ក្នុង JavaScript

នៅក្នុងភាសា JavaScript នៅពេលតម្លៃណាមួយត្រូវបានដាក់ក្នុងលក្ខខណ្ឌ (\`if\`) វានឹងត្រូវបំប្លែងទៅជា Boolean ដោយស្វ័យប្រវត្តិ។

* **តម្លៃ Falsy ទាំង ៨ (Eight Falsy Values - តែងតែចេញ false ក្នុងលក្ខខណ្ឌ):**
  1. \`false\` (ប៊ូលីនផ្ទាល់)
  2. \`0\` (លេខសូន្យ)
  3. \`-0\` (សូន្យអវិជ្ជមាន)
  4. \`0n\` (BigInt សូន្យ)
  5. \`""\` (ខ្សែអក្សរទទេ - Empty String)
  6. \`null\` (ភាពទទេដោយចេតនា)
  7. \`undefined\` (មិនទាន់ផ្តល់តម្លៃ)
  8. \`NaN\` (Not-a-Number)

* **តម្លៃ Truthy (អ្វីៗផ្សេងពី Falsy ខាងលើ សុទ្ធតែជា Truthy):**
  * លេខក្រៅពីសូន្យ (ឧ. \`1\`, \`-5\`, \`3.14\`)
  * ខ្សែអក្សរមិនទទេ (ឧ. \`"សួស្តី"\`, \`"false"\`, \`"0"\`, \`" "\`)
  * **Array ទទេ \`[]\` និង Object ទទេ \`{}\` គឺជា Truthy ជានិច្ច!** (កំហុសដែលនិស្សិតតែងតែជួបប្រទះ)

---

### ៤. ប្រតិបត្តិករតក្កវិជ្ជា (Logical Operators) & Short-Circuiting

* **\`&&\` (Logical AND):**
  * ផ្តល់ \`true\` លុះត្រាតែគ្រប់លក្ខខណ្ឌទាំងអស់ពិត។
  * **Short-circuiting:** ប្រសិនបើជួបតម្លៃ Falsy ដំបូង វានឹងបញ្ឈប់ភ្លាម ហើយត្រឡប់តម្លៃ Falsy នោះមកវិញ។
* **\`||\` (Logical OR):**
  * ផ្តល់ \`true\` ប្រសិនបើមានយ៉ាងហោចណាស់លក្ខខណ្ឌមួយពិត។
  * **Short-circuiting:** ប្រសិនបើជួបតម្លៃ Truthy ដំបូង វានឹងបញ្ឈប់ភ្លាម ហើយត្រឡប់តម្លៃ Truthy នោះមកវិញ។
* **\`!\` (Logical NOT):**
  * បញ្ច្រាសតម្លៃ Boolean (ឧ. \`!true\` ក្លាយជា \`false\`, \`!0\` ក្លាយជា \`true\`)។
  * វិធីសាស្រ្តកាត់ \`!!value\` (Double Bang) ប្រើសម្រាប់បំប្លែងតម្លៃណាមួយទៅជា Boolean ពិតប្រាកដ។
* **\`??\` (Nullish Coalescing Operator - ទំនើប ES2020):**
  * ត្រឡប់តម្លៃខាងស្តាំ លុះត្រាតែតម្លៃខាងឆ្វេងជា \`null\` ឬ \`undefined\` ប៉ុណ្ណោះ។
  * ខុសពី \`||\` ដែលចាត់ទុក \`0\` និង \`""\` ជា Falsy ដែរ។ (ឧ. \`0 ?? 10\` ផ្តល់ \`0\` ឯ \`0 || 10\` ផ្តល់ \`10\`)។

---

### ៥. រចនាសម្ព័ន្ធគ្រប់គ្រងលំហូរកូដ (Control Flow Statements)

#### ក. លក្ខខណ្ឌ if, else if, else
ប្រើសម្រាប់សម្រេចចិត្តលើលក្ខខណ្ឌតក្កវិជ្ជាដែលប្រែប្រួលតាមកម្រិត៖
\`\`\`javascript
if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else if (score >= 50) {
  grade = "C";
} else {
  grade = "F";
}
\`\`\`

#### ខ. បច្ចេកទេស Guard Clauses (Early Return)
ជំនួសឱ្យការសរសេរ \`if-else\` ច្រើនជាន់កៀបគ្នាដូចសាជីជ្រុង (Pyramid of Doom / Arrow Anti-pattern) វិស្វករទំនើបប្រើ **Guard Clauses** ដោយពិនិត្យលក្ខខណ្ឌខុស ឬលក្ខខណ្ឌមិនត្រឹមត្រូវរួច \`return\` ចេញភ្លាម៖
\`\`\`javascript
function evaluateStudent(student) {
  if (!student) return "គ្មានទិន្នន័យនិស្សិត";
  if (student.attendance < 80) return "ធ្លាក់ដោយសារអវត្តមាន";
  if (student.score < 50) return "ធ្លាក់ដោយសារពិន្ទុមិនគ្រប់";

  // កូដសំខាន់ដំណើរការនៅខាងក្រោមត្រង់ស្អាត
  return "ជាប់ការសិក្សាដោយជោគជ័យ";
}
\`\`\`

#### គ. switch...case Statement
ស័ក្តិសមបំផុតនៅពេលយើងចង់ផ្ទៀងផ្ទាត់អថេរមួយ ធៀបនឹងតម្លៃច្បាស់លាស់ជាច្រើន (Discrete Values):
\`\`\`javascript
switch (majorCode) {
  case "CS":
    faculty = "Computer Science";
    break;
  case "ITE":
    faculty = "Information Technology Engineering";
    break;
  case "BIO":
    faculty = "Bio-Engineering";
    break;
  default:
    faculty = "General Science";
}
\`\`\`

---

### ៦. Ternary Operator (លក្ខខណ្ឌសង្ខេបមួយជួរ)

ទម្រង់៖ \`condition ? expressionIfTrue : expressionIfFalse\`
\`\`\`javascript
const resultText = score >= 50 ? "ជាប់ការប្រឡង" : "ធ្លាក់ការប្រឡង";
\`\`\`
* **ពេលណាគួរប្រើ:** ស័ក្តិសមបំផុតសម្រាប់ប្រគល់តម្លៃឱ្យអថេរ ឬសរសេរក្នុង Template Literals \`\${isPassed ? "Pass" : "Fail"}\`។
* **ពេលណាត្រូវចៀសវាង:** ចៀសវាងការសរសេរ Nested Ternary (Ternary ក្នុង Ternary ច្រើនជាន់) ព្រោះវាពិបាកអានខ្លាំង។
    `,
    syntaxExamples: [
      {
        title: '១. ប្រតិបត្តិករនព្វន្ធ និង Modulo (%) សម្រាប់ពិនិត្យលេខគូ/សេស',
        description: 'ការប្រើប្រាស់ %, **, និង Compound Assignment លើការគណនាពិន្ទុ',
        code: `// ១. ការប្រើ Modulo (%) ពិនិត្យលេខកូដសេស ឬគូ
const studentSeatNumber = 24;
const isEvenSeat = studentSeatNumber % 2 === 0;
console.log(\`កៅអីលេខ \${studentSeatNumber} គឺជាកៅអីលេខ\${isEvenSeat ? "គូ" : "សេស"}\`);

// ២. ស្វ័យគុណ (**)
const base = 2;
const power = 3;
console.log(\`2 ស្វ័យគុណ 3 គឺ: \${base ** power}\`); // 8

// ៣. Compound Assignment
let totalPoints = 50;
totalPoints += 25; // totalPoints = totalPoints + 25 (75)
totalPoints *= 1.1; // បន្ថែម Bonus 10% (82.5)
console.log("ពិន្ទុសរុបចុងក្រោយ:", totalPoints.toFixed(1));`
      },
      {
        title: '២. ការប្រៀបធៀប Strict Equality (===) vs Loose (==)',
        description: 'ហេតុអ្វីត្រូវចៀសវាង == និងប្រើ === ជានិច្ចក្នុង JavaScript',
        code: `const userInputScore = "100"; // មកពី Form <input>
const targetScore = 100;

// ❌ គ្រោះថ្នាក់៖ == ធ្វើ Type Coercion
console.log(userInputScore == targetScore); // true (ព្រោះ "100" ត្រូវបានបំប្លែងទៅជាលេខ)

// ✅ ស្តង់ដារសុវត្ថិភាព៖ === ពិនិត្យទាំង Type និង Value
console.log(userInputScore === targetScore); // false (String មិនស្មើ Number ឡើយ)

// ឧទាហរណ៍ចម្លែកៗនៃ == ដែលអាចបង្កជា Bug ធ្ងន់ធ្ងរ៖
console.log(0 == false);        // true (ខុសតក្កវិជ្ជា)
console.log("" == 0);           // true (ខុសតក្កវិជ្ជា)
console.log(null == undefined); // true
console.log(null === undefined);// false (ត្រឹមត្រូវ ព្រោះ Null ≠ Undefined)`
      },
      {
        title: '៣. ស្គាល់តម្លៃ Falsy ទាំង ៨ និងការប្រើ Double Bang (!!)',
        description: 'របៀបដែល JavaScript វាយតម្លៃ Boolean លើតម្លៃផ្សេងៗ',
        code: `// តម្លៃ Falsy ទាំង ៨
console.log("--- តម្លៃ Falsy ---");
console.log(Boolean(false));     // false
console.log(Boolean(0));         // false
console.log(Boolean(""));        // false
console.log(Boolean(null));      // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN));       // false

// ចំណាំ៖ Array និង Object ទទេ គឺជា TRUTHY!
console.log("--- Truthy Edge Cases ---");
console.log(Boolean([]));        // true!
console.log(Boolean({}));        // true!
console.log(Boolean("0"));       // true! (មិនមែន String ទទេ)

// បច្ចេកទេស Double Bang (!!) បំប្លែងទៅជា Boolean រហ័ស
const searchKeyword = "JavaScript";
const hasKeyword = !!searchKeyword;
console.log("មានពាក្យស្វែងរក:", hasKeyword); // true`
      },
      {
        title: '៤. Logical Operators (&&, ||, ??) និង Short-Circuiting',
        description: 'ការប្រើប្រាស់ AND, OR, និង Nullish Coalescing សម្រាប់ Fallback Values',
        code: `// ១. && (Logical AND) - Guard Condition
const user = { name: "សុខា", isPaid: true };
// បង្ហាញតែពេលលក្ខខណ្ឌពិត
user.isPaid && console.log(\`អនុញ្ញាតឱ្យសិស្ស \${user.name} ទាញយកវិញ្ញាបនបត្រ\`);

// ២. || (Logical OR) vs ?? (Nullish Coalescing)
let defaultScore = 0;

// ❌ || ចាត់ទុក 0 ជា Falsy ធ្វើឱ្យធ្លាក់ទៅតម្លៃ Fallback 50 ដោយអចេតនា!
const resultWithOR = defaultScore || 50;
console.log("លទ្ធផលជាមួយ ||:", resultWithOR); // 50 (ខុសបំណង ព្រោះ 0 ជាពិន្ទុពិត)

// ✅ ?? ពិនិត្យតែ null និង undefined ប៉ុណ្ណោះ
const resultWithNullish = defaultScore ?? 50;
console.log("លទ្ធផលជាមួយ ?? (ត្រឹមត្រូវ):", resultWithNullish); // 0`
      },
      {
        title: '៥. រចនាសម្ព័ន្ធ if...else if និង switch...case',
        description: 'ការរៀបចំលំហូរសម្រេចចិត្តវាយតម្លៃពិន្ទុនិស្សិត',
        code: `function getStudentStanding(score, attendanceRate) {
  // Guard Clause: ពិនិត្យលក្ខខណ្ឌកំហុសមុន
  if (score < 0 || score > 100) return "ពិន្ទុមិនត្រឹមត្រូវ (0-100)";
  if (attendanceRate < 75) return "ធ្លាក់ស្វ័យប្រវត្តិដោយសារវត្តមានក្រោម 75%";

  // កំណត់និទ្ទេស
  let grade;
  if (score >= 90) {
    grade = "A";
  } else if (score >= 80) {
    grade = "B";
  } else if (score >= 70) {
    grade = "C";
  } else if (score >= 60) {
    grade = "D";
  } else if (score >= 50) {
    grade = "E";
  } else {
    grade = "F";
  }

  // ប្រើ switch ដើម្បីផ្តល់មតិយោបល់តាមនិទ្ទេស
  let comment;
  switch (grade) {
    case "A":
      comment = "និស្សិតឆ្នើមប្រចាំឆមាស";
      break;
    case "B":
    case "C":
      comment = "លទ្ធផលល្អប្រសើរ";
      break;
    case "D":
    case "E":
      comment = "ត្រូវខិតខំពង្រឹងបន្ថែម";
      break;
    default:
      comment = "ត្រូវរៀនសងឡើងវិញ";
  }

  return \`និទ្ទេស: \${grade} - \${comment}\`;
}

console.log(getStudentStanding(92, 90));
console.log(getStudentStanding(65, 80));
console.log(getStudentStanding(88, 60)); // ធ្លាក់ដោយសារវត្តមាន`
      }
    ],
    guidedPractice: {
      title: 'ប្រព័ន្ធគណនានិទ្ទេស និងអាហារូបករណ៍និស្សិត (Student Academic & Scholarship Evaluator)',
      description: 'បង្កើតផ្ទាំងកម្មវិធី Frontend ពេញលេញមួយ ដែលអនុញ្ញាតឱ្យបញ្ចូលពិន្ទុប្រឡង ភាគរយវត្តមាន និងស្ថានភាពទណ្ឌកម្ម ដើម្បីគណនានិទ្ទេស (A, B, C, D, E, F) និងពិនិត្យសិទ្ធិទទួលបានអាហារូបករណ៍ ១០០% ឬ ៥០% ដោយផ្អែកលើលក្ខខណ្ឌតក្កវិជ្ជាចម្រុះ។',
      runnableJsCode: `function evaluateAcademicRecord(name, score, attendance, hasDisciplinaryRecord) {
  // ១. ផ្ទៀងផ្ទាត់ទិន្នន័យ (Validation Guard Clauses)
  if (!name || name.trim() === "") return "សូមបញ្ចូលឈ្មោះនិស្សិត!";
  const numScore = Number(score);
  const numAttendance = Number(attendance);

  if (isNaN(numScore) || numScore < 0 || numScore > 100) {
    return "ពិន្ទុត្រូវតែជាលេខចន្លោះពី ០ ដល់ ១០០!";
  }
  if (isNaN(numAttendance) || numAttendance < 0 || numAttendance > 100) {
    return "វត្តមានត្រូវតែជាលេខចន្លោះពី ០ ដល់ ១០០%!";
  }

  // ២. ពិនិត្យវត្តមានអប្បបរមា
  if (numAttendance < 80) {
    return \`❌ និស្សិត \${name} ធ្លាក់ស្វ័យប្រវត្តិ (វត្តមាន \${numAttendance}% ក្រោម 80%)\`;
  }

  // ៣. កំណត់និទ្ទេស (Grade Classification)
  let grade = "F";
  let badgeColor = "red";
  if (numScore >= 90) {
    grade = "A";
    badgeColor = "emerald";
  } else if (numScore >= 80) {
    grade = "B";
    badgeColor = "blue";
  } else if (numScore >= 70) {
    grade = "C";
    badgeColor = "indigo";
  } else if (numScore >= 60) {
    grade = "D";
    badgeColor = "amber";
  } else if (numScore >= 50) {
    grade = "E";
    badgeColor = "orange";
  }

  // ៤. វិនិច្ឆ័យអាហារូបករណ៍តាម Compound Logical Operators (&&, ||, !)
  let scholarship = "គ្មាន";
  const isExcellent = grade === "A" && numAttendance >= 90 && !hasDisciplinaryRecord;
  const isGood = (grade === "A" || grade === "B") && numAttendance >= 85 && !hasDisciplinaryRecord;

  if (isExcellent) {
    scholarship = "អាហារូបករណ៍ ១០០% (ពេញលេញ)";
  } else if (isGood) {
    scholarship = "អាហារូបករណ៍ ៥០% (ពាក់កណ្តាល)";
  }

  return {
    studentName: name,
    score: numScore,
    grade: grade,
    attendance: \`\${numAttendance}%\`,
    isPassed: numScore >= 50,
    scholarship: scholarship,
    statusText: numScore >= 50 ? "ជាប់ការសិក្សា" : "ធ្លាក់ការសិក្សា"
  };
}

console.log(evaluateAcademicRecord("គឹម ឡុង", 94, 92, false));
console.log(evaluateAcademicRecord("ចាន់ សុផល", 82, 88, false));
console.log(evaluateAcademicRecord("ហេង សុវណ្ណ", 95, 70, false));`,
      files: [
        {
          filename: 'index.html',
          language: 'html',
          code: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <title>ប្រព័ន្ធគណនានិទ្ទេសនិស្សិត</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="evaluator-card">
    <header class="card-header">
      <h2>🎓 ប្រព័ន្ធវាយតម្លៃពិន្ទុ និងអាហារូបករណ៍</h2>
      <p>រៀបចំតាមក្បួនតក្កវិជ្ជា JavaScript Logical Conditions</p>
    </header>

    <form id="evaluation-form" class="form-body">
      <div class="input-group">
        <label for="student-name">ឈ្មោះនិស្សិត៖</label>
        <input type="text" id="student-name" placeholder="ឧ. កែវ ចរិយា" value="កែវ ចរិយា" required>
      </div>

      <div class="grid-2">
        <div class="input-group">
          <label for="student-score">ពិន្ទុប្រឡង (០-១០០)៖</label>
          <input type="number" id="student-score" min="0" max="100" value="88" required>
        </div>
        <div class="input-group">
          <label for="student-attendance">វត្តមានសិក្សា (០-១០០%)៖</label>
          <input type="number" id="student-attendance" min="0" max="100" value="92" required>
        </div>
      </div>

      <div class="checkbox-group">
        <input type="checkbox" id="has-penalty">
        <label for="has-penalty">ធ្លាប់មានកំណត់ត្រាកំហុសវិន័យ (Disciplinary Record)</label>
      </div>

      <button type="button" id="btn-evaluate" class="btn-primary">គណនានិទ្ទេស និងពិនិត្យអាហារូបករណ៍</button>
    </form>

    <div id="result-box" class="result-box hidden">
      <div class="result-header">
        <span id="res-name" class="student-title"></span>
        <span id="res-grade-badge" class="badge"></span>
      </div>
      <div class="result-details">
        <p><strong>ស្ថានភាពសិក្សា៖</strong> <span id="res-status"></span></p>
        <p><strong>វត្តមាន៖</strong> <span id="res-attendance"></span></p>
        <p><strong>កម្រិតអាហារូបករណ៍៖</strong> <span id="res-scholarship" class="highlight"></span></p>
      </div>
      <p id="res-advice" class="advice-note"></p>
    </div>
  </div>

  <script src="app.js"></script>
</body>
</html>`
        },
        {
          filename: 'style.css',
          language: 'css',
          code: `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Kantumruy Pro', system-ui, -apple-system, sans-serif;
}

body {
  background-color: #090d16;
  color: #f1f5f9;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
}

.evaluator-card {
  background: #131b2e;
  border: 1px solid #1e293b;
  border-radius: 20px;
  width: 100%;
  max-width: 500px;
  padding: 28px;
  box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.6);
}

.card-header h2 {
  font-size: 18px;
  font-weight: 700;
  color: #60a5fa;
  margin-bottom: 4px;
}

.card-header p {
  font-size: 12px;
  color: #94a3b8;
  margin-bottom: 20px;
}

.form-body {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.input-group label {
  display: block;
  font-size: 12px;
  font-weight: 500;
  color: #cbd5e1;
  margin-bottom: 6px;
}

.input-group input {
  width: 100%;
  background: #090d16;
  border: 1px solid #334155;
  border-radius: 10px;
  padding: 10px 14px;
  font-size: 13px;
  color: #fff;
  outline: none;
  transition: border-color 0.2s;
}

.input-group input:focus {
  border-color: #3b82f6;
}

.grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.checkbox-group {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: #94a3b8;
}

.btn-primary {
  background: #2563eb;
  color: #fff;
  border: none;
  padding: 12px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  margin-top: 6px;
}

.btn-primary:hover {
  background: #1d4ed8;
}

.result-box {
  margin-top: 24px;
  padding: 18px;
  border-radius: 14px;
  background: #090d16;
  border: 1px solid #334155;
}

.result-box.hidden {
  display: none;
}

.result-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #1e293b;
  padding-bottom: 12px;
  margin-bottom: 12px;
}

.student-title {
  font-size: 15px;
  font-weight: 700;
  color: #fff;
}

.badge {
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 700;
}

.badge.A { background: rgba(16, 185, 129, 0.2); color: #34d399; border: 1px solid #059669; }
.badge.B { background: rgba(59, 130, 246, 0.2); color: #60a5fa; border: 1px solid #2563eb; }
.badge.C { background: rgba(99, 102, 241, 0.2); color: #818cf8; border: 1px solid #4f46e5; }
.badge.D { background: rgba(245, 158, 11, 0.2); color: #fbbf24; border: 1px solid #d97706; }
.badge.E { background: rgba(249, 115, 22, 0.2); color: #fb923c; border: 1px solid #ea580c; }
.badge.F { background: rgba(239, 68, 68, 0.2); color: #f87171; border: 1px solid #dc2626; }

.result-details p {
  font-size: 13px;
  color: #cbd5e1;
  margin-bottom: 6px;
}

.highlight {
  color: #34d399;
  font-weight: 600;
}

.advice-note {
  font-size: 12px;
  color: #94a3b8;
  margin-top: 10px;
  font-style: italic;
}`
        },
        {
          filename: 'app.js',
          language: 'javascript',
          code: `// ទាញយក Elements ដោយ getElementById
const nameInput = document.getElementById("student-name");
const scoreInput = document.getElementById("student-score");
const attendanceInput = document.getElementById("student-attendance");
const penaltyCheckbox = document.getElementById("has-penalty");
const evaluateBtn = document.getElementById("btn-evaluate");

const resultBox = document.getElementById("result-box");
const resName = document.getElementById("res-name");
const resGradeBadge = document.getElementById("res-grade-badge");
const resStatus = document.getElementById("res-status");
const resAttendance = document.getElementById("res-attendance");
const resScholarship = document.getElementById("res-scholarship");
const resAdvice = document.getElementById("res-advice");

evaluateBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  const score = Number(scoreInput.value);
  const attendance = Number(attendanceInput.value);
  const hasPenalty = penaltyCheckbox.checked;

  // ១. Validation Guard Clauses
  if (!name) {
    alert("សូមបញ្ចូលឈ្មោះនិស្សិត!");
    return;
  }
  if (isNaN(score) || score < 0 || score > 100) {
    alert("ពិន្ទុត្រូវតែចន្លោះពី ០ ដល់ ១០០!");
    return;
  }
  if (isNaN(attendance) || attendance < 0 || attendance > 100) {
    alert("វត្តមានត្រូវតែចន្លោះពី ០ ដល់ ១០០%!");
    return;
  }

  // ២. ពិនិត្យវត្តមានអប្បបរមា (Attendance Requirement: >= 80%)
  const isAttendanceDisqualified = attendance < 80;

  // ៣. កំណត់និទ្ទេស (Grade Evaluation)
  let grade = "F";
  let advice = "";

  if (isAttendanceDisqualified) {
    grade = "F";
    advice = "ធ្លាក់ដោយសារអវត្តមានលើសកម្រិតកំណត់ (ត្រូវមានវត្តមានយ៉ាងតិច ៨០%)។";
  } else if (score >= 90) {
    grade = "A";
    advice = "ឆ្នើមណាស់! សូមបន្តរក្សាសមត្ថភាព និងជួយចែករំលែកមិត្តរួមថ្នាក់។";
  } else if (score >= 80) {
    grade = "B";
    advice = "លទ្ធផលល្អណាស់! បន្ថែមការអនុវត្តបន្តិចទៀតនឹងឈានដល់និទ្ទេស A។";
  } else if (score >= 70) {
    grade = "C";
    advice = "លទ្ធផលល្អប្រសើរ! ត្រូវយកចិត្តទុកដាក់លើលំហាត់កូដជាក់ស្តែងបន្ថែម។";
  } else if (score >= 60) {
    grade = "D";
    advice = "លទ្ធផលមធ្យម! ត្រូវបង្កើនម៉ោងស្វ័យសិក្សា និងសួរគ្រូបន្ថែម។";
  } else if (score >= 50) {
    grade = "E";
    advice = "ឆ្លងផុតដោយប្រផិតប្រផើយ! ត្រូវប្រុងប្រយ័ត្នសម្រាប់ការសិក្សាឆមាសបន្ទាប់។";
  } else {
    grade = "F";
    advice = "ពិន្ទុមិនគ្រប់ ៥០ ឡើយ និស្សិតត្រូវចូលរៀនមុខវិជ្ជានេះឡើងវិញ (Retake)។";
  }

  // ៤. វិនិច្ឆ័យអាហារូបករណ៍តាម Compound Logic (&&, ||, !)
  let scholarshipText = "ពុំទទួលបានអាហារូបករណ៍";
  const isEligible100 = grade === "A" && attendance >= 95 && !hasPenalty;
  const isEligible50 = (grade === "A" || grade === "B") && attendance >= 85 && !hasPenalty;

  if (isEligible100) {
    scholarshipText = "🎉 អាហារូបករណ៍ ១០០% (សិក្សាឥតបង់ថ្លៃ)";
  } else if (isEligible50) {
    scholarshipText = "✨ អាហារូបករណ៍ ៥០% (បញ្ចុះតម្លៃពាក់កណ្តាល)";
  } else if (hasPenalty) {
    scholarshipText = "❌ គ្មានសិទ្ធិ (ដោយសារមានកំណត់ត្រាទណ្ឌកម្ម)";
  }

  // ៥. បង្ហាញទិន្នន័យលើ DOM ដោយសុវត្ថិភាព
  resName.textContent = name;
  resGradeBadge.textContent = \`និទ្ទេស \${grade}\`;
  resGradeBadge.className = \`badge \${grade}\`;

  const isPassed = grade !== "F";
  resStatus.textContent = isPassed ? "✅ ជាប់ការសិក្សា" : "❌ ធ្លាក់ការសិក្សា";
  resStatus.style.color = isPassed ? "#34d399" : "#f87171";

  resAttendance.textContent = \`\${attendance}% \${isAttendanceDisqualified ? "(មិនគ្រប់គ្រាន់)" : "(គ្រប់គ្រាន់)"}\`;
  resScholarship.textContent = scholarshipText;
  resAdvice.textContent = advice;

  // បង្ហាញ Result Box
  resultBox.classList.remove("hidden");
});`
        }
      ],
      expectedOutput: 'នៅពេលចុចគណនា ប្រព័ន្ធនឹងបង្ហាញកាតលទ្ធផលភ្លាមៗ ដោយបញ្ជាក់ឈ្មោះ និទ្ទេស (A, B, C, D, E, F) អមដោយ Badge ពណ៌ត្រឹមត្រូវ ស្ថានភាពជាប់/ធ្លាក់ ភាគរយវត្តមាន និងលទ្ធផលអាហារូបករណ៍ (១០០%, ៥០% ឬគ្មាន) ស្របតាមក្បួនតក្កវិជ្ជាដែលបានកំណត់។'
    },
    commonMistakes: [
      {
        mistake: 'ប្រើសញ្ញាស្មើតែមួយ (=) ជំនួសឱ្យ === ក្នុងលក្ខខណ្ឌ if',
        cause: 'សញ្ញា = គឺជា Assignment Operator ដែលប្រគល់តម្លៃ មិនមែនប្រៀបធៀបទេ',
        wrongCode: 'if (score = 100) {\n  console.log("ពិន្ទុពេញ!");\n}',
        fixedCode: 'if (score === 100) {\n  console.log("ពិន្ទុពេញ!");\n}',
        fix: 'ប្រើ === ជានិច្ចសម្រាប់ការប្រៀបធៀបតម្លៃ និងប្រភេទក្នុងលក្ខខណ្ឌ។'
      },
      {
        mistake: 'ប្រើ Loose Equality (==) ធ្វើឱ្យមាន Coercion Bugs មិនដឹងខ្លួន',
        cause: 'សញ្ញា == បំប្លែងប្រភេទស្វ័យប្រវត្តិ ធ្វើឱ្យ "" == 0 ឬ 0 == false ក្លាយជា true',
        wrongCode: 'const input = "";\nif (input == 0) { /* នឹងដំណើរការព្រោះ "" == 0 គឺ true! */ }',
        fixedCode: 'const input = "";\nif (input === 0) { /* false ព្រោះ String មិនស្មើ Number */ }',
        fix: 'ប្រកាន់ខ្ជាប់វិធានការ Strict Equality (=== និង !==) ជាដាច់ខាត។'
      },
      {
        mistake: 'ភ្លេចពាក្យគន្លឹះ break ក្នុង switch statement (Fall-through Bug)',
        cause: 'JavaScript នឹងរត់បន្តទៅ case បន្ទាប់ៗដោយស្វ័យប្រវត្តិ ប្រសិនបើគ្មាន break',
        wrongCode: 'switch (role) {\n  case "admin": grantAdmin();\n  case "student": grantStudent();\n}',
        fixedCode: 'switch (role) {\n  case "admin": grantAdmin(); break;\n  case "student": grantStudent(); break;\n  default: grantGuest();\n}',
        fix: 'ដាក់ break នៅចុងបញ្ចប់នៃរាល់ case នីមួយៗ លើកលែងតែចេតនាចង់ group cases ចូលគ្នា។'
      },
      {
        mistake: 'ច្រឡំរវាង || (OR) និង ?? (Nullish Coalescing) នៅពេលតម្លៃជា 0',
        cause: '|| ចាត់ទុក 0 ជា Falsy ធ្វើឱ្យធ្លាក់ទៅតម្លៃ Fallback ដោយមិនចង់បាន',
        wrongCode: 'const studentScore = 0;\nconst finalScore = studentScore || 50; // ក្លាយជា 50!',
        fixedCode: 'const studentScore = 0;\nconst finalScore = studentScore ?? 50; // នៅតែ 0 ត្រឹមត្រូវ',
        fix: 'ប្រើ ?? កាលណាអ្នកចង់បាន Default Value សម្រាប់តែ null ឬ undefined ប៉ុណ្ណោះ។'
      },
      {
        mistake: 'សរសេរ Nested If ច្រើនជាន់កៀបគ្នាដូចសាជីជ្រុង (Pyramid of Doom)',
        cause: 'ពិបាកអាន ពិបាក debug និងងាយបង្កកំហុសលក្ខខណ្ឌបាត់មួយជ្រុង',
        wrongCode: 'if (a) {\n  if (b) {\n    if (c) { doTask(); }\n  }\n}',
        fixedCode: 'if (!a || !b || !c) return; // Guard Clause\ndoTask();',
        fix: 'ប្រើ Guard Clauses (Early Return) ដើម្បីបញ្ច្រាសលក្ខខណ្ឌ និងត្រឡប់ចេញភ្លាមប្រសិនបើតម្លៃមិនត្រូវ។'
      }
    ],
    exercises: [
      {
        level: 'មូលដ្ឋាន (Basic)',
        prompt: `**កិច្ចការ៖ បង្កើតមុខងារពិនិត្យកម្រិតពិន្ទុ និងសុពលភាព (Exam Boundary & Score Classifier)**
ចូរសរសេរ Function ឈ្មោះ \`classifyExamScore(rawScore)\` ដោយអនុវត្ត៖
១. **ផ្ទៀងផ្ទាត់សុពលភាព (Validation):** ពិនិត្យមើលថាតើ \`rawScore\` ជាលេខសុពលភាពចន្លោះពី \`0\` ដល់ \`100\` ឬទេ ដោយប្រើប្រាស់ Comparison Operators (\`>=\`, \`<=\`) និង Logical AND (\`&&\`) ព្រមទាំងពិនិត្យកុំឱ្យមាន \`NaN\`។ ប្រសិនបើពិន្ទុមិនត្រឹមត្រូវ ត្រូវ return \`"កំហុស៖ ពិន្ទុត្រូវតែស្ថិតនៅចន្លោះពី ០ ដល់ ១០០!"\`
២. **ប្រៀបធៀបកម្រិតពិន្ទុ (Score Comparison):**
   - \`score >= 85\`: និទ្ទេស "A (ឆ្នើម)"
   - \`score >= 70 && score < 85\`: និទ្ទេស "B (ល្អ)"
   - \`score >= 50 && score < 70\`: និទ្ទេស "C (មធ្យម)"
   - \`score < 50\`: និទ្ទេស "F (ធ្លាក់)"
៣. **កំណត់ស្ថានភាព (Pass/Fail):** ប្រើ **Ternary Operator** (\`? :\`) ដើម្បីកំណត់ថាតើ \`score >= 50\` គឺ "ជាប់" ឬ "ធ្លាក់"។
៤. ត្រឡប់លទ្ធផលជា Object ដែលមាន \`score\`, \`grade\`, និង \`isPassed\`។`,
        solutionCode: `function classifyExamScore(rawScore) {
  // ១. បំប្លែងទៅជា Number និងធ្វើការ Validation ដោយ Guard Clause
  const score = Number(rawScore);

  if (isNaN(score) || score < 0 || score > 100) {
    return { error: "កំហុស៖ ពិន្ទុត្រូវតែស្ថិតនៅចន្លោះពី ០ ដល់ ១០០!" };
  }

  // ២. ប្រៀបធៀបពិន្ទុដើម្បីកំណត់និទ្ទេស
  let grade = "F (ធ្លាក់)";
  if (score >= 85) {
    grade = "A (ឆ្នើម)";
  } else if (score >= 70) {
    grade = "B (ល្អ)";
  } else if (score >= 50) {
    grade = "C (មធ្យម)";
  }

  // ៣. ប្រើ Ternary Operator កំណត់ស្ថានភាពជាប់/ធ្លាក់
  const isPassed = score >= 50;
  const statusText = isPassed ? "ជាប់ការប្រឡង" : "ធ្លាក់ការប្រឡង";

  return {
    score: score,
    grade: grade,
    isPassed: isPassed,
    statusText: statusText
  };
}

// ករណីតេស្តសាកល្បង (Test Cases)
console.log(classifyExamScore(92));   // និទ្ទេស A - ជាប់
console.log(classifyExamScore(74));   // និទ្ទេស B - ជាប់
console.log(classifyExamScore(48));   // និទ្ទេស F - ធ្លាក់
console.log(classifyExamScore("105")); // កំហុសលើសពី ១០០
console.log(classifyExamScore("abc")); // កំហុស NaN`,
        explanation: 'លំហាត់នេះពង្រឹងការប្រើប្រាស់ `Number()`, `isNaN()`, Comparison Operators (`>=`, `<=`, `<`) និង Ternary Operator (`? :`) សម្រាប់សរសេរលក្ខខណ្ឌសង្ខេបស្អាត និងមានសុវត្ថិភាពខ្ពស់។'
      },
      {
        level: 'អនុវត្ត (Applied)',
        prompt: `**កិច្ចការ៖ បង្កើតប្រព័ន្ធវិនិច្ឆ័យលទ្ធផលប្រឡងចម្រុះមុខវិជ្ជា (Multi-Subject Composite Score Evaluator)**
ចូរសរសេរ Function ឈ្មោះ \`evaluateStudentExam(studentName, mathScore, scienceScore, englishScore)\` ដោយអនុវត្តលក្ខខណ្ឌតក្កវិជ្ជាចម្រុះ៖
១. **Guard Clause Validation:** ពិនិត្យថាពិន្ទុមុខវិជ្ជាទាំង ៣ ត្រូវតែជាលេខចន្លោះពី \`0\` ដល់ \`100\` (\`mathScore >= 0 && mathScore <= 100 && ...\`) បើមិនដូច្នោះទេ return \`"ទិន្នន័យពិន្ទុមិនត្រឹមត្រូវ"\`។
២. **គណនាមធ្យមភាគ:** \`average = (mathScore + scienceScore + englishScore) / 3\`
៣. **វិនិច្ឆ័យលទ្ធផលតាម Logical Operators (\`&&\`, \`||\`, \`!\`):**
   - **ធ្លាក់ស្វ័យប្រវត្តិ (Automatic Fail):** ប្រសិនបើមានមុខវិជ្ជាណាមួយមានពិន្ទុក្រោម \`25\` (\`mathScore < 25 || scienceScore < 25 || englishScore < 25\`) ទោះបីមធ្យមភាគខ្ពស់យ៉ាងណាក៏ដោយ។
   - **ជាប់កិត្តិយសជាន់ខ្ពស់ (High Honors):** មធ្យមភាគ \`>= 85\` AND (\`&&\`) មានយ៉ាងហោចណាស់មុខវិជ្ជាណាមួយបានពិន្ទុពេញ \`100\` (\`mathScore === 100 || scienceScore === 100 || englishScore === 100\`)។
   - **ជាប់កម្រិតល្អ (Good Standing):** មធ្យមភាគ \`>= 65\` AND (\`&&\`) គ្មានមុខវិជ្ជាណាមួយក្រោម \`45\` ឡើយ (\`mathScore >= 45 && scienceScore >= 45 && englishScore >= 45\`)។
   - **ជាប់កម្រិតមធ្យម (Standard Pass):** មធ្យមភាគ \`>= 50\` AND (\`&&\`) គ្មានមុខវិជ្ជាណាមួយក្រោម \`35\` ឡើយ។
   - **ធ្លាក់ទូទៅ (Failed):** ករណីក្រៅពីនេះទាំងអស់។
៤. ត្រឡប់លទ្ធផលជា Text ឬ Object បង្ហាញព័ត៌មានលម្អិត។`,
        solutionCode: `function evaluateStudentExam(studentName, mathScore, scienceScore, englishScore) {
  // ១. Validation Guard Clause
  const scores = [mathScore, scienceScore, englishScore];
  const isInvalid = scores.some(s => typeof s !== "number" || isNaN(s) || s < 0 || s > 100);
  if (isInvalid) {
    return \`❌ កំហុស៖ ពិន្ទុរបស់ \${studentName} ត្រូវតែជាលេខរវាង ០ ដល់ ១០០!\`;
  }

  // ២. គណនាសរុប និងមធ្យមភាគ
  const totalScore = mathScore + scienceScore + englishScore;
  const average = Number((totalScore / 3).toFixed(1));

  // ៣. ពិនិត្យលក្ខខណ្ឌដោយប្រើ Compound Comparison & Logical Operators
  const hasFatalSubject = mathScore < 25 || scienceScore < 25 || englishScore < 25;
  const hasPerfectSubject = mathScore === 100 || scienceScore === 100 || englishScore === 100;
  const noSubjectBelow45 = mathScore >= 45 && scienceScore >= 45 && englishScore >= 45;
  const noSubjectBelow35 = mathScore >= 35 && scienceScore >= 35 && englishScore >= 35;

  let standing = "";
  let isPassed = false;
  let note = "";

  if (hasFatalSubject) {
    standing = "ធ្លាក់ស្វ័យប្រវត្តិ (Disqualified)";
    isPassed = false;
    note = "មានមុខវិជ្ជាទទួលបានពិន្ទុក្រោម ២៥ (ពិន្ទុទោស)";
  } else if (average >= 85 && hasPerfectSubject) {
    standing = "ជាប់កិត្តិយសជាន់ខ្ពស់ (High Honors) 🏆";
    isPassed = true;
    note = "មធ្យមភាគខ្ពស់ និងទទួលបានពិន្ទុពេញ ១០០ លើមុខវិជ្ជាយ៉ាងតិចមួយ";
  } else if (average >= 65 && noSubjectBelow45) {
    standing = "ជាប់កម្រិតល្អ (Good Standing) 🎖️";
    isPassed = true;
    note = "លទ្ធផលល្អ និងរឹងមាំគ្រប់មុខវិជ្ជា (គ្មានមុខវិជ្ជាក្រោម ៤៥)";
  } else if (average >= 50 && noSubjectBelow35) {
    standing = "ជាប់កម្រិតមធ្យម (Standard Pass) ✅";
    isPassed = true;
    note = "ឆ្លងផុតការប្រឡងតាមលក្ខខណ្ឌតម្រូវអប្បបរមា";
  } else {
    standing = "ធ្លាក់ការប្រឡង (Failed) ❌";
    isPassed = false;
    note = average < 50 ? "មធ្យមភាគសរុបមិនដល់ ៥០" : "មានមុខវិជ្ជាខ្សោយក្រោម ៣៥";
  }

  return {
    student: studentName,
    scores: { math: mathScore, science: scienceScore, english: englishScore },
    average: average,
    isPassed: isPassed,
    standing: standing,
    note: note
  };
}

// ករណីតេស្តសាកល្បង (Test Cases)
console.log(evaluateStudentExam("កែវ ចរិយា", 100, 88, 92)); // High Honors (មាន ១០០ និង avg >= 85)
console.log(evaluateStudentExam("សុខ វិបុល", 70, 65, 68));   // Good Standing (avg >= 65 & គ្មានក្រោម 45)
console.log(evaluateStudentExam("ជា ចិន្តា", 95, 20, 90));   // ធ្លាក់ស្វ័យប្រវត្តិ (ព្រោះវិទ្យាសាស្ត្រ ២០ < ២៥)`,
        explanation: 'លំហាត់អនុវត្តនេះបង្ហាញពីការប្រើប្រាស់ Logical Operators (`&&`, `||`) រួមផ្សំជាមួយ Comparison Operators (`===`, `<`, `>=`) ក្នុងការដោះស្រាយ Business Rules ពិតប្រាកដក្នុងប្រព័ន្ធអប់រំ ដែលទាមទារលក្ខខណ្ឌចម្រុះ។'
      },
      {
        level: 'ប្រកួតប្រជែង (Competitive)',
        prompt: `**កិច្ចការ៖ បង្កើតម៉ាស៊ីនវិនិច្ឆ័យចំណាត់ថ្នាក់សិស្សពូកែ និងដោះស្រាយពិន្ទុស្មើគ្នា (Academic Tournament Tie-Breaker Engine)**
នៅក្នុងការប្រកួតសិស្សពូកែទូទាំងប្រទេស បេក្ខជនត្រូវបានវាយតម្លៃលើ ២ ជុំប្រកួត (Round 1 & Round 2), រយៈពេលធ្វើតេស្តសរុប (Time in Seconds), និងចំនួនកំហុស (Penalty Count)។
ចូរសរសេរ Function ឈ្មោះ \`resolveTournamentMatch(contestantA, contestantB)\` ដែលទទួល Objects បេក្ខជនទាំងពីរ៖
\`{ name: string, r1: number, r2: number, timeSec: number, penalties: number }\`

**វិធានការប្រៀបធៀបដោះស្រាយពិន្ទុស្មើគ្នា (Hierarchical Tie-Breaking Rules):**
១. **ពិន្ទុសរុប (Total Score):** គណនា \`total = r1 + r2\`។ បេក្ខជនណាមានពិន្ទុសរុបធំជាង (\`totalA > totalB\`) នឹងឈ្នះ។
២. **ពិន្ទុជុំផ្តាច់ព្រ័ត្រ (Round 2 Score):** ប្រសិនបើពិន្ទុសរុបស្មើគ្នា (\`totalA === totalB\`), បេក្ខជនណាមានពិន្ទុជុំទី២ ខ្ពស់ជាង (\`r2A > r2B\`) នឹងឈ្នះ (Tie-breaker 1)។
៣. **ល្បឿននៃការប្រកួត (Total Time):** ប្រសិនបើពិន្ទុជុំទី២ នៅតែស្មើគ្នា (\`r2A === r2B\`), បេក្ខជនណាប្រើរយៈពេលតិចជាង (\`timeA < timeB\`) នឹងឈ្នះ (Tie-breaker 2)។
៤. **ចំនួនកំហុស (Penalty Count):** ប្រសិនបើពេលវេលានៅតែស្មើគ្នា (\`timeA === timeB\`), បេក្ខជនណាមានកំហុសតិចជាង (\`penaltiesA < penaltiesB\`) នឹងឈ្នះ (Tie-breaker 3)។
៥. **ស្មើគ្នាទាំងស្រុង (Absolute Tie):** ប្រសិនបើតម្លៃទាំងអស់ស្មើគ្នា (\`===\`), ត្រូវប្រកាសថា "ស្មើគ្នាជាសហជើងឯក (Co-Champions)"។

**កំណត់មេដាយកិត្តិយស (Medal Qualification):**
- **មេដាយមាស (Gold):** ពិន្ទុសរុប \`>= 180\` និងគ្មានកំហុសទោស (\`penalties === 0\`)
- **មេដាយប្រាក់ (Silver):** ពិន្ទុសរុប \`>= 160\`
- **មេដាយសំរិទ្ធ (Bronze):** ពិន្ទុសរុប \`>= 140\`
- **លិខិតសរសើរ (Honorable Mention):** ពិន្ទុសរុប \`>= 100\``,
        solutionCode: `function resolveTournamentMatch(c1, c2) {
  // ១. គណនាពិន្ទុសរុប
  const total1 = c1.r1 + c1.r2;
  const total2 = c2.r1 + c2.r2;

  // Function កំណត់មេដាយកិត្តិយស
  function getMedalTier(total, penalties) {
    if (total >= 180 && penalties === 0) return "មេដាយមាស (Gold Medal) 🥇";
    if (total >= 160) return "មេដាយប្រាក់ (Silver Medal) 🥈";
    if (total >= 140) return "មេដាយសំរិទ្ធ (Bronze Medal) 🥉";
    if (total >= 100) return "លិខិតកិត្តិយស (Honorable Mention) 📜";
    return "វិញ្ញាបនបត្រចូលរួម (Participation)";
  }

  // ២. ដំណើរការប្រៀបធៀបតាមលំដាប់លំដោយ (Hierarchical Comparison)
  let winner = null;
  let loser = null;
  let reason = "";

  if (total1 !== total2) {
    winner = total1 > total2 ? c1 : c2;
    loser = total1 > total2 ? c2 : c1;
    reason = \`ឈ្នះដោយសារពិន្ទុសរុបខ្ពស់ជាង (\${Math.max(total1, total2)} ទល់នឹង \${Math.min(total1, total2)})\`;
  } else if (c1.r2 !== c2.r2) {
    // Tie-break 1: ពិន្ទុជុំផ្តាច់ព្រ័ត្រ (Round 2)
    winner = c1.r2 > c2.r2 ? c1 : c2;
    loser = c1.r2 > c2.r2 ? c2 : c1;
    reason = \`ពិន្ទុសរុបស្មើគ្នា (\${total1}), ឈ្នះដោយពិន្ទុជុំទី២ ខ្ពស់ជាង (\${winner.r2} ទល់នឹង \${loser.r2})\`;
  } else if (c1.timeSec !== c2.timeSec) {
    // Tie-break 2: ល្បឿនបញ្ចប់លឿនជាង
    winner = c1.timeSec < c2.timeSec ? c1 : c2;
    loser = c1.timeSec < c2.timeSec ? c2 : c1;
    reason = \`ពិន្ទុជុំទាំងពីរស្មើគ្នា, ឈ្នះដោយល្បឿនលឿនជាង (\${winner.timeSec}s ទល់នឹង \${loser.timeSec}s)\`;
  } else if (c1.penalties !== c2.penalties) {
    // Tie-break 3: ចំនួនកំហុសតិចជាង
    winner = c1.penalties < c2.penalties ? c1 : c2;
    loser = c1.penalties < c2.penalties ? c2 : c1;
    reason = \`ល្បឿន និងពិន្ទុស្មើគ្នា, ឈ្នះដោយកំហុសតិចជាង (\${winner.penalties} ទល់នឹង \${loser.penalties})\`;
  } else {
    // ស្មើគ្នាដាច់ខាត
    return {
      isTie: true,
      resultText: \`🤝 ស្មើគ្នាដាច់ខាតរវាង \${c1.name} និង \${c2.name} ដោយក្លាយជាសហជើងឯក (Co-Champions)!\`,
      jointMedal: getMedalTier(total1, c1.penalties),
      sharedScore: total1
    };
  }

  const winnerTotal = winner.r1 + winner.r2;
  const loserTotal = loser.r1 + loser.r2;

  return {
    isTie: false,
    winner: winner.name,
    winnerMedal: getMedalTier(winnerTotal, winner.penalties),
    winnerDetails: \`ពិន្ទុសរុប: \${winnerTotal}, ជុំ២: \${winner.r2}, ពេល: \${winner.timeSec}s, កំហុស: \${winner.penalties}\`,
    loser: loser.name,
    loserMedal: getMedalTier(loserTotal, loser.penalties),
    decidingFactor: reason
  };
}

// ករណីតេស្តសាកល្បងទី១៖ ពិន្ទុសរុបស្មើគ្នា (185) ប៉ុន្តែ Round 2 ឈ្នះ
const playerA = { name: "ចាន់ សុវណ្ណ", r1: 90, r2: 95, timeSec: 320, penalties: 0 };
const playerB = { name: "លី ម៉េងហុង", r1: 95, r2: 90, timeSec: 280, penalties: 0 };
console.log(resolveTournamentMatch(playerA, playerB));

// ករណីតេស្តសាកល្បងទី២៖ ពិន្ទុទាំងពីរជុំស្មើគ្នា (90, 90) ប៉ុន្តែឈ្នះដោយសារល្បឿន
const playerC = { name: "ហេង វិបុល", r1: 90, r2: 90, timeSec: 250, penalties: 1 };
const playerD = { name: "កែវ សម្បត្តិ", r1: 90, r2: 90, timeSec: 300, penalties: 0 };
console.log(resolveTournamentMatch(playerC, playerD));`,
        explanation: 'លំហាត់កម្រិតប្រកួតប្រជែងនេះបង្រៀនពីការសរសេរក្បួនដោះស្រាយលំដាប់លក្ខខណ្ឌ Tie-Breaking ដ៏ជាក់លាក់ ដោយប្រើ Comparison Operators (`!==`, `>`, `<`, `===`) និង Logical Operators ក្នុងការដោះស្រាយករណីស្មុគស្មាញជាច្រើនកម្រិត។'
      }
    ],
    quiz: [
      {
        id: 1,
        question: 'តើការប្រៀបធៀប "0" === 0 និង "0" == 0 នឹងផ្តល់លទ្ធផលអ្វីរៀងគ្នា?',
        options: [
          'true និង true',
          'false និង true',
          'true និង false',
          'false និង false'
        ],
        correctIndex: 1,
        explanation: '"0" === 0 គឺ false ព្រោះ String ខុសពី Number (គ្មាន Coercion)។ រីឯ "0" == 0 គឺ true ព្រោះ Loose Equality បង្ខំបំប្លែង String ទៅជា Number។'
      },
      {
        id: 2,
        question: 'ក្នុងចំណោមតម្លៃខាងក្រោម តើតម្លៃមួយណាដែលជា TRUTHY ក្នុង JavaScript?',
        options: [
          '"" (Empty string)',
          '0',
          '[] (Empty array)',
          'NaN'
        ],
        correctIndex: 2,
        explanation: 'នៅក្នុង JavaScript គ្រប់ Object និង Array (ទោះជាទទេក៏ដោយ) សុទ្ធតែជា Truthy ជានិច្ច! រីឯ "", 0, NaN គឺជាតម្លៃ Falsy។'
      },
      {
        id: 3,
        question: 'ប្រសិនបើ const score = 0; តើ score || 100 និង score ?? 100 នឹងផ្តល់លទ្ធផលអ្វីរៀងគ្នា?',
        options: [
          '0 និង 0',
          '100 និង 100',
          '100 និង 0',
          '0 និង 100'
        ],
        correctIndex: 2,
        explanation: '|| ចាត់ទុក 0 ជា Falsy ដូច្នេះវានឹងធ្លាក់ទៅយក 100។ រីឯ ?? (Nullish Coalescing) ពិនិត្យតែ null និង undefined ប៉ុណ្ណោះ ដូច្នេះវារក្សាតម្លៃ 0 ត្រឹមត្រូវ។'
      },
      {
        id: 4,
        question: 'តើបច្ចេកទេស Guard Clause (Early Return) ផ្តល់អត្ថប្រយោជន៍ចម្បងអ្វីដល់កូដ?',
        options: [
          'ធ្វើឱ្យកូដដំណើរការលឿនជាងមុន ១០ ដង',
          'ជួយកាត់បន្ថយ Nested If ច្រើនជាន់ (Pyramid of Doom) និងធ្វើឱ្យកូដងាយស្រួលអាន',
          'ការពារកុំឱ្យអថេរប្រែប្រួលតម្លៃ',
          'បំប្លែង Function ទៅជា Asynchronous'
        ],
        correctIndex: 1,
        explanation: 'Guard Clauses ជួយជម្រុះករណីមិនត្រឹមត្រូវរួច return ចេញភ្លាម ដែលលុបបំបាត់ការសរសេរ nested if-else ច្រើនជាន់។'
      },
      {
        id: 5,
        question: 'នៅក្នុង Switch Statement ប្រសិនបើយើងភ្លេចសរសេរពាក្យគន្លឹះ break តើនឹងមានអ្វីកើតឡើង?',
        options: [
          'កម្មវិធីនឹងគាំងភ្លាមៗ (SyntaxError)',
          'JavaScript នឹងរត់បន្តទៅកាន់ case បន្ទាប់ៗទៀតដោយស្វ័យប្រវត្តិ (Fall-through)',
          'Switch statement នឹងឈប់ដំណើរការភ្លាម',
          'តម្លៃ default នឹងត្រូវហៅជានិច្ច'
        ],
        correctIndex: 1,
        explanation: 'បាតុភូតនេះហៅថា Fall-through ដោយ JavaScript នឹងបន្តប្រតិបត្តិកូដក្នុង case បន្ទាប់ៗរហូតដល់ជួប break ឬចប់ switch block។'
      }
    ],
    summary: [
      'ប្រកាន់ខ្ជាប់ការប្រើប្រាស់ Strict Equality (=== និង !==) ជាដាច់ខាត ១០០% ដើម្បីការពារ Bugs ពី Loose Equality (==)',
      'ចងចាំតម្លៃ Falsy ទាំង ៨ (false, 0, -0, 0n, "", null, undefined, NaN) និងដឹងថា [] ព្រមទាំង {} គឺជា Truthy',
      'យល់ដឹងពី Short-Circuiting នៃ && (ឈប់ពេលជួប Falsy) និង || (ឈប់ពេលជួប Truthy)',
      'ប្រើ ?? (Nullish Coalescing) ជំនួស || នៅពេលតម្លៃជាលេខ ០ ឬខ្សែអក្សរទទេ "" ជាតម្លៃត្រឹមត្រូវ',
      'អនុវត្ត Guard Clauses (Early Return) ដើម្បីបញ្ចៀស Pyramid of Doom និងប្រើ Ternary Operator សម្រាប់ Inline Logic ខ្លីៗ'
    ]
  },
  {
    id: 4,
    slug: 'control-statements',
    titleKm: 'មេរៀនទី៤៖ ការប្រើប្រាស់ Control Statements',
    titleEn: 'Lesson 4: Control Statements',
    category: 'Logic & Flow',
    prerequisites: [
      'មេរៀនទី១ (ការណែនាំឱ្យស្គាល់ពី JavaScript)',
      'មេរៀនទី២ (អថេរ និងប្រភេទទិន្នន័យ)',
      'មេរៀនទី៣ (ប្រតិបត្តិករ និងលក្ខខណ្ឌ)'
    ],
    learningOutcomes: [
      'ស្វែងយល់ពី Control Flow Statements និងការប្រើប្រាស់ If Statements ដើម្បីត្រួតពិនិត្យមើលលក្ខខណ្ឌពិត ឬមិនពិត (True / False)',
      'ចេះសរសេរ និងអនុវត្តវាក្យសម្ព័ន្ធ Syntax ទាំង ៣ ទម្រង់នៃ If, If-Else, និង If-Else If-Else ក្នុងការបែងចែកលំហូរកូដ',
      'ផ្សំផ្គុំ Comparison Operators (>, <, ==, !=, >=, <=) និង Logical Operators (&&, ||, !) ក្នុង If-Else ដើម្បីប្រៀបធៀបតម្លៃច្រើនលក្ខខណ្ឌ (ដូចជាស្វែងរកលេខធំជាងគេ)',
      'យល់ដឹងច្បាស់ពីការប្រើប្រាស់ Switch Statements ដើម្បីវាយតម្លៃលើ Expression មួយ រួចលោតទៅកាន់ Case Clause ដែលត្រូវគ្នា ឬ default clause',
      'យល់ដឹងពីសារៈសំខាន់នៃពាក្យគន្លឹះ break ក្នុង Switch Statement និងការអនុវត្តបាតុភូត Fall-Through Behavior ក្នុងការចងក្រងករណីច្រើនជាមួយគ្នា',
      'យល់ដឹងច្បាស់ពី While Loop (Pre-test loop) ដែលពិនិត្យលក្ខខណ្ឌមុននឹង Execute Statements',
      'យល់ដឹងច្បាស់ពី Do-While Loop (Post-loop) ដែល Execute code មុន ហើយពិនិត្យលក្ខខណ្ឌតាមក្រោយ (ដំណើរការយ៉ាងហោចណាស់បានម្តង)',
      'ស្វែងយល់ពី For Loop Statement និង ៣ ផ្នែកមូលដ្ឋាន (Initialization, Condition, Increment/Decrement Statement)',
      'អនុវត្តការបង្កើត Dynamic HTML & DOM ដោយប្រើ Loops (Generating a List of Numbers, Creating a Table, Three Counting Sequences, និង For Loop with Calculations)',
      'ស្វែងយល់ និងអនុវត្ត Nested Loops ក្នុង JavaScript សម្រាប់ទិន្នន័យពហុវិមាត្រ និងការបង្កើតតារាងគុណលេខ (Multiplication Table)'
    ],
    scenario: 'នៅក្នុងការសរសេរកម្មវិធីពិត កូដមិនអាចដំណើរការតែតាមបន្ទាត់ត្រង់រហូតនោះទេ។ Control Statements (រួមមាន If-Else, Switch Statements, While, Do-While, និង For Loops) គឺជាគន្លឹះគ្រឹះដ៏សំខាន់បំផុត ដើម្បីឱ្យកម្មវិធីអាចធ្វើការសម្រេចចិត្ត និងដំណើរការកិច្ចការដដែលៗដោយស្វ័យប្រវត្តិ៖ ពិនិត្យអាយុ គណនាចំណាត់ថ្នាក់ពិន្ទុ រកលេខធំជាងគេ បង្ហាញឈ្មោះខែ គណនាបញ្ចុះតម្លៃ បង្កើតតារាងទិន្នន័យ HTML ឬដំណើរការទិន្នន័យរាប់ពាន់ជួរក្នុងរង្វិលជុំ (Loops) ក្នុងរយៈពេលតែប៉ុន្មានមិល្លីវិនាទី។',
    conceptsExplanation: `
### ១. សេចក្តីផ្តើមអំពី Control Flow Statements និង If Statements

**If Statements** ជា Statement ដែលបានប្រើសម្រាប់ត្រួតពិនិត្យមើលលក្ខខណ្ឌពិត (\`true\`) ឬ មិនពិត (\`false\`)។ 

**Control Flow Statements (If-Else)** គឺជាគន្លឹះមួយដើម្បីធ្វើឱ្យកម្មវិធីអាចបកស្រាយលទ្ធផលផ្សេងៗដើម្បីប្រតិបត្តិការដោយផ្អែកលើលក្ខខណ្ឌ។ ឧទាហរណ៍យើងអាចប្រើ If-Else ដើម្បីពិនិត្យមើលថាតើតម្លៃមានលក្ខខណ្ឌប៉ុន្មានដើម្បីបង្ហាញអ្វីយ៉ាងណា។

*បើលទ្ធផលលើលក្ខខណ្ឌ If ត្រូវ អ្នកអាចបង្ហាញអ្វីម្យ៉ាងឡើយ បើមិនដូច្នោះទេ អ្នកប្រើ Else។*

---

### ២. វាក្យសម្ព័ន្ធទាំង ៣ ទម្រង់នៃ If Statements (Syntax Forms)

នៅក្នុង JavaScript ការសរសេរ \`if\` ត្រូវបានបែងចែកជា ៣ ទម្រង់សំខាន់ៗអាស្រ័យលើចំនួនលក្ខខណ្ឌដែលត្រូវវិនិច្ឆ័យ៖

* **Syntax 1: If Statement ទោល (Single Condition)**
  \`\`\`javascript
  if (expression) {
    Statement;
  }
  \`\`\`
  *ដំណើរការ \`Statement\` លុះត្រាតែ \`expression\` ផ្តល់លទ្ធផលជា \`true\`។*

* **Syntax 2: If-Else Statement ពីរសាខា (Two Branches: True / False)**
  \`\`\`javascript
  if (expression) {
    Statement1;
  } else {
    Statement2;
  }
  \`\`\`
  *ប្រសិនបើ \`expression\` ត្រូវ (\`true\`) វានឹងដំណើរការ \`Statement1\`។ បើមិនដូច្នោះទេ (\`false\`) វានឹងរត់ទៅដំណើរការ \`Statement2\` ក្នុងប្លុក \`else\`។*

* **Syntax 3: If-Else If-Else Statement ពហុសាខា (Multiple Conditional Branches)**
  \`\`\`javascript
  if (expression) {
    statements;
  } else if (expression) {
    statements;
  }
  // ...........................
  else {
    statements;
  }
  \`\`\`
  *ប្រើសម្រាប់ត្រួតពិនិត្យលក្ខខណ្ឌច្រើនបន្តបន្ទាប់គ្នា។ កម្មវិធីនឹងពិនិត្យពីលើចុះក្រោម ពេលជួបលក្ខខណ្ឌណាពិតមុនគេ វានឹងដំណើរការប្លុកនោះ ហើយរំលងប្លុកដទៃទាំងអស់។ ប្រសិនបើគ្មានលក្ខខណ្ឌណាត្រូវទាល់តែសោះ ទើបវាដំណើរការប្លុក \`else\` ចុងក្រោយ។*

---

### ៣. ឧទាហរណ៍ជាក់ស្តែងនៃ If Statement (The If Statement: Examples)

ក្រឡេកមើលឧទាហរណ៍ជាក់ស្តែងចំនួន ៥ ដែលបង្ហាញពីការប្រើប្រាស់ \`if\`, \`if-else\`, និង \`else if\`៖

#### ឧទាហរណ៍ទី១៖ ការគណនា និងវាយតម្លៃពិន្ទុ (Student Score)
\`\`\`javascript
let score = 80;
if (score >= 90) {
  console.log("ល្អណាស់! ពួកគេបាន A");
} else if (score >= 70) {
  console.log("ពេញចិត្ត! ពួកគេបាន B");
} else {
  console.log("ត្រូវប្រឹងបន្ត");
}
\`\`\`
*ពន្យល់៖ ដោយសារ \`score = 80\` (មិនធំជាង ៩០ តែធំជាង ៧០) នោះលទ្ធផលនឹងបង្ហាញ៖ \`ពេញចិត្ត! ពួកគេបាន B\`។*

#### ឧទាហរណ៍ទី២៖ ការពិនិត្យអាយុពេញវ័យ (Adult vs. Minor)
\`\`\`javascript
let age = 17;
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}
\`\`\`
*ពន្យល់៖ \`17 >= 18\` គឺ \`false\` ដូច្នេះកម្មវិធីដំណើរការប្លុក \`else\` បង្ហាញ \`You are a minor.\`។*

#### ឧទាហរណ៍ទី៣៖ ប្រព័ន្ធកំណត់និទ្ទេសពិន្ទុ A, B, C, D (Grading System)
\`\`\`javascript
let score = 85;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: D");
}
\`\`\`
*ពន្យល់៖ កូដនេះពិនិត្យតាមលំដាប់ពិន្ទុ។ \`85\` ធ្លាក់ចូលលក្ខខណ្ឌ \`score >= 80\` ដូច្នេះបង្ហាញ \`Grade: B\`។*

#### ឧទាហរណ៍ទី៤៖ ការពិនិត្យលេខគូ ឬលេខសេស (Even vs. Odd Number)
\`\`\`javascript
let number = 4;
if (number % 2 === 0) {
  console.log("The number is even.");
} else {
  console.log("The number is odd.");
}
\`\`\`
*ពន្យល់៖ ប្រតិបត្តិករ Modulo \`%\` រកសំណល់នៃការចែក។ \`4 % 2\` សំណល់គឺ \`0\` (\`0 === 0\` គឺ \`true\`) ដូច្នេះជាលេខគូ (Even)។*

#### ឧទាហរណ៍ទី៥៖ ការវាយតម្លៃតាមនិទ្ទេសអក្សរ (Letter Grade Evaluation)
\`\`\`javascript
let grade = "C";
if (grade === "A") {
  console.log("Excellent!");
} else if (grade === "B") {
  console.log("Good!");
} else if (grade === "C") {
  console.log("Average");
} else if (grade === "D") {
  console.log("Bad");
} else {
  console.log("Fail");
}
\`\`\`
*ពន្យល់៖ កូដនេះប្រើប្រាស់ Strict Equality \`===\` ដើម្បីផ្ទៀងផ្ទាត់តម្លៃតួអក្សរ។ \`grade === "C"\` ពិត ដូច្នេះបង្ហាញ \`Average\`។*

---

### ៤. Exercise សិក្សា៖ លេខអ្វីធំជាងគេ? (Finding Maximum with Operators & If-Else)

ឧទាហរណ៍ផ្ទាល់ដែលក្រឡេកមើលពីរបៀបប្រើប្រាស់ Operators និង If-Else Statement ដើម្បីប្រៀបធៀបតម្លៃ។ យើងព្យាយាមទាញយកលេខបី មួយឬពីរខុសប្លែកៗ តាមការកំណត់របស់អ្នក៖

\`\`\`javascript
// សាកល្បងបង្កើតបីអថេរ
let x = 23;
let y = 45;
let z = 12;

// ប្រើ if-else ដើម្បីបង្ហាញថាតើលេខណាធំជាងគេ
if (x > y && x > z) {
  console.log("លេខធំជាងគេគឺ x:", x);
} else if (y > x && y > z) {
  console.log("លេខធំជាងគេគឺ y:", y);
} else {
  console.log("លេខធំជាងគេគឺ z:", z);
}
\`\`\`

**ការពន្យល់លម្អិត៖**
- ពេលអ្នករត់កូដនេះ តម្លៃលទ្ធផលដែលបង្ហាញនៅលើកុងសូល Console នឹងប្រាប់ថាតើលេខណាធំជាងគេក្នុងចំណោម x, y, និង z (ក្នុងករណីនេះបង្ហាញ៖ \`លេខធំជាងគេគឺ y: 45\`)។
- យើងប្រើទាំង **Comparison Operators** (\`>\`) និង **Logical Operators** (\`&&\`) ដើម្បីប្រៀបធៀបតម្លៃ ត្រូវបញ្ជាក់មកក្នុង If-Else។
- តាមលំនាំនេះ អ្នកអាចបន្ថែម Logical OR (\`||\`) ឬបាននិយាយបន្ថែមលើមុខងារ else if statements បន្ថែមទៀត ជួយប្រៀបធៀបអ្វីៗមានលក្ខខណ្ឌច្រើន។

---

### ៥. ច្បាប់សរសេរលក្ខខណ្ឌត្រឹមត្រូវក្នុង JavaScript (Syntax Rules)

⚠️ **ចំណុចពិសេសដែលសិស្សតែងច្រឡំជាមួយភាសាដទៃ៖**
1. **ដើម្បីសរសេរកំណត់លក្ខខណ្ឌនៃ Statement មួយ ប្រសិនបើជា i ស្មើនឹង 5៖**
   - ✅ ត្រូវសរសេរ៖ \`if (i == 5)\` ឬ \`if (i === 5)\` (លក្ខខណ្ឌត្រូវដាក់ក្នុងរង្វង់ក្រចកជានិច្ច)
   - ❌ មិនត្រូវសរសេរ៖ \`if i==5 then\` (JavaScript មិនមានពាក្យ \`then\` ឡើយ)
   - ❌ មិនត្រូវសរសេរ៖ \`if i=5\` (សញ្ញា \`=\` តែមួយជា Assignment មិនមែនប្រៀបធៀបឡើយ)
2. **ដើម្បីសរសេរកំណត់លក្ខខណ្ឌនៃ Statement មួយ ប្រសិនបើជា i មិនស្មើនឹង 5៖**
   - ✅ ត្រូវសរសេរ៖ \`if (i != 5)\` ឬ \`if (i !== 5)\`
   - ❌ មិនត្រូវសរសេរ៖ \`if (i <> 5)\` (JavaScript មិនប្រើសញ្ញា \`<>\` ដូច SQL ឬ Pascal ឡើយ)
   - ❌ មិនត្រូវសរសេរ៖ \`if =! 5 then\` (សញ្ញា \`=!\` ខុសវេយ្យាករណ៍)

---

### ៦. ការប្រើប្រាស់ Switch Statements

វាវាយតំលៃលើ Expression មួយ ហើយលោតទៅកាន់ Statement ដែលបាន Label ជាមួយ Case Clause ដែលត្រូវគ្នានឹងតំលៃរបស់ Expression នោះ។ បើគ្មាន Case ណាមួយត្រូវគ្នាទេ នោះ Switch Statement នឹងលោតទៅកាន់ Statement ដែល Label ដោយ default។

**Syntax នៃ Switch Statement:**
\`\`\`javascript
switch (expression) { 
  case value1: 
    // Code to execute if expression === value1 
    break;  
  case value2: 
    // Code to execute if expression === value2 
    break; 
  // ... more cases ... 
  default: 
    // Code to execute if no case matches 
} 
\`\`\`

#### Examples (ឧទាហរណ៍ជាក់ស្តែង)

**១. Simple Month Display (បង្ហាញឈ្មោះខែតាមលេខរៀង):**
\`\`\`javascript
function getMonthName(monthNumber) { 
  let monthName; 
  switch (monthNumber) { 
    case 1: 
      monthName = "January"; 
      break; 
    case 2: 
      monthName = "February"; 
      break; 
    case 3: 
      monthName = "March"; 
      break; 
    case 4: 
      monthName = "April"; 
      break; 
    case 5: 
      monthName = "May"; 
      break; 
    case 6: 
      monthName = "June"; 
      break; 
    case 7: 
      monthName = "July"; 
      break; 
    case 8: 
      monthName = "August"; 
      break; 
    case 9: 
      monthName = "September"; 
      break; 
    case 10: 
      monthName = "October"; 
      break; 
    case 11: 
      monthName = "November"; 
      break; 
    case 12: 
      monthName = "December"; 
      break; 
    default: 
      monthName = "Invalid month number"; 
  } 
  return monthName; 
} 
console.log(getMonthName(3));  // Output: March 
console.log(getMonthName(10)); // Output: October 
console.log(getMonthName(13)); // Output: Invalid month number 
\`\`\`

**២. Calculating Discount Based on User Type (គណនាបញ្ចុះតម្លៃផ្អែកលើប្រភេទអ្នកប្រើប្រាស់):**
\`\`\`javascript
function calculateDiscount(userType) { 
  let discount; 
  switch (userType) { 
    case "student": 
      discount = 0.15; 
      break; 
    case "senior": 
      discount = 0.20; 
      break; 
    case "member": 
      discount = 0.10; 
      break; 
    default: 
      discount = 0; // No discount for regular users 
  } 
  return discount; 
} 
console.log(calculateDiscount("student")); // Output: 0.15 
console.log(calculateDiscount("senior"));  // Output: 0.20 
console.log(calculateDiscount("guest"));   // Output: 0 
\`\`\`

**៣. Example of Fall-Through Behavior (ការចងក្រងករណីច្រើនរួមគ្នា និងបាតុភូត Fall-Through):**
\`\`\`javascript
function getSeason(month) { 
    let season; 
    switch (month) { 
        case 12: 
        case 1: 
        case 2: 
            season = "Winter"; 
            break; 
        case 3: 
        case 4: 
        case 5: 
             season = "Spring"; 
             break; 
        case 6: 
        case 7: 
        case 8: 
            season = "Summer"; 
            break; 
        case 9: 
        case 10: 
        case 11: 
            season = "Autumn"; 
            break; 
        default: 
          season = "Invalid month"; 
    } 
   return season; 
} 
console.log(getSeason(1));  // Output: Winter 
console.log(getSeason(5));  // Output: Spring 
console.log(getSeason(10)); // Output: Autumn 
\`\`\`

---

### ៧. While Loop Statement

• **While loop Statement** គឺជា **pre-test loop** ដែលមានន័យថា វាធ្វើការពិនិត្យលើលក្ខខណ្ឌមុននឹង Execute code វាធ្វើការ Execute Statements ម្តងហើយម្តងទៀត កាលណា Expression មានតំលៃពិត (\`True\`)។

**Syntax នៃ While Loop:**
\`\`\`javascript
while (expression) { 
  statements; 
}
\`\`\`

While Loop ប្រើនៅពេលយើងចង់ពិនិត្យលក្ខខណ្ឌមុននឹងជំនួសចូលវដ្តនៃលទ្ធផលប្រតិបត្តិ។ ប្រសិនបើលក្ខខណ្ឌគឺ \`true\` វានឹងបន្តប្រតិបត្តិ។ វាមានរចនាសម្ព័ន្ធដូច្នេះ:

\`\`\`javascript
let num = 1; 
while (num <= 3) { 
  console.log(num); 
  num++; 
} 

// លទ្ធផល -> 1, 2, 3
\`\`\`

**ឧទាហរណ៍ជាក់ស្តែង៖**
\`\`\`javascript
var i = 0; 
while (i < 10) { 
  document.write(" Number " + i + "<br/>"); 
  i++; 
}
\`\`\`
*ពន្យល់៖ ដំណើរការបង្ហាញលេខចាប់ពី " Number 0" រហូតដល់ " Number 9" ដរាបណា \`i < 10\` នៅតែជា \`true\`។ រាល់ពេលដំណើរការចប់មួយជុំ តម្លៃ \`i\` ត្រូវបានបង្កើនតាមរយៈ \`i++\`។*

---

### ៨. Do While Statement

• **Do While Statement** គឺជា **post-loop** ដែលមានន័យថា វាធ្វើការ Execute code មុន ហើយពិនិត្យលើលក្ខខណ្ឌជាក្រោយ មានន័យថា Statement ត្រូវបាន Execute យ៉ាងហោចណាស់ក៏បានម្តងដែរ។

**Syntax នៃ Do While Loop:**
\`\`\`javascript
do { 
  statements; 
} while (expression);
\`\`\`

Do-While Loop ប្រតិបត្តិកូដមួយដងជាមុនសិន បើទោះបីជាលក្ខខណ្ឌខុសហើយក៏ដោយ (ដោយលំហូរ loop អាចត្រឹមមួយដងនោះចេញ)។ វាមានរចនាសម្ព័ន្ធដូចខាងក្រោម:

\`\`\`javascript
do { 
  // កូដដែលត្រូវធ្វើម្តងមុន 
} while (លក្ខខណ្ឌ);
\`\`\`

**ឧទាហរណ៍ទី១ (ពិនិត្យលក្ខខណ្ឌដែលមិនពិតតាំងពីដំបូង)៖**
\`\`\`javascript
let count = 5; 
do { 
  console.log("ចំនួន: " + count); 
  count++; 
} while (count < 5);
\`\`\`
*នៅឧទាហរណ៍ខាងលើ តារាងប្រតិបត្តិ គឺនឹងដំណើរការបានម្តងតែប៉ុណ្ណោះ ព្រោះពេល count = 5 និងរក្សាតម្លៃលើលក្ខខណ្ឌ check -> 5 < 5 មិនត្រូវទេ។*

**ឧទាហរណ៍ទី២៖**
\`\`\`javascript
var i = 0; 
do { 
  document.write(" Number " + i + "<br/>"); 
  i++; 
} while (i < 10);
\`\`\`

---

### ៩. For Loop Statement

• **For Loop Statement** គឺដូចទៅនឹង While ដែរ ខុសត្រង់ថាវា **សម្រួលដល់ការបង្កើត Initialization, Condition, និង increment Statement** ក្នុងបន្ទាត់តែមួយយ៉ាងងាយស្រួល។

**Syntax នៃ For Loop:**
\`\`\`javascript
for (initialization; condition; increment_statement) { 
  statements; 
}
\`\`\`

For Loop ធម្មតាត្រូវបានប្រើជាញឹកញាប់បំផុតក្នុង JavaScript ដោយតាមលំដាប់មួយដែលអ្នកកំណត់ (ឧ. ចាប់ពី 0 ទៅ 9)។ រចនាសម្ព័ន្ធ For Loop មានបីផ្នែកមូលដ្ឋាន៖

\`\`\`javascript
for (កំណត់ដំបូង; លក្ខខណ្ឌបន្ត; ប្រតិបត្តិការបន្ទាប់គ្នា) { 
  // កូដត្រូវធ្វើរាល់លើក 
}
\`\`\`

• **កំណត់ដំបូង (initialization) ៖** យើងមិនចាំបាច់សរសេរពាក្យ \`let\` ឬ \`var\` ដើម្បីបង្កើតអថេរប្រើរាល់លើកនោះឡើយ ប្រសិនបើបានប្រកាសរួច។  
• **លក្ខខណ្ឌបន្ត (condition) ៖** បើតម្លៃពិត (\`true\`) នោះវានឹងបន្តលុះដល់លក្ខខណ្ឌមិនត្រឹមត្រូវទេ (\`true -> false\`)។  
• **ប្រតិបត្តិការបន្ទាប់គ្នា (increment/decrement) ៖** កំណត់របៀបកើន ឬបន្ថយនៃអថេរបន្ទាប់រាល់លើក (ឧ. \`i++\` ឬ \`i--\`)។

**ឧទាហរណ៍ For Loop ងាយៗបង្ហាញលេខពី 1 ដល់ 5:**
\`\`\`javascript
for (let i = 1; i <= 5; i++) { 
  console.log(i); 
} 
// លទ្ធផល -> 1, 2, 3, 4, 5
\`\`\`

**ឧទាហរណ៍បង្ហាញលេខពី 1 ដល់ 31:**
\`\`\`javascript
for (let i = 1; i <= 31; i++) { 
  document.write("Number : " + i + "<br/>"); 
}
\`\`\`

---

### ១០. គម្រោងអនុវត្ត For Loop ជាមួយ Dynamic HTML & DOM Rendering

រង្វិលជុំ For Loop មានសារៈសំខាន់ខ្លាំងណាស់ក្នុងការទាញយក និងបង្កើតធាតុ HTML ដាក់ចូលទំព័រ Web ជាក់ស្តែង៖

#### ១. Generating a List of Numbers (បង្កើតបញ្ជីលេខ HTML)
\`\`\`html
<!DOCTYPE html> 
<html> 
<head> 
  <title>For Loop Example</title> 
</head> 
<body> 
  <div id="numberList"></div> 
  <script> 
    const numberListDiv = document.getElementById("numberList"); 
    let html = "<ul>"; // Start the unordered list 
    for (let i = 1; i <= 5; i++) { 
      html += \`<li>Number \${i}</li>\`;  // Append a list item to the string 
    } 
    html += "</ul>"; // Close the unordered list 
    numberListDiv.innerHTML = html; // Set the inner HTML of the div 
  </script> 
</body> 
</html>
\`\`\`

#### ២. Creating a Table (បង្កើតតារាងទិន្នន័យ HTML)
\`\`\`html
<!DOCTYPE html> 
<html> 
<head> 
  <title>For Loop Example</title> 
</head> 
<body> 
  <div id="myTable"></div> 

  <script> 
    const tableDiv = document.getElementById("myTable"); 
    let tableHTML = "<table><thead><tr><th>#</th><th>Name</th></tr></thead><tbody>"; 

    const names = ["Alice", "Bob", "Charlie", "David"]; 

    for (let i = 0; i < names.length; i++) { 
      tableHTML += \`<tr><td>\${i+1}</td><td>\${names[i]}</td></tr>\`; 
    } 

    tableHTML += "</tbody></table>"; 
    tableDiv.innerHTML = tableHTML; 
  </script> 
</body> 
</html>
\`\`\`

#### ៣. Three Counting Sequences (វដ្តរាប់ចំនួន ៣ ប្រភេទ និងផលបូក)
**HTML Structure:**
\`\`\`html
<!DOCTYPE html> 
<html lang="en"> 
<head> 
    <meta charset="UTF-8"> 
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
    <title>Three Counting Sequences</title> 
</head> 
<body> 
    <div id="outputContainer"></div> 
    <script src="script.js"></script> 
</body> 
</html>
\`\`\`

**JavaScript Code (script.js):**
\`\`\`javascript
const outputDiv = document.getElementById("outputContainer"); 
let html = ""; 
const limit = 100; 

// Count 1: 0 1 2 3 ... 100 
let count1 = ""; 
let sum1 = 0; 
for (let i = 0; i <= limit; i++) { 
  count1 += i + " "; 
  sum1 += i; 
} 
html += \`<h3>Count 1:</h3><p>\${count1}</p><p>Sum: \${sum1}</p>\`; 

// Count 2: 0 1 3 5 ... (Odd numbers up to 100) 
let count2 = ""; 
let sum2 = 0; 
for (let i = 0; i <= limit; i++) { 
  if (i % 2 !== 0) { 
      count2 += i + " "; 
      sum2 += i; 
  } 
} 
html += \`<h3>Count 2 (Odd Numbers):</h3><p>\${count2}</p><p>Sum: \${sum2}</p>\`; 

// Count 3: 0 2 4 6 ... 100 (Even numbers up to 100) 
let count3 = ""; 
let sum3 = 0; 
for (let i = 0; i <= limit; i++) { 
  if (i % 2 === 0) { 
      count3 += i + " "; 
      sum3 += i; 
  } 
} 
html += \`<h3>Count 3 (Even Numbers):</h3><p>\${count3}</p><p>Sum: \${sum3}</p>\`; 
outputDiv.innerHTML = html;
\`\`\`

#### ៤. For Loop with Calculations (ការគណនាលេខគូ និងលេខសេសក្នុង Loop)
**HTML Structure:**
\`\`\`html
<!DOCTYPE html> 
<html lang="en"> 
<head> 
    <meta charset="UTF-8"> 
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
    <title>For Loop with Calculations</title> 
</head> 
<body> 
    <div id="outputContainer"></div> 
    <script src="script.js"></script> 
</body> 
</html>
\`\`\`

**JavaScript Code (script.js):**
\`\`\`javascript
const outputDiv = document.getElementById("outputContainer"); 
let html = "<ul>"; // Start an unordered list 
let sumEven = 0; 
let sumOdd = 0; 

for (let i = 1; i <= 10; i++) { 
  let isEven = i % 2 === 0; 
  let evenOrOdd = isEven ? "Even" : "Odd"; 
  html += \`<li>Counter: \${i}, Status: \${evenOrOdd}\`; 

  if (isEven) { 
    sumEven += i; 
  } else { 
    sumOdd += i; 
  } 
  html += \`</li>\`; // close the list item element 
} 
html += \`</ul>\`; // Close the unordered list 
html += \`<p>Sum of Even Numbers: \${sumEven}</p>\`; 
html += \`<p>Sum of Odd Numbers: \${sumOdd}</p>\`; 
outputDiv.innerHTML = html;
\`\`\`

---

### ១១. Nested Loop in JavaScript

**Nested Loops** គឺជាករណីម្ដងៗដែលយើងប្រើ loop មួយនៅខាងក្នុង loop មួយទៀត។ វាអាចងាយនឹងច្រឡំបើមិនបានគណនា ឬប្រើប្រាស់យ៉ាងល្អ។ តែវាធ្វើបានល្អណាស់ នៅពេលយើងចង់ធ្វើអ្វីមួយដដែលៗច្រើនលើក នួននាប់ចូលគ្នា (Multi-dimensional Iterations)។

**ឧទាហរណ៍បង្ហាញលេខចំរុះពីរដង៖**
\`\`\`javascript
for (let i = 1; i <= 3; i++) { 
  console.log("i:" + i); 
  for (let j = 1; j <= 2; j++) { 
    console.log("   j:" + j); 
  } 
}
\`\`\`
*លទ្ធផលនឹងបង្ហាញលំដាប់ \`i:1\` សិន នៅក្នុងវដ្ត \`i=1\` ចុះបន្ទាប់មក \`j=1\` និង \`j=2\` រហូតដល់ \`i=2\`, \`i=3\` ដដែលៗ។*

**Exercise៖ បង្កើតតារាងចំនួន (មេលេខគុណ 1 ដល់ 10):**
យើងអាចប្រើ Nested Loops ដើម្បីបង្កើតតារាងចំនួន (មេផ្ទាល់) ឧទាហរណ៍តារាងគុណគ្នា 1 ដល់ 10៖
\`\`\`javascript
for (let row = 1; row <= 10; row++) { 
  let oneRow = "";  
  for (let col = 1; col <= 10; col++) { 
    let product = row * col; 
    // ចងស្រង់នៅក្នុង oneRow 
    oneRow += product + "\t"; // \t = tap (ចន្លោះលើ Console) 
  } 
  console.log(oneRow); 
}
\`\`\`

**Examples to Implement Nested Loop in JavaScript:**
\`\`\`html
<script>  
var i; var j;  
for (i = 0; i < 5; i++) {  
  for (j = 0; j < 5; j++) {  
    document.write(i * j + " ");  
  }  
  document.write("<br/>"); 
} 
</script>
\`\`\`

---

### ១២. ការប្រៀបធៀបប្រភេទ Loops ក្នុង JavaScript

\`\`\`
┌──────────────────┬─────────────────────────────┬────────────────────────────────────────────────────────┐
│ ប្រភេទ Loop      │ ពេលណាត្រូវប្រើ?            │ លក្ខណៈពិសេសចម្បង                                     │
│ for              │ ដឹងចំនួនជុំកំណត់ច្បាស់លាស់ │ សម្រួលដល់ Initialization, Condition, Increment        │
│ while            │ មិនដឹងចំនួនជុំច្បាស់លាស់     │ ជា Pre-test Loop (ពិនិត្យលក្ខខណ្ឌមុន Execute កូដ)      │
│ do...while       │ ត្រូវដំណើរការយ៉ាងតិច ១ ដង   │ ជា Post-test Loop (Execute កូដសិន ទើបពិនិត្យក្រោយ)     │
│ Nested Loops     │ ក្រឡាចត្រង្គ តារាង ឬ Matrix │ Loop នៅខាងក្នុង Loop ទៀតសម្រាប់ទិន្នន័យច្រើនជួរ/ជួរឈរ  │
│ for...of         │ Arrays, Strings, NodeLists  │ ទាញយក "តម្លៃផ្ទាល់" (Values) យ៉ាងស្អាត និងសុវត្ថិភាព  │
│ for...in         │ Object Properties           │ រាប់ទាញយក "ឈ្មោះ Keys" នៃ Object (កុំប្រើលើ Array!)   │
└──────────────────┴─────────────────────────────┴────────────────────────────────────────────────────────┘
\`\`\`

---

### ១៣. ការគ្រប់គ្រងលំហូរដោយ \`break\` និង \`continue\`

- **\`break\`:** បញ្ចប់ និងចាកចេញពីរង្វិលជុំភ្លាមៗនៅកន្លែងដែលវាជួប។ កូដបន្ទាប់ពី loop នឹងដំណើរការបន្ត។
- **\`continue\`:** រំលងកូដដែលនៅសល់ក្នុងជុំបច្ចុប្បន្ន ហើយលោតទៅចាប់ផ្តើមជុំបន្ទាប់ភ្លាមៗ។
    `,
    syntaxExamples: [
      {
        title: '១. ការប្រើប្រាស់ If, If-Else និង Else-If (ការពិនិត្យពិន្ទុ និងអាយុ)',
        description: 'ការប្រើប្រាស់ Syntax ទាំង ៣ ទម្រង់ដើម្បីបកស្រាយលទ្ធផលតាមលក្ខខណ្ឌជាក់ស្តែង',
        code: `// ឧទាហរណ៍ If-Else ពិនិត្យអាយុ
let age = 17;
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

// ឧទាហរណ៍ If-Else If ពិនិត្យពិន្ទុ និងផ្ដល់និទ្ទេស
let score = 85;
if (score >= 90) {
  console.log("ល្អណាស់! ពួកគេបាន A (Grade: A)");
} else if (score >= 80) {
  console.log("ពេញចិត្ត! ពួកគេបាន B (Grade: B)");
} else if (score >= 70) {
  console.log("មធ្យម! ពួកគេបាន C (Grade: C)");
} else {
  console.log("ត្រូវប្រឹងបន្ត (Grade: D)");
}`
      },
      {
        title: '២. Exercise៖ លេខអ្វីធំជាងគេ? (Finding Largest Number)',
        description: 'ការរួមផ្សំ Comparison Operators (>) និង Logical Operators (&&) ក្នុង If-Else',
        code: `// សាកល្បងបង្កើតបីអថេរ
let x = 23;
let y = 45;
let z = 12;

// ប្រើ if-else ដើម្បីបង្ហាញថាតើលេខណាធំជាងគេ
if (x > y && x > z) {
  console.log("លេខធំជាងគេគឺ x:", x);
} else if (y > x && y > z) {
  console.log("លេខធំជាងគេគឺ y:", y);
} else {
  console.log("លេខធំជាងគេគឺ z:", z);
}

console.log("ការផ្ទៀងផ្ទាត់រួចរាល់!");`
      },
      {
        title: '៣. ការប្រើប្រាស់ Switch Statements (Simple Month Display & User Discount)',
        description: 'វាយតម្លៃលើ Expression មួយ ហើយលោតទៅកាន់ Case Clause ដែលត្រូវគ្នា ឬ default clause',
        code: `// ១. Simple Month Display
function getMonthName(monthNumber) {
  let monthName;
  switch (monthNumber) {
    case 1:
      monthName = "January";
      break;
    case 2:
      monthName = "February";
      break;
    case 3:
      monthName = "March";
      break;
    case 4:
      monthName = "April";
      break;
    case 5:
      monthName = "May";
      break;
    case 6:
      monthName = "June";
      break;
    case 7:
      monthName = "July";
      break;
    case 8:
      monthName = "August";
      break;
    case 9:
      monthName = "September";
      break;
    case 10:
      monthName = "October";
      break;
    case 11:
      monthName = "November";
      break;
    case 12:
      monthName = "December";
      break;
    default:
      monthName = "Invalid month number";
  }
  return monthName;
}

console.log(getMonthName(3));  // Output: March
console.log(getMonthName(10)); // Output: October
console.log(getMonthName(13)); // Output: Invalid month number

// ២. Calculating Discount Based on User Type
function calculateDiscount(userType) {
  let discount;
  switch (userType) {
    case "student":
      discount = 0.15;
      break;
    case "senior":
      discount = 0.20;
      break;
    case "member":
      discount = 0.10;
      break;
    default:
      discount = 0; // No discount for regular users
  }
  return discount;
}

console.log("Student Discount:", calculateDiscount("student")); // Output: 0.15
console.log("Senior Discount:", calculateDiscount("senior"));   // Output: 0.20
console.log("Guest Discount:", calculateDiscount("guest"));     // Output: 0`
      },
      {
        title: '៤. Fall-Through Behavior ក្នុង Switch Statement (Season Classifier)',
        description: 'ការចងក្រងករណី Case ច្រើនជាមួយគ្នាដោយមិនប្រើ break រហូតដល់ចុងបញ្ចប់',
        code: `// ឧទាហរណ៍ Fall-Through Behavior កំណត់រដូវតាមខែ
function getSeason(month) {
  let season;
  switch (month) {
    case 12:
    case 1:
    case 2:
      season = "Winter";
      break;
    case 3:
    case 4:
    case 5:
      season = "Spring";
      break;
    case 6:
    case 7:
    case 8:
      season = "Summer";
      break;
    case 9:
    case 10:
    case 11:
      season = "Autumn";
      break;
    default:
      season = "Invalid month";
  }
  return season;
}

console.log("Month 1:", getSeason(1));   // Output: Winter
console.log("Month 5:", getSeason(5));   // Output: Spring
console.log("Month 10:", getSeason(10)); // Output: Autumn
console.log("Month 99:", getSeason(99)); // Output: Invalid month`
      },
      {
        title: '៥. While Loop (Pre-test Loop: ពិនិត្យលក្ខខណ្ឌមុន Execute កូដ)',
        description: 'ដំណើរការ Statements ដដែលៗកាលណា Expression មានតម្លៃពិត (True)',
        code: `// រចនាសម្ព័ន្ធ While Loop ពិនិត្យ num <= 3
let num = 1;
while (num <= 3) {
  console.log("ចំនួន num:", num);
  num++;
}
// លទ្ធផល: 1, 2, 3

// ឧទាហរណ៍រាប់ពី 0 ដល់ 9
var i = 0;
while (i < 10) {
  console.log("Number " + i);
  // document.write(" Number " + i + "<br/>");
  i++;
}`
      },
      {
        title: '៦. Do-While Loop (Post-loop: Execute កូដមុន ពិនិត្យលក្ខខណ្ឌតាមក្រោយ)',
        description: 'ធានាថា Statements ត្រូវបានដំណើរការយ៉ាងហោចណាស់ម្តងជានិច្ច',
        code: `// ឧទាហរណ៍ដំណើរការបានម្តង ទោះបីលក្ខខណ្ឌ (5 < 5) ខុសក៏ដោយ
let count = 5;
do {
  console.log("ចំនួន: " + count);
  count++;
} while (count < 5);
// លទ្ធផលបង្ហាញ: ចំនួន: 5

// ឧទាហរណ៍ទី២
var i = 0;
do {
  console.log("Number " + i);
  // document.write(" Number " + i + "<br/>");
  i++;
} while (i < 10);`
      },
      {
        title: '៧. For Loop Statement (រចនាសម្ព័ន្ធ ៣ ផ្នែក៖ Init, Condition, Increment)',
        description: 'សម្រួលដល់ការកំណត់ Initialization, Condition, និង Increment Statement',
        code: `// ឧទាហរណ៍ For Loop ងាយៗបង្ហាញលេខពី 1 ដល់ 5
for (let i = 1; i <= 5; i++) {
  console.log("លេខ:", i);
}
// លទ្ធផល -> 1, 2, 3, 4, 5

// ឧទាហរណ៍បង្ហាញពី 1 ដល់ 31
for (let i = 1; i <= 31; i++) {
  console.log("Number : " + i);
  // document.write("Number : " + i + "<br/>");
}`
      },
      {
        title: '៨. Generating a List of Numbers & Creating a Table (DOM Projects)',
        description: 'ការប្រើ For Loop ដើម្បីបង្កើតបញ្ជីលេខ <ul> និងតារាង <table> ក្នុង DOM',
        code: `// ១. Generating a List of Numbers
let listHtml = "<ul>";
for (let i = 1; i <= 5; i++) {
  listHtml += \`<li>Number \${i}</li>\`;
}
listHtml += "</ul>";
console.log("HTML List:", listHtml);

// ២. Creating a Table ជាមួយ Array
const names = ["Alice", "Bob", "Charlie", "David"];
let tableHTML = "<table><thead><tr><th>#</th><th>Name</th></tr></thead><tbody>";

for (let i = 0; i < names.length; i++) {
  tableHTML += \`<tr><td>\${i + 1}</td><td>\${names[i]}</td></tr>\`;
}
tableHTML += "</tbody></table>";
console.log("HTML Table:", tableHTML);`
      },
      {
        title: '៩. Three Counting Sequences & Even/Odd Calculations',
        description: 'ការរាប់ពី 0 ដល់ 100 និងការបូកសរុបលេខគូ និងលេខសេសដោយ For Loop',
        code: `const limit = 10;
// Sequence 1: 0 ដល់ limit
let count1 = "";
let sum1 = 0;
for (let i = 0; i <= limit; i++) {
  count1 += i + " ";
  sum1 += i;
}
console.log("Count 1:", count1, "| Sum:", sum1);

// Sequence 2 & 3: Calculations Even vs Odd
let sumEven = 0;
let sumOdd = 0;
for (let i = 1; i <= limit; i++) {
  let isEven = i % 2 === 0;
  let status = isEven ? "Even" : "Odd";
  console.log(\`Counter: \${i}, Status: \${status}\`);
  if (isEven) {
    sumEven += i;
  } else {
    sumOdd += i;
  }
}
console.log("Sum of Even Numbers:", sumEven);
console.log("Sum of Odd Numbers:", sumOdd);`
      },
      {
        title: '១០. Nested Loops ក្នុង JavaScript (លេខចំរុះ & មេគុណ 1 ដល់ 10)',
        description: 'ការប្រើ Loop មួយនៅខាងក្នុង Loop មួយទៀតសម្រាប់ទិន្នន័យពហុវិមាត្រ',
        code: `// ឧទាហរណ៍បង្ហាញលេខចំរុះ i និង j
console.log("--- ឧទាហរណ៍លេខចំរុះ ---");
for (let i = 1; i <= 3; i++) {
  console.log("i:" + i);
  for (let j = 1; j <= 2; j++) {
    console.log("   j:" + j);
  }
}

// Exercise៖ តារាងគុណលេខ 1 ដល់ 10
console.log("--- តារាងមេគុណ 1 ដល់ 10 ---");
for (let row = 1; row <= 10; row++) {
  let oneRow = "";
  for (let col = 1; col <= 10; col++) {
    let product = row * col;
    oneRow += product + "\\t";
  }
  console.log(oneRow);
}

// ឧទាហរណ៍ Matrix Grid 5x5
console.log("--- Matrix Grid 5x5 ---");
for (let i = 0; i < 5; i++) {
  let rowStr = "";
  for (let j = 0; j < 5; j++) {
    rowStr += (i * j) + " ";
  }
  console.log(rowStr);
}`
      }
    ],
    guidedPractice: {
      title: 'ប្រព័ន្ធវិភាគទំនិញ និងបញ្ជាទិញក្នុងឃ្លាំង (Warehouse Inventory & Batch Analytics Engine)',
      description: 'បង្កើតកម្មវិធី Dashboard ជាក់ស្តែងសម្រាប់គ្រប់គ្រងទំនិញក្នុងស្តុក គណនាតម្លៃទំនិញសរុប រកទំនិញតម្លៃថ្លៃបំផុត រកទំនិញជិតអស់ពីស្តុក និងច្រោះទិន្នន័យដោយប្រើ Loops ពេញលេញ។',
      files: [
        {
          filename: 'index.html',
          language: 'html',
          code: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <title>ប្រព័ន្ធវិភាគទំនិញក្នុងឃ្លាំង</title>
  <link rel="stylesheet" href="style.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Kantumruy+Pro:wght@400;500;600;700&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet">
</head>
<body>
  <div class="app-container">
    <header class="app-header">
      <div class="header-left">
        <span class="app-badge">មេរៀនទី៤៖ LOOPS & ITERATION</span>
        <h1>📦 ប្រព័ន្ធគ្រប់គ្រង និងវិភាគឃ្លាំងទំនិញ</h1>
        <p>អនុវត្តការគណនាស្ថិតិ និងការច្រោះទិន្នន័យដោយប្រើប្រាស់ JavaScript Loops</p>
      </div>
      <div class="header-actions">
        <button id="btn-recalculate" class="btn btn-primary">🔄 ដំណើរការគណនាឡើងវិញ (Run Loops)</button>
      </div>
    </header>

    <!-- KPI Summary Cards (Generated by Loops) -->
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-label">មុខទំនិញសរុប</div>
        <div class="stat-value" id="stat-total-items">0</div>
        <div class="stat-sub">ក្នុងប្រព័ន្ធគ្រប់គ្រង</div>
      </div>
      <div class="stat-card highlight-blue">
        <div class="stat-label">តម្លៃស្តុកសរុប (Asset Value)</div>
        <div class="stat-value" id="stat-total-value">$0.00</div>
        <div class="stat-sub">គណនាដោយ for...of</div>
      </div>
      <div class="stat-card highlight-emerald">
        <div class="stat-label">ទំនិញថ្លៃបំផុត (Max Price)</div>
        <div class="stat-value" id="stat-max-item">-</div>
        <div class="stat-sub" id="stat-max-price">$0.00</div>
      </div>
      <div class="stat-card highlight-rose">
        <div class="stat-label">ទំនិញខ្វះស្តុក (Stock < 5)</div>
        <div class="stat-value" id="stat-low-stock">0</div>
        <div class="stat-sub">ត្រូវការបញ្ជាទិញជាបន្ទាន់</div>
      </div>
    </div>

    <!-- Interactive Filter & Table -->
    <div class="main-card">
      <div class="card-toolbar">
        <h3>📋 បញ្ជីសារពើភ័ណ្ឌទំនិញលម្អិត</h3>
        <div class="filter-controls">
          <label>ច្រោះតាមស្ថានភាព៖</label>
          <select id="filter-status" class="select-input">
            <option value="all">បង្ហាញទាំងអស់ (All)</option>
            <option value="available">មានក្នុងស្តុក (Available)</option>
            <option value="low">ជិតអស់ពីស្តុក (Low Stock)</option>
            <option value="out">អស់ពីស្តុក (Out of Stock)</option>
          </select>
        </div>
      </div>

      <div class="table-wrapper">
        <table class="inventory-table">
          <thead>
            <tr>
              <th>ល.រ</th>
              <th>ឈ្មោះទំនិញ</th>
              <th>ប្រភេទ</th>
              <th>តម្លៃរាយ</th>
              <th>ចំនួនក្នុងស្តុក</th>
              <th>តម្លៃសរុបក្នុងស្តុក</th>
              <th>ស្ថានភាព</th>
            </tr>
          </thead>
          <tbody id="inventory-tbody">
            <!-- Dynamic rows rendered via JavaScript Loop -->
          </tbody>
        </table>
      </div>

      <!-- Execution Console Log Output -->
      <div class="console-box">
        <div class="console-header">
          <span>🖥️ កំណត់ត្រាដំណើរការរបស់រង្វិលជុំ (Loop Execution Log)</span>
          <button id="btn-clear-log" class="btn-text">លុបកំណត់ត្រា</button>
        </div>
        <div class="console-content" id="log-output">
          <!-- Logs appended dynamically -->
        </div>
      </div>
    </div>
  </div>

  <script src="app.js"></script>
</body>
</html>`
        },
        {
          filename: 'style.css',
          language: 'css',
          code: `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Kantumruy Pro', system-ui, -apple-system, sans-serif;
}

body {
  background-color: #0b0f19;
  color: #f1f5f9;
  min-height: 100vh;
  padding: 24px;
}

.app-container {
  max-width: 1100px;
  margin: 0 auto;
}

.app-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 24px;
  gap: 16px;
  flex-wrap: wrap;
}

.app-badge {
  display: inline-block;
  background: rgba(59, 130, 246, 0.15);
  color: #60a5fa;
  border: 1px solid rgba(59, 130, 246, 0.3);
  font-size: 11px;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 6px;
  letter-spacing: 0.5px;
  margin-bottom: 8px;
}

.app-header h1 {
  font-size: 24px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 4px;
}

.app-header p {
  font-size: 14px;
  color: #94a3b8;
}

.btn {
  padding: 10px 18px;
  border-radius: 10px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.btn-primary {
  background: #2563eb;
  color: #fff;
}

.btn-primary:hover {
  background: #1d4ed8;
  transform: translateY(-1px);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
  margin-bottom: 24px;
}

.stat-card {
  background: #131b2e;
  border: 1px solid #1e293b;
  border-radius: 16px;
  padding: 20px;
}

.stat-card.highlight-blue { border-color: rgba(59, 130, 246, 0.4); }
.stat-card.highlight-emerald { border-color: rgba(16, 185, 129, 0.4); }
.stat-card.highlight-rose { border-color: rgba(239, 68, 68, 0.4); }

.stat-label {
  font-size: 12px;
  color: #94a3b8;
  font-weight: 500;
  margin-bottom: 8px;
}

.stat-value {
  font-size: 22px;
  font-weight: 700;
  color: #fff;
  font-family: 'JetBrains Mono', monospace;
  margin-bottom: 4px;
}

.stat-sub {
  font-size: 11px;
  color: #64748b;
}

.main-card {
  background: #131b2e;
  border: 1px solid #1e293b;
  border-radius: 18px;
  padding: 24px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
}

.card-toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
  flex-wrap: wrap;
  gap: 12px;
}

.card-toolbar h3 {
  font-size: 16px;
  font-weight: 700;
  color: #f8fafc;
}

.filter-controls {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: #94a3b8;
}

.select-input {
  background: #090d16;
  border: 1px solid #334155;
  color: #f8fafc;
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 13px;
  outline: none;
}

.table-wrapper {
  overflow-x: auto;
  margin-bottom: 24px;
}

.inventory-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  font-size: 13px;
}

.inventory-table th {
  background: #0d1527;
  color: #94a3b8;
  font-weight: 600;
  padding: 12px 14px;
  border-bottom: 1px solid #1e293b;
}

.inventory-table td {
  padding: 12px 14px;
  border-bottom: 1px solid #1e293b;
  color: #cbd5e1;
}

.inventory-table tr:hover {
  background: rgba(255, 255, 255, 0.02);
}

.badge {
  display: inline-block;
  padding: 3px 8px;
  border-radius: 6px;
  font-size: 11px;
  font-weight: 600;
}

.badge-in-stock { background: rgba(16, 185, 129, 0.15); color: #34d399; border: 1px solid rgba(16, 185, 129, 0.3); }
.badge-low-stock { background: rgba(245, 158, 11, 0.15); color: #fbbf24; border: 1px solid rgba(245, 158, 11, 0.3); }
.badge-out-of-stock { background: rgba(239, 68, 68, 0.15); color: #f87171; border: 1px solid rgba(239, 68, 68, 0.3); }

.mono {
  font-family: 'JetBrains Mono', monospace;
}

.console-box {
  background: #090d16;
  border: 1px solid #1e293b;
  border-radius: 12px;
  overflow: hidden;
}

.console-header {
  background: #0d1527;
  padding: 10px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  color: #94a3b8;
  border-bottom: 1px solid #1e293b;
}

.btn-text {
  background: none;
  border: none;
  color: #60a5fa;
  font-size: 11px;
  cursor: pointer;
}

.console-content {
  padding: 14px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  color: #a5f3fc;
  max-height: 180px;
  overflow-y: auto;
  line-height: 1.6;
}`
        },
        {
          filename: 'app.js',
          language: 'javascript',
          code: `// ១. ទិន្នន័យគំរូនៃទំនិញក្នុងឃ្លាំង (Warehouse Inventory Dataset)
const inventoryData = [
  { id: 101, name: "ក្តារចុចមេកានិក RGB", category: "Hardware", price: 75.0, stock: 18 },
  { id: 102, name: "កណ្តុរហ្គេមឥតខ្សែ", category: "Hardware", price: 42.5, stock: 4 },
  { id: 103, name: "ម៉ូនីទ័រ IPS 27 អ៊ីញ 144Hz", category: "Display", price: 230.0, stock: 9 },
  { id: 104, name: "កាសស្តាប់ត្រចៀកកាត់សំឡេងរំខាន", category: "Audio", price: 120.0, stock: 0 },
  { id: 105, name: "ខ្សែសាក USB-C 100W", category: "Accessories", price: 12.0, stock: 45 },
  { id: 106, name: "កម្រាលតុទំហំធំ XXL", category: "Accessories", price: 18.0, stock: 3 },
  { id: 107, name: "Speaker ប៊្លូធូសការពារទឹក", category: "Audio", price: 55.0, stock: 12 },
  { id: 108, name: "កាមេរ៉ា Webcam 1080p", category: "Hardware", price: 68.0, stock: 0 }
];

// ២. ទាញយក DOM Elements
const tbody = document.getElementById("inventory-tbody");
const filterSelect = document.getElementById("filter-status");
const btnRecalculate = document.getElementById("btn-recalculate");
const btnClearLog = document.getElementById("btn-clear-log");
const logOutput = document.getElementById("log-output");

const statTotalItems = document.getElementById("stat-total-items");
const statTotalValue = document.getElementById("stat-total-value");
const statMaxItem = document.getElementById("stat-max-item");
const statMaxPrice = document.getElementById("stat-max-price");
const statLowStock = document.getElementById("stat-low-stock");

// មុខងារកត់ត្រា Log ក្នុង UI Console
function logMessage(msg) {
  const line = document.createElement("div");
  line.textContent = \`[⏱️ \${new Date().toLocaleTimeString()}] \${msg}\`;
  logOutput.appendChild(line);
  logOutput.scrollTop = logOutput.scrollHeight;
}

// ៣. មុខងារវិភាគទិន្នន័យដោយ Loops (Data Analytics Engine)
function calculateInventoryAnalytics() {
  logOutput.innerHTML = "";
  logMessage("🚀 ចាប់ផ្តើមដំណើរការ Loop វិភាគទិន្នន័យឃ្លាំង...");

  let totalAssetValue = 0;
  let lowStockCount = 0;
  let highestPricedProduct = null;

  // ប្រើប្រាស់ for...of loop ដើម្បី iterate លើធាតុ inventoryData
  let loopCount = 0;
  for (const item of inventoryData) {
    loopCount++;
    const itemTotalValue = item.price * item.stock;
    totalAssetValue += itemTotalValue;

    // ពិនិត្យទំនិញជិតអស់ពីស្តុក (stock < 5 និង > 0)
    if (item.stock > 0 && item.stock < 5) {
      lowStockCount++;
      logMessage(\`⚠️ ទំនិញជិតអស់ពីស្តុក: "\${item.name}" (នៅសល់តែ \${item.stock})\`);
    }

    // ស្វែងរកទំនិញតម្លៃរាយថ្លៃបំផុត (Finding Maximum Algorithm)
    if (!highestPricedProduct || item.price > highestPricedProduct.price) {
      highestPricedProduct = item;
    }
  }

  logMessage(\`✅ បញ្ចប់ for...of loop ដោយជោគជ័យ! បានឆ្លងកាត់ \${loopCount} មុខទំនិញ។\`);

  // បង្ហាញលើ KPI Cards
  statTotalItems.textContent = inventoryData.length;
  statTotalValue.textContent = \`$\${totalAssetValue.toLocaleString("en-US", { minimumFractionDigits: 2 })}\`;
  statLowStock.textContent = lowStockCount;

  if (highestPricedProduct) {
    statMaxItem.textContent = highestPricedProduct.name;
    statMaxPrice.textContent = \`តម្លៃ: $\${highestPricedProduct.price.toFixed(2)}\`;
  }
}

// ៤. មុខងារ Render តារាងទិន្នន័យដោយប្រើ Standard for Loop ជាមួយ Filter
function renderTable(filterMode = "all") {
  tbody.innerHTML = "";
  let renderedCount = 0;

  // ប្រើប្រាស់ standard for loop ជាមួយ break/continue logic
  for (let i = 0; i < inventoryData.length; i++) {
    const item = inventoryData[i];

    // Filter Logic ដោយប្រើ continue
    if (filterMode === "available" && item.stock <= 0) {
      continue; // រំលងទំនិញអស់ពីស្តុក
    }
    if (filterMode === "low" && (item.stock === 0 || item.stock >= 5)) {
      continue; // យកតែទំនិញណា stock ចន្លោះ 1 ដល់ 4
    }
    if (filterMode === "out" && item.stock > 0) {
      continue; // យកតែទំនិញណា stock === 0
    }

    renderedCount++;

    // កំណត់ Badge តាមកម្រិតស្តុក
    let badgeClass = "badge-in-stock";
    let badgeText = "មានក្នុងស្តុក";
    if (item.stock === 0) {
      badgeClass = "badge-out-of-stock";
      badgeText = "អស់ពីស្តុក";
    } else if (item.stock < 5) {
      badgeClass = "badge-low-stock";
      badgeText = "ជិតអស់";
    }

    const rowTotal = item.price * item.stock;

    // បង្កើត HTML Row
    const tr = document.createElement("tr");
    tr.innerHTML = \`
      <td class="mono">#\${item.id}</td>
      <td><strong>\${item.name}</strong></td>
      <td>\${item.category}</td>
      <td class="mono">$\${item.price.toFixed(2)}</td>
      <td class="mono">\${item.stock}</td>
      <td class="mono">$\${rowTotal.toFixed(2)}</td>
      <td><span class="badge \${badgeClass}">\${badgeText}</span></td>
    \`;
    tbody.appendChild(tr);
  }

  logMessage(\`📊 បង្ហាញទិន្នន័យក្នុងតារាងបានចំនួន \${renderedCount}/\${inventoryData.length} ជួរ (Filter: \${filterMode})\`);
}

// ៥. Event Listeners
btnRecalculate.addEventListener("click", () => {
  calculateInventoryAnalytics();
  renderTable(filterSelect.value);
});

filterSelect.addEventListener("change", (e) => {
  renderTable(e.target.value);
});

btnClearLog.addEventListener("click", () => {
  logOutput.innerHTML = '<div style="color: #64748b;">(កំណត់ត្រាទទេ)</div>';
});

// ចាប់ផ្តើមដំបូង (Initial Load)
calculateInventoryAnalytics();
renderTable("all");`
        }
      ],
      runnableJsCode: `// កូដសង្ខេបអាច Run ផ្ទាល់ក្នុង Interactive Playground
const products = [
  { name: "ក្តារចុច", price: 75, stock: 18 },
  { name: "កណ្តុរ", price: 42, stock: 4 },
  { name: "ម៉ូនីទ័រ", price: 230, stock: 9 },
  { name: "កាស", price: 120, stock: 0 }
];

let totalVal = 0;
let highest = products[0];

for (const p of products) {
  if (p.stock === 0) {
    console.log(\`⚠️ អស់ពីស្តុក: \${p.name}\`);
    continue;
  }
  totalVal += p.price * p.stock;
  if (p.price > highest.price) {
    highest = p;
  }
}

console.log("------------------------");
console.log("💰 តម្លៃស្តុកសរុប =", "$" + totalVal);
console.log("🥇 ទំនិញថ្លៃបំផុតគឺ =", highest.name, "($" + highest.price + ")");`,
      expectedOutput: 'បង្ហាញតម្លៃស្តុកសរុប ទំនិញដែលថ្លៃបំផុត និងទំនិញដែលអស់ពីស្តុក។'
    },
    commonMistakes: [
      {
        mistake: 'បង្កើត Infinite Loop ក្នុង while loop ដោយភ្លេច Increment Counter',
        cause: 'ភ្លេចសរសេរ i++ ឬភ្លេចធ្វើបច្ចុប្បន្នភាពអថេរដែលជាលក្ខខណ្ឌឈប់ បណ្តាលឱ្យ condition ពិតរហូត ទំព័រ Web Browser គាំងភ្លាមៗ។',
        wrongCode: `let i = 0;
while (i < 5) {
  console.log("ជុំទី:", i);
  // ភ្លេចសរសេរ i++;
}`,
        fixedCode: `let i = 0;
while (i < 5) {
  console.log("ជុំទី:", i);
  i++; // ត្រូវតែបង្កើន ឬបន្ថយអថេររាល់ជុំជានិច្ច!
}`,
        fix: 'ពិនិត្យមើលឱ្យច្បាស់ថាអថេរលក្ខខណ្ឌនៅក្នុង while loop តែងតែមានការកែប្រែឆ្ពោះទៅរកលក្ខខណ្ឌឈប់ (Termination condition) ជានិច្ច។'
      },
      {
        mistake: 'ប្រើប្រាស់ for...in លើ Array ជំនួសឱ្យ for...of',
        cause: 'for...in ត្រូវបង្កើតឡើងសម្រាប់ iterate លើ Keys នៃ Object។ កាលណាប្រើលើ Array វានឹងផ្តល់ Index ជា String ("0", "1") ដែលបង្កបញ្ហាពេលយកទៅបូកលេខ។',
        wrongCode: `const numbers = [10, 20, 30];
let sum = 0;
for (const x in numbers) {
  sum += x; // "00" + "1" + "2" (String concatenation bug!)
}`,
        fixedCode: `const numbers = [10, 20, 30];
let sum = 0;
for (const val of numbers) {
  sum += val; // 10 + 20 + 30 = 60 (ត្រឹមត្រូវ!)
}`,
        fix: 'ចងចាំថា៖ ប្រើ for...of សម្រាប់ទាញតម្លៃពី Array និងប្រើ for...in សម្រាប់ទាញ Keys ពី Object ប៉ុណ្ណោះ។'
      },
      {
        mistake: 'កំហុស Off-by-one Error (សរសេរ i <= array.length)',
        cause: 'Index របស់ Array ចាប់ផ្តើមពីលេខ 0 ដល់ length - 1។ ការសរសេរ i <= array.length នឹងបណ្តាលឱ្យជុំចុងក្រោយ array[length] ស្មើ undefined។',
        wrongCode: `const names = ["ដារ៉ា", "សុខា", "ចិន្តា"];
for (let i = 0; i <= names.length; i++) {
  console.log(names[i].toUpperCase()); // Error ជុំចុងក្រោយ: Cannot read properties of undefined
}`,
        fixedCode: `const names = ["ដារ៉ា", "សុខា", "ចិន្តា"];
for (let i = 0; i < names.length; i++) {
  console.log(names[i].toUpperCase()); // រត់ត្រឹម index 0, 1, 2 ត្រឹមត្រូវឥតខ្ចោះ
}`,
        fix: 'ប្រើសញ្ញាតូចជាង (<) ជាជាងតូចជាងឬស្មើ (<=) នៅពេលរាប់ Index នៃ Array៖ for (let i = 0; i < arr.length; i++)។'
      },
      {
        mistake: 'ប្រកាសអថេរ Index ដោយប្រើពាក្យគន្លឹះ var (Loop Scope Leak)',
        cause: 'var គ្មាន Block Scope ទេ ដែលធ្វើឱ្យអថេរ i លេចធ្លាយចេញក្រៅ loop និងបង្កបញ្ហាពេលប្រើប្រាស់ជាមួយ Asynchronous callbacks ឬ event listeners។',
        wrongCode: `for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100); // បង្ហាញ 3, 3, 3
}`,
        fixedCode: `for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100); // បង្ហាញ 0, 1, 2 ត្រឹមត្រូវព្រោះ let មាន Block Scope
}`,
        fix: 'ត្រូវតែប្រកាសអថេរ Index ក្នុង for loop ដោយប្រើពាក្យគន្លឹះ let ជានិច្ច។'
      },
      {
        mistake: 'ច្រឡំតួនាទីរវាង break និង continue',
        cause: 'ការប្រើ break នៅកន្លែងដែលគ្រាន់តែចង់រំលងធាតុតែមួយ នឹងធ្វើឱ្យ loop ទាំងមូលឈប់ដំណើរការភ្លាមៗ បាត់បង់ទិន្នន័យនៅសល់។',
        wrongCode: `// ចង់រំលងលេខអវិជ្ជមាន ប៉ុន្តែ loop ទាំងមូលឈប់
const nums = [5, -2, 10, 20];
for (const n of nums) {
  if (n < 0) break; // ឈប់ loop ទាំងស្រុង មិនបានពិនិត្យ 10 និង 20 ទេ!
  console.log(n);
}`,
        fixedCode: `const nums = [5, -2, 10, 20];
for (const n of nums) {
  if (n < 0) continue; // រំលងតែ -2 មួយប៉ុណ្ណោះ រួចបន្តទៅ 10 និង 20
  console.log(n);
}`,
        fix: 'ប្រើ continue នៅពេលចង់ "រំលងជុំបច្ចុប្បន្ន" ហើយប្រើ break លុះត្រាតែចង់ "បញ្ចប់ loop ទាំងស្រុង"។'
      }
    ],
    exercises: [
      {
        level: 'មូលដ្ឋាន (Basic)',
        prompt: `**Exercise៖ លេខអ្វីធំជាងគេ? (Find Largest Number with If-Else & Logical Operators)**
ឧទាហរណ៍ផ្ទាល់ដែលក្រឡេកមើលពីរបៀបប្រើប្រាស់ Operators និង If-Else Statement ដើម្បីប្រៀបធៀបតម្លៃ៖
ចូរបង្កើតអថេរ ៣ គឺ \`x = 23\`, \`y = 45\`, \`z = 12\`។
បន្ទាប់មកប្រើ \`if-else if-else\` ជាមួយ Comparison Operators (\`>\`) និង Logical Operator (\`&&\`) ដើម្បីបង្ហាញនៅលើកុងសូល Console ថាតើលេខណាធំជាងគេក្នុងចំណោម \`x\`, \`y\`, និង \`z\`។
- បើ x ធំជាងគេ: បង្ហាញ "លេខធំជាងគេគឺ x: 23"
- បើ y ធំជាងគេ: បង្ហាញ "លេខធំជាងគេគឺ y: 45"
- បើ z ធំជាងគេ: បង្ហាញ "លេខធំជាងគេគឺ z: 12"`,
        solutionCode: `// សាកល្បងបង្កើតបីអថេរ
let x = 23;
let y = 45;
let z = 12;

// ប្រើ if-else ដើម្បីបង្ហាញថាតើលេខណាធំជាងគេ
if (x > y && x > z) {
  console.log("លេខធំជាងគេគឺ x:", x);
} else if (y > x && y > z) {
  console.log("លេខធំជាងគេគឺ y:", y);
} else {
  console.log("លេខធំជាងគេគឺ z:", z);
}

// លទ្ធផលបង្ហាញ: លេខធំជាងគេគឺ y: 45`,
        explanation: 'យើងប្រើទាំង Comparison Operators (>) និង Logical Operators (&&) ដើម្បីប្រៀបធៀបតម្លៃ ដោយបញ្ជាក់លក្ខខណ្ឌច្បាស់លាស់ក្នុង If-Else។ តាមលំនាំនេះ យើងអាចបន្ថែម Logical OR (||) ឬ else if statements បន្ថែមទៀតដើម្បីប្រៀបធៀបលក្ខខណ្ឌស្មុគស្មាញ។'
      },
      {
        level: 'ពង្រឹង (Intermediate)',
        prompt: `**កិច្ចការ៖ គណនាផលបូកលេខគូ និងចំនួនជុំ (Even Numbers Accumulator)**
ចូរសរសេរ Function ឈ្មោះ \`sumEvenNumbers(limit)\` ដែលទទួលយកចំនួនគត់វិជ្ជមាន \`limit\` ដោយអនុវត្ត៖
១. ប្រើប្រាស់ Standard \`for\` loop រាប់ចាប់ពី \`1\` រហូតដល់ \`limit\`។
២. ប្រើប្រាស់ Modulo Operator (\`%\`) រួមផ្សំជាមួយ \`continue\` ដើម្បីរំលងលេខសេស។
៣. បូកសរុបតែលេខគូនីមួយៗ និងរាប់ចំនួនលេខគូដែលរកឃើញ។
៤. ត្រឡប់ Object: \`{ limit, sum, evenCount, average }\`។`,
        solutionCode: `function sumEvenNumbers(limit) {
  if (typeof limit !== "number" || limit < 1) {
    return "កំហុស៖ limit ត្រូវតែជាចំនួនគត់វិជ្ជមានធំជាង ០!";
  }

  let sum = 0;
  let evenCount = 0;

  for (let i = 1; i <= limit; i++) {
    // បើជាលេខសេស ប្រើ continue រំលងទៅជុំបន្ទាប់ភ្លាម
    if (i % 2 !== 0) {
      continue;
    }

    sum += i;
    evenCount++;
  }

  const average = evenCount > 0 ? Number((sum / evenCount).toFixed(2)) : 0;

  return {
    limit: limit,
    sum: sum,
    evenCount: evenCount,
    average: average
  };
}

// ករណីតេស្តសាកល្បង
console.log(sumEvenNumbers(10)); // sum: 2+4+6+8+10 = 30, count: 5, avg: 6
console.log(sumEvenNumbers(20)); // sum: 110, count: 10, avg: 11`,
        explanation: 'លំហាត់នេះពង្រឹងការប្រើប្រាស់ for loop, continue statement ដើម្បីរំលងធាតុមិនត្រូវការ និងការគណនាសន្សំតម្លៃ (accumulator pattern)។'
      },
      {
        level: 'អនុវត្ត (Applied)',
        prompt: `**កិច្ចការ៖ បង្កើតប្រព័ន្ធទាញយករបាយការណ៍សិស្សពូកែ និងគណនាមធ្យមភាគថ្នាក់ (Class Honor Roll & Matrix Filter)**
ចូរសរសេរ Function ឈ្មោះ \`generateClassReport(studentsList)\` ដែលទទួល Array នៃ Students:
\`[{ name: "សុខ", scores: [80, 90, 85] }, ...]\`

អនុវត្តតាមលក្ខខណ្ឌ៖
១. ប្រើប្រាស់ \`for...of\` loop ដើម្បីរុករកសិស្សម្នាក់ៗ។
២. ប្រើប្រាស់ Nested Loop (ឬ Inner Loop) ដើម្បីគណនាមធ្យមភាគមុខវិជ្ជារបស់សិស្សម្នាក់ៗ (\`totalScore / scores.length\`)។
៣. ចាត់ថ្នាក់សិស្ស៖
   - ប្រសិនបើមធ្យមភាគ \`>= 85\` ចាត់ទុកជា **"សិស្សកិត្តិយស (Honor Roll)"**
   - ប្រសិនបើសិស្សមានពិន្ទុមុខវិជ្ជាណាមួយក្រោម \`40\` (ប្រើ \`break\` ក្នុង inner loop) ត្រូវកត់ត្រាថា **"មានមុខវិជ្ជាធ្លាក់ (Has Deficit)"**។
៤. គណនាមធ្យមភាគរួមរបស់សិស្សទូទាំងថ្នាក់ និងរកសិស្សដែលទទួលបានមធ្យមភាគខ្ពស់ជាងគេបំផុត (Top Scorer)។`,
        solutionCode: `function generateClassReport(studentsList) {
  if (!Array.isArray(studentsList) || studentsList.length === 0) {
    return { error: "បញ្ជីសិស្សទទេ ឬមិនត្រឹមត្រូវ!" };
  }

  let classTotalSum = 0;
  let honorStudents = [];
  let topStudent = null;

  // Outer loop: រុករកសិស្សម្នាក់ៗតាម for...of
  for (const student of studentsList) {
    let studentSum = 0;
    let hasDeficit = false;

    // Inner loop: គណនាផលបូកពិន្ទុគ្រប់មុខវិជ្ជារបស់សិស្ស
    for (let j = 0; j < student.scores.length; j++) {
      const score = student.scores[j];
      studentSum += score;

      // ពិនិត្យមុខវិជ្ជាធ្លាក់ក្រោម ៤០
      if (score < 40) {
        hasDeficit = true;
      }
    }

    const studentAvg = Number((studentSum / student.scores.length).toFixed(1));
    classTotalSum += studentAvg;

    const studentSummary = {
      name: student.name,
      average: studentAvg,
      hasDeficit: hasDeficit
    };

    // ពិនិត្យសិស្សកិត្តិយស (Honor Roll)
    if (studentAvg >= 85 && !hasDeficit) {
      honorStudents.push(studentSummary);
    }

    // ស្វែងរក Top Student
    if (!topStudent || studentAvg > topStudent.average) {
      topStudent = studentSummary;
    }
  }

  const classAverage = Number((classTotalSum / studentsList.length).toFixed(2));

  return {
    totalStudents: studentsList.length,
    classAverage: classAverage,
    topStudent: topStudent,
    honorRollList: honorStudents
  };
}

// ករណីតេស្តសាកល្បង
const studentsData = [
  { name: "កែវ ចរិយា", scores: [95, 92, 88, 90] },
  { name: "ម៉េង ហុង", scores: [82, 85, 78, 80] },
  { name: "ស៊ូ ដាលីន", scores: [98, 96, 94, 95] },
  { name: "ជា វិចិត្រ", scores: [70, 35, 80, 75] } // មានមុខវិជ្ជា ៣៥ < ៤០
];

console.log(generateClassReport(studentsData));`,
        explanation: 'លំហាត់នេះរួមបញ្ចូល Nested Loops, Flag Tracking (`hasDeficit`), Maximum Finding Algorithm និងការចម្រាញ់ទិន្នន័យជាដំណាក់កាលដូចប្រព័ន្ធវិភាគក្នុងពិភពពិត។'
      },
      {
        level: 'ប្រកួតប្រជែង (Competitive)',
        prompt: `**កិច្ចការ៖ បង្កើតក្បួនដោះស្រាយម៉ាទ្រីសស្វែងរកផ្លូវដើរ និងរូងក្រោមដី (Grid Maze & Treasure Hunter Loop Algorithm)**
នៅក្នុងផែនទីហ្គេម 2D Grid Matrix ទំហំ \`N x M\` ដែលតំណាងដោយ Array 2 វិមាត្រ៖
- លេខ \`0\`: ផ្លូវដើរទទេ (Walkable Path)
- លេខ \`1\`: ជញ្ជាំងរនាំង (Wall / Obstacle) មិនអាចដើរកាត់បាន
- លេខ \`9\`: កំណប់ទ្រព្យ (Treasure Chest 🏆)

ចូរសរសេរ Function ឈ្មោះ \`findTreasuresInGrid(gridMatrix)\` ដោយអនុវត្ត៖
១. ប្រើប្រាស់ **Nested Loops** ជាមួយ **Labeled Statement** (\`gridRowLoop:\`) ដើម្បីរុករកទីតាំងកំណប់ទាំងអស់ \`[rowIndex, colIndex]\`។
២. គណនាស្ថិតិផែនទី៖
   - ចំនួនផ្លូវដើរបានសរុប (ចំនួនលេខ \`0\`)
   - ចំនួនជញ្ជាំងរនាំង (ចំនួនលេខ \`1\`)
   - ចំនួនកំណប់ដែលរកឃើញ (ចំនួនលេខ \`9\`)
៣. ស្វែងរកកំណប់ដែលនៅជិតចំណុចចាប់ផ្តើម \`[0, 0]\` បំផុត ផ្អែកលើចម្ងាយ Manhattan Distance: \`distance = rowIndex + colIndex\`។
៤. ប្រសិនបើជួបជួរដេកណាដែលមានតែជញ្ជាំងសុទ្ធ (\`1\` ទាំងអស់) ត្រូវប្រើ \`continue gridRowLoop\` ដើម្បីរំលងការរុករកជួរនោះភ្លាម។`,
        solutionCode: `function findTreasuresInGrid(gridMatrix) {
  if (!Array.isArray(gridMatrix) || gridMatrix.length === 0) {
    return { error: "ផែនទី Matrix មិនត្រឹមត្រូវ!" };
  }

  const rows = gridMatrix.length;
  const cols = gridMatrix[0].length;

  let walkableCount = 0;
  let wallCount = 0;
  let treasureLocations = [];
  let closestTreasure = null;

  // Labeled Outer Loop សម្រាប់គ្រប់គ្រងលំហូរ Nested Loops
  gridRowLoop: for (let r = 0; r < rows; r++) {
    // ពិនិត្យមើលថាតើជួរនេះជាជញ្ជាំងសុទ្ធឬទេ
    let rowWalls = 0;
    for (let c = 0; c < cols; c++) {
      if (gridMatrix[r][c] === 1) rowWalls++;
    }

    if (rowWalls === cols) {
      // ជញ្ជាំងបិទជិតទាំងស្រុង រំលងជួរនេះចោលភ្លាម
      wallCount += rowWalls;
      continue gridRowLoop;
    }

    // Inner Loop: រុករកក្រឡានីមួយៗក្នុងជួរ
    for (let c = 0; c < cols; c++) {
      const cell = gridMatrix[r][c];

      if (cell === 0) {
        walkableCount++;
      } else if (cell === 1) {
        wallCount++;
      } else if (cell === 9) {
        const distance = r + c; // Manhattan Distance ពី [0, 0]
        const treasureInfo = { row: r, col: c, distance: distance };
        treasureLocations.push(treasureInfo);

        if (!closestTreasure || distance < closestTreasure.distance) {
          closestTreasure = treasureInfo;
        }
      }
    }
  }

  return {
    dimensions: \`\${rows}x\${cols}\`,
    walkableCells: walkableCount,
    wallCells: wallCount,
    totalTreasures: treasureLocations.length,
    allTreasureLocations: treasureLocations,
    nearestTreasure: closestTreasure
      ? \`🏆 រកឃើញនៅកូអរដោនេ [\${closestTreasure.row}, \${closestTreasure.col}] ចម្ងាយ \${closestTreasure.distance} ជំហាន\`
      : "ពុំមានកំណប់ក្នុងផែនទីឡើយ"
  };
}

// ករណីតេស្តសាកល្បង
const gameMap = [
  [0, 0, 1, 9],
  [1, 1, 1, 1], // ជួរនេះជាជញ្ជាំងសុទ្ធ (ត្រូវរំលងដោយ labeled continue)
  [0, 9, 0, 0],
  [1, 0, 1, 9]
];

console.log(findTreasuresInGrid(gameMap));`,
        explanation: 'លំហាត់កម្រិតប្រកួតប្រជែងនេះបង្រៀនពីការគ្រប់គ្រង 2D Arrays / Matrices, ការគណនាចម្ងាយ Manhattan និងការប្រើប្រាស់ Labeled Statements ជាមួយ break/continue ក្នុង Nested Loops ស្មុគស្មាញ។'
      }
    ],
    quiz: [
      {
        id: 1,
        question: 'ដើម្បីសរសេរកំណត់លក្ខខណ្ឌនៃ Statement មួយ ប្រសិនបើជា i ស្មើនឹង 5 តើត្រូវសរសេរយ៉ាងដូចម្តេច?',
        options: [
          'if i==5 then',
          'if i=5 then',
          'if (i==5)',
          'if i=5'
        ],
        correctIndex: 2,
        explanation: 'នៅក្នុង JavaScript លក្ខខណ្ឌត្រូវតែសរសេរនៅក្នុងរង្វង់ក្រចក ( ) ហើយសញ្ញាប្រៀបធៀបស្មើគឺ == (ឬ ===) ដោយមិនប្រើពាក្យ then ឡើយ។ ដូច្នេះ if (i==5) គឺជាចម្លើយត្រឹមត្រូវ។'
      },
      {
        id: 2,
        question: 'ដើម្បីសរសេរកំណត់លក្ខខណ្ឌនៃ Statement មួយ ប្រសិនបើជា i មិនស្មើនឹង 5 តើត្រូវសរសេរយ៉ាងដូចម្តេច?',
        options: [
          'if (i <> 5)',
          'if (i != 5)',
          'if =! 5 then',
          'if <> 5'
        ],
        correctIndex: 1,
        explanation: 'នៅក្នុង JavaScript សញ្ញាមិនស្មើគឺ != (ឬ !==) ហើយត្រូវស្ថិតក្នុងរង្វង់ក្រចក if (i != 5) ដោយមិនប្រើ <> ឬ then ដូចភាសាផ្សេងឡើយ។'
      },
      {
        id: 3,
        question: 'ប្រសិនបើអថេរ score = 80 ហើយដំណើរការកូដ If-Else: if (score >= 90) { ... } else if (score >= 70) { ... } else { ... } តើនឹងទទួលបានលទ្ធផលអ្វី?',
        options: [
          'ល្អណាស់! ពួកគេបាន A',
          'ពេញចិត្ត! ពួកគេបាន B',
          'ត្រូវប្រឹងបន្ត',
          'មិនបង្ហាញអ្វីទាំងអស់'
        ],
        correctIndex: 1,
        explanation: 'ដោយសារពិន្ទុ 80 មិនធំជាង 90 តែធំជាង ឬស្មើ 70 នោះលក្ខខណ្ឌ else if (score >= 70) នឹងពិត ហើយបង្ហាញ "ពេញចិត្ត! ពួកគេបាន B"។'
      },
      {
        id: 4,
        question: 'តើ Loop មួយណាដែលតែងតែដំណើរការប្លុកកូដយ៉ាងហោចណាស់ ១ ដង ទោះបីលក្ខខណ្ឌដំបូងជា false ក៏ដោយ?',
        options: [
          'for loop',
          'while loop',
          'do...while loop',
          'for...of loop'
        ],
        correctIndex: 2,
        explanation: 'do...while loop ដំណើរការប្លុកកូដក្នុង do { ... } ជាមុនសិន ទើបធ្វើការពិនិត្យលក្ខខណ្ឌ while (condition) នៅខាងចុង។'
      },
      {
        id: 5,
        question: 'តើអ្វីជាភាពខុសគ្នាដាច់ស្រឡះរវាង for...of និង for...in ក្នុង JavaScript?',
        options: [
          'for...of ដំណើរការលឿនជាង ១០ ដង',
          'for...of ទាញយក Value នៃ Iterable (ដូចជា Array), រីឯ for...in ទាញយក Key/Property នៃ Object',
          'for...in ប្រើបានតែលើ Array ប៉ុណ្ណោះ',
          'for...of ប្រើសម្រាប់លេខ រីឯ for...in ប្រើសម្រាប់អក្សរ'
        ],
        correctIndex: 1,
        explanation: 'for...of បង្កើតឡើងសម្រាប់ទាញយកតម្លៃផ្ទាល់ (Values) នៃ Array/Strings រីឯ for...in សម្រាប់រាប់ Properties/Keys នៃ Object។'
      },
      {
        id: 6,
        question: 'ប្រសិនបើយើងចង់ "រំលងតែជុំបច្ចុប្បន្ន" ហើយបន្តទៅជុំបន្ទាប់នៃ loop តើត្រូវប្រើប្រាស់ពាក្យគន្លឹះអ្វី?',
        options: [
          'break',
          'skip',
          'continue',
          'return'
        ],
        correctIndex: 2,
        explanation: 'continue រំលងកូដដែលនៅសល់ក្នុងជុំបច្ចុប្បន្ន ហើយលោតទៅចាប់ផ្តើមជុំបន្ទាប់ភ្លាម។ ចំណែក break គឺបញ្ឈប់ loop ទាំងមូល។'
      },
      {
        id: 7,
        question: 'តើកត្តាចម្បងបំផុតដែលបណ្តាលឱ្យកើតមាន Infinite Loop ក្នុង while loop គឺជាអ្វី?',
        options: [
          'ការប្រើប្រាស់ពាក្យគន្លឹះ let',
          'ភ្លេចធ្វើបច្ចុប្បន្នភាពអថេរលក្ខខណ្ឌ (ដូចជា i++) ធ្វើឱ្យលក្ខខណ្ឌពិតរហូត',
          'ការប្រើប្រាស់ Array ធំពេក',
          'ការប្រើប្រាស់ Template Literals ក្នុង loop'
        ],
        correctIndex: 1,
        explanation: 'ប្រសិនបើអថេរលក្ខខណ្ឌមិនត្រូវបានកែប្រែឆ្ពោះទៅរកភាព false ទេនោះ while loop នឹងដំណើរការឥតឈប់ឈរ និងធ្វើឱ្យ browser គាំង។'
      },
      {
        id: 8,
        question: 'ហេតុអ្វីបានជា While Loop ត្រូវបានគេចាត់ទុកជា Pre-test Loop?',
        options: [
          'ព្រោះវាធ្វើការពិនិត្យលើលក្ខខណ្ឌជាមុនសិន មុននឹង Execute code',
          'ព្រោះវាដំណើរការកូដជាមុនសិន ទើបពិនិត្យលក្ខខណ្ឌតាមក្រោយ',
          'ព្រោះវាអាចដំណើរការបានតែម្តងគត់ជានិច្ច',
          'ព្រោះវាប្រើប្រាស់បានតែជាមួយអថេរប្រភេទ String'
        ],
        correctIndex: 0,
        explanation: 'While loop គឺជា Pre-test loop មានន័យថាវាផ្ទៀងផ្ទាត់ Expression ជាមុន ប្រសិនបើ true ទើបវា Execute Statements ខាងក្នុង។'
      },
      {
        id: 9,
        question: 'ក្នុងកូដ `let count = 5; do { console.log("ចំនួន: " + count); count++; } while (count < 5);` តើ console.log នឹងដំណើរការបានប៉ុន្មានដង?',
        options: [
          '០ ដង (មិនដំណើរការទាល់តែសោះ)',
          '១ ដង',
          '៥ ដង',
          'ដំណើរការមិនឈប់ (Infinite Loop)'
        ],
        correctIndex: 1,
        explanation: 'Do-While Loop ដំណើរការប្លុកកូដក្នុង do { ... } ចំនួន ១ ដងជាមុនសិន ទោះបីលក្ខខណ្ឌ count < 5 (5 < 5) មិនពិត (false) ក៏ដោយ។'
      },
      {
        id: 10,
        question: 'តើ Nested Loop សំដៅលើអ្វីក្នុងភាសា JavaScript?',
        options: [
          'ការប្រើប្រាស់ loop មួយនៅខាងក្នុង loop មួយទៀត',
          'ការលុប loop ចេញពីកម្មវិធី',
          'ការប្រើ If statement តែមួយគត់',
          'ការប្រកាស loop ដោយគ្មានលក្ខខណ្ឌឈប់'
        ],
        correctIndex: 0,
        explanation: 'Nested Loops គឺជាករណីដែលយើងប្រើប្រាស់ loop មួយនៅខាងក្នុង loop មួយទៀត ដូចជាការបង្កើតតារាងគុណលេខ ក្រឡាចត្រង្គ ឬ Matrix។'
      },
      {
        id: 11,
        question: 'នៅក្នុង Switch Statement ប្រសិនបើគ្មាន Case ណាមួយត្រូវគ្នានឹងតម្លៃនៃ Expression ទេ តើកម្មវិធីនឹងដំណើរការប្លុកកូដមួយណា?',
        options: [
          'ប្លុក default',
          'ប្លុក else',
          'ប្លុក case 1',
          'កម្មវិធីនឹង Error គាំងភ្លាមៗ'
        ],
        correctIndex: 0,
        explanation: 'ប្រសិនបើគ្មាន Case ណាមួយត្រូវគ្នានឹងតម្លៃរបស់ Expression ទេ នោះ Switch Statement នឹងលោតទៅកាន់ Statement ដែល Label ដោយ default (ប្រសិនបើមាន)។'
      },
      {
        id: 12,
        question: 'តើមានអ្វីកើតឡើងក្នុង Switch Statement ប្រសិនបើយើងមិនសរសេរពាក្យគន្លឹះ `break` នៅចុងបញ្ចប់នៃ Case មួយ?',
        options: [
          'កម្មវិធីនឹងបន្តដំណើរការ Case បន្ទាប់ទៀតដោយស្វ័យប្រវត្តិ (Fall-Through)',
          'កម្មវិធីនឹងលោតចេញពី Switch Statement ភ្លាមៗ',
          'កម្មវិធីនឹង Error syntax',
          'Switch Statement នឹងចាប់ផ្តើមឡើងវិញពី Case ដំបូង'
        ],
        correctIndex: 0,
        explanation: 'បើគ្មានពាក្យគន្លឹះ break ទេ កម្មវិធីនឹងបន្តប្រតិបត្តិកូដក្នុង Case បន្ទាប់ទៀតដោយមិនផ្ទៀងផ្ទាត់លក្ខខណ្ឌឡើងវិញឡើយ ដែលហៅថា Fall-Through Behavior។'
      }
    ],
    summary: [
      'If Statements ប្រើសម្រាប់ត្រួតពិនិត្យមើលលក្ខខណ្ឌពិត (true) ឬមិនពិត (false) ដោយសរសេរក្នុងរង្វង់ក្រចក if (expression) { ... }',
      'Control Flow Statements (If-Else & Else-If) គឺជាគន្លឹះដើម្បីធ្វើឱ្យកម្មវិធីអាចបកស្រាយ និងប្រតិបត្តិការលទ្ធផលផ្សេងៗផ្អែកលើលក្ខខណ្ឌ',
      'ការផ្សំផ្គុំ Comparison Operators (>, <, ==, !=) និង Logical Operators (&&, ||) អនុញ្ញាតឱ្យត្រួតពិនិត្យលក្ខខណ្ឌច្រើនក្នុងពេលតែមួយ (ដូចជាស្វែងរកលេខធំជាងគេ x > y && x > z)',
      'ត្រូវចងចាំវាក្យសម្ព័ន្ធ JavaScript: ប្រើ if (i == 5) ឬ if (i != 5) ដោយមិនប្រើពាក្យ "then" ឬសញ្ញា "<>" ដូចភាសាដទៃឡើយ',
      'Switch Statements វាយតម្លៃលើ Expression មួយ ហើយលោតទៅកាន់ Statement ដែលបាន Label ជាមួយ Case Clause ដែលត្រូវគ្នា ឬ default clause ប្រសិនបើគ្មាន case ត្រូវគ្នា',
      'ពាក្យគន្លឹះ break ក្នុង Switch Statement ប្រើសម្រាប់បញ្ឈប់ និងចាកចេញពី Switch Statement ចំណែកការមិនដាក់ break អាចទាញប្រយោជន៍ជា Fall-Through ដើម្បីចងក្រង case ច្រើនរួមគ្នា (ដូចជាការបែងចែករដូវតាមខែ)',
      'While Loop គឺជា Pre-test loop ដែលពិនិត្យលក្ខខណ្ឌជាមុនសិន មុននឹង Execute Statements ដដែលៗ',
      'Do-While Loop គឺជា Post-loop ដែល Execute កូដមុន ហើយពិនិត្យលក្ខខណ្ឌតាមក្រោយ ធានាថាដំណើរការយ៉ាងហោចណាស់បានម្តង',
      'For Loop សម្រួលដល់ការបង្កើត Initialization, Condition, និង Increment Statement ក្នុងបន្ទាត់តែមួយ ស័ក្តិសមសម្រាប់បង្កើត Dynamic HTML List & Table',
      'Nested Loops គឺជាការប្រើ Loop មួយនៅខាងក្នុង Loop មួយទៀត សម្រាប់ដំណើរការទិន្នន័យពហុវិមាត្រ និងការបង្កើតតារាងគុណលេខ 1 ដល់ 10',
      'ប្រើ break ដើម្បីបញ្ចប់ loop ទាំងស្រុង និងប្រើ continue ដើម្បីរំលងតែជុំបច្ចុប្បន្ន',
      'ប្រុងប្រយ័ត្នបញ្ហា Infinite Loop ដោយធានាថាអថេរលក្ខខណ្ឌតែងតែកើន/ថយ និងប្រើ let ជាជាង var ជានិច្ច'
    ]
  },
  {
    id: 5,
    slug: 'functions',
    titleKm: 'មេរៀនទី៥៖ អនុគមន៍ (Functions, Scope & Arrow Functions)',
    titleEn: 'Lesson 5: Functions, Parameters, Return, Scope & Arrow Functions',
    category: 'Logic & Flow',
    prerequisites: ['មេរៀនទី២ (Variables & Scope)', 'មេរៀនទី៣ (Control Flow & Logic)', 'មេរៀនទី៤ (Loops & Iterations)'],
    learningOutcomes: [
      'បែងចែកភាពខុសគ្នារវាង Function Declaration, Function Expression និង Arrow Function (ES6)',
      'យល់ច្បាស់ពី Parameters vs Arguments, Default Parameters និង Rest Parameters (...args)',
      'ប្រើប្រាស់ Return Statement និងអនុវត្ត Early Return Pattern (Guard Clauses) ដើម្បីបញ្ចៀស Nested If-Else',
      'យល់ដឹងពីវិសាលភាពនៃអថេរ (Global, Function/Local, Block Scope) និង Lexical Scope',
      'កំណត់សម្គាល់ Pure Functions (អនុគមន៍បរិសុទ្ធ) និងបញ្ចៀស Side Effects ក្នុងការអភិវឌ្ឍកម្មវិធី',
      'ប្រើប្រាស់ Callback Functions និង Higher-Order Functions កម្រិតដំបូងក្នុងការចាត់ចែងទិន្នន័យ',
      'អនុវត្តគោលការណ៍ DRY (Don\'t Repeat Yourself) និង Single Responsibility Principle (SRP)'
    ],
    scenario: 'ការកសាងប្រព័ន្ធគណនាវិក្កយបត្រអេឡិចត្រូនិច (E-Commerce Invoicing & Billing Engine)៖ នៅពេលអតិថិជនទិញទំនិញ ប្រព័ន្ធត្រូវផ្ទៀងផ្ទាត់បញ្ជីទំនិញ (Validation), គណនាតម្លៃបញ្ចុះតាម Voucher (Discount), គណនាថ្លៃដឹកជញ្ជូនតាមតំបន់ (Shipping Fee), គណនាពន្ធលើតម្លៃបន្ថែម VAT (Tax), និងបង្កើតវិក្កយបត្រចុងក្រោយ។ ប្រសិនបើសរសេរកូដលាយឡំគ្នាដោយគ្មាន Function នោះកូដនឹងស្ទួន ពិបាកកែប្រែ និងងាយបង្កើតកំហុស (Bugs)។ ការបំបែកជា Reusable Functions ជួយឱ្យកូដមានរបៀប ងាយស្រួលធ្វើតេស្ត និងយកទៅប្រើឡើងវិញនៅគ្រប់ទីកន្លែង!',
    conceptsExplanation: `
### ១. អ្វីទៅជា Function? ហេតុអ្វីបានជាយើងត្រូវប្រើប្រាស់វា?
**Function (អនុគមន៍)** គឺជាបណ្តុំនៃកូដ (Block of Code) ដែលត្រូវបានរចនាឡើងដើម្បីបំពេញកិច្ចការជាក់លាក់ណាមួយ ហើយអាចត្រូវបានហៅមកដំណើរការ (Invoke / Call) ឡើងវិញបានច្រើនដង គ្រប់ពេលវេលា និងគ្រប់ទីកន្លែងក្នុងកម្មវិធី។

អត្ថប្រយោជន៍ចម្បងៗនៃការប្រើប្រាស់ Function៖
1. **គោលការណ៍ DRY (Don't Repeat Yourself):** កាត់បន្ថយការសរសេរកូដស្ទួនៗ។ ប្រសិនបើអ្នកត្រូវការគណនាពន្ធ ឬបម្លែងទម្រង់រូបិយប័ណ្ណនៅ ១០ ទំព័រផ្សេងគ្នា អ្នកគ្រាន់តែសរសេរ Function ម្តង រួចហៅប្រើគ្រប់ទីកន្លែង។
2. **Modularity & Maintainability:** បំបែកបញ្ហាស្មុគស្មាញធំៗ ទៅជាផ្នែកតូចៗ (Sub-tasks) ដែលងាយស្រួលយល់ និងងាយកែសម្រួល។
3. **Testability & Reusability:** ងាយស្រួលសរសេរកូដធ្វើតេស្ត (Unit Testing) ដើម្បីផ្ទៀងផ្ទាត់ថាតើ Function ដំណើរការត្រឹមត្រូវឬទេ។

---

### ២. វិធីសាស្ត្របង្កើត Function ទាំង ៣ បែបក្នុង JavaScript

| លក្ខណៈវិនិច្ឆ័យ | Function Declaration | Function Expression | Arrow Function (ES6+) |
| :--- | :--- | :--- | :--- |
| **ទម្រង់ Syntax** | \`function add(a, b) { return a + b; }\` | \`const add = function(a, b) { return a + b; };\` | \`const add = (a, b) => a + b;\` |
| **Hoisting** | **បាទ/ចាស (Hoisted)** អាចហៅប្រើមុនពេលប្រកាសបាន | **ទេ (Not Hoisted)** ហៅមុននឹងកើត \`ReferenceError\` | **ទេ (Not Hoisted)** ហៅមុននឹងកើត \`ReferenceError\` |
| **ពាក្យ \`this\`** | មាន Binding ផ្ទាល់ខ្លួនតាមអ្នកហៅ | មាន Binding ផ្ទាល់ខ្លួនតាមអ្នកហៅ | **Lexical this** (ប្រើ \`this\` នៃ Scope ខាងក្រៅ) |
| **Implicit Return** | គ្មាន (ត្រូវតែមាន \`return\`) | គ្មាន (ត្រូវតែមាន \`return\`) | **មាន** (សរសេរលើបន្ទាត់តែមួយដោយគ្មាន \`{}\`) |

#### ក. Function Declaration (ទម្រង់បុរាណ)
\`\`\`javascript
// អាចហៅប្រើមុនពេលប្រកាសបានដោយសារយន្តការ Hoisting
console.log(greet("ចាន់ណា")); // "សួស្តី ចាន់ណា!"

function greet(name) {
  return \`សួស្តី \${name}!\`;
}
\`\`\`

#### ខ. Function Expression (ទម្រង់រក្សាទុកក្នុងអថេរ)
\`\`\`javascript
// មិនអាចហៅប្រើមុនពេលប្រកាសបានឡើយ!
const calculateTax = function(amount, rate) {
  return amount * rate;
};

console.log(calculateTax(100, 0.1)); // 10
\`\`\`

#### គ. Arrow Function (ES6 វាក្យសម្ព័ន្ធទំនើប)
Arrow Function ផ្តល់នូវទម្រង់សរសេរយ៉ាងខ្លី និងស្អាត៖
\`\`\`javascript
// ១. ទម្រង់ស្តង់ដារពេញលេញ
const multiply = (x, y) => {
  return x * y;
};

// ២. ទម្រង់សង្ខេប (Concise Body / Implicit Return)
// បើមាន Parameter តែមួយ មិនបាច់ដាក់វង់ក្រចក () ក៏បាន ហើយបើសរសេរមួយបន្ទាត់ មិនបាច់ដាក់ {} និងពាក្យ return ឡើយ
const square = x => x * x;
const double = n => n * 2;

console.log(square(5)); // 25
console.log(double(10)); // 20
\`\`\`

---

### ៣. Parameters, Arguments, Default Values និង Rest Parameters

- **Parameters (ប៉ារ៉ាម៉ែត្រ):** ឈ្មោះអថេរដែលត្រូវបានកំណត់ក្នុងវង់ក្រចកពេលបង្កើត Function (ជាទម្រង់គំរូ Placeholder)។
- **Arguments (អាគុយម៉ង់):** តម្លៃទិន្នន័យជាក់ស្តែងដែលអ្នកប្រើប្រាស់បញ្ជូនចូលពេលហៅ Function នោះមកដំណើរការ។

\`\`\`javascript
// price និង discountPercent គឺជា Parameters
function getDiscountPrice(price, discountPercent) {
  return price - (price * discountPercent / 100);
}

// 200 និង 15 គឺជា Arguments
const result = getDiscountPrice(200, 15);
\`\`\`

#### ក. Default Parameters (តម្លៃលំនាំដើម ES6)
ដើម្បីការពារកុំឱ្យកើតតម្លៃ \`undefined\` នៅពេលអ្នកហៅភ្លេចបញ្ជូន Argument មក៖
\`\`\`javascript
function createReceipt(customerName = "ភ្ញៀវទូទៅ", vatRate = 0.1, currency = "USD") {
  return \`អតិថិជន: \${customerName}, ពន្ធ: \${vatRate * 100}%, រូបិយប័ណ្ណ: \${currency}\`;
}

console.log(createReceipt()); // អតិថិជន: ភ្ញៀវទូទៅ, ពន្ធ: 10%, រូបិយប័ណ្ណ: USD
console.log(createReceipt("កែវ សុខា", 0.05)); // អតិថិជន: កែវ សុខា, ពន្ធ: 5%, រូបិយប័ណ្ណ: USD
\`\`\`

#### ខ. Rest Parameters (\`...args\` ទទួល Arguments ច្រើនមិនកំណត់)
ប្រើសម្រាប់ប្រមូល Arguments ទាំងអស់ដែលនៅសល់ដាក់ចូលក្នុង Array តែមួយ៖
\`\`\`javascript
// ទទួលយកតម្លៃទំនិញច្រើនមុខដោយមិនកំណត់ចំនួន
const sumCartItems = (storeName, ...prices) => {
  console.log("ហាង:", storeName);
  console.log("បញ្ជីតម្លៃ:", prices); // prices គឺជា Array ពិតប្រាកដ [10, 25, 40]
  
  let total = 0;
  for (const p of prices) {
    total += p;
  }
  return total;
};

console.log("សរុប:", sumCartItems("ផ្សារទំនើប", 10, 25, 40)); // 75
\`\`\`

---

### ៤. Return Statement និង Early Return (Guard Clauses) Pattern

- ពាក្យគន្លឹះ \`return\` មានតួនាទី ២ យ៉ាង៖
  1. **បញ្ឈប់ការដំណើរការរបស់ Function ភ្លាមៗ** (កូដណាដែលសរសេរនៅខាងក្រោម \`return\` នឹងមិនដំណើរការឡើយ)។
  2. **បញ្ជូនលទ្ធផលចេញទៅក្រៅ** ត្រង់កន្លែងដែល Function នោះត្រូវបានគេហៅ។
- ប្រសិនបើសរសេរ \`return;\` គ្មានតម្លៃ ឬមិនសរសេរ \`return\` នោះ Function នឹងប្រគល់តម្លៃ \`undefined\` ត្រឡប់មកវិញជាស្វ័យប្រវត្តិ។

#### យុទ្ធសាស្ត្រ Early Return Pattern (Guard Clauses)
ជំនួសឱ្យការសរសេរ \`if / else\` ច្រើនជាន់ដែលពិបាកអាន (Pyramid of Doom) ចូរសរសេរពិនិត្យករណីខុស ឬមិនត្រឹមត្រូវនៅផ្នែកខាងលើ ហើយ \`return\` ចេញភ្លាម៖

\`\`\`javascript
// ❌ របៀបមិនល្អ: If-Else ច្រើនជាន់ (Nested)
function processPaymentBad(user, amount) {
  if (user) {
    if (user.isActive) {
      if (user.balance >= amount) {
        user.balance -= amount;
        return { success: true, newBalance: user.balance };
      } else {
        return { success: false, error: "សមតុល្យមិនគ្រប់គ្រាន់" };
      }
    } else {
      return { success: false, error: "គណនីត្រូវបានផ្អាក" };
    }
  } else {
    return { success: false, error: "រកមិនឃើញគណនី" };
  }
}

//  របៀបល្អបំផុត: Early Return Pattern (ស្អាត ត្រង់ ងាយស្រួល Debug)
function processPaymentClean(user, amount) {
  // Guard Clause 1: គ្មាន User
  if (!user) {
    return { success: false, error: "រកមិនឃើញគណនី" };
  }
  // Guard Clause 2: គណនីអសកម្ម
  if (!user.isActive) {
    return { success: false, error: "គណនីត្រូវបានផ្អាក" };
  }
  // Guard Clause 3: លុយមិនគ្រប់
  if (user.balance < amount) {
    return { success: false, error: "សមតុល្យមិនគ្រប់គ្រាន់" };
  }

  // Happy Path: ដំណើរការកាត់លុយ
  user.balance -= amount;
  return { success: true, newBalance: user.balance };
}
\`\`\`

---

### ៥. វិសាលភាពនៃអថេរ (Scope) និង Lexical Scoping

**Scope** គឺជាវិសាលភាព ឬព្រំដែនដែលអថេរមួយអាចត្រូវបានមើលឃើញ និងទាញយកទៅប្រើប្រាស់បានក្នុងកូដ៖
1. **Global Scope:** អថេរដែលប្រកាសនៅខាងក្រៅ Functions ទាំងអស់ អាចហៅប្រើបានគ្រប់ទីកន្លែង។
2. **Function / Local Scope:** អថេរដែលប្រកាសក្នុង Function មួយ អាចប្រើបានតែក្នុង Function នោះប៉ុណ្ណោះ។
3. **Block Scope (\`let\` / \`const\`):** អថេរដែលប្រកាសក្នុងដង្កៀប \`{ ... }\` (ដូចជា if, for, while) មិនអាចទាញយកទៅប្រើនៅក្រៅដង្កៀបនោះបានឡើយ។
4. **Lexical Scope (Static Scope):** Function ខាងក្នុងអាចចូលទៅកាន់អថេរនៃ Function ខាងក្រៅដែលរុំព័ទ្ធវាបានជានិច្ច (Parent Scope) ប៉ុន្តែ Function ខាងក្រៅមិនអាចចូលប្រើអថេរខាងក្នុងបានឡើយ។

\`\`\`javascript
const globalExchangeRate = 4100; // Global Scope

function convertCurrency(usdAmount) {
  const serviceFee = 1.5; // Function Scope
  
  if (usdAmount > 100) {
    const bonusRate = 50; // Block Scope (ប្រើបានតែក្នុង If នេះ)
    return (usdAmount * (globalExchangeRate + bonusRate)) - serviceFee;
  }
  
  // bonusRate មិនអាចប្រើនៅទីនេះបានទេ (ReferenceError)
  return (usdAmount * globalExchangeRate) - serviceFee;
}
\`\`\`

---

### ៦. Pure Functions vs Side Effects

- **Pure Function (អនុគមន៍បរិសុទ្ធ):**
  1. ផ្តល់ Input ដដែល តែងតែទទួលបាន Output ដដែល ១០០% (Deterministic)។
  2. មិនបង្កើត **Side Effects** ឡើយ (មិនកែប្រែតម្លៃអថេរ Global មិនកែប្រែ DOM មិនកែប្រែទិន្នន័យដើមនៃ Array/Object ដែលបញ្ជូនមក)។
- **Impure Function:** កែប្រែអថេរខាងក្រៅ ទាញយកពេលវេលាជាក់ស្តែង (\`Date.now()\`) ឬបង្កើតលេខចៃដន្យ (\`Math.random()\`)។
- **ការអនុវត្តល្អ:** ព្យាយាមសរសេរស្នូលនៃការគណនាឱ្យទៅជា Pure Functions ឱ្យបានច្រើន ព្រោះវាងាយស្រួលធ្វើតេស្ត និងមិនបង្កកំហុសស្មុគស្មាញ។

---

### ៧. សេចក្តីផ្តើមអំពី Callback Functions
**Callback Function** គឺជា Function មួយដែលត្រូវបានបញ្ជូនទៅជា Argument នៃ Function មួយទៀត ដើម្បីឱ្យគេយកទៅហៅដំណើរការនៅពេលក្រោយ៖

\`\`\`javascript
function calculate(a, b, operationCallback) {
  return operationCallback(a, b);
}

const add = (x, y) => x + y;
const multiply = (x, y) => x * y;

console.log(calculate(5, 3, add)); // 8
console.log(calculate(5, 3, multiply)); // 15
\`\`\`
គោលការណ៍ Callback នេះ គឺជាគ្រឹះដ៏រឹងមាំសម្រាប់រៀន Array Methods (\`map\`, \`filter\`, \`reduce\`) ក្នុងមេរៀនបន្ទាប់!
    `,
    syntaxExamples: [
      {
        title: '១. Function Declaration vs Expression vs Arrow Function',
        description: 'ការប្រៀបធៀបរបៀបសរសេរទាំង ៣ ទម្រង់ និងឥរិយាបថ Hoisting',
        code: `// ១. Function Declaration (Hoisted - ហៅមុនបាន)
console.log("Declaration:", calculateVat(100)); // 10

function calculateVat(amount) {
  return amount * 0.1;
}

// ២. Function Expression (Not Hoisted)
const calculateDiscount = function(price, rate) {
  return price * rate;
};
console.log("Expression:", calculateDiscount(200, 0.15)); // 30

// ៣. Arrow Function (Modern ES6 Concise Return)
const formatPrice = amount => "$" + amount.toFixed(2);
console.log("Arrow Function:", formatPrice(89.5)); // "$89.50"`
      },
      {
        title: '២. Default Parameters និង Rest Parameters (...args)',
        description: 'ការកំណត់តម្លៃជំនួស និងការទទួល Arguments មិនកំណត់ចំនួន',
        code: `// Default Parameters ជៀសវាងបញ្ហា undefined
const createBill = (client = "ភ្ញៀវទូទៅ", discount = 0, currency = "USD") => {
  return \`វិក្កយបត្រសម្រាប់: \${client} | បញ្ចុះ: \${discount}% | រូបិយប័ណ្ណ: \${currency}\`;
};

console.log(createBill()); 
console.log(createBill("ក្រុមហ៊ុន ABC", 10));

// Rest Parameters (...items) ប្រមូល argument ជា Array
function calculateOrderTotal(taxRate, deliveryFee, ...items) {
  let subtotal = 0;
  for (const price of items) {
    subtotal += price;
  }
  const tax = subtotal * taxRate;
  return subtotal + tax + deliveryFee;
}

console.log("តម្លៃសរុប:", calculateOrderTotal(0.1, 2.5, 12, 45, 18, 9)); // 94.9`
      },
      {
        title: '៣. Early Return Pattern (Guard Clauses) ក្នុងការ Validate Form',
        description: 'កាត់បន្ថយ if-else ច្រើនជាន់ ដោយត្រួតពិនិត្យ និង return ចេញភ្លាមៗ',
        code: `// អនុគមន៍ផ្ទៀងផ្ទាត់ទិន្នន័យចុះឈ្មោះសិស្ស
function validateRegistration(student) {
  if (!student) {
    return { valid: false, message: "❌ មិនមានទិន្នន័យសិស្សឡើយ" };
  }
  if (!student.name || student.name.trim().length === 0) {
    return { valid: false, message: "❌ សូមបញ្ចូលឈ្មោះសិស្សឱ្យបានត្រឹមត្រូវ" };
  }
  if (typeof student.age !== "number" || student.age < 16) {
    return { valid: false, message: "❌ សិស្សត្រូវមានអាយុចាប់ពី ១៦ ឆ្នាំឡើង" };
  }
  if (!student.email || !student.email.includes("@")) {
    return { valid: false, message: "❌ ទម្រង់អ៊ីមែលមិនត្រឹមត្រូវ" };
  }

  // Happy Path: ទិន្នន័យត្រឹមត្រូវទាំងអស់
  return { valid: true, message: "✅ ការចុះឈ្មោះត្រឹមត្រូវតាមលក្ខខណ្ឌ" };
}

console.log(validateRegistration({ name: "សុខា", age: 15, email: "sokha@test.com" }));
console.log(validateRegistration({ name: "ចាន់ណា", age: 19, email: "channa@gmail.com" }));`
      },
      {
        title: '៤. Lexical Scope & Closure (Function Factory)',
        description: 'អនុគមន៍ដែលបង្កើតអនុគមន៍មួយទៀត ដោយចងចាំអថេរក្នុង Parent Scope',
        code: `// Function Factory បង្កើតអនុគមន៍គណនាពន្ធតាមប្រទេស
function createTaxCalculator(country, taxRate) {
  // taxRate និង country ស្ថិតក្នុង Lexical Scope នៃ child function
  return function(price) {
    const tax = price * taxRate;
    const total = price + tax;
    return \`[\${country}] តម្លៃ: $\${price} + ពន្ធ (\${taxRate * 100}%): $\${tax.toFixed(2)} = សរុប $\${total.toFixed(2)}\`;
  };
}

const cambodiaTax = createTaxCalculator("កម្ពុជា", 0.1); // VAT 10%
const usaTax = createTaxCalculator("អាមេរិក", 0.075);    // 7.5%

console.log(cambodiaTax(100));
console.log(cambodiaTax(250));
console.log(usaTax(100));`
      },
      {
        title: '៥. ការប្រើប្រាស់ Callback Functions',
        description: 'ការបញ្ជូន Function ទៅជា Argument ដើម្បីធ្វើប្រតិបត្តិការលើទិន្នន័យ',
        code: `// អនុគមន៍កែច្នៃទិន្នន័យទូទៅ (Custom Transformer)
function transformList(items, transformCallback) {
  const result = [];
  for (const item of items) {
    // ហៅ callback function លើធាតុនីមួយៗ
    result.push(transformCallback(item));
  }
  return result;
}

const scores = [45, 80, 92, 38, 75];

// បញ្ជូន Arrow function ជា callback
const passFailList = transformList(scores, score => score >= 50 ? "ជាប់" : "ធ្លាក់");
const curvedScores = transformList(scores, score => score + 5);

console.log("លទ្ធផលប្រឡង:", passFailList);
console.log("ពិន្ទុបូក ៥ បន្ថែម:", curvedScores);`
      }
    ],
    guidedPractice: {
      title: 'Smart Invoicing & E-Commerce Pricing Engine (ប្រព័ន្ធគណនាវិក្កយបត្រ និងតម្លៃទំនិញឆ្លាតវៃ)',
      description: 'បង្កើតប្រព័ន្ធគណនាវិក្កយបត្រពេញលេញសម្រាប់ហាងលក់ទំនិញអនឡាញ ដោយអនុវត្តស្ថាបត្យកម្មកូដផ្អែកលើ Reusable Functions, Early Return Guard Clauses, Default Parameters, និង Pure Functions ព្រមទាំងមានផ្ទាំង UI អន្តរកម្មផ្ទាល់។',
      runnableJsCode: `// ==========================================
// Smart Invoicing & E-Commerce Pricing Engine
// ==========================================

// ១. Pure Function: គណនាតម្លៃទំនិញនីមួយៗ
const calculateLineItemTotal = (unitPrice, quantity) => {
  if (typeof unitPrice !== "number" || typeof quantity !== "number" || quantity <= 0) {
    return 0;
  }
  return Number((unitPrice * quantity).toFixed(2));
};

// ២. Pure Function ជាមួយ Early Return: ផ្ទៀងផ្ទាត់ និងគណនា Voucher បញ្ចុះតម្លៃ
const applyCouponDiscount = (subtotal, couponCode) => {
  if (!couponCode || typeof couponCode !== "string") {
    return { discountRate: 0, discountAmount: 0, code: "NONE", valid: false };
  }

  const cleanCode = couponCode.trim().toUpperCase();

  // Guard Clause: កន្ត្រកទំនិញទទេ
  if (subtotal <= 0) {
    return { discountRate: 0, discountAmount: 0, code: cleanCode, valid: false, reason: "កន្ត្រកទំនិញទទេ" };
  }

  if (cleanCode === "DISCOUNT10") {
    const rate = 0.10;
    return { discountRate: rate, discountAmount: Number((subtotal * rate).toFixed(2)), code: cleanCode, valid: true };
  }

  if (cleanCode === "VIP20") {
    // លក្ខខណ្ឌបន្ថែម: ទិញចាប់ពី $50 ឡើង
    if (subtotal < 50) {
      return { discountRate: 0, discountAmount: 0, code: cleanCode, valid: false, reason: "Voucher VIP20 ប្រើបានតែលើការទិញចាប់ពី $50 ឡើង" };
    }
    const rate = 0.20;
    return { discountRate: rate, discountAmount: Number((subtotal * rate).toFixed(2)), code: cleanCode, valid: true };
  }

  return { discountRate: 0, discountAmount: 0, code: cleanCode, valid: false, reason: "កូដ Voucher មិនត្រឹមត្រូវ" };
};

// ៣. Function ជាមួយ Default Parameters: គណនាថ្លៃដឹកជញ្ជូន
const calculateShipping = (subtotal, location = "phnom-penh", isExpress = false) => {
  // Free shipping ប្រសិនបើទិញលើសពី $100
  if (subtotal >= 100 && !isExpress) {
    return { fee: 0, note: "ដឹកជញ្ជូនឥតគិតថ្លៃ (Free Shipping លើស $100)" };
  }

  let baseFee = 1.5; // Phnom Penh
  if (location === "province") {
    baseFee = 2.5; // តាមខេត្ត
  }

  if (isExpress) {
    baseFee += 2.0; // សេវាដឹកបន្ទាន់
  }

  return { fee: baseFee, note: isExpress ? "ដឹកជញ្ជូនរហ័ស (Express)" : "ដឹកជញ្ជូនធម្មតា (Standard)" };
};

// ៤. Pure Function: គណនាពន្ធលើតម្លៃបន្ថែម (VAT)
const calculateVat = (taxableAmount, vatRate = 0.1) => {
  if (taxableAmount <= 0) return 0;
  return Number((taxableAmount * vatRate).toFixed(2));
};

// ៥. Function បម្លែងជារូបិយប័ណ្ណរៀល (KHR Currency Formatter)
const formatKhr = (usdAmount, exchangeRate = 4100) => {
  const khr = Math.round(usdAmount * exchangeRate);
  return khr.toLocaleString("km-KH") + " រៀល";
};

// ៦. Main Pipeline Function: បង្កើតវិក្កយបត្រពេញលេញ
function generateInvoice(order) {
  if (!order || !Array.isArray(order.items) || order.items.length === 0) {
    return { success: false, error: "❌ បញ្ជាទិញត្រូវតែមានទំនិញយ៉ាងហោចណាស់ ១ មុខ!" };
  }

  let subtotal = 0;
  const processedItems = [];

  for (const item of order.items) {
    const lineTotal = calculateLineItemTotal(item.price, item.qty);
    subtotal += lineTotal;
    processedItems.push({
      id: item.id,
      name: item.name,
      price: item.price,
      qty: item.qty,
      total: lineTotal
    });
  }

  // គណនា Discount
  const discountInfo = applyCouponDiscount(subtotal, order.couponCode);
  const discountedSubtotal = Math.max(0, subtotal - discountInfo.discountAmount);

  // គណនា Shipping
  const shippingInfo = calculateShipping(discountedSubtotal, order.location, order.isExpress);

  // គណនា VAT 10%
  const vatAmount = calculateVat(discountedSubtotal, 0.1);

  // តម្លៃទូទាត់ចុងក្រោយ
  const grandTotalUsd = Number((discountedSubtotal + vatAmount + shippingInfo.fee).toFixed(2));
  const grandTotalKhr = formatKhr(grandTotalUsd);

  return {
    success: true,
    invoiceId: "INV-" + Math.floor(100000 + Math.random() * 900000),
    customer: order.customerName || "ភ្ញៀវទូទៅ",
    items: processedItems,
    pricingBreakdown: {
      subtotalUsd: subtotal,
      discountCode: discountInfo.code,
      discountAmount: discountInfo.discountAmount,
      shippingFee: shippingInfo.fee,
      shippingNote: shippingInfo.note,
      vatAmount: vatAmount,
      grandTotalUsd: grandTotalUsd,
      grandTotalKhr: grandTotalKhr
    }
  };
}

// ករណីតេស្តសាកល្បង
const sampleOrder = {
  customerName: "កែវ ចរិយា",
  location: "province",
  isExpress: true,
  couponCode: "VIP20",
  items: [
    { id: 1, name: "Mechanical Keyboard", price: 45.00, qty: 1 },
    { id: 2, name: "Wireless Mouse", price: 18.50, qty: 2 }
  ]
};

console.log("=== លទ្ធផលនៃការបង្កើតវិក្កយបត្រ ===");
const invoice = generateInvoice(sampleOrder);
console.log(invoice);
`,
      files: [
        {
          filename: 'index.html',
          language: 'html',
          code: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <title>Smart Invoicing Engine - JavaScript Functions</title>
  <link rel="stylesheet" href="style.css">
  <link href="https://fonts.googleapis.com/css2?family=Kantumruy+Pro:wght@400;500;600;700&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet">
</head>
<body>
  <div class="app-container">
    <header class="app-header">
      <div class="logo-badge">JS5</div>
      <div>
        <h1>ប្រព័ន្ធគណនាវិក្កយបត្រឆ្លាតវៃ (Functions & Scope)</h1>
        <p>អនុវត្ត Modular Functions, Early Return Guard Clauses និង Pure Calculations</p>
      </div>
    </header>

    <div class="main-grid">
      <!-- ផ្នែកបញ្ជា និងកន្ត្រកទំនិញ -->
      <div class="card control-card">
        <h2>🛒 កន្ត្រកទំនិញ (Cart Items)</h2>
        <div class="item-selection">
          <label>ជ្រើសរើសទំនិញបន្ថែម៖</label>
          <div class="quick-add-buttons">
            <button type="button" class="btn btn-secondary" onclick="addItem('ក្ដារចុចមេកានិក (Keyboard)', 45.00)">+ Keyboard ($45)</button>
            <button type="button" class="btn btn-secondary" onclick="addItem('កណ្ដុរឥតខ្សែ (Mouse)', 18.50)">+ Mouse ($18.50)</button>
            <button type="button" class="btn btn-secondary" onclick="addItem('កាសកុំព្យូទ័រ (Headset)', 32.00)">+ Headset ($32)</button>
            <button type="button" class="btn btn-secondary" onclick="addItem('អេក្រង់ 24 អ៊ីញ (Monitor)', 125.00)">+ Monitor ($125)</button>
          </div>
        </div>

        <div class="table-container">
          <table class="cart-table">
            <thead>
              <tr>
                <th>មុខទំនិញ</th>
                <th>តម្លៃរាយ</th>
                <th>ចំនួន</th>
                <th>សរុប</th>
                <th>សកម្មភាព</th>
              </tr>
            </thead>
            <tbody id="cartTableBody">
              <!-- Render by JS -->
            </tbody>
          </table>
        </div>

        <div class="order-settings">
          <div class="input-group">
            <label for="customerName">ឈ្មោះអតិថិជន (Default Parameter)</label>
            <input type="text" id="customerName" value="កែវ ចរិយា" placeholder="ឈ្មោះភ្ញៀវ...">
          </div>
          <div class="input-group">
            <label for="couponInput">កូដ Voucher (សាកល្បង: DISCOUNT10, VIP20)</label>
            <input type="text" id="couponInput" value="VIP20" placeholder="បញ្ចូលកូដ...">
          </div>
          <div class="input-group">
            <label for="locationSelect">ទីតាំងដឹកជញ្ជូន</label>
            <select id="locationSelect">
              <option value="phnom-penh">រាជធានីភ្នំពេញ ($1.50)</option>
              <option value="province" selected>តាមបណ្តាខេត្ត ($2.50)</option>
            </select>
          </div>
          <div class="checkbox-group">
            <label>
              <input type="checkbox" id="expressDelivery" checked>
              <span>សេវាដឹកជញ្ជូនរហ័សទាន់ចិត្ត (Express +$2.00)</span>
            </label>
          </div>
        </div>

        <div class="action-buttons">
          <button type="button" class="btn btn-primary" onclick="processOrder()">
            ⚡ ដំណើរការគណនាវិក្កយបត្រ (Run Pipeline)
          </button>
          <button type="button" class="btn btn-outline" onclick="clearCart()">
            🔄 សម្អាតកន្ត្រក
          </button>
        </div>
      </div>

      <!-- ផ្នែកបង្ហាញវិក្កយបត្រ (Invoice Preview) -->
      <div class="card invoice-card">
        <h2>🧾 វិក្កយបត្រអេឡិចត្រូនិច (Generated Invoice)</h2>
        <div id="invoiceContainer" class="invoice-paper">
          <div class="invoice-empty">
            ចុចប៊ូតុង "ដំណើរការគណនាវិក្កយបត្រ" ដើម្បីមើលលទ្ធផល...
          </div>
        </div>

        <!-- Virtual Console Logs -->
        <div class="console-box">
          <div class="console-header">
            <span>Terminal Output (Function Pipeline Logs)</span>
            <button type="button" class="btn-text" onclick="clearLogs()">Clear</button>
          </div>
          <div id="consoleLogs" class="console-logs"></div>
        </div>
      </div>
    </div>
  </div>

  <script src="app.js"></script>
</body>
</html>`
        },
        {
          filename: 'style.css',
          language: 'css',
          code: `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Kantumruy Pro', sans-serif;
  background-color: #0b1120;
  color: #f1f5f9;
  padding: 24px 16px;
  line-height: 1.6;
}

.app-container {
  max-w: 1200px;
  margin: 0 auto;
}

.app-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid #1e293b;
}

.logo-badge {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 18px;
  color: #ffffff;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}

.app-header h1 {
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
}

.app-header p {
  font-size: 13px;
  color: #94a3b8;
}

.main-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}

@media (min-width: 1024px) {
  .main-grid {
    grid-template-columns: 1.1fr 0.9fr;
  }
}

.card {
  background: #0f172a;
  border: 1px solid #1e293b;
  border-radius: 16px;
  padding: 20px;
}

.card h2 {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 16px;
  color: #e2e8f0;
  display: flex;
  align-items: center;
  gap: 8px;
}

.quick-add-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 8px 0 16px;
}

.btn {
  padding: 8px 14px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  border: 1px solid transparent;
  transition: all 0.2s ease;
  font-family: inherit;
}

.btn-primary {
  background: #2563eb;
  color: #ffffff;
  box-shadow: 0 2px 8px rgba(37, 99, 235, 0.3);
}

.btn-primary:hover {
  background: #1d4ed8;
}

.btn-secondary {
  background: #1e293b;
  color: #cbd5e1;
  border-color: #334155;
}

.btn-secondary:hover {
  background: #334155;
  color: #ffffff;
}

.btn-outline {
  background: transparent;
  color: #94a3b8;
  border-color: #334155;
}

.btn-outline:hover {
  background: #1e293b;
  color: #f1f5f9;
}

.table-container {
  overflow-x: auto;
  margin-bottom: 16px;
  border: 1px solid #1e293b;
  border-radius: 8px;
}

.cart-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 12px;
  text-align: left;
}

.cart-table th {
  background: #1e293b;
  padding: 10px 12px;
  color: #94a3b8;
}

.cart-table td {
  padding: 10px 12px;
  border-top: 1px solid #1e293b;
  color: #cbd5e1;
}

.order-settings {
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  margin-bottom: 20px;
}

@media (min-width: 640px) {
  .order-settings {
    grid-template-columns: 1fr 1fr;
  }
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.input-group label {
  font-size: 11px;
  color: #94a3b8;
  font-weight: 500;
}

.input-group input,
.input-group select {
  background: #1e293b;
  border: 1px solid #334155;
  color: #ffffff;
  padding: 8px 10px;
  border-radius: 8px;
  font-size: 12px;
  outline: none;
  font-family: inherit;
}

.input-group input:focus,
.input-group select:focus {
  border-color: #3b82f6;
}

.checkbox-group {
  grid-column: 1 / -1;
  font-size: 12px;
  color: #cbd5e1;
  display: flex;
  align-items: center;
  gap: 8px;
}

.action-buttons {
  display: flex;
  gap: 10px;
}

.invoice-paper {
  background: #ffffff;
  color: #0f172a;
  border-radius: 12px;
  padding: 20px;
  font-size: 13px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  margin-bottom: 16px;
}

.invoice-empty {
  text-align: center;
  padding: 40px 10px;
  color: #64748b;
  font-style: italic;
}

.invoice-head {
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #e2e8f0;
  padding-bottom: 12px;
  margin-bottom: 12px;
}

.invoice-id {
  font-family: 'JetBrains Mono', monospace;
  font-weight: 700;
  color: #2563eb;
}

.invoice-rows {
  width: 100%;
  margin-bottom: 16px;
  border-collapse: collapse;
}

.invoice-rows th {
  text-align: left;
  padding: 6px 0;
  color: #64748b;
  font-size: 11px;
  border-bottom: 1px solid #cbd5e1;
}

.invoice-rows td {
  padding: 8px 0;
  border-bottom: 1px solid #f1f5f9;
}

.invoice-summary {
  border-top: 2px dashed #cbd5e1;
  padding-top: 12px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 12px;
}

.summary-row {
  display: flex;
  justify-content: space-between;
}

.summary-row.total {
  font-size: 15px;
  font-weight: 700;
  color: #0f172a;
  border-top: 1px solid #cbd5e1;
  padding-top: 8px;
  margin-top: 4px;
}

.khr-amount {
  color: #16a34a;
  font-weight: 600;
  font-size: 13px;
}

.console-box {
  background: #060913;
  border: 1px solid #1e293b;
  border-radius: 10px;
  overflow: hidden;
}

.console-header {
  background: #0d1527;
  padding: 8px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 11px;
  color: #94a3b8;
  font-family: 'JetBrains Mono', monospace;
}

.btn-text {
  background: none;
  border: none;
  color: #60a5fa;
  font-size: 10px;
  cursor: pointer;
}

.console-logs {
  padding: 12px;
  height: 140px;
  overflow-y: auto;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  color: #38bdf8;
  display: flex;
  flex-direction: column;
  gap: 4px;
}`
        },
        {
          filename: 'app.js',
          language: 'javascript',
          code: `// Initial Cart State
let cart = [
  { id: 1, name: "ក្ដារចុចមេកានិក (Keyboard)", price: 45.00, qty: 1 },
  { id: 2, name: "កណ្ដុរឥតខ្សែ (Mouse)", price: 18.50, qty: 2 }
];

// Logger Helper
function log(msg) {
  const container = document.getElementById("consoleLogs");
  if (!container) return;
  const line = document.createElement("div");
  const time = new Date().toLocaleTimeString();
  line.textContent = \`[\${time}] \${msg}\`;
  container.appendChild(line);
  container.scrollTop = container.scrollHeight;
}

function clearLogs() {
  const container = document.getElementById("consoleLogs");
  if (container) container.innerHTML = "";
}

// ----------------------------------------------------
// Core Functions (CLEAR Pedagogical Implementations)
// ----------------------------------------------------

// ១. Pure Arrow Function គណនាតម្លៃទំនិញ
const calculateLineTotal = (price, qty) => {
  return Number((price * qty).toFixed(2));
};

// ២. Guard Clause Function: ផ្ទៀងផ្ទាត់ និងគណនា Voucher
const evaluateCoupon = (subtotal, code) => {
  if (!code || code.trim() === "") {
    return { code: "គ្មាន", discount: 0, valid: false };
  }

  const clean = code.trim().toUpperCase();

  if (clean === "DISCOUNT10") {
    const amount = Number((subtotal * 0.1).toFixed(2));
    log(\`✅ អនុវត្ត Coupon DISCOUNT10 (បញ្ចុះ 10% = -$\${amount})\`);
    return { code: clean, discount: amount, valid: true, note: "បញ្ចុះ 10%" };
  }

  if (clean === "VIP20") {
    if (subtotal < 50) {
      log(\`⚠️ Coupon VIP20 ត្រូវការកុម្ម៉ង់យ៉ាងហោចណាស់ $50 ឡើង (បច្ចុប្បន្ន: $\${subtotal})\`);
      return { code: clean, discount: 0, valid: false, note: "មិនគ្រប់លក្ខខណ្ឌ ($50+)" };
    }
    const amount = Number((subtotal * 0.2).toFixed(2));
    log(\`🌟 អនុវត្ត Coupon VIP20 (បញ្ចុះ 20% = -$\${amount})\`);
    return { code: clean, discount: amount, valid: true, note: "បញ្ចុះ 20%" };
  }

  log(\`❌ កូដ Voucher "\${clean}" មិនត្រឹមត្រូវឡើយ\`);
  return { code: clean, discount: 0, valid: false, note: "កូដមិនត្រឹមត្រូវ" };
};

// ៣. Function ជាមួយ Default Parameters: គណនាដឹកជញ្ជូន
const computeShipping = (subtotal, location = "phnom-penh", isExpress = false) => {
  if (subtotal >= 100 && !isExpress) {
    log("🚚 Free Shipping សម្រាប់ការទិញលើសពី $100");
    return { fee: 0, label: "ឥតគិតថ្លៃ (Free Shipping)" };
  }

  let base = location === "province" ? 2.50 : 1.50;
  if (isExpress) base += 2.00;

  const type = isExpress ? "ដឹកបន្ទាន់ (Express)" : "ធម្មតា (Standard)";
  log(\`📍 ថ្លៃដឹកជញ្ជូន [\${location} | \${type}]: $\${base.toFixed(2)}\`);
  return { fee: base, label: \`$\${base.toFixed(2)} (\${type})\` };
};

// ៤. Pure Function: គណនាពន្ធ VAT 10%
const computeVat = (taxableAmount, rate = 0.1) => {
  return Number((taxableAmount * rate).toFixed(2));
};

// ៥. Function Format ប្រាក់រៀល
const toKhrString = (usd, rate = 4100) => {
  const khr = Math.round(usd * rate);
  return khr.toLocaleString("km-KH") + " ៛";
};

// ----------------------------------------------------
// UI Render & Event Handlers
// ----------------------------------------------------

function renderCartTable() {
  const tbody = document.getElementById("cartTableBody");
  if (!tbody) return;
  tbody.innerHTML = "";

  if (cart.length === 0) {
    tbody.innerHTML = '<tr><td colspan="5" style="text-align:center;color:#64748b;padding:20px;">កន្ត្រកទំនិញទទេ</td></tr>';
    return;
  }

  cart.forEach((item, index) => {
    const tr = document.createElement("tr");
    const total = calculateLineTotal(item.price, item.qty);
    tr.innerHTML = \`
      <td><strong>\${item.name}</strong></td>
      <td>$\${item.price.toFixed(2)}</td>
      <td>
        <input type="number" min="1" max="99" value="\${item.qty}" 
          style="width:50px;background:#090d16;border:1px solid #334155;color:#fff;padding:2px 6px;border-radius:4px;"
          onchange="updateQty(\${index}, this.value)">
      </td>
      <td>$\${total.toFixed(2)}</td>
      <td>
        <button type="button" class="btn-text" style="color:#ef4444;" onclick="removeItem(\${index})">លុប</button>
      </td>
    \`;
    tbody.appendChild(tr);
  });
}

function addItem(name, price) {
  const existing = cart.find(i => i.name === name);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: Date.now(), name, price, qty: 1 });
  }
  log(\`➕ បានបន្ថែមទំនិញ: \${name} ($\${price})\`);
  renderCartTable();
}

function updateQty(index, newQty) {
  const parsed = parseInt(newQty);
  if (parsed > 0) {
    cart[index].qty = parsed;
    renderCartTable();
  }
}

function removeItem(index) {
  const removed = cart.splice(index, 1)[0];
  log(\`🗑️ បានលុបទំនិញ: \${removed.name}\`);
  renderCartTable();
}

function clearCart() {
  cart = [];
  renderCartTable();
  const invoiceContainer = document.getElementById("invoiceContainer");
  if (invoiceContainer) {
    invoiceContainer.innerHTML = '<div class="invoice-empty">កន្ត្រកទំនិញទទេ មិនទាន់មានវិក្កយបត្រឡើយ...</div>';
  }
  log("🔄 បានសម្អាតកន្ត្រកទំនិញ");
}

function processOrder() {
  if (cart.length === 0) {
    alert("សូមបន្ថែមទំនិញចូលក្នុងកន្ត្រកជាមុនសិន!");
    return;
  }

  const customer = document.getElementById("customerName").value || "ភ្ញៀវទូទៅ";
  const coupon = document.getElementById("couponInput").value;
  const location = document.getElementById("locationSelect").value;
  const isExpress = document.getElementById("expressDelivery").checked;

  log(\`🚀 ចាប់ផ្តើមដំណើរការ Invoicing Pipeline សម្រាប់: \${customer}\`);

  // Pipeline Execution
  let subtotal = 0;
  cart.forEach(item => {
    subtotal += calculateLineTotal(item.price, item.qty);
  });

  const couponRes = evaluateCoupon(subtotal, coupon);
  const discounted = Math.max(0, subtotal - couponRes.discount);
  const shippingRes = computeShipping(discounted, location, isExpress);
  const vat = computeVat(discounted, 0.1);
  const grandTotal = Number((discounted + shippingRes.fee + vat).toFixed(2));
  const grandTotalKhr = toKhrString(grandTotal);

  log(\`💰 គណនាជោគជ័យ! តម្លៃចុងក្រោយ: $\${grandTotal} (\${grandTotalKhr})\`);

  // Render Invoice Card
  const container = document.getElementById("invoiceContainer");
  const invoiceNum = "INV-" + Math.floor(100000 + Math.random() * 900000);
  const today = new Date().toLocaleDateString("km-KH");

  let itemsHtml = "";
  cart.forEach(item => {
    const lineTotal = calculateLineTotal(item.price, item.qty);
    itemsHtml += \`
      <tr>
        <td>\${item.name}</td>
        <td>$\${item.price.toFixed(2)}</td>
        <td>\${item.qty}</td>
        <td style="text-align:right;">$\${lineTotal.toFixed(2)}</td>
      </tr>
    \`;
  });

  container.innerHTML = \`
    <div class="invoice-head">
      <div>
        <div class="invoice-id">\${invoiceNum}</div>
        <div style="font-size:11px;color:#64748b;">កាលបរិច្ឆេទ: \${today}</div>
      </div>
      <div style="text-align:right;">
        <div style="font-weight:700;">អតិថិជន: \${customer}</div>
        <div style="font-size:11px;color:#64748b;">ទីតាំង: \${location === 'province' ? 'តាមខេត្ត' : 'ភ្នំពេញ'}</div>
      </div>
    </div>

    <table class="invoice-rows">
      <thead>
        <tr>
          <th>មុខទំនិញ</th>
          <th>តម្លៃ</th>
          <th>ចំនួន</th>
          <th style="text-align:right;">សរុប</th>
        </tr>
      </thead>
      <tbody>
        \${itemsHtml}
      </tbody>
    </table>

    <div class="invoice-summary">
      <div class="summary-row">
        <span>សរុបទំនិញ (Subtotal):</span>
        <span>$\${subtotal.toFixed(2)}</span>
      </div>
      <div class="summary-row" style="color:\${couponRes.discount > 0 ? '#16a34a' : '#64748b'};">
        <span>បញ្ចុះតម្លៃ Voucher (\${couponRes.code}):</span>
        <span>-$\${couponRes.discount.toFixed(2)}</span>
      </div>
      <div class="summary-row">
        <span>ថ្លៃដឹកជញ្ជូន (\${shippingRes.label}):</span>
        <span>$\${shippingRes.fee.toFixed(2)}</span>
      </div>
      <div class="summary-row">
        <span>ពន្ធអាករលើតម្លៃបន្ថែម (VAT 10%):</span>
        <span>$\${vat.toFixed(2)}</span>
      </div>
      <div class="summary-row total">
        <span>ទឹកប្រាក់ទូទាត់សរុប (USD):</span>
        <span>$\${grandTotal.toFixed(2)}</span>
      </div>
      <div class="summary-row">
        <span style="font-size:11px;color:#64748b;">គិតជាប្រាក់រៀល (អត្រា ៤,១០០៛):</span>
        <span class="khr-amount">\${grandTotalKhr}</span>
      </div>
    </div>
  \`;
}

// First Render
renderCartTable();
log("ប្រព័ន្ធ Invoicing Engine ត្រៀមរួចរាល់សម្រាប់ការគណនា!");
`
        }
      ],
      expectedOutput: 'កម្មវិធីដំណើរការគណនាវិក្កយបត្រអេឡិចត្រូនិចយ៉ាងត្រឹមត្រូវ បង្ហាញតម្លៃទំនិញនីមួយៗ តម្លៃបញ្ចុះតាម Voucher (DISCOUNT10 ឬ VIP20), ថ្លៃដឹកជញ្ជូន, ពន្ធ VAT 10% និងតម្លៃសរុបទាំង USD និងប្រាក់រៀល KHR ព្រមទាំងបង្ហាញ Pipeline Console Logs យ៉ាងលម្អិត។'
    },
    commonMistakes: [
      {
        mistake: 'ភ្លេចសរសេរពាក្យគន្លឹះ return ក្នុង Function (The Undefined Return Trap)',
        cause: 'ពេលដែល function គណនារួច តែមិនបាន return តម្លៃចេញក្រៅ នោះតម្លៃដែលអថេរខាងក្រៅទទួលបាននឹងក្លាយជា undefined ដោយស្វ័យប្រវត្តិ។',
        wrongCode: `function calculateTax(price, rate) {
  const tax = price * rate;
  // ភ្លេច return tax;
}
const result = calculateTax(100, 0.1);
console.log(result); // undefined`,
        fixedCode: `function calculateTax(price, rate) {
  const tax = price * rate;
  return tax; // ✅ ប្រគល់លទ្ធផលត្រឡប់មកវិញ
}
const result = calculateTax(100, 0.1);
console.log(result); // 10`,
        fix: 'ត្រូវប្រាកដថាបានសរសេរ `return` នៅពេលដែលអ្នកចង់ឱ្យ Function ផ្តល់លទ្ធផលមកកាន់អ្នកហៅ។ ករណី Arrow function បើប្រើ `{}` ត្រូវតែមាន `return`។'
      },
      {
        mistake: 'ការច្រឡំរវាង Parameters (អថេរក្នុងទម្រង់) និង Arguments (តម្លៃពិតពេលហៅ)',
        cause: 'ការហៅ function ដោយមិនបានបញ្ជូន arguments តាមលំដាប់លំដោយ ឬសន្មតថាឈ្មោះ parameter ត្រូវតែដូចឈ្មោះអថេរខាងក្រៅ។',
        wrongCode: `function createUser(name, age, role) {
  return \`\${name} (\${age}) - \${role}\`;
}
// បញ្ជូនខុសលំដាប់លំដោយ
createUser("Admin", "សុខា", 25); 
// លទ្ធផល: "Admin (សុខា) - 25" (ខុសអត្ថន័យ)`,
        fixedCode: `// បញ្ជូនតាមលំដាប់ឱ្យត្រូវគ្នា
createUser("សុខា", 25, "Admin");
// ឬប្រើ Object Destructuring កាលណាមាន Parameters ច្រើន:
function createUserObj({ name, age, role = "User" }) {
  return \`\${name} (\${age}) - \${role}\`;
}
createUserObj({ age: 25, name: "សុខា", role: "Admin" });`,
        fix: 'ផ្ទៀងផ្ទាត់លំដាប់នៃ Parameters និង Arguments ឬប្រើប្រាស់ Object Destructuring សម្រាប់ Parameters ចាប់ពី ៣ ឡើង។'
      },
      {
        mistake: 'ការបង្កើត Side Effects ដោយកែប្រែតម្លៃអថេរ Global ឬ Outer Object ដោយចៃដន្យ',
        cause: 'ការកែប្រែ Properties លើ Object ឬ Array ដែលបញ្ជូនមកជា Argument ធ្វើឱ្យទិន្នន័យដើមនៅក្រៅ Function ខូចទ្រង់ទ្រាយ (Mutating Original Data)។',
        wrongCode: `const originalCart = [{ name: "Shirt", price: 20 }];

function applySale(cartItems) {
  // កែប្រែ array ដើមផ្ទាល់
  cartItems[0].price = 10; 
  return cartItems;
}
applySale(originalCart);
console.log(originalCart[0].price); // 10 (ទិន្នន័យដើមត្រូវបានកែប្រែដោយចៃដន្យ)`,
        fixedCode: `const originalCart = [{ name: "Shirt", price: 20 }];

// សរសេរជា Pure Function ដោយបង្កើត Array ថ្មី
function applySale(cartItems) {
  return cartItems.map(item => ({
    ...item,
    price: item.price * 0.5
  }));
}
const discountedCart = applySale(originalCart);
console.log(originalCart[0].price); // 20 (ទិន្នន័យដើមនៅដដែល)`,
        fix: 'សរសេរ Function ឱ្យក្លាយជា Pure Function ដោយប្រើ Object/Array Spread (`...`) ឬ Method ណាដែលបង្កើតទិន្នន័យថ្មី មិនប៉ះពាល់ទិន្នន័យដើម។'
      },
      {
        mistake: 'ការសរសេរកូដនៅក្រោមពាក្យគន្លឹះ return (Unreachable Code)',
        cause: 'ពាក្យគន្លឹះ `return` បញ្ឈប់ការងាររបស់ function ភ្លាមៗ ដូច្នេះកូដណាដែលស្ថិតនៅក្រោមវានឹងមិនត្រូវបានដំណើរការឡើយ។',
        wrongCode: `function getStatus(score) {
  return score >= 50 ? "ជាប់" : "ធ្លាក់";
  console.log("ការគណនាបានបញ្ចប់"); // ❌ Unreachable code (មិនដំណើរការឡើយ)
}`,
        fixedCode: `function getStatus(score) {
  const status = score >= 50 ? "ជាប់" : "ធ្លាក់";
  console.log("ការគណនាបានបញ្ចប់"); // ✅ ដាក់មុន return
  return status;
}`,
        fix: 'ដាក់រាល់កូដសំអាត ឬ Console logs ឱ្យនៅខាងលើ `return` ជានិច្ច។'
      }
    ],
    exercises: [
      {
        level: 'មូលដ្ឋាន (Basic)',
        prompt: `**កិច្ចការ៖ បង្កើតប័ណ្ណស្វាគមន៍អ្នកប្រើប្រាស់ (User Welcome Badge Generator)**
ចូរសរសេរ Arrow Function មួយឈ្មោះថា \`createWelcomeBadge(username, role = "សមាជិកទូទៅ", isVip = false)\` ដោយអនុវត្ត៖
១. ប្រសិនបើ \`username\` គ្មានតម្លៃ ឬជា string ទទេ ត្រូវ return: \`"សូមស្វាគមន៍ភ្ញៀវកិត្តិយស!"\`
២. ប្រសិនបើ \`isVip\` ជា true ត្រូវបន្ថែម Emoji 👑 នៅពីមុខឈ្មោះ
៣. បង្កើតសារក្នុងទម្រង់ Template Literal: \`"🎉 [Badge] ឈ្មោះ (តួនាទី)"\``,
        solutionCode: `const createWelcomeBadge = (username, role = "សមាជិកទូទៅ", isVip = false) => {
  // Early Return បើគ្មាន username
  if (!username || username.trim() === "") {
    return "សូមស្វាគមន៍ភ្ញៀវកិត្តិយស!";
  }

  const cleanName = username.trim();
  const vipIcon = isVip ? "👑 " : "";

  return \`🎉 \${vipIcon}\${cleanName} (\${role})\`;
};

// ករណីតេស្តសាកល្បង
console.log(createWelcomeBadge()); // "សូមស្វាគមន៍ភ្ញៀវកិត្តិយស!"
console.log(createWelcomeBadge("សុខ គង់")); // "🎉 សុខ គង់ (សមាជិកទូទៅ)"
console.log(createWelcomeBadge("ចាន់ណា", "ប្រធានក្រុម", true)); // "🎉 👑 ចាន់ណា (ប្រធានក្រុម)"`,
        explanation: 'លំហាត់នេះពង្រឹងការប្រើប្រាស់ Arrow Functions, Default Parameters, Ternary Operator និង Early Return យ៉ាងសង្ខេបស្អាត។'
      },
      {
        level: 'មធ្យម (Intermediate)',
        prompt: `**កិច្ចការ៖ គណនាពិន្ទុ និងនិទ្ទេសសិស្សជាមួយ Guard Clauses (Student Grade Calculator)**
ចូរសរសេរ Function ឈ្មោះ \`calculateFinalGrade(scores, attendancePercent = 100)\` ដោយអនុវត្ត៖
១. ប្រើ **Guard Clauses (Early Return)**៖
   - ប្រសិនបើ \`scores\` មិនមែនជា Array ឬគ្មានធាតុ ត្រូវ return: \`{ valid: false, error: "ទិន្នន័យពិន្ទុមិនត្រឹមត្រូវ" }\`
   - ប្រសិនបើ \`attendancePercent < 70\` ត្រូវ return: \`{ valid: true, average: 0, grade: "F", status: "ធ្លាក់ដោយសារអវត្តមានច្រើន" }\`
២. គណនាមធ្យមភាគពិន្ទុ (\`average\`) ដោយបូកពិន្ទុទាំងអស់ចែកនឹងចំនួនមុខវិជ្ជា (កាត់ត្រឹម ១ ខ្ទង់ក្បៀស)។
៣. កំណត់និទ្ទេស (Grade)៖
   - >= 90: \`"A"\`
   - >= 80: \`"B"\`
   - >= 70: \`"C"\`
   - >= 60: \`"D"\`
   - >= 50: \`"E"\`
   - < 50: \`"F"\`
៤. Return Object លទ្ធផល៖ \`{ valid: true, average, grade, status }\` ដែល status បញ្ជាក់ថា "ជាប់" ឬ "ធ្លាក់"។`,
        solutionCode: `function calculateFinalGrade(scores, attendancePercent = 100) {
  // Guard Clause 1: ពិនិត្យ Array ពិន្ទុ
  if (!Array.isArray(scores) || scores.length === 0) {
    return { valid: false, error: "ទិន្នន័យពិន្ទុមិនត្រឹមត្រូវ" };
  }

  // Guard Clause 2: ពិនិត្យវត្តមាន
  if (attendancePercent < 70) {
    return {
      valid: true,
      average: 0,
      grade: "F",
      status: "ធ្លាក់ដោយសារអវត្តមានលើសកម្រិតកំណត់ (< 70%)"
    };
  }

  // គណនាមធ្យមភាគ
  let sum = 0;
  for (const s of scores) {
    sum += s;
  }
  const avg = Number((sum / scores.length).toFixed(1));

  // កំណត់និទ្ទេសតាម Helper Logic
  let grade = "F";
  if (avg >= 90) grade = "A";
  else if (avg >= 80) grade = "B";
  else if (avg >= 70) grade = "C";
  else if (avg >= 60) grade = "D";
  else if (avg >= 50) grade = "E";

  const isPassed = avg >= 50;

  return {
    valid: true,
    average: avg,
    grade: grade,
    status: isPassed ? "ជាប់" : "ធ្លាក់"
  };
}

// ករណីតេស្ត
console.log(calculateFinalGrade([85, 92, 88, 95], 95));
// { valid: true, average: 90, grade: "A", status: "ជាប់" }

console.log(calculateFinalGrade([85, 90], 65));
// { valid: true, average: 0, grade: "F", status: "ធ្លាក់ដោយសារអវត្តមានលើសកម្រិតកំណត់ (< 70%)" }`,
        explanation: 'អនុវត្ត Guard Clauses ដើម្បីច្រោះករណីមិនប្រក្រតីនៅខាងលើ បង្ការកូដ If-Else ច្រើនជាន់ និងធានាថាការគណនាមិនរងផលប៉ះពាល់ពីទិន្នន័យអសកម្ម។'
      },
      {
        level: 'កម្រិតខ្ពស់ (Advanced)',
        prompt: `**កិច្ចការ៖ បង្កើត Custom Higher-Order Filtering & Formatting Pipeline**
ចូរសរសេរ Functions ដូចខាងក្រោម៖
១. \`createCurrencyFormatter(currencyCode, exchangeRate, symbol)\` (Function Factory / Closure)៖
   - បង្កើត និង return function មួយដែលទទួលយកចំនួនទឹកប្រាក់ USD រួចបម្លែង និង format ជា String ស្អាត។
២. \`filterAndTransform(items, filterCallback, transformCallback)\` (Higher-Order Function)៖
   - ទទួល Array នៃទំនិញ \`items\`
   - ប្រើ \`filterCallback\` ដើម្បីច្រោះយកតែទំនិញណាដែលផ្តល់តម្លៃ \`true\`
   - ប្រើ \`transformCallback\` ដើម្បីកែប្រែទម្រង់នៃទំនិញដែលបានច្រោះរួច
   - Return Array លទ្ធផលថ្មីដោយមិនកែប្រែទិន្នន័យដើម (Pure Function)។`,
        solutionCode: `// ១. Function Factory បង្កើត Formatter
function createCurrencyFormatter(currencyCode, exchangeRate = 1, symbol = "$") {
  return function(amountInUsd) {
    const converted = amountInUsd * exchangeRate;
    if (currencyCode === "KHR") {
      return Math.round(converted).toLocaleString("km-KH") + " " + symbol;
    }
    return symbol + converted.toFixed(2);
  };
}

// ២. Custom Higher-Order Function
function filterAndTransform(items, filterCallback, transformCallback) {
  if (!Array.isArray(items)) return [];

  const results = [];
  for (const item of items) {
    if (filterCallback(item)) {
      results.push(transformCallback(item));
    }
  }
  return results;
}

// ករណីតេស្តសាកល្បង
const formatToKhr = createCurrencyFormatter("KHR", 4100, "៛");
const formatToEur = createCurrencyFormatter("EUR", 0.92, "€");

console.log("បម្លែង USD ទៅ KHR:", formatToKhr(50)); // "205,000 ៛"
console.log("បម្លែង USD ទៅ EUR:", formatToEur(50)); // "€46.00"

const products = [
  { id: 1, name: "Mouse", price: 15, inStock: true },
  { id: 2, name: "Keyboard", price: 65, inStock: false },
  { id: 3, name: "Webcam", price: 45, inStock: true },
  { id: 4, name: "Speaker", price: 80, inStock: true }
];

// ច្រោះយកតែទំនិញមានក្នុងស្តុក និងតម្លៃក្រោម $50 រួច format ឈ្មោះនិងតម្លៃ
const availableBudgetItems = filterAndTransform(
  products,
  p => p.inStock && p.price < 50,
  p => \`\${p.name}: \${formatToKhr(p.price)}\`
);

console.log("ទំនិញសមរម្យមានក្នុងស្តុក:", availableBudgetItems);
// ["Mouse: 61,500 ៛", "Webcam: 184,500 ៛"]`,
        explanation: 'បង្រៀនគំនិតស្នូលនៃ Functional Programming: Closures (Function Factory) និង Higher-Order Functions ជាមួយ Callback Functions ដែលជាគ្រឹះនៃ Modern Front-End Frameworks (React, Vue)។'
      },
      {
        level: 'ប្រកួតប្រជែង (Competitive)',
        prompt: `**កិច្ចការ៖ បង្កើត Functional Pipe Engine សម្រាប់ដំណើរការទិន្នន័យបញ្ជាទិញ (Order Processing Pipeline)**
នៅក្នុងប្រព័ន្ធស្មុគស្មាញ ទិន្នន័យត្រូវឆ្លងកាត់ដំណាក់កាលជាច្រើន (Pipeline) ដូចជា Validate -> Calculate -> Apply Discount -> Add Tax -> Finalize។
ចូរសរសេរ Function ឈ្មោះ \`createPipeline(...middlewareFunctions)\` ដែលអនុវត្ត៖
១. ទទួលយក Functions ជាច្រើនជា Parameters ដោយប្រើ Rest Parameters (\`...middlewareFunctions\`)។
២. Return Function ថ្មីមួយដែលទទួលយក \`initialInput\`។
៣. ដំណើរការ \`initialInput\` ឆ្លងកាត់ function នីមួយៗតាមលំដាប់លំដោយពីឆ្វេងទៅស្តាំ (Output នៃ function ទីមួយ ក្លាយជា Input នៃ function បន្ទាប់)។
៤. ប្រសិនបើនៅជំហានណាមួយ function ផ្តល់លទ្ធផល \`{ error: string }\` នោះ Pipeline ត្រូវបញ្ឈប់ជាបន្ទាន់ (Short-circuit) ហើយ return error នោះភ្លាម។`,
        solutionCode: `// Functional Pipeline Composer
function createPipeline(...middlewareFunctions) {
  return function(initialInput) {
    let currentData = initialInput;

    for (let i = 0; i < middlewareFunctions.length; i++) {
      const currentFn = middlewareFunctions[i];
      
      // បញ្ជូន currentData ទៅ function បន្ទាប់
      currentData = currentFn(currentData);

      // Early Exit ប្រសិនបើជួបប្រទះ Error
      if (currentData && typeof currentData === "object" && currentData.error) {
        return {
          failedAtStep: i + 1,
          error: currentData.error,
          lastData: currentData
        };
      }
    }

    return {
      success: true,
      result: currentData
    };
  };
}

// បណ្តុំ Middleware Functions
const stepValidate = order => {
  if (!order.items || order.items.length === 0) {
    return { error: "កន្ត្រកទំនិញទទេ!" };
  }
  return { ...order, status: "VALIDATED" };
};

const stepCalculateSubtotal = order => {
  let subtotal = 0;
  for (const item of order.items) {
    subtotal += item.price * item.qty;
  }
  return { ...order, subtotal, status: "SUBTOTAL_CALCULATED" };
};

const stepApplyVipDiscount = order => {
  let discount = 0;
  if (order.isVip) {
    discount = order.subtotal * 0.15; // 15% VIP
  }
  return { ...order, discount, totalAfterDiscount: order.subtotal - discount };
};

const stepFinalize = order => {
  const finalTotal = order.totalAfterDiscount + (order.totalAfterDiscount * 0.1); // +10% VAT
  return {
    orderId: "ORD-" + Math.floor(Math.random() * 10000),
    customer: order.customer,
    finalAmount: Number(finalTotal.toFixed(2)),
    completedAt: new Date().toISOString()
  };
};

// បង្កើត Pipeline
const checkoutPipeline = createPipeline(
  stepValidate,
  stepCalculateSubtotal,
  stepApplyVipDiscount,
  stepFinalize
);

// តេស្តករណីជោគជ័យ
const validOrder = {
  customer: "សុខ ចាន់",
  isVip: true,
  items: [{ price: 30, qty: 2 }, { price: 40, qty: 1 }]
};
console.log("លទ្ធផល Pipeline ជោគជ័យ:", checkoutPipeline(validOrder));

// តេស្តករណីបរាជ័យ (កន្ត្រកទទេ)
const invalidOrder = { customer: "ភ្ញៀវ", items: [] };
console.log("លទ្ធផល Pipeline បរាជ័យ:", checkoutPipeline(invalidOrder));`,
        explanation: 'លំហាត់កម្រិតប្រកួតប្រជែងនេះបង្រៀនពី Functional Composition Pattern ដែលជាស្ថាបត្យកម្មស្នូលនៃ Express.js Middlewares, Redux Middleware និង RxJS Pipelines ក្នុងវិស្វកម្មសូហ្វវែរពិតប្រាកដ។'
      }
    ],
    quiz: [
      {
        id: 1,
        question: 'តើអ្វីជាភាពខុសគ្នាសំខាន់បំផុតរវាង Function Declaration និង Function Expression ទាក់ទងនឹងយន្តការ Hoisting?',
        options: [
          'Function Expression ដំណើរការលឿនជាង ២ ដង',
          'Function Declaration ត្រូវបាន Hoist ទាំងស្រុង ដែលអនុញ្ញាតឱ្យហៅដំណើរការមុនបន្ទាត់ប្រកាសបាន រីឯ Function Expression មិនអាចហៅមុនបានឡើយ',
          'Function Declaration មិនអាចទទួល parameters បានទេ',
          'គ្មានអ្វីខុសគ្នាឡើយ គ្រាន់តែជាការចូលចិត្តរបស់អ្នកសរសេរកូដ'
        ],
        correctIndex: 1,
        explanation: 'JavaScript Engine លើក (Hoists) Function Declarations ទៅលើកំពូលនៃ Scope ពេល Compile ដូច្នេះអ្នកអាចហៅវាបានមុនបន្ទាត់ដែលបានសរសេរ។ ចំណែក Function Expression រក្សាទុកក្នុងអថេរ (const/let) ដូច្នេះបើហៅមុន វានឹងផ្តល់កំហុស ReferenceError ភ្លាម។'
      },
      {
        id: 2,
        question: 'ប្រសិនបើ Function មួយដំណើរការកូដគណនាចប់សព្វគ្រប់ ប៉ុន្តែពុំមានសរសេរពាក្យគន្លឹះ return ឬសរសេរ return; ទទេ តើតម្លៃដែលត្រឡប់មកក្រៅស្មើនឹងអ្វី?',
        options: [
          '0',
          'null',
          'undefined',
          'NaN'
        ],
        correctIndex: 2,
        explanation: 'តាមលំនាំដើមក្នុង JavaScript រាល់ Function ណាដែលគ្មាន return ឬ return គ្មានតម្លៃ តែងតែប្រគល់តម្លៃ undefined ត្រឡប់មកវិញជាស្វ័យប្រវត្តិ។'
      },
      {
        id: 3,
        question: 'តើ Rest Parameters (...args) មានអត្ថប្រយោជន៍អ្វីខ្លះ បើប្រៀបធៀបនឹង arguments object បុរាណ?',
        options: [
          'វាបង្កើត Array ពិតប្រាកដ ដែលអាចប្រើ Array methods ដូចជា map, filter, forEach បានភ្លាមៗ',
          'វាអាចប្រើបានក្នុង Arrow Functions',
          'វាអាចចាប់យកតែ parameters ដែលនៅសល់ចុងក្រោយបាន (Named parameters + Rest)',
          'គ្រប់ចំណុចទាំងអស់ខាងលើសុទ្ធតែត្រឹមត្រូវ'
        ],
        correctIndex: 3,
        explanation: 'Rest parameters (...args) គឺជា Real Array គាំទ្រ Arrow functions និងអាចបត់បែនចាប់យក arguments ដែលនៅសល់ពី parameters ធម្មតា ខុសពី arguments object ដែលជា Array-like object និងមិនដំណើរការលើ Arrow function។'
      },
      {
        id: 4,
        question: 'តើអ្វីទៅជាគោលការណ៍ Early Return Pattern (Guard Clauses) ហើយហេតុអ្វីបានជាគេនិយមប្រើវា?',
        options: [
          'ជាការ return កូដតាំងពីបន្ទាត់ទីមួយដោយមិនគិតលក្ខខណ្ឌអ្វីទាំងអស់',
          'ជាការពិនិត្យករណីកំហុស ឬករណីមិនត្រឹមត្រូវនៅផ្នែកខាងលើ រួច return ចេញភ្លាម ដើម្បីជៀសវាងការសរសេរ if-else ច្រើនជាន់',
          'ជាការប្រើប្រាស់ while loop ជំនួស function',
          'ជាការហាមឃាត់មិនឱ្យប្រើ return លើសពីម្តងក្នុង function មួយ'
        ],
        correctIndex: 1,
        explanation: 'Early Return Pattern ជួយពិនិត្យលក្ខខណ្ឌ Invalid/Edge cases នៅខាងលើបំផុតនៃ function (Guard clauses) រួចចាកចេញភ្លាម ធ្វើឱ្យកូដដែលនៅសល់ (Happy path) ត្រង់ ស្អាត និងងាយស្រួលអាន ដោយមិនបាច់ដាក់ nested if-else ច្រើនជាន់។'
      },
      {
        id: 5,
        question: 'តើអថេរដែលត្រូវបានប្រកាសដោយពាក្យគន្លឹះ let ឬ const នៅខាងក្នុងប្លុក { ... } នៃ If statement ឬ Loop មានវិសាលភាព (Scope) កម្រិតណា?',
        options: [
          'Global Scope (ប្រើបានគ្រប់ទីកន្លែងក្នុង File)',
          'Block Scope (ប្រើបានតែក្នុងដង្កៀប { ... } នោះប៉ុណ្ណោះ)',
          'Function Scope ដូចគ្នានឹង var ដែរ',
          'មិនមាន Scope ឡើយ'
        ],
        correctIndex: 1,
        explanation: 'let និង const មានវិសាលភាពជា Block Scope គឺពួកវាអាចមើលឃើញ និងប្រើប្រាស់បានតែក្នុងរង្វង់ដង្កៀប { ... } នៃប្លុកដែលបានប្រកាសប៉ុណ្ណោះ។ ផ្ទុយពី var ដែលជា Function Scope។'
      }
    ],
    summary: [
      'Function គឺជាបណ្តុំកូដដែលបង្កើតឡើងដើម្បីកាត់បន្ថយកូដស្ទួន (DRY Principle) បង្កើនភាពងាយស្រួលក្នុងការធ្វើតេស្ត និងការថែទាំកូដ',
      'Arrow Functions (ES6) ផ្តល់នូវ Syntax សង្ខេបស្អាត គាំទ្រ Implicit Return និងមិនមាន binding ផ្ទាល់ខ្លួនលើពាក្យ this ឡើយ',
      'ប្រើប្រាស់ Default Parameters ដើម្បីការពារបញ្ហា undefined និងប្រើ Rest Parameters (...args) ដើម្បីទទួល Arguments គ្មានដែនកំណត់ជា Array',
      'អនុវត្ត Early Return Pattern (Guard Clauses) ដើម្បីបញ្ចៀស Nested If-Else ធ្វើឱ្យលំហូរកូដត្រង់ និងងាយស្រួល Debug',
      'យល់ច្បាស់ពី Scope (Global, Function, Block Scope នៃ let/const) និងព្យាយាមសរសេរ Pure Functions ដើម្បីបញ្ចៀស Side Effects ក្នុងកម្មវិធី'
    ]
  },
  {
    id: 6,
    slug: 'arrays',
    titleKm: 'មេរៀនទី៦៖ ការប្រើប្រាស់ Arrays និង Objects',
    titleEn: 'Lesson 6: Working with Arrays, Objects & Data Structures',
    category: 'Data Structures',
    prerequisites: ['មេរៀនទី២ (Variables & Data Types)', 'មេរៀនទី៤ (Loops & Iteration)', 'មេរៀនទី៥ (Functions)'],
    learningOutcomes: [
      'យល់ច្បាស់ពីនិយមន័យ Array ជាបណ្តុំនៃទិន្នន័យដែលមានលក្ខណៈរួមគ្នា (ពណ៌, ខែ, ថ្ងៃ, លេខ, អក្សរ, Objects) ក្នុងអថេរតែមួយ',
      'ស្វែងយល់ពីការបែងចែក Array ជា ៣ ប្រភេទ៖ Empty Array, Specified number of items in Array, និង Specified items in Array',
      'ចេះបង្កើត Array តាមវិធីទាំងពីរ៖ Array Constructor (new Array()) និង Array Literal ([]) ដែលជា Best Practice ពេញនិយម',
      'យល់ដឹងពី Zero-based Indexing (ចាប់ផ្តើមពី [0], [1], ..., [length - 1]) និងការទាញយក/កែប្រែទិន្នន័យ',
      'ចេះប្រើប្រាស់ Array Methods សំខាន់ៗ៖ push() និង pop() សម្រាប់ចុង Array, shift() និង unshift() សម្រាប់ដើម Array',
      'ចេះប្រើប្រាស់ slice() (ជ្រើសរើសធាតុមិនកែប្រែ Array ដើម) និង splice() (លុប និងបន្ថែមធាតុនៅមជ្ឈមណ្ឌល ដោយមានឥទ្ធិពលលើ Array ដើម)',
      'ចេះអនុវត្តការ Loop / Iterate លើ Array ដោយប្រើ for...of, for...in, និង forEach()',
      'យល់ដឹងពី JavaScript Objects ការកំណត់ដោយ curly braces {} និងគូឈ្មោះ-តម្លៃ (name : value properties) ព្រមទាំង Dot (.) និង Bracket ([]) Notation',
      'បែងចែកភាពខុសគ្នារវាង undefined (អថេរគ្មានតម្លៃ) និង null (ការកំណត់ឱ្យទទេដោយចេតនា)',
      'យល់ដឹងពីការប្រកាសប្រភេទ Variables តាមរយៈ keyword "new" (new String, new Number, new Boolean, new Array, new Object) និងមូលហេតុដែលគួរចៀសវាង'
    ],
    scenario: 'ស្រមៃថាអ្នកកំពុងបង្កើតប្រព័ន្ធគ្រប់គ្រងបញ្ជីផលិតផល (E-Commerce Product Catalog) ឬយានដ្ឋានរថយន្ត។ ប្រសិនបើគ្មាន Array ទេ អ្នកនឹងត្រូវបង្កើតអថេរដាច់ដោយឡែករាប់រយដូចជា product1, product2, product3... ដែលធ្វើឱ្យកូដស្មុគស្មាញ និងមិនអាចរៀបចំជាលំដាប់បាន។ Array ផ្តល់នូវរចនាសម្ព័ន្ធផ្ទុកទិន្នន័យជាបញ្ជី (Ordered List) ដែលងាយស្រួលរាប់ ស្វែងរក តម្រៀប កែប្រែតាម Methods (push, pop, shift, unshift, slice, splice) និងធ្វើការរួមគ្នាជាមួយ Objects ដើម្បីរក្សាទុកព័ត៌មានយ៉ាងមានរបៀបរៀបរយ!',
    conceptsExplanation: `
### ១. អ្វីទៅជា Array និង String ក្នុង JavaScript?
• **Array** គឺជាបណ្តុំនៃទិន្នន័យដែលមានលក្ខណៈរួមគ្នា ដូចជា ពណ៌ ខែ ថ្ងៃ លេខ អក្សរ ឬ Objects ផ្សេងៗ។
• គេប្រើ Array ដើម្បីសម្រួលដល់ការផ្ទុកទិន្នន័យ និងការប្រើប្រាស់ Loop ដោយធាតុនីមួយៗរបស់ Array ត្រូវតំណាងឱ្យលេខ Index។
• **លេខ Index របស់ Array គឺចាប់ផ្តើមពីលេខ 0 ទៅជានិច្ច (Zero-based Indexing)**។

Arrays ក្នុង JavaScript គឺជារូបមន្ដមួយដ៏ពេញនិយមក្នុងការរក្សាបញ្ជីទិន្នន័យជាបន្តបន្ទាប់ (**Ordered list of data**) ដោយអាចមានប្រភេទធាតុផ្សេងៗគ្នាផងដែរ។ យើងអាចរក្សារបស់អ្វីៗជាច្រើនដូចជា លេខ អក្សរ Boolean ឬ Objects នៅក្នុងជួរដេកតែមួយ ហើយប្រើ Methods ឬ Iteration ដើម្បីត្រួតពិនិត្យ និងកែប្រែវាបានយ៉ាងងាយស្រួល។

---

### ២. ការបែងចែក និងការបង្កើត Array (៣ ប្រភេទធំៗ)
Array ត្រូវបានបែងចែកជាបីគឺ៖
1. **Empty Array (អារេទទេ)**
2. **Specified number of items in Array (អារេកំណត់ចំនួនធាតុជាក់លាក់ជាមុន)**
3. **Specified items in Array (អារេបញ្ចូលតម្លៃធាតុស្រាប់ពេលប្រកាស)**

#### ក. Empty Array (អារេទទេ)
ជាការបង្កើតនូវ Array មួយដែលមិនទាន់មានធាតុ។ គេអាចប្រើនូវ \`new Array()\` ឬ សញ្ញាដង្កៀបជ្រុង \`[ ]\`៖
\`\`\`javascript
var arrstd = new Array(); // Constructor syntax
var arrcolor = [];        // Literal syntax (ពេញនិយម)
var myCars = new Array();
\`\`\`

#### ខ. Specified number of items in Array (កំណត់ចំនួនធាតុជាស្រេច)
ដើម្បីបង្កើត Array ដែលមានចំនួនធាតុជាក់លាក់ជាស្រេច គេត្រូវបញ្ជាក់នូវចំនួនធាតុ \`new Array(n)\`៖
\`\`\`javascript
var arrstd = new Array(20); // បង្កើត Array ដែលមានប្រវែង 20 slots (Empty slots)
\`\`\`
*ចំណាំ៖ អាចប្រើបែប \`new Array(...)\` ដើម្បីបង្កើតក៏បាន តែភាគច្រើនអ្នកអភិវឌ្ឍន៍គេប្រើ **Literal Syntax \`[ ]\`** ឱ្យកាន់តែងាយស្រួល និងសុវត្ថិភាព។*

#### គ. Specified items in Array (បញ្ចូលតម្លៃធាតុភ្លាមៗពេលប្រកាស)
ជាការបញ្ចូលតម្លៃទៅក្នុង Array ពេលប្រកាសតែម្តង។ ដើម្បីធ្វើបែបនេះ យើងត្រូវដាក់ធាតុនីមួយៗជាបន្តបន្ទាប់គ្នាដោយខណ្ឌដោយសញ្ញាក្បៀស (\`,\`)៖
\`\`\`javascript
// ប្រើ Constructor new Array
var arrcolor = new Array("Blue", "Red", "Green");

// ប្រើ Array Literal [...] (ណែនាំបំផុត)
var arrWeekDay = ["Mon", "Thu", "Wed", "Tue", "Fri"];
const fruits = ["apple", "banana", "mango"];

console.log(fruits[0]); // "apple"
console.log(fruits[1]); // "banana"
\`\`\`

#### ឧទាហរណ៍ជាក់ស្តែង៖ បង្កើត Array នៃសៀវភៅ និងបង្ហាញលើ HTML តាម For-In Loop
\`\`\`javascript
var book = new Array(6);
book[0] = "War and Peace";
book[1] = "Huckleberry Finn";
book[2] = "The Return of the Native";

for (var i in book) {
  console.log("book[" + i + "] " + book[i]);
}
// បង្ហាញ៖
// book[0] War and Peace
// book[1] Huckleberry Finn
// book[2] The Return of the Native
\`\`\`

---

### ៣. ការរាប់ Index ក្នុង Array (Zero-based Indexing)
**Array indexes គឺចាប់ផ្តើមត្រង់ទីតាំងសូន្យ [0]** មានន័យថា៖
- ធាតុទីមួយ គឺគិតពីលេខ \`[0]\`
- ធាតុទីពីរ គឺគិតពីលេខ \`[1]\`
- ធាតុទីបី គឺគិតពីលេខ \`[2]\`
- និងមានជាបន្តបន្ទាប់ទៀតរហូតដល់ \`[length - 1]\`។

| Index | \`fruits[0]\` | \`fruits[1]\` | \`fruits[2]\` |
| :--- | :--- | :--- | :--- |
| **តម្លៃ (Value)** | \`"apple"\` | \`"banana"\` | \`"mango"\` |
| **លំដាប់ (Position)** | ធាតុទី ១ (First item) | ធាតុទី ២ (Second item) | ធាតុទី ៣ (Third item) |

---

### ៤. Array Methods សំខាន់ៗ (push, pop, shift, unshift, slice, splice)

#### ១) push() និង pop()
• **\`push(newElement)\`:** បន្ថែមធាតុថ្មីនៅ **ចុង Array** ហើយបង្វិលប្រវែងថ្មីនៃ Array។
• **\`pop()\`:** លុបធាតុ **ចុង Array** ចេញ ហើយបង្វិលធាតុដែលត្រូវបានលុបនោះមកវិញ។

\`\`\`javascript
const numbers = [10, 20, 30];
numbers.push(40); 
console.log(numbers); // [10, 20, 30, 40]

let popped = numbers.pop();
console.log(popped);  // 40
console.log(numbers); // [10, 20, 30]
\`\`\`

#### ២) shift() និង unshift()
• **\`shift()\`:** លុបធាតុពី **ដើម Array** ហើយត្រឡប់ធាតុដែលត្រូវបានលុបនោះមកវិញ។
• **\`unshift(newElement)\`:** បន្ថែមធាតុថ្មីនៅ **ដើម Array** ហើយបង្វិលប្រវែងថ្មីនៃ Array។

\`\`\`javascript
const queue = ["first", "second", "third"];

let firstItem = queue.shift();
console.log(firstItem); // "first"
console.log(queue);     // ["second", "third"]

queue.unshift("zero");
console.log(queue);     // ["zero", "second", "third"]
\`\`\`

#### ៣) slice() និង splice() (ការកាត់ និងការវះកាត់ Array)
• **\`slice(start, end)\`:**
  - ជ្រើសរើសធាតុពីខាងក្នុង Array តាម Index \`start\` រហូតដល់មុន \`end\` (មិនរួមបញ្ចូល \`end\` ឡើយ)។
  - ប្រសិនបើគ្មាន \`end\` គឺវាយកដល់ចុង Array ទាំងមូល។
  - **ចំណុចពិសេស៖** វាមិនប៉ះពាល់ ឬកែប្រែ Array ដើមទេ គឺវាបង្កើត Array ថ្មីមួយដាច់ដោយឡែក។

\`\`\`javascript
const letters = ["a", "b", "c", "d", "e"];
let slicePart = letters.slice(1, 3);
console.log(slicePart); // ["b", "c"]
console.log(letters);   // ["a", "b", "c", "d", "e"] (មិនបានផ្លាស់ប្តូរទេ)
\`\`\`

• **\`splice(startIndex, deleteCount, itemsToAdd...)\`:**
  - លុប ឬបន្ថែមធាតុទៅក្នុង Array ពីចំណុចកណ្តាល ឬដើម ដោយកំណត់ \`deleteCount\` ថាតើត្រូវលុបប៉ុន្មានធាតុ និងបន្ថែមធាតុថ្មីអ្វីខ្លះចូល។
  - **ចំណុចពិសេស៖** **វាមានឥទ្ធិពល និងកែប្រែផ្ទាល់លើ Array ដើម (Mutates Original Array)!**

\`\`\`javascript
const animals = ["cat", "dog", "bird", "fish"];

// នៅត្រង់ index=2 លុប 0 ធាតុ រួចបន្ថែម "lion" ចូល
animals.splice(2, 0, "lion");
console.log(animals); 
// ["cat", "dog", "lion", "bird", "fish"]

// លុបពី index=1 ចំនួន 2 ធាតុ ("dog", "lion") ចេញ
animals.splice(1, 2);
console.log(animals); 
// ["cat", "bird", "fish"]
\`\`\`

---

### ៥. JavaScript Objects (វត្ថុក្នុង JavaScript)
**Objects** ត្រូវបានកំណត់ដោយសញ្ញាដង្កៀប **curly braces \`{ }\`**។

នៅក្នុង braces, object គឺជា **properties** ដែលត្រូវបានកំណត់ជាគូគឺ **ឈ្មោះ ហើយនឹងតម្លៃ (\`name : value\`)** ឬហៅថា **Key-Value pairs**។ Properties នីមួយៗត្រូវបានបែងចែកដោយសញ្ញាក្បៀស **commas (\`,\`)**៖
\`\`\`javascript
var person = {
  firstname: "John",
  lastname: "Doe",
  id: 5566
};
\`\`\`

#### ការចូលប្រើប្រាស់ Object Properties (២ របៀប)៖
1. **Dot Notation (\`.\`):** \`name = person.lastname;\` (ផ្ដល់ \`"Doe"\`)
2. **Bracket Notation (\`[ ]\`):** \`name = person["lastname"];\` (ផ្ដល់ \`"Doe"\`)

---

### ៦. ភាពខុសគ្នារវាង Undefined និង Null
1. **Undefined:** Variable មិនទាន់មានតម្លៃទេ (ត្រូវបានប្រកាស ប៉ុន្តែមិនទាន់ត្រូវបានកំណត់ ឬផ្ដល់តម្លៃឱ្យនៅឡើយ)។ ឧ. \`var car; // car === undefined\`
2. **Null:** Variable អាចត្រូវបានកំណត់តម្លៃឱ្យ "ទទេ" ឬ "គ្មានអ្វីសោះ" **ដោយចេតនារបស់អ្នកសរសេរកូដ** (Intentional absence of value)។ ឧ. \`person = null;\`
3. **ការប្រៀបធៀប៖** \`undefined == null\` គឺ \`true\` (តម្លៃសមមូល) តែ \`undefined === null\` គឺ \`false\` (ប្រភេទទិន្នន័យខុសគ្នា)។

---

### ៧. ការប្រកាសប្រភេទ Variables ដោយប្រើ Keyword \`"new"\`
នៅពេលប្រកាស Variable ថ្មី គេអាចប្រើ Keyword \`new\` ដូចជា \`new String()\`, \`new Number()\`, \`new Boolean()\`, \`new Array()\`, \`new Object()\`។
ទោះជាយ៉ាងណា **គួរចៀសវាងការប្រើ \`new String()\`, \`new Number()\`** ព្រោះវាបង្កើត Object Wrapper ធ្វើឱ្យដំណើរការយឺត និងនាំឱ្យ \`=== \` ផ្ដល់ false។ គួរងាកមកប្រើ **Literal Syntax** ជានិច្ច!
    `,
    syntaxExamples: [
      {
        title: '១. ការបង្កើត Array ទាំង ៣ ប្រភេទ (Empty, Specified Size, Specified Items)',
        description: 'ការប្រកាស Array តាម new Array() និង Array Literal [...] ព្រមទាំងការទាញយកតាម Index',
        code: `// ១. Empty Array
var arrstd = new Array();
var arrcolor = []; // ពេញនិយម
console.log("Empty Array:", arrcolor);

// ២. Specified number of items in Array
var arrSize = new Array(5); // បង្កើត Array មាន 5 slots ទទេ
console.log("Array with 5 empty slots, length:", arrSize.length);

// ៣. Specified items in Array
var arrColorItems = new Array("Blue", "Red", "Green");
var arrWeekDay = ["Mon", "Thu", "Wed", "Tue", "Fri"];
const fruits = ["apple", "banana", "mango"];

console.log("Fruits [0]:", fruits[0]); // "apple"
console.log("Fruits [1]:", fruits[1]); // "banana"
console.log("ចំនួនផ្លែឈើសរុប:", fruits.length); // 3

// ឧទាហរណ៍សៀវភៅ book array
var book = new Array(6);
book[0] = "War and Peace";
book[1] = "Huckleberry Finn";
book[2] = "The Return of the Native";

for (var i in book) {
  console.log("book[" + i + "] " + book[i]);
}`
      },
      {
        title: '២. Array Methods គ្រប់គ្រងចុង និងដើម (push, pop, shift, unshift)',
        description: 'push/pop សម្រាប់ចុង Array និង shift/unshift សម្រាប់ដើម Array',
        code: `// push() និង pop()
const numbers = [10, 20, 30];
numbers.push(40);
console.log("ក្រោយពេល push(40):", numbers); // [10, 20, 30, 40]

let popped = numbers.pop();
console.log("ធាតុដែល pop() ដកចេញ:", popped); // 40
console.log("Array ក្រោយ pop():", numbers);   // [10, 20, 30]

// shift() និង unshift()
const queue = ["first", "second", "third"];
let firstItem = queue.shift();
console.log("ធាតុដែល shift() ដកចេញពីដើម:", firstItem); // "first"
console.log("Queue ក្រោយ shift():", queue);            // ["second", "third"]

queue.unshift("zero");
console.log("Queue ក្រោយ unshift('zero'):", queue);    // ["zero", "second", "third"]`
      },
      {
        title: '៣. Array Methods កម្រិតខ្ពស់ (slice vs splice)',
        description: 'slice មិនប៉ះពាល់ Array ដើម ចំណែក splice លុប/បន្ថែម និងកែប្រែលើ Array ដើមផ្ទាល់',
        code: `// slice(start, end) -> មិនកែប្រែ Array ដើម
const letters = ["a", "b", "c", "d", "e"];
let slicePart = letters.slice(1, 3); // យកពី index 1 ដល់ 2 (មិនរួម 3)
console.log("slicePart (1, 3):", slicePart); // ["b", "c"]
console.log("letters ដើម (មិនប្រែប្រួល):", letters); // ["a", "b", "c", "d", "e"]

// splice(startIndex, deleteCount, itemsToAdd...) -> កែប្រែ Array ដើម
const animals = ["cat", "dog", "bird", "fish"];

// នៅ index=2 លុប 0 ធាតុ បន្ទាប់មកបន្ថែម "lion"
animals.splice(2, 0, "lion");
console.log("ក្រោយ splice(2, 0, 'lion'):", animals);
// ["cat", "dog", "lion", "bird", "fish"]

// លុបពី index=1 ចំនួន 2 ធាតុ ("dog", "lion")
let removedAnimals = animals.splice(1, 2);
console.log("ធាតុដែល splice ដកចេញ:", removedAnimals); // ["dog", "lion"]
console.log("animals ក្រោយ splice លុប:", animals);      // ["cat", "bird", "fish"]`
      },
      {
        title: '៤. Exercise: បង្កើត និងគ្រប់គ្រង List ផលិតផល (Product Catalog)',
        description: 'លំហាត់អនុវត្តគ្រប់គ្រង Array ផលិតផលតាមរយៈ push, pop, unshift, shift, splice, slice និង Loop',
        code: `let products = ["Computer", "Keyboard", "Mouse"];

// 1) បង្ហាញបញ្ជីដើម
console.log("១. បញ្ជីផលិតផលដើម:", products);

// 2) បន្ថែមផលិតផលថ្មី ដោយប្រើ push
products.push("Monitor");
console.log("២. បន្ទាប់ពី push('Monitor'):", products);

// 3) លុបធាតុចុងដោយ pop
let removedItem = products.pop();
console.log("៣. យកចុងដោយ pop():", removedItem);
console.log("   បញ្ជីបន្ទាប់ពី pop():", products);

// 4) បន្ថែមគ្រឿងមុនចំពោះដើមដោយ unshift
products.unshift("Laptop");
console.log("៤. បន្ទាប់ពី unshift('Laptop'):", products);

// 5) លុបធាតុដើមមួយដោយ shift
let shiftedItem = products.shift();
console.log("៥. យកដើមដោយ shift():", shiftedItem);
console.log("   បញ្ជីបន្ទាប់ពី shift():", products);

// 6) សាកល្បង splice លុប និងបន្ថែម
// បន្ថែម "Speaker" នៅ index=1 ដោយលុប 0 ធាតុ
products.splice(1, 0, "Speaker");
console.log("៦. បន្ទាប់ពី splice បន្ថែម Speaker:", products);

// លុប 1 ធាតុចាប់ពី index=2
products.splice(2, 1);
console.log("   បន្ទាប់ពី splice លុបមួយធាតុ:", products);

// 7) បង្កើតបញ្ជីថ្មីពី slice (យកពី index 0 ដល់ 2 មិនរួម 2)
let newList = products.slice(0, 2);
console.log("៧. បញ្ជី slice(0, 2):", newList);
console.log("   បញ្ជីចាស់បន្ទាប់ពី slice:", products);

// 8) បង្ហាញបញ្ជីផលិតផលចុងក្រោយតាម Loop
console.log("៨. បញ្ជីផលិតផលចុងក្រោយ:");
for (let product of products) {
  console.log("   - " + product);
}`
      },
      {
        title: '៥. JavaScript Objects (Dot & Bracket Notation) និង Null/Undefined',
        description: 'ការកំណត់ Object, Key-Value pairs, Dot vs Bracket access, និងការសម្អាតជា null',
        code: `// Object person
var person = {
  firstname: "John",
  lastname: "Doe",
  id: 5566,
  hobbies: ["Coding", "Reading"]
};

// ទាញយកតម្លៃតាម Dot Notation (.)
console.log("Dot Notation:", person.lastname); // "Doe"

// ទាញយកតម្លៃតាម Bracket Notation ([])
console.log("Bracket Notation:", person["lastname"]); // "Doe"

// Undefined vs Null
var unassigned;
console.log("unassigned:", unassigned); // undefined

person = null; // សម្អាត Object ឱ្យទទេដោយចេតនា
console.log("person ក្រោយសម្អាត:", person); // null
console.log("null == undefined :", null == undefined);   // true
console.log("null === undefined:", null === undefined);  // false`
      }
    ],
    guidedPractice: {
      title: 'Product Catalog & Inventory Management System (ប្រព័ន្ធគ្រប់គ្រងបញ្ជីទំនិញ)',
      description: 'អនុវត្តការគ្រប់គ្រងបញ្ជីផលិតផល (Products Array) និងម្ចាស់ឃ្លាំង (Owner Object) ដោយប្រើប្រាស់ Array Methods (push, pop, shift, unshift, splice, slice) និងការ Loop បង្ហាញលើ UI យ៉ាងរស់រវើក។',
      runnableJsCode: `// ==========================================
// Product Catalog & Inventory Script
// ==========================================

// ១. ការបង្កើតបញ្ជីផលិតផលដើម
let products = ["Computer", "Keyboard", "Mouse"];
console.log("=== ១. បញ្ជីផលិតផលដើម ===", products);

// ២. អនុវត្ត push() បន្ថែមផលិតផលថ្មី
products.push("Monitor");
console.log("បន្ទាប់ពី push('Monitor'):", products);

// ៣. អនុវត្ត pop() ដកផលិតផលចុងក្រោយ
let removedEnd = products.pop();
console.log("បន្ទាប់ពី pop(): ដកចេញ ->", removedEnd, "| នៅសល់ ->", products);

// ៤. អនុវត្ត unshift() បន្ថែមផលិតផលនៅដើម
products.unshift("Laptop");
console.log("បន្ទាប់ពី unshift('Laptop'):", products);

// ៥. អនុវត្ត shift() ដកផលិតផលពីដើម
let removedStart = products.shift();
console.log("បន្ទាប់ពី shift(): ដកចេញ ->", removedStart, "| នៅសល់ ->", products);

// ៦. អនុវត្ត splice() បន្ថែម Speaker នៅ index 1
products.splice(1, 0, "Speaker");
console.log("បន្ទាប់ពី splice(1, 0, 'Speaker'):", products);

// ៧. អនុវត្ត slice() កាត់យកបញ្ជីតូចមួយ
let topTwo = products.slice(0, 2);
console.log("បញ្ជី slice(0, 2):", topTwo);
console.log("បញ្ជីដើមនៅដដែល:", products);

// ៨. Object ព័ត៌មានឃ្លាំងទំនិញ
let warehouse = {
  name: "Central Tech Hub",
  manager: "Sokha Seng",
  contact: "012 345 678",
  products: products
};
console.log("ព័ត៌មានឃ្លាំង (Dot):", warehouse.name, "| Manager:", warehouse["manager"]);
console.log("ទំនិញទាំងអស់ក្នុងឃ្លាំង:");
for (let p of warehouse.products) {
  console.log(" -> " + p);
}`,
      files: [
        {
          filename: 'index.html',
          language: 'html',
          code: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Product Catalog & Inventory</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <header class="header">
      <div class="badge">Lesson 6</div>
      <h1>ប្រព័ន្ធគ្រប់គ្រងបញ្ជីផលិតផល (Product Catalog)</h1>
      <p>អនុវត្តការប្រើប្រាស់ Arrays, Array Methods (push, pop, shift, unshift, splice, slice) និង Objects</p>
    </header>

    <div class="grid">
      <!-- ផ្នែកគ្រប់គ្រង Products Array -->
      <div class="card">
        <h2>📦 បញ្ជីផលិតផល (Products Array)</h2>
        <p class="subtitle">Index ចាប់ផ្តើមពី [0], [1], [2]... (Zero-based Indexing)</p>
        
        <div class="input-group">
          <input type="text" id="newProductInput" placeholder="ឈ្មោះផលិតផល (ឧ. Tablet, Headphone)...">
          <button id="btnPush" class="btn btn-primary">+ push (ចុង)</button>
          <button id="btnUnshift" class="btn btn-purple">+ unshift (ដើម)</button>
        </div>

        <div class="actions-row">
          <button id="btnPop" class="btn btn-danger">pop() ដកចុង</button>
          <button id="btnShift" class="btn btn-warning">shift() ដកដើម</button>
          <button id="btnSpliceDemo" class="btn btn-secondary">splice(1, 0, 'Speaker')</button>
          <button id="btnSliceDemo" class="btn btn-outline">slice(0, 2)</button>
          <button id="btnReset" class="btn btn-outline">Reset ដើម</button>
        </div>

        <div id="productListContainer" class="products-display"></div>
        <div class="meta-info">
          <span>ផលិតផលសរុប (length): <strong id="productCount">0</strong></span>
          <span>ប្រតិបត្តិការចុងក្រោយ: <strong id="lastOpBadge">None</strong></span>
        </div>
      </div>

      <!-- ផ្នែកព័ត៌មានឃ្លាំង (Warehouse Object) -->
      <div class="card">
        <h2>🏬 ព័ត៌មានឃ្លាំងទំនិញ (Warehouse Object)</h2>
        <p class="subtitle">កំណត់ដោយ { name, manager, location, products }</p>

        <div class="object-display">
          <div class="prop-row">
            <span class="prop-key">name:</span>
            <span class="prop-val" id="dispWhName">"Central Tech Store"</span>
          </div>
          <div class="prop-row">
            <span class="prop-key">manager:</span>
            <span class="prop-val" id="dispWhManager">"Sokha Seng"</span>
          </div>
          <div class="prop-row">
            <span class="prop-key">totalInventory:</span>
            <span class="prop-val number" id="dispWhCount">3</span>
          </div>
          <div class="prop-row">
            <span class="prop-key">status:</span>
            <span class="prop-val" id="dispWhStatus">"Open"</span>
          </div>
        </div>

        <div class="access-demo">
          <h3>ចូលប្រើ Properties (Dot vs Bracket Notation)៖</h3>
          <div class="btn-group">
            <button id="btnDotAccess" class="btn btn-sm">warehouse.manager</button>
            <button id="btnBracketAccess" class="btn btn-sm">warehouse["manager"]</button>
            <button id="btnSetNull" class="btn btn-sm btn-secondary">warehouse = null</button>
          </div>
          <div id="accessOutput" class="output-box">ចុចប៊ូតុងខាងលើដើម្បីសាកល្បង...</div>
        </div>
      </div>
    </div>

    <!-- Console Log Display -->
    <div class="card console-card">
      <div class="console-header">
        <span>📟 Developer Console Output</span>
        <button id="clearLogBtn" class="btn-text">Clear</button>
      </div>
      <div id="consoleOutput" class="console-body"></div>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>`
        },
        {
          filename: 'style.css',
          language: 'css',
          code: `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Kantumruy Pro', system-ui, -apple-system, sans-serif;
}

body {
  background-color: #090d16;
  color: #e2e8f0;
  padding: 24px 16px;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
}

.header {
  text-align: center;
  margin-bottom: 24px;
}

.header .badge {
  display: inline-block;
  background: rgba(59, 130, 246, 0.2);
  color: #60a5fa;
  border: 1px solid rgba(59, 130, 246, 0.4);
  padding: 4px 12px;
  border-radius: 9999px;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 8px;
}

.header h1 {
  font-size: 24px;
  color: #ffffff;
  margin-bottom: 6px;
}

.header p {
  color: #94a3b8;
  font-size: 14px;
}

.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-bottom: 20px;
}

@media (min-width: 768px) {
  .grid {
    grid-template-columns: 1fr 1fr;
  }
}

.card {
  background: #0f172a;
  border: 1px solid #1e293b;
  border-radius: 16px;
  padding: 20px;
}

.card h2 {
  font-size: 16px;
  color: #f8fafc;
  margin-bottom: 4px;
}

.subtitle {
  color: #64748b;
  font-size: 12px;
  margin-bottom: 16px;
}

.input-group {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 12px;
}

.input-group input {
  flex: 1;
  min-width: 140px;
  background: #090d16;
  border: 1px solid #334155;
  color: #ffffff;
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 13px;
  outline: none;
}

.input-group input:focus {
  border-color: #3b82f6;
}

.actions-row {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 16px;
}

.btn {
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: all 0.2s;
}

.btn-primary { background: #2563eb; color: #ffffff; }
.btn-primary:hover { background: #1d4ed8; }

.btn-purple { background: #8b5cf6; color: #ffffff; }
.btn-purple:hover { background: #7c3aed; }

.btn-danger { background: #dc2626; color: #ffffff; }
.btn-danger:hover { background: #b91c1c; }

.btn-warning { background: #d97706; color: #ffffff; }
.btn-warning:hover { background: #b45309; }

.btn-secondary { background: #334155; color: #e2e8f0; }
.btn-secondary:hover { background: #475569; }

.btn-outline { background: transparent; border: 1px solid #475569; color: #cbd5e1; }
.btn-outline:hover { background: #1e293b; }

.btn-sm { padding: 6px 10px; font-size: 11px; background: #1e293b; color: #38bdf8; border: 1px solid #334155; }
.btn-sm:hover { background: #38bdf8; color: #090d16; }

.products-display {
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-height: 120px;
  margin-bottom: 12px;
}

.product-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  background: #090d16;
  border: 1px solid #1e293b;
  border-radius: 8px;
  font-size: 13px;
}

.product-index {
  font-family: monospace;
  background: #1e293b;
  color: #38bdf8;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 11px;
}

.product-name {
  font-weight: 600;
  color: #f1f5f9;
}

.meta-info {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #94a3b8;
  padding-top: 8px;
  border-top: 1px solid #1e293b;
}

.object-display {
  background: #090d16;
  border: 1px solid #1e293b;
  border-radius: 10px;
  padding: 12px;
  font-family: monospace;
  font-size: 12px;
  margin-bottom: 16px;
}

.prop-row {
  display: flex;
  gap: 8px;
  padding: 3px 0;
}

.prop-key { color: #f43f5e; }
.prop-val { color: #34d399; }
.prop-val.number { color: #fb923c; }

.access-demo h3 {
  font-size: 12px;
  color: #94a3b8;
  margin-bottom: 8px;
}

.btn-group {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  margin-bottom: 10px;
}

.output-box {
  background: #090d16;
  border: 1px dashed #334155;
  border-radius: 8px;
  padding: 10px;
  font-family: monospace;
  font-size: 12px;
  color: #38bdf8;
}

.console-card {
  margin-top: 12px;
}

.console-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  color: #94a3b8;
  margin-bottom: 8px;
}

.btn-text {
  background: none;
  border: none;
  color: #64748b;
  cursor: pointer;
  font-size: 11px;
}

.btn-text:hover { color: #e2e8f0; }

.console-body {
  background: #05070e;
  border: 1px solid #1e293b;
  border-radius: 8px;
  padding: 12px;
  max-height: 140px;
  overflow-y: auto;
  font-family: monospace;
  font-size: 11px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.log-entry {
  color: #cbd5e1;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  padding-bottom: 2px;
}`
        },
        {
          filename: 'script.js',
          language: 'javascript',
          code: `// ==========================================
// មេរៀនទី៦៖ Product Catalog & Warehouse Management
// ==========================================

// បញ្ជីផលិតផលដើម
var defaultProducts = ["Computer", "Keyboard", "Mouse"];
var products = [...defaultProducts];

// Warehouse Object
var warehouse = {
  name: "Central Tech Store",
  manager: "Sokha Seng",
  location: "Phnom Penh",
  status: "Open"
};

// ចាប់យក DOM Elements
var productListContainer = document.getElementById("productListContainer");
var productCountEl = document.getElementById("productCount");
var lastOpBadge = document.getElementById("lastOpBadge");
var newProductInput = document.getElementById("newProductInput");

var btnPush = document.getElementById("btnPush");
var btnUnshift = document.getElementById("btnUnshift");
var btnPop = document.getElementById("btnPop");
var btnShift = document.getElementById("btnShift");
var btnSpliceDemo = document.getElementById("btnSpliceDemo");
var btnSliceDemo = document.getElementById("btnSliceDemo");
var btnReset = document.getElementById("btnReset");

var dispWhName = document.getElementById("dispWhName");
var dispWhManager = document.getElementById("dispWhManager");
var dispWhCount = document.getElementById("dispWhCount");
var dispWhStatus = document.getElementById("dispWhStatus");
var accessOutput = document.getElementById("accessOutput");
var consoleOutput = document.getElementById("consoleOutput");

function logToConsole(message) {
  var entry = document.createElement("div");
  entry.className = "log-entry";
  entry.textContent = "> " + message;
  consoleOutput.appendChild(entry);
  consoleOutput.scrollTop = consoleOutput.scrollHeight;
}

// មុខងារបង្ហាញ Products លើ UI
function renderProducts(opName) {
  productListContainer.innerHTML = "";

  if (products.length === 0) {
    productListContainer.innerHTML = '<div class="product-item" style="color: #94a3b8;">បញ្ជីទទេ (Empty Array [])</div>';
  } else {
    products.forEach(function(item, index) {
      var el = document.createElement("div");
      el.className = "product-item";
      el.innerHTML = \`
        <div>
          <span class="product-index">products[\${index}]</span>
          <span class="product-name" style="margin-left: 8px;">\${item}</span>
        </div>
        <span style="font-size: 11px; color: #64748b;">\${index === 0 ? "ធាតុដើមគេ (First)" : (index === products.length - 1 ? "ធាតុចុងក្រោយ" : "Index " + index)}</span>
      \`;
      productListContainer.appendChild(el);
    });
  }

  productCountEl.textContent = products.length;
  dispWhCount.textContent = products.length;
  if (opName) lastOpBadge.textContent = opName;
}

// 1) push(newElement): បន្ថែមនៅចុង
btnPush.addEventListener("click", function() {
  var val = newProductInput.value.trim();
  if (!val) val = "Monitor";
  var newLength = products.push(val);
  newProductInput.value = "";
  logToConsole('products.push("' + val + '") -> ប្រវែងថ្មី: ' + newLength);
  renderProducts("push('" + val + "')");
});

// 2) unshift(newElement): បន្ថែមនៅដើម
btnUnshift.addEventListener("click", function() {
  var val = newProductInput.value.trim();
  if (!val) val = "Laptop";
  var newLength = products.unshift(val);
  newProductInput.value = "";
  logToConsole('products.unshift("' + val + '") -> បន្ថែមនៅដើម, ប្រវែងថ្មី: ' + newLength);
  renderProducts("unshift('" + val + "')");
});

// 3) pop(): ដកចុង
btnPop.addEventListener("click", function() {
  if (products.length === 0) {
    logToConsole("Array ទទេ មិនអាច pop() បានឡើយ");
    return;
  }
  var popped = products.pop();
  logToConsole('products.pop() -> ដកធាតុចុង: "' + popped + '"');
  renderProducts("pop() -> " + popped);
});

// 4) shift(): ដកដើម
btnShift.addEventListener("click", function() {
  if (products.length === 0) {
    logToConsole("Array ទទេ មិនអាច shift() បានឡើយ");
    return;
  }
  var shifted = products.shift();
  logToConsole('products.shift() -> ដកធាតុដើម: "' + shifted + '"');
  renderProducts("shift() -> " + shifted);
});

// 5) splice(1, 0, 'Speaker'): បន្ថែមនៅកណ្តាល (index 1)
btnSpliceDemo.addEventListener("click", function() {
  products.splice(1, 0, "Speaker");
  logToConsole('products.splice(1, 0, "Speaker") -> បន្ថែម Speaker នៅ index 1 ដោយលុប 0');
  renderProducts("splice(1, 0, 'Speaker')");
});

// 6) slice(0, 2): កាត់យក 2 ធាតុដំបូង (មិនប៉ះពាល់ដើម)
btnSliceDemo.addEventListener("click", function() {
  var subList = products.slice(0, 2);
  logToConsole('products.slice(0, 2) -> បង្កើត Array ថ្មី: ' + JSON.stringify(subList));
  logToConsole('Array ដើមមិនប្រែប្រួលទេ: ' + JSON.stringify(products));
  alert("slice(0, 2) ផ្ដល់ Array ថ្មីមួយ៖ " + JSON.stringify(subList) + "\\n(Array ដើមនៅរក្សាដដែល!)");
});

// 7) Reset
btnReset.addEventListener("click", function() {
  products = [...defaultProducts];
  logToConsole('Reset products = ["Computer", "Keyboard", "Mouse"]');
  renderProducts("Reset");
});

// Warehouse Object Handlers
document.getElementById("btnDotAccess").addEventListener("click", function() {
  if (warehouse === null) {
    accessOutput.textContent = "កំហុស៖ warehouse = null មិនអាចអានបានទេ";
    return;
  }
  accessOutput.textContent = 'warehouse.manager => "' + warehouse.manager + '" (Dot Notation)';
  logToConsole('warehouse.manager => "' + warehouse.manager + '"');
});

document.getElementById("btnBracketAccess").addEventListener("click", function() {
  if (warehouse === null) {
    accessOutput.textContent = "កំហុស៖ warehouse = null មិនអាចអានបានទេ";
    return;
  }
  accessOutput.textContent = 'warehouse["manager"] => "' + warehouse["manager"] + '" (Bracket Notation)';
  logToConsole('warehouse["manager"] => "' + warehouse["manager"] + '"');
});

document.getElementById("btnSetNull").addEventListener("click", function() {
  warehouse = null;
  dispWhName.textContent = "null";
  dispWhManager.textContent = "null";
  dispWhCount.textContent = "null";
  dispWhStatus.textContent = "null";
  accessOutput.textContent = "warehouse = null; (Object ត្រូវបានសម្អាតឱ្យទទេ)";
  logToConsole("warehouse = null (កំណត់ជា null)");
});

document.getElementById("clearLogBtn").addEventListener("click", function() {
  consoleOutput.innerHTML = "";
});

// Render ដំបូង
renderProducts("Initial Load");
logToConsole('ប្រព័ន្ធបានចាប់ផ្តើម៖ products = ["Computer", "Keyboard", "Mouse"]');`
        }
      ],
      expectedOutput: 'បង្ហាញផ្ទាំងគ្រប់គ្រងបញ្ជីផលិតផលអន្តរកម្ម ដែលអ្នកសិក្សាអាចចុច push, pop, shift, unshift, splice, slice និងតេស្ត Dot vs Bracket notation លើ Object។'
    },
    commonMistakes: [
      {
        mistake: 'គិតថា Index ដំបូងបង្អស់ចាប់ផ្តើមពីលេខ [1]',
        cause: 'ក្នុងភាសាទូទៅយើងរាប់ពី ១ តែក្នុង JavaScript (Zero-based Indexing) ធាតុដំបូងគឺ products[0] ជានិច្ច!',
        wrongCode: `var products = ["Computer", "Keyboard", "Mouse"];
var firstItem = products[1]; // ច្រឡំថាជាធាតុទីមួយ តែជាក់ស្តែងគឺ "Keyboard"!`,
        fixedCode: `var products = ["Computer", "Keyboard", "Mouse"];
var firstItem = products[0]; // ត្រឹមត្រូវ៖ "Computer"`,
        fix: 'ត្រូវចងចាំថា Index ចាប់ផ្តើមពី [0] ជានិច្ច ហើយធាតុចុងក្រោយគឺ [products.length - 1]។'
      },
      {
        mistake: 'ច្រឡំរវាង slice() និង splice()',
        cause: 'slice() គ្រាន់តែចម្លងផ្នែកខ្លះចេញជា Array ថ្មីដោយមិនប៉ះពាល់ Array ដើម រីឯ splice() ធ្វើការលុប ឬបន្ថែមផ្ទាល់លើ Array ដើម (Mutate)!',
        wrongCode: `var arr = [1, 2, 3, 4];
arr.slice(1, 2); // គិតថា arr នឹងត្រូវកាត់នៅសល់ [1, 3, 4] តែ arr នៅដដែល!`,
        fixedCode: `var arr = [1, 2, 3, 4];
// បើចង់បាន Array ថ្មី៖
var sub = arr.slice(1, 3); // [2, 3]

// បើចង់លុបលើ Array ដើមផ្ទាល់៖
arr.splice(1, 2); // arr ក្លាយជា [1, 4]`,
        fix: 'ប្រើ slice() ពេលមិនចង់ឱ្យ Array ដើមប្រែប្រួល និងប្រើ splice() ពេលចង់កែប្រែ ឬលុបធាតុផ្ទាល់លើ Array ដើម។'
      },
      {
        mistake: 'ច្រឡំរវាង pop/push (ចុង) និង shift/unshift (ដើម)',
        cause: 'push បន្ថែមនៅចុង ចំណែក unshift បន្ថែមនៅដើម; pop ដកចេញពីចុង ចំណែក shift ដកចេញពីដើម។',
        wrongCode: `var items = ["B", "C"];
items.push("A"); // គិតថា "A" នៅដើម តែការពិតវាទៅនៅចុង: ["B", "C", "A"]`,
        fixedCode: `var items = ["B", "C"];
items.unshift("A"); // ត្រឹមត្រូវ៖ ["A", "B", "C"]`,
        fix: 'ចងចាំគូ៖ (push, pop សម្រាប់ចុង) និង (unshift, shift សម្រាប់ដើម)។'
      },
      {
        mistake: 'ការបង្កើត Array ដោយប្រើ new Array(3) ច្រឡំថាជា Array មានលេខ 3',
        cause: 'នៅពេលអ្នកបញ្ជូនលេខមួយគត់ទៅកាន់ new Array(n) វានឹងបង្កើត Sparse Array ដែលមាន n empty slots មិនមែនធាតុលេខ n ឡើយ!',
        wrongCode: `var list = new Array(3); // បង្កើត Array ទទេ 3 កន្លែង: [empty x 3]
console.log(list[0]); // undefined!`,
        fixedCode: `// ប្រើ Array Literal ជានិច្ច
var list = [3]; // បង្កើត Array ដែលមានលេខ 3: [3]
console.log(list[0]); // 3`,
        fix: 'ចៀសវាងការប្រើ new Array() ហើយងាកមកប្រើ Array Literal [...] ជានិច្ច។'
      },
      {
        mistake: 'ការប្រើ new String() ឬ new Number() នាំឱ្យការប្រៀបធៀប (===) ផ្តល់ false',
        cause: 'keyword new បង្កើត Object Wrapper ដែលធ្វើឱ្យ typeof ទៅជា "object" មិនមែន primitive ឡើយ។',
        wrongCode: `var x = new String("John");
var y = new String("John");
console.log(x === y); // false! ព្រោះ Object ពីរផ្សេងគ្នាទោះតម្លៃដូចគ្នាក៏ដោយ`,
        fixedCode: `var x = "John";
var y = "John";
console.log(x === y); // true! (Primitive string ដូចគ្នា)`,
        fix: 'ប្រកាស string, number, boolean ដោយផ្ទាល់ (Literals) ដោយមិនបាច់ប្រើ keyword new ឡើយ។'
      }
    ],
    exercises: [
      {
        level: 'មូលដ្ឋាន (Basic)',
        prompt: 'ចូរបង្កើត Array ឈ្មោះ products ដែលផ្ទុក "Computer", "Keyboard", "Mouse" រួចបន្ថែម "Monitor" នៅចុង Array ដោយប្រើ push() និងដកធាតុដើមចេញមួយដោយប្រើ shift()។',
        solutionCode: `let products = ["Computer", "Keyboard", "Mouse"];

// ១. បន្ថែមនៅចុង
products.push("Monitor");
console.log("ក្រោយ push:", products); // ["Computer", "Keyboard", "Mouse", "Monitor"]

// ២. ដកពីដើម
let removed = products.shift();
console.log("ធាតុដែលបានដក:", removed); // "Computer"
console.log("Array ចុងក្រោយ:", products); // ["Keyboard", "Mouse", "Monitor"]`,
        explanation: 'push() បន្ថែមធាតុនៅចុង Array រីឯ shift() ដកធាតុដំបូងបង្អស់ចេញពីដើម Array។'
      },
      {
        level: 'អនុវត្ត (Practical)',
        prompt: 'ចូរបង្កើតបញ្ជីផលិតផល let products = ["Computer", "Keyboard", "Mouse"] រួចអនុវត្តលំហាត់ទាំង ៨ ជំហាន៖ push, pop, unshift, shift, splice, slice និង Loop បង្ហាញលទ្ធផលក្នុង Console។',
        solutionCode: `let products = ["Computer", "Keyboard", "Mouse"];

// 1) បង្ហាញបញ្ជីដើម
console.log("បញ្ជីផលិតផលដើម:", products);

// 2) បន្ថែមផលិតផលថ្មី ដោយប្រើ push
products.push("Monitor");
console.log("បន្ទាប់ពី push():", products);

// 3) លុបធាតុចុងដោយ pop
let removedItem = products.pop();
console.log("យកចុងដោយ pop():", removedItem);
console.log("បន្ទាប់ពី pop():", products);

// 4) បន្ថែមគ្រឿងមុនចំពោះដើមដោយ unshift
products.unshift("Laptop");
console.log("បន្ទាប់ពី unshift():", products);

// 5) លុបធាតុដើមមួយដោយ shift
let shiftedItem = products.shift();
console.log("យកដើមដោយ shift():", shiftedItem);
console.log("បន្ទាប់ពី shift():", products);

// 6) សាកល្បង splice លុប និងបន្ថែម
// បន្ថែម "Speaker" នៅ index=1 ដោយលុប 0 ធាតុ
products.splice(1, 0, "Speaker");
console.log("បន្ទាប់ពី splice បន្ថែម Speaker:", products);

// លុប 1 ធាតុចាប់ពី index=2
products.splice(2, 1);
console.log("បន្ទាប់ពី splice លុបមួយធាតុ:", products);

// 7) បង្កើតមួយបញ្ជីថ្មីពី slice
let newList = products.slice(0, 2);
console.log("បញ្ជី slice(0, 2):", newList);
console.log("បញ្ជីចាស់បន្ទាប់ពី slice:", products);

// 8) បង្ហាញបញ្ជីថាយើងអាច iterate
console.log("បញ្ជីផលិតផលចុងក្រោយ:");
for (let product of products) {
  console.log(product);
}`,
        explanation: 'លំហាត់នេះរួមបញ្ចូលគ្រប់ Methods សំខាន់ៗនៃ Array ដើម្បីគ្រប់គ្រងទិន្នន័យជាក់ស្តែង។'
      },
      {
        level: 'ប្រកួតប្រជែង (Challenge)',
        prompt: 'ចូរបង្កើត Array នៃ Objects ទំនិញចំនួន ៤ (id, name, price, stock) រួចប្រើ Array Methods ដើម្បីច្រោះយកតែទំនិញណាដែលមាន stock > 0 និងគណនាតម្លៃសរុបនៃទំនិញទាំងអស់ក្នុងស្តុក។',
        solutionCode: `let inventory = [
  { id: 1, name: "Computer", price: 800, stock: 5 },
  { id: 2, name: "Keyboard", price: 45, stock: 0 },
  { id: 3, name: "Mouse", price: 25, stock: 12 },
  { id: 4, name: "Monitor", price: 180, stock: 3 }
];

// ១. ច្រោះយកតែទំនិញដែលមានក្នុងស្តុក
let inStockItems = inventory.filter(item => item.stock > 0);
console.log("ទំនិញមានក្នុងស្តុក:", inStockItems.map(i => i.name));

// ២. គណនាតម្លៃសរុបនៃស្តុក (price * stock)
let totalStockValue = inStockItems.reduce((total, item) => {
  return total + (item.price * item.stock);
}, 0);

console.log("តម្លៃស្តុកសរុប: $" + totalStockValue); // $4840`,
        explanation: '.filter() និង .reduce() គឺជា Functional Array Methods ដ៏មានឥទ្ធិពលបំផុតក្នុងការវិភាគទិន្នន័យ។'
      }
    ],
    quiz: [
      {
        id: 1,
        question: 'នៅក្នុង JavaScript តើ Array Index ចាប់ផ្តើមពីលេខប៉ុន្មាន?',
        options: ['0', '1', '-1', '10'],
        correctIndex: 0,
        explanation: 'Array indexes ក្នុង JavaScript គឺ Zero-based ពោលគឺចាប់ផ្តើមពីលេខ ០ [0] សម្រាប់ធាតុដំបូងគេបង្អស់។'
      },
      {
        id: 2,
        question: 'តើ Method មួយណាប្រើសម្រាប់បន្ថែមធាតុថ្មីនៅ «ចុង» នៃ Array?',
        options: ['push()', 'pop()', 'unshift()', 'shift()'],
        correctIndex: 0,
        explanation: 'push() បន្ថែមធាតុថ្មីនៅចុង Array រីឯ unshift() បន្ថែមនៅដើម Array។'
      },
      {
        id: 3,
        question: 'តើ Method មួយណាប្រើសម្រាប់លុបធាតុចេញពី «ដើម» នៃ Array?',
        options: ['pop()', 'shift()', 'slice()', 'delete'],
        correctIndex: 1,
        explanation: 'shift() លុបធាតុចេញពីដើម Array រីឯ pop() លុបធាតុចេញពីចុង Array។'
      },
      {
        id: 4,
        question: 'តើអ្វីជាភាពខុសគ្នាសំខាន់បំផុតរវាង slice() និង splice()?',
        options: [
          'slice() មិនប៉ះពាល់ Array ដើមទេ (ត្រឡប់ Array ថ្មី) រីឯ splice() កែប្រែផ្ទាល់លើ Array ដើម (Mutate)',
          'slice() ប្រើសម្រាប់តែលេខ រីឯ splice() ប្រើសម្រាប់តែ string',
          'splice() មិនអាចលុបធាតុបានទេ',
          'ទាំងពីរនេះដូចគ្នាទាំងស្រុង'
        ],
        correctIndex: 0,
        explanation: 'slice() ជ្រើសរើសចម្លងផ្នែកខ្លះចេញជា Array ថ្មីដោយមិនកែប្រែ Array ដើមឡើយ រីឯ splice() លុប ឬបន្ថែមធាតុដោយមានឥទ្ធិពលកែប្រែ Array ដើមផ្ទាល់។'
      },
      {
        id: 5,
        question: 'តើ Array ត្រូវបានបែងចែកជា ៣ ប្រភេទអ្វីខ្លះតាមការបង្កើត?',
        options: [
          'Empty Array, Specified number of items, និង Specified items',
          'Small Array, Medium Array, និង Large Array',
          'Static Array, Dynamic Array, និង Virtual Array',
          'Single Array, Double Array, និង Multi Array'
        ],
        correctIndex: 0,
        explanation: 'Array ត្រូវបានបែងចែកជា ៣ គឺ Empty Array (អារេទទេ), Specified number of items (កំណត់ចំនួនធាតុជាក់លាក់ new Array(n)), និង Specified items (បញ្ចូលតម្លៃពេលប្រកាស)។'
      },
      {
        id: 6,
        question: 'ប្រសិនបើអ្នកមាន var person = { firstname: "John", lastname: "Doe" }; តើវិធីណាខ្លះត្រឹមត្រូវក្នុងការចូលប្រើ lastname?',
        options: [
          'person.lastname និង person["lastname"]',
          'person->lastname និង person.get("lastname")',
          'person(lastname) និង person[lastname]',
          'person:lastname និង person#lastname'
        ],
        correctIndex: 0,
        explanation: 'Object properties អាចចូលប្រើបាន ២ របៀបគឺ Dot Notation (person.lastname) និង Bracket Notation (person["lastname"])។'
      }
    ],
    summary: [
      'Array គឺជាបណ្តុំនៃទិន្នន័យដែលមានលក្ខណៈរួមគ្នា ដូចជា ពណ៌ ខែ ថ្ងៃ លេខ អក្សរ ឬ Objects ក្នុងអថេរតែមួយ',
      'Array ចែកជា ៣ គឺ Empty Array, Specified number of items in Array, និង Specified items in Array',
      'Array Index ចាប់ផ្តើមពី 0 (Zero-based Indexing) ជានិច្ច ហើយប្រវែងសរុបគឺ .length',
      'push() បន្ថែមចុង, pop() លុបចុង, unshift() បន្ថែមដើម, shift() លុបដើម',
      'slice(start, end) ជ្រើសរើសធាតុបង្កើតជា Array ថ្មីដោយមិនកែប្រែ Array ដើមឡើយ',
      'splice(startIndex, deleteCount, itemsToAdd) លុប ឬបន្ថែមធាតុដោយមានឥទ្ធិពលផ្ទាល់លើ Array ដើម',
      'Objects ផ្ទុកទិន្នន័យជាគូ name:value (Properties) កំណត់ដោយ {} ហើយអាចចូលប្រើតាម Dot (.) ឬ Bracket ([]) Notation',
      'Undefined គឺអថេរគ្មានតម្លៃ រីឯ Null គឺជាការកំណត់ឱ្យទទេដោយចេតនា'
    ]
  },
  {
    id: 7,
    slug: 'objects-and-modern-syntax',
    titleKm: 'មេរៀនទី៧៖ ការប្រើប្រាស់ JavaScript Objects',
    titleEn: 'Lesson 7: JavaScript Objects & Modern Syntax',
    category: 'Data Structures',
    prerequisites: ['មេរៀនទី២ (Types & Variables)', 'មេរៀនទី៥ (Functions)', 'មេរៀនទី៦ (Arrays)'],
    learningOutcomes: [
      'យល់ដឹងអំពីគោលគំនិត "Everything in JavaScript is an Object" និង Object Members',
      'បែងចែកភាពខុសគ្នារវាង Properties (តម្លៃ/ស្ថានភាព) និង Methods (សកម្មភាព/អំពើ)',
      'បង្កើត Objects ដោយប្រើ Object Literal ({}) និង Object Constructor (new Object())',
      'ចូលប្រើ និងកែប្រែ Properties តាម Dot Notation (obj.prop) និង Bracket Notation (obj["prop"])',
      'បង្កើត និងដំណើរការ Methods ក្នុង Object រួមទាំងការប្រើប្រាស់ពាក្យគន្លឹះ "this"',
      'អនុវត្តបង្កើត Object សិស្ស "Student" ជាមួយព័ត៌មានលម្អិត និង Methods បង្ហាញមុខវិជ្ជា'
    ],
    scenario: 'ការរចនាប្រព័ន្ធគ្រប់គ្រងព័ត៌មាននិស្សិត (Student Profile & Academic Portal) ដែលផ្ទុកទិន្នន័យផ្ទាល់ខ្លួន មុខវិជ្ជា និងសកម្មភាពគណនាមធ្យមភាគពិន្ទុ ឬបង្ហាញព័ត៌មានជាក់ស្តែង។',
    conceptsExplanation: `
### ១. សេចក្តីផ្តើមអំពី JavaScript Objects
Objects នៅក្នុង JavaScript គឺជាប្រភេទទិន្នន័យមួយដែលអនុញ្ញាតឱ្យអ្នករក្សាទិន្នន័យជាគោល និងមុខងារ (Functions) ជាផ្នែកនៃធាតុតែមួយ។ ភាពងាយស្រួលនេះធ្វើឱ្យ Objects ក្លាយជារូបមន្តសំខាន់ក្នុងកញ្ចប់អភិវឌ្ឍន៍នៃ JavaScript ដើម្បីបង្កើតប្រព័ន្ធទិន្នន័យពីតូចទៅធំ។

> **“អ្វីៗគ្រប់យ៉ាង” នៅក្នុង JavaScript គឺជា Object** រួមមាន៖ \`String\`, \`Number\`, \`Array\`, \`Date\`, \`Function\` ...។
> នៅក្នុង JavaScript, **Object គឺជា Data (Variables) ដែលភ្ជាប់មកជាមួយ Properties និង Methods**។

---

### ២. Properties និង Methods (Object Members)
នៅក្នុងភាសាសរសេរកូដបែបតម្រង់ទិសវត្ថុ (Object-Oriented Programming - OOP) Properties និង Methods ត្រូវបានគេហៅថា **Object Members**:
- **Properties:** គឺជាតម្លៃ (Values) ដែលត្រូវបានភ្ជាប់ជាមួយនឹង Object (ពិពណ៌នាអំពីលក្ខណៈ ឬស្ថានភាពរបស់ Object)។
- **Methods:** គឺជាសកម្មភាព (Actions/Functions) ដែលមានអំពើទៅលើ Object ឬប្រតិបត្តិការលើទិន្នន័យរបស់ Object នោះ។

#### ឧទាហរណ៍ជាក់ស្តែង៖ ឡាន (Car)
- **Properties នៃ Car:** ឈ្មោះ (name), ម៉ូដ (model), ទម្ងន់ (weight), ពណ៌ (color) ...។
  *ឡានទាំងអស់នោះមាន Properties ដូចគ្នា ប៉ុន្តែតម្លៃនៃ Properties ទាំងនោះខុសប្លែកគ្នាពីឡានមួយទៅឡានមួយទៀត។*
- **Methods នៃ Car:** \`start()\`, \`drive()\`, \`brake()\`, \`stop()\` ...។
  *ឡានទាំងអស់នោះមាន Methods ដូចគ្នា ប៉ុន្តែការយកទៅប្រើប្រាស់ និងសកម្មភាពជាក់ស្តែងមានភាពខុសៗគ្នា។*

---

### ៣. វិធីសាស្រ្តក្នុងការបង្កើត Objects
ក្នុង JavaScript យើងអាចបង្កើត Object តាមវិធីជាច្រើនដូចជា Object Literal syntax, Constructor Function, ឬ Class syntax។

#### ក. របៀប Object Literal Syntax (ពេញនិយម និងណែនាំបំផុត)
ជាវិធីងាយស្រួល សង្ខេប និងស្អាតបំផុតដោយប្រើសញ្ញាពងក្រពើ \`{ key: value }\`៖
\`\`\`javascript
const person = { 
  name: "Alice", 
  age: 20, 
  country: "Cambodia" 
};
\`\`\`
នៅក្នុងឧទាហរណ៍នេះ យើងបានបង្កើត Object មួយធ្វើពី \`key: value\` ភ្ជាប់គ្នា (ដូចជា \`name: "Alice"\`)។ អ្នកអាចបញ្ចូល Properties ច្រើនដោយខណ្ឌដោយសញ្ញាក្បៀស (\`,\`)។

#### ខ. របៀប Object Constructor (\`new Object()\`)
\`\`\`javascript
// ឧទាហរណ៍ទី ១៖
const person = new Object();
person.firstname = "John";
person.lastname = "Doe";
person.age = 50;
person.eyecolor = "blue";

// ឧទាហរណ៍ទី ២៖
const person2 = new Object();  
person2.name = "Bob";  
person2.age = 30;
\`\`\`
*ចំណាំ៖ ភាគច្រើនអ្នកអភិវឌ្ឍន៍និយមប្រើ **Object Literal** (\`{}\`) ព្រោះវាខ្លី ងាយស្រួលអាន និងមានល្បឿនលឿនជាង។*

---

### ៤. ការដំណើរការ Object Properties និង Methods
#### ក. ការដំណើរការ Properties (Property Access)
រូបមន្តទូទៅ៖
\`\`\`text
objectName.propertyName
\`\`\`
**ឧទាហរណ៍លើ String Object:**
\`\`\`javascript
var message = "Hello World!";
var x = message.length; // x = 12 (length គឺជា Property រាប់ចំនួនតួអក្សរ)
\`\`\`

#### ខ. ការដំណើរការ Methods (Method Execution)
អ្នកអាចហៅ Methods ដោយបន្ថែមសញ្ញាវង់ក្រចក \`()\`៖
\`\`\`text
objectName.methodName()
\`\`\`
**ឧទាហរណ៍លើ String Object:**
\`\`\`javascript
var message = "Hello world!";
var x = message.toUpperCase(); // ប្តូរទៅជាអក្សរធំ HELLO WORLD!
\`\`\`

---

### ៥. របៀប Access Properties: Dot Notation vs. Bracket Notation
មានវិធីសំខាន់ ២ យ៉ាងដើម្បីទាញយក ឬកំណត់តម្លៃ Properties៖

| លក្ខណៈ | Dot Notation (\`.\`) | Bracket Notation (\`[]\`) |
| :--- | :--- | :--- |
| **រូបមន្ត** | \`object.propertyName\` | \`object["propertyName"]\` ឬ \`object[variable]\` |
| **ភាពងាយស្រួល** | ខ្លី ស្អាត សាមញ្ញ | អាចប្រើជាមួយអថេរ និងឈ្មោះ Key ពិសេស |
| **ឈ្មោះ Key ជាអថេរ** | មិនអាចប្រើបាន | **អាចប្រើបានយ៉ាងល្អ** \`obj[dynamicKey]\` |
| **Key មានដកឃ្លា ឬសញ្ញាពិសេស** | មិនអាចប្រើបាន | **អាចប្រើបាន** \`obj["first-name"]\` |

#### ឧទាហរណ៍ជាក់ស្តែង៖
\`\`\`javascript
const person = { 
  name: "Alice", 
  age: 20, 
  country: "Cambodia",
  "home-address": "Phnom Penh"
};

// ១. Dot Notation:
console.log(person.name);    // "Alice" 
console.log(person.age);     // 20 
console.log(person.country); // "Cambodia"

// ២. Bracket Notation:
console.log(person["name"]);         // "Alice" 
console.log(person["age"]);          // 20 
console.log(person["home-address"]); // "Phnom Penh" (Dot notation មិនអាចប្រើជាមួយសញ្ញាដកបានទេ)

const prop = "country"; 
console.log(person[prop]);          // "Cambodia" (ទាញតាមអថេរ)
\`\`\`

---

### ៦. Methods នៅក្នុង Objects និងពាក្យគន្លឹះ \`this\`
**Methods** គឺជាមុខងារ (Function) ដែលផ្ទុកនៅក្នុង Object ដើម្បីបំពេញការងារ ឬគណនាលទ្ធផលដែលពាក់ព័ន្ធនឹង Object នោះ។

#### ក. ការប្រកាស Method បែបប្រពៃណី
\`\`\`javascript
const person = { 
  name: "Alice", 
  age: 20, 
  greet: function() { 
    console.log("Hello, my name is " + this.name); 
  } 
}; 

person.greet(); // "Hello, my name is Alice"
\`\`\`
- ពាក្យគន្លឹះ **\`this\`** សំដៅលើ Object បច្ចុប្បន្នដែលកំពុងហៅ Method នោះ (\`this.name\` គឺស្មើនឹង \`person.name\`)។

#### ខ. ES6 Method Shorthand Syntax (សរសេរខ្លីស្អាត)
\`\`\`javascript
const person2 = { 
  name: "Bob", 
  age: 25, 
  greet() { 
    console.log("Hello, I'm " + this.name); 
  } 
}; 

person2.greet(); // "Hello, I'm Bob"
\`\`\`

---

### ៧. លំហាត់គំរូ៖ ការបង្កើត Object "Student"
\`\`\`javascript
// ១. បង្កើត Object Student
const student = { 
  name: "Sothea", 
  age: 18, 
  subjects: ["Math", "Physics", "Biology"], 

  // ២. Method ស្វាគមន៍
  greet() { 
    console.log("Hi, my name is " + this.name + " and I'm " + this.age + " years old."); 
  }, 

  // ៣. Method រៀបរាប់មុខវិជ្ជា
  listSubjects() { 
    console.log("My subjects are:"); 
    // iterate លើ array subjects
    this.subjects.forEach((subject, index) => { 
      console.log((index + 1) + ". " + subject); 
    }); 
  } 
}; 

// សាកល្បងហៅដំណើរការ៖
student.greet();       // "Hi, my name is Sothea and I'm 18 years old." 
student.listSubjects();  
// 1. Math 
// 2. Physics 
// 3. Biology
\`\`\`
    `,
    syntaxExamples: [
      {
        title: 'ការបង្កើត និង Access Object Properties',
        description: 'ការប្រៀបធៀបរវាង Dot Notation (.) និង Bracket Notation ([]) រួមទាំង dynamic key',
        code: `// 1. បង្កើតតាម Object Literal
const person = {
  name: "Alice",
  age: 20,
  country: "Cambodia",
  "favorite-sport": "Football"
};

// Dot Notation
console.log(person.name); // "Alice"
console.log(person.age);  // 20

// Bracket Notation (ប្រើពេលមានសញ្ញាពិសេស ឬអថេរ)
console.log(person["favorite-sport"]); // "Football"
const targetProp = "country";
console.log(person[targetProp]);       // "Cambodia"`
      },
      {
        title: 'Properties & Methods លើ Object ឡាន (Car)',
        description: 'ការកំណត់ Properties និង Methods ជាមួយនឹងពាក្យគន្លឹះ this',
        code: `const car = {
  brand: "Toyota",
  model: "Prius",
  year: 2022,
  color: "White",
  speed: 0,
  isRunning: false,

  start() {
    this.isRunning = true;
    console.log(this.brand + " " + this.model + " is ready to drive!");
  },

  accelerate(amount) {
    if (!this.isRunning) {
      console.log("Please start the car first!");
      return;
    }
    this.speed += amount;
    console.log("Current speed: " + this.speed + " km/h");
  },

  brake() {
    this.speed = 0;
    console.log("Car stopped smoothly.");
  }
};

car.start();
car.accelerate(50);
car.brake();`
      },
      {
        title: 'Object Student ពេញលេញជាមួយ ES6 Shorthand',
        description: 'Object ផ្ទុក Arrays, Properties, និង Methods បង្ហាញព័ត៌មាន',
        code: `const student = {
  name: "Sothea",
  age: 18,
  grade: 12,
  subjects: ["Math", "Physics", "Biology"],

  greet() {
    console.log("Hi, my name is " + this.name + " and I'm " + this.age + " years old.");
  },

  listSubjects() {
    console.log("My enrolled subjects (" + this.subjects.length + "):");
    this.subjects.forEach((subject, index) => {
      console.log("  " + (index + 1) + ". " + subject);
    });
  },

  addSubject(newSubject) {
    this.subjects.push(newSubject);
    console.log("Added subject: " + newSubject);
  }
};

student.greet();
student.listSubjects();
student.addSubject("Chemistry");
student.listSubjects();`
      },
      {
        title: 'Destructuring និង Spread Operator ជាមួយ Object',
        description: 'ការទាញយក Properties ជាអថេរ និងការ Clone/Merge Object ដោយសុវត្ថិភាព',
        code: `const student = { name: "Bopha", age: 19, major: "Computer Science" };

// Object Destructuring
const { name, major } = student;
console.log(name, major); // "Bopha", "Computer Science"

// Object Spread Operator (...)
const updatedStudent = {
  ...student,
  gpa: 3.85,
  graduated: false
};
console.log(updatedStudent);`
      }
    ],
    guidedPractice: {
      title: 'Interactive Student Profile & Portal System',
      description: 'កម្មវិធីគ្រប់គ្រងព័ត៌មាននិស្សិត "Student Profile Card" ដោយប្រើប្រាស់ JavaScript Object, Properties, Methods (this), Dot/Bracket Notation និង Interactive Console',
      runnableJsCode: `// ការបង្កើត Student Object ជាមួយ Properties និង Methods
const student = {
  id: "STU-2026-001",
  name: "Sothea Chan",
  age: 18,
  gender: "ប្រុស",
  major: "Software Engineering",
  school: "Institute of Technology of Cambodia",
  subjects: ["Web Programming", "Calculus I", "Data Structures"],
  scores: {
    "Web Programming": 92,
    "Calculus I": 85,
    "Data Structures": 88
  },
  
  greet() {
    return "Hi, my name is " + this.name + " and I'm " + this.age + " years old!";
  },

  calculateAverage() {
    const keys = Object.keys(this.scores);
    if (keys.length === 0) return 0;
    const total = keys.reduce((sum, key) => sum + this.scores[key], 0);
    return (total / keys.length).toFixed(1);
  },

  addSubject(subjectName, score = 80) {
    if (!this.subjects.includes(subjectName)) {
      this.subjects.push(subjectName);
    }
    this.scores[subjectName] = score;
    return "បានបញ្ចូលមុខវិជ្ជា " + subjectName + " ដោយជោគជ័យ!";
  }
};

console.log("=== ព័ត៌មានសិស្ស ===");
console.log(student.greet());
console.log("មធ្យមភាគពិន្ទុបច្ចុប្បន្ន:", student.calculateAverage());
console.log("Dot Notation (student.name):", student.name);
console.log("Bracket Notation (student['major']):", student["major"]);
console.log(student.addSubject("Artificial Intelligence", 95));
console.log("មធ្យមភាគពិន្ទុថ្មី:", student.calculateAverage());`,
      files: [
        {
          filename: 'index.html',
          language: 'html',
          code: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <title>Student Profile & Portal System</title>
  <link rel="stylesheet" href="style.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Kantumruy+Pro:wght@400;600;700&family=Fira+Code:wght@400;600&display=swap" rel="stylesheet">
</head>
<body>
  <div class="app-container">
    <header class="app-header">
      <div class="header-badge">JavaScript Lesson 7 Guided Practice</div>
      <h1>🎓 ប្រព័ន្ធគ្រប់គ្រងព័ត៌មាននិស្សិត (Student Object)</h1>
      <p>រៀនពីការគ្រប់គ្រង Data & Behavior តាមរយៈ JavaScript Object, Methods, Dot & Bracket Notation</p>
    </header>

    <div class="main-layout">
      <!-- ផ្នែក Profile Card បង្ហាញទិន្នន័យ Object -->
      <div class="profile-card">
        <div class="card-banner"></div>
        <div class="avatar-wrapper">
          <div class="avatar">SC</div>
        </div>
        <div class="student-info">
          <h2 id="disp-name">Sothea Chan</h2>
          <p class="meta-tag" id="disp-meta">អាយុ: 18 ឆ្នាំ | ជំនាញ: Software Engineering</p>
          <p class="school-name" id="disp-school">🏫 Institute of Technology of Cambodia</p>
        </div>

        <div class="stat-grid">
          <div class="stat-box">
            <span class="stat-label">លេខសម្គាល់ (ID)</span>
            <span class="stat-value" id="disp-id">STU-2026-001</span>
          </div>
          <div class="stat-box">
            <span class="stat-label">មុខវិជ្ជាសរុប</span>
            <span class="stat-value" id="disp-sub-count">3</span>
          </div>
          <div class="stat-box highlight">
            <span class="stat-label">មធ្យមភាគ (GPA)</span>
            <span class="stat-value" id="disp-gpa">88.3</span>
          </div>
        </div>

        <div class="subjects-section">
          <h3>📚 មុខវិជ្ជា និងពិន្ទុ (Scores & Subjects)</h3>
          <ul id="subjects-list" class="subjects-list"></ul>
        </div>
      </div>

      <!-- ផ្ទាំងបញ្ជា និងសាកល្បង Methods / Properties -->
      <div class="controls-card">
        <h3>⚡ សាកល្បង Object Members (Interactive Controls)</h3>
        
        <div class="control-group">
          <label>ហៅដំណើរការ Methods (Object Methods):</label>
          <div class="btn-group">
            <button id="btn-greet" class="btn btn-primary">student.greet()</button>
            <button id="btn-gpa" class="btn btn-primary">student.calculateAverage()</button>
            <button id="btn-list" class="btn btn-secondary">student.listSubjects()</button>
          </div>
        </div>

        <div class="control-group">
          <label>Access Properties (Dot vs Bracket Notation):</label>
          <div class="btn-group">
            <button id="btn-dot" class="btn btn-outline">Dot: student.name</button>
            <button id="btn-bracket" class="btn btn-outline">Bracket: student["major"]</button>
            <button id="btn-dynamic" class="btn btn-outline">Dynamic: student[prop]</button>
          </div>
        </div>

        <div class="control-group add-subject-form">
          <label>បន្ថែមមុខវិជ្ជាថ្មីតាម Method \`student.addSubject()\`: </label>
          <div class="input-inline">
            <input type="text" id="input-subject" placeholder="ឈ្មោះមុខវិជ្ជា (ឧ. AI, Network)...">
            <input type="number" id="input-score" placeholder="ពិន្ទុ" min="0" max="100" value="85">
            <button id="btn-add-subject" class="btn btn-success">+ បន្ថែម</button>
          </div>
        </div>

        <!-- Developer Output Console -->
        <div class="console-box">
          <div class="console-header">
            <span>💻 លទ្ធផលដំណើរការ (Console Output)</span>
            <button id="btn-clear" class="btn-clear">Clear</button>
          </div>
          <pre id="console-output" class="console-screen">// កំពុងរង់ចាំការដំណើរការកូដ...</pre>
        </div>
      </div>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>`
        },
        {
          filename: 'style.css',
          language: 'css',
          code: `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Kantumruy Pro', -apple-system, BlinkMacSystemFont, sans-serif;
  background-color: #0f172a;
  color: #f1f5f9;
  line-height: 1.6;
  padding: 24px;
}

.app-container {
  max-width: 1100px;
  margin: 0 auto;
}

.app-header {
  text-align: center;
  margin-bottom: 28px;
}

.header-badge {
  display: inline-block;
  background: rgba(59, 130, 246, 0.15);
  color: #60a5fa;
  border: 1px solid rgba(59, 130, 246, 0.3);
  padding: 4px 12px;
  border-radius: 9999px;
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 10px;
}

.app-header h1 {
  font-size: 26px;
  color: #ffffff;
  margin-bottom: 8px;
}

.app-header p {
  color: #94a3b8;
  font-size: 14px;
}

.main-layout {
  display: grid;
  grid-template-columns: 380px 1fr;
  gap: 24px;
}

@media (max-width: 860px) {
  .main-layout {
    grid-template-columns: 1fr;
  }
}

/* Profile Card Styling */
.profile-card {
  background: #1e293b;
  border-radius: 16px;
  border: 1px solid #334155;
  overflow: hidden;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
}

.card-banner {
  height: 90px;
  background: linear-gradient(135deg, #2563eb, #7c3aed);
}

.avatar-wrapper {
  margin-top: -45px;
  display: flex;
  justify-content: center;
}

.avatar {
  width: 80px;
  height: 80px;
  background: #0f172a;
  border: 4px solid #1e293b;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 700;
  color: #38bdf8;
}

.student-info {
  text-align: center;
  padding: 12px 20px 16px;
}

.student-info h2 {
  font-size: 20px;
  color: #f8fafc;
}

.meta-tag {
  color: #94a3b8;
  font-size: 13px;
  margin-top: 4px;
}

.school-name {
  color: #38bdf8;
  font-size: 13px;
  margin-top: 4px;
  font-weight: 600;
}

.stat-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 8px;
  padding: 0 16px 16px;
}

.stat-box {
  background: #0f172a;
  border: 1px solid #334155;
  border-radius: 10px;
  padding: 10px 6px;
  text-align: center;
}

.stat-box.highlight {
  border-color: #3b82f6;
  background: rgba(59, 130, 246, 0.1);
}

.stat-label {
  display: block;
  font-size: 11px;
  color: #94a3b8;
}

.stat-value {
  display: block;
  font-size: 15px;
  font-weight: 700;
  color: #f1f5f9;
  margin-top: 2px;
}

.stat-box.highlight .stat-value {
  color: #60a5fa;
}

.subjects-section {
  padding: 16px;
  border-top: 1px solid #334155;
}

.subjects-section h3 {
  font-size: 14px;
  color: #cbd5e1;
  margin-bottom: 12px;
}

.subjects-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-height: 220px;
  overflow-y: auto;
}

.subject-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #0f172a;
  border: 1px solid #334155;
  border-radius: 8px;
  padding: 8px 12px;
  font-size: 13px;
}

.score-badge {
  background: rgba(16, 185, 129, 0.2);
  color: #34d399;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 6px;
  font-size: 12px;
}

/* Controls Card */
.controls-card {
  background: #1e293b;
  border-radius: 16px;
  border: 1px solid #334155;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.controls-card h3 {
  font-size: 16px;
  color: #38bdf8;
}

.control-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.control-group label {
  font-size: 13px;
  color: #cbd5e1;
  font-weight: 600;
}

.btn-group {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.btn {
  font-family: inherit;
  font-size: 13px;
  font-weight: 600;
  padding: 8px 14px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-primary {
  background: #2563eb;
  color: white;
}
.btn-primary:hover {
  background: #1d4ed8;
}

.btn-secondary {
  background: #475569;
  color: #f8fafc;
}
.btn-secondary:hover {
  background: #334155;
}

.btn-outline {
  background: transparent;
  color: #93c5fd;
  border: 1px solid #3b82f6;
}
.btn-outline:hover {
  background: rgba(59, 130, 246, 0.1);
}

.btn-success {
  background: #059669;
  color: white;
}
.btn-success:hover {
  background: #047857;
}

.input-inline {
  display: flex;
  gap: 8px;
}

.input-inline input[type="text"] {
  flex: 1;
  background: #0f172a;
  border: 1px solid #334155;
  color: #f8fafc;
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 13px;
}

.input-inline input[type="number"] {
  width: 75px;
  background: #0f172a;
  border: 1px solid #334155;
  color: #f8fafc;
  padding: 8px 10px;
  border-radius: 8px;
  font-size: 13px;
}

.console-box {
  margin-top: 8px;
  background: #090d16;
  border: 1px solid #1e293b;
  border-radius: 12px;
  overflow: hidden;
}

.console-header {
  background: #131b2e;
  padding: 8px 14px;
  font-size: 12px;
  font-weight: 600;
  color: #94a3b8;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.btn-clear {
  background: transparent;
  border: 1px solid #334155;
  color: #94a3b8;
  font-size: 11px;
  padding: 2px 8px;
  border-radius: 4px;
  cursor: pointer;
}
.btn-clear:hover {
  background: #1e293b;
  color: white;
}

.console-screen {
  padding: 14px;
  font-family: 'Fira Code', monospace;
  font-size: 12px;
  color: #38bdf8;
  min-height: 120px;
  max-height: 180px;
  overflow-y: auto;
  white-space: pre-wrap;
  line-height: 1.5;
}`
        },
        {
          filename: 'script.js',
          language: 'javascript',
          code: `// ១. ការបង្កើត Student Object ដែលមាន Properties និង Methods
const student = {
  name: "Sothea Chan",
  id: "STU-2026-001",
  age: 18,
  school: "Institute of Technology of Cambodia",
  major: "Software Engineering",
  subjects: ["Web Programming", "Calculus I", "Data Structures"],
  scores: {
    "Web Programming": 92,
    "Calculus I": 85,
    "Data Structures": 88
  },

  // Method ១: ស្វាគមន៍ (ប្រើ this.name និង this.age)
  greet() {
    return "Hi, my name is " + this.name + " and I'm " + this.age + " years old.";
  },

  // Method ២: រាយនាមុខវិជ្ជាទាំងអស់
  listSubjects() {
    let result = "My subjects are:\\n";
    this.subjects.forEach((subj, idx) => {
      result += (idx + 1) + ". " + subj + " (Score: " + (this.scores[subj] || 0) + ")\\n";
    });
    return result.trim();
  },

  // Method ៣: គណនាមធ្យមភាគពិន្ទុ
  calculateAverage() {
    const keys = Object.keys(this.scores);
    if (keys.length === 0) return 0;
    const total = keys.reduce((sum, key) => sum + this.scores[key], 0);
    return (total / keys.length).toFixed(1);
  },

  // Method ៤: បន្ថែមមុខវិជ្ជា និងពិន្ទុថ្មី
  addSubject(subjectName, score) {
    if (!this.subjects.includes(subjectName)) {
      this.subjects.push(subjectName);
    }
    this.scores[subjectName] = Number(score);
    return "✅ បានបញ្ចូលមុខវិជ្ជា '" + subjectName + "' ពិន្ទុ " + score + " ដោយជោគជ័យ!";
  }
};

// UI Elements
const dispName = document.getElementById("disp-name");
const dispMeta = document.getElementById("disp-meta");
const dispSchool = document.getElementById("disp-school");
const dispId = document.getElementById("disp-id");
const dispSubCount = document.getElementById("disp-sub-count");
const dispGpa = document.getElementById("disp-gpa");
const subjectsListEl = document.getElementById("subjects-list");
const consoleOutput = document.getElementById("console-output");

// កំណត់ log ទៅកាន់ Developer Console
function logToConsole(message) {
  const time = new Date().toLocaleTimeString();
  consoleOutput.textContent += "\\n[" + time + "] " + message;
  consoleOutput.scrollTop = consoleOutput.scrollHeight;
}

// ធ្វើបច្ចុប្បន្នភាព UI តាមទិន្នន័យ Object
function renderUI() {
  dispName.textContent = student.name;
  dispMeta.textContent = "អាយុ: " + student.age + " ឆ្នាំ | ជំនាញ: " + student.major;
  dispSchool.textContent = "🏫 " + student.school;
  dispId.textContent = student.id;
  dispSubCount.textContent = student.subjects.length;
  dispGpa.textContent = student.calculateAverage();

  subjectsListEl.innerHTML = "";
  student.subjects.forEach(sub => {
    const li = document.createElement("li");
    li.className = "subject-item";
    li.innerHTML = "<span>" + sub + "</span><span class='score-badge'>" + (student.scores[sub] || 0) + " pts</span>";
    subjectsListEl.appendChild(li);
  });
}

// Event Listeners សម្រាប់សាកល្បង Methods & Properties
document.getElementById("btn-greet").addEventListener("click", () => {
  const msg = student.greet();
  logToConsole("⚡ ដំណើរការ student.greet() -> \\"" + msg + "\\"");
});

document.getElementById("btn-gpa").addEventListener("click", () => {
  const avg = student.calculateAverage();
  logToConsole("⚡ ដំណើរការ student.calculateAverage() -> GPA: " + avg);
});

document.getElementById("btn-list").addEventListener("click", () => {
  const list = student.listSubjects();
  logToConsole("⚡ ដំណើរការ student.listSubjects():\\n" + list);
});

document.getElementById("btn-dot").addEventListener("click", () => {
  logToConsole("🔎 Dot Notation [student.name]: " + student.name);
});

document.getElementById("btn-bracket").addEventListener("click", () => {
  logToConsole("🔎 Bracket Notation [student[\\"major\\"]]: " + student["major"]);
});

document.getElementById("btn-dynamic").addEventListener("click", () => {
  const dynamicKey = "school";
  logToConsole("🔎 Dynamic Key [const key = \\"school\\"; student[key]]: " + student[dynamicKey]);
});

document.getElementById("btn-add-subject").addEventListener("click", () => {
  const nameInput = document.getElementById("input-subject");
  const scoreInput = document.getElementById("input-score");
  const subName = nameInput.value.trim();
  const subScore = Number(scoreInput.value) || 75;

  if (!subName) {
    logToConsole("⚠️ សូមបញ្ចូលឈ្មោះមុខវិជ្ជាជាមុនសិន!");
    return;
  }

  const result = student.addSubject(subName, subScore);
  renderUI();
  logToConsole(result);
  nameInput.value = "";
});

document.getElementById("btn-clear").addEventListener("click", () => {
  consoleOutput.textContent = "// អេក្រង់ត្រូវបានសម្អាត។";
});

// Render UI ដំបូងពេលផ្ទុកទំព័រ
renderUI();
logToConsole("🚀 Student Object System Ready! Click buttons to test methods.");`
        }
      ],
      expectedOutput: 'បង្ហាញផ្ទាំង Student Profile Card ដ៏ទំនើប រួមមានព័ត៌មាននិស្សិត ពិន្ទុ មធ្យមភាគ GPA និងប៊ូតុងចុចតេស្ត Methods (greet, calculateAverage, listSubjects), Dot/Bracket Notation និងប្រអប់បន្ថែមមុខវិជ្ជាថ្មីភ្លាមៗ។'
    },
    commonMistakes: [
      {
        mistake: 'ភ្លេចប្រើពាក្យគន្លឹះ "this" នៅខាងក្នុង Method',
        cause: 'នៅពេលហៅប្រើ Property របស់ Object ខ្លួនឯងក្នុង Method ប្រសិនបើសរសេរត្រឹមតែ `name` កុំព្យូទ័រនឹងស្វែងរកអថេរ Global មិនមែន Property របស់ Object ឡើយ ដែលបណ្តាលឱ្យ Error "ReferenceError: name is not defined"',
        wrongCode: `const student = {
  name: "Sothea",
  greet() {
    console.log("Hi " + name); // ❌ Error: name is not defined
  }
};`,
        fixedCode: `const student = {
  name: "Sothea",
  greet() {
    console.log("Hi " + this.name); // ✅ ត្រឹមត្រូវដោយប្រើ this.name
  }
};`,
        fix: 'ប្រើ `this.propertyName` ជានិច្ចនៅពេលចង់ចូលប្រើ Property របស់ Object នោះនៅក្នុង Method'
      },
      {
        mistake: 'ប្រើ Dot Notation ជាមួយ Property Name ដែលមានសញ្ញាដក (-) ឬដកឃ្លា',
        cause: 'JavaScript ចាត់ទុកសញ្ញាដក (-) ជាប្រមាណវិធីដកលេខ ដូច្នេះ `person.home-address` នឹងក្លាយជា `(person.home) - address` ដែលបង្កជា Error',
        wrongCode: `const person = { "home-address": "Phnom Penh" };
console.log(person.home-address); // ❌ SyntaxError ឬ ReferenceError`,
        fixedCode: `const person = { "home-address": "Phnom Penh" };
console.log(person["home-address"]); // ✅ ត្រឹមត្រូវតាមរយៈ Bracket Notation`,
        fix: 'ប្រើ Bracket Notation (`object["property-name"]`) នៅពេលឈ្មោះ Key មានសញ្ញាពិសេស ដកឃ្លា ឬជាអក្សរចល័ត'
      },
      {
        mistake: 'ភ្លេចដាក់សញ្ញាវង់ក្រចក () ពេលហៅដំណើរការ Method',
        cause: 'ការសរសេរ `student.greet` ដោយគ្មាន `()` គឺគ្រាន់តែទាញយកនិយមន័យរបស់ Function ប៉ុណ្ណោះ មិនមែនជាការ Execute ឱ្យចេញលទ្ធផលឡើយ',
        wrongCode: 'console.log(student.greet); // បង្ហាញ [Function: greet]',
        fixedCode: 'console.log(student.greet()); // បង្ហាញ "Hi, my name is Sothea..."',
        fix: 'បន្ថែមសញ្ញាវង់ក្រចក `()` ពីក្រោយឈ្មោះ Method ជានិច្ចដើម្បីដំណើរការវា'
      },
      {
        mistake: 'ចម្លង Object ដោយប្រើសញ្ញាស្មើ (=) ត្រង់ៗ',
        cause: 'សញ្ញាស្មើ (=) គ្រាន់តែចម្លង Memory Address (Reference Pointer) មិនមែនបង្កើត Object ថ្មីឡើយ។ ពេលកែប្រែ Object ថ្មី វានឹងធ្វើឱ្យ Object ចាស់ប្រែប្រួលតាមដែរ',
        wrongCode: `const user1 = { name: "Alice" };
const user2 = user1; // ❌ Reference copy
user2.name = "Bob";
console.log(user1.name); // ក្លាយជា "Bob" ដែរ!`,
        fixedCode: `const user1 = { name: "Alice" };
const user2 = { ...user1 }; // ✅ Shallow copy តាមរយៈ Spread Operator
user2.name = "Bob";
console.log(user1.name); // នៅតែជា "Alice" ដដែល`,
        fix: 'ប្រើ Spread Operator `{ ...originalObject }` ឬ `Object.assign({}, originalObject)` ដើម្បី Clone Object ថ្មីដោយសុវត្ថិភាព'
      }
    ],
    exercises: [
      {
        level: 'មូលដ្ឋាន (Basic)',
        prompt: 'ចូរបង្កើត Object មួយឈ្មោះថា "person" ដោយប្រើ Object Literal ដែលមាន Properties: name (Alice), age (20), country (Cambodia)។ បន្ទាប់មកសាកល្បងបង្ហាញតម្លៃតាមរយៈ Dot Notation និង Bracket Notation។',
        solutionCode: `// ១. បង្កើត Object person
const person = {
  name: "Alice",
  age: 20,
  country: "Cambodia"
};

// ២. បង្ហាញតាម Dot Notation
console.log(person.name);    // "Alice"
console.log(person.age);     // 20

// ៣. បង្ហាញតាម Bracket Notation
console.log(person["country"]); // "Cambodia"

// ៤. បង្ហាញតាមអថេរចល័ត
const prop = "name";
console.log(person[prop]);   // "Alice"`,
        explanation: 'ប្រើ Object Literal syntax `{}` ដើម្បីប្រកាស Object ហើយចូលប្រើតម្លៃតាម Dot Notation `person.name` និង Bracket Notation `person["country"]`។'
      },
      {
        level: 'អនុវត្ត (Practical)',
        prompt: 'ចូរបង្កើត Object ឡាន "car" ដែលមាន Properties: brand ("Toyota"), model ("Prius"), year (2022), speed (0) និង Methods: accelerate(amount) បង្កើនល្បឿន និង brake() បញ្ឈប់ល្បឿនមក 0 វិញដោយប្រើពាក្យគន្លឹះ this។',
        solutionCode: `const car = {
  brand: "Toyota",
  model: "Prius",
  year: 2022,
  speed: 0,

  accelerate(amount) {
    this.speed += amount;
    console.log(this.brand + " " + this.model + " speed is now: " + this.speed + " km/h");
  },

  brake() {
    this.speed = 0;
    console.log(this.brand + " " + this.model + " has stopped completely.");
  }
};

// សាកល្បងដំណើរការ៖
car.accelerate(40); // speed is now: 40 km/h
car.accelerate(25); // speed is now: 65 km/h
car.brake();         // has stopped completely.`,
        explanation: 'ប្រើពាក្យគន្លឹះ `this.speed` ដើម្បីផ្លាស់ប្តូរតម្លៃ speed របស់ car Object ផ្ទាល់នៅពេល Method ត្រូវបានហៅដំណើរការ។'
      },
      {
        level: 'ប្រកួតប្រជែង (Challenge)',
        prompt: 'ចូរបង្កើត Object "student" ពេញលេញមួយដែលមាន name, age, subjects (Array នៃមុខវិជ្ជា) និង Method greet() រួមជាមួយ Method listSubjects() ដែលធ្វើការ loop លើ array នៃមុខវិជ្ជារួច print បង្ហាញលេខរៀង (1, 2, 3...) និងឈ្មោះមុខវិជ្ជានីមួយៗ។',
        solutionCode: `const student = {
  name: "Sothea",
  age: 18,
  subjects: ["Math", "Physics", "Biology"],

  greet() {
    console.log("Hi, my name is " + this.name + " and I'm " + this.age + " years old.");
  },

  listSubjects() {
    console.log("My subjects are:");
    this.subjects.forEach((subject, index) => {
      console.log((index + 1) + ". " + subject);
    });
  }
};

// សាកល្បងហៅ Methods:
student.greet();
student.listSubjects();`,
        explanation: 'ប្រើ `this.subjects.forEach((subject, index) => { ... })` ដើម្បីទាញយកមុខវិជ្ជា និង Index សម្រាប់បង្ហាញលេខរៀងយ៉ាងរៀបរយ។'
      }
    ],
    quiz: [
      {
        id: 1,
        question: 'នៅក្នុង JavaScript តើ "Properties" និង "Methods" នៃ Object ខុសគ្នាដូចម្តេច?',
        options: [
          'Properties គឺជាតម្លៃ (Values/Data) រីឯ Methods គឺជាសកម្មភាព ឬមុខងារ (Functions)',
          'Properties គឺជា Functions រីឯ Methods គឺជា Variables ធម្មតា',
          'Properties អាចប្រើបានតែជាមួយ Array រីឯ Methods ប្រើជាមួយលេខ',
          'គ្មានអ្វីខុសគ្នាទេ គឺដូចគ្នាបេះបិទ'
        ],
        correctIndex: 0,
        explanation: 'Properties គឺជាតម្លៃដែលភ្ជាប់ជាមួយ Object (ពិពណ៌នាពីស្ថានភាព ឬលក្ខណៈ) រីឯ Methods គឺជាសកម្មភាព (Functions) ដែលមានអំពើលើ Object នោះ។'
      },
      {
        id: 2,
        question: 'តើវិធីណាដែលពេញនិយម សាមញ្ញ និងត្រូវបានណែនាំបំផុតក្នុងការបង្កើត Object ក្នុង JavaScript?',
        options: [
          'Object Literal syntax ដូចជា const person = { name: "Alice" };',
          'ប្រើ new Object() ជានិច្ច',
          'ប្រើ eval() function',
          'ប្រើ document.createObject()'
        ],
        correctIndex: 0,
        explanation: 'Object Literal syntax ({}) គឺជាវិធីសាស្រ្តពេញនិយមបំផុត ព្រោះខ្លី ងាយស្រួលអាន និងមានប្រសិទ្ធភាពខ្ពស់។'
      },
      {
        id: 3,
        question: 'ប្រសិនបើ property name មានសញ្ញាដក ឧទាហរណ៍ "home-address" តើត្រូវចូលប្រើ (Access) វាដោយរបៀបណា?',
        options: [
          'person["home-address"] (Bracket Notation)',
          'person.home-address (Dot Notation)',
          'person->home-address',
          'person(home-address)'
        ],
        correctIndex: 0,
        explanation: 'ពេល Property name មានសញ្ញាពិសេស (ដូចជា -) ឬដកឃ្លា ឬជាអថេរចល័ត យើងត្រូវតែប្រើ Bracket Notation person["home-address"]។'
      },
      {
        id: 4,
        question: 'នៅពេលបង្កើត Method ក្នុង Object តើពាក្យគន្លឹះ "this" សំដៅទៅលើអ្វី?',
        options: [
          'សំដៅទៅលើ Object ផ្ទាល់ដែលកំពុងហៅដំណើរការ Method នោះ',
          'សំដៅទៅលើ Global Window Object ជានិច្ច',
          'សំដៅទៅលើ HTML Page ទាំងមូល',
          'សំដៅទៅលើ Function Arguments'
        ],
        correctIndex: 0,
        explanation: 'ពាក្យគន្លឹះ "this" នៅខាងក្នុង Object Method សំដៅលើ instance នៃ Object ផ្ទាល់ ដែលអនុញ្ញាតឱ្យ Method ចូលប្រើ properties ដទៃទៀតបាន (ឧ. this.name)។'
      },
      {
        id: 5,
        question: 'ប្រសិនបើអ្នកមាន var message = "Hello World!"; var x = message.length; តើតម្លៃនៃ x ស្មើនឹងប៉ុន្មាន ហើយ length ជាអ្វី?',
        options: [
          'x = 12, ហើយ length គឺជា Property នៃ String Object',
          'x = 11, ហើយ length គឺជា Method',
          'x = 10, ហើយ length គឺជា Variable ធម្មតា',
          'x = 13, ហើយ length គឺជា Event'
        ],
        correctIndex: 0,
        explanation: '"Hello World!" មានចំនួន ១២ តួអក្សរ (រាប់ទាំងដកឃ្លា) ហើយ .length គឺជា Property ដែលកំណត់ប្រវែងនៃ String Object។'
      },
      {
        id: 6,
        question: 'តើកូដមួយណាជា ES6 Shorthand Syntax ត្រឹមត្រូវសម្រាប់ប្រកាស Method ក្នុង Object?',
        options: [
          'const obj = { greet() { console.log("Hi"); } };',
          'const obj = { function greet() { console.log("Hi"); } };',
          'const obj = { def greet() { console.log("Hi"); } };',
          'const obj = { method:greet() => { console.log("Hi"); } };'
        ],
        correctIndex: 0,
        explanation: 'ES6 Shorthand អនុញ្ញាតឱ្យយើងសរសេរ greet() { ... } ជំនួសឱ្យ greet: function() { ... } យ៉ាងខ្លី និងស្រស់ស្អាត។'
      }
    ],
    summary: [
      'Everything in JavaScript behaves like an Object (Strings, Numbers, Arrays, Dates, Functions)',
      'Object Members រួមមាន Properties (ទិន្នន័យ/ស្ថានភាព) និង Methods (មុខងារ/សកម្មភាព)',
      'Object Literal ({}) គឺជាវិធីសាស្រ្តល្អបំផុត និងពេញនិយមបំផុតក្នុងការបង្កើត Object',
      'Dot Notation (obj.prop) ប្រើពេលឈ្មោះ Key ថេរ និងសាមញ្ញ',
      'Bracket Notation (obj["prop"] ឬ obj[var]) ប្រើពេលឈ្មោះ Key មានសញ្ញាពិសេស ឬជាអថេរ',
      'ពាក្យគន្លឹះ this នៅក្នុង Method តំណាងឱ្យ Object ផ្ទាល់ដែលកំពុងហៅដំណើរការ',
      'ជៀសវាងការចម្លង Object ដោយសញ្ញាស្មើ (=) ត្រង់ៗ គួរប្រើ Spread Operator ({ ...obj }) ដើម្បីធ្វើ Shallow Copy'
    ]
  },
  {
    id: 8,
    slug: 'dom-manipulation',
    titleKm: 'មេរៀនទី៨៖ ការគ្រប់គ្រង DOM (DOM Manipulation)',
    titleEn: 'Lesson 8: DOM Manipulation',
    category: 'DOM & Events',
    prerequisites: ['HTML Elements & Classes', 'មេរៀនទី៧ (Objects & Modern JS)'],
    learningOutcomes: [
      'យល់ពីរចនាសម្ព័ន្ធមែកធាង Document Object Model (DOM Tree)',
      'ជ្រើសរើស Elements ដោយ getElementById, querySelector, querySelectorAll',
      'កែប្រែ textContent, classList (add/remove/toggle), attributes',
      'បង្កើត និងបញ្ចូល Element ថ្មីដោយ createElement() និង append()',
      'លុប Element ដោយ remove() ឬ removeChild()'
    ],
    scenario: 'ការបង្កើតប័ណ្ណនិស្សិត (Student Card) ថ្មីនៅលើគេហទំព័រភ្លាមៗនៅពេលមានការបញ្ចូលទិន្នន័យ ដោយមិនបាច់ Reload ទំព័រ។',
    conceptsExplanation: `
### ១. ការជ្រើសរើស Elements ទំនើប
- **\`document.querySelector('.class')\`:** ជ្រើសរើស Element ទីមួយដែលត្រូវនឹង CSS Selector
- **\`document.querySelectorAll('.class')\`:** ជ្រើសរើសគ្រប់ Elements ដែលត្រូវគ្នា (ផ្តល់ជា NodeList ដែលអាច loop ដោយ forEach)

### ២. ការកែប្រែ Element
- **\`textContent\`:** សុវត្ថិភាពបំផុតសម្រាប់បញ្ចូលអក្សរ (ការពារ XSS Attack)
- **\`classList.add('active')\` / \`classList.remove('hidden')\` / \`classList.toggle('dark')\`:** គ្រប់គ្រង CSS Classes ដោយរលូន
- **\`document.createElement('div')\` & \`parent.append(child)\`:** បង្កើត Element ថ្មីក្នុង DOM
    `,
    syntaxExamples: [
      {
        title: 'ការបង្កើត Card និងបញ្ចូលក្នុង DOM',
        description: 'បង្កើតធាតុ li និងបន្ថែម class មុនពេល append',
        code: `const list = document.getElementById("student-list");
const item = document.createElement("li");
item.textContent = "សុខ សុវណ្ណ";
item.classList.add("student-badge");
list.append(item);`
      }
    ],
    guidedPractice: {
      title: 'Dynamic Student Card Creator',
      description: 'បង្កើត និងលុបប័ណ្ណនិស្សិតចេញពីទំព័រ',
      runnableJsCode: `console.log("DOM Simulation: បង្កើត <div class='card'>និស្សិត ក</div> រួច append ទៅកាន់ Container");`,
      files: [],
      expectedOutput: 'ប័ណ្ណថ្មីបង្ហាញលើអេក្រង់ភ្លាមៗ។'
    },
    commonMistakes: [
      {
        mistake: 'ប្រើ innerHTML ជាមួយទិន្នន័យពីអ្នកប្រើប្រាស់',
        cause: 'អាចបង្កហានិភ័យសុវត្ថិភាព XSS (Cross-Site Scripting Injection)',
        wrongCode: 'div.innerHTML = userInput;',
        fixedCode: 'div.textContent = userInput;',
        fix: 'ប្រើ textContent សម្រាប់ទិន្នន័យអត្ថបទសុទ្ធ'
      }
    ],
    exercises: [
      {
        level: 'មូលដ្ឋាន (Basic)',
        prompt: 'ចូរសរសេរកូដ JS បន្ថែម class "highlight" ទៅលើ Element ដែលមាន id="alert-box"។',
        solutionCode: 'document.getElementById("alert-box").classList.add("highlight");',
        explanation: 'ប្រើ classList.add()'
      }
    ],
    quiz: [
      {
        id: 1,
        question: 'តើ Method ណាដែលមានសុវត្ថិភាពបំផុតក្នុងការបញ្ចូលអត្ថបទរបស់អ្នកប្រើប្រាស់ទៅក្នុង Element?',
        options: ['innerHTML', 'textContent', 'document.write', 'outerHTML'],
        correctIndex: 1,
        explanation: 'textContent មិនបកប្រែ HTML tags ឡើយ ដូច្នេះមានសុវត្ថិភាពខ្ពស់ពី XSS attacks។'
      }
    ],
    summary: ['querySelector គាំទ្រ CSS selectors គ្រប់ប្រភេទ', 'classList ជួយបន្ថែម/ដកស្ទីល', 'createElement + append បង្កើត UI dynamic']
  },
  {
    id: 9,
    slug: 'event-handling',
    titleKm: 'មេរៀនទី៩៖ ការគ្រប់គ្រងព្រឹត្តិការណ៍ (Event Handling)',
    titleEn: 'Lesson 9: Event Handling & Event Delegation',
    category: 'DOM & Events',
    prerequisites: ['មេរៀនទី៨ (DOM Manipulation)', 'Callbacks'],
    learningOutcomes: [
      'ភ្ជាប់ Event ដោយប្រើ addEventListener()',
      'ស្គាល់ Events សំខាន់ៗ: click, input, change, submit, keydown',
      'ប្រើប្រាស់ Event Object (e.target, e.preventDefault())',
      'យល់ពីយន្តការ Event Bubbling និងអនុវត្ត Event Delegation'
    ],
    scenario: 'ការចុចលើប៊ូតុងលុបក្នុងតារាងទិន្នន័យ។ ប្រសិនបើតារាងមាន ១០០ ជួរ យើងមិនចាំបាច់ភ្ជាប់ ១០០ Event Listeners ទេ ដោយយើងប្រើ Event Delegation តែម្តងលើ Parent Element។',
    conceptsExplanation: `
### ១. addEventListener
ទម្រង់៖ \`element.addEventListener('click', (event) => { ... });\`

### ២. Event Object (e)
- **\`e.target\`:** ចង្អុលទៅកាន់ Element ជាក់លាក់ដែលបង្កឱ្យមាន Event
- **\`e.preventDefault()\`:** ទប់ស្កាត់ឥរិយាបថដើមរបស់ Browser (ដូចជាការ Reload ទំព័រពេល Submit Form)

### ៣. Event Delegation
ដោយសារ **Event Bubbling** ព្រឹត្តិការណ៍នឹងអណ្តែតពីកូនឡើងទៅរកឪពុក (Child -> Parent)។  
យើងអាចដាក់ Listener តែមួយលើ Parent រួចពិនិត្យ \`e.target\` ដើម្បីគ្រប់គ្រងធាតុជាច្រើន ទាំងធាតុចាស់ និងធាតុដែលទើបបង្កើតថ្មី។
    `,
    syntaxExamples: [
      {
        title: 'Event Delegation លើបញ្ជីកិច្ចការ',
        description: 'ចាប់ការចុចប៊ូតុងលុបក្នុងបញ្ជីដោយ Listener តែមួយ',
        code: `const todoList = document.getElementById("todo-list");
todoList.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const item = e.target.closest("li");
    item.remove();
    console.log("បានលុបធាតុមួយ!");
  }
});`
      }
    ],
    guidedPractice: {
      title: 'Interactive To-Do List Deletion',
      description: 'បញ្ជីកិច្ចការដែលអាចចុចលុបបានដោយប្រើ Delegation',
      runnableJsCode: `console.log("Delegation active: ចុចប៊ូតុង delete នឹងដកធាតុចេញពីបញ្ជី");`,
      files: [],
      expectedOutput: 'ធាតុក្នុងបញ្ជីត្រូវលុបចេញភ្លាមៗពេលចុចប៊ូតុងលុប។'
    },
    commonMistakes: [
      {
        mistake: 'ភ្លេច e.preventDefault() លើ Form Submit',
        cause: 'ធ្វើឱ្យ Browser Reload ទំព័រទាំងមូល និងបាត់បង់ទិន្នន័យក្នុង JS State',
        wrongCode: 'form.addEventListener("submit", () => { ... });',
        fixedCode: 'form.addEventListener("submit", (e) => { e.preventDefault(); ... });',
        fix: 'ហៅ e.preventDefault() នៅដើមបន្ទាត់ជានិច្ច'
      }
    ],
    exercises: [
      {
        level: 'មូលដ្ឋាន (Basic)',
        prompt: 'ចូរបង្កើតប៊ូតុង Toggle Dark Mode ដែលប្តូរ class "dark-theme" លើ document.body។',
        solutionCode: `const btn = document.getElementById("theme-toggle");
btn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});`,
        explanation: 'ប្រើ classList.toggle()'
      }
    ],
    quiz: [
      {
        id: 1,
        question: 'តើ Method ណាដែលប្រើសម្រាប់ទប់ស្កាត់ការ Refresh ទំព័រនៅពេល Submit Form?',
        options: ['e.stopPropagation()', 'e.preventDefault()', 'e.stop()', 'return false'],
        correctIndex: 1,
        explanation: 'e.preventDefault() ទប់ស្កាត់សកម្មភាពលំនាំដើមរបស់ Browser (Form submit reload)។'
      }
    ],
    summary: ['addEventListener ជាវិធីស្តង់ដារ', 'e.target ចង្អុលទៅ element ដែលចុច', 'Event Delegation សន្សំសំចៃ Memory និងគាំទ្រ dynamic elements']
  },
  {
    id: 10,
    slug: 'forms-and-validation',
    titleKm: 'មេរៀនទី១០៖ ទម្រង់បែបបទ និងការផ្ទៀងផ្ទាត់ (Forms & Validation)',
    titleEn: 'Lesson 10: Forms and Validation',
    category: 'DOM & Events',
    prerequisites: ['មេរៀនទី៩ (Event Handling & e.preventDefault)'],
    learningOutcomes: [
      'អានតម្លៃពី Inputs, Selects, Checkboxes តាមរយៈ .value',
      'សម្អាតចន្លោះទំនេរដោយ .trim()',
      'ពិនិត្យតម្លៃទទេ, មិនមែនលេខ (isNaN) និងចន្លោះកំណត់',
      'បង្ហាញសារកំហុស (Inline Error Messages) ក្បែរ Input',
      'យល់ច្បាស់ថា Client-side Validation មិនអាចជំនួស Server-side Validation បានឡើយ'
    ],
    scenario: 'ការចុះឈ្មោះនិស្សិត៖ ឈ្មោះមិនអាចទទេ អាយុត្រូវតែជាលេខចាប់ពី 16 ដល់ 60 ឆ្នាំ និង Email ត្រូវមានទម្រង់ត្រឹមត្រូវ។',
    conceptsExplanation: `
### ១. គោលការណ៍ពិនិត្យ Form
1. ស្ទាក់ចាប់ Event \`submit\` ជាមួយ \`e.preventDefault()\`
2. កាត់ចន្លោះទំនេរខាងមុខនិងក្រោយដោយ \`input.value.trim()\`
3. ពិនិត្យតម្លៃទទេ (\`value === ""\`)
4. ពិនិត្យលេខ៖ ប្រើ \`Number(val)\` និង \`isNaN()\`
5. បង្ហាញ Error Message ក្បែរប្រអប់ Input ផ្ទាល់ដើម្បីភាពងាយស្រួលដល់អ្នកប្រើ

### ២. ចំណាំសុវត្ថិភាព (Security Critical)
Client-side validation គឺសម្រាប់តែ **User Experience (UX)** ប៉ុណ្ណោះ ព្រោះអ្នកប្រើអាចបិទ JS ឬកែប្រែកូដបាន។ រាល់ទិន្នន័យសំខាន់ៗត្រូវតែពិនិត្យម្តងទៀតនៅ Server-side ជានិច្ច!
    `,
    syntaxExamples: [
      {
        title: 'ការពិនិត្យ Form Input សាមញ្ញ',
        description: 'ផ្ទៀងផ្ទាត់ឈ្មោះ និងអាយុ',
        code: `const name = nameInput.value.trim();
const age = Number(ageInput.value.trim());

if (!name) {
  showError("សូមបញ្ចូលឈ្មោះ!");
} else if (isNaN(age) || age < 16) {
  showError("អាយុត្រូវតែជាលេខចាប់ពី ១៦ ឡើងទៅ!");
} else {
  submitForm();
}`
      }
    ],
    guidedPractice: {
      title: 'Student Registration Validator',
      description: 'ទម្រង់ចុះឈ្មោះនិស្សិតជាមួយនឹងការផ្ទៀងផ្ទាត់កំហុសផ្ទាល់',
      runnableJsCode: `console.log("Validation simulation: បើ name ទទេ ឬ age < 16 -> បង្ហាញសារក្រហម");`,
      files: [],
      expectedOutput: 'បង្ហាញសារកំហុសពណ៌ក្រហមបើសិនជាបញ្ចូលទិន្នន័យមិនត្រឹមត្រូវ។'
    },
    commonMistakes: [
      {
        mistake: 'ភ្លេច trim() មុនពេលពិនិត្យតម្លៃទទេ',
        cause: 'បើសិនអ្នកប្រើវាយតែ Space ("   ") នោះ value មិនស្មើ "" ទេ ធ្វើឱ្យ validation ឆ្លងផុត',
        wrongCode: 'if (input.value === "")',
        fixedCode: 'if (input.value.trim() === "")',
        fix: 'ប្រើ .trim() ជានិច្ចលើ String Inputs'
      }
    ],
    exercises: [
      {
        level: 'មូលដ្ឋាន (Basic)',
        prompt: 'ចូរសរសេរកូដពិនិត្យ passwordInput ថាមានប្រវែងយ៉ាងតិច ៨ តួអក្សរ។',
        solutionCode: `if (passwordInput.value.length < 8) {
  console.log("លេខសម្ងាត់ត្រូវមានយ៉ាងតិច ៨ តួអក្សរ!");
}`,
        explanation: 'ប្រើ .value.length'
      }
    ],
    quiz: [
      {
        id: 1,
        question: 'តើ Client-side Validation អាចជំនួស Server-side Validation បានដែរឬទេ?',
        options: ['បាន ១០០%', 'មិនបានទេ ព្រោះអ្នកប្រើអាចបិទ ឬកែប្រែ JS បាន', 'បានតែលើ Chrome', 'បានបើតម្លៃជាលេខ'],
        correctIndex: 1,
        explanation: 'Client-side សម្រាប់តែ UX ប៉ុណ្ណោះ Server-side នៅតែជាជញ្ជាំងសុវត្ថិភាពចម្បង។'
      }
    ],
    summary: ['កាត់ Space ដោយ trim()', 'ពិនិត្យ isNaN() លើលេខ', 'Client-side មិនអាចជំនួស Server validation បានទេ']
  },
  {
    id: 11,
    slug: 'json-and-browser-storage',
    titleKm: 'មេរៀនទី១១៖ JSON និង Browser Storage',
    titleEn: 'Lesson 11: JSON and Browser Storage',
    category: 'Web APIs & Async',
    prerequisites: ['មេរៀនទី៧ (Objects & Arrays)', 'មេរៀនទី១០ (Forms)'],
    learningOutcomes: [
      'យល់ពីទម្រង់ JSON និងភាពខុសគ្នាពី JS Object',
      'ប្រើប្រាស់ JSON.stringify() និង JSON.parse()',
      'រក្សាទុក ទាញយក និងលុបទិន្នន័យក្នុង localStorage',
      'គ្រប់គ្រងកំហុស Parsing ដោយ try...catch',
      'រក្សាទុកបញ្ជីកិច្ចការមិនឱ្យបាត់ពេល Refresh ទំព័រ'
    ],
    scenario: 'អ្នកប្រើប្រាស់បានបង្កើតបញ្ជី To-Do List ប៉ុន្តែពេល Refresh ទំព័រ ទិន្នន័យបាត់អស់។ localStorage ជួយរក្សាទុកទិន្នន័យនោះជាប់រហូត។',
    conceptsExplanation: `
### ១. JSON (JavaScript Object Notation)
JSON ជាទម្រង់អត្ថបទស្តង់ដារសម្រាប់ផ្លាស់ប្តូរទិន្នន័យ។  
- **\`JSON.stringify(object)\`:** បំប្លែង JS Object/Array ទៅជា JSON String
- **\`JSON.parse(jsonString)\`:** បំប្លែង JSON String ត្រឡប់មកជា JS Object/Array

### ២. localStorage API
- \`localStorage.setItem('key', stringValue)\`៖ រក្សាទុក
- \`localStorage.getItem('key')\`៖ ទាញយកមកវិញ (បាន string ឬ null)
- \`localStorage.removeItem('key')\`៖ លុប key ជាក់លាក់
- \`localStorage.clear()\`៖ សម្អាតចោលទាំងអស់

> **បម្រាមសុវត្ថិភាព:** កុំរក្សាទុក Password, Secret API Keys ឬព័ត៌មានសម្ងាត់ក្នុង localStorage ព្រោះ script ផ្សេងៗអាចអានបាន!
    `,
    syntaxExamples: [
      {
        title: 'ការរក្សាទុក និងទាញយក Array ពី localStorage',
        description: 'ប្រើ JSON.stringify និង JSON.parse ជាមួយ try...catch',
        code: `const tasks = ["រៀន HTML", "រៀន JavaScript"];
localStorage.setItem("my_tasks", JSON.stringify(tasks));

const saved = localStorage.getItem("my_tasks");
const loadedTasks = saved ? JSON.parse(saved) : [];
console.log("កិច្ចការដែលបានទាញយក:", loadedTasks);`
      }
    ],
    guidedPractice: {
      title: 'Persistent To-Do Storage',
      description: 'ការរក្សាទុកទិន្នន័យជាប់ក្នុង Browser Storage',
      runnableJsCode: `const mockStore = {};
function save(k, v) { mockStore[k] = JSON.stringify(v); }
function load(k) { return mockStore[k] ? JSON.parse(mockStore[k]) : null; }
save("user", { name: "សុខា", theme: "dark" });
console.log("ទិន្នន័យដែលទាញបាន:", load("user"));`,
      files: [],
      expectedOutput: 'ទិន្នន័យត្រូវបានរក្សាទុកជា String និង parse មកវិញជា Object យ៉ាងត្រឹមត្រូវ។'
    },
    commonMistakes: [
      {
        mistake: 'រក្សាទុក Object ក្នុង localStorage ដោយមិន stringify',
        cause: 'localStorage ផ្ទុកបានតែ String ធ្វើឱ្យ Object ក្លាយជា "[object Object]" ខូចទិន្នន័យ',
        wrongCode: 'localStorage.setItem("user", userObj);',
        fixedCode: 'localStorage.setItem("user", JSON.stringify(userObj));',
        fix: 'ប្រើ JSON.stringify() ជានិច្ចមុននឹង setItem'
      }
    ],
    exercises: [
      {
        level: 'មូលដ្ឋាន (Basic)',
        prompt: 'ចូរកត់ត្រាឈ្មោះរបស់អ្នកក្នុង localStorage ក្រោម key "student_name" រួចទាញយកមក console.log បង្ហាញវិញ។',
        solutionCode: `localStorage.setItem("student_name", "ចាន់ ថារី");
console.log("ឈ្មោះដែលរក្សាទុក:", localStorage.getItem("student_name"));`,
        explanation: 'ប្រើ setItem និង getItem'
      }
    ],
    quiz: [
      {
        id: 1,
        question: 'តើ Method ណាដែលបំប្លែង JavaScript Object ទៅជា JSON String?',
        options: ['JSON.parse()', 'JSON.stringify()', 'JSON.toObject()', 'Object.toString()'],
        correctIndex: 1,
        explanation: 'JSON.stringify() បំប្លែង Object/Array ទៅជា JSON text string។'
      }
    ],
    summary: ['localStorage រក្សាទិន្នន័យទោះបិទ browser ក៏ដោយ', 'ប្រើ JSON.stringify ពេលរក្សាទុក និង JSON.parse ពេលទាញយក', 'កុំផ្ទុក Passwords ក្នុង localStorage']
  },
  {
    id: 12,
    slug: 'asynchronous-js-and-fetch',
    titleKm: 'មេរៀនទី១២៖ Asynchronous JavaScript និង Fetch API',
    titleEn: 'Lesson 12: Asynchronous JavaScript and Fetch',
    category: 'Web APIs & Async',
    prerequisites: ['មេរៀនទី៥ (Functions)', 'មេរៀនទី១១ (JSON)'],
    learningOutcomes: [
      'យល់ពីភាពខុសគ្នារវាង Synchronous និង Asynchronous Execution',
      'យល់ពី Promise States (pending, fulfilled, rejected)',
      'សរសេរ async/await ជាមួយ try...catch...finally',
      'ប្រើប្រាស់ Fetch API អានទិន្នន័យពី JSON File ឬ API ខាងក្រៅ',
      'គ្រប់គ្រង 4 UI States: Loading, Success, Error, Empty'
    ],
    scenario: 'ការទាញយកបញ្ជីផលិតផលពី Server ឬឯកសារ data.json តាមរយៈបណ្តាញអ៊ីនធឺណិត ដោយបង្ហាញ Spinner "កំពុងផ្ទុក..." កំឡុងពេលរង់ចាំ។',
    conceptsExplanation: `
### ១. Synchronous vs Asynchronous
- **Synchronous:** កូដដំណើរការរាំងខ្ទប់ជួរម្តងមួយៗ (Blocking)។ បើទាញទិន្នន័យយូរ ទំព័រនឹងគាំង។
- **Asynchronous (Fetch, setTimeout):** ដំណើរការក្នុង Background ដោយមិនរារាំងទំព័រឡើយ (Non-blocking)។

### ២. async / await ទំនើប
\`async/await\` ធ្វើឱ្យកូដ Promise អានស្រួលដូចកូដ Synchronous៖
\`\`\`javascript
async function loadData() {
  try {
    const res = await fetch('data.json');
    if (!res.ok) throw new Error('Network error');
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error("កំហុស:", err.message);
  } finally {
    console.log("បញ្ចប់ការទាញយក");
  }
}
\`\`\`
    `,
    syntaxExamples: [
      {
        title: 'Fetch API ជាមួយ async/await',
        description: 'ការទាញទិន្នន័យ និងពិនិត្យ res.ok',
        code: `async function getProducts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    if (!response.ok) throw new Error("ទាញទិន្នន័យមិនបាន!");
    const post = await response.json();
    console.log("ចំណងជើង:", post.title);
  } catch (error) {
    console.log("Error:", error.message);
  }
}
getProducts();`
      }
    ],
    guidedPractice: {
      title: 'Mock Product Fetcher',
      description: 'ទាញយកទិន្នន័យ និងគ្រប់គ្រង Loading State',
      runnableJsCode: `async function simulateFetch() {
  console.log("ស្ថានភាព: កំពុងផ្ទុក (Loading...)");
  await new Promise(r => setTimeout(r, 1000));
  const mockData = [{ id: 1, name: "Keyboard", price: 25 }];
  console.log("ស្ថានភាព: ជោគជ័យ (Success)", mockData);
}
simulateFetch();`,
      files: [],
      expectedOutput: 'បង្ហាញ Loading រយៈពេល ១ វិនាទី រួចបង្ហាញទិន្នន័យ។'
    },
    commonMistakes: [
      {
        mistake: 'ភ្លេចពាក្យគន្លឹះ await មុខ fetch ឬ res.json()',
        cause: 'បណ្តាលឱ្យទទួលបាន Promise object ជំនួសឱ្យទិន្នន័យពិត',
        wrongCode: 'const data = res.json();',
        fixedCode: 'const data = await res.json();',
        fix: 'ដាក់ await ទាំងមុខ fetch() និងមុខ res.json()'
      }
    ],
    exercises: [
      {
        level: 'មូលដ្ឋាន (Basic)',
        prompt: 'ចូរសរសេរ async function ដែលរង់ចាំ ២ វិនាទីដោយ setTimeout រួច log "សួស្តី"។',
        solutionCode: `async function delayHello() {
  await new Promise(r => setTimeout(r, 2000));
  console.log("សួស្តី!");
}
delayHello();`,
        explanation: 'ប្រើ Promise ជាមួយ setTimeout ក្នុង async function'
      }
    ],
    quiz: [
      {
        id: 1,
        question: 'តើត្រូវប្រើពាក្យគន្លឹះណាដើម្បីចាប់កំហុស (Error Handling) ក្នុង async/await?',
        options: ['if/else', 'try...catch', 'switch', 'onerror'],
        correctIndex: 1,
        explanation: 'try...catch ជាប្លុកស្តង់ដារសម្រាប់ចាប់ Exception ក្នុង async/await។'
      }
    ],
    summary: ['Asynchronous មិនរារាំង UI ឡើយ', 'async/await ធ្វើឱ្យកូដ Promise អានស្រួល', 'គ្រប់គ្រង Loading, Success, Error states ជានិច្ច']
  },
  {
    id: 13,
    slug: 'modules-and-debugging',
    titleKm: 'មេរៀនទី១៣៖ ម៉ូឌុល និងការកែកំហុស (Modules & Debugging)',
    titleEn: 'Lesson 13: ES Modules and Debugging Techniques',
    category: 'Architecture & Project',
    prerequisites: ['មេរៀនទី៥ (Functions)', 'មេរៀនទី១២ (Async)'],
    learningOutcomes: [
      'បែងចែកកូដជាឯកសារដាច់ដោយឡែកតាមមុខងារ (Modular Architecture)',
      'ប្រើ export, export default និង import',
      'ដាក់ script type="module" ក្នុង HTML',
      'ប្រើ DevTools Breakpoints ជំនួសឱ្យ console.log ច្រើនពេក',
      'បែងចែកប្រភេទកំហុស: Syntax, Runtime, Logic Errors'
    ],
    scenario: 'គម្រោងកម្មវិធីកាន់តែធំ កូដឡើងរាប់ពាន់បន្ទាត់ក្នុងឯកសារតែមួយ។ យើងបំបែកកូដជា math.js, dom.js, storage.js ដើម្បីងាយស្រួលថែទាំ។',
    conceptsExplanation: `
### ១. ES Modules (ESM)
- ក្នុង HTML៖ \`<script type="module" src="main.js"></script>\`
- **Named Export:** \`export const add = (a, b) => a + b;\` -> \`import { add } from './math.js';\`
- **Default Export:** \`export default function App() {}\` -> \`import App from './App.js';\`

### ២. បច្ចេកទេស Debugging ដោយ Breakpoints
ជំនួសឱ្យការសរសេរ \`console.log\` ពាសវាលពាសកាល៖
1. ចុច \`F12\` ចូលផ្ទាំង **Sources** ក្នុង Browser
2. ចុចលើលេខបន្ទាត់កូដដើម្បីដាក់ **Breakpoint**
3. ពេលកូដរត់ដល់ចំណុចនោះ Browser នឹងបង្កក (Pause) អនុញ្ញាតឱ្យយើងពិនិត្យមើលតម្លៃអថេរ និងបោះជំហានម្តងមួយជួរ (Step Over / Step Into)។
    `,
    syntaxExamples: [
      {
        title: 'ការបង្កើត និងទាញយក Module',
        description: 'បំបែកអនុគមន៍គណនា និងនាំចូលទៅប្រើ',
        code: `// math.js
export const sum = (a, b) => a + b;
export const multiply = (a, b) => a * b;

// main.js
import { sum, multiply } from './math.js';
console.log(sum(5, 10)); // 15`
      }
    ],
    guidedPractice: {
      title: 'Modular Code Restructuring',
      description: 'ការរៀបចំកូដគម្រោងតាម Modules',
      runnableJsCode: `console.log("Module system active: math.js + storage.js -> imported into main.js");`,
      files: [],
      expectedOutput: 'កូដដំណើរការរលូនដោយបែងចែកតាមមុខងារច្បាស់លាស់។'
    },
    commonMistakes: [
      {
        mistake: 'បើកឯកសារ module ដោយផ្ទាល់ (file://) គ្មាន Local Server',
        cause: 'Browser រារាំង ES Module ក្រោម file:// ដោយសារគោលការណ៍ CORS',
        wrongCode: 'double click index.html',
        fixedCode: 'បើកតាមរយៈ VS Code Live Server (http://localhost:5500)',
        fix: 'ប្រើ Local HTTP Server (Live Server, Vite) ជានិច្ចសម្រាប់ Modules'
      }
    ],
    exercises: [
      {
        level: 'មូលដ្ឋាន (Basic)',
        prompt: 'ចូរបង្កើត module មួយឈ្មោះ utils.js ដែល export អនុគមន៍ formatDate(date)។',
        solutionCode: `// utils.js
export function formatDate(date) {
  return new Date(date).toLocaleDateString();
}`,
        explanation: 'ប្រើពាក្យ export មុខ function declaration'
      }
    ],
    quiz: [
      {
        id: 1,
        question: 'តើ attribute ណាដែលត្រូវដាក់ក្នុង script tag ដើម្បីប្រើប្រាស់ import/export?',
        options: ['type="javascript"', 'type="module"', 'type="esm"', 'defer="module"'],
        correctIndex: 1,
        explanation: 'type="module" តម្រូវឱ្យមានសម្រាប់បើកដំណើរការ ES Modules ក្នុង Browser។'
      }
    ],
    summary: ['Modules ជួយកូដមានរបៀប និងងាយរក្សាទុក', 'ប្រើ Live Server សម្រាប់ module execution', 'Breakpoints ជួយរក Logic errors បានលឿន']
  },
  {
    id: 14,
    slug: 'final-mini-project',
    titleKm: 'មេរៀនទី១៤៖ គម្រោងបញ្ចប់ - Student Task Manager',
    titleEn: 'Lesson 14: Final Capstone Project - Student Task Manager',
    category: 'Architecture & Project',
    prerequisites: ['បញ្ចប់មេរៀនទី១ ដល់ ទី១៣ សព្វគ្រប់'],
    learningOutcomes: [
      'កសាងកម្មវិធី Front-End ពេញលេញដោយប្រើ Vanilla JavaScript សុទ្ធ',
      'អនុវត្ត CRUD Operations (Create, Read, Update, Delete) លើ Tasks',
      'រៀបចំ State Management ជាមួយ localStorage',
      'អនុវត្ត Form Validation, Search, Filter និង Empty State',
      'ធានា Responsive Layout និង Accessibility (Labels, Keyboard)'
    ],
    scenario: 'គម្រោងបញ្ចប់ការសិក្សា៖ បង្កើតកម្មវិធី Student Task Manager (កម្មវិធីគ្រប់គ្រងកិច្ចការសិស្ស) សម្រាប់ដំណើរការលើ Browser តែមួយដោយរក្សាទុកទិន្នន័យជាប់។',
    conceptsExplanation: `
### វិសាលភាព និងលក្ខខណ្ឌតម្រូវនៃគម្រោង (Project Specifications)
1. **មុខងារស្នូល (Features):**
   - បន្ថែម កែប្រែ និងលុបកិច្ចការ
   - សម្គាល់ Complete (បានបញ្ចប់) ឬ Pending (កំពុងរង់ចាំ)
   - ស្វែងរក (Search) និងច្រោះតាមស្ថានភាព (All, Pending, Completed)
   - បង្ហាញស្ថិតិចំនួនកិច្ចការសរុប និងដែលបានបញ្ចប់
   - រក្សាទុកស្វ័យប្រវត្តិក្នង localStorage
2. **ចំណាំ:** គម្រោងនេះជាកម្មវិធីសិក្សានៅក្នុង Browser មួយ មិនមែនជាប្រព័ន្ធ Server ច្រើនអ្នកប្រើ (Multi-user) ឡើយ។
    `,
    syntaxExamples: [
      {
        title: 'រចនាសម្ព័ន្ធ State នៃគម្រោង',
        description: 'ទម្រង់ទិន្នន័យ Task Object',
        code: `const sampleTask = {
  id: "task-1710334800000",
  title: "រៀបចំរបាយការណ៍ Assignment 1",
  priority: "high", // "low" | "medium" | "high"
  completed: false,
  createdAt: "2026-03-14"
};`
      }
    ],
    guidedPractice: {
      title: 'Full Capstone Prototype',
      description: 'កូដគំរូនៃ Student Task Manager',
      runnableJsCode: `console.log("Student Task Manager Initialized with 100-point rubric!");`,
      files: [],
      expectedOutput: 'កម្មវិធីដំណើរការពេញលេញ អាចបញ្ចូល លុប ច្រោះ និងរក្សាទុកក្នុង Browser។'
    },
    commonMistakes: [
      {
        mistake: 'មិនបានគ្រប់គ្រង Empty State',
        cause: 'ពេលគ្មានទិន្នន័យ អេក្រង់នៅទទេស្អាត ធ្វើឱ្យអ្នកប្រើច្រឡំថាប្រព័ន្ធខូច',
        wrongCode: 'list.innerHTML = "";',
        fixedCode: 'list.innerHTML = "<p>មិនទាន់មានកិច្ចការនៅឡើយទេ!</p>";',
        fix: 'តែងតែបង្ហាញសារ Empty State នៅពេលបញ្ជីទទេ'
      }
    ],
    exercises: [
      {
        level: 'ប្រកួតប្រជែង (Challenge)',
        prompt: 'ចូរបន្ថែមមុខងារ Export Data ជា JSON File ដើម្បីឱ្យសិស្សអាចទាញយកកិច្ចការរបស់ខ្លួនទៅកុំព្យូទ័រផ្សេង។',
        solutionCode: `function exportTasks(tasks) {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(tasks));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", "tasks.json");
  downloadAnchor.click();
}`,
        explanation: 'ប្រើ Data URI និង Anchor tag ដើម្បីទាញយក JSON file'
      }
    ],
    quiz: [
      {
        id: 1,
        question: 'នៅក្នុងការវាយតម្លៃគម្រោង ១០០ ពិន្ទុ តើផ្នែកណាដែលមានទម្ងន់ពិន្ទុច្រើនជាងគេ?',
        options: ['មុខងារដំណើរការត្រឹមត្រូវ (៣០ ពិន្ទុ)', 'ការប្រើ JavaScript និងរចនាសម្ព័ន្ធកូដ (២០ ពិន្ទុ)', 'DOM និង Events (១៥ ពិន្ទុ)', 'ការរក្សាទុកទិន្នន័យ (១០ ពិន្ទុ)'],
        correctIndex: 0,
        explanation: 'មុខងារដំណើរការត្រឹមត្រូវ និងគ្រប់ជ្រុងជ្រោយមានទម្ងន់ពិន្ទុខ្ពស់ជាងគេគឺ ៣០ ពិន្ទុ។'
      }
    ],
    summary: [
      'អនុវត្តចំណេះដឹងទាំង ១៣ មេរៀនរួមគ្នាក្នុងគម្រោងតែមួយ',
      'បែងចែក State, Storage, DOM Rendering និង Validation ឱ្យដាច់ពីគ្នា',
      'គោរពតាមតារាងវាយតម្លៃ ១០០ ពិន្ទុ'
    ]
  }
];
