package com.example.duke_db;

import com.example.duke_db.Partner;
import com.example.duke_db.PartnerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/partners")
@CrossOrigin(origins = "http://localhost:4200")
public class PartnerController {

    @Autowired
    private PartnerService partnerService;

    @GetMapping
    public List<Partner> getAllPartners() {
        return partnerService.getAllPartners();
    }

    @GetMapping("/{id}")
    public Partner getPartnerById(@PathVariable Long id) {
        return partnerService.getPartnerById(id);
    }

    @PostMapping
    public Partner createPartner(@RequestBody Partner partner) {
        return partnerService.savePartner(partner);
    }

    @PutMapping("/{id}")
    public Partner updateParter(@PathVariable Long id, @RequestBody Partner partner) {
        partner.setId(id);
        return partnerService.savePartner(partner);
    }

    @DeleteMapping("/{id}")
    public void deletePartner(@PathVariable Long id) {
        partnerService.deletePartner(id);
    }
}
