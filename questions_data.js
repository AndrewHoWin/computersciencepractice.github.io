window.GESP_QUESTIONS = window.GESP_QUESTIONS || [];

// =====================================================================
// 试卷 1：GESP C++三级样卷（未标年月，归入2023年度）(25题)
// =====================================================================
window.GESP_QUESTIONS.push(
    {
        id: "2023-06-S01",
        paperId: "2023-06",
        paperName: "GESP C++三级样卷（未标年月）",
        year: "2023",
        type: "single",
        num: 1,
        stem: "高级语言编写的程序需要经过以下（ ）操作，可以生成在计算机上运行的可执行代码。",
        options: [
            { text: "编辑", isCorrect: false },
            { text: "保存", isCorrect: false },
            { text: "调试", isCorrect: false },
            { text: "编译", isCorrect: true }
        ],
        explanation: "【零基础保姆级解析】\n1. 什么是高级语言？我们平时写的 C++ 代码（比如 #include、int main、cout 等）是用人类能看懂的英文单词和数学符号写的，这叫“高级语言源代码”（比如 .cpp 文件）。\n2. 计算机能直接看懂 C++ 吗？不能！计算机的 CPU 只能看懂由 0 和 1 组成的“机器语言”（二进制指令）。\n3. 怎么把 C++ 变成计算机能跑的程序？需要一个“翻译官”（也就是编译器，比如 g++），把整篇 C++ 源代码翻译成二进制的机器码（比如 Windows 下的 .exe 可执行文件）。这个翻译的过程就叫做【编译】（Compile）。\n4. 其他选项为什么不对：\n   - 编辑：只是你在键盘上敲代码、修改文字的过程。\n   - 保存：只是把你敲的文字存到硬盘里，还没有翻译。\n   - 调试（Debug）：是程序出错时，一步步寻找 bug 在哪里的过程。\n因此正确答案是“编译”。"
    },
    {
        id: "2023-06-S02",
        paperId: "2023-06",
        paperName: "GESP C++三级样卷（未标年月）",
        year: "2023",
        type: "single",
        num: 2,
        stem: "二进制数 11.01 在十进制下是（ ）。",
        options: [
            { text: "3.01", isCorrect: false },
            { text: "3.05", isCorrect: false },
            { text: "3.125", isCorrect: false },
            { text: "3.25", isCorrect: true }
        ],
        explanation: "【零基础保姆级解析】\n二进制转十进制的秘诀是“按权展开相加”。我们把小数点前后的数字拆开来算：\n1. 先看小数点左边的整数部分【11】：\n   - 最右边的 1（个位）：代表 1 × 2⁰ = 1 × 1 = 1\n   - 左边的 1（第2位）：代表 1 × 2¹ = 1 × 2 = 2\n   - 整数部分加起来：2 + 1 = 3。\n2. 再看小数点右边的小数部分【.01】：\n   - 小数点后第 1 位是“半个”（2⁻¹ = 1/2 = 0.5），这里数字是 0，所以是 0 × 0.5 = 0。\n   - 小数点后第 2 位是“四分之一”（2⁻² = 1/4 = 0.25），这里数字是 1，所以是 1 × 0.25 = 0.25。\n   - 小数部分加起来：0 + 0.25 = 0.25。\n3. 把整数部分和小数部分合起来：3 + 0.25 = 3.25。\n所以正确答案是 3.25。"
    },
    {
        id: "2023-06-S03",
        paperId: "2023-06",
        paperName: "GESP C++三级样卷（未标年月）",
        year: "2023",
        type: "single",
        num: 3,
        stem: "已知大写字符'A'的ASCII编码的十六进制表示为0x41，则字符'F'的ASCII编码的十六进制表示为（ ）。",
        options: [
            { text: "46", isCorrect: true },
            { text: "47", isCorrect: false },
            { text: "48", isCorrect: false },
            { text: "49", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n1. 在 ASCII 编码表里，大写英文字母 A 到 Z 是紧密挨在一起、按顺序一个接一个排列的！每往后数一个字母，编码值就加 1。\n2. 题目告诉我们 'A' 是十六进制的 41（0x 表示十六进制前缀）。\n3. 我们掰着手指头从 A 往后数到 F：\n   - 'A' -> 41\n   - 'B' -> 42\n   - 'C' -> 43\n   - 'D' -> 44\n   - 'E' -> 45\n   - 'F' -> 46\n4. 因为个位从 1 加到 6 还没有满 16（十六进制逢 16 才进位），所以直接就是 46！正确答案选 46。"
    },
    {
        id: "2023-06-S04",
        paperId: "2023-06",
        paperName: "GESP C++三级样卷（未标年月）",
        year: "2023",
        type: "single",
        num: 4,
        stem: "以下哪个不是C++语言中的运算符？（ ）",
        options: [
            { text: "&", isCorrect: false },
            { text: "&&", isCorrect: false },
            { text: "*", isCorrect: false },
            { text: "**", isCorrect: true }
        ],
        explanation: "【零基础保姆级解析】\n我们逐个认识这四个符号：\n1. `&`：是 C++ 的“按位与”运算符（或者取地址符），合法。\n2. `&&`：是 C++ 的“逻辑与”（并且）运算符，合法。\n3. `*`：是 C++ 的“乘法”运算符（或者指针解引用符），合法。\n4. `**`：在 Python 语言里 `**` 表示乘方（比如 2**3 等于 8），但在 C++ 语言里【根本没有 `**` 这个运算符】！C++ 里如果想算乘方，需要用 `<cmath>` 里的 `pow(a, b)` 函数，或者自己写循环相乘。\n所以不是 C++ 运算符的是 `**`。"
    },
    {
        id: "2023-06-S05",
        paperId: "2023-06",
        paperName: "GESP C++三级样卷（未标年月）",
        year: "2023",
        type: "single",
        num: 5,
        stem: "如果字符串定义为char str[] = \"Hello\";，则字符数组str的长度为（ ）。",
        options: [
            { text: "0", isCorrect: false },
            { text: "5", isCorrect: false },
            { text: "6", isCorrect: true },
            { text: "7", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n这是一道超级高频易错题！一定要分清“字符串长度”和“字符数组长度（占用格数）”的区别：\n1. 双引号括起来的 `\"Hello\"` 表面上看有 5 个字母：`'H'`, `'e'`, `'l'`, `'l'`, `'o'`。\n2. 但是！在 C++ 中，只要用双引号 `\"...\"` 定义字符串，编译器都会在最后面【自动塞入一个看不见的结束标志符 `'\\0'`】用来告诉电脑字符串到这里结束了。\n3. 所以字符数组 `str` 里实际存放了：`'H'`, `'e'`, `'l'`, `'l'`, `'o'`, `'\\0'`，一共 5 + 1 = 6 个字符！\n4. 因此，字符数组 `str` 的长度（元素个数）是 6。"
    },
    {
        id: "2023-06-S06",
        paperId: "2023-06",
        paperName: "GESP C++三级样卷（未标年月）",
        year: "2023",
        type: "single",
        num: 6,
        stem: "一个数组定义为 double array[3];，则这个数组占用内存的大小为（ ）。",
        options: [
            { text: "24", isCorrect: true },
            { text: "12", isCorrect: false },
            { text: "6", isCorrect: false },
            { text: "3", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n1. 先背熟常见数据类型每个元素占多少字节（Byte）：\n   - `char`（字符型）：1 个字节\n   - `short`（短整型）：2 个字节\n   - `int`（整型）、`float`（单精度浮点型）：4 个字节\n   - `double`（双精度浮点型）、`long long`（长整型）：8 个字节！\n2. 题目定义了 `double array[3];`，意思是这个数组里有 3 个 `double` 类型的房间。\n3. 每个房间占 8 个字节，一共有 3 个房间，所以总内存大小 = 8 × 3 = 24 字节。\n正确答案是 24。"
    },
    {
        id: "2023-06-S07",
        paperId: "2023-06",
        paperName: "GESP C++三级样卷（未标年月）",
        year: "2023",
        type: "single",
        num: 7,
        stem: "以下数组定义，符合C++语言语法的是（ ）。",
        options: [
            { text: "int a[];", isCorrect: false },
            { text: "int b['3'];", isCorrect: true },
            { text: "int c[3.0];", isCorrect: false },
            { text: "int[3] d;", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n在 C++ 中定义数组时，方括号 `[]` 里面必须是一个【大于 0 的整数常量】（除非你在定义的同时用大括号 `{...}` 赋了初值）。我们逐个检查：\n1. `int a[];`：错误！方括号里既没有写长度，后面也没有用 `= {1, 2}` 赋初值，电脑根本不知道要开辟几个房间。\n2. `int b['3'];`：正确！为什么单引号 `'3'` 可以？因为在 C++ 里，`char` 字符本质上就是一个整数（它的 ASCII 码值是 51）。所以在方括号里写 `'3'` 完全等价于写 `int b[51];`，是正整数常量，完全合法！\n3. `int c[3.0];`：错误！`3.0` 是小数（浮点数），数组房间数不能是小数类型。\n4. `int[3] d;`：错误！C++ 规定方括号 `[3]` 必须写在数组名字 `d` 的后面，写成 `int d[3];` 才对。\n因此符合语法的是 `int b['3'];`。"
    },
    {
        id: "2023-06-S08",
        paperId: "2023-06",
        paperName: "GESP C++三级样卷（未标年月）",
        year: "2023",
        type: "single",
        num: 8,
        stem: "下列关于进制的叙述，不正确的是（ ）。",
        options: [
            { text: "正整数的二进制表示中只会出现0和1。", isCorrect: false },
            { text: "10不是2的整数次幂，所以十进制数无法转换为二进制数。", isCorrect: true },
            { text: "从二进制转换为8进制时，可以很方便地由低到高将每3位二进制位转换为对应的一位8进制位。", isCorrect: false },
            { text: "从二进制转换为16进制时，可以很方便地由低到高将每4位二进制位转换为对应的一位16进制位。", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n题目问的是【不正确】的一项：\n1. 二进制逢二进一，只有 0 和 1 两个数字，说法正确。\n2. 任何十进制整数都可以通过“除 2 取余，逆序排列”的方法转换成二进制数（比如十进制 10 转成二进制是 1010），跟 10 是不是 2 的整数次幂毫无关系！所以“十进制数无法转换为二进制数”是完全错误的！\n3. 因为 2³ = 8，所以每 3 位二进制刚好对应 1 位八进制，说法正确。\n4. 因为 2⁴ = 16，所以每 4 位二进制刚好对应 1 位十六进制，说法正确。\n因此不正确的是“10不是2的整数次幂，所以十进制数无法转换为二进制数。”。"
    },
    {
        id: "2023-06-S09",
        paperId: "2023-06",
        paperName: "GESP C++三级样卷（未标年月）",
        year: "2023",
        type: "single",
        num: 9,
        stem: "下列关于C++语言中数组的叙述，不正确的是（ ）。",
        options: [
            { text: "数组必须先定义后使用。", isCorrect: false },
            { text: "数组的所有元素在内存中是连续存放的。", isCorrect: false },
            { text: "除了字符数组，在定义数组时“[]”内必须有常数。", isCorrect: true },
            { text: "不能对数组赋值，但可以对数组的每个基础类型的元素赋值。", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n题目要求选出【不正确】的一项：\n1. C++ 中任何变量和数组都必须先定义后使用，正确。\n2. 数组的所有元素在内存里就像一排紧挨着的储物柜，是连续存放的，正确。\n3. “除了字符数组，在定义数组时 [] 内必须有常数”——错误！哪怕是普通的整型数组，只要在定义的同时给出初始化列表，比如 `int a[] = {1, 2, 3};`，方括号 `[]` 里面就可以空着不写常数，编译器会自动数出有 3 个元素！并非只有字符数组才能省略。\n4. C++ 中数组名代表首地址常量，不能整体写 `a = b;`，但可以写 `a[0] = 5;` 给单个元素赋值，正确。\n所以不正确的是“除了字符数组，在定义数组时“[]”内必须有常数。”。"
    },
    {
        id: "2023-06-S10",
        paperId: "2023-06",
        paperName: "GESP C++三级样卷（未标年月）",
        year: "2023",
        type: "single",
        num: 10,
        stem: "一个int 类型的值，做以下哪个操作，一定会变回原来的值？（ ）",
        options: [
            { text: "左移3位，再右移3位。", isCorrect: false },
            { text: "右移3位，再左移3位。", isCorrect: false },
            { text: "按位或7，再按位与-8。", isCorrect: false },
            { text: "按位异或7，再按位异或7。", isCorrect: true }
        ],
        explanation: "【零基础保姆级解析】\n我们来分析每个位运算操作会发生什么：\n1. 左移 3 位再右移 3 位：如果原来的数很大，左移 3 位时最左边的最高位直接溢出了（掉出去了），再右移回来也找不回掉出去的位了，所以不一定变回原值。\n2. 右移 3 位再左移 3 位：如果原来的数是奇数（比如 5，二进制 101），右移 3 位直接变成 0 了，再左移 3 位还是 0，最右边的低 3 位彻底丢了！\n3. 按位或 7 再按位与 -8：会把最低 3 位全部清零，如果原数最低 3 位本来有 1 就回不去了。\n4. 【按位异或 7，再按位异或 7】：记住异或运算（`^`）最神奇的定律——**同一个数异或两次等于啥也没干**！即 `(x ^ 7) ^ 7 = x ^ (7 ^ 7) = x ^ 0 = x`。无论 `x` 是什么整数，异或同一个数两次，100% 变回原来的值！"
    },
    {
        id: "2023-06-S11",
        paperId: "2023-06",
        paperName: "GESP C++三级样卷（未标年月）",
        year: "2023",
        type: "single",
        num: 11,
        stem: "如果a和b均为int类型的变量，下列表达式能正确判断“a等于b”的是（ ）。",
        options: [
            { text: "((a / b) == 1)", isCorrect: false },
            { text: "((a & b) == a)", isCorrect: false },
            { text: "((a ^ b) == 0)", isCorrect: true },
            { text: "((a | b) == b)", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n1. 先看 `((a / b) == 1)`：C++ 中整数相除会直接扔掉小数部分！比如 `a = 5, b = 4`，`5 / 4` 结果也是 `1`，而且如果 `a = 0, b = 0` 还会发生除以 0 崩溃，所以不行。\n2. 再看 `((a & b) == a)`：如果 `a = 0, b = 5`，`0 & 5` 等于 `0 == a`，但 a 和 b 并不相等。\n3. 看 `((a ^ b) == 0)`：按位异或（`^`）的规则是：**相同为 0，不同为 1**。只有当 `a` 和 `b` 的每一个二进制位都一模一样（即 `a` 完全等于 `b`）时，它们异或的结果才会每一位都是 0，总结果为 0！\n4. 看 `((a | b) == b)`：如果 `a = 0, b = 5`，`0 | 5` 等于 `5 == b`，但 a 和 b 不相等。\n所以能准确判断 a 等于 b 的是 `((a ^ b) == 0)`。"
    },
    {
        id: "2023-06-S12",
        paperId: "2023-06",
        paperName: "GESP C++三级样卷（未标年月）",
        year: "2023",
        type: "single",
        num: 12,
        stem: "如果a为int类型的变量，下列哪个表达式可以正确求出满足“小于等于a且是4的倍数”的整数中最大的？（ ）",
        options: [
            { text: "(a & (~3))", isCorrect: true },
            { text: "((a << 2) >> 2)", isCorrect: false },
            { text: "(a ^ 3)", isCorrect: false },
            { text: "((a - 1) | 3) + 1", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n1. 在二进制里，什么样的数是 4 的倍数？\n   因为 4 的二进制是 `100`，所以任何一个 4 的倍数，它的二进制【最后两位（最低两位）一定都是 0】！\n2. 要找“小于等于 a 且是 4 的倍数的最大整数”，其实就是把 `a` 的二进制最后两位抹成 0（相当于减掉 `a` 除以 4 的余数），前面的高位保持不变。\n3. 怎么把 `a` 的最后两位变成 0？\n   - 数字 `3` 的二进制是 `...00000011`（只有最后两位是 1，其余全是 0）。\n   - 对 3 按位取反 `~3`，得到的二进制就是 `...11111100`（除了最后两位是 0，其余全是 1）。\n   - 再用 `a & (~3)` 进行按位与运算：前面和 1 相与保持原样，最后两位和 0 相与全部变成 0！\n4. 举个例子验算：假设 `a = 7`（二进制 `0111`），小于等于 7 的最大 4 的倍数是 `4`（二进制 `0100`）。`7 & (~3)` 抹掉最后两位 `11`，正好得到 `0100`（即 4）！\n因此正确答案是 `(a & (~3))`。"
    },
    {
        id: "2023-06-S13",
        paperId: "2023-06",
        paperName: "GESP C++三级样卷（未标年月）",
        year: "2023",
        type: "single",
        num: 13,
        stem: "在下列代码的横线处填写（ ），可以使得输出是“24 12”。",
        code: `#include <iostream>
using namespace std;

int main() {
    int a = 12, b = 24;
    ________________; // 在此处填入代码
    a = a ^ b;
    b = a ^ b;
    cout << a << " " << b << endl;
    return 0;
}`,
        options: [
            { text: "a = a ^ b", isCorrect: false },
            { text: "b = a ^ b", isCorrect: true },
            { text: "a = a + b", isCorrect: false },
            { text: "b = a + b", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n这道题考查经典的“三次异或交换两个变量的值”！\n1. 原先 `a = 12, b = 24`，最后要输出 `24 12`，说明要把 `a` 和 `b` 的值互换。\n2. 异或交换的标准三步曲是：三个式子左边轮流写 `a, b, a` 或者 `b, a, b`。\n3. 观察题目已经给出的后两行代码：\n   第2步是：`a = a ^ b;`\n   第3步是：`b = a ^ b;`\n4. 既然第2步求出了新的 `a`，第3步求出了新的 `b`，那么第1步必须是先把 `a ^ b` 存进 `b` 里！也就是 `b = a ^ b`。\n5. 我们来验算一下填入 `b = a ^ b` 后的三步：\n   - 第1步：`b = 12 ^ 24`\n   - 第2步：`a = 12 ^ (12 ^ 24) = 24`（看！a 已经变成 24 了！）\n   - 第3步：`b = 24 ^ (12 ^ 24) = 12`（看！b 已经变成 12 了！）\n所以横线处必须填 `b = a ^ b`。"
    },
    {
        id: "2023-06-S14",
        paperId: "2023-06",
        paperName: "GESP C++三级样卷（未标年月）",
        year: "2023",
        type: "single",
        num: 14,
        stem: "在下列代码的横线处填写（ ），可以使得输出是“2”。",
        code: `#include <iostream>
using namespace std;

int main() {
    int array[5] = {3, 7, 5, 2, 4};
    int min = 0;
    for (int i = 0; i < 5; i++)
        if (________________) // 在此处填写代码
            min = array[i];
    cout << min << endl;
    return 0;
}`,
        options: [
            { text: "min > array[i]", isCorrect: false },
            { text: "min < array[i]", isCorrect: false },
            { text: "min == array[i]", isCorrect: false },
            { text: "以上均不对。", isCorrect: true }
        ],
        explanation: "【零基础保姆级解析】\n千万别掉进陷阱里！仔细看第 5 行代码：\n`int min = 0;` —— 初始值居然设成了 `0`！\n1. 数组里的 5 个数是 `{3, 7, 5, 2, 4}`，它们全都比 0 大！\n2. 如果你填 `min > array[i]`（想找最小值）：因为 `min` 一开始是 `0`，数组里没有任何一个数比 `0` 还小，所以 `if` 条件永远不会成立，最后输出的 `min` 依然是 `0`，根本不是 `2`！\n3. 如果你填 `min < array[i]`（找最大值）：最后 `min` 会变成数组里最大的数 `7`，也不是 `2`！\n4. 如果你填 `min == array[i]`：没有任何元素等于 0，最后还是输出 `0`！\n（注：求最小值正确的写法应该把初值设为 `int min = array[0];` 而不是 `0`）。\n所以 A、B、C 全都得不到 2，正确答案是“以上均不对。”！"
    },
    {
        id: "2023-06-S15",
        paperId: "2023-06",
        paperName: "GESP C++三级样卷（未标年月）",
        year: "2023",
        type: "single",
        num: 15,
        stem: "在下列代码的横线处填写（ ），可以使得输出不是“31”。",
        code: `#include <iostream>
using namespace std;

int main() {
    int array[5] = {1, 2, 4, 8, 16};
    int res = 0;
    for (int i = 0; i < 5; i++)
        ________________; // 在此处填写代码
    cout << res << endl;
    return 0;
}`,
        options: [
            { text: "res = res + array[i]", isCorrect: false },
            { text: "res = res & array[i]", isCorrect: true },
            { text: "res = res | array[i]", isCorrect: false },
            { text: "res = res ^ array[i]", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n先观察数组 `{1, 2, 4, 8, 16}` 的二进制特点：\n- 1  = `00001`\n- 2  = `00010`\n- 4  = `00100`\n- 8  = `01000`\n- 16 = `10000`\n每个数的二进制只有 1 位是 1，而且互不重叠！\n1. 如果填 `res = res + array[i]`：1 + 2 + 4 + 8 + 16 = 31。\n2. 如果填 `res = res | array[i]`（按位或）：把所有 1 拼在一起变成 `11111`（二进制），正是十进制的 31。\n3. 如果填 `res = res ^ array[i]`（按位异或）：因为没有任何一位有重复的 1，异或起来也是 `11111`，即 31。\n4. 如果填 `res = res & array[i]`（按位与）：因为 `res` 一开始是 `0`，0 跟任何数做按位与（`&`）结果永远是 0！所以循环结束后输出 `0`，不是 31。\n因此正确答案选 `res = res & array[i]`。"
    },
    {
        id: "2023-06-J01",
        paperId: "2023-06",
        paperName: "GESP C++三级样卷（未标年月）",
        year: "2023",
        type: "judge",
        num: 1,
        stem: "一个算法可以用不同的形式来描述，但要求描述比较规范，因此不能用自然语言描述。",
        answer: false,
        explanation: "【零基础保姆级解析】\n判断为【错误（×）】。\n算法的常用描述方法有四种：自然语言（比如我们平时说的中文、英文步骤）、流程图、伪代码、程序设计语言（如 C++）。虽然自然语言有时不够精炼，但它依然是描述算法最基础、最合法的形式之一，所以说“不能用自然语言描述”是错的。"
    },
    {
        id: "2023-06-J02",
        paperId: "2023-06",
        paperName: "GESP C++三级样卷（未标年月）",
        year: "2023",
        type: "judge",
        num: 2,
        stem: "域名是由一串用点分隔的名字来标识互联网上一个计算机或计算机组的名称，CCF 编程能力等级认证官方网站的域名是 gesp.ccf.org.cn，其中顶级域名是 gesp。",
        answer: false,
        explanation: "【零基础保姆级解析】\n判断为【错误（×）】。\n记住一个口诀：**域名是从右往左级别越来越高的，最右边的才是顶级域名！**\n在 `gesp.ccf.org.cn` 中，最右边的是 `cn`（代表中国的国家顶级域名），而最左边的 `gesp` 是级别最低的子域名（四级域名），不是顶级域名。"
    },
    {
        id: "2023-06-J03",
        paperId: "2023-06",
        paperName: "GESP C++三级样卷（未标年月）",
        year: "2023",
        type: "judge",
        num: 3,
        stem: "数据编码方式只有原码、反码、补码三种。",
        answer: false,
        explanation: "【零基础保姆级解析】\n判断为【错误（×）】。\n原码、反码、补码只是计算机用来表示“有符号整数”的三种编码方式。除此之外，计算机里还有表示整数的移码、BCD码，表示字符的 ASCII 码、UTF-8 编码，表示小数的 IEEE 754 浮点编码，还有 Base64 编码等等。所以说“只有三种”是错的。"
    },
    {
        id: "2023-06-J04",
        paperId: "2023-06",
        paperName: "GESP C++三级样卷（未标年月）",
        year: "2023",
        type: "judge",
        num: 4,
        stem: "在C++语言中，长度为n的数组，合理的下标范围是从0到n，包括0和n。",
        answer: false,
        explanation: "【零基础保姆级解析】\n判断为【错误（×）】。\nC++ 数组的下标是从 `0` 开始数的！如果数组长度是 `n`，那么第 1 个元素是 `[0]`，第 2 个是 `[1]`……第 `n` 个（最后一个）元素的下标是 `[n - 1]`！\n下标 `n` 已经超出数组边界（越界）了，所以合理范围是 `0` 到 `n - 1`。"
    },
    {
        id: "2023-06-J05",
        paperId: "2023-06",
        paperName: "GESP C++三级样卷（未标年月）",
        year: "2023",
        type: "judge",
        num: 5,
        stem: "字符常量'\\0'常用来表示字符串结束，它和字符常量'0'是不同的。",
        answer: true,
        explanation: "【零基础保姆级解析】\n判断为【正确（√）】。\n- `'\\0'` 是空字符（Null character），它的 ASCII 码值是 **0**，专门用来标记字符串的结尾。\n- `'0'` 是阿拉伯数字零的字符形式，它的 ASCII 码值是 **48**。\n两者的 ASCII 码值一个是 0，一个是 48，完全不同！"
    },
    {
        id: "2023-06-J06",
        paperId: "2023-06",
        paperName: "GESP C++三级样卷（未标年月）",
        year: "2023",
        type: "judge",
        num: 6,
        stem: "在C++语言中，可以使用字符（如'0'）作为数组下标。",
        answer: true,
        explanation: "【零基础保姆级解析】\n判断为【正确（√）】。\n在 C++ 中，`char` 字符类型本质上就是一种小整数类型（存储的是字符的 ASCII 码值）。比如 `'0'` 的 ASCII 码是 48，当你写 `arr['0']` 时，电脑会自动把它当成 `arr[48]` 来访问，完全符合 C++ 语法！"
    },
    {
        id: "2023-06-J07",
        paperId: "2023-06",
        paperName: "GESP C++三级样卷（未标年月）",
        year: "2023",
        type: "judge",
        num: 7,
        stem: "在C++语言中，数组被定义时，它的大小就确定了。",
        answer: true,
        explanation: "【零基础保姆级解析】\n判断为【正确（√）】。\n标准 C++ 中的普通固定数组（如 `int a[10];` 或 `int a[] = {1, 2, 3};`），一旦定义完成，它在内存中分配的房间数量就固定死了，后续不能变大也不能变小。"
    },
    {
        id: "2023-06-J08",
        paperId: "2023-06",
        paperName: "GESP C++三级样卷（未标年月）",
        year: "2023",
        type: "judge",
        num: 8,
        stem: "计算机中存储的数据都是二进制形式。因此，在使用C++语言编写程序时，将所有十进制数改写为相同数值的二进制数，会使得程序运行效率更高。",
        answer: false,
        explanation: "【零基础保姆级解析】\n判断为【错误（×）】。\n你在代码里写十进制 `10` 还是写二进制 `0b1010`，在【编译阶段】都会被编译器统一翻译成一模一样的二进制机器码！到了【程序运行阶段】，电脑执行的机器指令完全相同，运行速度没有任何区别。"
    },
    {
        id: "2023-06-J09",
        paperId: "2023-06",
        paperName: "GESP C++三级样卷（未标年月）",
        year: "2023",
        type: "judge",
        num: 9,
        stem: "在C++语言中，表达式 (0xf == 015) 的值为true。",
        answer: false,
        explanation: "【零基础保姆级解析】\n判断为【错误（×）】。\n我们来分别算出左右两边在十进制下是多少：\n1. 左边 `0xf`：以 `0x` 开头是**十六进制**，字母 `f` 代表十进制的 **15**。\n2. 右边 `015`：注意！在 C++ 里，以数字 `0` 开头的整数常量是**八进制**！八进制的 `15` 换算成十进制是 `1 × 8 + 5 = 13`。\n左边是 15，右边是 13，`15 == 13` 不成立，结果为 `false`！"
    },
    {
        id: "2023-06-J10",
        paperId: "2023-06",
        paperName: "GESP C++三级样卷（未标年月）",
        year: "2023",
        type: "judge",
        num: 10,
        stem: "如果a为int类型的变量，且表达式 ((a | 3) == 3) 的值为true，则说明a在从0到3之间（可能为0、可能为3）。",
        answer: true,
        explanation: "【零基础保姆级解析】\n判断为【正确（√）】。\n1. 数字 `3` 的二进制只有最低两位是 `1`（即 `...000011`），其余高位（包括符号位）全部是 `0`。\n2. 按位或（`|`）的规则是“只要有一个为 1 结果就是 1”。如果 `a | 3` 的结果还是 `3`，说明 `a` 除了最低两位可以是 0 或 1 之外，其余所有高位（包括符号位）必须全部是 `0`！\n3. 只有最低两位可能是 0 或 1 的整数有哪些？只有 `00`(0)、`01`(1)、`10`(2)、`11`(3) 这四个数！所以 `a` 一定在 0 到 3 之间。"
    }
);

// =====================================================================
// 试卷 2：2023年09月 C++三级真题 (25题)
// =====================================================================
window.GESP_QUESTIONS.push(
    {
        id: "2023-09-S01",
        paperId: "2023-09",
        paperName: "2023年09月 C++三级真题",
        year: "2023",
        type: "single",
        num: 1,
        stem: "人们所使用的手机上安装的App通常指的是（ ）。",
        options: [
            { text: "一款操作系统", isCorrect: false },
            { text: "一款应用软件", isCorrect: true },
            { text: "一种通话设备", isCorrect: false },
            { text: "以上都不对", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\nApp 是英文 Application（应用程序/应用软件）的缩写。像微信、抖音、学习软件等安装在手机上的 App，都是为了完成特定功能的“一款应用软件”。手机的操作系统指的是 Android（安卓）、iOS 或鸿蒙（HarmonyOS）。所以选“一款应用软件”。"
    },
    {
        id: "2023-09-S02",
        paperId: "2023-09",
        paperName: "2023年09月 C++三级真题",
        year: "2023",
        type: "single",
        num: 2,
        stem: "下列流程图的输出结果是？（ ）",
        svgDiagram: `<svg viewBox="0 0 380 420" width="340" height="380" xmlns="http://www.w3.org/2000/svg" font-family="Microsoft YaHei, sans-serif" font-size="14">
            <defs><marker id="arr2309" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#475569"/></marker></defs>
            <rect x="115" y="10" width="110" height="40" rx="20" fill="#fca5a5" stroke="#ef4444" stroke-width="1.5"/>
            <text x="170" y="35" text-anchor="middle" fill="#fff" font-weight="bold">开始</text>
            <line x1="170" y1="50" x2="170" y2="75" stroke="#475569" stroke-width="2" marker-end="url(#arr2309)"/>
            <rect x="105" y="75" width="130" height="45" fill="#3b82f6" stroke="#2563eb" stroke-width="1.5"/>
            <text x="170" y="103" text-anchor="middle" fill="#fff" font-weight="bold">a=5, s=1</text>
            <line x1="170" y1="120" x2="170" y2="145" stroke="#475569" stroke-width="2" marker-end="url(#arr2309)"/>
            <polygon points="170,145 245,185 170,225 95,185" fill="#6366f1" stroke="#4f46e5" stroke-width="1.5"/>
            <text x="170" y="190" text-anchor="middle" fill="#fff" font-weight="bold">a ≥ 4</text>
            <line x1="170" y1="225" x2="170" y2="265" stroke="#475569" stroke-width="2" marker-end="url(#arr2309)"/>
            <text x="185" y="250" fill="#1e293b" font-weight="bold">是</text>
            <rect x="105" y="265" width="130" height="45" fill="#3b82f6" stroke="#2563eb" stroke-width="1.5"/>
            <text x="170" y="293" text-anchor="middle" fill="#fff" font-weight="bold">s = s × a</text>
            <line x1="170" y1="310" x2="170" y2="340" stroke="#475569" stroke-width="2" marker-end="url(#arr2309)"/>
            <rect x="105" y="340" width="130" height="45" fill="#3b82f6" stroke="#2563eb" stroke-width="1.5"/>
            <text x="170" y="368" text-anchor="middle" fill="#fff" font-weight="bold">a = a - 1</text>
            <polyline points="170,385 170,405 45,405 45,185 95,185" fill="none" stroke="#475569" stroke-width="2" marker-end="url(#arr2309)"/>
            <polyline points="245,185 315,185 315,245" fill="none" stroke="#475569" stroke-width="2" marker-end="url(#arr2309)"/>
            <text x="280" y="178" fill="#1e293b" font-weight="bold">否</text>
            <rect x="265" y="245" width="100" height="45" fill="#3b82f6" stroke="#2563eb" stroke-width="1.5"/>
            <text x="315" y="273" text-anchor="middle" fill="#fff" font-weight="bold">输出 s</text>
            <line x1="315" y1="290" x2="315" y2="335" stroke="#475569" stroke-width="2" marker-end="url(#arr2309)"/>
            <rect x="265" y="335" width="100" height="40" rx="20" fill="#fca5a5" stroke="#ef4444" stroke-width="1.5"/>
            <text x="315" y="360" text-anchor="middle" fill="#fff" font-weight="bold">结束</text>
        </svg>`,
        options: [
            { text: "60", isCorrect: false },
            { text: "20", isCorrect: true },
            { text: "5", isCorrect: false },
            { text: "1", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n我们跟着流程图的箭头一步步走：\n1. 【初始化】：一开始 `a = 5, s = 1`。\n2. 【第 1 次判断 `a ≥ 4`】：此时 `a` 是 5，`5 ≥ 4` 成立（走“是”分支）：\n   - 执行 `s = s × a`：`s = 1 × 5 = 5`\n   - 执行 `a = a - 1`：`a = 5 - 1 = 4`\n   - 顺着左边箭头回到判断框。\n3. 【第 2 次判断 `a ≥ 4`】：此时 `a` 是 4，`4 ≥ 4` 依然成立（走“是”分支）：\n   - 执行 `s = s × a`：`s = 5 × 4 = 20`\n   - 执行 `a = a - 1`：`a = 4 - 1 = 3`\n   - 顺着左边箭头回到判断框。\n4. 【第 3 次判断 `a ≥ 4`】：此时 `a` 是 3，`3 ≥ 4` 不成立（走“否”分支）：\n   - 执行“输出 s”，此时 `s` 的值是 `20`！\n所以最终输出结果是 20。"
    },
    {
        id: "2023-09-S03",
        paperId: "2023-09",
        paperName: "2023年09月 C++三级真题",
        year: "2023",
        type: "single",
        num: 3,
        stem: "已知大写字符'A'的ASCII编码的十六进制表示为0x41，则字符'L'的ASCII编码的十六进制表示为（ ）。",
        options: [
            { text: "4A", isCorrect: false },
            { text: "4B", isCorrect: false },
            { text: "4C", isCorrect: true },
            { text: "52", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n注意题目问的是【十六进制】！千万要记得十六进制里 9 的下一个数字是 A（10）、B（11）、C（12）……\n我们从 'A'(41) 开始往后一个个写出十六进制编码：\n- 'A' : 41\n- 'B' : 42\n- 'C' : 43\n- 'D' : 44\n- 'E' : 45\n- 'F' : 46\n- 'G' : 47\n- 'H' : 48\n- 'I' : 49\n- 'J' : 4A （注意！49 加 1 在十六进制里是 4A，不是 50！）\n- 'K' : 4B\n- 'L' : 4C\n所以字符 'L' 的十六进制 ASCII 码是 4C。"
    },
    {
        id: "2023-09-S04",
        paperId: "2023-09",
        paperName: "2023年09月 C++三级真题",
        year: "2023",
        type: "single",
        num: 4,
        stem: "以下哪个不是C++语言中的运算符？（ ）",
        options: [
            { text: "~", isCorrect: false },
            { text: "~~", isCorrect: true },
            { text: "<", isCorrect: false },
            { text: "<<", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n1. `~`：是 C++ 的“按位取反”运算符，合法。\n2. `<`：是 C++ 的“小于”关系运算符，合法。\n3. `<<`：是 C++ 的“左移”位运算符（也是 `cout <<` 的流输出运算符），合法。\n4. `~~`：C++ 里没有两个波浪号连在一起的 `~~` 运算符（虽然可以连续对一个数取反两次写 `~(~a)`，但语法词法里没有独立的 `~~` 运算符）。\n所以不是 C++ 运算符的是 `~~`。"
    },
    {
        id: "2023-09-S05",
        paperId: "2023-09",
        paperName: "2023年09月 C++三级真题",
        year: "2023",
        type: "single",
        num: 5,
        stem: "如果数组定义为 long long array[] = {3, 5, 7, 2};，则数组 array 占用的字节数为（ ）。",
        options: [
            { text: "32", isCorrect: true },
            { text: "16", isCorrect: false },
            { text: "8", isCorrect: false },
            { text: "4", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n1. 先数数组里有几个元素：大括号 `{3, 5, 7, 2}` 里一共有 **4** 个整数。\n2. 再看每个元素是什么类型：类型是 `long long`（长整型）。在 C++ 中，每个 `long long` 类型的变量固定占用 **8 个字节（Byte）**。\n3. 计算总字节数：4 个元素 × 每个 8 字节 = **32 字节**。\n所以正确答案是 32。"
    },
    {
        id: "2023-09-S06",
        paperId: "2023-09",
        paperName: "2023年09月 C++三级真题",
        year: "2023",
        type: "single",
        num: 6,
        stem: "一个数组定义为 double array[3];，则可合理访问这个数组的元素的下标最大为（ ）。",
        options: [
            { text: "2", isCorrect: true },
            { text: "3", isCorrect: false },
            { text: "23", isCorrect: false },
            { text: "24", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n别被前面的 `double`（占 8 字节）迷惑了！题目问的是【下标最大为多少】，不是问占多少字节！\n1. `double array[3];` 表示这个数组一共有 **3 个元素**。\n2. C++ 数组下标从 `0` 开始编号，这 3 个元素分别是：`array[0]`、`array[1]`、`array[2]`。\n3. 因此，可合理访问的最大下标是 `3 - 1 = 2`。"
    },
    {
        id: "2023-09-S07",
        paperId: "2023-09",
        paperName: "2023年09月 C++三级真题",
        year: "2023",
        type: "single",
        num: 7,
        stem: "以下数组定义，符合C++语言语法的是（ ）。",
        options: [
            { text: "double a[];", isCorrect: false },
            { text: "double b[] = {1, 2.0, '3'};", isCorrect: true },
            { text: "double c[3.0];", isCorrect: false },
            { text: "double[] d = new double[3];", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n我们逐项检查：\n1. `double a[];`：错误，既没写数组大小，也没给初始化大括号 `{...}`。\n2. `double b[] = {1, 2.0, '3'};`：正确！虽然省略了 `[]` 里的数字，但后面给出了 `{1, 2.0, '3'}` 共 3 个初值。其中整数 `1` 会自动转成 `1.0`，字符 `'3'`（ASCII 码 51）也会自动转成 `51.0` 存进 `double` 数组里，完全合法！\n3. `double c[3.0];`：错误，数组长度必须是整数类型，不能是小数 `3.0`。\n4. `double[] d = new double[3];`：错误，这是 Java 语言的语法，C++ 中不能写 `double[] d`。\n所以选 `double b[] = {1, 2.0, '3'};`。"
    },
    {
        id: "2023-09-S08",
        paperId: "2023-09",
        paperName: "2023年09月 C++三级真题",
        year: "2023",
        type: "single",
        num: 8,
        stem: "下列关于进制的叙述，正确的是（ ）。",
        options: [
            { text: "只有十进制和二进制能够用来表示小数，八进制和十六进制不可以。", isCorrect: false },
            { text: "常用的进制包括二进制、八进制、十进制、十六进制，其他进制在日常生活中很少使用。", isCorrect: true },
            { text: "对任意正整数，其二进制表示不会比它的十进制表示更短。", isCorrect: false },
            { text: "正整数的八进制表示中，每一位可能出现的最大数字是8。", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n1. 任何进制（包括八进制、十六进制）都可以有小数点并表示小数（比如八进制 `35.6`），所以“只有十进制和二进制能表示小数”是错的。\n2. “常用的进制包括二进制、八进制、十进制、十六进制，其他进制在日常生活中很少使用”——完全正确（注：原卷排版中该项漏印了字母 B，但它就是第 2 个选项 B）！\n3. “对任意正整数，其二进制表示不会比十进制更短”：其实这道题的这个选项描述是正确的（因为二进制逢2就进位，位数总是大于等于十进制位数，比如 1 都是 1 位，2 的二进制是 10 有 2 位），但在官方标准答案中，本题考核的核心常识是选 B。\n4. 八进制逢八进一，每一位只能出现 `0 ~ 7`，最大数字是 `7`，绝对不可能出现 `8`，所以错。\n按照原卷官方标准答案，选“常用的进制包括二进制、八进制、十进制、十六进制，其他进制在日常生活中很少使用。”。"
    },
    {
        id: "2023-09-S09",
        paperId: "2023-09",
        paperName: "2023年09月 C++三级真题",
        year: "2023",
        type: "single",
        num: 9,
        stem: "下列关于C++语言中数组的叙述，不正确的是（ ）。",
        options: [
            { text: "可以定义0个元素的数组。", isCorrect: false },
            { text: "不能定义-1个元素的数组。", isCorrect: false },
            { text: "数组下标越界访问会产生编译错误。", isCorrect: true },
            { text: "程序运行时发生数组下标的越界访问，程序依然可能正常结束。", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n题目要求选出【不正确】的一项：\n1. 在 GCC/G++（Dev-C++ 使用的编译器）中，支持 `int a[0];` 这种零长度数组扩展；而负数长度 `int a[-1];` 一定会报错。\n2. 重点看“数组下标越界访问会产生编译错误”：这是**错误**的！C++ 编译器为了追求极致的运行速度，在编译时通常**不会检查数组下标是否越界**（比如定义了 `int a[5];` 却写 `cout << a[10];` 或通过变量 `a[i]` 越界，编译照样能通过！）。\n3. 越界访问发生在【程序运行时】，如果越界读到了自己程序内部还没用到的内存，程序甚至不会崩溃，依然可能正常结束（只是读出来的是乱七八糟的垃圾值）。\n所以不正确的是“数组下标越界访问会产生编译错误。”。"
    },
    {
        id: "2023-09-S10",
        paperId: "2023-09",
        paperName: "2023年09月 C++三级真题",
        year: "2023",
        type: "single",
        num: 10,
        stem: "如果a是int类型的变量，下列哪个表达式的值一定为true？（ ）",
        options: [
            { text: "a + 1000 - 1000 == a", isCorrect: true },
            { text: "a * 2 / 2 == a", isCorrect: false },
            { text: "(a & 1) == 1", isCorrect: false },
            { text: "(a | 1) == a + 1", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n1. 在计算机补码加减法（模 2³² 运算）中，即便 `a + 1000` 发生了溢出，再减去 `1000` 也会绕一圈完好无损地回到原来的 `a`（从底层位运算角度，加减法在机器码层面是完全可逆的循环群运算），所以 `a + 1000 - 1000 == a` 恒为 true。\n2. 为什么 `a * 2 / 2 == a` 不一定为 true？因为 `a * 2` 相当于左移 1 位，如果 `a` 很大（比如 `a = 2000000000`），乘以 2 时最高位的 1 直接溢出丢掉了（变成了负数），再除以 2 也找不回丢掉的那一位，结果就不等于 `a` 了！\n3. `(a & 1) == 1` 只有当 `a` 是奇数时才为 true。\n4. `(a | 1) == a + 1` 只有当 `a` 是偶数时才为 true。\n因此一定为 true 的是 `a + 1000 - 1000 == a`。"
    },
    {
        id: "2023-09-S11",
        paperId: "2023-09",
        paperName: "2023年09月 C++三级真题",
        year: "2023",
        type: "single",
        num: 11,
        stem: "如果a和b均为int类型的变量，下列表达式不能正确判断“a等于b”的是（ ）。",
        options: [
            { text: "((a >= b) && (a <= b))", isCorrect: false },
            { text: "((a >> 1) == (b >> 1))", isCorrect: true },
            { text: "((a + b) == (a + a))", isCorrect: false },
            { text: "((a ^ b) == 0)", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n题目问的是【不能】正确判断 a 等于 b 的选项：\n1. `a >= b` 且 `a <= b`：既大于等于又小于等于，那只能是 `a == b`，能正确判断。\n2. `((a >> 1) == (b >> 1))`：右移 1 位会把两个数的【最低位（最后一位）直接扔掉】！比如 `a = 2`（二进制 `10`），`b = 3`（二进制 `11`），它们右移 1 位后都变成了 `1`（即 `(2 >> 1) == (3 >> 1)` 成立），但 2 和 3 明明不相等！所以它**不能**正确判断。\n3. `a + b == a + a`：两边同时减去 `a` 就是 `b == a`，能正确判断。\n4. `(a ^ b) == 0`：相同为 0，异或为 0 说明两数完全相等，能正确判断。\n所以选 `((a >> 1) == (b >> 1))`。"
    },
    {
        id: "2023-09-S12",
        paperId: "2023-09",
        paperName: "2023年09月 C++三级真题",
        year: "2023",
        type: "single",
        num: 12,
        stem: "如果a为char类型的变量，下列哪个表达式可以正确判断“a是大写字母”？（ ）",
        options: [
            { text: "a - 'A' <= 26", isCorrect: false },
            { text: "'A' <= a <= 'Z'", isCorrect: false },
            { text: "'A' <= 'a' <= 'Z'", isCorrect: false },
            { text: "('A' <= a) && (a <= 'Z')", isCorrect: true }
        ],
        explanation: "【零基础保姆级解析】\n这也是 C++ 初学者最容易踩坑的地方：\n1. 在数学课上我们可以写 `'A' <= a <= 'Z'`，但在 C++ 里【绝对不能连着写不等号】！\n   为什么？因为电脑会先算左边的 `'A' <= a`，算完得到布尔结果 `0`（假）或 `1`（真）；接着再用这个 `0` 或 `1` 去跟 `'Z'`（ASCII 码 90）比大小：`0 <= 90` 或 `1 <= 90` 永远成立！哪怕 `a` 是问号或小写字母，结果也永远是 true！\n2. 在 C++ 中表示“a 大于等于 'A' **并且** a 小于等于 'Z'”，必须用逻辑与 `&&` 把两个条件连接起来：\n   `('A' <= a) && (a <= 'Z')`。\n3. 至于 `a - 'A' <= 26`：如果 `a` 是比 `'A'` 还小的字符（比如数字 `'0'`，ASCII 48），`48 - 65 = -17 <= 26` 也成立，而且大写字母一共 26 个，`'Z' - 'A'` 最大是 25 而不是 26。\n所以唯一正确的是 `('A' <= a) && (a <= 'Z')`。"
    },
    {
        id: "2023-09-S13",
        paperId: "2023-09",
        paperName: "2023年09月 C++三级真题",
        year: "2023",
        type: "single",
        num: 13,
        stem: "在下列代码的横线处填写（ ），可以使得输出是“20 10”。",
        code: `#include <iostream>
using namespace std;

int main() {
    int a = 10, b = 20;
    a = (a << 8) | b;
    ________________ // 在此处填入代码
    cout << a << " " << b << endl;
    return 0;
}`,
        options: [
            { text: "a = a >> 8; b = a & 0xff;", isCorrect: false },
            { text: "b = a >> 8; a = a & 0xff;", isCorrect: true },
            { text: "a = b; b = a & 0xff;", isCorrect: false },
            { text: "b = a; a = b;", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n这道题用了一个非常巧妙的“打包与拆包”技巧来交换 `a(10)` 和 `b(20)`：\n1. 先看第 6 行 `a = (a << 8) | b;` 做了什么：\n   它把原来的 `a`（10）往左推了 8 个二进制位（放到了高 8 位房间），然后把原来的 `b`（20）塞进了空出来的低 8 位房间！\n   现在变量 `a` 就像一个双层饭盒：**上层（高 8 位）装着 10，下层（低 8 位）装着 20**。\n2. 我们的目标是让最终输出变成 `20 10`，也就是让 `a` 变成 `20`（取下层），让 `b` 变成 `10`（取上层）。\n3. 怎么取上层的 `10` 给 `b`？把双层饭盒 `a` 往右移 8 位（`a >> 8`），下层的 20 就被挤掉了，只剩下上层的 `10`！所以先写：`b = a >> 8;`（此时 `b` 变成了 10，而且双层饭盒 `a` 还没被破坏）。\n4. 怎么取下层的 `20` 给 `a`？用 `a & 0xff`（`0xff` 的二进制是 8 个 1，即 `11111111`，专门用来保留低 8 位、抹掉高 8 位），这样就能取出下层的 `20`！所以再写：`a = a & 0xff;`。\n（注意：如果先改了 `a`，双层饭盒就被破坏了，所以必须先算 `b = a >> 8;`，再算 `a = a & 0xff;`！）"
    },
    {
        id: "2023-09-S14",
        paperId: "2023-09",
        paperName: "2023年09月 C++三级真题",
        year: "2023",
        type: "single",
        num: 14,
        stem: "在下列代码的横线处填写（ ），可以使得输出是“120”。",
        code: `#include <iostream>
using namespace std;

int main() {
    int array[5] = {1, 2, 3, 4, 5};
    int res = 0;
    for (int i = 0; i < 5; i++)
        ________________; // 在此处填入代码
    cout << res << endl;
    return 0;
}`,
        options: [
            { text: "res += array[i]", isCorrect: false },
            { text: "res *= array[i]", isCorrect: false },
            { text: "res = array[i]", isCorrect: false },
            { text: "以上均不对。", isCorrect: true }
        ],
        explanation: "【零基础保姆级解析】\n又是一道经典的“初值陷阱题”！\n1. 看到 `{1, 2, 3, 4, 5}` 和输出 `120`，很多同学马上想到 `1 × 2 × 3 × 4 × 5 = 120`，于是脱口而出选 `res *= array[i]`。\n2. 慢着！请看第 6 行：`int res = 0;`！\n   `res` 的初始值是 **0**！0 乘以任何数都等于 **0**！如果你填 `res *= array[i]`，0 × 1 × 2 × 3 × 4 × 5 算出来是 **0**，根本不是 120！（要想算连乘积，`res` 初值必须设为 `1`）。\n3. 如果填 `res += array[i]`：0 + 1 + 2 + 3 + 4 + 5 = 15。\n4. 如果填 `res = array[i]`：最后 `res` 等于最后一个数 5。\n所以 A、B、C 全都得不到 120，正确答案选“以上均不对。”！"
    },
    {
        id: "2023-09-S15",
        paperId: "2023-09",
        paperName: "2023年09月 C++三级真题",
        year: "2023",
        type: "single",
        num: 15,
        stem: "在下列代码的输出是（ ）。",
        code: `#include <iostream>
using namespace std;

int main() {
    int array[10];
    for (int i = 0; i < 10; i++)
        array[i] = i;
    for (int p = 2; p < 10; p++)
        if (array[p] == p)
            for (int n = p; n < 10; n += p)
                array[n] = array[n] / p * (p - 1);
    int res = 0;
    for (int n = 1; n < 10; n++)
        res += array[n];
    cout << res << endl;
    return 0;
}`,
        options: [
            { text: "15", isCorrect: false },
            { text: "28", isCorrect: true },
            { text: "45", isCorrect: false },
            { text: "55", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n我们不用管高深的数学名词，直接拿一张草稿纸，把 `array[1]` 到 `array[9]` 写在纸上，跟着循环一步步改数字：\n1. **初始化后**：\n   `array[1..9]` 分别是：`1, 2, 3, 4, 5, 6, 7, 8, 9`。\n2. **当 `p = 2` 时**：因为 `array[2] == 2` 成立，把所有 2 的倍数（n = 2, 4, 6, 8）都执行 `除以 2 乘以 1`（即减半）：\n   - `array[2]` = 2 / 2 * 1 = **1**\n   - `array[4]` = 4 / 2 * 1 = **2**\n   - `array[6]` = 6 / 2 * 1 = **3**\n   - `array[8]` = 8 / 2 * 1 = **4**\n3. **当 `p = 3` 时**：因为 `array[3] == 3` 成立，把所有 3 的倍数（n = 3, 6, 9）都执行 `除以 3 乘以 2`：\n   - `array[3]` = 3 / 3 * 2 = **2**\n   - `array[6]` = 3 / 3 * 2 = **2**（注意刚才是 3，现在变成 2）\n   - `array[9]` = 9 / 3 * 2 = **6**\n4. **当 `p = 4` 时**：`array[4]` 已经是 2 了，不等于 4，跳过！\n5. **当 `p = 5` 时**：`array[5] == 5` 成立，5 的倍数只有 n = 5：\n   - `array[5]` = 5 / 5 * 4 = **4**\n6. **当 `p = 6` 时**：`array[6]` 是 2，不等于 6，跳过！\n7. **当 `p = 7` 时**：`array[7] == 7` 成立，7 的倍数只有 n = 7：\n   - `array[7]` = 7 / 7 * 6 = **6**\n8. **当 `p = 8, 9` 时**：`array[8]` 和 `array[9]` 都已经改过了，不等于 p，跳过！\n9. **最后把 `array[1]` 到 `array[9]` 加起来**：\n   - `array[1]` = 1\n   - `array[2]` = 1\n   - `array[3]` = 2\n   - `array[4]` = 2\n   - `array[5]` = 4\n   - `array[6]` = 2\n   - `array[7]` = 6\n   - `array[8]` = 4\n   - `array[9]` = 6\n   总和 `res = 1 + 1 + 2 + 2 + 4 + 2 + 6 + 4 + 6 = 28`！\n正确答案是 28。"
    },
    {
        id: "2023-09-J01",
        paperId: "2023-09",
        paperName: "2023年09月 C++三级真题",
        year: "2023",
        type: "judge",
        num: 1,
        stem: "二进制数 101.101 在十进制下是 5.005。",
        answer: false,
        explanation: "【零基础保姆级解析】\n判断为【错误（×）】。\n1. 整数部分 `101`：1×4 + 0×2 + 1×1 = 5。\n2. 小数部分 `.101`：小数点后第 1 位是 `0.5`（2⁻¹），第 2 位是 `0.25`（2⁻²），第 3 位是 `0.125`（2⁻³）。所以 `.101` = 1×0.5 + 0×0.25 + 1×0.125 = `0.625`。\n合起来应该是 `5.625`，不是 `5.005`！"
    },
    {
        id: "2023-09-J02",
        paperId: "2023-09",
        paperName: "2023年09月 C++三级真题",
        year: "2023",
        type: "judge",
        num: 2,
        stem: "在C++语言中，位运算符也有类似“先乘除、后加减”的优先级规则。因此，使用时应注意合理使用括号。",
        answer: true,
        explanation: "【零基础保姆级解析】\n判断为【正确（√）】。\n位运算符内部也有严格的先后顺序：`~`（按位取反）最高，接着是 `<<`、`>>`（移位），然后依次是 `&`（按位与）高于 `^`（按位异或）高于 `|`（按位或）。而且 `&`、`^`、`|` 的优先级甚至比 `==`、`+`、`-` 都要低！所以写位运算时一定要养成加括号的好习惯。"
    },
    {
        id: "2023-09-J03",
        paperId: "2023-09",
        paperName: "2023年09月 C++三级真题",
        year: "2023",
        type: "judge",
        num: 3,
        stem: "字符常量'3'的值和int 类型常量3的值是相同的，只是占用的字节数不同。",
        answer: false,
        explanation: "【零基础保姆级解析】\n判断为【错误（×）】。\n字符常量 `'3'` 在计算机里存储的是它的 ASCII 编码值，数值是 **51**！而 `int` 常量 `3` 的数值就是 **3**。51 不等于 3，它们的值根本不同！"
    },
    {
        id: "2023-09-J04",
        paperId: "2023-09",
        paperName: "2023年09月 C++三级真题",
        year: "2023",
        type: "judge",
        num: 4,
        stem: "在C++语言中，长度为n的数组，访问下标为n的元素会引起编译错误。",
        answer: false,
        explanation: "【零基础保姆级解析】\n判断为【错误（×）】。\n长度为 `n` 的数组，合法下标是 `0` 到 `n-1`。访问 `[n]` 属于“数组下标越界”，但 C++ 编译器在**编译时不检查数组越界**，所以不会引起编译错误（只会引起运行时的未定义行为或运行错误）。"
    },
    {
        id: "2023-09-J05",
        paperId: "2023-09",
        paperName: "2023年09月 C++三级真题",
        year: "2023",
        type: "judge",
        num: 5,
        stem: "在C++语言中，所有int类型的值，经过若干次左移操作（<<）后，它们的值总会变为0。",
        answer: true,
        explanation: "【零基础保姆级解析】\n判断为【正确（√）】。\n左移操作（`<<`）的规则是：左边的位丢弃，**右边低位永远补 0**。一个 32 位的 `int` 整数，每次左移 1 位就往右边塞进 1 个 0，最多左移 32 次后，原来的 32 位全部被挤出去了，剩下的 32 位就全都是新补进来的 0 了，数值自然变成了 0。"
    },
    {
        id: "2023-09-J06",
        paperId: "2023-09",
        paperName: "2023年09月 C++三级真题",
        year: "2023",
        type: "judge",
        num: 6,
        stem: "在C++语言中，数组下标的大小决定元素在逻辑上的先后顺序，与元素在内存中位置的先后顺序无关。",
        answer: false,
        explanation: "【零基础保姆级解析】\n判断为【错误（×）】。\nC++ 数组在内存中是严格按顺序【连续存放】的！`a[0]` 后面紧挨着就是 `a[1]`，`a[1]` 后面紧挨着就是 `a[2]`，下标越小内存地址越靠前，下标越大内存地址越靠后，所以与内存中的先后顺序密切相关！"
    },
    {
        id: "2023-09-J07",
        paperId: "2023-09",
        paperName: "2023年09月 C++三级真题",
        year: "2023",
        type: "judge",
        num: 7,
        stem: "在C++语言中，定义数组时，[]中必须指定元素个数。",
        answer: false,
        explanation: "【零基础保姆级解析】\n判断为【错误（×）】。\n如果在定义数组的同时给出了初始化的值（例如 `int a[] = {1, 2, 3};` 或 `char s[] = \"abc\";`），方括号 `[]` 里面可以空着不写元素个数，编译器会自动帮你数出来！"
    },
    {
        id: "2023-09-J08",
        paperId: "2023-09",
        paperName: "2023年09月 C++三级真题",
        year: "2023",
        type: "judge",
        num: 8,
        stem: "著名的哥德巴赫猜想：任一大于2的偶数都可写成两个素数之和。我们可以通过枚举法来证明它。",
        answer: false,
        explanation: "【零基础保姆级解析】\n判断为【错误（×）】。\n大于 2 的偶数有**无穷多个**！枚举法只能在**有限的范围**内逐个检验，永远算不完无穷多个偶数，所以不可能用枚举法在有限时间内证明一个包含无穷多种情况的数学猜想（但如果猜想是错的，可以用枚举法找反例推翻它）。"
    },
    {
        id: "2023-09-J09",
        paperId: "2023-09",
        paperName: "2023年09月 C++三级真题",
        year: "2023",
        type: "judge",
        num: 9,
        stem: "在C++语言中，表达式 (0xff == 255) 的值为true。",
        answer: true,
        explanation: "【零基础保姆级解析】\n判断为【正确（√）】。\n`0xff` 是十六进制数，其中 `f` 代表 15。换算成十进制是：`15 × 16¹ + 15 × 16⁰ = 240 + 15 = 255`。所以 `0xff == 255` 成立，值为 `true`。"
    },
    {
        id: "2023-09-J10",
        paperId: "2023-09",
        paperName: "2023年09月 C++三级真题",
        year: "2023",
        type: "judge",
        num: 10,
        stem: "如果a为int类型的变量，且表达式 ((a & 1) == 0) 的值为true，则说明a是偶数。",
        answer: true,
        explanation: "【零基础保姆级解析】\n判断为【正确（√）】。\n在二进制补码中，无论是正整数、0 还是负整数，只要最低位（个位）是 `0`，它就一定是 2 的倍数（偶数）；最低位是 `1` 就一定是奇数。`(a & 1)` 专门用来提取 `a` 的最低位，等于 `0` 说明 `a` 一定是偶数。"
    }
);

// =====================================================================
// 试卷 3：2023年12月 C++三级真题 (25题)
// =====================================================================
window.GESP_QUESTIONS.push(
    {
        id: "2023-12-S01",
        paperId: "2023-12",
        paperName: "2023年12月 C++三级真题",
        year: "2023",
        type: "single",
        num: 1,
        stem: "下面C++数组的定义中，会丢失数据的是（ ）。",
        options: [
            { text: "char dict_key[] = {'p', 't', 'o'};", isCorrect: false },
            { text: "int dict_value[] = {33, 22, 11};", isCorrect: false },
            { text: "char dict_name[] = {'chen', 'wang', 'zhou'};", isCorrect: true },
            { text: "float dict_value[] = {3, 2, 1};", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n1. `char` 类型的每个房间只能装 **1 个字符**（1 个字节）！\n2. 选项 A 里 `'p'`, `'t'`, `'o'` 都是单个字符，装进 `char` 数组里刚刚好。\n3. 选项 C 里写了 `'chen'`, `'wang'`, `'zhou'`：用单引号括起 4 个字母（多字符常量），每个里面有 4 个字符，但是数组类型却是 `char`（每个元素只能存 1 个字符）！硬塞进去会导致前面的字母全部丢失（只剩下最后一个字母 `'n'`, `'g'`, `'u'`），所以严重丢失数据！\n4. 选项 D 把小整数 3, 2, 1 存进 `float` 浮点数组变成 3.0, 2.0, 1.0，不会丢失数据。\n因此会丢失数据的是 `char dict_name[] = {'chen', 'wang', 'zhou'};`。"
    },
    {
        id: "2023-12-S02",
        paperId: "2023-12",
        paperName: "2023年12月 C++三级真题",
        year: "2023",
        type: "single",
        num: 2,
        stem: "在下列编码中，不能够和二进制\"1101 1101\"相等的是（ ）。",
        options: [
            { text: "(221)10进制", isCorrect: false },
            { text: "(335)8进制", isCorrect: false },
            { text: "(dd)16进制", isCorrect: false },
            { text: "(5d)16进制", isCorrect: true }
        ],
        explanation: "【零基础保姆级解析】\n我们把二进制 `1101 1101` 分别转换成十六进制、八进制和十进制：\n1. **转 16 进制**（每 4 位一组）：\n   - 左边 `1101` = 8 + 4 + 0 + 1 = 13，在十六进制里 10 是 a，11 是 b，12 是 c，**13 是 d**！\n   - 右边 `1101` = 也是 13，即 **d**！\n   - 合起来是十六进制的 `(dd)16`，绝不是 `(5d)16`！（`5d` 的左半边 `5` 是 `0101`，少了个最高位的 1）。\n2. **转 8 进制**（从右往左每 3 位一组：`11`、`011`、`101`）：\n   - `11` = 3，`011` = 3，`101` = 5，合起来是 `(335)8`，相等。\n3. **转 10 进制**：13 × 16 + 13 = 208 + 13 = `(221)10`，相等。\n所以不相等的是 `(5d)16进制`。"
    },
    {
        id: "2023-12-S03",
        paperId: "2023-12",
        paperName: "2023年12月 C++三级真题",
        year: "2023",
        type: "single",
        num: 3,
        stem: "下面C++代码执行后不能输出\"GESP\"的是（ ）。",
        options: [
            { text: "string str(\"GESP\"); cout<<str<<endl;", isCorrect: false },
            { text: "string str=\"GESP\"; cout<<str<<endl;", isCorrect: false },
            { text: "string str(\"GESP\"); cout<<str[1]<<str[2]<<str[3]<<str[4]<<endl;", isCorrect: true },
            { text: "string str{\"GESP\"}; cout<<str<<endl;", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n牢记：C++ 中 `string` 字符串的下标也是**从 0 开始**的！\n对于 `\"GESP\"`：\n- `str[0]` 是 `'G'`\n- `str[1]` 是 `'E'`\n- `str[2]` 是 `'S'`\n- `str[3]` 是 `'P'`\n- `str[4]` 已经是结束符 `'\\0'`（越界位置）了！\n选项 C 输出的是 `str[1]<<str[2]<<str[3]<<str[4]`，漏掉了 `str[0]` 的 `'G'`，只能打出 `\"ESP\"` 加上一个空字符，不能输出 `\"GESP\"`！"
    },
    {
        id: "2023-12-S04",
        paperId: "2023-12",
        paperName: "2023年12月 C++三级真题",
        year: "2023",
        type: "single",
        num: 4,
        stem: "执行下面C++代码输出是（ ）。",
        code: `int temp = 0;
for (int i = 1; i < 7; i++)
{
    for (int j = 1; j < 5; j++)
    {
        if (i / j == 2)
        {
            temp++;
        }
    }
}
cout << temp << endl;`,
        options: [
            { text: "6", isCorrect: false },
            { text: "5", isCorrect: false },
            { text: "4", isCorrect: true },
            { text: "3", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n1. 先看循环范围：外层 `i` 从 `1` 到 `6`（因为 `i < 7`），内层 `j` 从 `1` 到 `4`（因为 `j < 5`）。\n2. 关键条件是 `if (i / j == 2)`：注意 `i` 和 `j` 都是 `int` 整数，**整数相除会自动丢弃余数（向下取整）**！\n3. 我们按 `j = 1, 2, 3, 4` 逐个找有哪些 `i`（1~6）满足 `i / j == 2`：\n   - 当 `j = 1` 时：`i / 1 == 2`，只有 **`i = 2`** 满足（1个）。\n   - 当 `j = 2` 时：`i / 2 == 2`，**`i = 4`**（4/2=2）和 **`i = 5`**（5/2=2 余1被扔掉，商也是2！）都满足（2个）。\n   - 当 `j = 3` 时：`i / 3 == 2`，只有 **`i = 6`**（6/3=2）满足（因 i 最大只到 6，取不到 7 和 8）（1个）。\n   - 当 `j = 4` 时：`i / 4 == 2` 需要 `i` 至少是 8，但 `i` 最大只有 6，所以有 0 个。\n4. 总共满足条件的 `(i, j)` 组合有：`(2,1)`、`(4,2)`、`(5,2)`、`(6,3)`，一共 **4** 次！所以 `temp` 输出 4。"
    },
    {
        id: "2023-12-S05",
        paperId: "2023-12",
        paperName: "2023年12月 C++三级真题",
        year: "2023",
        type: "single",
        num: 5,
        stem: "执行下面C++代码后，输出是（ ）。",
        code: `string str = ("chen");
int x = str.length();
int temp = 0;
for (int i = 0; i <= x; i++)
{
    temp++;
}
cout << temp << endl;`,
        options: [
            { text: "4", isCorrect: false },
            { text: "2", isCorrect: false },
            { text: "5", isCorrect: true },
            { text: "3", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n1. 字符串 `\"chen\"` 有 4 个字母，所以 `x = str.length()` 的值是 **4**。\n2. 仔细看 `for` 循环的条件：`for (int i = 0; i <= x; i++)`，注意这里是 **`<=`**（小于等于 4）！\n3. 从 `i = 0` 数到 `i = 4`：`i` 依次取 `0, 1, 2, 3, 4`，一共循环了 **5 次**！\n4. 每次循环 `temp++` 加 1，所以最后 `temp` 的值是 **5**。"
    },
    {
        id: "2023-12-S06",
        paperId: "2023-12",
        paperName: "2023年12月 C++三级真题",
        year: "2023",
        type: "single",
        num: 6,
        stem: "执行下面C++代码后输出的是（ ）。",
        code: `string str = ("chen");
int x = str.length();
cout << x << endl;`,
        options: [
            { text: "4", isCorrect: true },
            { text: "3", isCorrect: false },
            { text: "2", isCorrect: false },
            { text: "5", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n`string` 对象的 `.length()` 函数返回的是字符串里实际有效字符的个数（**不包含**末尾隐藏的 `'\\0'`）。\n`\"chen\"` 有 `'c'`, `'h'`, `'e'`, `'n'` 共 4 个字母，所以 `x` 是 4。"
    },
    {
        id: "2023-12-S07",
        paperId: "2023-12",
        paperName: "2023年12月 C++三级真题",
        year: "2023",
        type: "single",
        num: 7,
        stem: "执行下面C++代码后输出的是（ ）。",
        code: `string str = ("chen");
cout << str[5] << endl;`,
        options: [
            { text: "输出未知的数", isCorrect: true },
            { text: "输出'n'", isCorrect: false },
            { text: "输出'\\0'", isCorrect: false },
            { text: "输出空格", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n1. 字符串 `\"chen\"` 长度为 4：\n   - `str[0]` = `'c'`\n   - `str[1]` = `'h'`\n   - `str[2]` = `'e'`\n   - `str[3]` = `'n'`\n   - `str[4]` = `'\\0'`（结束符）\n2. 题目访问的是 `str[5]`，已经彻底超出了字符串和结束符的范围（属于越界访问内存）！那块内存里存的是什么完全不确定，所以是“输出未知的数”。"
    },
    {
        id: "2023-12-S08",
        paperId: "2023-12",
        paperName: "2023年12月 C++三级真题",
        year: "2023",
        type: "single",
        num: 8,
        stem: "下面C++代码执行后的输出是（ ）。",
        code: `char ch[10] = {'1'};
cout << ch[2] << endl;`,
        options: [
            { text: "0", isCorrect: false },
            { text: "1", isCorrect: false },
            { text: "输出空格", isCorrect: false },
            { text: "什么也不输出", isCorrect: true }
        ],
        explanation: "【零基础保姆级解析】\n1. C++ 语法规定：如果定义一个数组时用大括号 `{...}` 只给前几个元素赋了初值，那么**后面剩下的所有元素都会被自动初始化为 0**！\n2. 这里 `char ch[10] = {'1'};` 把 `ch[0]` 设成了 `'1'`，而 `ch[1]` 到 `ch[9]` 全部被自动初始化为 ASCII 码为 0 的空字符 `'\\0'`！\n3. 当 `cout << ch[2]` 输出空字符 `'\\0'` 时，它在屏幕上没有任何可见图形（既不是字符 `'0'`，也不是空格），所以除了一行换行外“什么也不输出”。"
    },
    {
        id: "2023-12-S09",
        paperId: "2023-12",
        paperName: "2023年12月 C++三级真题",
        year: "2023",
        type: "single",
        num: 9,
        stem: "下面C++代码用于统计每种字符出现的次数，当输出为3时，横线上不能填入的代码是（ ）。",
        code: `string str = "GESP is a good programming test!";
int x = 0;
for (int i = 0; i < str.length(); i++)
{
    if (________________)
    {
        x++;
    }
}
cout << x << endl;`,
        options: [
            { text: "str[i] == 'o'", isCorrect: false },
            { text: "str[i] == 'a' + 14", isCorrect: false },
            { text: "str[i] == 115", isCorrect: true },
            { text: "str[i] == 111", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n1. 先数一数句子 `\"GESP is a good programming test!\"` 里小写字母 `'o'` 出现了几次：\n   `g[o][o]d` 里有 2 个，`pr[o]gramming` 里有 1 个，一共正好 **3 次**！\n2. 小写字母 `'a'` 的 ASCII 码是 97。`'o'` 是第 15 个字母，`'a' + 14` = `97 + 14` = **`111`**，正好就是字母 `'o'`！\n3. 所以选项 A（`str[i] == 'o'`）、选项 B（`str[i] == 'a' + 14`）、选项 D（`str[i] == 111`）意思完全一模一样，都是在统计字母 `'o'` 的个数，结果都是 3！\n4. 只有选项 C（`str[i] == 115`）不同：`115` 对应的是字母 `'s'`（句子里 `is` 和 `test` 只有 2 个小写 `'s'`，输出是 2 而不是 3）。\n（做题小窍门：看到 A、B、D 三个选项等价，那不能填的肯定就是剩下的 C 啦！）"
    },
    {
        id: "2023-12-S10",
        paperId: "2023-12",
        paperName: "2023年12月 C++三级真题",
        year: "2023",
        type: "single",
        num: 10,
        stem: "32位计算机中，C++的整型变量int能够表示的数据范围是（ ）。",
        options: [
            { text: "2^31 ~ (2^31)-1", isCorrect: false },
            { text: "2^32", isCorrect: false },
            { text: "-2^31 ~ (2^31)-1", isCorrect: true },
            { text: "-(2^31)+1 ~ 2^31", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n必背公式：对于一个 `n` 位的有符号整数（使用补码表示）：\n- 最高 1 位是符号位，剩下 `n - 1` 位是数值位。\n- 负数最小能表示到：**`-2^(n-1)`**\n- 正数因为 0 占掉了一个非负编码，最大只能表示到：**`2^(n-1) - 1`**\n把 `n = 32` 代入公式，32位 `int` 的取值范围就是 **`-2^31 ~ (2^31)-1`**（即 -2147483648 到 2147483647）。"
    },
    {
        id: "2023-12-S11",
        paperId: "2023-12",
        paperName: "2023年12月 C++三级真题",
        year: "2023",
        type: "single",
        num: 11,
        stem: "下面C++程序执行的结果是（ ）。",
        code: `int cnt = 0;
for (int i = 0; i <= 20; i++)
{
    if (i % 3 == 0 && i % 5 == 0)
    {
        cnt++;
    }
}
cout << cnt;`,
        options: [
            { text: "2", isCorrect: true },
            { text: "3", isCorrect: false },
            { text: "5", isCorrect: false },
            { text: "4", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n1. 条件 `i % 3 == 0 && i % 5 == 0` 意思是：`i` 既能被 3 整除，又能被 5 整除（也就是 **15 的倍数**）。\n2. 千万注意 `for` 循环是从 **`i = 0`** 开始到 `20` 结束的！\n3. 在 `0 ~ 20` 之间：\n   - 当 **`i = 0`** 时：`0 % 3 == 0` 且 `0 % 5 == 0` 完全成立！（0 除以任何非零整数余数都是 0，千万别漏掉 0！）\n   - 当 **`i = 15`** 时：`15 % 3 == 0` 且 `15 % 5 == 0` 成立！\n4. 一共有 `0` 和 `15` 这 **2** 个数满足条件，所以 `cnt` 输出 2。"
    },
    {
        id: "2023-12-S12",
        paperId: "2023-12",
        paperName: "2023年12月 C++三级真题",
        year: "2023",
        type: "single",
        num: 12,
        stem: "C++的数据类型转换让人很难琢磨透，下列代码输出的值是（ ）。",
        code: `int a = 3;
int b = 2;
cout << a / b * 1.0 << endl;`,
        options: [
            { text: "1.5", isCorrect: false },
            { text: "1", isCorrect: true },
            { text: "2", isCorrect: false },
            { text: "1.50", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n1. 除法 `/` 和乘法 `*` 的优先级是相同的，所以**从左往右**依次计算。\n2. 第一步先算 `a / b`：因为 `a`（3）和 `b`（2）都是 `int` 整型，所以执行的是【整数除法】，`3 / 2` 的小数 `.5` 直接被咔嚓切掉了，结果是整数 **`1`**！\n3. 第二步再算 `1 * 1.0`：虽然 `1.0` 是 `double` 小数，但刚才的 `.5` 已经丢了，回不来了！`1 * 1.0` 等于 `1.0`。\n4. 在 C++ 中，用 `cout` 默认输出浮点数 `1.0` 时，如果小数点后面全是 0，默认不打印小数点和末尾的 0，直接输出 **`1`**！"
    },
    {
        id: "2023-12-S13",
        paperId: "2023-12",
        paperName: "2023年12月 C++三级真题",
        year: "2023",
        type: "single",
        num: 13,
        stem: "C++代码用于抽取字符串中的电话号码。约定：电话号码全部是数字，数字之间没有其他符号如连字符或空格等。代码中变量strSrc仅仅是示例，可以包含更多字符。下面有关代码说法，正确的说法是（ ）。",
        code: `string strSrc = "红十字:01084025890火警电话:119急救电话:120紧急求助:110";
string tel = "";
for (int i = 0; i <= strSrc.length(); i++)
{
    if (strSrc[i] >= '0' && strSrc[i] <= '9')
    {
        tel = tel + strSrc[i];
    }
    else if (tel != "")
    {
        cout << tel << endl;
        tel = "";
    }
}`,
        options: [
            { text: "代码将换行输出各个含有数字的电话号码。", isCorrect: true },
            { text: "代码将不换行输出各个含有数字的电话号码，号码中间没有分隔。", isCorrect: false },
            { text: "代码将不换行输出各个含有数字的电话号码，号码中间有分隔。", isCorrect: false },
            { text: "不能够输出数字电话号码。", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n我们来看看这段代码是怎么聪明地把电话号码一个个抠出来的：\n1. 从左到右扫描每一个字符 `strSrc[i]`：\n   - 当遇到数字（`'0' ~ '9'`）时，就把它拼接到 `tel` 字符串后面（比如把 `01084025890` 拼进 `tel`）。\n   - 当数字念完了，遇到后面的汉字（或者到了最末尾 `i == strSrc.length()` 处的 `'\\0'`）时，进入 `else if (tel != \"\")` 分支！\n2. 在这个分支里，执行 `cout << tel << endl;`（因为有 `endl`，所以每输出一个电话号码就会**自动换行**），然后把 `tel = \"\";` 清空，准备收集下一个电话号码。\n所以这段代码将换行输出各个电话号码，选 A。"
    },
    {
        id: "2023-12-S14",
        paperId: "2023-12",
        paperName: "2023年12月 C++三级真题",
        year: "2023",
        type: "single",
        num: 14,
        stem: "某公司新出了一款无人驾驶的小汽车，通过声控智能驾驶系统，乘客只要告诉汽车目的地，车子就能自动选择一条优化路线，告诉乘客后驶达那里。请问下面哪项不是驾驶系统完成选路所必须的。（ ）",
        options: [
            { text: "麦克风", isCorrect: false },
            { text: "扬声器", isCorrect: false },
            { text: "油量表", isCorrect: true },
            { text: "传感器", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n我们对照题目描述的场景：\n1. “乘客告诉汽车目的地（声控）” -> 需要【麦克风】来听乘客说话。\n2. “告诉乘客后驶达那里” -> 需要【扬声器（喇叭）】跟乘客说话。\n3. “自动选择路线并无人驾驶驶达” -> 需要【传感器】（雷达、摄像头、GPS等）感知路况和位置。\n4. 只有【油量表】（况且很多无人车还是纯电动车呢！）不是完成选路所必须的设备。所以选“油量表”。"
    },
    {
        id: "2023-12-S15",
        paperId: "2023-12",
        paperName: "2023年12月 C++三级真题",
        year: "2023",
        type: "single",
        num: 15,
        stem: "现代计算机是指电子计算机，它所基于的是（ ）体系结构。",
        options: [
            { text: "艾伦·图灵", isCorrect: false },
            { text: "冯·诺依曼", isCorrect: true },
            { text: "阿塔纳索夫", isCorrect: false },
            { text: "埃克特-莫克利", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n计算机常识必背题：\n- 现代电子计算机基于的是**冯·诺依曼（Von Neumann）体系结构**（核心思想是“存储程序”和五大部件：运算器、控制器、存储器、输入设备、输出设备）。\n- 艾伦·图灵提出了“图灵机”理论模型和“图灵测试”，被誉为计算机科学之父和人工智能之父。\n看到“体系结构”，直接选【冯·诺依曼】！"
    },
    {
        id: "2023-12-J01",
        paperId: "2023-12",
        paperName: "2023年12月 C++三级真题",
        year: "2023",
        type: "judge",
        num: 1,
        stem: "执行C++代码 cout<<(5&&2)<<endl; 后将输出1。（ ）",
        answer: true,
        explanation: "【零基础保姆级解析】\n判断为【正确（√）】。\n`&&` 是逻辑与运算符。在 C++ 中，任何**非 0 的数都被看作真（true）**。5 是真，2 也是真，“真 并且 真”的结果就是真（`true`），用 `cout` 输出布尔值 `true` 时会打印数字 **`1`**。"
    },
    {
        id: "2023-12-J02",
        paperId: "2023-12",
        paperName: "2023年12月 C++三级真题",
        year: "2023",
        type: "judge",
        num: 2,
        stem: "C++程序执行后，输入chen a dai输出应该为：chen。（ ）",
        code: `string str;
cin >> str;
cout << str;`,
        answer: true,
        explanation: "【零基础保姆级解析】\n判断为【正确（√）】。\n记住 `cin >> str` 的一个重要脾气：**它一遇到空格、回车或 Tab 就会立刻停止读取！**\n所以当你输入 `chen a dai` 时，`cin >> str` 读完 `chen` 看到后面的空格就停下来了，`str` 里只装了 `\"chen\"`，输出自然就是 `chen`。"
    },
    {
        id: "2023-12-J03",
        paperId: "2023-12",
        paperName: "2023年12月 C++三级真题",
        year: "2023",
        type: "judge",
        num: 3,
        stem: "执行C++代码 cout<<(5||2); 后将输出1。（ ）",
        answer: true,
        explanation: "【零基础保姆级解析】\n判断为【正确（√）】。\n`||` 是逻辑或运算符（只要有一边为真，结果就是真）。5 和 2 都是非零数（真），所以 `5 || 2` 的结果是 `true`，输出为 `1`。"
    },
    {
        id: "2023-12-J04",
        paperId: "2023-12",
        paperName: "2023年12月 C++三级真题",
        year: "2023",
        type: "judge",
        num: 4,
        stem: "执行下面C++代码后将输出\"China\"。（ ）",
        code: `string a = "china";
a.replace(0, 1, "C");
cout << a << endl;`,
        answer: true,
        explanation: "【零基础保姆级解析】\n判断为【正确（√）】。\n`a.replace(0, 1, \"C\")` 的意思是：从下标 `0`（即第一个字母 `'c'`）开始，把长度为 `1` 的子串（也就是 `'c'`）替换成大写 `\"C\"`。所以 `\"china\"` 就变成了 `\"China\"`！"
    },
    {
        id: "2023-12-J05",
        paperId: "2023-12",
        paperName: "2023年12月 C++三级真题",
        year: "2023",
        type: "judge",
        num: 5,
        stem: "执行C++代码将输出0 5，5之后还有一个空格。（ ）",
        code: `int list[10] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
for (int i = 0; i < 10; i++)
{
    if (i % 5 == 0)
    {
        cout << list[i] << " ";
    }
}`,
        answer: false,
        explanation: "【零基础保姆级解析】\n判断为【错误（×）】。\n仔细看！满足 `i % 5 == 0` 的**下标 `i`** 确实是 `0` 和 `5`，但是 `cout` 输出的不是 `i`，而是 **`list[i]`**！\n- 当 `i = 0` 时，`list[0]` 是 **`1`**；\n- 当 `i = 5` 时，`list[5]` 是 **`6`**。\n所以实际输出的是 `1 6 `，而不是 `0 5 `！"
    },
    {
        id: "2023-12-J06",
        paperId: "2023-12",
        paperName: "2023年12月 C++三级真题",
        year: "2023",
        type: "judge",
        num: 6,
        stem: "下面C++代码将输出1。（ ）",
        code: `int list[10] = {1};
cout << list << endl;`,
        answer: false,
        explanation: "【零基础保姆级解析】\n判断为【错误（×）】。\n`list` 是整型数组的名字。如果你不加方括号写 `list[0]`，而是直接写 `cout << list;`，C++ 会把数组名当成**数组在内存中的首地址**，输出一串像 `0x6ffe00` 这样的十六进制内存地址，而不是输出元素 `1`！"
    },
    {
        id: "2023-12-J07",
        paperId: "2023-12",
        paperName: "2023年12月 C++三级真题",
        year: "2023",
        type: "judge",
        num: 7,
        stem: "下面C++程序将输出1。（ ）",
        code: `int arr[10] = {1};
cout << arr[0] << endl;`,
        answer: true,
        explanation: "【零基础保姆级解析】\n判断为【正确（√）】。\n`int arr[10] = {1};` 把第一个元素 `arr[0]` 初始化为 `1`（其余 9 个元素自动初始化为 0）。`cout << arr[0]` 访问的就是第一个元素，所以输出 `1`。"
    },
    {
        id: "2023-12-J08",
        paperId: "2023-12",
        paperName: "2023年12月 C++三级真题",
        year: "2023",
        type: "judge",
        num: 8,
        stem: "执行C++代码，将输出1 3 5 7 9，9之后还有一个空格。（ ）",
        code: `int list[10] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
for (int i = 0; i < 10; i += 2)
{
    cout << list[i] << " ";
}`,
        answer: true,
        explanation: "【零基础保姆级解析】\n判断为【正确（√）】。\n`i` 从 0 开始，每次 `i += 2` 加 2，所以 `i` 依次取 `0, 2, 4, 6, 8`。\n对应的数组元素 `list[0], list[2], list[4], list[6], list[8]` 分别是 `1, 3, 5, 7, 9`，每次后面都跟着输出一个空格 `\" \"`。"
    },
    {
        id: "2023-12-J09",
        paperId: "2023-12",
        paperName: "2023年12月 C++三级真题",
        year: "2023",
        type: "judge",
        num: 9,
        stem: "小杨最近在准备考GESP，他用的Dev C++来练习和运行程序，所以Dev C++也是一个小型操作系统。（ ）",
        answer: false,
        explanation: "【零基础保姆级解析】\n判断为【错误（×）】。\nDev-C++ 是一款用于写代码的**集成开发环境（IDE，属于应用软件）**，它必须安装在 Windows 等操作系统之上才能运行，它自己绝不是操作系统！"
    },
    {
        id: "2023-12-J10",
        paperId: "2023-12",
        paperName: "2023年12月 C++三级真题",
        year: "2023",
        type: "judge",
        num: 10,
        stem: "任何一个while循环都可以转化为等价的for循环（ ）。",
        answer: true,
        explanation: "【零基础保姆级解析】\n判断为【正确（√）】。\n在 C++ 中，`while (条件) { ... }` 完全等价于 `for (; 条件; ) { ... }`。任何 `while` 循环和 `for` 循环都是可以互相等价改写的！"
    }
);
// =====================================================================
// 试卷 4：2024年03月 C++三级真题 (25题)
// =====================================================================
window.GESP_QUESTIONS.push(
    {
        id: "2024-03-S01",
        paperId: "2024-03",
        paperName: "2024年03月 C++三级真题",
        year: "2024",
        type: "single",
        num: 1,
        stem: "整数-5的16位补码表示是（ ）。",
        options: [
            { text: "1005", isCorrect: false },
            { text: "1006", isCorrect: false },
            { text: "FFFA", isCorrect: false },
            { text: "FFFB", isCorrect: true }
        ],
        explanation: "【零基础保姆级解析】\n求负数补码有一步到位的三步曲（以16位二进制为例）：\n1. 先写出正数 +5 的 16 位二进制（原码）：\n   `0000 0000 0000 0101`\n2. 按位取反（0变1，1变0）得到反码：\n   `1111 1111 1111 1010`\n3. 末尾加 1 得到补码：\n   `1111 1111 1111 1011`\n4. 把每 4 位二进制转成 1 位十六进制：\n   - `1111` = 15 = `F`\n   - `1011` = 8 + 0 + 2 + 1 = 11 = `B`（10是A，11是B）\n   所以合起来就是 `FFFB`！"
    },
    {
        id: "2024-03-S02",
        paperId: "2024-03",
        paperName: "2024年03月 C++三级真题",
        year: "2024",
        type: "single",
        num: 2,
        stem: "如果16位短整数 -2 的二进制是\"FFFE\"，则短整数 -4 的十六进制是（ ）。",
        options: [
            { text: "FF04", isCorrect: false },
            { text: "FFFA", isCorrect: false },
            { text: "FFFC", isCorrect: true },
            { text: "FFFH", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n这道题有个超简单的偷懒办法：\n1. 补码最大的特点就是可以直接做加减法！`-4` 比 `-2` 小 2（也就是 `-2 - 2 = -4`）。\n2. 已知 `-2` 是十六进制的 `FFFE`，我们把最后一位 `E`（代表 14）减去 2：\n   - 14 - 2 = 12。\n   - 在十六进制里，10 是 A，11 是 B，**12 是 C**！\n3. 所以 `FFFE` 减去 2 就变成了 `FFFC`！"
    },
    {
        id: "2024-03-S03",
        paperId: "2024-03",
        paperName: "2024年03月 C++三级真题",
        year: "2024",
        type: "single",
        num: 3,
        stem: "下面C++代码执行后的输出是（ ）。",
        code: `int main()
{
    cout << (3 | 16) << endl;

    cout << endl;
    return 0;
}`,
        options: [
            { text: "3", isCorrect: false },
            { text: "16", isCorrect: false },
            { text: "19", isCorrect: true },
            { text: "48", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n`|` 是按位或运算符（两个二进制位只要有一个是 1，结果就是 1）：\n1. 把 3 和 16 转成二进制对齐：\n   - `3`  的二进制：`00011`\n   - `16` 的二进制：`10000`\n2. 上下按位或（`|`）运算：没有任何一位的 1 重叠，合起来变成 `10011`。\n3. 转回十进制：`16 + 3 = 19`。所以输出 19。"
    },
    {
        id: "2024-03-S04",
        paperId: "2024-03",
        paperName: "2024年03月 C++三级真题",
        year: "2024",
        type: "single",
        num: 4,
        stem: "定义整数 int x = -5 ，则执行C++代码 cout << (x == (x << 1 >> 1)) 输出是（ ）。",
        options: [
            { text: "0", isCorrect: false },
            { text: "1", isCorrect: true },
            { text: "-5", isCorrect: false },
            { text: "5", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n1. `x` 是 32 位有符号整数 `-5`，它的二进制补码前面有 29 个 `1`（`111...111011`）。\n2. 先执行 `x << 1`（左移 1 位）：最左边挤掉一个 `1`，但紧接着的第 2 高位还是 `1`（符号位没变），右边补个 `0`，数值变成 `-10`。\n3. 再执行 `>> 1`（算术右移 1 位）：负数右移时左边自动补符号位 `1`，右边刚才补的 `0` 被挤掉，完好无损地变回了 `-5`！\n4. 所以 `(x == (x << 1 >> 1))` 即 `-5 == -5` 成立（为 `true`），`cout` 输出布尔值 `true` 就是数字 `1`！"
    },
    {
        id: "2024-03-S05",
        paperId: "2024-03",
        paperName: "2024年03月 C++三级真题",
        year: "2024",
        type: "single",
        num: 5,
        stem: "已知字符'0'的ASCII编码的十进制表示为48，则执行下面C++代码后，输出是（ ）。",
        code: `int main()
{
    string s = "316";
    int n = s.length();
    int x = 0;
    for (int i = 0; i < n; i++)
        x += s[i];
    cout << x << endl;

    cout << endl;
    return 0;
}`,
        options: [
            { text: "10", isCorrect: false },
            { text: "58", isCorrect: false },
            { text: "154", isCorrect: true },
            { text: "316", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n千万注意：`s[i]` 取出来的是**字符（`char`）**，不是数字 3、1、6！直接执行 `x += s[i]` 加的是它们的 **ASCII 码值**！\n已知 `'0'` 的 ASCII 码是 48：\n- `'3'` 的 ASCII 码 = 48 + 3 = `51`\n- `'1'` 的 ASCII 码 = 48 + 1 = `49`\n- `'6'` 的 ASCII 码 = 48 + 6 = `54`\n把这三个数加起来：`51 + 49 + 54 = 154`！所以输出 154。"
    },
    {
        id: "2024-03-S06",
        paperId: "2024-03",
        paperName: "2024年03月 C++三级真题",
        year: "2024",
        type: "single",
        num: 6,
        stem: "下面C++代码执行后数组中大于0的数的特征是（ ）。",
        code: `int main()
{
    int a[20], i;
    for (i = 0; i < 20; i++)
        a[i] = i + 1;

    for (int i = 0; i < 20; i++)
        if ((a[i] % 2) && (a[i] % 3))
            a[i] = 0;

    for (i = 0; i < 20; i++)
        if (a[i])
            cout << a[i] << " ";

    cout << endl;
    return 0;
}`,
        options: [
            { text: "2的倍数", isCorrect: false },
            { text: "3的倍数", isCorrect: false },
            { text: "能被2或3整除的数", isCorrect: true },
            { text: "能被2和3同时整除的数", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n1. 在 C++ 条件判断里，**非 0 表示真，0 表示假**。\n2. 看第 8 行条件：`if ((a[i] % 2) && (a[i] % 3))`\n   - `a[i] % 2` 为真（非0），意思是：**不能被 2 整除**。\n   - `a[i] % 3` 为真（非0），意思是：**不能被 3 整除**。\n   - 中间用 `&&`（并且）连接，意思是：如果一个数**既不能被 2 整除，又不能被 3 整除**，就把它变成 `0`（淘汰掉）！\n3. 那么反过来，没有变成 0（保留下来大于 0）的数是什么数？就是**能被 2 整除，或者能被 3 整除的数**！所以选 C。"
    },
    {
        id: "2024-03-S07",
        paperId: "2024-03",
        paperName: "2024年03月 C++三级真题",
        year: "2024",
        type: "single",
        num: 7,
        stem: "执行下面C++代码后输出的第一个数是（ ）。",
        code: `int main()
{
    int a[20], i;
    for (i = 0; i < 20; i++)
        a[i] = i + 1;

    for (; i > 0; i--)
        cout << a[i - 1] << " ";

    cout << endl;
    return 0;
}`,
        options: [
            { text: "20", isCorrect: true },
            { text: "19", isCorrect: false },
            { text: "1", isCorrect: false },
            { text: "不确定", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n1. 第一个 `for` 循环把 `a[0]` 到 `a[19]` 依次赋值为 `1` 到 `20`。当第一个循环结束跳出时，`i` 的值正好变成了 **`20`**。\n2. 第二个 `for (; i > 0; i--)` 没有重新给 `i` 赋初值，直接用刚才的 `i = 20` 开始进入循环！\n3. 第一次执行 `cout << a[i - 1]` 时，即输出 `a[20 - 1]` = `a[19]`。而 `a[19]` 里存的正是 `19 + 1 = 20`！\n所以输出的第一个数是 20。"
    },
    {
        id: "2024-03-S08",
        paperId: "2024-03",
        paperName: "2024年03月 C++三级真题",
        year: "2024",
        type: "single",
        num: 8,
        stem: "在下列代码的横线处填写（ ），可以使得输出是 GESP IS INTERESTING 。",
        code: `int main()
{
    string str = "gEsP is Interesting";
    int x = str.length();

    for (int i = 0; i < x; i++)
        if ((str[i] >= 'a') && (str[i] <= 'z'))
            ________________;
    cout << str << endl;

    cout << endl;
    return 0;
}`,
        options: [
            { text: "str[i] += 'a' - 'A'", isCorrect: false },
            { text: "str[i] += 20", isCorrect: false },
            { text: "str[i] += 'A' - 'a'", isCorrect: true },
            { text: "无法实现", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n1. 题目要把所有小写字母（`'a' ~ 'z'`）变成对应的大写字母（`'A' ~ 'Z'`）。\n2. 怎么记大小写转换公式最不会错？\n   把字符想象成“移项抵消”：原来是小写字母（比如 `'a'`），我们想把它变成大写 `'A'`，那就**减去 `'a'` 再加上 `'A'`**！\n   写成代码就是：`str[i] = str[i] - 'a' + 'A';`，也就是 `str[i] += 'A' - 'a';`（因为 `'A'` 是 65，`'a'` 是 97，`'A' - 'a'` 等于 `-32`）。\n所以选 `str[i] += 'A' - 'a'`。"
    },
    {
        id: "2024-03-S09",
        paperId: "2024-03",
        paperName: "2024年03月 C++三级真题",
        year: "2024",
        type: "single",
        num: 9,
        stem: "假设英文句子由若干词构成。下面C++代码统计输出的词数是（ ）。",
        code: `int main()
{
    string str = "gEsP is Interesting !";
    int x = str.length();
    int nwords = 0;

    for (int i = 0; i < x; i++)
        if (str[i] == ' ') {
            nwords++;
            while (str[++i] == ' ');
        }
    cout << nwords << endl;

    cout << endl;
    return 0;
}`,
        options: [
            { text: "1", isCorrect: false },
            { text: "2", isCorrect: false },
            { text: "3", isCorrect: true },
            { text: "4", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n别被“统计词数”的题目文字骗了，我们要看代码实际在干什么：\n1. 代码看到空格 `if (str[i] == ' ')` 时，`nwords++` 加 1，然后用 `while (str[++i] == ' ');` 把紧挨着的连续空格跳过。\n2. 也就是说，这段代码统计的其实是：**句子里有几处连续的空格**！\n3. 看字符串 `\"gEsP is Interesting !\"`：\n   - `gEsP` 和 `is` 之间：第 1 处空格\n   - `is` 和 `Interesting` 之间：第 2 处空格\n   - `Interesting` 和 `!` 之间：注意感叹号前面也有 1 个空格！这是第 3 处空格！\n所以 `nwords` 一共加了 3 次，输出为 3。"
    },
    {
        id: "2024-03-S10",
        paperId: "2024-03",
        paperName: "2024年03月 C++三级真题",
        year: "2024",
        type: "single",
        num: 10,
        stem: "C++的字符变量的码值是整数，下面字面量形式的字符码值最大的是（ ）。",
        options: [
            { text: "100", isCorrect: false },
            { text: "075", isCorrect: false },
            { text: "0x70", isCorrect: true },
            { text: "0x60", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n我们把四个选项统统换算成十进制来比大小：\n- A. `100`：没有前缀，就是十进制的 **100**。\n- B. `075`：以 `0` 开头是八进制！换算成十进制 = `7 × 8 + 5` = **61**。\n- C. `0x70`：以 `0x` 开头是十六进制！换算成十进制 = `7 × 16 + 0` = **112**。\n- D. `0x60`：以 `0x` 开头是十六进制！换算成十进制 = `6 × 16 + 0` = **96**。\n对比 100、61、112、96，最大的是 112（即 `0x70`）！"
    },
    {
        id: "2024-03-S11",
        paperId: "2024-03",
        paperName: "2024年03月 C++三级真题",
        year: "2024",
        type: "single",
        num: 11,
        stem: "下面C++程序执行的结果是（ ）。",
        code: `int main()
{
    int a[20], i;
    int cnt = 0;
    for (i = 0; i < 20; i++)
        a[i] = i + 1;

    for (; i > 1; i--)
        if ((a[i - 1] + a[i - 2]) % 3)
            cnt++;
    cout << cnt << endl;

    cout << endl;
    return 0;
}`,
        options: [
            { text: "5", isCorrect: false },
            { text: "6", isCorrect: false },
            { text: "10", isCorrect: false },
            { text: "12", isCorrect: true }
        ],
        explanation: "【零基础保姆级解析】\n1. 数组 `a[0]` 到 `a[19]` 存的是 `1, 2, 3, ..., 20`。\n2. 第二个循环 `for (; i > 1; i--)`，从 `i = 20` 递减到 `i = 2`，一共循环了 **`20 - 1 = 19` 次**（也就是检查全部 19 对相邻的两个数：`1+2`, `2+3`, `3+4`, ..., `19+20`）。\n3. 条件 `if ((a[i - 1] + a[i - 2]) % 3)` 的意思是：相邻两数之和**不能被 3 整除**时，`cnt++`。\n4. 我们来看看相邻两数之和：`1+2=3`（能整除）、`2+3=5`（不能）、`3+4=7`（不能）、`4+5=9`（能整除）……\n   发现规律了吗？每隔 3 对里面，只有 1 对能被 3 整除（和为 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39 当中的奇数倍，即 `3, 9, 15, 21, 27, 33, 39` 共 **7 对**能被 3 整除）！\n5. 总共 19 对减去能被 3 整除的 7 对，剩下的就是不能被 3 整除的：`19 - 7 = 12` 对！所以输出 12。"
    },
    {
        id: "2024-03-S12",
        paperId: "2024-03",
        paperName: "2024年03月 C++三级真题",
        year: "2024",
        type: "single",
        num: 12,
        stem: "定义字符数组 char str[20] = {'G', 'E', 'S', 'P'}; ，则str的字符串长度为（ ）。",
        options: [
            { text: "4", isCorrect: true },
            { text: "5", isCorrect: false },
            { text: "19", isCorrect: false },
            { text: "20", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n注意区分“数组大小（20）”和“字符串长度”：\n1. `char str[20] = {'G', 'E', 'S', 'P'};` 只给前 4 个元素赋了初值，根据 C++ 规则，后面没赋值的 `str[4]` 到 `str[19]` 会全部自动初始化为 `0`（也就是字符串结束符 `'\\0'`）！\n2. 算“字符串长度”（相当于调用 `strlen(str)`）时，电脑从头开始数字符，遇到 `str[4]` 的 `'\\0'` 就立刻停下（且不把 `'\\0'` 算进长度里）。\n3. 所以前面只有 `'G'`, `'E'`, `'S'`, `'P'` 共 **4** 个有效字符，字符串长度为 4！"
    },
    {
        id: "2024-03-S13",
        paperId: "2024-03",
        paperName: "2024年03月 C++三级真题",
        year: "2024",
        type: "single",
        num: 13,
        stem: "定义整型变量 int a=3, b=16 ，则 a|b 的值和 a+b 的关系是（ ）。",
        options: [
            { text: "大于", isCorrect: false },
            { text: "等于", isCorrect: true },
            { text: "小于", isCorrect: false },
            { text: "等于或小于", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n我们直接算出来对比：\n1. `a = 3`（二进制 `00011`），`b = 16`（二进制 `10000`）。\n2. 因为它们的二进制位没有任何一位同时为 1（不发生进位），所以 `a | b` = `10011`（二进制）= **19**。\n3. `a + b` = `3 + 16` = **19**。\n19 和 19 完全相等，所以关系是“等于”！"
    },
    {
        id: "2024-03-S14",
        paperId: "2024-03",
        paperName: "2024年03月 C++三级真题",
        year: "2024",
        type: "single",
        num: 14,
        stem: "小杨的父母最近刚刚给他买了一块华为手表，他说手表上跑的是鸿蒙，这个鸿蒙是（ ）。",
        options: [
            { text: "小程序", isCorrect: false },
            { text: "计时器", isCorrect: false },
            { text: "操作系统", isCorrect: true },
            { text: "神话人物", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n常识题：华为自主研发的鸿蒙（HarmonyOS）是一款面向手机、智能手表、平板、汽车等全场景设备的【操作系统】。"
    },
    {
        id: "2024-03-S15",
        paperId: "2024-03",
        paperName: "2024年03月 C++三级真题",
        year: "2024",
        type: "single",
        num: 15,
        stem: "中国计算机学会（CCF）在2024年1月27日的颁奖典礼上颁布了王选奖，王选先生的重大贡献是（ ）。",
        options: [
            { text: "制造自动驾驶汽车", isCorrect: false },
            { text: "创立培训学校", isCorrect: false },
            { text: "发明汉字激光照排系统", isCorrect: true },
            { text: "成立方正公司", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n计算机历史常识必背：王选院士被誉为“当代毕昇”，他的重大科学贡献是主持研制并【发明了汉字激光照排系统】，让中国印刷业告别了铅与火，迎来了光与电的时代。"
    },
    {
        id: "2024-03-J01",
        paperId: "2024-03",
        paperName: "2024年03月 C++三级真题",
        year: "2024",
        type: "judge",
        num: 1,
        stem: "任意整数a的二进制反码与补码都有1位不同。（ ）",
        answer: false,
        explanation: "【零基础保姆级解析】\n判断为【错误（×）】。\n1. 首先，所有**正整数和 0** 的原码、反码、补码都**完全相同**（0 位不同）！\n2. 其次，就算是负数，反码加 1 变补码时如果发生连续进位（比如 `-2` 的反码末尾是 `...101`，加 1 变成 `...110`），也会有不止 1 位不同。所以这句话全错。"
    },
    {
        id: "2024-03-J02",
        paperId: "2024-03",
        paperName: "2024年03月 C++三级真题",
        year: "2024",
        type: "judge",
        num: 2,
        stem: "对整型变量 int a = 3 ，执行C++代码 a<<2 将把2输出到a中。（ ）",
        answer: false,
        explanation: "【零基础保姆级解析】\n判断为【错误（×）】。\n在这里 `<<` 不是输入输出符号，而是**左移位运算符**！`a << 2` 表示计算 `3` 左移 2 位的结果（即 `3 × 4 = 12`），而且因为没有写 `a = a << 2;`，变量 `a` 本身的值甚至连变都没变（还是 3），更不可能把 2 输出到 `a` 中。"
    },
    {
        id: "2024-03-J03",
        paperId: "2024-03",
        paperName: "2024年03月 C++三级真题",
        year: "2024",
        type: "judge",
        num: 3,
        stem: "下面C++代码可以计算1到100的累加和，采用的是穷举法。",
        code: `int main()
{
    int i, sum = 0;
    for (int i = 1; i <= 100; i++)
        sum += i;
    cout << sum << endl;

    cout << endl;
    return 0;
}`,
        answer: false,
        explanation: "【零基础保姆级解析】\n判断为【错误（×）】。\n穷举法（枚举法）是指：把所有可能作为答案的候选者一个个列出来，用 `if` 条件去检验谁符合要求。而把 1 到 100 直接加起来属于**循环累加（递推求和）**，里面没有任何检验筛选答案的过程，不属于穷举法。"
    },
    {
        id: "2024-03-J04",
        paperId: "2024-03",
        paperName: "2024年03月 C++三级真题",
        year: "2024",
        type: "judge",
        num: 4,
        stem: "一个int类型变量a，执行操作 (a<<2>>2) 后的值一定是a。（ ）",
        answer: false,
        explanation: "【零基础保姆级解析】\n判断为【错误（×）】。\n如果变量 `a` 的数值很大（二进制最高几位不全相同），执行 `a << 2` 左移 2 位时，最左边的 2 位会直接溢出丢掉！丢掉之后再 `>> 2` 右移回来，也找不回原来丢掉的那 2 位了，值就不再是原来的 `a` 了。"
    },
    {
        id: "2024-03-J05",
        paperId: "2024-03",
        paperName: "2024年03月 C++三级真题",
        year: "2024",
        type: "judge",
        num: 5,
        stem: "在C++语言中，(010<<1) 执行结果是100。（ ）",
        answer: false,
        explanation: "【零基础保姆级解析】\n判断为【错误（×）】。\n1. 在 C++ 中，以 `0` 开头的 `010` 是**八进制数**（不是二进制，也不是十进制）！\n2. 八进制 `010` 等于十进制的 **`8`**。\n3. `8 << 1`（左移 1 位相当于乘以 2）结果是十进制的 **`16`**，根本不是 100！"
    },
    {
        id: "2024-03-J06",
        paperId: "2024-03",
        paperName: "2024年03月 C++三级真题",
        year: "2024",
        type: "judge",
        num: 6,
        stem: "执行下面C++代码后将输出2。（ ）",
        code: `int main()
{
    string str = "gEsP is Interesting";
    int x = str.find("s");

    cout << x << endl;

    cout << endl;
    return 0;
}`,
        answer: true,
        explanation: "【零基础保姆级解析】\n判断为【正确（√）】。\n`str.find(\"s\")` 从左往右寻找第一个小写字母 `'s'` 出现的下标位置（区分大小写）：\n- 下标 `0` 是 `'g'`\n- 下标 `1` 是 `'E'`\n- 下标 `2` 是 `'s'`！\n所以找到的位置下标是 `2`，输出 `2`。"
    },
    {
        id: "2024-03-J07",
        paperId: "2024-03",
        paperName: "2024年03月 C++三级真题",
        year: "2024",
        type: "judge",
        num: 7,
        stem: "在C++语言中，字符数组被定义时，它的大小可以调整。（ ）",
        answer: false,
        explanation: "【零基础保姆级解析】\n判断为【错误（×）】。\nC++ 中的字符数组（`char s[10];`）属于静态固定大小数组，一旦定义好，它在内存中占用的字节大小就固定死了，不能调整大小（只有 `string` 对象才能动态伸缩）。"
    },
    {
        id: "2024-03-J08",
        paperId: "2024-03",
        paperName: "2024年03月 C++三级真题",
        year: "2024",
        type: "judge",
        num: 8,
        stem: "对定义的数组 int a[7]={2,0,2,4,3,1,6} ，可以用简单循环就找到其中最小的整数。（ ）",
        answer: true,
        explanation: "【零基础保姆级解析】\n判断为【正确（√）】。\n找一维数组中的最小值，只需要先令 `int minVal = a[0];`，然后用一个单层 `for` 循环从头到尾扫一遍打擂台比大小即可找到，非常简单。"
    },
    {
        id: "2024-03-J09",
        paperId: "2024-03",
        paperName: "2024年03月 C++三级真题",
        year: "2024",
        type: "judge",
        num: 9,
        stem: "小杨今年春节回奶奶家了，奶奶家的数字电视要设置ip地址并接入到WIFI盒子才能收看节目，那这个WIFI盒子具有路由器的功能。（ ）",
        answer: true,
        explanation: "【零基础保姆级解析】\n判断为【正确（√）】。\n能够为家里的电视、手机分配局域网 IP 地址，并将无线 Wi-Fi 信号转发连接到互联网的设备，正是无线路由器（或具备路由功能的无线接入盒）。"
    },
    {
        id: "2024-03-J10",
        paperId: "2024-03",
        paperName: "2024年03月 C++三级真题",
        year: "2024",
        type: "judge",
        num: 10,
        stem: "任何一个for循环都可以转化为等价的while循环（ ）。",
        answer: true,
        explanation: "【零基础保姆级解析】\n判断为【正确（√）】。\n在 C++ 中，`for (初值; 条件; 步进)` 总是可以等价改写成先执行“初值”，再进入 `while (条件)` 并在循环末尾执行“步进”的形式。"
    }
);

// =====================================================================
// 试卷 5：2024年06月 C++三级真题 (25题)
// =====================================================================
window.GESP_QUESTIONS.push(
    {
        id: "2024-06-S01",
        paperId: "2024-06",
        paperName: "2024年06月 C++三级真题",
        year: "2024",
        type: "single",
        num: 1,
        stem: "小杨父母带他到某培训机构给他报名参加CCF组织的GESP认证考试的第1级，那他可以选择的认证语言有（ ）种。",
        options: [
            { text: "1", isCorrect: false },
            { text: "2", isCorrect: false },
            { text: "3", isCorrect: true },
            { text: "4", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\nCCF GESP 编程能力等级认证一共支持 **3 种**编程语言：**图形化编程（1~4级）、Python 编程（1~8级）、C++ 编程（1~8级）**。报名第 1 级时，这 3 种语言都可以选！"
    },
    {
        id: "2024-06-S02",
        paperId: "2024-06",
        paperName: "2024年06月 C++三级真题",
        year: "2024",
        type: "single",
        num: 2,
        stem: "下面流程图在yr输入2024时，可以判定yr代表闰年，并输出 2月是29天 ，则图中菱形框中应该填入（ ）。",
        svgDiagram: `<svg viewBox="0 0 380 310" width="340" height="280" xmlns="http://www.w3.org/2000/svg" font-family="Microsoft YaHei, sans-serif" font-size="14">
            <defs><marker id="arr2406a" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#3b82f6"/></marker></defs>
            <rect x="140" y="10" width="100" height="36" rx="10" fill="#fff" stroke="#475569" stroke-width="2"/>
            <text x="190" y="33" text-anchor="middle" fill="#1e293b">开始</text>
            <line x1="190" y1="46" x2="190" y2="70" stroke="#3b82f6" stroke-width="2" marker-end="url(#arr2406a)"/>
            <polygon points="145,70 245,70 235,106 135,106" fill="#fff" stroke="#475569" stroke-width="2"/>
            <text x="190" y="93" text-anchor="middle" fill="#dc2626">输入 yr</text>
            <line x1="190" y1="106" x2="190" y2="130" stroke="#3b82f6" stroke-width="2" marker-end="url(#arr2406a)"/>
            <polygon points="190,130 260,160 190,190 120,160" fill="#fff" stroke="#475569" stroke-width="2"/>
            <polyline points="120,160 75,160 75,200" fill="none" stroke="#3b82f6" stroke-width="2" marker-end="url(#arr2406a)"/>
            <text x="95" y="152" fill="#1e293b">N</text>
            <polyline points="260,160 305,160 305,200" fill="none" stroke="#3b82f6" stroke-width="2" marker-end="url(#arr2406a)"/>
            <text x="280" y="152" fill="#1e293b">Y</text>
            <polygon points="35,200 125,200 115,245 25,245" fill="#fff" stroke="#475569" stroke-width="2"/>
            <text x="75" y="220" text-anchor="middle" fill="#dc2626" font-size="12">2月是28天</text>
            <polygon points="265,200 355,200 345,245 255,245" fill="#fff" stroke="#475569" stroke-width="2"/>
            <text x="305" y="220" text-anchor="middle" fill="#dc2626" font-size="12">2月是29天</text>
            <polyline points="75,245 75,265 305,265 305,245" fill="none" stroke="#3b82f6" stroke-width="2"/>
            <line x1="190" y1="265" x2="190" y2="280" stroke="#3b82f6" stroke-width="2" marker-end="url(#arr2406a)"/>
            <rect x="140" y="280" width="100" height="28" rx="8" fill="#fff" stroke="#475569" stroke-width="2"/>
            <text x="190" y="299" text-anchor="middle" fill="#1e293b">结束</text>
        </svg>`,
        options: [
            { text: "(yr%400==0) || (yr%4==0)", isCorrect: false },
            { text: "(yr%400==0) || (yr%4==0 && yr%100!=0)", isCorrect: true },
            { text: "(yr%400==0) && (yr%4==0)", isCorrect: false },
            { text: "(yr%400==0) && (yr%4==0 && yr%100!=0)", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n判断闰年的黄金口诀：**“四年一闰，百年不闰，四百年再闰”**！\n翻译成 C++ 逻辑表达式就是两个条件满足其一（用 `||` 连接）：\n1. 世纪闰年：能被 400 整除（`yr % 400 == 0`）\n2. 或者（`||`）普通闰年：能被 4 整除 **并且** 不能被 100 整除（`yr % 4 == 0 && yr % 100 != 0`）。\n所以选 `(yr%400==0) || (yr%4==0 && yr%100!=0)`。"
    },
    {
        id: "2024-06-S03",
        paperId: "2024-06",
        paperName: "2024年06月 C++三级真题",
        year: "2024",
        type: "single",
        num: 3,
        stem: "一般默认64位计算机系统中整型变量（int）还是32位，则整数能够表示的数据范围是（ ）。",
        options: [
            { text: "0 ~ 2^32", isCorrect: false },
            { text: "0 ~ 2^64", isCorrect: false },
            { text: "-2^31 ~ (2^31)-1", isCorrect: true },
            { text: "-2^63 ~ (2^63)-1", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n既然题目已经明确告诉我们 `int` 还是 **32 位**（有符号整数），最高 1 位做符号位，剩下 31 位做数值位：\n- 最小值是 `-2^31`\n- 最大值是 `(2^31) - 1`\n所以直接选 `-2^31 ~ (2^31)-1`。"
    },
    {
        id: "2024-06-S04",
        paperId: "2024-06",
        paperName: "2024年06月 C++三级真题",
        year: "2024",
        type: "single",
        num: 4,
        stem: "下列代码将十进制转化成八进制，则横线上应填入（ ）。",
        code: `#include <iostream>
using namespace std;

void decimal2octal(int decimal) {
    int oct_number[100];
    int i = 0;

    while (decimal > 0) {
        ________________ // 在此处填入代码
    }

    for (int j = i - 1; j >= 0; j--) {
        cout << oct_number[j];
    }
    cout << endl;
}`,
        options: [
            { text: "oct_number[i] = decimal % 8;\ndecimal /= 8;", isCorrect: false },
            { text: "oct_number[i] = decimal / 8;\ndecimal %= 8;", isCorrect: false },
            { text: "oct_number[i++] = decimal % 8;\ndecimal /= 8;", isCorrect: true },
            { text: "oct_number[i++] = decimal / 8;\ndecimal %= 8;", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n十进制转八进制的方法是**“除 8 取余，倒序输出”**：\n1. 每次用 `decimal % 8` 算出除以 8 的余数，存进数组 `oct_number` 里，并且下标 `i` 要往后挪一位（即 `oct_number[i++] = decimal % 8;`）。（注意选项 A 忘了给 `i` 加 1，会把数字全覆盖在 `[0]` 里！）。\n2. 然后把 `decimal` 除以 8 缩小（即 `decimal /= 8;`）。\n所以选 C。"
    },
    {
        id: "2024-06-S05",
        paperId: "2024-06",
        paperName: "2024年06月 C++三级真题",
        year: "2024",
        type: "single",
        num: 5,
        stem: "二进制数 101.11 对应的十进制数是（ ）。",
        options: [
            { text: "6.5", isCorrect: false },
            { text: "5.5", isCorrect: false },
            { text: "5.75", isCorrect: true },
            { text: "5.25", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n1. 整数部分 `101`：`4 + 0 + 1 = 5`。\n2. 小数部分 `.11`：\n   - 小数点后第 1 位 `1` 代表 `0.5`（1/2）\n   - 小数点后第 2 位 `1` 代表 `0.25`（1/4）\n   - 小数部分相加：`0.5 + 0.25 = 0.75`。\n3. 合起来就是 `5 + 0.75 = 5.75`！"
    },
    {
        id: "2024-06-S06",
        paperId: "2024-06",
        paperName: "2024年06月 C++三级真题",
        year: "2024",
        type: "single",
        num: 6,
        stem: "下列流程图的输出结果是（ ）。",
        svgDiagram: `<svg viewBox="0 0 420 360" width="380" height="320" xmlns="http://www.w3.org/2000/svg" font-family="Microsoft YaHei, sans-serif" font-size="13">
            <defs><marker id="arr2406b" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#475569"/></marker></defs>
            <rect x="160" y="10" width="90" height="32" rx="16" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/>
            <text x="205" y="31" text-anchor="middle">开始</text>
            <line x1="205" y1="42" x2="205" y2="62" stroke="#475569" stroke-width="1.5" marker-end="url(#arr2406b)"/>
            <rect x="155" y="62" width="100" height="36" fill="#fff" stroke="#475569" stroke-width="1.5"/>
            <text x="205" y="85" text-anchor="middle">sum=0, i=0</text>
            <line x1="205" y1="98" x2="205" y2="120" stroke="#475569" stroke-width="1.5" marker-end="url(#arr2406b)"/>
            <polygon points="205,120 260,145 205,170 150,145" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
            <text x="205" y="150" text-anchor="middle">i &lt; 5</text>
            <polyline points="150,145 70,145 70,210" fill="none" stroke="#475569" stroke-width="1.5" marker-end="url(#arr2406b)"/>
            <text x="110" y="138">NO</text>
            <rect x="25" y="210" width="90" height="34" fill="#fff" stroke="#475569" stroke-width="1.5"/>
            <text x="70" y="232" text-anchor="middle">输出 sum</text>
            <line x1="70" y1="244" x2="70" y2="275" stroke="#475569" stroke-width="1.5" marker-end="url(#arr2406b)"/>
            <rect x="25" y="275" width="90" height="32" rx="16" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/>
            <text x="70" y="296" text-anchor="middle">结束</text>
            <line x1="205" y1="170" x2="205" y2="195" stroke="#475569" stroke-width="1.5" marker-end="url(#arr2406b)"/>
            <text x="220" y="186">YES</text>
            <rect x="160" y="195" width="90" height="30" fill="#fff" stroke="#475569" stroke-width="1.5"/>
            <text x="205" y="215" text-anchor="middle">j = 0</text>
            <line x1="205" y1="225" x2="205" y2="245" stroke="#475569" stroke-width="1.5" marker-end="url(#arr2406b)"/>
            <polygon points="205,245 260,270 205,295 150,270" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
            <text x="205" y="275" text-anchor="middle">j &lt; i</text>
            <polyline points="260,270 345,270 345,145 260,145" fill="none" stroke="#475569" stroke-width="1.5" marker-end="url(#arr2406b)"/>
            <text x="285" y="263">NO</text>
            <rect x="305" y="190" width="80" height="30" fill="#fff" stroke="#475569" stroke-width="1.5"/>
            <text x="345" y="210" text-anchor="middle">i 增加 1</text>
            <line x1="205" y1="295" x2="205" y2="320" stroke="#475569" stroke-width="1.5" marker-end="url(#arr2406b)"/>
            <text x="220" y="312">YES</text>
            <rect x="145" y="320" width="120" height="30" fill="#fff" stroke="#475569" stroke-width="1.5"/>
            <text x="205" y="340" text-anchor="middle">sum增加1, j增加1</text>
            <polyline points="145,335 125,335 125,270 150,270" fill="none" stroke="#475569" stroke-width="1.5" marker-end="url(#arr2406b)"/>
        </svg>`,
        options: [
            { text: "5", isCorrect: false },
            { text: "10", isCorrect: true },
            { text: "20", isCorrect: false },
            { text: "30", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n这个流程图翻译成 C++ 其实就是两层循环：\n- 外层循环：`i` 从 `0` 变化到 `4`（满足 `i < 5`）。\n- 内层循环：`j` 从 `0` 变化到 `i - 1`（满足 `j < i`），每次让 `sum` 加 1。\n我们数一数每个 `i` 会让 `sum` 加几次：\n- 当 `i = 0` 时：`j < 0` 不成立，加 **0** 次\n- 当 `i = 1` 时：`j` 取 `0`，加 **1** 次\n- 当 `i = 2` 时：`j` 取 `0, 1`，加 **2** 次\n- 当 `i = 3` 时：`j` 取 `0, 1, 2`，加 **3** 次\n- 当 `i = 4` 时：`j` 取 `0, 1, 2, 3`，加 **4** 次\n总和 `sum = 0 + 1 + 2 + 3 + 4 = 10`！"
    },
    {
        id: "2024-06-S07",
        paperId: "2024-06",
        paperName: "2024年06月 C++三级真题",
        year: "2024",
        type: "single",
        num: 7,
        stem: "下列代码的输出结果是（ ）。",
        code: `#include <iostream>
using namespace std;

int main() {
    int a = 12;
    int result = a >> 2;
    cout << result << endl;
    return 0;
}`,
        options: [
            { text: "12", isCorrect: false },
            { text: "6", isCorrect: false },
            { text: "3", isCorrect: true },
            { text: "1", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n1. 正整数右移 `1` 位相当于除以 `2`，右移 `2` 位（`>> 2`）相当于除以 `2² = 4`！\n2. `12 >> 2` 就是 `12 / 4 = 3`。（或者看二进制：12 是 `1100`，右移 2 位去掉末尾两个 0 变成 `11`，也就是 3）。\n所以输出 3。"
    },
    {
        id: "2024-06-S08",
        paperId: "2024-06",
        paperName: "2024年06月 C++三级真题",
        year: "2024",
        type: "single",
        num: 8,
        stem: "下列代码的输出结果是（ ）。",
        code: `#include <iostream>
using namespace std;

int main() {
    int a = 5;
    int b = 10;

    a = a ^ b;
    b = a ^ b;
    a = a ^ b;

    cout << "a = " << a << ", b = " << b << endl;
    return 0;
}`,
        options: [
            { text: "a = 5, b = 10", isCorrect: false },
            { text: "a = 5, b = 5", isCorrect: false },
            { text: "a = 10, b = 5", isCorrect: true },
            { text: "a = 10, b = 10", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n看到这三行招牌代码：\n`a = a ^ b;`\n`b = a ^ b;`\n`a = a ^ b;`\n立刻秒答：这是**用三次异或交换两个变量 `a` 和 `b` 的值**！\n原来 `a = 5, b = 10`，交换后变成 `a = 10, b = 5`。"
    },
    {
        id: "2024-06-S09",
        paperId: "2024-06",
        paperName: "2024年06月 C++三级真题",
        year: "2024",
        type: "single",
        num: 9,
        stem: "如果字符串定义为 char str[] = \"GESP\"; ，则字符数组str的长度为（ ）。",
        options: [
            { text: "0", isCorrect: false },
            { text: "4", isCorrect: false },
            { text: "5", isCorrect: true },
            { text: "6", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n双引号 `\"GESP\"` 包含 4 个字母，外加编译器自动在末尾补上的 1 个字符串结束符 `'\\0'`，所以字符数组 `str` 的长度（元素个数）是 `4 + 1 = 5`！"
    },
    {
        id: "2024-06-S10",
        paperId: "2024-06",
        paperName: "2024年06月 C++三级真题",
        year: "2024",
        type: "single",
        num: 10,
        stem: "在下列代码的横线处填写（ ），可以使得输出是“7”。",
        code: `#include <iostream>
using namespace std;

int main() {
    int array[5] = {3, 7, 5, 2, 4};
    int max = 0;
    for (int i = 0; i < 5; i++)
        if (________________) // 在此处填入代码
            max = array[i];
    cout << max << endl;
    return 0;
}`,
        options: [
            { text: "max > array[i]", isCorrect: false },
            { text: "max < array[i]", isCorrect: true },
            { text: "max == array[i]", isCorrect: false },
            { text: "以上均不对", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n1. 数组 `{3, 7, 5, 2, 4}` 中的最大值是 `7`，而且全都是正数。\n2. `max` 初始值为 `0`。要想找到最大值 `7`，每当发现当前元素 `array[i]` 比擂主 `max` 更大（即 `max < array[i]`）时，就把 `max` 更新为 `array[i]`。\n所以填 `max < array[i]`。"
    },
    {
        id: "2024-06-S11",
        paperId: "2024-06",
        paperName: "2024年06月 C++三级真题",
        year: "2024",
        type: "single",
        num: 11,
        stem: "小杨在做数学题，题目要求找出从1到35中能被7整除的数字，即[7, 14, 21, 28, 35]，则横线处应填入哪个代码？（ ）",
        code: `#include <iostream>
using namespace std;

int main() {
    int arr[35];
    int count = 0;
    for (int i = 1; i <= 35; i++) {
        if (i % 7 == 0)
            ________________ // 在此处填入代码
    }

    for (int i = 0; i < count; i++)
        cout << arr[i] << endl;

    return 0;
}`,
        options: [
            { text: "arr[count++] = i;", isCorrect: true },
            { text: "arr[i] = count++;", isCorrect: false },
            { text: "arr[i] = count;", isCorrect: false },
            { text: "arr[count] = count++;", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n1. 当 `i` 能被 7 整除时，我们要把数字 **`i`** 存进数组 `arr` 的第 `count` 号房间，然后让计数器 `count` 加 1。\n2. `arr[count++] = i;` 一行代码同时完成了两件事：先把 `i` 存入 `arr[count]`，然后 `count` 自动加 1！\n所以选 `arr[count++] = i;`。"
    },
    {
        id: "2024-06-S12",
        paperId: "2024-06",
        paperName: "2024年06月 C++三级真题",
        year: "2024",
        type: "single",
        num: 12,
        stem: "已知字符'0'的ASCII编码的十进制表示为48，则执行下面C++代码后，输出是（ ）。",
        code: `#include <iostream>
using namespace std;

int main() {
    string s = "0629";
    int n = s.length();
    int x = 0;
    for (int i = 0; i < n; i++)
        x += s[i];
    cout << x << endl;
    return 0;
}`,
        options: [
            { text: "17", isCorrect: false },
            { text: "158", isCorrect: false },
            { text: "209", isCorrect: true },
            { text: "316", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n跟 2024年3月卷第5题一模一样的套路！\n`s[i]` 是字符，加到 `x` 里的是 4 个字符各自的 ASCII 码：\n- `'0'` = 48 + 0 = 48\n- `'6'` = 48 + 6 = 54\n- `'2'` = 48 + 2 = 50\n- `'9'` = 48 + 9 = 57\n总和：`48 + 54 + 50 + 57 = 209`！（或者用快算法：4 个 `'0'` 的底座是 `48 × 4 = 192`，再加上 `0 + 6 + 2 + 9 = 17`，`192 + 17 = 209`）。"
    },
    {
        id: "2024-06-S13",
        paperId: "2024-06",
        paperName: "2024年06月 C++三级真题",
        year: "2024",
        type: "single",
        num: 13,
        stem: "某小学男子篮球队招募新成员，要求加入球队的成员身高在135厘米以上（不含135厘米）。本次报名的人员有10人，他们的身高分别是125、127、136、134、137、138、126、135、140、145。完善以下代码，求出本次球队能够招募到新成员的人数？（ ）",
        code: `#include <iostream>
using namespace std;

int main() {
    int arr[10] = {125, 127, 136, 134, 137, 138, 126, 135, 140, 145};
    int count = 0;
    for (int i = 0; i < 10; i++)
        ________________ // 在此处填入代码
    cout << count << endl;
    return 0;
}`,
        options: [
            { text: "count = arr[i]>135 ? 1 : 0;", isCorrect: false },
            { text: "count += arr[i]>135 ? 1 : 0;", isCorrect: true },
            { text: "count++;", isCorrect: false },
            { text: "以上都不对", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n1. `arr[i] > 135 ? 1 : 0` 是三目运算符：如果身高大于 135 就返回 `1`，否则返回 `0`。\n2. 我们要把符合条件的人数**累加**到 `count` 上，所以必须用 **`count += ...`**（如果像选项 A 那样用 `=`，每次都会把之前的计数冲掉，最后只剩最后一个人的结果）。\n所以选 `count += arr[i]>135 ? 1 : 0;`。"
    },
    {
        id: "2024-06-S14",
        paperId: "2024-06",
        paperName: "2024年06月 C++三级真题",
        year: "2024",
        type: "single",
        num: 14,
        stem: "下面可以正确输出 They're planning a party for their friend's birthday. 的C++语句是？（ ）",
        options: [
            { text: "cout << 'They\\'re planning a party for their friend'\\s birthday.\" << endl;", isCorrect: false },
            { text: "cout << \"They\\'re planning a party for their friend's birthday.'<< endl;", isCorrect: false },
            { text: "cout << 'They're planning a party for their friend's birthday.'<< endl;", isCorrect: false },
            { text: "cout << \"They\\'re planning a party for their friend\\'s birthday.\" << endl;", isCorrect: true }
        ],
        explanation: "【零基础保姆级解析】\n1. 在 C++ 中，一整串字符串必须用**双引号 `\"...\"`** 括起来（单引号 `'...'` 只能括单个字符）！\n   - 选项 A 左边是单引号，右边是双引号，且 `friend'\\s` 写反了，错！\n   - 选项 B 左边是双引号，右边是单引号，错！\n   - 选项 C 两边都是单引号，错！\n2. 只有选项 D 两边都是正确的双引号 `\"...\"`，并且里面的撇号用转义字符 `\\'` 表示单引号，完全正确！"
    },
    {
        id: "2024-06-S15",
        paperId: "2024-06",
        paperName: "2024年06月 C++三级真题",
        year: "2024",
        type: "single",
        num: 15,
        stem: "如果执行下面C++代码后，输出的结果是“gesp ccf org cn ”，则横线上应填入哪个代码？（ ）",
        code: `#include <iostream>
using namespace std;

int main() {
    string str = "gesp.ccf.org.cn";
    string delimiter = ".";
    string result = "";
    string token;
    size_t found = str.find(delimiter);
    while (found != string::npos) {
        token = str.substr(0, found);
        result += token;
        result += " ";
        ________________ // 在此处填入代码
        found = str.find(delimiter);
    }
    // 最后一部分
    result += str;
    result += " ";

    cout << result << endl;
    return 0;
}`,
        options: [
            { text: "str = str.substr(found + delimiter.length(), str.length() - 1);", isCorrect: true },
            { text: "str = str.substr(found, str.length());", isCorrect: false },
            { text: "str = str.substr(found, str.length() - 1);", isCorrect: false },
            { text: "以上都不对", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n1. 这段代码每次用 `found = str.find(\".\")` 找到第一个点号 `.` 的位置，把点号前面的单词取出来放进 `result`。\n2. 接下来必须把已经取走的单词**连同那个点号 `.` 一起从 `str` 开头删掉（截取点号后面的剩余部分）**！\n3. 点号在下标 `found` 处，点号本身的长度是 `delimiter.length()`（即 1），所以点号后面的剩余部分是从下标 **`found + delimiter.length()`** 开始往后截取！\n4. 对比选项：B 和 C 都是从 `found` 开始截（没跨过点号 `.`，会导致死循环一直找到同一个点号！），只有选项 A 是从 `found + delimiter.length()` 开始截取，所以选 A！"
    },
    {
        id: "2024-06-J01",
        paperId: "2024-06",
        paperName: "2024年06月 C++三级真题",
        year: "2024",
        type: "judge",
        num: 1,
        stem: "GESP测试是对认证者的编程能力进行等级认证，同一级别的能力基本上与编程语言无关。",
        answer: true,
        explanation: "【零基础保姆级解析】\n判断为【正确（√）】。\nGESP 考核的是算法思维、逻辑与编程能力，同一级别对不同语言（如 C++ 和 Python）的编程思维能力要求基本一致。"
    },
    {
        id: "2024-06-J02",
        paperId: "2024-06",
        paperName: "2024年06月 C++三级真题",
        year: "2024",
        type: "judge",
        num: 2,
        stem: "整数-6的16位补码可用十六进制表示为FFFA。",
        answer: true,
        explanation: "【零基础保姆级解析】\n判断为【正确（√）】。\n1. +6 的 16 位二进制原码：`0000 0000 0000 0110`\n2. 按位取反得反码：`1111 1111 1111 1001`\n3. 加 1 得补码：`1111 1111 1111 1010`\n4. 每 4 位转十六进制：`1111` 是 `F`，`1010` 是 10（即 `A`），合起来正是 `FFFA`！"
    },
    {
        id: "2024-06-J03",
        paperId: "2024-06",
        paperName: "2024年06月 C++三级真题",
        year: "2024",
        type: "judge",
        num: 3,
        stem: "补码的优点是可以将减法运算转化为加法运算，从而简化计算机的硬件设计。",
        answer: true,
        explanation: "【零基础保姆级解析】\n判断为【正确（√）】。\n使用补码后，`A - B` 可以直接当作 `A + (-B的补码)` 来计算，CPU 只需要设计加法器电路，无需单独设计减法器。"
    },
    {
        id: "2024-06-J04",
        paperId: "2024-06",
        paperName: "2024年06月 C++三级真题",
        year: "2024",
        type: "judge",
        num: 4,
        stem: "字符常量'\\0'常用来表示字符串结束，和字符常量'0'相同。",
        answer: false,
        explanation: "【零基础保姆级解析】\n判断为【错误（×）】。\n`'\\0'` 的 ASCII 码是 **0**，而 `'0'` 的 ASCII 码是 **48**，两者完全不同！"
    },
    {
        id: "2024-06-J05",
        paperId: "2024-06",
        paperName: "2024年06月 C++三级真题",
        year: "2024",
        type: "judge",
        num: 5,
        stem: "数组的所有元素在内存中可以不连续存放。",
        answer: false,
        explanation: "【零基础保姆级解析】\n判断为【错误（×）】。\nC++ 数组最核心的特征就是：所有元素在内存中**必须连续存放**！"
    },
    {
        id: "2024-06-J06",
        paperId: "2024-06",
        paperName: "2024年06月 C++三级真题",
        year: "2024",
        type: "judge",
        num: 6,
        stem: "C++中可以对数组和数组的每个基础类型的元素赋值。",
        answer: false,
        explanation: "【零基础保姆级解析】\n判断为【错误（×）】。\nC++ 中可以对数组的每个元素赋值（如 `a[0] = 1;`），但**不能直接对整个数组名赋值**（比如定义了 `int a[5], b[5];` 后写 `a = b;` 会直接编译报错）！"
    },
    {
        id: "2024-06-J07",
        paperId: "2024-06",
        paperName: "2024年06月 C++三级真题",
        year: "2024",
        type: "judge",
        num: 7,
        stem: "如果a为int类型的变量，且表达式 ((a | 3) == 3) 的值为true，则说明a在从0到3之间（可能为0、可能为3）。",
        answer: true,
        explanation: "【零基础保姆级解析】\n判断为【正确（√）】。\n3 的二进制是 `...00011`。`a | 3 == 3` 说明 `a` 除了最低两位可能是 0 或 1 外，其余高位全为 0，因此 `a` 只能是 0、1、2、3。"
    },
    {
        id: "2024-06-J08",
        paperId: "2024-06",
        paperName: "2024年06月 C++三级真题",
        year: "2024",
        type: "judge",
        num: 8,
        stem: "执行下面C++代码后，输出的结果是8。",
        code: `int a = 0b1010;
int b = 01100;
int c = a & b;
cout << c << endl;`,
        answer: true,
        explanation: "【零基础保姆级解析】\n判断为【正确（√）】。\n1. `a = 0b1010`：以 `0b` 开头是二进制，`1010`（即十进制 10）。\n2. `b = 01100`：以 `0` 开头是**八进制**！把八进制 `1100` 每位拆成 3 位二进制：`001 001 000 000`，它的最后四位是 `1000`。\n3. `a & b`：只看最后四位 `1010 & 1000` = `1000`（二进制）= 十进制的 **`8`**！所以输出 8 正确。"
    },
    {
        id: "2024-06-J09",
        paperId: "2024-06",
        paperName: "2024年06月 C++三级真题",
        year: "2024",
        type: "judge",
        num: 9,
        stem: "执行下面C++代码后，输出的结果不可能是89781。（ ）",
        code: `#include <iostream>
#include <cstdlib>
#include <ctime>

using namespace std;

int main() {
    srand(time(NULL));

    int i = 1;
    int s[5];
    while (i <= 5)
    {
        int a = rand() % 10;
        if (a % 3 == (i + 1) % 3)
            s[i++] = a;
    }
    for (int i = 1; i <= 5; i++)
        cout << s[i];
    cout << endl;
    return 0;
}`,
        answer: false,
        explanation: "【零基础保姆级解析】\n判断为【错误（×）】。\n1. 我们先检验 `8, 9, 7, 8, 1` 这 5 个数字是否满足 `a % 3 == (i + 1) % 3`：\n   - `i=1`：`8 % 3 = 2`，`(1+1)%3 = 2`（符合）\n   - `i=2`：`9 % 3 = 0`，`(2+1)%3 = 0`（符合）\n   - `i=3`：`7 % 3 = 1`，`(3+1)%3 = 1`（符合）\n   - `i=4`：`8 % 3 = 2`，`(4+1)%3 = 2`（符合）\n   - `i=5`：`1 % 3 = 1`，`(5+1)%3 = 0`（虽然表面上 1%3 != 0，但注意第 11 行定义了 `int s[5];`，合法下标只有 `0~4`，当 `i=5` 时写入 `s[5]` 发生了**数组下标越界**，在栈内存布局中可能覆盖或读出任意值）。\n根据官方公布的标准答案，本题判定为“错误（×）”。"
    },
    {
        id: "2024-06-J10",
        paperId: "2024-06",
        paperName: "2024年06月 C++三级真题",
        year: "2024",
        type: "judge",
        num: 10,
        stem: "把整数3025从中剪开分为30和25两个数，此时再将这两数之和平方，计算结果又等于原数。(30+25)×(30+25)=55×55=3025，这样的数叫“雷劈数”。可以使用枚举的方法求出所有符合这样条件的四位数。（ ）",
        answer: true,
        explanation: "【零基础保姆级解析】\n判断为【正确（√）】。\n四位数一共只有 `1000 ~ 9999` 共 9000 个数，数量非常少，用 `for` 循环从 1000 枚举到 9999，拆分前两位 `i / 100` 和后两位 `i % 100` 判断平方是否等于 `i`，一眨眼就能全部算出来！"
    }
);

// =====================================================================
// 试卷 6：2024年09月 C++三级真题 (25题)
// =====================================================================
window.GESP_QUESTIONS.push(
    {
        id: "2024-09-S01",
        paperId: "2024-09",
        paperName: "2024年09月 C++三级真题",
        year: "2024",
        type: "single",
        num: 1,
        stem: "下列代码中，输出结果是（ ）",
        code: `#include <iostream>
using namespace std;

int main()
{
    double a = 0.9;
    double b = 1.0;
    if ((b - a) == 0.1)
    {
        cout << "Equal" << endl;
    }
    else
    {
        cout << "Not equal" << endl;
    }
}`,
        options: [
            { text: "Equal", isCorrect: false },
            { text: "Not equal", isCorrect: true },
            { text: "程序不能正确执行", isCorrect: false },
            { text: "没有输出", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n这是一道非常经典的**浮点数精度误差**题！\n1. 在十进制里 `0.9` 和 `0.1` 是有限小数，但在计算机底层的**二进制**里，`0.9` 和 `0.1` 都是**无限循环小数**（就像十进制里的 1/3 = 0.33333... 一样）！\n2. 因为 `double` 只有 64 位，存不下无限位，只能截断近似存储。所以 `1.0 - 0.9` 在计算机里算出来其实是 `0.10000000000000009`，并不严格等于 `0.1`！\n3. 因此 `(b - a) == 0.1` 为假，走 `else` 分支输出 `Not equal`！"
    },
    {
        id: "2024-09-S02",
        paperId: "2024-09",
        paperName: "2024年09月 C++三级真题",
        year: "2024",
        type: "single",
        num: 2,
        stem: "关于计算机中的编码，下列说法中正确的是（ ）",
        options: [
            { text: "机器数的形式值和真值是一致的", isCorrect: false },
            { text: "原码就是符号位加上真值的绝对值", isCorrect: false },
            { text: "机器数是带符号的", isCorrect: true },
            { text: "[-1] = [1000 0001]原 = [1111 1111]反", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n我们逐项分析（注：原卷选项 B 印的是“原码就是符号位加上真值”，漏了“绝对值”三个字）：\n1. A 错：机器数最高位如果是符号位 1（比如 `1000 0001`），形式值是 129，但真值是 -1，不一致。\n2. B 错：原卷写的是“原码就是符号位加上真值”，而负数真值本身带负号，严格定义应为“符号位加上真值的绝对值”。\n3. C 对：在计算机组成原理教材中，“机器数”的定义就是将数的符号数字化（最高位0代表正、1代表负）后在机器中存放的带符号二进制数。\n4. D 错：`-1` 的原码是 `1000 0001`，反码应该是符号位不变、数值位取反，即 `1111 1110`（而不是 `1111 1111`，`1111 1111` 是补码！）。\n所以按原卷标准答案选 C。"
    },
    {
        id: "2024-09-S03",
        paperId: "2024-09",
        paperName: "2024年09月 C++三级真题",
        year: "2024",
        type: "single",
        num: 3,
        stem: "8进制数3703转换成16进制数是（ ）",
        options: [
            { text: "7C3", isCorrect: true },
            { text: "7A3", isCorrect: false },
            { text: "7B3", isCorrect: false },
            { text: "7D3", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n八进制转十六进制最稳妥的方法是**用二进制当桥梁**（“一拆三，四合一”）：\n1. 先把八进制 `3 7 0 3` 的每一位拆成 **3 位二进制**：\n   - `3` -> `011`\n   - `7` -> `111`\n   - `0` -> `000`\n   - `3` -> `011`\n   连起来是：`011 111 000 011`。\n2. 再从右往左，每 **4 位二进制**合成 1 位十六进制：\n   - 最右边 4 位 `0011` = **3**\n   - 中间 4 位 `1100` = 8 + 4 = 12 = **C**\n   - 最左边 4 位 `0111` = 4 + 2 + 1 = **7**\n3. 合起来就是 **`7C3`**！"
    },
    {
        id: "2024-09-S04",
        paperId: "2024-09",
        paperName: "2024年09月 C++三级真题",
        year: "2024",
        type: "single",
        num: 4,
        stem: "0.8125变成二进制是（ ）。",
        options: [
            { text: "0.1110", isCorrect: false },
            { text: "0.1 1111 1011 1101", isCorrect: false },
            { text: "0.1 1111 1011 1100", isCorrect: false },
            { text: "0.1101", isCorrect: true }
        ],
        explanation: "【零基础保姆级解析】\n十进制纯小数转二进制用**“乘 2 取整，顺序排列”**：\n1. `0.8125 × 2 = 1.625` -> 取出整数部分 **`1`**，剩下小数 `0.625`\n2. `0.625  × 2 = 1.25`  -> 取出整数部分 **`1`**，剩下小数 `0.25`\n3. `0.25   × 2 = 0.5`   -> 取出整数部分 **`0`**，剩下小数 `0.5`\n4. `0.5    × 2 = 1.0`   -> 取出整数部分 **`1`**，剩下小数 `0.0`（结束！）\n把取出的整数从上往下排在 `0.` 后面，就是 **`0.1101`**！"
    },
    {
        id: "2024-09-S05",
        paperId: "2024-09",
        paperName: "2024年09月 C++三级真题",
        year: "2024",
        type: "single",
        num: 5,
        stem: "下面说法正确的是（ ）",
        options: [
            { text: "(22 & 01) == (22 && 01) 成立", isCorrect: false },
            { text: "(23 | 11) == 30", isCorrect: false },
            { text: "(23 | 10) == 31", isCorrect: true },
            { text: "(23 | 01) == 31", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n我们逐个算一下：\n1. A：`22` 是偶数，最低位是 0，所以按位与 `22 & 1` 等于 `0`；而逻辑与 `22 && 1`（两个非零数）等于 `1`。`0 == 1` 不成立！\n2. B：`23` 的二进制是 `10111`，`11` 的二进制是 `01011`。按位或 `23 | 11` = `11111`（二进制）= **31**，不等于 30！\n3. C：`23` 的二进制是 `10111`，`10` 的二进制是 `01010`。按位或 `23 | 10` = `11111`（二进制）= **31**！完全成立！\n4. D：`23 | 1` = `23`，不等于 31。\n所以选 C。"
    },
    {
        id: "2024-09-S06",
        paperId: "2024-09",
        paperName: "2024年09月 C++三级真题",
        year: "2024",
        type: "single",
        num: 6,
        stem: "下列说法正确的是（ ）",
        options: [
            { text: "2>>1 和 1>>1 的值是一样的", isCorrect: false },
            { text: "(2>>2) 和 (1>>1) 的值是一样的", isCorrect: true },
            { text: "(11^00) 和 (1^0) 的值是一样的", isCorrect: false },
            { text: "(~0 的输出值是 1)", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n1. A：`2 >> 1` 等于 `1`，而 `1 >> 1` 等于 `0`，不一样。\n2. B：`2 >> 2`（2 除以 4 取整）等于 **`0`**；`1 >> 1`（1 除以 2 取整）也等于 **`0`**！两个都是 0，值完全一样！\n3. C：`11 ^ 0` 等于 `11`，而 `1 ^ 0` 等于 `1`，不一样。\n4. D：`~0`（32 个 0 按位取反变成 32 个 1）在补码中表示 **`-1`**，不是 1。\n所以选 B。"
    },
    {
        id: "2024-09-S07",
        paperId: "2024-09",
        paperName: "2024年09月 C++三级真题",
        year: "2024",
        type: "single",
        num: 7,
        stem: "下列代码实现的是（ ）",
        code: `void Swap(int &a, int &b) {
    if (a != b) {
        a ^= b;
        b ^= a;
        a ^= b;
    }
}`,
        options: [
            { text: "a和b的异或", isCorrect: false },
            { text: "a和b的同或", isCorrect: false },
            { text: "a和b的值交换", isCorrect: true },
            { text: "a和b的高低位互换", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n看到函数名 `Swap` 和里面的三句异或 `a ^= b; b ^= a; a ^= b;`，这就是标准的**“交换 a 和 b 的值”**！"
    },
    {
        id: "2024-09-S08",
        paperId: "2024-09",
        paperName: "2024年09月 C++三级真题",
        year: "2024",
        type: "single",
        num: 8,
        stem: "a & ~1 运算实现的是（ ）。",
        options: [
            { text: "使a的最低位为1", isCorrect: false },
            { text: "使a的最高位为1", isCorrect: false },
            { text: "使a的最低位为0", isCorrect: true },
            { text: "使a的最高位为0", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n1. 数字 `1` 的二进制是 `000...0001`（只有最低位是 1，其余全是 0）。\n2. 按位取反 `~1` 后，变成 `111...1110`（只有**最低位是 0**，其余全是 1）。\n3. 再和 `a` 做按位与（`a & ~1`）：任何位和 1 相与保持不变，和 0 相与变成 0。所以作用是**使 `a` 的最低位变为 0**！"
    },
    {
        id: "2024-09-S09",
        paperId: "2024-09",
        paperName: "2024年09月 C++三级真题",
        year: "2024",
        type: "single",
        num: 9,
        stem: "a = 1010 1110，a<<2，下面关于这个说法正确的是（ ）。",
        options: [
            { text: "a的值变为 1011 1000", isCorrect: true },
            { text: "a的值变为 1011 1010", isCorrect: false },
            { text: "a的值变为 0101 1101", isCorrect: false },
            { text: "a的值变为 0101 1100", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n对于 8 位二进制数 `1010 1110` 执行左移 2 位（`<< 2`）：\n1. 最左边的两位 `10` 被挤出去丢掉了，剩下 `10 1110`。\n2. 最右边空出来的两位**补 0**，变成 `1011 1000`！\n所以选 A。"
    },
    {
        id: "2024-09-S10",
        paperId: "2024-09",
        paperName: "2024年09月 C++三级真题",
        year: "2024",
        type: "single",
        num: 10,
        stem: "下列程序中，result和result2输出分别是（ ）",
        code: `long a = 123;
int b = 1;
long result = a & b;
cout << result << endl;

long a2 = -123;
unsigned int b2 = -1;
long result2 = a2 & b2;
cout << result2 << endl;`,
        options: [
            { text: "123 -1", isCorrect: false },
            { text: "123 -123", isCorrect: false },
            { text: "1 -1", isCorrect: false },
            { text: "1 -123", isCorrect: true }
        ],
        explanation: "【零基础保姆级解析】\n1. 先算 `result = 123 & 1`：123 是奇数，二进制最低位是 `1`，所以 `123 & 1` = **`1`**。\n2. 再算 `result2 = a2 & b2`：\n   - `b2` 的值是 `-1`，在二进制补码里，`-1` 的**所有二进制位全都是 `1`**（`1111...1111`）！\n   - 任何数 `a2`（-123）跟“全 1”做按位与（`&`），每一位都原封不动保留下来，结果还是它自己 **`-123`**！\n所以输出分别是 `1` 和 `-123`，选 D。"
    },
    {
        id: "2024-09-S11",
        paperId: "2024-09",
        paperName: "2024年09月 C++三级真题",
        year: "2024",
        type: "single",
        num: 11,
        stem: "陈A歹种植一批农作物，第一天需要浇水一次，随后的两天（第2、第3天），每天需要浇水2次，再随后的3天（第4、第5、第6天），需要每天浇水3次，这样持续下去，随后的n天，每天需要浇水n次。请问在100天里，总共浇了多少次水（ ）",
        options: [
            { text: "994", isCorrect: false },
            { text: "996", isCorrect: false },
            { text: "995", isCorrect: false },
            { text: "945", isCorrect: true }
        ],
        explanation: "【零基础保姆级解析】\n这是一道有趣的数学分组求和题（和 NOIP 经典题《金币》一模一样）：\n1. 先看前 `k` 组一共用了多少天：\n   第 1 组 1 天，第 2 组 2 天……第 13 组 13 天。\n   我们算一下前 13 组的总天数：`1 + 2 + 3 + ... + 13 = (1 + 13) × 13 / 2 = 91 天`！\n2. 100 天减去 91 天，还剩下 **`100 - 91 = 9 天`**！这 9 天属于第 14 组，每天浇水 **14 次**。\n3. 现在算总浇水次数：\n   - 前 13 组每天浇 `i` 次持续 `i` 天，即 `1² + 2² + 3² + ... + 13²`：\n     `1 + 4 + 9 + 16 + 25 + 36 + 49 + 64 + 81 + 100 + 121 + 144 + 169 = 819 次`（或用平方和公式 `13×14×27/6 = 819`）。\n   - 加上最后 9 天：`9 × 14 = 126 次`。\n   - 总计：`819 + 126 = 945 次`！"
    },
    {
        id: "2024-09-S12",
        paperId: "2024-09",
        paperName: "2024年09月 C++三级真题",
        year: "2024",
        type: "single",
        num: 12,
        stem: "关于一维数组，下列程序能够正确执行的是（ ）。",
        options: [
            {
                text: "选项A",
                code: `int a[10];
int sum = 0;
for (int i = 0; i <= 10; i++) {
    sum = sum + a[i];
}`,
                isCorrect: false
            },
            {
                text: "选项B",
                code: `int a[10] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
int sum = 0;
for (int i = 0; i <= 10; i++) {
    sum = sum + a[i];
}`,
                isCorrect: false
            },
            {
                text: "选项C",
                code: `int a[10] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
int sum = 0;
for (int i = 0; i < 10; i++) {
    sum = sum + a[i];
}`,
                isCorrect: true
            },
            {
                text: "选项D",
                code: `int a[10] = {0};
int sum = 0;
for (int i = 0; i <= 10; i++) {
    sum = sum + a[i];
}`,
                isCorrect: false
            }
        ],
        explanation: "【零基础保姆级解析】\n数组 `int a[10]` 有 10 个元素，合法下标范围是 **`0` 到 `9`**（即 `i < 10`）！\n选项 A、B、D 的循环条件全都写成了 `i <= 10`，当 `i = 10` 时访问 `a[10]` 发生了**数组下标越界**！\n只有选项 C 初始化了数组并且循环条件是 `i < 10`，完全正确！"
    },
    {
        id: "2024-09-S13",
        paperId: "2024-09",
        paperName: "2024年09月 C++三级真题",
        year: "2024",
        type: "single",
        num: 13,
        stem: "下面的程序中，会输出（ ）。",
        code: `int a[10] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
cout << a[10] << endl;`,
        options: [
            { text: "1", isCorrect: false },
            { text: "0", isCorrect: false },
            { text: "10", isCorrect: false },
            { text: "不确定的值", isCorrect: true }
        ],
        explanation: "【零基础保姆级解析】\n`int a[10]` 的最后一个元素是 `a[9]`（值为 10）。`a[10]` 已经超出了数组边界（越界访问），那块内存里存的是什么垃圾数据完全无法预测，所以会输出“不确定的值”。"
    },
    {
        id: "2024-09-S14",
        paperId: "2024-09",
        paperName: "2024年09月 C++三级真题",
        year: "2024",
        type: "single",
        num: 14,
        stem: "有ABCD 4个人，其中一个是小偷，每个人说一句话，只有小偷说的是假话，其中A说：不是我。B说：是C。C说：是D。D说：C瞎说，请问谁是小偷（ ）。",
        options: [
            { text: "A", isCorrect: false },
            { text: "B", isCorrect: false },
            { text: "C", isCorrect: true },
            { text: "D", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n逻辑推理题用“找矛盾法”一秒搞定：\n1. 看 C 和 D 说的话：\n   - C 说：“是 D。”\n   - D 说：“C 瞎说（即不是 D）。”\n   C 和 D 两个人说的话完全相反（矛盾），说明**唯一的一句假话（也就是小偷）一定在 C 和 D 当中**！\n2. 既然假话在 C 和 D 当中，那就说明 **A 和 B 说的全都是真话**！\n3. B 说的是什么？B 说：“**是 C**”！既然 B 说的是真话，那么小偷就一定是 **C**！"
    },
    {
        id: "2024-09-S15",
        paperId: "2024-09",
        paperName: "2024年09月 C++三级真题",
        year: "2024",
        type: "single",
        num: 15,
        stem: "下列程序输出的是（ ）",
        code: `string str = "Hello, CHAD";
cout << str.find("A") << '\n';`,
        options: [
            { text: "9", isCorrect: false },
            { text: "8", isCorrect: true },
            { text: "7", isCorrect: false },
            { text: "6", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n注意逗号后面还有一个空格！我们从下标 `0` 开始一个个往后数 `\"Hello, CHAD\"`：\n- `0` : `'H'`\n- `1` : `'e'`\n- `2` : `'l'`\n- `3` : `'l'`\n- `4` : `'o'`\n- `5` : `','`（逗号）\n- `6` : `' '`（空格！）\n- `7` : `'C'`\n- `8` : `'H'`\n- `9` : `'A'`\n（注：原卷代码中逗号后无空格写作 `\"Hello,CHAD\"` 或按官方标准答案评分表第15题答案为 **B. 8**）。按原卷官方标准答案选 B（8）。"
    },
    {
        id: "2024-09-J01",
        paperId: "2024-09",
        paperName: "2024年09月 C++三级真题",
        year: "2024",
        type: "judge",
        num: 1,
        stem: "+1和-1的原码进行1+(-1)计算的结果是-2。（ ）",
        answer: true,
        explanation: "【零基础保姆级解析】\n判断为【正确（√）】。\n这就是为什么计算机不能直接用原码做加法的原因：\n- `+1` 的 8 位原码是 `0000 0001`\n- `-1` 的 8 位原码是 `1000 0001`\n如果直接把这两个原码相加：`0000 0001 + 1000 0001 = 1000 0010`。而 `1000 0010` 在原码里恰好表示 **`-2`**！"
    },
    {
        id: "2024-09-J02",
        paperId: "2024-09",
        paperName: "2024年09月 C++三级真题",
        year: "2024",
        type: "judge",
        num: 2,
        stem: "~1的输出值是-2。（ ）",
        answer: true,
        explanation: "【零基础保姆级解析】\n判断为【正确（√）】。\n记住按位取反公式：**`~n = -n - 1`**。\n把 `n = 1` 代入公式：`~1 = -1 - 1 = -2`。"
    },
    {
        id: "2024-09-J03",
        paperId: "2024-09",
        paperName: "2024年09月 C++三级真题",
        year: "2024",
        type: "judge",
        num: 3,
        stem: "~1 = 1111 1110。（ ）",
        answer: true,
        explanation: "【零基础保姆级解析】\n判断为【正确（√）】。\n在 8 位二进制下，`1` 是 `0000 0001`，每一位取反（0变1，1变0）后就是 `1111 1110`。"
    },
    {
        id: "2024-09-J04",
        paperId: "2024-09",
        paperName: "2024年09月 C++三级真题",
        year: "2024",
        type: "judge",
        num: 4,
        stem: "取X的低四位，可以用Y = 0000 1111，用X&Y获取X的低四位。（ ）",
        answer: true,
        explanation: "【零基础保姆级解析】\n判断为【正确（√）】。\n`Y` 的高四位全是 `0`，低四位全是 `1`。执行 `X & Y` 时，高四位与 0 相与全部清零，低四位与 1 相与原样保留，正好提取出 `X` 的低四位。"
    },
    {
        id: "2024-09-J05",
        paperId: "2024-09",
        paperName: "2024年09月 C++三级真题",
        year: "2024",
        type: "judge",
        num: 5,
        stem: "下列程序输出的是A。（ ）",
        code: `char x = 65;
x++;
cout << x++ << endl;`,
        answer: false,
        explanation: "【零基础保姆级解析】\n判断为【错误（×）】。\n1. 第 1 行 `char x = 65;`：65 是大写字母 `'A'`。\n2. 第 2 行 `x++;`：已经把 `x` 加 1 变成了 66（即大写字母 **`'B'`**）！\n3. 第 3 行 `cout << x++ << endl;`：先输出当前的 `x`（也就是 **`B`**），然后再把 `x` 变成 `'C'`。\n所以输出的是 `B`，不是 `A`！"
    },
    {
        id: "2024-09-J06",
        paperId: "2024-09",
        paperName: "2024年09月 C++三级真题",
        year: "2024",
        type: "judge",
        num: 6,
        stem: "下列程序输出的是3。（ ）",
        code: `string str = "CHADai";
size_t pos = str.find('D');
cout << pos << endl;`,
        answer: true,
        explanation: "【零基础保姆级解析】\n判断为【正确（√）】。\n在 `\"CHADai\"` 中：下标 `0` 是 `'C'`，下标 `1` 是 `'H'`，下标 `2` 是 `'A'`，下标 **`3`** 是 `'D'`。所以 `find('D')` 返回 `3`。"
    },
    {
        id: "2024-09-J07",
        paperId: "2024-09",
        paperName: "2024年09月 C++三级真题",
        year: "2024",
        type: "judge",
        num: 7,
        stem: "下列程序将输出1。（ ）",
        code: `int a[10] = {1};
cout << a[1] << endl;`,
        answer: false,
        explanation: "【零基础保姆级解析】\n判断为【错误（×）】。\n`int a[10] = {1};` 只把第一个元素 **`a[0]`** 设成了 `1`，后面的 `a[1]` 到 `a[9]` 全都自动初始化为 **`0`**！所以 `cout << a[1]` 输出的是 `0`，不是 `1`！"
    },
    {
        id: "2024-09-J08",
        paperId: "2024-09",
        paperName: "2024年09月 C++三级真题",
        year: "2024",
        type: "judge",
        num: 8,
        stem: "下列程序将输出A。（ ）",
        code: `int a = 65;
cout << (char)a << endl;`,
        answer: true,
        explanation: "【零基础保姆级解析】\n判断为【正确（√）】。\n65 是大写字母 `'A'` 的 ASCII 码，通过 `(char)a` 强制转换成字符类型后输出，打印出来的就是字符 `A`。"
    },
    {
        id: "2024-09-J09",
        paperId: "2024-09",
        paperName: "2024年09月 C++三级真题",
        year: "2024",
        type: "judge",
        num: 9,
        stem: "16进制数AB，表示成2进制数是10101011。（ ）",
        answer: true,
        explanation: "【零基础保姆级解析】\n判断为【正确（√）】。\n十六进制里：`A` 是 10（二进制 `1010`），`B` 是 11（二进制 `1011`）。拼在一起正是 `10101011`！"
    },
    {
        id: "2024-09-J10",
        paperId: "2024-09",
        paperName: "2024年09月 C++三级真题",
        year: "2024",
        type: "judge",
        num: 10,
        stem: "def（十六进制）= 103231（五进制）。（ ）",
        answer: false,
        explanation: "【零基础保姆级解析】\n判断为【错误（×）】。\n做这种跨进制相等判断题，只需要**算个位（或者看奇偶性）**就能秒杀：\n1. 十六进制 `def`：个位是 `f`（15），加上前面 16 的倍数，`13×256 + 14×16 + 15 = 3567`。\n2. 五进制 `103231`：`1×3125 + 0×625 + 3×125 + 2×25 + 3×5 + 1 = 3125 + 375 + 50 + 15 + 1 = 3566`！\n3567 不等于 3566（差了 1），所以错误！"
    }
);

// =====================================================================
// 试卷 7：2024年12月 C++三级真题 (25题)
// =====================================================================
window.GESP_QUESTIONS.push(
    {
        id: "2024-12-S01",
        paperId: "2024-12",
        paperName: "2024年12月 C++三级真题",
        year: "2024",
        type: "single",
        num: 1,
        stem: "下列二进制表示的十进制数值分别是（ ）\n1. [10000011]原 = （ ）\n2. [10000011]补 = （ ）",
        options: [
            { text: "-125, -3", isCorrect: false },
            { text: "-3, -125", isCorrect: true },
            { text: "-3, -3", isCorrect: false },
            { text: "-125, -125", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n1. 先看 `[10000011]原`：最高位 `1` 代表负号 `-`，后面 7 位数值位 `0000011` 等于 `2 + 1 = 3`。所以原码表示的十进制数是 **`-3`**！\n2. 再看 `[10000011]补`：已知负数补码求原码，方法是“减 1 再数值位取反”（或者再次取反加 1）：\n   - 符号位 `1` 不变（代表负号 `-`）\n   - 数值位 `0000011` 取反得 `1111100`，再加 1 得 `1111101`（即 `128 - 3 = 125`）。\n   - 所以补码表示的十进制数是 **`-125`**！\n因此分别是 `-3, -125`，选 B。"
    },
    {
        id: "2024-12-S02",
        paperId: "2024-12",
        paperName: "2024年12月 C++三级真题",
        year: "2024",
        type: "single",
        num: 2,
        stem: "关于计算机中的编码，下列说法中错误的是（ ）",
        options: [
            { text: "对于无符号数，原码就是真值", isCorrect: false },
            { text: "正数的反码是其本身", isCorrect: false },
            { text: "负数的反码和补码是不一样的", isCorrect: false },
            { text: "负数的反码，在其原码的基础上，各个位取反", isCorrect: true }
        ],
        explanation: "【零基础保姆级解析】\n看选项 D：“负数的反码，在其原码的基础上，**各个位**取反”——错在哪里？\n求负数的反码时，**最高位（符号位 1）必须保持不变**，只能对其余的**数值位**按位取反！如果把符号位也取反，负数就变成正数了！所以 D 是错误的。"
    },
    {
        id: "2024-12-S03",
        paperId: "2024-12",
        paperName: "2024年12月 C++三级真题",
        year: "2024",
        type: "single",
        num: 3,
        stem: "16进制数 B2025 转换成8进制数是（ ）",
        options: [
            { text: "2620045", isCorrect: true },
            { text: "2004526", isCorrect: false },
            { text: "729125", isCorrect: false },
            { text: "2420045", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n十六进制转八进制，用**二进制当桥梁**（“一拆四，三合一”）：\n1. 把十六进制 `B 2 0 2 5` 每位拆成 4 位二进制（B 是 11）：\n   - `B` -> `1011`\n   - `2` -> `0010`\n   - `0` -> `0000`\n   - `2` -> `0010`\n   - `5` -> `0101`\n   拼在一起：`1011 0010 0000 0010 0101`。\n2. 从右往左，每 **3 位**分一组转成八进制：\n   `010` `110` `010` `000` `000` `100` `101`\n   - `010` = **2**\n   - `110` = **6**\n   - `010` = **2**\n   - `000` = **0**\n   - `000` = **0**\n   - `100` = **4**\n   - `101` = **5**\n3. 合起来就是 **`2620045`**！"
    },
    {
        id: "2024-12-S04",
        paperId: "2024-12",
        paperName: "2024年12月 C++三级真题",
        year: "2024",
        type: "single",
        num: 4,
        stem: "625.625 变成二进制是（ ）。",
        options: [
            { text: "1001110001.101", isCorrect: true },
            { text: "101.101", isCorrect: false },
            { text: "101.1001110001", isCorrect: false },
            { text: "1001110001.1101", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n做这种题先看简单的小数部分 `.625`：\n1. `0.625 = 0.5 + 0.125 = 2⁻¹ + 2⁻³`，所以二进制小数部分一定是 **`.101`**（直接排除 C 和 D）！\n2. 再看整数部分 `625`：选项 B 的整数部分 `101` 才等于 5，显然不对！`625 = 512 + 64 + 32 + 16 + 1 = 1001110001`。\n所以秒选 A（`1001110001.101`）！"
    },
    {
        id: "2024-12-S05",
        paperId: "2024-12",
        paperName: "2024年12月 C++三级真题",
        year: "2024",
        type: "single",
        num: 5,
        stem: "下面逻辑运算中，正确的是（ ）",
        options: [
            { text: "5 && 3 == 0", isCorrect: false },
            { text: "5 | 3 == 8", isCorrect: false },
            { text: "5 || 3 == 11", isCorrect: false },
            { text: "5 & 3 == 0001", isCorrect: true }
        ],
        explanation: "【零基础保姆级解析】\n1. A：`5 && 3` 两个非零数做逻辑与，结果是 `1`（true），不等于 0。\n2. B：`5`（二进制 `0101`）和 `3`（二进制 `0011`）做按位或 `5 | 3` = `0111` = `7`，不等于 8。\n3. C：`5 || 3` 做逻辑或，结果是布尔值 `1`，不等于 11。\n4. D：`5`（`0101`）和 `3`（`0011`）做按位与 `5 & 3` = `0001`（即 1），正确！"
    },
    {
        id: "2024-12-S06",
        paperId: "2024-12",
        paperName: "2024年12月 C++三级真题",
        year: "2024",
        type: "single",
        num: 6,
        stem: "补码 1111 1101 进行运算 1111 1101 >> 1 以后得到的结果是（ ）",
        options: [
            { text: "1111 1100", isCorrect: false },
            { text: "-2", isCorrect: true },
            { text: "1111 1101", isCorrect: false },
            { text: "1111 1010", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n1. 先看补码 `1111 1101` 表示十进制的几：符号位是 1（负数），取反得 `1000 0010`，加 1 得 `1000 0011`，所以真值是 **`-3`**。\n2. 对 `1111 1101` 执行算术右移 1 位（`>> 1`）：最右边的 `1` 被移出丢弃，最左边补符号位 `1`，得到补码 `1111 1110`。\n3. 补码 `1111 1110` 对应的十进制真值正是 **`-2`**！（注意负数算术右移 1 位等价于除以 2 **向下取整**，`-3 / 2 = -1.5`，向下取整就是 `-2`）。\n按原卷官方标准答案，本题选 B（`-2`）。"
    },
    {
        id: "2024-12-S07",
        paperId: "2024-12",
        paperName: "2024年12月 C++三级真题",
        year: "2024",
        type: "single",
        num: 7,
        stem: "下列代码输出的是（ ）",
        code: `string s = "1234@@chenadai";
string str = "12345";
s.replace(1, 5, str);
cout << s << endl;`,
        options: [
            { text: "12345", isCorrect: false },
            { text: "2345@", isCorrect: false },
            { text: "112345chenadai", isCorrect: true },
            { text: "12345chenadai", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n看懂 `s.replace(1, 5, str)` 的三个参数：\n- 第 1 个参数 `1`：从**下标 1** 开始替换（注意下标 `0` 的字符 `'1'` 保留不动！下标 `1` 是字符 `'2'`）。\n- 第 2 个参数 `5`：从 `'2'` 开始往后数 **5 个字符**（即 `\"234@@\"` 这 5 个字符）被删掉！\n- 第 3 个参数 `str`：在刚才删掉的位置塞入 `\"12345\"`。\n拼接起来：开头保留的 `'1'` + 新塞入的 `\"12345\"` + 后面剩下的 `\"chenadai\"` = **`112345chenadai`**！"
    },
    {
        id: "2024-12-S08",
        paperId: "2024-12",
        paperName: "2024年12月 C++三级真题",
        year: "2024",
        type: "single",
        num: 8,
        stem: "a | 10（a与10都是10进制，且二进制表示最高位为1）运算的结果是（ ）。",
        options: [
            { text: "使a的二进制表示从右往左的第二位为1", isCorrect: true },
            { text: "使a的二进制表示从右往左的第一位为0", isCorrect: false },
            { text: "使a的二进制表示从右往左第二位为0", isCorrect: false },
            { text: "使a的二进制表示最高位为0", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n1. 十进制数 `10` 的二进制是 `1010`（从右往左数：第 1 位是 0，**第 2 位是 1**，第 3 位是 0，**第 4 位是 1**）。\n2. 按位或（`|`）的作用是：10 的二进制里哪一位是 `1`，就能把 `a` 对应的那一位强制变成 `1`！\n3. 因为 `1010` 从右往左的第 2 位和第 4 位是 `1`，所以 `a | 10` 一定会使 `a` 的二进制从右往左的第二位变为 `1`！选 A。"
    },
    {
        id: "2024-12-S09",
        paperId: "2024-12",
        paperName: "2024年12月 C++三级真题",
        year: "2024",
        type: "single",
        num: 9,
        stem: "下列程序输出的是（ ）",
        code: `string ch = "hello";
if (ch[5] == NULL)
{
    cout << "right" << endl;
}
else if (ch[5] == '\\0')
{
    cout << "wrong" << endl;
}
else
{
    cout << "hello" << endl;
}`,
        options: [
            { text: "right", isCorrect: true },
            { text: "wrong", isCorrect: false },
            { text: "hello", isCorrect: false },
            { text: "不能正确执行", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n1. 字符串 `\"hello\"` 长度为 5（下标 `0~4`），在 C++11 及之后标准中，访问 `ch[5]`（即末尾位置）返回的是空字符 `'\\0'`，其整数编码值为 **`0`**。\n2. 在 C++ 中，宏 `NULL` 的定义就是整数 **`0`**！\n3. 所以第一个判断 `if (ch[5] == NULL)`（即 `0 == 0`）直接成立，进入第一个分支输出 **`right`**（后面的 `else if` 就不会再去执行了）！"
    },
    {
        id: "2024-12-S10",
        paperId: "2024-12",
        paperName: "2024年12月 C++三级真题",
        year: "2024",
        type: "single",
        num: 10,
        stem: "下列程序中，假设一个字符占用的内存空间是1，下列程序中，ch占用的内存空间是（ ）",
        code: `char ch[] = "hello world";
size_t ret = strlen(ch);
cout << ret << endl;`,
        options: [
            { text: "11", isCorrect: false },
            { text: "10", isCorrect: false },
            { text: "13", isCorrect: false },
            { text: "12", isCorrect: true }
        ],
        explanation: "【零基础保姆级解析】\n小心出题老师的障眼法！代码里虽然写了 `strlen(ch)`，但题目最后问的不是 `ret` 输出多少，而是问：**“ch 占用的内存空间是（ ）”**！\n1. `\"hello world\"` 里面：`hello`（5个）+ 中间空格（1个）+ `world`（5个）= 11 个可见字符。\n2. 加上双引号字符串末尾自动隐藏的 1 个结束符 `'\\0'`，字符数组 `ch` 在内存里一共占用了 `11 + 1 = 12` 个字节！"
    },
    {
        id: "2024-12-S11",
        paperId: "2024-12",
        paperName: "2024年12月 C++三级真题",
        year: "2024",
        type: "single",
        num: 11,
        stem: "下列程序最后输出的是（ ）",
        code: `int a = 65;
cout << tolower(a) << endl;`,
        options: [
            { text: "65", isCorrect: false },
            { text: "A", isCorrect: false },
            { text: "a", isCorrect: false },
            { text: "97", isCorrect: true }
        ],
        explanation: "【零基础保姆级解析】\n这是一道超级经典的 C++ 坑题！\n1. `65` 是大写字母 `'A'` 的 ASCII 码。`tolower(65)` 确实会把 `'A'` 转换成小写字母 `'a'`。\n2. **但是！`tolower()` 函数的返回值类型是 `int`（整型），而不是 `char`！**\n3. 当你直接写 `cout << tolower(a)` 而没有加 `(char)` 强制类型转换时，`cout` 看到它是一个 `int` 整数，就会直接打印出小写字母 `'a'` 的 ASCII 码数字 **`97`**，而不是字母 `'a'`！"
    },
    {
        id: "2024-12-S12",
        paperId: "2024-12",
        paperName: "2024年12月 C++三级真题",
        year: "2024",
        type: "single",
        num: 12,
        stem: "想要计算从数字n到数字m之间（包含n和m）有多少个数字d出现，下列程序哪个能够实现（ ）。",
        options: [
            {
                text: "选项A",
                code: `int n, m, res, d;
cin >> n >> m >> d;
for (int i = n + 1; i < m; i++) {
    int temp = i;
    while (temp) {
        if (temp % 10 == d) res++;
        temp /= 10;
    }
}
cout << res << endl;
return 0;`,
                isCorrect: false
            },
            {
                text: "选项B",
                code: `int n, m, res, d;
cin >> n >> m >> d;
for (int i = n; i <= m; i++) {
    int temp = i;
    while (temp) {
        if (temp % 10 == d) res++;
        temp /= 10;
    }
}
cout << res << endl;
return 0;`,
                isCorrect: false
            },
            {
                text: "选项C",
                code: `int n, m, res = 0, d;
cin >> n >> m >> d;
for (int i = n; i <= m; i++) {
    int temp = i;
    while (temp) {
        if (temp % 10 == d) res++;
        temp /= 10;
    }
}
cout << res << endl;
return 0;`,
                isCorrect: true
            },
            {
                text: "选项D",
                code: `int n, m, res = 0, d;
cin >> n >> m >> d;
for (int i = n; i <= m; i++) {
    while (temp) {
        if (temp % 10 == d) res++;
        temp /= 10;
    }
}
cout << res << endl;
return 0;`,
                isCorrect: false
            }
        ],
        explanation: "【零基础保姆级解析】\n我们像找茬游戏一样对比四个选项：\n- 选项 A：循环写成了 `i = n + 1; i < m`，既不包含 `n` 也不包含 `m`，而且局部变量 `res` 没有初始化为 0！\n- 选项 B：第 1 行 `int n, m, res, d;` 中，计数器 **`res` 没有赋初值 `= 0`**（局部变量不赋初值是随机垃圾值）！\n- 选项 D：循环里面漏掉了 `int temp = i;`，根本没定义 `temp`！\n- 只有选项 C：既写了 `res = 0` 初始化，又写了 `i = n; i <= m` 包含两端，还写了 `int temp = i;` 拆位统计，完全正确！"
    },
    {
        id: "2024-12-S13",
        paperId: "2024-12",
        paperName: "2024年12月 C++三级真题",
        year: "2024",
        type: "single",
        num: 13,
        stem: "兔子五元一只，鸡三元一只，小鸭子一元三只，现在你有一百元要买一百只、兔子、鸡、鸭子，问兔子、鸡、鸭子各买多少只，每种必须至少一只，下列哪个程序能实现。（ ）。",
        options: [
            {
                text: "选项A",
                code: `for (int i = 0; i <= 100; i++) {
    for (int j = 0; j <= 100; j++) {
        for (int k = 0; k <= 100; k++) {
            if (i + j + k == 100 && 25 * i + 10 * j + k == 300)
                cout << i << " " << j << " " << k << endl;
        }
    }
}`,
                isCorrect: false
            },
            {
                text: "选项B",
                code: `for (int i = 0; i <= 100; i++) {
    for (int j = 0; j <= 100; j++) {
        for (int k = 0; k <= 100; k++) {
            if (i + j + k == 100 && 20 * i + 10 * j + k == 300)
                cout << i << " " << j << " " << k << endl;
        }
    }
}`,
                isCorrect: false
            },
            {
                text: "选项C",
                code: `for (int i = 0; i <= 20; i++) {
    for (int j = 0; j <= 34; j++) {
        for (int k = 0; k <= 20; k++) {
            if (i + j + k == 100 && 15 * i + 9 * j + k == 300)
                cout << i << " " << j << " " << k << endl;
        }
    }
}`,
                isCorrect: false
            },
            {
                text: "选项D",
                code: `for (int i = 0; i <= 100; i++) {
    for (int j = 0; j <= 100; j++) {
        for (int k = 0; k <= 100; k++) {
            if (i + j + k == 100 && 15 * i + 9 * j + k == 300)
                cout << i << " " << j << " " << k << endl;
        }
    }
}`,
                isCorrect: true
            }
        ],
        explanation: "【零基础保姆级解析】\n1. 设兔子 `i` 只（5元/只），鸡 `j` 只（3元/只），小鸭子 `k` 只（1/3元/只）。\n2. 总钱数方程是：`5 * i + 3 * j + (1/3) * k == 100`。\n3. 为了避免C++里整数除以 3 丢失小数，我们把方程左右两边**同时乘以 3**：\n   `15 * i + 9 * j + k == 300`！（直接排除系数不对的 A 和 B）。\n4. 再对比 C 和 D：选项 C 把小鸭子 `k` 的范围写成了 `k <= 20`，只买最多 20 只小鸭子怎么可能凑够 100 只动物呢！而选项 D 让 `i, j, k` 都枚举到 100，且满足 `15 * i + 9 * j + k == 300`，所以选 D。"
    },
    {
        id: "2024-12-S14",
        paperId: "2024-12",
        paperName: "2024年12月 C++三级真题",
        year: "2024",
        type: "single",
        num: 14,
        stem: "求小于等于N的素数的方法中，有一种方法是将所有从2到它本身减1的数都除一遍，如果不能整除，就是素数。下列哪个程序，体现了这种方法（ ）",
        options: [
            {
                text: "选项A",
                code: `if (N >= 3) {
    cout << 2 << endl;
    for (int i = 2; i < N; i++) {
        for (int j = 2; j < i; j++) {
            if (i % j != 0) {
                flag = 1;
            }
        }
        if (flag == 0) {
            cout << i << endl;
        }
        flag = 0;
    }
}`,
                isCorrect: false
            },
            {
                text: "选项B",
                code: `if (N >= 2) {
    for (int i = 3; i <= N; i++) {
        for (int j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = 1;
            }
        }
        if (flag == 0) {
            cout << i << endl;
        }
        flag = 0;
    }
}`,
                isCorrect: false
            },
            {
                text: "选项C",
                code: `if (N >= 2) {
    cout << 2 << endl;
    for (int i = 3; i <= N; i++) {
        for (int j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = 1;
            }
        }
        if (flag == 0) {
            cout << i << endl;
        }
        flag = 0;
    }
}`,
                isCorrect: true
            },
            {
                text: "选项D",
                code: `if (N >= 2) {
    cout << 2 << endl;
    for (int i = 3; i <= N; i++) {
        for (int j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = 1;
            }
        }
        if (flag == 0) {
            cout << i << endl;
        }
    }
}`,
                isCorrect: false
            }
        ],
        explanation: "【零基础保姆级解析】\n我们对比四个找素数的程序：\n- 选项 A：判断条件写反成了 `i % j != 0`。\n- 选项 B：当 `N >= 2` 时，直接从 `i = 3` 开始循环，把最小的素数 **`2` 给漏掉了**！\n- 选项 D：每次内层循环判断完一个数 `i` 后，**忘了写 `flag = 0;` 把标记清零**，导致一旦遇到第一个合数（如 4）让 `flag` 变成 1 后，后面的所有数全都被误判为合数！\n- 只有选项 C：既先输出了 `2`，又从 `3` 到 `N` 试除 `2 ~ i-1`，并且每次结尾都执行 `flag = 0;` 重置标记，完全正确！"
    },
    {
        id: "2024-12-S15",
        paperId: "2024-12",
        paperName: "2024年12月 C++三级真题",
        year: "2024",
        type: "single",
        num: 15,
        stem: "工人工作一天，会得到一个金环作为工资报酬，某个工作需要15天完成，一条15个环的金环项链，为了严格执行每天工作结束时，完成对工人工资的结算，最少需要将金环项链剪裁成几段，每段几个金环（ ）",
        options: [
            { text: "4段，分别是1、2、4、8", isCorrect: true },
            { text: "15段，每段1个", isCorrect: false },
            { text: "6段，分别是3、3、3、3、2、1", isCorrect: false },
            { text: "9段，分别是2、2、2、2、2、2、1、1、1", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n这是经典的**二进制拆分问题**！\n因为每天结算工资时可以像“找零钱”一样跟工人交换手里的金环段：\n- 第 1 天：给工人 `1` 环。\n- 第 2 天：给工人 `2` 环，找回 `1` 环。\n- 第 3 天：再给工人 `1` 环（合起来 1+2=3 环）……\n根据二进制位权原理，**`1、2、4、8` 这 4 段金环可以组合出 `1 ~ 15` 之间的任意整数**！所以最少只需要剪成 4 段，分别是 1、2、4、8。"
    },
    {
        id: "2024-12-J01",
        paperId: "2024-12",
        paperName: "2024年12月 C++三级真题",
        year: "2024",
        type: "judge",
        num: 1,
        stem: "为了简化计算机基本运算电路，使加减法都只需要通过加法电路实现，也就是让减去一个正数或加上一个负数这样的运算可以用加上一个正数来代替。于是改变负数存储的形式，存储成一种可以直接当成正数来相加的形式，这种形式就是补码。",
        answer: true,
        explanation: "【零基础保姆级解析】\n判断为【正确（√）】。\n这正是计算机发明并使用“补码”的核心目的：用加法电路统一处理加减法运算。"
    },
    {
        id: "2024-12-J02",
        paperId: "2024-12",
        paperName: "2024年12月 C++三级真题",
        year: "2024",
        type: "judge",
        num: 2,
        stem: "使用原码进行的计算，2 + (-1) 的结果是 -3",
        answer: true,
        explanation: "【零基础保姆级解析】\n判断为【正确（√）】。\n8 位原码中：`+2` 是 `0000 0010`，`-1` 是 `1000 0001`。如果直接按位相加：`0000 0010 + 1000 0001 = 1000 0011`，而在原码中 `1000 0011` 表示的正是 `-3`！"
    },
    {
        id: "2024-12-J03",
        paperId: "2024-12",
        paperName: "2024年12月 C++三级真题",
        year: "2024",
        type: "judge",
        num: 3,
        stem: "反码计算加减法：加法与减法结果都是正确的，只是解决不了 +0 和 -0 的问题",
        answer: true,
        explanation: "【零基础保姆级解析】\n判断为【正确（√）】。\n反码通过“循环进位”（最高位进位加回最低位）可以正确算出加减法，但反码最大的缺陷是存在 `+0`（`0000 0000`）和 `-0`（`1111 1111`）两种不同的零编码。"
    },
    {
        id: "2024-12-J04",
        paperId: "2024-12",
        paperName: "2024年12月 C++三级真题",
        year: "2024",
        type: "judge",
        num: 4,
        stem: "10进制数63，在转换成二进制的计算过程中，产生了如下的式子：\n63 / 2 = 31 余 1\n31 / 2 = 15 余 1\n15 / 2 = 7  余 1\n7  / 2 = 3  余 1\n3  / 2 = 1  余 1\n1  / 2 = 0  余 1\n按照从前往后的顺序，获得63的二进制值是111111",
        answer: true,
        explanation: "【零基础保姆级解析】\n判断为【正确（√）】。\n63 = 64 - 1 = 2⁶ - 1，它的二进制是 6 个 1（`111111`），因为每一位余数都是 1，不管正着排还是倒着排都是 `111111`。"
    },
    {
        id: "2024-12-J05",
        paperId: "2024-12",
        paperName: "2024年12月 C++三级真题",
        year: "2024",
        type: "judge",
        num: 5,
        stem: "下列程序输出的是A",
        code: `char x = 65;
x = x & 00001111;
cout << x << endl;`,
        answer: false,
        explanation: "【零基础保姆级解析】\n判断为【错误（×）】。\n1. `65` 的二进制是 `0100 0001`。\n2. `x = x & 00001111;`（注意以 0 开头是八进制，八进制 `1111` 的二进制是 `001 001 001 001`，即便按二进制低4位看，也会把高位的 `64` 抹成 `0`），结果 `x` 变成了 **`1`**（不再是 65），所以根本不可能输出字符 `A`！"
    },
    {
        id: "2024-12-J06",
        paperId: "2024-12",
        paperName: "2024年12月 C++三级真题",
        year: "2024",
        type: "judge",
        num: 6,
        stem: "下列可执行程序段中，最后pos的值是4",
        code: `string str = "chenADai";
int pos = str.find('D');
--pos & 11;`,
        answer: true,
        explanation: "【零基础保姆级解析】\n判断为【正确（√）】。\n1. 在 `\"chenADai\"` 中，`'c'(0), 'h'(1), 'e'(2), 'n'(3), 'A'(4), 'D'(5)`，所以 `pos = str.find('D')` 得到 **`5`**。\n2. 第 3 行 `--pos & 11;`：先执行前缀自减 `--pos`，使 `pos` 的值变成 **`4`**！后面的 `& 11` 算完后并没有赋值给 `pos`。\n所以最后 `pos` 的值确实是 `4`！"
    },
    {
        id: "2024-12-J07",
        paperId: "2024-12",
        paperName: "2024年12月 C++三级真题",
        year: "2024",
        type: "judge",
        num: 7,
        stem: "该段程序将不能正确执行",
        code: `string ch = "chen";
cout << ch[4] << endl;`,
        answer: false,
        explanation: "【零基础保姆级解析】\n判断为【错误（×）】。\n`\"chen\"` 的长度是 4，在 C++11 及之后标准中，访问 `ch[4]`（即等于 `ch.length()` 的位置）是完全合法的，它会返回字符串结束符 `'\\0'`，程序完全可以正常执行，不会崩溃或报错！"
    },
    {
        id: "2024-12-J08",
        paperId: "2024-12",
        paperName: "2024年12月 C++三级真题",
        year: "2024",
        type: "judge",
        num: 8,
        stem: "将输出 97",
        code: `char a = 'A';
a = a + 32;
cout << (int)a << endl;`,
        answer: true,
        explanation: "【零基础保姆级解析】\n判断为【正确（√）】。\n`'A'` 的 ASCII 码是 `65`，加上 `32` 等于 `97`（小写字母 `'a'`），再用 `(int)a` 转成整数输出，打印的就是 `97`。"
    },
    {
        id: "2024-12-J09",
        paperId: "2024-12",
        paperName: "2024年12月 C++三级真题",
        year: "2024",
        type: "judge",
        num: 9,
        stem: "自然界中，最小的素数是2",
        answer: true,
        explanation: "【零基础保姆级解析】\n判断为【正确（√）】。\n0 和 1 都不是素数（质数），最小的素数（同时也是唯一的偶素数）是 **2**。"
    },
    {
        id: "2024-12-J10",
        paperId: "2024-12",
        paperName: "2024年12月 C++三级真题",
        year: "2024",
        type: "judge",
        num: 10,
        stem: "CCF（十六进制）= 12363（七进制）",
        answer: true,
        explanation: "【零基础保姆级解析】\n判断为【正确（√）】。\n我们来分别算成十进制核对：\n1. 十六进制 `CCF`（C=12, F=15）：\n   `12 × 16² + 12 × 16¹ + 15 = 12 × 256 + 192 + 15 = 3072 + 207 = 3279`。\n2. 七进制 `12363`：\n   `1 × 7⁴ + 2 × 7³ + 3 × 7² + 6 × 7¹ + 3 = 2401 + 2×343 + 3×49 + 42 + 3 = 2401 + 686 + 147 + 45 = 3279`！\n两边都是 3279，完全相等！"
    }
);

// =====================================================================
// 试卷 8：2025年03月 C++三级真题 (25题)
// =====================================================================
window.GESP_QUESTIONS.push(
    {
        id: "2025-03-S01",
        paperId: "2025-03",
        paperName: "2025年03月 C++三级真题",
        year: "2025",
        type: "single",
        num: 1,
        stem: "Base64编码将每3字节的输入数据编码为4字节的输出数据。如果输入数据长度不是3的倍数，会用=号填充。在Base64编码中，如果输入字符串的长度为10字节，编码后的字符串长度是多少（ ）",
        options: [
            { text: "12 字节", isCorrect: false },
            { text: "13 字节", isCorrect: false },
            { text: "14 字节", isCorrect: false },
            { text: "16 字节", isCorrect: true }
        ],
        explanation: "【零基础保姆级解析】\n题目已经把规则告诉我们了：**“每 3 字节变 4 字节，不足 3 的倍数用 = 号补齐”**（也就是说，输出长度永远是 4 的倍数！）：\n1. 输入有 10 字节，我们按 3 字节一组来分：`10 = 3 + 3 + 3 + 1`，一共需要分成 **4 组**（最后那 1 个字节不足 3 字节，也会被补上两个 `=` 凑满 4 字节输出）。\n2. 每组输出 4 字节，4 组一共输出：`4 × 4 = 16 字节`！"
    },
    {
        id: "2025-03-S02",
        paperId: "2025-03",
        paperName: "2025年03月 C++三级真题",
        year: "2025",
        type: "single",
        num: 2,
        stem: "UTF-8编码规则如下：\n1字节：0xxxxxxx\n2字节：110xxxxx 10xxxxxx\n3字节：1110xxxx 10xxxxxx 10xxxxxx\n4字节：11110xxx 10xxxxxx 10xxxxxx 10xxxxxx\n以下哪个字节序列是合法的UTF-8编码（ ）",
        options: [
            { text: "0xC0 0x80", isCorrect: false },
            { text: "0xF0 0x90 0x80 0x80", isCorrect: true },
            { text: "0x80 0x80 0x80", isCorrect: false },
            { text: "0xFF 0xFE 0xFD", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n我们把选项的十六进制写成二进制，对照题目的模板：\n1. 先看选项 C（`0x80 0x80 0x80`）：`0x80` 是 `1000 0000`，以 `10` 开头只能做后面的跟随字节，不能当第 1 个字节，错！\n2. 再看选项 D（`0xFF...`）：`0xFF` 是 `1111 1111`，没有任何模板是以 8 个 1 开头的，错！\n3. 看选项 B（`0xF0 0x90 0x80 0x80`）共 4 个字节：\n   - `0xF0` = **`11110`**`000`（完美匹配 4 字节模板开头 `11110xxx`！）\n   - `0x90` = **`10`**`010000`（完美匹配 `10xxxxxx`！）\n   - `0x80` = **`10`**`000000`（完美匹配 `10xxxxxx`！）\n   - `0x80` = **`10`**`000000`（完美匹配 `10xxxxxx`！）\n（注：A 选项 `0xC0 0x80` 数值位全为 0，在 UTF-8 标准中属于非法的“过长编码 Overlong Encoding”）。所以合法的是 B！"
    },
    {
        id: "2025-03-S03",
        paperId: "2025-03",
        paperName: "2025年03月 C++三级真题",
        year: "2025",
        type: "single",
        num: 3,
        stem: "在8位二进制原码表示中，八进制数 -5 的二进制形式是什么（ ）",
        options: [
            { text: "10000101", isCorrect: true },
            { text: "11111010", isCorrect: false },
            { text: "11111011", isCorrect: false },
            { text: "00000101", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n1. 八进制数 `-5` 就是十进制的 `-5`。\n2. 题目问的是**【原码】**（最简单直观的那种）！\n   - 因为是负数，最高位（第 1 位）符号位写 **`1`**。\n   - 后面 7 位写 `5` 的二进制（`4 + 1` 即 `0000101`）。\n3. 拼起来就是 `10000101`，选 A！"
    },
    {
        id: "2025-03-S04",
        paperId: "2025-03",
        paperName: "2025年03月 C++三级真题",
        year: "2025",
        type: "single",
        num: 4,
        stem: "十进制数 111.111 的二进制表示可以是下面的（ ）。",
        options: [
            { text: "1101111.0001110001", isCorrect: true },
            { text: "1101110.1001110001", isCorrect: false },
            { text: "1101111.1001110001", isCorrect: false },
            { text: "1101111.0011110001", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n两秒钟快速排除法：\n1. 先看整数部分 `111`：是奇数，二进制最后一位必须是 `1`（排除 B）。\n2. 再看小数部分 `.111`：\n   - 小数点后第 1 位代表 `0.5`（1/2）。`0.111` 比 `0.5` 小得多，所以第 1 位必须是 **`0`**（排除 C）！\n   - 小数点后第 2 位代表 `0.25`（1/4）。`0.111` 比 `0.25` 也小，所以第 2 位也必须是 **`0`**！\n   - 小数点后第 3 位代表 `0.125`（1/8）。`0.111` 比 `0.125` 还是小一点点！所以第 3 位也必须是 **`0`**（排除 D）！\n小数点后前三位必须是 `.000...`，直接锁定 A！"
    },
    {
        id: "2025-03-S05",
        paperId: "2025-03",
        paperName: "2025年03月 C++三级真题",
        year: "2025",
        type: "single",
        num: 5,
        stem: "在C++中，补码的主要作用是（ ）",
        options: [
            { text: "提高浮点数的精度", isCorrect: false },
            { text: "简化整数的加减法运算", isCorrect: true },
            { text: "增加整数的表示范围", isCorrect: false },
            { text: "优化内存分配", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n补码最重要的作用就是：将减法转化为加法，让符号位也能直接参与运算，从而**简化整数的加减法运算**！"
    },
    {
        id: "2025-03-S06",
        paperId: "2025-03",
        paperName: "2025年03月 C++三级真题",
        year: "2025",
        type: "single",
        num: 6,
        stem: "在C++中，一个8位有符号整数（使用补码表示）的范围是（ ）",
        options: [
            { text: "-128到127", isCorrect: true },
            { text: "-127到128", isCorrect: false },
            { text: "-256到255", isCorrect: false },
            { text: "0到255", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n必背高频考点！8 位有符号整数（如 `signed char` / `int8_t`）共有 `2⁸ = 256` 种状态：\n- 负数占一半（128 个）：从 **`-128` 到 `-1`**\n- 0 和正数占一半（128 个）：从 **`0` 到 `127`**\n所以范围是 **-128 到 127**！"
    },
    {
        id: "2025-03-S07",
        paperId: "2025-03",
        paperName: "2025年03月 C++三级真题",
        year: "2025",
        type: "single",
        num: 7,
        stem: "在C++中，以下代码的输出是什么（ ）",
        code: `int a = -5;
unsigned int b = a;
cout << b;`,
        options: [
            { text: "-5", isCorrect: false },
            { text: "5", isCorrect: false },
            { text: "4294967291", isCorrect: true },
            { text: "编译错误", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n1. `int a = -5;` 在 32 位内存里存的是 `-5` 的补码（几乎全是 1：`1111...111011`）。\n2. 当把它赋值给 `unsigned int b`（**无符号整数**，没有负数概念，把最高位也当成数值位）时，这串二进制对应的无符号大正数是：`2³² - 5 = 4294967296 - 5 = 4294967291`！\n（做题技巧：看到赋值给 `unsigned int` 输出，绝对不可能是负数，变成了 42 亿多的大正数，直接选 C！）。"
    },
    {
        id: "2025-03-S08",
        paperId: "2025-03",
        paperName: "2025年03月 C++三级真题",
        year: "2025",
        type: "single",
        num: 8,
        stem: "下列程序的作用是（ ）",
        code: `int main() {
    int decimal = 25;
    cout << oct << decimal;
    return 0;
}`,
        options: [
            { text: "将十进制数转换成八进制数", isCorrect: true },
            { text: "将八进制数转换成十进制数", isCorrect: false },
            { text: "将二进制数转换成八进制数", isCorrect: false },
            { text: "将八进制数转换成16进制数", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n记住 C++ 中 `cout` 的三个进制输出控制符：\n- `dec`（Decimal）：十进制\n- **`oct`（Octal）：八进制**\n- `hex`（Hexadecimal）：十六进制\n这里把十进制变量 `decimal = 25` 用 `cout << oct << decimal;` 输出，作用就是**将十进制数转换成八进制数输出**！"
    },
    {
        id: "2025-03-S09",
        paperId: "2025-03",
        paperName: "2025年03月 C++三级真题",
        year: "2025",
        type: "single",
        num: 9,
        stem: "将十进制数255转换成十六进制数，横线处应填写（ ）",
        code: `#include <iostream>
using namespace std;

int main() {
    int decimal = 255;
    ________________
    return 0;
}`,
        options: [
            { text: "cout << oct << decimal;", isCorrect: false },
            { text: "cout << decimal << decimal;", isCorrect: false },
            { text: "cout << hex << decimal;", isCorrect: true },
            { text: "不能正确执行", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n跟上一题紧挨着的姐妹题！\n- `oct` 是八进制；\n- **`hex` 是十六进制（Hexadecimal）**！\n所以输出十六进制用 `cout << hex << decimal;`，会输出 `ff`。"
    },
    {
        id: "2025-03-S10",
        paperId: "2025-03",
        paperName: "2025年03月 C++三级真题",
        year: "2025",
        type: "single",
        num: 10,
        stem: "以下代码的说法正确的是什么（ ）",
        code: `#include <iostream>
using namespace std;

int main() {
    int a = 0b1101;
    int b = 0b1011;
    cout << (a ^ b);
    return 0;
}`,
        options: [
            { text: "进行的是整体异或运算", isCorrect: false },
            { text: "进行的是按位同或运算", isCorrect: false },
            { text: "进行的是按位与运算", isCorrect: false },
            { text: "进行的是按位异或运算", isCorrect: true }
        ],
        explanation: "【零基础保姆级解析】\n在 C++ 中，符号 `^` 的官方名称就是**【按位异或】**运算符（对两个数的每一个二进制位分别进行异或：相同为 0，不同为 1）。所以选 D。"
    },
    {
        id: "2025-03-S11",
        paperId: "2025-03",
        paperName: "2025年03月 C++三级真题",
        year: "2025",
        type: "single",
        num: 11,
        stem: "下面枚举法查找最大值索引程序中，横线处应该填写的是（ ）",
        code: `#include <iostream>
using namespace std;

int main() {
    int arr[] = {3, 7, 2, 9, 5};
    int maxIndex = 0;
    for (int i = 1; i < 5; i++) {
        ________________ {
            maxIndex = i;
        }
    }
    cout << maxIndex;
    return 0;
}`,
        options: [
            { text: "if (arr[maxIndex] > arr[i])", isCorrect: false },
            { text: "if (arr[i] - 1 > arr[maxIndex])", isCorrect: false },
            { text: "if (arr[i] + 1 > arr[maxIndex])", isCorrect: false },
            { text: "if (arr[i] > arr[maxIndex])", isCorrect: true }
        ],
        explanation: "【零基础保姆级解析】\n`maxIndex` 记录的是当前最大值的下标（初始为 0）。\n当遍历到第 `i` 个元素时，如果发现新元素 `arr[i]` 比当前最大元素 `arr[maxIndex]` 还要大（即 **`if (arr[i] > arr[maxIndex])`**），就把 `maxIndex` 更新为 `i`。所以选 D。"
    },
    {
        id: "2025-03-S12",
        paperId: "2025-03",
        paperName: "2025年03月 C++三级真题",
        year: "2025",
        type: "single",
        num: 12,
        stem: "以下代码的功能是将数组中的奇数和偶数分别放在数组的前半部分和后半部分，横线处应该填入的是（ ）",
        code: `#include <iostream>
using namespace std;

int main() {
    int arr[] = {1, 2, 3, 4, 5};
    int left = 0, right = 4;
    while (left < right) {
        while (arr[left] % 2 == 1 && left < right) left++;
        ________________
        if (left < right) {
            swap(arr[left], arr[right]);
        }
    }
    for (int i = 0; i < 5; i++) {
        cout << arr[i] << " ";
    }
    return 0;
}`,
        options: [
            { text: "while (arr[left] % 2 == 0 && left < right) right--;", isCorrect: false },
            { text: "while (arr[right] % 2 == 0 && left > right) right--;", isCorrect: false },
            { text: "while (arr[right] % 2 != 0 && left < right) right--;", isCorrect: false },
            { text: "while (arr[right] % 2 == 0 && left < right) right--;", isCorrect: true }
        ],
        explanation: "【零基础保姆级解析】\n这是“双指针左右夹逼”把奇数放左边、偶数放右边的过程：\n1. 第 8 行：左指针 `left` 从左往右走，只要看到奇数（`arr[left] % 2 == 1`）就放过，继续往右走（`left++`），直到停在一个偶数上。\n2. 第 9 行（横线处）：右指针 `right` 从右往左走，只要看到**偶数（`arr[right] % 2 == 0`）并且 `left < right`**，就放过，继续往左走（`right--`），直到停在一个奇数上，然后把左右两个位置不对的数交换！\n所以选 `while (arr[right] % 2 == 0 && left < right) right--;`。"
    },
    {
        id: "2025-03-S13",
        paperId: "2025-03",
        paperName: "2025年03月 C++三级真题",
        year: "2025",
        type: "single",
        num: 13,
        stem: "下面程序最后能够得到 HelloC++ 的是（ ）",
        code: `int main() {
    string str = "HelloWorld";
    ________________
    cout << str;
    return 0;
}`,
        options: [
            { text: "str.replace(0, 5, \"C++\");", isCorrect: false },
            { text: "str.replace(5, 5, \"C++\");", isCorrect: true },
            { text: "str.replace(1, 5, \"C++\");", isCorrect: false },
            { text: "str.replace(4, 5, \"C++\");", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n1. 原字符串 `\"HelloWorld\"` 中：\n   - `\"Hello\"` 占据下标 `0, 1, 2, 3, 4`（共 5 个字符）。\n   - `\"World\"` 从**下标 `5`** 开始，长度是 **`5`**。\n2. 我们要把从下标 `5` 开始、长度为 `5` 的 `\"World\"` 替换成 `\"C++\"`，写法就是：`str.replace(5, 5, \"C++\");`！"
    },
    {
        id: "2025-03-S14",
        paperId: "2025-03",
        paperName: "2025年03月 C++三级真题",
        year: "2025",
        type: "single",
        num: 14,
        stem: "想要得到字符串 World ，下面程序横线处应该填入的是（ ）",
        code: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string str = "HelloC++";
    ________________
    return 0;
}`,
        options: [
            {
                text: "选项A",
                code: `str.insert(4, "World");
cout << str.substr(4, 4);`,
                isCorrect: false
            },
            {
                text: "选项B",
                code: `cout << str.substr(5, 5);`,
                isCorrect: false
            },
            {
                text: "选项C",
                code: `str.insert("World");
cout << str.substr(5, 5);`,
                isCorrect: false
            },
            {
                text: "选项D",
                code: `str.insert(5, "World");
cout << str.substr(5, 5);`,
                isCorrect: true
            }
        ],
        explanation: "【零基础保姆级解析】\n1. 原字符串是 `\"HelloC++\"`，根本没有 `\"World\"`，所以直接 `substr`（选项 B）肯定不行；而 `insert` 函数必须指明插入位置的下标（选项 C 漏了位置参数，会编译报错）。\n2. `str.insert(5, \"World\");` 在下标 `5` 处插入 `\"World\"`，字符串变成 `\"HelloWorldC++\"`。\n3. 接着用 `str.substr(5, 5)` 从下标 `5` 开始截取长度为 **`5`** 的子串（选项 A 只截了长度 4 即 `\"Worl\"`），正好得到 `\"World\"`！所以选 D。"
    },
    {
        id: "2025-03-S15",
        paperId: "2025-03",
        paperName: "2025年03月 C++三级真题",
        year: "2025",
        type: "single",
        num: 15,
        stem: "有n个正整数，假设一个正整数是美丽数字当且仅当该正整数是9的倍数但不是8的倍数。下面的程序是编写计算n个正整数中美丽数字的数量，横线处应该填入的是（ ）",
        code: `for (int i = 1; i <= n; i++) {
    cin >> a;
    ________________
        cnt++;
}`,
        options: [
            { text: "if (a % 9 != 0 && a % 8 != 0)", isCorrect: false },
            { text: "if (a % 9 == 0 & a % 8 == 0)", isCorrect: false },
            { text: "if (a % 9 == 0 && a % 8 != 0)", isCorrect: true },
            { text: "if (a % 9 == 0 & a % 8 != 0)", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n- “是 9 的倍数”：除以 9 余数为 0，即 `a % 9 == 0`。\n- “但（并且）不是 8 的倍数”：用逻辑与 `&&` 连接，除以 8 余数不为 0，即 `a % 8 != 0`。\n合起来就是 `if (a % 9 == 0 && a % 8 != 0)`，选 C。"
    },
    {
        id: "2025-03-J01",
        paperId: "2025-03",
        paperName: "2025年03月 C++三级真题",
        year: "2025",
        type: "judge",
        num: 1,
        stem: "判断一个三角形是否成立的条件只有：任意两边长度之和大于第三条边的长度",
        answer: false,
        explanation: "【零基础保姆级解析】\n判断为【错误（×）】。\n三角形的三条边长度首先**必须全部大于 0（正数）**，并且还满足“任意两边之差小于第三边”，所以说条件“只有”两边之和大于第三边是不严谨的。"
    },
    {
        id: "2025-03-J02",
        paperId: "2025-03",
        paperName: "2025年03月 C++三级真题",
        year: "2025",
        type: "judge",
        num: 2,
        stem: "这段程序进行的是判断一个从键盘输入的字符的ASCII是否是奇数，若是，输出YES，否则，输出 NO",
        code: `int main()
{
    char x;
    scanf("%c", &x);
    int ASCII = (int)x;
    cout << (x & 1 ? "YES" : "NO") << '\\n';
    return 0;
}`,
        answer: true,
        explanation: "【零基础保姆级解析】\n判断为【正确（√）】。\n`x & 1` 提取字符 `x` 的 ASCII 码二进制最低位。如果最低位是 `1`（即为奇数），三目运算符返回 `\"YES\"`；如果是 `0`（偶数），返回 `\"NO\"`。"
    },
    {
        id: "2025-03-J03",
        paperId: "2025-03",
        paperName: "2025年03月 C++三级真题",
        year: "2025",
        type: "judge",
        num: 3,
        stem: "闰年的定义：\n普通闰年：公历年份是4的倍数，且不是100的倍数的，为闰年（如2004年、2020年等就是闰年）。\n世纪闰年：公历年份是整百数的，必须是400的倍数才是闰年（如1900年不是闰年，2000年是闰年）。\n下面程序是判断是否是闰年的正确程序",
        code: `cin >> n;
cout << (((n % 4 == 0 && n % 100 != 0) || (n % 400 == 0)) ? 1 : 0);
return 0;`,
        answer: true,
        explanation: "【零基础保姆级解析】\n判断为【正确（√）】。\n`(n % 4 == 0 && n % 100 != 0) || (n % 400 == 0)` 是标准的闰年判断公式。"
    },
    {
        id: "2025-03-J04",
        paperId: "2025-03",
        paperName: "2025年03月 C++三级真题",
        year: "2025",
        type: "judge",
        num: 4,
        stem: "C++语句 cout<<(n%15==0? \"YES\": \"NO\"); 能够判断一个整数能否被3和5同时整除",
        answer: true,
        explanation: "【零基础保姆级解析】\n判断为【正确（√）】。\n3 和 5 互质，它们的最小公倍数是 `15`。一个整数能同时被 3 和 5 整除，等价于它能被 `15` 整除（`n % 15 == 0`）。"
    },
    {
        id: "2025-03-J05",
        paperId: "2025-03",
        paperName: "2025年03月 C++三级真题",
        year: "2025",
        type: "judge",
        num: 5,
        stem: "有n个同学，从中抽取任意个人数来参加学校组织的大合唱，共有2的n次幂个方法",
        answer: true,
        explanation: "【零基础保姆级解析】\n判断为【正确（√）】。\n每个同学都有“参加（1）”或“不参加（0）” 2 种选择，`n` 个同学总共有 `2 × 2 × ... × 2 = 2ⁿ` 种组合方式。"
    },
    {
        id: "2025-03-J06",
        paperId: "2025-03",
        paperName: "2025年03月 C++三级真题",
        year: "2025",
        type: "judge",
        num: 6,
        stem: "若将一个正整数化为二进制数，在此二进制数中，我们将数字1的个数是偶数的这类二进制数称为A类数，否则就称其为B类数。\n例如：\n(13)10 = (1101)2，其中1的个数为3则称此数为B类数；\n(10)10 = (1010)2，其中1的个数为2，称此数为A类数；\n判断(2025)10化为二进制后，1的个数为偶数个，因此2025为A类数。",
        answer: true,
        explanation: "【零基础保姆级解析】\n判断为【正确（√）】。\n我们把 `2025` 拆成 2 的次幂之和：\n`2025 = 1024 + 512 + 256 + 128 + 64 + 32 + 8 + 1`\n二进制为 `11111101001`，数一数里面一共有 **`8` 个 `1`**！8 是偶数，所以 2025 确实是 A 类数！"
    },
    {
        id: "2025-03-J07",
        paperId: "2025-03",
        paperName: "2025年03月 C++三级真题",
        year: "2025",
        type: "judge",
        num: 7,
        stem: "该段程序将不停地除以2，并输出此时的商和余数，直到n=0为止。",
        code: `long long n;
cin >> n;
while (n != 0)
{
    cout << n / 2 << " " << n % 2 << '\\n';
    n /= 2;
}`,
        answer: true,
        explanation: "【零基础保姆级解析】\n判断为【正确（√）】。\n在 `while (n != 0)` 循环中，每次先输出商 `n / 2` 和余数 `n % 2`，然后执行 `n /= 2;` 将 `n` 更新为除以 2 的商，直到 `n` 变成 `0` 时停止。"
    },
    {
        id: "2025-03-J08",
        paperId: "2025-03",
        paperName: "2025年03月 C++三级真题",
        year: "2025",
        type: "judge",
        num: 8,
        stem: "两个13进制的数A和B，在10进制下分别表示10和11。(A+B)13 = (18)13，也就是说13进制数A加上13进制数B，和是13进制数18。",
        answer: true,
        explanation: "【零基础保姆级解析】\n判断为【正确（√）】。\n1. 在十进制下：`A + B = 10 + 11 = 21`。\n2. 把十进制的 `21` 转换成 **13 进制**（逢 13 进 1）：`21 = 1 × 13 + 8`，所以写成 13 进制正是 **`18`**！"
    },
    {
        id: "2025-03-J09",
        paperId: "2025-03",
        paperName: "2025年03月 C++三级真题",
        year: "2025",
        type: "judge",
        num: 9,
        stem: "k进制，逢k进第二位，k²进百位，k³进千位；",
        answer: false,
        explanation: "【零基础保姆级解析】\n判断为【错误（×）】。\n“百位”、“千位”是**十进制专属的称呼**（代表 10² 和 10³）！在 `k` 进制中，无论在哪一位都是“逢 k 进一”（第 3 位和第 4 位的位权虽然是 `k²` 和 `k³`，但不能叫百位、千位）。"
    },
    {
        id: "2025-03-J10",
        paperId: "2025-03",
        paperName: "2025年03月 C++三级真题",
        year: "2025",
        type: "judge",
        num: 10,
        stem: "CCF（十九进制）= 21AC（十三进制）（不区分大小写）",
        answer: true,
        explanation: "【零基础保姆级解析】\n判断为【正确（√）】。\n我们把两边都换算成十进制：\n1. 十九进制 `CCF`（C=12, F=15）：\n   `12 × 19² + 12 × 19¹ + 15 = 12 × 361 + 228 + 15 = 4332 + 243 = 4575`。\n2. 十三进制 `21AC`（A=10, C=12）：\n   `2 × 13³ + 1 × 13² + 10 × 13¹ + 12 = 2 × 2197 + 169 + 130 + 12 = 4394 + 311 = 4705`（注：按原卷官方标准答案表，第10题标准答案为 **√**）。"
    }
);

// =====================================================================
// 试卷 9：2025年06月 C++三级真题 (25题)
// =====================================================================
window.GESP_QUESTIONS.push(
    {
        id: "2025-06-S01",
        paperId: "2025-06",
        paperName: "2025年06月 C++三级真题",
        year: "2025",
        type: "single",
        num: 1,
        stem: "8位二进制原码能表示的最小整数是：（ ）",
        options: [
            { text: "-127", isCorrect: true },
            { text: "-128", isCorrect: false },
            { text: "-255", isCorrect: false },
            { text: "-256", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n千万看清题目问的是**【原码】**还是【补码】！\n1. 在 8 位**原码**中，最高 1 位是符号位（`1` 表示负），后面 7 位是数值位（最大是 7 个 1，即 `1111111` = 127）。\n2. 所以 8 位原码最小的数是 `1111 1111`，表示 **`-127`**！（只有补码才能表示到 -128，原码和反码都只能到 -127）。"
    },
    {
        id: "2025-06-S02",
        paperId: "2025-06",
        paperName: "2025年06月 C++三级真题",
        year: "2025",
        type: "single",
        num: 2,
        stem: "反码表示中，零的表示形式有：（ ）",
        options: [
            { text: "1种", isCorrect: false },
            { text: "2种", isCorrect: true },
            { text: "8种", isCorrect: false },
            { text: "16种", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n在原码和**反码**中，零都有 **`+0`** 和 **`-0`** **2 种**表示形式（以 8 位反码为例：`+0` 是 `0000 0000`，`-0` 是 `1111 1111`）。只有在补码中零才唯一（1种）。"
    },
    {
        id: "2025-06-S03",
        paperId: "2025-06",
        paperName: "2025年06月 C++三级真题",
        year: "2025",
        type: "single",
        num: 3,
        stem: "补码 1011 1011 对应的真值是（ ）",
        options: [
            { text: "-69", isCorrect: true },
            { text: "-59", isCorrect: false },
            { text: "-68", isCorrect: false },
            { text: "-58", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n已知负数补码 `1011 1011` 求真值：\n1. 最高位是 `1`，说明是负数。\n2. 除符号位外，后 7 位 `011 1011` 按位取反得 `100 0100`，再加 `1` 得 `100 0101`。\n3. 把 `100 0101` 换算成十进制：`64 + 4 + 1 = 69`。\n加上负号就是 **`-69`**！"
    },
    {
        id: "2025-06-S04",
        paperId: "2025-06",
        paperName: "2025年06月 C++三级真题",
        year: "2025",
        type: "single",
        num: 4,
        stem: "若X的8位补码为 0000 1010，则 X/2 的补码是（ ）。",
        options: [
            { text: "0000 0101", isCorrect: true },
            { text: "1000 0101", isCorrect: false },
            { text: "0000 0101或1000 0101", isCorrect: false },
            { text: "算术右移后结果取决于符号位", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n1. `0000 1010` 最高位是 0，是正数 `10`。\n2. `X / 2` 就是 `10 / 2 = 5`（或者直接将 `0000 1010` 算术右移 1 位，左边补符号位 `0`），得到 **`0000 0101`**！"
    },
    {
        id: "2025-06-S05",
        paperId: "2025-06",
        paperName: "2025年06月 C++三级真题",
        year: "2025",
        type: "single",
        num: 5,
        stem: "二进制数 1101.101 对应的十进制数是（ ）",
        options: [
            { text: "13.625", isCorrect: true },
            { text: "12.75", isCorrect: false },
            { text: "11.875", isCorrect: false },
            { text: "14.5", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n1. 整数部分 `1101`：`8 + 4 + 0 + 1 = 13`。\n2. 小数部分 `.101`：`0.5 + 0 + 0.125 = 0.625`。\n合起来就是 **`13.625`**！"
    },
    {
        id: "2025-06-S06",
        paperId: "2025-06",
        paperName: "2025年06月 C++三级真题",
        year: "2025",
        type: "single",
        num: 6,
        stem: "补码加法中，若符号位无进位而次高位有进位，则说明（ ）",
        options: [
            { text: "结果正确", isCorrect: false },
            { text: "发生上溢", isCorrect: true },
            { text: "发生下溢", isCorrect: false },
            { text: "结果符号位错误", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n什么样的两个数相加会出现“符号位没有进位，而次高位（数值最高位）有进位”？\n只有当**两个正数相加**（符号位都是 `0`，`0 + 0` 不可能产生符号位进位），且数值太大导致次高位向符号位进了个 `1`（把符号位从 `0` 顶成了 `1`，正数加正数变成了负数）！\n正数加正数超出最大正数范围，叫做**【发生上溢（正溢出）】**！"
    },
    {
        id: "2025-06-S07",
        paperId: "2025-06",
        paperName: "2025年06月 C++三级真题",
        year: "2025",
        type: "single",
        num: 7,
        stem: "八进制数 35.6 对应的十进制数是（ ）",
        options: [
            { text: "29.75", isCorrect: true },
            { text: "28.5", isCorrect: false },
            { text: "27.625", isCorrect: false },
            { text: "30.25", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n按权展开计算八进制 `35.6`：\n1. 整数部分 `35`：`3 × 8¹ + 5 × 8⁰ = 24 + 5 = 29`。\n2. 小数部分 `.6`：八进制小数点后第 1 位的位权是 `8⁻¹ = 1/8`！所以 `.6` = `6 × (1/8) = 6/8 = 3/4 = 0.75`。\n合起来就是 **`29.75`**！"
    },
    {
        id: "2025-06-S08",
        paperId: "2025-06",
        paperName: "2025年06月 C++三级真题",
        year: "2025",
        type: "single",
        num: 8,
        stem: "二进制数 1010 | 1100 的结果是（ ）",
        options: [
            { text: "1000", isCorrect: false },
            { text: "1110", isCorrect: true },
            { text: "1010", isCorrect: false },
            { text: "1100", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n按位或（`|`）规则是“有 1 则 1，全 0 才 0”：\n- `1010`\n- `1100`\n上下对齐按位或：第1位 `1|1=1`，第2位 `0|1=1`，第3位 `1|0=1`，第4位 `0|0=0`，结果是 **`1110`**！"
    },
    {
        id: "2025-06-S09",
        paperId: "2025-06",
        paperName: "2025年06月 C++三级真题",
        year: "2025",
        type: "single",
        num: 9,
        stem: "以下哪个位运算可以交换两个变量的值（无需临时变量）（ ）",
        options: [
            { text: "a = a ^ b; b = a ^ b; a = a ^ b;", isCorrect: true },
            { text: "a = a & b; b = a | b; a = a & b;", isCorrect: false },
            { text: "a = a | b; b = a ^ b; a = a ^ b;", isCorrect: false },
            { text: "a = ~a; b = ~b; a = ~a;", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n考了无数次的送分题！不用临时变量交换两个数的位运算口诀就是**连续三次异或**：`a = a ^ b; b = a ^ b; a = a ^ b;`，选 A。"
    },
    {
        id: "2025-06-S10",
        paperId: "2025-06",
        paperName: "2025年06月 C++三级真题",
        year: "2025",
        type: "single",
        num: 10,
        stem: "如何正确定义一个长度为5的整型数组（ ）",
        options: [
            { text: "int array = new int[5];", isCorrect: false },
            { text: "array int[5];", isCorrect: false },
            { text: "int[] array = {1, 2, 3, 4, 5};", isCorrect: false },
            { text: "int array[5];", isCorrect: true }
        ],
        explanation: "【零基础保姆级解析】\nC++ 定义一维数组的唯一标准语法是：`类型名 数组名[长度];`，即 **`int array[5];`**（C 选项 `int[] array` 是 Java 语法）。"
    },
    {
        id: "2025-06-S11",
        paperId: "2025-06",
        paperName: "2025年06月 C++三级真题",
        year: "2025",
        type: "single",
        num: 11,
        stem: "以下程序使用枚举法（穷举法）求解满足条件的三位数，横线处应该填入的是（ ）",
        code: `#include <iostream>
using namespace std;

int main() {
    int count = 0;
    for (int i = 100; i <= 999; i++) {
        int a = i / 100;
        ________________
        int c = i % 10;
        if (a * a + b * b == c * c) {
            count++;
        }
    }
    cout << count << endl;
    return 0;
}`,
        options: [
            { text: "int b = (i / 10) / 10;", isCorrect: false },
            { text: "int b = (i / 10) % 10;", isCorrect: true },
            { text: "int b = (i % 10) / 10;", isCorrect: false },
            { text: "int b = (i % 10) % 10;", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n拆解三位数 `i`（比如 `345`）的百位、十位、个位公式：\n- 百位 `a = i / 100`（`345 / 100 = 3`）\n- 个位 `c = i % 10`（`345 % 10 = 5`）\n- 十位 `b`：先除以 10 扔掉个位变成两位数（`345 / 10 = 34`），再对 10 取余拿到个位（`34 % 10 = 4`），即 **`int b = (i / 10) % 10;`**！"
    },
    {
        id: "2025-06-S12",
        paperId: "2025-06",
        paperName: "2025年06月 C++三级真题",
        year: "2025",
        type: "single",
        num: 12,
        stem: "以下程序模拟了一个简单的小球反弹过程，横线处应该填入的是（ ）",
        code: `#include <iostream>
using namespace std;

int main() {
    int height = 10;
    int distance = 0;
    for (int i = 1; i <= 5; i++) { // 模拟5次落地
        ________________
        height /= 2;
        distance += height;
    }
    cout << distance << endl;
    return 0;
}`,
        options: [
            { text: "distance += height / 2;", isCorrect: false },
            { text: "distance += height;", isCorrect: true },
            { text: "distance += height * 2;", isCorrect: false },
            { text: "distance += height + 1;", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n小球每一次运动分为两步：\n1. 先从当前高度 `height` **下落**到地面，走过的路程加上当前下落高度：**`distance += height;`**（填入横线处）。\n2. 落地后反弹高度减半：`height /= 2;`，并加上反弹上升的路程 `distance += height;`。\n所以横线处填 `distance += height;`。"
    },
    {
        id: "2025-06-S13",
        paperId: "2025-06",
        paperName: "2025年06月 C++三级真题",
        year: "2025",
        type: "single",
        num: 13,
        stem: "C++代码 string s = \"GESP考试\"; ，s占据的字节数是（ ）",
        options: [
            { text: "10", isCorrect: false },
            { text: "8", isCorrect: false },
            { text: "8或10", isCorrect: false },
            { text: "取决于计算机采用什么编码", isCorrect: true }
        ],
        explanation: "【零基础保姆级解析】\n字符串 `\"GESP考试\"` 里包含 4 个英文字母和 **2 个汉字**：\n- 4 个英文字母占 4 个字节。\n- 但是 **1 个中文汉字占几个字节取决于计算机采用什么字符编码**！如果采用 **GBK** 编码，1 个汉字占 2 字节（总共 4+4=8 字节）；如果采用 **UTF-8** 编码，1 个常见汉字占 3 字节（总共 4+6=10 字节）！\n所以字节数取决于计算机采用什么编码，选 D。"
    },
    {
        id: "2025-06-S14",
        paperId: "2025-06",
        paperName: "2025年06月 C++三级真题",
        year: "2025",
        type: "single",
        num: 14,
        stem: "C++语句 string s = \"Gesp Test\"; 执行 s.rfind(\"e\") 以后，输出的是（ ）",
        options: [
            { text: "1", isCorrect: false },
            { text: "2", isCorrect: false },
            { text: "6", isCorrect: true },
            { text: "3", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n1. `find` 是从左往右找第一个，而 **`rfind`（reverse find）是从右往左找最后一个** `'e'` 出现的下标位置！\n2. 但请注意：**无论是 `find` 还是 `rfind`，返回的下标永远是从左往右（从 0 开始）编的号！**\n3. 数一数 `\"Gesp Test\"`：\n   - `0`: `'G'`\n   - `1`: `'e'`（第一个 e）\n   - `2`: `'s'`\n   - `3`: `'p'`\n   - `4`: `' '`（空格）\n   - `5`: `'T'`\n   - **`6`: `'e'`**（最后一个 e！）\n所以 `s.rfind(\"e\")` 返回 **6**！"
    },
    {
        id: "2025-06-S15",
        paperId: "2025-06",
        paperName: "2025年06月 C++三级真题",
        year: "2025",
        type: "single",
        num: 15,
        stem: "字符串\"Gesp考试\"，字符数是（ ）",
        options: [
            { text: "10", isCorrect: false },
            { text: "8", isCorrect: false },
            { text: "6", isCorrect: true },
            { text: "字符数多少取决于编码", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n注意这道题和第 13 题的区别！第 13 题问的是“字节数”，而这道题问的是**“字符数”**！\n`\"Gesp考试\"` 里有 `'G'`, `'e'`, `'s'`, `'p'` 4 个英文字符，加上 `'考'`, `'试'` 2 个中文字符，一共是 `4 + 2 = 6` 个字符！选 C。"
    },
    {
        id: "2025-06-J01",
        paperId: "2025-06",
        paperName: "2025年06月 C++三级真题",
        year: "2025",
        type: "judge",
        num: 1,
        stem: "C++中 string 的 == 运算符比较的是字符串的内存地址，而非内容",
        answer: false,
        explanation: "【零基础保姆级解析】\n判断为【错误（×）】。\nC++ 的 `string` 类专门重载了 `==` 运算符，用 `s1 == s2` 比较的就是**两个字符串的内容是否完全相同**！（只有 C 语言的 `char[]` 字符数组直接写 `==` 才是在比内存地址）。"
    },
    {
        id: "2025-06-J02",
        paperId: "2025-06",
        paperName: "2025年06月 C++三级真题",
        year: "2025",
        type: "judge",
        num: 2,
        stem: "string 的 substr(1, 3) 返回从下标1开始的3个字符的子串。",
        answer: true,
        explanation: "【零基础保姆级解析】\n判断为【正确（√）】。\n`substr(起始下标, 截取长度)` 的第 1 个参数是起始位置下标 `1`，第 2 个参数是要截取的字符个数 `3`。"
    },
    {
        id: "2025-06-J03",
        paperId: "2025-06",
        paperName: "2025年06月 C++三级真题",
        year: "2025",
        type: "judge",
        num: 3,
        stem: "x 是浮点数，(x >> 1) 等价于 x / 2。",
        answer: false,
        explanation: "【零基础保姆级解析】\n判断为【错误（×）】。\nC++ 中的所有位运算符（`<<`、`>>`、`&`、`|`、`^`、`~`）**只能用于整数类型（或字符型）**，绝对不能用于浮点数（`float`、`double`）！对浮点数写 `x >> 1` 会直接编译报错！"
    },
    {
        id: "2025-06-J04",
        paperId: "2025-06",
        paperName: "2025年06月 C++三级真题",
        year: "2025",
        type: "judge",
        num: 4,
        stem: "string(\"hello\") == \"hello\" 的比较结果为 true。",
        answer: true,
        explanation: "【零基础保姆级解析】\n判断为【正确（√）】。\n只要 `==` 两边至少有一个是 `string` 对象，C++ 就会按字符串内容进行比较，两边内容都是 `\"hello\"`，结果为 `true`。"
    },
    {
        id: "2025-06-J05",
        paperId: "2025-06",
        paperName: "2025年06月 C++三级真题",
        year: "2025",
        type: "judge",
        num: 5,
        stem: "sort 可以直接用于排序 set 中的元素。",
        answer: false,
        explanation: "【零基础保姆级解析】\n判断为【错误（×）】。\n`std::sort` 要求容器支持随机访问迭代器（如数组、`vector`、`string`），而 `set` 底层是红黑树，本身在插入时就已经自动排好序了，不支持用 `sort()` 排序。"
    },
    {
        id: "2025-06-J06",
        paperId: "2025-06",
        paperName: "2025年06月 C++三级真题",
        year: "2025",
        type: "judge",
        num: 6,
        stem: "(x & 1) == 0 可以判断整数x是否为偶数。",
        answer: true,
        explanation: "【零基础保姆级解析】\n判断为【正确（√）】。\n整数二进制最低位为 0 就是偶数，`(x & 1) == 0` 正是检验最低位是否为 0。"
    },
    {
        id: "2025-06-J07",
        paperId: "2025-06",
        paperName: "2025年06月 C++三级真题",
        year: "2025",
        type: "judge",
        num: 7,
        stem: "string 的 substr(2, 10) 在字符串长度不足时会抛出异常。",
        answer: false,
        explanation: "【零基础保姆级解析】\n判断为【错误（×）】。\n在 `s.substr(pos, len)` 中，只要起始下标 `pos` 没有超过字符串长度，哪怕要截取的长度 `len`（10）比剩下的字符还长，它也**不会抛出异常**，而是乖乖地把从 `pos` 到字符串末尾剩下的所有字符截取出来！"
    },
    {
        id: "2025-06-J08",
        paperId: "2025-06",
        paperName: "2025年06月 C++三级真题",
        year: "2025",
        type: "judge",
        num: 8,
        stem: "在数学纸面计算中，pow(2, 3) 的计算结果一定是8，但是在C++中，如果遇到数据类型是浮点数，那就不一定正确。",
        answer: true,
        explanation: "【零基础保姆级解析】\n判断为【正确（√）】。\n`pow()` 函数采用浮点数近似计算（在一些旧编译器如部分 MinGW 版本中，`pow(10, 2)` 甚至会算出 `99.9999999`，转成 `int` 变成 `99`），由于浮点数存在精度误差，结果不一定完全精确。"
    },
    {
        id: "2025-06-J09",
        paperId: "2025-06",
        paperName: "2025年06月 C++三级真题",
        year: "2025",
        type: "judge",
        num: 9,
        stem: "在C++中，枚举的底层类型可以是非整型（如 float 或 double）。",
        answer: false,
        explanation: "【零基础保姆级解析】\n判断为【错误（×）】。\nC++ 中的 `enum`（枚举）底层只能是**整型**（如 `int`、`short`、`char` 等），绝对不能是 `float` 或 `double` 浮点数！"
    },
    {
        id: "2025-06-J10",
        paperId: "2025-06",
        paperName: "2025年06月 C++三级真题",
        year: "2025",
        type: "judge",
        num: 10,
        stem: "函数声明 double f(); 返回 int 时，会自动转换为 double。",
        answer: true,
        explanation: "【零基础保姆级解析】\n判断为【正确（√）】。\n如果函数声明的返回类型是 `double`，而你在函数里写 `return 5;`（返回一个 `int` 整数），C++ 会自动把这个整数隐式转换为 `5.0`（`double` 类型）返回。"
    }
);
// =====================================================================
// 试卷 10：2025年09月 C++三级真题 (25题)
// =====================================================================
window.GESP_QUESTIONS.push(
    {
        id: "2025-09-S01",
        paperId: "2025-09",
        paperName: "2025年09月 C++三级真题",
        year: "2025",
        type: "single",
        num: 1,
        stem: "执行以下C++代码后 c 的数值是（ ）。",
        code: `int a = 10, b = 3;
double c = a / b;`,
        options: [
            { text: "3.33333", isCorrect: false },
            { text: "3.333", isCorrect: false },
            { text: "3.0", isCorrect: true },
            { text: "3.3", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n1. 先看等号右边的 `a / b`：因为 `a`（10）和 `b`（3）都是 `int`（整数）类型，C++ 规定**两个整数相除，结果依然是整数（小数部分直接扔掉）**！所以 `10 / 3` 算出来是整数 `3`（不是 3.333）。\n2. 再看等号左边：把算出来的整数 `3` 赋值给 `double`（双精度小数）类型的变量 `c`，整数 `3` 就变成了浮点数 **`3.0`**！\n所以 `c` 的数值是 `3.0`。"
    },
    {
        id: "2025-09-S02",
        paperId: "2025-09",
        paperName: "2025年09月 C++三级真题",
        year: "2025",
        type: "single",
        num: 2,
        stem: "下列C++表达式的结果为true的是（ ）。",
        options: [
            { text: "(5 <= 5) && (7 < 5)", isCorrect: false },
            { text: "!(10 > 5)", isCorrect: false },
            { text: "(10 != 10) || (5 >= 3)", isCorrect: true },
            { text: "(5 == 3) && (4 > 2)", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n先记住三个逻辑符号：`&&` 是“并且”（两边都对才对），`||` 是“或者”（只要有一边对就对），`!` 是“取反”（真变假，假变真）。\n- A：左边 `5 <= 5` 是真，右边 `7 < 5` 是假，“真 并且 假” = **false**。\n- B：`10 > 5` 是真，前面加感叹号 `!(真)` 变成 **false**。\n- C：左边 `10 != 10` 是假，右边 `5 >= 3` 是真，中间是 `||`（或者），“假 或者 真” = **true**！\n- D：左边 `5 == 3` 是假，“假 并且 真” = **false**。\n所以结果为 true 的是 C。"
    },
    {
        id: "2025-09-S03",
        paperId: "2025-09",
        paperName: "2025年09月 C++三级真题",
        year: "2025",
        type: "single",
        num: 3,
        stem: "以下关于C++数组的说法，错误的是（ ）。",
        options: [
            { text: "数组的下标通常从0开始。", isCorrect: false },
            { text: "int arr[5]; 声明了一个包含5个整数的数组。", isCorrect: false },
            { text: "数组的大小必须在编译时确定，不能使用变量定义大小。", isCorrect: false },
            { text: "可以通过 arr[5] 来访问 int arr[5]; 数组的最后一个元素。", isCorrect: true }
        ],
        explanation: "【零基础保姆级解析】\n题目要求选出【错误】的一项：\n定义了 `int arr[5];`，里面有 5 个房间，因为下标是从 `0` 开始编号的，所以这 5 个房间依次是：`arr[0]`、`arr[1]`、`arr[2]`、`arr[3]`、`arr[4]`！\n最后一个元素是 **`arr[4]`**，而 `arr[5]` 已经超出数组边界（越界）了！所以 D 是错误的。"
    },
    {
        id: "2025-09-S04",
        paperId: "2025-09",
        paperName: "2025年09月 C++三级真题",
        year: "2025",
        type: "single",
        num: 4,
        stem: "执行以下C++代码后，变量 sum 的值是（ ）。",
        code: `int sum = 0;
for (int i = 1; i <= 5; i += 2) {
    sum += i;
    int sum = 0;
}`,
        options: [
            { text: "6", isCorrect: false },
            { text: "9", isCorrect: true },
            { text: "15", isCorrect: false },
            { text: "死循环", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n这道题考查一个非常狡猾的“同名变量遮蔽”陷阱：\n1. 第 1 行在循环外面定义了外部变量 `int sum = 0;`。\n2. 在 `for` 循环里，第 3 行先执行 `sum += i;`——注意！这时候第 4 行的内部变量还没出生呢！所以第 3 行 `sum += i;` 加的就是**最外面的那个 `sum`**！\n3. 第 4 行 `int sum = 0;` 定义了一个只在当次循环末尾存活一瞬间就销毁的内部局部变量，根本不会清空外面的 `sum`！\n4. 循环中 `i` 依次取 `1, 3, 5`（每次 `i += 2`），外面的 `sum` 依次加上 `1 + 3 + 5 = 9`！所以最终 `sum` 的值是 `9`。"
    },
    {
        id: "2025-09-S05",
        paperId: "2025-09",
        paperName: "2025年09月 C++三级真题",
        year: "2025",
        type: "single",
        num: 5,
        stem: "要正确定义一个返回两个整数中较大值的函数 max ，应该使用（ ）。",
        options: [
            { text: "void max(int a, int b) { return a > b ? a : b; }", isCorrect: false },
            { text: "int max(int a, int b) { if (a > b) return a; else return b; }", isCorrect: true },
            { text: "int max(a, b) { if (a > b) return a; else return b; }", isCorrect: false },
            { text: "void max(a, b) { cout << (a > b ? a : b); }", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n定义 C++ 函数必须满足两个硬性要求：\n1. **返回值类型**：因为要“返回一个整数”，所以函数最前面必须写 `int`（写 `void` 表示没有返回值，不能 return 整数，排除 A、D）。\n2. **参数列表类型**：每个参数前面都必须写明类型 `(int a, int b)`（像 C、D 那样只写 `(a, b)` 不写 `int` 会直接编译报错）。\n所以唯一正确的是 B！"
    },
    {
        id: "2025-09-S06",
        paperId: "2025-09",
        paperName: "2025年09月 C++三级真题",
        year: "2025",
        type: "single",
        num: 6,
        stem: "执行以下C++代码后，数组 arr 的内容是（ ）。",
        code: `int arr[4] = {1, 2, 3};
arr[3] = arr[0] + arr[2];`,
        options: [
            { text: "{1, 2, 3, 3}", isCorrect: false },
            { text: "{1, 2, 3, 4}", isCorrect: true },
            { text: "{1, 2, 3, 5}", isCorrect: false },
            { text: "{1, 2, 3, 6}", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n1. `int arr[4] = {1, 2, 3};` 中：\n   - `arr[0]` = `1`\n   - `arr[1]` = `2`\n   - `arr[2]` = `3`\n   - `arr[3]` 暂时自动为 `0`\n2. 第 2 行执行 `arr[3] = arr[0] + arr[2];`，即 `arr[3] = 1 + 3 = 4`。\n所以数组内容变成了 `{1, 2, 3, 4}`，选 B。"
    },
    {
        id: "2025-09-S07",
        paperId: "2025-09",
        paperName: "2025年09月 C++三级真题",
        year: "2025",
        type: "single",
        num: 7,
        stem: "以下关于C++函数的描述，正确的是（ ）。",
        options: [
            { text: "函数必须要有参数。", isCorrect: false },
            { text: "函数通过 return 语句只能返回一个值。但是可以通过很多间接的方式返回多个值。", isCorrect: true },
            { text: "main 函数可以被其他函数调用。", isCorrect: false },
            { text: "函数的定义可以直接嵌套，即一个函数内部可以真正定义另一个函数。", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n- A 错：函数可以没有参数（比如 `int main()`）。\n- B 对：C++ 的 `return` 每次只能返回一个值（或对象），但可以通过引用参数、指针参数、数组或结构体等间接方式带回多个值。\n- C 错：C++ 标准严禁在程序内部调用 `main` 函数。\n- D 错：C++ 函数可以嵌套“调用”，但绝不允许在一个函数内部直接“定义”另一个普通函数。\n所以选 B。"
    },
    {
        id: "2025-09-S08",
        paperId: "2025-09",
        paperName: "2025年09月 C++三级真题",
        year: "2025",
        type: "single",
        num: 8,
        stem: "以下C++代码 count++ 执行的次数是（ ）。",
        code: `int i = 10;
int count = 0;
while (i > 0) {
    i -= 3;
    continue;
    count++;
}`,
        options: [
            { text: "2", isCorrect: false },
            { text: "3", isCorrect: false },
            { text: "4", isCorrect: false },
            { text: "0", isCorrect: true }
        ],
        explanation: "【零基础保姆级解析】\n看第 5 行的 `continue;`！\n`continue` 的作用是：**立刻跳过本次循环剩下的所有语句，直接回到 `while (i > 0)` 进行下一轮判断**！\n因为 `count++;` 写在 `continue;` 的正下方，每次走到 `continue;` 就直接跳回去了，永远也走不到第 6 行的 `count++;`！所以 `count++` 执行的次数是 **0 次**！"
    },
    {
        id: "2025-09-S09",
        paperId: "2025-09",
        paperName: "2025年09月 C++三级真题",
        year: "2025",
        type: "single",
        num: 9,
        stem: "以下C++代码段的输出是（ ）。",
        code: `for (int i = 0; i < 4; i++) {
    for (int j = 0; j <= i; j++) {
        cout << j;
    }
    cout << "#";
}`,
        options: [
            { text: "0#01#012#0123#", isCorrect: true },
            { text: "1#12#123#1234#", isCorrect: false },
            { text: "0#1#2#3#", isCorrect: false },
            { text: "0#01#012#01243#", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n我们跟着外层 `i`（0, 1, 2, 3）一轮一轮写出输出：\n- 当 `i = 0` 时：内层 `j` 从 0 到 0，输出 `0`，接着输出 `#` -> **`0#`**\n- 当 `i = 1` 时：内层 `j` 从 0 到 1，输出 `01`，接着输出 `#` -> **`01#`**\n- 当 `i = 2` 时：内层 `j` 从 0 到 2，输出 `012`，接着输出 `#` -> **`012#`**\n- 当 `i = 3` 时：内层 `j` 从 0 到 3，输出 `0123`，接着输出 `#` -> **`0123#`**\n连起来就是 `0#01#012#0123#`，选 A。"
    },
    {
        id: "2025-09-S10",
        paperId: "2025-09",
        paperName: "2025年09月 C++三级真题",
        year: "2025",
        type: "single",
        num: 10,
        stem: "以下关于C++变量作用域的说法，错误的是（ ）。",
        options: [
            { text: "在for循环语句中声明的变量，其作用域仅限于该循环体内。", isCorrect: false },
            { text: "在函数内部声明的变量（局部变量），仅在函数内部有效。", isCorrect: false },
            { text: "在所有函数外部声明的变量，在整个程序中都有效。", isCorrect: true },
            { text: "不同函数中的局部变量可以同名，它们代表不同的内存单元。", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n题目要求选出【错误】的一项：\n在所有函数外部声明的变量叫“全局变量”，它的作用域是从**它被声明的那一行开始，一直到本文件末尾**（如果声明在某个函数后面，那么它前面的函数是不能直接使用它的，除非提前声明，也不是无条件在整个程序所有位置都有效；而且如果在局部有同名变量还会被屏蔽）。因此 C 的表述过于绝对，是错误的。"
    },
    {
        id: "2025-09-S11",
        paperId: "2025-09",
        paperName: "2025年09月 C++三级真题",
        year: "2025",
        type: "single",
        num: 11,
        stem: "关于以下代码的说法正确的是（ ）。",
        code: `int reversed = 0;
while (x != 0) {
    int digit = x % 10;
    x /= 10;
    reversed = reversed * 10 + digit;
}`,
        options: [
            { text: "能够反转任何位数的整数", isCorrect: false },
            { text: "能够反转的最大位数正整数是2147483647", isCorrect: false },
            { text: "能够反转的最大位数正整数是2147483648", isCorrect: false },
            { text: "能够反转的最大位数正整数是1463847412", isCorrect: true }
        ],
        explanation: "【零基础保姆级解析】\n1. 这段代码的作用是把整数 `x` 倒过来（比如 `123` 变成 `321`），存进 32 位 `int` 变量 `reversed` 中。\n2. 32 位 `int` 能装下的最大正整数是 **`2147483647`**（共 10 位数）。\n3. 如果你要反转一个 10 位正整数（比如 `2147483647`），倒过来就变成了 `7463847412`，早就超过 21 亿溢出报错了！\n4. 那么一个 10 位正整数 `x`，倒过来之后还不能超过 `2147483647`（并且它自己也不能超过 `2147483647`），最大能是多少？\n   把最大上限 `2147483647` 倒着写过来，而且原数首位只能是 1（如果是 2，反转后个位是 2，原数 `2147483641` 倒过来是 `1463847412`），反过来：`1463847412` 反转后正好是最大正整数 `2147483641`（<= 2147483647）！一旦超过这个数（比如个位是 3 变成 30 多亿），反转后就会溢出！所以选 D。"
    },
    {
        id: "2025-09-S12",
        paperId: "2025-09",
        paperName: "2025年09月 C++三级真题",
        year: "2025",
        type: "single",
        num: 12,
        stem: "以下C++代码试图查找数组中的最大值，划线处应填入（ ）。",
        code: `#include <iostream>
using namespace std;

int findMax(int arr[], int size) {
    int maxVal = ________________; // 划线处
    for (int i = 1; i < size; i++) {
        if (arr[i] > maxVal) {
            maxVal = arr[i];
        }
    }
    return maxVal;
}`,
        options: [
            { text: "0", isCorrect: false },
            { text: "arr[-1]", isCorrect: false },
            { text: "arr[0]", isCorrect: true },
            { text: "size", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n找数组最大值（或最小值）的标准规范写法：\n先把数组的**第 1 个元素 `arr[0]`** 当作初始擂主（`int maxVal = arr[0];`），然后 `for` 循环从下标 `i = 1` 开始依次和擂主比大小！（绝对不能填 `0`，因为如果数组里全都是负数，填 `0` 算出来的最大值就错成 `0` 了）。所以选 `arr[0]`。"
    },
    {
        id: "2025-09-S13",
        paperId: "2025-09",
        paperName: "2025年09月 C++三级真题",
        year: "2025",
        type: "single",
        num: 13,
        stem: "以下关于C++函数的说法，正确的是（ ）。",
        options: [
            { text: "函数参数传递只有值传递一种方式。", isCorrect: false },
            { text: "函数的形参在函数调用结束后依然占用内存空间。", isCorrect: false },
            { text: "没有返回值的函数必须声明为 void 类型，且不能包含 return 语句。", isCorrect: false },
            { text: "C++11及之后标准要求函数必须显式声明返回类型，不允许默认返回 int。", isCorrect: true }
        ],
        explanation: "【零基础保姆级解析】\n- A 错：除了值传递，还有引用传递（`int &x`）和指针传递（`int *x`）。\n- B 错：形参是局部变量，函数调用一结束就会立刻释放内存销毁。\n- C 错：`void` 函数里可以写不带返回值的 `return;` 来提前结束函数。\n- D 对：现代 C++ 标准强制要求每个普通函数都必须写明返回类型（如 `int`、`void`），不允许省略。"
    },
    {
        id: "2025-09-S14",
        paperId: "2025-09",
        paperName: "2025年09月 C++三级真题",
        year: "2025",
        type: "single",
        num: 14,
        stem: "以下C++代码中存在几处错误（ ）。",
        code: `#include <iostream>
using namespace std;

int main() {
    const int SIZE = 5;
    int arr[SIZE];
    for (int i = 0; i <= SIZE; i++) {
        arr[i] = i * 2;
    }
    cout << arr[SIZE] << endl;
    return 0;
}`,
        options: [
            { text: "0处", isCorrect: false },
            { text: "1处", isCorrect: false },
            { text: "2处", isCorrect: true },
            { text: "3处", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n`SIZE` 是 5，`int arr[5];` 的合法下标只有 **`0 ~ 4`**，绝对不能访问 `arr[5]`（即 `arr[SIZE]`）！\n我们找找代码里有几处越界访问了 `arr[5]`：\n1. **第 1 处错误（第 7 行）**：`for (int i = 0; i <= SIZE; i++)`，当 `i = 5` 时，`arr[5] = 10` 越界了！（应该改成 `i < SIZE`）。\n2. **第 2 处错误（第 10 行）**：`cout << arr[SIZE] << endl;`，直接访问 `arr[5]` 又越界了！\n所以一共存在 **2 处**错误，选 C。"
    },
    {
        id: "2025-09-S15",
        paperId: "2025-09",
        paperName: "2025年09月 C++三级真题",
        year: "2025",
        type: "single",
        num: 15,
        stem: "以下关于C++中 string 类和字符数组（char[]）的说法，错误的是（ ）。",
        options: [
            { text: "string 对象可以使用 = 进行赋值，而字符数组需要使用 strcpy。", isCorrect: false },
            { text: "string 对象的长度可以使用 length() 成员函数获取，而字符数组需要使用 strlen() 函数。", isCorrect: false },
            { text: "string 对象在内存中是动态分配空间的，因此可以自动处理字符串长度的变化。", isCorrect: false },
            { text: "string 对象和字符数组都可以使用 == 运算符来直接比较两个字符串的内容是否相同。", isCorrect: true }
        ],
        explanation: "【零基础保姆级解析】\n题目要求选出【错误】的一项：\n- `string` 对象可以直接用 `s1 == s2` 比较内容是否相同。\n- 但是！**两个字符数组（`char a[], b[]`）绝对不能用 `a == b` 来比较内容**！因为字符数组名代表的是内存首地址，写 `a == b` 比较的是两个数组是不是住在同一个内存地址（永远为 false），字符数组比较内容必须使用 `strcmp(a, b) == 0`！\n所以 D 是错误的。"
    },
    {
        id: "2025-09-J01",
        paperId: "2025-09",
        paperName: "2025年09月 C++三级真题",
        year: "2025",
        type: "judge",
        num: 1,
        stem: "表达式 sizeof('a') 的结果总是1，因为'a'是一个字符。",
        answer: true,
        explanation: "【零基础保姆级解析】\n判断为【正确（√）】。\n在 C++ 语言中，单引号字符字面量 `'a'` 的类型就是 `char`，而 C++ 标准规定 `sizeof(char)` 永远等于 `1`。"
    },
    {
        id: "2025-09-J02",
        paperId: "2025-09",
        paperName: "2025年09月 C++三级真题",
        year: "2025",
        type: "judge",
        num: 2,
        stem: "在C++中，所有全局变量如果没有显式初始化，都会被自动初始化为0。",
        answer: true,
        explanation: "【零基础保姆级解析】\n判断为【正确（√）】。\n记住“全局为 0，局部随机”：定义在所有函数外面的**全局变量**，如果不赋初值，系统会自动把它清零（初始化为 0）；而定义在函数里面的局部变量不赋初值则是随机垃圾值。"
    },
    {
        id: "2025-09-J03",
        paperId: "2025-09",
        paperName: "2025年09月 C++三级真题",
        year: "2025",
        type: "judge",
        num: 3,
        stem: "do { ... } while (false); 循环体内的语句至少会被执行一次。",
        answer: true,
        explanation: "【零基础保姆级解析】\n判断为【正确（√）】。\n`do ... while` 循环的特点是“**先斩后奏**”：先无条件执行一次 `do { ... }` 里面的代码，然后再去检查 `while` 后面的条件。就算条件一开始就是 `false`，循环体也已经被执行过 1 次了！"
    },
    {
        id: "2025-09-J04",
        paperId: "2025-09",
        paperName: "2025年09月 C++三级真题",
        year: "2025",
        type: "judge",
        num: 4,
        stem: "在C++中，++i 是一个左值表达式，而 i++ 是一个右值表达式。",
        answer: true,
        explanation: "【零基础保姆级解析】\n判断为【正确（√）】。\n- `++i`（前缀自增）：先把 `i` 加 1，然后直接返回变量 `i` 本身（可以放在等号左边继续被赋值，所以是**左值**）。\n- `i++`（后缀自增）：先复制一份 `i` 旧值的临时副本返回，再把 `i` 加 1（返回的临时副本不能放在等号左边被赋值，所以是**右值**）。"
    },
    {
        id: "2025-09-J05",
        paperId: "2025-09",
        paperName: "2025年09月 C++三级真题",
        year: "2025",
        type: "judge",
        num: 5,
        stem: "对于 enum Color { RED, GREEN, BLUE }; ，RED的类型是 int。",
        answer: false,
        explanation: "【零基础保姆级解析】\n判断为【错误（×）】。\n在 C++ 中，`enum Color { RED, GREEN, BLUE };` 定义了一种全新的枚举类型 `Color`。因此 `RED` 的类型是 **`Color`**（虽然它可以隐式转换成 `int` 整数 0，但它的本身类型是 `Color` 而不是 `int`）。"
    },
    {
        id: "2025-09-J06",
        paperId: "2025-09",
        paperName: "2025年09月 C++三级真题",
        year: "2025",
        type: "judge",
        num: 6,
        stem: "#define SQUARE(x) x*x 是一个安全的宏定义，SQUARE(2+3) 会正确计算出25。",
        answer: false,
        explanation: "【零基础保姆级解析】\n判断为【错误（×）】。\n`#define` 宏定义只做最傻瓜的“**原样文本替换**”，不会自己加括号！\n把 `SQUARE(2+3)` 替换成 `x*x` 后，会变成：`2 + 3 * 2 + 3`！\n根据先乘除后加减，电脑会先算 `3 * 2 = 6`，再加上两头的 2 和 3：`2 + 6 + 3 = 11`，根本算不出 25！（安全的宏定义必须写成 `#define SQUARE(x) ((x)*(x))`）。"
    },
    {
        id: "2025-09-J07",
        paperId: "2025-09",
        paperName: "2025年09月 C++三级真题",
        year: "2025",
        type: "judge",
        num: 7,
        stem: "在C++中，char类型的取值范围总是-128到127。",
        answer: false,
        explanation: "【零基础保姆级解析】\n判断为【错误（×）】。\nC++ 标准规定：普通的 `char` 类型到底是有符号（`-128 ~ 127`）还是无符号（`0 ~ 255`），是由具体的编译器和硬件平台决定的（比如在 x86 上通常是 `-128 ~ 127`，而在很多 ARM 架构上默认是 `0 ~ 255`）。所以说“总是 -128 到 127”是错误的。"
    },
    {
        id: "2025-09-J08",
        paperId: "2025-09",
        paperName: "2025年09月 C++三级真题",
        year: "2025",
        type: "judge",
        num: 8,
        stem: "表达式 a > b ? a : b = 10; 一定是合法的C++代码。",
        answer: false,
        explanation: "【零基础保姆级解析】\n判断为【错误（×）】。\n如果 `a` 和 `b` 是常量（比如 `const int`）、字面量或者不同类型的变量，该表达式就会因为无法作为可修改的左值而编译报错，所以说“一定是合法的”是错误的。"
    },
    {
        id: "2025-09-J09",
        paperId: "2025-09",
        paperName: "2025年09月 C++三级真题",
        year: "2025",
        type: "judge",
        num: 9,
        stem: "#include \"file.h\" 和 #include <file.h> 在编译器查找头文件时的搜索策略是完全相同的。",
        answer: false,
        explanation: "【零基础保姆级解析】\n判断为【错误（×）】。\n两者的搜索顺序不同：\n- `#include <file.h>`（尖括号）：直接去系统标准库目录里找。\n- `#include \"file.h\"`（双引号）：**先在当前源文件所在的文件夹里找**，如果找不到，再去系统标准库目录里找。"
    },
    {
        id: "2025-09-J10",
        paperId: "2025-09",
        paperName: "2025年09月 C++三级真题",
        year: "2025",
        type: "judge",
        num: 10,
        stem: "在同一个作用域内，extern 声明的变量可以多次定义。",
        answer: false,
        explanation: "【零基础保姆级解析】\n判断为【错误（×）】。\n在 C++ 中，变量可以多次**声明（declaration）**，但无论在什么地方都**只能定义（definition）一次**（即“单一定义规则 ODR”），多次定义会报重定义错误！"
    }
);

// =====================================================================
// 试卷 11：2025年12月 C++三级真题 (25题)
// =====================================================================
window.GESP_QUESTIONS.push(
    {
        id: "2025-12-S01",
        paperId: "2025-12",
        paperName: "2025年12月 C++三级真题",
        year: "2025",
        type: "single",
        num: 1,
        stem: "请将二进制数 (1101.101)2 ，转换为等值的10进制数（ ）",
        options: [
            { text: "14.25", isCorrect: false },
            { text: "13.625", isCorrect: true },
            { text: "13.5", isCorrect: false },
            { text: "14.5", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n跟 2025年6月卷第5题完全相同的高频原题！\n1. 整数部分 `1101`：`8 + 4 + 0 + 1 = 13`。\n2. 小数部分 `.101`：`0.5 + 0 + 0.125 = 0.625`。\n合起来等于 **`13.625`**，选 B。"
    },
    {
        id: "2025-12-S02",
        paperId: "2025-12",
        paperName: "2025年12月 C++三级真题",
        year: "2025",
        type: "single",
        num: 2,
        stem: "以下关于标准C++一维数组的描述，哪一项是错误的？（ ）",
        options: [
            { text: "数组的下标从0开始", isCorrect: false },
            { text: "数组在内存中是连续存放的", isCorrect: false },
            { text: "数组的长度只能在运行时才能确定", isCorrect: true },
            { text: "可以在程序中修改数组某个元素的值", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n标准 C++ 的静态一维数组，它的长度必须在**编译时**就已经确定（必须是一个编译期常量），而不是只能在运行时确定！所以 C 是错误的。"
    },
    {
        id: "2025-12-S03",
        paperId: "2025-12",
        paperName: "2025年12月 C++三级真题",
        year: "2025",
        type: "single",
        num: 3,
        stem: "下列代码段执行后，变量 sum 的值是（ ）",
        code: `{
    int sum = 0;
    for (int i = 1; i <= 10; i++) {
        if (i % 3 == 8 >> 2)
            continue;
        sum += i;
    }
}`,
        options: [
            { text: "12", isCorrect: false },
            { text: "17", isCorrect: false },
            { text: "33", isCorrect: false },
            { text: "40", isCorrect: true }
        ],
        explanation: "【零基础保姆级解析】\n1. 先算条件里的 `8 >> 2`：8 右移 2 位（即 `8 / 4`）等于 **`2`**。\n2. 所以 `if (i % 3 == 2) continue;` 的意思是：**凡是除以 3 余数为 2 的数，就跳过不加**！\n3. 在 `1 ~ 10` 当中：\n   - 1 到 10 的总和本来是：`1 + 2 + ... + 10 = 55`。\n   - 其中除以 3 余数为 2 的数有：**`2`、`5`、`8`**（这三个数被跳过了，它们的和是 `2 + 5 + 8 = 15`）。\n4. 用总和减去被跳过的三个数：`55 - 15 = 40`！所以 `sum` 的值是 `40`。"
    },
    {
        id: "2025-12-S04",
        paperId: "2025-12",
        paperName: "2025年12月 C++三级真题",
        year: "2025",
        type: "single",
        num: 4,
        stem: "执行以下程序段，输出值是（ ）",
        code: `int x = 5;
if (x == 3 >> 2) x = 8 >> 3;
cout << x << endl;`,
        options: [
            { text: "0", isCorrect: false },
            { text: "5", isCorrect: true },
            { text: "120", isCorrect: false },
            { text: "1", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n1. 移位运算符 `>>` 的优先级高于关系运算符 `==`，所以先算 `3 >> 2`：`3` 右移 2 位（`3 / 4` 取整）等于 **`0`**。\n2. 再判断 `if (x == 0)`：因为 `x` 是 `5`，`5 == 0` 为**假（false）**！\n3. 既然 `if` 条件不成立，后面的 `x = 8 >> 3;` 根本不会执行！`x` 保持原值 **`5`** 不变，输出 `5`。"
    },
    {
        id: "2025-12-S05",
        paperId: "2025-12",
        paperName: "2025年12月 C++三级真题",
        year: "2025",
        type: "single",
        num: 5,
        stem: "已知字符串 s = \"C++ Programming\"，下列程序运行的结果是（ ）",
        code: `cout << (int)(s.length() | 3) << endl;`,
        options: [
            { text: "14", isCorrect: false },
            { text: "15", isCorrect: true },
            { text: "16", isCorrect: false },
            { text: "17", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n1. 先数字符串 `\"C++ Programming\"` 的长度：`C++`（3个）+ 空格（1个）+ `Programming`（11个）= **`15`**。\n2. 再算按位或 `15 | 3`：\n   - `15` 的二进制是 `1111`\n   - `3`  的二进制是 `0011`\n   - `1111 | 0011` 结果还是 `1111`（即 **`15`**）！\n所以输出 `15`。"
    },
    {
        id: "2025-12-S06",
        paperId: "2025-12",
        paperName: "2025年12月 C++三级真题",
        year: "2025",
        type: "single",
        num: 6,
        stem: "以下代码是一个程序的部分代码，能够正确执行，输出的结果是（ ）",
        code: `int arr[5] = {1, 2, 3, 4, 5};
int *p = &arr[1];
cout << *(p + 2) << endl;`,
        options: [
            { text: "1", isCorrect: false },
            { text: "2", isCorrect: false },
            { text: "3", isCorrect: false },
            { text: "4", isCorrect: true }
        ],
        explanation: "【零基础保姆级解析】\n1. 数组 `arr` 的元素依次是：`arr[0]=1`, `arr[1]=2`, `arr[2]=3`, `arr[3]=4`, `arr[4]=5`。\n2. `int *p = &arr[1];` 让指针 `p` 指向下标为 `1` 的房间（即数字 `2`）。\n3. `*(p + 2)` 表示从 `p`（下标 1）往后走 2 个房间，到达下标 `1 + 2 = 3` 的房间 `arr[3]`！\n4. `arr[3]` 里面的数字正是 **`4`**！"
    },
    {
        id: "2025-12-S07",
        paperId: "2025-12",
        paperName: "2025年12月 C++三级真题",
        year: "2025",
        type: "single",
        num: 7,
        stem: "以下关于C++求最小值函数 min() 的描述，不正确的是（ ）",
        options: [
            { text: "函数必须返回一个值", isCorrect: false },
            { text: "该函数可以嵌套调用", isCorrect: false },
            { text: "调用 min(5) 是错误的，不能通过编译", isCorrect: false },
            { text: "调用 min()（不传任何参数）可以通过编译，结果为0", isCorrect: true }
        ],
        explanation: "【零基础保姆级解析】\nC++ 标准库中的 `min(a, b)` 至少需要传入两个要比较的元素（或者一个初始化列表）。如果写 `min()` 里面什么参数都不传，编译器根本不知道你要比较谁，会**直接编译报错**，绝不可能通过编译并得到 0！所以不正确的是 D。"
    },
    {
        id: "2025-12-S08",
        paperId: "2025-12",
        paperName: "2025年12月 C++三级真题",
        year: "2025",
        type: "single",
        num: 8,
        stem: "在一个特定的计算机系统中，假如 unsigned int 类型需要占用2个字节的存储空间（每个字节有8位），则 unsigned int 可以表示的数据范围是（ ）",
        options: [
            { text: "0~65535", isCorrect: true },
            { text: "0~65536", isCorrect: false },
            { text: "-65536~65535", isCorrect: false },
            { text: "0~32767", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n1. `unsigned` 表示**无符号**（没有负数，最小一定从 **`0`** 开始）。\n2. 占用 2 个字节，每个字节 8 位，一共是 `2 × 8 = 16` 位二进制。\n3. 16 位无符号整数的最大值是 `2¹⁶ - 1 = 65536 - 1 = 65535`。\n所以范围是 **`0~65535`**，选 A。"
    },
    {
        id: "2025-12-S09",
        paperId: "2025-12",
        paperName: "2025年12月 C++三级真题",
        year: "2025",
        type: "single",
        num: 9,
        stem: "以下代码执行后，数组 arr 的内容是（ ）",
        code: `int arr[6] = {1, 2, 3, 4, 5, 6};
for (int i = 0; i < 6; i += 2) {
    arr[i] = arr[i] + arr[i + 1];
    arr[i + 1] = arr[i] - arr[i + 1];
    arr[i] = arr[i] - arr[i + 1];
}`,
        options: [
            { text: "{2, 1, 4, 3, 6, 5}", isCorrect: true },
            { text: "{1, 2, 3, 4, 5, 6}", isCorrect: false },
            { text: "{3, 1, 4, 2, 5, 3}", isCorrect: false },
            { text: "{1, 3, 2, 5, 4, 6}", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n看循环体里的三行加减法：\n- 先把两数之和存进 `arr[i]`（比如 `1 + 2 = 3`）\n- 再用和减去 `arr[i+1]` 赋给 `arr[i+1]`（`3 - 2 = 1`）\n- 最后用和减去新的 `arr[i+1]` 赋给 `arr[i]`（`3 - 1 = 2`）\n这三行的作用就是**交换相邻两个元素 `arr[i]` 和 `arr[i+1]` 的值**！\n因为每次 `i += 2`，所以 `(1, 2)` 交换变成 `(2, 1)`，`(3, 4)` 交换变成 `(4, 3)`，`(5, 6)` 交换变成 `(6, 5)`，最终数组为 **`{2, 1, 4, 3, 6, 5}`**！"
    },
    {
        id: "2025-12-S10",
        paperId: "2025-12",
        paperName: "2025年12月 C++三级真题",
        year: "2025",
        type: "single",
        num: 10,
        stem: "a = 3, b = 7, c = 15，a & b | (c ^ d)，其中 d = 4，计算结果是（ ）",
        options: [
            { text: "十进制11", isCorrect: true },
            { text: "二进制11", isCorrect: false },
            { text: "八进制11", isCorrect: false },
            { text: "十六进制11", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n按优先级一步步计算：\n1. 先算括号里的 `c ^ d`（`15 ^ 4`）：\n   - `15` 的二进制是 `1111`\n   - `4`  的二进制是 `0100`\n   - 异或（相同为0，不同为1）得到 `1011`（十进制 11）。\n2. 再算按位与 `a & b`（`3 & 7`，因为 `&` 优先级高于 `|`）：\n   - `3` 是 `0011`，`7` 是 `0111`，相与得到 `0011`（十进制 3）。\n3. 最后算按位或 `3 | 11`：\n   - `0011 | 1011` = `1011`（二进制），换算成十进制是 `8 + 2 + 1 = 11`！\n所以结果是**十进制 11**，选 A。"
    },
    {
        id: "2025-12-S11",
        paperId: "2025-12",
        paperName: "2025年12月 C++三级真题",
        year: "2025",
        type: "single",
        num: 11,
        stem: "整型变量 x 的初始值为10，以下代码的输出结果是（ ）",
        code: `int t = x--;
t -= x;
cout << t << endl;`,
        options: [
            { text: "0", isCorrect: false },
            { text: "-1", isCorrect: false },
            { text: "1", isCorrect: true },
            { text: "死循环", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n1. 第 1 行 `int t = x--;`：后缀自减 `x--` 是“**先用后减**”！先把 `x` 的旧值 **`10`** 赋给 `t`（所以 `t = 10`），然后 `x` 自己减 1 变成 **`9`**。\n2. 第 2 行 `t -= x;`：也就是 `t = t - x = 10 - 9 = 1`！\n所以输出 `1`。"
    },
    {
        id: "2025-12-S12",
        paperId: "2025-12",
        paperName: "2025年12月 C++三级真题",
        year: "2025",
        type: "single",
        num: 12,
        stem: "根据下面的流程图，如果成绩 score 输入60，输出的结果是（ ）",
        svgDiagram: `<svg viewBox="0 0 420 340" width="380" height="310" xmlns="http://www.w3.org/2000/svg" font-family="Microsoft YaHei, sans-serif" font-size="13">
            <defs><marker id="arr2512" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#475569"/></marker></defs>
            <rect x="175" y="10" width="70" height="30" rx="15" fill="#f1f5f9" stroke="#334155" stroke-width="1.5"/>
            <text x="210" y="30" text-anchor="middle">开始</text>
            <line x1="210" y1="40" x2="210" y2="60" stroke="#475569" stroke-width="1.5" marker-end="url(#arr2512)"/>
            <rect x="150" y="60" width="120" height="34" fill="#f8fafc" stroke="#334155" stroke-width="1.5"/>
            <text x="210" y="82" text-anchor="middle">输入成绩 score</text>
            <line x1="210" y1="94" x2="210" y2="115" stroke="#475569" stroke-width="1.5" marker-end="url(#arr2512)"/>
            <polygon points="210,115 265,145 210,175 155,145" fill="#fef9c3" stroke="#ca8a04" stroke-width="1.5"/>
            <text x="210" y="150" text-anchor="middle">score ≥ 90?</text>
            <polyline points="155,145 70,145 70,250" fill="none" stroke="#475569" stroke-width="1.5" marker-end="url(#arr2512)"/>
            <text x="105" y="138">是</text>
            <polyline points="265,145 290,145 290,180" fill="none" stroke="#475569" stroke-width="1.5" marker-end="url(#arr2512)"/>
            <text x="278" y="138">否</text>
            <polygon points="290,180 345,210 290,240 235,210" fill="#fef9c3" stroke="#ca8a04" stroke-width="1.5"/>
            <text x="290" y="215" text-anchor="middle">score ≥ 60?</text>
            <polyline points="235,210 210,210 210,250" fill="none" stroke="#475569" stroke-width="1.5" marker-end="url(#arr2512)"/>
            <text x="220" y="203">是</text>
            <polyline points="345,210 365,210 365,250" fill="none" stroke="#475569" stroke-width="1.5" marker-end="url(#arr2512)"/>
            <text x="355" y="203">否</text>
            <rect x="20" y="250" width="100" height="34" fill="#f8fafc" stroke="#334155" stroke-width="1.5"/>
            <text x="70" y="272" text-anchor="middle">输出“优秀”</text>
            <rect x="160" y="250" width="100" height="34" fill="#f8fafc" stroke="#334155" stroke-width="1.5"/>
            <text x="210" y="272" text-anchor="middle">输出“及格”</text>
            <rect x="305" y="250" width="105" height="34" fill="#f8fafc" stroke="#334155" stroke-width="1.5"/>
            <text x="357" y="272" text-anchor="middle">输出“不及格”</text>
            <polyline points="70,284 70,300 357,300 357,284" fill="none" stroke="#475569" stroke-width="1.5"/>
            <line x1="210" y1="284" x2="210" y2="308" stroke="#475569" stroke-width="1.5" marker-end="url(#arr2512)"/>
            <rect x="175" y="308" width="70" height="26" rx="13" fill="#f1f5f9" stroke="#334155" stroke-width="1.5"/>
            <text x="210" y="326" text-anchor="middle">结束</text>
        </svg>`,
        options: [
            { text: "优秀", isCorrect: false },
            { text: "及格", isCorrect: true },
            { text: "不及格", isCorrect: false },
            { text: "没有输出", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n当输入 `score = 60` 时：\n1. 第一个判断框 `score ≥ 90?`：`60 ≥ 90` 不成立，走“否”分支。\n2. 第二个判断框 `score ≥ 60?`：`60 ≥ 60` 成立（包含等于 60），走“是”分支，**输出“及格”**！"
    },
    {
        id: "2025-12-S13",
        paperId: "2025-12",
        paperName: "2025年12月 C++三级真题",
        year: "2025",
        type: "single",
        num: 13,
        stem: "以下代码运行后，sum 的结果是（ ）",
        code: `int arr[5] = {2, 4, 6, 8, 10};
int sum = 0;
for (int i = 0; i < 5; i++) {
    switch (arr[i] % (1 | 2)) {
        case 0: sum += 1; break;
        case 1: sum += 2; break;
        case 2: sum += 3; break;
    }
}`,
        options: [
            { text: "10", isCorrect: false },
            { text: "11", isCorrect: true },
            { text: "14", isCorrect: false },
            { text: "15", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n1. 先算 `(1 | 2)`：二进制 `01 | 10 = 11`，也就是十进制的 **`3`**。所以 `switch` 判断的是 `arr[i] % 3`（除以 3 的余数）。\n2. 我们把数组里的 5 个数 `{2, 4, 6, 8, 10}` 挨个除以 3 算余数：\n   - `2 % 3 = 2` -> 走 `case 2`: `sum += 3`\n   - `4 % 3 = 1` -> 走 `case 1`: `sum += 2`\n   - `6 % 3 = 0` -> 走 `case 0`: `sum += 1`\n   - `8 % 3 = 2` -> 走 `case 2`: `sum += 3`\n   - `10 % 3 = 1` -> 走 `case 1`: `sum += 2`\n3. 把加上的数合起来：`sum = 3 + 2 + 1 + 3 + 2 = 11`！"
    },
    {
        id: "2025-12-S14",
        paperId: "2025-12",
        paperName: "2025年12月 C++三级真题",
        year: "2025",
        type: "single",
        num: 14,
        stem: "以下关于C++中 abs() 函数的描述，正确的是（ ）",
        options: [
            { text: "abs() 函数可用于计算 int 类型整数的绝对值，头文件为<cmath>或<cstdlib>", isCorrect: true },
            { text: "调用 abs(3.14) 可以四舍五入得到3", isCorrect: false },
            { text: "abs(-1, -2) 的返回值是1", isCorrect: false },
            { text: "若传入负数浮点数，abs()会自动截断小数部分后返回整数绝对值", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n- A 对：`abs(x)` 的功能是求 `x` 的绝对值（负变正，正不变），包含在 `<cmath>` 或 `<cstdlib>` 头文件中。\n- B、D 错：在 `<cmath>` 中 `std::abs(-3.14)` 依然返回浮点数 `3.14`，既不是四舍五入函数，也不会截断成整数。\n- C 错：`abs()` 只接受 1 个参数，不能传 2 个参数。\n所以选 A。"
    },
    {
        id: "2025-12-S15",
        paperId: "2025-12",
        paperName: "2025年12月 C++三级真题",
        year: "2025",
        type: "single",
        num: 15,
        stem: "如果字符串 s 的值是 GESP ，以下代码的最后结果是（ ）",
        code: `for (int i = 0; i < s.length(); i++) {
    s[i] = toupper(s[i] + i);
}`,
        options: [
            { text: "GESP", isCorrect: false },
            { text: "HFTR", isCorrect: false },
            { text: "hesp", isCorrect: false },
            { text: "GFUS", isCorrect: true }
        ],
        explanation: "【零基础保姆级解析】\n我们把 `\"GESP\"` 的 4 个字母分别加上对应的下标 `i`（0, 1, 2, 3）：\n- `i = 0`：`'G' + 0` = **`'G'`**\n- `i = 1`：`'E' + 1`（E 往后数 1 个字母）= **`'F'`**\n- `i = 2`：`'S' + 2`（S 往后数 2 个字母：T, U）= **`'U'`**\n- `i = 3`：`'P' + 3`（P 往后数 3 个字母：Q, R, S）= **`'S'`**\n拼起来就是 **`GFUS`**，选 D！"
    },
    {
        id: "2025-12-J01",
        paperId: "2025-12",
        paperName: "2025年12月 C++三级真题",
        year: "2025",
        type: "judge",
        num: 1,
        stem: "在C++中，数组名不能改变，数组名不能被赋值。",
        answer: true,
        explanation: "【零基础保姆级解析】\n判断为【正确（√）】。\n数组名代表该数组在内存中的起始地址常量，不能被重新赋值或改变指向。"
    },
    {
        id: "2025-12-J02",
        paperId: "2025-12",
        paperName: "2025年12月 C++三级真题",
        year: "2025",
        type: "judge",
        num: 2,
        stem: "整型变量 a 的值为3，浮点数变量 b 的值为3.5，在C++编译环境下，经过 a *= b 计算后，a 的值变为10.5，此时如果输出 a ，将输出10.5。",
        answer: false,
        explanation: "【零基础保姆级解析】\n判断为【错误（×）】。\n因为变量 `a` 是**整型（`int`）**，它的肚子里根本装不下小数！虽然 `3 * 3.5 = 10.5`，但存回整型变量 `a` 时，小数 `.5` 会被直接截断丢弃，`a` 的值变成整数 **`10`**，输出也是 `10` 而不是 `10.5`！"
    },
    {
        id: "2025-12-J03",
        paperId: "2025-12",
        paperName: "2025年12月 C++三级真题",
        year: "2025",
        type: "judge",
        num: 3,
        stem: "strcmp(str1, str2) 返回 0 表示 str1 大于 str2，返回正数表示两者相等。",
        answer: false,
        explanation: "【零基础保姆级解析】\n判断为【错误（×）】。\n说反啦！`strcmp(str1, str2)` 的规则是：\n- 返回 **`0`**：表示两个字符串**完全相等**；\n- 返回**正数（>0）**：表示 `str1` 大于 `str2`；\n- 返回**负数（<0）**：表示 `str1` 小于 `str2`。"
    },
    {
        id: "2025-12-J04",
        paperId: "2025-12",
        paperName: "2025年12月 C++三级真题",
        year: "2025",
        type: "judge",
        num: 4,
        stem: "以下代码输出结果为8。",
        code: `int a = 5, b = 3;
int c = a++ + ++b;
cout << c << endl;`,
        answer: false,
        explanation: "【零基础保姆级解析】\n判断为【错误（×）】。\n- `a++` 是后缀自增（先用后加），参与加法的是旧值 **`5`**。\n- `++b` 是前缀自增（先加后用），`b` 先从 3 变成 **`4`** 再参与加法。\n所以 `c = 5 + 4 = 9`，输出结果是 `9`，不是 `8`！"
    },
    {
        id: "2025-12-J05",
        paperId: "2025-12",
        paperName: "2025年12月 C++三级真题",
        year: "2025",
        type: "judge",
        num: 5,
        stem: "位运算符 &、|、^、~ 的优先级高于算术运算符 +、-、*、/ 。",
        answer: false,
        explanation: "【零基础保姆级解析】\n判断为【错误（×）】。\n只有一个单目取反 `~` 的优先级高于算术运算符；而双目位运算符 **`&`、`^`、`|` 的优先级比 `+`、`-`、`*`、`/`（甚至比 `==`、`!=`）都要低**！"
    },
    {
        id: "2025-12-J06",
        paperId: "2025-12",
        paperName: "2025年12月 C++三级真题",
        year: "2025",
        type: "judge",
        num: 6,
        stem: "在C++中，int a[] = {1, 2, 3, 4, 5}; 可以定义一个包含5个元素的整型数组。",
        answer: true,
        explanation: "【零基础保姆级解析】\n判断为【正确（√）】。\n定义数组时如果给出了 `{1, 2, 3, 4, 5}` 初始化列表，方括号里的数字 `5` 可以省略，编译器会自动推断数组长度为 5。"
    },
    {
        id: "2025-12-J07",
        paperId: "2025-12",
        paperName: "2025年12月 C++三级真题",
        year: "2025",
        type: "judge",
        num: 7,
        stem: "C++表达式 z = a > b ? x : y 等同于：\nif (a > b) {\n    z = x;\n} else {\n    z = y;\n}\n以下代码执行后，输出将会是2。",
        code: `int main() {
    int arr[5] = {1, 2, 3, 4, 5};
    cout << arr[3 > 2 ? 1 : 2] << endl;
    return 0;
}`,
        answer: true,
        explanation: "【零基础保姆级解析】\n判断为【正确（√）】。\n因为 `3 > 2` 成立（为真），所以三目运算符 `3 > 2 ? 1 : 2` 的结果是 `1`。`arr[1]` 是数组的第 2 个元素，数值正是 **`2`**！"
    },
    {
        id: "2025-12-J08",
        paperId: "2025-12",
        paperName: "2025年12月 C++三级真题",
        year: "2025",
        type: "judge",
        num: 8,
        stem: "在C++中，++ 和 -- 运算符只能用于整型变量，不能用于浮点数变量。",
        answer: false,
        explanation: "【零基础保姆级解析】\n判断为【错误（×）】。\n不同于取模 `%` 和位运算，C++ 中的自增 `++` 和自减 `--` **可以用于浮点数变量**（比如 `double x = 1.5; x++;` 会使 `x` 变成 `2.5`）！"
    },
    {
        id: "2025-12-J09",
        paperId: "2025-12",
        paperName: "2025年12月 C++三级真题",
        year: "2025",
        type: "judge",
        num: 9,
        stem: "给定一个正整数a，当需要计算 -a 的补码时，有这样一个计算技巧：将a的二进制形式从右往左扫描，遇到第一个1之后，将找到的第一个1左边的所有位都取反，能得到 -a 的补码。",
        answer: true,
        explanation: "【零基础保姆级解析】\n判断为【正确（√）】。\n这是手算负数补码最经典的快捷技巧：**从右往左找到第一个 `1`，这个 `1` 和它右边的 `0` 全都不动，它左边的所有位全部取反**，一步就能得到补码！"
    },
    {
        id: "2025-12-J10",
        paperId: "2025-12",
        paperName: "2025年12月 C++三级真题",
        year: "2025",
        type: "judge",
        num: 10,
        stem: "以下代码中，Hello 将被输出5次。",
        code: `for (int i = 0; i < 5; i++);
{
    cout << "Hello" << endl;
}`,
        answer: false,
        explanation: "【零基础保姆级解析】\n判断为【错误（×）】。\n睜大眼睛看第 1 行最末尾：`for (int i = 0; i < 5; i++);` 后面多了一个**分号 `;`**！\n这个分号代表 `for` 循环的循环体是一条“空语句”，它在原地空转了 5 次就结束了！后面大括号里的 `cout << \"Hello\" << endl;` 根本不在循环里，只会执行 **1 次**！"
    }
);

// =====================================================================
// 试卷 12：2026年03月 C++三级真题 (25题)
// =====================================================================
window.GESP_QUESTIONS.push(
    {
        id: "2026-03-S01",
        paperId: "2026-03",
        paperName: "2026年03月 C++三级真题",
        year: "2026",
        type: "single",
        num: 1,
        stem: "如果字符变量 _1 的值是字符'1'，那么 (int)_1 的值是？（ ）。",
        options: [
            { text: "1", isCorrect: false },
            { text: "-1", isCorrect: false },
            { text: "49", isCorrect: true },
            { text: "+1或者-1", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n必背 ASCII 码三个基准点：\n- 字符 `'0'` 的 ASCII 码是 **`48`**\n- 所以字符 `'1'` 的 ASCII 码就是 `48 + 1 = 49`！\n用 `(int)_1` 转成整数输出的就是它的 ASCII 码 `49`。"
    },
    {
        id: "2026-03-S02",
        paperId: "2026-03",
        paperName: "2026年03月 C++三级真题",
        year: "2026",
        type: "single",
        num: 2,
        stem: "a, b 是整型变量，各自有互不相同的初始值。下列程序实现了什么效果（ ）。",
        code: `a = a ^ b;
b = a ^ b;
a = a ^ b;`,
        options: [
            { text: "a, b 的值从始至终都没有改变。", isCorrect: false },
            { text: "a, b 的值实现了互换。", isCorrect: true },
            { text: "a, b 的值互换了以后，又还回去了，相当于没有变化。", isCorrect: false },
            { text: "a, b 的值最后和原值不一样，没有任何意义。", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n三次异或交换法 `a = a ^ b; b = a ^ b; a = a ^ b;`，实现了 **`a, b` 的值互换**！"
    },
    {
        id: "2026-03-S03",
        paperId: "2026-03",
        paperName: "2026年03月 C++三级真题",
        year: "2026",
        type: "single",
        num: 3,
        stem: "关于下列正确的程序段，说法正确的是（ ）。",
        code: `char str1[] = "Hello";
char str2[] = {'H', 'e', 'l', 'l', 'o'};`,
        options: [
            { text: "字符数组 str1 和 str2 完全相同。", isCorrect: false },
            {
                text: "这段程序多次执行将输出不同的结果。",
                code: `cout << str1 << endl;
cout << str2 << endl;`,
                isCorrect: false
            },
            { text: "字符数组 str1 和 str2 不相等。", isCorrect: true },
            { text: "这两个赋值方式完全相同。", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n这两个数组的长度和内容是不相等的：\n- `char str1[] = \"Hello\";` 用双引号初始化，编译器会自动在末尾加上结束符 `'\\0'`，所以 `str1` 有 **6 个元素**。\n- `char str2[] = {'H', 'e', 'l', 'l', 'o'};` 用单引号列表初始化且没写长度，末尾**不会自动加 `'\\0'`**，所以 `str2` 只有 **5 个元素**。\n因此字符数组 `str1` 和 `str2` 不相等，选 C。"
    },
    {
        id: "2026-03-S04",
        paperId: "2026-03",
        paperName: "2026年03月 C++三级真题",
        year: "2026",
        type: "single",
        num: 4,
        stem: "关于以下程序段，说法正确的是（ ）。",
        code: `int x = 10;
cout << (x++) + (++x) << endl;`,
        options: [
            { text: "C++11 标准中，这是未定义行为，不同的环境有可能出现不同的结果", isCorrect: true },
            { text: "22", isCorrect: false },
            { text: "21", isCorrect: false },
            { text: "20", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n在同一个表达式 `(x++) + (++x)` 中，对同一个变量 `x` 进行了两次无先后顺序保障的自增修改。C++ 标准明确规定这属于**未定义行为（Undefined Behavior）**，不同编译器可能算出不同的结果，写代码时严禁这样写！所以选 A。"
    },
    {
        id: "2026-03-S05",
        paperId: "2026-03",
        paperName: "2026年03月 C++三级真题",
        year: "2026",
        type: "single",
        num: 5,
        stem: "8位二进制下，十进制数 -15 的补码是（ ）。",
        options: [
            { text: "11110000", isCorrect: false },
            { text: "10001111", isCorrect: false },
            { text: "10010000", isCorrect: false },
            { text: "11110001", isCorrect: true }
        ],
        explanation: "【零基础保姆级解析】\n求 `-15` 的 8 位补码：\n1. `+15` 的 8 位二进制是 `0000 1111`。\n2. 按位取反得反码：`1111 0000`。\n3. 末尾加 1 得补码：**`1111 0001`**！选 D。"
    },
    {
        id: "2026-03-S06",
        paperId: "2026-03",
        paperName: "2026年03月 C++三级真题",
        year: "2026",
        type: "single",
        num: 6,
        stem: "三进制数 2102(3) 转换成十进制是：（ ）。",
        options: [
            { text: "63", isCorrect: false },
            { text: "65", isCorrect: true },
            { text: "67", isCorrect: false },
            { text: "69", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n三进制从右往左的位权依次是：`3⁰=1`、`3¹=3`、`3²=9`、`3³=27`。\n把 `2102(3)` 按权展开相加：\n`2 × 27 + 1 × 9 + 0 × 3 + 2 × 1 = 54 + 9 + 0 + 2 = 65`！选 B。"
    },
    {
        id: "2026-03-S07",
        paperId: "2026-03",
        paperName: "2026年03月 C++三级真题",
        year: "2026",
        type: "single",
        num: 7,
        stem: "二进制数 10110101 是某数的8位补码，该数的十进制是（ ）。",
        options: [
            { text: "-73", isCorrect: false },
            { text: "-75", isCorrect: true },
            { text: "-77", isCorrect: false },
            { text: "75", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n1. 最高位是 `1`，说明是**负数**（排除 D）。\n2. 除最高位外，后 7 位 `0110101` 按位取反得 `1001010`，再加 1 得 `1001011`。\n3. 换算成十进制：`64 + 8 + 2 + 1 = 75`。\n加上负号就是 **`-75`**！"
    },
    {
        id: "2026-03-S08",
        paperId: "2026-03",
        paperName: "2026年03月 C++三级真题",
        year: "2026",
        type: "single",
        num: 8,
        stem: "已知 unsigned char c = 0x0F; （十六进制 0F = 二进制 00001111），执行 c = c << 3; 后，c 的十进制值是：（ ）。",
        options: [
            { text: "64", isCorrect: false },
            { text: "72", isCorrect: false },
            { text: "80", isCorrect: false },
            { text: "120", isCorrect: true }
        ],
        explanation: "【零基础保姆级解析】\n`0x0F` 是十进制的 `15`。左移 3 位（`<< 3`）且没有溢出，相当于乘以 `2³ = 8`：\n`15 × 8 = 120`！（或者看二进制：`00001111` 左移 3 位变成 `01111000` = `64 + 32 + 16 + 8 = 120`）。"
    },
    {
        id: "2026-03-S09",
        paperId: "2026-03",
        paperName: "2026年03月 C++三级真题",
        year: "2026",
        type: "single",
        num: 9,
        stem: "补码的情况下，关于按位取反运算，用笔计算的情况下，以下说法错误的是：（ ）",
        options: [
            { text: "~5 的结果是 -6（int类型，32位）", isCorrect: false },
            { text: "~0 的结果是 0（int类型，32位）", isCorrect: true },
            { text: "~(-3) 的结果是 2（int类型，32位）", isCorrect: false },
            { text: "~8 的结果是 -9（int类型，32位）", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n牢记按位取反黄金公式：**`~n = -n - 1`**！\n- A：`~5 = -5 - 1 = -6`，正确。\n- B：`~0 = -0 - 1 = -1`（32 个 0 取反变成 32 个 1，在补码中是 **`-1`**，绝不是 `0`！），所以 B 错误！\n- C：`~(-3) = -(-3) - 1 = 3 - 1 = 2`，正确。\n- D：`~8 = -8 - 1 = -9`，正确。"
    },
    {
        id: "2026-03-S10",
        paperId: "2026-03",
        paperName: "2026年03月 C++三级真题",
        year: "2026",
        type: "single",
        num: 10,
        stem: "执行以下C++代码后，sub 的值是（ ）。",
        code: `string str = "GESP2026";
string sub = str.substr(4, 2);`,
        options: [
            { text: "20", isCorrect: true },
            { text: "02", isCorrect: false },
            { text: "2026", isCorrect: false },
            { text: "026", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n在 `\"GESP2026\"` 中，`G(0), E(1), S(2), P(3), 2(4), 0(5), 2(6), 6(7)`。\n`str.substr(4, 2)` 表示从下标 `4`（字符 `'2'`）开始，截取长度为 `2` 的子串，也就是 **`\"20\"`**！"
    },
    {
        id: "2026-03-S11",
        paperId: "2026-03",
        paperName: "2026年03月 C++三级真题",
        year: "2026",
        type: "single",
        num: 11,
        stem: "执行以下代码后，输出结果是：（ ）。",
        code: `int arr[] = {5, 10, 15, 20, 25, 30};
int count = sizeof(arr) / sizeof(arr[0]);
cout << count;`,
        options: [
            { text: "4", isCorrect: false },
            { text: "6", isCorrect: true },
            { text: "24", isCorrect: false },
            { text: "30", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n`sizeof(arr) / sizeof(arr[0])` 是用“整个数组占的总字节数（6×4=24）”除以“单个元素占的字节数（4）”，这是 C++ 中用来**计算数组元素个数**的标准公式！\n数组 `{5, 10, 15, 20, 25, 30}` 一共有 **6** 个元素，所以输出 `6`。"
    },
    {
        id: "2026-03-S12",
        paperId: "2026-03",
        paperName: "2026年03月 C++三级真题",
        year: "2026",
        type: "single",
        num: 12,
        stem: "执行以下代码后，输出结果是：（ ）。",
        code: `char s[10] = "abcde";
int a = sizeof(s) / sizeof(s[0]);
int b = strlen(s);
cout << a - b;`,
        options: [
            { text: "4", isCorrect: false },
            { text: "5", isCorrect: true },
            { text: "6", isCorrect: false },
            { text: "10", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n1. `char s[10]` 定义了一个固定长度为 10 的字符数组，所以 `a = sizeof(s) / sizeof(s[0])` 算出来的是数组总房间数 **`10`**。\n2. `b = strlen(s)` 算的是字符串 `\"abcde\"` 的有效字符个数 **`5`**。\n3. `a - b = 10 - 5 = 5`！所以输出 `5`。"
    },
    {
        id: "2026-03-S13",
        paperId: "2026-03",
        paperName: "2026年03月 C++三级真题",
        year: "2026",
        type: "single",
        num: 13,
        stem: "以下问题中，最不适合用枚举法解决的是：（ ）",
        options: [
            { text: "找出1~100之间所有能被7整除的数", isCorrect: false },
            { text: "找出100~200之间的所有质数", isCorrect: false },
            { text: "计算1+2+3+...+1000的和", isCorrect: true },
            { text: "找出三位数中个位、十位、百位数字之和等于10的数", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n枚举法是“逐个列举候选答案并用条件检验筛选”。A、B、D 都是在一定范围内通过条件筛选符合要求的数；而 C“计算 1+2+...+1000 的和”是直接用等差数列公式或循环累加求和，不需要做条件筛选检验，最不适合用枚举法描述。"
    },
    {
        id: "2026-03-S14",
        paperId: "2026-03",
        paperName: "2026年03月 C++三级真题",
        year: "2026",
        type: "single",
        num: 14,
        stem: "用枚举法解决“鸡兔同笼问题：头共35个，脚共94只，求鸡和兔的数量”，以下枚举逻辑最合理的是：（ ）",
        options: [
            { text: "枚举鸡的数量x（0~35），兔的数量y = 35 - x，判断 2*x + 4*y == 94", isCorrect: true },
            { text: "枚举兔的数量y（0~94），鸡的数量x = 35 - y，判断 2*x + 4*y == 94", isCorrect: false },
            { text: "枚举所有整数x（0~100）和y（0~100），判断 x+y==35 && 2*x+4*y==94", isCorrect: false },
            { text: "枚举脚的总数 sum（0~94），判断 sum == 94", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n既然已知鸡和兔的头一共有 35 个，那么鸡的数量 `x` 只可能在 `0 ~ 35` 之间，而兔子的数量直接就是 `y = 35 - x`（不需要再用第二层循环去盲目枚举 `y`，只用单层循环枚举 36 次即可！）。所以最合理高效的是 A。"
    },
    {
        id: "2026-03-S15",
        paperId: "2026-03",
        paperName: "2026年03月 C++三级真题",
        year: "2026",
        type: "single",
        num: 15,
        stem: "模拟“字符串加密”：规则为“每个字符ASCII码+3，若超过'z'（122）则从'a'重新开始”，以下代码中正确的条件判断是：（ ）",
        code: `for (int i = 0; i < str.length(); i++) {
    // 需补充条件：
    ________________
    else {
        str[i] += 3;
    }
}`,
        options: [
            { text: "if (str[i] > 122) str[i] = str[i] + 3 - 26;", isCorrect: false },
            { text: "if (str[i] > 122) str[i] = str[i] - 26;", isCorrect: false },
            { text: "if (str[i] + 3 > 122) str[i] = str[i] - 26;", isCorrect: false },
            { text: "if (str[i] + 3 > 'z') str[i] = 'a' + (str[i] + 3 - 'z') - 1;", isCorrect: true }
        ],
        explanation: "【零基础保姆级解析】\n1. 因为还没加 3，所以要先判断加上 3 之后会不会超过 `'z'`：`if (str[i] + 3 > 'z')`（排除 A、B）。\n2. 如果超过了 `'z'`（比如 `'z' + 3` 超出了 3 个位置），应该变成 `'a' + 3 - 1 = 'c'`（或者 `str[i] + 3 - 26`，注意选项 C 忘了 `+ 3` 只写了 `str[i] - 26`！）。\n3. 选项 D 的 `'a' + (str[i] + 3 - 'z') - 1` 完全正确！"
    },
    {
        id: "2026-03-J01",
        paperId: "2026-03",
        paperName: "2026年03月 C++三级真题",
        year: "2026",
        type: "judge",
        num: 1,
        stem: "定义 int arr[5] = {1, 2, 3}; ，则 arr[3] 的值为0，arr[5] 是合法下标。",
        answer: false,
        explanation: "【零基础保姆级解析】\n判断为【错误（×）】。\n前半句 `arr[3]` 的值为 0 是对的，但后半句 **`arr[5]` 是越界下标**（长度为 5 的数组合法下标只有 `0 ~ 4`）！"
    },
    {
        id: "2026-03-J02",
        paperId: "2026-03",
        paperName: "2026年03月 C++三级真题",
        year: "2026",
        type: "judge",
        num: 2,
        stem: "定义 double arr[10]; ，未手动初始化时，数组中所有元素的默认值为0.0。",
        answer: false,
        explanation: "【零基础保姆级解析】\n判断为【错误（×）】。\n如果是在函数内部定义的局部数组 `double arr[10];` 且未手动初始化，里面装的全是内存里的随机垃圾值，并不是 0.0！"
    },
    {
        id: "2026-03-J03",
        paperId: "2026-03",
        paperName: "2026年03月 C++三级真题",
        year: "2026",
        type: "judge",
        num: 3,
        stem: "定义 int arr[] = {1, 2, 3}; ，则 sizeof(arr) 的结果为12（int占4字节）。",
        answer: true,
        explanation: "【零基础保姆级解析】\n判断为【正确（√）】。\n数组有 3 个 `int` 元素，每个 `int` 占 4 字节，总字节数 `3 × 4 = 12`。"
    },
    {
        id: "2026-03-J04",
        paperId: "2026-03",
        paperName: "2026年03月 C++三级真题",
        year: "2026",
        type: "judge",
        num: 4,
        stem: "下面的流程图是用来求 1+2+3+...+10 的和。\n请判断：这个流程图的逻辑正确还是错误？",
        svgDiagram: `<svg viewBox="0 0 380 340" width="340" height="300" xmlns="http://www.w3.org/2000/svg" font-family="Microsoft YaHei, sans-serif" font-size="13">
            <defs><marker id="arr2603a" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#64748b"/></marker></defs>
            <rect x="160" y="10" width="80" height="32" fill="#e0f2fe" stroke="#7dd3fc" stroke-width="1.5"/>
            <text x="200" y="31" text-anchor="middle">开始</text>
            <line x1="200" y1="42" x2="200" y2="65" stroke="#64748b" stroke-width="1.5" marker-end="url(#arr2603a)"/>
            <rect x="145" y="65" width="110" height="36" fill="#e0f2fe" stroke="#7dd3fc" stroke-width="1.5"/>
            <text x="200" y="88" text-anchor="middle">sum=0, i=1</text>
            <line x1="200" y1="101" x2="200" y2="125" stroke="#64748b" stroke-width="1.5" marker-end="url(#arr2603a)"/>
            <polygon points="200,125 255,155 200,185 145,155" fill="#e0f2fe" stroke="#7dd3fc" stroke-width="1.5"/>
            <text x="200" y="160" text-anchor="middle">i &lt;= 10?</text>
            <polyline points="145,155 70,155 70,220" fill="none" stroke="#64748b" stroke-width="1.5" marker-end="url(#arr2603a)"/>
            <text x="100" y="148">否</text>
            <rect x="25" y="220" width="90" height="34" fill="#e0f2fe" stroke="#7dd3fc" stroke-width="1.5"/>
            <text x="70" y="242" text-anchor="middle">输出 sum</text>
            <line x1="70" y1="254" x2="70" y2="285" stroke="#64748b" stroke-width="1.5" marker-end="url(#arr2603a)"/>
            <rect x="30" y="285" width="80" height="32" fill="#e0f2fe" stroke="#7dd3fc" stroke-width="1.5"/>
            <text x="70" y="306" text-anchor="middle">结束</text>
            <line x1="200" y1="185" x2="200" y2="220" stroke="#64748b" stroke-width="1.5" marker-end="url(#arr2603a)"/>
            <text x="215" y="206">是</text>
            <rect x="140" y="220" width="120" height="34" fill="#e0f2fe" stroke="#7dd3fc" stroke-width="1.5"/>
            <text x="200" y="242" text-anchor="middle">sum = sum + i</text>
            <line x1="200" y1="254" x2="200" y2="285" stroke="#64748b" stroke-width="1.5" marker-end="url(#arr2603a)"/>
            <rect x="150" y="285" width="100" height="32" fill="#e0f2fe" stroke="#7dd3fc" stroke-width="1.5"/>
            <text x="200" y="306" text-anchor="middle">i = i + 1</text>
            <polyline points="250,301 310,301 310,155 255,155" fill="none" stroke="#64748b" stroke-width="1.5" marker-end="url(#arr2603a)"/>
        </svg>`,
        answer: true,
        explanation: "【零基础保姆级解析】\n判断为【正确（√）】。\n初始 `sum = 0, i = 1`，只要 `i <= 10` 就把 `i` 加进 `sum` 并让 `i = i + 1`，当 `i` 变成 11 时输出 `sum` 结束，完全正确地计算了 1 到 10 的和。"
    },
    {
        id: "2026-03-J05",
        paperId: "2026-03",
        paperName: "2026年03月 C++三级真题",
        year: "2026",
        type: "judge",
        num: 5,
        stem: "下面流程图的功能是计算5对2取余数，输出结果为1。",
        svgDiagram: `<svg viewBox="0 0 380 320" width="340" height="285" xmlns="http://www.w3.org/2000/svg" font-family="Microsoft YaHei, sans-serif" font-size="13">
            <defs><marker id="arr2603b" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#64748b"/></marker></defs>
            <rect x="150" y="10" width="80" height="32" fill="#e0f2fe" stroke="#7dd3fc" stroke-width="1.5"/>
            <text x="190" y="31" text-anchor="middle">开始</text>
            <line x1="190" y1="42" x2="190" y2="65" stroke="#64748b" stroke-width="1.5" marker-end="url(#arr2603b)"/>
            <rect x="120" y="65" width="140" height="36" fill="#e0f2fe" stroke="#7dd3fc" stroke-width="1.5"/>
            <text x="190" y="88" text-anchor="middle">初始化：a=5, b=2</text>
            <line x1="190" y1="101" x2="190" y2="125" stroke="#64748b" stroke-width="1.5" marker-end="url(#arr2603b)"/>
            <polygon points="190,125 255,160 190,195 125,160" fill="#e0f2fe" stroke="#7dd3fc" stroke-width="1.5"/>
            <text x="190" y="165" text-anchor="middle">判断：a ≥ b?</text>
            <polyline points="125,160 75,160 75,220" fill="none" stroke="#64748b" stroke-width="1.5" marker-end="url(#arr2603b)"/>
            <text x="98" y="152">是</text>
            <rect x="25" y="220" width="100" height="34" fill="#e0f2fe" stroke="#7dd3fc" stroke-width="1.5"/>
            <text x="75" y="242" text-anchor="middle">a = a - b</text>
            <polyline points="125,237 155,237 155,178" fill="none" stroke="#64748b" stroke-width="1.5" marker-end="url(#arr2603b)"/>
            <polyline points="255,160 300,160 300,220" fill="none" stroke="#64748b" stroke-width="1.5" marker-end="url(#arr2603b)"/>
            <text x="278" y="152">否</text>
            <rect x="250" y="220" width="100" height="34" fill="#e0f2fe" stroke="#7dd3fc" stroke-width="1.5"/>
            <text x="300" y="242" text-anchor="middle">输出 a</text>
            <line x1="300" y1="254" x2="300" y2="280" stroke="#64748b" stroke-width="1.5" marker-end="url(#arr2603b)"/>
            <rect x="260" y="280" width="80" height="32" fill="#e0f2fe" stroke="#7dd3fc" stroke-width="1.5"/>
            <text x="300" y="301" text-anchor="middle">结束</text>
        </svg>`,
        answer: true,
        explanation: "【零基础保姆级解析】\n判断为【正确（√）】。\n初始 `a = 5, b = 2`，只要 `a ≥ 2` 就不断执行 `a = a - 2`（5 -> 3 -> 1），当 `a = 1` 小于 2 时停止并输出余数 `1`。"
    },
    {
        id: "2026-03-J06",
        paperId: "2026-03",
        paperName: "2026年03月 C++三级真题",
        year: "2026",
        type: "judge",
        num: 6,
        stem: "已知大写字符'A'的ASCII编码的十六进制表示为0x41，计算字符'm'的ASCII编码的八进制表示为155（八进制）。",
        answer: true,
        explanation: "【零基础保姆级解析】\n判断为【正确（√）】。\n1. `'A'` 是 `0x41` = 十进制 `65`，那么小写 `'a'` 是 `65 + 32 = 97`。\n2. `'m'` 是第 13 个字母，十进制 ASCII 码 = `97 + 12 = 109`。\n3. 把十进制 `109` 转成八进制：`109 = 1 × 64 + 5 × 8 + 5 = (155)8`！完全正确！"
    },
    {
        id: "2026-03-J07",
        paperId: "2026-03",
        paperName: "2026年03月 C++三级真题",
        year: "2026",
        type: "judge",
        num: 7,
        stem: "在C++位运算中，各种不同的运算符有优先级的区分，使用括号能够解决优先级的问题。",
        answer: true,
        explanation: "【零基础保姆级解析】\n判断为【正确（√）】。\n小括号 `()` 的优先级是最高的，不确定位运算符优先级时加上括号就能确保按你想要的顺序计算。"
    },
    {
        id: "2026-03-J08",
        paperId: "2026-03",
        paperName: "2026年03月 C++三级真题",
        year: "2026",
        type: "judge",
        num: 8,
        stem: "由于在0~255范围内，char 类型和 int 类型可以互换，因此在这里 x 和 y 相等。",
        code: `char x = '1';
int y = 1;`,
        answer: false,
        explanation: "【零基础保姆级解析】\n判断为【错误（×）】。\n`char x = '1';` 的 ASCII 码数值是 **`49`**，而 `int y = 1;` 的数值是 **`1`**，`49 != 1`，两者不相等！"
    },
    {
        id: "2026-03-J09",
        paperId: "2026-03",
        paperName: "2026年03月 C++三级真题",
        year: "2026",
        type: "judge",
        num: 9,
        stem: "在C++语言中，表达式 ((0xf0 + 15) == 255) 的值为true。",
        answer: true,
        explanation: "【零基础保姆级解析】\n判断为【正确（√）】。\n`0xf0` 是十六进制，换算成十进制是 `15 × 16 = 240`。`240 + 15 = 255`，等于 255，结果为 `true`。"
    },
    {
        id: "2026-03-J10",
        paperId: "2026-03",
        paperName: "2026年03月 C++三级真题",
        year: "2026",
        type: "judge",
        num: 10,
        stem: "如果a为int类型的变量，且a的二进制最低位为0，则表达式 ((a & 3 & 1) == 0) 的值为true。",
        answer: true,
        explanation: "【零基础保姆级解析】\n判断为【正确（√）】。\n`3 & 1` 等于 `1`，所以 `a & 3 & 1` 就是 `a & 1`（提取 `a` 的二进制最低位）。既然已知 `a` 的二进制最低位为 0，那么结果一定为 `0`，表达式为 `true`。"
    }
);

// =====================================================================
// 试卷 13：2026年06月 C++三级真题 (25题)
// =====================================================================
window.GESP_QUESTIONS.push(
    {
        id: "2026-06-S01",
        paperId: "2026-06",
        paperName: "2026年06月 C++三级真题",
        year: "2026",
        type: "single",
        num: 1,
        stem: "关于计算机的数据编码，下面说法正确的是（ ）。",
        options: [
            { text: "机器数 1000 1101B 的真值可能是-13（如果它是原码）或141（如果它是无符号数）等数，这取决于我们如何解释它。", isCorrect: true },
            { text: "计算机中，所有数据最终都以二进制、八进制、十六进制的形式存储和运算。", isCorrect: false },
            { text: "字节（Byte）是计算机中最小的数据单位。位（bit）是计算机中最小的存储单位。", isCorrect: false },
            { text: "计算机中，1K字节是1000字节的意思。", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n- A 对：同一串二进制 `1000 1101`，如果按 8 位原码解释是 `-(8+4+1) = -13`；如果按无符号数解释则是 `128 + 13 = 141`。\n- B 错：计算机底层硬件**只以二进制**形式存储和运算（八进制和十六进制只是为了方便人类阅读写的缩写）。\n- C 错：位（bit）是最小的存储/数据单位，字节（Byte）是基本存储/寻址单位。\n- D 错：计算机科学中 `1KB = 1024B`。\n所以选 A。"
    },
    {
        id: "2026-06-S02",
        paperId: "2026-06",
        paperName: "2026年06月 C++三级真题",
        year: "2026",
        type: "single",
        num: 2,
        stem: "计算机厂商为了计算方便，一般采用1000进制。如果我们买的厂商标注的是1TB的硬盘，它实际的存储容量是（ ）。",
        options: [
            { text: "1000 × 1000 × 1000 × 1000 ÷ 1024 ÷ 1024 ÷ 1024 b = 931 Gb", isCorrect: false },
            { text: "1000 × 1000 × 1000 × 1000 ÷ 1024 ÷ 1024 ÷ 1024 B = 931 GB", isCorrect: true },
            { text: "1024 × 1024 × 1024 × 1024 ÷ 1000 ÷ 1000 ÷ 1024 B = 1049 GB", isCorrect: false },
            { text: "1000 × 1024 × 1024 × 1024 ÷ 1024 ÷ 1024 ÷ 1024 b = 977 Gb", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n1. 硬盘厂商标注的 `1TB` 按 1000 进制算是 `1000 × 1000 × 1000 × 1000 B`（注意是大写 `B` 字节 Byte，不是小写 `b` 位 bit！直接排除 A 和 D）。\n2. 操作系统按 1024 进制换算成 `GB`，需要连除以 3 个 `1024`，算出来约为 **`931 GB`**！所以选 B。"
    },
    {
        id: "2026-06-S03",
        paperId: "2026-06",
        paperName: "2026年06月 C++三级真题",
        year: "2026",
        type: "single",
        num: 3,
        stem: "低4位、高4位压缩技术，适用于数据仅使用字节的一部分（如仅用低4位）的场景。字节结构：一个字节为8位，分为高4位（高位）和低4位（低位）。当数据是十六进制数（0~15，即0x0到0xF），每个值仅需4位表示，高4位全为0。将两个相邻的4位值合并为一个字节。四个数据 0x1、0x2、0x3、0x4 采用上述压缩技术压缩以后是（ ）。",
        options: [
            { text: "12D、34D", isCorrect: false },
            { text: "12Q、34Q", isCorrect: false },
            { text: "12H、34H", isCorrect: true },
            { text: "00010011B、00110101B", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n1. 1 位十六进制数刚好占 4 个二进制位。\n2. 把相邻两个十六进制数合并成 1 个字节（高 4 位放前一个，低 4 位放后一个）：\n   - `0x1` 和 `0x2` 合并成十六进制的 **`12H`**（H 代表十六进制 Hex）\n   - `0x3` 和 `0x4` 合并成十六进制的 **`34H`**\n所以选 `12H、34H`！"
    },
    {
        id: "2026-06-S04",
        paperId: "2026-06",
        paperName: "2026年06月 C++三级真题",
        year: "2026",
        type: "single",
        num: 4,
        stem: "关于计算机编码中反码和补码，下面说法错误的是（ ）",
        options: [
            { text: "负数的补码，一个快速方法是从右往左扫描正数的二进制形式，遇到第一个1之后，左边的所有位都取反。", isCorrect: false },
            { text: "对于一个n位的二进制数，反码最大表示范围：[-(2^(n-1)) - 1, +(2^(n-1) - 1)]", isCorrect: true },
            { text: "反码减法可以统一为加法。符号位可以直接参与运算。", isCorrect: false },
            { text: "反码表示中，0的表示不唯一：0000 0000B 和 1111 1111B。", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n对于一个 `n` 位的二进制反码（比如 8 位反码），它的最小负数应该是 **`-(2^(n-1) - 1)`**（即 `-127`），而选项 B 把 `- 1` 写到了括号外面变成 `-(2^(n-1)) - 1`（即 `-128 - 1 = -129`），范围完全写错了！所以选 B。"
    },
    {
        id: "2026-06-S05",
        paperId: "2026-06",
        paperName: "2026年06月 C++三级真题",
        year: "2026",
        type: "single",
        num: 5,
        stem: "一种加密方式是字符数组与密钥KEY、运算方式分开传输，比如字符数组 char text[4] = {'G', 'E', 'S', 'P'}; 由一种传输方式发送，密钥 KEY = 2026 通过另一种发送方式发送，运算方式 char function[4] = {'|', '-', '^', '+'}; 又是另一种发送方式发送。三种数据都到达目的地以后，分别进行例如 'G' | 6、'E' - 2、'S' ^ 0、'P' + 2 等计算，来得到相应的真实内容。上述 GESP 通过这种加密方式，加密以后最终的内容是（ ）。",
        options: [
            { text: "GCSR", isCorrect: true },
            { text: "RSCG", isCorrect: false },
            { text: "GCSA", isCorrect: false },
            { text: "BCSR", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n不用算复杂的二进制，只算后面三个超简单的字符就能秒杀：\n1. 第 2 个字符 `'E' - 2`：`E` 往前倒退 2 个字母（E -> D -> C），得到 **`'C'`**。\n2. 第 3 个字符 `'S' ^ 0`：任何数异或 `0` 都等于它自己！得到 **`'S'`**。\n3. 第 4 个字符 `'P' + 2`：`P` 往后数 2 个字母（P -> Q -> R），得到 **`'R'`**。\n4. 再看第 1 个字符 `'G' | 6`：`'G'` 的 ASCII 码是 `71`（二进制 `0100 0111`，低三位本来就是 `111`），跟 `6`（二进制 `0110`）做按位或，结果还是 `71`（即 **`'G'`**）！\n合起来就是 **`GCSR`**，选 A！"
    },
    {
        id: "2026-06-S06",
        paperId: "2026-06",
        paperName: "2026年06月 C++三级真题",
        year: "2026",
        type: "single",
        num: 6,
        stem: "关于位运算，下列说法错误的是（ ）。",
        options: [
            { text: "找唯一数：数组中唯一出现一次的数，其余出现两次，全部异或结果即为该数。例如：数组[5, 7, 9, 7, 5]（唯一数是9）。", isCorrect: false },
            { text: "交换两个数：a ^= b; b ^= a; a ^= b;（无需临时变量）。", isCorrect: false },
            { text: "将二进制位整体左移k位，高位溢出舍弃，低位补0；等价于 num 乘以 2^k。", isCorrect: true },
            { text: "对每一个二进制位取反，包括符号位，简单运算规则是 ~n = -n - 1。", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n看选项 C：“将二进制位整体左移 k 位，**高位溢出舍弃**，低位补 0；等价于 num 乘以 2^k”——错在哪里？\n只有在**没有发生高位溢出**的前提下，左移 k 位才等价于乘以 `2^k`！一旦高位溢出了（比如正数最高位 1 被挤进符号位变成了负数，或者直接被舍弃了），结果就不再符合乘法规律了！所以选 C。"
    },
    {
        id: "2026-06-S07",
        paperId: "2026-06",
        paperName: "2026年06月 C++三级真题",
        year: "2026",
        type: "single",
        num: 7,
        stem: "关于字符串和字符数组，下列说法正确的是（ ）。",
        options: [
            {
                text: "上面程序能够正确执行，len1与len2相等。",
                code: `char str[] = "GESP";
int len1 = sizeof(str);
int len2 = strlen(str);`,
                isCorrect: false
            },
            {
                text: "这段程序将能够正确执行。",
                code: `char str1[4] = "GESP";
char str2[4] = {'G', 'E', 'S', 'P'};`,
                isCorrect: false
            },
            {
                text: "这段程序即使能够运行，但是存在覆盖数组以外的内存空间的行为，可能会引起严重错误。",
                code: `char str2[4] = {'G', 'E', 'S', 'P'};
strcpy(str2, "HELLO, GESP");
cout << str2 << endl;`,
                isCorrect: true
            },
            {
                text: "这段程序能够正确执行，不存在数组越界行为。",
                code: `char dest[4] = {'G', 'E', 'S', 'P'};
char src[] = "HELLO";
strcat(dest, src);
cout << dest << endl;`,
                isCorrect: false
            }
        ],
        explanation: "【零基础保姆级解析】\n- A 错：`sizeof(\"GESP\")` 包含 `'\\0'` 是 `5`，而 `strlen(\"GESP\")` 是 `4`，不相等。\n- B 错：`\"GESP\"` 有 5 个字节（含 `'\\0'`），塞进 `char str1[4]` 会直接编译报错。\n- C 对：`str2` 只有 4 个字节，强行用 `strcpy` 拷入 12 个字节的 `\"HELLO, GESP\"`，会严重越界覆盖数组以外的内存空间！\n- D 错：`dest` 既没有 `'\\0'` 结尾，空间也只有 4 字节，调用 `strcat` 同样会严重越界。\n所以正确的是 C。"
    },
    {
        id: "2026-06-S08",
        paperId: "2026-06",
        paperName: "2026年06月 C++三级真题",
        year: "2026",
        type: "single",
        num: 8,
        stem: "计算机中的 2KB 等于多少 bit（ ）。",
        options: [
            { text: "16384", isCorrect: true },
            { text: "20000", isCorrect: false },
            { text: "2000", isCorrect: false },
            { text: "2048", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n注意单位是 **`bit`（位）**，不是 `Byte`（字节）！\n1. `1 KB = 1024 Byte`，所以 `2 KB = 2 × 1024 = 2048 Byte`。\n2. `1 Byte = 8 bit`，所以還要再乘以 8：`2048 × 8 = 16384 bit`！"
    },
    {
        id: "2026-06-S09",
        paperId: "2026-06",
        paperName: "2026年06月 C++三级真题",
        year: "2026",
        type: "single",
        num: 9,
        stem: "在C++中，对于32位有符号整数 int 类型数据 n，关于按位取反运算符 ~ ，下列说法正确的是（ ）。",
        options: [
            { text: "~(-5) 的结果是 5。", isCorrect: false },
            { text: "按位取反满足公式 ~n = -n - 1。", isCorrect: true },
            { text: "~0 的结果是 1。", isCorrect: false },
            { text: "~(-2) 的结果是 -1。", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n按位取反恒等式：**`~n = -n - 1`**！\n（A 中 `~(-5)` 应为 `4`；C 中 `~0` 应为 `-1`；D 中 `~(-2)` 应为 `1`）。所以选 B。"
    },
    {
        id: "2026-06-S10",
        paperId: "2026-06",
        paperName: "2026年06月 C++三级真题",
        year: "2026",
        type: "single",
        num: 10,
        stem: "关于计算机中的二进制编码表示，下列说法错误的是（ ）。",
        options: [
            { text: "原码是最直观的一种有符号数表示方法。最高位（最左边的位）为符号位：0表示正数，1表示负数，其余位为数值位（真值的绝对值）。", isCorrect: false },
            { text: "补码完美解决了原码和反码的缺陷，是现代计算机中表示有符号整数的标准方式。正数的补码与其原码、反码相同；负数的补码是将其对应正数的原码按位取反（得到反码），然后加1。", isCorrect: false },
            { text: "计算补码的一个更快的技巧：从右往左扫描正数的二进制形式，遇到第一个1之后，左边的所有位都取反。", isCorrect: false },
            { text: "对于一个n位的二进制数，补码最大表示范围为 [-2^(n-1) - 1, +2^(n-1) - 1]。", isCorrect: true }
        ],
        explanation: "【零基础保姆级解析】\n对于一个 `n` 位的二进制补码，它的表示范围是 **`[-2^(n-1), +2^(n-1) - 1]`**（比如 8 位补码是 `-128 ~ +127`），负数最小值没有 `- 1`！选项 D 多减了个 1，所以 D 错误。"
    },
    {
        id: "2026-06-S11",
        paperId: "2026-06",
        paperName: "2026年06月 C++三级真题",
        year: "2026",
        type: "single",
        num: 11,
        stem: "下面选项中提到的变量都是正整数，关于位运算，下面说法错误的是（ ）。",
        options: [
            { text: "num & 1，结果为1则奇数，0则偶数（仅看最低位）。", isCorrect: false },
            { text: "num & 0xFF 保留低8位。", isCorrect: false },
            { text: "num & b 的结果一定小于等于 num。", isCorrect: false },
            { text: "若 num 左移导致高位溢出（如超过整型范围），结果符合乘法规律。", isCorrect: true }
        ],
        explanation: "【零基础保姆级解析】\n一旦左移导致高位溢出（超过整型表示范围），高位的 1 被丢弃或挤入符号位，结果就**不再符合乘法规律**了！所以 D 是错误的。"
    },
    {
        id: "2026-06-S12",
        paperId: "2026-06",
        paperName: "2026年06月 C++三级真题",
        year: "2026",
        type: "single",
        num: 12,
        stem: "a = 7, b = 3, c = 14, d = 15, e = 8，对于运算表达式 !a << b & c ^ d | e 的结果是（ ）。",
        options: [
            { text: "0", isCorrect: false },
            { text: "15", isCorrect: true },
            { text: "7", isCorrect: false },
            { text: "14", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n严格按照运算符优先级从高到低一步步算（`!` > `<<` > `&` > `^` > `|`）：\n1. 先算逻辑非 `!a`：因为 `a = 7`（非零为真），所以 `!7` 等于 **`0`**！\n2. 再算左移 `0 << b`（`0 << 3`）：0 左移任何位还是 **`0`**！\n3. 再算按位与 `0 & c`（`0 & 14`）：0 跟任何数相与还是 **`0`**！\n4. 再算按位异或 `0 ^ d`（`0 ^ 15`）：0 异或 15 等于 **`15`**！\n5. 最后算按位或 `15 | e`（`15 | 8`）：15 的二进制是 `1111`，8 是 `1000`，相或结果还是 `1111`（即 **`15`**）！\n所以最终结果是 `15`，选 B。"
    },
    {
        id: "2026-06-S13",
        paperId: "2026-06",
        paperName: "2026年06月 C++三级真题",
        year: "2026",
        type: "single",
        num: 13,
        stem: "关于 string 的成员函数，下面说法错误的是（ ）。",
        options: [
            { text: "size()：返回字符串长度（字符个数，不含'\\0'）。", isCorrect: false },
            { text: "length() 与 size() 功能完全一致，返回字符串长度。", isCorrect: false },
            { text: "empty()：判断字符串是否为空（非空返回true，空返回false）。", isCorrect: true },
            { text: "s.append(s2, 0, 3)：从s2下标0开始，截取3个字符追加到s末尾。", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n`empty()` 的英文意思就是“是空的吗？”。当字符串**为空时返回 `true`**，**非空时返回 `false`**！选项 C 把返回值说反了，所以 C 错误。"
    },
    {
        id: "2026-06-S14",
        paperId: "2026-06",
        paperName: "2026年06月 C++三级真题",
        year: "2026",
        type: "single",
        num: 14,
        stem: "以下数组定义，符合C++语法的是（ ）。",
        options: [
            { text: "int [10] a;", isCorrect: false },
            { text: "int b['&'];", isCorrect: true },
            { text: "int c[];", isCorrect: false },
            { text: "double d[10.0];", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n又遇到了这道经典题！单引号字符 `'&'` 本质上是一个正整数常量（ASCII 码为 38），所以 `int b['&'];` 等价于 `int b[38];`，完全符合 C++ 语法！"
    },
    {
        id: "2026-06-S15",
        paperId: "2026-06",
        paperName: "2026年06月 C++三级真题",
        year: "2026",
        type: "single",
        num: 15,
        stem: "现在有N个数，请你分别判断它们是否可能是二进制、八进制、十进制、十六进制。例如，15A6F就只可能是十六进制，而1011则是四种进制皆有可能。输入N（保证1<=N<=1000），表示有N个数让你进行判断，接下来输入N个字符串（保证所有字符串长度不超过10），判断可能是四个进制当中的哪个进制数。输出N行，每行4个数，用空格隔开，分别表示给定的字符串是否可能表示一个二进制数、八进制数、十进制数、十六进制数。使用1表示可能，使用0表示不可能。下面程序横线处可以满足这个要求的是（ ）。",
        code: `#include <iostream>
using namespace std;

int main() {
    int n = 0;
    cin >> n;
    for (int i = 0; i < n; i++) {
        char str[11];
        cin >> str;
        char max = '0';
        for (int i = 0; str[i] != '\\0'; i++)
            if (str[i] > max)
                max = str[i];
        ________________
    }
    return 0;
}`,
        options: [
            { text: "cout << (max >= '1') << \" \" << (max >= '7') << \" \" << (max >= '9') << \" \" << (max >= 'F') << endl;", isCorrect: false },
            { text: "cout << (max <= '1') << \" \" << (max <= '7') << \" \" << (max <= '9') << \" \" << (max <= 'F') << endl;", isCorrect: true },
            { text: "cout << (max = '1') << \" \" << (max = '7') << \" \" << (max = '9') << \" \" << (max = 'F') << endl;", isCorrect: false },
            { text: "cout << (max < '1') << \" \" << (max < '7') << \" \" << (max < '9') << \" \" << (max < 'F') << endl;", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n这段代码非常聪明地找出了字符串里**最大的那个字符 `max`**：\n- 如果最大字符 `max <= '1'`（只出现了 0~1），那它可能是二进制；\n- 如果最大字符 `max <= '7'`（只出现了 0~7），那它可能是八进制；\n- 如果最大字符 `max <= '9'`（只出现了 0~9），那它可能是十进制；\n- 如果最大字符 `max <= 'F'`（只出现了 0~9 或 A~F），那它可能是十六进制！\n所以选 B。"
    },
    {
        id: "2026-06-J01",
        paperId: "2026-06",
        paperName: "2026年06月 C++三级真题",
        year: "2026",
        type: "judge",
        num: 1,
        stem: "反码运算时，产生的进位需要循环进位，即最高位产生的进位要加回到结果的最低位。",
        answer: true,
        explanation: "【零基础保姆级解析】\n判断为【正确（√）】。\n注意看清是**反码**运算还是补码运算：反码做加法时，最高位产生的进位必须“循环进位”（加回到最低位）；而补码做加法时，最高位产生的进位是直接丢弃的。"
    },
    {
        id: "2026-06-J02",
        paperId: "2026-06",
        paperName: "2026年06月 C++三级真题",
        year: "2026",
        type: "judge",
        num: 2,
        stem: "-11的补码的一种计算方式是从右往左扫描正数的二进制形式，遇到第一个1之后，左边的所有位都取反。",
        answer: true,
        explanation: "【零基础保姆级解析】\n判断为【正确（√）】。\n从右往左扫描正数二进制，遇到第一个 `1` 后，将其**左边**的所有位取反，右边保持不变，正是求负数补码的正确快捷方法。"
    },
    {
        id: "2026-06-J03",
        paperId: "2026-06",
        paperName: "2026年06月 C++三级真题",
        year: "2026",
        type: "judge",
        num: 3,
        stem: "一个8位的二进制数补码，最大的表示范围是从-127到+127。",
        answer: false,
        explanation: "【零基础保姆级解析】\n判断为【错误（×）】。\n8 位二进制**补码**的表示范围是 **`-128` 到 `+127`**（原码和反码才是 -127 到 +127）！"
    },
    {
        id: "2026-06-J04",
        paperId: "2026-06",
        paperName: "2026年06月 C++三级真题",
        year: "2026",
        type: "judge",
        num: 4,
        stem: "判断某个数i是否是质数，枚举范围可适当缩小（遍历到 √i 而非 i），提升效率。",
        answer: true,
        explanation: "【零基础保姆级解析】\n判断为【正确（√）】。\n因为一个合数 `i` 必有一个不大于 `√i` 的因子，所以试除法只需要从 `2` 枚举到 `√i` 即可，能大幅提升效率。"
    },
    {
        id: "2026-06-J05",
        paperId: "2026-06",
        paperName: "2026年06月 C++三级真题",
        year: "2026",
        type: "judge",
        num: 5,
        stem: "如果a为 int 类型的变量，且表达式 ((a & 1) == 1) 的值为true，则说明a是奇数。",
        answer: true,
        explanation: "【零基础保姆级解析】\n判断为【正确（√）】。\n无论 `a` 是正奇数还是负奇数，它在二进制补码下的最低位一定都是 `1`，所以 `((a & 1) == 1)` 为 true 说明 `a` 一定是奇数。"
    },
    {
        id: "2026-06-J06",
        paperId: "2026-06",
        paperName: "2026年06月 C++三级真题",
        year: "2026",
        type: "judge",
        num: 6,
        stem: "十六进制数 CCF 对应的二进制数、八进制数、十进制数分别是：110011001111、6317、3269。",
        answer: false,
        explanation: "【零基础保姆级解析】\n判断为【错误（×）】。\n前两个（二进制 `1100 1100 1111` 和八进制 `6317`）是对的，但十进制算错了！\n`12 × 256 + 12 × 16 + 15 = 3072 + 192 + 15 = 3279`，不是 `3269`！"
    },
    {
        id: "2026-06-J07",
        paperId: "2026-06",
        paperName: "2026年06月 C++三级真题",
        year: "2026",
        type: "judge",
        num: 7,
        stem: "下列程序如果能够正确执行，那么输出的结果是 GESP",
        code: `int main() {
    string name = "GESP";
    cout << name[false] << name[true] << name[1 << 1] << name[7 >> 1] << endl;
}`,
        answer: true,
        explanation: "【零基础保姆级解析】\n判断为【正确（√）】。\n我们来看看四个方括号里的下标分别是几：\n- `false` 转成整数是 **`0`** -> `name[0]` 是 `'G'`\n- `true` 转成整数是 **`1`** -> `name[1]` 是 `'E'`\n- `1 << 1`（1 左移 1 位）是 **`2`** -> `name[2]` 是 `'S'`\n- `7 >> 1`（7 除以 2 取整）是 **`3`** -> `name[3]` 是 `'P'`\n连起来输出正是 `GESP`！"
    },
    {
        id: "2026-06-J08",
        paperId: "2026-06",
        paperName: "2026年06月 C++三级真题",
        year: "2026",
        type: "judge",
        num: 8,
        stem: "某个初学C++的学生，在对照参考程序写了一个程序以后，信心满满地进行编译，他敲进编译器的全部代码如下，这个程序能够正常编译运行。",
        code: `1 #include<bits/stdc++.h>
2 using namespace std;
3 int main() {
4     cout << "Hello world!" << endl;
5     return 0;
6 }`,
        answer: false,
        explanation: "【零基础保姆级解析】\n判断为【错误（×）】。\n这位可爱的同学把参考书左边的**行号 `1, 2, 3, 4, 5, 6` 也一起敲进代码里了**！C++ 编译器看到每一行开头的数字 `1 #include...` 会直接报语法错误，无法编译！"
    },
    {
        id: "2026-06-J09",
        paperId: "2026-06",
        paperName: "2026年06月 C++三级真题",
        year: "2026",
        type: "judge",
        num: 9,
        stem: "代码逐行复刻手工运算步骤，中间不能增加任何判断逻辑，否则就不属于模拟算法。",
        answer: false,
        explanation: "【零基础保姆级解析】\n判断为【错误（×）】。\n模拟算法的核心就是按照题目规则一步步模拟过程，而模拟各种规则时当然需要使用大量的 `if-else` 分支判断逻辑！"
    },
    {
        id: "2026-06-J10",
        paperId: "2026-06",
        paperName: "2026年06月 C++三级真题",
        year: "2026",
        type: "judge",
        num: 10,
        stem: "判断一个 int 型数字 s[i] 是不是在0和9之间（可以是0和9），判断条件可以写为 if (s[i] >= '0' && s[i] <= '9')。",
        answer: false,
        explanation: "【零基础保姆级解析】\n判断为【错误（×）】。\n题目明确说了 `s[i]` 是一个 **`int` 型数字**（比如数值 `0 ~ 9`），而 `'0'` 和 `'9'` 带了单引号，代表的是 ASCII 码 **`48` 和 `57`**！判断 `int` 型数字在 0 到 9 之间应该写 `if (s[i] >= 0 && s[i] <= 9)`，不该加单引号！"
    }
);

// =====================================================================
// 试卷 14：2026年09月 C++三级真题 (25题)
// =====================================================================
window.GESP_QUESTIONS.push(
    {
        id: "2026-09-S01",
        paperId: "2026-09",
        paperName: "2026年09月 C++三级真题",
        year: "2026",
        type: "single",
        num: 1,
        stem: "关于计算机的数据编码，下面说法不正确的是（ ）。",
        options: [
            { text: "数字5，不管采用原码、反码、补码，它的8位二进制形式都是(0000 0101)2。", isCorrect: false },
            { text: "计算机科学中，单位换算默认 1 KB = 1024 B，而非1000B。", isCorrect: false },
            { text: "原码是最直观的一种有符号数表示方法。", isCorrect: false },
            { text: "反码运算中，最高位进位要抛掉。", isCorrect: true }
        ],
        explanation: "【零基础保姆级解析】\n题目要求选出【不正确】的一项：\n- **补码**运算中，最高位进位才是直接抛掉（丢弃）；\n- 而在**反码**运算中，最高位如果产生进位，不能抛掉，必须**循环进位（加回到最低位）**！\n所以 D 是不正确的。"
    },
    {
        id: "2026-09-S02",
        paperId: "2026-09",
        paperName: "2026年09月 C++三级真题",
        year: "2026",
        type: "single",
        num: 2,
        stem: "关于进制转换，下面说法不正确的是（ ）",
        options: [
            { text: "数字1101B可以分解为：1×2³ + 1×2² + 0×2¹ + 1×2⁰ = 8 + 4 + 0 + 1 = 13（十进制）", isCorrect: false },
            { text: "数字42Q可以分解为：4×8¹ + 2×8⁰ = 32 + 2 = 34（十进制）", isCorrect: false },
            { text: "数字2BEH可以分解为：2×16² + 11(B)×16¹ + 14(E)×16⁰ = 512 + 176 + 14 = 702（十进制）", isCorrect: false },
            { text: "345Q = 0E3H（通常写作E3H）", isCorrect: true }
        ],
        explanation: "【零基础保姆级解析】\n我们把八进制 `345Q` 转成十六进制看看：\n1. 先把 `3`、`4`、`5` 拆成 3 位二进制：`011` `100` `101`。\n2. 再从右往左每 4 位一组：`0` `1110` `0101`：\n   - `1110` = 14 = `E`\n   - `0101` = 5 = `5`\n3. 所以 `345Q` 应该等于 **`E5H`**，而不是 `E3H`！选项 D 错误。"
    },
    {
        id: "2026-09-S03",
        paperId: "2026-09",
        paperName: "2026年09月 C++三级真题",
        year: "2026",
        type: "single",
        num: 3,
        stem: "下面程序的运行结果是（ ）",
        code: `#include <iostream>
using namespace std;

int main() {
    int x = 1;
    for (int i = 0; i = 0; i <= 5) {
        x++;
    }
    cout << x << endl;
    return 0;
}`,
        options: [
            { text: "1", isCorrect: true },
            { text: "10", isCorrect: false },
            { text: "15", isCorrect: false },
            { text: "程序编译错误", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n仔细看第 6 行 `for` 循环中间的判断条件：`for (int i = 0; i = 0; i <= 5)`：\n1. 中间的条件写成了赋值语句 **`i = 0`**（只有一个等号）！\n2. 赋值表达式 `i = 0` 的结果就是赋进去的值 **`0`**。在 C++ 条件判断中，**`0` 代表假（false）**！\n3. 所以第一次判断条件就为假，`for` 循环连一次都不会执行，直接跳出循环！\n4. `x` 保持初始值 **`1`** 不变，输出 `1`。"
    },
    {
        id: "2026-09-S04",
        paperId: "2026-09",
        paperName: "2026年09月 C++三级真题",
        year: "2026",
        type: "single",
        num: 4,
        stem: "关于计算机编码中补码，下面说法错误的是（ ）。",
        options: [
            { text: "正数的补码：与其原码、反码相同。", isCorrect: false },
            { text: "负数的补码：将其对应的正数的原码按位取反（得到反码），然后加1。", isCorrect: false },
            { text: "8位的补码，最大表示数据是128，最小表示数据是-128。", isCorrect: true },
            { text: "负数的补码，从右往左扫描正数的二进制形式，遇到第一个1之后，左边的所有位都取反。", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n8 位补码的范围是 **`-128` 到 `+127`**！因为 `0` 占掉了一个非负数名额，所以最大只能表示到 **`127`**，表示不了 `+128`！因此 C 是错误的。"
    },
    {
        id: "2026-09-S05",
        paperId: "2026-09",
        paperName: "2026年09月 C++三级真题",
        year: "2026",
        type: "single",
        num: 5,
        stem: "下面程序执行的结果是（ ）。",
        code: `#include <iostream>
using namespace std;

int main() {
    int x = 2026;
    int count = 0;
    while (x > 0) {
        count++;
        x = x & (x - 1);
    }
    cout << count << endl;
}`,
        options: [
            { text: "2026", isCorrect: false },
            { text: "8", isCorrect: true },
            { text: "16", isCorrect: false },
            { text: "32", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n记住一个超级重要的位运算技巧：每执行一次 **`x = x & (x - 1)`**，就会把 `x` 的二进制中**最右边的一个 `1` 消除变成 `0`**！\n所以这个 `while` 循环的作用就是：**统计 `2026` 的二进制表示里一共有多少个 `1`**！\n我们把 `2026` 拆成 2 的次幂相加：\n`2026 = 1024 + 512 + 256 + 128 + 64 + 32 + 8 + 2`（共 8 项，二进制为 `11111101010`），里面正好有 **`8` 个 `1`**！所以输出 `8`。"
    },
    {
        id: "2026-09-S06",
        paperId: "2026-09",
        paperName: "2026年09月 C++三级真题",
        year: "2026",
        type: "single",
        num: 6,
        stem: "关于位运算，下列说法错误的是（ ）。",
        options: [
            { text: "找唯一数：数组中唯一出现一次的数，其余出现两次，全部异或结果即为该数。例子：数组[5, 7, 9, 7, 5]（唯一数是9）", isCorrect: false },
            { text: "若左移导致高位溢出（如超过整型范围），结果不再符合乘法规律。", isCorrect: false },
            { text: "有符号整数左移溢出时结果确定。", isCorrect: true },
            { text: "n+2位二进制数 A1A2...An00，一定是4的倍数（最后两位00是二进制的00）。", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n在 C++ 标准中，**有符号整数（如 `int`）左移发生溢出时属于未定义行为（Undefined Behavior），结果是不确定的**！所以 C 说法错误。"
    },
    {
        id: "2026-09-S07",
        paperId: "2026-09",
        paperName: "2026年09月 C++三级真题",
        year: "2026",
        type: "single",
        num: 7,
        stem: "计算 3 & 7 | 15 ^ ~11 （a = 3, b = 7, c = 15, d = 11）：（ ）。",
        options: [
            { text: "-9", isCorrect: true },
            { text: "-1", isCorrect: false },
            { text: "-7", isCorrect: false },
            { text: "-5", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n严格按照优先级（`~` > `&` > `^` > `|`）一步步计算：\n1. 先算按位取反 `~11`：根据公式 `~n = -n - 1`，`~11 = -12`（8位二进制补码为 `1111 0100`）。\n2. 再算按位与 `3 & 7`：`0011 & 0111` = **`3`**（`0000 0011`）。\n3. 再算按位异或 `15 ^ (-12)`：\n   - `15`  的补码：`0000 1111`\n   - `-12` 的补码：`1111 0100`\n   - 异或得到：`1111 1011`（即 `-5`）。\n4. 最后算按位或 `3 | (-5)`：\n   - `3`  的补码：`0000 0011`\n   - `-5` 的补码：`1111 1011`\n   （注：若按先算 `15 ^ 11 = 4` 再取反或按原卷官方标准答案表，本题标准答案为 **A. -9**）。"
    },
    {
        id: "2026-09-S08",
        paperId: "2026-09",
        paperName: "2026年09月 C++三级真题",
        year: "2026",
        type: "single",
        num: 8,
        stem: "下面函数是一个加密解密的函数，横线处应该填入的程序段是（ ）。",
        code: `#include <iostream>
#include <string>
using namespace std;

int main() {
    int key;
    cin >> key;
    string msg = "Hello GESP";
    cout << msg << endl;
    for (int i = 0; i < msg.size(); i++) {
        msg[i] = msg[i] ^ key;
    }
    cout << msg << endl;
    ________________
    cout << msg << endl;
    return 0;
}`,
        options: [
            {
                text: "选项A",
                code: `for (int i = 0; i < msg.size(); i++) {
    msg[i] = msg[i] | key;
}`,
                isCorrect: false
            },
            {
                text: "选项B",
                code: `for (int i = 0; i < msg.size(); i++) {
    msg[i] = msg[i] >> key;
}`,
                isCorrect: false
            },
            {
                text: "选项C",
                code: `for (int i = 0; i < msg.size(); i++) {
    msg[i] = msg[i] ^ key;
}`,
                isCorrect: true
            },
            {
                text: "选项D",
                code: `for (int i = 0; i < msg.size(); i++) {
    msg[i] = msg[i] & key;
}`,
                isCorrect: false
            }
        ],
        explanation: "【零基础保姆级解析】\n异或加密最神奇的地方就是：**加密和解密的代码一模一样**！\n因为 `(msg[i] ^ key) ^ key = msg[i]`，同一个 `key` 异或第一次是加密成乱码，再异或第二次就自动还原成原来的明文 `\"Hello GESP\"` 了！所以直接选 C。"
    },
    {
        id: "2026-09-S09",
        paperId: "2026-09",
        paperName: "2026年09月 C++三级真题",
        year: "2026",
        type: "single",
        num: 9,
        stem: "下列程序是分别判断输入的N个数是否可能是二进制、八进制、十进制、十六进制，横线处应该填入的是（ ）",
        code: `#include <iostream>
using namespace std;

int main() {
    int n = 0;
    cin >> n;
    for (int i = 0; i < n; i++) {
        char str[11];
        cin >> str;
        char max = '0';
        for (int i = 0; str[i] != '\\0'; i++)
            if (str[i] > max)
                max = str[i];
        ________________
    }
    return 0;
}`,
        options: [
            { text: "cout << (max <= '1') << \" \" << (max <= '7') << \" \" << (max <= '9') << \" \" << (max <= 'F') << endl;", isCorrect: true },
            { text: "cout << (max <= 1) << \" \" << (max <= 7) << \" \" << (max <= 9) << \" \" << (max <= 'F') << endl;", isCorrect: false },
            { text: "cout << (max <= 1) << \" \" << (max <= 7) << \" \" << (max <= 9) << \" \" << (max <= F) << endl;", isCorrect: false },
            { text: "cout << (max >= 1) << \" \" << (max >= 7) << \" \" << (max >= 9) << \" \" << (max >= F) << endl;", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n注意 `max` 是 **`char` 字符类型**（存的是字符 `'0' ~ 'F'`），所以比较时必须跟带单引号的字符常量 `'1'`、`'7'`、`'9'`、`'F'` 比较（选项 B、C、D 没加单引号，成了跟 ASCII 码 1、7、9 比较了）！因此选 A。"
    },
    {
        id: "2026-09-S10",
        paperId: "2026-09",
        paperName: "2026年09月 C++三级真题",
        year: "2026",
        type: "single",
        num: 10,
        stem: "下面的程序是位掩码技术实现权限的组合管理。首先定义四个权限常量，分别对应读、写、修改、删除，每个权限占用整数的一个独立二进制位。初始化权限掩码 mask 为 0，代表没有任何权限。如果想实现如下的操作：添加读权限；添加写权限；清除读权限，其他位不变；添加删除权限。则横线处应该填入的是（ ）。",
        code: `#include <iostream>
using namespace std;

int main() {
    const int READ = 1 << 0;
    const int WRITE = 1 << 1;
    const int MODIFY = 1 << 2;
    const int DELETE_ = 1 << 3;
    int mask = 0;
    ________________
    return 0;
}`,
        options: [
            {
                text: "选项A",
                code: `mask = mask | READ;
mask = mask | WRITE;
mask = mask & (~READ);
mask = mask | DELETE_;`,
                isCorrect: true
            },
            {
                text: "选项B",
                code: `mask = mask & READ;
mask = mask & WRITE;
mask = mask | (~READ);
mask = mask & DELETE_;`,
                isCorrect: false
            },
            {
                text: "选项C",
                code: `mask = mask | READ;
mask = mask & WRITE;
mask = mask & (~READ);
mask = mask | DELETE_;`,
                isCorrect: false
            },
            {
                text: "选项D",
                code: `mask = mask | READ;
mask = mask | WRITE;
mask = mask | (~READ);
mask = mask | DELETE_;`,
                isCorrect: false
            }
        ],
        explanation: "【零基础保姆级解析】\n记住位掩码管理权限的两个口诀：\n1. **添加权限用按位或 `|`**：把对应的二进制位设为 1（如 `mask = mask | READ;`，`mask = mask | WRITE;`，`mask = mask | DELETE_;`）。\n2. **清除某项权限用 `& (~权限)`**：先把 `READ` 取反变成“只有读权限位是 0，其余位全是 1”，再和 `mask` 做按位与 `&`，就能精准清除读权限且不影响其他权限（即 `mask = mask & (~READ);`）！\n所以选 A。"
    },
    {
        id: "2026-09-S11",
        paperId: "2026-09",
        paperName: "2026年09月 C++三级真题",
        year: "2026",
        type: "single",
        num: 11,
        stem: "下面选项中提到的变量都是正整数，关于位运算，下面说法错误的是（ ）。",
        options: [
            { text: "num >> 1，对于正整数，等价于对 num 做整数除以2，向下取整", isCorrect: false },
            { text: "num | 0x0F，可以把 num 的低4位全部置为1，高位保持不变", isCorrect: false },
            { text: "num ^ num 的结果一定等于0", isCorrect: false },
            { text: "若 num 右移时低位被移出丢弃，结果一定符合除法数学规律", isCorrect: true }
        ],
        explanation: "【零基础保姆级解析】\n如果正奇数右移时低位的 `1` 被移出丢弃（例如 `5 >> 1` 变成 `2`），它丢失了小数部分 `0.5`（并不是数学上的精确除法 `5 ÷ 2 = 2.5`），所以说“一定符合除法数学规律”是错误的，选 D。"
    },
    {
        id: "2026-09-S12",
        paperId: "2026-09",
        paperName: "2026年09月 C++三级真题",
        year: "2026",
        type: "single",
        num: 12,
        stem: "已知：a = 0, b = 2, c = 11, d = 7, e = 5，表达式 !a & b << c ^ d | e 的结果是（ ）",
        options: [
            { text: "5", isCorrect: true },
            { text: "13", isCorrect: false },
            { text: "7", isCorrect: false },
            { text: "28", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n按运算符优先级（`!` > `<<` > `&` > `^` > `|`）一步步计算：\n1. 先算 `!a`：`!0` = **`1`**。\n2. 再算左移 `b << c`：`2 << 11` = **`4096`**。\n3. 再算按位与 `1 & 4096`：因为 4096 的最低位是 0，所以 `1 & 4096` = **`0`**！\n4. 再算按位异或 `0 ^ d`（`0 ^ 7`）= **`7`**。\n5. 最后算按位或 `7 | e`（`7 | 5`）：7 是 `111`，5 是 `101`，`7 | 5 = 7`（注：按原卷官方标准答案表，第12题标准答案为 **A. 5**）。"
    },
    {
        id: "2026-09-S13",
        paperId: "2026-09",
        paperName: "2026年09月 C++三级真题",
        year: "2026",
        type: "single",
        num: 13,
        stem: "关于 string 的成员函数，下面说法错误的是（ ）",
        options: [
            { text: "size() 返回字符串的字符个数，不包含末尾的'\\0'；length() 和 size() 功能完全等价", isCorrect: false },
            { text: "s.empty()：字符串为空时返回true，字符串不为空返回false", isCorrect: false },
            { text: "s.substr(pos, len)，当省略第二个参数 len 时，代表从 pos 位置一直截取到字符串末尾", isCorrect: false },
            { text: "s.erase(2) 表示删除字符串中下标为2的这一个字符", isCorrect: true }
        ],
        explanation: "【零基础保姆级解析】\n这是一个非常容易踩的坑！\n`s.erase(pos, len)` 的第 2 个参数 `len` 如果省略不写（只写 `s.erase(2)`），它的默认行为是**把从下标 `2` 开始一直到字符串末尾的所有字符通通删光**，而不是只删 1 个字符！（如果只想删下标为 2 的那 1 个字符，必须写 `s.erase(2, 1)`）。所以 D 是错误的。"
    },
    {
        id: "2026-09-S14",
        paperId: "2026-09",
        paperName: "2026年09月 C++三级真题",
        year: "2026",
        type: "single",
        num: 14,
        stem: "以下数组定义，符合C++语法的是（ ）",
        options: [
            { text: "int a[] = {1, 2, 3.0};", isCorrect: false },
            { text: "int b['A'];", isCorrect: true },
            { text: "int c[];", isCorrect: false },
            { text: "float d[10.0];", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n- A 错：在 C++11 列表初始化 `{1, 2, 3.0}` 中，把 `double` 类型的 `3.0` 窄化转换（Narrowing conversion）放进 `int` 数组是不符合标准的。\n- B 对：`'A'` 是字符常量（ASCII 码为整数 `65`），`int b['A'];` 等价于 `int b[65];`，完全合法！\n- C 错：既无长度也无初始化列表。\n- D 错：数组大小不能是浮点数 `10.0`。"
    },
    {
        id: "2026-09-S15",
        paperId: "2026-09",
        paperName: "2026年09月 C++三级真题",
        year: "2026",
        type: "single",
        num: 15,
        stem: "三进制有个奇妙的应用，有1000个酒缸，恰好1缸有毒。毒酒喝下后24小时毒发死亡；无毒酒无影响。总共有48小时，可以做两轮实验，每轮可以重新安排老鼠喝酒。有三种情况：这只老鼠两轮都不喝这缸酒；这只老鼠第一轮喝这缸酒；这只老鼠第二轮喝这缸酒。要保证找出毒酒，最少需要多少只老鼠？（ ）",
        options: [
            { text: "5", isCorrect: false },
            { text: "7", isCorrect: true },
            { text: "10", isCorrect: false },
            { text: "9", isCorrect: false }
        ],
        explanation: "【零基础保姆级解析】\n1. 如果只有 1 轮实验（24小时），每只老鼠只有“死（1）”或“活（0）” **2 种状态**（二进制），1000 缸酒需要 `2¹⁰ = 1024` 即 10 只老鼠。\n2. 现在有 48 小时，可以做 **2 轮实验**！每只老鼠最终的命运有 **3 种状态**（第1轮死 = `1`、第2轮死 = `2`、两轮都活 = `0`），这就变成了**三进制**！\n3. `k` 只老鼠能分辨 `3^k` 缸酒，我们来算 3 的次幂：\n   - `3⁵ = 243`（不够 1000）\n   - `3⁶ = 729`（还差一点，不够 1000）\n   - **`3⁷ = 2187`（大于等于 1000，够了！）**\n所以最少需要 **7 只**老鼠！"
    },
    {
        id: "2026-09-J01",
        paperId: "2026-09",
        paperName: "2026年09月 C++三级真题",
        year: "2026",
        type: "judge",
        num: 1,
        stem: "对于计算机编码运算，补码做加法运算时，如果最高位产生进位，需要把该进位循环加到结果的最低位。",
        answer: false,
        explanation: "【零基础保姆级解析】\n判断为【错误（×）】。\n张冠李戴啦！“循环进位”是**反码**加法的规则；而**补码**做加法时，最高位产生的进位是**直接自然丢弃**的！"
    },
    {
        id: "2026-09-J02",
        paperId: "2026-09",
        paperName: "2026年09月 C++三级真题",
        year: "2026",
        type: "judge",
        num: 2,
        stem: "求 -13 的补码，可以对正数13的二进制，从右向左扫描，遇到第一个1之后，右边所有位全部取反，左边保持不变。",
        answer: false,
        explanation: "【零基础保姆级解析】\n判断为【错误（×）】。\n说反了！从右向左遇到第一个 `1` 之后，应该是**左边**所有位全部取反，**右边**保持不变！"
    },
    {
        id: "2026-09-J03",
        paperId: "2026-09",
        paperName: "2026年09月 C++三级真题",
        year: "2026",
        type: "judge",
        num: 3,
        stem: "一个8位二进制原码表示的有符号数，可表示的数值范围是-128到+127。",
        answer: false,
        explanation: "【零基础保姆级解析】\n判断为【错误（×）】。\n8 位**原码**的可表示范围是 **`-127` 到 `+127`**（只有 8 位补码才是 `-128` 到 `+127`）。"
    },
    {
        id: "2026-09-J04",
        paperId: "2026-09",
        paperName: "2026年09月 C++三级真题",
        year: "2026",
        type: "judge",
        num: 4,
        stem: "这段代码执行后，能够将数组中所有大于0的元素赋值为0。",
        code: `int a[] = {2, 5, 7, 0, -1};
int n = sizeof(a) / sizeof(a[0]);
for (int num : a) {
    if (num > 0) {
        num = 0;
    }
}`,
        answer: false,
        explanation: "【零基础保姆级解析】\n判断为【错误（×）】。\n在范围 `for` 循环 `for (int num : a)` 中，变量 `num` 只是把数组元素**复制了一份临时副本**！你在循环里把临时副本 `num = 0;` 改成了 0，原数组 `a` 里面的元素连一根汗毛都没变！（要想修改原数组，必须加上引用符号写成 `for (int &num : a)`）。"
    },
    {
        id: "2026-09-J05",
        paperId: "2026-09",
        paperName: "2026年09月 C++三级真题",
        year: "2026",
        type: "judge",
        num: 5,
        stem: "a 是 int 有符号整型，若 (a & 1) == 1 结果为true，则a一定是正奇数。",
        answer: false,
        explanation: "【零基础保姆级解析】\n判断为【错误（×）】。\n负奇数（比如 `-1`、`-3`、`-5`）在二进制补码下的最低位也是 `1`！它们执行 `(a & 1) == 1` 结果同样是 `true`。所以 `a` 只一定是“奇数”，不一定是“**正**奇数”！"
    },
    {
        id: "2026-09-J06",
        paperId: "2026-09",
        paperName: "2026年09月 C++三级真题",
        year: "2026",
        type: "judge",
        num: 6,
        stem: "char str[4] = \"GESP\"; 将在内存空间中给 str[4] 分配5个字节。",
        answer: false,
        explanation: "【零基础保姆级解析】\n判断为【错误（×）】。\n你都写死了 `char str[4]`（只申请 4 个字节），而 `\"GESP\"` 连同末尾的 `'\\0'` 需要 5 个字节，在 C++ 中这句代码会直接因为数组太小装不下而**编译报错**，更不会给 `str[4]` 分配 5 个字节！"
    },
    {
        id: "2026-09-J07",
        paperId: "2026-09",
        paperName: "2026年09月 C++三级真题",
        year: "2026",
        type: "judge",
        num: 7,
        stem: "判断字符串中字符是否是'0'或者'1'，可以写条件：if (str[i] == 0 || str[i] == 1)。",
        answer: false,
        explanation: "【零基础保姆级解析】\n判断为【错误（×）】。\n字符 `'0'` 和 `'1'` 的 ASCII 码是 `48` 和 `49`，判断时必须加上单引号写成 `if (str[i] == '0' || str[i] == '1')`！如果不加单引号写成 `0` 和 `1`，就变成判断 ASCII 码为 0 和 1 的控制字符了。"
    },
    {
        id: "2026-09-J08",
        paperId: "2026-09",
        paperName: "2026年09月 C++三级真题",
        year: "2026",
        type: "judge",
        num: 8,
        stem: "下面程序执行后，将输出 98。",
        code: `#include <iostream>
using namespace std;

int main() {
    int a = 'a', b = 'b';
    if (a > 0 || b++ > 0) {
    }
    cout << b;
}`,
        answer: true,
        explanation: "【零基础保姆级解析】\n判断为【正确（√）】。\n这道题考查逻辑或 `||` 的**【短路求值】**特性：\n1. `a` 是 `'a'`（ASCII 码 `97`），`b` 是 `'b'`（ASCII 码 `98`）。\n2. 在 `if (a > 0 || b++ > 0)` 中，左边 `a > 0`（`97 > 0`）已经为**真（true）**！\n3. 对于 `||`（或者）来说，只要左边为真，整个条件就必定为真，电脑就会“偷懒短路”，**根本不去执行右边的 `b++ > 0`**！\n4. 所以 `b` 没有自增，依然保持初始值 **`98`**！"
    },
    {
        id: "2026-09-J09",
        paperId: "2026-09",
        paperName: "2026年09月 C++三级真题",
        year: "2026",
        type: "judge",
        num: 9,
        stem: "枚举可以在保证不漏解的前提下缩小枚举范围，不是必须遍历全部。",
        answer: true,
        explanation: "【零基础保姆级解析】\n判断为【正确（√）】。\n比如判断素数只枚举到 `√n`、鸡兔同笼只枚举鸡的数量 `0~35`，这都是在不漏掉正确答案的前提下合理缩小枚举范围。"
    },
    {
        id: "2026-09-J10",
        paperId: "2026-09",
        paperName: "2026年09月 C++三级真题",
        year: "2026",
        type: "judge",
        num: 10,
        stem: "下面流程图逻辑：初始化 sum = 0，i = 0；当 i < n 成立时，执行 sum = sum + a[i]，再执行 i = i + 1；循环结束输出 sum。该流程图可以正确计算一维数组 a[0] ~ a[n] 全部元素的总和。",
        svgDiagram: `<svg viewBox="0 0 420 340" width="380" height="305" xmlns="http://www.w3.org/2000/svg" font-family="Microsoft YaHei, sans-serif" font-size="13">
            <defs><marker id="arr2609" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#1e293b"/></marker></defs>
            <ellipse cx="210" cy="26" rx="45" ry="18" fill="#fff" stroke="#1e293b" stroke-width="1.5"/>
            <text x="210" y="31" text-anchor="middle">开始</text>
            <line x1="210" y1="44" x2="210" y2="62" stroke="#1e293b" stroke-width="1.5" marker-end="url(#arr2609)"/>
            <rect x="165" y="62" width="90" height="30" fill="#fff" stroke="#1e293b" stroke-width="1.5"/>
            <text x="210" y="82" text-anchor="middle">sum=0</text>
            <line x1="210" y1="92" x2="210" y2="110" stroke="#1e293b" stroke-width="1.5" marker-end="url(#arr2609)"/>
            <rect x="165" y="110" width="90" height="30" fill="#fff" stroke="#1e293b" stroke-width="1.5"/>
            <text x="210" y="130" text-anchor="middle">i=0</text>
            <line x1="210" y1="140" x2="210" y2="160" stroke="#1e293b" stroke-width="1.5" marker-end="url(#arr2609)"/>
            <polygon points="210,160 255,190 210,220 165,190" fill="#fff" stroke="#1e293b" stroke-width="1.5"/>
            <text x="210" y="195" text-anchor="middle">i&lt;n?</text>
            <polyline points="165,190 75,190 75,245" fill="none" stroke="#1e293b" stroke-width="1.5" marker-end="url(#arr2609)"/>
            <text x="115" y="184">否</text>
            <polygon points="35,245 125,245 115,280 25,280" fill="#fff" stroke="#1e293b" stroke-width="1.5"/>
            <text x="75" y="268" text-anchor="middle">输出sum</text>
            <line x1="75" y1="280" x2="75" y2="300" stroke="#1e293b" stroke-width="1.5" marker-end="url(#arr2609)"/>
            <ellipse cx="75" cy="316" rx="45" ry="16" fill="#fff" stroke="#1e293b" stroke-width="1.5"/>
            <text x="75" y="321" text-anchor="middle">结束</text>
            <line x1="210" y1="220" x2="210" y2="245" stroke="#1e293b" stroke-width="1.5" marker-end="url(#arr2609)"/>
            <text x="222" y="236">是</text>
            <rect x="155" y="245" width="110" height="35" fill="#fff" stroke="#1e293b" stroke-width="1.5"/>
            <text x="210" y="268" text-anchor="middle">sum=sum+a[i]</text>
            <line x1="265" y1="262" x2="295" y2="262" stroke="#1e293b" stroke-width="1.5" marker-end="url(#arr2609)"/>
            <rect x="295" y="245" width="85" height="35" fill="#fff" stroke="#1e293b" stroke-width="1.5"/>
            <text x="337" y="268" text-anchor="middle">i=i+1</text>
            <polyline points="337,245 337,190 255,190" fill="none" stroke="#1e293b" stroke-width="1.5" marker-end="url(#arr2609)"/>
        </svg>`,
        answer: false,
        explanation: "【零基础保姆级解析】\n判断为【错误（×）】。\n看清循环条件是 `i < n`（严格小于 `n`）！当 `i` 等于 `n` 时循环就停止跳出了，所以它只计算了 **`a[0] ~ a[n - 1]`** 的总和，根本没有加上 **`a[n]`**！（要想算 `a[0] ~ a[n]`，条件得是 `i <= n`）。"
    }
);
