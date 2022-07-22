/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package miServlet;

import Capa_Datos.NegocioCliente;
import com.google.gson.Gson;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class ControlCliente extends HttpServlet {

    NegocioCliente m=new NegocioCliente();
    
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        int op=Integer.parseInt(request.getParameter("op"));
        if(op==1)ValidarEmail(request, response);
        if(op==2)RegistrarCliente(request, response);
        if(op==3)ActualizarCliente(request, response);
        if(op==4)ObtenerInformacionCliente(request, response);
    }
    
    protected void ValidarEmail(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String Email = request.getParameter("Email");
        int IDCliente=Integer.parseInt(request.getParameter("IDCliente"));
        PrintWriter out = response.getWriter();
        Gson gs=new Gson();
        out.println(gs.toJson(m.ValidarEmail(Email, IDCliente)));        
    }
    
    protected void RegistrarCliente(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String Nombre = request.getParameter("Nombre");
        String Apellido = request.getParameter("Apellido");
        String Telefono = request.getParameter("Telefono");
        String Password = request.getParameter("Password");        
        int TipoDocumento=Integer.parseInt(request.getParameter("TipoDocumento"));
        String NumeroDocumento = request.getParameter("NumeroDocumento");
        String Email = request.getParameter("Email");        
        PrintWriter out = response.getWriter();
        Gson gs=new Gson();
        out.println(gs.toJson(m.RegistrarCliente(Nombre, Apellido, Telefono, Password, TipoDocumento, NumeroDocumento, Email)));        
    }
    
    protected void ActualizarCliente(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        int IDCliente=Integer.parseInt(request.getParameter("IDCliente"));
        String Nombre = request.getParameter("Nombre");
        String Apellido = request.getParameter("Apellido");
        String Telefono = request.getParameter("Telefono");
        String Password = request.getParameter("Password");        
        String Email = request.getParameter("Email");        
        PrintWriter out = response.getWriter();
        Gson gs=new Gson();
        out.println(gs.toJson(m.ActualizarCliente(IDCliente, Nombre, Apellido, Telefono, Password, Email)));        
    }
    
    protected void ObtenerInformacionCliente(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        int IDCliente=Integer.parseInt(request.getParameter("IDCliente"));
        PrintWriter out = response.getWriter();
        Gson gs=new Gson();
        out.println(gs.toJson(m.ObtenerInformacionCliente(IDCliente)));        
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
