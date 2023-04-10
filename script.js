//  Experience new button
const addExperienceBtn = document.querySelector('#addExperience');
const experienceFormEl = document.querySelector('#experienceForm');

addExperienceBtn.addEventListener('click', () => {
    const newExperience = document.createElement('div');
    newExperience.innerHTML = `
    <input type="text" class="form-control mb-3 mt-3 experienceTitleIn" placeholder="Job title">
    <textarea class="form-control experienceDesIn" rows="3" placeholder="Job description"></textarea>
    `;

    experienceFormEl.appendChild(newExperience);
});
//  End Experience new button

// Education new button
const addEducationBtn = document.querySelector('#addEducation');
const EducationFormEl = document.querySelector('#EducationForm');

addEducationBtn.addEventListener('click', () => {
    const newEducation = document.createElement('div');
    newEducation.innerHTML = `
    <input type="text" class="form-control mb-3 mt-3" placeholder="Course title">
    <textarea class="form-control" rows="3" placeholder="Course description"></textarea>
    `;

    EducationFormEl.appendChild(newEducation);
});
// End Education new button

// Skills new button
const addSkillsBtn = document.querySelector('#addSkills');
const skillsFormEl = document.querySelector('#skills');

addSkillsBtn.addEventListener('click', () => {
    const newSkill = document.createElement('div');
    newSkill.innerHTML = `
    <input type="text" class="form-control mb-3 mt-3" id="skills" placeholder="Add another skill">
    `;

    skillsFormEl.appendChild(newSkill);
})
// End Skills new button



// transfering information
const submitForm = document.querySelector('#submitForm');
submitForm.addEventListener('click', () => {
    // updating first name
    const firstNameIn = document.querySelector('#firstNameIn');
    const firstNameOut = document.querySelector('#firstNameOut');
    firstNameOut.innerText = firstNameIn.value;

    // updating last name
    const lastNameIn = document.querySelector('#lastNameIn');
    const lastNameOut = document.querySelector('#lastNameOut');
    lastNameOut.innerText = lastNameIn.value;

    // updating email
    const emailIn = document.querySelector('#emailIn');
    const emailOut = document.querySelector('#emailOut');
    emailOut.innerText = emailIn.value;

    // updating linkedin
    const linkedinIn = document.querySelector('#linkedinIn');
    const linkedinOut = document.querySelector('#linkedinOut');
    linkedinOut.innerText = linkedinIn.value;

    // updating address, city, post code
    const addressIn = document.querySelector('#addressIn');
    const addressOut = document.querySelector('#addressOut');
    addressOut.innerText = addressIn.value;

    const cityIn = document.querySelector('#cityIn');
    const cityOut = document.querySelector('#cityOut');
    cityOut.innerText = cityIn.value;

    const postCodeIn = document.querySelector('#postCodeIn');
    const postCodeOut = document.querySelector('#postCodeOut');
    postCodeOut.innerText = postCodeIn.value;

    // updating phone number
    const phoneNumberIn = document.querySelector('#phoneNumberIn');
    const phoneNumberOut = document.querySelector('#phoneNumberOut');
    phoneNumberOut.innerText = phoneNumberIn.value;

    // updating objective
    const objectiveIn = document.querySelector('#objectiveIn');
    const objectiveOut = document.querySelector('#objectiveOut');
    objectiveOut.innerText = objectiveIn.value;

    // updating experience title, description
    const experienceTitleIn = document.querySelectorAll('.experienceTitleIn');
    const experienceTitleOut = document.querySelector('.experienceTitleOut');
    const experienceDesIn = document.querySelectorAll('.experienceDesIn');
    const experienceDesOut = document.querySelector('.experienceDesOut');
    
    let titleStorage = '';
    let desStorage = '';
    
    for (let i = 0; i < experienceTitleIn.length; i++) {
      const title = experienceTitleIn[i].value;
      const des = experienceDesIn[i].value;
      titleStorage += `<h6 class="experienceTitleOut">${title}</h6><p class="experienceDesOut">${des}</p>`;
    }
    
    experienceTitleOut.innerHTML = titleStorage;
    experienceDesOut.innerHTML = desStorage;
    
    
    











    // updating education title
    const educationTitleIn = document.querySelector('.educationTitleIn');
    const educationTitleOut = document.querySelector('.educationTitleOut');
    educationTitleOut.innerText = educationTitleIn.value;

    // updating education description
    const educationDesIn = document.querySelector('.educationDesIn');
    const educationDesOut = document.querySelector('.educationDesOut');
    educationDesOut.innerHTML = educationDesIn.value; // used innerHTML instead of innerText

    // updating skills
    const skillsIn = document.querySelector('.skillsIn');
    const skillsOut = document.querySelector('.skillsOut');
    skillsOut.innerText = skillsIn.value;
});