Long Short-Term Memory models are a type of [[Recurrent Neural Networks (RNN)]] that are specifically designed to learn and remember patterns over time. They address the challenges faced by traditional RNNs, particularly the problem of vanishing and exploding gradients, which made it difficult to learn long-term dependencies in sequential data. LSTMs are mostly used for sequential data tasks, especially [[Natural Language Processing]], speech recognition, time series prediction, etc
### How LSTMs Work
LSTMs use a special structure known as a memory cell to store information over time. Each cell has gates that regulate the flow of information, and they decide what to keep, update, or discard. These gates are implemented using neural network layers with [[Sigmoid Activation Function|sigmoid]] or [[Hyperbolic Tangent Activation Function (tanh)|tanh]] activations.
##### **Forget Gate ($f_t$)**
Decides what information to discard from the cell state. It is represented by the formula:
$$f_t = \sigma(W_f \cdot [h_{t-1}, x_t] + b_f)$$
where:
- $W_f$ and $b_f$ are weights and biases
- $\sigma$ is the [[Sigmoid Activation Function]]
- $h_{t-1}$ is the previous hidden state
- $x_t$ is the current input
##### Input Gate ($i_t$)
Decides what information to add to the cell state. It is represented by the formula:$$$i_t = \sigma(W_i \cdot [h_{t-1}, x_t] + b_i)$$
and the formula for the candidate values is: $$\tilde{C}_t = \tanh(W_c \cdot [h_{t-1}, x_t] + b_c)$$
##### Update Cell State
Combines the previous cell state, the forget gate's decision, and the input gate's updates. It is represented by the formula: $$C_t = f_t \cdot C_{t-1} + i_t \cdot \tilde{C}_t$$
##### Output Gate ($o_t$)
Decides what part of the cell state to output. It is represented by the formula: $$o_t = \sigma(W_o \cdot [h_{t-1}, x_t] + b_o)$$
and then the hidden state is calculated as:
$$h_t = o_t \cdot \tanh(C_t)$$


