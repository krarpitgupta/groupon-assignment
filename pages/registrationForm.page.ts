import { Locator, Page, expect } from "@playwright/test";
import BaseMethods from "../pages/baseMethods.page";
import RegistrationFormLocator from "../locators/registrationForm.locator";
import testData from "../data/testData.json"

export default class RegistrationForm {

    readonly page: Page;
    private readonly baseMethods : BaseMethods;
    private readonly registrationFormLocators : RegistrationFormLocator;

    constructor(page: Page) {
        this.page = page;
        this.baseMethods = new BaseMethods(this.page);
        this.registrationFormLocators = new RegistrationFormLocator(this.page);
    }

    async lauchApp() {
        await this.baseMethods.goToURL("automation-practice-form");
    }

    async validateAppNavigateSuccessfully(formHeading: string) {
        await this.baseMethods.validateElementVisible(this.registrationFormLocators.formHeading);
        await this.baseMethods.validateText(this.registrationFormLocators.formHeading, formHeading);
    }

    async validateInvalidEmails(inValidEmails: []) {
        for (let i = 0; i < inValidEmails.length; i++) {
            await this.baseMethods.fillInputValue(this.registrationFormLocators.emailEditBox, inValidEmails[i]);
            await this.baseMethods.clickOnElement(this.registrationFormLocators.submitBtn);
            await this.baseMethods.validateElementBackgroundColor(this.registrationFormLocators.emailEditBox, "border-color", testData.red_colour);
            await this.baseMethods.fillInputValue(this.registrationFormLocators.emailEditBox, '');
        }
    }

    async validateInvalidMobiles(inValidMobiles: []) {
        for (let i = 0; i < inValidMobiles.length; i++) {
            await this.baseMethods.fillInputValue(this.registrationFormLocators.mobileNoEditBox, inValidMobiles[i]);
            await this.baseMethods.clickOnElement(this.registrationFormLocators.submitBtn);
            await this.baseMethods.validateElementBackgroundColor(this.registrationFormLocators.mobileNoEditBox, "border-color", testData.red_colour);
            await this.baseMethods.fillInputValue(this.registrationFormLocators.mobileNoEditBox, '');
        }
    }

    async uploadPicture(filePath: string) {
        await this.registrationFormLocators.chooseFileBtn.setInputFiles(filePath);
    }

    //Pls specify subjects seperated by , (comma) in case of multiple subject
    async addSubjects(subjects: string) {

        let subjectArray = subjects.split(",");
        await this.baseMethods.clickOnElement(this.registrationFormLocators.subjectsEditBox);

        for (let i = 0; i < subjectArray.length; i++) {
            await this.baseMethods.pressInputValue(this.registrationFormLocators.subjectsEditBox, subjectArray[i].trim());
            await this.baseMethods.waitforElement(1000);
            await this.page.keyboard.press('Enter');
        }
        await this.page.keyboard.press('Tab');
    }

    async fillTextFieldInRegistrationForm(firstName: string, lastName: string, email: string, mobileNo: string, currentAddress: string, state: string, city: string) {

        await this.baseMethods.fillInputValue(this.registrationFormLocators.firstNameEditBox, firstName);
        await this.baseMethods.fillInputValue(this.registrationFormLocators.lastNameEditBox, lastName);
        await this.baseMethods.fillInputValue(this.registrationFormLocators.emailEditBox, email);
        await this.baseMethods.fillInputValue(this.registrationFormLocators.mobileNoEditBox, mobileNo);
        await this.baseMethods.fillInputValue(this.registrationFormLocators.currentAddressEditBox, currentAddress);
        await this.baseMethods.fillInputValue(this.registrationFormLocators.stateEditBox, state);
        await this.page.keyboard.press('Enter');
        await this.baseMethods.fillInputValue(this.registrationFormLocators.cityEditBox, city);
        await this.page.keyboard.press('Enter');

    }

    async selectGender(gender: string) {

        if (gender.toLowerCase() == "male") await this.baseMethods.clickOnElement(this.registrationFormLocators.maleLabel);
        else if (gender.toLowerCase() == "female") await this.baseMethods.clickOnElement(this.registrationFormLocators.femaleLabel);
        else if (gender.toLowerCase() == "other") await this.baseMethods.clickOnElement(this.registrationFormLocators.otherLabel);

    }
    
    //Pls specify hobbies seperated by , (comma) in case of multiple Hobby
    async selectHobbies(hobbies: string) {

        let hobbyArray = hobbies.split(",");
        for (let i = 0; i < hobbyArray.length; i++) {
            await this.selectHobby(hobbyArray[i].trim());
        }

    }

    async selectHobby(hobby: string) {

        if (hobby.toLowerCase() == "sports") await this.baseMethods.clickOnElement(this.registrationFormLocators.sportsLabel);
        else if (hobby.toLowerCase() == "reading") await this.baseMethods.clickOnElement(this.registrationFormLocators.readingLabel);
        else if (hobby.toLowerCase() == "music") await this.baseMethods.clickOnElement(this.registrationFormLocators.musicLabel);

    }

    async validateFormSubmitSuccessfully(formSubmitMsg: string) {

        await this.baseMethods.validateText(this.registrationFormLocators.formSubmitLabel, formSubmitMsg);

    }

    async validateFormLabelValues(studentName: string, email: string, gender: string, mobile: string, dob: string, subjects: string, hobbies: string, picture: string, address: string, stateCity: string) {

        await this.baseMethods.validateText(this.registrationFormLocators.studentNameValue, studentName);
        await this.baseMethods.validateText(this.registrationFormLocators.studentEmailValue, email);
        await this.baseMethods.validateText(this.registrationFormLocators.genderValue, gender);
        await this.baseMethods.validateText(this.registrationFormLocators.mobileValue, mobile);
        await this.baseMethods.validateText(this.registrationFormLocators.dobValue, dob);
        await this.baseMethods.validateText(this.registrationFormLocators.subjectsValue, subjects);
        await this.baseMethods.validateText(this.registrationFormLocators.hobbiesValue, hobbies);
        await this.baseMethods.validateText(this.registrationFormLocators.pictureValue, picture);
        await this.baseMethods.validateText(this.registrationFormLocators.addressValue, address);
        await this.baseMethods.validateText(this.registrationFormLocators.stateCityValue, stateCity);
    
    }

    async disableAds() {
        await this.page.locator('//div[contains(@id,"google_ads")]').locator('nth=0').evaluate(element => element.style.display = 'none');
        await this.page.locator('//div[contains(@id,"google_ads")]').locator('nth=1').evaluate(element => element.style.display = 'none');
        await this.page.locator('//div[contains(@id,"google_ads")]').locator('nth=2').evaluate(element => element.style.display = 'none');
    }

}