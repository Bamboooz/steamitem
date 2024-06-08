const exampleData = [["Feb 07 2024 01: +0",56.452,"216186"],["Feb 08 2024 01: +0",38.741,"114499"],["Feb 09 2024 01: +0",40.325,"88684"],["Feb 10 2024 01: +0",40.829,"73672"],["Feb 11 2024 01: +0",40.13,"60732"],["Feb 12 2024 01: +0",37.836,"49800"],["Feb 13 2024 01: +0",34.049,"53537"],["Feb 14 2024 01: +0",20.632,"147843"],["Feb 15 2024 01: +0",20.005,"113034"],["Feb 16 2024 01: +0",22.684,"88169"],["Feb 17 2024 01: +0",22.632,"81216"],["Feb 18 2024 01: +0",22.098,"68788"],["Feb 19 2024 01: +0",21.669,"56726"],["Feb 20 2024 01: +0",21.291,"52443"],["Feb 21 2024 01: +0",15.676,"143408"],["Feb 22 2024 01: +0",14.789,"105339"],["Feb 23 2024 01: +0",15.203,"102535"],["Feb 24 2024 01: +0",15.527,"99345"],["Feb 25 2024 01: +0",15.861,"77824"],["Feb 26 2024 01: +0",15.625,"62332"],["Feb 27 2024 01: +0",15.153,"65103"],["Feb 28 2024 01: +0",12.183,"128075"],["Feb 29 2024 01: +0",12.458,"100123"],["Mar 01 2024 01: +0",13.65,"92788"],["Mar 02 2024 01: +0",14.563,"86332"],["Mar 03 2024 01: +0",14.488,"75253"],["Mar 04 2024 01: +0",14.302,"61134"],["Mar 05 2024 01: +0",13.662,"63843"],["Mar 06 2024 01: +0",11.692,"117713"],["Mar 07 2024 01: +0",11.866,"93557"],["Mar 08 2024 01: +0",12.259,"92455"],["Mar 09 2024 01: +0",12.537,"92286"],["Mar 10 2024 01: +0",12.423,"82712"],["Mar 11 2024 01: +0",12.368,"64307"],["Mar 12 2024 01: +0",12.136,"59526"],["Mar 13 2024 01: +0",10.502,"113929"],["Mar 14 2024 01: +0",10.017,"100647"],["Mar 15 2024 01: +0",10.376,"97937"],["Mar 16 2024 01: +0",10.736,"95282"],["Mar 17 2024 01: +0",10.988,"79853"],["Mar 18 2024 01: +0",11.128,"64027"],["Mar 19 2024 01: +0",11.149,"59040"],["Mar 20 2024 01: +0",9.598,"113218"],["Mar 21 2024 01: +0",9.39,"92340"],["Mar 22 2024 01: +0",10.142,"81185"],["Mar 23 2024 01: +0",10.265,"83775"],["Mar 24 2024 01: +0",10.289,"77704"],["Mar 25 2024 01: +0",10.344,"68260"],["Mar 26 2024 01: +0",10.082,"71594"],["Mar 27 2024 01: +0",8.758,"126110"],["Mar 28 2024 01: +0",8.852,"101112"],["Mar 29 2024 01: +0",9.186,"103857"],["Mar 30 2024 01: +0",9.199,"94849"],["Mar 31 2024 01: +0",9.201,"101311"],["Apr 01 2024 01: +0",9.106,"87345"],["Apr 02 2024 01: +0",8.803,"85025"],["Apr 03 2024 01: +0",7.714,"127174"],["Apr 04 2024 01: +0",7.857,"104860"],["Apr 05 2024 01: +0",8.158,"110575"],["Apr 06 2024 01: +0",8.293,"114340"],["Apr 07 2024 01: +0",8.281,"99823"],["Apr 08 2024 01: +0",8.242,"85874"],["Apr 09 2024 01: +0",7.985,"87551"],["Apr 10 2024 01: +0",7.231,"119382"],["Apr 11 2024 01: +0",7.498,"101815"],["Apr 12 2024 01: +0",7.983,"112297"],["Apr 13 2024 01: +0",8.29,"104621"],["Apr 14 2024 01: +0",8.522,"86424"],["Apr 15 2024 01: +0",8.347,"77900"],["Apr 16 2024 01: +0",7.996,"75744"],["Apr 17 2024 01: +0",7.211,"111310"],["Apr 18 2024 01: +0",7.357,"93130"],["Apr 19 2024 01: +0",7.453,"91996"],["Apr 20 2024 01: +0",7.469,"96959"],["Apr 21 2024 01: +0",6.914,"96470"],["Apr 22 2024 01: +0",5.844,"108412"],["Apr 23 2024 01: +0",5.452,"92614"],["Apr 24 2024 01: +0",4.925,"130068"],["Apr 25 2024 01: +0",4.898,"110843"],["Apr 26 2024 01: +0",4.892,"133849"],["Apr 27 2024 01: +0",5.413,"118952"],["Apr 28 2024 01: +0",5.426,"107702"],["Apr 29 2024 01: +0",5.161,"94672"],["Apr 30 2024 01: +0",5.095,"99790"],["May 01 2024 01: +0",4.691,"129902"],["May 02 2024 01: +0",4.798,"109819"],["May 03 2024 01: +0",5.005,"114174"],["May 04 2024 01: +0",5.067,"111855"],["May 05 2024 01: +0",4.967,"109790"],["May 06 2024 01: +0",4.956,"84179"],["May 07 2024 01: +0",4.9,"37428"],["May 07 2024 14: +0",4.734,"3230"],["May 07 2024 15: +0",4.776,"3632"],["May 07 2024 16: +0",4.435,"4826"],["May 07 2024 17: +0",4.827,"4109"],["May 07 2024 18: +0",4.867,"4617"],["May 07 2024 19: +0",4.901,"4328"],["May 07 2024 20: +0",4.919,"4723"],["May 07 2024 21: +0",4.916,"4329"],["May 07 2024 22: +0",4.966,"5102"],["May 07 2024 23: +0",4.963,"3488"],["May 08 2024 00: +0",5.025,"3551"],["May 08 2024 01: +0",5.024,"3773"],["May 08 2024 02: +0",4.889,"3199"],["May 08 2024 03: +0",4.906,"4420"],["May 08 2024 04: +0",4.867,"3841"],["May 08 2024 05: +0",4.827,"3469"],["May 08 2024 06: +0",4.748,"2678"],["May 08 2024 07: +0",4.68,"4103"],["May 08 2024 08: +0",4.605,"2706"],["May 08 2024 09: +0",4.435,"2916"],["May 08 2024 10: +0",4.424,"3349"],["May 08 2024 11: +0",4.361,"3465"],["May 08 2024 12: +0",4.333,"4169"],["May 08 2024 13: +0",4.352,"4933"],["May 08 2024 14: +0",4.37,"5340"],["May 08 2024 15: +0",4.366,"5975"],["May 08 2024 16: +0",4.351,"5842"],["May 08 2024 17: +0",4.367,"6051"],["May 08 2024 18: +0",4.392,"6640"],["May 08 2024 19: +0",4.392,"7679"],["May 08 2024 20: +0",4.351,"7393"],["May 08 2024 21: +0",4.319,"6980"],["May 08 2024 22: +0",4.4,"6847"],["May 08 2024 23: +0",4.508,"5818"],["May 09 2024 00: +0",4.629,"7853"],["May 09 2024 01: +0",4.72,"4507"],["May 09 2024 02: +0",4.748,"3933"],["May 09 2024 03: +0",4.748,"3595"],["May 09 2024 04: +0",4.787,"3614"],["May 09 2024 05: +0",4.787,"3128"],["May 09 2024 06: +0",4.748,"3455"],["May 09 2024 07: +0",4.748,"3026"],["May 09 2024 08: +0",4.669,"2808"],["May 09 2024 09: +0",4.508,"3421"],["May 09 2024 10: +0",4.649,"5042"],["May 09 2024 11: +0",4.438,"4678"],["May 09 2024 12: +0",4.423,"4321"],["May 09 2024 13: +0",4.38,"4186"],["May 09 2024 14: +0",4.352,"4390"],["May 09 2024 15: +0",4.493,"6651"],["May 09 2024 16: +0",4.451,"7068"],["May 09 2024 17: +0",4.506,"5899"],["May 09 2024 18: +0",4.423,"6719"],["May 09 2024 19: +0",4.423,"5560"],["May 09 2024 20: +0",4.465,"5730"],["May 09 2024 21: +0",4.59,"5886"],["May 09 2024 22: +0",4.708,"5663"],["May 09 2024 23: +0",4.748,"4825"],["May 10 2024 00: +0",4.817,"4341"],["May 10 2024 01: +0",4.827,"4431"],["May 10 2024 02: +0",4.827,"3887"],["May 10 2024 03: +0",4.827,"4117"],["May 10 2024 04: +0",4.827,"3665"],["May 10 2024 05: +0",4.827,"3143"],["May 10 2024 06: +0",4.827,"3074"],["May 10 2024 07: +0",4.827,"3126"],["May 10 2024 08: +0",4.804,"2761"],["May 10 2024 09: +0",4.683,"2242"],["May 10 2024 10: +0",4.566,"2472"],["May 10 2024 11: +0",4.598,"2758"],["May 10 2024 12: +0",4.65,"3498"],["May 10 2024 13: +0",4.76,"4298"],["May 10 2024 14: +0",4.768,"4298"],["May 10 2024 15: +0",4.768,"4960"],["May 10 2024 16: +0",4.858,"5799"],["May 10 2024 17: +0",4.844,"4874"],["May 10 2024 18: +0",4.867,"5596"],["May 10 2024 19: +0",4.867,"5933"],["May 10 2024 20: +0",4.867,"5680"],["May 10 2024 21: +0",4.867,"6396"],["May 10 2024 22: +0",4.906,"6588"],["May 10 2024 23: +0",4.906,"6039"],["May 11 2024 00: +0",4.906,"5277"],["May 11 2024 01: +0",4.906,"4825"],["May 11 2024 02: +0",4.906,"4790"],["May 11 2024 03: +0",4.985,"5948"],["May 11 2024 04: +0",4.985,"5871"],["May 11 2024 05: +0",5.025,"4941"],["May 11 2024 06: +0",5.025,"4060"],["May 11 2024 07: +0",5.001,"3852"],["May 11 2024 08: +0",5.025,"3388"],["May 11 2024 09: +0",4.985,"3142"],["May 11 2024 10: +0",4.942,"3344"],["May 11 2024 11: +0",4.906,"3387"],["May 11 2024 12: +0",4.9,"3423"],["May 11 2024 13: +0",4.827,"3175"],["May 11 2024 14: +0",4.856,"3687"],["May 11 2024 15: +0",4.9,"4033"],["May 11 2024 16: +0",4.95,"4893"],["May 11 2024 17: +0",4.985,"4872"],["May 11 2024 18: +0",4.985,"4604"],["May 11 2024 19: +0",4.985,"4843"],["May 11 2024 20: +0",4.985,"4414"],["May 11 2024 21: +0",5.025,"5697"],["May 11 2024 22: +0",5.025,"4881"],["May 11 2024 23: +0",5.064,"4446"],["May 12 2024 00: +0",5.09,"4414"],["May 12 2024 01: +0",5.104,"4320"],["May 12 2024 02: +0",5.133,"3760"],["May 12 2024 03: +0",5.124,"3540"],["May 12 2024 04: +0",5.183,"3653"],["May 12 2024 05: +0",5.183,"4038"],["May 12 2024 06: +0",5.221,"4021"],["May 12 2024 07: +0",5.148,"2906"],["May 12 2024 08: +0",5.104,"3036"],["May 12 2024 09: +0",4.985,"2116"],["May 12 2024 10: +0",4.985,"2897"],["May 12 2024 11: +0",4.985,"3393"],["May 12 2024 12: +0",5.025,"3373"],["May 12 2024 13: +0",4.942,"3097"],["May 12 2024 14: +0",5.025,"3754"],["May 12 2024 15: +0",5.032,"4622"],["May 12 2024 16: +0",5.064,"4306"],["May 12 2024 17: +0",5.104,"4777"],["May 12 2024 18: +0",5.155,"4913"],["May 12 2024 19: +0",5.223,"5218"],["May 12 2024 20: +0",5.155,"4814"],["May 12 2024 21: +0",5.241,"4768"],["May 12 2024 22: +0",5.283,"4526"],["May 12 2024 23: +0",5.302,"3418"],["May 13 2024 00: +0",5.302,"3210"],["May 13 2024 01: +0",5.302,"2923"],["May 13 2024 02: +0",5.302,"3668"],["May 13 2024 03: +0",5.302,"3272"],["May 13 2024 04: +0",5.302,"3599"],["May 13 2024 05: +0",5.341,"2775"],["May 13 2024 06: +0",5.341,"2398"],["May 13 2024 07: +0",5.341,"2556"],["May 13 2024 08: +0",5.262,"2263"],["May 13 2024 09: +0",5.144,"2249"],["May 13 2024 10: +0",5.061,"2310"],["May 13 2024 11: +0",4.985,"2537"],["May 13 2024 12: +0",5.025,"2788"],["May 13 2024 13: +0",5.028,"3108"],["May 13 2024 14: +0",5.064,"2866"],["May 13 2024 15: +0",5.104,"3342"],["May 13 2024 16: +0",5.113,"3230"],["May 13 2024 17: +0",5.113,"3541"],["May 13 2024 18: +0",5.155,"3887"],["May 13 2024 19: +0",5.183,"4712"],["May 13 2024 20: +0",5.223,"4494"],["May 13 2024 21: +0",5.262,"4521"],["May 13 2024 22: +0",5.234,"3672"],["May 13 2024 23: +0",5.297,"2949"],["May 14 2024 00: +0",5.302,"3507"],["May 14 2024 01: +0",5.341,"3020"],["May 14 2024 02: +0",5.341,"3346"],["May 14 2024 03: +0",5.341,"3210"],["May 14 2024 04: +0",5.382,"2900"],["May 14 2024 05: +0",5.3,"2978"],["May 14 2024 06: +0",5.297,"3638"],["May 14 2024 07: +0",5.262,"2512"],["May 14 2024 08: +0",5.169,"2757"],["May 14 2024 09: +0",5.127,"3069"],["May 14 2024 10: +0",5.052,"3134"],["May 14 2024 11: +0",5.027,"2981"],["May 14 2024 12: +0",4.985,"2190"],["May 14 2024 13: +0",4.945,"2600"],["May 14 2024 14: +0",4.985,"3101"],["May 14 2024 15: +0",5.007,"3851"],["May 14 2024 16: +0",5.104,"4039"],["May 14 2024 17: +0",5.104,"4055"],["May 14 2024 18: +0",5.084,"4201"],["May 14 2024 19: +0",5.154,"4645"],["May 14 2024 20: +0",5.174,"4227"],["May 14 2024 21: +0",5.223,"4210"],["May 14 2024 22: +0",5.223,"4304"],["May 14 2024 23: +0",5.243,"2962"],["May 15 2024 00: +0",5.302,"3710"],["May 15 2024 01: +0",5.302,"3090"],["May 15 2024 02: +0",5.262,"3787"],["May 15 2024 03: +0",5.223,"3798"],["May 15 2024 04: +0",5.104,"3675"],["May 15 2024 05: +0",5.104,"3172"],["May 15 2024 06: +0",5.104,"3347"],["May 15 2024 07: +0",5.064,"3060"],["May 15 2024 08: +0",4.912,"2205"],["May 15 2024 09: +0",4.726,"2698"],["May 15 2024 10: +0",4.556,"2848"],["May 15 2024 11: +0",4.629,"3495"],["May 15 2024 12: +0",4.538,"3782"],["May 15 2024 13: +0",4.554,"4195"],["May 15 2024 14: +0",4.512,"4413"],["May 15 2024 15: +0",4.527,"5343"],["May 15 2024 16: +0",4.536,"5334"],["May 15 2024 17: +0",4.55,"5352"],["May 15 2024 18: +0",4.579,"5855"],["May 15 2024 19: +0",4.574,"6170"],["May 15 2024 20: +0",4.55,"6797"],["May 15 2024 21: +0",4.588,"6200"],["May 15 2024 22: +0",4.622,"5991"],["May 15 2024 23: +0",4.708,"4773"],["May 16 2024 00: +0",4.803,"3801"],["May 16 2024 01: +0",4.867,"3820"],["May 16 2024 02: +0",4.867,"3536"],["May 16 2024 03: +0",4.867,"4248"],["May 16 2024 04: +0",4.867,"3569"],["May 16 2024 05: +0",4.867,"3598"],["May 16 2024 06: +0",4.867,"2342"],["May 16 2024 07: +0",4.827,"2895"],["May 16 2024 08: +0",4.787,"3037"],["May 16 2024 09: +0",4.708,"2824"],["May 16 2024 10: +0",4.631,"3177"],["May 16 2024 11: +0",4.698,"3479"],["May 16 2024 12: +0",4.545,"3616"],["May 16 2024 13: +0",4.573,"3610"],["May 16 2024 14: +0",4.588,"4294"],["May 16 2024 15: +0",4.545,"4926"],["May 16 2024 16: +0",4.545,"4936"],["May 16 2024 17: +0",4.502,"5268"],["May 16 2024 18: +0",4.431,"5411"],["May 16 2024 19: +0",4.502,"5701"],["May 16 2024 20: +0",4.46,"5603"],["May 16 2024 21: +0",4.593,"5587"],["May 16 2024 22: +0",4.602,"4665"],["May 16 2024 23: +0",4.707,"3972"],["May 17 2024 00: +0",4.748,"3888"],["May 17 2024 01: +0",4.748,"4242"],["May 17 2024 02: +0",4.669,"4427"],["May 17 2024 03: +0",4.708,"5027"],["May 17 2024 04: +0",4.708,"3902"],["May 17 2024 05: +0",4.708,"4560"],["May 17 2024 06: +0",4.708,"3982"],["May 17 2024 07: +0",4.708,"3421"],["May 17 2024 08: +0",4.629,"3274"],["May 17 2024 09: +0",4.593,"2673"],["May 17 2024 10: +0",4.473,"2778"],["May 17 2024 11: +0",4.457,"2705"],["May 17 2024 12: +0",4.586,"3782"],["May 17 2024 13: +0",4.55,"3565"],["May 17 2024 14: +0",4.507,"4284"],["May 17 2024 15: +0",4.515,"4584"],["May 17 2024 16: +0",4.473,"4828"],["May 17 2024 17: +0",4.418,"5354"],["May 17 2024 18: +0",4.422,"5345"],["May 17 2024 19: +0",4.431,"5850"],["May 17 2024 20: +0",4.507,"6245"],["May 17 2024 21: +0",4.547,"5924"],["May 17 2024 22: +0",4.598,"6579"],["May 17 2024 23: +0",4.633,"6765"],["May 18 2024 00: +0",4.669,"4946"],["May 18 2024 01: +0",4.669,"4860"],["May 18 2024 02: +0",4.656,"5468"],["May 18 2024 03: +0",4.629,"5347"],["May 18 2024 04: +0",4.629,"5479"],["May 18 2024 05: +0",4.59,"5348"],["May 18 2024 06: +0",4.59,"4735"],["May 18 2024 07: +0",4.59,"4167"],["May 18 2024 08: +0",4.566,"4362"],["May 18 2024 09: +0",4.392,"3355"],["May 18 2024 10: +0",4.247,"3997"],["May 18 2024 11: +0",4.24,"4256"],["May 18 2024 12: +0",4.247,"4559"],["May 18 2024 13: +0",4.29,"4400"],["May 18 2024 14: +0",4.313,"4835"],["May 18 2024 15: +0",4.332,"4988"],["May 18 2024 16: +0",4.352,"5225"],["May 18 2024 17: +0",4.384,"5747"],["May 18 2024 18: +0",4.416,"5736"],["May 18 2024 19: +0",4.431,"5557"],["May 18 2024 20: +0",4.502,"6234"],["May 18 2024 21: +0",4.506,"5807"],["May 18 2024 22: +0",4.504,"5237"],["May 18 2024 23: +0",4.511,"4583"],["May 19 2024 00: +0",4.502,"4256"],["May 19 2024 01: +0",4.431,"4338"],["May 19 2024 02: +0",4.352,"4754"],["May 19 2024 03: +0",4.352,"5017"],["May 19 2024 04: +0",4.327,"4388"],["May 19 2024 05: +0",4.352,"4361"],["May 19 2024 06: +0",4.352,"4186"],["May 19 2024 07: +0",4.392,"3756"],["May 19 2024 08: +0",4.352,"4416"],["May 19 2024 09: +0",4.273,"3630"],["May 19 2024 10: +0",4.196,"3271"],["May 19 2024 11: +0",4.161,"4611"],["May 19 2024 12: +0",4.161,"3980"],["May 19 2024 13: +0",4.161,"4291"],["May 19 2024 14: +0",4.137,"4637"],["May 19 2024 15: +0",4.092,"4630"],["May 19 2024 16: +0",4.078,"5033"],["May 19 2024 17: +0",4.115,"5303"],["May 19 2024 18: +0",4.119,"5023"],["May 19 2024 19: +0",4.156,"5671"],["May 19 2024 20: +0",4.204,"5851"],["May 19 2024 21: +0",4.273,"5836"],["May 19 2024 22: +0",4.29,"5543"],["May 19 2024 23: +0",4.29,"5013"],["May 20 2024 00: +0",4.247,"4077"],["May 20 2024 01: +0",4.194,"3987"],["May 20 2024 02: +0",4.145,"5517"],["May 20 2024 03: +0",4.115,"3999"],["May 20 2024 04: +0",4.094,"4085"],["May 20 2024 05: +0",4.075,"3875"],["May 20 2024 06: +0",4.059,"3297"],["May 20 2024 07: +0",4.032,"3215"],["May 20 2024 08: +0",3.913,"3394"],["May 20 2024 09: +0",3.818,"3852"],["May 20 2024 10: +0",3.732,"4385"],["May 20 2024 11: +0",3.699,"4349"],["May 20 2024 12: +0",3.686,"4366"],["May 20 2024 13: +0",3.67,"4824"],["May 20 2024 14: +0",3.665,"4367"],["May 20 2024 15: +0",3.68,"4906"],["May 20 2024 16: +0",3.648,"5411"],["May 20 2024 17: +0",3.646,"6495"],["May 20 2024 18: +0",3.651,"5613"],["May 20 2024 19: +0",3.681,"6398"],["May 20 2024 20: +0",3.719,"5449"],["May 20 2024 21: +0",3.782,"4619"],["May 20 2024 22: +0",3.759,"4200"],["May 20 2024 23: +0",3.759,"5047"],["May 21 2024 00: +0",3.759,"3899"],["May 21 2024 01: +0",3.719,"3728"],["May 21 2024 02: +0",3.719,"4426"],["May 21 2024 03: +0",3.707,"4981"],["May 21 2024 04: +0",3.719,"4325"],["May 21 2024 05: +0",3.68,"3642"],["May 21 2024 06: +0",3.68,"3234"],["May 21 2024 07: +0",3.64,"4021"],["May 21 2024 08: +0",3.462,"4540"],["May 21 2024 09: +0",3.284,"7709"],["May 21 2024 10: +0",3.205,"4798"],["May 21 2024 11: +0",3.114,"3599"],["May 21 2024 12: +0",3.088,"4035"],["May 21 2024 13: +0",3.051,"4812"],["May 21 2024 14: +0",3.026,"6572"],["May 21 2024 15: +0",3.086,"5542"],["May 21 2024 16: +0",3.078,"5345"],["May 21 2024 17: +0",3.121,"6027"],["May 21 2024 18: +0",3.161,"6243"],["May 21 2024 19: +0",3.116,"6757"],["May 21 2024 20: +0",2.865,"8289"],["May 21 2024 21: +0",3.137,"5427"],["May 21 2024 22: +0",3.18,"4486"],["May 21 2024 23: +0",3.18,"4323"],["May 22 2024 00: +0",3.205,"4283"],["May 22 2024 01: +0",3.137,"4378"],["May 22 2024 02: +0",3.086,"6191"],["May 22 2024 03: +0",3.165,"5644"],["May 22 2024 04: +0",3.165,"5231"],["May 22 2024 05: +0",3.118,"4329"],["May 22 2024 06: +0",3.086,"3703"],["May 22 2024 07: +0",3.094,"4157"],["May 22 2024 08: +0",2.967,"4218"],["May 22 2024 09: +0",2.825,"6699"],["May 22 2024 10: +0",2.77,"5826"],["May 22 2024 11: +0",2.714,"5379"],["May 22 2024 12: +0",2.683,"6090"],["May 22 2024 13: +0",2.696,"5971"],["May 22 2024 14: +0",2.664,"5717"],["May 22 2024 15: +0",2.651,"5834"],["May 22 2024 16: +0",2.664,"6970"],["May 22 2024 17: +0",2.653,"7119"],["May 22 2024 18: +0",2.707,"8743"],["May 22 2024 19: +0",2.699,"7379"],["May 22 2024 20: +0",2.686,"6923"],["May 22 2024 21: +0",2.715,"7892"],["May 22 2024 22: +0",2.77,"7347"],["May 22 2024 23: +0",2.809,"6012"],["May 23 2024 00: +0",2.849,"4855"],["May 23 2024 01: +0",2.865,"5379"],["May 23 2024 02: +0",2.849,"5024"],["May 23 2024 03: +0",2.928,"6516"],["May 23 2024 04: +0",2.928,"4805"],["May 23 2024 05: +0",2.967,"4424"],["May 23 2024 06: +0",2.955,"3646"],["May 23 2024 07: +0",2.849,"3279"],["May 23 2024 08: +0",2.813,"4611"],["May 23 2024 09: +0",2.705,"4428"],["May 23 2024 10: +0",2.727,"4439"],["May 23 2024 11: +0",2.705,"4681"],["May 23 2024 12: +0",2.702,"5342"],["May 23 2024 13: +0",2.662,"4892"],["May 23 2024 14: +0",2.682,"5333"],["May 23 2024 15: +0",2.664,"6130"],["May 23 2024 16: +0",2.68,"6468"],["May 23 2024 17: +0",2.705,"5909"],["May 23 2024 18: +0",2.715,"7119"],["May 23 2024 19: +0",2.791,"7532"],["May 23 2024 20: +0",2.803,"6496"],["May 23 2024 21: +0",2.832,"6658"],["May 23 2024 22: +0",4.155,"74526"],["May 23 2024 23: +0",6.507,"101861"],["May 24 2024 00: +0",4.915,"27303"],["May 24 2024 01: +0",4.322,"16900"],["May 24 2024 02: +0",5.01,"17739"],["May 24 2024 03: +0",5.144,"9373"],["May 24 2024 04: +0",5.104,"8239"],["May 24 2024 05: +0",4.906,"8104"],["May 24 2024 06: +0",4.354,"9986"],["May 24 2024 07: +0",4.795,"8133"],["May 24 2024 08: +0",4.071,"8917"],["May 24 2024 09: +0",4.087,"11041"],["May 24 2024 10: +0",4.623,"8910"],["May 24 2024 11: +0",4.687,"9221"],["May 24 2024 12: +0",4.736,"9137"],["May 24 2024 13: +0",4.906,"8722"],["May 24 2024 14: +0",4.965,"9240"],["May 24 2024 15: +0",4.966,"8302"],["May 24 2024 16: +0",4.966,"7942"],["May 24 2024 17: +0",5.009,"8457"],["May 24 2024 18: +0",5.137,"7368"],["May 24 2024 19: +0",5.164,"7398"],["May 24 2024 20: +0",5.262,"7192"],["May 24 2024 21: +0",5.406,"6792"],["May 24 2024 22: +0",5.46,"6760"],["May 24 2024 23: +0",5.492,"4918"],["May 25 2024 00: +0",5.396,"4270"],["May 25 2024 01: +0",5.193,"3662"],["May 25 2024 02: +0",5.176,"4166"],["May 25 2024 03: +0",5.144,"4599"],["May 25 2024 04: +0",5.202,"3824"],["May 25 2024 05: +0",5.223,"3820"],["May 25 2024 06: +0",5.164,"3284"],["May 25 2024 07: +0",5.104,"3240"],["May 25 2024 08: +0",4.911,"3293"],["May 25 2024 09: +0",4.827,"3783"],["May 25 2024 10: +0",4.591,"3931"],["May 25 2024 11: +0",4.497,"4231"],["May 25 2024 12: +0",4.419,"4217"],["May 25 2024 13: +0",4.371,"4513"],["May 25 2024 14: +0",4.376,"4894"],["May 25 2024 15: +0",4.371,"4383"],["May 25 2024 16: +0",4.352,"4830"],["May 25 2024 17: +0",4.352,"5416"],["May 25 2024 18: +0",4.392,"5143"],["May 25 2024 19: +0",4.501,"5718"],["May 25 2024 20: +0",4.548,"5307"],["May 25 2024 21: +0",4.651,"4985"],["May 25 2024 22: +0",4.631,"4129"],["May 25 2024 23: +0",4.428,"4162"],["May 26 2024 00: +0",4.431,"3711"],["May 26 2024 01: +0",4.392,"3458"],["May 26 2024 02: +0",4.431,"3070"],["May 26 2024 03: +0",4.392,"3278"],["May 26 2024 04: +0",4.352,"3217"],["May 26 2024 05: +0",4.273,"3500"],["May 26 2024 06: +0",4.287,"3529"],["May 26 2024 07: +0",4.273,"3566"],["May 26 2024 08: +0",4.104,"3509"],["May 26 2024 09: +0",3.877,"5135"],["May 26 2024 10: +0",3.827,"4712"],["May 26 2024 11: +0",3.798,"4097"],["May 26 2024 12: +0",3.733,"4929"],["May 26 2024 13: +0",3.745,"3990"],["May 26 2024 14: +0",3.719,"4981"],["May 26 2024 15: +0",3.688,"4404"],["May 26 2024 16: +0",3.639,"4735"],["May 26 2024 17: +0",3.651,"5040"],["May 26 2024 18: +0",3.696,"5705"],["May 26 2024 19: +0",3.733,"5860"],["May 26 2024 20: +0",3.774,"5297"],["May 26 2024 21: +0",3.776,"4995"],["May 26 2024 22: +0",3.776,"4287"],["May 26 2024 23: +0",3.779,"3798"],["May 27 2024 00: +0",3.776,"3392"],["May 27 2024 01: +0",3.722,"2862"],["May 27 2024 02: +0",3.719,"3759"],["May 27 2024 03: +0",3.68,"3351"],["May 27 2024 04: +0",3.561,"3624"],["May 27 2024 05: +0",3.578,"3863"],["May 27 2024 06: +0",3.635,"4774"],["May 27 2024 07: +0",3.604,"3499"],["May 27 2024 08: +0",3.521,"3542"],["May 27 2024 09: +0",3.372,"3951"],["May 27 2024 10: +0",3.363,"3641"],["May 27 2024 11: +0",3.346,"2804"],["May 27 2024 12: +0",3.261,"2734"],["May 27 2024 13: +0",3.261,"3482"],["May 27 2024 14: +0",3.272,"3708"],["May 27 2024 15: +0",3.282,"4327"],["May 27 2024 16: +0",3.363,"6251"],["May 27 2024 17: +0",3.432,"5834"],["May 27 2024 18: +0",3.518,"6623"],["May 27 2024 19: +0",3.604,"5896"],["May 27 2024 20: +0",3.604,"5425"],["May 27 2024 21: +0",3.656,"5488"],["May 27 2024 22: +0",3.69,"4221"],["May 27 2024 23: +0",3.719,"4080"],["May 28 2024 00: +0",3.673,"3198"],["May 28 2024 01: +0",3.64,"2996"],["May 28 2024 02: +0",3.68,"3160"],["May 28 2024 03: +0",3.64,"3421"],["May 28 2024 04: +0",3.547,"3063"],["May 28 2024 05: +0",3.498,"3185"],["May 28 2024 06: +0",3.507,"2930"],["May 28 2024 07: +0",3.482,"3315"],["May 28 2024 08: +0",3.301,"2774"],["May 28 2024 09: +0",3.181,"2376"],["May 28 2024 10: +0",3.153,"2771"],["May 28 2024 11: +0",3.162,"3153"],["May 28 2024 12: +0",3.219,"4201"],["May 28 2024 13: +0",3.175,"3323"],["May 28 2024 14: +0",3.181,"3943"],["May 28 2024 15: +0",3.244,"4571"],["May 28 2024 16: +0",3.301,"4527"],["May 28 2024 17: +0",3.322,"4376"],["May 28 2024 18: +0",3.347,"5430"],["May 28 2024 19: +0",3.347,"4272"],["May 28 2024 20: +0",3.347,"5214"],["May 28 2024 21: +0",3.352,"5165"],["May 28 2024 22: +0",3.352,"4064"],["May 28 2024 23: +0",3.403,"4078"],["May 29 2024 00: +0",3.403,"3181"],["May 29 2024 01: +0",3.363,"3356"],["May 29 2024 02: +0",3.284,"3952"],["May 29 2024 03: +0",3.284,"4570"],["May 29 2024 04: +0",3.284,"4983"],["May 29 2024 05: +0",3.244,"4075"],["May 29 2024 06: +0",3.205,"4034"],["May 29 2024 07: +0",3.166,"3307"],["May 29 2024 08: +0",3.047,"3375"],["May 29 2024 09: +0",3.007,"3326"],["May 29 2024 10: +0",2.971,"4068"],["May 29 2024 11: +0",2.917,"4655"],["May 29 2024 12: +0",2.928,"3698"],["May 29 2024 13: +0",2.948,"4204"],["May 29 2024 14: +0",2.928,"5199"],["May 29 2024 15: +0",2.968,"6382"],["May 29 2024 16: +0",3.023,"7183"],["May 29 2024 17: +0",3.034,"6599"],["May 29 2024 18: +0",3.051,"7160"],["May 29 2024 19: +0",3.051,"6709"],["May 29 2024 20: +0",3.094,"7818"],["May 29 2024 21: +0",3.244,"11836"],["May 29 2024 22: +0",3.342,"219"],["May 29 2024 23: +0",2.928,"8"],["May 30 2024 00: +0",3.719,"26585"],["May 30 2024 01: +0",4.234,"7212"],["May 30 2024 02: +0",4.313,"4946"],["May 30 2024 03: +0",4.234,"4619"],["May 30 2024 04: +0",4.273,"3376"],["May 30 2024 05: +0",4.273,"3229"],["May 30 2024 06: +0",4.194,"3232"],["May 30 2024 07: +0",4.154,"2942"],["May 30 2024 08: +0",4.154,"2735"],["May 30 2024 09: +0",4.075,"2856"],["May 30 2024 10: +0",4.059,"3412"],["May 30 2024 11: +0",3.943,"3039"],["May 30 2024 12: +0",3.815,"3315"],["May 30 2024 13: +0",3.772,"3461"],["May 30 2024 14: +0",3.913,"4702"],["May 30 2024 15: +0",3.815,"4209"],["May 30 2024 16: +0",3.877,"4768"],["May 30 2024 17: +0",3.798,"4623"],["May 30 2024 18: +0",3.838,"4574"],["May 30 2024 19: +0",3.812,"4680"],["May 30 2024 20: +0",3.84,"4921"],["May 30 2024 21: +0",3.798,"4635"],["May 30 2024 22: +0",3.838,"4293"],["May 30 2024 23: +0",3.917,"3270"],["May 31 2024 00: +0",3.996,"3172"],["May 31 2024 01: +0",4.075,"3306"],["May 31 2024 02: +0",4.147,"3058"],["May 31 2024 03: +0",4.234,"4532"],["May 31 2024 04: +0",4.283,"3712"],["May 31 2024 05: +0",4.313,"3037"],["May 31 2024 06: +0",4.313,"2406"],["May 31 2024 07: +0",4.313,"2217"],["May 31 2024 08: +0",4.039,"2412"],["May 31 2024 09: +0",3.971,"2568"],["May 31 2024 10: +0",4.025,"2939"],["May 31 2024 11: +0",4.115,"3461"],["May 31 2024 12: +0",4.026,"3252"],["May 31 2024 13: +0",4.112,"4177"],["May 31 2024 14: +0",4.026,"3415"],["May 31 2024 15: +0",3.984,"3950"],["May 31 2024 16: +0",4.069,"4590"],["May 31 2024 17: +0",4.155,"5207"],["May 31 2024 18: +0",4.198,"4838"],["May 31 2024 19: +0",4.248,"5132"],["May 31 2024 20: +0",4.198,"5308"],["May 31 2024 21: +0",4.194,"5242"],["May 31 2024 22: +0",4.212,"5221"],["May 31 2024 23: +0",4.313,"4899"],["Jun 01 2024 00: +0",4.34,"4279"],["Jun 01 2024 01: +0",4.352,"3674"],["Jun 01 2024 02: +0",4.392,"3832"],["Jun 01 2024 03: +0",4.477,"4373"],["Jun 01 2024 04: +0",4.431,"4389"],["Jun 01 2024 05: +0",4.431,"4021"],["Jun 01 2024 06: +0",4.431,"3088"],["Jun 01 2024 07: +0",4.469,"3847"],["Jun 01 2024 08: +0",4.392,"2676"],["Jun 01 2024 09: +0",4.392,"2988"],["Jun 01 2024 10: +0",4.313,"3520"],["Jun 01 2024 11: +0",4.34,"3158"],["Jun 01 2024 12: +0",4.296,"2684"],["Jun 01 2024 13: +0",4.34,"3460"],["Jun 01 2024 14: +0",4.389,"3981"],["Jun 01 2024 15: +0",4.422,"3989"],["Jun 01 2024 16: +0",4.433,"4415"],["Jun 01 2024 17: +0",4.492,"4071"],["Jun 01 2024 18: +0",4.598,"4789"],["Jun 01 2024 19: +0",4.629,"4251"],["Jun 01 2024 20: +0",4.684,"3693"],["Jun 01 2024 21: +0",4.727,"3918"],["Jun 01 2024 22: +0",4.748,"3746"],["Jun 01 2024 23: +0",4.787,"3712"],["Jun 02 2024 00: +0",4.867,"4304"],["Jun 02 2024 01: +0",4.896,"3656"],["Jun 02 2024 02: +0",4.906,"3299"],["Jun 02 2024 03: +0",4.906,"3210"],["Jun 02 2024 04: +0",4.962,"3201"],["Jun 02 2024 05: +0",4.985,"2634"],["Jun 02 2024 06: +0",4.995,"2095"],["Jun 02 2024 07: +0",4.985,"2635"],["Jun 02 2024 08: +0",4.906,"1597"],["Jun 02 2024 09: +0",4.985,"2481"],["Jun 02 2024 10: +0",4.978,"1135"],["Jun 02 2024 11: +0",4.94,"2292"],["Jun 02 2024 12: +0",4.906,"3204"],["Jun 02 2024 13: +0",4.827,"3051"],["Jun 02 2024 14: +0",4.813,"2952"],["Jun 02 2024 15: +0",4.818,"3808"],["Jun 02 2024 16: +0",4.867,"3787"],["Jun 02 2024 17: +0",4.906,"3508"],["Jun 02 2024 18: +0",4.985,"3858"],["Jun 02 2024 19: +0",4.985,"3929"],["Jun 02 2024 20: +0",5.025,"4322"],["Jun 02 2024 21: +0",5.071,"4044"],["Jun 02 2024 22: +0",5.104,"3839"],["Jun 02 2024 23: +0",5.157,"3010"],["Jun 03 2024 00: +0",5.166,"2504"],["Jun 03 2024 01: +0",5.2,"2232"],["Jun 03 2024 02: +0",5.23,"2312"],["Jun 03 2024 03: +0",5.262,"2436"],["Jun 03 2024 04: +0",5.302,"2427"],["Jun 03 2024 05: +0",5.329,"2179"],["Jun 03 2024 06: +0",5.355,"1808"],["Jun 03 2024 07: +0",5.341,"1420"],["Jun 03 2024 08: +0",5.286,"1888"],["Jun 03 2024 09: +0",5.183,"1432"],["Jun 03 2024 10: +0",5.057,"1791"],["Jun 03 2024 11: +0",5.03,"1897"],["Jun 03 2024 12: +0",5.096,"2087"],["Jun 03 2024 13: +0",5.126,"2129"],["Jun 03 2024 14: +0",5.025,"1957"],["Jun 03 2024 15: +0",5.025,"2425"],["Jun 03 2024 16: +0",5.093,"2903"],["Jun 03 2024 17: +0",5.157,"3075"],["Jun 03 2024 18: +0",5.196,"2975"],["Jun 03 2024 19: +0",5.286,"3353"],["Jun 03 2024 20: +0",5.332,"3537"],["Jun 03 2024 21: +0",5.25,"2547"],["Jun 03 2024 22: +0",5.237,"2367"],["Jun 03 2024 23: +0",5.341,"2027"],["Jun 04 2024 00: +0",5.336,"2031"],["Jun 04 2024 01: +0",5.423,"1929"],["Jun 04 2024 02: +0",5.439,"1973"],["Jun 04 2024 03: +0",5.341,"1932"],["Jun 04 2024 04: +0",5.323,"2372"],["Jun 04 2024 05: +0",5.341,"2921"],["Jun 04 2024 06: +0",5.302,"1854"],["Jun 04 2024 07: +0",5.183,"1440"],["Jun 04 2024 08: +0",5.242,"1787"],["Jun 04 2024 09: +0",5.191,"1458"],["Jun 04 2024 10: +0",4.962,"1394"],["Jun 04 2024 11: +0",5.002,"1978"],["Jun 04 2024 12: +0",5.095,"2547"],["Jun 04 2024 13: +0",4.936,"1805"],["Jun 04 2024 14: +0",4.964,"2104"],["Jun 04 2024 15: +0",4.912,"2060"],["Jun 04 2024 16: +0",4.936,"2513"],["Jun 04 2024 17: +0",4.979,"2874"],["Jun 04 2024 18: +0",4.735,"4981"],["Jun 04 2024 19: +0",4.635,"5147"],["Jun 04 2024 20: +0",4.836,"3257"],["Jun 04 2024 21: +0",4.942,"2600"],["Jun 04 2024 22: +0",5.065,"2970"],["Jun 04 2024 23: +0",5.104,"2428"],["Jun 05 2024 00: +0",5.104,"2407"],["Jun 05 2024 01: +0",5.144,"2481"],["Jun 05 2024 02: +0",5.025,"2412"],["Jun 05 2024 03: +0",4.827,"2416"],["Jun 05 2024 04: +0",4.749,"2705"],["Jun 05 2024 05: +0",4.669,"1982"],["Jun 05 2024 06: +0",4.657,"2461"],["Jun 05 2024 07: +0",4.431,"2244"],["Jun 05 2024 08: +0",4.345,"2243"],["Jun 05 2024 09: +0",4.225,"2363"],["Jun 05 2024 10: +0",4.126,"2629"],["Jun 05 2024 11: +0",4.083,"2726"],["Jun 05 2024 12: +0",4.075,"3960"],["Jun 05 2024 13: +0",4.075,"3612"],["Jun 05 2024 14: +0",4.066,"4345"],["Jun 05 2024 15: +0",4.066,"4679"],["Jun 05 2024 16: +0",4.078,"4617"],["Jun 05 2024 17: +0",4.099,"4693"],["Jun 05 2024 18: +0",4.126,"4541"],["Jun 05 2024 19: +0",4.126,"5341"],["Jun 05 2024 20: +0",4.126,"6315"],["Jun 05 2024 21: +0",4.126,"5522"],["Jun 05 2024 22: +0",4.169,"4732"],["Jun 05 2024 23: +0",4.169,"3605"],["Jun 06 2024 00: +0",4.234,"3329"],["Jun 06 2024 01: +0",4.273,"3317"],["Jun 06 2024 02: +0",4.273,"3342"],["Jun 06 2024 03: +0",4.313,"2944"],["Jun 06 2024 04: +0",4.313,"3232"],["Jun 06 2024 05: +0",4.313,"2870"],["Jun 06 2024 06: +0",4.313,"2507"],["Jun 06 2024 07: +0",4.197,"2234"],["Jun 06 2024 08: +0",4.154,"2837"],["Jun 06 2024 09: +0",4.065,"2919"],["Jun 06 2024 10: +0",4.074,"3777"],["Jun 06 2024 11: +0",4.035,"3522"],["Jun 06 2024 12: +0",4.014,"3843"],["Jun 06 2024 13: +0",3.933,"3395"],["Jun 06 2024 14: +0",3.954,"3760"],["Jun 06 2024 15: +0",3.901,"3501"],["Jun 06 2024 16: +0",3.896,"3829"],["Jun 06 2024 17: +0",3.939,"4013"],["Jun 06 2024 18: +0",3.954,"4616"],["Jun 06 2024 19: +0",3.917,"3922"],["Jun 06 2024 20: +0",3.888,"4155"],["Jun 06 2024 21: +0",3.957,"4291"],["Jun 06 2024 22: +0",3.957,"3677"],["Jun 06 2024 23: +0",4.04,"3378"],["Jun 07 2024 00: +0",4.075,"3031"],["Jun 07 2024 01: +0",4.091,"2964"],["Jun 07 2024 02: +0",4.115,"2872"],["Jun 07 2024 03: +0",4.075,"3091"],["Jun 07 2024 04: +0",4.075,"2599"],["Jun 07 2024 05: +0",4.075,"2694"],["Jun 07 2024 06: +0",4.075,"2804"],["Jun 07 2024 07: +0",3.999,"2175"],["Jun 07 2024 08: +0",3.957,"2434"],["Jun 07 2024 09: +0",3.971,"2979"],["Jun 07 2024 10: +0",3.939,"2597"],["Jun 07 2024 11: +0",3.912,"2793"],["Jun 07 2024 12: +0",3.896,"3090"]];

export { exampleData };
