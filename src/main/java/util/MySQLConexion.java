package util;
import java.sql.*;
public class MySQLConexion {
    String driver="com.mysql.jdbc.Driver";
    String url="jdbc:mysql://localhost:3306/bddservijob";
    String user="root";
    String pwd="";
    Connection cn = null;    
    
    public MySQLConexion(){        
        try{
            Class.forName(driver);
            cn = DriverManager.getConnection(url,user,pwd);
            System.out.println("Conexion OK");
        }catch (ClassNotFoundException ex){
            System.out.println("No hay Driver");
        }catch (SQLException ex) { 
            System.out.println("Error con la Base de Datos"); 
        }
    }

    public ResultSet Listar(String cad){
      try{
          PreparedStatement da = cn.prepareStatement(cad);
          ResultSet tbl = da.executeQuery();
          return tbl;
      }catch (Exception e){
          System.out.println(e.getMessage());
          return null;
      }
    }

    public int Ejecutar(String cad){
        int retval = 0;
        try{
            PreparedStatement da = cn.prepareStatement(cad);
            retval = da.executeUpdate();          
        }catch (Exception e){
            System.out.println(e.getMessage());          
        }
        return retval;
    }

    public ResultSet Procedimiento(String cad){
        try{
            CallableStatement da = cn.prepareCall(cad);
            ResultSet tbl = da.executeQuery(cad);
            return tbl;
        }catch (Exception e){
            System.out.println(e.getMessage());
            return null;
        }
    }
}