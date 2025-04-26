---
date: 2025-04-25
---
[Article](https://www.darioamodei.com/post/the-urgency-of-interpretability#fn:1)

- AI’s progress is unstoppable; however, _how_ it unfolds—the order of developments, applications, and societal rollouts—is still malleable
	- "We can’t stop the bus, but we can steer it"
- Interpretability—the ability to understand AI’s internal workings—is emerging as a crucial area, offering a rare chance to meaningfully guide AI before it becomes overwhelmingly powerful
	- Today’s generative AI models are black boxes; we have little real understanding of why they behave the way they do
	- Without interpretability, we risk being blindsided by misalignment, deception, power-seeking behaviours, and misuse in critical domains like biosecurity or finance
- Recent breakthroughs in [[Mechanistic Interpretability|mechanistic interpretability]] suggest that it’s now plausible to build something like an “MRI for AI” before transformative AI systems arrive—but we’re in a race against time
- "Powerful AI will shape humanity’s destiny, and we deserve to understand our own creations _before_ they radically transform our economy, our lives, and our future."
### The Dangers of Ignorance
- Traditional software is very explicitly programmed, where someone has developed it so it does exactly as instructed. AI models, however, operate through emergent, unpredictable structured
	- Behaviour is often inexplicable at a fundamental level—and it's impossible to intuitively understand why the model makes a certain decision
	- Essentially, models are *grown* more than they are *built*. We set the parameters and conditions that shape growth (like providing water, sunlight, etc) but the actual structure of the output is unpredictable and inexplicable
	- Inside the system is just billions of numbers (weights, biases, parameters) that can somehow compute important cognitive tasks
- Most of the risks that are tied to artificial intelligence stem from this opacity:
	- Alignment issues are much harder to detect when you don't know why the model is doing what it's doing; so you might end up with misaligned models that are power-seeking or seek to deceit without detectable signs
	- Since these models are trained on most of the internet, they also withhold information that can be misused. For example, aiding in biological weapon design or any other nefarious purposes
		- Filters can only really be put on models that are served via an API—and any open-source/open-weight model's guardrails can simply be stripped away
	- Lack of transparency also means that these models can't be used in high-stakes environments like finance or healthcare—where explainability is legally required

### A Brief History of Mechanistic Interpretability
- Early work (2014-2020) largely focused on vision models, where we found that neurons linked to human-understandable concepts
	- This is described in [[Polysemanticity]], and OpenAI's interpretability research into [[Contrastive Language-Image Pretraining (CLIP)]] was also quite popular: [Multimodal neurons in artificial neural networks](https://openai.com/index/multimodal-neurons/)
	- This ties into early neuroscience hypotheses suggesting that the human brain has neurons corresponding to specific people or concepts
- At Anthropic, they shifted the focus to interpreting language models:
	- Initially, neurons were discovered to be tied to certain language tasks: copying, pattern-matching, etc
	- Discovered [[Superpositioning|superpositioning]], which occurred when neurons were overloaded with many entangled concepts—which temporarily stalled interpretability
- Sparse Autoencoders
	- Discovered sparse autoencoders—which enabled the isolation of *features* within language models, which corresponded to varying topics
	- Medium-sized models (like Claude 3 Sonnet) were mapped and found to have over 30 million features—where each represents a different topic like "genres of music expressing discontent"
	- Once a feature is discovered, it's importance could be increased or decreased—almost like zapping a precise part of someone's brain
- Features -> Circuits
	- Circuits are essentially a series of features which represent higher-order reasoning steps; basically, how models infer, combine, and act on concepts
	- "With circuits, we can *trace* the model’s thinking.  For example, if you ask the model *What is the capital of the state containing Dallas?*, there is a *located within* circuit that causes the *Dallas* feature to trigger the firing of a *Texas* feature, and then a circuit that causes *Austin* to fire after *Texas* and *capital*."

### The Utility of Interpretability
- Most of the current mechanistic interpretability research is highly abstract and theoretical—which must be bridged to actionable safety impact
- Early experiments at Anthropic and beyond have shown that interpretability can:
	- Help diagnose deliberately introduced alignment flaws
- The goal is for interpretability to become a core diagnostic method—akin to how MRI scans detect diseases
	- These tools should function like unit tests for model aligment where they identify if new state-of-the-art models have issues like tendencies to deceive, power-seeking, flaws in jailbreaks, and cognitive strengths/weaknesses of the model overall

### What We Can Do
- Based on the current pace of AI innovation, it is highly likely that model capabilities will reach a point where we simply have a "country of geniuses" within a single datacenter (by 2026-27)
	- This is especially concerning since interpretability efforts lag behind actual progress in intelligence
	- "These systems will be absolutely central to the economy, technology, and national security, and will be capable of so much autonomy that **I consider it basically unacceptable for humanity to be totally ignorant of how they work.**"
- There are three urgent actions to tip the scales:

1. Researchers must double down on interpretability:
	- Interpretability gets far less attention than new model releases, but is arguably *more* important for our future
	- Now is an ideal time to join the field—especially when recent breakthroughs have opened up many promising avenues for research
	- Interpretability feels like basic science; large parts of it can be tackled without vast compute budgets
	- Neuroscientists especially should consider shifting—analyzing artificial neural networks is often easier than studying biological ones, and findings could inform both fields (just like [[Arthur Conmy — Hack Club AMA|Arthur Conmy]] brought up!)
2. Governments must encourage transparency—not heavy-handed regulation
	- While it is too early to mandate AI MRI practices formally; field is too young for sensible legal definitions,
	- Governments can mandate transparent disclosure of safety and security practices:
		- Companies should be required to publicly explain their Responsible Scaling Policies (RSPs) and how they test models with interpretability
		- This fosters a "race to the top"—good actors will be rewarded; weak actors will be visible
3. [[Dario Amodei — On DeepSeek and Export Controls|Export Controls on Autocracies]]
	- Effective export controls on AI chips to China serve two purposes:
		- Ensure democracies maintain a clear lead over autocracies in AI development
		- Create a "security buffer"—an extra 1–2 years that could allow interpretability to mature before transformative AI arrives
	- "One year ago we couldn’t trace the thoughts of a neural network; today we can"—each year of progress matters enormously
	- If the US and China reach frontier AI at the same time, geopolitical pressure will make any slowdown impossible
	- A small lead could allow democracies to steer AI more safely without surrendering global advantage

- All three measures—accelerating interpretability, mandating transparency, and maintaining export controls—are good ideas even without the race dynamic
	- But they become _essential_ when recognizing how little time humanity may have to truly understand the AI systems it is building
- "Powerful AI will shape humanity’s destiny, and we deserve to understand our own creations _before_ they radically transform our economy, our lives, and our future."