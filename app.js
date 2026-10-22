/* ============================================
   BSE Migrated Website — Static Implementation
   Replacing ChatGPT-specific runtime with pure JS
   ============================================ */

// ===== Campus Gallery =====
const campuses = [
  { city: 'TORONTO, ONTARIO', title: '多伦多大学', desc: 'University College · St. George', img: 'images/toronto.png' },
  { city: 'MONTREAL, QUEBEC', title: '麦吉尔大学', desc: 'Arts Building · Downtown Campus', img: '' },
  { city: 'VANCOUVER, BRITISH COLUMBIA', title: '英属哥伦比亚大学', desc: 'Robson Square · Vancouver', img: '' },
  { city: 'WATERLOO, ONTARIO', title: '滑铁卢大学', desc: '校园标志 · 滑铁卢', img: '' }
];
let campusIdx = 0;

function updateGallery() {
  const c = campuses[campusIdx];
  document.getElementById('galleryCounter').textContent = String(campusIdx + 1).padStart(2, '0') + ' / 04';
  document.getElementById('galleryCity').textContent = c.city;
  document.getElementById('galleryTitle').textContent = c.title;
  document.getElementById('galleryDesc').textContent = c.desc;
  // Update dots
  document.querySelectorAll('#galleryDots button').forEach((btn, i) => {
    btn.setAttribute('aria-current', i === campusIdx ? 'true' : 'false');
  });
}

function nextCampus() {
  campusIdx = (campusIdx + 1) % campuses.length;
  updateGallery();
}

function prevCampus() {
  campusIdx = (campusIdx - 1 + campuses.length) % campuses.length;
  updateGallery();
}

function goCampus(idx) {
  campusIdx = idx;
  updateGallery();
}

// ===== Mobile Menu =====
function toggleMenu() {
  const btn = document.getElementById('menuBtn');
  const nav = document.getElementById('mainNav');
  const expanded = btn.getAttribute('aria-expanded') === 'true';
  btn.setAttribute('aria-expanded', !expanded);
  nav.classList.toggle('active', !expanded);
}

// Close menu on link click (mobile)
document.querySelectorAll('nav a').forEach(a => {
  a.addEventListener('click', () => {
    document.getElementById('menuBtn').setAttribute('aria-expanded', 'false');
    document.getElementById('mainNav').classList.remove('active');
  });
});

// ===== Smooth Scroll =====
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// ===== Language Switcher =====
function toggleLang() {
  document.getElementById('langDropdown').classList.toggle('active');
}

function setLang(lang) {
  localStorage.setItem('bse-lang', lang);
  document.getElementById('langDropdown').classList.remove('active');
  // Update UI
  const btn = document.getElementById('langBtn');
  btn.innerHTML = (lang === 'zh' ? 'EN' : '中文') + ' <span>⌄</span>';
  // Update active state in dropdown
  document.querySelectorAll('.lang-dropdown a').forEach(a => {
    a.classList.toggle('active', a.textContent.includes(lang === 'zh' ? '中文' : 'English'));
  });
  // Apply translations
  applyTranslations(lang);
}

const translations = {
  zh: {
    heroTitle: '在加拿大，<br/>找到属于你的<br/><em>成长方向。</em>',
    heroSub: '每一个孩子，都有自己的节奏。每一个家庭，都值得被认真倾听。我们立足加拿大，陪伴你从留学规划，走向真实的学习与生活。',
    heroBtn: '聊聊你的留学计划',
    heroFoot: '立足加拿大 · 专注安省 · 连接未来',
    intro: '不是千篇一律的方案，是与你一起找到更合适的选择。',
    introTags: ['中英双语沟通', '个性化升学规划', '来加前后持续关注'],
    pathwaysTitle: '不同的阶段，同样的用心。',
    pathwaysSub: '从中小学到高等教育，从第一次出发到人生的新选择，我们先了解你，再一起规划。',
    p1Title: 'K–12 中小学', p1Desc: '为成长，找到适合的起点。', p1Tags: '选校规划 / 入学申请 / 学业适应',
    p2Title: '本科与研究生', p2Desc: '让兴趣，走向更清晰的未来。', p2Tags: '专业探索 / 本科申请 / 研究生规划',
    p3Title: '成人教育与移民', p3Desc: '人生的下一程，也值得认真规划。', p3Tags: '继续教育 / 职业规划 / 签证移居',
    servicesTitle: '不止于申请。<br/><span>陪你走好每一步。</span>',
    servicesSub: '一个适合你的计划，需要看见来加拿大之前的期待，也需要关心到达之后的每一天。',
    servicesLink: '了解我们的服务与工作流程',
    s1: '升学规划', s1d: '从兴趣、能力与家庭目标出发，梳理阶段性的教育方向。',
    s2: '院校申请', s2d: '整理选校思路、申请时间线与材料准备，让每一步更有条理。',
    s3: '学业督导', s3d: '关注在加中学生的学习节奏与适应，保持家庭与学生的沟通。',
    s4: '本地服务', s4d: '围绕到校、生活适应与本地资源，提前了解并准备落地事项。',
    s5: '签证移民', s5d: '围绕学签、旅游签、工签及移居需求，由团队持牌移民顾问提供专业支持，先明确情况，再确认服务范围。',
    processTitle: '把未知，变成清晰的下一步。',
    step1: '倾听与了解', step1d: '先聊背景、目标与顾虑。',
    step2: '共同规划', step2d: '讨论教育方向与可行安排。',
    step3: '有序推进', step3d: '确认服务范围、时间线和分工。',
    step4: '持续沟通', step4d: '跟进进展，关注学习与适应。',
    aboutTitle: '以教育者的视角，<br/>陪伴每一步成长。',
    aboutP1: 'BSE 于2016年创立于加拿大大多伦多地区，面向中国学生与家庭，专注加拿大中小学、高等教育及入学后的学习与生活支持。',
    aboutP2: '资深团队具有中国与北美的教育经验，融合高校教学、课程建设与跨文化学习的视角。我们重视学生的学习基础、兴趣与长期发展，让规划从了解学生本身开始。',
    aboutP3: '结合加拿大本地教育资源、英语学习支持及持牌移民顾问的专业协作，我们将前期规划、院校申请、学业督导与落地支持衔接起来，持续关注学生和陪读家庭的真实需要。',
    aboutValues: ['教育经验', '本地协作', '全程关注'],
    aboutCities: '北京 · 多伦多 · 温哥华',
    aboutTeam: '认识我们的团队',
    journalTitle: '分享信息，也分享思考。',
    journalSub: '用一篇篇实用的分享，帮助你把关于加拿大教育的问题，问得更清楚。',
    consultTitle: '你的下一程，<br/><em>从一次交流开始。</em>',
    consultSub: '不必带着所有答案来。告诉我们你正在考虑什么，我们一起梳理下一步。',
    consultEmail: 'EMAIL',
    consultLocation: '服务联络',
    consultPhone: '电话',
    consultWechat: 'WECHAT',
    consultNote: '欢迎家长、学生与教育合作伙伴联系。',
    formTab1: '留学评估', formTab2: '签证移民',
    formName: '您的姓名', formContact: '邮箱 / 微信 / 电话',
    formCategory: '咨询类别', formService: '申请 / 服务类别',
    formNote: '想和我们聊些什么？', formOptional: '（选填）',
    formConsent: '我同意工作室为回复本次咨询而保存及使用以上信息。',
    formPrivacy: '隐私说明',
    formSubmit: '提交咨询',
    footerBrand: 'Better Solution Education',
    footerSub: '加拿大教育工作室',
    footerTag: '以更好的规划，连接更多可能。',
    footerExplore: 'EXPLORE',
    footerTouch: 'GET IN TOUCH',
    footerConsult: '预约咨询',
    footerPartner: '合作联系',
    footerWechat: '微信咨询',
    footerPrivacy: '隐私说明',
    footerAdmin: '内容管理',
    footerTop: '返回顶部',
    quick1: '留学评估', quick2: '签证移民', quick3: '微信咨询',
    backList: '← 返回文章列表',
    commentTitle: '评论与留言',
    commentName: '您的昵称',
    commentText: '写下您的想法...',
    commentSubmit: '发表评论',
    like: '喜欢',
    adminTitle: '内容管理',
    adminClose: '关闭',
    adminInquiries: '咨询留言',
    adminComments: '博客评论',
    adminTime: '时间', adminName: '姓名', adminContact: '联系方式',
    adminCategory: '类别', adminContent: '内容', adminAction: '操作',
    adminArticle: '文章', adminNickname: '昵称', adminComment: '评论',
    adminDelete: '删除',
    mapKicker: 'CHINA ↔ NORTH AMERICA',
    mapFooter1: 'ROOTED LOCALLY. CONNECTED GLOBALLY.',
    mapFooter2: '跨越文化，陪伴每一程。',
    galleryNote: 'A little guidance.<br/>A world of possibility.',
    galleryHint: '点击画面，探索下一所大学',
    galleryCollection: 'CANADIAN CAMPUS COLLECTION'
  },
  en: {
    heroTitle: 'In Canada,<br/>find your <em>path forward.</em>',
    heroSub: 'Every child has their own rhythm. Every family deserves to be heard. Based in Canada, we guide you from planning to real learning and life.',
    heroBtn: 'Talk about your study plan',
    heroFoot: 'Based in Canada · Focused on Ontario · Connected to the future',
    intro: 'Not one-size-fits-all. Finding the right choice, together.',
    introTags: ['Bilingual communication', 'Personalized planning', 'Support before & after arrival'],
    pathwaysTitle: 'Different stages, same dedication.',
    pathwaysSub: 'From K-12 to higher education, from first steps to new life choices — we get to know you first, then plan together.',
    p1Title: 'K–12 Education', p1Desc: 'Find the right starting point for growth.', p1Tags: 'School selection / Admission / Academic adaptation',
    p2Title: 'Undergraduate & Graduate', p2Desc: 'Let interests lead to a clearer future.', p2Tags: 'Major exploration / Undergrad / Graduate planning',
    p3Title: 'Adult Education & Immigration', p3Desc: 'The next chapter of life also deserves careful planning.', p3Tags: 'Continuing education / Career / Visa & settlement',
    servicesTitle: 'More than applications.<br/><span>Walking every step with you.</span>',
    servicesSub: 'A good plan sees your hopes before arriving, and cares for every day after.',
    servicesLink: 'Our services & workflow',
    s1: 'Academic Planning', s1d: 'From interests, abilities and family goals, chart stage-by-stage educational directions.',
    s2: 'School Applications', s2d: 'Organize school selection, timelines and materials so every step is clear.',
    s3: 'Academic Supervision', s3d: 'Track learning rhythm and adaptation for students in Canada, keeping families connected.',
    s4: 'Local Services', s4d: 'Around arrival, life adaptation and local resources — prepare ahead for landing.',
    s5: 'Visa & Immigration', s5d: 'Study permits, visitor visas, work permits and settlement — licensed immigration consultant support. Clarify first, then confirm scope.',
    processTitle: 'Turn the unknown into clear next steps.',
    step1: 'Listen & Understand', step1d: 'Background, goals and concerns.',
    step2: 'Plan Together', step2d: 'Discuss educational direction and feasible arrangements.',
    step3: 'Move Forward', step3d: 'Confirm scope, timeline and responsibilities.',
    step4: 'Stay Connected', step4d: 'Follow progress, care for learning and adaptation.',
    aboutTitle: 'With an educator\'s perspective,<br/>accompanying every step of growth.',
    aboutP1: 'BSE was founded in 2016 in the Greater Toronto Area, serving Chinese students and families with Canadian K-12, higher education and post-arrival learning and life support.',
    aboutP2: 'Our experienced team brings educational perspectives from China and North America, blending university teaching, curriculum development and cross-cultural learning. We value each student\'s foundation, interests and long-term growth.',
    aboutP3: 'Combining Canadian local education resources, English learning support and licensed immigration consultant collaboration, we connect planning, applications, supervision and landing support — continuously caring for students and families.',
    aboutValues: ['Educational Experience', 'Local Collaboration', 'Ongoing Care'],
    aboutCities: 'Beijing · Toronto · Vancouver',
    aboutTeam: 'Meet our team',
    journalTitle: 'Sharing information, sharing thoughts.',
    journalSub: 'Practical articles to help you ask better questions about Canadian education.',
    consultTitle: 'Your next chapter,<br/><em>starts with a conversation.</em>',
    consultSub: 'You don\'t need all the answers. Tell us what you\'re considering, and we\'ll sort out the next step together.',
    consultEmail: 'EMAIL',
    consultLocation: 'Contact',
    consultPhone: 'Phone',
    consultWechat: 'WECHAT',
    consultNote: 'Parents, students and education partners are welcome to reach out.',
    formTab1: 'Study Assessment', formTab2: 'Visa & Immigration',
    formName: 'Your name', formContact: 'Email / WeChat / Phone',
    formCategory: 'Category', formService: 'Service type',
    formNote: 'What would you like to discuss?', formOptional: '(optional)',
    formConsent: 'I agree that the studio may store and use this information to respond to my inquiry.',
    formPrivacy: 'Privacy',
    formSubmit: 'Submit inquiry',
    footerBrand: 'Better Solution Education',
    footerSub: 'Canadian Education Studio',
    footerTag: 'Better planning, more possibilities.',
    footerExplore: 'EXPLORE',
    footerTouch: 'GET IN TOUCH',
    footerConsult: 'Book consultation',
    footerPartner: 'Partnership',
    footerWechat: 'WeChat',
    footerPrivacy: 'Privacy',
    footerAdmin: 'Admin',
    footerTop: 'Back to top',
    quick1: 'Study Assessment', quick2: 'Visa & Immigration', quick3: 'WeChat',
    backList: '← Back to articles',
    commentTitle: 'Comments',
    commentName: 'Your nickname',
    commentText: 'Share your thoughts...',
    commentSubmit: 'Post comment',
    like: 'Like',
    adminTitle: 'Content Management',
    adminClose: 'Close',
    adminInquiries: 'Inquiries',
    adminComments: 'Blog Comments',
    adminTime: 'Time', adminName: 'Name', adminContact: 'Contact',
    adminCategory: 'Category', adminContent: 'Content', adminAction: 'Action',
    adminArticle: 'Article', adminNickname: 'Nickname', adminComment: 'Comment',
    adminDelete: 'Delete',
    mapKicker: 'CHINA ↔ NORTH AMERICA',
    mapFooter1: 'ROOTED LOCALLY. CONNECTED GLOBALLY.',
    mapFooter2: 'Across cultures, accompanying every journey.',
    galleryNote: 'A little guidance.<br/>A world of possibility.',
    galleryHint: 'Click to explore the next university',
    galleryCollection: 'CANADIAN CAMPUS COLLECTION'
  }
};

function applyTranslations(lang) {
  const t = translations[lang];
  if (!t) return;
  // Hero
  const heroH1 = document.querySelector('.hero-copy h1');
  if (heroH1) heroH1.innerHTML = t.heroTitle;
  const heroP = document.querySelector('.hero-copy > p');
  if (heroP) heroP.textContent = t.heroSub;
  const heroBtn = document.querySelector('.hero-buttons .button');
  if (heroBtn) heroBtn.innerHTML = t.heroBtn + ' <span aria-hidden="true">↗</span>';
  const heroFoot = document.querySelector('.hero-foot span:last-child');
  if (heroFoot) heroFoot.textContent = t.heroFoot;
  // Intro strip
  const introP = document.querySelector('.intro-strip > .wrap > p');
  if (introP) introP.textContent = t.intro;
  const introTags = document.querySelectorAll('.intro-strip > .wrap > div > span');
  t.introTags.forEach((tag, i) => { if (introTags[i]) introTags[i].textContent = tag; });
  // Pathways
  const pwH2 = document.querySelector('#pathways h2');
  if (pwH2) pwH2.textContent = t.pathwaysTitle;
  const pwP = document.querySelector('#pathways .section-heading > p');
  if (pwP) pwP.textContent = t.pathwaysSub;
  // Programs
  const programs = document.querySelectorAll('.program');
  if (programs[0]) { programs[0].querySelector('h3').textContent = t.p1Title; programs[0].querySelector('p').textContent = t.p1Desc; programs[0].querySelector('.program-bottom span').textContent = t.p1Tags; }
  if (programs[1]) { programs[1].querySelector('h3').textContent = t.p2Title; programs[1].querySelector('p').textContent = t.p2Desc; programs[1].querySelector('.program-bottom span').textContent = t.p2Tags; }
  if (programs[2]) { programs[2].querySelector('h3').textContent = t.p3Title; programs[2].querySelector('p').textContent = t.p3Desc; programs[2].querySelector('.program-bottom span').textContent = t.p3Tags; }
  // Services
  const svH2 = document.querySelector('.services-intro h2');
  if (svH2) svH2.innerHTML = t.servicesTitle;
  const svP = document.querySelector('.services-intro > p');
  if (svP) svP.textContent = t.servicesSub;
  const svLink = document.querySelector('.services-intro .text-link');
  if (svLink) svLink.innerHTML = t.servicesLink + ' <span>↓</span>';
  const details = document.querySelectorAll('.service-list details');
  const svData = [[t.s1, t.s1d], [t.s2, t.s2d], [t.s3, t.s3d], [t.s4, t.s4d], [t.s5, t.s5d]];
  details.forEach((d, i) => {
    if (svData[i]) { d.querySelector('h3').textContent = svData[i][0]; d.querySelector('p').textContent = svData[i][1]; }
  });
  // Process
  const prH2 = document.querySelector('#process h2');
  if (prH2) prH2.textContent = t.processTitle;
  const steps = document.querySelectorAll('.steps > div');
  const stepData = [[t.step1, t.step1d], [t.step2, t.step2d], [t.step3, t.step3d], [t.step4, t.step4d]];
  steps.forEach((s, i) => {
    if (stepData[i]) { s.querySelector('h3').textContent = stepData[i][0]; s.querySelector('p').textContent = stepData[i][1]; }
  });
  // About
  const abH2 = document.querySelector('.about-copy h2');
  if (abH2) abH2.innerHTML = t.aboutTitle;
  const abPs = document.querySelectorAll('.about-copy > p');
  [t.aboutP1, t.aboutP2, t.aboutP3].forEach((txt, i) => { if (abPs[i]) abPs[i].textContent = txt; });
  const abValues = document.querySelectorAll('.about-values span');
  t.aboutValues.forEach((v, i) => { if (abValues[i]) abValues[i].textContent = v; });
  const abCities = document.querySelector('.city-connections');
  if (abCities) abCities.textContent = t.aboutCities;
  const abTeam = document.querySelector('.about-copy .text-link');
  if (abTeam) abTeam.innerHTML = t.aboutTeam + ' <span aria-hidden="true">↗</span>';
  // Journal
  const jH2 = document.querySelector('#journal h2');
  if (jH2) jH2.textContent = t.journalTitle;
  const jP = document.querySelector('#journal .section-heading > p');
  if (jP) jP.textContent = t.journalSub;
  // Consultation
  const cH2 = document.querySelector('.consult-copy h2');
  if (cH2) cH2.innerHTML = t.consultTitle;
  const cP = document.querySelector('.consult-copy > p');
  if (cP) cP.textContent = t.consultSub;
  const cLines = document.querySelectorAll('.contact-line');
  if (cLines[0]) cLines[0].querySelector('span').textContent = t.consultEmail;
  if (cLines[1]) cLines[1].querySelector('span').textContent = t.consultLocation;
  if (cLines[2]) cLines[2].querySelector('span').textContent = t.consultPhone;
  if (cLines[3]) cLines[3].querySelector('span').textContent = t.consultWechat;
  const cNote = document.querySelector('.contact-note');
  if (cNote) cNote.textContent = t.consultNote;
  // Form tabs
  document.getElementById('tabStudy').textContent = t.formTab1;
  document.getElementById('tabVisa').textContent = t.formTab2;
  // Footer
  const fb = document.querySelector('.footer-brand');
  if (fb) { fb.innerHTML = t.footerBrand + '<span>' + t.footerSub + '</span>'; }
  const fTag = document.querySelector('.footer-main > div:first-child > p');
  if (fTag) fTag.textContent = t.footerTag;
  const fLabels = document.querySelectorAll('.footer-label');
  if (fLabels[0]) fLabels[0].textContent = t.footerExplore;
  if (fLabels[1]) fLabels[1].textContent = t.footerTouch;
  // Quick contact
  const qc = document.querySelectorAll('.quick-contact button');
  if (qc[0]) qc[0].innerHTML = '↗ <span>' + t.quick1 + '</span>';
  if (qc[1]) qc[1].innerHTML = '✉ <span>' + t.quick2 + '</span>';
  if (qc[2]) qc[2].innerHTML = '☏ <span>' + t.quick3 + '</span>';
  // Gallery
  document.querySelector('.gallery-top span:first-child').textContent = t.galleryCollection;
  document.querySelector('.gallery-art-note').innerHTML = t.galleryNote;
  document.querySelector('.gallery-hint').innerHTML = t.galleryHint + ' <span>→</span>';
  document.querySelector('.map-kicker').textContent = t.mapKicker;
  document.querySelector('.map-footer span').textContent = t.mapFooter1;
  document.querySelector('.map-footer p').textContent = t.mapFooter2;
}

// ===== QR Modal =====
function openQR(src) {
  const modal = document.getElementById('qrModal');
  const img = document.getElementById('qrModalImg');
  img.src = src;
  modal.classList.add('active');
}

function closeModal() {
  document.getElementById('qrModal').classList.remove('active');
}

// ===== Blog Filter =====
function filterArticles(cat, btn) {
  document.querySelectorAll('.filter-tabs button').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.article-card').forEach(card => {
    const show = cat === 'all' || card.dataset.category === cat;
    card.style.display = show ? 'block' : 'none';
  });
}

// ===== Article Content =====
const articles = {
  'deca-1': {
    title: '精华篇：一篇看懂DECA商赛备赛（上篇）',
    meta: 'K-12 · 2026.10.20 · 工作室分享',
    content: `<p>DECA（Distributive Education Clubs of America）是全球最大的中学生商业领导力组织之一。在加拿大，DECA 商赛是许多中学生提升商业思维、锻炼演讲能力的重要平台。</p>
<h2>一、什么是 DECA？</h2>
<p>DECA 成立于1946年，旨在培养中学生的商业领导力、创业精神和职业素养。比赛涵盖市场营销、金融、酒店管理和商业管理四大领域。</p>
<h2>二、报名资格与学校 Chapter</h2>
<p>大多数加拿大公立和私立中学都可以注册 DECA Chapter。学生需要通过学校指导老师报名，个人无法直接参赛。</p>
<h2>三、赛制与晋级路线</h2>
<p>DECA 比赛分为区域赛（Regionals）、省赛（Provincials）和国际赛（ICDC）。晋级路线为：区域赛 → 省赛 → 国际赛。</p>
<h2>四、赛项选择</h2>
<p>DECA 提供个人赛和团队赛两种形式。个人赛包括 Principles 系列和 Individual 系列；团队赛通常为两人一组，解决真实商业案例。</p>`
  },
  'deca-2': {
    title: '精华篇：一篇看懂DECA商赛备赛（下篇）',
    meta: 'K-12 · 2026.10.20 · 工作室分享',
    content: `<p>在了解了 DECA 的基本赛制后，我们来看看如何高效备赛。</p>
<h2>一、备赛方法</h2>
<p>DECA 的核心是案例分析和角色扮演。建议从以下几个方面入手：熟悉评分标准、练习时间管理、模拟真实场景。</p>
<h2>二、训练工具</h2>
<p>DECA 官网提供历年案例和评分标准。此外，YouTube 上有大量优秀选手的比赛视频可供学习。</p>
<h2>三、成长价值</h2>
<p>DECA 不仅是一场比赛，更是培养批判性思维、沟通能力和团队协作的绝佳机会。许多大学在录取时会关注学生的 DECA 经历。</p>
<h2>四、家长指南</h2>
<p>家长可以从支持孩子的时间管理、提供模拟练习的听众角色、帮助孩子寻找合适的 Mentor 等方面给予支持。</p>`
  },
  'k12-planning': {
    title: '为孩子规划加拿大中小学：先问这五个问题',
    meta: 'K-12 · 2026.10.17 · 工作室分享',
    content: `<p>在决定送孩子来加拿大读中小学之前，建议家长先认真思考以下五个问题。</p>
<h2>一、孩子的学习风格是什么？</h2>
<p>加拿大教育强调自主学习和批判性思维。如果孩子习惯于被动接受知识，可能需要一段时间适应。</p>
<h2>二、语言准备是否充分？</h2>
<p>虽然很多学校提供 ESL 支持，但良好的英语基础能让孩子更快融入课堂和社交。</p>
<h2>三、家庭的陪读安排如何？</h2>
<p>安省规定 18 岁以下留学生需要指定监护人。家长需要考虑陪读、寄宿家庭或监护人的安排。</p>
<h2>四、长期教育目标是什么？</h2>
<p>是想通过加拿大高中申请北美大学？还是体验国际教育后回国？不同目标会影响选校策略。</p>
<h2>五、家庭的经济预算如何？</h2>
<p>除了学费，还需要考虑生活费、保险、课外活动等开支。建议提前做好详细的预算规划。</p>`
  },
  'choose-uni': {
    title: '选大学之前，先想清楚你想怎样学习',
    meta: 'Higher education · 2026.10.17 · 工作室分享',
    content: `<p>选大学不只是看排名。真正重要的是：这所学校、这个专业，是否适合你。</p>
<h2>一、课程结构</h2>
<p>不同学校的课程设置差异很大。有的学校注重理论，有的强调实践。了解课程大纲是选校的第一步。</p>
<h2>二、学习方式</h2>
<p>你是喜欢大班讲座还是小班讨论？喜欢独立研究还是团队合作？这些偏好会直接影响你的学习体验。</p>
<h2>三、校园文化</h2>
<p>每所学校都有自己的文化氛围。有的学校竞争激烈，有的更注重合作。参观校园、与在校生交流是了解文化的好方法。</p>`
  },
  'landing': {
    title: '抵达加拿大之前，准备一份自己的落地清单',
    meta: 'Local support · 2026.10.17 · 工作室分享',
    content: `<p>第一次来加拿大，很多事情需要提前准备。一份清晰的落地清单能让你的抵达更加顺利。</p>
<h2>一、住宿安排</h2>
<p>提前确认住宿地址、入住时间和联系方式。如果是寄宿家庭，建议提前与房东沟通好接机安排。</p>
<h2>二、学校报到</h2>
<p>了解学校的报到流程、所需材料和截止日期。通常需要携带护照、学签、成绩单和免疫记录。</p>
<h2>三、日常联系</h2>
<p>办理本地手机卡、开通银行账户、了解公共交通系统。这些基础事项尽早完成，能让你更快适应新生活。</p>`
  }
};

let currentArticle = null;

function openArticle(id) {
  const art = articles[id];
  if (!art) return;
  currentArticle = id;
  document.getElementById('journal').style.display = 'none';
  document.getElementById('article-detail').style.display = 'block';
  document.getElementById('articleContent').innerHTML = `
    <div class="article-meta" style="display:flex;gap:16px;font-size:13px;color:var(--muted);margin-bottom:20px">
      <span>${art.meta}</span>
    </div>
    <h1 style="font-family:var(--serif);font-size:28px;margin-bottom:24px;line-height:1.4">${art.title}</h1>
    <div style="line-height:1.8;color:var(--ink);font-size:15px">${art.content}</div>
  `;
  loadComments(id);
  updateLikeCount(id);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function closeArticle() {
  document.getElementById('article-detail').style.display = 'none';
  document.getElementById('journal').style.display = 'block';
  currentArticle = null;
  window.scrollTo({ top: document.getElementById('journal').offsetTop - 100, behavior: 'smooth' });
}

// ===== Comments (localStorage) =====
function getComments(articleId) {
  return JSON.parse(localStorage.getItem('bse-comments-' + articleId) || '[]');
}

function saveComments(articleId, comments) {
  localStorage.setItem('bse-comments-' + articleId, JSON.stringify(comments));
}

function postComment() {
  const name = document.getElementById('cName').value.trim() || '匿名';
  const text = document.getElementById('cText').value.trim();
  if (!text || !currentArticle) return;
  const comments = getComments(currentArticle);
  comments.push({ id: Date.now(), name, text, date: new Date().toLocaleDateString() });
  saveComments(currentArticle, comments);
  document.getElementById('cText').value = '';
  loadComments(currentArticle);
}

function loadComments(articleId) {
  const list = document.getElementById('commentList');
  const comments = getComments(articleId);
  if (comments.length === 0) {
    list.innerHTML = '<p style="color:var(--muted);font-size:13px">暂无评论，快来发表第一条评论吧！</p>';
    return;
  }
  list.innerHTML = comments.map(c => `
    <div class="comment-item" data-id="${c.id}">
      <div class="c-header"><span class="c-author">${escapeHtml(c.name)}</span><span class="c-date">${c.date}</span></div>
      <div class="c-text">${escapeHtml(c.text)}</div>
    </div>
  `).join('');
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// ===== Likes =====
function toggleArticleLike() {
  if (!currentArticle) return;
  const key = 'bse-like-' + currentArticle;
  const liked = localStorage.getItem(key) === '1';
  if (liked) {
    localStorage.removeItem(key);
  } else {
    localStorage.setItem(key, '1');
  }
  updateLikeCount(currentArticle);
}

function updateLikeCount(articleId) {
  const btn = document.getElementById('articleLike');
  const count = document.getElementById('likeCount');
  const liked = localStorage.getItem('bse-like-' + articleId) === '1';
  btn.classList.toggle('liked', liked);
  // Count is demo: base + liked
  const baseLikes = { 'deca-1': 12, 'deca-2': 8, 'k12-planning': 24, 'choose-uni': 18, 'landing': 15 };
  const base = baseLikes[articleId] || 0;
  count.textContent = base + (liked ? 1 : 0);
}

// ===== Form =====
function switchTab(tab) {
  document.getElementById('tabStudy').classList.toggle('active', tab === 'study');
  document.getElementById('tabVisa').classList.toggle('active', tab === 'visa');
}

function submitForm(e) {
  e.preventDefault();
  const form = e.target;
  const data = {
    time: new Date().toLocaleString(),
    name: form.name.value,
    contact: form.contact.value,
    category: form.category.value,
    service: form.service.value,
    note: form.note.value,
    type: document.getElementById('tabStudy').classList.contains('active') ? '留学评估' : '签证移民'
  };
  // Save to localStorage
  const inquiries = JSON.parse(localStorage.getItem('bse-inquiries') || '[]');
  inquiries.push(data);
  localStorage.setItem('bse-inquiries', JSON.stringify(inquiries));
  // Show feedback
  const fb = document.getElementById('formFeedback');
  fb.textContent = '提交成功！我们会尽快与您联系。';
  fb.style.color = '#2d7a3e';
  form.reset();
  setTimeout(() => { fb.textContent = ''; }, 5000);
}

// ===== Admin Panel =====
function toggleAdmin() {
  const panel = document.getElementById('adminPanel');
  panel.classList.toggle('active');
  if (panel.classList.contains('active')) {
    renderAdminTables();
  }
}

function renderAdminTables() {
  // Inquiries
  const inquiries = JSON.parse(localStorage.getItem('bse-inquiries') || '[]');
  const tbody = document.querySelector('#adminTable tbody');
  tbody.innerHTML = inquiries.map((q, i) => `
    <tr>
      <td>${q.time}</td><td>${escapeHtml(q.name)}</td><td>${escapeHtml(q.contact)}</td>
      <td>${q.type}</td><td>${escapeHtml(q.note || '-')}</td>
      <td><button onclick="deleteInquiry(${i})">删除</button></td>
    </tr>
  `).join('') || '<tr><td colspan="6" style="text-align:center;color:var(--muted)">暂无咨询留言</td></tr>';

  // Comments across all articles
  let allComments = [];
  Object.keys(articles).forEach(id => {
    const cs = getComments(id);
    cs.forEach(c => allComments.push({ ...c, article: articles[id].title }));
  });
  const cbody = document.querySelector('#adminCommentsTable tbody');
  cbody.innerHTML = allComments.map((c, i) => `
    <tr>
      <td>${c.article}</td><td>${escapeHtml(c.name)}</td><td>${escapeHtml(c.text)}</td>
      <td>${c.date}</td><td><button onclick="deleteComment(${c.id})">删除</button></td>
    </tr>
  `).join('') || '<tr><td colspan="5" style="text-align:center;color:var(--muted)">暂无评论</td></tr>';
}

function deleteInquiry(idx) {
  const inquiries = JSON.parse(localStorage.getItem('bse-inquiries') || '[]');
  inquiries.splice(idx, 1);
  localStorage.setItem('bse-inquiries', JSON.stringify(inquiries));
  renderAdminTables();
}

function deleteComment(id) {
  Object.keys(articles).forEach(articleId => {
    const comments = getComments(articleId).filter(c => c.id !== id);
    saveComments(articleId, comments);
  });
  renderAdminTables();
  if (currentArticle) loadComments(currentArticle);
}

// ===== Init =====
document.addEventListener('DOMContentLoaded', function() {
  // Language
  const savedLang = localStorage.getItem('bse-lang') || 'zh';
  setLang(savedLang);

  // Close dropdown on outside click
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.lang-switcher')) {
      document.getElementById('langDropdown').classList.remove('active');
    }
  });

  // Gallery auto-rotate
  setInterval(nextCampus, 8000);
});
