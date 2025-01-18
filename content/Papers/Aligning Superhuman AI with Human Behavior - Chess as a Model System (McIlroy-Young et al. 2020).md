---
date: '2024-07-04'
---

[Paper](https://arxiv.org/pdf/2006.01855) /  [Code](https://github.com/CSSLab/maia-chess)

- AI has increasingly matched or surpassed human performance in various domains, raising the potential for collaborative AI-human tasks. However, AI's problem-solving methods often differ from humans, making them hard to interpret or learn from.
	- For AI to serve as a resource for humans to learn from, it must approximate human performance on an instance-by-instance basis, aligning with human behaviour.
	- This means AI systems should be able to emulate human behaviour at different expertise levels in a tuneable way
- The study uses chess as a model system due to its rich data and the wide range of human expertise recorded in online games.
	- Chess meets the criteria for a model system: superhuman AI performance, detailed recording of human decisions, and a wide range of player expertise.
	- The goal is to predict human moves, not just the best moves, and to do so at various skill levels, moving the goal from "What move should be played?" to "What move will a human play?".
- Maia is a customized version of [[AlphaZero]] trained on human chess games, achieving higher accuracy in predicting human moves than existing engines.
	- Unlike traditional chess engines (Stockfish, AlphaZero), Maia does not conduct any tree search for move prediction but uses a deep neural network trained on human games to predict the next human move.
	- Maia models are specifically trained on different skill levels, displaying peak performance in predicting moves for the skill level they were trained on, a behavior distinct from traditional engines.
- Currently, the approach to weakening chess engines is to reduce the depth they can look into the game tree, but this does not align the engine's behaviour with human behaviour at specific skill levels
	- Stronger versions of Stockfish, despite being highly optimized, do not predict human moves better than weaker versions, indicating a fundamental misalignment with human decision-making.
	- Maia outperforms both Stockfish and Leela (an opensource AlphaZero) in move prediction accuracy and can target specific human skill levels, demonstrating the need for AI trained explicitly on human decision data.
- Maia can also be trained on a specific individual's games and replicate their game movement. Furthermore, Maia can predict whether a human (of a specific rating) will make a significant blunder.
	- Services like this can be used to create educational chess software.
	- With [[Mechanistic Interpretability]], understanding the model's thought process can also be used as a way for humans to learn from the model
- Maia demonstrates how targeted training on human data can achieve high alignment with human behaviour, suggesting a roadmap for similar efforts in other domains.
	- Future research could explore the dimensions of human skill and extend these techniques to other high-stakes and interactive settings.