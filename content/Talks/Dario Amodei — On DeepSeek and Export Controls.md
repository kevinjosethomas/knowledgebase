---
date: 2025-01-31
---
[Article](https://darioamodei.com/on-deepseek-and-export-controls)

- This was an interesting article and gave me a new perspective from a source I believe to be reliable. Regardless, it is important to note that Dario Amodei is the founder of Anthrophic, a company in direct competition with DeepSeek.

> "Export controls serve a vital purpose: keeping democratic nations at the forefront of AI development."
### Three Dynamics of AI Development
1. **Scaling Laws:** "Given that all else equal, scaling up the training of AI systems leads to smoothly better results on a range of cognitive tasks, across the board"
	- Essentially, more data and more training consistently leads to stronger models. For example, a $1M model might solve 20% of important coding tasks, a $10M might solve 40%, $100M might solve 60%, and so on.
	- "It’s worth noting that the scaling curve analysis is a bit oversimplified, because models are somewhat differentiated and have different strengths and weaknesses; the scaling curve numbers are a crude average that ignores a lot of details."
2. **Shifting the Curve:** Improvements in an architecture of a model (for example, a tweak in the [[Transformers]] architecture) can shift the scaling law curve or help a model run more efficiently on existing hardware. Essentially, innovation in hardware or model architecture will shift the curve, so for example: "if the innovation is a 2x "compute multiplier" (CM), then it allows you to get 40% on a coding task for $5M instead of $10M; or 60% for $50M instead of $100M". 
	- "Every frontier AI company regularly discovers many of these CM's: frequently small ones (~1.2x), sometimes medium-sized ones (~2x), and every once in a while very large ones (~10x). Because the value of having a more intelligent system is so high, this shifting of the curve typically causes companies [to spend _more_](https://epoch.ai/blog/how-much-does-it-cost-to-train-frontier-ai-models#:~:text=The%20cost%20of%20training%20frontier,a%20billion%20dollars%20by%202027.), not less, on training models: the gains in cost efficiency end up entirely devoted to training smarter models, limited only by the company's financial resources."
	- Essentially, we make innovations to make AI cheap but overall, more money is still being spent as AI is not a single thing of constant quality. 
	- Ironically, in AP Microeconomics and AP Macroeconomics, this is essentially a shift in technology with shifts the [[1.3 — Production Possibilities Curve|Production Possibilities Curve]] outward and the [[3.3 — Short-Run Aggregate Supply (SRAS)|Short-Run Aggregate Supply Curve]] rightward
3. **Shifting the Paradigm:** Occasionally, the underlying thing that is being scaled also changes. For example, "from 2020-2023, the main thing being scaled was pretrained models: models trained on increasing amounts of internet text with a tiny bit of other training on top. In 2024, the idea of using [[Reinforcement Learning (RL)]] to train models to generate chains of thought has become a new focus of scaling"
### DeepSeek-V3
"DeepSeek-V3 was the real innovation and what _should_ have made people take notice a month ago (we certainly did). As a pretrained model, it appears to come close to the performance of state of the art US models on some important tasks, while costing substantially less to train"

However, "DeepSeek does not do for $6M what costs US AI companies billions", but "DeepSeek produced a model close to the performance of US models 7-10 months older, for a good deal less cost (but not anywhere near the ratios people have suggested)". Essentially, apparently DeepSeek's energy efficiency gains fit into the trend of scaling laws and what US companies have been achieving for the last few years—and "DeepSeek-V3 is not a unique breakthrough or something that fundamentally changes the economics of LLM’s; it’s an expected point on an ongoing cost reduction curve."

> "What’s different this time is that the company that was first to demonstrate the expected cost reductions was Chinese."

### DeepSeek-R1
R1 was the model that was triggered an explosion of public attention but is apparently much less interesting from an innovation or engineering perspective, especially compared to V3. "It adds the second phase of training — reinforcement learning, described in #3 in the previous section — and essentially replicates what OpenAI has done with o1"

### Export Controls
> "To the extent that US labs haven't already discovered them, the efficiency innovations DeepSeek developed will soon be applied by both US and Chinese labs to train multi-billion dollar models. These will perform better than the multi-billion models they were previously planning to train — but they'll still spend multi-billions. That number will continue going up, until we reach AI that is smarter than almost all humans at almost all things."
- This ties in to what was mentioned earlier within the curve shifting paradigm: any money saved by energy efficiency is still put into innovating for newer models

In the US, many companies will have the millions of chips that are required for AI research and development. If China gets the same, we'll live in a "bipolar world" where both countries have rapid advances in science and technology, but it'll still likely be unbalanced. "Even if the US and China were at parity in AI systems, it seems likely that China could direct more talent, capital, and focus to military applications of the technology. Combined with its large industrial base and military-strategic advantages, this could help China take a commanding lead on the global stage, not just for AI but for everything."

> "If China can't get millions of chips, we'll (at least temporarily) live in a unipolar world, where only the US and its allies have these models. It's unclear whether the unipolar world will last, but there's at least the possibility that, because AI systems can eventually help make even smarter AI systems, a temporary lead could be parlayed into a durable advantage. Thus, in this world, the US and its allies might take a commanding and long-lasting lead on the global stage."
- Amodei champions for well-enforced export controls on outgoing chips to help maintain this unipolar society: "It appears that a substantial fraction of DeepSeek's AI chip fleet consists of chips that haven't been banned (but should be); chips that were shipped before they were banned; and some that seem very likely to have been smuggled. This shows that the export controls are actually working and adapting: loopholes are being closed; otherwise, they would likely have a full fleet of top-of-the-line H100's. If we can close them fast enough, we may be able to prevent China from getting millions of chips, increasing the likelihood of a unipolar world with the US ahead."

--- 

> Given my focus on export controls and US national security, I want to be clear on one thing. I don't see DeepSeek themselves as adversaries and the point isn't to target them in particular. In interviews they've done, they seem like smart, curious researchers who just want to make useful technology.

> But they're beholden to an authoritarian government that has committed human rights violations, has behaved aggressively on the world stage, and will be far more unfettered in these actions if they're able to match the US in AI. Export controls are one of our most powerful tools for preventing this, and the idea that the technology getting more powerful, having more bang for the buck, is a reason to lift our export controls makes no sense at all.

---

Also wrote about Dario Amodei on [[Dario Amodei — Lex Fridman Podcast]]