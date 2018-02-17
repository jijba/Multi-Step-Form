export class FormData {
    password: string = '';
    confirmPassword : string = '';
    email: string = '';
    facebook: string = '';
    google: string = '';
    twitter: string = '';
    firstName: string = '';
    lastName: string = '';
    phone: string = '';
    address: string = '';

    clear() {
        this.password = '';
        this.confirmPassword = '';
        this.email = '';
        this.facebook = '';
        this.google = '';
        this.twitter = '';
        this.firstName = '';
        this.lastName = '';
        this.phone = '';
        this.address = '';
    }
}

export class Personal {
    password: string = '';
    confirmPassword : string = '';
    email: string = '';
}

export class Work {
    facebook: string = '';
    twitter : string = '';
    google: string = '';
}

export class Details {
    firstName: string = '';
    lastName: string = '';
    phone: string = '';
    address: string = '';
}