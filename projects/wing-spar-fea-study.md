---
layout: page
title: "Wing Spar FEA Study"
---

# Wing Spar FEA Study

**Type:** Individual Project  
**Duration:** Month Year – Month Year  
**Tools:** ANSYS / Abaqus, MATLAB

## 1) Objective
Assess wing spar stress and deflection under representative flight load cases and evaluate factor of safety.

## 2) Requirements and Constraints
- Material: <material>  
- Ultimate load factor target: <value>  
- Max allowable deflection: <value>

## 3) Methodology
### 3.1 Models
Linear elastic structural model with fixed boundary assumptions at root.

### 3.2 Setup
Applied distributed lift-derived loads and compared multiple spar cross-sections.

### 3.3 Validation
Cross-checked with beam-theory estimates for deflection and root bending stress.

## 4) Results
- Peak von Mises stress: <value> MPa  
- Tip deflection: <value> mm  
- Factor of safety: <value>

![FEA stress contour](../assets/images/projects/wing-spar-fea-vonmises.png)

**Figure takeaway:** Stress concentration localized near root connection region.
