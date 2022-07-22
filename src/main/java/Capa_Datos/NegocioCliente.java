package Capa_Datos;

import Class.*;
import util.MySQLConexion;
import java.sql.ResultSet;

public class NegocioCliente {
    
    public Cliente ValidarEmail(String Email, int IDCliente){
        Cliente c=new Cliente();
        try{
            MySQLConexion MySQL=new MySQLConexion();
            String SQL = "SELECT Email FROM cliente WHERE UPPER(Email) = UPPER('"+ Email +"') AND IDCliente != '"+ IDCliente + "'";
            ResultSet result=MySQL.Listar(SQL);            
            while(result.next()){
                c.setNombre(result.getString("Email"));
            }     
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return c;
    }
    
    public int RegistrarCliente(String Nombre, String Apellido, String Telefono, String Password, int TipoDocumento, String NumeroDocumento, String Email ){
        Comentario c= new Comentario();
        MySQLConexion MySQL=new MySQLConexion();
        String cad = "INSERT INTO cliente(Nombre, Apellido, Telefono, Password, TipoDocumento, NumeroDocumento, Email) VALUES ('" + Nombre + "','" + Apellido + "','" + Telefono + "','" + Password + "'," + TipoDocumento + ",'" + NumeroDocumento + "','" + Email + "')";
        return MySQL.Ejecutar(cad);
    }
    
    public int ActualizarCliente(int IDCliente, String Nombre, String Apellido, String Telefono, String Password, String Email){
        Comentario c= new Comentario();
        MySQLConexion MySQL=new MySQLConexion();
        String cad = "UPDATE Cliente SET Nombre='" + Nombre + "', Apellido='" + Apellido + "',Telefono='" + Telefono + "',Password='" + Password + "',Email='" + Email + "' WHERE IDCliente = " + IDCliente;
        return MySQL.Ejecutar(cad);
    }
   
    public Cliente ObtenerInformacionCliente(int IDCliente){
        Cliente c=new Cliente();
        try{
            MySQLConexion MySQL=new MySQLConexion();
            String SQL = "SELECT IDCliente, Nombre, Apellido, Telefono, TipoDocumento, NumeroDocumento, Email, Password FROM Cliente WHERE IDCliente=" + IDCliente;
            ResultSet result=MySQL.Listar(SQL);            
            while(result.next()){
                c.setIDCliente(result.getInt("IDCliente"));
                c.setNombre(result.getString("Nombre"));
                c.setApellido(result.getString("Apellido"));
                c.setTelefono(result.getString("Telefono"));                
                c.setTipoDocumento(result.getInt("TipoDocumento"));
                c.setNumeroDocumento(result.getString("NumeroDocumento")); 
                c.setEmail(result.getString("Email")); 
                c.setPassword(result.getString("Password"));
            }            
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return c;
    }
    
}
