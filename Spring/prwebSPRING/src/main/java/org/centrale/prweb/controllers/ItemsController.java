/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.centrale.prweb.controllers;

import java.util.List;
import java.util.Optional;
import javax.servlet.http.HttpServletRequest;
import org.centrale.prweb.items.Item;
import org.centrale.prweb.repositories.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

/**
 *
 * @author muruowang
 */
public class ItemsController {

    // GET method should lead to view index
    // method GET is handled by handleGet
    @RequestMapping(value = "index.do", method = RequestMethod.GET)
    public ModelAndView handleGet() {
        return new ModelAndView("index");
    }

    // POST method 
    @RequestMapping(value = "delete.do", method = RequestMethod.POST)
    public ModelAndView handlePost(HttpServletRequest request) {
        ModelAndView returned;
        String idStr = request.getParameter("id");
        if (idStr != null) {
            int id = Integer.parseInt(idStr);
            // return as Optional<item>
            Optional<Item> item = itemRepository.findById(id);
            if (item.isPresent()) {
                itemRepository.delete(item.get());
                List<Item> listItem = itemRepository.findAll();
                returned = new ModelAndView("auctions");
                returned.addObject("listItems", listItem);
            } else {
                List<Item> listItem = itemRepository.findAll();
                returned = new ModelAndView("auctions");
                returned.addObject("listItems", listItem);
            }
        } else {
            List<Item> listItem = itemRepository.findAll();
            returned = new ModelAndView("auctions");
            returned.addObject("listItems", listItem);
        }
        return returned;
    }

    @Autowired
    private ItemRepository itemRepository;
}
