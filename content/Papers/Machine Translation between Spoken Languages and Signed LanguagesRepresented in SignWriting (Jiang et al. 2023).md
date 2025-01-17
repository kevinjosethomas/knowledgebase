[Paper](https://aclanthology.org/2023.findings-eacl.127/)
![[Pasted image 20241209000758.png]]
- In SignBank, there are roughly 220k parallel samples from 141 puddles covering 76 language pairs, yet the distribution is unbalanced
- **Notably, most of the puddles are dictionaries, which we consider less valuable than sentence pairs (instances of continuous signing) for a general MT system. If dictionaries are used as training data, we expect models to memorize word mappings and not learn to generate sentences.**
	- Therefore, we treat the four sentence-pair puddles of the relatively high-resource language pairs as primary data and the other dictionary puddles as auxiliary data. Note that even the language pairs constituting the high-resource pairs of SignBank are low-resource compared to datasets used in mature MT systems for spoken languages, where millions of parallel sentences are commonplace
- en-us (American English & American Sign Language) has 43,698 pairs

- For encoding (when FSW is the source), they embed each factor separately and then concatenate them to the aligned symbol's embedding. For decoding (when FSW is the target), they use a subset of factors (absolute x and y) because others are irrelevant for prediction.
 
It is not obvious how to best decode to FSW. We try the following strategies:
1. predicting everything (including positional numbers) as target tokens all in one long target sequence, inspired by Chen et al. (2022)
2. predicting symbols only (as a comparative experiment)
3. predicting symbols with positional numbers as target factors