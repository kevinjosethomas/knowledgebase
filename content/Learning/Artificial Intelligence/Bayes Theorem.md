---
date: '2024-07-03'
---
Bayes theorem is a fundamental concept in probability theory that describes how to update the probability of a hypothesis based on new evidence. It is a foundational [[Supervised Learning|supervised learning]] algorithm.

$$P(A|B)=\frac{P(B|A)\cdot P(A)}{P(B)}$$

The theorem is useful because it does not require joint probabilities to calculate conditional probabilities.

- **Marginal Probability:** The probability that an event happens $\rightarrow P(A)$
- **Conditional Probability:** The probably that an event occurs given that a previous event has already occurred $\rightarrow P(A|B)$
- **Joint Probability:** The probability that two events happen together $\rightarrow P(A,B) = P(A\cap B)$

## Naive Bayes Classifiers
### Multinomial Naive Bayes Classifier
Multinomial Naive Bayes is used for classifying things that can be counted, like words in a document (discrete data). For example, if we were trying to classify emails as spam/not-spam, multinomial naive bayes will:
- learn how often each word (like "free" or "win") appears in spam and not-spam emails
- compare the counts in new emails with what it has learned to decide if the new email is spam or not
It is used for classification with discrete features, and often used in [[Natural Language Processing|natural language processing]] tasks.
### Gaussian Naive Bayes Classifier
Gaussian Naive Bayes is used to classify things with numbers that can vary, like height, weight or temperature. It looks at many examples and learns about average values and the spread of each trait. When it sees an example, it checks the values and guesses which type it is based on the averages and spreads it has classified. For example, if you were trying to classify people as healthy or sick based on their temperature and blood pressure, gaussian naive bayes will:
- learn the average temperature and blood pressure of healthy and sick people, as well as how much this varies
- when it gets a new person's information, it compares these numbers to what it has learned to decide if the person is sick or not
It works well for numbers that vary continuously.

