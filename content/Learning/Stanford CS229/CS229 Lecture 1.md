---
date: 2025-07-30
---
### What is Machine Learning?
> Arthur Samuel (1959): Machine learning is the field of study that gives the computer the ability to learn without being explicitly programmed.

> Tom Mitchell (1998): A computer program is said to learn from experience $E$ with respect to some class of tasks $T$ and performance measure $P$, if its performance at tasks in $T$, as measured by $P$, improves with experience $E$.

A high-level taxonomy of machine learning would highlight three main tasks:
- [[Supervised Learning]]
	- Given a dataset that contains $n$ samples ($x$, $y$), how do we predict $y$ with unseen values of $x$ (ex: [[Simple Linear Regression]], [[Multiple Linear Regression]], [[Logistic Regression]], etc)
	- In most modern machine learning applications, there is far more than one input $x$. For example, in the problem of predicting house prices, there can be many features (inputs) from plot size to zip code to condition and so on. All these inputs factor into more accurately predicting the final output price.
		- Sometimes, we also have infinite dimensional features, where we can combine features into other features. For example, taking the product of two raw features and using it as a new feature
		- We will also learn about selecting features based on the data, considering some inputs are more important than others
	- There are two primary supervised problems, depending on the type of labels we have:
		- **[[Regressions|Regression:]]** where $y \in \mathbb{R}$ is a continuous variable that we try to predict. For example, predicting prices via [[Simple Linear Regression]]
		- **[[Classification|Classification:]]** where the label is a discrete variable. For example, predicting the type of a house (townhouse/apartment/etc) via linear classifier or clustering
	- Has many broad applications: [[Computer Vision|Image Classification in Computer Vision]], [[Natural Language Processing|Machine Translation in Natural Language Processing]]
- [[Unsupervised Learning]]
	- Given a dataset that contains $n$ unlabeled samples, how do we label them? See here:![[Pasted image 20250801162935.png]]
	- A lot of new advancements in word embeddings ([[word2vec]], [[GloVe]], etc) are enabled by unsupervised learning. Essentially, it allows us to find patterns within large corpora of text to create vector representations of words
	- With this, we've also had the new breakthrough of [[Large Language Model (LLM)||Large Language Models]] that can be used for many purposes (GPT, Llama, etc)
- [[Reinforcement Learning (RL)]]
	- In contrast to making one-shot predictions, RL focuses on making sequential decisions where every choice leads to different circumstances where we continue the decision-making process, with the goal of optimizing toward a certain objective
	- The high-level RL strategy is a loop between data collection and training, where we continually try new strategies, collect feedback, and improve the strategy based on the feedback
	- This is how modern breakthroughs like [[AlphaGo]], [[AlphaZero]], and humanoid robot policy is implemented. We also post-train LLMs with [[RLHF]] to optimize for human preferences

Overall, this course will cover:
- Deep learning basics
- Supervised learning
- Unsupervised learning
- Large language models
- Reinforcement learning
- Learning theory:
	- Bias variance tradeoff
	- Feature selection
	- ML advice
- Broader aspects of ML
	- Robustness/fairness in society