/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "Self-Supervised Learning with Limited Labeled Data for Prostate Cancer Detection in High Frequency Ultrasound",
    authors:
      "Paul FR Wilson*, Mahdi Gilany*, Amoon Jamzad, Fahimeh Fooladgar, Minh Nguyen Nhat To, Brian Wodlinger, Purang Abolmaesumi, Parvin Mousavi",
    conferences:
      "arXiv preprint arXiv:2211.00527",
    researchYr: 2022,
    citebox: "popup1",
    image: "assets/images/research-page/SSL_TUFFC.png",
    citation: {
      vancouver:
        "Wilson PF*, Gilany M*, Jamzad A, Fooladgar F, To MN, Wodlinger B, Abolmaesumi P, Mousavi P. Self-Supervised Learning with Limited Labeled Data for Prostate Cancer Detection in High Frequency Ultrasound. arXiv preprint arXiv:2211.00527. 2022 Nov 1.",
    },
    abstract:
      "Deep learning-based analysis of high-frequency, high-resolution micro-ultrasound data shows great promise for prostate cancer detection. Previous approaches to analysis of ultrasound data largely follow a supervised learning paradigm. Ground truth labels for ultrasound images used for training deep networks often include coarse annotations generated from the histopathological analysis of tissue samples obtained via biopsy. This creates inherent limitations on the availability and quality of labeled data, posing major challenges to the success of supervised learning methods. On the other hand, unlabeled prostate ultrasound data are more abundant. In this work, we successfully apply self-supervised representation learning to micro-ultrasound data. Using ultrasound data from 1028 biopsy cores of 391 subjects obtained in two clinical centres, we demonstrate that feature representations learnt with this method can be used to classify cancer from non-cancer tissue, obtaining an AUROC score of 91% on an independent test set. To the best of our knowledge, this is the first successful end-to-end self-supervised learning approach for prostate cancer detection using ultrasound data. Our method outperforms baseline supervised learning approaches, generalizes well between different data centers, and scale well in performance as more unlabeled data are added, making it a promising approach for future research using large volumes of unlabeled data.",
    absbox: "absPopup1",
  },

  {
    title:
      "Towards Confident Detection of Prostate Cancer using High Resolution Micro-ultrasound",
    authors: "Mahdi Gilany, Paul Wilson, Amoon Jamzad, Fahimeh Fooladgar, Minh Nguyen Nhat To, Brian Wodlinger, Purang Abolmaesumi, Parvin Mousavi",
    conferences:
      "International Conference on Medical Image Computing and Computer Assisted Intervention (MICCAI)",
    researchYr: 2022,
    citebox: "popup3",
    image: "assets/images/research-page/MICCAI.png",
    citation: {
      vancouver:
        "Gilany M, Wilson P, Jamzad A, Fooladgar F, To MN, Wodlinger B, Abolmaesumi P, Mousavi P. Towards Confident Detection of Prostate Cancer Using High Resolution Micro-ultrasound. InInternational Conference on Medical Image Computing and Computer-Assisted Intervention 2022 (pp. 411-420). Springer, Cham.",
    },
    abstract:
      "MOTIVATION: Detection of prostate cancer during transrectal ultrasound-guided biopsy is challenging. The highly heterogeneous appearance of cancer, presence of ultrasound artefacts, and noise all contribute to these difficulties. Recent advancements in high-frequency ultrasound imaging - micro-ultrasound - have drastically increased the capability of tissue imaging at high resolution. Our aim is to investigate the development of a robust deep learning model specifically for micro-ultrasound-guided prostate cancer biopsy. For the model to be clinically adopted, a key challenge is to design a solution that can confidently identify the cancer, while learning from coarse histopathology measurements of biopsy samples that introduce weak labels. METHODS: We use a dataset of micro-ultrasound images acquired from 194 patients, who underwent prostate biopsy. We train a deep model using a co-teaching paradigm to handle noise in labels, together with an evidential deep learning method for uncertainty estimation. We evaluate the performance of our model using the clinically relevant metric of accuracy vs. confidence. RESULTS: Our model achieves a well-calibrated estimation of predictive uncertainty with area under the curve of 88%. The use of co-teaching and evidential deep learning in combination yields significantly better uncertainty estimation than either alone. We also provide a detailed comparison against state-of-the-art in uncertainty estimation.",
    absbox: "absPopup3",
  },


  {
    title: "Joint Inference for Neural Network Depth and Dropout Regularization",
    authors:
      "KC Kishan, Rui Li, Mahdi Gilany",
    conferences:
      "Advances in Neural Information Processing Systems (Neurips)",
    researchYr: 2021,
    citebox: "popup2",
    image: "assets/images/research-page/Neurips.png",
    citation: {
      vancouver:
        "KC K, Li R, Gilany M. Joint inference for neural network depth and dropout regularization. Advances in Neural Information Processing Systems (Neurips). 2021 Dec 6;34:26622-34.",
    },
    abstract:
      "Dropout regularization methods prune a neural network's pre-determined backbone structure to avoid overfitting. However, a deep model still tends to be poorly calibrated with high confidence on incorrect predictions. We propose a unified Bayesian model selection method to jointly infer the most plausible network depth warranted by data, and perform dropout regularization simultaneously. In particular, to infer network depth we define a beta process over the number of hidden layers which allows it to go to infinity. Layer-wise activation probabilities induced by the beta process modulate neuron activation via binary vectors of a conjugate Bernoulli process. Experiments across domains show that by adapting network depth and dropout regularization to data, our method achieves superior performance comparing to state-of-the-art methods with well-calibrated uncertainty estimates. In continual learning, our method enables neural networks to dynamically evolve their depths to accommodate incrementally available data beyond their initial structures, and alleviate catastrophic forgetting.",
    absbox: "absPopup2",
  },


  // {
  //   title:
  //     "A Contextual Hierarchical Attention Network with Adaptive Objective for Dialogue State Tracking",
  //   authors:
  //     "Yong Shan, Zekang Li, Jinchao Zhang, Fandong Meng, Yang Feng, Cheng Niu and Jie Zhou",
  //   conferences:
  //     "The 58th Annual Meeting of the Association for Computational Linguistics",
  //   researchYr: 2020,
  //   citebox: "popup4",
  //   image: "assets/images/research-page/dialogueState.png",
  //   citation: {
  //     vancouver:
  //       "Yong Shan, Zekang Li, Jinchao Zhang, Fandong Meng, Yang Feng, Cheng Niu and Jie Zhou. A Contextual Hierarchical Attention Network with Adaptive Objective for Dialogue State Tracking. The 58th Annual Meeting of the Association for Computational Linguistics 2020.",
  //   },
  //   abstract:
  //     "This is currently left empty and this can be considered as a dummy data 4",
  //   absbox: "absPopup4",
  // },

  // {
  //   title: "Dual Super-Resolution Learning for Semantic Segmentation",
  //   authors: "Wang, Li and Li, Dong and Zhu, Yousong and Tian, Lu and Shan, Yi",
  //   conferences:
  //     "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
  //   researchYr: 2020,
  //   citebox: "popup5",
  //   image: "assets/images/research-page/semanticSegmentation.png",
  //   citation: {
  //     vancouver:
  //       "Wang, Li and Li, Dong and Zhu, Yousong and Tian, Lu and Shan, Yi. Dual Super-Resolution Learning for Semantic Segmentation. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020.",
  //   },
  //   abstract:
  //     "This is currently left empty and this can be considered as a dummy data 5",
  //   absbox: "absPopup5",
  // },

  // {
  //   title: "Deep Unfolding Network for Image Super-Resolution",
  //   authors: "Zhang, Kai and Van Gool, Luc and Timofte, Radu",
  //   conferences:
  //     "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
  //   researchYr: 2020,
  //   citebox: "popup6",
  //   image: "assets/images/research-page/deepNetwork.png",
  //   citation: {
  //     vancouver:
  //       "Zhang, Kai and Van Gool, Luc and Timofte, Radu. Deep Unfolding Network for Image Super-Resolution. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020.",
  //   },
  //   abstract:
  //     "This is currently left empty and this can be considered as a dummy data 6",
  //   absbox: "absPopup6",
  // },

  // {
  //   title:
  //     "Unsupervised Learning for Intrinsic Image Decomposition From a Single Image",
  //   authors: "Liu, Yunfei and Li, Yu and You, Shaodi and Lu, Feng",
  //   conferences:
  //     "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
  //   researchYr: 2020,
  //   citebox: "popup7",
  //   image: "assets/images/research-page/imageDecomposition.png",
  //   citation: {
  //     vancouver:
  //       "Liu, Yunfei and Li, Yu and You, Shaodi and Lu, Feng. Unsupervised Learning for Intrinsic Image Decomposition From a Single Image. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020.",
  //   },
  //   abstract:
  //     "This is currently left empty and this can be considered as a dummy data 7",
  //   absbox: "absPopup7",
  // },
  // {
  //   title:
  //     "Forward and Backward Information Retention for Accurate Binary Neural Networks",
  //   authors:
  //     "Qin, Haotong and Gong, Ruihao and Liu, Xianglong and Shen, Mingzhu and Wei, Ziran and Yu, Fengwei and Song, Jingkuan",
  //   conferences:
  //     "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
  //   researchYr: 2020,
  //   citebox: "popup8",
  //   image: "assets/images/research-page/neuralNetworks.jpg",
  //   citation: {
  //     vancouver:
  //       "Qin, Haotong and Gong, Ruihao and Liu, Xianglong and Shen, Mingzhu and Wei, Ziran and Yu, Fengwei and Song, Jingkuan. Forward and Backward Information Retention for Accurate Binary Neural Networks. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020.",
  //   },
  //   abstract:
  //     "This is currently left empty and this can be considered as a dummy data 8",
  //   absbox: "absPopup8",
  // },
];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
