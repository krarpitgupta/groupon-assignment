import { Locator, Page } from "@playwright/test";


export default class RegistrationFormLocator {
    
    readonly formHeading : Locator;
    readonly nameLabel : Locator;
    readonly emailLabel : Locator;
    readonly genderLabel : Locator;
    readonly maleLabel : Locator;
    readonly femaleLabel : Locator;
    readonly otherLabel : Locator;
    readonly mobileLabel : Locator;
    readonly dobLabel : Locator;
    readonly subjectsLabel : Locator;
    readonly hobbiesLabel : Locator;
    readonly sportsLabel : Locator;
    readonly readingLabel : Locator;
    readonly musicLabel : Locator;
    readonly pictureLabel : Locator;
    readonly selectPictureLabel : Locator;
    readonly noFileLabel : Locator;
    readonly currentAddressLabel : Locator;
    readonly stateCityLabel : Locator;

    readonly firstNameEditBox : Locator;
    readonly lastNameEditBox : Locator;
    readonly emailEditBox : Locator;
    readonly maleRadioBtn : Locator;
    readonly femaleRadioBtn : Locator;
    readonly otherRadioBtn : Locator;
    readonly mobileNoEditBox : Locator;
    readonly dobEditBox : Locator;
    readonly subjectsEditBox : Locator;
    readonly sportsCheckBox : Locator;
    readonly readingCheckBox : Locator;
    readonly musicCheckBox : Locator;
    readonly chooseFileBtn : Locator;
    readonly currentAddressEditBox : Locator;
    readonly stateDropdown : Locator;
    readonly cityDropdown : Locator;
    readonly stateEditBox : Locator;
    readonly cityEditBox : Locator;
    readonly submitBtn : Locator;

    readonly formSubmitLabel : Locator;
    readonly studentNameValue : Locator;
    readonly studentEmailValue : Locator;
    readonly genderValue : Locator;
    readonly mobileValue : Locator;
    readonly dobValue : Locator;
    readonly subjectsValue : Locator;
    readonly hobbiesValue : Locator;
    readonly pictureValue : Locator;
    readonly addressValue : Locator;
    readonly stateCityValue : Locator;

    constructor(page: Page) {

        this.formHeading = page.locator('//h5');
        this.nameLabel = page.locator('#userName-label');
        this.emailLabel = page.locator('#userEmail-label');
        this.genderLabel = page.locator('//div[@id="genterWrapper"]/div[1]');
        this.maleLabel = page.locator('//label[@for="gender-radio-1"]');
        this.femaleLabel = page.locator('//label[@for="gender-radio-2"]');
        this.otherLabel = page.locator('//label[@for="gender-radio-3"]');
        this.mobileLabel = page.locator('#userNumber-label');
        this.dobLabel = page.locator('#dateOfBirth-label');
        this.subjectsLabel = page.locator('#subjectsWrapper #subjects-label');
        this.hobbiesLabel = page.locator('#hobbiesWrapper #subjects-label');
        this.sportsLabel = page.locator('//label[@for="hobbies-checkbox-1"]');
        this.readingLabel = page.locator('//label[@for="hobbies-checkbox-2"]');
        this.musicLabel = page.locator('//label[@for="hobbies-checkbox-3"]');
        this.pictureLabel = page.locator('//label[@id="subjects-label" and text()="Picture"]');
        this.selectPictureLabel = page.locator('.form-file-label');
        this.noFileLabel = page.locator('#uploadPicture');
        this.currentAddressLabel = page.locator('#currentAddress-label');
        this.stateCityLabel = page.locator('#stateCity-label');

        this.firstNameEditBox = page.locator('#firstName');
        this.lastNameEditBox = page.locator('#lastName');
        this.emailEditBox = page.locator('#userEmail');
        this.maleRadioBtn = page.locator('#gender-radio-1');
        this.femaleRadioBtn = page.locator('#gender-radio-2');
        this.otherRadioBtn = page.locator('#gender-radio-3');
        this.mobileNoEditBox = page.locator('#userNumber');
        this.dobEditBox = page.locator('#dateOfBirthInput');
        this.subjectsEditBox = page.locator('#subjectsContainer');
        this.sportsCheckBox = page.locator('#hobbies-checkbox-1');
        this.readingCheckBox = page.locator('#hobbies-checkbox-2');
        this.musicCheckBox = page.locator('#hobbies-checkbox-3');
        this.chooseFileBtn = page.locator('#uploadPicture');
        this.currentAddressEditBox = page.locator('#currentAddress');
        this.stateDropdown = page.locator('#state');
        this.cityDropdown = page.locator('#city');
        this.stateEditBox = page.locator('#react-select-3-input');
        this.cityEditBox = page.locator('#react-select-4-input');
        this.submitBtn = page.locator('#submit');

        this.formSubmitLabel = page.locator('#example-modal-sizes-title-lg');
        this.studentNameValue = page.locator('//td[text()="Student Name"]/following-sibling::td');
        this.studentEmailValue = page.locator('//td[text()="Student Email"]/following-sibling::td');
        this.genderValue = page.locator('//td[text()="Gender"]/following-sibling::td');
        this.mobileValue = page.locator('//td[text()="Mobile"]/following-sibling::td');
        this.dobValue = page.locator('//td[text()="Date of Birth"]/following-sibling::td');
        this.subjectsValue = page.locator('//td[text()="Subjects"]/following-sibling::td');
        this.hobbiesValue = page.locator('//td[text()="Hobbies"]/following-sibling::td');
        this.pictureValue = page.locator('//td[text()="Picture"]/following-sibling::td');
        this.addressValue = page.locator('//td[text()="Address"]/following-sibling::td');
        this.stateCityValue = page.locator('//td[text()="State and City"]/following-sibling::td');

    
    }

}