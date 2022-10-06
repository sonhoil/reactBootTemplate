package com.reactboot.template.controller;

import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/test")
public class TestController {

	/**
	 * @param requestMap
	 * @return Map<String, Object>
	 * @throws SQLException
	 * @description Axios test
	 */
	@ResponseBody
	@RequestMapping(value="AxiosTest.do", method=RequestMethod.POST)
	public  Map<String,Object> AxiosTest (HttpServletRequest request,@RequestBody Map<String, Object> paramMap) throws SQLException  {
		System.out.println("paramMap ==>"+ paramMap);
		Map<String,Object> resultMap = new HashMap<String,Object>();
		resultMap.put("java return", "im java");
		return resultMap;
	}
	
}