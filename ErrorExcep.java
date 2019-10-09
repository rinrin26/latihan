import java.io.*;

public class ErrorExcep  extends Exception{


    public String operator;
    public ErrorExcep(String operator){
       this.operator = operator;
     }
   // public ExceptionPembagianDenganAngkaNol(String pesan){
     //   super (pesan);
      // }
    
    
    public String getMessage() {
        return operator;
    }
}