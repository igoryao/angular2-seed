import {
	ComponentAnnotation as Component, 
	ViewAnnotation as View, 
	coreDirectives,
	For,
	bootstrap
} from 'angular2/angular2';


import { NameList } from 'services/NameList';

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

export function main(){
	bootstrap(SampleApp);
}

