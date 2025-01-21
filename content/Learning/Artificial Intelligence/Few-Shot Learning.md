---
date: 2025-01-20
---
In contrast to [[Zero-Shot Learning]], few-shot learning is a type of ML where a model is trained to generalize and make accurate predictions based on very few examples per class. It is useful when a large amount of labelled data is impractical or expensive.

There are a few main approaches to achieving few-shot learning:
1. **Metric-Based Learning:** learn a similarity measure between examples so the model can compare new data points to a small set of labelled examples
2. **Optimization-Based Learning:** adapt the model parameters efficiently using a small amount of task-specific learning
3. **Transfer Learning:** finetune a model pre-trained on a large dataset with a few available examples for the new task
4. **Data Augmentation:** synthetic data generation or augmentation to expand training data for better learning

For example, if you want a model to classify new animal species and you only have 3 labelled images per species, few-shot learning enables the model to perform this classification effectively by leveraging patterns learned from previous tasks. It is quite similar to how humans learn.