package com.bistu.supreme.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;


@Controller
public class IndexController {
	@RequestMapping(value="/index")
	public ModelAndView index(){
		ModelAndView mv=new ModelAndView();
		mv.setViewName("index");
		return mv;
	}
	
	@RequestMapping(value="/information")
	public ModelAndView information(){
		ModelAndView mv=new ModelAndView();
		mv.setViewName("information");
		return mv;
	}

}
