package com.example.demo.controller;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class helloWorldController {
	@Autowired
	private RestTemplate  restTemplate;
	
	  @RequestMapping(value="/hello")
	    public String index() {
	        return "Hello World";
	    }
	  
	  @RequestMapping(value="/getWeather/{city}",method = RequestMethod.GET)
	  @ResponseBody
	  public String getWeather( @PathVariable String city ,HttpServletResponse response) {
		  String url = "http://wthrcdn.etouch.cn/weather_mini?city=" + city;
		  ResponseEntity<String> weatherEntity =restTemplate.getForEntity(url, String.class);
		  response.setHeader("Access-Control-Allow-Origin", "*");
		  
		  if(200==weatherEntity.getStatusCodeValue()){
	            return weatherEntity.getBody();
	        }else{
	            return "error with code : " + weatherEntity.getStatusCodeValue();
	        }
	  }

}
