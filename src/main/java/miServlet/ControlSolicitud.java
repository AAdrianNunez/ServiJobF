package miServlet;

import Capa_Datos.NegocioSolicitud;
import com.google.gson.Gson;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class ControlSolicitud extends HttpServlet {

    NegocioSolicitud m=new NegocioSolicitud();
    
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        int op=Integer.parseInt(request.getParameter("op"));
        if(op==1)ListarSolicitudes(request, response);        
        if(op==2)RegistrarSolicitud(request, response);               
        if(op==3)ActualizarSolicitudCliente(request, response);               
        if(op==4)ActualizarSolicitudTrabajador(request, response);               
    }

    protected void ListarSolicitudes(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        int IDTrabajador = Integer.parseInt(request.getParameter("IDTrabajador"));
        PrintWriter out = response.getWriter();
        Gson gs=new Gson();
        out.println(gs.toJson(m.ListarSolicitudes(IDTrabajador)));        
    }
    
    protected void RegistrarSolicitud(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        int IDCliente = Integer.parseInt(request.getParameter("IDCliente"));
        int IDTrabajador = Integer.parseInt(request.getParameter("IDTrabajador"));
        PrintWriter out = response.getWriter();
        Gson gs=new Gson();
        out.println(gs.toJson(m.RegistrarSolicitud(IDCliente, IDTrabajador)));       
    } 
    
    protected void ActualizarSolicitudCliente(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        int IDCliente = Integer.parseInt(request.getParameter("IDCliente"));
        int IDTrabajador = Integer.parseInt(request.getParameter("IDTrabajador"));
        PrintWriter out = response.getWriter();
        Gson gs=new Gson();
        out.println(gs.toJson(m.ActualizarSolicitudCliente(IDCliente, IDTrabajador)));       
    } 
    
    protected void ActualizarSolicitudTrabajador(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        int IDSolicitud = Integer.parseInt(request.getParameter("IDSolicitud"));        
        PrintWriter out = response.getWriter();
        Gson gs=new Gson();
        out.println(gs.toJson(m.ActualizarSolicitudTrabajador(IDSolicitud)));       
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
