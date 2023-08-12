#### ChatGLM-6B
##### 介绍
ChatGLM-6B是由清华大学和智谱AI联合研发的产品，是一个开源的、支持中英双语的对话语言模型，基于General Language Model (GLM) 架构，具有62亿参数。结合模型量化技术，用户可以在消费级的显卡上进行本地部署（INT4量化级别下最低只需6GB显存）。ChatGLM-6B使用了和ChatGPT相似的技术，针对中文问答和对话进行了优化。经过约1T标识符的中英双语训练，辅以监督微调、反馈自助、人类反馈强化学习等技术的加持，62亿参数的ChatGLM-6B已经能生成相当符合人类偏好的回答。

##### 官网
ChatGLM官网：https://chatglm.cn

ChatGLM-6B开源地址：https://github.com/THUDM/ChatGLM-6B
##### ChatGLM2-6B
ChatGLM2-6B是开源中英双语对话模型ChatGLM-6B的第二代版本，在保留了初代模型对话流畅、部署门槛较低等众多优秀特性的基础之上，ChatGLM2-6B引入了如下新特性：
1.更强大的性能

基于ChatGLM初代模型的开发经验，ChatGLM2-6B全面升级了的基座模型。ChatGLM2-6B使用了GLM的混合目标函数，经过了1.4T中英标识符的预训练与人类偏好对齐训练，评测结果显示，相比于初代模型，ChatGLM2-6B在MMLU（+23%）、CEval（+33%）、GSM8K（+571%） 、BBH（+60%）等数据集上的性能取得了大幅度的提升，在同尺寸开源模型中具有较强的竞争力。

2.更长的上下文

基于FlashAttention技术，我们将基座模型的上下文长度（Context Length）由ChatGLM-6B的2K扩展到了32K，并在对话阶段使用8K的上下文长度训练，允许更多轮次的对话。但当前版本的ChatGLM2-6B对单轮超长文档的理解能力有限，会在后续迭代升级中着重进行优化。

3.更高效的推理

基于Multi-Query Attention技术，ChatGLM2-6B有更高效的推理速度和更低的显存占用。在官方的模型实现下，推理速度相比初代提升了42%，INT4量化下，6G显存支持的对话长度由1K提升到了8K。

4.更开放的协议

ChatGLM2-6B权重对学术研究完全开放，在获得官方的书面许可后，亦允许商业使用。为了方便下游开发者针对自己的应用场景定制模型，我们同时实现了基于P-Tuning v2的高效参数微调方法 (使用指南)，INT4量化级别下最低只需7GB显存即可启动微调。

ChatGLM2-6B开源地址：https://github.com/THUDM/ChatGLM2-6B