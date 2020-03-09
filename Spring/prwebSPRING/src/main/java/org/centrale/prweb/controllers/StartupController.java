/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.centrale.prweb.controllers;

import java.util.List;
import javax.servlet.http.HttpServletRequest;
import org.centrale.prweb.items.Item;
import org.centrale.prweb.repositories.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

/**
 *
 * @author ECN
 */
@Controller
public class StartupController {

    //method GET is handled by handleGet
    @RequestMapping(value = "index.do", method = RequestMethod.GET)
    public ModelAndView handleGet() {
        return new ModelAndView("index");
    }

    //method POST is handled by handlePost
    @RequestMapping(value = "index.do", method = RequestMethod.POST)
    public ModelAndView handlePost(@ModelAttribute("User") User anUser) {
        ModelAndView returned;
        if ((anUser.getUser().equals("admin")) && (anUser.getPasswd().equals("who"))) {
            List<Item> listItem = itemRepository.findAll();
            returned = new ModelAndView("auctions");
            returned.addObject("listItems", listItem);
        } else {
            returned = new ModelAndView("index");
        }
        return returned;
    }
    
    @Autowired
    private ItemRepository itemRepository;
}
