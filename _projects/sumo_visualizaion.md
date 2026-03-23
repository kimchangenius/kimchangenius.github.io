---
layout: page
title: "<strong>An Interactive Visualization System for Microscopic Simulation-Based Safety Analysis at Urban Intersections</strong>"
description: Jeho Lee
img: assets/img/sumo_visualizaion.png
importance: 1
category: Completed
related_publications: false
scholar:
  bibliography: sumo_visualizaion.bib
_styles: |
  .post-description {
    font-size: 1.125rem;
    line-height: 1.5;
  }
---

#### Abstract

This project develops an interactive visualization system for microscopic, simulation-based safety analysis at urban intersections.
Using a SUMO-based pipeline {% cite krajzewicz2012sumo %}, the system combines synchronized traffic maps, lane-level views, and time-series charts to visualize surrogate safety indicators such as TTC, MTTC, and DRAC in real time {% cite minderhoud2001ttc %}. By enabling detailed spatial-temporal comparison across different automated vehicle market penetration scenarios, the system helps reveal how increasing automated vehicle adoption can improve intersection safety through larger safety margins and more stable braking behavior.

#### System Overview

The proposed framework consists of microscopic traffic simulation, safety indicator computation, and synchronized multi-panel visualization.
Vehicle trajectory data are generated using SUMO, from which position, speed, acceleration, and inter-vehicle distance are extracted at one-second intervals.
These data are used to compute surrogate safety indicators, and the resulting outputs are delivered to the visualization interface to support interactive analysis.

{% include figure.liquid loading="eager" path="assets/img/sumo_visualizaion.png" title="System overview" alt="System overview of the SUMO-based visualization pipeline" class="img-fluid rounded z-depth-1" %}

#### Interactive Visualization Design

The interface is designed as a synchronized multi-panel analytical environment consisting of four components:

- Traffic Map

    The Traffic Map displays the overall road network and real-time vehicle positions. Visual encoding varies depending on the selected safety indicator.

- Time-Series Safety Chart

    The Time-Series Safety Chart presents temporal variations of TTC, MTTC, or DRAC. Selecting a specific time point synchronizes the map and intersection panel.

- Lane-Level Intersection Panel

    The Lane-Level Intersection Panel shows a simplified intersection layout with lane metrics. Selecting a lane highlights its trajectory in the chart and corresponding vehicles on the map.

- Configuration and Segment Playback Control

    The Configuration and Segment Playback Control enables selection of junction, MPR, time, and playback segments. Spatial and temporal views remain synchronized during animation.

#### References

{% bibliography --file sumo_visualizaion.bib --group_by none --query @* %}
