---
date: '2024-11-07'
---
Recurrent Neural Networks are designed to process sequential data: timeseries, text, speech, video, etc. While most neural networks assume that inputs are independent of each other, RNNs have a "memory" that helps remember previous inputs, making them useful where past information is relevant to the current input. They are mainly used for NLP tasks, speech recognition, weather forecasting, music generation, etc. Recently, RNNs have been largely supplanted by [[Transformers]] and similar architectures with superior performance.

RNNs have multiple steps in their inference process. At each time step, it takes the current input (e.g.: a word in a sentence) and combines it with hidden state from the previous step. This hidden state essentially serves as memory, holding onto relevant information from earlier. The RNN then produces an output (prediction/classification/etc) at each step, usually depending on both the current input and memory of past inputs in the hidden state.

![[Pasted image 20241107234739.png]]
### Sources
- https://towardsdatascience.com/introducing-recurrent-neural-networks-f359653d7020