import { Component, OnInit, Input }   from '@angular/core';

import { FormData }                   from '../data/formData.model';
import { FormDataService }            from '../data/formData.service';

@Component ({
    selector:     'mt-wizard-result'
    ,templateUrl: './result.component.html'
})

export class ResultComponent implements OnInit {
    @Input() formData: FormData;
    isFormValid: boolean = false;
    
    constructor(private formDataService: FormDataService) {
    }

    ngOnInit() {
        this.formData = this.formDataService.getFormData();
        this.isFormValid = this.formDataService.isFormValid();
    }

    submit() {
        alert('Done!');
        this.formData = this.formDataService.resetFormData();
        this.isFormValid = false;
    }
}
