---
layout: page
title: "UAV Preliminary Design"
---

# UAV Preliminary Design

**Type:** Team Project  
**Duration:** Month Year – Month Year  
**Tools:** MATLAB, Python, SolidWorks

## 1) Objective
Design a small UAV concept to satisfy mission endurance and payload constraints while meeting stability and performance targets.

## 2) Requirements and Constraints
- Payload requirement: <X> kg  
- Endurance target: <Y> min  
- Max wingspan constraint: <Z> m  
- Assumptions: steady level flight in cruise, standard atmosphere

## 3) Methodology
### 3.1 Models / Equations
Used sizing relationships for wing loading and power loading with iterative mass estimation.

### 3.2 Setup
Generated a design space sweep across aspect ratio, wing area, and propulsion options.

### 3.3 Validation
Checked performance estimates against hand calculations and reference UAV data.

## 4) Results
- Estimated takeoff mass: <value> kg  
- Cruise power: <value> W  
- Predicted endurance: <value> min  

![UAV concept figure](../assets/images/projects/uav-concept.png)

**Figure takeaway:** Final concept met mission endurance with acceptable margin.

## 5) Engineering Decisions and Trade-offs
Compared high-AR wing (efficiency benefit) vs structural weight penalty; selected moderate AR for balanced performance and manufacturability.

## 6) Your Contribution
- Performed wing/power loading analyses
- Built parametric sizing script
- Prepared trade-study plots and design recommendation

## 7) Limitations and Future Work
- Limited by simplified drag buildup assumptions
- Future work: higher-fidelity aerodynamic modeling and propulsion bench test

## 8) Files and Reproducibility
- [Technical Report (PDF)](../assets/docs/uav-preliminary-design-report.pdf)
- [Project Repository](https://github.com/your-username/uav-preliminary-design)

## 9) Key Takeaways
- Requirement-driven design improves decision quality
- Trade studies are essential for early-phase engineering
