---
title: Publication
nav:
  order: 5
---

# {% include icon.html icon="fa-regular fa-file-lines" %}Publication

<div class="center-text">

SCI(E) : 19 
<br>

Scopus : 13 Paper
<br>

Domestic : 5 Paper
<br>

International Conference : 5 Paper
<br>

Domestic Conference : 56 Paper
<br>

  
<br>
</div>
 

<div class="center-text" style="margin-bottom: 20px;">
  <button onclick="showPub('scie')" class="custom-btn">SCI(E)</button>
  <button onclick="showPub('scopus')" class="custom-btn">Scopus</button>
  <button onclick="showPub('domestic')" class="custom-btn">Domestic</button>
  <button onclick="showPub('intl')" class="custom-btn">International Conf.</button>
  <button onclick="showPub('domconf')" class="custom-btn">Domestic Conf.</button>
</div>

<style>
  .custom-btn {
    padding: 8px 15px;
    margin: 5px;
    cursor: pointer;
    border: 1px solid #007bff;
    background-color: white;
    color: #007bff;
    border-radius: 5px;
  }
  .custom-btn:hover {
    background-color: #007bff;
    color: white;
  }
</style>

{% include section.html %}

## Highlighted

{% assign sorted = site.data.citations | sort: "date" | reverse %} 
{% assign latest = sorted[0] %} 
{% include citation.html lookup=latest.id style="rich" %}

{% include section.html %}

<div id="section-scie" class="pub-content">

{% include search-box.html %}

{% include search-info.html %}

{% include list.html data="citations" component="citation" style="rich" %}

</div>
<div id="section-scopus" class="pub-content" style="display:none;">

{% include search-box.html %}

{% include search-info.html %}

{% include list.html data="scopuslist" component="citation" style="rich" %}

</div>
<div id="section-domestic" class="pub-content" style="display:none;">

{% include search-box.html %}

{% include search-info.html %}

{% include list.html data="domesticlist" component="citation" style="rich" %}

</div>
<div id="section-intl" class="pub-content pub-left" style="display:none; text-align:left;">

<div style="display:flex; align-items:flex-start; margin-bottom:18px;">
  <div style="width:25px;">5.</div>
  <div>
    Son, D. H., Jeong, D. U., Choi, C. S., (2024) Mechanical Performance of Concrete Incorporated with Triple Hybrid Nanomaterials: Assessment on the bond Characteristics, 14th International Symposium on Architectural Interchanges in Asia, September
  </div>
</div>

<div style="display:flex; align-items:flex-start; margin-bottom:18px;">
  <div style="width:25px;">4.</div>
  <div>
    Son, D. H., Bae, B. I., Choi, C. S., (2024) Seismic Retrofitting of Reinforced Concrete Walls through Vertical Division: Evaluating Stiffness Reduction and Load Redistribution Effect, 18th World Conference Earthquake Engineering, July
  </div>
</div>

<div style="display:flex; align-items:flex-start; margin-bottom:18px;">
  <div style="width:25px;">3.</div>
  <div>
    Kim, H., Choi, C. S., Seok, S., Son, D. H., Lee, L. H., (2022) Verification of Vertically Divided walls through Finite Element Analysis, 13th International Symposium on Architectural Interchanges in Asia, November
  </div>
</div>

<div style="display:flex; align-items:flex-start; margin-bottom:18px;">
  <div style="width:25px;">2.</div>
  <div>
    You, B. I., Son, D. H., Bae, B. I., Choi, C. S. (2021). Strength Evaluation of Prefabricated CFTs with saw-toothed Ribs., 11th International Symposium on Steel Structures, November, 2021, Jeju, Korea
  </div>
</div>

<div style="display:flex; align-items:flex-start; margin-bottom:18px;">
  <div style="width:25px;">56.</div>
  <div>Son, D. H., (2025) Load Redistribution Effect of Existing Reinforced Concrete Structural Wall System Applying Vertical Division Technique Concrete Research Committee, 2025 Spring Conference of the Korea Concrete Institute.</div>
</div>

</div>

<div id="section-domconf" class="pub-content pub-left" style="display:none; text-align:left;">

<div style="display:flex; align-items:flex-start; margin-bottom:18px;">
  <div style="width:25px;">56.</div>
  <div>Son, D. H., (2025) Load Redistribution Effect of Existing Reinforced Concrete Structural Wall System Applying Vertical Division Technique Concrete Research Committee, 2025 Spring Conference of the Korea Concrete Institute.</div>
</div>

<div style="display:flex; align-items:flex-start; margin-bottom:18px;">
  <div style="width:25px;">55.</div>
  <div>Son, D. H., (2025) Safety Assurance Strategies for Existing Reinforced Concrete Shear Walls in Vertical Extension Remodeling of Apartment Buildings, Early-Career Researchers Networking Session, 2025 Spring Conference of the Architectural Institute of Korea</div>
</div>

<div style="display:flex; align-items:flex-start; margin-bottom:18px;">
  <div style="width:25px;">54.</div>
  <div>Cho, S. W., Lee, M. S., Son, D. H., Bae. B. I., Choi C. S. (2025). Nonlinear Finite Element Analysis of Punching Shear Strength in Flat Plate slabs with PC Head. Proceedings of Korea Institute for Structural Maintenance and Inspection, 25(2), 100</div>
</div>

<div style="display:flex; align-items:flex-start; margin-bottom:18px;">
  <div style="width:25px;">53.</div>
  <div>Son, D. H., Lee, M. S., Bae. B. I., Choi C. S. (2025). Flexural Retrofit Design of Reinforced Concrete Shear Walls Using Finite Element Analysis. Proceedings of Korea Institute for Structural Maintenance and Inspection, 25(2), 105</div>
</div>

<div style="display:flex; align-items:flex-start; margin-bottom:18px;">
  <div style="width:25px;">52.</div>
  <div>Jung, Y. J., Lee, M. S., Son, D. H., Bae. B. I., Choi C. S. (2025). Lap Splice Length Effect of 180-Degree Standard Hooked Bars in Precast Concrete Slabs. Proceedings of Korea Institute for Structural Maintenance and Inspection, 25(2), 111</div>
</div>

<div style="display:flex; align-items:flex-start; margin-bottom:18px;">
  <div style="width:25px;">51.</div>
  <div>Lee, M. S., Son, D. H., Bae, B. I., Choi, C. S. (2025). Analysis of Effective Tensile Cross-Sectional Area of UHPC according to Steel Fiber. Proceeding of the Korea Concrete Institute, 37(1), 105-106</div>
</div>

<div style="display:flex; align-items:flex-start; margin-bottom:18px;">
  <div style="width:25px;">50.</div>
  <div>Jeong, H. J. Lee, M. S. Son, D. H., Bae, B. I., Choi, C. S. (2025). A Study on the Reduction of Transverse Reinforcement Detailing and the Shear Strain of Joints with Steel Fiber Reinforced Ductile Connections, Proceeding of the Korea Concrete Institute, 37(2), 79-80</div>
</div>

<div style="display:flex; align-items:flex-start; margin-bottom:18px;">
  <div style="width:25px;">49.</div>
  <div>Son, D. H., Bae, B. I., Choi, C. S. (2025). Statistical Analysis on the Mitigation of Size Effect in Steel Fiber Reinforced Concrete Beams Based on Data Filtering, Proceeding of the Korea Concrete Institute, 37(2), 51-52</div>
</div>

<div style="display:flex; align-items:flex-start; margin-bottom:18px;">
  <div style="width:25px;">48.</div>
  <div>Ha, S. J., Son, D. H. (2025). Seismic behavior evaluation of FRP reinforced concrete columns using finite element analysis. Proceedings of Korea Institute for Structural Maintenance and Inspection, 25(1), 76.</div>
</div>

<div style="display:flex; align-items:flex-start; margin-bottom:18px;">
  <div style="width:25px;">47.</div>
  <div>Son, D. H., Ha, S. J., Bae, B. I., Choi, C. S. (2025). Analytical study on the stiffness reduction effect according to upper boundary conditions of vertically divided RC shear walls. Proceedings of Korea Institute for Structural Maintenance and Inspection, 29(1), 68.</div>
</div>

<div style="display:flex; align-items:flex-start; margin-bottom:18px;">
  <div style="width:25px;">46.</div>
  <div>Jeong, H. J., Son, D. H., Bae, B. I., Lee, M. S., Choi, C. S. (2025). Shear strength analysis according to connection details such as splices of reinforcement and development in internal joints of precast concrete. Proceedings of Korea Institute for Structural Maintenance and Inspection, 29(1), 88.</div>
</div>

<div style="display:flex; align-items:flex-start; margin-bottom:18px;">
  <div style="width:25px;">45.</div>
  <div>Cho, S. W., Lee, M. S., Son, D. H., Bae, B. I., Choi, C. S. (2025). Analytical study on the variation of punching shear crack angles at the interface of different compressive strength concrete in flat plates with PC shear member. Proceedings of Korea Institute for Structural Maintenance and Inspection, 29(1), 30.</div>
</div>

<div style="display:flex; align-items:flex-start; margin-bottom:18px;">
  <div style="width:25px;">44.</div>
  <div>Kim, Y. M., Lee, M. S., Son, D. H., Bae, B. I., Choi, C. S. (2025). Mechanical performance evaluation of concrete based on the content of polypropylene fibers after high temperature exposure. Proceedings of Korea Institute for Structural Maintenance and Inspection, 29(1), 35.</div>
</div>

<div style="display:flex; align-items:flex-start; margin-bottom:18px;">
  <div style="width:25px;">43.</div>
  <div>Oh, C. Y., Lee, M. S., Son, D. H., Bae, B. I., Choi, C. S. (2025). Proposal and evaluation of an expansion angle model based on statistical analysis of concrete under confining pressure. Proceedings of Korea Institute for Structural Maintenance and Inspection, 29(1), 274.</div>
</div>

<div style="display:flex; align-items:flex-start; margin-bottom:18px;">
  <div style="width:25px;">42.</div>
  <div>Lee, M. S., Son, D. H., Bae, B. I., Choi, C. S. (2025). Evaluation of bond strength between concrete and rebar according to volume ratio of nano-material. Proceedings of Korea Institute for Structural Maintenance and Inspection, 29(1), 275.</div>
</div>

<div style="display:flex; align-items:flex-start; margin-bottom:18px;">
  <div style="width:25px;">41.</div>
  <div>Jung, Y. J., Son, D. H., Bae, B. I., Lee, M. S., Choi, C. S. (2025). Analysis of splice length according to cover thickness in precast concrete slabs using 180-degree hooked bars. Proceedings of Korea Institute for Structural Maintenance and Inspection, 29(1), 29.</div>
</div>

<div style="display:flex; align-items:flex-start; margin-bottom:18px;">
  <div style="width:25px;">40.</div>
  <div>Son, D. H., Bae, B. I., Choi, C. S. (2024). Analysis of the slab effect on reinforced concrete walls retrofitted with wall end crushing method. Proceedings of Korea Institute for Structural Maintenance and Inspection, 28(2), 60.</div>
</div>

<div style="display:flex; align-items:flex-start; margin-bottom:18px;">
  <div style="width:25px;">39.</div>
  <div>Cho, S. W., Lee, M. S., Son, D. H., Bae, B. I., Choi, C. S. (2024). Analytical Study on Punching Shear of Slab-Column Connections with PC Shear Member Based on Concrete Compressive Strength. Proceeding of the Korea Concrete Institute, 36(2), 185-186</div>
</div>

<div style="display:flex; align-items:flex-start; margin-bottom:18px;">
  <div style="width:25px;">38.</div>
  <div>Jung, Y. J., Son, D. H., Lee, M. S., Bae, B. I., Choi, C. S. (2024). Finite Element Analysis of Reinforced Concrete Slab with Noncontact Lap Splices Using Hooked Rebars in ABAQUS. Proceeding of the Korea Concrete Institute, 36(2), 187-188.</div>
</div>

<div style="display:flex; align-items:flex-start; margin-bottom:18px;">
  <div style="width:25px;">37.</div>
  <div>Park, Y. J., Son, D. H., Bae, B. I., Choi, C. S. (2024). Analysis of Shear Contribution in PC Composite Concrete Beams Based on Transverse Reinforcement Ratio and Moment Direction. Proceeding of the Korea Concrete Institute, 36(2), 49-50.</div>
</div>

<div style="display:flex; align-items:flex-start; margin-bottom:18px;">
  <div style="width:25px;">36.</div>
  <div>Chae, Y. H., Park, S. H., Son, D. H., Bae, B. I., Choi, C. S. (2024). Fracture Simulation of CT-Scanned Concrete Specimens Using Finite Element Analysis. Proceeding of the Korea Concrete Institute, 36(2), 195-196</div>
</div>

<div style="display:flex; align-items:flex-start; margin-bottom:18px;">
  <div style="width:25px;">35.</div>
  <div>Kim, Y. M., Son, D. H., Bae, B. I., Choi, C. S. (2024). Statistical Analysis of Compressive Strength of High-Strength Concrete Reinforced with PP Fibers After High-Temperature Exposure. Proceeding of the Korea Concrete Institute, 36(2), 55-56.</div>
</div>

<div style="display:flex; align-items:flex-start; margin-bottom:18px;">
  <div style="width:25px;">34.</div>
  <div>Lee, M. S., Son, D. H., Bae, B. I., Choi, C. S. (2024). The Analytical Study on the Bond Strength of Non-contact Lap Spliced 180-degree Hooked Rebar. Proceeding of the Korea Concrete Institute, 36(2), 135-136.</div>
</div>

<div style="display:flex; align-items:flex-start; margin-bottom:18px;">
  <div style="width:25px;">33.</div>
  <div>Park, S. H., Son, D. H., Bae, B. I., Seok, S. W., Choi, C. S. (2024). Analysis of the Effects of Confining Pressure and Volumetric Changes on Concrete Dilation Angle. Proceedings of the Korea Concrete Institute, 36(2), 691-692.</div>
</div>

<div style="display:flex; align-items:flex-start; margin-bottom:18px;">
  <div style="width:25px;">32.</div>
  <div>Oh, G., Son, D. H., Choi, H. K., Bae, B. I., Choi, C. S., (2024) Shear Stress Analysis of Steel Fiber-Reinforced Concrete Beams Based on Effective Depth. Proceeding of the Korea Concrete Institute, 36(2), 299-300.</div>
</div>

<div style="display:flex; align-items:flex-start; margin-bottom:18px;">
  <div style="width:25px;">31.</div>
  <div>Son, D. H., Bae, B. I., Choi, C. S. (2024). Analysis of Effective Flexural and Shear Stiffness of Vertically Divided Reinforced Concrete Shear Walls, Proceeding of the Korea Concrete Institute, 36(1), 313-314</div>
</div>

<div style="display:flex; align-items:flex-start; margin-bottom:18px;">
  <div style="width:25px;">30.</div>
  <div>Song, S. H., Son, D. H., Bae, B. I., Choi, C. S. (2024). Structural Behavior of Assembled CFT Column-composite Beam External Diaphragm Connection with Composite Beam Cross-section Details, Proceeding of the Korea Concrete Institute, 36(1), 349-350.</div>
</div>

<div style="display:flex; align-items:flex-start; margin-bottom:18px;">
  <div style="width:25px;">29.</div>
  <div>Son, D. H., Bae, B. I., Choi, C. S. (2024). The Influence of Nanomaterial Dispersion on the Bond Performance between Concrete and Reinforcing Bars, Proceedings of Architectural Institute of Korea, 44(1), 443-443.</div>
</div>

<div style="display:flex; align-items:flex-start; margin-bottom:18px;">
  <div style="width:25px;">28.</div>
  <div>Son, D. H., Choi, C. S. (2024). Structural Behavior of Reinforced Concrete Two-Story Structural Walls with Slabs Using Wall End Crushing, Proceedings of Korea Institute for Structural Maintenance and Inspection, 28(1), 62-62</div>
</div>

<div style="display:flex; align-items:flex-start; margin-bottom:18px;">
  <div style="width:25px;">27.</div>
  <div>Son, D. H., Park, Y. J., Kim, Y. M., Bae, B. I., Choi, C. S. (2023). Cyclic Loading Test of Steel Fiber Reinforced Concrete Exterior Beam-Column Joints According to Anchorage Type, Proceedings of the Korea Concrete Institute, 35(2), 85-86.</div>
</div>

<div style="display:flex; align-items:flex-start; margin-bottom:18px;">
  <div style="width:25px;">26.</div>
  <div>Son, D. H., Bae, B. I., Choi, C. S. (2023). Stiffness reduction model of vertically divided reinforced concrete shear walls, Proceedings of Architectural Institute of Korea, 43(2), 342-342.</div>
</div>

<div style="display:flex; align-items:flex-start; margin-bottom:18px;">
  <div style="width:25px;">25.</div>
  <div>Son, D. H., Bae, B. I., Choi, C. S. (2023). Structural analysis of an old apartment building using the shear wall vertical division method. Proceedings of Korean Recycled Construction Resources Institute, 208-209.</div>
</div>

<div style="display:flex; align-items:flex-start; margin-bottom:18px;">
  <div style="width:25px;">24.</div>
  <div>Bae, B. I., Choi, C. S., Son, D. H. (2023). The Analytical Study on the Flexural Performance of Reinforced Concrete Flexural Members According to the Replacement ratio of Recycled Coarse Aggregate. Proceedings of Korean Recycled Construction Resources Institute, 187-188.</div>
</div>

<div style="display:flex; align-items:flex-start; margin-bottom:18px;">
  <div style="width:25px;">23.</div>
  <div>Son, D. H., Bae, B. I., Choi, C. S. (2023). Structural analysis of an old apartment building using the shear wall vertical division method. Proceedings of Architectural Institute of Korea, 43(1), 915-915.</div>
</div>

<div style="display:flex; align-items:flex-start; margin-bottom:18px;">
  <div style="width:25px;">22.</div>
  <div>Ryu, J. G., Son, D. H., Choi, C. S. (2023). An Analysis of Lap-splice performance of triple nano materials reinforced concrete beams. Proceedings of Architectural Institute of Korea, 43(1), 493-493.</div>
</div>

<div style="display:flex; align-items:flex-start; margin-bottom:18px;">
  <div style="width:25px;">21.</div>
  <div>Park, S. J., Son, D. H., Choi, C. S. (2023). Analysis of horizontal shear strength of PC composite beams according to shear key details. Proceedings of Architectural Institute of Korea, 43(1),494-494.</div>
</div>

<div style="display:flex; align-items:flex-start; margin-bottom:18px;">
  <div style="width:25px;">20.</div>
  <div>Son, D. H., Bae, B. I., Choi, C. S. (2022). Reduction of strength and stiffness of vertically divided reinforced concrete shear walls. Proceedings of Architectural Institute of Korea, 42(2), 524.</div>
</div>

<div style="display:flex; align-items:flex-start; margin-bottom:18px;">
  <div style="width:25px;">19.</div>
  <div>Hwangbo D., Son, D. H., Bae, B. I., Choi, C. S. (2022). Effect of Mechanical Properties on Bond Characteristis of Concrete with Nanomaterials. Proceedings of Architectural Institute of Korea, 42(2), 529.</div>
</div>

<div style="display:flex; align-items:flex-start; margin-bottom:18px;">
  <div style="width:25px;">18.</div>
  <div>Hwangbo D., Son, D. H., Bae, B. I., Choi, C. S. (2022). Evaluating the Bond Stress of Concrete with Triple Nano Materials. Proceedings of the Korea Concrete Institute, 34(1), 341-342.</div>
</div>

<div style="display:flex; align-items:flex-start; margin-bottom:18px;">
  <div style="width:25px;">17.</div>
  <div>Lee, S. M., Son, D. H., Choi, C. S. (2022). Numerical Study on Mechanical Properties of Triple-Hybrid Reinforced concrete. Proceedings of the Korea Concrete Institute, 34(1), 285-286.</div>
</div>

<div style="display:flex; align-items:flex-start; margin-bottom:18px;">
  <div style="width:25px;">16.</div>
  <div>Son, D. H., Bae, B. I., Choi, C. S. (2022). Stiffness Reduction Effect of Vertically Divided Reinforced Concrete Shear Walls According to Rebar Detail. Proceedings of Architectural Institute of Korea, 42(1), 426.</div>
</div>

<div style="display:flex; align-items:flex-start; margin-bottom:18px;">
  <div style="width:25px;">15.</div>
  <div>Kim, J. G., Son, D. H., Bae, B. I., Choi, C. S. (2022). Evaluation of Flexural Stiffness of Assembled CFT Columns with Rib Length. Proceedings of Architectural Institute of Korea, 42(1), 425-425.</div>
</div>

<div style="display:flex; align-items:flex-start; margin-bottom:18px;">
  <div style="width:25px;">14.</div>
  <div>Son, D. H., Hwangbo, D., Bae, B. I., Choi, C. S. (2022). Relationship Between Tensile Strength and Compressive Strength of Triple-Hybrid Reinforced Concrete. Proceedings of Korea Institute for Structural Maintenance and Inspection, 26(1), 165-165.</div>
</div>

<div style="display:flex; align-items:flex-start; margin-bottom:18px;">
  <div style="width:25px;">13.</div>
  <div>Kim, H., Son, D. H., Bae, B. I., Choi, C. S. (2022). Finite Element Analysis of Vertically Divided Reinforced Concrete Shear wall. Proceedings of Korea Institute for Structural Maintenance and Inspection, 26(1), 43-43.</div>
</div>

<div style="display:flex; align-items:flex-start; margin-bottom:18px;">
  <div style="width:25px;">12.</div>
  <div>Bae, B. I., Son, D. H., Choi, C. S. (2022). Evaluation of Fiber Reinforced Ultra High Strength Concrete Members. Proceedings of Korea Institute for Structural Maintenance and Inspection, 26(1), 51-51.</div>
</div>

<div style="display:flex; align-items:flex-start; margin-bottom:18px;">
  <div style="width:25px;">11.</div>
  <div>Kim, J. G., Son, D. H., Bae, B. I., Choi, C. S. (2022). Evaluation of Ductility of Prefabricated CFT Columns with Rib Length and Height. Proceedings of Korea Institute for Structural Maintenance and Inspection. 26(1), 19-19.</div>
</div>

<div style="display:flex; align-items:flex-start; margin-bottom:18px;">
  <div style="width:25px;">10.</div>
  <div>Kim, J. G., Son, D. H., Bae, B. I., Choi, C. S. (2021). Evaluation of Deformation Capacity of Prefabricated CFT Columns with Rib Length. Proceedings of Korea Institute for Structural Maintenance and Inspection, 25(2), 28-28.</div>
</div>

<div style="display:flex; align-items:flex-start; margin-bottom:18px;">
  <div style="width:25px;">9.</div>
  <div>Hwangbo, D., Son, D. H., Bae, B. I., Choi, C. S. (2021). An Enhancement Effect of Concrete Strength According to Nanomaterials Incorporating Methods. Proceedings of Korea Institute for Structural Maintenance and Inspection, 25(2), 174-174.</div>
</div>

<div style="display:flex; align-items:flex-start; margin-bottom:18px;">
  <div style="width:25px;">8.</div>
  <div>Bae, B. I., Son, D. H., Choi, C. S. (2021). An Experimental Study on the Flexural Performance of Lap Spliced Ultra High Strength Fiber Reinforced Concrete Members. Proceedings of the Korea Concrete Institute, 33(2), 83-84.</div>
</div>

<div style="display:flex; align-items:flex-start; margin-bottom:18px;">
  <div style="width:25px;">7.</div>
  <div>Son, D. H., Hwangbo, D., Bae, B. I., Choi, C. S. (2021). Mechanical Properties of Mortar and Concrete According To the Containing Method of Nano Materials. Proceedings of the Korea Concrete Institute, 33(2), 703-704.</div>
</div>

<div style="display:flex; align-items:flex-start; margin-bottom:18px;">
  <div style="width:25px;">6.</div>
  <div>Ahn, H. J., Son, D. H., Jeong, D., Choi, C. S. (2021). The Mechanical Properties of Concrete Incorporated with Macro Synthetic Fiber Dosage. Proceedings of Korea Institute for Structural Maintenance and Inspection, 25(1), 139.</div>
</div>

<div style="display:flex; align-items:flex-start; margin-bottom:18px;">
  <div style="width:25px;">5.</div>
  <div>Son, D. H., Bae, B. I., Yoo, C. G., Choi, C. S. (2021). The Shear Retrofit Effect of the Vertically Divided Reinforced Concrete Squat wall. Proceedings of Korea Institute for Structural Maintenance and Inspection, 25(1), 140-141.</div>
</div>

<div style="display:flex; align-items:flex-start; margin-bottom:18px;">
  <div style="width:25px;">4.</div>
  <div>You, B. I., Son, D. H., Bae, B. I., Choi, C. S. (2021). Properties of Concrete Stress-Strain Curve in Prefabricated CFT Columns. Proceedings of the Korea Concrete Institute, 33(1), 179-180.</div>
</div>

<div style="display:flex; align-items:flex-start; margin-bottom:18px;">
  <div style="width:25px;">3.</div>
  <div>Son, D. H., Bae, B. I., Choi, C. S. (2021). Strength Characteristics of Cement Mortar with Triple Nano Materials. Proceedings of the Korea Concrete Institute, 33(1), 545-546.</div>
</div>

<div style="display:flex; align-items:flex-start; margin-bottom:18px;">
  <div style="width:25px;">2.</div>
  <div>Son, D. H., Bae, B. I., Lee, L.H., Choi, C. S. (2021). Behavior Characteristics of Steel Fiber Reinforced Concrete Conventional Coupling Beams. Proceedings of Architectural Institute of Korea, 41(1), 398-399.</div>
</div>

<div style="display:flex; align-items:flex-start; margin-bottom:18px;">
  <div style="width:25px;">1.</div>
  <div>You, B. I., Son, D. H., Bae, B. I., Choi, C. S. (2021). Analysis of Effective Width Considering Rib Length of Prefabricated CFT Columns. Proceedings of Architectural Institute of Korea, 41(1), 400-400.</div>
</div>

</div>


<script>
function showPub(targetId) {
  // 모든 섹션을 숨깁니다.
  const sections = document.querySelectorAll('.pub-content');
  sections.forEach(section => {
    section.style.display = 'none';
  });

  // 클릭한 섹션만 보여줍니다.
  const target = document.getElementById('section-' + targetId);
  if (target) {
    target.style.display = 'block';
  }
}
</script>
