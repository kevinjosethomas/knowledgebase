[Paper](https://arxiv.org/pdf/1409.0473)
## Introduction
- Neural machine translation attempts to create a single neural network which uses encoders and decoders to parse the input sentence into a fixed-length vector, which is then decoded back to text in the target language
- This leads to issues with logn sentences because they need to be compressed into a fixed-length vector
- To combat this, the proposed solution is an extension of the encoder/decoder model which uses search to find positions in the source sentence with concentrated information and then predicts the target word based on context vectors of the source positions and the previously translated word
- Instead of encoding the entire input sentence into a single fixed-length vector, it encodes the input sentence into a sequence of vectors and then only chooses a subset of vectors while decoding the translation

