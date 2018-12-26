
export class GlobalError {

    readonly message: string;
    //readonly route: string
    readonly statusCode: number;

    constructor( message: string, status: number ) {
        this.message = message;
        //this.route = endpoint;
        this.statusCode = status;
    }
}
