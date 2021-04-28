const enquirer = require('enquirer');
const fs = require('fs');

let questions = [
"What it the title of your project?", 
"What is your GitHub username?",
"What is your email?",
"Which license will you require for this repository?",
"What was your motivation for this task?",
"Why did you build this project?",
"What problem does it solve?",
"What did you learn?",
"Explain how to INSTALL your application (press arrow keys to navigate through steps)",
"Explain how to USE your application (press arrow keys to navigate through steps)",
"Which code of conduct would you like to include in your contribution section? ",
"Please add some final instructions on how to run tests on your application",
"What is your GitHub url?"];

const [ q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13] = questions;

enquirer
    .prompt([
        {
            type: 'input',
            message: q1,
            name: "project"
        },
        {
            type: 'input',
            message: q13,
            name: "githubURL"
        },
        {
            type: 'input',
            message: q2,
            name: "github"
        },
        {
            type: 'input',
            message: q3,
            name: "email"
        },
        {
            type: 'select',
            message: q4,
            name: "license",
            choices: ["MIT License", "Apache License 2.0", "GNU General Public License"]
        },
        {
            type: 'input',
            message: q5,
            name: "desc1"
        },
        {
            type: 'input',
            message: q6,
            name: "desc2"
        },
        {
            type: 'input',
            message: q7,
            name: "desc3"
        },
        {
            type: 'input',
            message: q8,
            name: "desc4"
        },
        {
            type: 'form',
            message: q9,
            name: "install",
            choices: [
                { name: 'instStep1', message: 'Step One:'},
                { name: 'instStep2', message: 'Step Two:'},
                { name: 'instStep3', message: 'Step Three:'}
            ]
        },
        {
            type: 'form',
            message: q10,
            name: "use",
            choices: [
                { name: 'use1', message: 'How do I access the main functionality?: '},
                { name: 'use2', message: 'How did you implement this main feature?: '},
            ]
        },
        {
            type: 'select',
            message: q11,
            name: "contribution",
            choices: ["Contributor Covenant", "Citizen Code Of Conduct"]
        },
        {
            type: 'input',
            message: q12,
            name: "tests"
        },
    ])
    .then((response) => {
        const { project, github, email, license, desc1, desc2, desc3, desc4, install, use, contribution, tests, githubURL } =  response;
        // Initial variables
        var chosenLicense;
        var licenseDesc;
        var contributionDesc;
        // Switch statement that decides what license information to display
        switch (license) {
            case "MIT License":
                chosenLicense = "![license](https://img.shields.io/badge/license-MIT-green.svg)"
                licenseDesc = 
`MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`
                break;
            case "Apache License 2.0":
                chosenLicense = "![license](https://img.shields.io/badge/license-Apache-blue.svg)"
                licenseDesc = 
`TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUT
Definitions.

"License" shall mean the terms and conditions for use, reproduction, and distribution as defined by Sections 1 through 9 of this document.

"Licensor" shall mean the copyright owner or entity authorized by the copyright owner that is granting the License.

"Legal Entity" shall mean the union of the acting entity and all other entities that control, are controlled by, or are under common control with that entity. For the purposes of this definition, "control" means (i) the power, direct or indirect, to cause the direction or management of such entity, whether by contract or otherwise, or (ii) ownership of fifty percent (50%) or more of the outstanding shares, or (iii) beneficial ownership of such entity.

"You" (or "Your") shall mean an individual or Legal Entity exercising permissions granted by this License.

"Source" form shall mean the preferred form for making modifications, including but not limited to software source code, documentation source, and configuration files.

"Object" form shall mean any form resulting from mechanical transformation or translation of a Source form, including but not limited to compiled object code, generated documentation, and conversions to other media types.

"Work" shall mean the work of authorship, whether in Source or Object form, made available under the License, as indicated by a copyright notice that is included in or attached to the work (an example is provided in the Appendix below).

"Derivative Works" shall mean any work, whether in Source or Object form, that is based on (or derived from) the Work and for which the editorial revisions, annotations, elaborations, or other modifications represent, as a whole, an original work of authorship. For the purposes of this License, Derivative Works shall not include works that remain separable from, or merely link (or bind by name) to the interfaces of, the Work and Derivative Works thereof.

"Contribution" shall mean any work of authorship, including the original version of the Work and any modifications or additions to that Work or Derivative Works thereof, that is intentionally submitted to Licensor for inclusion in the Work by the copyright owner or by an individual or Legal Entity authorized to submit on behalf of the copyright owner. For the purposes of this definition, "submitted" means any form of electronic, verbal, or written communication sent to the Licensor or its representatives, including but not limited to communication on electronic mailing lists, source code control systems, and issue tracking systems that are managed by, or on behalf of, the Licensor for the purpose of discussing and improving the Work, but excluding communication that is conspicuously marked or otherwise designated in writing by the copyright owner as "Not a Contribution."

"Contributor" shall mean Licensor and any individual or Legal Entity on behalf of whom a Contribution has been received by Licensor and subsequently incorporated within the Work.

Grant of Copyright License. Subject to the terms and conditions of this License, each Contributor hereby grants to You a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable copyright license to reproduce, prepare Derivative Works of, publicly display, publicly perform, sublicense, and distribute the Work and such Derivative Works in Source or Object form.

Grant of Patent License. Subject to the terms and conditions of this License, each Contributor hereby grants to You a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable (except as stated in this section) patent license to make, have made, use, offer to sell, sell, import, and otherwise transfer the Work, where such license applies only to those patent claims licensable by such Contributor that are necessarily infringed by their Contribution(s) alone or by combination of their Contribution(s) with the Work to which such Contribution(s) was submitted. If You institute patent litigation against any entity (including a cross-claim or counterclaim in a lawsuit) alleging that the Work or a Contribution incorporated within the Work constitutes direct or contributory patent infringement, then any patent licenses granted to You under this License for that Work shall terminate as of the date such litigation is filed.

Redistribution. You may reproduce and distribute copies of the Work or Derivative Works thereof in any medium, with or without modifications, and in Source or Object form, provided that You meet the following conditions:

(a) You must give any other recipients of the Work or Derivative Works a copy of this License; and

(b) You must cause any modified files to carry prominent notices stating that You changed the files; and

(c) You must retain, in the Source form of any Derivative Works that You distribute, all copyright, patent, trademark, and attribution notices from the Source form of the Work, excluding those notices that do not pertain to any part of the Derivative Works; and

(d) If the Work includes a "NOTICE" text file as part of its distribution, then any Derivative Works that You distribute must include a readable copy of the attribution notices contained within such NOTICE file, excluding those notices that do not pertain to any part of the Derivative Works, in at least one of the following places: within a NOTICE text file distributed as part of the Derivative Works; within the Source form or documentation, if provided along with the Derivative Works; or, within a display generated by the Derivative Works, if and wherever such third-party notices normally appear. The contents of the NOTICE file are for informational purposes only and do not modify the License. You may add Your own attribution notices within Derivative Works that You distribute, alongside or as an addendum to the NOTICE text from the Work, provided that such additional attribution notices cannot be construed as modifying the License.

You may add Your own copyright statement to Your modifications and may provide additional or different license terms and conditions for use, reproduction, or distribution of Your modifications, or for any such Derivative Works as a whole, provided Your use, reproduction, and distribution of the Work otherwise complies with the conditions stated in this License.

Submission of Contributions. Unless You explicitly state otherwise, any Contribution intentionally submitted for inclusion in the Work by You to the Licensor shall be under the terms and conditions of this License, without any additional terms or conditions. Notwithstanding the above, nothing herein shall supersede or modify the terms of any separate license agreement you may have executed with Licensor regarding such Contributions.

Trademarks. This License does not grant permission to use the trade names, trademarks, service marks, or product names of the Licensor, except as required for reasonable and customary use in describing the origin of the Work and reproducing the content of the NOTICE file.

Disclaimer of Warranty. Unless required by applicable law or agreed to in writing, Licensor provides the Work (and each Contributor provides its Contributions) on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied, including, without limitation, any warranties or conditions of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A PARTICULAR PURPOSE. You are solely responsible for determining the appropriateness of using or redistributing the Work and assume any risks associated with Your exercise of permissions under this License.

Limitation of Liability. In no event and under no legal theory, whether in tort (including negligence), contract, or otherwise, unless required by applicable law (such as deliberate and grossly negligent acts) or agreed to in writing, shall any Contributor be liable to You for damages, including any direct, indirect, special, incidental, or consequential damages of any character arising as a result of this License or out of the use or inability to use the Work (including but not limited to damages for loss of goodwill, work stoppage, computer failure or malfunction, or any and all other commercial damages or losses), even if such Contributor has been advised of the possibility of such damages.

Accepting Warranty or Additional Liability. While redistributing the Work or Derivative Works thereof, You may choose to offer, and charge a fee for, acceptance of support, warranty, indemnity, or other liability obligations and/or rights consistent with this License. However, in accepting such obligations, You may act only on Your own behalf and on Your sole responsibility, not on behalf of any other Contributor, and only if You agree to indemnify, defend, and hold each Contributor harmless for any liability incurred by, or claims asserted against, such Contributor by reason of your accepting any such warranty or additional liability.`
                break;
            case "GNU General Public License":
                chosenLicense = "![license](https://img.shields.io/badge/license-GNU-red.svg)"
                licenseDesc = 
`The GNU General Public License is a free, copyleft license for software and other kinds of wor
The licenses for most software and other practical works are designed to take away your freedom to share and change the works. By contrast, the GNU General Public License is intended to guarantee your freedom to share and change all versions of a program--to make sure it remains free software for all its users. We, the Free Software Foundation, use the GNU General Public License for most of our software; it applies also to any other work released this way by its authors. You can apply it to your programs, too.

When we speak of free software, we are referring to freedom, not price. Our General Public Licenses are designed to make sure that you have the freedom to distribute copies of free software (and charge for them if you wish), that you receive source code or can get it if you want it, that you can change the software or use pieces of it in new free programs, and that you know you can do these things.

To protect your rights, we need to prevent others from denying you these rights or asking you to surrender the rights. Therefore, you have certain responsibilities if you distribute copies of the software, or if you modify it: responsibilities to respect the freedom of others.

For example, if you distribute copies of such a program, whether gratis or for a fee, you must pass on to the recipients the same freedoms that you received. You must make sure that they, too, receive or can get the source code. And you must show them these terms so they know their rights.

Developers that use the GNU GPL protect your rights with two steps: (1) assert copyright on the software, and (2) offer you this License giving you legal permission to copy, distribute and/or modify it.

For the developers' and authors' protection, the GPL clearly explains that there is no warranty for this free software. For both users' and authors' sake, the GPL requires that modified versions be marked as changed, so that their problems will not be attributed erroneously to authors of previous versions.

Some devices are designed to deny users access to install or run modified versions of the software inside them, although the manufacturer can do so. This is fundamentally incompatible with the aim of protecting users' freedom to change the software. The systematic pattern of such abuse occurs in the area of products for individuals to use, which is precisely where it is most unacceptable. Therefore, we have designed this version of the GPL to prohibit the practice for those products. If such problems arise substantially in other domains, we stand ready to extend this provision to those domains in future versions of the GPL, as needed to protect the freedom of users.

Finally, every program is threatened constantly by software patents. States should not allow patents to restrict development and use of software on general-purpose computers, but in those that do, we wish to avoid the special danger that patents applied to a free program could make it effectively proprietary. To prevent this, the GPL assures that patents cannot be used to render the program non-free. For more information check the license section in this repo.`
                break;
        };
        switch (contribution) {
            case "Contributor Covenant":
                contributionDesc = 
`Examples of behavior that contributes to a positive environment for our community include:

Demonstrating empathy and kindness toward other people
Being respectful of differing opinions, viewpoints, and experiences
Giving and gracefully accepting constructive feedback
Accepting responsibility and apologizing to those affected by our mistakes, and learning from the experience
Focusing on what is best not just for us as individuals, but for the overall community

Examples of unacceptable behavior include:

The use of sexualized language or imagery, and sexual attention or advances of any kind
Trolling, insulting or derogatory comments, and personal or political attacks
Public or private harassment
Publishing others' private information, such as a physical or email address, without their explicit permission
Other conduct which could reasonably be considered inappropriate in a professional setting`;
                break;
            case "Citizen Code Of Conduct":
                contributionDesc = 
`The following behaviors are expected and requested of all community members:
Participate in an authentic and active way. In doing so, you contribute to the health and longevity of this community.
Exercise consideration and respect in your speech and actions.
Attempt collaboration before conflict.
Refrain from demeaning, discriminatory, or harassing behavior and speech.
Be mindful of your surroundings and of your fellow participants. Alert community leaders if you notice a dangerous situation, someone in distress, or violations of this Code of Conduct, even if they seem inconsequential.
Remember that community event venues may be shared with members of the public; please be respectful to all patrons of these locations.`
                break;
        }
        let readmeText = `
# ${project}
${chosenLicense}
## Description
${desc1}  
${desc2}  
${desc3}  
${desc4}  
## Table of Contents
[Installation](#Installation)  
[Usage](#Usage)  
[Contribution](#Contribution)  
[Questions](#Questions)  
## Installation
Step One: ${install.instStep1}  
Step Two: ${install.instStep2}  
Step Three: ${install.instStep3}  
## Usage
${use.use1}  
${use.use2}  
## Contribution
${contributionDesc}
## License
${licenseDesc}
## Running Tests
${tests}
## Questions
If you wish to inquire about my application, below is my contact information 👇  
${github} | ${githubURL}  
Email | ${email}`

        fs.writeFile("README.md", readmeText, (err) => 
        err ? console.log(err) : console.log("Your file has been created!"))
    });