export class SurgicalProcedureSearch {
	
	constructor(objConfig) {
		this.componentName = 'surgical-procedure-search';
		
		this.procedureList = [
			{
				"id": "001",
				"procedure": "Cataract extraction (with or without intra-ocular lens insertion)",
				"description": "Cataract extraction is a surgical procedure to remove a lensin the eye that has become cloudy over time, affecting vision in that eye. ... Once thelens is removed, the doctor replaces it with a clear lens called an intraocular lensand then closes the incision."
			},
			{
				"id": "002",
				"procedure": "Cholecystectomy (open/laparoscopic)",
				"description": "Cholecystectomy is the surgical removal of the gallbladder. Cholecystectomy is a common treatment of symptomatic gallstones and other gallbladder conditions."
			},
			{
				"id": "003",
				"procedure": "Coronary artery bypass grafting",
				"description": "Coronary artery bypass surgery, also known as coronary artery bypass graft surgery, and colloquially heart bypass or bypass surgery, is a surgical procedure to restore normal blood flow to an obstructed coronary artery."
			},
			{
				"id": "004",
				"procedure": "Cystoscopy",
				"description": "Cystoscopy is endoscopy of the urinary bladder via the urethra. It is carried out with a cystoscope. The urethra is the tube that carries urine from the bladder to the outside of the body. The cystoscope has lenses like a telescope or microscope."
			},
			{
				"id": "005",
				"procedure": "Haemorrhoidectomy",
				"description": "Stapled hemorrhoidectomy, also known as stapled hemorrhoidopexy, is a surgical procedure that involves the removal of abnormally enlarged hemorrhoidal tissue, followed by the repositioning of the remaining hemorrhoidal tissue back to its normal anatomic position."
			},
			{
				"id": "006",
				"procedure": "Hysterectomy (abdominal/vaginal/laparoscopic)",
				"description": "Hysterectomy is the surgical removal of the uterus. It may also involve removal of the cervix, ovaries, fallopian tubes and other surrounding structures. Usually performed by a gynecologist, a hysterectomy may be total or partial"
			},
			{
				"id": "007",
				"procedure": "Inguinal herniotomy/herniorrhaphy",
				"description": "Inguinal hernia surgery is an operation to repair a weakness in the abdominal wall that abnormally allows abdominal contents to slip into a narrow tube called the inguinal canal in the groin region."
			},
			{
				"id": "008",
				"procedure": "Myringoplasty/tympanoplasty",
				"description": "Myringoplasty is the closure of the perforation of pars tensa of the tympanic membrane. When myringoplasty is combined with ossicular reconstruction, it is called tympanoplasty. The operation is performed with the patient supine and face turned to one side."
			},
			{
				"id": "010",
				"procedure": "Prostatectomy (transurethral or open)",
				"description": "Prostatectomy as a medical term refers to the surgical removal of all or part of the prostate gland. This operation is done for benign conditions that cause urinary retention, as well as for prostate cancer and for other cancers of the pelvis"
			},
			{
				"id": "011",
				"procedure": "Septoplasty",
				"description": "Septoplasty, or alternatively submucous septal resection and septal reconstruction, is a corrective surgical procedure done to straighten a deviated nasal septum – the nasal septum being the partition between the two nasal cavities."
			},
			{
				"id": "012",
				"procedure": "Tonsillectomy (with or without adenoidectomy)",
				"description": "Tonsillectomy is a surgical procedure in which both palatine tonsils are fully removed from the back of the throat. The procedure is mainly performed for recurrent throat infections and obstructive sleep apnea"
			},
			{
				"id": "013",
				"procedure": "Total hip replacement",
				"description": "Hip replacement is a surgical procedure in which the hip joint is replaced by a prosthetic implant, that is, a hip prosthesis. Hip replacement surgery can be performed as a total replacement or a hemi replacement"
			},
			{
				"id": "014",
				"procedure": "Total knee replacement",
				"description": "Knee replacement, also known as knee arthroplasty, is a surgical procedure to replace the weight-bearing surfaces of the knee joint to relieve pain and disability. It is most commonly performed for osteoarthritis, and also for other knee diseases such as rheumatoid arthritis and psoriatic arthritis"
			},
			{
				"id": "015",
				"procedure": "Varicose veins treatment",
				"description": "Sclerotherapy is a procedure used to treat blood vessels or blood vessel malformations and also those of the lymphatic system. A medicine is injected into the vessels, which makes them shrink. It is used for children and young adults with vascular or lymphatic malformations."
			},
			{
				"id": "016",
				"procedure": "Myringotomy",
				"description": "A myringotomy, sometimes called by other names, is a surgical procedure in which a tiny incision is created in the eardrum to relieve pressure caused by excessive buildup of fluid, or to drain pus from the middle ear"
			},
			{
				"id": "018",
				"procedure": "Abdominal or thoracic aortic aneurysm - repair/replacement",
				"description": "Open surgical repair remains the gold standard operation for thoracoabdominal aortic aneurysm (TAAA). Contemporary surgical approaches balance the need to maximize long-term benefit by replacing as much diseased aorta as possible with limiting ischemia-related risk to the spinal cord and other organs"
			},
			{
				"id": "019",
				"procedure": "Acromioplasty/arthroscopy shoulder/sub acromial decompression",
				"description": "Acromioplasty is an arthroscopic surgical procedure of the acromion. Generally, it implies removal of a small piece of the surface of the bone that is in contact with a tendon causing, by friction, damage to the tendon"
			},
			{
				"id": "020",
				"procedure": "Adenoidectomy",
				"description": "Adenoidectomy is the surgical removal of the adenoid for reasons which include impaired breathing through the nose, chronic infections, or recurrent earaches. The surgery is less commonly performed in adults in whom the adenoid is much smaller and less active than it is in children"
			},
			{
				"id": "021",
				"procedure": "Amputation of limb",
				"description": "Amputation is the removal of a limb by trauma, medical illness, or surgery. As a surgical measure, it is used to control pain or a disease process in the affected limb, such as malignancy or gangrene. In some cases, it is carried out on individuals as a preventative surgery for such problems"
			},
			{
				"id": "022",
				"procedure": "Anal fissure - repair of",
				"description": "Lateral internal sphincterotomy is an operation performed on the internal anal sphincter muscle for the treatment of chronic anal fissure. The internal anal sphincter is one of two muscles that comprise the anal sphincter which controls the passage of feces."
			},
			{
				"id": "023",
				"procedure": "Anterior cruciate ligament reconstruction",
				"description": "Anterior cruciate ligament reconstruction is a surgical tissue graft replacement of the anterior cruciate ligament, located in the knee, to restore its function after an injury. The torn ligament can either be removed from the knee, or preserved before reconstruction an arthroscopic procedure."
			},
			{
				"id": "024",
				"procedure": "Arthrodesis",
				"description": "Arthrodesis, also known as artificial ankylosis or syndesis, is the artificial induction of joint ossification between two bones by surgery. This is done to relieve intractable pain in a joint which cannot be managed by pain medication, splints, or other normally indicated treatments."
			},
			{
				"id": "025",
				"procedure": "Arthroplasty - revision of",
				"description": "Arthroplasty is an orthopedic surgical procedure where the articular surface of a musculoskeletal joint is replaced, remodeled, or realigned by osteotomy or some other procedure"
			},
			{
				"id": "026",
				"procedure": "Arthroscopy",
				"description": "Arthroscopy (also called arthroscopic or keyhole surgery) is a minimally invasive surgical procedure on a joint in which an examination and sometimes treatment of damage is performed using anarthroscope, an endoscope that is inserted into the joint through a small incision"
			},
			{
				"id": "028",
				"procedure": "Axillary node dissection",
				"description": "Lymphadenectomy or lymph node dissection is the surgical removal of one or more groups of lymph nodes. It is almost always performed as part of the surgical management of cancer"
			},
			{
				"id": "029",
				"procedure": "Bartholin's abscess drainage",
				"description": "A Bartholin's abscess can occur when one of the Bartholin's glands, located on either side of the vaginal opening, becomes infected. When the gland is blocked, a cyst will usually form. If the cyst becomes infected, it can lead to a Bartholin's abscess. A Bartholin's abscess can be more than an inch in diameter"
			},
			{
				"id": "030",
				"procedure": "Bartholin's cyst - removal of",
				"description": "A Bartholin's abscess can occur when one of the Bartholin's glands, located on either side of the vaginal opening, becomes infected. When the gland is blocked, a cyst will usually form. If the cyst becomes infected, it can lead to a Bartholin's abscess. A Bartholin's abscess can be more than an inch in diameter"
			},
			{
				"id": "031",
				"procedure": "Bladder neck incision",
				"description": "Bladder Neck Incision is a surgical procedure done to correct the flow of urine in men who have a decreased urinary stream and faces problems passing urine because of a bladder neck stenosis or a urethral stricture. It is treated with the help of an incision made in the bladder neck"
			},
			{
				"id": "032",
				"procedure": "Blepharoplasty",
				"description": "Blepharoplasty is the plastic surgery operation for correcting defects, deformities, and disfigurations of the eyelids; and for aesthetically modifying the eye region of the face."
			},
			{
				"id": "033",
				"procedure": "Branchial apparatus remnant - removal of",
				"description": "Surgical excision is definitive treatment for branchial cleftanomalies. General anesthesia is used for surgery. A horizontal incision in the neck is often made in a neck crease"
			},
			{
				"id": "034",
				"procedure": "Breast lump - excision and/or biopsy",
				"description": "Breast biopsy may be used to assess a breast lumpthat's visible on a mammogram or ultrasound or that your doctor feels (palpates) during a clinical breast exam. A radiologist or surgeon uses a thin, hollow needle to remove tissue samples from the breastmass, most often using ultrasound guidance"
			},
			{
				"id": "035",
				"procedure": "Breast prosthesis - removal of",
				"description": "A breast prosthesis is a synthetic full or partial breast shape that looks real when worn in a bra or under clothing. They are often called 'breast forms' by manufacturers. Prostheses can be used after the full removal of a breast(mastectomy) or after partial removal (lumpectomy or breast-conserving surgery)"
			},
			{
				"id": "036",
				"procedure": "Breast reconstruction",
				"description": "Breast reconstruction is the rebuilding of a breast, usually in women. It involves using autologous tissue or prosthetic material to construct a natural-looking breast. Often this includes the reformation of a natural-looking areola and nipple"
			},
			{
				"id": "037",
				"procedure": "Breast reduction",
				"description": "Breast reduction surgery removes excess breast fat, glandular tissue and skin to achieve a breast size in proportion with your body"
			},
			{
				"id": "038",
				"procedure": "Bunion (hallux valgus) - removal of",
				"description": "Bunion removal is a surgical procedure that corrects a deformed area of the foot near the big toe. Bunion removal is sometimes called a bunionectomy, bunion surgery, or hallux valgus correction. Hallux valgus is a Latin phrase that means “foot deformity.”"
			},
			{
				"id": "039",
				"procedure": "Carotid endarterectomy",
				"description": "Carotid endarterectomy is a surgical procedure performed by vascular surgeons used to reduce the risk of stroke by correcting stenosis in the common carotid artery or internal carotid artery. Endarterectomy is the removal of material on the inside of an artery."
			},
			{
				"id": "040",
				"procedure": "Carpal tunnel release",
				"description": "Carpal tunnel surgery, also called carpal tunnel release and carpal tunnel decompression surgery, is a surgery in which the transverse carpal ligament is divided"
			},
			{
				"id": "041",
				"procedure": "Cerebral haematoma - evacuation of",
				"description": "Subdural evacuation is a surgical procedure to remove a subdural hematoma(SDH) – a pooling of blood on the brain. Subdural hematomas are categorized asacute, subacute, and chronic. An SDH may be caused by trauma but can also be spontaneous or may be caused by a procedure, such as lumbar puncture."
			},
			{
				"id": "042",
				"procedure": "Cervical discectomy and fusion",
				"description": "Anterior cervical discectomy and fusion is a surgical procedure to treat nerve root or spinal cord compression by decompressing the spinal cord and nerve roots of the cervical spine with a discectomy, followed by inter-vertebral fusion to stabilize the corresponding vertebrae"
			},
			{
				"id": "043",
				"procedure": "Chalazion - excision of",
				"description": "The chalazion may be removed in two ways, depending on the size of cyst. Relatively small chalazia are removed through a small cut at the back of the eyelid. The surgeon lifts the eyelid to access the back of its surface and makes an incision of approximately 3mm just on top of the chalazion."
			},
			{
				"id": "044",
				"procedure": "Chiari malformation decompression",
				"description": "The most common surgery to treat Chiari malformation is posterior fossa decompression. It creates more space for the cerebellum and relieves pressure on the spinal cord. The surgery involves making an incision at the back of the head and removing a small portion of the bone at the bottom of the skull (craniectomy)"
			},
			{
				"id": "045",
				"procedure": "Circumcision",
				"description": "Circumcision is the removal of the foreskin from the human penis. In the most common procedure, the foreskin is opened, adhesions are removed, and the foreskin is separated from the glans. After that, a circumcision device may be placed, and then the foreskin is cut off."
			},
			{
				"id": "046",
				"procedure": "Cleft lip and palate - repair of",
				"description": "Surgery can repair most clefts so that the child's appearance and speech develop normally. However, children born with a cleft lip or palate may need the skills of several medical professionals to correct the problems associated with the cleft"
			},
			{
				"id": "047",
				"procedure": "Colectomy/anterior resection/large bowel resection",
				"description": "Colectomy is bowel resection of the large bowel. It consists of the surgical removal of any extent of the colon, usually segmental resection. In extreme cases where the entire large intestine is removed, it is called total colectomy, and proctocolectomy denotes that the rectum is included."
			},
			{
				"id": "048",
				"procedure": "Common peroneal nerve release",
				"description": "Common Peroneal Nerve Release at the Fibular Head. Compression of thecommon peroneal nerve at the fibular head is under recognized. ... Release of thecommon peroneal nerve involves dividing this intermuscular septum in addition to other tendinous septum planes and the tendinous fascia deep to the peroneal nerve"
			},
			{
				"id": "049",
				"procedure": "Cone biopsy",
				"description": "Cervical conization refers to an excision of a cone-shaped sample of tissue from the mucous membrane of the cervix. Conization may be used either for diagnostic purposes as part of a biopsy, or for therapeutic purposes to remove pre-cancerous cells. Types include: cold knife conization."
			},
			{
				"id": "050",
				"procedure": "Congenital cardiac defect/s - procedure for",
				"description": "Congenital heart defect corrective surgery fixes or treats a heart defect that a child is born with. A baby born with one or more heart defects has congenital heart disease. Surgery is needed if the defect could harm the child's long-term health or well-being"
			},
			{
				"id": "051",
				"procedure": "Congenital pulmonary lesion - removal of",
				"description": "Lung resection is a surgical procedure in which a section of a lung or the entirelung is removed. Lung resection is performed on patients with a damaged or diseased lung. Reasons for needing lung resection include: Lung cancer or tumor."
			},
			{
				"id": "052",
				"procedure": "Corneal graft",
				"description": "Corneal transplantation, also known as corneal grafting, is a surgical procedure where a damaged or diseased cornea is replaced by donated corneal tissue. When the entire cornea is replaced it is known as penetrating keratoplasty and when only part of the cornea is replaced it is known as lamellar keratoplasty."
			},
			{
				"id": "053",
				"procedure": "Cranioplasty",
				"description": "Cranioplasty is a surgical repair of a defect or deformity of a skull. Cranioplasty is almost as ancient as trepanation. There is evidence that Incan and Muisca surgeons were performing cranioplasty using precious metals and gourds"
			},
			{
				"id": "054",
				"procedure": "Craniotomy",
				"description": "A craniotomy is the surgical removal of part of the bone from the skull to expose the brain. Specialized tools are used to remove the section of bone called the bone flap. The bone flap is temporarily removed, then replaced after the brain surgery has been done."
			},
			{
				"id": "055",
				"procedure": "Curettage and evacuation of uterus",
				"description": "Dilation and curettage with suction is a procedure in which contents from the inside of the uterus are evacuated. 'Dilation' refers to the opening of the cervix. 'Curettage' refers to the aspiration or removal of tissue within the uterus with an instrument called a curette. This procedure is commonly performed as a treatment for miscarriage, retained placenta after vaginal delivery, or as a method of first-trimester elective abortion."
			},
			{
				"id": "056",
				"procedure": "Cystectomy",
				"description": "Cystectomy is a medical term for surgical removal of all or part of the urinary bladder. It may also be rarely used to refer to the removal of a cyst. The most common condition warranting removal of the urinary bladder is bladder cancer. Two main types of cystectomies can be performed"
			},
			{
				"id": "057",
				"procedure": "Dacryocystorhinostomy",
				"description": "Dacryocystorhinostomy is a surgical procedure to restore the flow of tears into the nose from the lacrimal sac when the nasolacrimal duct does not function."
			},
			{
				"id": "058",
				"procedure": "Dermoid cyst - removal of",
				"description": "Dermoid cyst ablation begins with drainage of the cyst contents using a technique that 'thins' the oily contents with a medical detergent and allows drainage of the cyst contents. After 'cleaning' and 'removal' of the cyst contents, the collapsed lining membranes (skin cells that line the cyst and produce the cyst contents) that surround the cyst are ablated with a precise needle technique known as 'coblation.'"
			},
			{
				"id": "059",
				"procedure": "Dialysis access surgery",
				"description": "A hemodialysis access, or vascular access, is a way to reach the blood for hemodialysis. The access allows blood to travel through soft tubes to the dialysis machine where it is cleaned as it passes through a special filter, called a dialyzer. An access is placed by a minor surgery"
			},
			{
				"id": "060",
				"procedure": "Diathermy of wart/s",
				"description": "Diathermy is electrically induced heat or the use of high-frequency electromagnetic currents as a form of physical therapy and in surgical procedures. "
			},
			{
				"id": "061",
				"procedure": "Discectomy",
				"description": "A discectomy is the surgical removal of abnormal disc material that presses on a nerve root or the spinal cord. The procedure involves removing a portion of an intervertebral disc, which causes pain, weakness or numbness by stressing the spinal cord or radiating nerves."
			},
			{
				"id": "062",
				"procedure": "Dupytren's contracture release",
				"description": "Depending on the severity of the condition, surgery options may include: cutting the fascia bands through small incisions in the palm. removing the thickened fascia. removing the fascia and associated skin, and using a skin graft to seal the palm."
			},
			{
				"id": "063",
				"procedure": "Ectropion - correction of",
				"description": "An entropion or ectropion repair is an operation to correct an eyelid that turns in or turns out. The operation should improve symptoms caused by entropion orectropion."
			},
			{
				"id": "064",
				"procedure": "Endometrial ablation",
				"description": "Endometrial ablation removes the endometrium, which is the lining of the uterus. In most cases, this stops you from having periods. If it doesn’t completely stop your periods, your flow should at least return to normal or be very light."
			},
			{
				"id": "065",
				"procedure": "Epididymal cyst - removal of",
				"description": "Your surgeon will make a small cut on your scrotum. For a hydrocele, your surgeon will remove the fluid from the sheath and either remove the sheath or stitch it together. Your surgeon will remove an epididymal cyst. This will usually involve removing part of or all the epididymus."
			},
			{
				"id": "066",
				"procedure": "Ethmoidectomy",
				"description": "Ethmoidectomy is the medical name for a procedure that involves removing the partitions between the ethmoid sinuses in order to create larger sinus cavities. This procedure treats sinus infections and sinus obstructions that have been the cause of chronic sinus problems."
			},
			{
				"id": "067",
				"procedure": "Examination of eye under anaesthesia",
				"description": "An exam under anesthesia (EUA) is an examination of a patient while he or she is under anesthesia. In this case, the exam is performed on the eyes."
			},
			{
				"id": "068",
				"procedure": "Exostosis - excision of",
				"description": "The operation is performed under local anaesthetic usually injected around the ankle. In the case of a bony lump under a toe nail the injections will be at the base of the affected toe."
			},
			{
				"id": "069",
				"procedure": "Female sterilisation",
				"description": "Tubal ligation is a surgical procedure for female sterilization in which the fallopian tubes are permanently blocked or removed. This prevents the fertilization of eggs by sperm and thus the implantation of a fertilized egg. Tubal ligation is considered a permanent method of sterilization and birth control."
			},
			{
				"id": "070",
				"procedure": "Femoro-popliteal bypass graft",
				"description": "Vascular surgeons constructfemoro-popliteal bypass grafts, from the groin to the knee, to save limbs that might otherwise require amputation in patients with severe arterial disease, and to improve walking distance in patients with less severe arterial disease."
			},
			{
				"id": "071",
				"procedure": "Fracture non-union - treatment of",
				"description": "During this procedure, bone from another part of the body at the fracture site to 'jump start' the healing process. A bone graft provides a scaffold on which new bone may grow. Bone grafts also provide fresh bone cells and the naturally occurring chemicals the body needs for bone healing."
			},
			{
				"id": "072",
				"procedure": "Functional endoscopic sinus surgery",
				"description": "Functional endoscopic sinus surgery is a minimally invasive surgical treatment which uses nasal endoscopes to enlarge the nasal drainage pathways of the paranasal sinuses to improve sinus ventilation."
			},
			{
				"id": "073",
				"procedure": "Fundoplication",
				"description": "A Nissen fundoplication, or laparoscopic Nissen fundoplication when performed via laparoscopic surgery, is a surgical procedure to treat gastroesophageal reflux disease and hiatal hernia."
			},
			{
				"id": "074",
				"procedure": "Ganglion - excision of",
				"description": "The procedure to remove a ganglion cyst is called an excision. Surgery involves removing the cyst as well as part of the involved joint capsule or tendon sheath, which is considered the root of the ganglion. Even afterexcision, there is a small chance the ganglion will return."
			},
			{
				"id": "075",
				"procedure": "Hammer/claw/mallet toe - correction of",
				"description": "Surgeons often use phalangeal head resection to correct hammer, claw, and mallet toes. In this procedure, the surgeon removes part of one of the toe bones, thephalangeal head, so that the toe can lie flat. The affected tendons are cut and then reattached to conform to the new, correct toe position."
			},
			{
				"id": "076",
				"procedure": "Heart valve replacement",
				"description": "Aortic valve replacement is a procedure whereby the failing aortic valve of a patient's heart is replaced with an artificial heart valve."
			},
			{
				"id": "077",
				"procedure": "Herniorrhaphy",
				"description": "A herniorrhaphy refers to the surgical repair of a hernia, in which a surgeon repairs the weakness in your abdominal wall. A hernia occurs when a weak area in the muscles of your abdominal wall allows an internal part of your body to push through."
			},
			{
				"id": "078",
				"procedure": "Hydrocele - repair of",
				"description": "A hydrocelectomy is a surgical procedure to repair a hydrocele, which is a buildup of fluid around a testicle. Often a hydrocele will resolve itself without treatment. However, as a hydrocele grows larger, it can cause swelling, pain, and discomfort in the scrotum and may need surgical repair"
			},
			{
				"id": "079",
				"procedure": "Hypospadias - repair of",
				"description": "Hypospadias repair is surgeryto correct a defect in the opening of the penis that is present at birth. The urethra (the tube that carries urine from the bladder to outside the body) does not end at the tip of the penis. Instead, it ends on the underside of the penis."
			},
			{
				"id": "080",
				"procedure": "Hysteroscopy, dilatation and curettage",
				"description": "The curettage procedure (D&C) involves dilating the uterine cervix so that the lining tissue (endometrium) of the uterus can be removed by scraping or suction."
			},
			{
				"id": "081",
				"procedure": "Insertion of ventricular peritoneal shunt",
				"description": "Hydrocephalus is a condition that causes fluid to build up on the brain, which increases the pressure around the brain. A ventriculoperitoneal shunt reduces that pressure. Doctors insert this medical device while a person is under general anesthetic."
			},
			{
				"id": "082",
				"procedure": "Laminectomy",
				"description": "A laminectomy is a surgical procedure that removes a portion of the vertebral bone called the lamina, which is the roof of the spinal canal. It is a major spine operation with residual scar tissue and may result in postlaminectomy syndrome."
			},
			{
				"id": "083",
				"procedure": "Laparoscopy",
				"description": "Laparoscopy is keyhole surgery used to examine or operate on the interior of the abdominal or pelvic cavities. It is performed under general anaesthesia, usually by a surgeon or gynaecologist (women's health specialist). During laparoscopy (also known as peritoneoscopy), a small cut is made in the abdomen."
			},
			{
				"id": "084",
				"procedure": "Large loop excision of the transformation zone cervix (LLETZ)",
				"description": "Also called loop electrosurgical excision procedure (LEEP), this is the most common way of removing cervical tissue for examination and treating precancerous changes of the cervix. The abnormal tissue is removed using a thin wire loop that is heated electrically."
			},
			{
				"id": "085",
				"procedure": "Laryngectomy",
				"description": "Laryngectomy is the removal of the larynx and separation of the airway from the mouth, nose and esophagus. In a total laryngectomy, the entire larynx is removed. In a partial laryngectomy, only a portion of the larynx is removed"
			},
			{
				"id": "086",
				"procedure": "Lingual or maxillary frenulum surgery",
				"description": "A frenectomy is the removal of a frenulum, a small fold of tissue that prevents an organ in the body from moving too far. It can refer to frenula in several places on the human body. It is related to frenuloplasty, a surgical alteration in a frenulum. Done mostly for orthodontic purposes, a frenectomy is either performed inside the middle of upper lip, which is called labial frenectomy, or under the tongue, called lingual frenectomy. Frenectomy is a very common dental procedure that is performed on infants, children, and adults."
			},
			{
				"id": "087",
				"procedure": "Lithotripsy",
				"description": "Lithotripsy is a medical procedure involving the physical destruction of hardened masses like kidney stones, bezoars or gallstones. The term is derived from the Greek words meaning 'breaking stones'."
			},
			{
				"id": "088",
				"procedure": "Lobectomy/wedge resection/pneumonectomy",
				"description": "A pneumonectomy is a surgical procedure to remove a lung. Removal of just one lobe of the lung is specifically referred to as a lobectomy, and that of a segment of the lung as a wedge resection"
			},
			{
				"id": "089",
				"procedure": "Lymphangioma - surgery for",
				"description": "The preferred treatment for lymphangiomas is complete surgical excision. On the basis of the Whimster hypothesis, the large subcutaneous cisterns should be removed to prevent the lesion from resurfacing."
			},
			{
				"id": "090",
				"procedure": "Mastectomy",
				"description": "Mastectomy is the medical term for the surgical removal of one or both breasts, partially or completely. A mastectomy is usually carried out to treat breast cancer. In some cases, people believed to be at high risk of breast cancer have the operation as a preventative measure."
			},
			{
				"id": "091",
				"procedure": "Mastoidectomy",
				"description": "A mastoidectomy is a procedure performed to remove the mastoid air cells. This can be done as part of treatment for mastoiditis, chronic suppurative otitis media or cholesteatoma. In addition, it is sometimes performed as part of other procedures or for access to the middle ear."
			},
			{
				"id": "092",
				"procedure": "Meatoplasty",
				"description": "Meatoplasty is a surgery in which the opening of the penis is enlarged. Meatotomy is the surgical opening, also called the urethral meatus."
			},
			{
				"id": "093",
				"procedure": "Meniscectomy",
				"description": "A meniscectomy is a type of surgery that’s used to treat a damaged meniscus."
			},
			{
				"id": "094",
				"procedure": "Microlaryngoscopy",
				"description": "Microlaryngoscopy means a surgical examination of the larynx (voice box) under general anaesthetic. The aim of microlaryngoscopy is to find out in more detail what is wrong with your larynx and vocal cords, and if possible to try to improve your voice."
			},
			{
				"id": "095",
				"procedure": "Muscle biopsy/temporal artery biopsy",
				"description": "A muscle biopsy is a procedure used to diagnose diseases involving muscle tissue. Your healthcare provider will remove tissue and cells from a specific muscle and view them microscopically. Your provider will only need to remove a small piece of tissue from the designated muscle."
			},
			{
				"id": "096",
				"procedure": "Muscle or tendon length - change of",
				"description": "The surgeon makes a Z-shaped incision in the tendon, stretches it to a particularlength, and then joins the tendon back together. This procedure offers the greatest control over the enlargement and length of the tendon. At the end of the process, the incised area is closed using sutures or surgical staples."
			},
			{
				"id": "097",
				"procedure": "Myomectomy",
				"description": "Myomectomy, sometimes also fibroidectomy, refers to the surgical removal of uterine leiomyomas, also known as fibroids. In contrast to a hysterectomy the uterus remains preserved and the woman retains her reproductive potential"
			},
			{
				"id": "098",
				"procedure": "Nasal cautery",
				"description": "Nasal cautery, or nasal cauterization, is a procedure used to treat nosebleeds (epistaxis). Nasal cautery is where a chemical or electrical device is applied to the mucous membranes in the nose to stop bleeding."
			},
			{
				"id": "099",
				"procedure": "Nasal polypectomy",
				"description": "In nasal polypectomy polyps are removed using special suction and instruments. Nasal polyps are growths of abnormal tissue that may form in your noseor sinuses."
			},
			{
				"id": "100",
				"procedure": "Nasendoscopy",
				"description": "A nasendoscopy is a test to look at the inside of the nose, the throat (pharynx) and the voicebox (larynx). Your doctor passes a thin flexible tube called an naso-endoscope through your nose, down to your voice box"
			},
			{
				"id": "102",
				"procedure": "Nephrectomy",
				"description": "Nephrectomy is the surgical removal of a kidney. The procedure is done to treat kidney cancer as well as other kidney diseases and injuries.Nephrectomy is also done to remove a healthy kidney from a donor (either living or deceased) for transplantation."
			},
			{
				"id": "103",
				"procedure": "Nerve decompression",
				"description": "The aim of surgical treatment is to simply release the pressure and stress on the ulnar nerve as it passes through the cubital tunnel. This procedure is called nerve decompression or transposition. With this technique, the surgeon creates a brand new tunnel where the nerve is in a more comfortable position."
			},
			{
				"id": "104",
				"procedure": "Nerve decompression of spinal cord",
				"description": "Decompression surgery (laminectomy) opens the bony canals through which thespinal cord and nerves pass, creating more space for them to move freely. Narrowing / stenosis of the spinal and nerve root canals can cause chronic pain, numbness, and muscle weakness in your arms or legs."
			},
			{
				"id": "105",
				"procedure": "Orchidectomy",
				"description": "Orchiectomy is a surgical procedure in which one or both testicles are removed. The surgery is typically performed as treatment for testicular cancer, in some cases of testicular torsion, and is sometimes used in the management of advanced prostate cancer."
			},
			{
				"id": "106",
				"procedure": "Orchidopexy",
				"description": "Orchiopexy is a surgery to move an undescended testicle into the scrotum and permanently fix it there. Orchiopexy typically also describes the surgery used to resolve testicular torsion."
			},
			{
				"id": "107",
				"procedure": "Osteotomy",
				"description": "An osteotomy is a surgical operation whereby a bone is cut to shorten or lengthen it or to change its alignment. It is sometimes performed to correct a hallux valgus, or to straighten a bone that has healed crookedly following a fracture. "
			},
			{
				"id": "108",
				"procedure": "Parathyroidectomy",
				"description": "Parathyroidectomy is the surgical removal of one or more of the four parathyroid glands. This procedure is used to remove an adenoma or hyperplasia of these glands when they are producing excessive parathyroid hormone: hyperparathyroidism"
			},
			{
				"id": "109",
				"procedure": "Parotidectomy/submandibular gland - excision of",
				"description": "A parotidectomy is the surgical excision of the parotid gland, the major and largest of the salivary glands. The procedure is most typically performed due to neoplasms, which are growths of rapidly and abnormally dividing cells. Neoplasms can be benign or malignant."
			},
			{
				"id": "110",
				"procedure": "Pectus surgery",
				"description": "Pectus excavatum repair is surgery to correct pectus excavatum. This is a congenital (present at birth) deformity of the front of the chest wall that causes a sunken breastbone (sternum) and ribs. Pectus excavatum is also called funnel or sunken chest."
			},
			{
				"id": "111",
				"procedure": "Pedicle screw fusion",
				"description": "The pedicle screw, which is sometimes used as an adjunct to spinal fusion surgery, provides a means of gripping a spinal segment. "
			},
			{
				"id": "112",
				"procedure": "Pharyngoplasty",
				"description": "Pharyngoplasty is an operation to change the shape and function of the soft palate and the area around it called the pharynx. Some children whose cleft involves the palate develop a 'nasal' tone to their voice, because the soft palate is too short and air escapes through their nose when speaking."
			},
			{
				"id": "113",
				"procedure": "Pharynx - excision of",
				"description": "A pharyngectomy is the removal of part of the pharynx. ... In many cases, a pharyngectomy is done as part of removal of another tumor that extends into thepharynx. For example, a total laryngopharyngectomy is the removal of the entire larynx as well as the entire hypopharynx (along with variable parts of theoropharynx)."
			},
			{
				"id": "114",
				"procedure": "Pilonidal sinus surgery",
				"description": "An infected pilonidal cyst or abscess requires surgical drainage. It will not heal with antibiotic medicines. If you continue to have infections, the pilonidal cyst can be removed."
			},
			{
				"id": "115",
				"procedure": "Pleurodesis",
				"description": "Pleurodesis is a procedure that uses medicine to adhere your lung to your chest wall. It seals up the space between the outer lining of your lung and chest wall (pleural cavity) to prevent fluid or air from continually building up around your lungs"
			},
			{
				"id": "116",
				"procedure": "Posterior fossa decompression",
				"description": "Posterior fossa decompression is a surgical procedure that removes bone at the back of the skull and spine to widen the space for the tonsils and brainstem"
			},
			{
				"id": "117",
				"procedure": "Probing of naso-lacrimal duct",
				"description": "Probing of the nasolacrimal duct is done to open the valve between the nasolacrimal duct and the nose. The doctor first dilates (widens the opening) in the puncta (the two little holes in the eyelid) with a tiny metal dilating tool."
			},
			{
				"id": "118",
				"procedure": "Procedure for strabismus (squint repair)",
				"description": "Squint surgery is a very common eye operation. It usually involves tightening or moving one or more of the outside eye muscles which move the eye to change the eye position."
			},
			{
				"id": "119",
				"procedure": "Prostate biopsy",
				"description": "A prostate biopsy is a procedure to remove samples of suspicious tissue from the prostate. The prostate is a small, walnut-shaped gland in men that produces fluid that nourishes and transports sperm. During aprostate biopsy a needle is used to collect a number of tissue samples from your prostate gland."
			},
			{
				"id": "120",
				"procedure": "Pterygium - excision of",
				"description": "Pterygium excision with conjunctival autograft. Pterygia are wing-shaped folds of conjunctiva and fibrovascular tissue that invade the superficial corneal layers. ... Here, a visually-significant pterygium is removed and a conjunctival autograft is placed in the area of resection to reduce the risk of recurrence"
			},
			{
				"id": "121",
				"procedure": "Ptosis - repair of",
				"description": "Ptosis is defined as drooping of the upper lid, partly covering the pupil. ... Some patients with ptosis also have excess skin and fat in the upper lid, which can be corrected at the time of ptosis repair. Ptosis repair is usually performed by an ophthalmologist who specializes in eyelid surgery."
			},
			{
				"id": "122",
				"procedure": "Pyeloplasty/correction of ureteropelvic junction",
				"description": "Pyeloplasty is surgery used to correct a condition calledureteropelvic junction (UPJ) obstruction. UPJ obstruction blocks the flow of urine out of the kidney into the ureter (the tube attaching the kidney to the bladder)."
			},
			{
				"id": "123",
				"procedure": "Pyogenic granuloma - removal of",
				"description": "Nonmedical treatment of pyogenic granulomas (PGs) most commonly consists of shave removal and electrocautery or surgical excision with primary closure.Removal of the lesion is indicated for bleeding due to trauma, discomfort, cosmetic distress, and diagnostic biopsy. The lesion may be completely removed during biopsy"
			},
			{
				"id": "124",
				"procedure": "Radical neck dissection",
				"description": "The neck dissection is a surgical procedure for control of neck lymph node metastasis from squamous cell carcinoma of the head and neck. The aim of the procedure is to remove lymph nodes from one side of the neck into which cancer cells may have migrated."
			},
			{
				"id": "125",
				"procedure": "Repair of obstructing hiatus hernia",
				"description": "Surgery is not common and is usually only necessary to repair large hiatus herniasor hernias in people who haven't been helped by medication or who are getting complications from their hernia, such as obstruction of the oesophagus, severe pain, or bleeding. Surgery is very rarely required for sliding hiatus hernias."
			},
			{
				"id": "126",
				"procedure": "Replacement of aortic aneurysm with bifurcation graft",
				"description": "Treatment by resection of the aortic bifurcation and grafting is a very recent addition to the methods of management of abdominal aortic aneurysms"
			},
			{
				"id": "127",
				"procedure": "Removal of intracranial lesion",
				"description": "A lesionectomy is an operation to remove a lesion -- a damaged or abnormally functioning area -- in the brain. Brain lesions include tumors, scars from a headinjury or infection, abnormal blood vessels, and hematomas (a swollen area filled with blood)"
			},
			{
				"id": "128",
				"procedure": "Rhinoplasty",
				"description": "Rhinoplasty is surgery to repair or reshape the nose. This may be performed for cosmetic reasons to improve the appearance and proportion of the nose, and improve a person's self-confidence. Plastic surgery of the nose is also used to correct breathing problems caused by structural abnormalities in the nose."
			},
			{
				"id": "129",
				"procedure": "Rotator cuff - repair of",
				"description": "Rotator cuff repair is surgery to repair a torn tendon in the shoulder. The procedure can be done with a large (open) incision or with shoulder arthroscopy, which uses smaller incisions."
			},
			{
				"id": "130",
				"procedure": "Salpingo-oophorectomy/oophorectomy/ovarian cystectomy",
				"description": "Oophorectomy is the surgical removal of an ovary or ovaries. The surgery is also called ovariectomy, but this term is mostly used in reference to animals, e.g. the surgical removal of ovaries from laboratory animals."
			},
			{
				"id": "131",
				"procedure": "Scar revision",
				"description": "Scar revision is surgery to improve or reduce the appearance of scars. It also restores function, and corrects skin changes (disfigurement)"
			},
			{
				"id": "132",
				"procedure": "Shoulder joint replacement",
				"description": "Shoulder replacement is a surgical procedure in which all or part of the glenohumeral joint is replaced by a prosthetic implant. Such joint replacement surgery generally is conducted to relieve arthritis pain or fix severe physical joint damage"
			},
			{
				"id": "133",
				"procedure": "Shoulder reconstruction",
				"description": "Shoulder reconstruction is a surgical procedure performed in patients withshoulder instability to improve stability, restore the function and prevent recurrent dislocations of the shoulder joint."
			},
			{
				"id": "134",
				"procedure": "Skin lesion - excision of",
				"description": "Skin Lesion Excision. Skin lesion excision is a procedure in which the surgeon removes a cancerous skin lesion and an area of surrounding tissue called the margin. ... Many types of benign skin growths may look like malignant tumors and are removed for a biopsy."
			},
			{
				"id": "135",
				"procedure": "Stapedectomy",
				"description": "A stapedectomy is a surgical procedure of the middle ear performed in order to improve hearing. If the stapes footplate is fixed in position, rather than being normally mobile, then a conductive hearing loss results. There are two major causes of stapes fixation."
			},
			{
				"id": "136",
				"procedure": "Stone/s urinary tract - removal of",
				"description": "Surgical removal is sometimes needed for larger stones that are causing an obstruction. Endoscopic surgery is usually used to remove struvite stones. Antibiotics are not helpful in treating urinary tract infections until the infection stonesare completely removed."
			},
			{
				"id": "137",
				"procedure": "Stress incontinence surgery",
				"description": "Vaginal sling procedures are types of surgeries that help control stress urinary incontinence. This is urine leakage that happens when you laugh, cough, sneeze, lift things, or exercise. The procedure helps close your urethra and bladder neck. The urethra is the tube that carries urine from the bladder to the outside."
			},
			{
				"id": "138",
				"procedure": "Sub-mucosal resection",
				"description": " Submucosal resection (SMR) of the nose is a surgical procedure used to treat a deviated septum. This procedure is also called a septoplasty"
			},
			{
				"id": "139",
				"procedure": "Tendon release",
				"description": "Tendon release, also known as tenotomy, is a surgical procedure that involves cutting through or disconnecting a tendon to allow for a greater range of movement. The procedure is used to relieve tight or shortened muscles. In some cases, thetendon is re-routed to maintain muscle function."
			},
			{
				"id": "140",
				"procedure": "Tenotomy of hip",
				"description": "Tenotomy is performed to lengthen the tendon, allowing the muscle to return to its normal length and allowing the joint to straighten. ...Tenotomy is also performed to prevent or correct subluxation, especially of the hip joint in cerebral palsy."
			},
			{
				"id": "141",
				"procedure": "Thyroglossal remnant - removal of",
				"description": "The treatment of thyroglossal duct remnants, whether cyst, sinus, or fistula, is complete surgical excision using the Sistrunk operation. This consists of a blockexcision of the entire thyroglossal tract to the foramen cecum, as well as removalof the central 1 to 2 cm of the hyoid bone."
			},
			{
				"id": "142",
				"procedure": "Thyroidectomy/hemi-thyroidectomy",
				"description": "A thyroidectomy is an operation that involves the surgical removal of all or part of the thyroid gland. General, Endocrine or Head and Neck Surgeons often perform a thyroidectomy when a patient has thyroid cancer or some other condition of the thyroid gland (such as hyperthyroidism) or goiter."
			},
			{
				"id": "143",
				"procedure": "Toenail surgery",
				"description": "The initial surgical approach is typically a partial avulsion of the nail plate known as a wedge resection or a complete removal of the toenail. If the ingrown toenailrecurs despite this treatment, destruction of the germinal matrix with phenol is recommended. Antibiotics are not needed if surgery is performed."
			},
			{
				"id": "144",
				"procedure": "Trabeculectomy",
				"description": "Trabeculectomy is a surgical operation which lowers the intraocular pressure inside the eye (IOP) in patients with glaucoma. This is achieved by making a small hole in the eye wall (sclera), covered by a thin trap-door in the sclera."
			},
			{
				"id": "145",
				"procedure": "Trigger finger/thumb release",
				"description": "The surgical procedure for trigger finger is called “tenolysis” or “trigger finger release.” The goal of the procedure is to release the A1 pulley that is blocking tendon movement so the flexor tendon can glide more easily through the tendon sheath."
			},
			{
				"id": "146",
				"procedure": "Turbinectomy",
				"description": "Turbinectomy is a procedure in which some or all of the turbinate bones in the nasal passage are removed, generally to relieve nasal obstruction. In most cases, turbinate hypertrophy is accompanied by some septum deviation, so the surgery is done along with septoplasty"
			},
			{
				"id": "147",
				"procedure": "Untethering of spinal cord",
				"description": "Tethered spinal cord syndrome is a neurologic disorder caused by tissue attachments that limit the movement of the spinal cord within the spinal column. ... It is estimated that 20-50% of children with spina bifida defects that are repaired shortly after birth will require surgery at some point to untether the spinal cord."
			},
			{
				"id": "148",
				"procedure": "Ureteric - reimplantation",
				"description": "Ureteral reimplantation is a surgery to fix the tubes that connect the bladder to the kidneys"
			},
			{
				"id": "149",
				"procedure": "Ureteric stent - insertion of",
				"description": "A ureteral stent, or ureteric stent, is a thin tube inserted into the ureterto prevent or treat obstruction of the urine flow from the kidney. The length of the stents used in adult patients varies between 24 and 30 cm. ... The stent is usually inserted with the aid of a cystoscope."
			},
			{
				"id": "150",
				"procedure": "Urethra - dilatation of",
				"description": "Meatal/urethral dilatation. Dilatation is where the urethra or the meatus (external opening) are stretched under local or general anaesthetic. After lubricating theurethra with local anaesthetic gel, we stretch the urethra using dilators (plastic or metal, pictured) of increasing size."
			},
			{
				"id": "151",
				"procedure": "Vaginal repair - anterior/posterior",
				"description": "Anterior repair is a surgical procedure to repair or reinforce the weakened layers between the bladder and the vagina. The aim of the surgery is to relieve the symptoms of vaginal bulging/ laxity and to improve bladder function, without interfering with sexual function."
			},
			{
				"id": "152",
				"procedure": "Vitrectomy (including buckling/cryotherapy)",
				"description": "Vitrectomy is surgery to remove some or all of the vitreous humor from the eye. Anterior vitrectomy entails removing small portions of the vitreous humor from the front structures of the eye—often because these are tangled in an intraocular lens or other structures."
			}
		];
			
		this.current_step = 1;
		this.selected_procedure = null;
		
		for(var i = 0; i < this.procedureList.length; i++){
			this.procedureList[i].shown = true;
			this.procedureList[i].selected = false;
		}
		
		if(objConfig){
			this.config = objConfig;
			this.templateHTML = '<strong>Template HTML not loaded.';
			this.templateHTML = this.getHTML();
			
		} else {
			console.error('no config supplied to surgical procedure search');
		}
		
		
		
		
	}
	
	filterList(){
		var strSearch = this.searchBox.value;
		var arrTerms = strSearch.split(' ');
		
		
		function isMatch(objItem, arrSearchTerms){
			if(arrSearchTerms.length > 1 || arrSearchTerms[0].length > 2){
				for(var i = 0; i < arrSearchTerms.length; i++){
					var currTerm = arrSearchTerms[i].toLowerCase();
					if(currTerm.length > 2){
						if(objItem.procedure.toLowerCase().indexOf(currTerm) >= 0 ||
						   objItem.description.toLowerCase().indexOf(currTerm) >= 0){
							return true;
						}
					}
				}
				
				return false;
			}
			
			return true;
		}
		
		for(var i = 0; i < this.procedureList.length; i++){
			
			var currProc = this.procedureList[i];
			currProc.shown = isMatch(currProc, arrTerms);

		}
		
		this.populateProcedureTable();
	}
	
	getHTML() {
		var handleResponse = function(data){
			this.templateHTML = data.currentTarget.responseText;
			
			this.init();
		}
		
		var strBaseURL = '/res/components/';
		var strTemplateURL = strBaseURL + this.componentName + '.html';
		
		var oReq = new XMLHttpRequest();
		oReq.addEventListener("load", handleResponse.bind(this) );
		oReq.open("GET", strTemplateURL);
		oReq.send();
	}
	
	init() {
		if(this.config.parent){
			this.config.parent.innerHTML = this.templateHTML;
		}
		
		this.sortButton = this.config.parent.querySelector('i#procedure-table-sort');
		if(this.sortButton){
			this.sortButton.addEventListener('click', function(evt){
				evt.stopImmediatePropagation();
				this.sortTable()
			}.bind(this));
		}
		
		this.searchBox = this.config.parent.querySelector('input#procedure-search');

		if(this.searchBox){
			this.searchBox.addEventListener('keydown', function(evt){
				evt.stopImmediatePropagation();
				window.setTimeout(this.filterList.bind(this),50);
			}.bind(this));
		}
		
		this.populateProcedureTable();
		
		this.outputs = {
			proc_name: this.config.parent.querySelector('.progress-steps > .step-1 > .step-body'),
			child_adult: this.config.parent.querySelector('.progress-steps > .step-2 > .step-body'),
			hospital_name: this.config.parent.querySelector('.progress-steps > .step-3 > .step-body'),
		};
		
		this.buttons = {
			step1: {
				back: this.config.parent.querySelector('.step-1-body td button:first-child'),
				next: this.config.parent.querySelector('.step-1-body td button:last-child'),
			},
			step2: {
				back: this.config.parent.querySelector('.step-2-body td button:first-child'),
				next: this.config.parent.querySelector('.step-2-body td button:last-child'),
			},
			step3: {
				back: this.config.parent.querySelector('.step-3-body td button:first-child'),
				next: this.config.parent.querySelector('.step-3-body td button:last-child'),
			}
		};
		
		this.steps = {
			step1: this.config.parent.querySelector('.step-1-body'),
			step2: this.config.parent.querySelector('.step-2-body'),
			step3: this.config.parent.querySelector('.step-3-body')
		};
		this.buttons.step1.next.addEventListener('click', function(){
			this.moveStep(2);
		}.bind(this));
		
		this.buttons.step2.back.addEventListener('click', function(){
			this.moveStep(1);
		}.bind(this));
		
		this.buttons.step2.next.addEventListener('click', function(){
			this.moveStep(3);
		}.bind(this));
		
		this.buttons.step3.back.addEventListener('click', function(){
			this.moveStep(2);
		}.bind(this));
		
		
	}
	
	populateProcedureTable( ){
		if(this.config.parent){
			var target = this.config.parent.querySelector('tbody#procedure_list');
			if(target){
				target.innerHTML = '';
				
				var highlightMe = function( evt ){

					evt.stopImmediatePropagation();
					
					var arrSelectedIds = [];
					
					var objRow = evt.currentTarget;
					var procId = objRow.getAttribute('data-id');
					for(var i = 0; i < this.procedureList.length; i++){
						if(this.procedureList[i].id == procId){
							if(this.procedureList[i].selected){
								this.procedureList[i].selected = false;
								objRow.classList.remove('selected-procedure');
							} else {
								this.procedureList[i].selected = true;
								objRow.classList.add('selected-procedure');
							}
							
							
						}
						
						if(this.procedureList[i].selected){
							arrSelectedIds.push(this.procedureList[i].id);
							this.selected_procedure = this.procedureList[i];
							this.outputs.proc_name.innerHTML = this.procedureList[i].procedure;
						}
						
						
						
					}
					
					this.config.parent.setAttribute('data-selected-ids', arrSelectedIds.join());
				};
				
				for(var i = 0; i < this.procedureList.length; i++){
					var objProc = this.procedureList[i];
					
					if(objProc.shown){
						var elRow = document.createElement('tr');
						elRow.id = 'proc_' + objProc.id;
						elRow.setAttribute('data-id', objProc.id);
						
						if(objProc.selected){
							elRow.classList.add('selected-procedure');
						} else {
							elRow.classList.remove('selected-procedure');
						}
						
						elRow.addEventListener('click', highlightMe.bind(this));

						var elNameCell = document.createElement('td');
						elNameCell.innerHTML = objProc.procedure;

						var elDescCell = document.createElement('td');
						elDescCell.innerHTML = objProc.description;

						elRow.appendChild(elNameCell);
						elRow.appendChild(elDescCell);
						target.appendChild(elRow);
					}
				}
			
				
				
			}
		}
		
		
		
		
	}
	
	sortList(strType){
		this.procedureList.sort(function(itemA, itemB){
			switch(strType) {
				case "alpha-desc" : {
					if(itemA.procedure > itemB.procedure){
						return -1;
					}
					
					if(itemA.procedure < itemB.procedure){
						return 1;
					}
					
					if(itemA.procedure == itemB.procedure){
						return 0;
					}
					
					break;
				}
					
				default : {
					if(itemA.procedure > itemB.procedure){
						return 1;
					}
					
					if(itemA.procedure < itemB.procedure){
						return -1;
					}
					
					if(itemA.procedure == itemB.procedure){
						return 0;
					}
					
					break;
				}
			}
		});
		this.populateProcedureTable( );
	}
	
	sortTable(){
		if(this.sortButton){
			var strCurrSort = this.sortButton.getAttribute('data-state') || 'alpha-asc';
			var strNextSort = strCurrSort;
			
			if(strCurrSort == 'alpha-asc'){
				strNextSort = 'alpha-desc';
			}
			
			if(strCurrSort == 'alpha-desc'){
				strNextSort = 'alpha-asc';
			}
			
			this.sortButton.classList.remove('icon-sort-' + strCurrSort);
			this.sortButton.classList.add('icon-sort-' + strNextSort);
			this.sortButton.setAttribute('data-state', strNextSort);
			
			this.sortList(strNextSort);
		}
	}
	
	moveStep(intTargetStep){
		if(intTargetStep != this.current_step){
			if(intTargetStep == 1){
				
				this.steps.step2.classList.remove('current-step');
				this.steps.step3.classList.remove('current-step');
				this.steps.step1.classList.add('current-step');
				this.config.parent.querySelector('.progress-steps .step-2').classList.remove('current-step');
				this.config.parent.querySelector('.progress-steps .step-3').classList.remove('current-step');
				this.config.parent.querySelector('.progress-steps .step-1').classList.add('current-step');
				this.current_step = 1;
			}
			if(intTargetStep == 2){
				this.steps.step1.classList.remove('current-step');
				this.steps.step3.classList.remove('current-step');
				this.steps.step2.classList.add('current-step');
				this.config.parent.querySelector('.progress-steps .step-1').classList.remove('current-step');
				this.config.parent.querySelector('.progress-steps .step-3').classList.remove('current-step');
				this.config.parent.querySelector('.progress-steps .step-2').classList.add('current-step');
				this.current_step = 2;
			}
			if(intTargetStep == 3){
				this.steps.step2.classList.remove('current-step');
				this.steps.step1.classList.remove('current-step');
				this.steps.step3.classList.add('current-step');
				this.config.parent.querySelector('.progress-steps .step-2').classList.remove('current-step');
				this.config.parent.querySelector('.progress-steps .step-1').classList.remove('current-step');
				this.config.parent.querySelector('.progress-steps .step-3').classList.add('current-step');
				this.current_step = 3;
			}
		}
	}
	
}










