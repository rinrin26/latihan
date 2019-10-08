public class CalculatorDemo{
    public static void main(String[] args) {

        UserIn UserInObject = new UserIn();
        Operasi jumlah = new Operasi();
        DisplayOutpot tampil = new DisplayOutpot();
        
        try{
        System.out.println("masukkan angka pertama :");
        int bil1 = UserInObject.bilangan1();
        System.out.println("masukkan angka kedua :");
        int bil2 = UserInObject.bilangan2();vv
        System.out.println("masukkan Operand (+,-,*,/) :");
        String oprator = UserInObject.oprator();
       
         //cuman return hasil
        int hasil = jumlah.hitung(oprator,bil1,bil2); //hitung 
        tampil.displayOut(hasil, bil1,bil2); //display
        }catch (ErrorExcep e){
               // System.out.println(e);
               System.out.println(e.getMessage()); 
        }
    
        }
}
