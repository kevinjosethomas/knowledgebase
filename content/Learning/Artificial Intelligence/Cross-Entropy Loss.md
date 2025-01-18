Cross-entropy loss is used in classification problems, especially when multiple classes are involved. It measures the difference between the predicted probability distribution and the actual class labels (ground truth), where the goal is to minimize the difference so that predicted probabilities match the true labels as closely as possible.

Cross-entropy essentially penalizes predictions that deviate from the true label's probability (which should ideally be 1 for the correct class and 0 for the others)


For a single sample, the cross-entropy loss is 
$$
\mathcal{L} = - \sum_{i=1}^{C} y_i \log(p_i)
$$
where:
- $C$ is the number of classes
- $y$ is a binary label (1 for the correct class, 0 for others)
- $p_i$ is the predicted probability for class $i$ (output of [[Softmax Activation Function]])

Similarly, for $N$ samples, the average loss is:
$$
\mathcal{L}_{\text{avg}} = - \frac{1}{N} \sum_{j=1}^{N} \sum_{i=1}^{C} y_{j,i} \log(p_{j,i})
$$

Cross-entropy is useful because it is probabilistic in nature, so it operates directly on probabilities which is suitable for classification. Similarly, it strongly penalizes incorrect predictions with high confidence and has gradient behaviour where the correct class's probability increases.