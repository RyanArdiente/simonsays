package rest.dao;

import java.io.IOException;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.transaction.annotation.Transactional;

import com.fasterxml.jackson.databind.ObjectMapper;

import rest.pojos.Score;
@Transactional
public class ssDAO
{
	@PersistenceContext
	private EntityManager em;
	
	public List<Score> getAllScores(){
		return em.createNamedQuery("Score.getAllScores").getResultList();
	}
	
	public void createScore(String score){
		ObjectMapper om = new ObjectMapper();
		Score s = null;
		try
		{
			s = om.readValue(score , Score.class);
			em.merge(s);
			em.persist(s);
		} catch (IOException e)
		{
			e.printStackTrace();
			
		}
	}
	
	
}
