const quizContainer = document.getElementById("quiz-container");
const submitButton = document.getElementById("submit-button");
const rationaleDiv = document.getElementById("rationale");
const timerDiv = document.getElementById("timer");

        const questions = [
            {
                question: "Which risk adjustment model is used by Medicare programs?",
                options: ["HCC", "CDPS", "ZIPC", "PQRS"],
                correctAnswerIndex: 0,
                rationale: "You have to lead the code."
            },
            {
                question: "SCHIP stands for:",
                options: ["State Children’s Health Information Program", "State Children’s Health Insurance Program", "State Child Health Information Program", "State Children’s Health Information Processing"],
                correctAnswerIndex: 1,
                rationale: "You need to read the materials"
            },
			{
                question: "What does the abbreviation RAPS indicate?",
                options: ["Risk Adjustment Provider Service ", "Risk Adjustment Processing System ", "Risk Auditing Process System ", "Risk Auditing Provider System"],
                correctAnswerIndex: 1,
                rationale: "You need to read the materials"
            },
			{
                question: "What does the abbreviation RAPS indicate?",
				questionImage: "F:\assessment link\4th question.jpg",
                options: ["When a patient is diagnosed with hepatorenal syndrome and biliary cirrhosis, HCC28 is used", "When a patient is diagnosed with chronic hepatitis and hepatopulmonary syndrome, HCC27 is used", "When a patient is diagnosed with alcohol liver damage and biliary cirrhosis, HCC29 is used", "When a patient is diagnosed with autoimmune hepatitis and cirrhosis of the liver, HCC29 is used"],
                correctAnswerIndex: 1,
                rationale: "You need to read the materials"
            },
            {
				question: "Which of the following records would be a good source for a retrospective chart audit?",
				options: ["A. DME documentation", "B. Cardiologist records", "C. Dietician notes", "D. RN notes"],
				correctAnswerIndex: 0,
				rationale: "You need to read the materials"
			},
			{
				question: "Which statement(s) is/are TRUE regarding retrospective audits? I. Can be performed by internal employees II. Can be performed by external consultants who sign a business agreement III. Performed prior to data being submitted IV. Performed after data was submitted.",
				options: ["A. I and III", "B. I and IV", "C. I, II, and IV", "D. III and IV"],
				correctAnswerIndex: 1,
				rationale: "You need to read the materials"
			},
			{
				question: "The star ratings program monitors:",
				options: ["A. Adherence to state scope of practice", "B. Performance of Medicare providers", "C. Performance of Medicare Advantage plans", "D. Fraud and abuse"],
				correctAnswerIndex: 2,
				rationale: "You need to read the materials"
			},
			{
				question: "Which of the following statement is true about Stark Law?",
				options: ["A. A mechanism in the law that allows citizens with evidence of fraud against government programs to sue, on behalf of the government, in order to recover the stolen funds.",
					"B. Unlawful to give or receive anything of value to another in exchange for a referral or inducement to provide health care services to Medicare or Medicaid.",
					"C. Prohibits physicians from referring Medicare patients for designated health care services to entities with which they have direct or indirect financial relationship.",
					"D. Prohibits knowingly filing a false or fraudulent claim for payment to the government."],
				correctAnswerIndex: 2,
				rationale: "You need to read the materials"
			},
			{
				question: "If you were using a predictive model and the results were. • The member had a DME claim for oxygen. • The member had an Rx Claim for a bronchodilator. • The member had a medical claim which included a PFT. Which diagnosis would you predict this member has?",
				options: ["A. Hypertension", "B. COPD", "C. CHF", "D. Diabetes"],
				correctAnswerIndex: 1,
				rationale: "You need to read the materials"
			},
			{
				question: "What is predictive modeling?",
				options: ["A. Analysis of data to determine a hypothesis related to the future health care needs of patients",
					"B. Cost comparison of health care costs generated locally versus nationally",
					"C. Comparison of money saved with risk adjustment models compared to fee-for-service models",
					"D. Chronic disease management education to prevent high health care costs"],
				correctAnswerIndex: 0,
				rationale: "You need to read the materials"
			},
			{
				question: "Which risk adjustment model incorporates high, medium, and low risk in the numeric value?",
				options: ["A. HCC", "B. CDPS", "C. ACA-HHS", "D. Medicare Advantage"],
				correctAnswerIndex: 0,
				rationale: "You need to read the materials"
			},
			{
				question: "In a medical record review, the doctor has documentation in a single encounter of an eye exam, BUN test, and HbA1c testing. Which are of HEDIS measures are most likely satisfied in this encounter?",
				options: ["A. Antidepressant Medication Management", "B. Controlling high blood pressure", "C. Diabetic Care", "D. Asthma care"],
				correctAnswerIndex: 2,
				rationale: "You need to read the materials"
			},
			{
				question: "What is the highest Star Rating that can be achieved?",
				options: ["A. 15", "B. 5", "C. 10", "D. 4"],
				correctAnswerIndex: 1,
				rationale: "You need to read the materials"
			},
			{
				question: "Which data element is not used for predictive modeling? I.DME II.PDE III.Labs IV.HCPCS",
				options: ["A. I & II", "B. I, II & III", "C. I & III", "D. None of the above"],
				correctAnswerIndex: 0,
				rationale: "You need to read the materials"
			},
			{
				question: "Which MIPS category replaces the Value – Based Modifier?",
				options: ["A. Advancing Care information", "B. Cost", "C. Quality", "D. Improvement Activities"],
				correctAnswerIndex: 0,
				rationale: "You need to read the materials"
			},
			{
				question: "PPO means:",
				options: ["A. Preferred Provider Organization", "B. Provider Preferred Organization", "C. Physician Payment Organization", "D. Provider Payment Organization"],
				correctAnswerIndex: 0,
				rationale: "You need to read the materials"
			},
			{
				question: "Which of the below listing encloses approved providers of CMS",
				options: ["A. Registered Pharmacist (RPH), Certified Nursing Assistant (CAN)", "B. Emergency Room Medical Technician (EMT), Licensed Vocational Nurse (LVN)", "C. Licensed Practical Nurse (LPN), Optical Surgical Assistant (OSA)", "D. Certified Nurse Midwife (CNM), LCSW(Licensed Clinical Social Worker), CRNA(Certified Registered Nurse Anesthetist)"],
				correctAnswerIndex: 3,
				rationale: "You need to read the materials"
			},
			{
				question: "Which Medicare Part is reimbursed based on the risk adjustment models?",
				options: ["A. Part A", "B. Part B", "C. Part C", "D. Part D"],
				correctAnswerIndex: 2,
				rationale: "You need to read the materials"
			},
			{
				question: "Which statement is TRUE regarding risk adjustment models?",
				options: ["A. Additional reimbursement is allotted for acute care", "B. Risk scores are used to adjust payments for each beneficiary’s expected expenditures", "C. Risk scores are used to monitor health care outcomes and response to treatment for each patient", "D. Determination of payment is made based on the first assessment of the patient during a calendar year"],
				correctAnswerIndex: 1,
				rationale: "You need to read the materials"
			},
			{
				question: "Which of the following is an example of fraud?",
				options: ["A. Submitting a record for a RADV audit which includes diagnoses that were not previously reported", "B. Training physicians to document causal relationships for manifestations for chronic illnesses when present.", "C. Reporting a diabetic manifestation to increase the risk score.", "D. Misrepresenting procedures performed to obtain payment for non covered services"],
				correctAnswerIndex: 0,
				rationale: "You need to read the materials"
			},
			{
				question: "Which of the following regarding HEDIS is not true?",
				options: ["A. It is a division of the Centres for Medicare and Medicaid Services", "B. Its developer and sponsor is the National Committee for Quality Assurance (NCQA), a not for profit, nongovernment organization", "C. It is a set of standardized performance measures designed to assess the quality of health care and services provided by managed care plans", "D. It is the acronym for Healthcare Effectiveness Data and Information Set"],
				correctAnswerIndex: 0,
				rationale: "You need to read the materials"
			},
			{
				question: "Who operates risk adjustment program on behalf of any state not operating risk adjustment model",
				options: ["A. CMS", "B. CDPS", "C. HHS", "D. RADV"],
				correctAnswerIndex: 0,
				rationale: "You need to read the materials"
			},
			{
				question: "Which of the following is not a part of the data elements that the MA organizations must collect and submit to CMS",
				options: ["A. Through DOS", "B. From DOS", "C. Provider Type", "D. Provider Name"],
				correctAnswerIndex: 1,
				rationale: "You need to read the materials"
			},
			{
				question: "A medical laboratory pays Dr.Jacobs a certain amount for every patient that he refers to the lab for testing. Dr.Jacobs does not have an ownership interest in the lab. This is most likely the violation of",
				options: ["A. False claims Act", "B. Anti-kickback statue", "C. Stark law", "D. Physician self referral law"],
				correctAnswerIndex: 1,
				rationale: "You need to read the materials"
			},
			{
				question: "Predictive models are used to identify people who are at high risk of chronic illnesses having higher medical claims; what can a provider do with this information to decrease the medical costs? I. Develop disease management education programs II. Involve clinical staff to help with coordination of care III. Refer the patients with chronic illnesses to be treated by another provider IV. Determine the return on investment when referring to a specialist for chronic illnesses.",
				options: ["A. I & II", "B. II & IV", "C. I & III", "D. I, II, III & IV"],
				correctAnswerIndex: 0,
				rationale: "You need to read the materials"
			},
			{
				question: "Is a health plan required to follow the minimum necessary rule?",
				options: ["A. Yes, health plans are not covered entities but as business associates are required to follow the minimum necessary rule.", "B. No, health plans are not covered entities and are not required to follow the minimum necessary rule.", "C. Yes, health plans are covered entities and are therefore required to follow the minimum necessary rule.", "D. No, health plans are covered entities but are not required to follow the minimum necessary rule."],
				correctAnswerIndex: 2,
				rationale: "You need to read the materials"
			},
			{
				question: "Who typically employs risk adjustment coders?",
				options: ["A. Hospitals", "B. Ambulatory surgical centers", "C. Health Plans", "D. Physician offices"],
				correctAnswerIndex: 2,
				rationale: "You need to read the materials"
			},
			{
				question: "Which regulation strengthens HIPAA rules by addressing privacy and security concerns associated with the electronic transmission of health information?",
				options: ["A. Deficit Reduction Act (DRA)", "B. Medicare Access and CHIP Reauthorization Act (MACRA)", "C. Social Security Act (SSA)", "D. Health Information Technology for Economic and Clinical Health Act (HITECH)"],
				correctAnswerIndex: 3,
				rationale: "You need to read the materials"
			},
			{
				question: "Which of the following general statements is NOT true regarding Risk Adjustment practices and Quality?",
				options: ["A. Health Care Plans with Four Star Quality Ratings can still improve their score because the highest rating is a Five (5)", "B. From a data discovery perspective, they are essentially inseparable", "C. Data Collection for HEDIS and Star Ratings Programs can be achieved during their prospective member evaluations.", "D. Quality Measures like Star Ratings and HEDIS have no correlation with the medical record information that is collected in support of risk adjustment"],
				correctAnswerIndex: 3,
				rationale: "You need to read the materials"
			},
			{
				question: "Which code set is used by risk adjustment coders?",
				options: ["A. ICD-10-PCS", "B. ICD-10-CM", "C. CPT", "D. HCPCS Level II"],
				correctAnswerIndex: 1,
				rationale: "You need to read the materials"
			},
			{
				question: "Can a request for recalculation from the plan be requested when inaccurate diagnosis codes are identified after the final risk score is determined?",
				options: ["A. Yes, plans can request a recalculation if found within ten days", "B. Yes, plans can request a recalculation if an inaccurate diagnosis will impact the final payment", "C. No, plans cannot request a recalculation once a final risk score is calculated", "D. No, plans request for a recalculation can only occur when notified by CMS"],
				correctAnswerIndex: 1,
				rationale: "You need to read the materials"
			},
			{
				question: "Which model classify patient using metal level (Platinum, Gold, Silver, Bronze, Catastrophic).",
				options: ["A. CDPS", "B. HCC", "C. HHS-HCC", "D. None of the above"],
				correctAnswerIndex: 3,
				rationale: "You need to read the materials"
			},
			{
				question: "Which of the following specialty is not approved for risk adjustment I.Urology II.Sports medicine III.Addiction medicine IV.Speech language pathologist",
				options: ["A. II,III,IV", "B. II,III", "C. I,II,III", "D. None of the above"],
				correctAnswerIndex: 0,
				rationale: "You need to read the materials"
			},
			{
				question: "In order for a code to be counted as part of the current CMS HCC model, what is the criteria a diagnosis code must meet?",
				options: ["A. The diagnosis has never been reported", "B. The diagnosis is an acute condition", "C. The diagnosis is included in the CMS-Hierarchical Condition Category (CMS-HCC)", "D. The diagnosis is a history code"],
				correctAnswerIndex: 2,
				rationale: "You need to read the materials"
			},

			{
				question: "Which MIPS category replaces the Meaningful Use?",
				options: ["A. Improvement activities", "B. Advancing care information", "C. Cost", "D. Quality"],
				correctAnswerIndex: 1,
				rationale: "You need to read the materials"
			},
			{
				question: "Certified coders performing chart review must be swayed by predictive suspect logic. Mention True or False",
				options: ["A. True", "B. False"],
				correctAnswerIndex: 1,
				rationale: "You need to read the materials"
			},
			{
				question: "Which type of review includes a review of current year combined with prior years DOS",
				options: ["A. Prospective", "B. Retrospective", "C. Concurrent", "D. None of the above"],
				correctAnswerIndex: 1,
				rationale: "You need to read the materials"
			},
			{
				question: "Which part of Medicare is also called Medicare Advantage?",
				options: ["A. Part A", "B. Part C", "C. Part B", "D. Part D"],
				correctAnswerIndex: 1,
				rationale: "You need to read the materials"
			},
			{
				question: "In order to avoid risk adjustment coding errors, a coder must be aware of Disease Hierarchies within the HCC categories. Which of the following sentences best describes what a Disease Hierarchy is?",
				options: ["A. Three to five-digit codes used to describe the clinical reason for a patient’s treatment", "B. A disease hierarchy is combined of multiple ICD-9-CM/ICD-10-CM diagnosis codes that address multiple levels of severity for a disease with varying levels of associated medical costs", "C. CMS risk adjusts payments for a beneficiary using the CMS-HCC dialysis model", "D. Core information submitted by MA organizations for each diagnosis submitted"],
				correctAnswerIndex: 1,
				rationale: "You need to read the materials"
			},
			{
				question: "Predictive modeling used for i. Disease management programs; ii. Preparing for patient’s future needs; iii. Enable health plans to be proactive in delivering care; iv. Enable Providers to be proactive in delivering care.",
				options: ["A. I, II, and III", "B. II, III, and IV", "C. I, II, and IV", "D. I, II, III and IV"],
				correctAnswerIndex: 0,
				rationale: "You need to read the materials"
			},
			{
				question: "What OIG document should a Medicare Advantage review for potential problem areas that will receive special scrutiny in the upcoming year?",
				options: ["A. Compliance Program Guidance", "B. Safe Harbor Regulations", "C. OIG Work Plan", "D. Red Flag Rules"],
				correctAnswerIndex: 2,
				rationale: "You need to read the materials"
			},
			{
				question: "How would you code the following diagnosis by trumping in CDPS model: I. CARVH –Very high (Heart transplant). II. CARM- Medium (Heart attack). III. CARL –Low (Cardiomyopathy) IV. CAREL- Extra low (HTN).",
				options: ["A. Code Cardiomyopathy only", "B. Code Heart attack only", "C. Code Heart transplant only", "D. Code HTN only"],
				correctAnswerIndex: 1,
				rationale: "You need to read the materials"
			},
			{
				question: "Which reporting options can individual providers use to report Merit-based Incentive Payment System (MIPS) data?",
				options: ["I. CMS Web Interface", "II. Qualified Clinical Data Registry (QCDR)", "III. Qualified Registry", "IV. Electronic Health Record (EHR)", "V. Administrative claims", "VI. CAHPS for MIPS Survey", "VII. Attestation"],
				correctAnswerIndex: 3,
				rationale: "You need to read the materials"
			},
			{
				question: "What health insurance assistance program is sponsored by federal and state governments?",
				options: ["A. Medicare", "B. Medicaid", "C. Commercial carriers", "D. Private payers"],
				correctAnswerIndex: 1,
				rationale: "You need to read the materials"
			},
			{
				question: "Which of the following statements is not true about Risk Adjustment?",
				options: ["A. Risk adjustment is the method used to adjust bidding and payment to health plans", "B. Risk adjustment allows CMS to pay plans for the risk of the beneficiaries they enroll.", "C. Medicare risk adjustment is prospective, meaning diagnoses from the previous year and demographic information are used to predict future costs, and adjust payment", "D. Medicare risk adjustments makes payment to the Medicare advantage plans purely based on risk scores only"],
				correctAnswerIndex: 3,
				rationale: "You need to read the materials"
			},
			{
				question: "Abbreviation for MIPS",
				options: ["A. Measure Based Incentive Payment System", "B. Merit- Based Incentive Processing System", "C. Measure Based Increment Payment System", "D. Merit Based Incentive Payment System"],
				correctAnswerIndex: 3,
				rationale: "You need to read the materials"
			},
			{
				question: "A failure to maintain accurate medical or financial records would be an example of:",
				options: ["A. Appeal", "B. Abuse", "C. Sanction", "D. Fraud"],
				correctAnswerIndex: 3,
				rationale: "You need to read the materials"
			},
			{
				question: "Which of the following were included in prescription-based risk adjustment examples: I. Diagnosis Related Groups (DRS) II. Medicare Hierarchical Condition Category, Part D (RxHCC) III. Adjusted Clinical Groups (ACG) IV. Medicare Hierarchical Condition Category, Part C (Medicare HCC-C)",
				options: ["A. I Only", "B. II & III Only", "C. II Only", "D. I, II, III, IV"],
				correctAnswerIndex: 3,
				rationale: "You need to read the materials"
			},
			{
				question: "Risk Adjustment is a:",
				options: ["A. Prospective payment system", "B. Retrospective payment system", "C. Fee-for-service payment system", "D. Case rate payment system"],
				correctAnswerIndex: 0,
				rationale: "You need to read the materials"
			},
			{
				question: "According to the Department of Health and Human Services Centres for Medicare & Medicaid Services, making prohibited referrals for certain designated health services is classified as",
				options: ["A. Abuse", "B. Waste", "C. Fraud", "D. Noncompliance"],
				correctAnswerIndex: 2,
				rationale: "You need to read the materials"
			},
			{
				question: "RAF Scores can change if the patient has influencing factors such as",
				options: ["A. ESRD, Hospice or Dual-Eligibility", "B. Visiting hospital multiple times", "C. Both", "D. None of the above"],
				correctAnswerIndex: 2,
				rationale: "You need to read the materials"
			},
			{
				question: "How the group of ECs with 25 or more members will submit the data for MIPS?",
				options: ["A. QCDR", "B. CAHPS", "C. CMS Web interface", "D. None of the Above"],
				correctAnswerIndex: 3,
				rationale: "You need to read the materials"
			},
			{
				question: "This standard holds that a payment is illegal under the Anti-Kickback Law if even one purpose of the payment is to induce medical referrals.",
				options: ["A. Corporate Compliance Standard", "B. One Purpose Standard", "C. OIG Work Plan", "D. Code of Conduct"],
				correctAnswerIndex: 1,
				rationale: "You need to read the materials"
			},
			{
				question: "ACA introduced multiple programs to stabilize the premium. Which of the following statement is False?",
				options: ["A. Risk Adjustment is the only permanent program", "B. HHS model is budget neutral and receives no outside funds", "C. Risk corridor and Reinsurance were temporary programs", "D. Risk Adjustment also is a temporary program for the first six months of every year"],
				correctAnswerIndex: 2,
				rationale: "You need to read the materials"
			},
			{
				question: "How is HEDIS data collected?",
				options: ["I. Surveys", "II. Insurance Claims", "III. Medical chart reviews", "IV. Provider reporting"],
				correctAnswerIndex: 0,
				rationale: "You need to read the materials"
			},
			{
				question: "Supplemental coverage for medical expenses and services that are not covered by Medicare are offered through",
				options: ["A. Medicaid", "B. Medicare Part A", "C. Medicare Part C", "D. Medigap"],
				correctAnswerIndex: 3,
				rationale: "You need to read the materials"
			},
			{
				question: "In which payment model a group of clinicians who voluntarily come together in an organized way to deliver coordinated high-quality care to Medicare patients?",
				options: ["A. MIPS", "B. Fee for Service", "C. APM", "D. Bundled payment Model"],
				correctAnswerIndex: 2,
				rationale: "You need to read the materials"
			},
			{
				question: "In general, outpatient care, durable medical equipment and home health care are covered by:",
				options: ["A. Part C Medicare", "B. Part B Medicare", "C. Part A Medicare", "D. Part D Medicare"],
				correctAnswerIndex: 1,
				rationale: "You need to read the materials"
			},
			{
				question: "Which of the following is considered as fraud, while copy pasting problem list in HER?",
				options: ["A. Copy pasting the problem list without giving any credit for the original provider who documented all the diagnosis.", "B. Copy pasting only the conditions which are relevant to the current visit", "C. Copy pasting the problems from medical record of Patient A to Patient B to get higher payment"],
				correctAnswerIndex: 0,
				rationale: "You need to read the materials"
			},
			{
				question: "If you were using a predictive model and the results were: • The member had an Rx Claim for a beta blocker. • The member had a medical claim which included comprehensive lab panel. Which diagnosis would you predict this member has?",
				options: ["A. DM", "B. Hypertension", "C. CKD", "D. Asthma"],
				correctAnswerIndex: 1,
				rationale: "You need to read the materials"
			},
			{
				question: "Which example below would be considered fraud?",
				options: ["A. Reporting a diagnosis or co-morbidity that does not exist to obtain higher reimbursement.", "B. Reporting additional diagnosis for a patient that is documented in the medical record.", "C. Reporting diagnosis that only relate to documentation."],
				correctAnswerIndex: 0,
				rationale: "You need to read the materials"
			},
			{
				question: "What are the eligible criteria for Medicare insurance?",
				options: ["I. An individual must either be at least 65 years old", "II. Low Income People", "III. Any age with End-Stage Renal Disease (permanent kidney failure that requires dialysis or a transplant.)", "IV. Any age with Disabled"],
				correctAnswerIndex: 1,
				rationale: "You need to read the materials"
			},
			{
				question: "MAOs are private organizations that contract with Medicare to provide Medicare Advantage Plans that include all the Part A and Part B benefits. Medicare Advantage Plans include:",
				options: ["I. Special Needs Plans", "II. Medicare Medical Savings Accounts Plans", "III. Health Maintenance Organizations", "IV. Provider Preferred Organization"],
				correctAnswerIndex: 0,
				rationale: "You need to read the materials"
			},
			{
				question: "MIPS has been designed to combine the existing quality reporting program i. Physician Quality Reporting System; ii. Meaningful use; iii. Value Based payment Modifier",
				options: ["A. I & II", "B. II & III", "C. I, II & III"],
				correctAnswerIndex: 0,
				rationale: "You need to read the materials"
			},
			{
				question: "In which circumstance a clinician would exempt from MIPS?",
				options: ["i. Clinicians who are new to the Medicare program in 2017", "ii. Clinicians with a low volume threshold who bill less than $90,000 in part B allowed charges", "iii. Clinician who has seen fewer than 100 patients", "iv. Non-physician practitioners"],
				correctAnswerIndex: 1,
				rationale: "You need to read the materials"
			},
			{
				question: "Predictive modeling used for i. Disease management programs; ii. Preparing for patient’s future needs; iii. Enable health plans to be proactive in delivering care; iv. Enable Providers to be proactive in delivering care.",
				options: ["A. I, II, and III", "B. II, III, and IV", "C. I, II, and IV", "D. I, II, III, and IV"],
				correctAnswerIndex: 3,
				rationale: "You need to read the materials"
			},
			{
				question: "Which type of review affects the following year instead of the current year?",
				options: ["A. Retrospective", "B. Concurrent", "C. Prospective"],
				correctAnswerIndex: 0,
				rationale: "You need to read the materials"
			},
			{
				question: "Which kind of below diagnoses is most likely to be found in risk adjustment models?",
				options: ["A. Cost lesser to manage or treat", "B. Only chronic conditions", "C. Only infectious conditions", "D. Costly to manage from a medical management perspective"],
				correctAnswerIndex: 3,
				rationale: "You need to read the materials"
			},
			{
				question: "Which of the following is NOT true about the Risk Adjustment process?",
				options: ["A. Risk adjustment strengthens the Medicare program by ensuring that accurate payments are made to MA organizations based on the health status of their enrollees", "B. Accurate payments to MA organizations help ensure that providers are paid appropriately for the services they provide to MA beneficiaries.", "C. Risk adjustment provides MA organizations with incentives to enroll and treat healthy individuals."],
				correctAnswerIndex: 2,
				rationale: "You need to read the materials"
			},
			{
				question: "Which of the following is not a covered facility under hospital inpatient, according to RA data collection?",
				options: ["A. Religious Non-Medical Health Care Institutions", "B. Skilled Nursing Facilities (SNFs)", "C. Long term Hospitals", "D. Short term (general and specialty) Hospitals"],
				correctAnswerIndex: 0,
				rationale: "You need to read the materials"
			},
			{
				question: "Which of the following elements would not be taken into consideration for risk adjustment?",
				options: ["A. The number of years a patient has been covered under Medicare Advantage", "B. Gender", "C. Procedure codes", "D. Place of service"],
				correctAnswerIndex: 0,
				rationale: "You need to read the materials"
			},
			{
				question: "Using the information provided below, which statement is TRUE. Check Image",
				options: ["A. When a patient is diagnosed with hepatorenal syndrome and biliary cirrhosis, HCC28 is used", "B. When a patient is diagnosed with chronic hepatitis and hepatopulmonary syndrome, HCC27 is used", "C. When a patient is diagnosed with alcohol liver damage and biliary cirrhosis, HCC29 is used", "D. When a patient is diagnosed with autoimmune hepatitis and cirrhosis of the liver, HCC29 is used"],
				correctAnswerIndex: 0,
				rationale: "You need to read the materials"
			},
			{
				question: "Use the table provided below to answer the question,	If the patient is diagnosed with colon cancer and acute leukemia, which HCC is used in the risk calculation? Check Image",
				options: ["A. HCC 8", "B. HCC 11 ", "C. HCC 12 ", "D. HCC 8 and HCC 11"],
				correctAnswerIndex: 0,
				rationale: "You need to read the materials"
			},



				];

        const quizTimeInMinutes = 1500;
        const quizEndTime = new Date().getTime() + quizTimeInMinutes * 60 * 1000;

		function shuffleArray(array) {
			for (let i = array.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1));
				[array[i], array[j]] = [array[j], array[i]];
			}
			return array;
		}

		function buildQuiz() {
			questions.forEach((question, index) => {
				const questionDiv = document.createElement("div");
				questionDiv.classList.add("question");
				questionDiv.innerHTML = `<div>${index + 1}. ${question.question}</div>`; // Added index + 1 for question number

				question.options.forEach((option, optionIndex) => {
					const optionDiv = document.createElement("div");
					optionDiv.classList.add("option");
					const optionLabel = document.createElement("label");
					optionLabel.innerHTML = `<input type="radio" name="question${index}" value="${optionIndex}">${option}`;
					optionDiv.appendChild(optionLabel);

					if (optionIndex === question.correctAnswerIndex) {
						const correctIcon = document.createElement("i");
						correctIcon.classList.add("fas", "fa-check-circle", "correct-icon");
						optionLabel.appendChild(correctIcon);
					} else {
						const wrongIcon = document.createElement("i");
						wrongIcon.classList.add("fas", "fa-times-circle", "wrong-icon");
						optionLabel.appendChild(wrongIcon);
					}

					questionDiv.appendChild(optionDiv);
				});

				quizContainer.appendChild(questionDiv);
			});
		}






		function calculateScore() {
			// Disable all radio buttons to prevent further selection
			const radioButtons = document.querySelectorAll('input[type="radio"]');
			radioButtons.forEach(radioButton => {
				radioButton.disabled = true;
			});

			const selectedOptions = [];
			questions.forEach((question, index) => {
				const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
				if (selectedOption) {
					selectedOptions.push(parseInt(selectedOption.value));
				}
			});

			const totalQuestions = questions.length;
			const correctAnswers = selectedOptions.filter(
				(selectedOption, index) => selectedOption === questions[index].correctAnswerIndex
			).length;

			const score = correctAnswers;
			const incorrectAnswers = totalQuestions - correctAnswers;

			displayScoreAndReview(score, totalQuestions, correctAnswers, incorrectAnswers);
		}



		function displayScoreAndReview(score, totalQuestions, correctAnswers, incorrectAnswers) {
			const scoreDiv = document.createElement("div");
			scoreDiv.innerHTML = `<h2>Your Score: ${score}/${totalQuestions}</h2>`;
			scoreDiv.innerHTML += `<p>Correct Answers: ${correctAnswers}</p>`;
			scoreDiv.innerHTML += `<p>Incorrect Answers: ${incorrectAnswers}</p>`;

			questions.forEach((question, index) => {
				const options = document.getElementsByName(`question${index}`);
				const correctAnswerIndex = question.correctAnswerIndex;

				options.forEach((option, optionIndex) => {
					const optionLabel = option.parentNode;
					if (optionIndex === correctAnswerIndex) {
						optionLabel.innerHTML += ' <i class="fas fa-check-circle" style="color:green;"></i>';
					} else {
						optionLabel.innerHTML += ' <i class="fas fa-times-circle" style="color:red;"></i>';
					}
				});
			});

			rationaleDiv.innerHTML = "";
			rationaleDiv.appendChild(scoreDiv);
		}


		function updateTimer() {
			const currentTime = new Date().getTime();
			const timeLeft = quizEndTime - currentTime;

			if (timeLeft <= 0) {
				clearInterval(timerInterval);
				calculateScore();
			} else {
				const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
				const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
				timerDiv.textContent = `Time Left: ${minutes}m ${seconds}s`;

				// Calculate percentage of time remaining
				const totalTime = quizTimeInMinutes * 60 * 1000;
				const timePercentage = (timeLeft / totalTime) * 100;

				// Set background color based on time remaining
				quizContainer.style.backgroundColor = `hsl(${timePercentage}, 100%, 80%)`;
			}
		}


        buildQuiz();

        submitButton.addEventListener("click", calculateScore);
        const timerInterval = setInterval(updateTimer, 1000);
