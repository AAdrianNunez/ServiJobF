package Capa_Datos;

import Class.Solicitud;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;
import util.MySQLConexion;

public class NegocioSolicitud {
        
    public List<Solicitud> ListarSolicitudes(int IDTrabajador){
        List<Solicitud> List=new ArrayList();
        try{
            MySQLConexion MySQL=new MySQLConexion();
            String SQL = "SELECT IDSolicitud, C.IDCliente, C.Nombre, C.Apellido, C.Telefono, C.Email FROM solicitud S INNER JOIN cliente C ON S.IDCliente = C.IDCliente WHERE S.Estado = 1 AND S.IDTrabajador = " + IDTrabajador;
            ResultSet result=MySQL.Listar(SQL);            
            while(result.next()){  
                Solicitud s=new Solicitud();
                s.setIDSolicitud(result.getInt("IDSolicitud"));
                s.setIDCliente(result.getInt("IDCliente"));
                s.setNombre(result.getString("Nombre"));
                s.setApellido(result.getString("Apellido"));
                s.setTelefono(result.getString("Telefono"));
                s.setEmail(result.getString("Email"));
                List.add(s);
            }            
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return List;
    }
    
    public int RegistrarSolicitud(int IDCliente, int IDTrabajador){
        MySQLConexion MySQL=new MySQLConexion();
        String cad = "INSERT INTO solicitud(IDCliente, IDTrabajador) VALUES (" + IDCliente + "," + IDTrabajador + ")";
        return MySQL.Ejecutar(cad);
    }
    
    public int ActualizarSolicitudCliente(int IDCliente, int IDTrabajador){
        MySQLConexion MySQL=new MySQLConexion();
        String cad = "UPDATE solicitud SET Estado = 3 WHERE IDCliente = " + IDCliente + " AND IDTrabajador = " + IDTrabajador;
        return MySQL.Ejecutar(cad);
    }
    
    public int ActualizarSolicitudTrabajador(int IDSolicitud){
        MySQLConexion MySQL=new MySQLConexion();
        String cad = "UPDATE solicitud SET Estado = 2 WHERE IDSolicitud = " + IDSolicitud;
        return MySQL.Ejecutar(cad);
    }
}