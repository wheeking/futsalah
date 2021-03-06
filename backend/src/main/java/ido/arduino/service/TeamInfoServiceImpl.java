package ido.arduino.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ido.arduino.dao.TeamMapper;
import ido.arduino.dto.DeleteFormationDto;
import ido.arduino.dto.Formation;

import ido.arduino.dto.MyTeamDto;
import ido.arduino.dto.ResultDto;
import ido.arduino.dto.TeamInfoDto;
import ido.arduino.dto.TeamInfoSimpleDto;
import ido.arduino.dto.TeamLeaderDTO;
import ido.arduino.dto.TeamLocationDTO;
import ido.arduino.dto.UserTeamConnDto;
import ido.arduino.dto.UserDTO;
import ido.arduino.repo.TeamInfoRepo;

@Service
public class TeamInfoServiceImpl implements TeamInfoService {

	@Autowired
	TeamInfoRepo tRepo;

	@Autowired
	TeamMapper teamMapper;

	// ----------------create team---------------------------
	@Override
	public int insert(TeamInfoDto info) {
		int result = tRepo.insert(info);
		if (result == 1) {
			return tRepo.selectlast();
		} else {
			throw new RuntimeException();
		}
	}

	@Override
	public int checkIfExists(String name) {
		return teamMapper.checkIfExists(name);
	}

	@Override
	public int update(TeamInfoDto info) {
		return tRepo.update(info);
	}

	@Override
	public int delete(int teamID) {
		return tRepo.delete(teamID);
	}

	// ----------------myteam---------------------------
	@Override
	public List<MyTeamDto> selectAllmyteam(int id) {
		return tRepo.selectAllmyteam(id);
	}

	@Override
	public int updatemy(UserDTO userID) {
		return tRepo.updatemy(userID);
	}

	@Override
	public int insertmy(UserTeamConnDto uteam) {
		return tRepo.insertmy(uteam);
	}

	@Override
	public int deletemyteam(UserTeamConnDto uteam) {
		return tRepo.deletemyteam(uteam);
	}

	// ----------------find team---------------------------
	@Override
	public List<TeamInfoSimpleDto> selectAll() {
		return tRepo.selectAll();
	}

	// ----------------team info---------------------------
	@Override
	public List<UserDTO> getAllCrewInfo(int teamID) {
		return teamMapper.getAllCrewInfo(teamID);
	}

	@Override
	public TeamLeaderDTO getTeamLeaderInfo(int teamID) {
		return teamMapper.getTeamLeaderInfo(teamID);
	}

	@Override
	public List<TeamLocationDTO> searchTeamByName(String name, int page) {
		return teamMapper.searchTeamByName(name, page);
	}

	@Override
	public List<TeamLocationDTO> searchTeamByLocation(String gu, int page) {
		return teamMapper.searchTeamByLocation(gu, page);
	}

	@Override
	public List<TeamLocationDTO> searchTeamByBoth(String name, String gu, int page) {
		return teamMapper.searchTeamByBoth(name, gu, page);
	}

	@Override
	public int getNextTeamId() {
		return teamMapper.getNextTeamId();
	}

	@Override
	public TeamInfoDto getTeamInfo(int teamID) {
		return teamMapper.getTeamInfo(teamID);
	}

	@Override
	public int deleteCrew(int teamID, int userID) {

		int formationExistence = teamMapper.checkIfFormationExists(teamID, userID);
		int result;
		if (formationExistence > 0) {
			result = teamMapper.deleteformation2(teamID, userID);
		} else {
			result = 1;
		}
		System.out.println(result);
		int result2 = teamMapper.deleteCrew(teamID, userID);
		if (result >0 && result2 == 1) {
			return 1;
		} else {
			throw new RuntimeException();
		}
	}

	@Override
	public int getNumberOfCrews(int teamID) {
		return teamMapper.getNumberOfCrews(teamID);
	}

	@Override
	public int getNextLeader(int userID, int teamID) {
		return teamMapper.getNextLeader(userID, teamID);
	}

	@Override
	public int updateLeader(int userID, int teamID) {
		return teamMapper.updateLeader(userID, teamID);
	}

	// ----------------formation---------------------------

	@Override
	public int insertformation(Formation form) {
		return tRepo.insertformation(form);
	}

	@Override
	public int updateformation(Formation form) {
		return tRepo.updateformation(form);
	}

	@Override
	public int deleteformation(DeleteFormationDto form) {
		return tRepo.deleteformation(form);
	}

	@Override
	public List<Formation> selectformation(int teamID) {
		return tRepo.selectformation(teamID);

	}

	@Override
	public int checkIfFormationExists(int teamID, int userID) {
		return teamMapper.checkIfFormationExists(teamID, userID);
	}

	// ----------------result game---------------------------

	@Override
	public List<ResultDto> resultscore(int teamID) {
		return tRepo.resultscore(teamID);
	}

}
