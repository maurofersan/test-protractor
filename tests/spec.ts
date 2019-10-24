import {CalculatorServices} from "../services/calculator/Calculator.services";
import {LoginServices} from "../services/login/Login.services";
import {firefox} from "../util/core";

export class SpecDefinition {
    @firefox()
    public static spec() {
        const calculatorServices = new CalculatorServices();

        it('should add one and two', () => {
            LoginServices.login();
            calculatorServices.calculate();
            calculatorServices.ui.result.compareText('4');
        });
    }
}

describe('Protractor Demo App', SpecDefinition.spec);


