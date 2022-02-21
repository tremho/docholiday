/** @module test-commentBlock 
 * @description
 * #### test-commentBlock (Module)
 * This module checks for parmeters and returns in jsdoc format
 * insures they are secondary to typescript declarations
 * and explores the {{{}}} Custom Render space, such as plantUML
 * 
 *
*/

 /**
  * We should be able to document returns in jsdoc style
  * 
  * @public
  */
 function beast() { 
 }

 /**
  * We should be able to type and comment our parameters in the jsdoc block
  * 
  * @param {string} a
  *         - A string that is 'a'
  * @param {string} b
  *         - A string that is b-like
  * @param {number} c
  *         - A number to see
  * @public
  */
 function withParams(a, b, c) { 
 }

 /**
  * If we have typescript-typed values, instead, they win
  * 
  * @param {number} a
  *         typescript says this is a number
  * @param {any} b
  *         typescript says this is any
  * @param {number} c
  *         typescript assigned no further type
  * 
  * @return {any} typescript defined return
  * @public
  */
 function typeParamsWin(a, b, c) { 
 }

 /**
  * We should be able to insert a jsdoc tag using our extended syntax.
  * In this case: see www.tremho.com
  * 
  * 
  * @see  https://www.tremho.com
  * 
  * 
  * 
  * But note we can use markdown to do the same:  [www.tremho.com](!https://wwww.tremho.com)
  * 
  * And even for doc links [PrintExample](module-test-classes-PrintExample.html)
  * 
  * @public
  */
 function jsdocTag() { 
 }

 /**
  * We can insert plantUML diagrams.
  * This one is a sequence diagram
  * 
  * 
  * ![plantUML](http://www.plantuml.com/plantuml/svg/u-9opCbCJbNGjLDmoa-oKd0iBSb8pIl9J4uioSpFKmXABInDBIxX0iefw0BLW1LZKLLSa9zNdCg5RbXUFb1TaK8YTaCXYcrqTGceXXeE0000)
  * @public
  */
 function plantSeq() { 
 }

 /**
  * Same, but this comment should be at top
  * and we should have more plain text at bottom
  * 
  * ![plantUML](http://www.plantuml.com/plantuml/svg/u-9opCbCJbNGjLDmoa-oKd0iBSb8pIl9J4uioSpFKmXABInDBIxX0iefw0BLW1LZKLLSa9zNdCg5RbXUFb1TaK8YTaCXYcrqTGceXXaE0000)
  * 
  * More plain text at the bottom...
  * 
  * @public
  */
 function plantSeq2() { 
 }

 /**
  * We can use PlantUML for UseCase diagrams
  * 
  * ![plantUML](http://www.plantuml.com/plantuml/svg/u-BISCiiAYvHA2rEJKuiJjNaqd3Coo_9I2s2YoWa5YjeX3eRQN91HHH2dOtXR0sVnEAIc3nanQ7E9bm0)
  * @public
  */
 function plantUse() { 
 }

 /**
  * We can use PlantUML for Class and Object diagrams
  * 
  * 
  * ![plantUML](http://www.plantuml.com/plantuml/svg/LOz1YW8n44Nt_nJ1bGfp0H51NSnYn8s8k98onZ7QIIGf4H7lRaAdqzsrUxygBrMWOs1FaaMkXb4Qig8GX1ZqWm78MiV4sjdyiZ2azh9IebJD68v4h-hu42xEy-7il47-gvr8Z9Ccu-off9andVLzEUyAbMNDhtQavXW_JFTbOcZBofz9DeiN7WFkU5Nnz5NKn_ioxIXSjFtdDbaeN-b2Q_NSEty33Dt5akwQgLgcTTxO_ednpwpnRJVpY94xnb_b3TbNocCZYpz0begKTfoJIPJW2m00)
  * @public
  */
 function plantClassObject() { 
 }

 /**
  * PlantUML Activity
  * 
  * ![plantUML](http://www.plantuml.com/plantuml/svg/JOuz3i8m38Ltdy9ZcoEq0oCSW14fYXgNMZ9EYKDGEJqUAxtfUpzwCDr8fE2tLCapJFUD3LsPLbRAM1ICEjKa688uiX1ci9Pg0-0LXsjD-zRvXwnEHIXVHcmRAGu7sGZJNij2PkZUGpEdPqqlcu7420SjfqHHEI16e_U7TA4OCMd66DFIk7Cx79pwlhM2Foax_040)
  * @public
  */
 function plantActivity() { 
 }

 /**
  * PlantUML Component
  * this is the large example, including groups, etc
  * 
  * ![plantUML](http://www.plantuml.com/plantuml/svg/ROyz2y8m48Rt_8eZUmVHMH0nkeX2knM7sAIscEPgau95_E_cGsaL8SFbdjppvaZBYok_IA0fDXAs7VOjXGVPPTaH4iXPtHaBQsnQr5BR4ybN6cqbksdlIOX6uHo7G8B4U0kBabGMgCMNvTSBIR84zzox2eMzSDFvviwRLacOXGWYkELdRbpEVaXloWUKg8HBf5bL6t2d6I2sFCnPf7C_NdRSxKSPOaJXkl34g_zi5Nuq_SAaZcpKZ-MRVEml)
  * @public
  */
 function plantComponent() { 
 }

 /**
  * PlantUML Deployment
  * this is a use-case variant, and
  * here we show the complex example from the plantUML site
  * 
  * ![plantUML](http://www.plantuml.com/plantuml/svg/PP11RiCW44NtSufHii6jY3nELrRbJOyHUO4nJYmvO26igbtux1t0JPf6GcB-Wvd_0K3fu3mEpj6zh21gV9UbR1wqA8jV0a9fAb1E9iF9326E89H-pCYFvyl63ilCxD3WCcUm9h16KEMktkMktdrQUaRicF8nPeQfPgRTTNRMs82ned-wIfhm9VQyRkWKjsFBpv5DWqczjG2TMsol_1TsSOeDtase2JesZ2bY_UGssc3yeBJ1ND7cjrzNSKDGNrrlA2MkSth-GKL_-LJ7RzkEQ88SCbbHYyn5oGllzAC5KU1D7h6GwSQE-tUFz-2alWrFsUVtigXQ-040)
  * @public
  */
 function plantDeployment() { 
 }

 /**
  * PlantUML State
  * A complex state diagram from plantUML examples
  * 
  * ![plantUML](http://www.plantuml.com/plantuml/svg/RP0z3u8m48Rt_eeB8manmiPWGeA6E1WY8s6evO8cV1ZQwc3yxxP0iOXBsxltdhlhIqZk5k3j81DKu9QC5tWcuqC8cMGCiSJILZKMGdJfUc44_ui5Qyp_Wt4j6E8rXKx4c6nahT_xjfFL5M8gg0EKGzsrrPOCfsfpb5m01O5SZDzG0-oAELQr9tmERImfxJk6dEkiAh16BHPEYX3Eo6M3v4scLHVsf5HoN3kG9wuYOyJxHF-osgC3lTN6eC0oQFOEDf3H1muRr69TQ9py0000)
  * @public
  */
 function plantState() { 
 }

 /**
  * PlantUML Timing
  * 
  * ![plantUML](http://www.plantuml.com/plantuml/svg/NSp13O0W44JH-rOnsGhWO0FIWGqOHOX4unh06BiNCLwy_SER8RAhs0K0coTwnQM71ADmXZnZTp78X4RzeVwW_a7inveST0FnFhaChMWCsn2licrhS5ssP6MpeLWsRt0zf2ZZaNBHNOrNTtG3)
  * @public
  */
 function plantTiming() { 
 }

 /**
  * A Pert example
  * 
  * 
  * ![plantUML](http://www.plantuml.com/plantuml/svg/VSyz3u8m40RW_Nx5RIv2mjT2b8t4HAD4ZNk5efL2JRb9utyN2LOYXA5D-ZwNDrUGF2SaXLfSheIPq3mbeIgOuKffyL0LCObILBmEqRAYEIuigxsYPkJ4DOcqDz3wvqH0WYJ79DuVGqoqkZMzk6Kb1oZP7TSYBUnTdkCJNcr0h2viftaUY6d2POHnbVNDdJ1lmlm92uPc5cj--5qgn0qxSudEYBf6tH7rZ7hGbHdpeIluJxn1ul-Im3Jwy0O0)
  * @public
  */
 function plantPERT() { 
 }

