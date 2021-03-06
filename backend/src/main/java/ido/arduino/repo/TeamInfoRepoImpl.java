package ido.arduino.repo;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import ido.arduino.dto.DeleteFormationDto;
import ido.arduino.dto.Formation;
import ido.arduino.dto.LocationDto;

import ido.arduino.dto.MyTeamDto;
import ido.arduino.dto.ResultDto;
import ido.arduino.dto.TeamInfoDto;
import ido.arduino.dto.TeamInfoSimpleDto;
import ido.arduino.dto.UserDTO;
import ido.arduino.dto.UserTeamConnDto;

@Repository
public class TeamInfoRepoImpl implements TeamInfoRepo {
	private static String ns = "ido.arduino.mapper.TeamInfoDto.";

	@Autowired
	SqlSessionTemplate template;

	// ----------------create team---------------------------
	@Override
	public int insert(TeamInfoDto info) {
		// 팀 정보 삽입
		return template.insert(ns + "insert", info);
	}

	@Override
	public int update(TeamInfoDto info) {
		return template.update(ns + "update", info);
	}

	@Override
	public int delete(int teamID) {
		return template.delete(ns + "delete", teamID);
	}

	
	
	
	// ----------------find team---------------------------
	@Override
	public List<TeamInfoSimpleDto> selectAll() {
		// 모든 팀 목록
		return template.selectList(ns + "selectAll");
	}


	//----------------my team---------------------------
	@Override
	public List<MyTeamDto> selectAllmyteam(int id) {
		// 나의 팀 목록 받아오기
		return template.selectList(ns + "selectAllmyteam", id);
	}

	@Override
	public int insertmy(UserTeamConnDto uteam) {
		return template.insert(ns + "insertmy", uteam);
	}
	@Override
	public int updatemy(UserDTO userID) {
		return template.update(ns + "updatemy", userID);

	}
	@Override
	public int deletemyteam(UserTeamConnDto uteam) {
		return template.delete(ns+"deletemyteam",uteam);
	}


	@Override
	public int selectlast() {
		return template.selectOne(ns + "selectlast");
	}

	
	
	
	
	//----------------formation---------------------------
	@Override
	public int insertformation(Formation form) {
		return template.insert(ns + "insertformation", form);
	}

	@Override
	public int updateformation(Formation form) {
		return template.update(ns + "updateformation", form);
	}

	@Override
	public int deleteformation(DeleteFormationDto form) {
		return template.delete(ns + "deleteformation", form);
	}

	@Override
	public List<Formation> selectformation(int teamID) {
		return template.selectList(ns+"selectformation", teamID);
	}

	
	//----------------result game---------------------------
	@Override
	public List<ResultDto> resultscore(int teamID) {
		return template.selectList(ns+"resultscore",teamID);
	}


}
