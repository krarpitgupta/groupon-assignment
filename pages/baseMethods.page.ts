import { Locator, Page, expect } from "@playwright/test";

export default class BaseMethods {

    readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    async goToURL(relativeUrl: string) {
        await this.page.goto(relativeUrl);
    }

    async validateText(locator: Locator, expectedText: string) {
        await expect(locator).toHaveText(expectedText);
    }

    async validateElementIsEnabled(locator: Locator) {
        await expect(locator).toBeEnabled();
    }

    async validateElementIsDisabled(locator: Locator) {
        await expect(locator).not.toBeEnabled();
    }

    async validateContainsText(locator: Locator, expectedText : string){
        await expect(locator).toContainText(expectedText);
    }

    async waitForElementToBeVisible(locator: string) {
        await this.page.waitForSelector(locator, {
            state: 'visible'
        });
    }

    async waitForLocator(locator: Locator){
        await locator.waitFor({
            state : 'visible'
        })
    };

    async verifyElementAttribute(locator: Locator, attribute: string, value: string) {
        const textValue = await locator.getAttribute(attribute);
        expect(textValue).toBe(value);
    }

    async validateElementVisible(locator: Locator) {
        await expect(locator).toBeVisible();
    }

    async validateCountOfElements(locator: Locator, expectedCount : number){
        await expect(locator).toHaveCount(expectedCount);
    }

    async validateCountOfElementsIsNotZero(locator: Locator){
        const count = await locator.count();
        await expect(count).toBeGreaterThanOrEqual(1);
    }

    async validateElementNotVisible(locator: Locator) {
        await expect(locator).not.toBeVisible();
    }

    async clickOnElement(locator: Locator) {
        await locator.click();
    }

    async fillInputValue(locator: Locator, inputValue: string) {
        await locator.fill(inputValue);
        await this.page.waitForTimeout(1500);
    }

    async pressInputValue(locator: Locator, inputValue: string) {
        await locator.pressSequentially(inputValue);
    }

    async hoverOnLocator(locator: Locator) {
        await locator.hover({ timeout: 5000 });
    }

    async waitforElement(timeout: number) {
        await this.page.waitForTimeout(timeout);
    }

    async getCurrentDate() {
        const months = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ];
        const currentDate = new Date();
        const dateString = currentDate.getDate() + " " + months[currentDate.getMonth()] + " " + currentDate.getFullYear();
        return dateString;
    }

    async validateElementBackgroundColor(locator: Locator, attribute: string, expectedColour: string) {
        await this.page.waitForTimeout(1500);
        const actualColor = await locator.evaluate((e) => {
            return window.getComputedStyle(e).getPropertyValue("border-color") // border-color
        })
        console.log("dd : " + actualColor);
        expect(actualColor).toBe(expectedColour);
    }


}