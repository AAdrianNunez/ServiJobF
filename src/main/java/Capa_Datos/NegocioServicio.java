package Capa_Datos;

import Class.*;
import util.MySQLConexion;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

public class NegocioServicio {
    
    public List<Servicio> ListarServicios(){
        List<Servicio> List=new ArrayList();
        try{
            MySQLConexion MySQL=new MySQLConexion();
            String SQL = "SELECT IDServicio, Oficio FROM servicio";
            ResultSet result=MySQL.Listar(SQL);            
            while(result.next()){  
                Servicio s=new Servicio();
                s.setIDServicio(result.getInt("IDServicio"));
                s.setOficio(result.getString("Oficio"));
                List.add(s);
            }            
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return List;
    }
}
