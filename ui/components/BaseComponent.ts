import {element, ElementArrayFinder, ElementFinder, Locator} from "protractor";

export class BaseComponent {

    public element: ElementFinder;
    public elementArray: ElementArrayFinder;
    public locator: Locator;
    public name: string;

    protected constructor(locator: Locator, name: string) {
        this.locator = locator;
        this.name = name;
        this.finder();
    }

    public click(el: ElementFinder = this.element) {
        el.click();
    }

    public sendKeys(input, el: ElementFinder = this.element) {
        el.sendKeys(input);
    }

    public compareText(text, el: ElementFinder = this.element) {
        expect(el.getText()).toEqual(text);
    }

    private finder() {
        this.elementArray = element.all(this.locator);
        this.element = this.elementArray.get(0);
    }

}