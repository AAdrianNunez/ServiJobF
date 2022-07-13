package Capa_Datos;

import Class.UbigeoDistrito;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;
import util.MySQLConexion;

public class NegocioUbigeoDistrito {
    
    public List<UbigeoDistrito> ListaUbigeoDistrito(){
        List<UbigeoDistrito> List=new ArrayList();
        try{
            MySQLConexion MySQL=new MySQLConexion();
            String SQL = "SELECT IDUbigeoDistrito, Nombre FROM ubigeodistrito ORDER BY Nombre";
            ResultSet result=MySQL.Listar(SQL);            
            while(result.next()){  
                UbigeoDistrito u=new UbigeoDistrito();
                u.setIDUbigeodistrito(result.getString("IDUbigeoDistrito"));
                u.setNombre(result.getString("Nombre"));               
                List.add(u);
            }            
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return List;
    }
}
