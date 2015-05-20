import {
	ComponentAnnotation as Component, 
	ViewAnnotation as View, 
	coreDirectives,
	For,
	If,
	bootstrap
} from 'angular2/angular2';

import { FormBuilder, Validators, formDirectives, ControlGroup} from 'angular2/forms';

import { NameList } from 'services/NameList';
import { EmailValidator } from 'services/Validators';


@Component({
    selector: 'sample-app'
})

@View({
	templateUrl: './templates/sample-app.html',
	directives: [For]
})

class SampleApp {

    constructor() {
        this.names = NameList.get();
        this.newName = '';
 
    }
    addName(newname) {
        this.names.push(newname.value);
        newname.value = '';
    }

    removeName(name) {
        var index = this.names.indexOf(name);
        name !== -1 && this.names.splice(index, 1);
    }
}


@Component({
    selector: 'sample-form',
    injectables: [FormBuilder]
})

@View({
	templateUrl: './templates/sample-form.html',
	directives: [ formDirectives, If]
})


class SampleForm {

  form: ControlGroup;

   constructor(builder: FormBuilder) {
     this.form = builder.group({
       username: ["larry", Validators.required],
       email: ["",  EmailValidator.email  ]
     });
   }
 }

export function main(){
	bootstrap(SampleApp);
	bootstrap(SampleForm);
}

