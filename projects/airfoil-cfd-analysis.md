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
