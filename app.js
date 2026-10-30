/**
 * CCF GESP C++ 三级真题练习系统核心逻辑
 * 结构：首页（3个大区按钮） -> 小区列表（点击开始答题） -> 答题页（随时退出 / 当次错题重练直到全对）
 */

window.GESP_QUESTIONS = window.GESP_QUESTIONS || [];

// 第一大区：14份单卷小区配置
const PAPERS_CONFIG = [
    { paperId: "2023-06", title: "GESP C++三级样卷", sub: "2023年度 · 15道单选 + 10道判断" },
    { paperId: "2023-09", title: "2023年 09月 真题卷", sub: "2023年度 · 15道单选 + 10道判断" },
    { paperId: "2023-12", title: "2023年 12月 真题卷", sub: "2023年度 · 15道单选 + 10道判断" },
    { paperId: "2024-03", title: "2024年 03月 真题卷", sub: "2024年度 · 15道单选 + 10道判断" },
    { paperId: "2024-06", title: "2024年 06月 真题卷", sub: "2024年度 · 15道单选 + 10道判断" },
    { paperId: "2024-09", title: "2024年 09月 真题卷", sub: "2024年度 · 15道单选 + 10道判断" },
    { paperId: "2024-12", title: "2024年 12月 真题卷", sub: "2024年度 · 15道单选 + 10道判断" },
    { paperId: "2025-03", title: "2025年 03月 真题卷", sub: "2025年度 · 15道单选 + 10道判断" },
    { paperId: "2025-06", title: "2025年 06月 真题卷", sub: "2025年度 · 15道单选 + 10道判断" },
    { paperId: "2025-09", title: "2025年 09月 真题卷", sub: "2025年度 · 15道单选 + 10道判断" },
    { paperId: "2025-12", title: "2025年 12月 真题卷", sub: "2025年度 · 15道单选 + 10道判断" },
    { paperId: "2026-03", title: "2026年 03月 真题卷", sub: "2026年度 · 15道单选 + 10道判断" },
    { paperId: "2026-06", title: "2026年 06月 真题卷", sub: "2026年度 · 15道单选 + 10道判断" },
    { paperId: "2026-09", title: "2026年 09月 真题卷", sub: "2026年度 · 15道单选 + 10道判断" }
];

// 第二大区：按年份合集小区配置
const YEARS_CONFIG = [
    { year: "2023", mode: "all", badge: "2023全集（75题）", title: "2023年 全部真题合集", desc: "包含2023年全部3套真题（共75题）" },
    { year: "2024", mode: "all", badge: "2024全集（100题）", title: "2024年 全部真题合集", desc: "包含2024年3月、6月、9月、12月全部4套真题（共100题）" },
    { year: "2025", mode: "all", badge: "2025全集（100题）", title: "2025年 全部真题合集", desc: "包含2025年3月、6月、9月、12月全部4套真题（共100题）" },
    { year: "2026", mode: "all", badge: "2026全集（75题）", title: "2026年 全部真题合集", desc: "包含2026年3月、6月、9月全部3套真题（共75题）" },
    { year: "2023", mode: "sample25", badge: "2023抽卷（25题）", title: "2023年 随机抽取标准卷", desc: "从2023年题库随机抽取15道单选 + 10道判断" },
    { year: "2024", mode: "sample25", badge: "2024抽卷（25题）", title: "2024年 随机抽取标准卷", desc: "从2024年题库随机抽取15道单选 + 10道判断" },
    { year: "2025", mode: "sample25", badge: "2025抽卷（25题）", title: "2025年 随机抽取标准卷", desc: "从2025年题库随机抽取15道单选 + 10道判断" },
    { year: "2026", mode: "sample25", badge: "2026抽卷（25题）", title: "2026年 随机抽取标准卷", desc: "从2026年题库随机抽取15道单选 + 10道判断" }
];

// 第三大区：14套全库综合小区配置
const COMP_CONFIG = [
    { mode: "all350", badge: "全库综合 · 350题", title: "14套真题全库综合练习（全部350题）", desc: "将14套试卷全部350道真题混合排列，支持当次错题专项重练。" },
    { mode: "standard25", badge: "模拟标准卷 · 25题", title: "全库随机抽取标准卷（25题）", desc: "从350题中随机抽取 15道单选 + 10道判断，贴合正式考试题量。" },
    { mode: "fast50", badge: "综合练习 · 50题", title: "全库随机抽取 50 题练习", desc: "从14套试卷中随机抽取 50 道真题进行综合演练。" },
    { mode: "mega100", badge: "综合练习 · 100题", title: "全库随机抽取 100 题练习", desc: "从14套试卷中随机抽取 100 道真题进行强化巩固。" }
];

class GESPSystem {
    constructor() {
        this.currentMajorZone = null;
        this.quizTitle = "";
        this.round = 1;
        this.activeQuestions = [];
        this.userAnswers = {};
        this.currentIndex = 0;
        this.roundResults = [];
        this.wrongQueue = [];

        this.init();
    }

    init() {
        const count = window.GESP_QUESTIONS.length;
        const badge = document.getElementById("questionCountStatus");
        if (count > 0) {
            badge.textContent = `✅ 题库已就绪：${count} 道真题`;
        } else {
            badge.textContent = `⚠️ 未检测到 questions_data.js 数据`;
            badge.style.background = "#fee2e2";
            badge.style.color = "#dc2626";
        }

        document.getElementById("instantShowExp").addEventListener("change", () => {
            if (document.getElementById("quizView").classList.contains("active")) {
                this.renderQuestion();
            }
        });

        window.addEventListener("keydown", (e) => {
            if (!document.getElementById("quizView").classList.contains("active")) return;
            if (e.key === "ArrowLeft") {
                this.prevQuestion();
            } else if (e.key === "ArrowRight") {
                this.nextQuestion();
            } else if (["1", "2", "3", "4"].includes(e.key)) {
                const idx = parseInt(e.key, 10) - 1;
                const q = this.activeQuestions[this.currentIndex];
                if (q && idx < q.shuffledOptions.length) {
                    this.chooseOption(idx);
                }
            }
        });
    }

    switchView(viewId) {
        document.querySelectorAll(".view-page").forEach(el => el.classList.remove("active"));
        document.getElementById(viewId).classList.add("active");
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    shuffle(arr) {
        const copy = [...arr];
        for (let i = copy.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [copy[i], copy[j]] = [copy[j], copy[i]];
        }
        return copy;
    }

    escapeHtml(str) {
        if (str === null || str === undefined) return "";
        return String(str)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    // 自动净化解析文字，移除不恰当的标签与口语化表达
    cleanExplanation(rawText) {
        if (!rawText) return "";
        return String(rawText)
            .replace(/【零基础保姆级解析】\s*/g, "")
            .replace(/零基础保姆级/g, "")
            .replace(/保姆级/g, "")
            .replace(/这道题有个超简单的偷懒办法：/g, "本题可以使用如下简便方法：")
            .replace(/最傻瓜的/g, "直接的")
            .replace(/“偷懒短路”/g, "“短路求值”")
            .replace(/小心出题老师的障眼法！/g, "注意审题细节：")
            .replace(/别被“统计词数”的题目文字骗了，我们要看代码实际在干什么：/g, "结合代码实际运行逻辑分析：")
            .replace(/千万别掉进陷阱里！/g, "注意初始值设置：")
            .replace(/又是一道经典的“初值陷阱题”！/g, "注意变量的初始值：")
            .replace(/这位可爱的同学/g, "该程序")
            .replace(/睁大眼睛看|睜大眼睛看/g, "注意观察")
            .replace(/直接被咔嚓切掉了/g, "会被直接截断舍弃")
            .replace(/像找茬游戏一样/g, "逐项")
            .replace(/掰着手指头/g, "依次")
            .replace(/张冠李戴啦！/g, "注意区分概念：")
            .replace(/说反啦！|说反了！/g, "表述相反。")
            .replace(/立刻秒答：/g, "可直接得出：")
            .replace(/秒杀|秒选/g, "快速得出")
            .trim();
    }

    renderCode(codeStr) {
        if (!codeStr) return "";
        const lines = String(codeStr).replace(/\r\n/g, "\n").split("\n");
        const html = lines.map((line, i) => {
            return `<div class="code-line"><span class="line-num">${i + 1}</span><span class="line-content">${this.escapeHtml(line) || " "}</span></div>`;
        }).join("");
        return `<div class="code-box">${html}</div>`;
    }

    // ==================== 第一层 & 第二层导航 ====================

    handleNavHome() {
        if (document.getElementById("quizView").classList.contains("active") ||
            document.getElementById("resultView").classList.contains("active")) {
            if (!confirm("确定要退出当前练习返回首页吗？（退出后当次练习进度与错题记录将清空）")) {
                return;
            }
            this.clearSessionData();
        }
        this.backToHome();
    }

    backToHome() {
        this.currentMajorZone = null;
        this.switchView("homeView");
    }

    openMajorZone(zoneKey) {
        this.currentMajorZone = zoneKey;
        const tagEl = document.getElementById("subZoneTag");
        const titleEl = document.getElementById("subZoneTitle");
        const descEl = document.getElementById("subZoneDesc");
        const gridEl = document.getElementById("subZoneGrid");

        if (zoneKey === "zone1") {
            tagEl.textContent = "第一大区 · 历年单卷";
            titleEl.textContent = "选择真题试卷（共 14 份）";
            descEl.textContent = "点击任意一份试卷即可开始作答，选项顺序每次自动随机排列。";

            gridEl.innerHTML = PAPERS_CONFIG.map(p => {
                const count = window.GESP_QUESTIONS.filter(q => q.paperId === p.paperId).length;
                return `
                    <div class="subzone-card" onclick="app.startPaperQuiz('${p.paperId}', '${p.title}')">
                        <div>
                            <span class="subzone-card-badge">单卷真题 · ${count}题</span>
                            <h3>${p.title}</h3>
                            <p>${p.sub}</p>
                        </div>
                        <div class="subzone-start-bar">开始作答 ➔</div>
                    </div>
                `;
            }).join("");

        } else if (zoneKey === "zone2") {
            tagEl.textContent = "第二大区 · 年度合集";
            titleEl.textContent = "选择年份合集";
            descEl.textContent = "支持练习指定年份的全部真题，或从该年份随机抽取一套标准试卷。";

            gridEl.innerHTML = YEARS_CONFIG.map(y => {
                return `
                    <div class="subzone-card" onclick="app.startYearQuiz('${y.year}', '${y.mode}', '${y.title}')">
                        <div>
                            <span class="subzone-card-badge">${y.badge}</span>
                            <h3>${y.title}</h3>
                            <p>${y.desc}</p>
                        </div>
                        <div class="subzone-start-bar">开始作答 ➔</div>
                    </div>
                `;
            }).join("");

        } else if (zoneKey === "zone3") {
            tagEl.textContent = "第三大区 · 全库综合";
            titleEl.textContent = "14套真题全库综合（共 350 题）";
            descEl.textContent = "将所有 14 份试卷合并抽取，点击下方任意模式即可开始练习。";

            gridEl.innerHTML = COMP_CONFIG.map(c => {
                return `
                    <div class="subzone-card" onclick="app.startCompQuiz('${c.mode}', '${c.title}')">
                        <div>
                            <span class="subzone-card-badge">${c.badge}</span>
                            <h3>${c.title}</h3>
                            <p>${c.desc}</p>
                        </div>
                        <div class="subzone-start-bar">开始作答 ➔</div>
                    </div>
                `;
            }).join("");
        }

        this.switchView("subZoneView");
    }

    // ==================== 启动练习与选项随机打乱 ====================

    buildShuffledQuestions(rawList) {
        return rawList.map(q => {
            let shuffledOptions = [];
            if (q.type === "single") {
                shuffledOptions = this.shuffle(q.options.map(o => ({ ...o })));
            } else {
                shuffledOptions = [
                    { text: "正确 (√)", isCorrect: q.answer === true },
                    { text: "错误 (×)", isCorrect: q.answer === false }
                ];
            }
            return {
                ...q,
                shuffledOptions
            };
        });
    }

    startPaperQuiz(paperId, title) {
        const list = window.GESP_QUESTIONS
            .filter(q => q.paperId === paperId)
            .sort((a, b) => {
                if (a.type !== b.type) return a.type === "single" ? -1 : 1;
                return a.num - b.num;
            });

        if (list.length === 0) {
            alert("未加载到题目，请检查 questions_data.js 是否在同一文件夹下！");
            return;
        }
        this.beginRound(title, list, 1);
    }

    startYearQuiz(year, mode, title) {
        const yearPool = window.GESP_QUESTIONS.filter(q => q.year === year);
        if (yearPool.length === 0) {
            alert("未加载到题目，请检查 questions_data.js！");
            return;
        }

        if (mode === "sample25") {
            const singles = this.shuffle(yearPool.filter(q => q.type === "single")).slice(0, 15);
            const judges = this.shuffle(yearPool.filter(q => q.type === "judge")).slice(0, 10);
            this.beginRound(title, [...singles, ...judges], 1);
        } else {
            this.beginRound(title, this.shuffle(yearPool), 1);
        }
    }

    startCompQuiz(mode, title) {
        const allPool = window.GESP_QUESTIONS;
        if (allPool.length === 0) {
            alert("未加载到题目，请检查 questions_data.js！");
            return;
        }

        if (mode === "standard25") {
            const singles = this.shuffle(allPool.filter(q => q.type === "single")).slice(0, 15);
            const judges = this.shuffle(allPool.filter(q => q.type === "judge")).slice(0, 10);
            this.beginRound(title, [...singles, ...judges], 1);
        } else if (mode === "fast50") {
            this.beginRound(title, this.shuffle(allPool).slice(0, 50), 1);
        } else if (mode === "mega100") {
            this.beginRound(title, this.shuffle(allPool).slice(0, 100), 1);
        } else {
            this.beginRound(title, this.shuffle(allPool), 1);
        }
    }

    beginRound(title, rawQuestionList, roundNumber) {
        this.quizTitle = title;
        this.round = roundNumber;
        this.activeQuestions = this.buildShuffledQuestions(rawQuestionList);
        this.userAnswers = {};
        this.currentIndex = 0;

        const roundBadge = document.getElementById("roundBadge");
        if (roundNumber === 1) {
            roundBadge.textContent = "第 1 轮：正式作答";
            roundBadge.className = "round-pill";
        } else {
            roundBadge.textContent = `第 ${roundNumber} 轮：当次错题重练（剩余 ${this.activeQuestions.length} 题 · 选项已重新随机）`;
            roundBadge.className = "round-pill retry";
        }

        document.getElementById("activeQuizTitle").textContent = this.quizTitle;
        this.switchView("quizView");
        this.renderQuestion();
        this.renderSheet();
    }

    clearSessionData() {
        this.activeQuestions = [];
        this.userAnswers = {};
        this.roundResults = [];
        this.wrongQueue = [];
        this.round = 1;
    }

    exitQuizSession() {
        if (confirm("确定要退出当前练习吗？（退出后当次练习进度与错题记录将不保存）")) {
            this.clearSessionData();
            if (this.currentMajorZone) {
                this.openMajorZone(this.currentMajorZone);
            } else {
                this.backToHome();
            }
        }
    }

    // ==================== 题目渲染与作答交互 ====================

    renderQuestion() {
        const q = this.activeQuestions[this.currentIndex];
        if (!q) return;

        const total = this.activeQuestions.length;
        const doneCount = Object.keys(this.userAnswers).length;
        const pct = total > 0 ? Math.round((doneCount / total) * 100) : 0;

        document.getElementById("progressCountText").textContent = `已答 ${doneCount} / ${total} 题 (${pct}%)`;
        document.getElementById("currentPosText").textContent = `当前：第 ${this.currentIndex + 1} / ${total} 题`;
        document.getElementById("progressBarFill").style.width = `${pct}%`;

        const chosenIdx = this.userAnswers[q.id];
        const instantExp = document.getElementById("instantShowExp").checked && chosenIdx !== undefined;
        const letters = q.type === "single" ? ["A", "B", "C", "D"] : ["√", "×"];

        const optionsHtml = q.shuffledOptions.map((opt, idx) => {
            let cls = "";
            if (chosenIdx === idx) cls = "selected";
            if (instantExp) {
                if (opt.isCorrect) cls = "correct-show";
                else if (chosenIdx === idx && !opt.isCorrect) cls = "wrong-show";
            }

            return `
                <div class="option-row ${cls}" onclick="app.chooseOption(${idx})">
                    <div class="opt-letter">${letters[idx]}</div>
                    <div class="opt-content">
                        ${opt.text ? `<div class="opt-text">${this.escapeHtml(opt.text)}</div>` : ""}
                        ${opt.code ? this.renderCode(opt.code) : ""}
                    </div>
                </div>
            `;
        }).join("");

        const expHtml = instantExp ? `
            <div class="exp-box">
                <div class="exp-title">💡 题目详解</div>
                <div class="exp-body">${this.escapeHtml(this.cleanExplanation(q.explanation))}</div>
            </div>
        ` : "";

        document.getElementById("questionRenderArea").innerHTML = `
            <div class="q-meta-row">
                <span class="q-badge-paper">📄 ${this.escapeHtml(q.paperName)} · 原卷第 ${q.num} 题</span>
                <span class="q-badge-type">${q.type === "single" ? "单选题 (2分)" : "判断题 (2分)"}</span>
            </div>
            <div class="q-stem-text">${this.escapeHtml(q.stem)}</div>
            ${q.code ? this.renderCode(q.code) : ""}
            ${q.svgDiagram ? `<div class="flowchart-box">${q.svgDiagram}</div>` : ""}
            <div class="options-wrap">${optionsHtml}</div>
            ${expHtml}
        `;

        document.getElementById("prevBtn").disabled = this.currentIndex === 0;
        document.getElementById("nextBtn").style.display = this.currentIndex < total - 1 ? "inline-flex" : "none";
    }

    renderSheet() {
        const sheetEl = document.getElementById("sheetGrid");
        sheetEl.innerHTML = this.activeQuestions.map((q, idx) => {
            const isDone = this.userAnswers[q.id] !== undefined;
            const isCur = idx === this.currentIndex;
            return `
                <button class="sheet-btn ${isDone ? "done" : ""} ${isCur ? "cur" : ""}"
                        onclick="app.jumpQuestion(${idx})">
                    ${idx + 1}
                </button>
            `;
        }).join("");
    }

    chooseOption(idx) {
        const q = this.activeQuestions[this.currentIndex];
        this.userAnswers[q.id] = idx;
        this.renderQuestion();
        this.renderSheet();
    }

    prevQuestion() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.renderQuestion();
            this.renderSheet();
        }
    }

    nextQuestion() {
        if (this.currentIndex < this.activeQuestions.length - 1) {
            this.currentIndex++;
            this.renderQuestion();
            this.renderSheet();
        }
    }

    jumpQuestion(idx) {
        this.currentIndex = idx;
        this.renderQuestion();
        this.renderSheet();
    }

    submitEarly() {
        const done = Object.keys(this.userAnswers).length;
        const total = this.activeQuestions.length;
        if (confirm(`当前已答 ${done} / ${total} 题。确定现在提前交卷结算吗？（未作答的题目将归入本轮错题以便继续重练）`)) {
            this.submitQuiz(true);
        }
    }

    // ==================== 本轮交卷结算与当次错题重练循环 ====================

    submitQuiz(force = false) {
        const total = this.activeQuestions.length;
        const done = Object.keys(this.userAnswers).length;

        if (!force && done < total) {
            if (!confirm(`还有 ${total - done} 道题未作答，未答题目将归入错题进入下一轮练习。确定现在交卷吗？`)) {
                return;
            }
        }

        let correctCount = 0;
        this.wrongQueue = [];

        this.roundResults = this.activeQuestions.map(q => {
            const chosenIdx = this.userAnswers[q.id];
            const chosenOpt = chosenIdx !== undefined ? q.shuffledOptions[chosenIdx] : null;
            const isCorrect = Boolean(chosenOpt && chosenOpt.isCorrect);

            if (isCorrect) {
                correctCount++;
            } else {
                this.wrongQueue.push(q);
            }

            return {
                question: q,
                chosenIdx,
                isCorrect
            };
        });

        this.renderResultPage(correctCount, total);
    }

    renderResultPage(correctCount, total) {
        this.switchView("resultView");
        const wrongCount = this.wrongQueue.length;
        const pct = total > 0 ? Math.round((correctCount / total) * 100) : 0;
        const banner = document.getElementById("resultBannerCard");

        if (wrongCount === 0) {
            banner.innerHTML = `
                <div class="result-score-ring all-pass">
                    <span class="score-val">100%</span>
                    <span class="score-sub">全部答对</span>
                </div>
                <h2>🎉 本轮 ${total} 道题已全部答对！</h2>
                <p style="color: var(--text-secondary); margin-top: 8px;">
                    你在第 ${this.round} 轮完成了所有题目，全部回答正确。
                </p>
                <div class="result-btn-row">
                    <button class="btn btn-primary btn-lg" onclick="app.clearSessionData(); app.openMajorZone(app.currentMajorZone || 'zone1');">
                        🔙 返回列表选择其他试卷
                    </button>
                    <button class="btn btn-outline btn-lg" onclick="app.clearSessionData(); app.backToHome();">
                        🏠 返回三大区首页
                    </button>
                </div>
            `;
        } else {
            banner.innerHTML = `
                <div class="result-score-ring">
                    <span class="score-val">${pct}%</span>
                    <span class="score-sub">正确率</span>
                </div>
                <h2>第 ${this.round} 轮完成：答对 ${correctCount} 题，待巩固错题 ${wrongCount} 题</h2>
                <p style="color: var(--text-secondary); margin-top: 8px;">
                    可先在下方查看每道题的<strong>题目详解</strong>，然后点击下方红色按钮<strong>重练本轮 ${wrongCount} 道错题（选项顺序将重新随机排列）</strong>，直至全部答对。
                </p>
                <div class="result-btn-row">
                    <button class="btn btn-danger btn-lg pulse-retry" onclick="app.retryCurrentWrong()">
                        🔄 重练本轮 ${wrongCount} 道错题（直至全对）
                    </button>
                    <button class="btn btn-outline btn-lg" onclick="app.exitQuizSession()">
                        🚪 退出本次练习（不保存错题）
                    </button>
                </div>
            `;
        }

        document.getElementById("numAll").textContent = total;
        document.getElementById("numWrong").textContent = wrongCount;
        document.getElementById("numCorrect").textContent = correctCount;

        this.renderReviewList(wrongCount > 0 ? "wrong" : "all");
    }

    retryCurrentWrong() {
        if (this.wrongQueue.length === 0) return;
        const nextRoundQuestions = [...this.wrongQueue];
        this.beginRound(this.quizTitle, nextRoundQuestions, this.round + 1);
    }

    renderReviewList(filter) {
        document.querySelectorAll(".filter-pill").forEach(btn => {
            btn.classList.toggle("active", btn.dataset.filter === filter);
        });

        const list = this.roundResults.filter(item => {
            if (filter === "wrong") return !item.isCorrect;
            if (filter === "correct") return item.isCorrect;
            return true;
        });

        const container = document.getElementById("reviewContainer");
        if (list.length === 0) {
            container.innerHTML = `<div class="review-card" style="text-align:center; color:var(--text-muted);">该分类下没有题目。</div>`;
            return;
        }

        container.innerHTML = list.map(item => {
            const q = item.question;
            const letters = q.type === "single" ? ["A", "B", "C", "D"] : ["√", "×"];
            const rightIdx = q.shuffledOptions.findIndex(o => o.isCorrect);
            const userChar = item.chosenIdx !== undefined ? letters[item.chosenIdx] : "未作答";
            const rightChar = letters[rightIdx];

            const optsHtml = q.shuffledOptions.map((opt, idx) => {
                let cls = "";
                if (opt.isCorrect) cls = "correct-show";
                else if (item.chosenIdx === idx && !opt.isCorrect) cls = "wrong-show";

                return `
                    <div class="option-row ${cls}" style="cursor:default;">
                        <div class="opt-letter">${letters[idx]}</div>
                        <div class="opt-content">
                            ${opt.text ? `<div class="opt-text">${this.escapeHtml(opt.text)}</div>` : ""}
                            ${opt.code ? this.renderCode(opt.code) : ""}
                        </div>
                    </div>
                `;
            }).join("");

            return `
                <div class="review-card ${item.isCorrect ? "correct-card" : "wrong-card"}">
                    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; margin-bottom:12px;">
                        <div class="q-meta-row" style="margin-bottom:0;">
                            <span class="q-badge-paper">📄 ${this.escapeHtml(q.paperName)} · 原卷第 ${q.num} 题</span>
                            <span class="q-badge-type">${q.type === "single" ? "单选题" : "判断题"}</span>
                        </div>
                        <span class="ans-tag ${item.isCorrect ? "ok" : "err"}">
                            ${item.isCorrect ? "✅ 回答正确" : `❌ 回答错误（你的选择：${userChar} ｜ 正确答案：${rightChar}）`}
                        </span>
                    </div>
                    <div class="q-stem-text">${this.escapeHtml(q.stem)}</div>
                    ${q.code ? this.renderCode(q.code) : ""}
                    ${q.svgDiagram ? `<div class="flowchart-box">${q.svgDiagram}</div>` : ""}
                    <div class="options-wrap">${optsHtml}</div>
                    <div class="exp-box">
                        <div class="exp-title">💡 题目详解</div>
                        <div class="exp-body">${this.escapeHtml(this.cleanExplanation(q.explanation))}</div>
                    </div>
                </div>
            `;
        }).join("");
    }
}

let app;
window.addEventListener("DOMContentLoaded", () => {
    app = new GESPSystem();
});
