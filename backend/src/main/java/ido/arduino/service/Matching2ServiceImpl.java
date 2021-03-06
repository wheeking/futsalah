package ido.arduino.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ido.arduino.dao.Matching2Mapper;
import ido.arduino.dto.CourtDTO;
import ido.arduino.dto.Matching2DTO;

@Service
public class Matching2ServiceImpl implements Matching2Service {	
	@Autowired
	Matching2Mapper mMapper;
	
	@Override
	public List<Matching2DTO> searchScheduledMatch(int stadium) {
		return mMapper.searchScheduledMatch(stadium);
	}
	
	@Override
	public List<CourtDTO> searchCourtByLocation(int location) {
		return mMapper.searchCourtByLocation(location);
	}
}
