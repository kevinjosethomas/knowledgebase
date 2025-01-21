---
date: '2024-07-09'
---
[Paper](https://arxiv.org/abs/2305.17714)
### Introduction
- Sign language systems are complicated, and its hard to compare methods across publications
	- This paper is completely opensource, and it provides an implementation of text-to-gloss-to-pose-to-video for German, Swiss, French, and Italian sign language
- Furthermore, there is no baseline for sign language translation systems, making it hard to measure progress and test the effectiveness of new methods and systems
	- This paper serves as an open-source baseline to make sign language translation systems available and accessible

### Background
- This paper features a pipeline approach: text-to-gloss-to-pose-to-video
	- **text-to-gloss:** converts spoken language text into sign language gloss
	- **gloss-to-pose:** converts sign language gloss into a sequence of poses
	- **pose-to-video:** converts sequences of poses into photorealistic video
- Text-to-Gloss
	- Appealing area of research because of its simplicity to integrate into existing neural machine translation pipelines 
	- **Zhao et al. (2000)** used Tree Adjoining Grammar (TAG) based systems to translate English to ASL gloss sequences. They parsed English text and assembled an ASL gloss tree using Synchronous TAGs by associating ASL elementary trees with English elementary trees and associating the nodes at which subsequent substitutions or adjunctions can occur.
	- **Othman and Jemni (2012)** transformed English sentences from the Gutenberg Project into ASL gloss. This corpus contained over 100 million synthetic sentences and 900 million words. It is the most extensive English-ASL gloss corpus known.
	- **Egea Gomez et al. (2021)** created a syntax-aware transformer for the same task. They injected word dependency tags to augment embeddings inputted to the encoder.

### Method
Text-to-Gloss:
- For text-to-gloss translation, this paper has three alternatives:
	- Lemmatizer
	- Rule-based word reordering and dropping component
	- Neural machine translation
- Lemmatizer
	- Uses Simplemma multilingual lemmatizer for Python
	- It reduces words into their base form, which is useful to preserve meaning while reducing input complexity
	- This approach is limited by the use of the simplistic context-free lemmatizer
- Rule-based Word Reordering and Dropping
	- ASL to Gloss can be summarized by:
		- Removing word inflection
		- Omitting punctuation and specific words
		- Reordering words
	- Uses spaCy for lemmatization, PoS tagging and dependency parsing. This lemmatizer is language specific and context based
	- Drops words that are not content words (largely unused in signed languages) like articles and prepositions. Keeps possessive and personal pronouns, as well as nouns, verbs, adjectives, adverts, and numerals
	- Uses a short list of syntax transformation rules based on ASL grammar and the corresponding spoken language. Essentially, reorders subject/verb/object
- Neural Machine Translation
	- Uses Public DGS Corpus
	- Train NMT models with Sockeye 3
		- These are standard Transformer models with some modified hyperparameters for a low-resource scendario
	- NMT system is trained with three-way weight tying between source embeddings, target embeddings matrix and softmax output