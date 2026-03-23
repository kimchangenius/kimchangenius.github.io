---
layout: page
title: An Interactive Visualization System for Microscopic Simulation-Based Safety Analysis at Urban Intersections
description: Jeho Lee
img: assets/img/sumo_visualizaion.png
importance: 1
category: Completed
related_publications: true
---

This project develops an interactive visualization system for microscopic, simulation-based safety analysis at urban intersections. 
Using a SUMO-based pipeline, the system combines synchronized traffic maps, lane-level views, and time-series charts to visualize surrogate safety indicators such as TTC, MTTC, and DRAC in real time. By enabling detailed spatial-temporal comparison across different automated vehicle market penetration scenarios, the system helps reveal how increasing automated vehicle adoption can improve intersection safety through larger safety margins and more stable braking behavior.

## System Overview

The proposed framework consists of microscopic traffic simulation, safety indicator computation, and synchronized multi-panel visualization.
Vehicle trajectory data are generated using SUMO, from which position, speed, acceleration, and inter-vehicle distance are extracted at one-second intervals.
These data are used to compute surrogate safety indicators, and the resulting outputs are delivered to the visualization interface to support interactive analysis.

{% include figure.liquid loading="eager" path="assets/img/sumo_visualizaion.png" title="System overview" alt="System overview of the SUMO-based visualization pipeline" class="img-fluid rounded z-depth-1" %}


## Reference
