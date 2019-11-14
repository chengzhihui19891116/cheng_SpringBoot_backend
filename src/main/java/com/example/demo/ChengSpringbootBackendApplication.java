package com.example.demo;

import java.nio.charset.StandardCharsets;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.client.HttpComponentsClientHttpRequestFactory;
import org.springframework.http.converter.StringHttpMessageConverter;
import org.springframework.web.client.RestTemplate;
@Configuration
@SpringBootApplication(exclude= {DataSourceAutoConfiguration.class})
public class ChengSpringbootBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(ChengSpringbootBackendApplication.class, args);
	}
 
	@Bean
	public RestTemplate restTemplate() {
		  RestTemplate restTemplate = new RestTemplate(new HttpComponentsClientHttpRequestFactory());
	        restTemplate.getMessageConverters().set(1, new StringHttpMessageConverter(StandardCharsets.UTF_8));
	        return restTemplate;
	}
}
