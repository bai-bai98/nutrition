const data = [
  [
    {
      description: "Description",
      meaning: "Meaning",
      name: "Endurance Response",
      order: 1,
      output_text: "Output Text",
      score: 0,
      snps: [
        {
          genotype: "GC",
          overview:
            "Angiotensin I-converting enzyme is a small enzyme that plays an important role in blood pressure regulation and electrolyte balance. Its activity leads to blood vessel constriction and increased blood pressure. The variation tested is the Insertion (I)/Deletion (D) variation in which a piece of DNA is either present or deleted from the gene. – the I allele is associated with lower ACE activity. This is the most researched gene in relation to sporting performance.",
          rs_id: "rs4341",
          title: "ACE - Angiotensin Converting Enzyme",
        },
        {
          genotype: "GA",
          overview:
            "Beta(2)-adrenergic receptors are expressed throughout the body and serve as receptors for the natural stimulant hormones called catecholamines epinephrine (adrenaline) and norepinephrine. The polymorphisms tested result in amino acid changes, which affect the activity of the receptor and alter the response to these hormones. Beta- adrenergic receptors are found in fat cells, liver and skeletal muscle where they are involved in fat mobilization, blood glucose levels and in vasodilation.",
          rs_id: "rs1042713",
          title: "ADRB2 - Beta-2-Adrenergenic-Receptor (Arg16Gly)",
        },
        {
          genotype: "CC",
          overview:
            "The HFE gene regulates the liver protein hepcidin, which is considered to be the principal iron-regulatory hormone. Levels of hepcidin increase when iron levels increase in the blood, preventing intestinal cells and macrophages from releasing iron into the bloodstream. When iron builds up in the cells, signals are produced to reduce the iron absorption from food. Hepcidin levels decrease when the body needs more iron. Mutations in the HFE gene such as C282Y and H63D decrease hepcidin levels, causing intestinal cells to think more iron is needed. Thus, more iron is absorbed.",
          rs_id: "rs1799945",
          title: "HFE - Human Hemochromatosis Protein",
        },
        {
          genotype: "CC",
          overview:
            "Hypoxia-inducible factor-1alpha (HIF1A) is a transcription factor regulating several genes in response to hypoxic stimuli. HIF1A target genes code for proteins involved in oxygen transport, glycolytic enzymes, and glucose transporters.",
          rs_id: "rs11549465",
          title: "HIF1A - Hypoxia-inducible factor 1alpha (Pro582Ser)",
        },
        {
          genotype: "TT",
          overview:
            "Associated with major structural component of the fast twitch fibres of skeletal muscles. Only present in fast twitch muscle fibres.",
          rs_id: "rs1815739",
          title: "ACTN3 - Alpha Actinin 3",
        },
        {
          genotype: "CC",
          overview:
            "Bradykinin is an endothelial dependent vasodilator and acts via the Bradykinin B2 receptor. The B2 receptor forms a complex with angiotensin converting enzyme (ACE) and this is thought to play a role in cross-talk between the renin-angiotensin and the kinin-kallikrein systems.",
          rs_id: "rs1799722",
          title: "BDKRB2 - Bradykinin receptor-B2 gene",
        },
        {
          genotype: "CT",
          overview: "Associated with Alpha-1 chain of type V collagen.",
          rs_id: "rs12722",
          title: "COL5A1 - Collagen, type V, alpha 1",
        },
        {
          genotype: "GC",
          overview:
            "Forms a water-specific channel that provides the plasma membranes of red cells and kidney proximal tubules with high permeability to water, thereby permitting water to move in the direction of an osmotic gradient. Regulation of water flow across cell membranes is essential for supporting inter- and intracellular fluid balance, which is critical for health and exercise performance.",
          rs_id: "rs1049305",
          title: "AQP1 - Aquaporin-1 (Colton Blood Group)",
        },
        {
          genotype: "AA",
          overview:
            "Nuclear respiratory factor 2 (NRF2), also referred to as the GA-binding protein (GABP) transcription factor, is a key transcriptional activator of many nuclear genes which encode a wide range of mitochondrial enzymes.",
          rs_id: "rs7181866",
          title: "GABPB1 - GA-binding protein subunit beta-1",
        },
      ],
    },
    {
      description: "Description",
      meaning: "Meaning",
      name: "Strength Response",
      order: 1,
      output_text: "Output Text",
      score: -1,
      snps: [
        {
          genotype: "AA",
          overview:
            "rs699 is a functional change in the Angiotensinogen protein, which is associated with vasoconstriction and blood pressure control",
          rs_id: "rs699",
          title: "AGT - Angiotensinogen",
        },
        {
          genotype: "TG",
          overview:
            "The MTHFR gene provides instructions for making an enzyme called methylenetetrahydrofolate reductase. This enzyme plays a role in processing amino acids, the building blocks of proteins",
          rs_id: "rs1801131",
          title: "MTHFR - Methylene Tetrahydrofolate Reductase",
        },
        {
          genotype: "TT",
          overview:
            "Associated with major structural component of the fast twitch fibres of skeletal muscles. Only present in fast twitch muscle fibres.",
          rs_id: "rs1815739",
          title: "ACTN3 - Alpha Actinin 3",
        },
        {
          genotype: "CG",
          overview:
            "Polymorphism in the promoter of the IL6 gene alters transcriptional response. There is a genetically determined difference in the degree of the IL-6 response to stressful stimuli between individuals, with the C allele found to be associated with significantly lower levels of plasma IL-6.",
          rs_id: "rs1800795",
          title: "IL6 - Interleukin-6",
        },
        {
          genotype: "GG",
          overview:
            "Regulates genes responsible for skeletal and heart muscle fatty acid oxidation and is a main regulator of energy metabolism.",
          rs_id: "rs4253778",
          title: "PPARA - Peroxisome Proliferator-Activated Receptor Alpha",
        },
        {
          genotype: "CC",
          overview:
            "Hypoxia-inducible factor-1alpha (HIF1A) is a transcription factor regulating several genes in response to hypoxic stimuli. HIF1A target genes code for proteins involved in oxygen transport, glycolytic enzymes, and glucose transporters.",
          rs_id: "rs11549465",
          title: "HIF1A - Hypoxia-inducible factor 1alpha (Pro582Ser)",
        },
        {
          genotype: "GG",
          overview:
            "The AMPD1 gene encodes the enzyme adenosine monophosphate deaminase, which is one of the key enzymes used to process the energy source ATP. The C34T variation causes a premature stop in the protein, leading to a nonfunctional AMPD1 enzyme. Some individuals - but by no means all or even a majority apparently - who are AMPD1 deficient get muscle cramps and pains when they exert themselves. The most common genotype bringing this about is rs17602729(A;A), i.e. the individuals who carry two copies of the C34T allele and therefore have no functioning AMPD1 allele.",
          rs_id: "rs17602729",
          title: "AMDP1 - adenosylmethionine decarboxylase pseudogene 1",
        },
      ],
    },
    {
      description: "Description",
      meaning: "Meaning",
      name: "Salt Sensitivity",
      order: 1,
      output_text: "Output Text",
      score: 0,
      snps: [
        {
          genotype: "AA",
          overview:
            "rs699 is a functional change in the Angiotensinogen protein, which is associated with vasoconstriction and blood pressure control",
          rs_id: "rs699",
          title: "AGT - Angiotensinogen",
        },
        {
          genotype: "GC",
          overview:
            "The CFTR gene codes for an ABC transporter-class ion channel protein that conducts chloride ions across epithelial cell membranes. Mutations of the CFTR gene affecting chloride ion channel function lead to dysregulation of epithelial fluid transport in the lung, pancreas and other organs, which in homozygous cases results in cystic fibrosis - however in heterozygous cases, can result in increased fluid and sodium loss in sweat. This snp is one of the best-known genetic mutations in CF, rs113993960 is also called delta508 or delta F508. It results in the loss of a phenylalanine (F) residue at amino acid position 508 of the cystic fibrosis CFTR gene. As first reported in 1989, about 70% of all cystic fibrosis patients carry this mutation",
          rs_id: "rs113993960",
          title: "CTFR - Cystic fibrosis transmembrane conductance regulator",
        },
        {
          genotype: "GC",
          overview:
            "Angiotensin I-converting enzyme is a small enzyme that plays an important role in blood pressure regulation and electrolyte balance. Its activity leads to blood vessel constriction and increased blood pressure. The variation tested is the Insertion (I)/Deletion (D) variation in which a piece of DNA is either present or deleted from the gene. – the I allele is associated with lower ACE activity. This is the most researched gene in relation to sporting performance.",
          rs_id: "rs4341",
          title: "ACE - Angiotensin Converting Enzyme",
        },
      ],
    },
    {
      description: "Description",
      meaning: "Meaning",
      name: "Injury Predisposition",
      order: 1,
      output_text: "Output Text",
      score: 0,
      snps: [
        {
          genotype: "TT",
          overview:
            "Associated with major structural component of the fast twitch fibres of skeletal muscles. Only present in fast twitch muscle fibres.",
          rs_id: "rs1815739",
          title: "ACTN3 - Alpha Actinin 3",
        },
        {
          genotype: "CT",
          overview: "Associated with Alpha-1 chain of type V collagen.",
          rs_id: "rs12722",
          title: "COL5A1 - Collagen, type V, alpha 1",
        },
        {
          genotype: "CA",
          overview:
            "Codes for type I collagen that is incorporated into the spinal discs",
          rs_id: "rs1800012",
          title: "COL1A1 - Collagen, type 1, alpha 1",
        },
      ],
    },
    {
      description: "Description",
      meaning: "Meaning",
      name: "Power Response",
      order: 1,
      output_text: "Output Text",
      score: 0,
      snps: [
        {
          genotype: "CC",
          overview:
            "The TSH response to TRHR is the first step in the hormonal cascade of hypothalamic-pituitary-thyroid axis (HPTA) that eventually leads to the release of thyroxin, which is important in the development of vertebrate skeletal muscle. Mutations in the TRHR gene may decrease affinity of TRHR for TRH and result in central hypothyroidism, which causes impaired expression of myosin heavy chain (MHC) isoforms and diminished muscle cross-sectional areas. Furthermore, thyroxin is necessary for full anabolic action of the growth hormone-insulin-like growth factor-I (GH-IGF1) axis, which plays an important role in muscle protein balance and adaptative changes to load.",
          rs_id: "rs7832552",
          title: "THRH - Thyrotropin-releasing hormone receptor",
        },
        {
          genotype: "AA",
          overview:
            "rs699 is a functional change in the Angiotensinogen protein, which is associated with vasoconstriction and blood pressure control",
          rs_id: "rs699",
          title: "AGT - Angiotensinogen",
        },
        {
          genotype: "GC",
          overview:
            "Angiotensin I-converting enzyme is a small enzyme that plays an important role in blood pressure regulation and electrolyte balance. Its activity leads to blood vessel constriction and increased blood pressure. The variation tested is the Insertion (I)/Deletion (D) variation in which a piece of DNA is either present or deleted from the gene. – the I allele is associated with lower ACE activity. This is the most researched gene in relation to sporting performance.",
          rs_id: "rs4341",
          title: "ACE - Angiotensin Converting Enzyme",
        },
        {
          genotype: "GA",
          overview:
            "Beta(2)-adrenergic receptors are expressed throughout the body and serve as receptors for the natural stimulant hormones called catecholamines epinephrine (adrenaline) and norepinephrine. The polymorphisms tested result in amino acid changes, which affect the activity of the receptor and alter the response to these hormones. Beta- adrenergic receptors are found in fat cells, liver and skeletal muscle where they are involved in fat mobilization, blood glucose levels and in vasodilation.",
          rs_id: "rs1042713",
          title: "ADRB2 - Beta-2-Adrenergenic-Receptor (Arg16Gly)",
        },
        {
          genotype: "TT",
          overview:
            "Associated with major structural component of the fast twitch fibres of skeletal muscles. Only present in fast twitch muscle fibres.",
          rs_id: "rs1815739",
          title: "ACTN3 - Alpha Actinin 3",
        },
        {
          genotype: "CG",
          overview:
            "Polymorphism in the promoter of the IL6 gene alters transcriptional response. There is a genetically determined difference in the degree of the IL-6 response to stressful stimuli between individuals, with the C allele found to be associated with significantly lower levels of plasma IL-6.",
          rs_id: "rs1800795",
          title: "IL6 - Interleukin-6",
        },
        {
          genotype: "CC",
          overview:
            "The NOS3 gene encodes nitric oxide synthase 3, and is also known as eNOS; rs2070744 is a SNP in the promoter region that is associated with higher levels of the corresponding mRNA (and possibly protein).",
          rs_id: "rs2070744",
          title: "NOS3 - Nitric Oxide Synthase 3",
        },
      ],
    },
    {
      description: "Description",
      meaning: "Meaning",
      name: "Motivation To Exercise",
      order: 1,
      output_text: "Output Text",
      score: -1,
      snps: [
        {
          genotype: "AA",
          overview:
            "The GABRG3 gene codes for a GABA receptor that was associated with exercise tolerance in previous studies. It is thought to decrease pain signaling.",
          rs_id: "rs8036270",
          title: "GABRG3 - Gaba Receptor 3",
        },
        {
          genotype: "GA",
          overview:
            "It is a dopamine receptor variant in the ANKK1 gene that affects the dopamine 2 receptor.  This variant is well studied in relation to addiction, weight gain, ADHD, and suicide risk.",
          rs_id: "rs1800497",
          title: "drd2 - dopamine D2 receptor",
        },
      ],
    },
    {
      description: "Description",
      meaning: "Meaning",
      name: "Vitamin A Requirement",
      order: 1,
      output_text: "Output Text",
      score: 0,
      snps: [
        {
          genotype: "CC",
          overview:
            "The Beta Carotene Oxygenase 1 (BCMO1) gene is associated with the synthesis of beta carotene oxygenase 1, an enzyme that converts precursor vitamin A into active retinol. People with certain variants of the gene are associated with nearly 60% reduction in enzyme activity.",
          rs_id: "rs7501331",
          title: "BCM01 - beta-carotene 15,15'-monoxygenase",
        },
      ],
    },
    {
      description: "Description",
      meaning: "Meaning",
      name: "Lower Back Injury Risk",
      order: 1,
      output_text: "Output Text",
      score: 0,
      snps: [
        {
          genotype: "CA",
          overview:
            "Codes for type I collagen that is incorporated into the spinal discs",
          rs_id: "rs1800012",
          title: "COL1A1 - Collagen, type 1, alpha 1",
        },
        {
          genotype: "GG",
          overview:
            "Codes for a type of collagen (type XI) that is incorporated in the extracellular matrix disc",
          rs_id: "rs1676486",
          title: "COL11A1 - Collagen, type 11, alpha 1",
        },
        {
          genotype: "AA",
          overview:
            "Netrin-1 is an axonal guidance molecule, and as such, participates in the development of cortical and spinal commissural neurons. DCC encodes the protein that serves as a receptor for Netrin-1. DCC–Netrin-1 interactions are a well-studied axonal guidance mechanism that affects angiogenesis and are vital during development and adulthood. Compared to healthy human IVDs, expression of both these genes is greater in degraded discs.",
          rs_id: "rs4384683",
          title: "DCC - Deleted in Colorectal Cancer",
        },
        {
          genotype: "CC",
          overview:
            "The SOX genes are a family of transcription factors involved in virtually all phases of embryonic development, and are thought to determine the fate of many cell types. The SOX genes are defined by containing the HMG (‘high mobility group’) box of a gene involved in sex determination called SRY (‘sex determining region’). SOX5 and SOX6 have overlapping functions and work together in close coordination that is necessary for efficient chondrogenesis. Inactivation of SOX5 leads to minor defects in cartilage and skeletogenesis in mice, whereas SOX5/SOX6 double knockouts have severe chondrodysplasia",
          rs_id: "rs12310519",
          title: "SOX5",
        },
        {
          genotype: "TC",
          overview:
            "CCDC26 (CCDC26 Long Non-Coding RNA) is an RNA Gene, and Gasdermin C is a protein encoding gene associated with spinal stenoisis and pyroptosis which is a necrotic form of apoptosis (programmed cell death) - Gasdermin C is a member of a family that form membrane spanning pores that faciliate the release of various inflammatory cytokines",
          rs_id: "rs7833174",
          title: "CCDC26/GSDMC - Coiled-Coil Domain Containing 26, Gasdermin C",
        },
        {
          genotype: "CT",
          overview:
            "This is an autophagy gene that has been indicated in the healthy formation and maintenance of spinal disks, illustrating that autophagy (the breaking down and clearing out of cellular waste) is important in healthy discs",
          rs_id: "rs4645978",
          title: "CASP9 - caspase 9, apoptosis-related cysteine peptidase",
        },
        {
          genotype: "CC",
          overview:
            "Codes for a type of collagen (type XI) that is incorporated in the extracellular matrix disc",
          rs_id: "rs1337185",
          title: "COL11A2 - Collagen, type 11, alpha 2",
        },
        {
          genotype: "GG",
          overview:
            "Codes for type 2 collagen that is incorporated into the spinal discs",
          rs_id: "rs2276454",
          title: "COL2A1 - Collagen, type 2, alpha 1",
        },
        {
          genotype: "GG",
          overview:
            "The CILP gene codes for the cartilage intermediate protein. This protein interacts with TGF-B1 in inducing the extracellular matrix proteins.",
          rs_id: "rs2073711",
          title: "CILP - Cartiliage intermediate protein",
        },
      ],
    },
    {
      description: "Description",
      meaning: "Meaning",
      name: "Vitamin B6 Requirement",
      order: 1,
      output_text: "Output Text",
      score: -1,
      snps: [
        {
          genotype: "CT",
          overview:
            "Encodes for the ALP (alkaline phosphatase) enzyme which, mechanistically, ALP is the major enzyme involved in the clearance of vitamin B6, and therefore the lower vitamin B6 in C allele carriers most likely results from more efficient clearance and catabolism of the vitamin.",
          rs_id: "rs4654748",
          title: "ALPL - Alkaline Phosphatase, Biomineralization Associated",
        },
        {
          genotype: "GA",
          overview:
            "An enzyme in the methyl cycle, Methylene tetrahydrofolate reductase (MTHFR) is involved in folate metabolism. Differing versions of this gene create different enzyme efficiency, which may increase B vitamin needs. Homozygous rs1801133(T;T) individuals have ~30% of the expected MTHFR enzyme activity, and rs1801133(C;T) heterozygotes have ~65% activity, compared to the most common genotype, rs1801133(C;C)",
          rs_id: "rs1801133",
          title: "MTHFR - Methylene Tetrahydrofolate Reductase",
        },
      ],
    },
    {
      description: "Description",
      meaning: "Meaning",
      name: "Caffeine Sensitivity",
      order: 1,
      output_text: "Output Text",
      score: -1,
      snps: [
        {
          genotype: "AA",
          overview:
            "Cytochrome P450 is an enzyme produced by the liver to metabolise caffeine. The enzyme is responsible for about 95% of all caffeine metabolism within the body. People can tolerate caffeine to differing amounts, and this is, in part, down to how quickly they can metabolise caffeine. Polymorphisms in the CYP1A2 gene can have an effect on caffeine metabolism speed.",
          rs_id: "rs762551",
          title:
            "CYP1A2 - cytochrome P450, family 1, subfamily A, polypeptide 2",
        },
      ],
    },
    {
      description: "Description",
      meaning: "Meaning",
      name: "Fat Sensitivity",
      order: 1,
      output_text: "Output Text",
      score: 2,
      snps: [
        {
          genotype: "GA",
          overview:
            "Beta(2)-adrenergic receptors are expressed throughout the body and serve as receptors for the natural stimulant hormones called catecholamines epinephrine (adrenaline) and norepinephrine. The polymorphisms tested result in amino acid changes, which affect the activity of the receptor and alter the response to these hormones. Beta- adrenergic receptors are found in fat cells, liver and skeletal muscle where they are involved in fat mobilization, blood glucose levels and in vasodilation.",
          rs_id: "rs1042713",
          title: "ADRB2 - Beta-2-Adrenergenic-Receptor (Arg16Gly)",
        },
        {
          genotype: "CC",
          overview:
            "This long named protein is a receptor found in the cell nucleus – PPARG is important in the formation and development of adipocytes (fat cells). As a nuclear receptor when certain molecules bind to it (e.g. prostaglandins) it can itself bind directly to DNA and influence the expression of specific genes. In this way it regulates fatty acid storage and glucose metabolism. The SNP tested changes the amino acid at position 12 in the protein from Proline to Alanine, and the Ala version has a reduced affinity for target genes, this means it binds to them less strongly and has a reduced effect on their expression. The Ala form seems to have a protective effect against higher BMI and also reduced insulin sensitivity, but only under certain conditions. By reducing systemic fatty acid availability, thiazolidinedione PPARgamma activators regulate glucose metabolism and are now used clinically in the treatment of Type II diabetes.",
          rs_id: "rs1801282",
          title: "PPARG - Peroxisome Proliferator-Activated Receptor Gamma",
        },
        {
          genotype: "CC",
          overview:
            "Encodes for Perilipin which is a protein localised on lipid droplet surfaces in adipocytes and steroidogenic cells, and plays a central role in lipid storage and breakdown. Several studies have shown that common polymorphisms at the PLIN1 gene are associated with obesity risk and insulin resistance. Specifically, the PLIN1 11482G>A polymorphism was associated with weight-loss resistance in obese patients.",
          rs_id: "rs894160",
          title: "PLIN1 - Perilipin (11482G>A)",
        },
        {
          genotype: "TT",
          overview:
            "FTO is a protein that is associated with fat mass and obesity in both adults and children. Its function has not been completely determined yet. It is an alpha-ketoglutarate-dependent deoxygenase enzyme that repairs alkylated DNA and RNA by oxidative demethylation. Activity appears to be affected by eating and fasting. The enzyme is particularly active in areas of the brain that are associated with eating behaviour",
          rs_id: "rs9939609",
          title: "FTO - Fat Mass & Obesity Associated",
        },
        {
          genotype: "CT",
          overview:
            "TCF7L2 is a transcription factor (a protein which binds to DNA and affects the expression of genes and the amount of various proteins produced) – it affects a variety of genes. It has not been fully characterised but the protein has been implicated in blood glucose homeostasis and the SNP tested affects insulin sensitivity. The polymorphism has also been shown to affect weight loss according to diet type with the TT homozygotes responding poorly to high fat/low carb diets.",
          rs_id: "rs7903146",
          title: "TCF7L2 - Transcription factor 7-like 2",
        },
        {
          genotype: "GA",
          overview:
            "This gene encodes apolipoprotein (apo-) A-II, which is the second most abundant protein of the high density lipoprotein particles. Defects in this gene may result in apolipoprotein A-II deficiency or hypercholesterolemia. May stabilize HDL (high density lipoprotein) structure by its association with lipids, and affect the HDL metabolism",
          rs_id: "rs5082",
          title: "APOA2 - apolipoprotein A-II",
        },
        {
          genotype: "AA",
          overview:
            "Beta (3)-adrenergic receptors are located mainly in adipose tissue and they play a key role in energy metabolism being involved in the regulation of lipolysis (fat breakdown) and thermogenesis (process of heat generation using fat for energy). The polymorphism tested results in an amino acid change from tryptophan (Trp) to Arginine (Arg) and the Arg version is associated with lower fat breakdown activity. Some studies have shown that the Arg allele is associated with a high BMI and that Arg allele carriers have more difficulty losing weight under standard weight loss diet & exercise protocols. The Arg allele has also been shown in studies to be linked to more rapid weight gain following dieting.",
          rs_id: "rs4994",
          title: "ARDB3 - Adrenoceptor Beta 3",
        },
      ],
    },
    {
      description: "Description",
      meaning: "Meaning",
      name: "Recovery Efficiency",
      order: 1,
      output_text: "Output Text",
      score: -2,
      snps: [
        {
          genotype: "AG",
          overview:
            "Superoxide dismutase is an enzyme that protects cells from increased oxidative stress and free radical damage to cell structures like membranes, mitochondria, DNA and proteins. SOD2 rs4880 is sensitive to inadequate antioxidant intake including environmental exposures that relate to ROS production such as smoking and environmental toxins.",
          rs_id: "rs4880",
          title: "SOD2 - Superoxide dismutase",
        },
        {
          genotype: "TC",
          overview:
            "Proteins of the matrix metalloproteinase (MMP) family are involved in the breakdown of extracellular matrix proteins and during tissue remodeling in normal physiological processes, such as embryonic development and reproduction, as well as in disease processes, such as arthritis, and tumour metastasis. Changes in the structure of this enzyme can result in poor muscluar rebuilding and hence recovery",
          rs_id: "rs679620",
          title: "MMP3 - Matrix metalloproteinase-3",
        },
        {
          genotype: "TT",
          overview:
            "Associated with major structural component of the fast twitch fibres of skeletal muscles. Only present in fast twitch muscle fibres.",
          rs_id: "rs1815739",
          title: "ACTN3 - Alpha Actinin 3",
        },
        {
          genotype: "TT",
          overview:
            "Muscle RING finger-1 (MuRF-1) is known to be associated with cardiomyopathy and muscle atrophy (5), and it plays a crucial role in the ubiquitin proteasome system by attaching ubiquitin polymers to damaged myofibrillar proteins following EIMD, thus enabling the 26S-proteasome complex to degrade these ubiquitin-marked proteins. Mutations of this may decrease MuRF-1’s affinity for the titin strain-sensing kinase domain, thus reducing muscle fiber stiffness and increasing its susceptibility to exercise induced muscle damage",
          rs_id: "rs2275950",
          title: "TRIM63 (MuRF-1) - Muscle RING finger-1",
        },
        {
          genotype: "GG",
          overview:
            "The AMPD1 gene encodes the enzyme adenosine monophosphate deaminase, which is one of the key enzymes used to process the energy source ATP. The C34T variation causes a premature stop in the protein, leading to a nonfunctional AMPD1 enzyme. Some individuals - but by no means all or even a majority apparently - who are AMPD1 deficient get muscle cramps and pains when they exert themselves. The most common genotype bringing this about is rs17602729(A;A), i.e. the individuals who carry two copies of the C34T allele and therefore have no functioning AMPD1 allele.",
          rs_id: "rs17602729",
          title: "AMDP1 - adenosylmethionine decarboxylase pseudogene 1",
        },
        {
          genotype: "CC",
          overview:
            "CKM gene is a muscle-specific form of CK, which catalyses the conversion of phospho-creatine (PCr) and ADP into creatine and ATP, as well as the reverse reaction. It is also an important gene because of its role in energy homeostasis in muscle cells. A genetic predisposition for low CKM activity could be an advantage for endurance performance",
          rs_id: "rs8111989",
          title: "CKM - Muscle-specific creatine kinase",
        },
        {
          genotype: "CG",
          overview:
            "Polymorphism in the promoter of the IL6 gene alters transcriptional response. There is a genetically determined difference in the degree of the IL-6 response to stressful stimuli between individuals, with the C allele found to be associated with significantly lower levels of plasma IL-6.",
          rs_id: "rs1800795",
          title: "IL6 - Interleukin-6",
        },
        {
          genotype: "GG",
          overview:
            "Myosin light chain kinase (MLCK) phosphorylates the regulatory light chain (RLC) of myosin producing increases in force development during skeletal muscle contraction. It has been suggested that MLCK gene polymorphisms might alter RLC phosphorylation thereby decreasing the ability to produce force and to resist strain during voluntary muscle contractions. Thus, the genetic variations in the MLCK gene might predispose some individuals to higher values of muscle damage during exercise, especially during endurance competitions",
          rs_id: "rs28497577",
          title: "MLCK - Myosin Light Chain Kinase",
        },
      ],
    },
    {
      description: "Description",
      meaning: "Meaning",
      name: "Omega 3 Requirement",
      order: 1,
      output_text: "Output Text",
      score: -1,
      snps: [
        {
          genotype: "GG",
          overview:
            "Tumor necrosis factor is a cytokine that can increase cytokine response. Higher cytokine levels can lead to inflammation. Different genotypes have been shown to have higher or lower levels of IL-6, both at rest and post exercise. Omega-3s can potentially reduce the cytokine response, and therefore limit inflammation.",
          rs_id: "rs1800629",
          title: "TNF - Tumor Necrosis Factor",
        },
        {
          genotype: "CG",
          overview:
            "Polymorphism in the promoter of the IL6 gene alters transcriptional response. There is a genetically determined difference in the degree of the IL-6 response to stressful stimuli between individuals, with the C allele found to be associated with significantly lower levels of plasma IL-6.",
          rs_id: "rs1800795",
          title: "IL6 - Interleukin-6",
        },
      ],
    },
    {
      description: "Description",
      meaning: "Meaning",
      name: "Folate Requirement",
      order: 1,
      output_text: "Output Text",
      score: 0,
      snps: [
        {
          genotype: "TG",
          overview:
            "The MTHFR gene provides instructions for making an enzyme called methylenetetrahydrofolate reductase. This enzyme plays a role in processing amino acids, the building blocks of proteins",
          rs_id: "rs1801131",
          title: "MTHFR - Methylene Tetrahydrofolate Reductase",
        },
        {
          genotype: "GA",
          overview:
            "An enzyme in the methyl cycle, Methylene tetrahydrofolate reductase (MTHFR) is involved in folate metabolism. Differing versions of this gene create different enzyme efficiency, which may increase B vitamin needs. Homozygous rs1801133(T;T) individuals have ~30% of the expected MTHFR enzyme activity, and rs1801133(C;T) heterozygotes have ~65% activity, compared to the most common genotype, rs1801133(C;C)",
          rs_id: "rs1801133",
          title: "MTHFR - Methylene Tetrahydrofolate Reductase",
        },
      ],
    },
    {
      description: "Description",
      meaning: "Meaning",
      name: "Antioxidant Requirement",
      order: 1,
      output_text: "Output Text",
      score: -2,
      snps: [
        {
          genotype: "GA",
          overview:
            "Angiotensin I-converting enzyme is a small enzyme that plays an important role in blood pressure regulation and electrolyte balance. Its activity leads to blood vessel constriction and increased blood pressure. The variation tested is the Insertion (I)/Deletion (D) variation in which a piece of DNA is either present or deleted from the gene. – the I allele is associated with lower ACE activity. This is the most researched gene in relation to sporting performance.",
          rs_id: "rs4343",
          title: "ACE - Angiotensin Converting Enzyme",
        },
        {
          genotype: "TT",
          overview:
            "Associated with major structural component of the fast twitch fibres of skeletal muscles. Only present in fast twitch muscle fibres.",
          rs_id: "rs1815739",
          title: "ACTN3 - Alpha Actinin 3",
        },
        {
          genotype: "CC",
          overview:
            "L-ascorbic acid is obtained from the diet and is transported across the cell membrane, including intestinal cells, through both facilitated and active modes of transport. The active transport is achieved by sodium L-ascorbic acid (“vitamin C”) co-transporters (SVCTs) which transport ascorbate into the cell.  SVCT1 has been implicated in the absorption of dietary L-ascorbic acid across the intestinal barrier, but this work has highlighted the role of SVCT1 in kidney based reabsorption(24-26). As a result, SVCT1 is primarily involved in whole body homeostasis and transport of L-ascorbic acid and SVCT2 is primarily involved in the regulation of L-ascorbic acid in specific metabolically active tissues",
          rs_id: "rs33972313",
          title: "SLC23A1 - Sodium-Dependent Vitamin C Transporter 1 (SVCT1)",
        },
      ],
    },
    {
      description: "Description",
      meaning: "Meaning",
      name: "Achilles Injury Risk",
      order: 1,
      output_text: "Output Text",
      score: 0,
      snps: [
        {
          genotype: "CT",
          overview: "Associated with Alpha-1 chain of type V collagen.",
          rs_id: "rs12722",
          title: "COL5A1 - Collagen, type V, alpha 1",
        },
        {
          genotype: "TC",
          overview:
            "Proteins of the matrix metalloproteinase (MMP) family are involved in the breakdown of extracellular matrix proteins and during tissue remodeling in normal physiological processes, such as embryonic development and reproduction, as well as in disease processes, such as arthritis, and tumour metastasis. Changes in the structure of this enzyme can result in poor muscluar rebuilding and hence recovery",
          rs_id: "rs679620",
          title: "MMP3 - Matrix metalloproteinase-3",
        },
      ],
    },
    {
      description: "Description",
      meaning: "Meaning",
      name: "Riboflavin",
      order: 1,
      output_text: "Output Text",
      score: 0,
      snps: [
        {
          genotype: "GA",
          overview:
            "An enzyme in the methyl cycle, Methylene tetrahydrofolate reductase (MTHFR) is involved in folate metabolism. Differing versions of this gene create different enzyme efficiency, which may increase B vitamin needs. Homozygous rs1801133(T;T) individuals have ~30% of the expected MTHFR enzyme activity, and rs1801133(C;T) heterozygotes have ~65% activity, compared to the most common genotype, rs1801133(C;C)",
          rs_id: "rs1801133",
          title: "MTHFR - Methylene Tetrahydrofolate Reductase",
        },
      ],
    },
    {
      description: "Description",
      meaning: "Meaning",
      name: "Vitamin D Requirement",
      order: 1,
      output_text: "Output Text",
      score: -1,
      snps: [
        {
          genotype: "CC",
          overview:
            "BsmI polymorphism, is a SNP in the Vitamin D receptor (VDR). Multiple studies examining bone mineral density (BMD) in women have associated the A allele with increased risk of low BMD",
          rs_id: "rs1544410",
          title: "VDR - Vitamin D Receptor",
        },
        {
          genotype: "AC",
          overview:
            "The vitamin D binding protein (DBP) gene (GC) rs7041 is a single?nucleotide polymorphism that encodes an aspartate to glutamate amino acid change that alters the affinity of DBP for serum vitamin D. This protein is implicated in the transportation of various vitamin d metabolites - this SNP alters the affinity of DBP for serum vitamin D",
          rs_id: "rs7041",
          title: "DBP (GC) Gene - Vitamin D Binding Protein",
        },
        {
          genotype: "TT",
          overview:
            "Located in the group-specific component (vitamin D binding protein) GC gene on chromosome 4p12, has been linked by several studies to vitamin D serum concentrations",
          rs_id: "rs2282679",
          title: "dbp (GC) Gene - Vitamin D Binding Protein",
        },
        {
          genotype: "AA",
          overview:
            "VDR gene polymorphisms influence the binding of 1,25(OH)2 D to the VDR, that affect the VDR-mediated signaling pathways of vitamin D (Bai, 2012), including the regulatory effect of vitamin D on cell cycle, proliferation, apoptosis, invasion and angiogenesis",
          rs_id: "rs731236",
          title: "VDR (Taq1) - Vitamin D Receptor",
        },
        {
          genotype: "GT",
          overview:
            "The NADSYN1 gene encodes nicotinamide adenine dinucleotide synthetase 1 (NADSYN1), which is one of the glutamine-dependent enzymes involved in cholesterol synthesis and favors the production of nicotinamide adenine dinucleotide (NAD+), the main coenzyme required for energy production and lipid synthesis. A recent GWA study revealed that variants near genes involved in cholesterol synthesis influence the vitamin D status. The rs12785878 GG genotype was associated with an increased risk of vitamin D insufficiency and of dyslipidemia",
          rs_id: "rs12785878",
          title: "NADSYN1 - NAD Synthase 1",
        },
        {
          genotype: "AG",
          overview:
            "CYP2R1 is the gene that codes for the enzyme that acts in the first step, converting cholecalciferol into 25(OH)D in the liver. Genetic variants here play a role in overall 25(OH)D levels, which is the common form of serum vitamin D measured in blood tests.",
          rs_id: "rs2060793",
          title: "CYP2R1",
        },
      ],
    },
    {
      description: "Description",
      meaning: "Meaning",
      name: "Aerobic (V02) Trainability",
      order: 1,
      output_text: "Output Text",
      score: -1,
      snps: [
        {
          genotype: "GA",
          overview:
            "Beta(2)-adrenergic receptors are expressed throughout the body and serve as receptors for the natural stimulant hormones called catecholamines epinephrine (adrenaline) and norepinephrine. The polymorphisms tested result in amino acid changes, which affect the activity of the receptor and alter the response to these hormones. Beta- adrenergic receptors are found in fat cells, liver and skeletal muscle where they are involved in fat mobilization, blood glucose levels and in vasodilation.",
          rs_id: "rs1042713",
          title: "ADRB2 - Beta-2-Adrenergenic-Receptor (Arg16Gly)",
        },
        {
          genotype: "GC",
          overview:
            "Beta(2)-adrenergic receptors are expressed throughout the body and serve as receptors for the natural stimulant hormones called catecholamines epinephrine (adrenaline) and norepinephrine. The polymorphisms tested result in amino acid changes, which affect the activity of the receptor and alter the response to these hormones. Beta- adrenergic receptors are found in fat cells, liver and skeletal muscle where they are involved in fat mobilization, blood glucose levels and in vasodilation.",
          rs_id: "rs1042714",
          title: "ADRB2 - Adrenoceptor Beta 2 (Gln16Gly)",
        },
        {
          genotype: "CT",
          overview:
            "Associated with the regulation of energy homeostasis, including production of mitochondria, fat and carbohydrate burning and conversion of muscle fibres to slow twitch type.",
          rs_id: "rs8192678",
          title:
            "PPARGC1A - Peroxisome Proliferator-Activated Receptor Gamma Coactivator-1",
        },
        {
          genotype: "GG",
          overview:
            "The AMPD1 gene encodes the enzyme adenosine monophosphate deaminase, which is one of the key enzymes used to process the energy source ATP. The C34T variation causes a premature stop in the protein, leading to a nonfunctional AMPD1 enzyme. Some individuals - but by no means all or even a majority apparently - who are AMPD1 deficient get muscle cramps and pains when they exert themselves. The most common genotype bringing this about is rs17602729(A;A), i.e. the individuals who carry two copies of the C34T allele and therefore have no functioning AMPD1 allele.",
          rs_id: "rs17602729",
          title: "AMDP1 - adenosylmethionine decarboxylase pseudogene 1",
        },
        {
          genotype: "CG",
          overview:
            "Associated with new blood vessel growth to support exercise activities. Regular exercise and progressive training programmes can create a 4-fold increase in levels of VEGF.",
          rs_id: "rs2010963",
          title: "VEGFA -  vascular endothelial growth factor A",
        },
      ],
    },
    {
      description: "Description",
      meaning: "Meaning",
      name: "Lactose Tolerance",
      order: 1,
      output_text: "Output Text",
      score: 0,
      snps: [
        {
          genotype: "AA",
          overview:
            "A specific DNA sequence within the MCM6 gene called a regulatory element helps control the activity (expression) of a nearby gene called LCT. The LCT gene provides instructions for making an enzyme called lactase. This enzyme helps to digest lactose, a sugar found in milk and other dairy products. Lactose intolerance in adulthood is caused by gradually decreasing expression of the LCT gene after infancy, which occurs in most humans.",
          rs_id: "rs4988235",
          title: "MCM6 - minichromosome maintenance complex component 6",
        },
      ],
    },
    {
      description: "Description",
      meaning: "Meaning",
      name: "Iron Requirement",
      order: 1,
      output_text: "Output Text",
      score: 0,
      snps: [
        {
          genotype: "AA",
          overview:
            "The protein encoded by this gene is a type II transmembrane serine proteinase that is found attached to the cell surface that regulates the expression of the systemic iron regulatory hormone hepcidin.",
          rs_id: "rs855791",
          title: "TMPRSS6 - Transmembrane Serine Protease 6 (matriptase-2)",
        },
        {
          genotype: "GG",
          overview:
            "This SNP accounts for ~85% of all cases of hemochromatosis, an iron storage disorder where excess iron is not effectively removed from the blood. In serious cases, this excess iron will cause iron overload and if untreated can lead to cirrhosis of the liver, diabetes, hypermelanotic pigmentation of the skin, heart disease, liver cancer, depression, fatigue and other problems.",
          rs_id: "rs1800562",
          title: "C282Y",
        },
        {
          genotype: "CC",
          overview:
            "The HFE gene regulates the liver protein hepcidin, which is considered to be the principal iron-regulatory hormone. Levels of hepcidin increase when iron levels increase in the blood, preventing intestinal cells and macrophages from releasing iron into the bloodstream. When iron builds up in the cells, signals are produced to reduce the iron absorption from food. Hepcidin levels decrease when the body needs more iron. Mutations in the HFE gene such as C282Y and H63D decrease hepcidin levels, causing intestinal cells to think more iron is needed. Thus, more iron is absorbed.",
          rs_id: "rs1799945",
          title: "HFE - Human Hemochromatosis Protein",
        },
      ],
    },
    {
      description: "Description",
      meaning: "Meaning",
      name: "Exercise Tolerance",
      order: 1,
      output_text: "Output Text",
      score: -1,
      snps: [
        {
          genotype: "GG",
          overview:
            "The LEPR gene codes for the leptin receptor.  Leptin is a hormone that signals for satiety and for energy homeostasis.",
          rs_id: "rs12405556",
          title: "LEPR - Leptin Receptor",
        },
        {
          genotype: "TC",
          overview:
            "Codes a cannabinoid receptor variant that has also been associated in other studies with exercise tolerance.  The cannabinoid receptors are involved in pain tolerance.",
          rs_id: "rs6454672",
          title: "CNR1 - Cannabinoid Receptor 1",
        },
      ],
    },
    {
      description: "Description",
      meaning: "Meaning",
      name: "Aerobic (VO2) Trainability & recovery",
      order: 1,
      output_text: "Output Text",
      score: 0,
      snps: [
        {
          genotype: "TT",
          overview:
            "Associated with an acute phase protein which rises in response to inflammation in the body. High CRP is associated with low VO2MAX. Diet and physical activity can reduce CRP levels (although intense exercise can cause short term local increases in CRP). It is stimulated by IL-6 and is often used as a marker for inflammation in blood tests.",
          rs_id: "rs1417938",
          title: "CRP - C-Reactive Protein",
        },
      ],
    },
    {
      description: "Description",
      meaning: "Meaning",
      name: "ACL Injury Risk",
      order: 1,
      output_text: "Output Text",
      score: 1,
      snps: [
        {
          genotype: "CG",
          overview:
            "Associated with new blood vessel growth to support exercise activities. Regular exercise and progressive training programmes can create a 4-fold increase in levels of VEGF.",
          rs_id: "rs2010963",
          title: "VEGFA -  vascular endothelial growth factor A",
        },
        {
          genotype: "AG",
          overview:
            "The protein regulates VEGF-induced endothelial proliferation, survival, migration, tubular morphogenesis, and sprouting.",
          rs_id: "rs2071559",
          title: "Kinase insert domain receptor",
        },
        {
          genotype: "CA",
          overview:
            "Codes for type I collagen that is incorporated into the spinal discs",
          rs_id: "rs1800012",
          title: "COL1A1 - Collagen, type 1, alpha 1",
        },
        {
          genotype: "TT",
          overview:
            "COL21A1 is a gene that encodes for connective tissue components (collagen) of the musculoskeletal system that may modulate susceptibility to exercise-associated muscle cramping (EAMC) and injury risk. Is also associated with vasodilation, blood pressure control, efficiency of muscular contraction and cell hydration.",
          rs_id: "rs970547",
          title: "COL12A1 - Collagen 1 2 Alpha 1",
        },
      ],
    },
    {
      description: "Description",
      meaning: "Meaning",
      name: "Antioxidant Requirement",
      order: 1,
      output_text: "Output Text",
      score: -1,
      snps: [
        {
          genotype: "AG",
          overview:
            "Superoxide dismutase is an enzyme that protects cells from increased oxidative stress and free radical damage to cell structures like membranes, mitochondria, DNA and proteins. SOD2 rs4880 is sensitive to inadequate antioxidant intake including environmental exposures that relate to ROS production such as smoking and environmental toxins.",
          rs_id: "rs4880",
          title: "SOD2 - Superoxide dismutase",
        },
        {
          genotype: "TT",
          overview:
            "Associated with major structural component of the fast twitch fibres of skeletal muscles. Only present in fast twitch muscle fibres.",
          rs_id: "rs1815739",
          title: "ACTN3 - Alpha Actinin 3",
        },
        {
          genotype: "CC",
          overview:
            "L-ascorbic acid is obtained from the diet and is transported across the cell membrane, including intestinal cells, through both facilitated and active modes of transport. The active transport is achieved by sodium L-ascorbic acid (“vitamin C”) co-transporters (SVCTs) which transport ascorbate into the cell.  SVCT1 has been implicated in the absorption of dietary L-ascorbic acid across the intestinal barrier, but this work has highlighted the role of SVCT1 in kidney based reabsorption(24-26). As a result, SVCT1 is primarily involved in whole body homeostasis and transport of L-ascorbic acid and SVCT2 is primarily involved in the regulation of L-ascorbic acid in specific metabolically active tissues",
          rs_id: "rs33972313",
          title: "SLC23A1 - Sodium-Dependent Vitamin C Transporter 1 (SVCT1)",
        },
      ],
    },
    {
      description: "Description",
      meaning: "Meaning",
      name: "Calcium Requirement",
      order: 1,
      output_text: "Output Text",
      score: 0,
      snps: [
        {
          genotype: "CC",
          overview:
            "BsmI polymorphism, is a SNP in the Vitamin D receptor (VDR). Multiple studies examining bone mineral density (BMD) in women have associated the A allele with increased risk of low BMD",
          rs_id: "rs1544410",
          title: "VDR - Vitamin D Receptor",
        },
        {
          genotype: "TT",
          overview:
            "Associated with major structural component of the fast twitch fibres of skeletal muscles. Only present in fast twitch muscle fibres.",
          rs_id: "rs1815739",
          title: "ACTN3 - Alpha Actinin 3",
        },
      ],
    },
    {
      description: "Description",
      meaning: "Meaning",
      name: "Vitamin C Requirement",
      order: 1,
      output_text: "Output Text",
      score: 0,
      snps: [
        {
          genotype: "TT",
          overview:
            "The absorption of vitamin C into the body and its distribution to organs requires two sodium-dependent vitamin C transporters. This gene encodes one of the two required transporters and the encoded protein accounts for tissue-specific uptake of vitamin C.",
          rs_id: "rs1279386",
          title: "SLC23A2 - Sodium-Dependent Vitamin C Transporter 2 (SVCT2)",
        },
        {
          genotype: "CC",
          overview:
            "L-ascorbic acid is obtained from the diet and is transported across the cell membrane, including intestinal cells, through both facilitated and active modes of transport. The active transport is achieved by sodium L-ascorbic acid (“vitamin C”) co-transporters (SVCTs) which transport ascorbate into the cell.  SVCT1 has been implicated in the absorption of dietary L-ascorbic acid across the intestinal barrier, but this work has highlighted the role of SVCT1 in kidney based reabsorption(24-26). As a result, SVCT1 is primarily involved in whole body homeostasis and transport of L-ascorbic acid and SVCT2 is primarily involved in the regulation of L-ascorbic acid in specific metabolically active tissues",
          rs_id: "rs33972313",
          title: "SLC23A1 - Sodium-Dependent Vitamin C Transporter 1 (SVCT1)",
        },
      ],
    },
    {
      description: "Description",
      meaning: "Meaning",
      name: "Vitamin E Requirement",
      order: 1,
      output_text: "Output Text",
      score: 0,
      snps: [
        {
          genotype: "TT",
          overview:
            "The enzyme CYP4F2 is involved in the metabolism of various endogenous substrates, including fatty acids, eicosanoids and vitamins. It controls the bioavailability of Vitamin E.",
          rs_id: "rs2108622",
          title: "CYP4F2",
        },
        {
          genotype: "CC",
          overview:
            "Vitamin E (?-tocopherol) plays a key role in the regulation of cell growth and differentiation - this SNP is a polymorphism near the location of 3 distinct genes",
          rs_id: "rs964184",
          title:
            "BUD13/ZNF259/APOA5 - budding-site selection protein 13 (yeast) (BUD13), zinc finger protein 259 (ZNF259), and apolipoprotein A5 (APOA5)",
        },
      ],
    },
    {
      description: "Description",
      meaning: "Meaning",
      name: "Carbohydrate Sensitivity",
      order: 1,
      output_text: "Output Text",
      score: 3,
      snps: [
        {
          genotype: "GC",
          overview:
            "Angiotensin I-converting enzyme is a small enzyme that plays an important role in blood pressure regulation and electrolyte balance. Its activity leads to blood vessel constriction and increased blood pressure. The variation tested is the Insertion (I)/Deletion (D) variation in which a piece of DNA is either present or deleted from the gene. – the I allele is associated with lower ACE activity. This is the most researched gene in relation to sporting performance.",
          rs_id: "rs4341",
          title: "ACE - Angiotensin Converting Enzyme",
        },
        {
          genotype: "GC",
          overview:
            "Beta(2)-adrenergic receptors are expressed throughout the body and serve as receptors for the natural stimulant hormones called catecholamines epinephrine (adrenaline) and norepinephrine. The polymorphisms tested result in amino acid changes, which affect the activity of the receptor and alter the response to these hormones. Beta- adrenergic receptors are found in fat cells, liver and skeletal muscle where they are involved in fat mobilization, blood glucose levels and in vasodilation.",
          rs_id: "rs1042714",
          title: "ADRB2 - Adrenoceptor Beta 2 (Gln16Gly)",
        },
        {
          genotype: "CT",
          overview:
            "TCF7L2 is a transcription factor (a protein which binds to DNA and affects the expression of genes and the amount of various proteins produced) – it affects a variety of genes. It has not been fully characterised but the protein has been implicated in blood glucose homeostasis and the SNP tested affects insulin sensitivity. The polymorphism has also been shown to affect weight loss according to diet type with the TT homozygotes responding poorly to high fat/low carb diets.",
          rs_id: "rs7903146",
          title: "TCF7L2 - Transcription factor 7-like 2",
        },
        {
          genotype: "CC",
          overview:
            "Encodes insulin receptor substrate 1 (IRS1), a protein central to insulin signaling pathways. Insulin signaling is initiated by insulin binding to its receptor to activate tyrosine kinase. This enzyme phosphorylates select tyrosine residues of the IRS1 protein to activate the downstream phosphatidylinositol 3-kinase (PI3K) pathway, leading to glucose uptake and glycogen synthesis.",
          rs_id: "rs2943641",
          title: "ISR1 - Insulin receptor substrate 1",
        },
        {
          genotype: "CC",
          overview:
            "This long named protein is a receptor found in the cell nucleus – PPARG is important in the formation and development of adipocytes (fat cells). As a nuclear receptor when certain molecules bind to it (e.g. prostaglandins) it can itself bind directly to DNA and influence the expression of specific genes. In this way it regulates fatty acid storage and glucose metabolism. The SNP tested changes the amino acid at position 12 in the protein from Proline to Alanine, and the Ala version has a reduced affinity for target genes, this means it binds to them less strongly and has a reduced effect on their expression. The Ala form seems to have a protective effect against higher BMI and also reduced insulin sensitivity, but only under certain conditions. By reducing systemic fatty acid availability, thiazolidinedione PPARgamma activators regulate glucose metabolism and are now used clinically in the treatment of Type II diabetes.",
          rs_id: "rs1801282",
          title: "PPARG - Peroxisome Proliferator-Activated Receptor Gamma",
        },
      ],
    },
  ],
];
