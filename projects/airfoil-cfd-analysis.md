---
layout: page
title: "Airfoil CFD Analysis"
---

# Airfoil CFD Analysis

**Type:** Individual Project  
**Duration:** Month Year – Month Year  
**Tools:** ANSYS Fluent / OpenFOAM, Python

## 1) Objective
Evaluate aerodynamic performance of an airfoil over a range of angles of attack using 2D CFD.

## 2) Requirements and Constraints
- Reynolds number: <value>  
- Angle of attack sweep: <range>  
- 2D, steady-state assumption for baseline comparison

## 3) Methodology
### 3.1 Models
RANS formulation with selected turbulence model (<model name>).

### 3.2 Setup
Defined domain, mesh refinement near airfoil, and boundary conditions for velocity inlet/pressure outlet.

### 3.3 Validation
Performed mesh sensitivity check and compared trend against published polar data.

## 4) Results
- Max lift coefficient (simulated): <value> at α = <value>°  
- Drag trend: increased nonlinearly beyond α = <value>°  
- Pressure coefficient distribution showed suction peak migration

![Pressure coefficient plot](../assets/images/projects/airfoil-cfd-cp.png)

**Figure takeaway:** Cp distribution supports observed lift trend and pre-stall behavior.

## 5) Engineering Decisions and Trade-offs
Balanced mesh density vs compute time; chose medium-fine mesh after convergence and trend stability checks.

## 6) Your Contribution
- Created mesh and solver setup
- Ran simulation matrix
- Post-processed data and generated plots in Python

## 7) Limitations and Future Work
- 2D assumption neglects 3D effects
- Future work: transition model and unsteady simulation near stall

## 8) Files and Reproducibility
- [Technical Report (PDF)](../assets/docs/airfoil-cfd-analysis-report.pdf)
- [Project Repository](https://github.com/your-username/airfoil-cfd-analysis)

## 9) Key Takeaways
- CFD setup choices strongly affect result quality
- Validation is required before interpreting design implications
