/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package miServlet;

import Capa_Datos.NegocioServicioTrabajador;
import com.google.gson.Gson;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author Adrian
 */
public class ControlServicioTrabajador extends HttpServlet {

    NegocioServicioTrabajador m=new NegocioServicioTrabajador();
    
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        int op=Integer.parseInt(request.getParameter("op"));
        if(op==1)ListaServiciosPorTrabajador(request, response);        
        if(op==2)RegistrarServicioPorTrabajador(request, response);        
        if(op==3)ActualizarServicioPorTrabajador(request, response);        
        if(op==4)EliminarServicioPorTrabajador(request, response);        
    }
       
    protected void ListaServiciosPorTrabajador(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        int IDTrabajador = Integer.parseInt(request.getParameter("IDTrabajador"));
        PrintWriter out = response.getWriter();
        Gson gs=new Gson();
        out.println(gs.toJson(m.ListaServiciosPorTrabajador(IDTrabajador)));        
    }
    
    protected void RegistrarServicioPorTrabajador(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        int IDServicio = Integer.parseInt(request.getParameter("IDServicio"));
        int IDTrabajador = Integer.parseInt(request.getParameter("IDTrabajador"));
        String Descripcion = request.getParameter("Descripcion");
        PrintWriter out = response.getWriter();
        Gson gs=new Gson();
        out.println(gs.toJson(m.RegistrarServicioPorTrabajador(IDServicio, IDTrabajador, Descripcion)));        
    }
    
    protected void ActualizarServicioPorTrabajador(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        int IDServicioTrabajador = Integer.parseInt(request.getParameter("IDServicioTrabajador"));
        String Descripcion = request.getParameter("Descripcion");
        PrintWriter out = response.getWriter();
        Gson gs=new Gson();
        out.println(gs.toJson(m.ActualizarServicioPorTrabajador(IDServicioTrabajador, Descripcion)));        
    }
    
    protected void EliminarServicioPorTrabajador(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        int IDServicioTrabajador = Integer.parseInt(request.getParameter("IDServicioTrabajador"));        
        PrintWriter out = response.getWriter();
        Gson gs=new Gson();
        out.println(gs.toJson(m.EliminarServicioPorTrabajador(IDServicioTrabajador)));        
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
