import {InputComponent} from "../../components/types/InputComponent";
import {by} from "protractor";
import {ButtonComponent} from "../../components/types/ButtonComponent";
import {LabelComponent} from "../../components/types/LabelComponent";

export class CalculatorUi {

    public input1 = new InputComponent(by.model('first'), 'Input 1');

    public input2 = new InputComponent(by.model('second'), 'Input 2');

    public btn = new ButtonComponent(by.id('gobutton'), 'Button');

    public result = new LabelComponent(by.binding('latest'), 'Label result');

}
