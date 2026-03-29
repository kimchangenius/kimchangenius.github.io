---
layout: page
title: Optimizing Demand-Responsive Transport (DRT) Scheduling
description: Chanjin Kim
img: assets/img/sioux_falls_network.jpeg
importance: 1
category: Active
related_publications: false
scholar:
  bibliography: optimizing_drt.bib
_styles: |
  .post-description {
    font-size: 1.125rem;
    line-height: 1.5;
  }
---

### Abstract

This project is reinforcement learning framework to optimize online scheduling in Demand-Responsive Transport using Double Deep Q-Network with a Q-value-based iterativeassignment mechanism. The scheduling problem is formulated as sequential decision-making where the agent observes fleet and request states and selects discrete vehicle–request actions under operational constraints. To support scalable learning and fast inference, we predefine a fixed action space covering all vehicle–request combinations and apply dynamic action masking to exclude infeasible actions (e.g., capacity violations, vehicles already engaged in service, and inconsistent drop-off assignments). Unlike standard DQN-based centralized approaches that determine all vehicle actions simultaneously from a single system state, our method assigns actions sequentially. At each iteration, the vehicle with the highest predicted Q-value is selected, its action is committed, and the system is virtually updated before re-evaluating the remaining vehicles. This greedy yet coordinated procedure captures interdependencies among vehicles and the cumulative impact of prior assignments. The reward design combines immediate decision feedback with event-based delayed rewards, penalizing rejections, cancellations, and lateness while incentivizing successful drop-offs and effective pooling.

### Research Goal

This research aims to develop an intelligent scheduling framework for Demand Responsive Transport (DRT) that can effectively respond to dynamically changing travel demand in real time. Unlike conventional fixed-route public transit or static optimization approaches, the proposed framework addresses the inherent complexity of online DRT operations, where requests arrive sequentially and operational constraints continuously evolve. To achieve this, we formulate online DRT scheduling as a Markov Decision Process (MDP) and design a Double Deep Q-Network (DDQN)-based policy that learns how to make adaptive scheduling decisions under uncertainty. The ultimate goal of this study is to improve both service quality and operational efficiency by reducing passenger waiting time and ride time, while increasing service rate and maintaining robust performance across varying demand and operational conditions.

### Methodology

The online DRT scheduling task is modeled as a Markov Decision Process (MDP). At each decision step, the state represents the real-time system context, including vehicle status, outstanding requests, and travel-related information. The action space consists of scheduling decisions such as assigning vehicles to requests or rejecting infeasible requests, while the reward is designed to balance service performance and operational efficiency. This MDP formulation provides the foundation for learning adaptive scheduling policies in dynamic and uncertain environments.

###### State Space

To be added later

###### Action Space

To be added later

###### Reward Design

To be added later

#### Double Deep Q-Network (DDQN)

In this study, we employ Double Deep Q-Network (DDQN) to learn decision-making policies in dynamic scheduling environments. DDQN mitigates the Q-value overestimation problem of conventional DQN by decoupling action selection from action evaluation. Specifically, the online network selects the optimal action in the next state:

$$
a^* = \arg\max_{a'} Q(s_{t+1}, a'; \theta)
$$

The target network then evaluates the selected action to construct the learning target:

$$
y_t = r_t + \gamma \, Q(s_{t+1}, a^*; \theta^-)
$$

The model is trained by minimizing the following loss function:

$$
\mathcal{L}(\theta) = \mathbb{E}\left[ \left( y_t - Q(s_t, a_t; \theta) \right)^2 \right]
$$

To further improve training stability and exploration efficiency, the framework incorporates experience replay and an  ε-greedy strategy. This enables more stable and reliable policy learning for online decision-making problems such as real-time DRT scheduling.<br>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/drt_figure_3.png" title="DDQN-based learning process" alt="Diagram illustrating the DDQN-based learning process." class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<div class="caption">
    DDQN-based learning process
</div>

#### Q-Value-Based Iterative Decision-Making Framework

A Q-value-based iterative decision-making framework for multi-vehicle DRT scheduling. Rather than assigning all vehicle actions simultaneously, the framework selects the most promising vehicle–action pair step by step based on Q-values, updates the virtual system state after each assignment, and repeats the process until all vehicles are assigned. This iterative approach captures interdependencies among vehicles and enables more reliable and efficient system-level decisions in dynamic environments.<br>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/drt_figure_1.png" title="Q-value-based iterative decision-making framework" alt="Diagram illustrating the Q-value-based iterative decision-making framework for multi-vehicle DRT scheduling." class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<div class="caption">
    Q-Value-Based Iterative Action Assignment in Centralized Framework
</div>

#### Action Space Reduction Strategy

Action space reduction strategy to improve the efficiency of centralized multi-vehicle DRT scheduling. A fixed action space is pre-defined to avoid costly dynamic action generation, while action masking is applied to remove infeasible actions at each decision step. This design reduces computational overhead, stabilizes learning, and supports fast and scalable real-time inference.<br>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/drt_figure_2.png" title="Action space reduction strategy" alt="Diagram illustrating the action space reduction strategy with a fixed action space and action masking for DRT scheduling." class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Action Space Reduction Process.
</div>

<div class="publications">
<h2 class="pub-category references-heading">References</h2>

{% bibliography --file optimizing_drt.bib --group_by none --query @* %}

</div>