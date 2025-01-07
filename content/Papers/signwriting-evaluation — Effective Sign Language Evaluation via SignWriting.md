[Paper](https://arxiv.org/pdf/2410.13668) / [Code](https://github.com/sign-language-processing/signwriting-evaluation)

SignWriting, which is a visual written notation for sign languages, lacks tailored evaluation metrics. Existing metrics like BLEU and chrF are not suitable as SignWriting has visual and spatial properties. The ``signwriting-evaluation`` toolkit presents a new **Symbol Distance Metric** that can be used to evaluate signwriting.

### Evaluation Metrics
1. BLEU
	- BLEU was adapted to SignWriting by tokenizing Formal SignWriting (FSW) into sequences of symbols, where each symbol represented a handshape, movement, facial expression, or position
	- BLEU Evaluation struggles because it requires exact symbol position matches, which means minor shifts drastically reduced scores
	- It also ignored the similarity between symbols, and is sensitive to flexible symbol ordering in FSQ, which misrepresents actual similarity.
2. chrF
	- chr-F could capture character-level variation in symbols and is less sensitive to tokenization issuescompared to BLEU. However, it still overlooks the visual and spatial semantics of symbols, and cannot effectively assess the positional and structural meaning of SignWriting symbols
3. CLIPScore
	- CLIPScore uses [[Contrastive Language-Image Pretraining (CLIP)]] to measure the similarity between image and text embeddings. It was not adapted for a SignWriting usecase, but SignWriting scripts were converted into images and CLIP was used to calculate the cosine similarity between embeddings of the image and text
	- This could account for some nuances missed by token-based metrics but, since it wasn't trained on SignWriting data, it produced overly similar embeddings for different SignWriting images.
- Symbol Distance Metric (Proposed Novel Metric)
	- This metric essentially utilizes:
		- **Symbol Attributes:** Compares visual features like handshape, orientation, rotation, and position
		- **Distance Calculation:** Uses a distance function weighted by the significance of attributes
		- **Optimal Matching:** Uses the Hungarian algorithm to find the best match between symbols in the hypothesis and reference, minimizing total symbol distance
		- **Normalization:** Normalizes distances with a non-linear function and adjusts for differences in the number of symbols between signs using an adjustment factor
	- and finally combines all these factors to produce a similarity score between 0 and 1, where higher scores indicate closer matches
	- Since this metric is tailored to SignWriting, it can capture subtle meaningful differences in symbols, and also accounts for positional and structural discrepancies, as well as symbol-level attributes
