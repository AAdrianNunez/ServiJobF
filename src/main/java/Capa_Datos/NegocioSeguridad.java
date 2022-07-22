package Capa_Datos;

import Class.*;
import util.MySQLConexion;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

public class NegocioSeguridad {
    
    public List<Usuario> ValidarUsuario(String Email, String Password){
        List<Usuario> List=new ArrayList();
        try{
            MySQLConexion MySQL=new MySQLConexion();
            String SQL = "SELECT ID, Nombre, Apellido, Tipo FROM (SELECT IDCliente AS ID, Nombre, Apellido, Email, Password, 1 AS Tipo FROM cliente UNION ALL SELECT IDTrabajador AS ID, Nombre, Apellido, Email, Password, 2 AS Tipo FROM trabajador) T WHERE UPPER(Email) = UPPER('"+ Email +"') AND Password = '"+ Password + "'";
            ResultSet result=MySQL.Listar(SQL);            
            while(result.next()){  
                Usuario u=new Usuario();
                u.setID(result.getInt("ID"));
                u.setNombre(result.getString("Nombre"));
                u.setApellido(result.getString("Apellido"));
                u.setTipo(result.getInt("Tipo"));
                List.add(u);
            }            
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return List;
    }    
}