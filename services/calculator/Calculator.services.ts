import {CalculatorUi} from "../../ui/userStories/calculator/Calculator.ui";

export class CalculatorServices {

    public ui: CalculatorUi;

    constructor() {
        this.ui = new CalculatorUi();
    }

    public calculate() {
        this.ui.input1.sendKeys(1);
        this.ui.input2.sendKeys(3);
        this.ui.btn.click();
    }

}