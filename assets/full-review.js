/* Local-only V2 entry mapping. Case ids and the existing progress key are unchanged. */
window.FULL_REVIEW_IDS = [
  "cheng-main",
  "wenqi-youhenhao",
  "leijun-full",
  "songjia-mother",
  "wang-jiaer-inward",
  "ning-yizhuo-ambition",
  "short-drama-debate",
  "liang-jiahui",
  "cai-kangyong-lazy",
  "mountain-flower",
  "anda-jiang-limin",
  "her-edition-dongjie",
  "middle-aged-women-wisdom",
  "the-people-cai-kangyong",
  "cheng-zhangxue",
  "shisanyao-li-dongsheng",
  "shisanyao-luo-xiang",
  "luyu-dou-wentao",
  "luo-yonghao-li-xiang",
  "human-stories-montage",
  "google-year-search-2024"
];

window.applyFullReviewMapping = function (cases) {
  const aliases = { "cheng-type-sfx": "cheng-main", "leijun-type-sfx": "leijun-full" };
  const ids = new Set(window.FULL_REVIEW_IDS);
  const privateCases = [];
  privateCases.forEach(item => {
    if (!cases.some(existing => existing.id === item.id)) cases.push(item);
  });
  cases.forEach(item => {
    const fullId = aliases[item.id] || item.id;
    if (!ids.has(fullId)) return;
    if (!item.id.startsWith("self-")) item.legacyReport = item.report.includes("reports/") ? item.report : null;
    item.fullReviewId = fullId;
    item.sourceId = fullId;
    item.report = "全片精拉V2/" + fullId + "/全片精拉报告.html";
    item.fullReview = true;
    item.metric = item.id.startsWith("self-") ? "全片复盘 · 修改建议" : "全片证据 · 重点复核";
    item.evidenceNote = "候选切点不等于逐刀确认；音乐与音效未人工听核。";
    item.legacyLabel = aliases[item.id] ? "旧花字专项（存档）" : "旧版报告（存档）";
  });
  const corrections = {
    "wenqi-youhenhao": {
      focus: "从完整谈话到三组章节文字、作品片段与黑底寄语，比较全片长短镜头的任务。",
      tasks: ["完整浏览章节，再从后半选一段，标出近景、中景和作品素材的分工。", "从全片任选一段，只用两个景别复刻45秒。", "区分现实证据、剧情例证与情绪素材，写出每条究竟证明了什么。"]
    },
    "songjia-mother": {
      title: "宋佳：手部细节与镜头呼吸",
      subtitle: "26秒全片｜景别变化与自动误检复核",
      focus: "脸部承担观点，手部细节提供视觉逗号；首帧残留与微切点误检需分开，不能推断精确机位数。",
      outcomes: ["能区分自动候选与画面确认的真实变化。", "会让手部细节接回人物完整结论。", "能检查首尾残帧并保持动作连续。"],
      tasks: ["逐帧检查成片首尾，找出无关残帧；不要把异常帧复制为片头。", "拍30秒回答并补10秒同步手部，练习人物—手—回脸。", "比较同轴缓慢画幅变化与硬切，先判断台词是否完整。"]
    },
    "ning-yizhuo-ambition": {
      focus: "先给观点钩子，短时装肖像作包装，再以五个问题和不同长度的谈话景别展开；不是舞台B-roll。",
      tasks: ["从后半选一个完整回答，分别按语义和手势剪两版。", "为一个问题做大小两层字幕，检查手势区域是否被遮挡。", "把时装气质素材和真实工作证据分箱，给每条写用途。"]
    },
    "short-drama-debate": {
      focus: "暖室内序章后进入轮流单人回答，后半书页和手机画面对应话题，长近景与淡暗名单收束。",
      outcomes: ["知道氛围空镜与话题证据的区别。", "会拍单人远景、近景与手部细节。", "能让思辨内容保留完整判断，不把自动候选当真刀。"],
      tasks: ["为一次对谈拍环境、物件、单人远近景四类素材。", "从后半找书页和手机两处，写清它们与台词的对应关系。", "从全片任一完整话题做粗剪，再保一段10秒以上近景比较理解效果。"]
    },
    "wang-jiaer-inward": {
      tasks: ["画一张远中近景与视线轴示意图，不根据成片猜摄影机数量。", "从全片或后半选一个完整答案按观点切，禁止定时切镜。", "做一版不挡脸、不挡手的问题叠字。"]
    },
    "leijun-full": {
      outcomes: ["会用整屏问题卡建立章节。", "知道景别变化与精确机位数量不能混为一谈。", "会把答案的落点与问卡、结论字分层。"]
    },
    "leijun-type-sfx": {
      focus: "问题卡负责换章，答案关键词负责记忆；文字动画看连续帧，是否加音效须单独试听。",
      outcomes: ["能分清问题卡和答案强调的时机。", "能从实际连续帧描述文字状态变化。", "不把波形或字幕当成音效听辨证据。"],
      tasks: ["从全片首、中、末各选一组字，判断提问、数字、态度与收束任务。", "只看连续帧描述动画，再试听，分别记录两类证据。", "同一句台词做无音效与轻音效练习版，试听后比较，不当原片结论。"]
    }
  };
  cases.forEach(item => {
    if (corrections[item.id]) Object.assign(item, corrections[item.id]);
  });
};

