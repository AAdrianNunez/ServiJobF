
package Class;

import java.util.*;

public class Calificacion {
    private int IDCalificacion;
    private int IDCliente;
    private int IDTrabajador;
    public int Puntajes;
    
    public double PromedioCalificacion(List<Calificacion> list){
       double sum=0;
       for(Calificacion x:list){
           sum += x.Puntajes;
       }
       return sum/list.size();
    }
    
    public int getIDCalificacion() {
        return IDCalificacion;
    }

    public void setIDCalificacion(int IDCalificacion) {
        this.IDCalificacion = IDCalificacion;
    }

    public int getIDTrabajador() {
        return IDTrabajador;
    }

    public void setIDTrabajador(int IDTrabajador) {
        this.IDTrabajador = IDTrabajador;
    }

    public int getPuntajes() {
        return Puntajes;
    }

    public void setPuntajes(int Puntajes) {
        this.Puntajes = Puntajes;
    }

    public int getIDCliente() {
        return IDCliente;
    }

    public void setIDCliente(int IDCliente) {
        this.IDCliente = IDCliente;
    }
    
}
