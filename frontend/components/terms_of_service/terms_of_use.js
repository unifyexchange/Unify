const intro =
`PLEASE READ THESE TERMS OF SERVICE CAREFULLY. THESE TERMS INCLUDE A MANDATORY
ARBITRATION PROVISION AND CLASS ACTION WAIVER PROVISION, WHICH AFFECT YOUR RIGHTS ABOUT
HOW TO RESOLVE ANY DISPUTE WITH UNIFY EXCHANGE, LLC BY ACCESSING OR USING OUR WEBSITE,
APPLICATIONS OR OTHER PRODUCTS OR SERVICES (TOGETHER, THE UNIFY EXCHANGE, LLC SERVICE), YOU
AGREE TO BE BOUND BY ALL TERMS DESCRIBED HEREIN AND ALL TERMS INCORPORATED BY REFERENCE
("TERMS"). IF YOU DO NOT AGREE TO ALL OF THESE TERMS, DO NOT ACCESS OR USE THE UNIFY
EXCHANGE, LLC SERVICE. These Terms apply to your access to and use of the Unify Exchange, LLC Service
provided by Unify Exchange, LLC ("Unify Exchange," "we" and: us"). Additional terms (including, but not
limited to, the terms of social media services and third-party payment processors) may apply to particular
functionalities and features related to the Unify Exchange, LLC Service.`;

const version = 1.0;

const termsOfUse = [
  {
    no: 1,
    title: "Eligibility",
    description:
`By using the Unify Exchange, LLC Services, you represent and warrant that (a) all registration information you submit is truthful and accurate; (b) you will maintain the accuracy of such information; and (c) you are affiliated with the Sponsor Organization and have been notified by the Sponsor Organization of your eligibility to participate in Unify Exchange, LLC Services.`,
    newLine: true,
    subDescription: false,
    break: true,
    subItem: false,
  },
  {
    no: 2,
    title: "Term",
    description:
`This Agreement, and any posted revision to this Agreement, shall remain in full force and effect while you use the Unify Exchange, LLC Services. You may terminate your usage at any time, for any reason. Unify Exchange, LLC may terminate your User ID at any time, for any or no reason, with or without prior notice or explanation, and without liability.`,
    newLine: true,
    subDescription: false,
    break: true,
    subItem: false,
  },
  {
    no: 3,
    title: "Password",
    description:
`When you sign up to become a User, you will also be asked to choose a password. You are entirely responsible for maintaining the confidentiality of your password. You agree not to use the User ID or password of another User at any time or to disclose your password to any third party. You agree to notify Unify Exchange, LLC immediately if you suspect any unauthorized use of your User ID or password.`,
    subDescription: false,
    newLine: true,
    break: false,
  },
  {
    no: 4,
    title: "Description of the Unify Exchange, LLC Service",
    description:
`The Unify Exchange, LLC Service provides a simple and efficient marketplace for buying, selling, and sharing of goods and services locally within the university community. The Unify Exchange, LLC Service creates a place for buyers and sellers to connect. To participate in the Unify Exchange, LLC Service, a seller takes a photograph of a good he or she wishes to sell and then posts it to the Unify Exchange, LLC Service with an asking price to allow a potential local buyer to view the good and make an offer. The Unify Exchange, LLC Service includes an in-app messaging featureG that allows a buyer and a seller to discuss details of the good and set up an in-person meeting to finalize the purchase.`,
    break: false,
    newLine: true,
    subDescription: true,
    subHeader: "A. General.",
    subItem: false,
  },

  {
    no: "",
    title: "",
    description:
`A buyer may, by agreement with the seller, elect to make payment by cash, check or other payment method accepted by the seller. Such payments are made directly between the buyer and the seller when they meet in person to complete their purchase and sale transaction, pursuant to terms they determine. Unify Exchange, LLC is not a party to such transactions, and does not facilitate such transactions, refunds or returns in any manner.`,
    break: false,
    subDescription: true,
    subItem: true,
    subHeader: "B. Payment Options.",
    newLine: true,
  },

  {
    no: "",
    title: "",
    description:
`Regardless of the payment method chosen, ALL PURCHASES ARE FINAL, AND THERE ARE NO REFUNDS, UNLESS YOU AND THE SELLER OTHERWISE AGREE AND MAKE ARRANGEMENTS FOR A REFUND, AND/OR A POLICE REPORT IS FILED AND AN ACTIVE INVESTIGATION IS OPEN. Unify Exchange, LLC does not facilitate refunds.`,
    break: false,
    subDescription: false,
    subItem: true,
    newLine: true,
    subHeader: "",
  },

  {
    no: "",
    title: "",
    description:
`It is your responsibility to determine what, if any, taxes apply to each transaction you complete via the Unify Exchange, LLC Service, including, for example, sales, use, value added, and similar taxes. It is also your responsibility to withhold, collect, report and remit the correct taxes to the appropriate tax authorities. Unify Exchange, LLC is not responsible for withholding, collecting, reporting, or remitting any sales, use, value added, or similar tax arising from any transaction you complete via the Unify Exchange, LLC Service.`,
    break: false,
    subDescription: false,
    subItem: true,
    newLine: true,
    subHeader: "",
  },
  {
    no: 5,
    title: "Use by Users",
    description:
`The Unify Exchange, LLC Services are for the personal use of Users. Users may not utilize Unify Exchange, LLC for commercial endeavours. Illegal and/or unauthorized use of the Unify Exchange, LLC Services, including collecting User email addresses by electronic or other means for the purpose of sending unsolicited email or unauthorized framing of or linking to the Unify Exchange, LLC website, or employing third party promotional sites or software to promote profiles for money, is prohibited. Commercial advertisements, affiliate links, and other forms of unauthorized solicitation may be removed from User profiles without notice or explanation and may result in termination of the User ID. Unify Exchange, LLC reserves the right to take appropriate legal action for any illegal or unauthorized use of the Unify Exchange, LLC Services.`,
    break: true,
    subDescription: false,
    subItem: true,
    newLine: true,
    subHeader: "",
  },
  {
    no: 6,
    title: "Proprietary Rights in Content on Unify Exchange, LLC",
    description:
`Unify Exchange, LLC does not claim any ownership rights in the text, files, images, photos, video, sounds, musical works, works of authorship, applications, or any other materials (collectively, "Content") that you post on Unify Exchange. After posting your Content to Unify Exchange, you continue to retain any such rights that you may have in your Content, subject to the limited license herein. By displaying or publishing ("posting") any Content on or through the Unify Exchange, LLC Services, you hereby grant to Unify Exchange, LLC a limited license to use, modify, delete from, add to, publicly perform, publicly display, reproduce, and distribute such Content on the Unify Exchange, LLC Services, set up specifically for the use of your organization or institution, including without limitation distributing part or all of the Unify Exchange, LLC website in any media formats and through any media channels. After you remove your Content from Unify Exchange, LLC we will cease distribution as soon as practicable, and at such time when distribution ceases, the license will terminate.`,
    break: true,
    subDescription: false,
    subItem: false,
    newLine: true,
    subHeader: "",
  },
  {
    no: "",
    title: "",
    description:
`The license you grant to Unify Exchange, LLC is non-exclusive, fully paid and royalty-free, sublicensable, and worldwide.`,
    break: true,
    subDescription: true,
    subItem: true,
    newLine: true,
    subHeader: "6.2",
  },
  {
    no: "",
    title: "",
    description:
`You represent and warrant that: (i) you own the Content posted by you on Unify Exchange, LLC or otherwise have the right to grant the license set forth in this Section 5, and (ii) the posting of your Content on Unify Exchange, LLC does not violate the privacy rights, publicity rights, copyrights, contract rights or any other rights of any person or entity. You agree to pay for all royalties, fees, and any other monies owing any person or entity by reason of any Content posted by you on Unify Exchange.`,
    break: true,
    subDescription: true,
    subItem: true,
    newLine: true,
    subHeader: "6.3",
  },
  {
    no: "",
    title: "",
    description:
`The Unify Exchange, LLC Services contain Content of Unify Exchange, LLC ("Unify Exchange, LLC Content"). Unify Exchange, LLC Content is protected by copyright, trademark, patent, trade secret and other laws, and Unify Exchange, LLC owns and retains all rights in the Unify Exchange, LLC Content and the Unify Exchange, LLC Services. Unify Exchange, LLC hereby grants you a limited, revocable, non-sublicensable license to reproduce and display the Unify Exchange, LLC Content (excluding any software code) solely for your personal use in connection with viewing the Unify Exchange, LLC website and using the Unify Exchange, LLC Services.`,
    break: true,
    subDescription: true,
    subItem: true,
    newLine: true,
    subHeader: "6.4",
  },
  {
    no: "",
    title: "",
    description:
`The Unify Exchange, LLC Services contain Content of Users and other Unify Exchange, LLC licensors. Except as provided within this Agreement, you may not copy, modify, translate, publish, broadcast, transmit, distribute, perform, display, or sell any Content appearing on Unify Exchange.`,
    break: true,
    subDescription: true,
    subItem: true,
    newLine: true,
    subHeader: "6.5",
  },
  {
    no: "",
    title: "",
    description:
`Unify Exchange, LLC performs technical functions necessary to offer the Unify Exchange, LLC Services, including but not limited to transcoding and/or reformatting Content to allow its use throughout the Unify Exchange, LLC Services.`,
    break: true,
    subDescription: true,
    subItem: true,
    newLine: true,
    subHeader: "6.6",
  },
  {
    no: "7.",
    title: "Content Posted",
    description:
`Unify Exchange, LLC may reject, refuse to post or delete any Content for any or no reason, including Content that in the sole judgment of Unify Exchange, LLC violates this Agreement, or which may be offensive, illegal or violate the rights of any person or entity, or harm or threaten the safety of any person or entity. Unify Exchange, LLC and Sponsor Organization assume no responsibility for monitoring the Unify Exchange, LLC Services for inappropriate Content or conduct. If at any time Unify Exchange, LLC chooses, in its sole discretion, to monitor the Unify Exchange, LLC Services, Unify Exchange, LLC nonetheless assumes no responsibility for the Content, no obligation to modify or remove any inappropriate Content, and no responsibility for the conduct of the User submitting any such Content. 8.2 You are solely responsible for the Content that you post on Unify Exchange, and any material or information that you transmit to other Users and for your interactions with other Users.`,
    break: true,
    subDescription: true,
    subItem: true,
    newLine: true,
    subHeader: "7.1",
  },
  {
    no: "",
    title: "",
    description:
`You are solely responsible for the Content that you post on Unify Exchange, and any material or information that you transmit to other Users and for your interactions with other Users.`,
    break: true,
    subDescription: true,
    subItem: true,
    newLine: true,
    subHeader: "7.2",
  },
  {
    no: "8.",
    title: "Content/Activity Prohibited",
    description:
`The following are examples of the kind of Content that is illegal or prohibited to post on Unify Exchange. Unify Exchange, LLC reserves the right to investigate and take appropriate legal action against anyone who, in Unify Exchange, LLC 's sole discretion, violates this provision, including without limitation, removing the offending Content from Unify Exchange, LLC and terminating the User ID of such violators. Prohibited Content includes, but is not limited to, Content that, in the sole discretion of Unify Exchange, LLC : 9.1 is patently offensive and promotes racism, bigotry, hatred or physical harm of any kind against any group or individual; 9.2 harasses or advocates harassment of another person;9.3 exploits people in a sexual or violent manner; 9.4 contains nudity, excessive violence, or offensive subject matter or contains a link to an adult website; 9.5 solicits personal information from anyone under 18; 9.6 publicly posts information that poses or creates a privacy or security risk to any person; 9.7 constitutes or promotes information that you know is false or misleading or promotes illegal activities or conduct that is abusive, threatening, obscene, defamatory or libellous; 9.8 constitutes or promotes an illegal or unauthorized copy of another person's copyrighted work, such as providing pirated computer programs or links to them, providing information to circumvent manufacturer-installed copy-protect devices, or providing pirated music or movies or links to pirated music or movie files; 9.9 involves the transmission of "junk mail," "chain letters," or unsolicited mass mailing, instant messaging, "spimming," or "spamming"; 9.10 contains restricted or password only access pages or hidden pages or images (those not linked to or from another accessible page); 9.11 furthers or promotes any criminal activity or enterprise or provides instructional information about illegal activities including, but not limited to making or buying illegal weapons, violating someone's privacy, or providing or creating computer viruses; 9.12 solicits passwords or personal identifying information for commercial or unlawful purposes from other Users; 9.13 involves commercial activities and/or sales such as contests, sweepstakes, advertising, or pyramid schemes; 9.14 includes a photograph or video of another person that you have posted without that person's consent; 9.15 violates the privacy rights, publicity rights, copyrights, trademark rights, contract rights or any other rights of any person. The following are examples of the kind of activity that is illegal or prohibited on the Unify Exchange, LLC website and through your use of the Unify Exchange, LLC Services. Unify Exchange, LLC reserves the right to investigate and take appropriate legal action against anyone who, in Unify Exchange, LLC sole discretion, violates this provision, including without limitation, reporting you to law enforcement authorities. Prohibited activity includes, but is not limited to: 9.16 criminal or tortuous activity, including child pornography, fraud, trafficking in obscene material, drug dealing, gambling, harassment, stalking, spamming, spimming, sending of viruses or other harmful files, copyright infringement, patent infringement, or theft of trade secrets; 9.17 advertising to, or solicitation of, any User to buy or sell any products or services through the unauthorized or impermissible use of the Unify Exchange, LLC  Services. You may not transmit any chain letters or junk email to other Users. In order to protect our Users from such advertising or solicitation, Unify Exchange, LLC  reserves the right to restrict the number of messages which a User may send to other Users in any 24-hour period to a number which Unify Exchange, LLC  deems appropriate in its sole discretion; 9.18 circumventing or modifying, attempting to circumvent or modify, or encouraging or assisting any other person in circumventing or modifying any security technology or software that is part of the Unify Exchange, LLC  Services; 9.19 activity that involves the use of viruses, bots, worms, or any other computer code, files or programs that interrupt, destroy or limit the functionality of any computer software or hardware, or otherwise permit the unauthorized use of or access to a computer or a computer network; 9.20 covering or obscuring the banner advertisements on your personal profile page, or any Unify Exchange, LLC  page via HTML/CSS or any other means; 9.21interfering with, disrupting, or creating an undue burden on the Unify Exchange, LLC  Services or the networks or services connected to the Unify Exchange, LLC  Services; 9.22 impersonating or attempting to impersonate another User, person or entity; 9.23 selling or otherwise transferring your User ID or password; 9.24 using any information obtained from the Unify Exchange, LLC  Services in order to harass, abuse, or harm another person or entity, or attempting to do the same`,
    break: true,
    subDescription: true,
    subItem: false,
    newLine: true,
    subHeader: "",
  },
  {
    no: "",
    title: "",
    description:
`When accessing or using the Unify Exchange, LLC Service, you agree that you will not violate any law, contract, intellectual property or other third-party right or commit a tort. Without limiting the generality of the foregoing, you agree that you will not do, and will not permit any third party to do, any of the following:`,
    break: true,
    subDescription: true,
    subItem: true,
    newLine: true,
    subHeader: "9. Acceptable Use",
  },
  {
    no: "",
    title: "",
    description:
`1.	-Engage in any unauthorized use of the Unify Exchange, LLC Service (including, without limitation, political campaigning, advertising, or marketing);`,
    break: false,
    subDescription: true,
    subItem: false,
    newLine: true,
    subHeader: "",
  },
  {
    no: "",
    title: "",
    description:
`2.	-Transmit or otherwise make available any content that: (1) you do not have the right to provide or transmit using the Unify Exchange, LLC Service, (2) may expose Unify Exchange, LLC or its affiliates, licensors, or users to any harm or liability, or (3) is harmful, fraudulent, deceptive, threatening, harassing, defamatory, obscene, unlawful, untrue, or otherwise objectionable;`,
    break: false,
    subDescription: true,
    subItem: false,
    newLine: true,
    subHeader: "",
  },
  {
    no: "",
    title: "",
    description:
`3.	-Upload to, transmit, distribute, store, create, or otherwise sell or offer for sale anything that violates our Prohibited Items Guidelines (Below). Transmit or otherwise make available any content that contains software viruses or any other computer code, files or programs designed to interrupt, destroy or limit the functionality of any computer software or hardware or telecommunications equipment;`,
    break: false,
    subDescription: true,
    subItem: false,
    newLine: true,
    subHeader: "",
  },
  {
    no: "",
    title: "",
    description:
`4.	-Originate, send, deliver, relay or otherwise transmit unsolicited commercial email or other messages through the Unify Exchange, LLC Service; Copy any portion of the Unify Exchange, LLC Service or any underlying content or source code;`,
    break: false,
    subDescription: true,
    subItem: false,
    newLine: true,
    subHeader: "",
  },
  {
    no: "",
    title: "",
    description:
`5.	-Reverse engineer, disassemble or decompile any portion of the Unify Exchange, LLC Service or otherwise attempt to discover or re-create the source code to any software;`,
    break: false,
    subDescription: true,
    subItem: false,
    newLine: true,
    subHeader: "",
  },
  {
    no: "",
    title: "",
    description:
`6.	-Distribute the software or source code behind the Unify Exchange, LLC Service to any third party;`,
    break: false,
    subDescription: true,
    subItem: false,
    newLine: true,
    subHeader: "",
  },
  {
    no: "",
    title: "",
    description:
`7.	-Make any modification, adaptation, improvement, enhancement, translation or derivative work of or to any portion of the Unify Exchange, LLC Service;`,
    break: false,
    subDescription: true,
    subItem: false,
    newLine: true,
    subHeader: "",
  },
  {
    no: "",
    title: "",
    description:
`8.	-Remove, alter, or obscure any copyright or other proprietary notices of Unify Exchange, LLC or its affiliates or licensors in any portion of the Unify Exchange, LLC Service;`,
    break: false,
    subDescription: true,
    subItem: false,
    newLine: true,
    subHeader: "",
  },
  {
    no: "",
    title: "",
    description:
`9.	-Obscure or disable any advertisements that appear on or through the Unify Exchange, LLC Service;`,
    break: false,
    subDescription: true,
    subItem: false,
    newLine: true,
    subHeader: "",
  },
  {
    no: "",
    title: "",
    description:
`10.	-Use any type of automated means, including without limitation any harvesting bot, robot, spider, script, crawler, scraper or other automated means or interface not provided by Unify Exchange, to utilize the Unify Exchange, LLC Service or to collect or extract data;`,
    break: false,
    subDescription: true,
    subItem: false,
    newLine: true,
    subHeader: "",
  },
  {
    no: "",
    title: "",
    description:
`11.	-Access without authorization any networks, systems, or databases used in providing the Unify Exchange, LLC Service or any accounts associated with Unify Exchange, LLC Service, or to access or use any information therein for any purpose;`,
    break: false,
    subDescription: true,
    subItem: false,
    newLine: true,
    subHeader: "",
  },
  {
    no: "",
    title: "",
    description:
`12.	-Attempt to probe, test, hack, or otherwise circumvent any security measures;`,
    break: false,
    subDescription: true,
    subItem: false,
    newLine: true,
    subHeader: "",
  },
  {
    no: "",
    title: "",
    description:
`13.	-Violate any requirements, policies, procedures or regulations of any network connected to the Unify Exchange, LLC Service;`,
    break: false,
    subDescription: true,
    subItem: false,
    newLine: true,
    subHeader: "",
  },
  {
    no: "",
    title: "",
    description:
`14.	-Use the Unify Exchange, LLC Service in any manner that could damage, disable, overburden, or otherwise impair the Unify Exchange, LLC Service (or the networks connected to the Unify Exchange, LLC Service);`,
    break: false,
    subDescription: true,
    subItem: false,
    newLine: true,
    subHeader: "",
  },
  {
    no: "",
    title: "",
    description:
`15.	-Interfere with or disrupt the use and enjoyment by others of the Unify Exchange, LLC Service, including without limitation attempting, in any manner, to obtain the password, account, or other security information of any other user;`,
    break: false,
    subDescription: true,
    subItem: false,
    newLine: true,
    subHeader: "",
  },

  {
    no: "",
    title: "",
    description:
`16.	-Falsely state, impersonate, or otherwise misrepresent your identity;`,
    break: false,
    subDescription: true,
    subItem: false,
    newLine: true,
    subHeader: "",
  },
  {
    no: "",
    title: "",
    description:
`17.	-Create more than one Account or create an Account on behalf of anyone other than yourself without permission;`,
    break: false,
    subDescription: true,
    subItem: false,
    newLine: true,
    subHeader: "",
  },
  {
    no: "",
    title: "",
    description:
`18.	-Use or attempt to use another user’s Account without authorization;`,
    break: false,
    subDescription: true,
    subItem: false,
    newLine: true,
    subHeader: "",
  },
  {
    no: "",
    title: "",
    description:
`19.	-Use the Unify Exchange, LLC Service in any manner to stalk, harass, invade the privacy of, or otherwise cause harm to, any person;`,
    break: false,
    subDescription: true,
    subItem: false,
    newLine: true,
    subHeader: "",
  },
  {
    no: "",
    title: "",
    description:
`20.	-Use the Unify Exchange, LLC Service in any manner that exposes Unify Exchange, LLC to any harm or liability of any nature;`,
    break: false,
    subDescription: true,
    subItem: false,
    newLine: true,
    subHeader: "",
  },
  {
    no: "",
    title: "",
    description:
`21.	-Use the Unify Exchange, LLC Service to infringe or violate the intellectual property rights or any other rights of anyone else (including Unify Exchange);`,
    break: false,
    subDescription: true,
    subItem: false,
    newLine: true,
    subHeader: "",
  },
  {
    no: "",
    title: "",
    description:
`22.	-Develop any third-party applications that interact with the Unify Exchange, LLC Service without Unify Exchange, LLC â€™s prior written consent;`,
    break: false,
    subDescription: true,
    subItem: false,
    newLine: true,
    subHeader: "",
  },
  {
    no: "",
    title: "",
    description:
`23.	-Use the Unify Exchange, LLC Service to engage in any illegal or unauthorized purpose or to engage in, encourage, or promote activities that are unlawful, misleading, malicious or discriminatory, including, but not limited to violations of these Terms, illegal gambling, fraud, money-laundering, or terrorist activities;`,
    break: false,
    subDescription: true,
    subItem: false,
    newLine: true,
    subHeader: "",
  },
  {
    no: "",
    title: "",
    description:
`24.	-Transfer any rights granted to you under these Terms; or`,
    break: false,
    subDescription: true,
    subItem: false,
    newLine: true,
    subHeader: "",
  },
  {
    no: "",
    title: "",
    description:
`25.	-Encourage or induce any third party to engage in any of the activities prohibited under this section.`,
    break: false,
    subDescription: true,
    subItem: false,
    newLine: true,
    subHeader: "",
  },
  {
    no: "",
    title: "",
    description:
`If you violate any of the foregoing, your right to access and use the Unify Exchange, LLC Service will terminate immediately and automatically, and you will have infringed Unify Exchange, LLC intellectual property and other rights, which may subject you to prosecution and damages. Unify Exchange, LLC reserves the right at all times to monitor, review, retain and disclose any information regarding your use of the Unify Exchange, LLC Service as necessary to satisfy any applicable law, regulation, legal process or governmental request. You also acknowledge and agree that Unify Exchange, LLC is not responsible or liable for the conduct of, or your interactions with, any users of the Unify Exchange, LLC Service (whether online or offline). Your interactions with other users are solely between you and such users and we are not responsible or liable for any loss, damage, injury or harm which results from these interactions. In addition, enforcement of these Terms is solely in our discretion, and the absence of enforcement in some instances does not constitute a waiver of our right to enforce these Terms in other instances. These Terms do not create any private right of action on the part of any third party or any reasonable expectation or promise that the Unify Exchange, LLC Service will not contain any content that is prohibited by these Terms.`,
    break: true,
    subDescription: true,
    subItem: false,
    newLine: true,
    subHeader: "",
  },
  {
    no: "",
    title: "",
    description:
`Unify Exchange, LLC respects the intellectual property of others, and requires that our Users do the same. You may not upload, embed, post, email, transmit or otherwise make available any material that infringes any copyright, patent, trademark, trade secret or other proprietary rights of any person or entity. Unify Exchange, LLC has the right to terminate the User ID of infringers.`,
    break: true,
    subDescription: true,
    subItem: true,
    newLine: true,
    subHeader: "10. Protecting Copyrights and Other Intellectual Property",
  },
  {
    no: "",
    title: "",
    description:
`You are solely responsible for your interactions with other Unify Exchange, LLC Users. Unify Exchange, LLC reserves the right, but has no obligation, to become involved in any way with disputes between you and other Users.`,
    break: true,
    subDescription: true,
    subItem: true,
    newLine: true,
    subHeader: "11. User Disputes",
  },
  {
    no: "",
    title: "",
    description:
`Use of the Unify Exchange, LLC Services is also governed by our Privacy Policy, which is incorporated into this Agreement by this reference.`,
    break: true,
    subDescription: true,
    subItem: true,
    newLine: true,
    subHeader: "12. Privacy",
  },
  {
    no: "",
    title: "",
    description:
`Unify Exchange, LLC and your Sponsor Organization are not responsible for and make no warranties, express or implied, as to the User Content or the accuracy and reliability of the User Content posted on Unify Exchange, LLC and such User Content does not necessarily reflect the opinions or policies of Unify Exchange, LLC or your Sponsor Organization. Unify Exchange, LLC and your Sponsor Organization are not responsible for the conduct, whether online or offline, of any User of the Unify Exchange, LLC Services. Unify Exchange, LLC and your Sponsor Organization assume no responsibility for any error, omission, interruption, deletion, defect, delay in operation or transmission, communications line failure, theft or destruction or unauthorized access to, or alteration of, any User or User communication. Unify Exchange, LLC  and your Sponsor Organization are not responsible for any problems or technical malfunction of any telephone network or lines, computer online systems, servers or providers, computer equipment, software, failure of any email or players due to technical problems or traffic congestion on the Internet or on any of the Unify Exchange, LLC  Services or combination thereof, including any injury or damage to Users or to any person's computer related to or resulting from participation or downloading materials in connection with the Unify Exchange, LLC  Services. Under no circumstances shall Unify Exchange, LLC and your Sponsor Organization be responsible for any loss or damage, including personal injury or death, resulting from use of the Unify Exchange, LLC Services, attendance at a Unify Exchange, LLC event, from any User Content posted on Unify Exchange, or from the conduct of any Users of the Unify Exchange, LLC Services, whether online or offline. The Unify Exchange, LLC Services are provided "AS-IS" and as available and Unify Exchange, LLC and your Sponsor Organization expressly disclaim any warranty of fitness for a particular purpose or non-infringement. Unify Exchange, LLC and your Sponsor Organization cannot guarantee and does not promise any specific results from use of the Unify Exchange, LLC Services.`,
    break: true,
    subDescription: true,
    subItem: true,
    newLine: true,
    subHeader: "13. Disclaimers",
  },
  {
    no: "",
    title: "",
    description:
`IN NO EVENT SHALL Unify Exchange, LLC OR SPONSOR ORGANIZATION BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT DAMAGES ARISING FROM YOUR USE OF THE Unify Exchange, LLC SERVICES, EVEN IF Unify Exchange, LLC OR SPONSOR ORGANIZATION HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, Unify Exchange, LLC 's AND SPONSOR ORGANIZATION LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE AMOUNT PAID, IF ANY, BY YOU TO Unify Exchange, LLC OR SPONSOR ORGANIZATION FOR THE Unify Exchange, LLC SERVICES DURING THE TERM OF USER ID.`,
    break: true,
    subDescription: false,
    subItem: false,
    newLine: true,
    subHeader: "13. Limitation of Liability",
  },
  {
    no: "",
    title: "",
    description:
`Software available in connection with the Unify Exchange, LLC Services (the "Software") is further subject to United States export controls. No Software may be downloaded from the Unify Exchange, LLC Services or otherwise exported or re-exported in violation of U.S. export laws. Using the Software is at your sole risk.`,
    break: true,
    subDescription: true,
    subItem: true,
    newLine: true,
    subHeader: "15. U.S. Export Controls",
  },
  {
    no: "",
    title: "",
    description:
`The agreement shall be governed by, and construed in accordance with, the laws of the State of Texas, without regard to its conflict of law provisions. You and Unify Exchange, LLC agree to submit to the exclusive jurisdiction of the courts located within the State of Texas to resolve any dispute arising out of the Agreement or the Unify Exchange, LLC Services. EACH OF THE PARTIES HEREBY KNOWINGLY, VOLUNTARILY AND INTENTIONALLY WAIVES ANY RIGHT IT MAY HAVE TO A TRIAL BY JURY IN RESPECT OF ANY LITIGATION (INCLUDING BUT NOT LIMITED TO ANY CLAIMS, COUNTERCLAIMS, CROSS-CLAIMS, OR THIRD-PARTY CLAIMS) ARISING OUT OF, UNDER OR IN CONNECTION WITH THIS AGREEMENT. FURTHER, EACH PARTY HERETO CERTIFIES THAT NO REPRESENTATIVE OR AGENT OF EITHER PARTY HAS REPRESENTED, EXPRESSLY OR OTHERWISE, THAT SUCH PARTY WOULD NOT IN THE EVENT OF SUCH LITIGATION, SEEK TO ENFORCE THIS WAIVER OF RIGHT TO JURY TRIAL PROVISION. EACH OF THE PARTIES ACKNOWLEDGES THAT THIS SECTION IS A MATERIAL INDUCEMENT FOR THE OTHER PARTY ENTERING INTO THIS AGREEMENT.`,
    break: true,
    subDescription: true,
    subItem: true,
    newLine: true,
    subHeader: "15. Disputes",
  },
  {
    no: "",
    title: "",
    description:
`You agree to indemnify and hold Unify Exchange, LLC  and Sponsor Organization, their subsidiaries, and affiliates, and their respective officers, agents, partners and employees, harmless from any loss, liability, claim, or demand, including reasonable attorneys' fees, made by any third party due to or arising out of your use of the Unify Exchange, LLC  Services in violation of this Agreement and/or arising from a breach of this Agreement and/or any breach of your representations and warranties set forth in this Agreement and/or if any Content that you post on Unify Exchange, LLC  causes Unify Exchange, LLC  or Sponsor Organization to be liable to another.`,
    break: true,
    subDescription: true,
    subItem: true,
    newLine: true,
    subHeader: "16. Indemnity",
  },
  {
    no: "",
    title: "",
    description:
`When you use the Unify Exchange, LLC Service, send e-mails to us, or communicate with us via the Unify Exchange, LLC app or website, you are communicating with us electronically. You consent to receive communications from us electronically. We will communicate with you by e-mail or by posting notices through the Unify Exchange, LLC Service. You agree that all agreements, notices, disclosures and other communications that we provide to you electronically satisfy any legal requirement that such communications be in writing.`,
    break: true,
    subDescription: true,
    subItem: true,
    newLine: true,
    subHeader: "17. Electronic Communications",
  },
  {
    no: "",
    title: "",
    description:
`You acknowledge and agree that there are risks associated with utilizing an Internet-based marketplace for the sale of goods, including but not limited to, the risk of failure of hardware, software and Internet connections, the risk of malicious software introduction, and the risk that third parties may obtain unauthorized access to information stored within your Account. You acknowledge and agree that Unify Exchange, LLC will not be responsible for any communication failures, disruptions, errors, distortions or delays you may experience when using the Unify Exchange, LLC Service, however caused. Unify Exchange, LLC takes no responsibility for and will not be liable for any losses, damages or claims arising from the use of the Unify Exchange, LLC Service, including, but not limited to, any losses, damages or claims arising from (a) server failure or data loss, (b) forgotten passwords, or (c) phishing spam, viruses, third-party attacks or any other unauthorized third-party activities.`,
    break: true,
    subDescription: true,
    subItem: true,
    newLine: true,
    subHeader: "18. Assumption of Risk ",
  },
  {
    no: "",
    title: "",
    description:
`Any comments or materials sent to us, including, but not limited to, ideas, questions, comments, suggestions, feedback or the like regarding the Unify Exchange, LLC Service or any other products or services of Unify Exchange, LLC (collectively, "Feedback"), is non-confidential and will become our sole property. We will have no obligation to you of any kind, monetary or non-monetary, with respect to such Feedback and will be free to reproduce, use, disclose, exhibit, display, transform, create derivative works from and distribute the Feedback to others without limitation or obligation. You waive any rights you may have to the Feedback (including any copyrights or moral rights). Further, you agree not to submit any feedback that is defamatory, illegal, offensive or otherwise violates any right of any third party, or breaches any agreement between you and any third party.`,
    break: true,
    subDescription: true,
    subItem: true,
    newLine: true,
    subHeader: "19. Feedback ",
  },
  {
    no: "",
    title: "",
    description:
`This Agreement is accepted upon your use of the Unify Exchange, LLC website or any of the Unify Exchange, LLC Services and is further affirmed by you becoming a User. This Agreement constitutes the entire agreement between you and Unify Exchange, LLC regarding the use of the Unify Exchange, LLC Services. The failure of Unify Exchange, LLC to exercise or enforce any right or provision of this Agreement shall not operate as a waiver of such right or provision. The section titles in this Agreement are for convenience only and have no legal or contractual effect. This Agreement operates to the fullest extent permissible by law. If any provision of this Agreement is unlawful, void or unenforceable, that provision is deemed severable from this Agreement and does not affect the validity and enforceability of any remaining provisions.`,
    break: true,
    subDescription: true,
    subItem: true,
    newLine: true,
    subHeader: "20. Other  ",
  },
  {
    no: "",
    title: "",
    description:
`I (USER) HAVE READ THIS AGREEMENT AND AGREE TO ALL OF THE PROVISIONS CONTAINED HEREIN`,
    break: true,
    subDescription: true,
    subItem: true,
    newLine: true,
    subHeader: " ",
  },
];

export { intro, termsOfUse };
