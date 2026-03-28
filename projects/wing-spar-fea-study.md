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

## 5) Engineering Decisions and Trade-offs
Selected spar geometry balancing stiffness gain vs mass increase.

## 6) Your Contribution
- Built structural model and load cases
- Performed hand-calculation verification
- Recommended final spar concept

## 7) Limitations and Future Work
- Simplified boundary/loading conditions
- Future work: include joint details, fatigue, and buckling checks

## 8) Files and Reproducibility
- [Technical Report (PDF)](../assets/docs/wing-spar-fea-report.pdf)
- [Project Repository](https://github.com/your-username/wing-spar-fea-study)

## 9) Key Takeaways
- Verification against simple models builds confidence in FEA
- Structural decisions require explicit mass-stiffness trade studies
