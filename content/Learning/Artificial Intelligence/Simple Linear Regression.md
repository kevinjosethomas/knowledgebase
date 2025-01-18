---
date: '2024-07-03'
---

Also known as the best-fit line or the least-squares regression line, linear regression models are the most commonly used predictive modelling technique. Essentially, it creates a linear line to fit plotted data such that the line minimizes the distances between the points to the line.

![[Pasted image 20240603224706.png]]

It determines the strength of the relationship between one dependent variable and one or more independent variables. The difference between a point and the line is known as a <span class="highlight">residual</span>. The line aims to minimize residuals between all points.

To manually calculate the linear regression module, we work towards minimizing the mean squared error (MSE), which is the average of the sum of all residuals squared. $$\frac{1}{n}\sum_{i=1}^n(y_i-\hat{y}_i)^2$$There is an alternative mathematical approach to finding the slope of the line that does not involve manually moving the line to minimize the MSE.

