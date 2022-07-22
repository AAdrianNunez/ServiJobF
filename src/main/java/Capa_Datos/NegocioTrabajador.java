package Capa_Datos;

import Class.*;
import util.MySQLConexion;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

public class NegocioTrabajador {
    
    public List<Trabajador> ListaTrabajador(String Filter, String IDUbigeoDistrito){
        List<Trabajador> List=new ArrayList();
        try{
            MySQLConexion MySQL=new MySQLConexion();
            String SQL = "SELECT T.IDTrabajador, T.Nombre, Apellido, FechaNacimiento, TipoDocumento, NumeroDocumento, UD.Nombre AS Distrito, GROUP_CONCAT(DISTINCT S.Oficio) AS Servicio FROM trabajador T INNER JOIN ubigeodistrito UD ON T.IDUbigeoDistrito = UD.IDUbigeoDistrito INNER JOIN serviciotrabajador ST ON T.IDTrabajador=ST.IDTrabajador INNER JOIN servicio S ON S.IDServicio=ST.IDServicio WHERE (T.Nombre LIKE '%" + Filter + "%' OR Apellido LIKE '%" + Filter + "%' OR S.Oficio LIKE '%" + Filter + "%') AND (UD.IDUbigeoDistrito = '" + IDUbigeoDistrito + "' OR '" + IDUbigeoDistrito + "' = '0') GROUP BY T.IDTrabajador";
            ResultSet result=MySQL.Listar(SQL);            
            while(result.next()){  
                Trabajador t=new Trabajador();
                t.setIDTrabajador(result.getInt("IDTrabajador"));
                t.setNombre(result.getString("Nombre"));
                t.setApellido(result.getString("Apellido"));
                t.setFechaNacimiento(result.getString("FechaNacimiento"));
                t.setTipoDocumento(result.getInt("TipoDocumento"));
                t.setNumeroDocumento(result.getString("NumeroDocumento"));
                t.setDistrito(result.getString("Distrito"));                
                t.setServicio(result.getString("Servicio"));
                List.add(t);
            }            
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return List;
    }
    
    public Trabajador ObtenerInformacionTrabajadorCliente(int IDTrabajador, int IDCliente){
        Trabajador t=new Trabajador();
        try{
            MySQLConexion MySQL=new MySQLConexion();
            String SQL = "SELECT T.IDTrabajador, T.Nombre, Apellido, FechaNacimiento, Telefono, Email, Presentacion, TipoDocumento, NumeroDocumento, UD.Nombre AS Distrito, IDSolicitud, S.Estado AS EstadoSolicitud FROM trabajador T INNER JOIN ubigeodistrito UD ON T.IDUbigeoDistrito = UD.IDUbigeoDistrito LEFT JOIN solicitud S ON T.IDTrabajador = S.IDTrabajador AND S.IDCliente = " + IDCliente + " WHERE T.IDTrabajador = " + IDTrabajador;
            ResultSet result=MySQL.Listar(SQL);            
            while(result.next()){
                t.setIDTrabajador(result.getInt("IDTrabajador"));
                t.setNombre(result.getString("Nombre"));
                t.setApellido(result.getString("Apellido"));
                t.setFechaNacimiento(result.getString("FechaNacimiento")); 
                t.setTelefono(result.getString("Telefono"));
                t.setEmail(result.getString("Email"));
                t.setPresentacion(result.getString("Presentacion"));                
                t.setTipoDocumento(result.getInt("TipoDocumento"));
                t.setNumeroDocumento(result.getString("NumeroDocumento"));
                t.setDistrito(result.getString("Distrito"));
                t.setIDSolicitud(result.getString("IDSolicitud") == null ? 0 : result.getInt("IDSolicitud"));
                t.setEstadoSolicitud(result.getString("EstadoSolicitud") == null ? 0 : result.getInt("EstadoSolicitud"));
            }            
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return t;
    }    
    
    public double PuntajeTrabajador(int IDTrabajador){
        double puntaje=0;
        List<Calificacion> List=new ArrayList();
        try{
            MySQLConexion MySQL=new MySQLConexion();
            String SQL = "SELECT Puntaje FROM Calificacion WHERE IDTrabajador=" +IDTrabajador;
            ResultSet result=MySQL.Listar(SQL);            
            while(result.next()){  
                Calificacion c=new Calificacion();
                c.setPuntaje(result.getInt("Puntaje"));
                List.add(c);
            }            
        }catch (Exception ex){
            ex.printStackTrace();
        }
        if(List.size()>0){    
            double sum=0;
            for(Calificacion x:List){
                sum += x.Puntaje;
            }  
            puntaje=sum/List.size();
        }
        return puntaje;
    }
           
    public List<Comentario> ListarComentarioPorTrabajador(int IDTrabajador){
        List<Comentario> List=new ArrayList();
        try{
            MySQLConexion MySQL=new MySQLConexion();
            String SQL = "SELECT CONCAT(CL.Nombre, ' ', CL.Apellido) AS Cliente , C.Comentario, C.Fecha FROM comentario C INNER JOIN cliente CL ON C.IDCliente=CL.IDCliente WHERE C.IDTrabajador=" + IDTrabajador;
            ResultSet result=MySQL.Listar(SQL);            
            while(result.next()){  
                Comentario c=new Comentario();
                c.setCliente(result.getString("Cliente"));
                c.setComentario(result.getString("Comentario"));
                c.setFecha(result.getString("Fecha"));
                List.add(c);
            }            
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return List;
    }
    
    public int CrearComentario(int IDCliente, int IDTrabajador, String Comentario){
        MySQLConexion MySQL=new MySQLConexion();
        String cad = "INSERT INTO comentario(IDCliente, IDTrabajador, Comentario, Fecha) VALUES (" + IDCliente + "," + IDTrabajador +",'"+ Comentario +"', NOW())";
        return MySQL.Ejecutar(cad);
    }
    
    public int RegistrarCalificacion(int IDCliente, int IDTrabajador, int Puntaje){
        MySQLConexion MySQL=new MySQLConexion();
        String cad = "INSERT INTO calificacion(IDCliente, IDTrabajador, Puntaje) VALUES (" + IDCliente + "," + IDTrabajador + "," + Puntaje + ")";
        int retval = MySQL.Ejecutar(cad);
        if(retval > 0){
            NegocioSolicitud m = new NegocioSolicitud();
            m.ActualizarSolicitudCliente(IDCliente, IDTrabajador);
        }
        return retval;
    }
    
    public Trabajador ObtenerInformacionTrabajador(int IDTrabajador){
        Trabajador t=new Trabajador();
        try{
            MySQLConexion MySQL=new MySQLConexion();
            String SQL = "SELECT T.IDTrabajador, T.Nombre, Apellido, FechaNacimiento, Telefono, Email, Presentacion, TipoDocumento, NumeroDocumento, Password, T.IDUbigeoDistrito FROM trabajador T INNER JOIN ubigeodistrito UD ON T.IDUbigeoDistrito = UD.IDUbigeoDistrito WHERE T.IDTrabajador = " + IDTrabajador;
            ResultSet result=MySQL.Listar(SQL);            
            while(result.next()){
                t.setIDTrabajador(result.getInt("IDTrabajador"));
                t.setNombre(result.getString("Nombre"));
                t.setApellido(result.getString("Apellido"));
                t.setFechaNacimiento(result.getString("FechaNacimiento")); 
                t.setTelefono(result.getString("Telefono"));
                t.setEmail(result.getString("Email"));
                t.setPresentacion(result.getString("Presentacion"));                
                t.setTipoDocumento(result.getInt("TipoDocumento"));
                t.setNumeroDocumento(result.getString("NumeroDocumento"));
                t.setIDUbigeodistrito(result.getString("IDUbigeoDistrito"));
                t.setPassword(result.getString("Password"));
            }            
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return t;
    }       
    
    public int ActualizarTrabajador(int IDTrabajador, String IDUbigeoDistrito, String Telefono, String Presentacion, String Email, String Password){
        Trabajador t= new Trabajador();
        MySQLConexion MySQL=new MySQLConexion();
        String cad = "UPDATE Trabajador SET IDUbigeoDistrito = '" + IDUbigeoDistrito + "', Telefono = '" + Telefono + "', Presentacion = '" + Presentacion + "', Email = '" + Email + "', Password='" + Password + "' WHERE IDTrabajador = " + IDTrabajador;
        return MySQL.Ejecutar(cad);
    }
}
