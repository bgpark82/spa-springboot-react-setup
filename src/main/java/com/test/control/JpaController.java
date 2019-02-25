package com.test.control;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class JpaController {

	@RequestMapping("/")
	public String index() {
		return "index";
	}
	
}
