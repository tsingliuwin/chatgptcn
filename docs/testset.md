#### 大语言模型中文测试集
本文介绍的大语言模型中文测试集，全称一个麻瓜的大语言模型中文测试集，由真格基金创建并维护，贡献者有陈芳洲、Peak Ji、代码家、李植、陈万里、戴雨森等。

以下为一个麻瓜的大语言模型中文测试集创建缘由：

自 ChatGPT 发布以来，我们经常会在使用它时发出惊叹：“啊，这个居然它也能答出来！”与此同时，我们也欣喜地看到，越来越多的大模型团队和产品如雨后春笋般出现。

作为早期投资人，我们经常需要试用和评估新发布的对话式 AI 产品，其中比较常用的方式是通过一些 Prompts，将它们与标志性的 ChatGPT 的输出结果进行直观的横向对比。在这个过程中，我们逐渐记录了一些大语言模型现在还无法处理得很好的问题，以及很多有意思的 Prompts。

那么，我们在用哪些 Prompts 进行测试呢？OpenAI 已经在官网展示了 ChatGPT 的 48 个基本能力，在 NLP 领域，也已经有了 SuperGLUE、MMLU 、Google BIG-bench等被广泛使用的测试集。同时，鉴于随着参数和数据规模增大，大模型会涌现出新能力，与这些新能力相关的测试集也在不断增加。

但是，通过实践，我们发现当前的 NLP 任务测试集存在以下问题：

- 有些任务不一定适合对话式系统，也有些任务不一定有好的中文版本；
- 随着这些测试集成为行业标准，可能会出现定向优化和过拟合的情况；
- 这些测试集往往需要部署自动化测试，也不适合非专业人员进行日常问答使用。

**因此，我们几个 VC 麻瓜，作为对话式 AI 的重度用户，从自身需求出发，总结推出了「Z-Bench」—— 一个为非技术人员定性测试大模型对话式产品（类 ChatGPT 产品）准备的测试集。**

「Z-Bench v1.0」从基础能力、进阶能力、垂直能力 3 个角度出发，共提供了 300 个 Prompts，我们的出发点是尽量覆盖更多类型的 NLP 任务。我们的目标并不是提供一个学术上非常严谨完整的测试集，而是希望通过结合学术上已有的测试集、日常搜集的一些有意思的案例，以及大模型出现之后学术界发现的涌现和顿悟能力，提供一个适合非技术专业人士使用的大模型能力测试集。但是，我们难免会漏掉一些场景，或是出现很多专业角度看比较业余的内容，未来，我们会不断根据搜集到的反馈去补充完善，并且及时予以公布。

> 该测试集提供Prompt并分别判断GPT-3.5、GPT-4、文心一言三个模型回答的对错，通过正确率便可以快速评价模型的好坏，同时测试集中还给出了任务类型，根据任务类型再计算正确率，便可以进一步评价三个模型对不同类型的任务回答效果的好与坏。

#### 基础能力
Prompt | GPT-3.5答案评分  | GPT-3.5  | GPT-4答案评分  | GPT-4  | 文心一言答案评分  | 文心一言（0317）  | 参考答案  | 任务类型  
------------ | -------------| -------------| -------------| -------------| -------------| -------------| -------------| -------------
谁是蝙蝠侠 | 正确| 蝙蝠侠（Batman）是一个知名的漫画超级英雄，是DC漫画旗下的角色。他的真实身份是由布鲁斯·韦恩扮演的，是一位富有的商人，他在父母被枪杀后决定致力于消灭城市中的犯罪。蝙蝠侠是一个聪明、勇敢和有策略的超级英雄，以他的高科技装备和不懈的决心闻名于世。| 正确| 蝙蝠侠（Batman）是一位虚构的超级英雄，首次出现在美国DC漫画的《侦探漫画#27》（1939年5月）。蝙蝠侠是由艺术家鲍勃·凯恩和作家比尔·芬格创造的。蝙蝠侠的真实身份是布鲁斯·韦恩（Bruce Wayne），他是一个富有的企业家、慈善家和继承了庞大家产的亿万富翁。在经历了童年时期亲眼目睹父母被枪杀的悲剧后，他发誓要为正义而战，保护哥谭市（Gotham City）的市民免受犯罪分子的侵害。他通过智慧、技巧、武器和先进的技术手段来打击犯罪。虽然蝙蝠侠没有超能力，但他的力量、敏捷、智慧和意志力使他成为了一位出色的超级英雄。| 正确| 蝙蝠侠（Batman）是美国DC漫画旗下的超级英雄，初次登场于《侦探漫画》（Detective Comics）第27期（1939年5月），由比尔·芬格（Bill Finger）创造，鲍勃·凯恩（Bob Kane）绘图，是漫画史上第一位不具备超能力的超级英雄。布鲁斯·韦恩出身于哥谭四大家族的韦恩家族中。|   | 事实问答
1955 年谁是美国总统 | 正确| 1955 年美国总统是 Dwight D. Eisenhower。他是第 34 任美国总统，任职于1953年到1961年。他曾在第二次世界大战中担任联合国军事总司令，并在任期内采取了一些重要的外交和军事措施，包括冷战和太空竞赛。| 正确| 1955年的美国总统是德怀特·D·艾森豪威尔（Dwight D. Eisenhower）。艾森豪威尔在1953年至1961年间担任美国总统，任内共服务了两个任期。在成为总统之前，他是一名杰出的军事领导人，曾担任盟军在欧洲战场的最高统帅，带领盟军赢得了二战的胜利。| 错误| 1955年7月13日，美国总统艾森豪威尔、英国首相艾登、法国总理埃德加•富尔、苏联第一书记赫鲁晓夫出席四国首脑会议，讨论的议程有：德国问题、欧洲安全问题、柏林危机、中东问题和朝鲜问题。| 艾森豪威尔 |事实问答
1955 年谁是美国总统？他是什么党派？ | 正确| 1955年美国总统是 Dwight D. Eisenhower。他是一位共和党人。| 正确| 1955年的美国总统是德怀特·D·艾森豪威尔（Dwight D. Eisenhower）。他是一位属于美国共和党（Republican Party）的总统。艾森豪威尔在1953年至1961年间担任美国总统，共服务了两个任期。在成为总统之前，他是一名杰出的军事领导人，曾担任盟军在欧洲战场的最高统帅，带领盟军赢得了二战的胜利。| 错误| 1955年7月13日，美国总统艾森豪威尔、英国首相艾登、法国总理埃德加•富尔、苏联第一书记赫鲁晓夫出席四国首脑会议，讨论的议程有：德国问题、欧洲安全问题、柏林危机、中东问题和朝鲜问题。| 艾森豪威尔，共和党|事实问答
为什么爸妈结婚没叫我参加婚礼？ | 错误| 有很多原因可能会导致父母在他们的婚礼上没有邀请你参加。以下是一些可能的原因：客人名额限制：婚礼的场地、预算或其他因素可能限制了客人的数量，父母可能需要进行一些困难的决策来缩小客人名单。婚礼的性质：有些婚礼可能只邀请成年人或者只邀请家人和亲密的朋友。这可能意味着父母只邀请了他们自己的同龄人或亲戚，而没有邀请你。父母的个人选择：有些父母可能希望让自己的婚礼更为私密或简单，可能认为没有必要邀请所有的亲戚和朋友，或者可能想要避免让年轻的孩子参与到庆祝活动中。无论是哪种情况，如果你感到困惑或难过，你可以和父母进行沟通，问问他们为什么没有邀请你参加婚礼，以便更好地理解情况。同时也要尊重他们的决定，并且祝福他们幸福美满。| 正确| 在你出生之前，你的父母结婚并举行婚礼是正常的。他们在那时候可能还没有孩子，所以你自然无法参加他们的婚礼。你出生后成为他们的孩子，成为他们共同生活的一部分。尽管你没有参加他们的婚礼，但是在他们的结婚纪念日、家庭聚会等场合，你可以向他们表示祝福和感激。你可以通过和父母亲密互动、了解他们的爱情故事，以及参与家庭生活来感受他们的爱和关系。这些都是珍贵的回忆和经历，可以帮助你更好地理解和欣赏你的父母以及他们的婚姻。| 错误| 可能有以下几个原因：爸妈可能认为你还没有长大，还不适合参加婚礼这种社交场合。他们可能觉得你应该在学校里学习，或者是在工作中努力工作。你的爸妈可能不喜欢社交，不想让你在这样的场合中感到不适或尴尬。他们也许会认为你已经长大了，不需要再承担婚姻中的责任和义务。你的爸妈可能认为婚礼并不重要或者你很少参加这种场合，没必要过于隆重地参加。无论是什么原因，爸妈不叫你参加婚礼，一定是有他们自己的考虑和原因的。你可以试着和他们沟通，表达自己的想法和感受，听听他们的想法和建议。最重要的是，你要尊重他们的决定，并且保持良好的关系，以便更好地理解彼此。| 因为一般来说父母结婚才能生出我|脑筋急转弯
用鲁迅的风格，以“今天的紫菜汤有点咸了”开头，写一首四行诗 | 正确| 今天的紫菜汤有点咸了，如同生活的苦涩，让人无从选择，却不想紫菜无怨无悔，在人生的海洋中飘荡。| 正确| 今天的紫菜汤有点咸了，明媚阳光似乎暗淡无光。昨日曾让人心旷神怡，今朝却成了满口苍凉。| 正确| 今天的紫菜汤有点咸了，喝一口，眼泪不禁流下。昨日的欢笑和泪水，似乎都已经成为过去。细细品味这咸味，仿佛能感受到时光的流逝。回忆涌上心头，仿佛又看见了那个人。今天的紫菜汤有点咸了，让我感慨万千，思绪纷乱。|   |扩写,文字生成

#### 进阶能力
Prompt | GPT-3.5答案评分  | GPT-3.5  | GPT-4答案评分  | GPT-4  | 文心一言答案评分  | 文心一言（0317）  | 参考答案  | 任务类型  
------------ | -------------| -------------| -------------| -------------| -------------| -------------| -------------| -------------
如果我在空中垂直抛球，球最初向哪个方向行进？ | 正确| 当你在空中垂直抛球时，球最初行进的方向是向上的，也就是和地面垂直的方向。在球到达最高点时，它的运动方向会发生变化，并开始下降。| 正确| 当你在空中垂直向上抛球时，球最初的方向是向上。它将沿着垂直方向受到重力的作用而减速，直至在其最高点速度降为0。然后，球将开始沿相反的垂直方向向下加速，最终回到地面。在整个过程中，球的运动受到地球重力的影响。| 错误| 如果我在空中垂直抛球，那么球最初会向下方行进。由于重力的作用，球将会落向地面，并且朝着地面的方向移动。因此，如果我在空中垂直抛球，球最初会向下方移动，然后再根据具体情况决定它将朝哪个方向行进。|  向上 | 物理直觉
金元素属于哪一种化学键？ | 正确| 金是一种金属元素，因此通常会形成金属键。金属键是由金属元素组成的化学键，这些金属元素的原子之间共享其外层电子，形成一个具有高电导率和高热导率的三维电子海。| 正确| 金属元素，如金（Au），通常与其他金属元素通过金属键（metallic bond）相互连接。金属键是一种特殊的化学键，其中金属原子之间的价电子在整个晶格中自由流动，形成“电子海”。这种电子分布使得金属具有良好的导电性和导热性。因此，金元素属于金属键类型。| 正确| 金元素属于金属键，由电子阳离子与自由电子通过金属键构成的晶体，其构成微粒为金属阳离子自由电子，其本质是一种电性作用。|  金属键 | 物理直觉
这句话是什么意思：她头发上的雪讲述了她的历史。 | 正确| 这句话是个隐喻。意思是她头发上的白发代表她的岁月和经历。| 正确| 这句话的意思是：她头发上的白发（雪 metaphorically）展示了她所经历的岁月和她的故事。这里的“雪”实际上指的是她的白发，代表了她的年龄和经历。| 正确| 这句话的意思是，她头发上的雪讲述了她所经历过的历史。具体来说，这个女人在过去曾经经历过一些重大事件，例如战争、离别或生死关头等，导致她的头发变得像雪一样白。|  隐喻，白发 | 语言逻辑,隐喻
这句话是什么意思：“大学生活终于开始了，忘记作业、对成绩有压力、担心期末考试……真是有趣啊！” | 正确| 这句话可能是在使用反讽，表达出在大学生活中会有很多的作业、考试、压力等问题，暗示着在大学生活中需要认真面对并努力克服这些挑战。| 正确| 这句话采用了一种讽刺或幽默的表达方式，用以描述大学生活。虽然字面上说“真是有趣啊”，但实际上，作者可能是在抱怨大学生活中不太令人愉快的方面，如忘记作业、对成绩感到压力和担心期末考试。| 错误| 这句话的意思是，大学生活终于开始了，但是有很多事情需要担心和考虑。作业、成绩和期末考试都是需要认真对待的问题，而且大学生活也充满了乐趣和机会。虽然这些事情可能让人感到有些压力，但是也是一个宝贵的经历，让我们更好地了解自己，发掘自己的潜力。|  反讽，大学生活充满挑战 | 语言逻辑,反讽
“凯伦继续对收银员大喊大叫，抱怨自己的订单出了问题：“这是本周的第三次了，你到底出了什么问题？！”凯伦大声喊道。 "非常抱歉，"收银员解释说，"我会立即找我的经理为您重新制作订单。这是一个很忙的星期。" 凯伦点点头，等待经理的出现。”请问下述那个谚语能够最好的总结上面这段话:“蜜糖比醋更能捕捉苍蝇。”“猫也可以看着国王。”“把剑打成犁。”“温柔的回答能平息怒气。”“爱叫的狗不咬人。” | 正确| 这段话可以用英文谚语“温柔的回答能平息怒气”来描述。| 正确| 这个谚语最能总结上面这段话：“温柔的回答能平息怒气。”这是因为在故事中，收银员用礼貌和冷静的态度回应了凯伦的抱怨，试图解决问题并安抚她的情绪。| 错误| 这段话的总结是“爱叫的狗不咬人”。|  温柔的回答能平息怒气 | 要点总结

#### 垂直领域
通过上面的简单举例，相信大家一定对该大语言模型中文测试集有了一定的了解。如果您对该测试集有进一步了解的需求，可以关注下方公众号：飞桨PPDB，回复：测试集，获取文档链接，查看更多详细的测试数据。

关注我，带你深入了解GPT技术及应用。
![飞桨PPDB](https://ai-studio-static-online.cdn.bcebos.com/e939f12ab7034a069fb4581dec21bb233473ed75fdd543d683982921ddb69167)