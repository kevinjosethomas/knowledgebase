The argmax function  returns the index of the maximum value in the input vector. The output of argmax looks like this:

![[Pasted image 20240704130530.png]]

Argmax is used to narrow down the final classification for various activation functions like the [[Softmax Activation Function]].

### Limitations
One limitation of the argmax function is that all its gradients are always zero. Since [[Backpropagation|backpropagation]] is dependent on calculating a loss function based on the misclassified elements in the vector, argmax cannot be used during the training of a neural network as there will be no learning.
### Sources
- https://www.pinecone.io/learn/softmax-activation/