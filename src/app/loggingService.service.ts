export class loggingService{
    logStatusChanged(status:string){
        console.log("Logging Server status changed, New server: "+status);
    }
}