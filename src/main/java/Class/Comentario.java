
package Class;


public class Comentario {
    private int IDComentario;
    private int IDCliente;
    private String Cliente;
    private String Comentario;
    private String Fecha;

    
    public String getCliente() {
        return Cliente;
    }

    public void setCliente(String Cliente) {
        this.Cliente = Cliente;
    }

    public int getIDComentario() {
        return IDComentario;
    }

    public void setIDComentario(int IDComentario) {
        this.IDComentario = IDComentario;
    }

    public int getIDCliente() {
        return IDCliente;
    }

    public void setIDCliente(int IDCliente) {
        this.IDCliente = IDCliente;
    }

    public String getComentario() {
        return Comentario;
    }

    public void setComentario(String Comentario) {
        this.Comentario = Comentario;
    }

    public String getFecha() {
        return Fecha;
    }

    public void setFecha(String Fecha) {
        this.Fecha = Fecha;
    }
    
}
