/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.centrale.prweb.repositories;

import org.centrale.prweb.items.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author muruowang
 */
@Repository
public interface ItemRepository extends JpaRepository<Item, Integer>,ItemCustomRepository {
    //Spring-data-jpa provides save,delete, create
    
}
