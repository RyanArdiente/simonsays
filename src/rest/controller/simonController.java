package rest.controller;

import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import rest.dao.ssDAO;
import rest.pojos.Score;
@Controller
public class simonController
{
	@Autowired
	public ssDAO ssdao;
	
	@ResponseBody
	@RequestMapping("ping")
	public String ping()
	{
		return "pong";
	}
	@ResponseBody
	@RequestMapping(path="getAllScores", method=RequestMethod.GET)
	public List<Score> getAllScores()
	{
		List<Score> list = ssdao.getAllScores();
		Collections.sort(list, new Score());
		return list;
	}
	@ResponseBody
	@RequestMapping(path="createScore", method=RequestMethod.PUT)
	public void addNewScore(@RequestBody String score){
		ssdao.createScore(score);
	}
	
}
