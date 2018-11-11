
export class GlobalError {

    readonly message: string;

    readonly date: Date;

    readonly route: string

    readonly statusCode: number;

    constructor( message: string, endpoint: string, status: number ) {
        this.message = message;
        this.date = new Date();
        this.route = endpoint;
        this.statusCode = status;
    }
}
