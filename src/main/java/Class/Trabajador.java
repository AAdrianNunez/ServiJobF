package Class;

public class Trabajador {
    private int IDTrabajador;
    private String IDUbigeodistrito;
    private String Nombre;
    private String Apellido;
    private String Telefono;
    private String Email;
    private int TipoDocumento;
    private String NumeroDocumento;
    private String Presentacion;
    private String FechaNacimiento;
    private String Servicio;
    private String Distrito;
    private int Tipo;
    private String Contraseña;
    private int IDSolicitud;

    public int getIDSolicitud() {
        return IDSolicitud;
    }

    public void setIDSolicitud(int IDSolicitud) {
        this.IDSolicitud = IDSolicitud;
    }
    

    public String getDistrito() {
        return Distrito;
    }

    public void setDistrito(String Distrito) {
        this.Distrito = Distrito;
    }
    
    public int getIDTrabajador() {
        return IDTrabajador;
    }

    public void setIDTrabajador(int IDTrabajador) {
        this.IDTrabajador = IDTrabajador;
    }

    public String getNombre() {
        return Nombre;
    }

    public void setNombre(String Nombre) {
        this.Nombre = Nombre;
    }

    public void setTelefono(String Telefono) {
        this.Telefono = Telefono;
    }

    public String getApellido() {
        return Apellido;
    }

    public void setApellido(String Apellido) {
        this.Apellido = Apellido;
    }

    public String getIDUbigeodistrito() {
        return IDUbigeodistrito;
    }

    public void setIDUbigeodistrito(String IDUbigeodistrito) {
        this.IDUbigeodistrito = IDUbigeodistrito;
    }

    public String getEmail() {
        return Email;
    }

    public void setEmail(String Email) {
        this.Email = Email;
    }

    public int getTipoDocumento() {
        return TipoDocumento;
    }

    public void setTipoDocumento(int TipoDocumento) {
        this.TipoDocumento = TipoDocumento;
    }

    public String getNumeroDocumento() {
        return NumeroDocumento;
    }

    public void setNumeroDocumento(String NumeroDocumento) {
        this.NumeroDocumento = NumeroDocumento;
    }

    

    public String getPresentacion() {
        return Presentacion;
    }

    public void setPresentacion(String Presentacion) {
        this.Presentacion = Presentacion;
    }

    public String getFechaNacimiento() {
        return FechaNacimiento;
    }

    public void setFechaNacimiento(String FechaNacimiento) {
        this.FechaNacimiento = FechaNacimiento;
    }

    public String getServicio() {
        return Servicio;
    }

    public void setServicio(String Servicio) {
        this.Servicio = Servicio;
    }

    public int getTipo() {
        return Tipo;
    }

    public void setTipo(int Tipo) {
        this.Tipo = Tipo;
    }

    public String getContraseña() {
        return Contraseña;
    }

    public void setContraseña(String Contraseña) {
        this.Contraseña = Contraseña;
    }
}
