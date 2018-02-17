import { Injectable }                        from '@angular/core';

import { FormData, Personal, Details, Work }       from './formData.model';
import { WorkflowService }                   from '../workflow/workflow.service';
import { STEPS }                             from '../workflow/workflow.model';

@Injectable()
export class FormDataService {

    private formData: FormData = new FormData();
    private isPersonalFormValid: boolean = false;
    private isWorkFormValid: boolean = false;
    private isDetailsFormValid: boolean = false;

    constructor(private workflowService: WorkflowService) { 
    }

    getPersonal(): Personal {
        // Return the Personal data
        var personal: Personal = {
            password: this.formData.password,
            confirmPassword: this.formData.confirmPassword,
            email: this.formData.email
        };
        return personal;
    }

    setPersonal(data: Personal) {
        // Update the Personal data only when the Personal Form had been validated successfully
        this.isPersonalFormValid = true;
        this.formData.password = data.password;
        this.formData.confirmPassword = data.confirmPassword;
        this.formData.email = data.email;
        // Validate Personal Step in Workflow
        this.workflowService.validateStep(STEPS.personal);
    }

    getWork() : Work {
        // Return the work type
        var work: Work = {
            facebook: this.formData.facebook,
            twitter: this.formData.twitter,
            google: this.formData.google
        };
        return work;
    }
    
    setWork(data: Work) {
        // Update the work type only when the Work Form had been validated successfully
        this.isWorkFormValid = true;
        this.formData.facebook = data.facebook;
        this.formData.twitter = data.twitter;
        this.formData.google = data.google;
        // Validate Work Step in Workflow
        this.workflowService.validateStep(STEPS.work);
    }

    getDetails() : Details {
        // Return the Details data
        var details: Details = {
            firstName: this.formData.firstName,
            lastName: this.formData.lastName,
            phone: this.formData.phone,
            address: this.formData.address
        };
        return details;
    }

    setDetails(data: Details) {
        // Update the Details data only when the Details Form had been validated successfully
        this.isDetailsFormValid = true;
        this.formData.firstName = data.firstName;
        this.formData.lastName = data.lastName;
        this.formData.phone = data.phone;
        this.formData.address = data.address;
        // Validate Details Step in Workflow
        this.workflowService.validateStep(STEPS.details);
    }

    getFormData(): FormData {
        // Return the entire Form Data
        return this.formData;
    }

    resetFormData(): FormData {
        // Reset the workflow
        this.workflowService.resetSteps();
        // Return the form data after all this.* members had been reset
        this.formData.clear();
        this.isPersonalFormValid = this.isWorkFormValid = this.isDetailsFormValid = false;
        return this.formData;
    }

    isFormValid() {
        // Return true if all forms had been validated successfully; otherwise, return false
        return this.isPersonalFormValid &&
                this.isWorkFormValid && 
                this.isDetailsFormValid;
    }
}