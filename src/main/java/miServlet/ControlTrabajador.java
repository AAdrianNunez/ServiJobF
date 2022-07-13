package miServlet;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import Capa_Datos.NegocioTrabajador;
import com.google.gson.Gson;

public class ControlTrabajador extends HttpServlet {
    
    NegocioTrabajador m=new NegocioTrabajador();
    
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        int op=Integer.parseInt(request.getParameter("op"));
        if(op==1)ListaTrabajador(request, response);
        if(op==2)ObtenerInformacionTrabajadorCliente(request, response);        
        if(op==3)PuntajeTrabajador(request, response);
        if(op==4)ListaServiciosPorTrabajador(request, response);        
        if(op==5)ListarComentarioPorTrabajador(request, response);        
        if(op==6)CrearComentario(request, response);  
        if(op==7)RegistrarCalificacion(request, response);  
        if(op==8)RegistrarSolicitud(request, response);  
        if(op==9)RegistrarTrabajador(request, response);
        
    }
    
    protected void ListaTrabajador(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String Filter = request.getParameter("Filter");
        String IDUbigeoDistrito = request.getParameter("IDUbigeoDistrito");
        PrintWriter out = response.getWriter();
        Gson gs=new Gson();
        out.println(gs.toJson(m.ListaTrabajador(Filter, IDUbigeoDistrito)));        
    }
    
    protected void ObtenerInformacionTrabajadorCliente(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        int IDTrabajador = Integer.parseInt(request.getParameter("IDTrabajador"));
        int IDCliente = Integer.parseInt(request.getParameter("IDCliente"));
        PrintWriter out = response.getWriter();
        Gson gs=new Gson();
        out.println(gs.toJson(m.ObtenerInformacionTrabajadorCliente(IDTrabajador, IDCliente)));        
    }
    
    protected void PuntajeTrabajador(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        int IDTrabajador = Integer.parseInt(request.getParameter("IDTrabajador"));
        PrintWriter out = response.getWriter();
        Gson gs=new Gson();
        out.println(gs.toJson(m.PuntajeTrabajador(IDTrabajador)));        
    }
    
    protected void ListaServiciosPorTrabajador(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        int IDTrabajador = Integer.parseInt(request.getParameter("IDTrabajador"));
        PrintWriter out = response.getWriter();
        Gson gs=new Gson();
        out.println(gs.toJson(m.ListaServiciosPorTrabajador(IDTrabajador)));        
    }
    
    protected void ListarComentarioPorTrabajador(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        int IDTrabajador = Integer.parseInt(request.getParameter("IDTrabajador"));
        PrintWriter out = response.getWriter();
        Gson gs=new Gson();
        out.println(gs.toJson(m.ListarComentarioPorTrabajador(IDTrabajador)));        
    }
    protected void CrearComentario(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        int IDCliente = Integer.parseInt(request.getParameter("IDCliente"));
        int IDTrabajador = Integer.parseInt(request.getParameter("IDTrabajador"));
        String Comentario = request.getParameter("Comentario");        
        PrintWriter out = response.getWriter();
        Gson gs=new Gson();
        out.println(gs.toJson(m.CrearComentario(IDCliente, IDTrabajador, Comentario)));        
    }
    protected void RegistrarCalificacion(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        int IDCliente = Integer.parseInt(request.getParameter("IDCliente"));
        int IDTrabajador = Integer.parseInt(request.getParameter("IDTrabajador"));
        int Puntaje = Integer.parseInt(request.getParameter("Puntaje"));
        PrintWriter out = response.getWriter();
        Gson gs=new Gson();
        out.println(gs.toJson(m.RegistrarCalificacion(IDCliente, IDTrabajador, Puntaje)));        
    }
    
    protected void RegistrarSolicitud(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        int IDCliente = Integer.parseInt(request.getParameter("IDCliente"));
        int IDTrabajador = Integer.parseInt(request.getParameter("IDTrabajador"));
        PrintWriter out = response.getWriter();
        Gson gs=new Gson();
        out.println(gs.toJson(m.RegistrarSolicitud(IDCliente, IDTrabajador)));       
    }    
    
    protected void RegistrarTrabajador(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String Nombre = request.getParameter("Nombre");
        String Apellido = request.getParameter("Apellido");
        String Telefono = request.getParameter("Telefono");
        String Password = request.getParameter("Password");        
        int TipoDocumento=Integer.parseInt(request.getParameter("TipoDocumento"));
        String NumeroDocumento = request.getParameter("NumeroDocumento");
        String Email = request.getParameter("Email");
        String Presentacion = request.getParameter("Presentacion");
        String FechaNacimiento = request.getParameter("FechaNacimiento");        
        PrintWriter out = response.getWriter();
        Gson gs=new Gson();
        out.println(gs.toJson(m.RegistrarTrabajador(Nombre, Apellido, Telefono, Password, TipoDocumento, NumeroDocumento, Email,Presentacion, FechaNacimiento)));        
    }    
    
    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
