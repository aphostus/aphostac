document.addEventListener('DOMContentLoaded', () => {

  /* --- Library Log Data --- */
  const logs = [

    // --- Founding ---
    { id: '001', tag: 'Founding', title: 'Aphostac Is Born', excerpt: 'A single observation about academic literacy in the Philippines becomes the seed of a global mission.', body: "On September 10, 2026, Gabriel Yoan L. Cortez founded Aphostac after identifying a troubling pattern: low academic literacy across the Philippines. What began as a personal concern is now the foundation of a platform built to serve students, teachers, and researchers everywhere. Day one starts here." },
    { id: '002', tag: 'Founding', title: 'The Cortaños Legacy Begins', excerpt: 'Aphostac is more than a platform — it is the opening chapter of a family legacy.', body: "Aphostac is founded as part of the Cortaños Legacy, glorified in the name of God. Beyond its academic mission, the project carries a personal weight: a commitment to build something lasting, principled, and worth passing forward." },
    { id: '003', tag: 'Founding', title: 'Why \'Aphostus\'?', excerpt: 'Behind Apostac stands Aphostus — the larger platform envisioned as the central academic hub.', body: "Aphostac is powered by Aphostus, a platform built with the vision of becoming the central hub for academic and innovative pursuit worldwide. Aphostus is envisioned as a future business organization dedicated to advancing education and innovation on a global scale, with Aphostac as its first expression." },
    { id: '004', tag: 'Founding', title: 'From Observation to Mission', excerpt: 'Research into the root causes of academic underdevelopment becomes Aphostac\'s foremost priority.', body: "An active research initiative is now underway to investigate the underlying causes of the nation's academic underdevelopment. It's regarded as Aphostac's foremost priority, given its potential to advance teaching methodologies and support both students and educators through proven, effective practices." },
    { id: '005', tag: 'Founding', title: 'The Founding Tagline', excerpt: '"Knowledge, Wisdom, and Curiosity" — three words now anchor everything Aphostac builds.', body: "Every feature, course, and workspace inside Aphostac traces back to one line: Knowledge, Wisdom, and Curiosity — The Aphostus Glory. It's not a slogan bolted on after the fact. It's the filter every decision passes through." },

    // --- Workspace (CAW) ---
    { id: '006', tag: 'Workspace', title: 'One Office for Learning and Teaching', excerpt: 'Aphostac unveils its vision for a single digital office built for both sides of the classroom.', body: "Apostac provides dedicated workspaces for students, teachers, and researchers, functioning as a comprehensive digital office equipped with data storage, automation, and support services. In effect, it serves as a total office for both learning and teaching — no more switching between five different apps." },
    { id: '007', tag: 'Workspace', title: 'Students Get a Progress Command Center', excerpt: 'Coursework, tracking, and progress — unified into one dashboard designed for students.', body: "The workspace is designed to enhance the learning experience by enabling students to track their academic progress and manage coursework directly, replacing scattered notebooks and disconnected tools with one structured view of their academic life." },
    { id: '008', tag: 'Workspace', title: 'Teachers Build Repositories, Not Just Folders', excerpt: 'Lesson materials get a permanent, structured home instead of disappearing into old drives.', body: "Teachers using the workspace can preserve lesson materials and build structured repositories over time. Instead of losing years of preparation to broken hard drives, educators get a durable, organized archive that grows with every semester." },
    { id: '009', tag: 'Workspace', title: 'Automation Enters the Classroom', excerpt: 'Behind the workspace sits automation built to quietly remove repetitive academic busywork.', body: "Aphostac's workspace is equipped with automation and support services designed to take repetitive tasks off educators' plates, freeing up time for the parts of teaching that actually require a human." },
    { id: '010', tag: 'Workspace', title: 'The Digital Office, Defined', excerpt: 'CAW — Global Academic Workspace — officially becomes Aspect 01 of the Aphostac framework.', body: "The Global Academic Workspace (CAW) is formalized as the first of Aphostac's 10 Key Aspects: a dedicated, data-backed, automated home base for every student, teacher, and researcher on the platform." },

    // --- Courses (CAC) ---
    { id: '011', tag: 'Courses', title: 'Ten Strands, One Platform', excerpt: 'Aphostac commits to offering courses across ten distinct academic strands worldwide.', body: "Aphostac aims to offer courses worldwide across ten distinct strands, giving learners a breadth of academic paths to choose from without needing to leave the platform to find them." },
    { id: '012', tag: 'Courses', title: 'International Meets Local', excerpt: 'Course structures are built to work at both a global and a national/continental scale.', body: "Courses are complemented by both international and national/continental class structures, intended to make learning engaging and effective regardless of where a student is logging in from." },
    { id: '013', tag: 'Courses', title: 'Designing for Engagement, Not Just Content', excerpt: 'Aphostac\'s course philosophy puts engagement on equal footing with academic rigor.', body: "The Global Academic Courses aspect (CAC) isn't just about publishing material — it's structured specifically to make learning engaging and effective, treating student attention as something worth designing for." },
    { id: '014', tag: 'Courses', title: 'A Curriculum Built Around the Ten Aspects', excerpt: 'Every strand ties back into the same ten-pillar framework driving the rest of Aphostac.', body: "Rather than existing as a standalone feature, CAC is woven into the same ten-aspect framework as the workspace, social network, and research hub — one coherent system instead of ten separate products." },
    { id: '015', tag: 'Courses', title: 'Global Classrooms, Local Relevance', excerpt: 'National and continental class tiers ensure courses stay grounded, not just global in theory.', body: "By pairing international course design with national and continental class structures, Aphostac positions itself to serve both a global learner base and the specific academic needs of individual regions." },

    // --- Social Network (CASN) ---
    { id: '016', tag: 'Social', title: 'A Social Platform Built for Academics', excerpt: 'Aphostac announces plans for a dedicated social network connecting the global education community.', body: "Beyond the workspace, Apostac intends to establish a social platform that connects teachers, students, and researchers internationally, fostering global discussion and collaborative communities that don't currently have a dedicated home." },
    { id: '017', tag: 'Social', title: 'Borders Stop Mattering', excerpt: 'CASN is designed to make a student in one country and a researcher in another feel like colleagues.', body: "The Global Academic Social Network (CASN) is built specifically to connect people across borders — teachers, students, and researchers — turning isolated academic work into a global, collaborative conversation." },
    { id: '018', tag: 'Social', title: 'Collaboration as Infrastructure', excerpt: 'CASN isn\'t a side feature — it\'s treated as core infrastructure for the whole platform.', body: "Aphostac treats its social layer as infrastructure, not decoration: a space where discussion and collaboration can directly feed into the courses, research, and projects happening elsewhere on the platform." },
    { id: '019', tag: 'Social', title: 'From Discussion to Discovery', excerpt: 'Global conversations on CASN are positioned as a feeder for Aphostac\'s research initiatives.', body: "By fostering global discussion among educators and researchers, CASN is designed to surface ideas early — conversations that can later evolve into the kind of research work supported by the Global Innovation & Research Hub." },
    { id: '020', tag: 'Social', title: 'Community Before Scale', excerpt: 'Aphostac frames its social network as a community-first layer beneath everything else.', body: "The Global Academic Social Network is positioned as the connective tissue of the platform — the layer that turns a collection of individual workspaces and courses into an actual global academic community." },

    // --- Marketplace (CAM) ---
    { id: '021', tag: 'Marketplace', title: 'Removing the Friction from Learning Materials', excerpt: 'Aphostac introduces academic products and delivery services aimed at a real access problem.', body: "Apostac offers academic products and delivery services designed to reduce the difficulty students face in accessing learning materials — tackling a barrier that quietly holds back learners long before a single lesson begins." },
    { id: '022', tag: 'Marketplace', title: 'Support Services for Educators Too', excerpt: 'Tutoring and lesson planning support extend the marketplace beyond just materials.', body: "Alongside products, Aphostac offers support services such as tutoring and lesson planning for educators, recognizing that access problems affect teachers preparing lessons as much as students trying to learn them." },
    { id: '023', tag: 'Marketplace', title: 'CAM Becomes Aspect 04', excerpt: 'The Global Academic Marketplace is formally listed among Aphostac\'s 10 Key Aspects.', body: "The Global Academic Marketplace (CAM) is confirmed as the fourth of Aphostac's 10 Key Aspects, positioning products and delivery services as a permanent pillar of the platform rather than an add-on." },
    { id: '024', tag: 'Marketplace', title: 'Access Is the Real Product', excerpt: 'Aphostac frames the marketplace less as a shop and more as an access initiative.', body: "The marketplace exists to solve a specific problem — difficulty accessing learning materials — which means its success is measured less in transactions and more in how many barriers it quietly removes." },
    { id: '025', tag: 'Marketplace', title: 'Where Materials Meet Support', excerpt: 'CAM sits at the intersection of academic products and human support services.', body: "By pairing academic products with tutoring and lesson-planning support, CAM is designed to serve both ends of the classroom at once — the student trying to learn and the teacher trying to prepare." },

    // --- Research Hub (CIRH) ---
    { id: '026', tag: 'Research', title: 'Aphostac\'s Most Ambitious Commitment', excerpt: 'Global innovation support and research funding are named among Aphostac\'s highest aims.', body: "At its most ambitious, Apostac is committed to supporting global innovation and securing funding for research — a commitment that sits at the very top of the platform's long-term vision." },
    { id: '027', tag: 'Research', title: 'Open and Closed Repositories, By Design', excerpt: 'Contributors get two doors into Aphostac\'s research ecosystem, not just one.', body: "The Global Innovation & Research Hub (CIRH) offers both open and closed repositories where contributors may participate freely, giving researchers flexibility over how public or private their work stays." },
    { id: '028', tag: 'Research', title: 'Funding Research, Not Just Hosting It', excerpt: 'CIRH is designed to go beyond storage and actively help secure funding for ideas.', body: "Rather than functioning purely as a repository, CIRH is built around securing funding for research — treating the hub as an active partner in getting promising work resourced, not just archived." },
    { id: '029', tag: 'Research', title: 'Research Into Why Learning Struggles', excerpt: 'The platform\'s flagship research project turns inward, toward the Philippines itself.', body: "Aphostac's own foremost research priority — investigating the causes of academic underdevelopment in the Philippines — runs through this same hub, tying CIRH directly back to the founder's original motivation." },
    { id: '030', tag: 'Research', title: 'An Innovation Hub With a Global Lens', excerpt: 'CIRH is scoped from day one to support innovation on a global, not just local, scale.', body: "The fifth of Aphostac's 10 Key Aspects, CIRH, is explicitly framed as global — designed to support contributors and innovation anywhere in the world, not confined to any single country or institution." },

    // --- Projects Center (CAPC) ---
    { id: '031', tag: 'Projects', title: 'Three Flagship Initiatives Announced', excerpt: 'Aphostac unveils Aposgram, Aposworld, and Apowares — its bets on the next era of technology.', body: "The organization oversees several flagship initiatives intended to guide the transition into the next era of human technology: Aposgram, Aposworld, and Apowares — each tackling a different layer of the stack." },
    { id: '032', tag: 'Projects', title: 'Meet Aposgram', excerpt: 'A programming language built for advanced, forward-looking execution enters development.', body: "Aposgram is announced as a programming language designed for advanced, forward-looking execution — Aphostac's first step into building its own technical tools rather than only using existing ones." },
    { id: '033', tag: 'Projects', title: 'Why Aphostac Is Building Its Own Language', excerpt: 'Aposgram signals that Aphostac sees itself as a technology builder, not just an education platform.', body: "Building a proprietary language like Aposgram is a statement of intent: Aphostac isn't just consuming technology to teach with — it wants to shape the tools the next generation of researchers and builders will use." },
    { id: '034', tag: 'Projects', title: 'Aposworld: The Search Engine for Academia', excerpt: 'Aphostac sets its sights on becoming the definitive academic search and knowledge platform.', body: "Aposworld is envisioned as the definitive academic search and knowledge platform of the future — a direct answer to how fragmented and hard-to-navigate academic search currently is for students and researchers alike." },
    { id: '035', tag: 'Projects', title: 'Apowares: Hardware Meets the Mission', excerpt: 'Aphostac\'s ambitions extend past software and into custom hybrid hardware.', body: "Apowares is introduced as a line of custom hybrid hardware, software, and firmware solutions built to meet the demands of tomorrow — extending Aphostac's reach from the classroom all the way down to the device." },

    // --- Organization / Legal / Data (CEORG, CDR) ---
    { id: '036', tag: 'Organization', title: 'One Mission, Five Identities', excerpt: 'Aphostac defines itself as five things at once, united under a single purpose.', body: "In summary, Apostac is an integrated academic social platform, a workspace solution, an innovation hub, an academy, and a provider of academic products and services — all united under one mission: to become The Future Global Academic Center." },
    { id: '037', tag: 'Organization', title: 'The Legal Name Behind the Vision', excerpt: 'Aphostac formalizes its legal identity as the Global Academic Agency.', body: "In short, and in legal terms, Aphostac operates as the Global Academic Agency (GAA), also referenced as Gawcosmorporcais — the organizational backbone supporting every aspect of the platform." },
    { id: '038', tag: 'Organization', title: 'CEORG: The Structure Behind the Scale', excerpt: 'The Global Educational Organization becomes Aspect 07 of the Aphostac framework.', body: "The Global Educational Organization (CEORG) is formalized as the seventh of Aphostac's 10 Key Aspects — the organizational layer overseeing the mission to advance education and innovation on a global scale." },
    { id: '039', tag: 'Data', title: 'Building the Global Data Repository', excerpt: 'CDR is confirmed as the secure backbone for Aphostac\'s academic records and research.', body: "The Global Data Repository (CDR) rounds out Aspect 08, providing the secure, structured storage layer that underpins workspaces, research repositories, and course records across the entire platform." },
    { id: '040', tag: 'Data', title: 'Storage That Outlasts a Semester', excerpt: 'CDR is designed for permanence, not just temporary file hosting.', body: "Rather than functioning as disposable cloud storage, CDR is built to be the long-term memory of Aphostac — the place teacher repositories, student progress, and research archives all ultimately live." },

    // --- Classes & AI (CACLAS, CAIS) ---
    { id: '041', tag: 'Classes', title: 'CACLAS: Structuring Global Classrooms', excerpt: 'Aspect 09 formalizes how Aphostac\'s international and regional classes are organized.', body: "Global Academic Classes (CACLAS) is confirmed as the ninth of Aphostac's 10 Key Aspects, giving structural form to the international and national/continental class systems described across the platform." },
    { id: '042', tag: 'Classes', title: 'Two Tiers, One Standard', excerpt: 'International and national/continental classes are designed to meet the same quality bar.', body: "CACLAS is built so that whether a student joins an international class or a national/continental one, the standard for engagement and effectiveness stays consistent across the board." },
    { id: '043', tag: 'AI', title: 'AI Enters the Classroom — Carefully', excerpt: 'Aphostac introduces AI support designed to assist, not replace, human teaching.', body: "Built-in AI assistance is planned to help students study smarter and help teachers save time on grading, feedback, and lesson planning — support designed to remove friction without replacing the human side of learning." },
    { id: '044', tag: 'AI', title: 'CAIS Becomes Aspect 10', excerpt: 'Global Artificial Intelligence Support officially closes out the 10 Key Aspects.', body: "Global Artificial Intelligence Support (CAIS) completes Aphostac's 10 Key Aspects — the AI layer running quietly underneath the workspace, courses, and marketplace to keep the whole system efficient." },
    { id: '045', tag: 'AI', title: 'Skilling the World in AI', excerpt: 'A parallel initiative aims to equip people with practical AI skills for a changing workforce.', body: "A parallel initiative focuses on equipping individuals with the skills to apply artificial intelligence toward improving international infrastructure and employment, in recognition of the shift toward a skills-based global workforce." },

    // --- Domains, Security & Vision ---
    { id: '046', tag: 'Security', title: 'Locking Down the Official Domains', excerpt: 'Aphostac moves to secure its name across the web before anyone else can fake it.', body: "Planned domains include Aphostus.co and Aphostac.co, alongside .org, .com, .world, .global, and .net registrations — all purchased specifically to prevent people from getting scammed with fake sites." },
    { id: '047', tag: 'Security', title: 'Why Extra Domains Matter', excerpt: 'Security domains aren\'t vanity URLs — they\'re a trust safeguard for every future user.', body: "The additional domain purchases exist for one purpose: to help direct users toward the main official domain, website, and email, reducing the risk that someone impersonates Aphostac with a lookalike site." },
    { id: '048', tag: 'Vision', title: 'The Future Global Academic Center', excerpt: 'TFGAC — the phrase behind every decision Aphostac makes — gets its own spotlight.', body: "\"The Future Global Academic Center\" isn't just a tagline tacked onto the mission statement — it's the destination every one of Aphostac's 10 Key Aspects is quietly built toward, one piece at a time." },
    { id: '049', tag: 'Vision', title: 'A Platform Built From a Problem, Not a Trend', excerpt: 'Aphostac\'s roadmap traces back to a real, specific issue rather than a market opportunity.', body: "Unlike platforms built to chase a trend, Aphostac's roadmap traces back to a specific, named problem: low academic literacy in the Philippines. Every aspect since — workspace, courses, research, AI — exists to answer that one observation." },
    { id: '050', tag: 'Vision', title: 'What\'s Next for Aphostac', excerpt: 'Ten aspects are defined. The real work of building them starts now.', body: "With all 10 Key Aspects defined — from CAW to CAIS — Aphostac's next chapter is execution: turning workspace, courses, social network, marketplace, research, projects, organization, data, classes, and AI support into something students and teachers can actually use." },

  ];

  /* --- Group logs into shelves by tag, preserving first-seen order --- */
  function buildShelves(entries) {
    const shelves = [];
    entries.forEach(log => {
      let shelf = shelves.find(s => s.tag === log.tag);
      if (!shelf) {
        shelf = { tag: log.tag, entries: [] };
        shelves.push(shelf);
      }
      shelf.entries.push(log);
    });
    return shelves;
  }

  /* --- Render the ledger summary strip under the hero --- */
  function renderLedger(shelfCount, entryCount) {
    const heroEl = document.querySelector('.library-hero');
    if (!heroEl) return;
    const ledger = document.createElement('div');
    ledger.className = 'library-ledger';
    ledger.innerHTML = `
      <span>Entries <b>${entryCount}</b></span>
      <span>Shelves <b>${shelfCount}</b></span>
      <span>Status <b>Open</b></span>
    `;
    heroEl.after(ledger);
  }

  /* --- Render shelves + catalog rows into the grid --- */
  function renderShelves(shelves, grid, onRowClick) {
    shelves.forEach(shelf => {
      const shelfEl = document.createElement('div');
      shelfEl.className = 'library-shelf';

      const header = document.createElement('div');
      header.className = 'shelf-header';
      header.innerHTML = `
        <span class="shelf-label">${shelf.tag}</span>
        <span class="shelf-count">${shelf.entries.length} ${shelf.entries.length === 1 ? 'entry' : 'entries'}</span>
      `;
      shelfEl.appendChild(header);

      shelf.entries.forEach(log => {
        const row = document.createElement('div');
        row.className = 'library-row';
        row.innerHTML = `
          <span class="row-index">APH·${log.id}</span>
          <div class="row-body">
            <div class="row-top">
              <span class="row-title">${log.title}</span>
              <span class="row-leader"></span>
              <span class="row-tag">${log.tag}</span>
            </div>
            <p class="row-excerpt">${log.excerpt}</p>
          </div>
          <span class="row-arrow">→</span>
        `;
        row.addEventListener('click', () => onRowClick(log));
        shelfEl.appendChild(row);
      });

      grid.appendChild(shelfEl);
    });
  }

  /* --- Detail sheet controls (shared popup component from style.css) --- */
  function setupDetailSheet() {
    const overlay = document.getElementById('libraryOverlay');
    const sheet = document.getElementById('librarySheet');
    if (!overlay || !sheet) return null;

    const detailTag = document.getElementById('libraryDetailTag');
    const detailTitle = document.getElementById('libraryDetailTitle');
    const detailBody = document.getElementById('libraryDetailBody');
    const handle = sheet.querySelector('.popup-handle');

    function open(log) {
      detailTag.textContent = `${log.tag} · Log ${log.id}`;
      detailTitle.textContent = log.title;
      detailBody.textContent = log.body;
      overlay.classList.add('active');
      sheet.classList.add('active');
      sheet.setAttribute('aria-hidden', 'false');
      document.body.classList.add('popup-open');
    }

    function close() {
      sheet.classList.remove('active');
      sheet.setAttribute('aria-hidden', 'true');
      overlay.classList.remove('active');
      document.body.classList.remove('popup-open');
    }

    overlay.addEventListener('click', close);
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && sheet.classList.contains('active')) close();
    });

    if (handle) {
      let startY = 0, currentY = 0, dragging = false;

      handle.addEventListener('pointerdown', (e) => {
        dragging = true;
        startY = e.clientY;
        sheet.style.transition = 'none';
        handle.setPointerCapture(e.pointerId);
      });

      handle.addEventListener('pointermove', (e) => {
        if (!dragging) return;
        currentY = Math.max(0, e.clientY - startY);
        sheet.style.transform = `translateY(${currentY}px)`;
      });

      const endDrag = () => {
        if (!dragging) return;
        dragging = false;
        sheet.style.transition = '';
        if (currentY > 120) close();
        sheet.style.transform = '';
        currentY = 0;
      };

      handle.addEventListener('pointerup', endDrag);
      handle.addEventListener('pointercancel', endDrag);
    }

    return { open, close };
  }

  /* --- Init --- */
  const grid = document.getElementById('libraryGrid');
  if (!grid) return;

  grid.classList.add('library-archive');
  const shelves = buildShelves(logs);
  renderLedger(shelves.length, logs.length);

  const detailSheet = setupDetailSheet();
  renderShelves(shelves, grid, (log) => {
    if (detailSheet) detailSheet.open(log);
  });

});