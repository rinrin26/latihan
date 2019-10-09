public class Operasi extends UserIn{
    public int hasilJumlah;
    

    public int hasil(int hasilJumlah){
        return (int)hasilJumlah;
    }
    
    public int hitung(String operator, int bil1, int bil2) throws ErrorExcep{
        
        if (operator.equals("+")) {
            return hasilJumlah= bil1 + bil2;
        } else if(operator.equals("-")) {
            return hasilJumlah = bil1 - bil2;
        }   else if (operator.equals("*")){
            return hasilJumlah = bil1 * bil2;
        }    else if (operator.equals("/")){
            return hasilJumlah = bil1 / bil2;
        } else if ( operator.equals("%")) {
            return hasilJumlah = bil1 % bil2;
         }else{
             //excep menangani slah operasi 
             throw new  ErrorExcep("operator salah ");
         }
         
          
 
         //else if(operator.equals("bola")){
              //  if(bil1 == 1){//luas
                //    return 4 * Math.PI * bil2 *bil2;
                 // }
                  //else {
                   //   return 4 /3 *Math.PI * bil2*bil2;
                  //}
           // }
       //return hasilJumlah;


    }

	
}

