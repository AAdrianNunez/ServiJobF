package Capa_Datos;

import Class.ServicioTrabajador;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;
import util.MySQLConexion;

public class NegocioServicioTrabajador {
    
    public List<ServicioTrabajador> ListaServiciosPorTrabajador(int IDTrabajador){
        List<ServicioTrabajador> List=new ArrayList();
        try{
            MySQLConexion MySQL=new MySQLConexion();
            String SQL = "SELECT ST.IDServicioTrabajador, S.IDServicio, S.Oficio AS Servicio, Descripcion FROM serviciotrabajador ST INNER JOIN servicio S ON ST.IDServicio = S.IDServicio WHERE ST.IDTrabajador=" + IDTrabajador;
            ResultSet result=MySQL.Listar(SQL);            
            while(result.next()){  
                ServicioTrabajador st=new ServicioTrabajador();                
                st.setIDServicioTrabajador(result.getInt("IDServicioTrabajador"));
                st.setIDServicio(result.getInt("IDServicio"));
                st.setServicio(result.getString("Servicio"));
                st.setDescripcion(result.getString("Descripcion"));
                List.add(st);
            }            
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return List;
    }
    
    public int RegistrarServicioPorTrabajador(int IDServicio, int IDTrabajador, String Descripcion){
        ServicioTrabajador s= new ServicioTrabajador();
        MySQLConexion MySQL=new MySQLConexion();
        String cad = "INSERT INTO serviciotrabajador(IDServicio, IDTrabajador, Descripcion) VALUES (" + IDServicio + "," + IDTrabajador + ",'" + Descripcion + "')";
        return MySQL.Ejecutar(cad);
    }
    
    public int ActualizarServicioPorTrabajador(int IDServicioTrabajador, String Descripcion){
        ServicioTrabajador s= new ServicioTrabajador();
        MySQLConexion MySQL=new MySQLConexion();
        String cad = "UPDATE serviciotrabajador SET Descripcion='" + Descripcion + "' WHERE IDServicioTrabajador = " + IDServicioTrabajador;
        return MySQL.Ejecutar(cad);
    }
    
    public int EliminarServicioPorTrabajador(int IDServicioTrabajador){
        ServicioTrabajador s= new ServicioTrabajador();
        MySQLConexion MySQL=new MySQLConexion();
        String cad = "DELETE FROM serviciotrabajador WHERE IDServicioTrabajador = " + IDServicioTrabajador;
        return MySQL.Ejecutar(cad);
    }
}