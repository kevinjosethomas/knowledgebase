---
date: 2025-01-20
---
Euclidean distance is a measure of the straight-line distance between any two points in a Euclidean space. Its quite literally just the Pythagorean theorem but scaled up quite a bit.

The general formula for Euclidean distance in $n$-dimensional space is
$$
d(P, Q) = \sqrt{(p_1 - q_1)^2 + (p_2 - q_2)^2 + \dots + (p_n - q_n)^2}
$$

In one-dimensional space:
$$
d(P, Q) = |p_1 - q_1|
$$

In two-dimensional space:
$$
d(P, Q) = \sqrt{(p_1 - q_1)^2 + (p_2 - q_2)^2}
$$

In three-dimensional space:
$$
d(P, Q) = \sqrt{(p_1 - q_1)^2 + (p_2 - q_2)^2 + (p_3 - q_3)^2}
$$

Euclidean distance has the following key properties:
1. It is non-negative $$ d(P, Q) \geq 0, \quad \text{and } d(P, Q) = 0 \text{ if and only if } P = Q $$
2. It is symmetric $$ d(P, Q) = d(Q, P) $$
3. It has triangle inequality $$ d(P, Q) \leq d(P, R) + d(R, Q) $$
