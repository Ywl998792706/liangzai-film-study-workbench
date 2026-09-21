const CASES = [
  {
    id: "cheng-main",
    order: 1,
    sourceId: "cheng",
    title: "厂二代让父亲退休",
    subtitle: "程前朋友圈｜采访剪辑完整拉片",
    type: "采访",
    level: "入门",
    duration: "10:11",
    metric: "190 镜",
    cover: "assets/covers/cheng-main.jpg",
    report: "reports/cheng-main/index.html",
    skills: ["故事结构", "节奏", "B-roll", "音乐"],
    focus: "先冲突、后背景；正文按语义正反打，B-roll承担证据而不是装饰。",
    outcomes: [
      "能说清前60秒为什么快，而不是只会说“镜头很多”。",
      "能区分语义切点、反应切点和机械定时切镜。",
      "能为一句采访台词找到有证明作用的B-roll。"
    ],
    tasks: [
      "只看前60秒，记录每次切镜是在补信息、制造冲突还是给反应。",
      "关闭声音重看一次，找出3个仅靠画面仍能理解的证据镜头。",
      "拿自己的采访素材复刻一个15秒“冲突先行”开头。"
    ]
  },
  {
    id: "cheng-type-sfx",
    order: 2,
    sourceId: "cheng",
    title: "程前朋友圈：花字与重点音效",
    subtitle: "21组文字画面｜包装专项",
    type: "采访",
    level: "入门",
    duration: "10:11",
    metric: "21 组花字",
    cover: "assets/covers/cheng-type-sfx.jpg",
    report: "reports/cheng-type-sfx/index.html",
    skills: ["花字", "音效", "节奏"],
    focus: "重点字先服务语义重音，再决定动画；原片的力量并不来自音效堆叠。",
    outcomes: [
      "能从句子里挑出真正值得做花字的关键词。",
      "能辨认标题卡、数字强调、问题卡和结论卡的不同任务。",
      "知道什么时候不加音效反而更有力量。"
    ],
    tasks: [
      "任选5组花字，只写它们解决的叙事问题，不描述颜色和动画。",
      "用同一句台词做“无音效”和“轻click”两个版本并A/B比较。",
      "用自己的采访做一张问题卡和一张数字强调卡。"
    ]
  },
  {
    id: "leijun-type-sfx",
    order: 3,
    sourceId: "leijun",
    title: "雷军请回答 DAY 3",
    subtitle: "花字与重点音效专项拉片",
    type: "采访",
    level: "进阶",
    duration: "02:07.87",
    metric: "11 组重点字",
    cover: "assets/covers/leijun-type-sfx.jpg",
    report: "reports/leijun-type-sfx/index.html",
    skills: ["花字", "音效", "节奏"],
    focus: "人物重音就是最可靠的卡点；问题卡负责换章，答案花字负责留下记忆。",
    outcomes: [
      "能分清“问题卡”和“答案强调”的出现时机。",
      "能先用人物语气卡点，再判断是否需要额外音效。",
      "能比较两种采访包装风格，而不是只学一个模板。"
    ],
    tasks: [
      "逐一判断11组重点字属于提问、数字、态度还是片尾收束。",
      "找出一处没有独立音效但仍然有力的文字入点，写出原因。",
      "把同一段口播分别按程前风格和雷军风格做两版花字。"
    ]
  },
  {
    id: "human-stories-montage",
    order: 4,
    sourceId: "human-stories",
    title: "2025，人类写下了哪些故事？",
    subtitle: "年度混剪拉片｜家族企业丛书改编",
    type: "混剪",
    level: "进阶",
    duration: "06:32.87",
    metric: "355 镜",
    cover: "assets/covers/human-stories.jpg",
    report: "reports/human-stories/index.html",
    skills: ["故事结构", "节奏", "音乐", "B-roll"],
    focus: "宏大新闻流先加速，黑场突然熄火，再回到普通人的命运并回答开头问题。",
    outcomes: [
      "能画出“加速—熄火—回到人物—再次点亮”的情绪曲线。",
      "知道混剪不能只靠全程快切，必须设计速度反差。",
      "能把参考片结构转译成原创主题，而不是照搬素材。"
    ],
    tasks: [
      "只看03:03—03:36，记录高潮、断电、黑场和第一个人物长镜头。",
      "为自己的主题写一个开头问题和一个结尾答案。",
      "按报告中的36段执行表，先完成前60秒占位粗剪。"
    ]
  },
  {
    id: "google-year-search-2024",
    order: 5,
    sourceId: "google-year-search",
    title: "2024 — Year in Search",
    subtitle: "年度混剪｜素材、转场与家族企业版复刻",
    type: "混剪",
    level: "进阶",
    duration: "03:56",
    metric: "177 候选镜",
    cover: "assets/covers/google-year-search-2024.jpg",
    report: "reports/google-year-search-2024/index.html",
    skills: ["故事结构", "节奏", "音乐", "B-roll"],
    focus: "用一句母题、原声接力、匹配硬切和快慢反差，把不同来源的素材组织成一条完整情绪曲线。",
    outcomes: [
      "能用五种基础转场语法完成一条有高级感的混剪。",
      "会先建立带来源与授权状态的素材证据库，再开始剪辑。",
      "能把搜索视觉母题改写成适合家族企业的年份、档案与书页系统。"
    ],
    tasks: [
      "只看00:00—00:52，标出留白、点火和第一次速度峰值。",
      "从自己的素材中找三组动作匹配、两组语义匹配和一条音频桥。",
      "按报告模板完成30秒“一个年份＋一个事件”练习片。"
    ]
  }
];

CASES.push(...(window.EXTRA_CASES || []));

const SKILLS = ["故事结构", "节奏", "B-roll", "花字", "音效", "音乐"];

const QUESTIONS = [
  {
    caseId: "cheng-main",
    question: "程前朋友圈案例的前60秒为什么会显得快？",
    options: ["因为每个镜头都被统一剪成两秒", "因为冲突与证据信息密集，而且切点跟随语义", "因为一直叠加转场和音效"],
    answer: 1,
    explanation: "快感主要来自信息密度和语义推进。前60秒确实更短，但不是机械定时切镜。"
  },
  {
    caseId: "cheng-main",
    question: "采访中的B-roll最重要的作用是什么？",
    options: ["遮住所有跳剪", "让画面显得昂贵", "证明台词中的人物、场景、规模或行动"],
    answer: 2,
    explanation: "有效B-roll是证据。它应当与台词中的具体名词或判断发生关系，而不只是填空。"
  },
  {
    caseId: "cheng-type-sfx",
    question: "给一句采访做花字时，最先应该确定什么？",
    options: ["语义重音和这组文字的叙事任务", "字体动画预设", "音效库里最响的声音"],
    answer: 0,
    explanation: "先选观众必须记住的词，再决定标题卡、数字强调或问题卡等形式。"
  },
  {
    caseId: "cheng-type-sfx",
    question: "为什么不能给每组重点字都配明显的whoosh或pop？",
    options: ["因为剪辑软件不支持", "因为连续音效会抢人声、抹平强弱层级", "因为采访只能使用环境音"],
    answer: 1,
    explanation: "重点必须有层级。每组都响等于没有重点，还会破坏人物表达的自然节奏。"
  },
  {
    caseId: "leijun-type-sfx",
    question: "雷军案例里，多数重点字没有独立可确认音效却仍然有力，主要靠什么？",
    options: ["人物语音重音、文字落点和留白", "立体声左右声像", "每个字不同的字体"],
    answer: 0,
    explanation: "音轨是双单声道，多数入点没有可独立归因的短促音效；力量来自表达和时机。"
  },
  {
    caseId: "leijun-type-sfx",
    question: "问题卡与答案花字在叙事上的区别是什么？",
    options: ["问题卡负责换章和制造期待，答案花字负责留下结论", "问题卡只能黑底，答案只能红字", "二者没有区别"],
    answer: 0,
    explanation: "先区分叙事任务，再考虑版式。视觉形式可以变化，但功能不能混乱。"
  },
  {
    caseId: "human-stories-montage",
    question: "年度混剪在03:14附近为什么要明显降低镜头密度并进入黑场？",
    options: ["素材数量不够", "让观众从宏大事件切回人的命运，建立第二幕", "为了延长视频时长"],
    answer: 1,
    explanation: "黑场是价值转轴。没有这次熄火，后半段普通人的情绪不会被放大。"
  },
  {
    caseId: "human-stories-montage",
    question: "高度模仿一条优秀混剪，最值得复制的是什么？",
    options: ["原片的全部素材和配乐", "字幕字体和转场插件", "问题—加速—停顿—人物—回答的结构语法"],
    answer: 2,
    explanation: "结构、节奏和信息组织方式可以学习；素材、音乐、文案和视觉资产应重新原创。"
  },
  {
    caseId: "google-year-search-2024",
    question: "这支 Year in Search 最值得优先复刻的“转场”是什么？",
    options: ["大量插件转场", "动作、语义、构图或声音有依据的硬切", "每一刀都加白闪"],
    answer: 1,
    explanation: "大多数换镜本身是硬切。高级感来自镜头之间的匹配关系、音频桥和速度设计。"
  },
  {
    caseId: "google-year-search-2024",
    question: "家族企业版为什么更适合用“年份/档案/书页”而不是复制搜索框？",
    options: ["因为更符合主题，也能自然引出丛书", "因为年份动画一定更便宜", "因为所有混剪都必须有书页"],
    answer: 0,
    explanation: "视觉母题要服务自己的主题。档案与书页既能组织改革开放后的时间线，也能让丛书成为叙事终点。"
  }
];

QUESTIONS.push(...(window.EXTRA_QUESTIONS || []));

const STORAGE_KEY = "liangzai_breakdown_workbench_v1";
const defaultState = {
  progress: {},
  tasks: {},
  notes: {},
  view: "cards",
  quiz: { correct: 0, answered: 0, current: 0 }
};

let state = loadState();
let activeCaseId = null;

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return {
      ...defaultState,
      ...saved,
      progress: { ...defaultState.progress, ...(saved?.progress || {}) },
      tasks: { ...defaultState.tasks, ...(saved?.tasks || {}) },
      notes: { ...defaultState.notes, ...(saved?.notes || {}) },
      quiz: { ...defaultState.quiz, ...(saved?.quiz || {}) }
    };
  } catch {
    return structuredClone(defaultState);
  }
}

function saveState(message) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  if (message) showToast(message);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[char]));
}

function getProgress(caseId) {
  return Math.max(0, Math.min(100, Number(state.progress[caseId] || 0)));
}

function getStatus(caseId) {
  const value = getProgress(caseId);
  if (value === 0) return "not-started";
  if (value >= 100) return "completed";
  return "learning";
}

function statusLabel(caseId) {
  return { "not-started": "未开始", learning: "学习中", completed: "已完成" }[getStatus(caseId)];
}

function completedTaskCount() {
  return CASES.reduce((total, item) => total + item.tasks.filter((_, index) => state.tasks[`${item.id}:${index}`]).length, 0);
}

function totalProgress() {
  return Math.round(CASES.reduce((sum, item) => sum + getProgress(item.id), 0) / CASES.length);
}

function renderDashboard() {
  const progress = totalProgress();
  const completed = CASES.filter(item => getStatus(item.id) === "completed").length;
  const tasksDone = completedTaskCount();
  $("#progressPercent").textContent = `${progress}%`;
  $("#progressRing").style.setProperty("--progress", `${progress * 3.6}deg`);
  $("#metricReports").textContent = CASES.length;
  $("#metricCases").textContent = new Set(CASES.map(item => item.sourceId)).size;
  $("#metricCompleted").textContent = completed;
  $("#metricTasks").textContent = `${tasksDone}/${CASES.reduce((sum, item) => sum + item.tasks.length, 0)}`;

  const label = progress === 0 ? "准备开始" : progress === 100 ? "全部完成" : progress < 50 ? "正在建立基础" : "开始形成方法";
  const caption = progress === 100 ? "现在用自己的素材完成一次复刻" : `已经完成 ${completed} 份报告`;
  $("#progressLabel").textContent = label;
  $("#progressCaption").textContent = caption;
  renderToday();
}

function nextIncompleteTask() {
  for (const item of CASES) {
    for (let index = 0; index < item.tasks.length; index += 1) {
      if (!state.tasks[`${item.id}:${index}`]) return { item, index };
    }
  }
  return null;
}

function renderToday() {
  const target = nextIncompleteTask();
  const card = $("#todayCard");
  if (!target) {
    card.innerHTML = `<div class="today-copy"><span class="section-label">今天做什么</span><h2>四份报告已经走完一遍</h2><p>下一步不要继续收藏案例。挑一条自己的素材，完整复刻一次结构、字幕和声音层级。</p><div class="today-actions"><button class="gold-button" type="button" data-open-study="human-stories-montage">查看进阶练习</button></div></div><img class="today-cover" src="assets/covers/human-stories.jpg" alt="年度混剪案例封面">`;
    bindDynamicButtons(card);
    return;
  }
  const { item, index } = target;
  card.innerHTML = `
    <div class="today-copy">
      <span class="section-label">今天只完成这一步</span>
      <h2>${escapeHtml(item.title)}</h2>
      <p>${escapeHtml(item.tasks[index])}</p>
      <div class="today-meta"><span class="tag">${escapeHtml(item.type)}</span><span class="tag">${escapeHtml(item.duration)}</span><span class="tag">练习 ${index + 1}/${item.tasks.length}</span></div>
      <div class="today-actions"><a class="gold-button" href="${encodeURI(item.report)}" target="_blank" rel="noreferrer">打开完整报告</a><button class="light-button" type="button" data-complete-today="${item.id}:${index}">完成这一步</button></div>
    </div>
    <img class="today-cover" src="${item.cover}" alt="${escapeHtml(item.title)}封面">
  `;
  bindDynamicButtons(card);
}

function filteredCases() {
  const search = $("#searchInput").value.trim().toLowerCase();
  const type = $("#typeFilter").value;
  const skill = $("#skillFilter").value;
  const status = $("#statusFilter").value;
  return CASES.filter(item => {
    const haystack = [item.title, item.subtitle, item.type, item.level, item.focus, ...item.skills].join(" ").toLowerCase();
    return (!search || haystack.includes(search))
      && (type === "all" || item.type === type)
      && (skill === "all" || item.skills.includes(skill))
      && (status === "all" || getStatus(item.id) === status);
  });
}

function renderLibrary() {
  const items = filteredCases();
  const library = $("#caseLibrary");
  library.className = `case-library ${state.view}-view`;
  library.innerHTML = items.map(item => {
    const progress = getProgress(item.id);
    return `
      <article class="case-card" data-case-id="${item.id}">
        <div class="case-media"><img loading="lazy" src="${item.cover}" alt="${escapeHtml(item.title)}封面"><span class="case-type">${escapeHtml(item.type)} · ${escapeHtml(item.level)}</span><span class="case-index">0${item.order}</span></div>
        <div class="case-body">
          <div>
            <div class="case-kicker"><span>${escapeHtml(item.duration)}</span><span>${escapeHtml(item.metric)}</span></div>
            <h3>${escapeHtml(item.title)}</h3>
            <p class="case-subtitle">${escapeHtml(item.subtitle)}</p>
            <p class="case-focus">${escapeHtml(item.focus)}</p>
            <div class="case-tags">${item.skills.map(value => `<span class="tag">${escapeHtml(value)}</span>`).join("")}</div>
          </div>
          <div class="case-progress">
            <div class="case-progress-head"><span>${statusLabel(item.id)}</span><b>${progress}%</b></div>
            <div class="progress-track"><i style="width:${progress}%"></i></div>
          </div>
          <div class="case-actions"><button class="light-button" type="button" data-open-study="${item.id}">学习详情</button><a class="dark-button" href="${encodeURI(item.report)}" target="_blank" rel="noreferrer">打开报告</a></div>
        </div>
      </article>
    `;
  }).join("");
  $("#resultCount").textContent = `${items.length} 份报告`;
  $("#emptyState").hidden = items.length !== 0;
  bindDynamicButtons(library);
}

function renderLearningPath() {
  $("#learningPath").innerHTML = CASES.map(item => {
    const progress = getProgress(item.id);
    const done = progress === 100;
    return `
      <article class="path-step ${done ? "done" : ""}">
        <span class="path-number">${done ? "✓" : item.order}</span>
        <div class="path-copy"><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.focus)}</p></div>
        <div class="path-state"><b>${statusLabel(item.id)}</b><small>${progress}% · ${escapeHtml(item.metric)}</small></div>
      </article>
    `;
  }).join("");
}

function skillProgress(skill) {
  const related = CASES.filter(item => item.skills.includes(skill));
  return Math.round(related.reduce((sum, item) => sum + getProgress(item.id), 0) / related.length);
}

function renderSkills() {
  const scores = SKILLS.map(skill => ({ skill, score: skillProgress(skill) }));
  $("#skillBars").innerHTML = scores.map(({ skill, score }) => `
    <div class="skill-row"><strong>${skill}</strong><div class="progress-track"><i style="width:${score}%"></i></div><span>${score}%</span></div>
  `).join("");
  const weakest = [...scores].sort((a, b) => a.score - b.score)[0];
  const recommended = CASES.find(item => item.skills.includes(weakest.skill) && getProgress(item.id) < 100) || CASES.find(item => item.skills.includes(weakest.skill));
  $("#skillAdvice").innerHTML = `
    <h3>下一项优先练：${weakest.skill}</h3>
    <p>这个进度只来自你在工作台里完成的练习。现在最适合打开《${escapeHtml(recommended.title)}》，完成其中一个能动手验证的任务。</p>
    <a href="${encodeURI(recommended.report)}" target="_blank" rel="noreferrer">打开对应报告</a>
  `;
}

function openStudy(caseId) {
  const item = CASES.find(entry => entry.id === caseId);
  if (!item) return;
  activeCaseId = caseId;
  const progress = getProgress(caseId);
  $("#dialogContent").innerHTML = `
    <div class="dialog-hero"><img src="${item.cover}" alt="${escapeHtml(item.title)}封面"><div><span class="section-label">${escapeHtml(item.type)} · ${escapeHtml(item.level)}</span><h2>${escapeHtml(item.title)}</h2><p>${escapeHtml(item.focus)}</p><div class="case-tags">${item.skills.map(value => `<span class="tag">${escapeHtml(value)}</span>`).join("")}</div></div></div>
    <h3>看完要真正带走什么</h3><ul class="insight-list">${item.outcomes.map(value => `<li>${escapeHtml(value)}</li>`).join("")}</ul>
    <h3>动手练习</h3><div class="practice-list">${item.tasks.map((task, index) => { const key = `${item.id}:${index}`; return `<label class="practice-item"><input type="checkbox" data-task-key="${key}" ${state.tasks[key] ? "checked" : ""}><span>${escapeHtml(task)}</span></label>`; }).join("")}</div>
    <label class="progress-control"><span>总体学习进度</span><output id="dialogProgressValue">${progress}%</output><input id="dialogProgress" type="range" min="0" max="100" step="25" value="${progress}" aria-label="总体学习进度"></label>
    <label class="notes-label"><span>我的拉片笔记</span><textarea id="caseNotes" placeholder="例如：这条片最值得我复刻的一刀是什么？">${escapeHtml(state.notes[item.id] || "")}</textarea></label>
    <div class="dialog-actions"><a class="gold-button" href="${encodeURI(item.report)}" target="_blank" rel="noreferrer">打开完整报告</a><button class="outline-button" type="button" id="saveStudy">保存学习记录</button></div>
  `;
  $("#dialogProgress").addEventListener("input", event => { $("#dialogProgressValue").textContent = `${event.target.value}%`; });
  $("#saveStudy").addEventListener("click", saveActiveStudy);
  $("#studyDialog").showModal();
}

function saveActiveStudy() {
  if (!activeCaseId) return;
  state.progress[activeCaseId] = Number($("#dialogProgress").value);
  state.notes[activeCaseId] = $("#caseNotes").value.trim();
  $$('[data-task-key]', $("#dialogContent")).forEach(input => { state.tasks[input.dataset.taskKey] = input.checked; });
  const item = CASES.find(entry => entry.id === activeCaseId);
  const done = item.tasks.filter((_, index) => state.tasks[`${item.id}:${index}`]).length;
  state.progress[activeCaseId] = Math.max(state.progress[activeCaseId], Math.round(done / item.tasks.length * 100));
  if (state.progress[activeCaseId] === 100) item.tasks.forEach((_, index) => { state.tasks[`${item.id}:${index}`] = true; });
  saveState("学习记录已保存在本机");
  renderAll();
}

function completeToday(key) {
  state.tasks[key] = true;
  const [caseId] = key.split(":");
  const item = CASES.find(entry => entry.id === caseId);
  const done = item.tasks.filter((_, index) => state.tasks[`${item.id}:${index}`]).length;
  state.progress[caseId] = Math.max(getProgress(caseId), Math.round(done / item.tasks.length * 100));
  saveState("今天这一步已完成");
  renderAll();
}

function bindDynamicButtons(scope) {
  $$('[data-open-study]', scope).forEach(button => button.addEventListener("click", () => openStudy(button.dataset.openStudy)));
  $$('[data-complete-today]', scope).forEach(button => button.addEventListener("click", () => completeToday(button.dataset.completeToday)));
}

function renderQuiz() {
  const index = state.quiz.current % QUESTIONS.length;
  const question = QUESTIONS[index];
  const item = CASES.find(entry => entry.id === question.caseId);
  $("#quizCorrect").textContent = state.quiz.correct;
  $("#quizAnswered").textContent = state.quiz.answered;
  $("#quizContext").textContent = `${item.title} · 第 ${index + 1}/${QUESTIONS.length} 题`;
  $("#quizQuestion").textContent = question.question;
  $("#quizOptions").innerHTML = question.options.map((option, optionIndex) => `<button class="quiz-option" type="button" data-option="${optionIndex}">${String.fromCharCode(65 + optionIndex)}. ${escapeHtml(option)}</button>`).join("");
  $("#quizFeedback").hidden = true;
  $("#nextQuestion").hidden = true;
  $$('[data-option]', $("#quizOptions")).forEach(button => button.addEventListener("click", () => answerQuestion(Number(button.dataset.option))));
}

function answerQuestion(selected) {
  const question = QUESTIONS[state.quiz.current % QUESTIONS.length];
  const correct = selected === question.answer;
  state.quiz.answered += 1;
  if (correct) state.quiz.correct += 1;
  saveState();
  $$('[data-option]', $("#quizOptions")).forEach((button, index) => {
    button.disabled = true;
    if (index === question.answer) button.classList.add("correct");
    if (index === selected && !correct) button.classList.add("incorrect");
  });
  const feedback = $("#quizFeedback");
  feedback.innerHTML = `<b>${correct ? "回答正确。" : "回答不正确。"}</b>${escapeHtml(question.explanation)}`;
  feedback.hidden = false;
  $("#nextQuestion").hidden = false;
  $("#quizCorrect").textContent = state.quiz.correct;
  $("#quizAnswered").textContent = state.quiz.answered;
}

function nextQuestion() {
  state.quiz.current = (state.quiz.current + 1) % QUESTIONS.length;
  saveState();
  renderQuiz();
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 1800);
}

function exportProgress() {
  const payload = {
    workbench: "靓仔的拉片学习工作台",
    exportedAt: new Date().toISOString(),
    reports: CASES.map(item => ({ id: item.id, title: item.title, progress: getProgress(item.id), status: statusLabel(item.id), notes: state.notes[item.id] || "", tasks: item.tasks.map((task, index) => ({ task, completed: Boolean(state.tasks[`${item.id}:${index}`]) })) })),
    quiz: state.quiz
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `靓仔的拉片学习记录-${new Date().toISOString().slice(0, 10)}.json`;
  link.click();
  URL.revokeObjectURL(link.href);
  showToast("学习记录已导出");
}

function resetProgress() {
  if (!window.confirm("确定清空当前浏览器里的学习进度、笔记和自测记录吗？原始拉片报告不会被删除。")) return;
  state = structuredClone(defaultState);
  localStorage.removeItem(STORAGE_KEY);
  renderAll();
  showToast("本机学习进度已重置");
}

function clearFilters() {
  $("#searchInput").value = "";
  $("#typeFilter").value = "all";
  $("#skillFilter").value = "all";
  $("#statusFilter").value = "all";
  renderLibrary();
}

function setView(view) {
  state.view = view;
  saveState();
  $$('[data-view]').forEach(button => {
    const active = button.dataset.view === view;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", active ? "true" : "false");
  });
  renderLibrary();
}

function observeNavigation() {
  const sections = ["dashboard", "library", "path", "skills", "quiz"].map(id => document.getElementById(id));
  const links = $$(".side-nav a");
  const observer = new IntersectionObserver(entries => {
    const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    links.forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${visible.target.id}`));
  }, { rootMargin: "-15% 0px -65%", threshold: [0, .2, .5] });
  sections.forEach(section => observer.observe(section));
}

function renderAll() {
  renderDashboard();
  renderLibrary();
  renderLearningPath();
  renderSkills();
}

[$("#searchInput"), $("#typeFilter"), $("#skillFilter"), $("#statusFilter")].forEach(control => control.addEventListener("input", renderLibrary));
$("#clearFilters").addEventListener("click", clearFilters);
$$('[data-view]').forEach(button => button.addEventListener("click", () => setView(button.dataset.view)));
$("#nextQuestion").addEventListener("click", nextQuestion);
$("#exportProgress").addEventListener("click", exportProgress);
$("#resetProgress").addEventListener("click", resetProgress);
$("#studyDialog").addEventListener("click", event => { if (event.target === $("#studyDialog")) $("#studyDialog").close(); });

setView(state.view === "list" ? "list" : "cards");
renderAll();
renderQuiz();
observeNavigation();
