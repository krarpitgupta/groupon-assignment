import { test, Page } from "@playwright/test";
import BaseMethods from "../../pages/baseMethods.page";
import RegistrationFormLocator from "../../locators/registrationForm.locator";
import RegistrationFormPage from "../../pages/registrationForm.page";
import testConstants from "../../data/testConstants.json";
import testData from "../../data/testData.json"
import path from "path";

let baseMethods: any;
let registrationFormLocator: any;
let registrationFormPage: any;


test.describe(`Tests For Student Registration Form Fields`, async () => {

    test.beforeEach(async ({ page }) => {
        baseMethods = new BaseMethods(page);
        registrationFormLocator = new RegistrationFormLocator(page);
        registrationFormPage = new RegistrationFormPage(page);
        await registrationFormPage.lauchApp();
        await registrationFormPage.validateAppNavigateSuccessfully(testConstants.form_heading);
        await registrationFormPage.disableAds();
    });

    test(`Validate the Presence of Interactable-UI Elements in Form`, async ({}) => {
        
        await Promise.all([
            
            baseMethods.validateElementVisible(registrationFormLocator.firstNameEditBox),
            baseMethods.validateElementVisible(registrationFormLocator.lastNameEditBox),
            baseMethods.validateElementVisible(registrationFormLocator.emailEditBox),
            baseMethods.validateElementVisible(registrationFormLocator.maleRadioBtn),
            baseMethods.validateElementVisible(registrationFormLocator.femaleRadioBtn),
            baseMethods.validateElementVisible(registrationFormLocator.otherRadioBtn),
            baseMethods.validateElementVisible(registrationFormLocator.mobileNoEditBox),
            baseMethods.validateElementVisible(registrationFormLocator.dobEditBox),
            baseMethods.validateElementVisible(registrationFormLocator.subjectsEditBox),
            baseMethods.validateElementVisible(registrationFormLocator.sportsCheckBox),
            baseMethods.validateElementVisible(registrationFormLocator.readingCheckBox),
            baseMethods.validateElementVisible(registrationFormLocator.musicCheckBox),
            baseMethods.validateElementVisible(registrationFormLocator.chooseFileBtn),
            baseMethods.validateElementVisible(registrationFormLocator.currentAddressEditBox),
            baseMethods.validateElementVisible(registrationFormLocator.stateDropdown),
            baseMethods.validateElementVisible(registrationFormLocator.cityDropdown),
            baseMethods.validateElementVisible(registrationFormLocator.submitBtn)

        ]);
    
    });

    test(`Validate the Presence of Non-Interactable-UI Elements (Label) in Form`, async ({}) => {
        
        await Promise.all([
            
            baseMethods.validateElementVisible(registrationFormLocator.nameLabel),
            baseMethods.validateElementVisible(registrationFormLocator.emailLabel),
            baseMethods.validateElementVisible(registrationFormLocator.genderLabel),
            baseMethods.validateElementVisible(registrationFormLocator.maleLabel),
            baseMethods.validateElementVisible(registrationFormLocator.femaleLabel),
            baseMethods.validateElementVisible(registrationFormLocator.otherLabel),
            baseMethods.validateElementVisible(registrationFormLocator.mobileLabel),
            baseMethods.validateElementVisible(registrationFormLocator.dobLabel),
            baseMethods.validateElementVisible(registrationFormLocator.subjectsLabel),
            baseMethods.validateElementVisible(registrationFormLocator.hobbiesLabel),
            baseMethods.validateElementVisible(registrationFormLocator.sportsLabel),
            baseMethods.validateElementVisible(registrationFormLocator.readingLabel),
            baseMethods.validateElementVisible(registrationFormLocator.musicLabel),
            baseMethods.validateElementVisible(registrationFormLocator.pictureLabel),
            baseMethods.validateElementVisible(registrationFormLocator.selectPictureLabel),
            baseMethods.validateElementVisible(registrationFormLocator.noFileLabel),
            baseMethods.validateElementVisible(registrationFormLocator.currentAddressLabel),
            baseMethods.validateElementVisible(registrationFormLocator.stateCityLabel)

        ]);
    
    });

    test(`Validate the Label Text of Non-Interactable-UI Elements (Label) in Form`, async ({}) => {
        
        await Promise.all([
            
            baseMethods.validateText(registrationFormLocator.nameLabel, testConstants.name_label),
            baseMethods.validateText(registrationFormLocator.emailLabel, testConstants.email_label),
            baseMethods.validateText(registrationFormLocator.genderLabel, testConstants.gender_label),
            baseMethods.validateText(registrationFormLocator.maleLabel, testConstants.male_label),
            baseMethods.validateText(registrationFormLocator.femaleLabel, testConstants.female_label),
            baseMethods.validateText(registrationFormLocator.otherLabel, testConstants.other_label),
            baseMethods.validateText(registrationFormLocator.mobileLabel, testConstants.mobile_no_label),
            baseMethods.validateText(registrationFormLocator.dobLabel, testConstants.dob_label),
            baseMethods.validateText(registrationFormLocator.subjectsLabel, testConstants.subjects_label),
            baseMethods.validateText(registrationFormLocator.hobbiesLabel, testConstants.hobbies_label),
            baseMethods.validateText(registrationFormLocator.sportsLabel, testConstants.sports_label),
            baseMethods.validateText(registrationFormLocator.readingLabel, testConstants.reading_label),
            baseMethods.validateText(registrationFormLocator.musicLabel, testConstants.music_label),
            baseMethods.validateText(registrationFormLocator.pictureLabel, testConstants.picture_label),
            baseMethods.validateText(registrationFormLocator.selectPictureLabel, testConstants.select_picture_label),
            baseMethods.validateText(registrationFormLocator.currentAddressLabel, testConstants.current_address_label),
            baseMethods.validateText(registrationFormLocator.stateCityLabel, testConstants.state_city_label)

        ]);
    
    });

    test(`Validate the Form Required Fields Are Enabled/Disabled`, async ({}) => {
        
        await Promise.all([

            baseMethods.validateElementIsEnabled(registrationFormLocator.firstNameEditBox),
            baseMethods.validateElementIsEnabled(registrationFormLocator.lastNameEditBox),
            baseMethods.validateElementIsEnabled(registrationFormLocator.emailEditBox),
            baseMethods.validateElementIsEnabled(registrationFormLocator.maleRadioBtn),
            baseMethods.validateElementIsEnabled(registrationFormLocator.femaleRadioBtn),
            baseMethods.validateElementIsEnabled(registrationFormLocator.otherRadioBtn),
            baseMethods.validateElementIsEnabled(registrationFormLocator.mobileNoEditBox),
            baseMethods.validateElementIsEnabled(registrationFormLocator.dobEditBox),
            baseMethods.validateElementIsEnabled(registrationFormLocator.subjectsEditBox),
            baseMethods.validateElementIsEnabled(registrationFormLocator.sportsCheckBox),
            baseMethods.validateElementIsEnabled(registrationFormLocator.readingCheckBox),
            baseMethods.validateElementIsEnabled(registrationFormLocator.musicCheckBox),
            baseMethods.validateElementIsEnabled(registrationFormLocator.chooseFileBtn),
            baseMethods.validateElementIsEnabled(registrationFormLocator.currentAddressEditBox),
            baseMethods.validateElementIsEnabled(registrationFormLocator.stateDropdown),
            baseMethods.validateElementIsEnabled(registrationFormLocator.submitBtn),
            baseMethods.validateElementIsDisabled(registrationFormLocator.cityEditBox)

        ]);
    
    });

    test(`Validate the Form Required Input Fields Has Correct Placeholder/Default Text Value`, async ({}) => {
        
        await Promise.all([

            baseMethods.verifyElementAttribute(registrationFormLocator.firstNameEditBox, "placeholder", testConstants.first_name_placeholder),
            baseMethods.verifyElementAttribute(registrationFormLocator.lastNameEditBox, "placeholder", testConstants.last_name_placeholder),
            baseMethods.verifyElementAttribute(registrationFormLocator.emailEditBox, "placeholder", testConstants.email_placeholder),
            baseMethods.verifyElementAttribute(registrationFormLocator.mobileNoEditBox, "placeholder", testConstants.mobile_no_placeholder),
            baseMethods.verifyElementAttribute(registrationFormLocator.currentAddressEditBox, "placeholder", testConstants.current_address_placeholder),
            
            baseMethods.validateText(registrationFormLocator.stateDropdown, testConstants.state_default_value),
            baseMethods.validateText(registrationFormLocator.cityDropdown, testConstants.city_default_value),
            baseMethods.validateText(registrationFormLocator.submitBtn, testConstants.submit_default_value),

        ]);
    
    });

    test(`Validate When Click On Submit Button Without Filling Any Value Then Mandatory Fields Colour Should Change To RED`, async ({}) => {
        
        await baseMethods.clickOnElement(registrationFormLocator.submitBtn);
        await baseMethods.validateElementBackgroundColor(registrationFormLocator.firstNameEditBox, "border-color", testData.red_colour);
        await baseMethods.validateElementBackgroundColor(registrationFormLocator.lastNameEditBox, "border-color", testData.red_colour);
        await baseMethods.validateElementBackgroundColor(registrationFormLocator.mobileNoEditBox, "border-color", testData.red_colour);
        await baseMethods.validateElementBackgroundColor(registrationFormLocator.maleLabel, "color", testData.red_colour);
        await baseMethods.validateElementBackgroundColor(registrationFormLocator.femaleLabel, "color", testData.red_colour);
        await baseMethods.validateElementBackgroundColor(registrationFormLocator.otherLabel, "color", testData.red_colour);
    
    });

    test(`Validate When Click On Submit Button Without Filling Any Value Then Non-Mandatory Fields Colour Should Change To GREEN`, async ({}) => {
        
        await baseMethods.clickOnElement(registrationFormLocator.submitBtn);
        await baseMethods.validateElementBackgroundColor(registrationFormLocator.emailEditBox, "border-color", testData.green_colour);
        await baseMethods.validateElementBackgroundColor(registrationFormLocator.dobEditBox, "border-color", testData.green_colour);
        await baseMethods.validateElementBackgroundColor(registrationFormLocator.sportsLabel, "color", testData.green_colour);
        await baseMethods.validateElementBackgroundColor(registrationFormLocator.readingLabel, "color", testData.green_colour);
        await baseMethods.validateElementBackgroundColor(registrationFormLocator.musicLabel, "color", testData.green_colour);
        await baseMethods.validateElementBackgroundColor(registrationFormLocator.currentAddressEditBox, "border-color", testData.green_colour);
    
    });

    test(`When Launch The App By Default DOB Should Set To Current Date`, async ({}) => {
        
        await baseMethods.verifyElementAttribute(registrationFormLocator.dobEditBox, "value", await baseMethods.getCurrentDate());
    
    });

    test(`Email Field Should Accept Only Valid Emails`, async ({}) => {
        
        const invalidEmails = ["123akg.commm","987654321.com","98765456785678","ojjsdbcadksgbchaksga"];
        await registrationFormPage.validateInvalidEmails(invalidEmails);
        
    });

    test(`Mobile Number Field Should Accept Only Valid Mobile No`, async ({}) => {
        
        const invalidMobiles = ["0987","abcdefghij",")(*&^%$#@!","abc123)(*&"];
        await registrationFormPage.validateInvalidMobiles(invalidMobiles);
        
    });

    test(`User Should Be Able To Submit Registration Form & Validate Form Values`, async ({}) => {

        let studentName = testData.first_name + " " + testData.last_name;
        let pictureName = "testFile.csv";
        let stateCity = testData.state + " " + testData.city;
        
        await registrationFormPage.fillTextFieldInRegistrationForm(testData.first_name, testData.last_name, testData.email, testData.mobile_number, testData.current_address, testData.state, testData.city);
        await registrationFormPage.selectHobbies(testData.hobbies);
        await registrationFormPage.selectGender(testData.gender);
        await registrationFormPage.addSubjects(testData.subjects);
        await registrationFormPage.uploadPicture(path.join(__dirname, pictureName));
        await baseMethods.clickOnElement(registrationFormLocator.submitBtn);

        await registrationFormPage.validateFormSubmitSuccessfully(testConstants.form_success_submit_msg);
        await registrationFormPage.validateFormLabelValues(studentName, testData.email, testData.gender, testData.mobile_number, "11 February,2024", testData.subjects, testData.hobbies, pictureName, testData.current_address, stateCity);
        
    });





})
