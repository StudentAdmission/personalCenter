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

	@RequestMapping(value="/class")
	public ModelAndView classInfo(){
		ModelAndView mv=new ModelAndView();
		mv.setViewName("class");
		return mv;
	}
	@RequestMapping(value="/dormitory")
	public ModelAndView dormitory(){
		ModelAndView mv=new ModelAndView();
		mv.setViewName("dormitory");
		return mv;
	}
	@RequestMapping(value="/notice-box")
	public ModelAndView noticeBox(){
		ModelAndView mv=new ModelAndView();
		mv.setViewName("notice-box");
		return mv;
	}
	@RequestMapping(value="/setting")
	public ModelAndView setting(){
		ModelAndView mv=new ModelAndView();
		mv.setViewName("setting");
		return mv;
	}
}
